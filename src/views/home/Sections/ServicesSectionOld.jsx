import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const ServicesSection = () => {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Typography variant='h2'>Services</Typography>
      <Typography variant='h5'>Event Production</Typography>
      <Typography variant='body1'>
        Our team has produced more than 35 live events including 14 full-scale
        festivals with acts from around the world, specialty events, and
        fundraisers. Our team handles the entire production process including
        planning your run-of-show, getting live acts technically prepared,
        composing a continuous show, and ensuring consistent branding throughout
        the event.
      </Typography>
      <Typography variant='h5'>Consultation</Typography>
      <Typography variant='body1'>
        Our team has logged nearly 5000 hours of streaming in the past 9 months
        with members having 20+ years or combined music industry, software
        engineering, broadcast engineering, festival, and performing arts
        experience. Our goal is to share that knowledge with your team to help
        elevate your events, realize your vision, and engage your community.
        Some of our standard consultations include: - Advise on how to curate
        and build a community on Twitch - Elevating streams - Production &
        broadcast technology Want to incorporate more interactive elements to
        your twitch channel? Want to raise money for your company or fundraise
        for a foundation? Don't know how to use a green screen? We do many forms
        of consulting and have worked with hundreds of artists.
      </Typography>
      <Typography variant='h5'>Technical Assistance</Typography>
      <Typography variant='body1'>
        We provide technical assistance before, during, and after all of our
        events. To ensure that your team is prepped and ready for a production,
        we have a thorough process to enact adequate preparation on all ends.
      </Typography>
      <Typography variant='h5'>Media Services</Typography>
      <Typography variant='body1'>
        Our team creates unique and interactive 2D stage designs, assets and
        more. We aim to incorporate as many artistic and interactive services
        possible to your events to elevate their appeal and connectivity.
      </Typography>
      <Typography variant='h5'>VJ</Typography>
      <Typography variant='body1'>
        We are able to provide a live VJ for video integration through your
        project, with or without green screen utilization. We have solutions and
        creative enhancements for every setup and production.
      </Typography>
      <Typography variant='h5'>Performing Arts</Typography>
      <Typography variant='body1'>
        We work with performing artists all over the country who are able
        perform in virtual shows. We use green screen technology to fuse
        performers with beautiful visuals and stages. From unique costumes to
        aerialists, we have you covered.
      </Typography>
    </Grid>
  )
}
