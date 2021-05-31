import React, { useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText } from '@material-ui/core'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js'
import { API } from 'aws-amplify'

const useStyles = makeStyles(styles)

export const ContactSection = () => {
  const classes = useStyles()
  const FORM_MESSAGE_TIMEOUT = 4000

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setSending] = useState(false)
  const [formError, setFormError] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const handleSubmit = async () => {
    if (name === '' || email === '' || message === '') {
      console.log('Please enter all values. Message not sent.')
      setFormError(true)
    } else {
      setSending(true)
      setFormError(false)
      const apiName = 'contactEmailerApi'
      const path = '/'
      const payload = {
        body: {
          toEmails: ['contact@ddr.live'],
          subject: name + ' - ' + email,
          message: message,
        },
      }

      await API.post(apiName, path, payload)
        .then((resp) => {
          console.log(resp)
          console.log('Message Sent')
          clearForm()
          setFormSuccess(true)
        })
        .catch((error) => {
          console.log(error.response)
        })
      setSending(false)
    }
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    console.log('clearing inputs')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormError(false)
    }, FORM_MESSAGE_TIMEOUT)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormSuccess(false)
    }, FORM_MESSAGE_TIMEOUT)
    return () => clearTimeout(timer)
  })

  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Let's get your production off the ground! Drop us a line and we'll
            get back you ASAP. Be it a price quote, an in-depth technical
            question, or just a quick contact exchange, this form will have you
            covered.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Name'
                  id='name'
                  value={name}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    onChange: (e) => setName(e.target.value),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Email'
                  id='email'
                  value={email}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    onChange: (e) => setEmail(e.target.value),
                  }}
                />
              </GridItem>
              <CustomInput
                labelText='Your Message'
                id='message'
                value={message}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  required: true,
                  multiline: true,
                  rows: 5,
                  onChange: (e) => setMessage(e.target.value),
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  color='primary'
                  onClick={handleSubmit}
                  disabled={isSending}>
                  Send Message
                </Button>
                {formError && (
                  <FormHelperText error>Please fill every box!</FormHelperText>
                )}
                {formSuccess && (
                  <FormHelperText style={{ color: 'green' }}>
                    Your message was sent!
                  </FormHelperText>
                )}
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  )
}
