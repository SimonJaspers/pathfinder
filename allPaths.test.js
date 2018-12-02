const allPaths = require("./allPaths");

test("returns an empty path list for an empty tree", () => {
  expect(allPaths({})).toEqual([]);
});
