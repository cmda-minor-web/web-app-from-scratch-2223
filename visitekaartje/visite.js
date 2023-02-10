// variables
const mainHeading= $('h1')

const biotje= $('p')



// logica
fetchData()




// functions
function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldep2jzr3wfq0avw3ac5lb97'
    // kan ook gelijk je id achter members zetten


    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        changeHTML(data)
                    })
}

function changeHTML (data) {
    console.log(data)
    const name = data.member.name
    const surname = data.member.surname
    const me = data.member.bio.html
   


    mainHeading.textContent = name + ' ' + surname
    biotje.innerHTML = me


}

function $ (element) {
    return document.querySelector(element)

}

function $$ (elements) {
    return document.querySelectorAll(elements)
}






