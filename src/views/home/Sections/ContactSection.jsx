import React from 'react'
import {
  Grid,
  Typography,
  TextField,
  Paper,
  FormControl,
} from '@material-ui/core'

export const ContactSection = () => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}>
      <Typography variant='h2'>Contact Us</Typography>
      <FormControl>
        <TextField
          id='name-contact-input'
          variant='outlined'
          label='Name'
          fullWidth></TextField>
        <TextField
          id='email-contact-input'
          variant='outlined'
          label='Email'
          fullWidth></TextField>
        <TextField
          id='message-contact-input'
          variant='outlined'
          label='Message'
          fullWidth></TextField>
      </FormControl>
    </Grid>
  )
}
