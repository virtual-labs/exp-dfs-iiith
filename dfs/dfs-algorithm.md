### Explanation of DFS Algorithm
<iframe src="https://www.youtube.com/embed/EvRTr7_1QAk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Understanding the Depth First Search (DFS) Algorithm

Depth first search (DFS) algorithm starts with the initial node of the graph G, and then goes deeper and deeper until we find the goal node or the node which has no children. The algorithm, then backtracks from the dead end towards the most recent node that is yet to be completely explored.
The data structure which is being used in DFS is stack.

- **STEP 1**: Start by putting any one of the graph's vertices on top of a stack (acts as source node of DFS).
- **STEP 2**: Take the top item of the stack and set its visited as 1.
- **STEP 3**: Create a list of that vertex's adjacent nodes. Add the ones whose visited is 0 to the top of stack.
- **STEP 4**: Keep repeating steps 2 and 3 until the stack is empty.

