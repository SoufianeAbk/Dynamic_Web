const courses = JSON.parse(localStorage.getItem('courses')) || [];
const students = JSON.parse(localStorage.getItem('students')) || [];

const saveData = () => {
    localStorage.setItem('courses', JSON.stringify(courses));
    localStorage.setItem('students', JSON.stringify(students));
};

const updateDropdown = (id, items, key) => {
    document.getElementById(id).innerHTML = items.map(item => `<option>${item[key]}</option>`).join('');
};

const addCourse = () => {
    courses.push({ title: courseTitle.value, description: courseDesc.value });
    saveData(); updateDropdown('coursePicker', courses, 'title');
};

const enrollStudent = () => {
    students.push({ name: studentName.value, courses: [coursePicker.value], scores: {} });
    saveData(); updateDropdown('studentPicker', students, 'name');
};

const assignScore = () => {
    const student = students.find(s => s.name === studentPicker.value);
    if (student) {
        student.scores[modulePicker.value] = Number(moduleGrade.value);
        saveData();
        displayScores(student);
    }
};

const displayScores = (student) => {
    let scoreList = `<h4>Scores voor ${student.name}</h4><ul>`;
    for (const [module, score] of Object.entries(student.scores)) {
        scoreList += `<li>${module}: ${score}</li>`;
    }
    scoreList += `</ul>`;
    document.getElementById("grades").insertAdjacentHTML('beforeend', scoreList);
};

const clearData = (key) => {
    if (key === 'courses') courses.length = 0;
    if (key === 'students') students.length = 0;
    if (key === 'grades') students.forEach(s => s.scores = {});
    saveData();
    document.getElementById("grades").innerHTML = "<h3>Scores Toekennen</h3><select id='studentPicker'></select><select id='modulePicker'></select><input type='number' id='moduleGrade' placeholder='Score'><button id='addGrade'>Score Toekennen</button><button id='clearGrades'>Wis Scores</button>";
};

document.getElementById("addCourse").addEventListener("click", addCourse);
document.getElementById("enrollStudent").addEventListener("click", enrollStudent);
document.getElementById("addGrade").addEventListener("click", assignScore);
document.getElementById("clearCourses").addEventListener("click", () => clearData('courses'));
document.getElementById("clearStudents").addEventListener("click", () => clearData('students'));
document.getElementById("clearGrades").addEventListener("click", () => clearData('grades'));

updateDropdown('coursePicker', courses, 'title');
updateDropdown('studentPicker', students, 'name');
