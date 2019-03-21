import { gtZero, subTotal, total } from './products-qtd.mjs';

// Cart Tool
const products = [[1, 10.0, 2], [2, 10.0, 2], [3, 10.0, 2], [4, 10.0, 0]];

// filtering greater than zero
console.log(gtZero(products));
console.log([[1, 10.0, 2], [2, 10.0, 2], [3, 10.0, 2]]);

// calculating subtotal
console.log(subTotal(products));
console.log([[1, 20.0], [2, 20.0], [3, 20.0], [4, 0.0]]);

// calculating total
console.log(total(products));
console.log(60.0);
