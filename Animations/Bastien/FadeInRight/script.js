$(document).ready(function() {
    
    $(".phrase").click(function(){
        $(".phrase>div>p").toggleClass("phrase__active");
        $(".phrase").toggleClass("rotate");
     
    })

});


