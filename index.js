
const calculateAverage = () => {
    event.preventDefault();
    const data = [];
    for (let i = 1; i < 3; i++) {
        let subjectName = document.getElementById(`subjectName${1}`).value;
        let subjectScore = document.getElementById(`obtainedMarks${1}`).value;
        let subjectTotal = document.getElementById(`totalMarks${1}`).value;
        let subject = {
            name: subjectName,
            score: subjectScore,
            total: subjectTotal
        }
        data.push(subject);
    }
    let average = 0;
    for (let i = 0; i < data.length; i++) {
        average += parseInt(data[i].score) / parseInt(data[i].total);
    }
    console.log(average);
    document.getElementById('average').innerHTML = average.toFixed(2);
}
