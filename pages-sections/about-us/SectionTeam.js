import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js";

import Mac from "assets/img/faces/macL.jpg";
import Black from "assets/img/faces/100Black.jpg";
import BCap from "assets/img/faces/bCapital.jpg";
import Twitter from "assets/img/faces/twitter.jpg";
import BigBoy from "assets/img/faces/bigBoy.jpg";

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team} name="investors">
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Investors</h2>
          <small className={classes.sm}>
            Backed by some of the best rooted in culture
          </small>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="https://macventurecapital.com/" target="_blank">
                <img src={Mac} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>MaC Venture Capital</h4>

              {/* <h6 className={classes.textMuted}>CEO / Co-Founder</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We need to restart the
                human foundation.
              </p> */}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="https://backstagecapital.com/">
                <img src={BCap} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Backstage Capital</h4>
              {/* <h6 className={classes.textMuted}>DESIGNER</h6>
              <p className={classes.cardDescription}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation. And I love you like Kanye loves Kanye.
              </p> */}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="https://blackangels.co/">
                <img src={Black} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>100 Black Angels & Allies</h4>
              {/* <h6 className={classes.textMuted}>Web Developer</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p> */}
            </CardBody>
            {/* <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={Twitter} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Twitter</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={BigBoy} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Big Boy</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            {/* <CardAvatar profile plain>
              <a href="#pablo">
                <img src={BigBoy} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar> */}
            <CardBody plain>
              <h4 className={classes.images}>+6 angel investments</h4>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
