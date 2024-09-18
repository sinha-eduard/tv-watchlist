const selector = document.querySelector('#toggle')
const loginDiv = document.querySelector('#login')
const createDiv = document.querySelector('#create')
const loginForm = document.querySelector("#login")
const createForm = document.querySelector("#createUser")

if(selector.checked){
    loginDiv.classList.add("hidden")
    createDiv.classList.remove("hidden")
} else {
    loginDiv.classList.remove("hidden")
    createDiv.classList.add("hidden")
}

selector.addEventListener('change', function(){
    if(selector.checked){
        loginDiv.classList.add("hidden")
        createDiv.classList.remove("hidden")
    } else {
        loginDiv.classList.remove("hidden")
        createDiv.classList.add("hidden")
    }
})


loginForm.addEventListener("submit", function(e){
    e.preventDefault();
})

createForm.addEventListener("submit", function(e){
    e.preventDefault();
})