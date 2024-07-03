import './home_load.css';
import orderSrc from '../imgs/order.png';
const content = document.querySelector('#content');
export function loadHome(){
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }

    const banner = document.createElement('div');
    banner.classList.add('banner');
    
    const text = document.createElement('p');
    text.textContent = 'Just a knockoff, imitation website of a famous fast-food restaurant in the Philippines';

    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('emptyDiv')

    const orderBtn = document.createElement('button');
    orderBtn.textContent = 'Order Now';
    orderBtn.classList.add('orderBtn');

    const foot = document.createElement('div');
    foot.classList.add('foot');

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('iconDiv');


    const circle = document.createElement('div')
    circle.classList.add('circle');
    const orderImg = new Image();
    orderImg.src = orderSrc;
    circle.appendChild(orderImg);

    const text2 = document.createElement('p');
    text2.classList.add('OrderIconText')
    text2.textContent = 'Order and Pick-Up'

    const trueFooter = document.createElement('div');
    trueFooter.classList.add('footer');
    

    iconDiv.appendChild(circle);
    iconDiv.appendChild(text2);
    foot.appendChild(iconDiv);

    text.appendChild(orderBtn);
    banner.appendChild(text);
    banner.appendChild(emptyDiv);
    content.appendChild(banner);
    content.appendChild(foot);
}



