/* Variable declarations */
const playingField = document.querySelector("#playing-field");
let turn = true; // true = circle, false = cross
let win = false;

/* Generates the playing field */
const generateField = () => {
  for (i = 0; i < 9; i++) {
    playingField.appendChild(generateNode(i));
  }
};

/* Generates one node of the playing field */
const generateNode = (index) => {
  const node = document.createElement("div");
  node.setAttribute("id", "f" + index);
  node.addEventListener("click", () => {
    if (node.children.length == 0 && !win) {
      node.appendChild(generateCrossOrCircle());
      checkForWin();
    }
    win ? alert("WIN!!\nRefresh The Page To Restart") : console.log();
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

/* Check if a player has won */
/* NOTE: I know this brute force approach is awful but Im too lazy to think of something more convenient. Plus the way my field works, which is really impractical, does not really allow for anything else, or at least as far as Im concerned */
const checkForWin = () => {
  let crossOrCircle = turn ? ".cross" : ".circle";
  let fieldElements = [
    playingField.querySelector("#f0"),
    playingField.querySelector("#f1"),
    playingField.querySelector("#f2"),
    playingField.querySelector("#f3"),
    playingField.querySelector("#f4"),
    playingField.querySelector("#f5"),
    playingField.querySelector("#f6"),
    playingField.querySelector("#f7"),
    playingField.querySelector("#f8"),
  ];

  if (
    (fieldElements[0].querySelector(crossOrCircle) !== null &&
      fieldElements[3].querySelector(crossOrCircle) !== null &&
      fieldElements[6].querySelector(crossOrCircle)) ||
    (fieldElements[1].querySelector(crossOrCircle) !== null &&
      fieldElements[4].querySelector(crossOrCircle) !== null &&
      fieldElements[7].querySelector(crossOrCircle)) ||
    (fieldElements[2].querySelector(crossOrCircle) !== null &&
      fieldElements[5].querySelector(crossOrCircle) !== null &&
      fieldElements[8].querySelector(crossOrCircle)) ||
    (fieldElements[0].querySelector(crossOrCircle) !== null &&
      fieldElements[1].querySelector(crossOrCircle) !== null &&
      fieldElements[2].querySelector(crossOrCircle)) ||
    (fieldElements[3].querySelector(crossOrCircle) !== null &&
      fieldElements[4].querySelector(crossOrCircle) !== null &&
      fieldElements[5].querySelector(crossOrCircle)) ||
    (fieldElements[6].querySelector(crossOrCircle) !== null &&
      fieldElements[7].querySelector(crossOrCircle) !== null &&
      fieldElements[8].querySelector(crossOrCircle)) ||
    (fieldElements[0].querySelector(crossOrCircle) !== null &&
      fieldElements[4].querySelector(crossOrCircle) !== null &&
      fieldElements[8].querySelector(crossOrCircle)) ||
    (fieldElements[6].querySelector(crossOrCircle) !== null &&
      fieldElements[4].querySelector(crossOrCircle) !== null &&
      fieldElements[2].querySelector(crossOrCircle))
  ) {
    win = true;
  }
};

/* Executed when page is loaded */
generateField();
