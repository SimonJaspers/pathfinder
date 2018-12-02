# Pathfinder

Contains some isolated code to later be used in another project, which attempts to determine the state of a chess board based on a tree of potential moves and their likeliness.

## Goal

Given a tree of edges and forks, in which each edge gets a score, rank all paths by likeliness.

## Approach

Not certain. Will try to find out along the way by writing tests first. Probably initially something like:

- Reduce tree to list of all possible orders of edges and their scores
- Reduce each { edge, score } list to a { totalScore, edges } summary

## Questions

- Brute forcing it might run in to performance issues; can we close of parts of the trees when the score gets too low?
