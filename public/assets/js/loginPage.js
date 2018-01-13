// On page load hide sign out button if not signed in.
$(document).ready(function () {
    
        $("#btnSignOut").hide();
    
    });
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCmj08LcW2dT_bGaFPFqNcnoID7ZRqzQJw",
        authDomain: "knowbeforugo.firebaseapp.com",
        databaseURL: "https://knowbeforugo.firebaseio.com",
        projectId: "knowbeforugo",
        storageBucket: "knowbeforugo.appspot.com",
        messagingSenderId: "172400475054"
    };
    firebase.initializeApp(config);
    
    var provider = new firebase.auth.GoogleAuthProvider();
    var user;
    
    // listen for authorization state change.
    // if user is logged in run the showWelcome function.
    // if user is not logged in run the showGoodBuy function
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("you are logged in");
            showWelcome();
        } else {
            console.log("you arent logged in");
            showGoodBye();
        }
    });
    
    // sign in function w/ error handling.
    function signIn() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            user = result.user;
            showWelcome();
    
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    };
    
    // sign out function w/ error handling.
    function signOut() {
        firebase.auth().signOut().then(function () {
            showGoodBye();
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    
    // show welcome message
    function showWelcome() {
        $("#btnSignOut").show();
        $("#btnSignIn").hide();
        $("#user-name").html("Welcome " + user.displayName);
    }
    
    // show goodbye message
    function showGoodBye() {
        $("#btnSignIn").show();
        $("#btnSignOut").hide();
    }
    
    