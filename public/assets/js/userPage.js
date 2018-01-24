$(document).ready(function () {

    console.log("this was loaded.")
    // Create a new project function
    $('#submitModalBtn').click(function (e) {

        alert($('#projectName').val());
        alert($('#inputGroupSelect02').val());
        alert($('#projectDescription').val());

var Project_name = $('#projectName').val()
var Project_type = $('#inputGroupSelect02').val()
var Project_descripton = $('#projectDescription').val()
var userId = 1

        var sendProject = {
            Project_name: Project_name,
            Project_type: Project_type,
            Project_descripton: Project_descripton,
            userId: userId
        };

        e.preventDefault();
console.log(sendProject);
        // Send the post request.
        $.ajax("/api/projects/", {
            type: "POST",
            data: sendProject
        }).then(
            function (result) {

            }
        );

        // Submits a new project and brings user to seacrh page upon completion
        $.post("/api/projects",
            $('#newProjectForm').serialize(),
            function (data, status, xhr) {
                href = "/searchProjects";
            });
    });

    // Sign out function w/ error handling.
    $("#btnSignOut").on("click", function () {
        alert("btn worked");

        function signOut() {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                alert("signed out");
                window.location = "/"; //After successful sign out, user will be redirected to the login page
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        }
    });

    // $("#projectSearchBtn").on("click", function () {

    // })


    // DELETE THIS?
    // var navbar = $("#navbarUserPage");
    // var origOffsetY = navbar.offset().top;

    // function scroll() {
    //     if ($(window).scrollTop() >= origOffsetY) {
    //         $('.navbarUserPage').addClass('sticky');
    //         $('.content').addClass('menu-padding');
    //     } else {
    //         $('.navbarUserPage').removeClass('.navbar-fixed-top');
    //         $('.content').removeClass('menu-padding');
    //     }
    // }

    // document.onscroll = scroll;

});