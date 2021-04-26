import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js'

const useStyles = makeStyles(styles)

export const ContactSection = () => {
  const classes = useStyles()

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const API_ENDPOINT = process.env.REACT_APP_CONTACT_EMAIL_API_ENDPOINT

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        toEmails: ['robbie.didio@gmail.com'],
        subject: name + ' - ' + email,
        message: message,
      }),
    }
    fetch(API_ENDPOINT, requestOptions)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        if (resp.statusCode === 200) {
          console.log('Message Sent')
          clearForm()
        } else {
          console.log('Message Not Sent')
        }
      })
  }

  const clearForm = () => {
    setName(null)
    setEmail(null)
    setMessage(null)
  }

  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='Your Name'
                id='name'
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: name,
                  defaultValue: null,
                  required: true,
                  onChange: (e) => setName(e.target.value),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='Your Email'
                id='email'
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: email,
                  defaultValue: null,
                  required: true,
                  onChange: (e) => setEmail(e.target.value),
                }}
              />
            </GridItem>
            <CustomInput
              labelText='Your Message'
              id='message'
              formControlProps={{
                fullWidth: true,
                className: classes.textArea,
              }}
              inputProps={{
                value: message,
                defaultValue: null,
                required: true,
                multiline: true,
                rows: 5,
                onChange: (e) => setMessage(e.target.value),
              }}
            />
            <GridItem xs={12} sm={12} md={4}>
              <Button color='primary' onClick={(e) => handleSubmit(e)}>
                Send Message
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  )
}
