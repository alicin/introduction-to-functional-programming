import * as React from "react";
import { Slide, Heading, Text, List, ListItem, CodePane, Appear } from "spectacle";
import fixit from "make-a-spectacle";

import {
  cpsExample,
  promisesExample,
} from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Continuation Passing Style</Heading>
      <Appear order={1}><Text>Some text</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={cpsExample}
      />
    </Slide>

    <Slide>
      <Heading>Promises</Heading>
      <Appear order={1} align="center"><Text>Handles and passes your return down the chain</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={promisesExample}
      />
    </Slide>
  </React.Fragment>
);
