$(document).ready(function () {
    
        $("#submitModalBtn").click(function (event) {
    
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
    
            var id = $(this).data("id");
        });
    
        $('#submitModalBtn').click(function (e) {
            e.preventDefault();
            alert($('#projectName').val());

            // Submits a new project and brings user to seacrh page upon completion
  
    $.post("/api/projects",
        $('#newProjectForm').serialize(),
            function (data, status, xhr) {
      href = "/searchProjects";
    });

        });
    });
    