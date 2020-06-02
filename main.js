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

    function requiredFields() {
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
        const row1 = document.createElement("div");
        const row2 = document.createElement("div");
        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        const descrip = document.createElement('div');
        const priority = document.createElement('div')
        const removeNoteButton = document.createElement("button");
        removeNoteButton.textContent = "Remove Note";
        removeNoteButton.classList.add("removeNoteButton");
        

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZU5vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsZWFyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZFOzs7QUFHN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQSx3QkFBd0IsMkVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQSwyQkFBMkI7OztBQUczQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOztBQUVlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQnpCO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQ2xDO0FBQ2tJOztBQUV6SztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLGlFQUFVO0FBQ2QsSUFBSSw2REFBUztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0Qix3QkFBd0IsaUVBQVU7QUFDbEM7QUFDQSxRQUFRLGlFQUFPO0FBQ2YsUUFBUSxzRUFBWSxDQUFDLDJFQUFpQjtBQUN0QyxRQUFRLGlFQUFVO0FBQ2xCLFFBQVEsNkRBQVM7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLFFBQVEsNEVBQWtCO0FBQzFCLHdCQUF3QixvRUFBVTtBQUNsQyxRQUFRLG9FQUFVO0FBQ2xCLFFBQVEsd0VBQWM7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7YWRkVG9EbywgZ2V0Q3VycmVudFByb2plY3QsIGRpc3BsYXlOb3Rlc30gZnJvbSAgXCIuL0NyZWF0ZVByb2plY3QuanNcIjtcblxuXG4gICAgY29uc3Qgc3VibWl0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Tm90ZVwiKTtcbiAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbiAgICBjb25zdCBub3RlRGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZURlc2NyaXBcIik7XG4gICAgY29uc3Qgbm90ZUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEdWVEYXRlXCIpO1xuICAgIGNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuICAgIGNvbnN0IG5vdGVDaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlQ2hlY2tlZFwiKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVGb3JtXCIpO1xuICAgIGNvbnN0IGJnTW9kYWxOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxOb3Rlc1wiKTtcbiAgICBjb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlQnV0dG9uXCIpO1xuXG5cblxuICAgIGxldCBub3RlSUQgPSAwO1xuXG5cblxuICAgIGZ1bmN0aW9uIE5vdGUodGl0bGUsIGRlc2NyaXAgPSBcIlwiLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSBcIm5vbmVcIikge1xuICAgICAgICBub3RlSUQrKztcbiAgICAgICAgbGV0IHByb2plY3RJRCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXAsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUR9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIHJldHVybiAobm90ZSlcbiAgICB9XG5cbiAgICAvKiBmdW5jdGlvbiBkaXNwbGF5Tm90ZShub3RlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVEaXZcIik7XG5cblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5vdGUudGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlQ29udGVudFRpdGxlXCIpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gbm90ZS5kdWVEYXRlO1xuXG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBuZXdOb3RlLmNsYXNzTGlzdC5hZGQoXCJuZXdOb3RlXCIpO1xuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5ld05vdGUpO1xuICAgIH1cbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgICAgICAvL25vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICBpZiAobm90ZVRpdGxlLnZhbHVlPT1cIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICBcblxuXG5cbmV4cG9ydCAge2NyZWF0ZU5vdGUsIHJlbW92ZUZvcm0sIHJlcXVpcmVkRmllbGRzfTsiLCJsZXQgcHJvamVjdElEID0gMDtcbmxldCBwcm9qZWN0TGlicmFyeSA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xuXG5mdW5jdGlvbiBpbml0aWFsUHJvamVjdCgpIHtcbiAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXdQcm9qZWN0KFwiRGVmYXVsdF9wcm9qZWN0XCIpO1xuICAgIGFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpXG4gICAgc2V0Q3VycmVudFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0XCIpO1xuICAgIHByb2pEaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwuMilcIjtcbn1cblxuaW5pdGlhbFByb2plY3QoKTtcblxuXG5cbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaXZcIik7XG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHsgcmV0dXJuIHByb2plY3RMaWJyYXJ5IH07XG5cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xufVxuXG5cblxuZnVuY3Rpb24gYWRkVG9EbyhuZXdOb3RlKSB7XG4gICAgcHJvamVjdExpYnJhcnkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvamVjdElEID09IGdldEN1cnJlbnRQcm9qZWN0KCkucHJvamVjdElEKSB7XG4gICAgICAgICAgICBpdGVtLnRvRG8ucHVzaChuZXdOb3RlKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgcHJvamVjdElEKys7XG4gICAgbGV0IHRvRG8gPSBbXTtcbiAgICByZXR1cm4geyBwcm9qZWN0VGl0bGUsIHByb2plY3RJRCwgdG9EbyB9O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgcHJvamVjdExpYnJhcnkucHVzaChjdXJyZW50UHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdERpdlwiKTtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFwiKTtcbiAgICBpdGVtRGl2LmRhdGFzZXQucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cbiAgICBpdGVtRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcHJvakRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Byb2plY3RcIik7XG5cbiAgICAgICAgcHJvakRpdnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBpdGVtRGl2LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsLjIpXCI7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KTtcblxuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KSB7XG4gICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZURpdlwiKTtcbiAgICBub3RlRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIHByb2plY3QudG9Eby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHJlbW92ZU5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJSZW1vdmUgTm90ZVwiO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVOb3RlQnV0dG9uXCIpO1xuICAgICAgICBcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlQ29udGVudFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlVGl0bGVDb250ZW50XCIpO1xuXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBieTogXCIgKyBpdGVtLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVDb250ZW50XCIpO1xuXG4gICAgICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGl0ZW0uZGVzY3JpcDtcblxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwicHJpb3JpdHk6IFwiICsgaXRlbS5wcmlvcml0eTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5vdGVDb250ZW50XCIpO1xuXG5cbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICByb3cxLmFwcGVuZENoaWxkKHJlbW92ZU5vdGVCdXR0b24pO1xuXG5cbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChkZXNjcmlwKTtcbiAgICAgICAgcm93MS5jbGFzc0xpc3QuYWRkKFwibm90ZUhlYWRcIik7XG4gICAgICAgIHJvdzIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XG5cblxuICAgICAgICBuZXdOb3RlLmNsYXNzTGlzdC5hZGQoXCJuZXdOb3RlXCIpO1xuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKHJvdzEpO1xuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKHJvdzIpO1xuXG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XG5cbiAgICAgICAgbmV3Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcm93Mi5zdHlsZS5kaXNwbGF5ID09IFwiXCIgPyByb3cyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIiA6IHJvdzIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH0pXG5cbiAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkUHJvakZpZWxkcyhwcm9qZWN0VGl0bGVJbnB1dCl7XG4gICAgaWYgKHByb2plY3RUaXRsZUlucHV0PT1cIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzLCBuZXdQcm9qZWN0LCBhZGRQcm9qZWN0LCBhZGRUb0RvLCBkaXNwbGF5UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGRpc3BsYXlOb3RlcywgcmVxdWlyZWRQcm9qRmllbGRzIH07IiwiY29uc3Qgc3VibWl0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Tm90ZVwiKTtcbmNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVRpdGxlXCIpO1xuY29uc3Qgbm90ZURlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEZXNjcmlwXCIpO1xuY29uc3Qgbm90ZUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEdWVEYXRlXCIpO1xuY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlUHJpb3JpdHlcIik7XG5jb25zdCBub3RlQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUNoZWNrZWRcIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG5jb25zdCBiZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKTtcbmNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVCdXR0b25cIik7XG5cbmNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBub3RlVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVEZXNjcmlwLnZhbHVlID0gXCJcIjtcbiAgICBub3RlRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZVByaW9yaXR5LnZhbHVlID0gXCJcIjtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyRm9ybTtcbiIsImltcG9ydCB7IHJlcXVpcmVkRmllbGRzLCByZW1vdmVGb3JtLCBjcmVhdGVOb3RlIH0gZnJvbSBcIi4vQ3JlYXRlTm90ZS5qc1wiO1xuaW1wb3J0IGNsZWFyRm9ybSBmcm9tIFwiLi9jbGVhckZvcm0uanNcIjtcbmltcG9ydCB7IGdldFByb2plY3RzLCBuZXdQcm9qZWN0LCBhZGRQcm9qZWN0LCBhZGRUb0RvLCBzZXRDdXJyZW50UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5Tm90ZXMsIHJlcXVpcmVkUHJvakZpZWxkc30gZnJvbSBcIi4vQ3JlYXRlUHJvamVjdC5qc1wiO1xuXG5jb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXROb3RlXCIpO1xuY29uc3QgY2FuY2VsTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsTm90ZVwiKTtcblxuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG5jb25zdCBub3RlRGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZURlc2NyaXBcIik7XG5jb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG5jb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcbmNvbnN0IG5vdGVDaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlQ2hlY2tlZFwiKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVGb3JtXCIpO1xuY29uc3QgYmdNb2RhbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbE5vdGVzXCIpO1xuY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZUJ1dHRvblwiKTtcblxuXG5uZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuY2FuY2VsTm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW1vdmVGb3JtKCk7XG4gICAgY2xlYXJGb3JtKCk7XG59KTtcblxuc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gYWRkIGlmIHJlcXVpcmVkRmllbGRzPSB0cnVlIHRoZW4gZG8gdGhlIGJvdHRvbS4gb3RoZXJ3aXNlIGRvIG5vdGhpbmcuLi5cbiAgICBpZiAocmVxdWlyZWRGaWVsZHMoKSkge1xuICAgICAgICBjb25zdCBuZXdOb3RlID0gY3JlYXRlTm90ZSgpO1xuICAgICAgICAvL2Rpc3BsYXlOb3RlKG5ld05vdGUpO1xuICAgICAgICBhZGRUb0RvKG5ld05vdGUpO1xuICAgICAgICBkaXNwbGF5Tm90ZXMoZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJubyBub3RlIGZvciB5b3VcIik7XG4gICAgfVxufSk7XG5cblxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuY29uc3QgYmdNb2RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFByb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZUlucHV0XCIpO1xuY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UHJvamVjdFwiKTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFByb2plY3RcIik7XG5cblxuXG5cblxuXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYmdNb2RhbFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuXG5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocmVxdWlyZWRQcm9qRmllbGRzKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBjbGVhclByb2plY3QoKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEZvcm0oKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIm5vIHByb2plY3QgZm9yIHlvdVwiKVxuICAgIH1cbn0pO1xuXG5jYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyUHJvamVjdCgpO1xuICAgIHJlbW92ZVByb2plY3RGb3JtKCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZvcm0oKSB7XG4gICAgLy9ub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYmdNb2RhbFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdCgpIHtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=