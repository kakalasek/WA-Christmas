/* Variable declarations */
const playingField = document.querySelector("#playing-field");
let turn = true; // true = circle, false = cross

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
  node.addEventListener("click", () => {
    if (node.children.length == 0) node.appendChild(generateCrossOrCircle());
  });
  return node;
};

/* Generates either cross or circle */
const generateCrossOrCircle = () => {
  const element = document.createElement("div");
  if (turn) {
    element.classList.add("circle");
    turn = !turn;
    return element;
  } else {
    element.classList.add("cross");
    turn = !turn;
    return element;
  }
};

/* Executed when page is loaded */
generateField();
