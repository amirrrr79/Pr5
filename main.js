const btn=document.getElementById('nav-toggle');
const BtnClose=document.getElementById('x')
const navbar=document.getElementById('navbar')
const Scroll=document.querySelector('.scroll-up')
const button_off=document.getElementById('button-dark')
const button_on=document.getElementById('button-light')
const body=document.getElementById('dark')
const footer=document.getElementById('footer')
const logo=document.getElementById('logo')
const ts=document.querySelector('.title')

btn.addEventListener('click',function(){
    btn.style.display="none"
    BtnClose.style.display='block'
    aside.classList.add('show-sidebar')

})


BtnClose.addEventListener('click',function(){
    btn.style.display="block"
    BtnClose.style.display='none'
    aside.classList.remove('show-sidebar')
})


window.addEventListener('scroll', function(){
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fix");
    } else {
        navbar.classList.remove("navbar-fix");
    }
})

window.addEventListener('scroll', function(){
    if(window.scrollY> 1080){
        Scroll.style.display='block'
    }
    else{
        Scroll.style.display='none'

    }
})

button_off.addEventListener('click', function(){
    button_on.style.display='block'
    button_off.style.display='none'
    body.style.background='black';
    navbar.style.background="black";
    logo.style.color='blueviolet';
    ts.style.color='white';
    footer.style.background='rgb(33, 33, 33)'
})

button_on.addEventListener('click',function(){
    button_on.style.display='none'
    button_off.style.display='block'
    body.style.background='white';
    navbar.style.background="white";
    logo.style.color='black';
    ts.style.color='black'
    footer.style.background=' rgb(194, 139, 245)'
})