import React, { useEffect, useState } from 'react'
import { ButtonBase, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'
import { AboutUsCard } from 'components/Card/AboutUsCard'
import { Storage } from 'aws-amplify'

const useStyles = makeStyles(styles)

export const AboutUsSection = (props) => {
  const classes = useStyles()
  const { scrollRef } = props
  const [contentJson, setContentJson] = useState(null)

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    async function getJSON() {
      try {
        await Storage.get('AboutUsSection.json', {
          download: true,
          contentType: 'application/json',
        }).then(async (resp) => {
          const json = await new Response(resp.Body).json()
          // console.log(json.AboutUsSection)
          setContentJson(json.AboutUsSection)
        })
      } catch (e) {
        console.log('error: ', e)
      }
    }
    getJSON()
  }, [])

  // TODO
  // Add button on "Start today"
  // Move first sentence of Our Story to own section.

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>{contentJson?.SectionTop.title}</h2>
      <Typography className={classes.description}>
        {contentJson?.SectionTop.body}
      </Typography>
      <Grid
        container
        justify='center'
        alignItems='center'
        direction='column'
        spacing={3}>
        <Grid item xs>
          <AboutUsCard
            title={contentJson?.CenterTop.title}
            body={contentJson?.CenterTop.body}
          />
        </Grid>
        <Grid item xs>
          <Grid container justify='center' spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <AboutUsCard
                title={contentJson?.LeftBottom.title}
                body={contentJson?.LeftBottom.body}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ButtonBase
                onClick={() => {
                  executeScroll(scrollRef)
                }}>
                <AboutUsCard
                  title={contentJson?.RightBottom.title}
                  body={contentJson?.RightBottom.body}
                />
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
