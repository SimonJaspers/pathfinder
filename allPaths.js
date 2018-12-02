const allPaths = ({ id, edges }, path = [], paths = []) =>
  !edges.length
    ? [...paths, path.concat(id)]
    : edges.reduce(
        (ps, e) => 
          allPaths(e, path.concat(id), ps),
        paths
    );

module.exports = allPaths;
