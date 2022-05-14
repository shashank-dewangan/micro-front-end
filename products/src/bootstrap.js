import { faker } from '@faker-js/faker';

let products = '';
for (let i = 0; i < 10; i++) {
  products += `<li>${faker.company.companyName()}</li>`;
}

document.querySelector(
  '#dev-products'
).innerHTML = `<h2><ul>${products}</ul></h2>`;
