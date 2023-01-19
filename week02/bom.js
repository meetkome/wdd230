const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// button.addEventListener('click', () => {
//     const items = input.value;
//     if (items===''){
//     window.alert("Empty! Not allowed!");
//     }
//     else{
//     input.value = '';
    // }
  
// const listItem = document.createElement('li');
// const listText = document.createElement('span');
// const listBtn = document.createElement('button');

// listItem.appendChild(listText);
// listText.textContent = items;
// listItem.appendChild(listBtn);
// listBtn.textContent = '❌';
// list.appendChild(listItem);

// listBtn.addEventListener('click', () => {
//     list.removeChild(listItem);
// });

// input.focus();
// }
// check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.




// create a li element
button.addEventListener("click", () => {
  if (input.value != "") {
    const li = document.createElement("li");

// create a delete button
    const deleteButton = document.createElement("button");
    
// // populate the li elements textContent or innerHTML with the input value
    li.textContent = input.value;

    // // populate the button textContent with a ❌
    deleteButton.textContent = "❌";

    // // append the li element with the delete button
    li.append(deleteButton);
    // // append the li element to the unordered list in your HTML
    list.append(li);

    // add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });
    // // send the focus to the input element
    input.focus();
    // // change the input value to nothing or the empty string to clean up the interface for the user
    input.value = "";
  } else {
    window.alert("Please enter your favorite scripture!")
  }
});


