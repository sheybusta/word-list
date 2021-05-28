import { data } from "../data.js";
import { isWord } from "../logic/is-word.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";

const warnings = document.getElementById("warnings");

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log("-- handler: input word --");

  /* -- check the target -- */
  if (event.target.type !== "button") {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value; // line 13 on HTML (something happen when user enter a new value)
  const action = event.target.value; // this is the button
  const theWarning = document.getElementById("warnings");
  /* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
    a user can remove words from the list
      given the input is not in the list
        a warning is posted
      given the input is in the list
        it is removed
        the list is re-rendered
  */

  if (action === "add") {
    theWarning.innerHTML = "";
    if (!isWord(text)) {
      theWarning.innerHTML = `"${text}" is not a word`;
      theWarning.style.color = "red";

      // console.log(`${text} is not a word!`);
    } else {
      // console.log("adding to the list");
      data.words.push(text); // here you are adding from data and to special key that is word
      console.log(data);
    }
  }

  if (action === "remove") {
    theWarning.innerHTML = "";
    // two paths
    if (!data.words.includes(text)) {
      theWarning.innerHTML = `"${text}" is not in the list`;
      theWarning.style.color = "red"; // if it isn't in the list - warning "are you sure you want to remove it, it not in the list "
      // console.log("warning");
    } else {
      data.words.splice(data.words.indexOf(text), 1); // if it exit in the list already we need to remove
      // console.log("remove");
    }
  }
  // ... write some code ...

  /* -- render new words -- */
  const sorted = sortStrings(data.words, data.sort);
  updateList(sorted);
};
