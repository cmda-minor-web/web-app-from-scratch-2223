const welcomeMsg = document.getElementById("welcomeMsg")
const studentId = document.getElementById("student-id")
const studentAvatar = document.getElementById("avatar")

//Display Message
displayMessages()

async function fetchAllStudents() {
    let student;
    let link = `https://whois.fdnd.nl/api/v1/members?first=100`
    const response = await fetch(link)
    const students = await response.json()

    for (let i = 0; i < students.members.length; i++) {

        if (students.members[i].name === 'Safouane') {
            student = students.members[i];
        }
    }
    return student
}

async function displayMessages() {
    try {
        //is dit traag?
        let student = await fetchAllStudents()
        console.log(student)
        //whai
        welcomeMsg.textContent += `${student.name} ${student.surname}`
        studentId.textContent += `${student.id}`
        studentAvatar.src = `${student.avatar}`

    } catch (error) {
        console.log("error something went wrong ", error)
    }
}






