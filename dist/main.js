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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        const newNote = document.createElement("div");
        const title = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const noteDiv = document.querySelector(".noteDiv");


        title.textContent = note.title;
        dueDate.textContent = note.dueDate;
        priority.textContent = note.priority;

        newNote.appendChild(title);
        newNote.appendChild(dueDate);
        newNote.appendChild(priority);
        newNote.classList.add("newNote");
        noteDiv.appendChild(newNote);
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

/* harmony default export */ __webpack_exports__["default"] = (CreateNote);

/***/ }),

/***/ "./src/CreateProject.js":
/*!******************************!*\
  !*** ./src/CreateProject.js ***!
  \******************************/
/*! exports provided: getProjects, newProject, addProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProject", function() { return newProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });



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
    const projectTitleInput = document.querySelector(".projectTitleInput");


    let projectID = 0;
    let projectLibrary = [];

    const getProjects = () => {return projectLibrary};

    function newProject(projectTitle) {
        projectID++;
        return { projectTitle, projectID };
    }

    function addProject(currentProject) {
        projectLibrary.push(currentProject);
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

submitNote.addEventListener("click", (e) => {
    e.preventDefault();
    Object(_CreateNote_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_clearForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});



const newProjectButton = document.querySelector(".newProjectButton");
const projectForm = document.querySelector(".projectForm");
const bgModalProjects = document.querySelector(".bg-modalProjects");
const projectTitleInput = document.querySelector(".projectTitleInput");




newProjectButton.addEventListener("click", () => {
    bgModalProjects.style.display = "flex";
    projectForm.style.display = "block";
})

const submitProject = document.querySelector("#submitProject");

submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    const project = Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["newProject"])(projectTitleInput.value);
    Object(_CreateProject_js__WEBPACK_IMPORTED_MODULE_2__["addProject"])(project);
    clearProject();
    removeProjectForm()
});

function removeProjectForm() {
    //noteForm.style.display = "none";
    bgModalProjects.style.display = "none";
    projectForm.style.display = "none";
}

function clearProject(){
    projectTitleInput.value = "";
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZU5vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsZWFyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xCekI7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDRjtBQUNpQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksOERBQVU7QUFDZCxJQUFJLDZEQUFTO0FBQ2IsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvRUFBVTtBQUM5QixJQUFJLG9FQUFVO0FBQ2Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQ3JlYXRlTm90ZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXROb3RlXCIpO1xuICAgIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVRpdGxlXCIpO1xuICAgIGNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbiAgICBjb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG4gICAgY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlUHJpb3JpdHlcIik7XG4gICAgY29uc3Qgbm90ZUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVDaGVja2VkXCIpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG4gICAgY29uc3QgYmdNb2RhbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbE5vdGVzXCIpO1xuICAgIGNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVCdXR0b25cIik7XG5cbiAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBbXTtcblxuXG4gICAgbGV0IG5vdGVJRCA9IDA7XG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG5cbiAgICBmdW5jdGlvbiBOb3RlKHRpdGxlLCBkZXNjcmlwID0gXCJcIiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gXCJub25lXCIpIHtcbiAgICAgICAgbm90ZUlEKys7XG4gICAgICAgIGNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXAsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQ6IG5vdGVJRCB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm90ZVN1Ym1pdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LnB1c2gobm90ZSk7XG4gICAgICAgIHJldHVybiAobm90ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5Tm90ZShub3RlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVEaXZcIik7XG5cblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5vdGUudGl0bGU7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBub3RlLmR1ZURhdGU7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gbm90ZS5wcmlvcml0eTtcblxuICAgICAgICBuZXdOb3RlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbmV3Tm90ZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgbmV3Tm90ZS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIG5ld05vdGUuY2xhc3NMaXN0LmFkZChcIm5ld05vdGVcIik7XG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgICAgICAvL25vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3ROb3RlID0gY3JlYXRlTm90ZSgpO1xuICAgIGRpc3BsYXlOb3RlKGxhc3ROb3RlKTtcbiAgICByZW1vdmVGb3JtKCk7XG5cbiAgICAgICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU5vdGU7IiwiXG5cblxuICAgIGNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdE5vdGVcIik7XG4gICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG4gICAgY29uc3Qgbm90ZURlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEZXNjcmlwXCIpO1xuICAgIGNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbiAgICBjb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcbiAgICBjb25zdCBub3RlQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUNoZWNrZWRcIik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcbiAgICBjb25zdCBiZ01vZGFsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsTm90ZXNcIik7XG4gICAgY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZUJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlSW5wdXRcIik7XG5cblxuICAgIGxldCBwcm9qZWN0SUQgPSAwO1xuICAgIGxldCBwcm9qZWN0TGlicmFyeSA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7cmV0dXJuIHByb2plY3RMaWJyYXJ5fTtcblxuICAgIGZ1bmN0aW9uIG5ld1Byb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHByb2plY3RJRCsrO1xuICAgICAgICByZXR1cm4geyBwcm9qZWN0VGl0bGUsIHByb2plY3RJRCB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnkucHVzaChjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuXG5leHBvcnQge2dldFByb2plY3RzLCBuZXdQcm9qZWN0LCBhZGRQcm9qZWN0fTsiLCJjb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXROb3RlXCIpO1xuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG5jb25zdCBub3RlRGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZURlc2NyaXBcIik7XG5jb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG5jb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcbmNvbnN0IG5vdGVDaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlQ2hlY2tlZFwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcbmNvbnN0IGJnTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsXCIpO1xuY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZUJ1dHRvblwiKTtcblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIG5vdGVUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZURlc2NyaXAudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVEdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBub3RlUHJpb3JpdHkudmFsdWUgPSBcIlwiO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJGb3JtO1xuIiwiaW1wb3J0IENyZWF0ZU5vdGUgZnJvbSBcIi4vQ3JlYXRlTm90ZS5qc1wiO1xuaW1wb3J0IGNsZWFyRm9ybSBmcm9tIFwiLi9jbGVhckZvcm0uanNcIjtcbmltcG9ydCB7Z2V0UHJvamVjdHMsIG5ld1Byb2plY3QsIGFkZFByb2plY3R9IGZyb20gIFwiLi9DcmVhdGVQcm9qZWN0LmpzXCI7XG5cbmNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdE5vdGVcIik7XG5jb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbmNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuY29uc3Qgbm90ZUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVDaGVja2VkXCIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG5jb25zdCBiZ01vZGFsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsTm90ZXNcIik7XG5jb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlQnV0dG9uXCIpO1xuXG5cblxuXG5uZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgQ3JlYXRlTm90ZSgpO1xuICAgIGNsZWFyRm9ybSgpO1xufSk7XG5cblxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuY29uc3QgYmdNb2RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFByb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZUlucHV0XCIpO1xuXG5cblxuXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYmdNb2RhbFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UHJvamVjdFwiKTtcblxuc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgY2xlYXJQcm9qZWN0KCk7XG4gICAgcmVtb3ZlUHJvamVjdEZvcm0oKVxufSk7XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGb3JtKCkge1xuICAgIC8vbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGJnTW9kYWxQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3QoKXtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=