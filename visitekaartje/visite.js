// variables
const mainHeading = $('h1')




// logica
fetchData()




// functions
function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/members'
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
    const name = data.members[4].name
    mainHeading.insertAdjacentHTML('beforeend', ` for ${name}`)  
}

function $ (element) {
    return document.querySelector(element)

}

function $$ (elements) {
    return document.querySelectorAll(elements)
}






