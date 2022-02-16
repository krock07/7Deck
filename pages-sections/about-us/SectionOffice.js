import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoAreaTwo from "components/InfoArea/InfoAreaTwo.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/officeStyle.js";
import featuresStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";
// office
import community from "assets/img/examples/community.png";
import talk from "assets/img/examples/talk.png";
import foryou from "assets/img/examples/foryou.png";
import iphone from "assets/img/sections/iphone.png";
import profile from "assets/img/sections/profile.png";

const useStyles = makeStyles(officeStyle);
const useStyless = makeStyles(featuresStyle);

export default function SectionOffice() {
  const classes = useStyles();
  const classess = useStyles();
  return (
    <>
      <div
        className={classes.office}
        style={{ marginBottom: "150px" }}
        name="product"
      >
        <GridContainer className={classes.textCenter}>
          <GridItem
            md={8}
            sm={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <h2
              style={{
                color: "#98503d",
                textDecoration: "none",
                fontWeight: "700",
                marginTop: "30px",
                marginBottom: "-2px",
                minHeight: "32px",
                fontFamily: `'Poppins', sans-serif;`,
              }}
            >
              Product Experience
            </h2>
            <small style={{ color: "#98503d", textDecoration: "none" }}>
              More organized than Groupme, more user friendly than Discord, and
              more interactive than Clubhouse.
            </small>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className={classNames(
                  // classes.imgRaised,
                  classes.imgFluid,
                  classes.rounded
                )}
                src={community}
                alt="office1"
              />
              <small style={{ color: "#98503d", fontWeight: "bold" }}>
                Easily find, create, and manage your communities.
              </small>
            </div>
          </GridItem>
          <GridItem md={4} sm={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className={classNames(
                  // classes.imgRaised,
                  classes.imgFluid,
                  classes.rounded
                )}
                src={talk}
                alt="office2"
              />
              <small
                style={{
                  color: "#98503d",
                  fontWeight: "bold",
                }}
              >
                More ways to talk with your community.
              </small>
            </div>
          </GridItem>
          <GridItem md={4} sm={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className={classNames(
                  // classes.imgRaised,
                  classes.imgFluid,
                  classes.rounded
                )}
                src={foryou}
                alt="office3"
              />
              <small
                style={{
                  color: "#98503d",
                  fontWeight: "bold",
                }}
              >
                More ways to talk with your community.
              </small>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {/* product */}

      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
          style={{ marginBottom: "50px" }}
        >
          <h2
            style={{
              color: "#98503d",
              textDecoration: "none",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "-2px",
              minHeight: "32px",
              fontFamily: `'Poppins', sans-serif;`,
            }}
          >
            Progress
          </h2>
          <small style={{ color: "#98503d", fontWeight: "bold" }}>
            Raised seed in 2021 to build something people want
          </small>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          {/* <h2 className={classess.title}>The Solution</h2>
              <small className={classess.sm}>
                An emphasis on providing the building blocks
              </small> */}

          <InfoAreaTwo
            // className={classes.descriptionY}
            // icon={Extension}
            title="Here is the proof from public beta since launch in October 2021:"
            description="226% growth in 90 days growing from 500 users in October to 1631 today"
          />
          <InfoAreaTwo
            // icon={ChildFriendly}
            // title="Easy to Use"
            description="• Growing 6% WoW, 14% of total user base actively creates or engages with content on platform weekly
          "
          />
          <InfoAreaTwo
            className={classes.descriptionY}
            // icon={WatchLater}
            // title="Fast Prototyping"
            description=" • 43% retention rate with users opening app 10 times/week and spending 16 minutes/week 
          "
          />
          <InfoAreaTwo
            className={classes.descriptionY}
            // icon={WatchLater}
            // title="Fast Prototyping"
            description=" • Growing 12% WoW, 10% of user base have listened to audio 

          "
          />
          <InfoAreaTwo
            className={classes.descriptionY}
            // icon={WatchLater}
            // title="Fast Prototyping"
            description="• In last 90 days, social + newsletter content reached 73.5k number of people
          "
            descriptionY="           ⁃  IG reaching 57.7K accounts and growing by 10.5% in last 90 days"
          />
          <InfoAreaTwo
            className={classes.descriptionY}
            // icon={WatchLater}
            // title="Fast Prototyping"
            description=" • Activated 257 accounts across 3 in person events

          "
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <div
            className={classes.phoneContainer}
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <img src={profile} alt="..." />
          </div>
        </GridItem>
      </GridContainer>
    </>
  );
}
