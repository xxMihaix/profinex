

const btn1 = document.getElementById('nav-btn1');
const btn2 = document.getElementById('nav-btn2');
const btn3 = document.getElementById('nav-btn3');
const drop1 = document.getElementById('drop1');
const drop2 = document.getElementById('drop2');
const drop3 = document.getElementById('drop3');

btn1.addEventListener('click', function() {
    if(drop1.classList.contains('active')){
        drop1.classList.remove('active');
    }
    else{
        drop1.classList.add('active');
        drop2.classList.remove('active');
        drop3.classList.remove('active');
    }
});

btn2.addEventListener('click', function() {
    if(drop2.classList.contains('active')){
        drop2.classList.remove('active');
    }
    else{
        drop2.classList.add('active');
        drop1.classList.remove('active');
        drop3.classList.remove('active');
    }
});

btn3.addEventListener('click', function() {
    if(drop3.classList.contains('active')){
        drop3.classList.remove('active');
    }
    else{
        drop3.classList.add('active');
        drop1.classList.remove('active');
        drop2.classList.remove('active');
    }
});

const menu = document.getElementById('open');
const close1 = document.getElementById('close');
const menuDrop = document.getElementById('mobile-drop');

const drop4 = document.getElementById('nav-btn4');
const drop5 = document.getElementById('nav-btn5');
const drop6 = document.getElementById('nav-btn6');
const ndrop1 = document.getElementById('ndrop1');
const ndrop2 = document.getElementById('ndrop2');
const ndrop3 = document.getElementById('ndrop3');

menu.addEventListener('click', function() {
        const currentLeft = window.getComputedStyle(menuDrop).left;

    if (currentLeft === '0px') {
        menuDrop.style.left = '-300px'; // închide
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
        ndrop3.classList.remove('show');
    } else {
        menuDrop.style.left = '0px'; // deschide
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
        ndrop3.classList.remove('show');
    }
})

close1.addEventListener('click', function() {
        menuDrop.style.left = '-350px';
})


drop4.addEventListener('click', function() {
    if(ndrop1.classList.contains('show')){
        ndrop1.classList.remove('show');
    }
    else{
        ndrop1.classList.add('show');
        ndrop2.classList.remove('show');
        ndrop3.classList.remove('show');
    }
});

drop5.addEventListener('click', function() {
    if(ndrop2.classList.contains('show')){
        ndrop2.classList.remove('show');
    }
    else{
        ndrop2.classList.add('show');
        ndrop1.classList.remove('show');
        ndrop3.classList.remove('show');
    }
});

drop6.addEventListener('click', function() {
    if(ndrop3.classList.contains('show')){
        ndrop3.classList.remove('show');
    }
    else{
        ndrop3.classList.add('show');
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
    }
});

const acasa = document.getElementById('acasa');
const acasadrop = document.getElementById('acasadrop');

acasa.addEventListener('click', function() {
    ndrop3.classList.remove('show');
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
        drop3.classList.remove('active');
        drop1.classList.remove('active');
        drop2.classList.remove('active');
})

acasadrop.addEventListener('click', function() {
    ndrop3.classList.remove('show');
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
        drop3.classList.remove('active');
        drop1.classList.remove('active');
        drop2.classList.remove('active');
})

const open1 = document.getElementById('open1');
open1.addEventListener('click', function() {
    const currentLeft = window.getComputedStyle(menuDrop).left;

    if (currentLeft === '0px') {
        menuDrop.style.left = '-300px'; // închide
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
        ndrop3.classList.remove('show');
    } else {
        menuDrop.style.left = '0px'; // deschide
        ndrop1.classList.remove('show');
        ndrop2.classList.remove('show');
        ndrop3.classList.remove('show');
    }
})

const contact1 = document.getElementById('contact1');
contact1.addEventListener('click', function() {
        drop1.classList.remove('active');
        drop2.classList.remove('active');
        drop3.classList.remove('active');
})

const contact = document.getElementById('contact');
contact.addEventListener('click', function() {
        ndrop2.classList.remove('show');
        ndrop1.classList.remove('show');
        ndrop3.classList.remove('show');
})

document.addEventListener('DOMContentLoaded', function(){
    const yt = document.getElementById('ytc');
    yt.addEventListener('click', function(){
     window.location.href = 'https://www.youtube.com/@ItsMihaii';
}) 
})
