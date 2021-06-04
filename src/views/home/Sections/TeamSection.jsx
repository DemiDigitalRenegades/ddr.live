import React, { useEffect, useState } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import { Container } from '@material-ui/core'
import { TeamCard } from 'components/Card/TeamCard'

import { Storage } from 'aws-amplify'
import YAML from 'yaml'
import fs from 'fs'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.js'

import MeikPic from 'assets/img/faces/Meik.jpg'
import MarkPic from 'assets/img/faces/Mark.jpg'
import LydiaPic from 'assets/img/faces/Lydia.jpg'
import CameronPic from 'assets/img/faces/Cameron.jpg'
import RobPic from 'assets/img/faces/Rob.jpg'
import PaulPic from 'assets/img/faces/Paul.jpg'
import DanPic from 'assets/img/faces/Dan.jpg'

const useStyles = makeStyles(styles)

export const TeamSection = () => {
  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  const [contentJson, setContentJson] = useState(null)

  useEffect(() => {
    async function getJSON() {
      try {
        await Storage.get('TeamSection.json', {
          download: true,
          contentType: 'application/json',
        }).then(async (resp) => {
          const json = await new Response(resp.Body).json()
          console.log(json.TeamSection)
          setContentJson(json.TeamSection)
        })
      } catch (e) {
        console.log('error: ', e)
      }
    }
    getJSON()
  }, [])

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our team</h2>
      <div>
        <GridContainer alignItems='center' justify='center'>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={MeikPic}
                name='Meik'
                title={contentJson?.Meik.title}
                bio={contentJson?.Meik.bio}
                linkedin={contentJson?.Meik.linkedin}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={MarkPic}
                name='Mark'
                title={contentJson?.Mark.title}
                bio={contentJson?.Mark.bio}
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={LydiaPic}
                name='Lydia'
                title={contentJson?.Lydia.title}
                bio={contentJson?.Lydia.bio}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={PaulPic}
                name='Paul'
                title={contentJson?.Paul.title}
                bio={contentJson?.Paul.bio}
                linkedin={contentJson?.Paul.linkedin}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={CameronPic}
                name='Cameron'
                title={contentJson?.Cameron.title}
                bio={contentJson?.Cameron.bio}
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={RobPic}
                name='Rob'
                title={contentJson?.Rob.title}
                bio={contentJson?.Rob.bio}
                github={contentJson?.Rob.github}
                instagram={contentJson?.Rob.instagram}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={DanPic}
                name='Dan'
                title={contentJson?.Dan.title}
                bio={contentJson?.Dan.bio}
              />
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
    </div>
  )
}
