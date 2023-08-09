module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const openBrackets = [];

  function checkBracket(bracket) {
    const bracketGroup = bracketsConfig.find(it => it.includes(bracket));

    if (bracketGroup[0] === bracketGroup[1]) {
      if (openBrackets.includes(bracketGroup[0])) {
        openBrackets.pop();
      } else {
        openBrackets.push(bracket);
      }
    } else {
      if (bracket === bracketGroup[0]) {
        openBrackets.push(bracket);
      } else if (bracket === bracketGroup[1]) {
        if (
          openBrackets.length &&
          openBrackets[openBrackets.length - 1] === bracketGroup[0]
        ) {
          openBrackets.pop();
        }
      }
    }
  }

  for (let s of str) {
    checkBracket(s);
  }

  return !openBrackets.length;
};
