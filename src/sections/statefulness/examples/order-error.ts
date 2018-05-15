// the following throws an error:
a.doX();
b.doY();
c.doZ(); // *KABOOOOM*
console.log("I never get here!");

// Why doesn't this throw an error?
a.doX();
c.doZ();
b.doY();
console.log("Done!");
// "Done!"