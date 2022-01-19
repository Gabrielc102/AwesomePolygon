function mostrarTexto() {
    document.getElementById("titulo").style.color = "rgb(106, 47, 173)";
}

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo"
console.log(cars);

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2);

function myFunction(value, index, array) {
    return value * 2;
}

const numeros = [45, 4, 9, 16, 25];
const mayor18 = numeros.filter(myFunction2);

function myFunction2(value) {
    return value > 18;
}

console.log(mayor18)

let text = "";

for (let i = 0; i < 5; i++) {
    text += "El número es " + i + "</br>";
}

console.log(text);

const person = {
    fname:"John",
    lname:"Doe",
    age:25
};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

console.log(txt);

const numbers5 = [12, 212, 545, 14, 24, 0, 1];

let txt2 = "";
for (let x in numbers5) {
    txt2 += numbers5[x] + "<br>";
}

console.log(txt2);