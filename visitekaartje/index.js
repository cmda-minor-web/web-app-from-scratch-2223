const start = document.getElementById("Name")
const url = "https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/member?id=cldepmufa3yef0auom2zlm6we"


const promiseOfSomeData = fetch(url).then(r=>r.json()).then(data => {
    console.log('in async', data);
    console.log(data.member.name);
    start.innerHTML = data.member.name;

    console.log(data.member.prefix)
    return data;
    
});

window.onload = async () => {
    let someData = await promiseOfSomeData;
    console.log("onload");
};

function skills() {
    let popupSkills = document.getElementById("pop-up-skills");
    // let skills = promiseOfSomeData;
    // console.log(skills)
    popupSkills.classList.toggle("show");
}

function experience() {
    let popupExperience = document.getElementById("pop-up-experience");
    // let experience = promiseOfSomeData;
    popupExperience.classList.toggle("show")
}

function socials() {
    let popupSocials = document.getElementById("pop-up-socials");
    // let socials = promiseOfSomeData;
    popupSocials.classList.toggle("show")
}