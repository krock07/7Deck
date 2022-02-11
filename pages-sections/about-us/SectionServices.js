import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import iphone from "assets/img/sections/iphone.png";

import servicesStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/servicesStyle.js";
import featuresStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";
const useStyles = makeStyles(featuresStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.features1} name="problem">
      <GridContainer>
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={classes.mlAuto + " " + classes.mrAuto}
        >
          <h2 className={classes.title}>The Problem</h2>
          <small className={classes.sm}>
            The digital experience for the Black community is broken
          </small>
          <h5 className={classes.description}>
            For centuries physical spaces have acted as a beacon for cultures
            and communities. For the Black community, we have always counted on
            these havens to truly lean into ourselves and our community.
          </h5>
          <h5 className={classes.description}>
            Today - in the digital era, it's simply a reality that we live our
            lives more online than offline. But let’s be real… those safe havens
            we have in person are not replicated in today’s digital landscape,
            leaving the Black community underserved and without a place to make
            our own.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            vertical
            // icon={Chat}
            title="1.2B"
            description="Black Diaspora Population
            "
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            vertical
            title="48M"
            description="U.S Black Population"
            iconColor="success"
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            vertical
            title="$50B"
            description="Total Addressable Market*
            "
            iconColor="danger"
          />
        </GridItem>
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={classes.mlAuto + " " + classes.mrAuto}
        >
          <h5 className={classes.lgDescription}>
            Communities and creators want better tools to connect with their
            audiences and make their own space.
          </h5>
        </GridItem>
        <small
          style={{
            fontSize: ".4rem",
            textAlign: "left",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          *Total addressable market was calculated by using figures from
          Deloitte’s technology report for podcasting and radio markets
          <a href="https://www2.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2020/rise-of-audiobooks-podcast-industry.html">
            https://www2.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2020/rise-of-audiobooks-podcast-industry.html
          </a>
          plus passion economy market figures from Signal Fire
          <a href="https://www.signalfire.com/blog/creator-economy/">
            https://www.signalfire.com/blog/creator-economy/
          </a>
        </small>
      </GridContainer>

      {/* solution Section */}
      <div className={classes.features3}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.phoneContainer}>
              <img src={iphone} alt="..." />
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h2 className={classes.title}>The Solution</h2>
            <small className={classes.sm}>
              An emphasis on providing the building blocks
            </small>

            <InfoArea
              className={classes.description1}
              // icon={Extension}
              title="Our offering"
              description="Communities: create a group to make your own"
            />
            <InfoArea
              className={classes.description1}
              // icon={ChildFriendly}
              // title="Easy to Use"
              description="Audio rooms: hang out over audio with as many people as you'd like
              "
            />
            <InfoArea
              className={classes.description1}
              // icon={WatchLater}
              // title="Fast Prototyping"
              description="Chat rooms: full-featured text experience 
              "
            />
            <InfoArea
              className={classes.description1}
              // icon={WatchLater}
              // title="Fast Prototyping"
              description="Q&A: soundbite audio advice and perspectives
 
              "
            />
            <InfoArea
              className={classes.description1}
              // icon={WatchLater}
              // title="Fast Prototyping"
              description="Feed: see what the community is sharing in one place

              "
            />
            <InfoArea
              className={classes.description1}
              // icon={WatchLater}
              // title="Fast Prototyping"
              description="Events: built-in calendar, it's easy to share info, gather RSVPs, and get reminders to hop on
 
              "
            />
            <InfoArea
              className={classes.description1}
              // icon={WatchLater}
              // title="Fast Prototyping"
              description="Community hub: easily see and connect with those in the community
 
              "
            />
            <InfoArea
              className={classes.description1}
              // icon={WatchLater}
              // title="Fast Prototyping"
              description="Data: exportable member list with email and profile information.
 
              "
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
