let projectID = 0;
let projectLibrary = [];
let currentProjectID = 1;
let defaultProject = newProject("defaultProject");
addProject(defaultProject) 



const projectDiv = document.querySelector(".projectDiv");
const getProjects = () => { return projectLibrary };

function setCurrentProject(projectID) {
    currentProjectID = projectID;
}

function addToDo (newToDo) {
    let currentID = getCurrentProjectID();
    projectLibrary.forEach(item => {
        if (item.projectID == currentID){
            item.toDo.push(newToDo)
            console.log(item);

        }
    })
}

function getCurrentProjectID(){
    return currentProjectID;
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
    projectDiv.textContent = "";
    projectLibrary.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = item.projectTitle;
        itemDiv.classList.add("newProject");
        projectDiv.appendChild(itemDiv);

    })
}

export { getProjects, newProject, addProject, addToDo, setCurrentProject, getCurrentProjectID, displayProject};