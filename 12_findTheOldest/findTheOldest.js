const findTheOldest = function(people) {
  const sortedByAge = people.sort((a, b) => {
    const aYearOfBirth = a.yearOfBirth;
    const aYearOfDeath = "yearOfDeath" in a ? a.yearOfDeath : (new Date).getFullYear();
    const aAge = aYearOfDeath - aYearOfBirth;

    const bYearOfBirth = b.yearOfBirth;
    const bYearOfDeath = "yearOfDeath" in b ? b.yearOfDeath : (new Date).getFullYear();
    const bAge = bYearOfDeath - bYearOfBirth;

    return aAge > bAge ? -1 : 1;
  });

  return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
