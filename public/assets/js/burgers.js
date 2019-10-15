
$(function () {
    $("#addBurger").on("click", function () {
        let burger = {
            "burger_name": $("#burgerName").val(),
            "devoured": $("#burgerName").data("devoured")
        };


        $.post("/api/burger", burger).then((response) => {
            console.log("New burger added");
            location.reload();
        });
    });

    $(".burgerBlock").on("click", function(){
        var burgerId = $(this).data("id");
        var devoured = $(this).data("devoured");

        var updateBurger = {
            "devoured": devoured
        };

        $.ajax("/api/burger/" + burgerId, {
            type: "PUT",
            data: updateBurger
        }).then((response) => {
            console.log("updzted")
            location.reload();
        });
    });

});