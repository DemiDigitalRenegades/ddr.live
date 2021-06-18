import React, { useState, useEffect } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { Storage } from 'aws-amplify'

// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
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
  const [contentJson, setContentJson] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    async function getJSON() {
      try {
        await Storage.get('ServicesSection.json', {
          download: true,
          contentType: 'application/json',
        }).then(async (resp) => {
          const json = await new Response(resp.Body).json()
          // console.log(json.AboutUsSection)
          setContentJson(json.ServicesSection)
        })
      } catch (e) {
        console.log('error: ', e)
      }
    }
    getJSON()
  }, [])

  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{contentJson?.SectionTop.title}</h2>
          <h5 className={classes.description}>
            {contentJson?.SectionTop.body}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={contentJson?.Cards.Row1.Card1.title}
              description={contentJson?.Cards.Row1.Card1.body}
              icon={LocalPlayIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={contentJson?.Cards.Row1.Card2.title}
              description={contentJson?.Cards.Row1.Card2.body}
              icon={Chat}
              iconColor='success'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={contentJson?.Cards.Row1.Card3.title}
              description={contentJson?.Cards.Row1.Card3.body}
              icon={SettingsInputComponentIcon}
              iconColor='danger'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={contentJson?.Cards.Row2.Card1.title}
              description={contentJson?.Cards.Row2.Card1.body}
              icon={BrushIcon}
              iconColor='primary'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={contentJson?.Cards.Row2.Card2.title}
              description={contentJson?.Cards.Row2.Card2.body}
              icon={AlbumIcon}
              iconColor='danger'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={contentJson?.Cards.Row2.Card3.title}
              description={contentJson?.Cards.Row2.Card3.body}
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
