var firebaseConfig = {
    apiKey: "AIzaSyCh-9vwAHtR1k1mXAiwlA2bR1SroMVxrGk",
    authDomain: "storybook-968e4.firebaseapp.com",
    databaseURL: "https://storybook-968e4.firebaseio.com",
    projectId: "storybook-968e4",
    storageBucket: "storybook-968e4.appspot.com",
    messagingSenderId: "911714569309",
    appId: "1:911714569309:web:a34918a2b3a8c3594c11b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    if(email != "" && password!="")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message :" + errorMessage);
        });
    }
    else
    {
        window.alert("Please fill out all fields")
    }
});

$("#btn-signup").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    var Cpassword = $("#confirmPassword").val();
    if (email != "" && password != "" && Cpassword != "") {
        if (password == Cpassword) {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);
            result.catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message :" + errorMessage);
            });
        }
        else {
            window.alert("Password does not match");
        }
    }
    else {
        window.alert("Please fill out all fields");
    }
});


$("#btn-logout").click(function () {
    firebase.auth().signOut();
});