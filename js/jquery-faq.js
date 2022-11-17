"use strict";
(function (){

    $(document).ready(function(){


        $('dd').addClass('invisible').addClass('not-invisible');
        $('.invisible').css('visibility', 'hidden');
        $('.not-invisible').css('visibility', "visible");

        $('#highlight-last').click(function(){
            $('.lists').last().css('background-color', 'yellow' )
        })


    });

})();