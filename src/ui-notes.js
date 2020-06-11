/* eslint-disable indent */
import { Note, createNote, addNote, removeNote } from './noteController.js'
import projectController from './projectController.js'


const submitNote = document.querySelector('#submitNote');
const cancelNote = document.querySelector('#cancelNote');
const noteForm = document.querySelector('.noteForm');

const bgModalNotes = document.querySelector('.bg-modalNotes');
const newNoteButton = document.querySelector('.newNoteButton');
const noteTitle = document.querySelector('#noteTitle');
const noteDescrip = document.querySelector('#noteDescrip');
const noteDueDate = document.querySelector('#noteDueDate');
const notePriority = document.querySelector('#notePriority');


newNoteButton.addEventListener('click', () => {
    bgModalNotes.style.display = 'flex';
    noteForm.style.display = 'block';
});

cancelNote.addEventListener('click', (e) => {
    removeForm();
    noteForm.reset();
    e.preventDefault();
});

submitNote.addEventListener('click', (e) => {
    if (requiredFields()) {
        e.preventDefault();
        const newNote = createNote();
        addNote(newNote, projectController.getCurrentProject());
        displayNotes(projectController.getCurrentProject());
        removeForm();
        noteForm.reset();
    }
});


function displayNotes(project) {
    const noteDiv = document.querySelector('.noteDiv');
    noteDiv.textContent = '';
    let noteID = 0;


    project.toDo.forEach((item) => {
        const newNote = document.createElement('div');
        const row1 = document.createElement('div');
        const row2 = document.createElement('div');
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        const descrip = document.createElement('div');
        const priority = document.createElement('div');
        const removeNoteButton = document.createElement('button');
        removeNoteButton.dataset.noteID = noteID;

        removeNoteButton.textContent = 'X';
        removeNoteButton.classList.add('removeNoteButton');
        removeNoteButton.dataset.projectID = item.projectID;
        removeNoteButton.dataset.noteID = item.noteID;

        title.textContent = item.title;
        title.classList.add('noteContent');
        title.setAttribute('id', 'noteTitleContent');

        dueDate.textContent = 'Due by: ' + item.dueDate;
        dueDate.classList.add('noteContent');

        descrip.textContent = 'Description: ' + item.descrip;

        priority.textContent = 'priority: ' + item.priority;
        priority.classList.add('noteContent');


        row1.appendChild(title);
        row1.appendChild(dueDate);
        row1.appendChild(priority);

        row1.appendChild(removeNoteButton);


        row2.appendChild(descrip);
        row1.classList.add('noteHead');
        row2.classList.add('descrip');


        newNote.classList.add('newNote');
        newNote.appendChild(row1);
        newNote.appendChild(row2);

        noteDiv.appendChild(newNote);

        newNote.addEventListener('click', () => {
            row2.style.display == '' ? row2.style.display = 'flex' : row2.style.display = '';
        });

        removeNoteButton.addEventListener('click', removeNote);
        noteID += 1;
    });
}


function removeForm() {
    bgModalNotes.style.display = 'none';
    noteForm.style.display = 'none';
}

function requiredFields() {
    if (!noteTitle.checkValidity()) {
        return false;
    }
    return true;
}

export { removeForm, requiredFields, displayNotes };
