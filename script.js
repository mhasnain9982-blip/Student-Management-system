let students = [];

const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const search = document.getElementById("search");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const department = document.getElementById("department").value;

    students.push({
        name: name,
        roll: roll,
        department: department
    });

    studentForm.reset();
    displayStudents();
});

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach(function(student, index) {
        const row = document.createElement("tr");

        [student.name, student.roll, student.department].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            students.splice(index, 1);
            displayStudents();
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        studentList.appendChild(row);
    });
}

search.addEventListener("input", function() {
    const value = search.value.toLowerCase();

    const rows = studentList.querySelectorAll("tr");

    rows.forEach(function(row) {
        row.style.display = row.textContent.toLowerCase().includes(value)
            ? ""
            : "none";
    });
});
