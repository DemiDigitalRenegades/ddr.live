import React, { useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText, TextField } from '@material-ui/core'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js'
import { API } from 'aws-amplify'

const useStyles = makeStyles(styles)

export const ContactSection = () => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    const errorTimeout = setTimeout(() => setFormError(false), 5000)
    return () => {
      clearTimeout(errorTimeout)
    }
  }, formError)

  useEffect(() => {
    const successTimeout = setTimeout(() => setFormSuccess(false, 5000))
    return () => {
      clearTimeout(successTimeout)
    }
  }, formSuccess)

  const handleSubmit = async () => {
    if (name === '' || email === '' || message === '') {
      console.log('Please enter all values. Message not sent.')
      setFormError(true)
    } else {
      setFormError(false)
      const apiName = 'contactEmailerApi'
      const path = '/'
      const payload = {
        body: {
          toEmails: ['robbie.didio@gmail.com'],
          subject: name + ' - ' + email,
          message: message,
        },
      }

      await API.post(apiName, path, payload)
        .then((resp) => {
          console.log(resp)
          console.log('Message Sent')
          clearForm()
          setFormSuccess(true)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    console.log('clearing inputs')
  }

  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Name'
                  id='name'
                  value={name}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    onChange: (e) => setName(e.target.value),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Email'
                  id='email'
                  value={email}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    onChange: (e) => setEmail(e.target.value),
                  }}
                />
              </GridItem>
              <CustomInput
                labelText='Your Message'
                id='message'
                value={message}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  required: true,
                  multiline: true,
                  rows: 5,
                  onChange: (e) => setMessage(e.target.value),
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color='primary' onClick={handleSubmit}>
                  Send Message
                </Button>
                {formError && (
                  <FormHelperText error>Please enter all values</FormHelperText>
                )}
                {formSuccess && (
                  <FormHelperText>Your message was sent!</FormHelperText>
                )}
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  )
}
