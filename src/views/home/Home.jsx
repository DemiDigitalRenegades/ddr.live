import React, { useRef } from 'react'
import { Container, Grid, IconButton, Hidden } from '@material-ui/core'
import { AboutUsSection } from './Sections/AboutUsSection'
import { RecentWorkSection } from './Sections/RecentWorkSection'
import { ServicesSection } from './Sections/ServicesSection'
import { ContactSection } from './Sections/ContactSection'
import { WorkSection } from './Sections/WorkSection'
import { TeamSection } from './Sections/TeamSection'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const Home = () => {
  const servicesRef = useRef(null)
  const contactRef = useRef(null)

  const executeScroll = () =>
    servicesRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <div>
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
        <Hidden smDown>
          <br></br>
          <Grid container justify='center' alignItems='center'>
            <IconButton color='primary' onClick={executeScroll}>
              <ExpandMoreIcon /> Scroll <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </div>

      <Container>
        <Grid container direction='column'>
          <Grid item xs ref={servicesRef}>
            <ServicesSection />
          </Grid>
          <Grid item xs>
            <RecentWorkSection />
          </Grid>
          <Grid item xs>
            <AboutUsSection />
          </Grid>
          <Grid item xs>
            <TeamSection />
          </Grid>
          <Grid item xs ref={contactRef}>
            <WorkSection />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
