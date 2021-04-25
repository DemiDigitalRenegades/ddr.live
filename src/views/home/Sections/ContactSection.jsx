import React, { useState } from 'react'
import {
  Grid,
  Typography,
  TextField,
  Paper,
  FormControl,
  Button,
} from '@material-ui/core'

export const ContactSection = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSubmit = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        toEmails: ['robbie.didio@gmail.com'],
        subject: name + ' - ' + email,
        message: message,
      }),
    }
    console.log(requestOptions)
    const response = fetch(
      'https://g9iq74nd1j.execute-api.us-east-2.amazonaws.com/default/contactFormEmailer-ddrLive',
      requestOptions
    )
    console.log(response)
  }

  return (
    <Paper elevation={14}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={2}>
        <Grid item xs>
          <Typography variant='h2'>Contact Us</Typography>
        </Grid>
        <Grid item xs>
          <FormControl>
            <Grid container direction='column' alignItems='center' spacing={2}>
              <Grid item xs>
                <TextField
                  id='name-contact-input'
                  variant='outlined'
                  label='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth></TextField>
              </Grid>
              <Grid item xs>
                <TextField
                  id='email-contact-input'
                  variant='outlined'
                  label='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth></TextField>
              </Grid>
              <Grid item xs>
                <TextField
                  multiline
                  id='message-contact-input'
                  variant='outlined'
                  label='Message'
                  value={message}
                  rows={6}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth></TextField>
              </Grid>
              <Grid item xs>
                <Button variant='contained' onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}
