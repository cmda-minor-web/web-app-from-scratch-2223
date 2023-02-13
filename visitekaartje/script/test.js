//variabele
const mainHeading = $("h1");

// logica
console.log(1)
fetchData()

//functions
function fetchData (){
    const url ='https://whois.fdnd.nl/api/v1/members'
    const data = fetch(url)
    .then(response => response.json())
    .then(data => {
        //iets gaan doen met de data 
        //data, h1 veranderen naar een naam

        changeH1(data)

    })
}

function changeH1(data) {
    const name =data.members[0].name
    mainHeading.insertAdjacentHTML('beforeend',` for ${name} `) 
    
}
// Helper functions
function $(element) {
    return document.querySelector(element)
}

function $$ (elements) {
    return document.querySelectorAll(elements)
}
