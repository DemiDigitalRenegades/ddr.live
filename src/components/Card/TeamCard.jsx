import React from 'react'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.js'
const useStyles = makeStyles(styles)

export const TeamCard = (props) => {
  const { pic, name, title, bio, linkedin, instagram, github } = props

  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )

  return (
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        <img src={pic} alt='...' className={imageClasses} />
      </GridItem>
      <h4 className={classes.cardTitle}>
        {name}
        <br />
        <small className={classes.smallTitle}>{title}</small>
      </h4>
      <CardBody>
        <p className={classes.description}>{bio}</p>
      </CardBody>
      <CardFooter className={classes.justifyCenter}>
        {!linkedin == false && (
          <Button
            justIcon
            color='transparent'
            className={classes.margin5}
            onClick={() => {
              window.open(linkedin)
            }}>
            <i className={classes.socials + ' fab fa-linkedin'} />
          </Button>
        )}
        {!github == false && (
          <Button
            justIcon
            color='transparent'
            className={classes.margin5}
            onClick={() => {
              window.open(github)
            }}>
            <i className={classes.socials + ' fab fa-github'} />
          </Button>
        )}
        {!instagram == false && (
          <Button
            justIcon
            color='transparent'
            className={classes.margin5}
            onClick={() => {
              window.open(instagram)
            }}>
            <i className={classes.socials + ' fab fa-instagram'} />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
