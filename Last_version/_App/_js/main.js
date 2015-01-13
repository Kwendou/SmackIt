$(document).ready(function()
    {

//LOADING
//LOADING
//LOADING
//LOADING

    window.setTimeout(function(){
        $(".progressBar").addClass('progressBar_active');
    },200);
    
    window.setTimeout(function(){
        $(".logo").addClass("logo__active");
        $(".background").addClass("background__active");
    },2450);

    window.setTimeout(function(){
        $(".loading").addClass('loading_hid');
    },3200);
    
//FIN LOADING
//FIN LOADING
//FIN LOADING
//FIN LOADING
    
    
//MENU
//MENU
//MENU
//MENU
    
        
    
   $('.nav__el').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
       });
    
    $('.nav__el--profile').click(function(){
        $('.profil').addClass("show__all--profil");
    });

    
    $('.nav__el--accueil').click(function(){
        $('.profil').removeClass("show__all--profil");
    });

    
    $('.nav__el--joueurs').click(function(){
        $('.profil').removeClass("show__all--profil");
    });

    
//FIN MENU
//FIN MENU
//FIN MENU
//FIN MENU
    
// HOME
// HOME
// HOME
// HOME
    
    $(".button__texte").click(function(){
        $(this).toggleClass('button__texte--active');
    });
    
    $(".random__texte--el").empty();

    var quotes = [
            "<p>Ton père est un voleur, il a pris toutes les étoiles du ciel, pour les mettre dans tes yeux. </p>",
           "<p>T'as pas eu mal ?</p> <p>-'Hein?'-</p> <p>Quand tu es tombée du ciel. </p>",
           "<p>Si t'étais un pirate, ton perroquet, tu le mettrais là, ou là ?</p>",
           "<p>Si tu m'embrasse pas, je hurle.</p>",
           "<p>Ton père il vend des biscottes ?</p> <p>-'Non, pourquoi?'-</p> <p>Pcq tu es craquante.</p>",
           "<p>Ton père c'est un terroriste, il a fabriqué une bombe. </p>",
           "<p>Tu te fais présenter par un pote -'Hey, tu connais (prénom de ton amie/ami)?'-</p>",
           "<p>Lance lui un avion en papier avec ton numéro écrit dessus.</p>",
           "<p>Lance lui ta chaussure avec ton numéro écrit dessus.</p>",
           "<p>Offre lui un verre</p>",
           "<p>Si elle sont deux dit à l'une : Tu me prète ta copine, je te la ramène avec le plein.</p>",
           "<p>Si le verbe aimer n'existait pas, je l'aurais inventé en te voyant.</p>",
           "<p>Tu t'appelle Google ? Pcq je trouve en toi tout ce que je recherche.</p>",
           "<p>Excuse moi, tu aurais pas 2 euros pour que je te paye un café?</p>",
           "<p>Vous êtes charmante, est ce que je peux vous lécher quelque chose ?</p>",
           "<p>Ton père travaille à Nintendo si j'en crois ton corps de Déesse.</p>",
           "<p>Il y a 3 milliards de personnes sur cette planète, mais je n'ai besoin que de toi.</p>",
           "<p>Tu peux arrêter de me regarder stp, je suis hyper timide.</p>",
           "<p>On dirait que tu as envie d'une conversation passionnante.</p>",
           "<p>Tu peux arrêter de me draguer stp ?</p>",
           "<p>Ton père il serait pas sculpteur ? Parce que t'es vraiment bien taillée.</p>",
           "<p>T'es pas fatiguée à force de trotter dans ma tête?</p>",
           "<p> Excuse-moi. On dirait que j’ai perdu Mon numéro de téléphone… Est-ce que je pourrais emprunter le tien ?</p>",
           "<p>Est-ce que tu crois au coup de foudre au premier regard ou est-ce que je dois repasser ?</p>",
           "<p>Excuse-moi. Est-ce que tu embrasses les inconnus ? Non ? Donc, je me présente.</p>",
           "<p>Je viens d’arriver dans ta ville. Est-ce que tu pourrais m’indiquer le chemin jusqu’à ton appartement ?</p>",
           "<p>Tu t'appellerais pas Wifi ? Parce que je sens qu'il y a une connexion entre nous.</p>",
           "<p>Ton père serait pas informaticien? Pcq t as un corps fait en photoshop.</p>",
           "<p>Ton père ne serait pas chauffagiste? Parce que t'as l'air d'une chaudasse.</p>",
           "<p>Je te paie un café ou on s'embrasse ? mais je t'avoue que là j'ai pas soif !</p>",
           "<p>Salut, je m’appelle Prince et je suis charmant. Quelqu’un m’a dit que tu me cherchais?</p>",
           "<p>-Excuse moi, tu pourrais vider t'es poches?</p><p>- Euhm pourquoi?</p><p>-Jpense que t'as volé mon coeur</p>",
           "<p>Hey mademoiselle t'as de belles jambes, elles ouvrent à quelle heure ?</p>",
           "<p>Et les biches ça ne se promène pas dans les bois normalement ?</p>",
           "<p>Et les sirènes ça nage pas dans l'océan normalement ?</p>",
           "<p>C'est mon anniversaire! Que diriez-vous d'un baiser d'anniversaire?</p><p>Est-ce vraiment votre anniversaire?</p> <p>Non, mais que diriez-vous d'un baiser de toute façon?</p>",
           "<p>Mlle, vous avez fait tomber quelque chose!</p> <p>-Ah oui?-</p> <p>Oui, mon coeur</p>", 
           "<p>Je ne suis pas chasseur mais je te mettrait bien une cartouche.</p>", 
           "<p>Ton père est bijoutier ?</p> <p>Non pourquoi ?</p> <p>Parce que tu es une fille en Or.</p>", 
           "<p>-J'écris un livre et j'aurais besoin de ton aide ...</p><p>-Comment puis je t'aider ?!</p><p>-J'écris le bottin de téléphone. Il me faudrait ton numéro</p>",
           "<p>Quand on te voit on t'aime et quand on t'aime on te voit où ?</p>",
           "<p>Je ne suis peut être pas gynécologue mais je veux bien jeter un coup d'oeil.</p>",
           "<p>Hey t'as pris une douche dernièrement ? parce que tu sens super bon !</p>",
           "<p>Hey, t'es jolie, je suis moche, faisons des bébés dans la moyenne.</p>",
           "<p>Mes amis m'appellent Jack mais toi tu peux m'appeler ce soir!</p>",
           "<p>Hey ce soir je te baise, si jamais tu es la bienvenue!</p>",
           "<p>Excusez-moi, je pense que vous avez quelque chose dans votre oeil. Oh, attendez, c'est juste une étincelle.</p>",
           "<p>Il n'y a pas de mots dans le dictionnaire pour décrire votre beauté.</p>",
           "<p>Merde, si être sexy était un crime, vous seriez coupable!</p>",
           "<p>Est-ce que tu t'es assis sur une pile de sucre ? Parce que ton cul paraît super doux!</p>",
           "<p>Je ne suis pas un photographe, mais je peux facilement nous voir ensemble.</p>",
           "<p>Êtes-vous religieux? Parce que vous êtes la réponse à toutes mes prières.</p>",
           "<p>Si t'étais un pet, je te lacherais pas.</p>",
           "<p>Tu dois m'embrasser, c'est la loi.</p>",
           "<p>Je ne crois pas en Dieu mais depuis que je te connais, je crois au paradis.</p>",
           "<p>-Salut ca va bien?</p><p>-Oui et toi?</p><p>- Ca va. Bon assez parlé. Alors tu baise?</p>",
           "<p>Ce ne serait pas vous le/la responsable du réchauffement de la planète ?</p>",
           "<p>Je parcourrais le monde entier pour voir tes yeux et encore plus loin pour voir ce que tu fais avec ta langue!</p>",
           "<p>Je suis homo, mais en te voyant, j’ai commencé à douter. Voudrais tu m’aider à clarifier?</p>",
           "<p>Je suis très reconnaissant à l’alcool pour voir double quand tu es en face de moi!</p>",
           "<p>Hey mademoiselle ! T'es prise ? même si t'es prise moi je suis multiprise. Du moment qu'il y a le courant qui passer.</p>",
           "<p>Tes yeux sont magnifiques ...mais je préfères les miens car sans eux je ne les aurais jamais vu!</p>",
           "<p>Tes yeux c'est le soleil parce que tu me fais bronzer.</p>",
           "<p>Tu es le CSS lié à mon HTML - Geek</p>",
           "<p>Tout est une question de confiance en soi ! Si tu y crois tu y arriveras !</p>",
           "<p>-Tu ressembles a ma première femme.</p><p>-T'as ete marié combien de fois?</p><p>-Jamais...</p>",
           "<p>Tu serais pas hôtesse de l'air ? Parce que t'as l'air d'avoir quelques heures de vol au compteur.</p>",
           "<p>Sinon ca va?</p>",
           "<p>Même pas besoin de choper des bières, tu me fais déjà moussé !</p>",
           "<p>Si tu étais jardinier je te donnerais une fleur, mais comme tu es mon âme-soeur je te donne mon coeur.</p>",
           "<p>Tu savais que tu as 206 os à l’intérieur de ton corps ? Ça te dirait d’en avoir un de plus ?</p>"
]

    var randno = Math.floor(Math.random()*(quotes.length));

    $('.random__texte--el').append(quotes[randno]);

    $( '.random__texte' ). css ({ 
            'text-align' : 'center' ,
            'font-family' : '"raleway_light" , "Arial" , sans-serif',        
            'color': '#33334a'
    });
    var hauteur=quotes.length;

    $('.random__texte--el').css ({
            'margin-top'  :  - $ ( ".random__texte--el" ). height ()/ 2
    });

    var remplir = hauteur/100;

    var divremplir = (randno*remplir);

    $('.jauge__el--remplis').css({
        width: divremplir*"4"
    });

    $(".plus").click(function(){

           randno++;

                $('.random__texte--el').html(quotes[randno]);

            $('.random__texte--el').css ({
                    'margin-top'  :  - $ ( ".random__texte--el" ). height ()/ 2
            })

            var remplir = hauteur/100;
            var divremplir = (randno*remplir);
                $('.jauge__el--remplis').css({
                    width: divremplir*"4"
                });
            if (randno>hauteur-2) {
                randno=-1;
            }

    });

    $(".moins").click(function(){

               randno--;

                    $('.random__texte--el').html(quotes[randno]);

                $('.random__texte--el').css ({
                        'margin-top'  :  - $ ( ".random__texte--el" ). height ()/ 2
                })
                var remplir = hauteur/100;
                var divremplir = (randno*remplir);
                    $('.jauge__el--remplis').css({
                        width: divremplir*"4"
                    });

                if (randno<1){
                    randno = hauteur;
                }
            });
        
    
    
