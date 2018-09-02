firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $('#login-div').css("display", "none");
      $('#user-div').css("display", "block");

        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;

            $('#user_email').html(email);
        }

    } else {
      $('#login-div').css("display", "block");
      $('#user-div').css("display", "none");

    }
  });

function login() {
    var email = $('#txtEmail').val();
    var password = $('#txtPassword').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(error.message);
      });
}

function logout() {
    firebase.auth().signOut().then(function() {
      }).catch(function(error) {
        alert(error.message);
      });
}

function loginFB() {
    alert('loginFB');
}

function loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log('user');
        console.log(user);
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        
        console.log('error');
        console.log(errorMessage);

      });
}