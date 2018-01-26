$(document).ready(function() {

    $(".completeBtn").on("click", function() {
        $(this).css("background-color", "#E18942");
        // window.reload();

        var buttons_id = $(this).data("userid");

        console.log(buttons_id)

        $.ajax({
            method: "PUT",
            url: "/api/steps/" + buttons_id,
        }).then(function() {
            window.reload();
        })



        // $(".stepCompletionStatus").append($(".completeBtn"));
        // // })

    })



});