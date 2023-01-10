const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.lenght;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');

openCloseButton.addEventListener('click', e =>{
    menuMobileItems.classList.toggle('menu-mobile-close');
});

workItems.forEach(item => {
    item.addEventListener('click', e=>{
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute('data-id'));
        const contentArr = document.querySelectorAll('#detalles-contenido .item');

        document.querySelectorAll('#detalles-contenido .item').forEach(item=>{item.classList.add('item-hide');})
        document.querySelectorAll('#detalles-contenido .item')[currentIndex].classList.toggle('item-hide');
        document.querySelector('#pantalla').style['animation-name']='fade-in';
        document.querySelector('body').style['overflow']='hidden';

        setTimeout(()=>{
            document.querySelector('#detalles-contenido').style.display ='block';

        },1000);

        setTimeout(() =>{
            document.querySelector('#pantalla').style = '';
        }, 2000);

    })
});

closeButton.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#pantalla').style['animation-name']='fade-in';
    document.querySelector('body').style['overflow']='auto';

        setTimeout(()=>{
            document.querySelector('#detalles-contenido').style.display ='none';

        },1000);

        setTimeout(() =>{
            document.querySelector('#pantalla').style = '';
        }, 2000);
});

prevButton.addEventListener('click', e=>{
    if(currentIndex - 1<0){
        return;
    }
    currentIndex--;
    loadGalleryItem(currentIndex);
});

nextButton.addEventListener('click', e=>{
    if(currentIndex + 1==workItemsCount){
        return;
    }
    currentIndex++;
    loadGalleryItem(currentIndex);
});

function loadGalleryItem(index){
    const items = document.querySelectorAll('#detalles-contenido .item');

    items.forEach(item => {item.classList.add('item-hide')});
    items[index].classList.toggle('item-hide');
}

