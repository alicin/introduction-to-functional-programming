import * as React from "react";
import { Slide, Heading, Text, CodePane } from "spectacle";
import fixit from "make-a-spectacle";

import { AdderDefinition, AdderUsage } from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Statefulness</Heading>
      <Text>What if your app was really Guy Pearce in Memento?</Text>
    </Slide>
    <Slide>
      <CodePane
        lang="js"
        source={`${AdderDefinition}`}
      />
    </Slide>
    <Slide>
      <CodePane
        lang="js"
        source={`${AdderUsage}`}
      />
    </Slide>
  </React.Fragment>
);
