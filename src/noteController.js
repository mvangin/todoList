import projectController from "./projectController.js";
import {removeForm, requiredFields, displayNotes } from "./ui-notes.js"
import {getAllProjects} from "./projectController.js"

const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");


function Note(title, descrip = "", dueDate = "", priority = "none") {
    return { title, descrip, dueDate, priority }
}

function createNote() {
    const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
    return (note)
}

function addNote(newNote, project) {
    project.toDo.push(newNote)
    localStorage.setItem("storedLibrary", JSON.stringify(projectController.getAllProjects()))
}

function removeNote(e) {
    let index = e.target.dataset.noteID;
    projectController.getCurrentProject().toDo.splice(index, 1);
    localStorage.setItem("storedLibrary", JSON.stringify(projectController.getAllProjects()))
    displayNotes(projectController.getCurrentProject());

}


export { Note, createNote, addNote, removeNote };