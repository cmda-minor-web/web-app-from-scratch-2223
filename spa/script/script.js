console.log("Hello");



    fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
.then((response) => response.json())
.then((data) => {
  const main = document.querySelector("main ")
  const img = document.querySelector("main section img")
console.log(data)

let html = ''

data.forEach(item => {

    html = `
      <section>
        <img src="${item.avatar}" alt="Avatar">

        <article>
            <q>${item.quote}</q>

            <p>${item.author}</p>
            <p>${item.bio}</p>
        </article>
    </section>
    
    `;

    main.insertAdjacentHTML('beforeend', html)
//     const allName = item.author ;
//    main.insertAdjacentHTML('beforeend', `${allName}`)

});
    
});

