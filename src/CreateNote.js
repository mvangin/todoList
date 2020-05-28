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

    let defaultProject = [];


    let noteID = 0;
    let projectID = 0;

    function Note(title, descrip = "", dueDate = "", priority = "none") {
        noteID++;
        const lastID = () => {
            return lastID;
        }
        return { title, descrip, dueDate, priority, projectID: noteID }
    }

    function noteSubmitted() {
        return Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
    }

    function createNote() {
        const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
        defaultProject.push(note);
        return (note)
    }

    function displayNote(note) {
        const noteWrapper = document.createElement("div");
        const title = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const noteDiv = document.querySelector(".noteDiv");


        title.textContent = note.title;
        dueDate.textContent = note.dueDate;
        priority.textContent = note.priority;

        noteWrapper.appendChild(title);
        noteWrapper.appendChild(dueDate);
        noteWrapper.appendChild(priority);
        noteDiv.appendChild(noteWrapper);
    }


    function removeForm() {
        //noteForm.style.display = "none";
        bgModalNotes.style.display = "none";
        noteForm.style.display = "none";
    }

    const lastNote = createNote();
    displayNote(lastNote);
    removeForm();

        
}

export default CreateNote;