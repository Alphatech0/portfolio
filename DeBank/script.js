const dark = document.querySelector('.dark-mode')
// var content = document.getElementsByTagName('body')[0];
dark.addEventListener('click',() =>{
    document.body.classList.toggle('active')
})
 const first = document.querySelector('.first-man')
 const second = document.querySelector('.second-man')
 second.addEventListener('click',()=>{
    first.classList.toggle('active')
 })