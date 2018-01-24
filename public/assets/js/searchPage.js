$(document).ready(function () {
    
        $("#submitModalBtn").click(function (event) {
    
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
    
            var id = $(this).data("id");
            console.log(id + " is the id")
        });
    
        $('#submitModalBtn').click(function (e) {
            e.preventDefault();
            
    
            // $.post('http://path/to/post',
            //     $('#newProjectForm').serialize(),
            //     function (data, status, xhr) {
            //         // do something here with response;
            //     });
    
        });
    });
    