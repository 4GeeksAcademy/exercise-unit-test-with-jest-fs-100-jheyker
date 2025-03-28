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
test("One dollar should be 146.26 yens", function() {
    
    const yen = fromDollarToYen(4);

     const expected =   4 * 146.26;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3)).toBeCloseTo(3 * 146.26,1); 
})
test("One yen should be 0.0056 Puonds", function() {
    
    const yen = fromYenToPound(5);

     const expected =   5 * 0.0056;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(5)).toBeCloseTo(5 * 0.0056,1); 
})