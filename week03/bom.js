const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

 
    
// week 03 Web Storage API - localStorage
// declare new array and assign results of function getChaptersList(). 
let chapters = getChapterList() || [];

// Now let's populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. That way each entry will be processed, i.e., appended to the list.
chapters.forEach(chapter => {
  displayList(chapter);
});


// Change the button click event listener to only to the following (the rest of what you had before is still needed but will be played in a separate function named displayList):
button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chapters.push(input.value);
    setChaptersList();
    input.value= "";
    input.focus;
  }
});

// Create the displayList defined function that recieves one parameter named item.
function displayList(item){

    // Put all the code that builds a list item from the previous button click event listener into this function and use the item parameter as the input. A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage. The function argument is tricky. The actual
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}
// efine the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChaptersList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chapters));
}

// Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, we will need to use JSON.parse on the string..
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Finally, define the deleteChapter function with a parameter named chapter that does three things.
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chapters = chapters.filter((item) => item !== chapter);
  setChaptersList();
}