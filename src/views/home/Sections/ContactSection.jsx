import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText } from '@material-ui/core'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js'

const useStyles = makeStyles(styles)

export const ContactSection = () => {
  const classes = useStyles()
  const FORM_MESSAGE_TIMEOUT = 4000

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setSending] = useState(false)
  const [formError, setFormError] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name === '' || email === '' || message === '' || subject === '') {
      setFormError(true)
      setTimeout(() => setFormError(false), FORM_MESSAGE_TIMEOUT)
      return
    }

    setSending(true)
    setFormError(false)

    try {
      const response = await fetch('https://formspree.io/f/xdakvkzq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      if (response.ok) {
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
        setFormSuccess(true)
        setTimeout(() => setFormSuccess(false), FORM_MESSAGE_TIMEOUT)
      }
    } catch (error) {
      console.log(error)
    }

    setSending(false)
  }

  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <form onSubmit={handleSubmit}>
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
                    name: 'name',
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
                    name: 'email',
                    onChange: (e) => setEmail(e.target.value),
                  }}
                />
              </GridItem>
              <CustomInput
                labelText='Subject'
                id='subject'
                value={subject}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  required: true,
                  name: 'subject',
                  rows: 5,
                  onChange: (e) => setSubject(e.target.value),
                }}
              />
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
                  name: 'message',
                  multiline: true,
                  rows: 5,
                  onChange: (e) => setMessage(e.target.value),
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  color='primary'
                  type='submit'
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
