$(document).ready(function(){
    if($(window).width()>801){
        $('.jsstyle').hover(
            function(){$(this).fadeTo(0, 0.4).fadeTo('normal', 1.0);},
            function(){$(this).fadeTo('fast', 1.0);}
        );
    }
    else{

    }
    $('.to_nav').on('click',menubar_slideToggle());

    function menubar_slideToggle(){
        $('.to_nav').on('click',function name(){
            $('.menubg').slideToggle();
        });
    }
    //function get_height(){}
    var block_height = $('.bg_padding').height();
    $('.mon_footer').css("top", block_height);

    $(window).on('resize', function(){
        $('.mon_footer').removeAttr('style');
        $('.mon_footer').css("top", block_height);
    })
});