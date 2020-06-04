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
            });
            
            _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project);
            wrapperProject.style.background = "rgba(0,0,0,.2)";
            Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_0__["displayNotes"])(project);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ub3RlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLW5vdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91aS1wcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnNEOztBQUV0RDtBQUNBLHlCQUF5Qiw2REFBaUI7QUFDMUMsSUFBSSw2REFBaUI7QUFDckI7O0FBRUEsNkRBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNnQjtBQUNsQjs7QUFFckQ7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCJcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZExpYnJhcnlcIikgKSB7XG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdENvbnRyb2xsZXIubmV3UHJvamVjdChcIkRlZmF1bHQgcHJvamVjdFwiKTtcbiAgICBwcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxufVxuXG5wcm9qZWN0Q29udHJvbGxlci5zZXREZWZhdWx0UHJvamVjdCgpO1xuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7cmVtb3ZlRm9ybSwgcmVxdWlyZWRGaWVsZHMsIGRpc3BsYXlOb3RlcyB9IGZyb20gXCIuL3VpLW5vdGVzLmpzXCJcbmltcG9ydCB7Z2V0QWxsUHJvamVjdHN9IGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCJcblxuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG5jb25zdCBub3RlRGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZURlc2NyaXBcIik7XG5jb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG5jb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcblxuXG5mdW5jdGlvbiBOb3RlKHRpdGxlLCBkZXNjcmlwID0gXCJcIiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gXCJub25lXCIpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcCwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xuICAgIGNvbnN0IG5vdGUgPSBOb3RlKG5vdGVUaXRsZS52YWx1ZSwgbm90ZURlc2NyaXAudmFsdWUsIG5vdGVEdWVEYXRlLnZhbHVlLCBub3RlUHJpb3JpdHkudmFsdWUpO1xuICAgIHJldHVybiAobm90ZSlcbn1cblxuZnVuY3Rpb24gYWRkTm90ZShuZXdOb3RlLCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50b0RvLnB1c2gobmV3Tm90ZSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JlZExpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdENvbnRyb2xsZXIuZ2V0QWxsUHJvamVjdHMoKSkpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vdGUoZSkge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQubm90ZUlEO1xuICAgIHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9Eby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0Q29udHJvbGxlci5nZXRBbGxQcm9qZWN0cygpKSlcbiAgICBkaXNwbGF5Tm90ZXMocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG5cbn1cblxuXG5leHBvcnQgeyBOb3RlLCBjcmVhdGVOb3RlLCBhZGROb3RlLCByZW1vdmVOb3RlIH07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3RzfSBmcm9tIFwiLi91aS1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5Tm90ZXN9IGZyb20gXCIuL3VpLW5vdGVzLmpzXCI7XG5cblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RMaWJyYXJ5OyBcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZExpYnJhcnlcIikgKSB7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZExpYnJhcnlcIikpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnkgPSBbXTtcblxuICAgIH1cblxuICAgIGxldCBjdXJyZW50UHJvamVjdDtcblxuICAgIGZ1bmN0aW9uIHNldERlZmF1bHRQcm9qZWN0KCkge1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TGlicmFyeVswXSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBkaXNwbGF5Tm90ZXMocHJvamVjdExpYnJhcnlbMF0pO1xuICAgICAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyUHJvamVjdFwiKTtcbiAgICAgICAgcHJvakRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLC4yKVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdExpYnJhcnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICBsZXQgdG9EbyA9IFtdO1xuICAgICAgICByZXR1cm4geyBwcm9qZWN0VGl0bGUsIHRvRG8gfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5LnB1c2goY3VycmVudFByb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JlZExpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpYnJhcnkpKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnkpO1xuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0SUQ7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkTGlicmFyeVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xuXG5cbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRDdXJyZW50UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIG5ld1Byb2plY3QsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldEFsbFByb2plY3RzLCBzZXREZWZhdWx0UHJvamVjdH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBOb3RlLCBjcmVhdGVOb3RlLCBhZGROb3RlLCByZW1vdmVOb3RlIH0gZnJvbSBcIi4vbm90ZUNvbnRyb2xsZXIuanNcIlxuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCJcblxuXG5jb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXROb3RlXCIpO1xuY29uc3QgY2FuY2VsTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsTm90ZVwiKTtcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcbmNvbnN0IGJnTW9kYWxOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxOb3Rlc1wiKTtcbmNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVCdXR0b25cIik7XG5jb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbmNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuXG5uZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbmNhbmNlbE5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlRm9ybSgpO1xuICAgIGNsZWFyRm9ybSgpO1xufSk7XG5cbnN1Ym1pdE5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChyZXF1aXJlZEZpZWxkcygpKSB7XG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBjcmVhdGVOb3RlKCk7XG4gICAgICAgIGFkZE5vdGUobmV3Tm90ZSwgcHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICBjbGVhckZvcm0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIm5vIG5vdGUgZm9yIHlvdVwiKTtcbiAgICB9XG59KTtcblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIG5vdGVUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZURlc2NyaXAudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVEdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBub3RlUHJpb3JpdHkudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90ZXMocHJvamVjdCkge1xuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVEaXZcIik7XG4gICAgbm90ZURpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbGV0IG5vdGVJRCA9IDA7XG5cbiAgICBwcm9qZWN0LnRvRG8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCByZW1vdmVOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5kYXRhc2V0Lm5vdGVJRCA9IG5vdGVJRDtcblxuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZU5vdGVCdXR0b25cIik7XG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24uZGF0YXNldC5wcm9qZWN0SUQgPSBpdGVtLnByb2plY3RJRDtcbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi5kYXRhc2V0Lm5vdGVJRCA9IGl0ZW0ubm90ZUlEO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVDb250ZW50XCIpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVUaXRsZUNvbnRlbnRcIik7XG5cbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIGJ5OiBcIiArIGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90ZUNvbnRlbnRcIik7XG5cbiAgICAgICAgZGVzY3JpcC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgaXRlbS5kZXNjcmlwO1xuXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJwcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibm90ZUNvbnRlbnRcIik7XG5cblxuICAgICAgICByb3cxLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZChyZW1vdmVOb3RlQnV0dG9uKTtcblxuXG4gICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQoZGVzY3JpcCk7XG4gICAgICAgIHJvdzEuY2xhc3NMaXN0LmFkZChcIm5vdGVIZWFkXCIpO1xuICAgICAgICByb3cyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwXCIpO1xuXG5cbiAgICAgICAgbmV3Tm90ZS5jbGFzc0xpc3QuYWRkKFwibmV3Tm90ZVwiKTtcbiAgICAgICAgbmV3Tm90ZS5hcHBlbmRDaGlsZChyb3cxKTtcbiAgICAgICAgbmV3Tm90ZS5hcHBlbmRDaGlsZChyb3cyKTtcblxuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5ld05vdGUpO1xuXG4gICAgICAgIG5ld05vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJvdzIuc3R5bGUuZGlzcGxheSA9PSBcIlwiID8gcm93Mi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIgOiByb3cyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZU5vdGUpO1xuICAgICAgICBub3RlSUQrKztcblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgIGNvbnN0IGJnTW9kYWxOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxOb3Rlc1wiKTtcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG5cbiAgICBiZ01vZGFsTm90ZXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG5vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWRGaWVsZHMoKSB7XG4gICAgaWYgKG5vdGVUaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHJlbW92ZUZvcm0sIHJlcXVpcmVkRmllbGRzLCBkaXNwbGF5Tm90ZXMgfSIsImltcG9ydCB7IGRpc3BsYXlOb3RlcyB9IGZyb20gXCIuL3VpLW5vdGVzLmpzXCJcbmltcG9ydCBwcm9qZWN0Q29udHJvbGxlciBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiXG5cblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdEJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcbmNvbnN0IGJnTW9kYWxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxQcm9qZWN0c1wiKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVJbnB1dFwiKTtcbmNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFByb2plY3RcIik7XG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxQcm9qZWN0XCIpO1xuXG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBiZ01vZGFsUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KVxuXG5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocmVxdWlyZWRQcm9qRmllbGRzKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdENvbnRyb2xsZXIubmV3UHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBkaXNwbGF5Tm90ZXMocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBjbGVhclByb2plY3QoKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEZvcm0oKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIm5vIHByb2plY3QgZm9yIHlvdVwiKVxuICAgIH1cbn0pO1xuXG5jYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNsZWFyUHJvamVjdCgpO1xuICAgIHJlbW92ZVByb2plY3RGb3JtKCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZvcm0oKSB7XG4gICAgLy9ub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYmdNb2RhbFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdCgpIHtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0RGl2XCIpO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBwcm9qZWN0SUQgPSAwO1xuICAgIGxldCBwcm9qZWN0TGlicmFyeSA9IHByb2plY3RDb250cm9sbGVyLmdldEFsbFByb2plY3RzKCk7XG5cbiAgICBwcm9qZWN0TGlicmFyeS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgIC8vIG1ha2UgYSBsYXJnZXIgd3JhcHBlciBhcm91bmQgYm90aCBidXR0b24gYW5kIGNsaWNrYWJsZSBkaXYuIGZsZXggdGhlIGxhcmdlIGJveC4gXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaXZcIik7XG4gICAgICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCByZW1vdmVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB3cmFwcGVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG4gICAgICAgIHByb2plY3RUaXRsZURpdi5kYXRhc2V0LnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdCA9IFwicHJvamVjdFRpdGxlRGl2XCI7XG5cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0QnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmRhdGFzZXQucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICByZW1vdmVCdXR0b25EaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgd3JhcHBlclByb2plY3Quc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB3cmFwcGVyUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclByb2plY3RcIik7XG4gICAgICAgIHdyYXBwZXJQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZURpdik7XG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh3cmFwcGVyUHJvamVjdCk7XG5cbiAgICAgICAgaWYgKHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkgPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgd3JhcHBlclByb2plY3Quc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwuMilcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9qZWN0SUQgIT0gMCkge1xuICAgICAgICAgICAgd3JhcHBlclByb2plY3QuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2pEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53cmFwcGVyUHJvamVjdFwiKTtcbiAgICAgICAgICAgIHByb2pEaXZzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIHdyYXBwZXJQcm9qZWN0LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsLjIpXCI7XG4gICAgICAgICAgICBkaXNwbGF5Tm90ZXMocHJvamVjdCk7XG5cblxuICAgICAgICB9KVxuXG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGUpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuc2V0RGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdElEKys7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZXF1aXJlZFByb2pGaWVsZHMocHJvamVjdFRpdGxlSW5wdXQpIHtcbiAgICBpZiAocHJvamVjdFRpdGxlSW5wdXQgPT0gXCJcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIHJlcXVpcmVkUHJvakZpZWxkcyB9OyJdLCJzb3VyY2VSb290IjoiIn0=