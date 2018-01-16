$(document).ready(function () {
    // alert("page load");

    // Click event for user sign in. Sign in button is located on index.html. When clicked the sign in modal will appear.
    $("#btnSignIn").on("click", function (event) {
        // alert("click worked");
        signIn();
    });

    // Click event for signing out. Sign out button is located on user.handlebars. When clicked a user will be redirected back to login.html.
    $("#btnSignOut").on("click", function (event) {
        signtOut();
    })

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBtYPFjB-gpNIw8wRKnKao7lKSJ7Rho3bo",
        authDomain: "joinme-3d32e.firebaseapp.com",
        databaseURL: "https://joinme-3d32e.firebaseio.com/",
        projectId: "joinme-3d32e",
        storageBucket: "gs://joinme-3d32e.appspot.com",
        messagingSenderId: "302936142479"
    };
    firebase.initializeApp(config);

    // Create an instance of the Google provider object
    var provider = new firebase.auth.GoogleAuthProvider();
    var user;

    // Sign in function w/ error handling.
    function signIn() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            user = result.user;
            // showWelcome(); WILL BE SHOWN ON THE REDIRECTED USER PAGE
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        });
    };

    // Sign out function w/ error handling. WILL AMEND WHEN ROUTES ARE COMPLETE
    function signOut() {
        firebase.auth().signOut().then(function () {
            window.location.href = "login.html";
        }).catch(function (error) {
            // An error happened.
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    // Show welcome message
    function showWelcome() {
        $("#btnSignOut").show();
        $("#user-name").html("Welcome " + user.displayName);
    }

});
