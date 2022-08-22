// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const project = document.getElementById('project')
// const message = document.getElementById('message')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let message = []
//     if (name.value === '' || name.value == null){
//         messages.push('name is required')
//     }

//     if (messages.lenght > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })

$(document).ready(function(){

    $(`#menu`).click(function(){
        $(this).toggleClass('fa-times');
        $(`header`).toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $(`#menu`).removeClass('fa-times');
        $(`header`).removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        } else{
            $('.top').hide();
        }
    });

    // smooth scroll
    $(`a[href*="#"]`).on('click',function(e){
       
        e.preventDefault();

        $(`html, body`).animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});