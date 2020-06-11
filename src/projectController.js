/* eslint-disable indent */
import { displayProjects} from './ui-project.js';
import { displayNotes} from './ui-notes.js';


const projectController = (() => {
    let projectLibrary;

    if (localStorage.getItem('storedLibrary')) {
        projectLibrary = JSON.parse(localStorage.getItem('storedLibrary'));
    } else {
        projectLibrary = [];
    }

    let currentProject;

    function setDefaultProject() {
        setCurrentProject(projectLibrary[0]);
        displayProjects();
        displayNotes(projectLibrary[0]);
        const projDiv = document.querySelector('.wrapperProject');
        projDiv.style.background = 'rgba(0,0,0,.2)';
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
        const toDo = [];
        return { projectTitle, toDo };
    }

    function addProject(currentProject) {
        projectLibrary.push(currentProject);
        localStorage.setItem('storedLibrary', JSON.stringify(projectLibrary));
        console.log(projectLibrary);
    }

    function removeProject(e) {
        const index = e.target.dataset.projectID;
        projectLibrary.splice(index, 1);
        localStorage.setItem('storedLibrary', JSON.stringify(projectLibrary));
    }

    return { setCurrentProject, getCurrentProject, newProject, addProject, removeProject, getAllProjects, setDefaultProject}

})();

export default projectController;
