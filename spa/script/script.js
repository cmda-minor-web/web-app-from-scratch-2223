console.log("Hello");
//Variabele
 const main = document.querySelector("main ");
const section = document.getElementById('content');
const loader = document.querySelector('.loading');
console.log(section)
 
//Logica
fetchData()



// Hier ga ik data ophalen uit met de fetch API
function fetchData() {
  showLoader()
  fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
  .then(checkError)
    .then((data) => {
  
      addData(data)
      console.log(data)
    })
      .catch((error) => {
      console.log(error);
      });

}
// Met deze functie plaats ik de data in de HTML
function addData(data) {
       
        let html = '' 
        data.forEach(item => {
        
          html = `
          <article >
           <section>
              <q>${item.quote}</q>

              <p>${item.author}</p>
            </section
              <section class="author-info">
              <img src="${item.avatar}" alt="Avatar">
              <p>${item.bio}</p>
              </section>
                <ul>
                  <li>${item.tags}</li>                
               </ul>             
          </article>
      `;

       section.insertAdjacentHTML("beforeend",html )
          // tagElement.insertAdjacentHTML("beforeend", `# ` + `${tag}`)
        });

      }   


function checkError(response) {
  if(response.status >= 200 && response.status <= 299) {
    return response.json();
  }else {
    throw Error(response.statusText);
  }
}

function showLoader() {

  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 1000)
}

function hideLoader() {
  loader.classList.remove("display");
}

// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m



// Versie zonder functions
  // fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
  //   .then((response) => response.json())
  //   .then((data) => {

  

  //     let html = ''

  //     data.forEach(item => {

  //       html = `
  //       <section>
  //         <img src="${item.avatar}" alt="Avatar">

  //         <article>
  //             <q>${item.quote}</q>

  //             <p>${item.author}</p>
  //             <p>${item.bio}</p>
  //         </article>
  //     </section>

  //     `;

  //       main.insertAdjacentHTML('beforeend', html)

  //     });


  //       });


  
    





// //Logica

// Random quotes
// nextButton.addEventListener('click', () => {
//   fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
//     .then((response) => response.json())
//     .then((data) => {

      
//  const randomIndex = Math.floor(Math.random() * data.length);
//       const randomData = data[randomIndex];
//       data.forEach(item => {
        
//       const quotes = randomData.quote
//       quote.innerHTML = quotes;

//       const avatarImg = randomData.avatar
//      img.src = avatarImg
//         })
     


//       // let html = ''

//       // data.forEach(item => {
//       // const avatarImg = item.avatar
//       //   img.forEach(image => {
//       //     image.src = avatarImg

//       //   })



//       // html = `
//       //   <section>
//       //     <img src="${item.avatar}" alt="Avatar">

//       //     <article>
//       //         <q>${item.quote}</q>

//       //         <p>${item.author}</p>
//       //         <p>${item.bio}</p>
//       //     </article>
//       // </section>

//       // `;

//       // main.insertAdjacentHTML('beforeend', html)
//       //     const allName = item.author ;
//       //    main.insertAdjacentHTML('beforeend', `${allName}`)

//     });

// })

 
