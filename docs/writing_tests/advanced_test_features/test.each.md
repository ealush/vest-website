---
sidebar_position: 2
---

## test.each for dynamically creating tests from a table

Use test.each when you need to dynamically create tests from data, or when you have multiple tests that have the same overall structure.

test.each takes an array of arrays. The inner array contains the arguments that each of the tests will receive.

Because of the dynamic nature of the iterative tests, you can also dynamically construct the fieldName and the test message by providing a function instead of a string. Your array's content will be passed over as arguments to each of these functions.

```js
/*
const data = {
  products: [
    ['Game Boy Color', 25],
    ['Speak & Spell', 22.5],
    ['Tamagotchi', 15],
    ['Connect Four', 7.88],
  ]
}
*/

const suite = create((data) => {
  test.each(data.products)(
    (name) => name,
    "Price must be numeric and above zero.",
    (_, price) => {
      enforce(price).isNumeric().greaterThan(0);
    }
  );
});
```
