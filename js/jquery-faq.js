"use strict";
(function (){

    $(document).ready(function(){

        //
        $('dd').addClass('invisible').addClass('not-invisible');
        $('.invisible').css('visibility', 'hidden');
        $('.not-invisible').css('visibility', "visible");

        // Travesing Exercise
        $('#highlight-last').click(function(){
            $('ul').each(function(){
                $(this).children().last().css('background-color', 'yellow' )
            });
        });

        $('h3').click(function(){
           $(this).next().css('font-weight', 'bold');
        });

        $('li').click(function(){
            $(this).parent().children().first().css('color', 'blue');
        });
    });

})();