/** Created by 321-07 on 2016-07-22. ...*/


$(function(){

    $('.gnb-depth1-link').on('mouseenter', function(){
        $('.gnb-depth2').stop().delay(300).fadeIn(1000);
        $('.gnb-bg').stop().animate({
            height:274
        });
    });

    $('.gnb-depth1-link').on('mouseleave', function(){
        $('.gnb-depth2').stop().fadeOut(30);
        $('.gnb-bg').stop().animate({
            height:0
        });
    });

});