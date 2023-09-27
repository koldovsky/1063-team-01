const students = document.querySelector('span.course-information-item-number-block.people')
const studentsText = students.innerText;

let studentsInt = parseInt(studentsText, 10)


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const minRange = 1;
const maxRange = 4;

function updateStudents() {
    const randomNum = getRandomNumber(minRange, maxRange);
    studentsInt += randomNum
    students.innerText = studentsInt;
}

setInterval(updateStudents, 3200);
