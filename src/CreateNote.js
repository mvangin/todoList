import {addToDo, getCurrentProject} from  "./CreateProject.js";

const CreateNote = () => {
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



    let noteID = 0;



    function Note(title, descrip = "", dueDate = "", priority = "none") {
        noteID++;
        let projectID = getCurrentProject();
        const lastID = () => {
            return lastID;
        }
        return { title, descrip, dueDate, priority, projectID}
    }

    function createNote() {
        const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
        return (note)
    }

    function displayNote(note) {
        const newNote = document.createElement("div");
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        const noteDiv = document.querySelector(".noteDiv");


        title.textContent = note.title;
        title.classList.add("noteContentTitle");
        dueDate.textContent = note.dueDate;

        newNote.appendChild(title);
        newNote.appendChild(dueDate);
        newNote.classList.add("newNote");
        noteDiv.appendChild(newNote);
    }


    function removeForm() {
        //noteForm.style.display = "none";
        bgModalNotes.style.display = "none";
        noteForm.style.display = "none";
    }

    const newNote = createNote();
    displayNote(newNote);
    addToDo(newNote);
    removeForm();
        
}

export default CreateNote;