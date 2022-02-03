import {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  blackColor,
  whiteColor,
  hexToRgb,
  sm,
  lgDescription,
  description1,
} from "assets/jss/nextjs-material-kit-pro.js";

const features = {
  container,
  mlAuto,
  mrAuto,
  title,
  sm,
  description,
  lgDescription,
  description1,
  features0: {
    textAlign: "center",
    padding: "80px 0",
    backgroundColor: "#bfa78c",
  },
  features1: {
    textAlign: "center",
    padding: "80px 0",
    backgroundColor: "#f1efe3",
  },
  features2: {
    padding: "80px 0",
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "280px",
      margin: "0 auto",
    },
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0",
    },
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px",
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: whiteColor,
    },
    "&:after": {
      background: "rgba(" + hexToRgb(blackColor) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px",
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0",
        },
      },
      "& $gridItem": {
        border: "1px solid rgba(" + hexToRgb(whiteColor) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0",
        },
      },
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "610px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: whiteColor,
      },
    },
  },
  gridContainer: {},
  gridItem: {},
  margin0: {
    margin: "0!important",
  },
  textCenter: {
    textAlign: "center",
  },
  phoneContainer: {
    "& img": {
      width: "100%",
    },
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    // padding: "10px 0 0px",
  },
};

export default features;