// FIN HOME
// FIN HOME
// FIN HOME
// FIN HOME
   
     
// Accepted
// Accepted
// Accepted
// Accepted
   
    
   $(".button__texte").click(function(event){
       var timeout=setTimeout(function(){
           $(".buttonSmack").addClass('buttonSmack__hid');
           $(".buttonChoice").addClass('buttonChoice__show');
           $(".random__logo").addClass('random__logo--hid');
        },300);
       var timeout=setTimeout(function(){
           $(".rate").addClass('arrive');
           $(".reussi").addClass('arrive');
       },600);
   });
     
// FIN Accepted
// FIN Accepted
// FIN Accepted
// FIN Accepted
   
     
// Profile
// Profile
// Profile
// Profile
    
    
var profile=0;
               
            
       $(".mdp").click(function(){
           $(".popup").addClass("popup__show");
       });

       $(".changermdp").click(function(){
           $(".popup").removeClass("popup__show");
           setTimeout(function(){
               $(".validation").addClass("validation__show");
            },650);
           setTimeout(function(){
               $(".validation").removeClass("validation__show");
            },2650);

       });

       $(".pictureUn").click(function(){
           $(".win1").toggleClass("selfie__show");
       });

       $(".pictureDeux").click(function(){
           $(".win2").toggleClass("selfie__show");
       });

       $(".pictureTrois").click(function(){
           $(".win3").toggleClass("selfie__show");
       });

       $(".pictureQuatre").click(function(){
           $(".win4").toggleClass("selfie__show");
       });

       $(".pictureCinq").click(function(){
           $(".win5").toggleClass("selfie__show");
       });

       $(".pictureSix").click(function(){
           $(".win6").toggleClass("selfie__show");
       });

       $(".pictureSept").click(function(){
           $(".win7").toggleClass("selfie__show");
       });

       $(".picturreUn").click(function(){
           $(".lose1").toggleClass("selfie__show");
       });

       $(".picturreDeux").click(function(){
           $(".lose2").toggleClass("selfie__show");
       });

       $(".picturreTrois").click(function(){
           $(".lose3").toggleClass("selfie__show");
       });


       $(".next__profile").click(function(){
           profile++;
           console.log(profile);

           if (profile==1){
               $(".profilReussi").addClass("show__one--profile");
               $(".ballFull").css("webkitTransform", "translateX(17px)");

           } else if (profile==2){
               $(".profilRate").addClass("show__one--profile");
               $(".ballFull").css("webkitTransform", "translateX(34px)");
           } else {
               $(".profilcreation").addClass("show__one--profile");
               $(".ballFull").css("webkitTransform", "translateX(51px)");
           }
       });

       $(".previus__profile").click(function(){
           profile--;
           console.log(profile);

           if (profile==2){
               $(".profilcreation").removeClass("show__one--profile");
               $(".ballFull").css("webkitTransform", "translateX(34px)");
           } else if (profile==1){
               $(".profilRate").removeClass("show__one--profile");
               $(".ballFull").css("webkitTransform", "translateX(17px)");
           } else {
               $(".profilReussi").removeClass("show__one--profile");
               $(".ballFull").css("webkitTransform", "translateX(0px)");
           }
       });
    

     
// FIN Profile
// FIN Profile
// FIN Profile
// FIN Profile
 

    });