/* ------------------------------------Busquedas laborales--------------------------------------------------- */

$(".trabajo-territorial").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").show();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".trabajo-territorial").css("background-color", "#1B4D41");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".trabajo-territorial a").css("color", "#EFEBC8");  
    }
);
$(".logistica").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").show();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".logistica").css("background-color", "#1B4D41");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".logistica a").css("color", "#EFEBC8");  
    }
);
$(".recaudador-fondos").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").show();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".recaudador-fondos").css("background-color", "#2D575C");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".recaudador-fondos a").css("color", "#EFEBC8");  
    }
);
$(".community-manager").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").show();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".community-manager").css("background-color", "#5D8B80");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".community-manager a").css("color", "#EFEBC8");  
    }
);
$(".editor-audiovisual").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").show();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".editor-audiovisual").css("background-color", "#5D8B80");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".editor-audiovisual a").css("color", "#EFEBC8");  
    }
);
$(".diseniador-grafico").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").show();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".diseniador-grafico").css("background-color", "#5D8B80");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".diseniador-grafico a").css("color", "#EFEBC8");  
    }
);
$(".asistente-twitter").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").show();
        $("#investigador-politico").hide();
        $(".trabajo li").css("background-color", "white");
        $(".asistente-twitter").css("background-color", "#5D8B80");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".asistente-twitter a").css("color", "#EFEBC8");  
    }
);
$(".investigador-politico").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").show();
        $(".trabajo li").css("background-color", "white");
        $(".investigador-politico").css("background-color", "#41B28E");
        $("#busquedas-laborales a").css("color", "#E9725D");
        $(".investigador-politico a").css("color", "#EFEBC8");  
    }
);


/* ------------------------------------Proyectos--------------------------------------------------- */

$("#titulo-etiquetado, #informacion-etiquetado").click(
    function(){
        $("#informacion-etiquetado").toggle();
        $("#informacion-gestion").hide();
        $("#informacion-accion").hide();
        $(".informacion-proyectos").css("margin-bottom", "2rem");
    }
);

$("#titulo-gestion, #informacion-gestion").click(
    function(){
        $("#informacion-gestion").toggle();
        $("#informacion-etiquetado").hide();
        $("#informacion-accion").hide();
        $(".informacion-proyectos").css("margin-bottom", "2rem");  
    }
);

$("#titulo-accion, #informacion-accion").click(
    function(){
        $("#informacion-accion").toggle();
        $("#informacion-gestion").hide();
        $("#informacion-etiquetado").hide();
        $(".informacion-proyectos").css("margin-bottom", "2rem");  
        $("#titulo-accion").css({  
            "border-bottom-right-radius": "0", 
            "border-bottom-left-radius": "0" });
            $("#titulo-accion, #informacion-accion").click(
                function(){
                    $("#titulo-accion").css({  
                        "border-bottom-right-radius": "10px", 
                        "border-bottom-left-radius": "10px" });
                });
    }
);
