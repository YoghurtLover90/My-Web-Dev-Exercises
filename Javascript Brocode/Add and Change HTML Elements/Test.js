




/*const nameTag = document.createElement("h1");

nameTag.textContent = window.prompt("Enter");
document.body.append(nameTag);*/

const myList = document.querySelector("#fruit")
const listItem = document.createElement("li");
listItem.textContent = "yoghurt"
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);
