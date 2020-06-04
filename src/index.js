
import projectController from "./projectController.js"

if (!localStorage.getItem("storedLibrary") ) {
    let defaultProject = projectController.newProject("Default project");
    projectController.addProject(defaultProject)
}

projectController.setDefaultProject();







