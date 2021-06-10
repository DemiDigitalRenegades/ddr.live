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
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'
import DonarooPoster from 'assets/img/recentwork/donaroo.jpg'

const useStyles = makeStyles({
  media: {
    height: 250,
  },
  content: {
    background: 'black',
  },
})

const useMaterialStyle = makeStyles(styles)

export const RecentWorkSection = () => {
  const classes = useStyles()
  const materialClasses = useMaterialStyle()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}>
      <Grid item xs>
        <h2 className={materialClasses.title}>Past Events</h2>
      </Grid>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={DonarooPoster}
                title='Donaroo 2021'
              />
              <CardContent className={classes.content}>
                <h3 className={materialClasses.description}>Donaroo 2021</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={DonarooPoster}
                title='Donaroo 2021'
              />
              <CardContent className={classes.content}>
                <h3 className={materialClasses.description}>
                  40 Hour Work Week
                </h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
