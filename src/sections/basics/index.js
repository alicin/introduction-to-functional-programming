import * as React from "react";

import { Slide, Heading, Text, Appear, Code, CodePane, List, ListItem } from "spectacle";

import fixit from "make-a-spectacle";

import { LambdaExpression, LambdaEquivalence } from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>The Basics</Heading>
      <Text>
        The LEGO blocks of knowledge you might have skipped over, on your way to
        Ramda
      </Text>
    </Slide>
    <Slide>
      <Text>Functional Programming is old</Text>
      <Appear>
        <Text>Older than that</Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading>A History in Brief</Heading>
    </Slide>
    <Slide>
      <Text>
        The concepts of Functional Programming go back as far as the 1920s;
        earlier than the Universal Turing Machine, and imperative programming
      </Text>
    </Slide>
    <Slide>
      <Text>
        <b>Lambda (λ) Calculus</b> was developed by Alonzo Church as a
        mathematical language for general computation
      </Text>
    </Slide>
    <Slide>
      <Text>Church was Alan Turing’s professor at Princeton</Text>
    </Slide>
    <Slide>
      <Text>
        Together, they proved that Turing Machines and Lambda Calculus were
        computationally equivalent
      </Text>
      <Text>(ie: “Turing Complete”)</Text>
    </Slide>
    <Slide>
      <Heading>Lambda Calculus</Heading>
    </Slide>
    <Slide>
      <Text>Lambda Calculus has just three concepts:</Text>
      <List>
        <ListItem>Variables</ListItem>
        <ListItem>
          Abstractions (functions)
          <Text margin="0 1.3em"><Code>λ&lt;variable&gt;.&lt;body&gt;</Code></Text>
        </ListItem>
        <ListItem>
          Applications (function invocations)
          <Text margin="0 1.3em">ie: “apply”, not “apps”</Text>
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Code>{LambdaExpression.split("\n")[0]}</Code>
      <Text>which can be shortened to</Text>
      <Code>{LambdaExpression.split("\n")[1]}</Code>
    </Slide>
    <Slide>
      <CodePane lang="js" source={LambdaEquivalence} />
    </Slide>
  </React.Fragment>
);
