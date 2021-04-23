import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import Fingerprint from '@material-ui/icons/Fingerprint'
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent'
import LocalPlayIcon from '@material-ui/icons/LocalPlay'
import BrushIcon from '@material-ui/icons/Brush'
import AlbumIcon from '@material-ui/icons/Album'
import GroupIcon from '@material-ui/icons/Group'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(styles)

export const ServicesSection = () => {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Services</h2>
          <h5 className={classes.description}>
            Our team has logged 5000+ hours of streaming in the past 9 months
            with members having 20+ years combined experience in music, software
            engineering, broadcast engineering, festival, and performing arts
            industries. Our goal is to share this knowledge with your team to
            help elevate your events, realize your vision, and engage your
            community.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Event Production'
              description='Our team has produced more than 35 live events including 14 full-scale
              festivals with acts from around the world, specialty events, and
              fundraisers. Our team handles the entire production process including
              planning your run-of-show, getting live acts technically prepared,
              composing a continuous show, and ensuring consistent branding throughout
              the event.'
              icon={LocalPlayIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Consultation'
              description="Some of our standard consultations include: 
              - Advice on how to curate and build a community on Twitch - Elevating streams - Production &
        broadcast technology Want to incorporate more interactive elements to
        your twitch channel? Want to raise money for your company or fundraise
        for a foundation? Don't know how to use a green screen? We do many forms
        of consulting and have worked with hundreds of artists."
              icon={Chat}
              iconColor='success'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Technical Assistance'
              description='We provide technical assistance before, during, and after all of our
              events. To ensure that your team is prepped and ready for a production,
              we have a thorough process to enact adequate preparation on all ends.'
              icon={SettingsInputComponentIcon}
              iconColor='danger'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Media Services'
              description='Our team creates unique and interactive 2D stage designs, assets and
              more. We aim to incorporate as many artistic and interactive services
              possible to your events to elevate their appeal and connectivity.'
              icon={BrushIcon}
              iconColor='primary'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='VJs'
              description='We are able to provide a live VJ for video integration through your
              project, with or without green screen utilization. We have solutions and
              creative enhancements for every setup and production.'
              icon={AlbumIcon}
              iconColor='danger'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Performing Arts'
              description='We work with performing artists all over the country who are able
              perform in virtual shows. We use green screen technology to fuse
              performers with beautiful visuals and stages. From unique costumes to
              aerialists, we have you covered.'
              icon={GroupIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
