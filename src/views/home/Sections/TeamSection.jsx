import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
// import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { TeamCard } from "components/Card/TeamCard";

import { Storage } from "aws-amplify";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import MeikPic from "assets/img/faces/Meik.jpg";
import MarkPic from "assets/img/faces/Mark.jpg";
import LydiaPic from "assets/img/faces/Lydia.jpg";
import CameronPic from "assets/img/faces/Cameron.jpg";
import RobPic from "assets/img/faces/Rob.jpg";
import DanPic from "assets/img/faces/Dan.jpg";

const useStyles = makeStyles(styles);

export const TeamSection = () => {
  const classes = useStyles();
  const [contentJson, setContentJson] = useState(null);

  useEffect(() => {
    async function getJSON() {
      try {
        await Storage.get("TeamSection.json", {
          download: true,
          contentType: "application/json",
        }).then(async (resp) => {
          const json = await new Response(resp.Body).json();
          setContentJson(json.TeamSection);
        });
      } catch (e) {
        console.log("error: ", e);
      }
    }
    getJSON();
  }, []);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our team</h2>
      <div>
        <GridContainer alignItems="center" justify="center">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={MeikPic}
                name={contentJson?.Meik.name}
                title={contentJson?.Meik.title}
                bio={contentJson?.Meik.bio}
                linkedin={contentJson?.Meik.linkedin}
              />
            </GridItem>
{/*             <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={MarkPic}
                name={contentJson?.Mark.name}
                title={contentJson?.Mark.title}
                bio={contentJson?.Mark.bio}
              />
            </GridItem> */}
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={CameronPic}
                name={contentJson?.Cameron.name}
                title={contentJson?.Cameron.title}
                bio={contentJson?.Cameron.bio}
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={LydiaPic}
                name={contentJson?.Lydia.name}
                title={contentJson?.Lydia.title}
                bio={contentJson?.Lydia.bio}
              />
            </GridItem>

          </GridContainer>
          <GridContainer justify="center">
{/*             <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={RobPic}
                name={contentJson?.Rob.name}
                title={contentJson?.Rob.title}
                bio={contentJson?.Rob.bio}
                github={contentJson?.Rob.github}
                instagram={contentJson?.Rob.instagram}
              />
            </GridItem> */}
{/*             <GridItem xs={12} sm={12} md={4}>
              <TeamCard
                pic={DanPic}
                name={contentJson?.Dan.name}
                title={contentJson?.Dan.title}
                bio={contentJson?.Dan.bio}
                instagram={contentJson?.Dan.instagram}
              />
            </GridItem> */}
          </GridContainer>
        </GridContainer>
      </div>
    </div>
  );
};
