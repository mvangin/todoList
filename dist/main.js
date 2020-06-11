/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");



if (!localStorage.getItem("storedLibrary") ) {
    let defaultProject = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].newProject("Default project");
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(defaultProject)
}

_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].setDefaultProject();









/***/ }),

/***/ "./src/noteController.js":
/*!*******************************!*\
  !*** ./src/noteController.js ***!
  \*******************************/
/*! exports provided: Note, createNote, addNote, removeNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNote", function() { return createNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNote", function() { return addNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNote", function() { return removeNote; });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _ui_notes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-notes.js */ "./src/ui-notes.js");




const noteTitle = document.querySelector('#noteTitle');
const noteDescrip = document.querySelector('#noteDescrip');
const noteDueDate = document.querySelector('#noteDueDate');
const notePriority = document.querySelector('#notePriority');


function Note(title, descrip = '', dueDate = '', priority = 'none') {
    return {title, descrip, dueDate, priority};
}

function createNote() {
    const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
    return (note);
}

function addNote(newNote, project) {
    project.toDo.push(newNote);
    localStorage.setItem('storedLibrary', JSON.stringify(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects()));
}

function removeNote(e) {
    const index = e.target.dataset.noteID;
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject().toDo.splice(index, 1);
    localStorage.setItem('storedLibrary', JSON.stringify(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects()));
    Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_1__["displayNotes"])(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject());

}



/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-project.js */ "./src/ui-project.js");
/* harmony import */ var _ui_notes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-notes.js */ "./src/ui-notes.js");
/* eslint-disable indent */




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
        Object(_ui_project_js__WEBPACK_IMPORTED_MODULE_0__["displayProjects"])();
        Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_1__["displayNotes"])(projectLibrary[0]);
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

/* harmony default export */ __webpack_exports__["default"] = (projectController);


/***/ }),

/***/ "./src/ui-notes.js":
/*!*************************!*\
  !*** ./src/ui-notes.js ***!
  \*************************/
/*! exports provided: removeForm, requiredFields, displayNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeForm", function() { return removeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFields", function() { return requiredFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNotes", function() { return displayNotes; });
/* harmony import */ var _noteController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteController.js */ "./src/noteController.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* eslint-disable indent */




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
        const newNote = Object(_noteController_js__WEBPACK_IMPORTED_MODULE_0__["createNote"])();
        Object(_noteController_js__WEBPACK_IMPORTED_MODULE_0__["addNote"])(newNote, _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject());
        displayNotes(_projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject());
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

        removeNoteButton.addEventListener('click', _noteController_js__WEBPACK_IMPORTED_MODULE_0__["removeNote"]);
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




/***/ }),

/***/ "./src/ui-project.js":
/*!***************************!*\
  !*** ./src/ui-project.js ***!
  \***************************/
