import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";

import bg7 from "assets/img/bg7.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile2 from "assets/img/examples/card-profile2.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";
import JI from "assets/img/examples/ji.jpg";
import LW from "assets/img/examples/lw.jpg";
import JM from "assets/img/examples/jm.jpg";
import EJB from "assets/img/examples/ebj.jpg";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}

      {/* Team 1 END */}
      {/* Team 2 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Advisory Board</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={JI} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${JI})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>John Imah</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      {" "}
                      Head of Entertainment & Games Partnerships, Snapchat{" "}
                    </h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={LW} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${LW})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Lisel Welden</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      Former Nike, Lyft & Bleacher Report
                    </h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={JM} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${JM})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Julian Mitchell</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      Former Complex, Forbes, Quantasy
                    </h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={EJB} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${EJB})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Erica Joy Baker</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      Director of Engineering GitHub
                    </h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 2 END */}
      {/* Team 3 START */}

      {/* Team 5 END */}
    </div>
  );
}
