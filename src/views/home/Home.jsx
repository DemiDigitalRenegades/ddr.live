import React, { useRef } from 'react'
import { Container, Grid, IconButton, Hidden, Slide } from '@material-ui/core'
import Header from 'components/Header/Header'
import { HeaderLinks } from 'components/Header/HeaderLinks'
import { AboutUsSection } from './Sections/AboutUsSection'
// import { RecentWorkSection } from './Sections/RecentWorkSection'
import { ServicesSection } from './Sections/ServicesSection'
import { ContactSection } from './Sections/ContactSection'
import { TeamSection } from './Sections/TeamSection'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const Home = () => {
  const landPageRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutUsRef = useRef(null)
  // const recentWorkRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <Container>
      <Header
        color='transparent'
        brand='DDR.Live'
        dense
        fixed
        executeScroll={executeScroll}
        landPageRef={landPageRef}
        rightLinks={
          <HeaderLinks
            executeScroll={executeScroll}
            servicesRef={servicesRef}
            aboutUsRef={aboutUsRef}
            teamRef={teamRef}
            contactRef={contactRef}
          />
        }
      />
      <Container
        style={{
          height: '100vh',
          padding: '10%',
        }}
        ref={landPageRef}>
        <div
          style={{
            backgroundImage: `url(${require('assets/img/ddrlive-transparent-white.png')})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
          }}></div>
        <Hidden smDown>
          <br></br>
          <Grid container justify='center' alignItems='center'>
            <IconButton
              color='primary'
              onClick={() => executeScroll(servicesRef)}>
              <Slide in direction={'up'} timeout={{ enter: 2000 }}>
                <ExpandMoreIcon fontSize='large' />
              </Slide>
            </IconButton>
          </Grid>
        </Hidden>
      </Container>

      <Container>
        <Grid container direction='column'>
          <Grid item xs ref={servicesRef}>
            <ServicesSection />
          </Grid>
          {/* <Grid item xs>
            <RecentWorkSection />
          </Grid> */}
          <Grid item xs ref={aboutUsRef}>
            <AboutUsSection />
          </Grid>
          <Grid item xs ref={teamRef}>
            <TeamSection />
          </Grid>
          <Grid item xs ref={contactRef}>
            <ContactSection />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
