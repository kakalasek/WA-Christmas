// NOTE: I refuse to use the word "colour" in this project, because it is a disgusting British variation highly influenced by the Frenchies

/* Variable declarations (variable names should speak for themselves) */
const guessedColor = document.querySelector("#guessed-color");
const colorOptions = document.querySelector("#color-options");
const guessPrompt = document.querySelector("#guess-prompt");
const diffs = [
  // Table of difficulties
  document.querySelector("#diff-2"),
  document.querySelector("#diff-3"),
  document.querySelector("#diff-5"),
];
let defaultDiff = 2;
let win = false;

/* Asigning event listeners to diffs */
diffs.forEach((element) => {
  element.addEventListener("click", () => {
    win = false;
    guessPrompt.textContent = "GUESS THE COLOR";
    guessedColor.style.color = "";
    colorOptions.innerHTML = ""; // Clears out previous colors
    generateColors(Number(element.textContent)); // Generates new colors
  });
});

/* Method to generate color options (number of color options depends on the chosen difficulty) */
const generateColors = (diff) => {
  let colorToGuess = Math.floor(Math.random() * diff); // Picks a random color for the player to guess
  let color;

  for (i = 0; i < diff; i++) {
    color = randomColor(); // Creates random color
    colorOptions.appendChild(createColorOption(color)); // Creates new color option

    // Checks if the index corresponds to the randomly chosen one ('colorToGuess'), and if so, changes the hex of currently guessed color
    if (i == colorToGuess) {
      guessedColor.textContent = `#${color.toUpperCase()}`;
    }
  }
};

/* Method for generating one color option */
const createColorOption = (color) => {
  const colorOption = document.createElement("span");
  colorOption.classList.add("color-option");
  colorOption.style.background = `#${color}`;
  // Adding event listener for when the color is chosen
  colorOption.addEventListener("click", () => {
    if (win === false) {
      // Right pick
      if (`#${color.toUpperCase()}` === guessedColor.textContent) {
        win = true;
        guessPrompt.textContent = "YOU HAVE WON";
        guessedColor.style.color = guessedColor.textContent;
        guessPrompt.appendChild(createRestartButton());
      } else {
        // Wrong pick
        colorOption.remove();
        guessPrompt.textContent = "WRONG - TRY AGAIN";
      }
    }
  });
  return colorOption;
};

/* Creates restart button after victory */
const createRestartButton = () => {
  const restartButton = document.createElement("button");
  restartButton.textContent = "RESTART";
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  return restartButton;
};

/* Returns a random color */
const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

/* Executed when page is loaded */
generateColors(defaultDiff);
