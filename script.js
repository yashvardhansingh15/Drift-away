document.addEventListener("DOMContentLoaded", function() {
  // your code here
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyAdGZRJpb-cVwjaT_6TqgjxsCsJiDgvJG4",
    authDomain: "spotify-59082.firebaseapp.com",
    databaseURL: "https://spotify-59082-default-rtdb.firebaseio.com",
    projectId: "spotify-59082",
    storageBucket: "spotify-59082.appspot.com",
    messagingSenderId: "1027572559240",
    appId: "1:1027572559240:web:34b34fa25c127ce5181e3d",
    measurementId: "G-YNMQ132L40"
  };

  //Initialize Firebase
  // var firebase = window.firebase;
  firebase.initializeApp(firebaseConfig);
  var detailsRef = firebase.database().ref("details");
 

const signIn = document.getElementById("details");
signIn.addEventListener("submit", submitForm);


function submitForm(e)
{
  e.preventDefault();
  const location=document.getElementById("location").value;
  const pickup=document.getElementById("pickup").value;
  const ret =document.getElementById("ret").value;
   
  saveMessages(location ,pickup ,ret);
}  
  
const saveMessages= (location, pickup, ret) => {
  var newcontactForm =detailsRef.push();
  newcontactForm.set({
    location: location,
    pickup: pickup,
    ret: ret,
});
}



});