/* Variable declarations */
const playingField = document.querySelector("#playing-field");
let turn = true; // true = circle, false = cross

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
    if (node.children.length == 0) {
      node.appendChild(generateCrossOrCircle());
      checkForWin(node);
    }
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
/* NOTE: This method is probably going to be super ugly, I am sorry for that but I am too lazy to think about it longer, so Im just going to brute force and check every possibility.
         Also the way I have implemented my field is super unpractical and does not really allow for any better approach, or as far as Im concerned. 
         Please dont try to understand what exactly happens inside this method. I barely know it myself...*/
// const checkForWin = (element) => {
//   let elementIndex = element.id.split("f")[1];
//   let adjentElements = [
//     playingField.querySelector(`#f${elementIndex - 1}`),
//     playingField.querySelector(`#f${elementIndex - 11}`),
//     playingField.querySelector(`#f${elementIndex - 10}`),
//     playingField.querySelector(`#f${elementIndex - 9}`),
//     playingField.querySelector(`#f${Number(elementIndex) + 1}`),
//     playingField.querySelector(`#f${Number(elementIndex) + 11}`),
//     playingField.querySelector(`#f${Number(elementIndex) + 10}`),
//     playingField.querySelector(`#f${Number(elementIndex) + 9}`),
//   ];
//   let crossOrCircle = element.querySelector(".circle") ? ".circle" : ".cross";

//   console.log(adjentElements[0].querySelector(crossOrCircle) !== null);
//   console.log(adjentElements[4].querySelector(crossOrCircle) !== null);

//   if (
//     (adjentElements[0].querySelector(crossOrCircle) !== null &&
//       adjentElements[4].querySelector(crossOrCircle) !== null) ||
//     (adjentElements[2].querySelector(crossOrCircle) !== null &&
//       adjentElements[6].querySelector(crossOrCircle) !== null) ||
//     (adjentElements[7].querySelector(crossOrCircle) !== null &&
//       adjentElements[3].querySelector(crossOrCircle) !== null) ||
//     (adjentElements[1].querySelector(crossOrCircle) !== null &&
//       adjentElements[5].querySelector(crossOrCircle) !== null) ||
//     (adjentElements[1].querySelector(crossOrCircle) !== null &&
//       adjentElements[5].querySelector(crossOrCircle) !== null)
//   ) {
//     alert("WIN");
//   }
// };

/* Executed when page is loaded */
generateField();
