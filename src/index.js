const submitNote = document.querySelector("#submitNote");
const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");
const noteChecked = document.querySelector("#noteChecked");

const body = document.querySelector("body");
const noteForm = document.querySelector(".noteForm");
const bgModal = document.querySelector(".bg-modal");
const newNoteButton = document.querySelector(".newNoteButton");

let defaultProject = [];

let projectID = 0;
function Note(title, descrip = "", dueDate = "", priority = "none") {
    projectID++;

    const lastID = () => {
        return lastID;
    }
    return { title, descrip, dueDate, priority, projectID }
}

function noteSubmitted() {
    return Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
}

newNoteButton.addEventListener("click", () => {
    bgModal.style.display = "flex";
    noteForm.style.display = "block";
})


submitNote.addEventListener("click", (e) => {
    e.preventDefault();
    lastNote = createNote();
    displayNote(lastNote);
    clearForm();
    removeForm();
});

function createNote() {
    const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
    defaultProject.push(note);
    return (note)
}

function displayNote(note) {
    const noteWrapper = document.createElement("div");
    const title = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const noteDiv = document.querySelector(".noteDiv");


    title.textContent = note.title;
    dueDate.textContent = note.dueDate;
    priority.textContent = note.priority;

    noteWrapper.appendChild(title);
    noteWrapper.appendChild(dueDate);
    noteWrapper.appendChild(priority);
    noteDiv.appendChild(noteWrapper);
}

function clearForm() {
    noteTitle.value = "";
    noteDescrip.value = "";
    noteDueDate.value = "";
    notePriority.value = "";
}

function removeForm() {
    //noteForm.style.display = "none";
    bgModal.style.display = "none";
    noteForm.style.display = "none";

}