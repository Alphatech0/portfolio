const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav(){
    if(window.scrollY > nav.offsetHeight - 40){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

let menuToggle = document.querySelector('.toggle');
let fund = document.querySelector('.fund');
let challenge = document.querySelector('.challenge');
let fundamental = document.querySelector('.fundamental');
let coding = document.querySelector('.coding');
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active')
        fund.classList.toggle('active')
        challenge.classList.toggle('active')
        fundamental.classList.toggle('active')
        coding.classList.toggle('active')
        
    }