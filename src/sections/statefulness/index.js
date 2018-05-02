import * as React from "react";
import { Slide, Heading, Text, CodePane } from "spectacle";
import fixit from "make-a-spectacle";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Statefulness</Heading>
      <Text>What if your app was really Guy Pearce in Memento?</Text>
    </Slide>
    <Slide>
      <CodePane
        lang="js"
        source={`
class Adder {
  private a: number = 0;
  private b: number = 0;
  private sum: number = 0;
  setX (x: number) {
    this.a = x;
  }
  setY (y: number) {
    this.b = y;
  }
  add () {
    this.sum = this.a + this.b;
  }
}
      `}
      />
    </Slide>
  </React.Fragment>
);
