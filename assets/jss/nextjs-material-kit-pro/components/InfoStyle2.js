import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
  sm,
  description1,
  descriptionY,
} from "assets/jss/nextjs-material-kit-pro.js";

const infoStyle2 = {
  descriptionY,

  description1,
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    // padding: "70px 0 30px",
    padding: "0",
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px",
  },
  primary: {
    color: primaryColor[0],
  },
  warning: {
    color: warningColor[0],
  },
  danger: {
    color: dangerColor[0],
  },
  success: {
    color: successColor[0],
  },
  info: {
    color: infoColor[0],
  },
  rose: {
    color: roseColor[0],
  },
  gray: {
    color: grayColor[0],
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem",
  },
  descriptionWrapper: {
    color: grayColor[0],
    overflow: "hidden",
    // textAlign: "left",
  },
  title: {
    ...title,
    // margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    fontSize: "1.25rem",
  },
  sm: {
    color: "#057176",
  },
  description: {
    color: "#057176",
    overflow: "hidden",
    marginTop: "0px",
    // textAlign: "left",

    "& p": {
      color: grayColor[0],
      fontSize: "14px",
    },
  },

  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },
};

export default infoStyle2;
