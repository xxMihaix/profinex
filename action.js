

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