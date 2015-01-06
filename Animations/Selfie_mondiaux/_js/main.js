$(".picture").click(function(){
    
    if ($(this).hasClass("picture__active")) {
        $(this).removeClass("picture__active");
        $(this).addClass("picture__desactive");
        $(this).parent().addClass("player__desactive");
        $(".player").removeClass("player__active");
        $(".score").removeClass("score__active");
    }
    else {
        $(this).toggleClass("picture__active");
        $(this).parent().toggleClass("player__active");
        $(".score").toggleClass("score__active");
        $(this).removeClass("picture__desactive"); 
        $(".player").removeClass("player__desactive");
    }
});