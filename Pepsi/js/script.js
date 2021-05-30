// brand animation Using csshake Library
$(".img-brand").mouseover(function(){
    $(this).addClass("shake-slow");
  });


// Arrow Go To Top Page
$(".top-page").on("click",function(){
    $(window).scrollTop(0);                   
    });


//second section animate
 $(window).scroll(function(){
    // console.log( "window scroll top = " + $(this).scrollTop() );
    if( $(window).scrollTop() > 200 ){
        $('.sec').animate({opacity:1},2000);
     }
 });

 
//last section animate
$(window).scroll(function(){
    if( $(window).scrollTop() > 1100 ){
        $('.last').animate({opacity:1},2000);
     }
 });


//Footer animate
 $(window).scroll(function(){
    if( $(window).scrollTop() > 1700 ){
        $('.footer').animate({opacity:1},1000);
     }
 });



