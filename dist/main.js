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

/***/ "./src/CreateNote.js":
/*!***************************!*\
  !*** ./src/CreateNote.js ***!
  \***************************/
/*! exports provided: createNote, removeForm, requiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNote", function() { return createNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeForm", function() { return removeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFields", function() { return requiredFields; });
/* harmony import */ var _CreateProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProject.js */ "./src/CreateProject.js");



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
        let projectID = Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_0__["getCurrentProject"])();
        const lastID = () => {
            return lastID;
        }
        return { title, descrip, dueDate, priority, projectID}
    }

    function createNote() {
        const note = Note(noteTitle.value, noteDescrip.value, noteDueDate.value, notePriority.value);
        return (note)
    }

    /* function displayNote(note) {
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
    */


    function removeForm() {
        //noteForm.style.display = "none";
        bgModalNotes.style.display = "none";
        noteForm.style.display = "none";
    }

    function requiredFields(){
        if (noteTitle.value=="") {
            return false;
        } else {
            return true;
        }
    }
        




/***/ }),

/***/ "./src/CreateProject.js":
/*!******************************!*\
  !*** ./src/CreateProject.js ***!
  \******************************/
/*! exports provided: getProjects, newProject, addProject, addToDo, displayProject, getCurrentProject, displayNotes, requiredProjFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProject", function() { return newProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDo", function() { return addToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayProject", function() { return displayProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProject", function() { return getCurrentProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNotes", function() { return displayNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredProjFields", function() { return requiredProjFields; });
let projectID = 0;
let projectLibrary = [];
let currentProject;

function initialProject() {
    let defaultProject = newProject("Default_project");
    addProject(defaultProject)
    setCurrentProject(defaultProject);
    displayProject(defaultProject);
    const projDiv = document.querySelector(".newProject");
    projDiv.style.background = "rgba(0,0,0,.2)";
}

initialProject();



const projectDiv = document.querySelector(".projectDiv");
const getProjects = () => { return projectLibrary };


function setCurrentProject(project) {
    currentProject = project;
}

function getCurrentProject() {
    return currentProject;
}



function addToDo(newNote) {
    projectLibrary.forEach(item => {
        if (item.projectID == getCurrentProject().projectID) {
            item.toDo.push(newNote)
        }
    })
}



function newProject(projectTitle) {
    projectID++;
    let toDo = [];
    return { projectTitle, projectID, toDo };
}

function addProject(currentProject) {
    projectLibrary.push(currentProject);
    console.log(projectLibrary);
}

function displayProject(project) {
    const projectDiv = document.querySelector(".projectDiv");
    const itemDiv = document.createElement("div");
    itemDiv.textContent = project.projectTitle;
    itemDiv.classList.add("newProject");
    itemDiv.dataset.projectID = projectID;
    projectDiv.appendChild(itemDiv);

    itemDiv.addEventListener("click", () => {

        const projDivs = document.querySelectorAll(".newProject");

        projDivs.forEach(item => {
            item.style.background = "";
        })
        setCurrentProject(project);
        itemDiv.style.background = "rgba(0,0,0,.2)";
        displayNotes(project);

    });

}

function displayNotes(project) {
    const noteDiv = document.querySelector(".noteDiv");
    noteDiv.textContent = "";

    project.toDo.forEach((item) => {
        const newNote = document.createElement("div");
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        title.textContent = item.title;
        title.classList.add("noteContentTitle");
        dueDate.textContent = item.dueDate;

        newNote.appendChild(title);
        newNote.appendChild(dueDate);
        newNote.classList.add("newNote");
        noteDiv.appendChild(newNote);
    });
}

function requiredProjFields(projectTitleInput){
    if (projectTitleInput=="") {
        return false;
    } else {
        return true;
    }
}



/***/ }),

