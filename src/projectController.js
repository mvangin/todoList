import { displayProjects} from "./ui-project.js";
import { displayNotes} from "./ui-notes.js";


const projectController = (() => {

    let projectLibrary = [];
    let currentProject;


    

    function setDefaultProject() {
        setCurrentProject(projectLibrary[0]);
        displayProjects();
        displayNotes(projectLibrary[0]);
        const projDiv = document.querySelector(".newProject");
        projDiv.style.background = "rgba(0,0,0,.2)";
    }

    function getAllProjects() {
        return projectLibrary;
    }

    function setCurrentProject(project) {
        currentProject = project;
    }

    function getCurrentProject() {
        return currentProject;
    }

    function newProject(projectTitle) {
        let toDo = [];
        return { projectTitle, toDo };
    }

    function addProject(currentProject) {
        projectLibrary.push(currentProject);
        console.log(projectLibrary);

    }

    function removeProject(e) {
        let index = e.target.dataset.projectID;
        projectLibrary.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projectLibrary));

    }

    return { setCurrentProject, getCurrentProject, newProject, addProject, removeProject, getAllProjects, setDefaultProject}

})();

export default projectController;
