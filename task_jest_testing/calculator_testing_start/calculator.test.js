const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 10000;
    actual = sum(7000,3000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -7;
    actual = sum(-3, -4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 20;
    actual = sum(0, 20);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 6000;
    actual = subtract(1000, 7000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -1;
    actual = subtract(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 20;
    actual = subtract(0, 20);
    expect(actual).toBe(expected);
    
  });
 
});

describe('multiply', () => {

  test('can multiply two small positive numbers',() =>{
    actual = multiply(2,3);
    expected =6;
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers',() =>{
    actual = multiply(200, 300);
    expected =60000;
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers',() =>{
    actual = multiply(-200, -300);
    expected =60000;
    expect(actual).toBe(expected);
  });

  test('can multiply one negative numbers',() =>{
    actual = multiply(-200, 300);
    expected = -60000;
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0, 20);
    expect(actual).toBe(expected);
    
  });


});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
