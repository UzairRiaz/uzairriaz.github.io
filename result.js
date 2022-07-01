function getQueryString(name) {
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        console.log(name, pair[0]);
        if (pair[0] == name) {
            return pair[1];
        }
    }
};

const createInfo = () => {
    const params = new URLSearchParams(window.location.search)
    document.getElementById('student_name').innerHTML = params.get('student_name');
    document.getElementById('father_name').innerHTML = params.get('father_name');
    document.getElementById('roll_number').innerHTML = params.get('roll_number');
    document.getElementById('class').innerHTML = params.get('class');
    document.getElementById('gender').innerHTML = params.get('gender');
    document.getElementById('semester').innerHTML = params.get('semester');
    document.getElementById('contact').innerHTML = params.get('contact');
    document.getElementById('institute').innerHTML = params.get('institute');

}

const createTable = () => {
    const params = new URLSearchParams(window.location.search)
    var data = [];
    for (let i = 1; i <= 3; i++) {
        let subjectName = params.get(`subjectName${i}`);
        let subjectScore = params.get(`obtainedMarks${i}`);
        let subjectTotal = params.get(`totalMarks${i}`);
        if (parseInt(subjectScore) > parseInt(subjectTotal)) {
            document.getElementById('error').innerHTML = 'Invalid Marks for ' + subjectName;
            return;
        }
        var subject = {
            name: subjectName,
            score: subjectScore,
            total: subjectTotal
        }
        console.log(subject);
        data.push(subject);
    }

    for (let i = 0; i < data.length; i++) {
        var tableRow =
            `<tr>
                <td>${i + 1}</td>
                <td colspan="2">${data[i].name}</td>
                <td>${data[i].score}</td>
                <td>${data[i].total}</td>
            </tr>`;
        document.getElementById('table').innerHTML += tableRow;
    }
    let grandTotal = 0;
    let totalObtained = 0;
    for (let i = 0; i < data.length; i++) {
        grandTotal += parseInt(data[i].total);
        totalObtained += parseInt(data[i].score);
    }
    document.getElementById('table').innerHTML +=
        `<tr>
            <td colspan="3">Total</td>
            <td>${totalObtained}</td>
            <td>${grandTotal}</td>
            </tr>`
        ;

    // document.getElementById('table').innerHTML = average.toFixed(2);
}
createInfo();
createTable()