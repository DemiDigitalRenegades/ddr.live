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
import yaml from 'js-yaml'

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
  const [yamlFile, setYaml] = useState(null)

  // useEffect(() => {
  //   async function getYaml() {
  //     try {
  //       const rawYaml = Storage.get(
  //         'https://content125957-dev.s3.us-east-2.amazonaws.com/content.yml'
  //       )
  //       setYaml(yaml.load(rawYaml))
  //       console.log(yamlFile)
  //     } catch (e) {
  //       console.log('error: ', e)
  //     }
  //   }
  //   getYaml()
  // }, [])

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
                title='Co-Founder'
                bio="Meik is a Software & Solution Engineer from Buffalo, NY.
                    He's been focused on building strong communities using his
                    technical skills to bridge the gap between artists and fans
                    during the pandemic through broadcast technology. He is a
                    musician, a board-gamer, and k-drama binge-watcher."
                linkedin='https://www.linkedin.com/in/kenworthym/'
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={MarkPic}
                name='Mark'
                title='Co-Founder'
                bio="You may know him by his DJ name, Subset. Mark marries a
                passion for music and people with his technical background.
                He's carefully crafted a bandwagon of weirdos for his Twitch
                streams through countless renegade sets. Outside of his
                weekly shows, Mark cuddles cats, paddle-boards, and plays
                Valorant."
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={LydiaPic}
                name='Lydia'
                title='Performance Coordinator'
                bio='Our resident dance guru - Lydia has been performing most of
                her life. She is delighted to bring performing artists from
                all over the country to virtual productions. Lydia also
                assists with project management and marketing. In her free
                time, she loves exploring other countries, climbing
                mountains, and drinking fine wine.'
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={PaulPic}
                name='Paul'
                title='Project Manager'
                bio='Paul’s passion for music and fascination with business led
                him to his project manager position at DDR. His years of
                corporate business experience coupled with a commitment to
                improvement constantly pushes him to deliver high quality
                outcomes for his clients. Outside the office Paul enjoys
                traveling, cooking, cocktail mixing, reading, and playing
                games with friends.'
                linkedin='https://www.linkedin.com/in/paul-taylor-657924109/'
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={CameronPic}
                name='Cameron'
                title='Lead Production Engineer'
                bio='Cameron hails from Canada and has a wide range of experience
                in audio/visual integration for events. He specializes in
                tech for sports, corporate events and music festivals. In
                his free time, he loves snowboarding, camping, and taking
                his cat Gio on walks.'
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={RobPic}
                name='Rob'
                title='Front-End Software Engineer'
                bio="Rob is a Software Engineer currently clacking away at his
                keyboard in Melbourne, Australia. His mix of on-air radio
                experience, technical expertise, and complete music nerd-ery
                was a perfect fit for the team here at DDR. He's currently
                pursing a degree at the University of Melbourne while
                catching every gig he can in Melbourne's inner-north. Let us
                know if you need to stream your bush doof."
                github='https://github.com/rob-didio'
                instagram='https://www.instagram.com/robdio'
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={DanPic}
                name='Dan'
                title='Production Engineer'
                bio='Dan has an extensive background for the past decade that’s
                helped shape much of the major live event industry in
                western Canada. His skill set encompasses audio engineering,
                backline technician, stagehand support, live visuals,
                lighting design, stage building, gear repair and transport.
                In his free time he enjoys reading, learning from various
                educational channels on video streaming sites, the odd video
                game and messing around with music production.'
              />
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
    </div>
  )
}
