$(document).ready(function () {

    console.log("this was loaded.")
    // Create a new project function
    $('#submitModalBtn').click(function (e) {

        var Project_name = $('#projectName').val()
        var Project_type = $('#inputGroupSelect02').val()
        var Project_descripton = $('#projectDescription').val()

        //userId and ProjectId are currently placeholder info
        var userId = 1
        var ProjectId = 1

        var stepOne = $('#stepOne').val()
        var stepOneDescription = $('#stepOneDescription').val()
        var stepTwo = $('#stepTwo').val()
        var stepTwoDescription = $('#stepTwoDescription').val()
        var stepThree = $('#stepThree').val()
        var stepThreeDescription = $('#stepThreeDescription').val()
        var stepFour = $('#stepFour').val()
        var stepFourDescription = $('#stepFourDescription').val()
        var stepFive = $('#stepFive').val()
        var stepFiveDescription = $('#stepFiveDescription').val()


        var sendProject = {
            Project_name: Project_name,
            Project_type: Project_type,
            Project_descripton: Project_descripton,
            userId: userId
        };

        var sendProjectSteps = {
            stepOne: stepOne,
            stepOneDescription: stepOneDescription,
            stepTwo: stepTwo,
            stepTwoDescription: stepTwoDescription,
            stepThree: stepThree,
            stepThreeDescription: stepThreeDescription,
            stepFour: stepFour,
            stepFourDescription: stepFourDescription,
            stepFive: stepFive,
            stepFiveDescription: stepFiveDescription,
            ProjectId: ProjectId
        };

        console.log(sendProjectSteps);

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

        // for (var propt in sendProjectSteps) {


        //     alert(propt + ': ' + sendProjectSteps[propt]);
        // }

        //below is the post for the steps

        //stepDetail is an object that holds the details needed to post
        //a single step. at the moment, it uses just the first step as a placeholder
        //but will be done within a loop to post all the steps to a project

        var stepDetail = {
            Step: sendProjectSteps.stepOne,
            Step_description: sendProjectSteps.stepOneDescription,
            ProjectId: ProjectId,
            Completed: false
        }

console.log(stepDetail.Step + " is the first step.")
        $.ajax("/api/steps/", {
            type: "POST",

            data: {
                stepDetail
            }
        }).then(
            function (result) {

            }
        );

        // Submits a new project and brings user to seacrh page upon completion
        // $.post("/api/projects",
        //     $('#newProjectForm').serialize(),
        //     function (data, status, xhr) {
        //         href = "/searchProjects";
        //     });
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