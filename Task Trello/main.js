function addNote(cardId) {
    const inputId = `${cardId}-input`;
    const listId = `${cardId}-list`;

    const inputValue = document.getElementById(inputId).value;

    if (inputValue.trim() !== "") {
        const noteId = `note-${Date.now()}`;
        const noteHtml = `<li id="${noteId}" class="note" draggable="true" ondragstart="drag(event)">${inputValue}</li>`;

        document.getElementById(listId).innerHTML += noteHtml;
        document.getElementById(inputId).value = "";
    }
}

function removeAllNotes(cardId) {
    const listId = `${cardId}-list`;
    document.getElementById(listId).innerHTML = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    const targetList = event.target.closest(".notes-list");
    targetList.appendChild(draggedElement);
}
