import * as React from "react";
import { Slide, Heading, Text, List, ListItem, CodePane, Appear } from "spectacle";
import fixit from "make-a-spectacle";

import {
  closuresExample,
  hofExample,
  curryingExample
} from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Closures</Heading>
        <Appear order={1}><Text>Inner function with access to outer function's variable scope</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={closuresExample}
      />
    </Slide>

    <Slide>
      <Heading>Higher Order Functions</Heading>
      <Appear order={1} align="center"><Text>A function that does one or both of the following</Text></Appear>
      <List>
      <Appear order={2}><ListItem>Takes a function(s) as arguments</ListItem></Appear>
      <Appear order={3}><ListItem>Returns a function</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={hofExample}
      />
    </Slide>

    <Slide>
      <Heading>Currying</Heading>
        <Appear order={1}><Text>The process of converting a function with multiple arguments to a series of higher order functions taking one argument at a time</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={curryingExample}
      />
    </Slide>

    <Slide>
      <Heading>Exercise 1</Heading>
      <Text>Implement map or filter via recursion or reduce</Text>
    </Slide>

    <Slide>
      <Heading>Exercise 2</Heading>
      <Text>Implement reduce</Text>
    </Slide>

    <Slide>
      <Heading>Exercise 3</Heading>
      <Text>Implement auto-curry via tail-recursion</Text>
    </Slide>
  </React.Fragment>
);
