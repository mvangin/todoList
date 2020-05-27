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


    let projectID = 0;
    function Note(title, descrip = "", dueDate = "", priority = "none") {
        projectID++;

        const lastID = () => {
            return lastID;
        }
        return { title, descrip, dueDate, priority, projectID }
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

/* harmony default export */ __webpack_exports__["default"] = (CreateNote);

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


newProjectButton.addEventListener("click", () => {
    bgModalProjects.style.display = "flex";
    projectForm.style.display = "block";
})

const submitProject = document.querySelector("#submitProject");

submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    removeProjectForm()
});

function removeProjectForm() {
    //noteForm.style.display = "none";
    bgModalProjects.style.display = "none";
    projectForm.style.display = "none";
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NyZWF0ZU5vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsZWFyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQ25FekI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDOztBQUVlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQnpCO0FBQUE7QUFBQTtBQUF5QztBQUNGOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLElBQUksOERBQVU7QUFDZCxJQUFJLDZEQUFTO0FBQ2IsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDcmVhdGVOb3RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdE5vdGVcIik7XG4gICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG4gICAgY29uc3Qgbm90ZURlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVEZXNjcmlwXCIpO1xuICAgIGNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbiAgICBjb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcbiAgICBjb25zdCBub3RlQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUNoZWNrZWRcIik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcbiAgICBjb25zdCBiZ01vZGFsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsTm90ZXNcIik7XG4gICAgY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZUJ1dHRvblwiKTtcblxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IFtdO1xuXG5cbiAgICBsZXQgcHJvamVjdElEID0gMDtcbiAgICBmdW5jdGlvbiBOb3RlKHRpdGxlLCBkZXNjcmlwID0gXCJcIiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gXCJub25lXCIpIHtcbiAgICAgICAgcHJvamVjdElEKys7XG5cbiAgICAgICAgY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcCwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm90ZVN1Ym1pdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcC52YWx1ZSwgbm90ZUR1ZURhdGUudmFsdWUsIG5vdGVQcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LnB1c2gobm90ZSk7XG4gICAgICAgIHJldHVybiAobm90ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5Tm90ZShub3RlKSB7XG4gICAgICAgIGNvbnN0IG5vdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRGl2XCIpO1xuXG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLnRpdGxlO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gbm90ZS5kdWVEYXRlO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IG5vdGUucHJpb3JpdHk7XG5cbiAgICAgICAgbm90ZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBub3RlV3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgbm90ZVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVXcmFwcGVyKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgICAgIC8vbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBiZ01vZGFsTm90ZXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdE5vdGUgPSBjcmVhdGVOb3RlKCk7XG4gICAgZGlzcGxheU5vdGUobGFzdE5vdGUpO1xuICAgIHJlbW92ZUZvcm0oKTtcblxuICAgICAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTm90ZTsiLCJjb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXROb3RlXCIpO1xuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlVGl0bGVcIik7XG5jb25zdCBub3RlRGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZURlc2NyaXBcIik7XG5jb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZUR1ZURhdGVcIik7XG5jb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVQcmlvcml0eVwiKTtcbmNvbnN0IG5vdGVDaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlQ2hlY2tlZFwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlRm9ybVwiKTtcbmNvbnN0IGJnTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsXCIpO1xuY29uc3QgbmV3Tm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZUJ1dHRvblwiKTtcblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIG5vdGVUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgbm90ZURlc2NyaXAudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVEdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBub3RlUHJpb3JpdHkudmFsdWUgPSBcIlwiO1xuXG5cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyRm9ybTtcbiIsImltcG9ydCBDcmVhdGVOb3RlIGZyb20gXCIuL0NyZWF0ZU5vdGUuanNcIjtcbmltcG9ydCBjbGVhckZvcm0gZnJvbSBcIi4vY2xlYXJGb3JtLmpzXCI7XG5cbmNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdE5vdGVcIik7XG5jb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVUaXRsZVwiKTtcbmNvbnN0IG5vdGVEZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRGVzY3JpcFwiKTtcbmNvbnN0IG5vdGVEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlRHVlRGF0ZVwiKTtcbmNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZVByaW9yaXR5XCIpO1xuY29uc3Qgbm90ZUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVDaGVja2VkXCIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUZvcm1cIik7XG5jb25zdCBiZ01vZGFsTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsTm90ZXNcIik7XG5jb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlQnV0dG9uXCIpO1xuXG5cblxuXG5uZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYmdNb2RhbE5vdGVzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuXG5zdWJtaXROb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBDcmVhdGVOb3RlKCk7XG4gICAgY2xlYXJGb3JtKCk7XG59KTtcblxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0QnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuY29uc3QgYmdNb2RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFByb2plY3RzXCIpO1xuXG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBiZ01vZGFsUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KVxuXG5jb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRQcm9qZWN0XCIpO1xuXG5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVQcm9qZWN0Rm9ybSgpXG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZvcm0oKSB7XG4gICAgLy9ub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYmdNb2RhbFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9