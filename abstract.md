# Introduction to Functional Programming

### Abstract

The purpose of this workshop is to provide a quick ramp-up into problem solving via composition of discreet transformations.
We will cover the drawbacks of shared state, the benefits of referential transparency, composition and application strategies, dealing with collections, concurrency management, and separation of concerns. By the end of the workshop, expect to be able to apply these concepts to JavaScript and have an understanding of how they might be applied to other languages and frameworks.

### Requisite Knowledge

Comfort with procedural/imperative JavaScript skills and familiarity with ES6 features (arrow notation, rest/spread operators) is highly encouraged.

### Format

- ~10 minute intervals of theory/examples, followed by practice or Q&A with live-validation (coding/whiteboarding) as needed
- Effort to be put into enabling discussions and fostering exploration into reasoning, during Q&A
- Open-ended, time-boxed, instructor-guided group refactor exercise, and as time permits, use-case problem solving, plus Q&A

### Outline
(each exercise is optional)

- introduction
- state, drawbacks, and becoming stateless (and caveats)
- reframe: focus on computation and not manipulation
- pure functions, initial composition (LISPish), referential transparency
  - exercise: reduce program to simplest terms (a la Prepack)
- cloning: Array#slice, Object.assign, rest/spread
- avoid nulls; sane defaults, "Identity"
- recursion, A/B recursion, tail recursion
- filter, map, reduce
- closure, higher-order functions, manual curry / partial application
  - exercise: implement map or filter via recursion and/or reduce; talk purity of interface vs purity of implementation (and gotchas)
  - exercise: implement reduce; talk similarity to Redux
  - exercise: implement auto-curry via tail-recursion
- replacing callbacks with CPS, Promise chains
- why (/not) async/await
- higher levels of composition, how to wrap or work within systems
- final exercise: group-led refactor of example code, live
- final exercise: group-driven use-case based live-coding
- outro
- Q&A