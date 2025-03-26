const { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound} = require('./app.js');



test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 146.26168224299064 yens", function() {
    
    const yen = fromDollarToYen(1);

     const expected =   1 * 146.26168224299064;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(1 * 146.26168224299064); 
})
test("One yen should be 0.0055591054313099035 Puonds", function() {
    
    const yen = fromYenToPound(1);

     const expected =   1 * 0.0055591054313099035;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(1 * 0.0055591054313099035); 
})