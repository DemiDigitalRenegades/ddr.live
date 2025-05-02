/*eslint-disable*/
import React, { forwardRef } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import InstagramIcon from '@material-ui/icons/Instagram'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export const HeaderLinks = (props) => {
  const classes = useStyles()
  const {
    executeScroll,
    servicesRef,
    aboutUsRef,
    teamRef,
    contactRef,
    recentWorkRef,
    showVod,
  } = props

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <List className={classes.list}>
      {/* 
      <ListItem className={classes.listItem}>
        <Button
          color='transparent'
          onClick={() => {
            executeScroll(servicesRef)
          }}
          className={classes.navLink}>
          Our Services
        </Button>
      </ListItem>
      */}

      {recentWorkRef && (
        <ListItem className={classes.listItem}>
          <Button
            color='transparent'
            onClick={() => {
              executeScroll(recentWorkRef)
            }}
            className={classes.navLink}>
            VoD Demo
          </Button>
        </ListItem>
      )}

      {/* 
      <ListItem className={classes.listItem}>
        <Button
          color='transparent'
          onClick={() => {
            executeScroll(aboutUsRef)
          }}
          className={classes.navLink}>
          About Us
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color='transparent'
          onClick={() => {
            executeScroll(teamRef)
          }}
          className={classes.navLink}>
          Meet the Team
        </Button>
      </ListItem>
      */}

      <ListItem className={classes.listItem}>
        <Button
          color='transparent'
          onClick={() => {
            executeScroll(contactRef)
          }}
          className={classes.navLink}>
          Contact Us
        </Button>
      </ListItem>

      {showVod && (
        <ListItem className={classes.listItem}>
          <Button
            color='transparent'
            onClick={() => {
              openInNewTab(process.env.REACT_APP_VOD_LINK)
            }}
            className={classes.navLink}>
            VOD
          </Button>
        </ListItem>
      )}

      {/* 
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on Instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color='transparent'
            href='https://www.instagram.com/ddr_live/'
            target='_blank'
            className={classes.navLink}>
            <InstagramIcon />
          </Button>
        </Tooltip>
      </ListItem>
      */}
    </List>
  )
}
