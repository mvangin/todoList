function project(projectTitle) {
    return projectTitle;
}

function Note(title, descrip = "", dueDate = "", priority = "none") {
    const checked = () => {
        alert(bob);
    }
    return { title, descrip, dueDate, priority, checked }
}

cost Note = {}; 

const submitNote = document.querySelector("#submitNote");
const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");
const noteChecked = document.querySelector("#noteChecked");
const body = document.querySelector("body");
const noteDiv = document.querySelector(".noteDiv");
const noteForm = document.querySelector(".noteForm");
const bgModal = document.querySelector(".bg-modal");



submitNote.addEventListener("click", (e) => {
    e.preventDefault();
    createNote();
    displayNote();
    clearForm();
    removeForm();
});

function clearForm() {
    const noteTitle = document.querySelector("#noteTitle");
    const noteDescrip = document.querySelector("#noteDescrip");
    const noteDueDate = document.querySelector("#noteDueDate");
    const notePriority = document.querySelector("#notePriority");
    noteTitle.value = "";
    noteDescrip.value = "";
    noteDueDate.value = "";
    notePriority.value = "";
}

function removeForm() {
    //noteForm.style.display = "none";
    bgModal.style.display = "none";
}

function createNote() {
    const note1 = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);

}

function displayNote() {
    const noteWrapper = document.createElement("div");
    const paragraph = document.createElement('p');
    paragraph.textContent = noteTitle.value;
    noteWrapper.appendChild(paragraph);
    noteDiv.appendChild(noteWrapper);
}



const newProjectButton = document.querySelector(".newProjectButton");



const newNoteButton = document.querySelector(".newNoteButton");

//newProjectButton.addEventListener("click", ()=> {

//})


newNoteButton.addEventListener("click", () => {
    bgModal.style.display = "flex";
    noteForm.style.display = "block";
})



