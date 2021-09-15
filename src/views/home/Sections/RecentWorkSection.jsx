import React, { useState, useEffect } from 'react'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import * as queries from '../../../graphql/queries'
import { API } from 'aws-amplify'
import awsvideo from '../../../aws-video-exports'

const useStyles = makeStyles({
  content: {
    border: '1.5px solid #3C4858',
    color: '#999',
    background: '#0c0c0c',
  },
})

const useMaterialStyle = makeStyles(styles)

export const RecentWorkSection = () => {
  const classes = useStyles()
  const materialClasses = useMaterialStyle()
  const [videos, setVideos] = useState()

  const getAssets = async () => {
    const assets = await API.graphql({
      query: queries.listVodAssets,
      authMode: 'API_KEY',
    })
    setVideos(assets.data.listVodAssets.items)
  }

  useEffect(() => {
    getAssets()
  }, [])

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item xs>
        <h2 className={materialClasses.title}>Recent Work</h2>
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={6}>
        {videos &&
          videos.map((item) => (
            <Grid item xs={12} sm={12} md={6}>
              <Card
                className={classes.content}
                variant='outlined'
                key={item.id}>
                <VideoPlayer
                  controls
                  fluid
                  sources={[
                    {
                      src: `https://${awsvideo.awsOutputVideo}/${item.video.id}/${item.video.id}.m3u8`,
                      type: 'application/x-mpegURL',
                    },
                  ]}
                />
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {item.title}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}
