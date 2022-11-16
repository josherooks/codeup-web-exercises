"use strict";
(function () {

    $(document).ready(function () {
        var keys = [];
        var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
        $("#monster-container").hide();
        $(document).keydown(function (keyEvent) {
            keys.push(keyEvent.keyCode);
            if (keys.length > code.length) {
                keys.shift();
            }
            if (keys.toString() === code.toString()) {
                $('html').css({'background': 'url(images/contra.png)', 'background-repeat': 'no-repeat', 'background-size': 'cover'});
            }
        });
    });

})();