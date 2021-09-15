import React, { useState, useEffect } from 'react'
import uuidv4 from 'uuid/v4'
import { CircularProgress } from '@material-ui/core'
import Amplify, { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import awsvideoconfig from '../../../../aws-video-exports'
import {
  createVodAsset,
  createVideoObject,
} from '../../../../graphql/mutations'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FilePicker from './FilePicker/index'

export const UploadVideo = (props) => {
  const [state, setState] = useState({
    titleVal: '',
    descVal: '',
    dateVal: new Date(),
    groups: [],
    progress: 0,
  })

  useEffect(() => {
    const region = Amplify._config.aws_project_region
    Auth.currentSession().then((data) => {
      const groups = data.idToken.payload['cognito:groups']
      if (groups) {
        setState({ ...state, groups: data.idToken.payload['cognito:groups'] })
      }
    })

    Storage.configure({
      AWSS3: {
        bucket: awsvideoconfig.awsInputVideo,
        region,
        customPrefix: {
          public: '',
        },
      },
    })
  }, [])

  const myCallback = (dataFromChild) => {
    const reader = new FileReader(dataFromChild)
    reader.onload = () => {
      const aud = new Audio(reader.result)
      aud.onloadeddata = () => {
        setState({
          ...state,
          file: dataFromChild,
          fileName: dataFromChild.name,
          duration: aud.duration,
        })
      }
    }
    reader.readAsDataURL(dataFromChild)
  }

  const handleChange = (event) => {
    const { value } = event.target
    const { name } = event.target
    setState({ ...state, [name]: value })
  }

  const handleDateChange = (date) => {
    setState({ ...state, dateVal: date })
    console.log(date)
  }

  const submitFormHandler = (event) => {
    event.preventDefault()
    const uuid = uuidv4()
    const videoObject = {
      input: {
        id: uuid,
      },
    }

    API.graphql(graphqlOperation(createVideoObject, videoObject)).then(
      (response, error) => {
        if (error === undefined) {
          const { titleVal, descVal, dateVal, file, fileName } = state
          const fileExtension = fileName.toLowerCase().split('.')
          const videoAsset = {
            input: {
              title: titleVal,
              description: descVal,
              vodAssetVideoId: uuid,
              broadcastDate: dateVal.toISOString(),
            },
          }
          API.graphql(graphqlOperation(createVodAsset, videoAsset))
          Storage.put(
            `${uuid}.${fileExtension[fileExtension.length - 1]}`,
            file,
            {
              progressCallback(progress) {
                const { loaded, total } = progress
                console.log(`Uploaded: ${progress.loaded}/${progress.total}`)
                setState({
                  ...state,
                  progress: (loaded / total) * 100,
                })
              },
              contentType: 'video/*',
            }
          )
            .then(() => console.log(`Successfully Uploaded: ${uuid}`))
            .catch((err) => console.log(`Error: ${err}`))
        }
      }
    )
  }

  return (
    <form onSubmit={(e) => submitFormHandler(e)}>
      <input
        type='text'
        value={state.titleVal}
        name='titleVal'
        placeholder='Title'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <textarea
        className='desTextA'
        rows='4'
        cols='50'
        value={state.descVal}
        name='descVal'
        placeholder='Description'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <b1 style={{ color: 'black' }}>Broadcast Date</b1>
      <DatePicker
        todayButton='Today'
        selected={state.dateVal}
        maxDate={new Date()}
        onChange={(date) => handleDateChange(date)}
      />
      <br />
      <FilePicker callbackFromParent={myCallback} />
      <label htmlFor='submitButton' className='submitLabel'>
        Create Asset
        <input
          type='submit'
          className='submitButton'
          id='submitButton'
          value='Create Asset'
        />{' '}
        <CircularProgress variant='determinate' progress={state.progress} />
      </label>
    </form>
  )
}
