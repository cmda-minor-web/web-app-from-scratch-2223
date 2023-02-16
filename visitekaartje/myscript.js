const apiUrl = 'https://whois.fdnd.nl/api/v1/member?id=cldex20th48sl0avw4a2xw1nw'
async function getData() {
const response = await fetch(apiUrl);
const data = await response.json();
document.getElementById('name').textContent = data.member.name;
document.getElementById('bio').textContent = data.member.bio.html;
document.querySelector("#flex-item a").href = data.member.website;
document.getElementById("html-css-fill").style.width = "60%";
document.getElementById("javascript-fill").style.width = "40%";
document.getElementById("ux-ui-fill").style.width = "75%";
}
getData();

