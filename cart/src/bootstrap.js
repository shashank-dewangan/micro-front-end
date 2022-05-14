import { faker } from '@faker-js/faker';

document.querySelector(
  '#dev-cart'
).innerHTML = `<h2>you have ${faker.random.numeric(2)} items in ur cart</h2>`;
