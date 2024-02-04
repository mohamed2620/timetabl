function init() {
    const timeTableChildren = document.getElementById("timeTable").children[0].children;
    for (let i = 1; i < timeTableChildren.length; i++) {
        for (let j = 0; j < 5; j++) {
            timeTableChildren[i].appendChild(document.createElement("td"));
        }
    }
}

window.onload = init;

function submitButtonClicked(e) {
    e.preventDefault();
    console.log("hi");
    const form = document.getElementById("inputForm");
    const courseName = form.elements["courseName"].value;
    const startTime = form.elements["startTime"].value;
    const endTime = form.elements["endTime"].value;
    const startRow = document.getElementById(startTime);
    const endRow = document.getElementById(endTime);
    let days = [];
    const checkboxes = document.querySelectorAll(".days");
    for (let i = 0; i < 5; i++) {
        if (checkboxes[i].checked) {
            days.push(i);
        }
    }

    for (let i = 0; i < 5; i++) {
        if (days.includes(i)) {
            console.log(startRow, endRow);
            for (let j = startRow.rowIndex; j < endRow.rowIndex; j++) {
                document.getElementById("timeTable").children[0].children[j].children[i + 1].innerText = courseName;
                console.log(document.getElementById("timeTable").children[0].children[j].children[i + 1]);
                console.log(courseName);
            }
        }
    }
}