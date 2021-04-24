import React from 'react'
import {
  Grid,
  Typography,
  TextField,
  Paper,
  FormControl,
  makeStyles,
} from '@material-ui/core'

export const ContactSection = () => {
  return (
    <Paper>
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
            <Grid container direction='column' spacing={2}>
              <Grid item xs>
                <TextField
                  id='name-contact-input'
                  variant='outlined'
                  label='Name'
                  fullWidth></TextField>
              </Grid>
              <Grid item xs>
                <TextField
                  id='email-contact-input'
                  variant='outlined'
                  label='Email'
                  fullWidth></TextField>
              </Grid>
              <Grid item xs>
                <TextField
                  multiline
                  id='message-contact-input'
                  variant='outlined'
                  label='Message'
                  fullWidth></TextField>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}
