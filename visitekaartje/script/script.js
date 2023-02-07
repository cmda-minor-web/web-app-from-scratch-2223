// // Create a request variable and assign a new XMLHttpRequest object to it.
// const request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/members?first=200', true)

// request.onload = function () {
//   // Begin accessing JSON data here
//   const data = JSON.parse(this.response)
//   const header = document.querySelector("h1");

 
//   if (request.status >= 200 && request.status < 400) {
//     console.log(data)
//     header.textContent = data.members[89].name + ' ' +data.members[89].surname
     
  
//   } else {
//     console.log('error')
//   }
  
// Send request
//request.send()
// }

//variabele
const secondHeading = document.querySelector("section:nth-of-type(1) h2");

fetchData()

//functions
function fetchData (){
    const url ='https://whois.fdnd.nl/api/v1/members'
    const data = fetch(url)
    .then(response => response.json())
    .then(data => {
        //iets gaan doen met de data 
        //data, h1 veranderen naar een naam

        changeH2(data)

    })
}

function changeH2(data) {
    const name =data.members[3].name
    secondHeading.insertAdjacentHTML('beforeend',`  ${name} `) 
    
}




function change() {
  var links = document.querySelectorAll('.links');
  var pages = document.querySelectorAll('.pages');
  // Als je op de button klikt dan verandert de pagina
  for(var i=0;i<links.length;i++) {
      links[i].addEventListener('click', function() {
          for(var j=0;j<pages.length;j++) {
            // Per pagina zet is het standaard display none
              pages[j].setAttribute('style', 'display: none');
              
              // Als de data-link en de data item matchen dan verander de stijling naar display block
              if(this.getAttribute('data-link') === pages[j].getAttribute('data-item')) {
                  pages[j].setAttribute('style', 'display: block')
              }
          }
      })
  }
};


// Bron: https://stackoverflow.com/questions/39978986/multiple-content-pages-in-single-html-file