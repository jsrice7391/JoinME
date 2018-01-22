
$(document).ready(function() {

    $("#submitModalBtn").click(function(event) {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");
    });

    $('#submitModalBtn').click(function(e) {
        e.preventDefault();
        alert($('#projectName').val());

        // Submits a new project and brings user to seacrh page upon completion

        $.post("/api/projects",
            $('#newProjectForm').serialize(),
            function(data, status, xhr) {
                href = "/searchProjects";
            });

    });

    $("#submitModalBtn").click(function(event) {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");
    });

    $('#submitModalBtn').click(function(e) {

$(document).ready(function () {

    $('#submitModalBtn').click(function (e) {
        console.log($('#projectName').val());
        

        e.preventDefault();
      
        // Submits a new project and brings user to seacrh page upon completion
        $.post("/api/projects",
            $('#newProjectForm').serialize(),
            function (data, status, xhr) {
                href = "/searchProjects";
            });
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

    var navbar = $("#navbarUserPage");
    var origOffsetY = navbar.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbarUserPage').addClass('sticky');
            $('.content').addClass('menu-padding');
        } else {
            $('.navbarUserPage').removeClass('.navbar-fixed-top');
            $('.content').removeClass('menu-padding');
        }
    }

    document.onscroll = scroll;

});