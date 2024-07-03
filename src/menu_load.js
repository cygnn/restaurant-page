import img1 from '../imgs/adobo.jpg';
import img2 from '../imgs/lechon.jpeg';
import img3 from '../imgs/scallops.jpg';
import img4 from '../imgs/shrimp.jpeg';
import img5 from '../imgs/squid.jpg';
import img6 from '../imgs/sisig.jpg';
import './menu_load.css';

export function loadMenu(){
    const content = document.querySelector('#content')
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Bestsellers'

    content.appendChild(title);

    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    let foodImg = new Image();
    let menuItems = [
        {
            name: "Adobong Baboy",
            img: img1
        },
        {
            name: "Lechon Belly",
            img: img2
        },
        {
            name: "Scallops",
            img: img3
        },
        {
            name: "Deviled Shrimp",
            img: img4
        },
        {
            name: "Grilled Squid",
            img: img5
        },
        {
            name: "Sizzling Pork Sisig",
            img: img6
        }
    ]
    menuItems.forEach( (item) => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');
    
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('imgDiv');
        const img = document.createElement('img');
        img.src = item.img;
    
        imgDiv.appendChild(img);
    
        const itemName = document.createElement('div');
        itemName.classList.add('itemName');
        itemName.textContent = item.name;
    
        const desc = document.createElement('div');
        desc.classList.add('description')
        desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim tellus, vulputate sed molestie elementum, pellentesque quis ipsum. Suspendisse pellentesque eget neque sed laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eget massa ut sapien fermentum ultrices non sed enim. Morbi vitae ipsum sit amet leo semper tristique. Nunc id nisl id urna ultrices ultrices. Praesent magna lacus, lacinia quis auctor quis, pharetra sit amet urna. Sed suscipit odio non mauris posuere dictum.'
    
        const btn = document.createElement('button');
        btn.classList.add('orderBtn');
        btn.classList.add('menuOrder')
        btn.textContent = 'Order Now'

        menuCard.appendChild(imgDiv);
        menuCard.appendChild(itemName);
        menuCard.appendChild(desc);
        menuCard.appendChild(btn);
        menuContent.appendChild(menuCard);
    })
    content.appendChild(menuContent);
}
