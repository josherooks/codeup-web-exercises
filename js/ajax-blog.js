"use strict";

(function(){

    $(document).ready(function (){

        var html1 = "";
        $.get('data/blog.json').done(function(data) {
            console.log(data);
            for (var i = 0; i <= data.length - 1; i++) {
                html1 += "<div>";
                html1 += "<h1>" + data[i].title + "</h1>";
                html1 += "<p>" + data[i].content + "</p>";
                html1 += "<p>" + data[i].categories.join(', ') + "</p>";
                html1 += "<p>" + data[i].date + "</p>";
                html1 += "</div>";
            }
            $("#posts").html(html1);

        })



    });


})();