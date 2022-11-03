const { googleSearch } = require("./script");

const dbMock = ["catsprofiles.com", "cats.com", "doglover.com", "cheesepuff.com", "disney.com", ""];

it("is a silly test", () => {
  expect("hello").toBe("hello");
});

describe("GOOGLE SEARCH...", () => {
  it("is searching", () => {
    expect(googleSearch("test test", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["doglover.com"]);
    expect(googleSearch("cats", dbMock)).toEqual(["catsprofiles.com", "cats.com"]);
  });

  it("searching google for null, undefined and ''", () => {
    expect(googleSearch("", dbMock)).toEqual(["catsprofiles.com", "cats.com", "doglover.com"]);
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 results", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
