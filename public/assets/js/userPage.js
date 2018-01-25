$(document).ready(function() {

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



    console.log("this was loaded.")
        // Create a new project function
    $('#submitModalBtn').click(function(e) {

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

        var stepOneDetail = {
            Step: sendProjectSteps.stepOne,
            Step_description: sendProjectSteps.stepOneDescription,
            ProjectId: ProjectId,
            Completed: false
        }

        var stepTwoDetail = {
            Step: sendProjectSteps.stepTwo,
            Step_description: sendProjectSteps.stepTwoDescription,
            ProjectId: ProjectId,
            Completed: false
        }
        var stepThreeDetail = {
            Step: sendProjectSteps.stepThree,
            Step_description: sendProjectSteps.stepThreeDescription,
            ProjectId: ProjectId,
            Completed: false
        }
        var stepFourDetail = {
            Step: sendProjectSteps.stepFour,
            Step_description: sendProjectSteps.stepFourDescription,
            ProjectId: ProjectId,
            Completed: false
        }
        var stepFiveDetail = {
            Step: sendProjectSteps.stepFive,
            Step_description: sendProjectSteps.stepFiveDescription,
            ProjectId: ProjectId,
            Completed: false
        }


        console.log(sendProjectSteps);

        // e.preventDefault();
        console.log(sendProject);
        // Send the post request.
        $.ajax("/api/projects/", {
            type: "POST",
            data: sendProject
        }).then(
            function(result) {
                $('#newProjectForm').serialize(),
                    function(data, status, xhr) {
                        href = "/searchProjects";
                    };
            }
        );


        //     function (data, status, xhr) {
        //     function (data, status, xhr) {
        //         href = "/searchProjects";
        //     });
        // for (var propt in sendProjectSteps) {


        //     alert(propt + ': ' + sendProjectSteps[propt]);
        // }

        //below is the post for the steps
        //stepDetail is an object that holds the details needed to post
        //a single step. at the moment, it uses just the first step as a placeholder
        //but will be done within a loop to post all the steps to a project



        console.log(stepOneDetail.Step + " is the first step.")
        $.ajax("/api/steps/", {
            type: "POST",
            data: stepOneDetail

        }).then(
            function(result) {

            }
        );

        console.log(stepTwoDetail.Step + " is the second step.")
        $.ajax("/api/steps/", {
            type: "POST",
            data: stepTwoDetail

        }).then(
            function(result) {

            }
        );

        console.log(stepThreeDetail.Step + " is the third step.")
        $.ajax("/api/steps/", {
            type: "POST",
            data: stepThreeDetail

        }).then(
            function(result) {

            }
        );

        console.log(stepFourDetail.Step + " is the fourth step.")
        $.ajax("/api/steps/", {
            type: "POST",
            data: stepFourDetail

        }).then(
            function(result) {

            }
        );

        console.log(stepFiveDetail.Step + " is the fifth step.")
        $.ajax("/api/steps/", {
            type: "POST",
            data: stepFiveDetail

        }).then(
            function(result) {

            }
        );
    });







});