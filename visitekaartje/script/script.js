// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/members?first=200', true)

request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response)
  const header = document.querySelector("h1");

 
  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    header.textContent = data.members[89].name + ' ' +data.members[89].surname
     
  
  } else {
    console.log('error')
  }
  

}

// Send request
request.send()