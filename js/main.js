$('.menu').on('click', function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function() {
    $('.menu').removeClass('active');
    $('.overlay').removeClass('menu-open');
});

$(window).scroll(function(){
    if($(this).scrollTop() > 40){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
});

   $('#up').click(function(){
       $('html, body').animate({
           scrollTop : 0
       }, 800);    
   });