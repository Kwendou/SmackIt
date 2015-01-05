$(document).ready(function(){

    $(".winner").click(function(){
        $(".winner").toggleClass("winner__active");
        $(".un").toggleClass("un__active");
        $(".deux").toggleClass("deux__active");
        $(".trois").toggleClass("trois__active");
    })

    $(".loser").click(function(){
        $(".loser").toggleClass("loser__active");
    })


});


