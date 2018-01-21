$(document).ready(function() {

    $("#submitModalBtn").click(function(event) {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");
    });

    $('#submitModalBtn').click(function(e) {
        e.preventDefault();
        alert($('#projectName').val());

        // $.post('http://path/to/post',
        //     $('#newProjectForm').serialize(),
        //     function (data, status, xhr) {
        //         // do something here with response;
        //     });

    });

    // sign out function w/ error handling.
    $("#btnSignOut").on("click", function() {
        alert("btn worked");

        function signOut() {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                alert("signed out");
                window.location = "/"; //After successful sign out, user will be redirected to the login page
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        }
    });
});