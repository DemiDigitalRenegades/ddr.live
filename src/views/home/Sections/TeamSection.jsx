import React from 'react'
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

import styles from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.js'

import MeikPic from 'assets/img/faces/Meik.jpg'
import MarkPic from 'assets/img/faces/Mark.jpg'
import LydiaPic from 'assets/img/faces/Lydia.jpg'
import CameronPic from 'assets/img/faces/Cameron.jpg'

const useStyles = makeStyles(styles)

export const TeamSection = () => {
  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  return (
    <Container>
      <div className={classes.section}>
        <h2 className={classes.title}>Our team</h2>
        <div>
          <GridContainer justify='center'>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={MeikPic} alt='...' className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Meik
                    <br />
                    <small className={classes.smallTitle}>Co-Founder</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Meik is a Software & Solution Engineer from Buffalo, NY.
                      He's been focused on building strong communities using his
                      technical skills to bridge the gap between artists and
                      fans during the pandemic through broadcast technology. He
                      is a musician, a board-gamer, and k-drama binge-watcher.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color='transparent'
                      className={classes.margin5}>
                      <i className={classes.socials + ' fab fa-twitter'} />
                    </Button>
                    <Button
                      justIcon
                      color='transparent'
                      className={classes.margin5}>
                      <i className={classes.socials + ' fab fa-instagram'} />
                    </Button>
                    <Button
                      justIcon
                      color='transparent'
                      className={classes.margin5}>
                      <i className={classes.socials + ' fab fa-facebook'} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={MarkPic} alt='...' className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Mark
                    <br />
                    <small className={classes.smallTitle}>Co-Founder</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      You may know him by his DJ name, Subset. Mark marries a
                      passion for music and people with his technical
                      background. He's carefully crafted a bandwagon of weirdos
                      for his Twitch streams through countless renegade sets.
                      Outside of his weekly shows, Mark cuddles cats,
                      paddle-boards, and plays Valorant.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color='transparent'
                      className={classes.margin5}>
                      <i className={classes.socials + ' fab fa-twitter'} />
                    </Button>
                    <Button
                      justIcon
                      color='transparent'
                      className={classes.margin5}>
                      <i className={classes.socials + ' fab fa-linkedin'} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={LydiaPic} alt='...' className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Lydia
                  <br />
                  <small className={classes.smallTitle}>
                    Performance Coordinator
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Our resident dance guru - Lydia has been performing most of
                    her life. She is delighted to bring performing artists from
                    all over the country to virtual productions. Lydia also
                    assists with project management and marketing. In her free
                    time, she loves exploring other countries, climbing
                    mountains, and drinking fine wine
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color='transparent'
                    className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button
                    justIcon
                    color='transparent'
                    className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-instagram'} />
                  </Button>
                  <Button
                    justIcon
                    color='transparent'
                    className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-facebook'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={CameronPic} alt='...' className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Cameron
                  <br />
                  <small className={classes.smallTitle}>
                    Engineering Support
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Cameron hails from Canada and has a wide range of experience
                    in audio/visual integration for events. He specializes in
                    tech for sports, corporate events and music festivals. In
                    his free time, he loves snowboarding, camping, and taking
                    his cat Gio on walks.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color='transparent'
                    className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button
                    justIcon
                    color='transparent'
                    className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-instagram'} />
                  </Button>
                  <Button
                    justIcon
                    color='transparent'
                    className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-facebook'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Container>
  )
}
