let projectID = 0;
let projectLibrary = [];
let currentProject;

function initialProject() {
    let defaultProject = newProject("Default_project");
    addProject(defaultProject)
    displayProject(defaultProject);
    setCurrentProject(1);
}

initialProject();



const projectDiv = document.querySelector(".projectDiv");
const getProjects = () => { return projectLibrary };


function setCurrentProject(projectID) {
    currentProject = projectID;
}

function getCurrentProject() {
    return currentProject;
}



function addToDo(newToDo, currentProjectID) {
    projectLibrary.forEach(item => {
        if (item.projectID == getCurrentProject()) {
            item.toDo.push(newToDo)

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
            item.style.background = "yellow";
        })
        setCurrentProject(project.projectID);
        itemDiv.style.background = "red";
    });

}


export { getProjects, newProject, addProject, addToDo, displayProject , getCurrentProject};