const allPaths = ({ id, edges }, path = [], paths = []) =>
  edges.length
    ? allPaths(edges[0], path.concat(id), paths)
    : paths.concat([path.concat(id)]);

module.exports = allPaths;
