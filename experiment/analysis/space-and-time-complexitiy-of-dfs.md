### Time and Space Complexity in DFS

<iframe src="https://www.youtube.com/embed/_-uU3KdA1Ts" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Space Complexity of DFS

   - [Space complexity](https://courses.cs.northwestern.edu/311/html/space-complexity.html) is a measure of the amount of working storage an algorithm needs. That means how much memory, in the worst case, is needed at any point in the algorithm.
   - Let the length of longest path be m. For each node, you have to store its siblings so that when you have visited all its children, and you come back to a parent node, you know which sibling to explore next. For m nodes down the path, you will have to store b nodes extra for each of the m nodes. So the space complexity here is O(bm).

### Time Complexity of DFS

   - In computer science, the [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) is the computational complexity that describes the amount of time it takes to run an algorithm.
   - Since in the worst case depth-first search has to consider all paths to all possible nodes, the time complexity of depth-first search is O(|E| + |V|) where |V| and |E| is the cardinality of set of vertices and edges respectively.
   - The complexity is this since every vertex and every edge will be explored in the worst case.

