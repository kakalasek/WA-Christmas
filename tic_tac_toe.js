/* Variable declarations */
const playingField = document.querySelector("#playing-field");

/* Generates the playing field */
const generateField = () => {
  for (i = 0; i < 100; i++) {
    playingField.appendChild(generateNode(i));
  }
};

/* Generates one node of the playing field */
const generateNode = (index) => {
  const node = document.createElement("div");
  node.setAttribute("id", index);
  return node;
};

generateField();
