function Note(title, note="", dueDate="", priority="none") {
        const checked = () => {
            console.log("test");
        }
    return {title, note, dueDate, priority, checked}
}

const tennis = Note("tennis");

tennis.checked();

