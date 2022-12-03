function removeExclamationMarks(s) {
  return s.replace(/[^a-zA-Z0-9\s]/gi, '');
}

console.log(removeExclamationMarks("Hello World!"))//, "Hello World");