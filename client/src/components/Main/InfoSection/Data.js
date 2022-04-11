import flask from "../../../images/flask-1.svg";
import map from "../../../images/map.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Safety Training Modules",
  headLine: "IIT Roorkee",
  description:
    "Learn from different safety training modules to get up to date with Indian Safety standards",
  buttonLabel: "Get Started",
  imgStart: false,
  img: flask,
  alt: "person with flask",
  dark: true,
  primary: true,
  darkText: false,
  second: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Anywhere / anytime",
  headLine: "Learning made easier",
  description:
    "You can learn and attempt quizzes from wherever you want at any time so that you don't miss anything",
  buttonLabel: "Get Started",
  imgStart: true,
  img: map,
  alt: "Quiz",
  dark: false,
  primary: false,
  darkText: true,
  second: true,
};

export const homeObjThree = {
  id: "courses",
};
