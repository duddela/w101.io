var songsByRehman = [
  { album: "21", name: "Hello" },
  { album: "23", name: "Oh Cheliya" },
  { album: "23", name: "Chikubuku" },
  { album: "23", name: "Priyathama" },
];

songsByRehman.filter((item) => item.album === "23");

var filtered = songsByRehman.filter((item) => item.album === "23");

console.table(filtered);
