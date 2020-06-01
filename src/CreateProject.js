let projectID = 0;
let projectLibrary = [];
let currentProject;

function initialProject() {
    let defaultProject = newProject("Default_project");
    addProject(defaultProject)
    setCurrentProject(defaultProject);
    displayProject(defaultProject);
    const projDiv = document.querySelector(".newProject");
    projDiv.style.background = "rgba(0,0,0,.2)";
}

initialProject();



const projectDiv = document.querySelector(".projectDiv");
const getProjects = () => { return projectLibrary };


function setCurrentProject(project) {
    currentProject = project;
}

function getCurrentProject() {
    return currentProject;
}



function addToDo(newNote) {
    projectLibrary.forEach(item => {
        if (item.projectID == getCurrentProject().projectID) {
            item.toDo.push(newNote)
        }
    })
}



function newProject(projectTitle) {
    projectID++;
    let toDo = [];
    return { projectTitle, projectID, toDo };
}

function addProject(currentProject) {
    projectLibrary.push(currentProject);
    console.log(projectLibrary);
}

function displayProject(project) {
    const projectDiv = document.querySelector(".projectDiv");
    const itemDiv = document.createElement("div");
    itemDiv.textContent = project.projectTitle;
    itemDiv.classList.add("newProject");
    itemDiv.dataset.projectID = projectID;
    projectDiv.appendChild(itemDiv);

    itemDiv.addEventListener("click", () => {

        const projDivs = document.querySelectorAll(".newProject");

        projDivs.forEach(item => {
            item.style.background = "";
        })
        setCurrentProject(project);
        itemDiv.style.background = "rgba(0,0,0,.2)";
        displayNotes(project);

    });

}

function displayNotes(project) {
    const noteDiv = document.querySelector(".noteDiv");
    noteDiv.textContent = "";

    project.toDo.forEach((item) => {
        const newNote = document.createElement("div");
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        title.textContent = item.title;
        title.classList.add("noteContentTitle");
        dueDate.textContent = item.dueDate;

        newNote.appendChild(title);
        newNote.appendChild(dueDate);
        newNote.classList.add("newNote");
        noteDiv.appendChild(newNote);
    });
}

function requiredProjFields(projectTitleInput){
    if (projectTitleInput=="") {
        return false;
    } else {
        return true;
    }
}

export { getProjects, newProject, addProject, addToDo, displayProject, getCurrentProject, displayNotes, requiredProjFields };