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
        const row1 = document.createElement("div");
        const row2 = document.createElement("div");
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        const descrip = document.createElement('div');
        const priority = document.createElement('div')
        const removeNoteButton = document.createElement("button");
        removeNoteButton.textContent = "Remove Note";
        removeNoteButton.classList.add("removeNoteButton");
        removeNoteButton.dataset.projectIndex = item.projectID;
        removeNoteButton.dataset.noteindex = item.noteID;



        title.textContent = item.title;
        title.classList.add("noteContent");
        title.setAttribute("id", "noteTitleContent");

        dueDate.textContent = "Due by: " + item.dueDate;
        dueDate.classList.add("noteContent");

        descrip.textContent = "Description: " + item.descrip;

        priority.textContent = "priority: " + item.priority;
        priority.classList.add("noteContent");


        row1.appendChild(title);
        row1.appendChild(dueDate);
        row1.appendChild(priority);
        row1.appendChild(removeNoteButton);


        row2.appendChild(descrip);
        row1.classList.add("noteHead");
        row2.classList.add("descrip");


        newNote.classList.add("newNote");
        newNote.appendChild(row1);
        newNote.appendChild(row2);

        noteDiv.appendChild(newNote);

        newNote.addEventListener("click", () => {
            row2.style.display == "" ? row2.style.display = "flex" : row2.style.display = "";
        })

    });
    removeNoteButtons();
}

function removeNoteButtons() {
    const removeNoteButtons = document.querySelectorAll(".removeNoteButton");
    let index = 0;
    removeNoteButtons.forEach(button => {
        button.addEventListener("click", () => {
            projectLibrary.forEach(projItem => {
                if (button.dataset.projectIndex == projItem.projectID.toString()) {
                    projItem.toDo.forEach(noteItem => {
                        if (noteItem.noteID.toString() == button.dataset.noteindex) {
                            projItem.toDo.splice(projItem.toDo.indexOf(noteItem.projectTitle),1);
                            displayNotes(getCurrentProject());
                        }
                    })
                }
            })
        });
    });
}



function requiredProjFields(projectTitleInput) {
    if (projectTitleInput == "") {
        return false;
    } else {
        return true;
    }
}

export { getProjects, newProject, addProject, addToDo, displayProject, getCurrentProject, displayNotes, requiredProjFields };