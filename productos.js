function VerificarEstadoYSetearIndexNegativo (idProducto){
    for (var x=1; x<7; x++ ){
        if (idProducto != 'producto-' + x && idProducto != 'producto-' + x + '-info' ){
            $('#producto-' + x).attr('style','z-index: 0');
        } else {
            $('#producto-' + x).attr('style','z-index: 1');
        }
    }
}

$(document).ready(function(){

    $('.cerrar').click(function(){
        $('#email').css({'height':'0'});
        $('svg').css({'opacity':'0'});
        $('#email #barra-navegacion').css({'opacity':'0'});
        $('.form-group').css({'opacity':'0'});

        setTimeout(function(){
            $('#modal-shadow').css({'display':'none'});
            $('body').css({'overflow':'scroll'}); 
        }, 1500);

    });

    $('.gmail-btn').click(function(){
        $('#modal-shadow').css({'display':'block'});
        $('#email').css({'height':'500px'});
        $('svg').css({'opacity':'1'});
        $('#email #barra-navegacion').css({'opacity':'1'});
        $('.form-group').css({'opacity':'1'});
    });

    $('.btn-gmail-ref').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600);
        $('body').css({'overflow':'hidden'}); 
        return false; 
    });
    
    $('#producto-1 ,#producto-1-info').mouseover(function(el){
        $('#producto-1-info').css({'opacity':'1','top':'200px','border-radius':'5px','z-index':'95'});
        VerificarEstadoYSetearIndexNegativo(el.currentTarget.id);
        event.stopPropagation();

    });

    $('#producto-1').mouseout(function(){
        $('#producto-1-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-2 ,#producto-2-info').mouseover(function(el){
        $('#producto-2-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        VerificarEstadoYSetearIndexNegativo(el.currentTarget.id);
        event.stopPropagation();

    });

    $('#producto-2').mouseout(function(){
        $('#producto-2-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-3 ,#producto-3-info').mouseover(function(el){
        $('#producto-3-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        VerificarEstadoYSetearIndexNegativo(el.currentTarget.id);
        event.stopPropagation();

    });

    $('#producto-3').mouseout(function(){
        $('#producto-3-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-4 ,#producto-4-info').mouseover(function(el){
        $('#producto-4-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        VerificarEstadoYSetearIndexNegativo(el.currentTarget.id);
        event.stopPropagation();

    });

    $('#producto-4').mouseout(function(){
        $('#producto-4-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-5 ,#producto-5-info').mouseover(function(el){
        $('#producto-5-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        VerificarEstadoYSetearIndexNegativo(el.currentTarget.id);
        event.stopPropagation();
    });

    $('#producto-5').mouseout(function(){
        $('#producto-5-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-6 ,#producto-6-info').mouseover(function(el){
        $('#producto-6-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        VerificarEstadoYSetearIndexNegativo(el.currentTarget.id);
        event.stopPropagation();
    });

    $('#producto-6').mouseout(function(){
        $('#producto-6-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });
 });