/*! exports provided: displayProjects, requiredProjFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayProjects", function() { return displayProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredProjFields", function() { return requiredProjFields; });
/* harmony import */ var _ui_notes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-notes.js */ "./src/ui-notes.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* eslint-disable indent */




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
        const project = _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].newProject(projectTitleInput.value);
        _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project);
        _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project);
        Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_0__["displayNotes"])(project);
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
    const projectLibrary = _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects();

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

        if (_projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject() == project) {
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
            _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project);
            wrapperProject.style.background = 'rgba(0,0,0,.2)';
            Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_0__["displayNotes"])(project);
        });

        removeProjectButton.addEventListener('click', (e) => {
            _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(e);
            _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setDefaultProject();
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ub3RlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLW5vdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91aS1wcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnNEOztBQUV0RDtBQUNBLHlCQUF5Qiw2REFBaUI7QUFDMUMsSUFBSSw2REFBaUI7QUFDckI7O0FBRUEsNkRBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNnQjtBQUNsQjs7QUFFckQ7QUFDQTtBQUNB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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCJcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZExpYnJhcnlcIikgKSB7XG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdENvbnRyb2xsZXIubmV3UHJvamVjdChcIkRlZmF1bHQgcHJvamVjdFwiKTtcbiAgICBwcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxufVxuXG5wcm9qZWN0Q29udHJvbGxlci5zZXREZWZhdWx0UHJvamVjdCgpO1xuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7cmVtb3ZlRm9ybSwgcmVxdWlyZWRGaWVsZHMsIGRpc3BsYXlOb3RlcyB9IGZyb20gJy4vdWktbm90ZXMuanMnXG5pbXBvcnQge2dldEFsbFByb2plY3RzfSBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiXG5cbmNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlVGl0bGUnKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVEZXNjcmlwJyk7XG5jb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlRHVlRGF0ZScpO1xuY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVQcmlvcml0eScpO1xuXG5cbmZ1bmN0aW9uIE5vdGUodGl0bGUsIGRlc2NyaXAgPSAnJywgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdub25lJykge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXAsIGR1ZURhdGUsIHByaW9yaXR5fTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcbiAgICBjb25zdCBub3RlID0gTm90ZShub3RlVGl0bGUudmFsdWUsIG5vdGVEZXNjcmlwLnZhbHVlLCBub3RlRHVlRGF0ZS52YWx1ZSwgbm90ZVByaW9yaXR5LnZhbHVlKTtcbiAgICByZXR1cm4gKG5vdGUpO1xufVxuXG5mdW5jdGlvbiBhZGROb3RlKG5ld05vdGUsIHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRvRG8ucHVzaChuZXdOb3RlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkTGlicmFyeScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RDb250cm9sbGVyLmdldEFsbFByb2plY3RzKCkpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm90ZShlKSB7XG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm5vdGVJRDtcbiAgICBwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvRG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkTGlicmFyeScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RDb250cm9sbGVyLmdldEFsbFByb2plY3RzKCkpKTtcbiAgICBkaXNwbGF5Tm90ZXMocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG5cbn1cblxuZXhwb3J0IHsgTm90ZSwgY3JlYXRlTm90ZSwgYWRkTm90ZSwgcmVtb3ZlTm90ZSB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzfSBmcm9tICcuL3VpLXByb2plY3QuanMnO1xuaW1wb3J0IHsgZGlzcGxheU5vdGVzfSBmcm9tICcuL3VpLW5vdGVzLmpzJztcblxuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RMaWJyYXJ5O1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRMaWJyYXJ5JykpIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRMaWJyYXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5ID0gW107XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gc2V0RGVmYXVsdFByb2plY3QoKSB7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RMaWJyYXJ5WzBdKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0TGlicmFyeVswXSk7XG4gICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlclByb2plY3QnKTtcbiAgICAgICAgcHJvakRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDAsLjIpJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaWJyYXJ5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgdG9EbyA9IFtdO1xuICAgICAgICByZXR1cm4geyBwcm9qZWN0VGl0bGUsIHRvRG8gfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5LnB1c2goY3VycmVudFByb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkTGlicmFyeScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaWJyYXJ5KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJRDtcbiAgICAgICAgcHJvamVjdExpYnJhcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZExpYnJhcnknLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgbmV3UHJvamVjdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0QWxsUHJvamVjdHMsIHNldERlZmF1bHRQcm9qZWN0fVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0IHsgTm90ZSwgY3JlYXRlTm90ZSwgYWRkTm90ZSwgcmVtb3ZlTm90ZSB9IGZyb20gJy4vbm90ZUNvbnRyb2xsZXIuanMnXG5pbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgZnJvbSAnLi9wcm9qZWN0Q29udHJvbGxlci5qcydcblxuXG5jb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdE5vdGUnKTtcbmNvbnN0IGNhbmNlbE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsTm90ZScpO1xuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUZvcm0nKTtcblxuY29uc3QgYmdNb2RhbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLW1vZGFsTm90ZXMnKTtcbmNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3Tm90ZUJ1dHRvbicpO1xuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVUaXRsZScpO1xuY29uc3Qgbm90ZURlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZURlc2NyaXAnKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVEdWVEYXRlJyk7XG5jb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZVByaW9yaXR5Jyk7XG5cblxubmV3Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBiZ01vZGFsTm90ZXMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jYW5jZWxOb3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVGb3JtKCk7XG4gICAgbm90ZUZvcm0ucmVzZXQoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHJlcXVpcmVkRmllbGRzKCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXdOb3RlID0gY3JlYXRlTm90ZSgpO1xuICAgICAgICBhZGROb3RlKG5ld05vdGUsIHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICBkaXNwbGF5Tm90ZXMocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgbm90ZUZvcm0ucmVzZXQoKTtcbiAgICB9XG59KTtcblxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90ZXMocHJvamVjdCkge1xuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZURpdicpO1xuICAgIG5vdGVEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICBsZXQgbm90ZUlEID0gMDtcblxuXG4gICAgcHJvamVjdC50b0RvLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZU5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5kYXRhc2V0Lm5vdGVJRCA9IG5vdGVJRDtcblxuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZU5vdGVCdXR0b24nKTtcbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5kYXRhc2V0LnByb2plY3RJRCA9IGl0ZW0ucHJvamVjdElEO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmRhdGFzZXQubm90ZUlEID0gaXRlbS5ub3RlSUQ7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGVudCcpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVUaXRsZUNvbnRlbnQnKTtcblxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBieTogJyArIGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGVudCcpO1xuXG4gICAgICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBpdGVtLmRlc2NyaXA7XG5cbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAncHJpb3JpdHk6ICcgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGVudCcpO1xuXG5cbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQocmVtb3ZlTm90ZUJ1dHRvbik7XG5cblxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGRlc2NyaXApO1xuICAgICAgICByb3cxLmNsYXNzTGlzdC5hZGQoJ25vdGVIZWFkJyk7XG4gICAgICAgIHJvdzIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcCcpO1xuXG5cbiAgICAgICAgbmV3Tm90ZS5jbGFzc0xpc3QuYWRkKCduZXdOb3RlJyk7XG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQocm93MSk7XG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQocm93Mik7XG5cbiAgICAgICAgbm90ZURpdi5hcHBlbmRDaGlsZChuZXdOb3RlKTtcblxuICAgICAgICBuZXdOb3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcm93Mi5zdHlsZS5kaXNwbGF5ID09ICcnID8gcm93Mi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnIDogcm93Mi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVOb3RlKTtcbiAgICAgICAgbm90ZUlEICs9IDE7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgICBiZ01vZGFsTm90ZXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZEZpZWxkcygpIHtcbiAgICBpZiAoIW5vdGVUaXRsZS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlRm9ybSwgcmVxdWlyZWRGaWVsZHMsIGRpc3BsYXlOb3RlcyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5pbXBvcnQgeyBkaXNwbGF5Tm90ZXMgfSBmcm9tICcuL3VpLW5vdGVzLmpzJ1xuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnXG5cblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0QnV0dG9uJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuY29uc3QgYmdNb2RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLW1vZGFsUHJvamVjdHMnKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZUlucHV0Jyk7XG5jb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsUHJvamVjdCcpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZUlucHV0Jyk7XG5cblxuXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJnTW9kYWxQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbnN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChyZXF1aXJlZFByb2pGaWVsZHMoKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIHJlbW92ZVByb2plY3RGb3JtKCk7XG4gICAgfVxufSk7XG5cbmNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcmVtb3ZlUHJvamVjdEZvcm0oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZvcm0oKSB7XG4gICAgYmdNb2RhbFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RGl2Jyk7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGxldCBwcm9qZWN0SUQgPSAwO1xuICAgIGNvbnN0IHByb2plY3RMaWJyYXJ5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0QWxsUHJvamVjdHMoKTtcblxuICAgIHByb2plY3RMaWJyYXJ5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gbWFrZSBhIGxhcmdlciB3cmFwcGVyIGFyb3VuZCBib3RoIGJ1dHRvbiBhbmQgY2xpY2thYmxlIGRpdi4gZmxleCB0aGUgbGFyZ2UgYm94LiBcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCByZW1vdmVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG4gICAgICAgIHByb2plY3RUaXRsZURpdi5kYXRhc2V0LnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdCA9ICdwcm9qZWN0VGl0bGVEaXYnO1xuXG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ1dHRvbicpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmRhdGFzZXQucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICByZW1vdmVCdXR0b25EaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgd3JhcHBlclByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgd3JhcHBlclByb2plY3QuY2xhc3NMaXN0LmFkZCgnd3JhcHBlclByb2plY3QnKTtcbiAgICAgICAgd3JhcHBlclByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRGl2KTtcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHdyYXBwZXJQcm9qZWN0KTtcblxuICAgICAgICBpZiAocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICB3cmFwcGVyUHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDAsLjIpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9qZWN0SUQgIT09IDApIHtcbiAgICAgICAgICAgIHdyYXBwZXJQcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvakRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclByb2plY3QnKTtcbiAgICAgICAgICAgIHByb2pEaXZzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB3cmFwcGVyUHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDAsLjIpJztcbiAgICAgICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGUpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuc2V0RGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdElEICs9IDE7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkUHJvakZpZWxkcygpIHtcbiAgICBpZiAoIXByb2plY3RJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzLCByZXF1aXJlZFByb2pGaWVsZHMgfSJdLCJzb3VyY2VSb290IjoiIn0=