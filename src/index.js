import CreateNote from "./CreateNote.js";
import clearForm from "./clearForm.js";
import { getProjects, newProject, addProject, addToDo, setCurrentProject, getCurrentProject, displayProject} from  "./CreateProject.js";

const submitNote = document.querySelector("#submitNote");
const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");
const noteChecked = document.querySelector("#noteChecked");

const body = document.querySelector("body");
const noteForm = document.querySelector(".noteForm");
const bgModalNotes = document.querySelector(".bg-modalNotes");
const newNoteButton = document.querySelector(".newNoteButton");


newNoteButton.addEventListener("click", () => {
    bgModalNotes.style.display = "flex";
    noteForm.style.display = "block";
})

submitNote.addEventListener("click", (e) => {
    e.preventDefault();
    // add if requiredFields= true then do the bottom. otherwise do nothing...
    CreateNote();
    clearForm();
});



const newProjectButton = document.querySelector(".newProjectButton");
const projectForm = document.querySelector(".projectForm");
const bgModalProjects = document.querySelector(".bg-modalProjects");
const projectTitleInput = document.querySelector(".projectTitleInput");




newProjectButton.addEventListener("click", () => {
    bgModalProjects.style.display = "flex";
    projectForm.style.display = "block";
})

const submitProject = document.querySelector("#submitProject");

submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    const project = newProject(projectTitleInput.value);
    addProject(project);
    displayProject(project);
    clearProject();
    removeProjectForm()
});

function removeProjectForm() {
    //noteForm.style.display = "none";
    bgModalProjects.style.display = "none";
    projectForm.style.display = "none";
}

function clearProject(){
    projectTitleInput.value = "";
}

