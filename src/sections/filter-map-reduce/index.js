import * as React from "react";
import { Slide, Heading, Text, List, ListItem, CodePane, Appear } from "spectacle";
import fixit from "make-a-spectacle";

import {
  filterExample,
  mapExample,
  reduceExample,
  implementMap,
  implementFilter,
  implementReduce,
  chainedExample,
} from "./examples";

export default fixit(
  <React.Fragment>
    <Slide>
      <Heading>Map, Filter, and Reduce</Heading>
      <List>
        <Appear order={1}><ListItem>Are pure</ListItem></Appear>
        <Appear order={2}><ListItem>Iterates over an array</ListItem></Appear>
        <Appear order={2}><ListItem>Returns new value</ListItem></Appear>
      </List>
    </Slide>

    <Slide>
      <Heading>Map</Heading>
      <Appear order={1} align="center"><Text>{'Transform<A,B>'}</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={mapExample}
      />
    </Slide>

    <Slide>
      <Text>How might we implement map?</Text>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={implementMap}
      />
    </Slide>

    <Slide>
      <Heading>Filter</Heading>
        <Appear order={1}><Text>Filters on predicate</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={filterExample}
      />
    </Slide>

    <Slide>
      <Text>How might we implement filter?</Text>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={implementFilter}
      />
    </Slide>

    <Slide>
      <Heading>Reduce</Heading>
      <Appear order={1}>
        <Text>Reduce values down to a new value</Text>
      </Appear>
      <Appear order={2}><Text align="center flex-end">...or not</Text></Appear>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={reduceExample}
      />
    </Slide>

    <Slide>
      <Text>How could we implement reduce?</Text>
    </Slide>

    <Slide>
      <CodePane
        textSize="0.7em"
        lang="js"
        source={implementReduce}
      />
    </Slide>

    <Slide>
      <Heading>Chaining</Heading>
      <Text>What if you could put these all together?</Text>
    </Slide>

    <Slide>
    <CodePane
        textSize="0.7em"
        lang="js"
        source={chainedExample}
      />
    </Slide>
  </React.Fragment>
);
