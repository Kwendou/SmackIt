$(".picture").click(function(){
    $(this).toggleClass("picture__active");
    $(".player").toggleClass("player__active");
    $(".score").toggleClass("score__active");
});