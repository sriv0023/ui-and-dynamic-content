var inputItem = document.getElementById("item");
var addButton= document.getElementById("add-button");
var errMessage= document.getElementById("feedback");
var itemList= document.getElementById("item-list");

function addItem(){

    var listItem= document.createElement("li");
    
    if(inputItem.value.trim() !== ""){
        listItem.textContent = inputItem.value;
        itemList.appendChild(listItem);
        errMessage.textContent="";
        inputItem.value="";
        inputItem.focus();
    }
    else{
        errMessage.textContent= "Please add a list item!";
    }
}

addButton.addEventListener("click", addItem);