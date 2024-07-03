import './styles.css';
import Icon from '../imgs/icon.png';
import './home_load';
import { loadHome } from './home_load';
import './menu_load';
import { loadMenu } from './menu_load';
import { loadAbout } from './about_load';

console.log('Hello there!');

const logo = document.querySelector('.logo');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

const myIcon = new Image();
myIcon.src = Icon;

logo.appendChild(myIcon);

home.addEventListener('click', loadHome);
menu.addEventListener('click', loadMenu);
about.addEventListener('click', loadAbout);

loadHome();