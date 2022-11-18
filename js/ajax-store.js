"use strict";
(function (){

    $(document).ready(function (){

        // TODO: Create an AJAX GET request for the file under data/inventory.json
        // Assign to variable
        var jqXhr = $.ajax("data/inventory.json");

        // Attach callback functions individually
        jqXhr.done(function(data, status, jqXhr) {
            // alert("Everything went great!");
            console.log(data);
        });

        jqXhr.fail(function(jqXhr, status, error) {
            // alert("There was an error!");
        });

        jqXhr.always(function() {
            // alert("And we're done!");
        });



        // TODO: Take the data from inventory.json and append it to the products table
        //       HINT: Your data should come back as a JSON object; use console.log() to inspect
        //             its contents and fields
        //       HINT: You will want to target #insertProducts for your new HTML elements

        let table = $('#insertProducts');
        let store = $.ajax('data/inventory.json');
        store.done(function(data){
            data.forEach(function(item){
                table.append("<tr>" +

                    "<th>" + item.title + "</th>" +
                    "<th>" + item.quantity + "</th>" +
                    "<th>" + item.price + "</th>" +
                    "<th>" + item.categories + "</th>" +

                    + "</tr>");
            });
            console.log(data);
            console.log(status);
        });




    });


})();