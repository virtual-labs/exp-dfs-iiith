var graphs = [
  function () {
    g.addNode("1");
    g.addNode("2");
    g.addNode("3");
    g.addNode("4");
    g.addNode("5");
    g.addNode("6");
    g.addNode("7");
    g.addNode("8");
    g.addEdge("1", "2", 8);
    g.addEdge("2", "1", 20);
    g.addEdge("1", "3", 9);
    g.addEdge("3", "1", 21);
    g.addEdge("1", "4", 10);
    g.addEdge("4", "1", 22);
    g.addEdge("2", "3", 11);
    g.addEdge("3", "2", 23);
    g.addEdge("2", "5", 15);
    g.addEdge("5", "2", 24);
    g.addEdge("3", "6", 16);
    g.addEdge("6", "3", 25);
    g.addEdge("3", "7", 17);
    g.addEdge("7", "3", 26);
    g.addEdge("6", "8", 18);
    g.addEdge("8", "6", 27);
    g.addEdge("7", "8", 19);
    g.addEdge("8", "7", 28);
  },
];

var a = [
  [
    [
      { id: 1, label: " 1" },
      { id: 2, label: " 2" },
      { id: 3, label: " 3" },
      { id: 4, label: " 4" },
      { id: 5, label: " 5" },
      { id: 6, label: " 6" },
      { id: 7, label: " 7" },
      { id: 8, label: " 8" },
    ],
    [
      { from: 1, to: 2, id: "8" },
      { from: 2, to: 1, id: "20" },
      { from: 1, to: 3, id: "9" },
      { from: 3, to: 1, id: "21" },
      { from: 1, to: 4, id: "10" },
      { from: 4, to: 1, id: "22" },
      { from: 2, to: 3, id: "11" },
      { from: 3, to: 2, id: "23" },
      { from: 2, to: 5, id: "15" },
      { from: 5, to: 2, id: "24" },
      { from: 3, to: 6, id: "16" },
      { from: 6, to: 3, id: "25" },
      { from: 3, to: 7, id: "17" },
      { from: 7, to: 3, id: "26" },
      { from: 6, to: 8, id: "18" },
      { from: 8, to: 6, id: "27" },
      { from: 7, to: 8, id: "19" },
      { from: 8, to: 7, id: "28" },
    ],
  ],
];
