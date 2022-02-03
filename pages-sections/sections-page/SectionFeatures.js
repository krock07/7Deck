import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import InfoArea3 from "components/InfoArea/InfoArea3.js";
import InfoArea4 from "components/InfoArea/InfoArea4.js";

import featuresStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bgnine from "assets/img/bgnine.jpg";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features0}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2
                style={{
                  color: "#fee25d",
                  textDecoration: "none",
                  fontWeight: "700",
                  marginTop: "30px",
                  marginBottom: "-2px",
                  minHeight: "32px",
                  fontFamily: `'Poppins', sans-serif;`,
                }}
              >
                Fundraising
              </h2>
              <small style={{ color: "#fee25d", textDecoration: "none" }}>
                $800K SEED extension through a mixture of institutional, angel,
                and crowdfunding
              </small>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea3
                vertical
                title="RAISE FROM VC"
                description="$550K @ $6M CAP
                "
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea3
                vertical
                title="RAISE FROM CROWDFUNDING
                "
                description="$250K @ $10M CAP"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea3
                vertical
                icon={Fingerprint}
                title="PROJECTED CLOSE DATE
                "
                description="MAR 2022"
              />
            </GridItem>
          </GridContainer>
          <GridContainer
            style={{
              marginTop: "50px",
            }}
          >
            {" "}
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2
                style={{
                  color: "#231F14",
                  textDecoration: "none",
                  fontWeight: "700",
                  marginTop: "30px",
                  marginBottom: "-2px",
                  minHeight: "32px",
                  fontFamily: `'Poppins', sans-serif;`,
                }}
              >
                Burn Rate
              </h2>
              <small style={{ color: "#231F14", textDecoration: "none" }}>
                Our objective is to scale the number of communities on the Ave
                within next 18 months
              </small>
            </GridItem>
          </GridContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#231F14",
            }}
          >
            <h3
              style={{
                textAlign: "left",
              }}
            >
              We'll be leveraging capital to:
            </h3>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",

                // alignItems: "center",
                textAlign: "left",
              }}
            >
              <li>
                Support GTM plan for attracting and growing the number of
                communities on platform
              </li>
              <li>
                Continue to enhance product and building tools for community
                leaders
              </li>
              <li>Continue to support team</li>
            </ol>
          </div>
          <GridContainer style={{ display: "flex", justifyContent: "center" }}>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea4
                vertical
                icon={Fingerprint}
                title="ACTUAL BURN RATE
                "
                description="125k/month"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea4
                st
                vertical
                icon={Fingerprint}
                title="PROJECTED 2022 SPEND

                "
                description="1.5 million"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
