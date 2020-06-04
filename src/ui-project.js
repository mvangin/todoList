import { displayNotes } from "./ui-notes.js"
import projectController from "./projectController.js"


const newProjectButton = document.querySelector(".newProjectButton");
const projectForm = document.querySelector(".projectForm");
const bgModalProjects = document.querySelector(".bg-modalProjects");
const projectTitleInput = document.querySelector(".projectTitleInput");
const submitProject = document.querySelector("#submitProject");
const cancelProject = document.querySelector("#cancelProject");


newProjectButton.addEventListener("click", () => {
    bgModalProjects.style.display = "flex";
    projectForm.style.display = "block";
})

submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    if (requiredProjFields(projectTitleInput.value)) {
        const project = projectController.newProject(projectTitleInput.value);
        projectController.addProject(project);
        projectController.setCurrentProject(project);
        displayNotes(project);
        displayProjects();
        clearProject();
        removeProjectForm()
    } else {
        return alert("no project for you")
    }
});

cancelProject.addEventListener("click", (e) => {
    clearProject();
    removeProjectForm();
});

function removeProjectForm() {
    //noteForm.style.display = "none";
    bgModalProjects.style.display = "none";
    projectForm.style.display = "none";
}

function clearProject() {
    projectTitleInput.value = "";
}

function displayProjects() {
    const projectDiv = document.querySelector(".projectDiv");
    projectDiv.textContent = "";
    let projectID = 0;
    let projectLibrary = projectController.getAllProjects();

    projectLibrary.forEach(project => {

        // make a larger wrapper around both button and clickable div. flex the large box. 
        const projectDiv = document.querySelector(".projectDiv");
        const removeProjectButton = document.createElement("button");
        const removeButtonDiv = document.createElement("div");
        const projectTitleDiv = document.createElement("div");
        const wrapperProject = document.createElement("div");

        projectTitleDiv.textContent = project.projectTitle;
        projectTitleDiv.dataset.projectID = projectID;
        projectTitleDiv.classList = "projectTitleDiv";

        removeProjectButton.textContent = "X";
        removeProjectButton.classList.add("removeProjectButton");
        removeProjectButton.dataset.projectID = projectID;
        removeButtonDiv.appendChild(removeProjectButton);

        wrapperProject.style.display = "flex";
        wrapperProject.classList.add("wrapperProject");
        wrapperProject.appendChild(projectTitleDiv);

        projectDiv.appendChild(wrapperProject);

        if (projectController.getCurrentProject() == project) {
            wrapperProject.style.background = "rgba(0,0,0,.2)";
        }

        if (projectID != 0) {
            wrapperProject.appendChild(removeProjectButton);
        }

        projectTitleDiv.addEventListener("click", () => {
            const projDivs = document.querySelectorAll(".wrapperProject");
            projDivs.forEach(item => {
                item.style.background = "";
                projectController.setCurrentProject(project);
                wrapperProject.style.background = "rgba(0,0,0,.2)";
                displayNotes(project);
            });

        })

        removeProjectButton.addEventListener("click", (e) => {
            projectController.removeProject(e);
            projectController.setDefaultProject();
        });

        projectID++;
    })

}

function requiredProjFields(projectTitleInput) {
    if (projectTitleInput == "") {
        return false;
    } else {
        return true;
    }
}

export { displayProjects, requiredProjFields };