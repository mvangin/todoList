import noteLibrary from noteLibrary;

function project(projectTitle) {
    return projectTitle;
}



const submitNote = document.querySelector("#submitNote");
const noteTitle = document.querySelector("#noteTitle");
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
    noteForm.style.display = "none";

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



newNoteButton.addEventListener("click", () => {
    bgModal.style.display = "flex";
    noteForm.style.display = "block";
})

const projectForm = document.querySelector(".projectForm");

newProjectButton.addEventListener("click", () => {
    bgModal.style.display = "flex";
    projectForm.style.display = "block";
})

