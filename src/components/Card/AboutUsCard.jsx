import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(styles)

export const AboutUsCard = (props) => {
  const { title, body } = props
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.title} variant='h5' align='center'>
        {title}
      </Typography>
      <Typography className={classes.description}>{body}</Typography>
    </div>
  )
}
