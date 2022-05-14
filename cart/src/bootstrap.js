import { faker } from '@faker-js/faker';

export const mount = (element) => {
  element.innerHTML = `<h2>you have ${faker.random.numeric(
    2
  )} items in ur cart</h2>`;
};

const element = document.querySelector('#dev-cart');
if (element) mount(element);
