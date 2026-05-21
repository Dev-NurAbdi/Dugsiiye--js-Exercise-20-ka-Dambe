




// function changeContent() {
//      const header = document.getElementById("header");
    
//     if (header) {
//         header.textContent = "welcome to the dom";
//     } else {
//         console.error("Element with ID 'header' not found.");
//     }
// }


// function changeElement() {
//     const textElements = document.getElementsByClassName('text');

//     if (textElements.length > 0) {
//         textElements[0].innerHTML = "This is the <strong> result </strong>!";
//     } else {
//         console.error("No elements with class 'text' found.");
//     }
// }

// const btnAdd = document.getElementById('btnAdd');
// const list = document.querySelector('.list')
// // btnAdd.addEventListener('click', addItem);
// function addItem() {
   
//     console.log("Adding item to the list...");
//     const newItem = document.createElement('li');
//     newItem.textContent = "New Item";
//     console.log({newItem});
//     list.appendChild(newItem);
// }


// function removeItem() {
//     const lastItem = list.lastElementChild;
//     if (lastItem) {
//         list.removeChild(lastItem);
//     } else {
//         console.error("No items to remove.");
//     }
// }


//  function changeImage() {

//     const image = document.querySelector('#image');

//     // const url = prompt("Please enter your image url")

//     image.setAttribute('src', 'https://i.pinimg.com/736x/e0/c1/4a/e0c14a4f636ac24aba405c819659ffab.jpg')
//     image.style.broder = "2px solid black";
//  }


 

// function setLightMode() {

//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";

// }

// function setDarkMode() {

//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";

// }


//       const picker = document.getElementById("colorPicker");
// const box = document.getElementById("colorBox");
// const code = document.getElementById("colorCode");

// picker.addEventListener("input", function() {
//     box.style.backgroundColor = picker.value;
//     code.textContent = picker.value; 
// });




function addTodo() {
  const input = document.getElementById("todoInput");
  const imageInput = document.getElementById("imageInput");
  const content = document.getElementById("content");
  const text = input.value.trim();
  if (text === "")
   return; 

   
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  const todoText = document.createElement("span");
  todoText.textContent = text;

  const todoContent = document.createElement("p");
  todoContent.textContent = content.value;

  
  const img = document.createElement("img");
  img.src = imageInput.value || prompt("Enter image URL:"); 


  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function() {
    const newText = prompt("Edit your todo:", todoText.textContent);
    if (newText) todoText.textContent = newText;
  });


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function() {
    todoDiv.remove();
  });

// Isku dar walxaha todo item-ka
  todoDiv.appendChild(todoText);
  todoDiv.appendChild(img);
   todoDiv.appendChild(todoContent);
  todoDiv.appendChild(editBtn);
  todoDiv.appendChild(deleteBtn);

  // Ku dar DOM-ka
  document.getElementById("todoContainer").appendChild(todoDiv);

  
  input.value = "";
  imageInput.value = "";
  content.value = "";
}

// Dhageyso dhacdooyinka
document.getElementById("addBtn").addEventListener("click", addTodo);

document.getElementById("todoInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTodo();
});