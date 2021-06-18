import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'
import { AboutUsCard } from 'components/Card/AboutUsCard'
import { Storage } from 'aws-amplify'

const useStyles = makeStyles(styles)

export const AboutUsSection = () => {
  const classes = useStyles()

  const [contentJson, setContentJson] = useState(null)

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

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About Us</h2>
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
          <Grid container justify='center' alignItems='center' spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <AboutUsCard
                title={contentJson?.LeftBottom.title}
                body={contentJson?.LeftBottom.body}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <AboutUsCard
                title={contentJson?.RightBottom.title}
                body={contentJson?.RightBottom.body}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
