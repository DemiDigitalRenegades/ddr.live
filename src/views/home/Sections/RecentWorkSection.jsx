import React from 'react'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DonarooPoster from 'assets/img/recentwork/donaroo.jpg'

const useStyles = makeStyles({
  media: {
    height: 250,
  },
  content: {
    background: 'black',
  },
})

export const RecentWorkSection = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}>
      <Grid item xs>
        <Typography variant='h2'>Past Events</Typography>
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={6}>
        <Grid item xs xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={DonarooPoster}
                title='Donaroo 2021'
              />
              <CardContent className={classes.content}>
                <Typography variant='h5' component='h2' color='primary'>
                  Donaroo 2021
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={DonarooPoster}
                title='Donaroo 2021'
              />
              <CardContent className={classes.content}>
                <Typography variant='h5' component='h2' color='primary'>
                  40 Hour Work Week
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