/***/ "./src/clearForm.js":
/*!**************************!*\
  !*** ./src/clearForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const submitNote = document.querySelector("#submitNote");
const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");
const noteChecked = document.querySelector("#noteChecked");
const body = document.querySelector("body");
const noteForm = document.querySelector(".noteForm");
const bgModal = document.querySelector(".bg-modal");
const newNoteButton = document.querySelector(".newNoteButton");

const clearForm = () => {
    noteTitle.value = "";
    noteDescrip.value = "";
    noteDueDate.value = "";
    notePriority.value = "";
} 

/* harmony default export */ __webpack_exports__["default"] = (clearForm);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateNote_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateNote.js */ "./src/CreateNote.js");
/* harmony import */ var _clearForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearForm.js */ "./src/clearForm.js");
/* harmony import */ var _CreateProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateProject.js */ "./src/CreateProject.js");




const submitNote = document.querySelector("#submitNote");
const cancelNote = document.querySelector("#cancelNote");

const noteTitle = document.querySelector("#noteTitle");
const noteDescrip = document.querySelector("#noteDescrip");
const noteDueDate = document.querySelector("#noteDueDate");
const notePriority = document.querySelector("#notePriority");
const noteChecked = document.querySelector("#noteChecked");

const body = document.querySelector("body");
const noteForm = document.querySelector(".noteForm");
const bgModalNotes = document.querySelector(".bg-modalNotes");
const newNoteButton = document.querySelector(".newNoteButton");


newNoteButton.addEventListener("click", () => {
    bgModalNotes.style.display = "flex";
    noteForm.style.display = "block";
})

