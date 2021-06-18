import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(styles)

export const AboutUsCard = (props) => {
  const { title, body } = props
  const classes = useStyles()

  return (
    <div>
      <h3 className={classes.title} variant='h5' align='center'>
        {title}
      </h3>
      <body1 className={classes.description}>{body}</body1>
    </div>
  )
}
