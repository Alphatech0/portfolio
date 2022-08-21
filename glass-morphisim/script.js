var i = 0 ;
//   start point
var images= [];
// empty Array
var time = 5000;
const img = document.querySelector('.col2 img')
// time for the slideshow
//   and i need my images
images[0] = '2.jpg';
images[1] = 'img3.jpg';
images[2] = 'img4.jpg';
images[3] = 'img2.jpg';
//  change the images
function changeimg(){
      document.slideshow.src = images[i]; 
      if(i < images.length -1){
        i++
      }else {
        i = 0;
      }
      setTimeout('changeimg()',time);
}
window.onload = changeimg;

const display = document.querySelector('.primary-btn')
const show = document.querySelector('.group-btn')
show.addEventListener('click', () => {
    show.classList.add('active')
    // alert('i am a man')
})
