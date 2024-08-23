import { OnboardingType, FeatureType, Offers } from "./types";

const slides: OnboardingType[] = [
  {
    id: 1,
    image: require("../photos/onboarding1.png"),
    title: "Take a  photo to ",
    bold: " identify\n",
    title2: "the plant",
  },
  {
    id: 2,
    image: require("../photos/onboarding3.png"),
    title: "Get plant",
    bold: "care guides",
  },
  {
    id: 3,
    image: require("../photos/paywall.png"),
  },
];
const features: FeatureType[] = [
  {
    image: require("../photos/featureIcons/unlimited.png"),
    title: "Unlimited",
    subTitle: "Plant Identify",
  },
  {
    image: require("../photos/featureIcons/faster.png"),
    title: "Faster",
    subTitle: "Process",
  },
  {
    image: require("../photos/featureIcons/detailed.png"),
    title: "Detailed",
    subTitle: "Plant care",
  },
];
const offers: Offers[] = [
  {
    id: 1,
    title: "1 Month",
    subTitle: "$2.99/month, auto renewable",
  },
  {
    id: 2,
    title: "1 Year",
    subTitle: "First 3 days free, then $529,99/year",
  },
];

const QUESTION_DATA: string =
  "https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions";

const CATEGORIES_DATA: string =
  "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories";

export { offers, features, slides, QUESTION_DATA, CATEGORIES_DATA };
