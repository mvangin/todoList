


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
    const projectTitleInput = document.querySelector(".projectTitleInput");


    let projectID = 0;
    let projectLibrary = [];

    const getProjects = () => {return projectLibrary};

    function newProject(projectTitle) {
        projectID++;
        return { projectTitle, projectID };
    }

    function addProject(currentProject) {
        projectLibrary.push(currentProject);
    }

export {getProjects, newProject, addProject};