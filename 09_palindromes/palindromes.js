const palindromes = function (phrase) {
  const filteredPhrase = phrase.toLowerCase().replace(/[^a-z]/g, "");
  return (
    filteredPhrase
      .split("")
      .reverse()
      .join("") === filteredPhrase);
};

// Do not edit below this line
module.exports = palindromes;
