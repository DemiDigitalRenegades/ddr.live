import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const AboutUsSection = () => {
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      direction='column'
      spacing={3}>
      <Grid item xs>
        <Typography variant='h2'>About Us</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant='h5' align='center'>
          Our Story
        </Typography>
        <Typography variant='body1' align='center'>
          DemiDigitalRenegades came together in the Spring of 2020, when all
          venues and shows shut down due to Covid-19. The creators of this
          company wished to produce one-of-a-kind productions for artists and
          viewers - providing community and artistic outlets for people around
          the world during the pandemic. Our team integrates art, music and
          technology and are continually striving to elevate our craft. Thus
          far, DDR has hosted and produced over 35 live events, including 14
          full scale festivals and 6 fundraisers.
        </Typography>
      </Grid>
      <Grid item xs>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs>
            <Typography variant='h5' align='center'>
              High-Quality Experience
            </Typography>
            <Typography variant='body1' align='center'>
              We have worked with a multitude of artists, labels, and festival
              organizations to make their productions thrive virtually. Our
              events are run remotely and can include acts from around the
              world. We offer professional consultation, management and
              production for virtual shows. We specialize in Twitch productions,
              allowing for fans to build community with their favorite artists.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant='h5' align='center'>
              Start Today
            </Typography>
            <Typography variant='body1' align='center'>
              Have a virtual event or experience that you need help producing?
              Looking for advice on elevating your content or community?
              DemiDigitalRenegades can bring your vision to life. Message us for
              a quote - we will send a response to you as soon as possible.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
