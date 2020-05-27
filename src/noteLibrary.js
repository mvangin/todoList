const noteLibrary = () => {

    const submitNote = document.querySelector("#submitNote");
    const noteTitle = document.querySelector("#noteTitle");
    const noteDescrip = document.querySelector("#noteDescrip");
    const noteDueDate = document.querySelector("#noteDueDate");
    const notePriority = document.querySelector("#notePriority");
    const noteChecked = document.querySelector("#noteChecked");

    let projectID = 0;
    function Note(title, descrip = "", dueDate = "", priority = "none") {
        projectID++;
        const checked = () => {
            alert("Note Added");
        }
        return { title, descrip, dueDate, priority, id, checked, projectID }
    }

    function noteSubmitted() {
        const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
        return (note)
    }

    //create project library and add correct notes to to designated project library

    projectLibrary = [];
    let projectID = 0;


    function project()
    const Createprojects = () => {
        const project = (projectName, projectID++);
    }



    const newProjectButton = document.querySelector(".newProjectButton");
    const projectTitleInput = document.querySelector(".projectTitleInput");


    newProjectButton.addEventListener("click", () => {
        projectTitleInput.style.display = "block";
        newProject();
    })


    const newProject = {};
    projectLibrary.push(project1);

    function NewProject(title) {
        const project = { title };
        projectLibrary.push(project);
    }

    function addNote(project, projectNote) {
        project.push(projectNote);
    }

    //const note1 = CreateNote();
    //const note2 = CreateNote();

    //const project1 = NewProject();
    //addNote(project1, note1);

    //const project2 = newProject();
    //addNote(project2, note2);

}

export default noteLibrary;
