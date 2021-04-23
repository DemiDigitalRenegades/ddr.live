import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { AboutUsSection } from './Sections/AboutUsSection'
import { RecentWorkSection } from './Sections/RecentWorkSection'
import { ServicesSection } from './Sections/ServicesSection'
import { ContactSection } from './Sections/ContactSection'
import { TeamSection } from './Sections/TeamSection'

export const Home = () => {
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
      </div>
      <Container>
        <Grid container direction='column'>
          <Grid item xs>
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
          <Grid item xs>
            <ContactSection />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
