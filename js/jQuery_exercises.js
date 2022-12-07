"use strict";
(function () {
    $(document).ready(function () {

        //first exercise
        // $(function () {
        //     alert('The DOM has finished loading!');
        // });

        // jQuery Selectors

        // // jQuery id selectors
        // let headingContents = $('#heading').html();
        // alert(headingContents);
        //
        // let paragraphContents = $('#paragraph').html();
        // alert(paragraphContents);
        //
        // // jQuery class selectors
        // $('.codeup').css('border', '1px solid red');
        //
        // // jQuery element selectors
        // $('li').css('font-size', '20px');
        //
        // let h1contents = $('h1').html();
        // alert(h1contents);
        //
        // // $('h1').css('text-align','center');
        //
        // // jQuery multiple selectors
        // $('h1, p, li').css('background-color', 'yellow',);

        // jQuery Events

        $('h1').click(function(){
            $(this).css('background-color', 'yellow');
        });

        $('p').dblclick(function(){
            $(this).css('font-size', '18px')
        });

        $('li').hover(function (){
            $(this).css('color', 'blue');
        },
        function(){
            $(this).css('color', 'black' );
        });

    });
})();