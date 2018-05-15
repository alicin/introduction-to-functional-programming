import * as React from "react";

import { Slide, Heading, Text, Appear, Code, CodePane, List, ListItem } from "spectacle";

import fixit from "make-a-spectacle";

import { LambdaExpression, LambdaEquivalence, ScopingExamples } from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>The Basics</Heading>
      <Text>
        LEGO blocks of knowledge you might have skipped over, on your way to
        Ramda
      </Text>
    </Slide>
    <Slide>
      <Text>What makes code Functional?</Text>
      <List>
        <Appear><ListItem>logic is predominantly functions</ListItem></Appear>
        <Appear><ListItem>pure (causes no side-effects)</ListItem></Appear>
        <Appear><ListItem>deterministic (idempotent)</ListItem></Appear>
      </List>
    </Slide>
    <Slide>
      <Appear><Text>Is this functional?</Text></Appear>
      <Code>2 + 2</Code>
      <Appear><Text>Absolutely!</Text></Appear>
    </Slide>
    <Slide>
      <Code>(+ 2 2 3 4 5)</Code>
      <Appear><Text>Better</Text></Appear>
    </Slide>
    <Slide>
      <Heading>Lisp and friends</Heading>
      <Code>(((((((*code goes here*)))))))</Code>
    </Slide>
    <Slide>
      <Text>Turns out, there aren't that many parentheses</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={`(add 1 (add 2 (max 3 4 5 6)))`} />
      <Text>versus</Text>
      <CodePane lang="js" source={`add(1, add(2, max(3, 4, 5, 6)))`} />
      <Appear><Text>PS: JS was based on a Lisp (Scheme)</Text></Appear>
    </Slide>
    <Slide>
      <Text>Even this simple form offers some powerful FP features</Text>
    </Slide>
    <Slide>
      <Heading>“Referencial Transparency”</Heading>
    </Slide>
    <Slide>
      <Text>Any pure function <Code>f(x)</Code> can be replaced by the return of <Code>f(x)</Code></Text>
      <Appear><Text><Code>1 + 3 * 2</Code> -> <Code>1 + 6</Code> -> <Code>7</Code></Text></Appear>
      <Appear><Text><Code>(1 + 3) * 2</Code> -> <Code>4 * 2</Code> -> <Code>8</Code></Text></Appear>
    </Slide>
    <Slide>
      <Text>This really is as simple as it seems</Text>
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
        <Appear>
          <ListItem>
            Variables (either “bound” or “free”)
            <Text margin="0 1.3em">
              ie: either in-scope or “outer” scope
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Abstractions (functions)
            <Text margin="0 1.3em">
              <Code>λ&lt;variable&gt;.&lt;body&gt;</Code>
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Applications (function invocations)
            <Text margin="0 1.3em">ie: “apply”, not “apps”</Text>
          </ListItem>
        </Appear>
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
    <Slide>
      <Code>{ScopingExamples.split("\n")[0]}</Code>
      <Text>In this example, `y` is “bound”;</Text>
      <Text>the others are “free”</Text>
    </Slide>
    <Slide>
      <Code>{ScopingExamples.split("\n")[1]}</Code>
      <Text>Here, `x` and `y` are both “bound”</Text>
    </Slide>
    <Slide>
      <Code>{ScopingExamples.split("\n")[2]}</Code>
      <Text>Here, everything is bound.</Text>
    </Slide>
  </React.Fragment>
);
