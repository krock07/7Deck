import {
  title,
  description,
  mrAuto,
  mlAuto,
  sm,
} from "assets/jss/nextjs-material-kit-pro.js";
import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";

const imgRaised = imagesStyles.imgRaised;
const rounded = imagesStyles.imgRounded;
const imgFluid = imagesStyles.imgFluid;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  sm,
  textCenter: {
    textAlign: "center!important",
  },
  office: {
    "& img": {
      margin: "20px 0px",
    },
  },
  imgRaised,
  rounded,
  imgFluid,
};

export default servicesStyle;
