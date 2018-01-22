$(document).ready(function () {

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


  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: "/index",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;

      user.getIdToken().then(function (accessToken) {

        document.getElementById('welcomePanelTitle').textContent = user.displayName;
      });
      var sendUser = {
        name: displayName,
        phone: phoneNumber,
        email: email,
        uid: uid

    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            current_user = user;
            alert(user.email + " is signed in.");

            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;

            user.getIdToken().then(function(accessToken) {
                document.getElementById('welcomePanelTitle').textContent = user.displayName;
            });
            var sendUser = {
                name: displayName,
                phone: phoneNumber,
                email: email
            };

            console.log(sendUser);

            // Send the PUT request.
            $.ajax("/api/users/", {
                type: "POST",
                data: sendUser

            }).then(
                function(result) {
                    // Reload the page to get the updated list
                    var userPostWorked = result;
                    console.log(userPostWorked);
                    location.reload();
                }
            );
        } else {
            // User is signed out.
            console.log("User is signed out");
        }

    }, function(error) {
        console.log(error);
    });

    //Handle Account Status
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user) {
    //     window.location = "/index"; //After successful login, user will be redirected to index.html as long as they are logged in
    //   }
    // });

    //end document.ready
    // module.exports = sendUser

        );
    } else {
      // User is signed out.
      console.log("User is signed out");
    }
  }, function (error) {
    console.log(error);
  });

//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    //After successful login, user will be redirected to index.html as long as they are logged in
    window.location = "/index";
  }
});

  //end document.ready
  // module.exports = sendUser

});