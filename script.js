var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createNewDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.classList.add("delete");
	deleteButtonResponse(deleteButton);
	return deleteButton;
}

function createNewListNeed() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	toggleItemResponse(li);
	li.appendChild(createNewDeleteButton());
	
	return li;
}

function createNewElement () {
	ul.appendChild(createNewListNeed());
	input.value = "";
}

function buttonResponse() {
	if (inputLength() > 0){
		createNewElement();
	}
}

function keyPressResponse(event) {
	if (inputLength() > 0 && event.which === 13){	
		createNewElement();
	}
}

function deleteButtonResponse(item) {////////////////////////Delete an available item////////////////////
	item.addEventListener("click", function(){
		ul.removeChild(item.parentElement);
	});
}

function toggleItemResponse(item) { /////////////////////////////Linethrough item//////////////////
	item.addEventListener("click", function(){
		item.classList.toggle("done")
	});
}

function addDeleteToAvailableItems() {
	for (var i = deleteButtons.length - 1; i >= 0; i--) {
		deleteButtonResponse(deleteButtons[i]);
	}
}

function toggleAvailabeItems() {
	items.forEach(toggleItemResponse);
}

button.addEventListener("click", buttonResponse);
input.addEventListener("keypress", keyPressResponse);
toggleAvailabeItems();
addDeleteToAvailableItems();