cancelNote.addEventListener("click", (e) => {
    Object(_CreateNote_js__WEBPACK_IMPORTED_MODULE_0__["removeForm"])();
    Object(_clearForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

submitNote.addEventListener("click", (e) => {
    e.preventDefault();
    // add if requiredFields= true then do the bottom. otherwise do nothing...
    if (Object(_CreateNote_js__WEBPACK_IMPORTED_MODULE_0__["requiredFields"])()) {
        const newNote = Object(_CreateNote_js__WEBPACK_IMPORTED_MODULE_0__["createNote"])();
        //displayNote(newNote);
        Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["addToDo"])(newNote);
        Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["displayNotes"])(Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["getCurrentProject"])());
        Object(_CreateNote_js__WEBPACK_IMPORTED_MODULE_0__["removeForm"])();
        Object(_clearForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else {
        alert("no note for you");
    }
});



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
    if (Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["requiredProjFields"])(projectTitleInput.value)) {
        const project = Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["newProject"])(projectTitleInput.value);
        Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["addProject"])(project);
        Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["displayProject"])(project);
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZU5vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsZWFyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZFOzs7QUFHN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQSx3QkFBd0IsMkVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBLDJCQUEyQjs7O0FBRzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xCekI7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDbEM7QUFDa0k7O0FBRXpLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLElBQUksaUVBQVU7QUFDZCxJQUFJLDZEQUFTO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFjO0FBQ3RCLHdCQUF3QixpRUFBVTtBQUNsQztBQUNBLFFBQVEsaUVBQU87QUFDZixRQUFRLHNFQUFZLENBQUMsMkVBQWlCO0FBQ3RDLFFBQVEsaUVBQVU7QUFDbEIsUUFBUSw2REFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUIsd0JBQXdCLG9FQUFVO0FBQ2xDLFFBQVEsb0VBQVU7QUFDbEIsUUFBUSx3RUFBYztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHthZGRUb0RvLCBnZXRDdXJyZW50UHJvamVjdCwgZGlzcGxheU5vdGVzfSBmcm9tICBcIi4vQ3JlYXRlUHJvamVjdC5qc1wiO1xuXG5cbiAgICBjb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXROb3RlXCIpO1xuICAgIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVRpdGxlXCIpO1xuICAgIGNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbiAgICBjb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG4gICAgY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlUHJpb3JpdHlcIik7XG4gICAgY29uc3Qgbm90ZUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVDaGVja2VkXCIpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG4gICAgY29uc3QgYmdNb2RhbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbE5vdGVzXCIpO1xuICAgIGNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVCdXR0b25cIik7XG5cblxuXG4gICAgbGV0IG5vdGVJRCA9IDA7XG5cblxuXG4gICAgZnVuY3Rpb24gTm90ZSh0aXRsZSwgZGVzY3JpcCA9IFwiXCIsIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSA9IFwibm9uZVwiKSB7XG4gICAgICAgIG5vdGVJRCsrO1xuICAgICAgICBsZXQgcHJvamVjdElEID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcCwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xuICAgICAgICBjb25zdCBub3RlID0gTm90ZShub3RlVGl0bGUudmFsdWUsIG5vdGVEZXNjcmlwLnZhbHVlLCBub3RlRHVlRGF0ZS52YWx1ZSwgbm90ZVByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIChub3RlKVxuICAgIH1cblxuICAgIC8qIGZ1bmN0aW9uIGRpc3BsYXlOb3RlKG5vdGUpIHtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZURpdlwiKTtcblxuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbm90ZS50aXRsZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVDb250ZW50VGl0bGVcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBub3RlLmR1ZURhdGU7XG5cbiAgICAgICAgbmV3Tm90ZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIG5ld05vdGUuY2xhc3NMaXN0LmFkZChcIm5ld05vdGVcIik7XG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XG4gICAgfVxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgICAgIC8vbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBiZ01vZGFsTm90ZXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWlyZWRGaWVsZHMoKXtcbiAgICAgICAgaWYgKG5vdGVUaXRsZS52YWx1ZT09XCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuXG5cbmV4cG9ydCAge2NyZWF0ZU5vdGUsIHJlbW92ZUZvcm0sIHJlcXVpcmVkRmllbGRzIH07IiwibGV0IHByb2plY3RJRCA9IDA7XG5sZXQgcHJvamVjdExpYnJhcnkgPSBbXTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuZnVuY3Rpb24gaW5pdGlhbFByb2plY3QoKSB7XG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3UHJvamVjdChcIkRlZmF1bHRfcHJvamVjdFwiKTtcbiAgICBhZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxuICAgIHNldEN1cnJlbnRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdFwiKTtcbiAgICBwcm9qRGl2LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsLjIpXCI7XG59XG5cbmluaXRpYWxQcm9qZWN0KCk7XG5cblxuXG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0RGl2XCIpO1xuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7IHJldHVybiBwcm9qZWN0TGlicmFyeSB9O1xuXG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFRvRG8obmV3Tm90ZSkge1xuICAgIHByb2plY3RMaWJyYXJ5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByb2plY3RJRCA9PSBnZXRDdXJyZW50UHJvamVjdCgpLnByb2plY3RJRCkge1xuICAgICAgICAgICAgaXRlbS50b0RvLnB1c2gobmV3Tm90ZSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIHByb2plY3RJRCsrO1xuICAgIGxldCB0b0RvID0gW107XG4gICAgcmV0dXJuIHsgcHJvamVjdFRpdGxlLCBwcm9qZWN0SUQsIHRvRG8gfTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCkge1xuICAgIHByb2plY3RMaWJyYXJ5LnB1c2goY3VycmVudFByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaXZcIik7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbURpdi50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RcIik7XG4gICAgaXRlbURpdi5kYXRhc2V0LnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG4gICAgaXRlbURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHByb2pEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXdQcm9qZWN0XCIpO1xuXG4gICAgICAgIHByb2pEaXZzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiO1xuICAgICAgICB9KVxuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgaXRlbURpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLC4yKVwiO1xuICAgICAgICBkaXNwbGF5Tm90ZXMocHJvamVjdCk7XG5cbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90ZXMocHJvamVjdCkge1xuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVEaXZcIik7XG4gICAgbm90ZURpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBwcm9qZWN0LnRvRG8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlQ29udGVudFRpdGxlXCIpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuXG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBuZXdOb3RlLmNsYXNzTGlzdC5hZGQoXCJuZXdOb3RlXCIpO1xuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5ld05vdGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZFByb2pGaWVsZHMocHJvamVjdFRpdGxlSW5wdXQpe1xuICAgIGlmIChwcm9qZWN0VGl0bGVJbnB1dD09XCJcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBnZXRQcm9qZWN0cywgbmV3UHJvamVjdCwgYWRkUHJvamVjdCwgYWRkVG9EbywgZGlzcGxheVByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBkaXNwbGF5Tm90ZXMsIHJlcXVpcmVkUHJvakZpZWxkcyB9OyIsImNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdE5vdGVcIik7XG5jb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbmNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuY29uc3Qgbm90ZUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVDaGVja2VkXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVGb3JtXCIpO1xuY29uc3QgYmdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIik7XG5jb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlQnV0dG9uXCIpO1xuXG5jb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgbm90ZVRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBub3RlRGVzY3JpcC52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZUR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVQcmlvcml0eS52YWx1ZSA9IFwiXCI7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBjbGVhckZvcm07XG4iLCJpbXBvcnQgeyByZXF1aXJlZEZpZWxkcywgcmVtb3ZlRm9ybSwgY3JlYXRlTm90ZSB9IGZyb20gXCIuL0NyZWF0ZU5vdGUuanNcIjtcbmltcG9ydCBjbGVhckZvcm0gZnJvbSBcIi4vY2xlYXJGb3JtLmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cywgbmV3UHJvamVjdCwgYWRkUHJvamVjdCwgYWRkVG9Ebywgc2V0Q3VycmVudFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBkaXNwbGF5UHJvamVjdCwgZGlzcGxheU5vdGVzLCByZXF1aXJlZFByb2pGaWVsZHN9IGZyb20gXCIuL0NyZWF0ZVByb2plY3QuanNcIjtcblxuY29uc3Qgc3VibWl0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Tm90ZVwiKTtcbmNvbnN0IGNhbmNlbE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbE5vdGVcIik7XG5cbmNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVRpdGxlXCIpO1xuY29uc3Qgbm90ZURlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEZXNjcmlwXCIpO1xuY29uc3Qgbm90ZUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEdWVEYXRlXCIpO1xuY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlUHJpb3JpdHlcIik7XG5jb25zdCBub3RlQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUNoZWNrZWRcIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcbmNvbnN0IGJnTW9kYWxOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxOb3Rlc1wiKTtcbmNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVCdXR0b25cIik7XG5cblxubmV3Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJnTW9kYWxOb3Rlcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbmNhbmNlbE5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlRm9ybSgpO1xuICAgIGNsZWFyRm9ybSgpO1xufSk7XG5cbnN1Ym1pdE5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGFkZCBpZiByZXF1aXJlZEZpZWxkcz0gdHJ1ZSB0aGVuIGRvIHRoZSBib3R0b20uIG90aGVyd2lzZSBkbyBub3RoaW5nLi4uXG4gICAgaWYgKHJlcXVpcmVkRmllbGRzKCkpIHtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGNyZWF0ZU5vdGUoKTtcbiAgICAgICAgLy9kaXNwbGF5Tm90ZShuZXdOb3RlKTtcbiAgICAgICAgYWRkVG9EbyhuZXdOb3RlKTtcbiAgICAgICAgZGlzcGxheU5vdGVzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwibm8gbm90ZSBmb3IgeW91XCIpO1xuICAgIH1cbn0pO1xuXG5cblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdEJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcbmNvbnN0IGJnTW9kYWxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxQcm9qZWN0c1wiKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVJbnB1dFwiKTtcbmNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFByb2plY3RcIik7XG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxQcm9qZWN0XCIpO1xuXG5cblxuXG5cblxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJnTW9kYWxQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cblxuc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHJlcXVpcmVkUHJvakZpZWxkcyhwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KCk7XG4gICAgICAgIHJlbW92ZVByb2plY3RGb3JtKClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYWxlcnQoXCJubyBwcm9qZWN0IGZvciB5b3VcIilcbiAgICB9XG59KTtcblxuY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjbGVhclByb2plY3QoKTtcbiAgICByZW1vdmVQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGb3JtKCkge1xuICAgIC8vbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGJnTW9kYWxQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3QoKSB7XG4gICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9