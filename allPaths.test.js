const allPaths = require("./allPaths");

test("returns a single null path list for an empty tree", () => {
  expect(
    allPaths({
      id: null,
      edges: []
    })
  ).toEqual([[null]]);
});

test("finds one path when no forks", () => {
  const tree = { id: "0", edges: [
      { id: "1", edges: [
          {id: "2", edges: [] }
      ]}
    ]};

  expect(allPaths(tree)).toEqual([["0", "1", "2"]]);
});

test("finds two paths for a simple fork", () => {
  const tree = { id: "0", edges: [
    { id: "A", edges: [] },
    { id: "B", edges: [] }
  ]};

  expect(allPaths(tree)).toEqual([
    ["0", "A"],
    ["0", "B"]
  ]);
});

test("handles dead ends at different depths", () => {
  const tree = { id: "0", edges: [
    { id: "A", edges: [
      { id: "I", edges: [] },
      { id: "II", edges: [] }
    ] },
    { id: "B", edges: [] }
  ]};

  expect(allPaths(tree)).toEqual([
    ["0", "A", "I"],
    ["0", "A", "II"],
    ["0", "B"]
  ]);
})