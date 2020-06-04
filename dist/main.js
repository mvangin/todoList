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




const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");


function Note(title, descrip = "", dueDate = "", priority = "none") {
    return { title, descrip, dueDate, priority }
}

function createNote() {
    const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
    return (note)
}

function addNote(newNote, project) {
    project.toDo.push(newNote)
    localStorage.setItem("storedLibrary", JSON.stringify(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects()))
}

function removeNote(e) {
    let index = e.target.dataset.noteID;
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject().toDo.splice(index, 1);
    localStorage.setItem("storedLibrary", JSON.stringify(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects()))
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




const projectController = (() => {

    let projectLibrary; 

    if (localStorage.getItem("storedLibrary") ) {
        projectLibrary = JSON.parse(localStorage.getItem("storedLibrary"))
    } else {
        projectLibrary = [];

    }

    let currentProject;

    function setDefaultProject() {
        setCurrentProject(projectLibrary[0]);
        Object(_ui_project_js__WEBPACK_IMPORTED_MODULE_0__["displayProjects"])();
        Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_1__["displayNotes"])(projectLibrary[0]);
        const projDiv = document.querySelector(".wrapperProject");
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
        localStorage.setItem("storedLibrary", JSON.stringify(projectLibrary));
        console.log(projectLibrary);


    }

    function removeProject(e) {
        let index = e.target.dataset.projectID;
        projectLibrary.splice(index, 1);
        localStorage.setItem("storedLibrary", JSON.stringify(projectLibrary));


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




const submitNote = document.querySelector("#submitNote");
const cancelNote = document.querySelector("#cancelNote");
const noteForm = document.querySelector(".noteForm");
const bgModalNotes = document.querySelector(".bg-modalNotes");
const newNoteButton = document.querySelector(".newNoteButton");
const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");

newNoteButton.addEventListener("click", () => {
    bgModalNotes.style.display = "flex";
    noteForm.style.display = "block";
});

cancelNote.addEventListener("click", (e) => {
    removeForm();
    clearForm();
});

submitNote.addEventListener("click", (e) => {
    e.preventDefault();
    if (requiredFields()) {
        const newNote = Object(_noteController_js__WEBPACK_IMPORTED_MODULE_0__["createNote"])();
        Object(_noteController_js__WEBPACK_IMPORTED_MODULE_0__["addNote"])(newNote, _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject());
        displayNotes(_projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject());
        removeForm();
        clearForm();
    } else {
        alert("no note for you");
    }
});

const clearForm = () => {
    noteTitle.value = "";
    noteDescrip.value = "";
    noteDueDate.value = "";
    notePriority.value = "";
}

function displayNotes(project) {
    const noteDiv = document.querySelector(".noteDiv");
    noteDiv.textContent = "";
    let noteID = 0;

    project.toDo.forEach((item) => {
        const newNote = document.createElement("div");
        const row1 = document.createElement("div");
        const row2 = document.createElement("div");
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        const descrip = document.createElement('div');
        const priority = document.createElement('div')
        const removeNoteButton = document.createElement("button");
        removeNoteButton.dataset.noteID = noteID;

        removeNoteButton.textContent = "X";
        removeNoteButton.classList.add("removeNoteButton");
        removeNoteButton.dataset.projectID = item.projectID;
        removeNoteButton.dataset.noteID = item.noteID;

        title.textContent = item.title;
        title.classList.add("noteContent");
        title.setAttribute("id", "noteTitleContent");

        dueDate.textContent = "Due by: " + item.dueDate;
        dueDate.classList.add("noteContent");

        descrip.textContent = "Description: " + item.descrip;

        priority.textContent = "priority: " + item.priority;
        priority.classList.add("noteContent");


        row1.appendChild(title);
        row1.appendChild(dueDate);
        row1.appendChild(priority);

        row1.appendChild(removeNoteButton);


        row2.appendChild(descrip);
        row1.classList.add("noteHead");
        row2.classList.add("descrip");


        newNote.classList.add("newNote");
        newNote.appendChild(row1);
        newNote.appendChild(row2);

        noteDiv.appendChild(newNote);

        newNote.addEventListener("click", () => {
            row2.style.display == "" ? row2.style.display = "flex" : row2.style.display = "";
        })

        removeNoteButton.addEventListener("click", _noteController_js__WEBPACK_IMPORTED_MODULE_0__["removeNote"]);
        noteID++;

    });
}

function removeForm() {
    const bgModalNotes = document.querySelector(".bg-modalNotes");
    const noteForm = document.querySelector(".noteForm");

    bgModalNotes.style.display = "none";
    noteForm.style.display = "none";
}

function requiredFields() {
    if (noteTitle.value == "") {
        return false;
    } else {
        return true;
    }
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
        const project = _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].newProject(projectTitleInput.value);
        _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project);
        _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project);
        Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_0__["displayNotes"])(project);
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
    let projectLibrary = _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects();

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

        if (_projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject() == project) {
            wrapperProject.style.background = "rgba(0,0,0,.2)";
        }

        if (projectID != 0) {
            wrapperProject.appendChild(removeProjectButton);
        }

        projectTitleDiv.addEventListener("click", () => {
            const projDivs = document.querySelectorAll(".wrapperProject");
            projDivs.forEach(item => {
                item.style.background = "";
                _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project);
                wrapperProject.style.background = "rgba(0,0,0,.2)";
                Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_0__["displayNotes"])(project);
            });

        })

        removeProjectButton.addEventListener("click", (e) => {
            _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(e);
            _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setDefaultProject();
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ub3RlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLW5vdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91aS1wcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnNEOztBQUV0RDtBQUNBLHlCQUF5Qiw2REFBaUI7QUFDMUMsSUFBSSw2REFBaUI7QUFDckI7O0FBRUEsNkRBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNnQjtBQUNsQjs7QUFFckQ7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXIuanNcIlxuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiKSApIHtcbiAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KFwiRGVmYXVsdCBwcm9qZWN0XCIpO1xuICAgIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpXG59XG5cbnByb2plY3RDb250cm9sbGVyLnNldERlZmF1bHRQcm9qZWN0KCk7XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBwcm9qZWN0Q29udHJvbGxlciBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHtyZW1vdmVGb3JtLCByZXF1aXJlZEZpZWxkcywgZGlzcGxheU5vdGVzIH0gZnJvbSBcIi4vdWktbm90ZXMuanNcIlxuaW1wb3J0IHtnZXRBbGxQcm9qZWN0c30gZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXIuanNcIlxuXG5jb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbmNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuXG5cbmZ1bmN0aW9uIE5vdGUodGl0bGUsIGRlc2NyaXAgPSBcIlwiLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSBcIm5vbmVcIikge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwLCBkdWVEYXRlLCBwcmlvcml0eSB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XG4gICAgY29uc3Qgbm90ZSA9IE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgcmV0dXJuIChub3RlKVxufVxuXG5mdW5jdGlvbiBhZGROb3RlKG5ld05vdGUsIHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRvRG8ucHVzaChuZXdOb3RlKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0Q29udHJvbGxlci5nZXRBbGxQcm9qZWN0cygpKSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm90ZShlKSB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5ub3RlSUQ7XG4gICAgcHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b0RvLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRMaWJyYXJ5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RDb250cm9sbGVyLmdldEFsbFByb2plY3RzKCkpKVxuICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcblxufVxuXG5cbmV4cG9ydCB7IE5vdGUsIGNyZWF0ZU5vdGUsIGFkZE5vdGUsIHJlbW92ZU5vdGUgfTsiLCJpbXBvcnQgeyBkaXNwbGF5UHJvamVjdHN9IGZyb20gXCIuL3VpLXByb2plY3QuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlOb3Rlc30gZnJvbSBcIi4vdWktbm90ZXMuanNcIjtcblxuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdExpYnJhcnk7IFxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiKSApIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiKSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0TGlicmFyeSA9IFtdO1xuXG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gc2V0RGVmYXVsdFByb2plY3QoKSB7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RMaWJyYXJ5WzBdKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0TGlicmFyeVswXSk7XG4gICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJQcm9qZWN0XCIpO1xuICAgICAgICBwcm9qRGl2LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsLjIpXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlicmFyeTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Byb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGxldCB0b0RvID0gW107XG4gICAgICAgIHJldHVybiB7IHByb2plY3RUaXRsZSwgdG9EbyB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnkucHVzaChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeSk7XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSkge1xuICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJRDtcbiAgICAgICAgcHJvamVjdExpYnJhcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRMaWJyYXJ5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaWJyYXJ5KSk7XG5cblxuICAgIH1cblxuICAgIHJldHVybiB7IHNldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgbmV3UHJvamVjdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0QWxsUHJvamVjdHMsIHNldERlZmF1bHRQcm9qZWN0fVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29udHJvbGxlcjtcbiIsImltcG9ydCB7IE5vdGUsIGNyZWF0ZU5vdGUsIGFkZE5vdGUsIHJlbW92ZU5vdGUgfSBmcm9tIFwiLi9ub3RlQ29udHJvbGxlci5qc1wiXG5pbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXIuanNcIlxuXG5cbmNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdE5vdGVcIik7XG5jb25zdCBjYW5jZWxOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxOb3RlXCIpO1xuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVGb3JtXCIpO1xuY29uc3QgYmdNb2RhbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbE5vdGVzXCIpO1xuY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZUJ1dHRvblwiKTtcbmNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVRpdGxlXCIpO1xuY29uc3Qgbm90ZURlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEZXNjcmlwXCIpO1xuY29uc3Qgbm90ZUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEdWVEYXRlXCIpO1xuY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlUHJpb3JpdHlcIik7XG5cbm5ld05vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBiZ01vZGFsTm90ZXMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG5vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY2FuY2VsTm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW1vdmVGb3JtKCk7XG4gICAgY2xlYXJGb3JtKCk7XG59KTtcblxuc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHJlcXVpcmVkRmllbGRzKCkpIHtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGNyZWF0ZU5vdGUoKTtcbiAgICAgICAgYWRkTm90ZShuZXdOb3RlLCBwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgZGlzcGxheU5vdGVzKHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwibm8gbm90ZSBmb3IgeW91XCIpO1xuICAgIH1cbn0pO1xuXG5jb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgbm90ZVRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBub3RlRGVzY3JpcC52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZUR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVQcmlvcml0eS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KSB7XG4gICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZURpdlwiKTtcbiAgICBub3RlRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgbm90ZUlEID0gMDtcblxuICAgIHByb2plY3QudG9Eby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHJlbW92ZU5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmRhdGFzZXQubm90ZUlEID0gbm90ZUlEO1xuXG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlTm90ZUJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5kYXRhc2V0LnByb2plY3RJRCA9IGl0ZW0ucHJvamVjdElEO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmRhdGFzZXQubm90ZUlEID0gaXRlbS5ub3RlSUQ7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZUNvbnRlbnRcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVRpdGxlQ29udGVudFwiKTtcblxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgYnk6IFwiICsgaXRlbS5kdWVEYXRlO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJub3RlQ29udGVudFwiKTtcblxuICAgICAgICBkZXNjcmlwLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBpdGVtLmRlc2NyaXA7XG5cbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcInByaW9yaXR5OiBcIiArIGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJub3RlQ29udGVudFwiKTtcblxuXG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICByb3cxLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICByb3cxLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICByb3cxLmFwcGVuZENoaWxkKHJlbW92ZU5vdGVCdXR0b24pO1xuXG5cbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChkZXNjcmlwKTtcbiAgICAgICAgcm93MS5jbGFzc0xpc3QuYWRkKFwibm90ZUhlYWRcIik7XG4gICAgICAgIHJvdzIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XG5cblxuICAgICAgICBuZXdOb3RlLmNsYXNzTGlzdC5hZGQoXCJuZXdOb3RlXCIpO1xuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKHJvdzEpO1xuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKHJvdzIpO1xuXG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XG5cbiAgICAgICAgbmV3Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcm93Mi5zdHlsZS5kaXNwbGF5ID09IFwiXCIgPyByb3cyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIiA6IHJvdzIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlTm90ZSk7XG4gICAgICAgIG5vdGVJRCsrO1xuXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgYmdNb2RhbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbE5vdGVzXCIpO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcblxuICAgIGJnTW9kYWxOb3Rlcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZEZpZWxkcygpIHtcbiAgICBpZiAobm90ZVRpdGxlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVtb3ZlRm9ybSwgcmVxdWlyZWRGaWVsZHMsIGRpc3BsYXlOb3RlcyB9IiwiaW1wb3J0IHsgZGlzcGxheU5vdGVzIH0gZnJvbSBcIi4vdWktbm90ZXMuanNcIlxuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCJcblxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuY29uc3QgYmdNb2RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFByb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZUlucHV0XCIpO1xuY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UHJvamVjdFwiKTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFByb2plY3RcIik7XG5cblxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJnTW9kYWxQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbnN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChyZXF1aXJlZFByb2pGaWVsZHMocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGNsZWFyUHJvamVjdCgpO1xuICAgICAgICByZW1vdmVQcm9qZWN0Rm9ybSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwibm8gcHJvamVjdCBmb3IgeW91XCIpXG4gICAgfVxufSk7XG5cbmNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xlYXJQcm9qZWN0KCk7XG4gICAgcmVtb3ZlUHJvamVjdEZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0Rm9ybSgpIHtcbiAgICAvL25vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBiZ01vZGFsUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0KCkge1xuICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaXZcIik7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG4gICAgbGV0IHByb2plY3RMaWJyYXJ5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0QWxsUHJvamVjdHMoKTtcblxuICAgIHByb2plY3RMaWJyYXJ5LmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgLy8gbWFrZSBhIGxhcmdlciB3cmFwcGVyIGFyb3VuZCBib3RoIGJ1dHRvbiBhbmQgY2xpY2thYmxlIGRpdi4gZmxleCB0aGUgbGFyZ2UgYm94LiBcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdERpdlwiKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmRhdGFzZXQucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0VGl0bGVEaXZcIjtcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RCdXR0b25cIik7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uZGF0YXNldC5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgICAgIHJlbW92ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICB3cmFwcGVyUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHdyYXBwZXJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyUHJvamVjdFwiKTtcbiAgICAgICAgd3JhcHBlclByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRGl2KTtcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHdyYXBwZXJQcm9qZWN0KTtcblxuICAgICAgICBpZiAocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICB3cmFwcGVyUHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLC4yKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2plY3RJRCAhPSAwKSB7XG4gICAgICAgICAgICB3cmFwcGVyUHJvamVjdC5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvakRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndyYXBwZXJQcm9qZWN0XCIpO1xuICAgICAgICAgICAgcHJvakRpdnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250cm9sbGVyLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXJQcm9qZWN0LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsLjIpXCI7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5vdGVzKHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIucmVtb3ZlUHJvamVjdChlKTtcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sbGVyLnNldERlZmF1bHRQcm9qZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RJRCsrO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcmVxdWlyZWRQcm9qRmllbGRzKHByb2plY3RUaXRsZUlucHV0KSB7XG4gICAgaWYgKHByb2plY3RUaXRsZUlucHV0ID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzLCByZXF1aXJlZFByb2pGaWVsZHMgfTsiXSwic291cmNlUm9vdCI6IiJ9