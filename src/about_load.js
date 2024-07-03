import img1 from '../imgs/hekhok.png'
import './about_load.css';
export function loadAbout(){
    const content = document.querySelector('#content')
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');

    const aboutHeader = document.createElement('div');
    aboutHeader.classList.add('aboutHeader');

    const aboutHeaderText = document.createElement('h1');
    aboutHeaderText.classList.add('header-text');
    aboutHeaderText.textContent = 'About Us';

    aboutHeader.appendChild(aboutHeaderText);
    aboutContent.appendChild(aboutHeader);

    const aboutBody = document.createElement('div');
    aboutBody.classList.add('about-body');

    const leftside = document.createElement('div');
    const rightside = document.createElement('img');

    leftside.classList.add('left-side');
    rightside.classList.add('right-side');
    rightside.src = img1;

    const text = document.createElement('p');
    text.classList.add('main-body-text');
    text.textContent = 'This project is just an imitation of sorts from a popular fast food restaurant in the Philippines, created solely for amusement and without any intention to infringe on copyright. I purposedly tried to change some of the graphics and also changed the entire menu to my favorite foods just for the fun of it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales rhoncus molestie. Aliquam bibendum eleifend elit ac consequat. Pellentesque pulvinar risus vitae erat hendrerit auctor. Sed volutpat dignissim placerat. Duis nec feugiat nibh, nec ornare orci. Phasellus tristique placerat nunc. Aenean quis lacus id est mattis laoreet. Suspendisse cursus, sem vitae commodo mattis, dui sapien aliquam erat, eu egestas nisi ex vel felis.  '

    const link1 = document.createElement('a');
    const linkText1 = document.createTextNode('Order icons created by Yoteyo - Flaticon')
    link1.appendChild(linkText1)
    link1.title = 'Order icons'
    link1.href ="https://www.flaticon.com/free-icons/order";

    const link2 = document.createElement('a');
    const linkText2 = document.createTextNode('This is the original website')
    link2.appendChild(linkText2)
    link2.title = 'Jollibee website'
    link2.href ="https://www.jollibee.com.ph/";

    leftside.appendChild(text);
    leftside.appendChild(link1);
    leftside.appendChild(link2);
    aboutBody.appendChild(leftside);
    aboutBody.appendChild(rightside);

    aboutContent.appendChild(aboutBody);
    content.appendChild(aboutContent);

}