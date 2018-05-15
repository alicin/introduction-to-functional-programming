import * as React from "react";

import { Slide, Heading, Text, List, ListItem } from "spectacle";

import fixit from "make-a-spectacle";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Intro to Functional Programming</Heading>
    </Slide>
    <Slide>
      <Text>If you've made it this far, you know at least a little about functional programming</Text>
    </Slide>
    <Slide>
      <Text>What this isn't</Text>
      <List>
        <ListItem>a Ramda/LoDash workshop</ListItem>
        <ListItem>a codealong project (yet)</ListItem>
      </List>
    </Slide>
    <Slide>
      <Text>What I'm hoping you can take away</Text>
      <List>
        <ListItem>underlying concepts</ListItem>
        <ListItem>a shared context</ListItem>
        <ListItem>a common language</ListItem>
        <ListItem>some brain-candy to chew on</ListItem>
      </List>
    </Slide>
    <Slide>
      <Text>Prepare to get your hands nerdy.</Text>
    </Slide>
  </React.Fragment>
);
