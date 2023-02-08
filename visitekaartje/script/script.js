

//variabele
const secondHeading = document.querySelector('section:nth-of-type(1) h2');
const listItem = document.querySelector('.bio');
const avatarImage = document.querySelector('section:nth-of-type(3) article:nth-of-type(1) figure img  ');
const myNickname = document.querySelector('section:nth-of-type(1) article:nth-of-type(2) li:nth-of-type(1)');
const naamNaastVaardigheden = document.querySelector('section:nth-of-type(2) h2');


//Logica
fetchData()

//functions
function fetchData (){
    // Een url met mijn slug erachter dan krijg ik een json bestand met mijn gegevens alleen
    const url ='https://whois.fdnd.nl/api/v1/member/keisha-alexander'
    const data = fetch(url)
    .then(response => response.json())
    .then(data => {
        //iets gaan doen met de data 
        //Mijn gegevens opvrageb

        addData(data)

        // changeH2(data)
        // changeBio(data)
        

    })
}

function addData(data) {
    const name = data.member.name
    const surname = data.member.surname
    const nickname = data.member.nickname
    const description = data.member.bio.html
    const portfolioWebsite = data.member.website
    const image = data.member.avatar

    //methodes om de dat in het HTml te laten weerschijn ipv van de console
    secondHeading.insertAdjacentHTML('beforeend', `  ${name}  ` + `${surname}`);
    naamNaastVaardigheden.insertAdjacentHTML('beforeend',` van` +` ${name}`)
    listItem.textContent = description;
    myNickname.insertAdjacentHTML('beforeend' , `${nickname}`);
    avatarImage.src = image;
    

}

// function changeH2(data) {
    
//     const name =data.members[1].name + ' ' + data.members[1].surname
//     secondHeading.insertAdjacentHTML('beforeend',`  ${name}  `) 
    
// }


// function changeBio(data) {
//     const description = data.members[1].surname
//     listItem.textContent = `Bio: ${description}`
//     console.log(description)


// }

(function() {
  const links = document.querySelectorAll('.links');
  const pages = document.querySelectorAll('.pages');
  // Als je op de button klikt dan verandert de pagina
  for(let i=0;i<links.length;i++) {
      links[i].addEventListener('click', function() {
          for(let j=0;j<pages.length;j++) {
            // Per pagina zet is het standaard display none
              pages[j].setAttribute('style', 'display: none');
              
              // Als de data-link en de data item matchen dan verander de stijling naar display block
              if(this.getAttribute('data-link') === pages[j].getAttribute('data-item')) {
                  pages[j].setAttribute('style', 'display: block')
              }
          }
      })
  }
}());


// Bron: https://stackoverflow.com/questions/39978986/multiple-content-pages-in-single-html-file