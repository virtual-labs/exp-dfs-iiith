### An Introduction to DFS Concept

<iframe src="https://www.youtube.com/embed/gcZDwOFEEDw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Definition

- Depth First Search (DFS) is a technique for traversing a finite graph. DFS visits the child vertices before visiting the sibling vertices, and a stack is used in the search process. This algorithm explores as far as possible along each branch before backtracking.
- Here we start traversing from a selected node (source node) and traverse the graph depth-wise by exploring each branch completely before moving to the next branch. We move forward along a path as far as possible, and when no more nodes can be visited along the current path, we backtrack.
- In short:

  1. Move vertically and explore one branch completely (go as deep as possible).
  2. Backtrack when no more nodes are available on the current path.
  3. Move to the next unvisited branch.

### DFS Applications

- **Path Finding and Topological Sorting**

  - DFS is used to find paths between vertices in a graph.
  - Topological sorting of a Directed Acyclic Graph (DAG) uses DFS to order vertices linearly.
  - DFS is particularly useful in scheduling problems where certain tasks must be completed before others.

- **Cycle Detection in Directed Graph**
  Depth First Search is used to detect cycles in directed graphs.<br>
  In directed graphs, DFS can identify back edges which indicate the presence of cycles.

- **Finding Strongly Connected Components**
  DFS is used in algorithms like Kosaraju's algorithm and Tarjan's algorithm to find strongly connected components in directed graphs.

- **Solving Puzzles and Mazes**
  DFS is commonly used to solve puzzles with only one solution, such as mazes and sudoku.<br>
  It explores all possible paths until a solution is found.

- **Finding all nodes within one connected component**
  We can either use Depth First or Breadth First Traversal to find all nodes reachable from a given node.
