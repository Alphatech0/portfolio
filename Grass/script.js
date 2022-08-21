
//  NAV MENU


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
let menu_toggle = document.querySelector('.menu_toggle');
let signin = document.querySelector('.signin');
// let fundamental = document.querySelector('.fundamental');
let coding = document.querySelector('.coding');
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active')
        menu_toggle.classList.toggle('active')
        signin.classList.toggle('active')
        // fundamental.classList.toggle('active')
        // coding.classList.toggle('active')
        
    }
    
    // NAV MENU ENDS HERE


    // MORE OPPORTUNITIES STARTS HERE

    const toobadDisplay= document.querySelector("small.toobad");

    
    
    

    opportunities=["opens new doors","create new hobbies","launches new career","creates new opportunities","expand your networks","develops new skills"]
    let start=0;
   myDisplay();
    function myDisplay() {    
       
if (start > opportunities.length-1) {

    start=0;
    toobadDisplay.innerHTML= `<i> ${opportunities[start]}</i>`;
              start++
        
}
else{
    toobadDisplay.innerHTML= `<i> ${opportunities[start]}</i>`;
    start++
}

        
setTimeout(myDisplay,1000)
    }


    // SLIDESHOW
    const first= document.querySelector(".one")
const second = document.querySelector(".two")
const third= document.querySelector(".three")
const fourth= document.querySelector(".four")

const fir= document.querySelector(".first")
const sec= document.querySelector(".second")
const thir= document.querySelector(".third")
const four= document.querySelector(".fourth")

const allspans= document.querySelectorAll("span");

allspans.forEach((span,index)=>{

    span.addEventListener("click",()=>{

        if (index==0) {
                first.style.display="block";
                second.style.display="none";
                third.style.display="none";
                fourth.style.display="none"
                
                fir.style.backgroundColor= "lightblue"
                sec.style.backgroundColor= "grey"
                thir.style.backgroundColor= "grey"
                four.style.backgroundColor= "grey"
                
        }
        else if(index==1){
               first.style.display="none";
                second.style.display="block";
                third.style.display="none";
                fourth.style.display="none";

                
                fir.style.backgroundColor= "grey"
                sec.style.backgroundColor= "lightblue"
                thir.style.backgroundColor= "grey"
                four.style.backgroundColor="grey"
        }
        else if (index==2) {
               first.style.display="none";
                second.style.display="none";
                third.style.display="block";
                fourth.style.display="none";

                
                fir.style.backgroundColor= "grey"
                sec.style.backgroundColor= "grey"
                thir.style.backgroundColor= "lightblue"
                four.style.backgroundColor="grey"
        }
        else{
              first.style.display="none";
                second.style.display="none";
                third.style.display="none";
                fourth.style.display="block";

                
                fir.style.backgroundColor= "grey"
                sec.style.backgroundColor= "grey"
                thir.style.backgroundColor= "grey"
                four.style.backgroundColor="lightblue"

        }
    })
})




let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let spans= document.querySelectorAll("span");


    for (i=0; i < slides.length; i++)
        {
            slides[i].style.display = "none";

        }   
    for(j=0; j<spans.length;j++){
        spans[j].style.backgroundColor="grey";
    } 
    
   
    
    if (slideIndex > slides.length-1 ) {
        slideIndex=0; 
    }
   
   slides[slideIndex].style.display ="block";
   spans[slideIndex].style.backgroundColor="lightblue"
  
   slideIndex++;
    setTimeout(showSlides,6000);
}


    
const usual=document.querySelectorAll(".usual-2")

let slideInd=0;
secondSlide();
 function secondSlide() {   
     
    
    
if (slideInd==0) {
    usual[0].classList.add("samuel")
    usual[1].classList.remove("samuel")
    usual[2].classList.remove("samuel")
    usual[3].classList.remove("samuel")
    // usual[4].classList.remove("samuel")
   
}
else if(slideInd==1){
    usual[0].classList.remove("samuel")
    usual[1].classList.add("samuel")
    usual[2].classList.remove("samuel")
    usual[3].classList.remove("samuel")
    // usual[4].classList.add("samuel")

    
}
else if(slideInd==2){
    usual[0].classList.remove("samuel")
    usual[1].classList.remove("samuel")
    usual[2].classList.add("samuel")
    usual[3].classList.remove("samuel")
    // usual[4].classList.remove("samuel")

    
}
else if(slideInd==3){
    usual[0].classList.remove("samuel")
    usual[1].classList.remove("samuel")
    usual[2].classList.remove("samuel")
    usual[3].classList.add("samuel")
    // usual[4].classList.remove("samuel")

    
}

// else if(slideInd==4) {
//     usual[0].classList.remove("samuel")
//     usual[1].classList.remove("samuel")
//     usual[2].classList.remove("samuel")
//     usual[3].classList.remove("samuel")
//     usual[4].classList.add("samuel")

    
// }
if(slideInd > usual.length-1){
    slideInd=0;
//  usual[0].classList.add("samuel")
// usual[1].classList.remove("samuel")
// usual[2].classList.remove("samuel")
// usual[3].classList.remove("samuel")
// usual[4].classList.remove("samuel")
}
     slideInd++;
setTimeout(secondSlide,3000)
 }




