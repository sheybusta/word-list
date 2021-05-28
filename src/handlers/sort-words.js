import { data } from "../data.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";

/**
 * Entry point for users sorting the list of words in this app.
 * It is called each time the input selection changes.
 *
 * @param {Event} event - The event triggered by changing the input.
 */
export const handleSortWords = (event) => {
  /* -- entry point for sorting the words -- */
  // debugger;
  console.log("-- handler: sort words --");

  /* -- gather user input from DOM -- */
  const howToSort = event.target.value;

  //  data.words needs to be conected with

  const sorted = sortStrings(data.words, howToSort); // your function has two parameters, when you call it, you have to add two parameters as well: the list you have until now and how to sort it.

  /* -- use the input and data to create a new sorted list --
    change the .sort property in data
    sort the words in data.words using the logic function
    assign the newly sorted list to a variable named `sorted`
  */

  // ... write some code ...

  /* -- render new words -- */
  updateList(sorted);
};
