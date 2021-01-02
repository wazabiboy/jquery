$(document).ready(function($){
    // Création d'un slider dans l'élément id slider_prix
    $("#slider_prix").slider({
        range:  true,
        min:    0,          // valeur min
        max:    5000,       // valeur max
        values: [0, 500],   // position des 2 curseurs à l'initialisation
         
        // Action à effectuer lorsqu'on déplace l'un des curseur
        slide: function(event, ui){
            $('#prix_min').html(ui.values[0]);
            $('#prix_max').html(ui.values[1]);
        }
    });
     
    // Initialisation des valeurs numériques au chargement de la page
    $('#prix_min').html($("#slider_prix").slider("values", 0));
    $('#prix_max').html($("#slider_prix").slider("values", 1));
});