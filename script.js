console.log("Hello World!");
const Myname = "miles martin G. pabon";
console.log("name: " + Myname);
let age = 21;
let number = "09686955500";
console.log("Age: " + age)
console.log("Number: " + number);



const address = "Brgy 1 manapla negros occcidentall";
console.log("Address: " + address);

//functions
function greet(name) {
    return `good morning, ${name}`;
}
console.log(greet("Rene"));

function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;

    return (`Values: ${num1} and ${num2}. PRODUCT: ${m}, Quotient: ${d}, Sum: ${a}, Difference: ${s}`);
}
console.log(mdas(5, 3));


const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);

//Text Content
heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
projectHeading.textContent = "My Projects";

//.style
heading.style.color = "red"
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
serviceHeading.style.color = "purple";
projectHeading.style.color = "purple";

//Event Listeners
const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});