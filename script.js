let nome="Vincenzo";
let anni=24;
let apprende=true;
if (apprende) {
    console.log (`Salve mi chiamo ${nome}, ho ${anni} e sto ancora imparando a programmare.`);
} else {
    console.log (`Salve mi chiamo ${nome}, ho ${anni} e ho imparato a programmare.`);
}
function presentati(nome,anni) {
    return `Salve mi chiamo ${nome} e ho ${anni}anni`;
}
let risultato= presentati("Vincenzo", 24);
console.log(risultato);

function candycrush(c,d) {
    return c / d;
}
let caramella= candycrush(9865, 5);
console.log(caramella);

let strumenti= ["VS Code", "Git e GitHub", "Claude", "RPGMakerXP", "FreeCodeCamp"];
let contenitore = document.querySelector("#lista-strumenti");

for (let i = 0; i < strumenti.length; i++) {
    let elemento = document.createElement("li");
    elemento.textContent = strumenti[i];
    contenitore.appendChild(elemento);
}