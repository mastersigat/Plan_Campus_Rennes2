// Se lance lors d'une première recherche


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

$("#searchfield").easyAutocomplete(options);
