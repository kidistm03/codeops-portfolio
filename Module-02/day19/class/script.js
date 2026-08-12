// console.log(window)
// window is an obj , it has got local storaage


// document = {
//     html : {
//         Children : [ HTMLCollection ],
//         body : sthg
//     }
// }



// html collection
// const logoDiv = document.getElementsByClassName("logo")
// console.log(logoDiv)
// const navid=document.getElementById("nav")
// console.log(navid)
// const heroQueryselector=document.querySelector(".Hero")
// console.log(heroQueryselector)
// const heroQueryAll=document.querySelectorAll(".Hero")
// console.log(heroQueryAll)

// let formElt = document.getElementById("formmm");

// formElt.addEventListener('submit' , (e) => {
//     e.preventDefault()
//     let nameInputBar = document.getElementById('fname');
//     let ageInputBar = document.getElementById('age');

//     let name = nameInputBar.value;
//     let age = ageInputBar.value;

//     console.log(name)
//     console.log(age)

// })

let formAccept=document.getElementById("formmm");
formAccept.addEventListener("submit",(e)=>{
    e.preventDefault()
    let nameInput=document.getElementById("fname");
    let ageInput=document.getElementById("age");

    let name=nameInput.value 
    let age=ageInput.value
    console.log(name)
    console.log(age)

})