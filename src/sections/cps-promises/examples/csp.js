const showGetError = () => { /* some code */ };
const showAddError = () => { /* some code */ };
const showResult = () => { /* some code */ };

const eventuallyGetNumber = (onError, onSuccess) =>
  setTimeout(() => onSuccess(Math.ceil(Math.random() * 100)), 500);

const eventuallyAddNumber = (y) => (x, onError, onSuccess) =>
  setTimeout(() => onSuccess(x + y));

eventuallyGetNumber(
  showGetError,
  number => eventuallyAddNumber(5)(
    number,
    showAddError,
    result => showResult(result)));
