import { mount as mountProduct } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mountCart(document.querySelector('#container-cart'));
mountProduct(document.querySelector('#container-products'));
