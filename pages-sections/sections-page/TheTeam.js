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
import BD from "assets/img/faces/bd.jpg";
import MIN from "assets/img/faces/mn.jpg";
import DJ from "assets/img/faces/dj.jpg";
import JC from "assets/img/faces/jc.jpg";
import KS from "assets/img/faces/ks.jpg";
import DC from "assets/img/faces/dc.jpg";
import KAM from "assets/img/faces/kam.jpg";
import ART from "assets/img/faces/art.jpg";

import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest} name="team">
      {/* Team 1 START */}

      {/* Team 1 END */}
      {/* Team 2 START */}

      {/* Team 2 END */}
      {/* Team 3 START */}

      {/* Team 3 END */}
      {/* Team 4 START */}

      {/* Team 4 END */}
      {/* Team 5 START */}
      <div
        className={classes.team + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div></div>
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
              <h2 className={classes.title}>The Team</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={BD} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Brylan Donaldson</h4>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <p className={classes.description}>Cofounder, CEO</p>
                        <Muted>
                          <h6 className={classes.description}>
                            Affirm and Blavity
                          </h6>
                        </Muted>
                      </div>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={ART} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Arthur Bernier</h4>
                      <Muted>
                        <p className={classes.description}>
                          Head of Engineering
                        </p>
                      </Muted>
                      <h6 className={classes.description}>
                        General Assembly and Blavity
                      </h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={MIN} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Minh Vo</h4>
                      <Muted>
                        <p className={classes.description}>Head of Growth</p>
                      </Muted>
                      <h6 className={classes.description}>
                        Robinhood and Deloitte
                      </h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={DC} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <p className={classes.cardTitle}>Dominic Cobb</p>
                      <Muted>
                        <p className={classes.description}>Software Engineer</p>
                      </Muted>
                      <h6 className={classes.description}>General Assembly</h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={KS} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <p className={classes.cardTitle}>Khoury Smith</p>
                      <Muted>
                        <p className={classes.description}>Software Engineer</p>
                      </Muted>
                      <h6 className={classes.description}>General Assembly</h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={DJ} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <p className={classes.cardTitle}>Diaundra Jones</p>
                      <Muted>
                        <p className={classes.description}>
                          Cofounder, Head of Marketing
                        </p>
                      </Muted>
                      <h6 className={classes.description}>Microsoft</h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={JC} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <p className={classes.cardTitle}>Jaime Coleman</p>
                      <Muted>
                        <p className={classes.description}>Head of Community</p>
                      </Muted>
                      <h6 className={classes.description}>Google</h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={KAM} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <p className={classes.cardTitle}>Kam McCullough</p>
                      <Muted>
                        <p className={classes.description}>Partnership Lead</p>
                      </Muted>
                      <h6 className={classes.description}>Dusse Palooza</h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile2Square} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <p className={classes.cardTitle}>Jadrian Thomas</p>
                      <Muted>
                        <p className={classes.description}>
                          Social Media Marketing
                        </p>
                      </Muted>
                      <h6 className={classes.description}>
                        Kanye Anderson Rudnick
                      </h6>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={3} sm={3}>
              <Card profile plain className={classes.card5}>
                {/* <CardAvatar profile plain>
              <a href="#pablo">
                <img src={BigBoy} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar> */}

                <CardBody plain>
                  <p className={classes.cardTitle}>+8 part time engineers</p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 5 END */}
    </div>
  );
}
