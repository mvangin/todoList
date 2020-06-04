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



    let defaultProject = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].newProject("Default_project");
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(defaultProject)
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

}

function removeNote(e) {
    let index = e.target.dataset.noteID;
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject().toDo.splice(index, 1);
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

    let projectLibrary = [];
    let currentProject;


    

    function setDefaultProject() {
        setCurrentProject(projectLibrary[0]);
        Object(_ui_project_js__WEBPACK_IMPORTED_MODULE_0__["displayProjects"])();
        Object(_ui_notes_js__WEBPACK_IMPORTED_MODULE_1__["displayNotes"])(projectLibrary[0]);
        const projDiv = document.querySelector(".newProject");
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
        console.log(projectLibrary);

    }

    function removeProject(e) {
        let index = e.target.dataset.projectID;
        projectLibrary.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projectLibrary));

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
        const wrapper = document.createElement("div");
       
        projectTitleDiv.textContent = project.projectTitle;
        projectTitleDiv.dataset.projectID = projectID;
        projectTitleDiv.classList = "projectTitleDiv";

        removeProjectButton.textContent = "X";
        removeProjectButton.classList.add("removeProjectButton");
        removeProjectButton.dataset.projectID = projectID;
        removeButtonDiv.appendChild(removeProjectButton);

        wrapper.style.display = "flex";
        wrapper.classList.add("newProject");
        wrapper.appendChild(projectTitleDiv);

        projectDiv.appendChild(wrapper);

        if (projectID!=0){
            wrapper.appendChild(removeProjectButton);
        } 

        projectTitleDiv.addEventListener("click", () => {
            const projDivs = document.querySelectorAll(".newProject");
            projDivs.forEach(item => {
                item.style.background = "";
                _projectController_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project);
                wrapper.style.background = "rgba(0,0,0,.2)";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ub3RlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLW5vdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91aS1wcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnNEOztBQUV0RCx5QkFBeUIsNkRBQWlCO0FBQzFDLElBQUksNkRBQWlCO0FBQ3JCLElBQUksNkRBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNnQjtBQUNsQjs7OztBQUlyRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckIsSUFBSSxpRUFBWSxDQUFDLDZEQUFpQjs7QUFFbEM7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBaUQ7QUFDTDs7O0FBRzVDOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBLFFBQVEsc0VBQWU7QUFDdkIsUUFBUSxpRUFBWTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTs7QUFFWixDQUFDOztBQUVjLGdGQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDdERqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkU7QUFDckI7OztBQUd0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBVTtBQUNsQyxRQUFRLGtFQUFPLFVBQVUsNkRBQWlCO0FBQzFDLHFCQUFxQiw2REFBaUI7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxtREFBbUQsNkRBQVU7QUFDN0Q7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNZOzs7QUFHdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2REFBaUI7QUFDekMsUUFBUSw2REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQWlCOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2REFBaUI7QUFDakM7QUFDQSxnQkFBZ0IsaUVBQVk7QUFDNUIsYUFBYTs7QUFFYixTQUFTOztBQUVUO0FBQ0EsWUFBWSw2REFBaUI7QUFDN0IsWUFBWSw2REFBaUI7QUFDN0IsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBwcm9qZWN0Q29udHJvbGxlciBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiXG5cbiAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KFwiRGVmYXVsdF9wcm9qZWN0XCIpO1xuICAgIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpXG4gICAgcHJvamVjdENvbnRyb2xsZXIuc2V0RGVmYXVsdFByb2plY3QoKTtcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQge3JlbW92ZUZvcm0sIHJlcXVpcmVkRmllbGRzLCBkaXNwbGF5Tm90ZXMgfSBmcm9tIFwiLi91aS1ub3Rlcy5qc1wiXG5pbXBvcnQge2dldEFsbFByb2plY3RzfSBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiXG5cblxuXG5jb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbmNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuXG5cbmZ1bmN0aW9uIE5vdGUodGl0bGUsIGRlc2NyaXAgPSBcIlwiLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSBcIm5vbmVcIikge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwLCBkdWVEYXRlLCBwcmlvcml0eSB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XG4gICAgY29uc3Qgbm90ZSA9IE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgcmV0dXJuIChub3RlKVxufVxuXG5mdW5jdGlvbiBhZGROb3RlKG5ld05vdGUsIHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRvRG8ucHVzaChuZXdOb3RlKVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vdGUoZSkge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQubm90ZUlEO1xuICAgIHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9Eby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcblxufVxuXG5cbmV4cG9ydCB7IE5vdGUsIGNyZWF0ZU5vdGUsIGFkZE5vdGUsIHJlbW92ZU5vdGUgfTsiLCJpbXBvcnQgeyBkaXNwbGF5UHJvamVjdHN9IGZyb20gXCIuL3VpLXByb2plY3QuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlOb3Rlc30gZnJvbSBcIi4vdWktbm90ZXMuanNcIjtcblxuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdExpYnJhcnkgPSBbXTtcbiAgICBsZXQgY3VycmVudFByb2plY3Q7XG5cblxuICAgIFxuXG4gICAgZnVuY3Rpb24gc2V0RGVmYXVsdFByb2plY3QoKSB7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RMaWJyYXJ5WzBdKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0TGlicmFyeVswXSk7XG4gICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3RcIik7XG4gICAgICAgIHByb2pEaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwuMilcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaWJyYXJ5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgbGV0IHRvRG8gPSBbXTtcbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdFRpdGxlLCB0b0RvIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0TGlicmFyeS5wdXNoKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnkpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElEO1xuICAgICAgICBwcm9qZWN0TGlicmFyeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0Q3VycmVudFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBuZXdQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRBbGxQcm9qZWN0cywgc2V0RGVmYXVsdFByb2plY3R9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDb250cm9sbGVyO1xuIiwiaW1wb3J0IHsgTm90ZSwgY3JlYXRlTm90ZSwgYWRkTm90ZSwgcmVtb3ZlTm90ZSB9IGZyb20gXCIuL25vdGVDb250cm9sbGVyLmpzXCJcbmltcG9ydCBwcm9qZWN0Q29udHJvbGxlciBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiXG5cblxuY29uc3Qgc3VibWl0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Tm90ZVwiKTtcbmNvbnN0IGNhbmNlbE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbE5vdGVcIik7XG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG5jb25zdCBiZ01vZGFsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsTm90ZXNcIik7XG5jb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlQnV0dG9uXCIpO1xuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG5jb25zdCBub3RlRGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZURlc2NyaXBcIik7XG5jb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG5jb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcblxubmV3Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJnTW9kYWxOb3Rlcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jYW5jZWxOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbW92ZUZvcm0oKTtcbiAgICBjbGVhckZvcm0oKTtcbn0pO1xuXG5zdWJtaXROb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocmVxdWlyZWRGaWVsZHMoKSkge1xuICAgICAgICBjb25zdCBuZXdOb3RlID0gY3JlYXRlTm90ZSgpO1xuICAgICAgICBhZGROb3RlKG5ld05vdGUsIHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICBkaXNwbGF5Tm90ZXMocHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJubyBub3RlIGZvciB5b3VcIik7XG4gICAgfVxufSk7XG5cbmNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBub3RlVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVEZXNjcmlwLnZhbHVlID0gXCJcIjtcbiAgICBub3RlRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZVByaW9yaXR5LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vdGVzKHByb2plY3QpIHtcbiAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRGl2XCIpO1xuICAgIG5vdGVEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBub3RlSUQgPSAwO1xuXG4gICAgcHJvamVjdC50b0RvLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgcmVtb3ZlTm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24uZGF0YXNldC5ub3RlSUQgPSBub3RlSUQ7XG5cbiAgICAgICAgcmVtb3ZlTm90ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVOb3RlQnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmRhdGFzZXQucHJvamVjdElEID0gaXRlbS5wcm9qZWN0SUQ7XG4gICAgICAgIHJlbW92ZU5vdGVCdXR0b24uZGF0YXNldC5ub3RlSUQgPSBpdGVtLm5vdGVJRDtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlQ29udGVudFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlVGl0bGVDb250ZW50XCIpO1xuXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBieTogXCIgKyBpdGVtLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVDb250ZW50XCIpO1xuXG4gICAgICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGl0ZW0uZGVzY3JpcDtcblxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwicHJpb3JpdHk6IFwiICsgaXRlbS5wcmlvcml0eTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5vdGVDb250ZW50XCIpO1xuXG5cbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQocmVtb3ZlTm90ZUJ1dHRvbik7XG5cblxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGRlc2NyaXApO1xuICAgICAgICByb3cxLmNsYXNzTGlzdC5hZGQoXCJub3RlSGVhZFwiKTtcbiAgICAgICAgcm93Mi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcFwiKTtcblxuXG4gICAgICAgIG5ld05vdGUuY2xhc3NMaXN0LmFkZChcIm5ld05vdGVcIik7XG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQocm93MSk7XG4gICAgICAgIG5ld05vdGUuYXBwZW5kQ2hpbGQocm93Mik7XG5cbiAgICAgICAgbm90ZURpdi5hcHBlbmRDaGlsZChuZXdOb3RlKTtcblxuICAgICAgICBuZXdOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByb3cyLnN0eWxlLmRpc3BsYXkgPT0gXCJcIiA/IHJvdzIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiIDogcm93Mi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfSlcblxuICAgICAgICByZW1vdmVOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVOb3RlKTtcbiAgICAgICAgbm90ZUlEKys7XG5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgICBjb25zdCBiZ01vZGFsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsTm90ZXNcIik7XG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVGb3JtXCIpO1xuXG4gICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkRmllbGRzKCkge1xuICAgIGlmIChub3RlVGl0bGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyByZW1vdmVGb3JtLCByZXF1aXJlZEZpZWxkcywgZGlzcGxheU5vdGVzIH0iLCJpbXBvcnQge2Rpc3BsYXlOb3Rlc30gZnJvbSBcIi4vdWktbm90ZXMuanNcIlxuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCJcblxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuY29uc3QgYmdNb2RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFByb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZUlucHV0XCIpO1xuY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UHJvamVjdFwiKTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFByb2plY3RcIik7XG5cblxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJnTW9kYWxQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbnN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChyZXF1aXJlZFByb2pGaWVsZHMocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGNsZWFyUHJvamVjdCgpO1xuICAgICAgICByZW1vdmVQcm9qZWN0Rm9ybSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwibm8gcHJvamVjdCBmb3IgeW91XCIpXG4gICAgfVxufSk7XG5cbmNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xlYXJQcm9qZWN0KCk7XG4gICAgcmVtb3ZlUHJvamVjdEZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0Rm9ybSgpIHtcbiAgICAvL25vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBiZ01vZGFsUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0KCkge1xuICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaXZcIik7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG4gICAgbGV0IHByb2plY3RMaWJyYXJ5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0QWxsUHJvamVjdHMoKTtcblxuICAgIHByb2plY3RMaWJyYXJ5LmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgLy8gbWFrZSBhIGxhcmdlciB3cmFwcGVyIGFyb3VuZCBib3RoIGJ1dHRvbiBhbmQgY2xpY2thYmxlIGRpdi4gZmxleCB0aGUgbGFyZ2UgYm94LiBcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdERpdlwiKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgIFxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmRhdGFzZXQucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0VGl0bGVEaXZcIjtcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RCdXR0b25cIik7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uZGF0YXNldC5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgICAgIHJlbW92ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFwiKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVEaXYpO1xuXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICAgICAgaWYgKHByb2plY3RJRCE9MCl7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xuICAgICAgICB9IFxuXG4gICAgICAgIHByb2plY3RUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvakRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Byb2plY3RcIik7XG4gICAgICAgICAgICBwcm9qRGl2cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLC4yKVwiO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOb3Rlcyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIucmVtb3ZlUHJvamVjdChlKTtcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sbGVyLnNldERlZmF1bHRQcm9qZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RJRCsrO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcmVxdWlyZWRQcm9qRmllbGRzKHByb2plY3RUaXRsZUlucHV0KSB7XG4gICAgaWYgKHByb2plY3RUaXRsZUlucHV0ID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtkaXNwbGF5UHJvamVjdHMsIHJlcXVpcmVkUHJvakZpZWxkc307Il0sInNvdXJjZVJvb3QiOiIifQ==