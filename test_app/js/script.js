$(document).ready(function (){
    $('a[href^="#"]').click(function (){
        var currentElement = $(this).attr("href");
        var destination = $(currentElement).offset().top;
        $('html, body').animate({scrollTop: destination}, 1500);
        return false;
    })
});

new WOW().init();


$('#clickme').click(function(){
    $('#robot').slideUp('slow', function() {
    });
  });