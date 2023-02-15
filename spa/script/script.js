console.log("Hello");
//Variabele
 const main = document.querySelector("main ");
  const img = document.querySelector("main section img");
  const quote = document.querySelector("main article q");
  const authorName = document.querySelector("main section p:nth-of-type(2)");
  const authorBio = document.querySelector("main article p:nth-of-type(2)");
  const nextButton = document.querySelector("main button");
  const tagElement = document.querySelector("main section ul li:nth-of-type(1)");


//Logica
fetchData()

function fetchData() {
  fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
    .then((response) => response.json())
    .then((data) => {


      addData(data)

    });

}


function fetchData() {
  fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
    .then((response) => response.json())
    .then((data) => {


addData(data)

});

}

function addData(data) {
       
        let html = '' 
        
        data.forEach(item => {
        
      //  const tag = item.tags
     
       
          html = `
        <section>
          

          <article>
              <q>${item.quote}</q>

              <p>${item.author}</p>
              <div class="author-info">
              <img src="${item.avatar}" alt="Avatar">
              <p>${item.bio}</p>
              </div>
              
          </article>

            <ul>
                <li>${item.tags}</li>
                
            </ul>
      </section>



      `;



          main.insertAdjacentHTML('beforeend', html)
          // tagElement.insertAdjacentHTML("beforeend", `# ` + `${tag}`)
        });


      }   





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

 
