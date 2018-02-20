// Se lance lors d'une première recherche

<script src="C:/Users/Simon Berthoumieux/Desktop/Prototypes/Plan-interactif-master/EasyAutocomplete-1.3.5/jquery.easy-autocomplete.min.js"></script> 

 var POI = (function (){
        var json = null;

        $.ajax({
            'async':false,
            'global':false,
            'url' : "https://raw.githubusercontent.com/Xueimuohtreb/Plan-interactif/master/data/POI.json",
            'dataType' : "json",
            'success' : function(data){
                json = data;
            }
                });
            return json;
    })();


var features = []; 
features = POI.features; 
var jproperties = POI.features.map(function (el) {
    return el.properties; 
});

var options = {
    data: jproperties,

    getValue: "name",

    template: {
        type: "description",
        fields: {
        // Possibilité de mettre le campus en description
            description: "name"
        }
    },

    list: {
        match: {
            enabled: true
        }
    },

    theme: "plate-dark"
};

$("#example-mail").easyAutocomplete(options);
