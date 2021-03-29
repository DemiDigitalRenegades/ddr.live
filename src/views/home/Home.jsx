import React from 'react'
import { Container } from '@material-ui/core'

export const Home = () => (
  <div style={{backgroundColor: 'black', minHeight: '100vh'}}>
    <div style={{
      height: '100vh',
      padding: '10%',
    }}>
      <div style={{
        backgroundImage: `url(${require('assets/img/ddrlive-transparent-white.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
      }}/>
    </div>
    <Container>

    </Container>
  </div>
)
