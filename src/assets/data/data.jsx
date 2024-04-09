import img1 from "../images2/image1.avif";
import img2 from "../images2/image2.avif";
import img3 from "../images2/image3.avif";
import img4 from "../images2/image4.avif";
import img5 from "../images2/image5.avif";
import img6 from "../images2/image6.avif";
import img7 from "../images2/image7.avif";
import img8 from "../images2/image8.avif";
import img9 from "../images2/image9.avif";

import charger1 from "../images2/charger1.jpg";
import charger2 from "../images2/charger2.jpg";
import charger3 from "../images2/charger3.jpg";

import icon1 from "../images/icon1.svg";
import icon1c from "../images/icon1 copy.svg";
import icon2 from "../images/icon2.svg";
import icon2c from "../images/icon2 copy.svg";
import icon3 from "../images/icon3.svg";
import icon3c from "../images/icon3 copy.svg";

export const photo = [
  {src:charger1 , head:"Charging" , sub:"Learn"},
  {src:charger2 , head:"Home Charging" , sub:"Learn"},
  {src:charger3 , head:"Supercharging" , sub:"Learn"}
];




export const arr = [
  {
    img: img1,
    heading: "Model Y",
    price: "From $37,490*",
    tax: "After Federal Tax Credit",
    btn1: "Shop Available",
    btn2: "Demo Drive",
    para: "*Price before incentives is $44,990, excluding taxes and fees. Subject to change.",
  },

  {
    img: img2,
    heading: "Model 3",
    price: "Lease starting at $329/mo*",
    tax: "Reengineered",
    btn1: "Custom Order",
    btn2: "Demo Drive",
    para: "*Excludes taxes and fees with price subject to change. Available in select states.",
  },

  {
    img: img3,
    heading: "Model X",
    price: "From $68,590*",
    tax: "After Federal Tax Credit & Est. Gas Savings",
    btn1: "Custom Order",
    btn2: "Demo Drive",
    para: "*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.",
  },

  {
    img: img4,
    heading: "Model S",
    price: "From $71,090*",
    tax: "After Est. Gas Savings",
    btn1: "Custom Order",
    btn2: "Demo Drive",
    para: "*Price before savings is $74,990, excluding taxes and fees. Subject to change.",
  },

  {
    img: img5,
    heading: "",
    price: "",
    tax: "",
    btn1: "Order Now",
    btn2: "Learn More",
    para: "",
  },

  {
    img: img6,
    heading: "Solar Panels",
    price: "Schedule a Virtual Consultation",
    tax: "",
    btn1: "Order Now",
    btn2: "Learn More",
    para: "",
  },

  {
    img: img7,
    heading: "Solar Roof",
    price: "",
    tax: "Produce Clean Energy From Your Roof",
    btn1: "Order Now",
    btn2: "Learn More",
    para: "",
  },

  {
    img: img8,
    heading: "Powerwall",
    price: "",
    tax: "",
    btn1: "Order Now",
    btn2: "Learn More",
    para: "",
  },

  {
    img: img9,
    heading: "Accessories",
    price: "",
    tax: "",
    btn1: "Shop Now",
    btn2: "Learn More",
    para: "Tesla © 2024 Privacy & Legal Vehicle Recalls Contact News Get Updates Locations",
  },
];

export const list = [
  { li: "Vehicles", path: "/vehicles" },
  { li: "Energy", path: "/energy" },
  { li: "Charging", path: "/charging" },
  { li: "Discover", path: "/discover" },
  { li: "Shop", path: "/shop" },
];

export const icons = [{ i: icon1 }, { i: icon2 }, { i: icon3 }];
export const copy = [{ i: icon1c }, { i: icon2c }, { i: icon3c }];

export const upper = [
  { up: "Vehicles", to: "/vehicles" },
  { up: "Energy", to: "/energy" },
  { up: "Charging", to: "/charging" },
  { up: "Discover", to: "/discover" },
];

export const center = [{ ce: "Shop" }, { ce: "Support" }];

export const charge = [
  "Help Me Charge",
  "Charging Calculator",
  "Trip Planner",
  "Charging With NACS",
  "Supercharger Voting",
  "Host a Supercharger",
  "Commercial Charging",
  "Host Wall Connectors",
];
