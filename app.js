console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro*oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) => {
    const valueInEuro = valueInDollar / oneEuroIs["USD"];
    const valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
}
const fromYenToPound = (valueInYen) => {
    const valueInEuro = valueInYen / oneEuroIs["JPY"];
    const valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
}
console.log(fromYenToPound(1));



module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };