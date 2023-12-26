// NOTE: I refuse to use the word "colour" in this project, because it is a disgusting British variation highly influenced by the Frenchies

/* Variable declarations (variable names should speak for themselves) */
const colorOptions = document.querySelector("#color-options");
const guessPrompt = document.querySelector("#guess-prompt");
const diff2 = document.querySelector("#diff-2");
const diff3 = document.querySelector("#diff-3");
const diff5 = document.querySelector("#diff-5");

/* Method to generate color options (number of color options depends on the chosen difficulty) */
const generateColors = (diff) => {
  for (i = 0; i < diff; i++) {
    colorOptions.appendChild(createColorOption());
  }
};

/* Method for generating one color option */
const createColorOption = () => {
  const colorOption = document.createElement("span");
  colorOption.classList.add("color-option");
  return colorOption;
};

generateColors(2);
