console.log("Hello World");
const myName = "miles martin G. pabon";
let Age = 21;
const Number = "9686955500";
const Address = "brgy.1, manapla, negros occidental";

console.log(`name: ${myName}`);
console.log(`Age: ${Age}`);
console.log(`Number: ${Number}`);
console.log(`Address: ${Address}`);

function greet(name) {
    return `good morning, ${name}`;
}
console.log(greet(`rene`));

function mdas(num1, num2) {

    let Mul = num1 * num2;
    let Div = num1 / num2;
    let Add = num1 + num2;
    let Sub = num1 - num2;
    return `value (${num1},${num2} ) \nMul:${Mul} \nDiv: ${Div.toFixed(2)} \nAdd: ${Add} \nSub: ${Sub}`;
}
console.log(mdas(5, 3));


const heading = document.querySelector("h1");
console.log(heading);
const contactheading = document.querySelector("#contact h2");
console.log(contactheading);
const projectsheading = document.querySelector("#projects h2");
console.log(projectsheading);
const servicesheading = document.querySelector("#services h2")
console.log(servicesheading);

// text,content
heading.textContent = "my portfolio";
contactheading.textContent = "lets connect";
projectsheading.textContent = "my projects";
servicesheading.textContent = "services";

heading.style.color = "purple";
heading.style.backgroundColor = "yellow";

contactHeading.style.color = "purple";
projectHeading.style.color = "purple";
servicesHeading.style.color = "purple";



























