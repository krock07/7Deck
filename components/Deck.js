import React from "react";
// // nodejs library that concatenates classes
import classNames from "classnames";
// // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// // @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// // core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// // sections for this page
import SectionDescription from "pages-sections/about-us/SectionDescription.js";
import SectionTeam from "pages-sections/about-us/SectionTeam.js";
import SectionAdvisor from "pages-sections/about-us/SectionAdvisor.js";
import SectionServices from "pages-sections/about-us/SectionServices.js";
import SectionOffice from "pages-sections/about-us/SectionOffice.js";
import SectionContact from "pages-sections/about-us/SectionContact.js";
import SectionBlogs from "pages-sections/sections-page/SectionBlogs.js";

import aboutUsStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";
import SectionFeatures from "../pages-sections/sections-page/SectionFeatures";
import Gtm from "../pages-sections/sections-page/Gtm";
import TheTeam from "../pages-sections/sections-page/TheTeam";
import TheAdvisors from "../pages-sections/sections-page/TheAdvisors";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="7th Ave"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/heroSplash.jpg")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            {/* <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
              <h4>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4>
            </GridItem> */}
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
       
    
          <SectionServices />
     
    
          <SectionOffice />
      
     
           <SectionBlogs /> 
          <Gtm /> 
      
       
            <SectionAdvisor />
         
       
            <SectionFeatures />
         
        
   
      </div>
      </div>
      <TheTeam />
      <TheAdvisors />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
      <SectionContact />
      </div>
      </div>



      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.pullupon7th.com"
                    className={classes.block}
                    target="_blank"
                    rel='noreferrer'
                  >
                    7th Ave
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a href="https://www.pullupon7th.com" target="_blank"  rel='noreferrer'>
                👋🏾 hands
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}

