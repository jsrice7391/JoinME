$(document).ready(function() {


    // console.log("this was loaded.")
    // Create a new project function
    $('#submitModalBtn').click(function(e) {

        var Project_name = $('#projectName').val()
        var Project_type = $('#inputGroupSelect02').val()
        var Project_descripton = $('#projectDescription').val()

        //userId and ProjectId are currently placeholder info
        // var userId = 1
        // var ProjectId = 1

        var stepOne = $('#stepOne').val()
        var stepOneDescription = $('#stepOneDescription').val()
        var stepTwo = $('#stepTwo').val()
        var stepTwoDescription = $('#stepTwoDescription').val()
        var stepThree = $('#stepThree').val()
        var stepThreeDescription = $('#stepThreeDescription').val()
        var stepFour = $('#stepFour').val()
        var stepFourDescription = $('#stepFourDescription').val()
        var stepFive = $('#stepFive').val()
        var stepFiveDescription = $('#stepFiveDescription').val();
        var the_user_id = $("#submitModalBtn").data("userid");

        console.log(the_user_id)



        var sendProject = {
            Project_name: Project_name,
            Project_type: Project_type,
            Project_descripton: Project_descripton,
            theUserId: the_user_id,
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
        };


        // console.log(sendProjectSteps);

        // e.preventDefault();
        console.log(sendProject);
        // Send the post request.
        $.ajax("/projects", {
            type: "POST",
            data: sendProject
        }).then(function() {
            console.log("That worked")
        });



    });
});