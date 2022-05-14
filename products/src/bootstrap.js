import { faker } from '@faker-js/faker';

export const mount = (element) => {
  let products = '';
  for (let i = 0; i < 10; i++) {
    products += `<li>${faker.company.companyName()}</li>`;
  }

  element.innerHTML = `<h2><ul>${products}</ul></h2>`;
};

const element = document.querySelector('#dev-products');
if (element) mount(element);
