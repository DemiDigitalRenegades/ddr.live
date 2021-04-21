import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { AboutUsSection } from './Sections/AboutUsSection'
import { RecentWorkSection } from './Sections/RecentWorkSection'
import { ServicesSection } from './Sections/ServicesSection'
import { ContactSection } from './Sections/ContactSection'
import Footer from 'components/Footer/Footer.js'
import styles from 'assets/jss/material-kit-react/views/landingPage.js'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

export const Home = () => {
  const classes = makeStyles(styles)

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <div
        style={{
          height: '100vh',
          padding: '10%',
        }}>
        <div
          style={{
            backgroundImage: `url(${require('assets/img/ddrlive-transparent-white.png')})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
          }}
        />
      </div>
      <Container>
        <Grid container direction='column' spacing={4}>
          <Grid item xs>
            <AboutUsSection />
          </Grid>
          <Grid item xs>
            <RecentWorkSection />
          </Grid>
          <Grid item xs>
            <ServicesSection />
          </Grid>
          <Grid item xs>
            <ContactSection />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}
