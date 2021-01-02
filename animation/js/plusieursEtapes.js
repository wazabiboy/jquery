
    
    $(document).keydown(function(e){
        switch (e.which){
        case 81:    // flèche gauche
            $("#spider").finish().animate({
                left: "-=10"
            });
            break;
        case 90:    // flèche haut
            $("#spider").finish().animate({
                top: "-=10"
            });
            break;
        case 68:    // flèche droite
            $("#spider").finish().animate({
                left: "+=10"
            });
            break;
        case 83:    // flèche du bas
            $("#spider").finish().animate({
                top: "+=10"
            });
            break;
         
           
            
        }
    });


