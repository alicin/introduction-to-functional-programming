const x = a.doX();
const y = b.doY(x);
const z = c.doZ(y);

// or

const z =
  c.doZ(
    b.doY(
      a.doX()));