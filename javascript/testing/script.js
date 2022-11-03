const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "dogprofiles.com",
  "profilesforcats.com",
  "myfavoritecats.com",
  "mynewfavoritecats.com",
];

exports.googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};
