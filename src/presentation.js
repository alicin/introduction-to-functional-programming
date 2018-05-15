// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import {
  Intro,
  Outro,
  Statefulness,
  FilterMapReduce,
  Basics,
  Closures,
  CPSPromises,
} from "./sections";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
theme.screen.components.codePane.fontSize = "1.2em";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={333}
        theme={theme}
      >
        {Intro}
        {Statefulness}
        {Basics}
        {FilterMapReduce}
        {Closures}
        {CPSPromises}
        {Outro}
      </Deck>
    );
  }
}
