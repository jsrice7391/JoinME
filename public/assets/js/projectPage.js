$(document).ready(function () {

    $(".completeBtn").on("click", function() {
        $(".completeBtn").css("background-color", "#E18942");
    })

    $(".stepCompletionStatus").append( $(".completeBtn" ));
    
});