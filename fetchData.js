//GET the button
const buttonRembrandt = document.getElementById('rembrandtbutton'); 
const buttonVermeer = document.getElementById('vermeerbutton');

//ADD event to button
buttonRembrandt.addEventListener("click", (event) => sayHello(event))
buttonVermeer.addEventListener("click",   (event) => sayHello(event))


//function declaration
function sayHello(message) {
    console.log(message)
}









// event.target.value


