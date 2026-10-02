function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a note.");
        return;
    }

    const note = document.createElement("div");
    note.className = "note";

    note.innerHTML = `
        <span>${text}</span>
        <button class="delete" onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("notes").appendChild(note);

    input.value = "";
}