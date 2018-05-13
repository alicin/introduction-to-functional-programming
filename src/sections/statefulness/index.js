import * as React from "react";
import { Slide, Heading, Text, CodePane, BlockQuote, Cite } from "spectacle";
import fixit from "make-a-spectacle";

import {
  MergeSort,
  AdderDefinition,
  AdderUsage,
  OrderError,
  OrderResolution
} from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Statefulness</Heading>
      <Text>What if your app was really Guy Pearce in Memento?</Text>
    </Slide>
    <Slide>
      <Text>But really, though...</Text>
    </Slide>
    <Slide>
      <CodePane lang="js" source={MergeSort} textSize="0.7em" />
    </Slide>
    <Slide>
      <CodePane lang="js" source={AdderDefinition} textSize="0.7em" />
    </Slide>
    <Slide>
      <CodePane lang="js" source={AdderUsage} />
    </Slide>
    <Slide>
      <CodePane lang="js" source={OrderError} />
    </Slide>
    <Slide>
      <BlockQuote>
        “Side effects are lies...” “...they are devious and damaging mistruths
        that often result in strange temporal couplings and order dependencies.”
        <Cite>Robert “Uncle Bob” Martin</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <CodePane lang="js" source={OrderResolution} />
    </Slide>
    <Slide>
      <BlockQuote>
        “Okay, but if state is so terrible, how do you save a file, update an
        object, or change colours on a monitor?”
        <Cite>Incredulous Workshop-goer</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Text>State is necessary. Something, somewhere is going to be overwritten.</Text>
    </Slide>
    <Slide>
      <Text>Functional Programming is not about getting rid of state. It’s about pushing state to the outer edges of your system.</Text>
    </Slide>
  </React.Fragment>
);
