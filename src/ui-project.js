/* eslint-disable indent */
import { displayNotes } from './ui-notes.js'
import projectController from './projectController.js'


const newProjectButton = document.querySelector('.newProjectButton');
const projectForm = document.querySelector('.projectForm');
const bgModalProjects = document.querySelector('.bg-modalProjects');
const projectTitleInput = document.querySelector('.projectTitleInput');
const submitProject = document.querySelector('#submitProject');
const cancelProject = document.querySelector('#cancelProject');
const projectInput = document.querySelector('.projectTitleInput');



newProjectButton.addEventListener('click', () => {
    bgModalProjects.style.display = 'flex';
    projectForm.style.display = 'block';
});

submitProject.addEventListener('click', (e) => {
    if (requiredProjFields()) {
        e.preventDefault();
        const project = projectController.newProject(projectTitleInput.value);
        projectController.addProject(project);
        projectController.setCurrentProject(project);
        displayNotes(project);
        displayProjects();
        projectForm.reset();
        removeProjectForm();
    }
});

cancelProject.addEventListener('click', (e) => {
    projectForm.reset();
    removeProjectForm();
    e.preventDefault();
});

function removeProjectForm() {
    bgModalProjects.style.display = 'none';
    projectForm.style.display = 'none';
}


function displayProjects() {
    const projectDiv = document.querySelector('.projectDiv');
    projectDiv.textContent = '';
    let projectID = 0;
    const projectLibrary = projectController.getAllProjects();

    projectLibrary.forEach((project) => {
        // make a larger wrapper around both button and clickable div. flex the large box. 
        const removeProjectButton = document.createElement('button');
        const removeButtonDiv = document.createElement('div');
        const projectTitleDiv = document.createElement('div');
        const wrapperProject = document.createElement('div');

        projectTitleDiv.textContent = project.projectTitle;
        projectTitleDiv.dataset.projectID = projectID;
        projectTitleDiv.classList = 'projectTitleDiv';

        removeProjectButton.textContent = 'X';
        removeProjectButton.classList.add('removeProjectButton');
        removeProjectButton.dataset.projectID = projectID;
        removeButtonDiv.appendChild(removeProjectButton);

        wrapperProject.style.display = 'flex';
        wrapperProject.classList.add('wrapperProject');
        wrapperProject.appendChild(projectTitleDiv);

        projectDiv.appendChild(wrapperProject);

        if (projectController.getCurrentProject() == project) {
            wrapperProject.style.background = 'rgba(0,0,0,.2)';
        }

        if (projectID !== 0) {
            wrapperProject.appendChild(removeProjectButton);
        }

        projectTitleDiv.addEventListener('click', () => {
            const projDivs = document.querySelectorAll('.wrapperProject');
            projDivs.forEach((item) => {
                item.style.background = '';
            });
            projectController.setCurrentProject(project);
            wrapperProject.style.background = 'rgba(0,0,0,.2)';
            displayNotes(project);
        });

        removeProjectButton.addEventListener('click', (e) => {
            projectController.removeProject(e);
            projectController.setDefaultProject();
        });

        projectID += 1;
    });
}

function requiredProjFields() {
    if (!projectInput.checkValidity()) {
        return false;
    }
    return true;
}

export { displayProjects, requiredProjFields }