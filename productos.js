$(document).ready(function(){
    $('#producto-1 ,#producto-1-info').mouseover(function(){
        $('#producto-1-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        $('#producto-1').css('z-index','15');
        event.stopPropagation();

    });

    $('#producto-1').mouseout(function(){
        $('#producto-1-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-2 ,#producto-2-info').mouseover(function(){
        $('#producto-2-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        $('#producto-2').css('z-index','15');
        event.stopPropagation();

    });

    $('#producto-2').mouseout(function(){
        $('#producto-2-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-3 ,#producto-3-info').mouseover(function(){
        $('#producto-3-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        $('#producto-3').css('z-index','15');
        event.stopPropagation();

    });

    $('#producto-3').mouseout(function(){
        $('#producto-3-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-4 ,#producto-4-info').mouseover(function(){
        $('#producto-4-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        $('#producto-4').css('z-index','1');
        /*
        $("html, body").animate({
            scrollTop: 290
        }, 2000);
        */
        event.stopPropagation();

    });

    $('#producto-4').mouseout(function(){
        $('#producto-4-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-5 ,#producto-5-info').mouseover(function(){
        $('#producto-5-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        $('#producto-5').css('z-index','1');
        /*
        $("html, body").animate({
            scrollTop: 290
        }, 2000);
        */
        event.stopPropagation();
    });

    $('#producto-5').mouseout(function(){
        $('#producto-5-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });

    $('#producto-6 ,#producto-6-info').mouseover(function(){
        $('#producto-6-info').css({'opacity':'1','top':'200px','border-radius':'5px'});
        $('#producto-6').css('z-index','1');
        /*
        $("html, body").animate({
            scrollTop: 290
        }, 2000);
        */
        event.stopPropagation();
    });

    $('#producto-6').mouseout(function(){
        $('#producto-6-info').css({'opacity':'0','top':'70px'});
        event.stopPropagation()
    });



 });