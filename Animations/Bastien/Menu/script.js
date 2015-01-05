$(document).ready(function() {
    /*$(".bouton").animate(
    {bottom:"+=260px", opacity:1},
    1000,
    "swing"
    );*/

    $(".bouton").click(function(){
        $(".bouton").toggleClass("bouton__active");
        $(".phrase").toggleClass("phrase__active");
        $(".phrase>p").toggleClass("phrase_phrase__active")
		$(".smackit").toggleClass("smackit__active");        

    })

});


