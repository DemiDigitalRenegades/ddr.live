import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import imagesStyles from '../../assets/jss/material-kit-react/imagesStyles'

const useStyles = makeStyles(theme => ({
  ...imagesStyles,
  imgMain: {
    padding: '10% 10% 10% 10%'
  }
}))

export const Home = () => {
  const classes = useStyles()

  return (
    <div style={{backgroundColor: '#000000'}}>
      <img
        src={require('assets/img/ddrlive-transparent-white.png')}
        alt='DDR.Live'
        className={`${classes.imgRounded} ${classes.imgFluid} ${classes.imgMain}`}
      />
    </div>
  )
}