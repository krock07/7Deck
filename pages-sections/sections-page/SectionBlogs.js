import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Timeline.module.css";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import timeline from "assets/img/timeline.png";

const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest} name="roadmap">
      <h2 className={classes.title}>2022 Roadmap</h2>
      <small>Growing the number of communities on the Ave</small>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <section className={styles.timelineWrapper}>
              <div className={styles.middleLine}></div>

              {/* <div className={`${styles.box}  ${styles.boxTop}`}>
                <div className={styles.date}>
                  <p>JAN</p>
                </div>
                <div className={styles.boxContent}>
                  <p>Goal by April: 50 communities</p>
                </div>
              </div> */}

              <div className={`${styles.box} ${styles.boxBottom}`}>
                <div className={styles.date}>
                  <p>OCT</p>
                </div>
                <div className={styles.boxContent}>
                  <p>Goal by 2023: 1930 communities</p>
                </div>
              </div>

              <div className={`${styles.box} ${styles.boxTop}`}>
                <div className={styles.date}>
                  <p>JULY</p>
                </div>
                <div className={styles.boxContent}>
                  <p>Goal by October: 571 communities</p>
                </div>
              </div>

              <div className={`${styles.box} ${styles.boxBottom}`}>
                <div className={styles.date}>
                  <p>APR</p>
                </div>
                <div className={styles.boxContent}>
                  <p>Goal by July: 169 communities</p>
                </div>
              </div>

              <div className={`${styles.box} ${styles.boxTop}`}>
                <div className={styles.date}>
                  <p>JAN</p>
                </div>
                <div className={styles.boxContent}>
                  <p>Goal by April: 50 communities</p>
                </div>
              </div>
            </section>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <Card plain blog className={classes.card4}>
                {/* <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src={timeline} alt="..." />
                  </a>
                </CardHeader> */}
                <CardBody plain>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      We will be launching our community feature in February.
                      Our focus for the year will be targeting specific groups
                      and clubs that have the need to build a digital home to
                      gather, share, & connect online.
                    </a>
                  </h3>
                  <h6 style={{ color: "black", textAlign: "left" }}>
                    Target audience (why?){" "}
                  </h6>
                  <h5 className={classes.description}>
                    <span style={{ color: "black", fontSize: "bold" }}>
                      1. Students -
                    </span>{" "}
                    Students are still relying on groupme & group chats to
                    connect as a community. Students do not find platforms like
                    Slack and Discord to be user friendly, leaving the community
                    underserved.
                  </h5>
                  <h5 className={classes.description}>
                    <span style={{ color: "black", fontSize: "bold" }}>
                      2. Professionals & Creators-
                    </span>{" "}
                    Creators are building communities on platforms where the
                    ways to engage are limited and they do not own their
                    audience.
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}
