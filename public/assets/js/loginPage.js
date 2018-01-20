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
    } else {
      // User is signed out.
      // document.getElementById('sign-in-status').textContent = 'Signed out';
      // document.getElementById('sign-in').textContent = 'Sign in';
      // document.getElementById('account-details').textContent = 'null';
    }
  }, function (error) {
    console.log(error);
  });


  //end document.ready
});