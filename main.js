function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("new-list-item");
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function deleteListItem() {
    item.parentNode.removeChild(item);
}

function completeListItem() {
    if (item.checked) {
        item.parentNode.style.textDecoration = "line-through";
    } else {
        item.parentNode.style.textDecoration = "none";
    }
}

