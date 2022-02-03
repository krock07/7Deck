import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import styles from "assets/jss/nextjs-material-kit-pro/components/headerStyle.js";

import { animateScroll as scroll, Link as LinkS } from "react-scroll";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, links, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <LinkS to="/" onClick={scrollToTop}>
            <a>
              <svg
                width="71"
                height="67"
                viewBox="0 0 71 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" w-[40px] h-[37.55] lg:w-[63.92px] lg:h-[60px] md:w-[52px] md:h-[48.81px] "
              >
                <path
                  d="M0 11.3628V22.9802H2.12085V17.6746C2.12085 15.8161 3.62749 14.3094 5.48603 14.3094L20.951 14.3094L3.50649 59.9998H12.4675L30.5926 11.3628L0 11.3628Z"
                  fill="white"
                />
                <path
                  d="M23.7518 42.8573C23.4863 42.8573 23.257 42.8 23.0639 42.6853C22.8756 42.5651 22.7283 42.3931 22.6221 42.1692C22.5208 41.9453 22.4701 41.6723 22.4701 41.3501V39.3349H21.8184V38.4093H22.4701V36.9348H23.4838V38.4093H24.5266V39.3349H23.4838V41.2108C23.4838 41.4183 23.5225 41.5794 23.5997 41.6941C23.6769 41.8033 23.7952 41.8579 23.9545 41.8579C24.0366 41.8579 24.1235 41.8443 24.2152 41.817C24.3118 41.7897 24.4035 41.7542 24.4904 41.7105L24.6714 42.5706C24.5459 42.658 24.4059 42.7262 24.2514 42.7754C24.0969 42.83 23.9304 42.8573 23.7518 42.8573Z"
                  fill="white"
                />
                <path
                  d="M25.3411 42.7344V36.6235H26.3548V38.8844C26.4707 38.6987 26.6203 38.554 26.8038 38.4502C26.9872 38.341 27.1972 38.2864 27.4338 38.2864C27.7138 38.2864 27.9576 38.3629 28.1651 38.5158C28.3776 38.6632 28.5417 38.8762 28.6576 39.1547C28.7734 39.4332 28.8313 39.7609 28.8313 40.1377V42.7344H27.8176V40.2852C27.8176 39.9848 27.7572 39.75 27.6365 39.5807C27.5158 39.4059 27.3493 39.3186 27.1369 39.3186C26.9824 39.3186 26.8472 39.3595 26.7314 39.4414C26.6155 39.5179 26.5238 39.6271 26.4562 39.7691C26.3886 39.9111 26.3548 40.0722 26.3548 40.2524V42.7344H25.3411Z"
                  fill="white"
                />
                <path
                  d="M54.8099 54.6915L35.9474 0L30.7373 11.2252L45.3239 53.9936C45.819 55.4455 44.7398 56.9538 43.2059 56.9538H39.6516V59.9999H61.0938L61.045 56.9538H57.9831C56.5511 56.9538 55.2768 56.0453 54.8099 54.6915Z"
                  fill="white"
                />
                <path
                  d="M48.3115 36.6235H31.5936L30.3895 42.8573H48.3115V36.6235Z"
                  fill="white"
                />
                <path
                  d="M45.0947 11.0649H47.0023L49.5643 21.0701L52.089 11.0649H54.0339L50.6116 24.1558H48.5358L45.0947 11.0649Z"
                  fill="white"
                />
                <path
                  d="M57.6765 11.0649H63.9227V12.7481H59.3783V16.4322H62.2957L61.7907 18.0779H59.3783V22.6223H63.8853V24.1558H57.6765V11.0649Z"
                  fill="white"
                />
              </svg>
            </a>
          </LinkS>
        </Button>
        <Hidden smDown implementation="css" className={classes.hidden}>
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
