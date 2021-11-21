

var firebaseConfig = {
    apiKey: "AIzaSyAFbqvcthTs72Gi56LxokXjXoiU1wEqn7Q",
    authDomain: "dataform-fb69b.firebaseapp.com",
    projectId: "dataform-fb69b",
    storageBucket: "dataform-fb69b.appspot.com",
    messagingSenderId: "512251888948",
    appId: "1:512251888948:web:163e2b7cb9d79bedb35161"
};



firebase.initializeapp(firebaseConfig);



var contactInfo = firebase.database().ref("messages");

document.getElementById(".form-container").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = document.querySelector(".name").value;



    saveMessage(name);

  

    // Clear form
    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveMessage(name) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name
    });



}


