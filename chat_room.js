var room_name = ""
var firebaseConfig = {
    apiKey: "AIzaSyCgI0d5cFT5lWDxRXEFhlWfOt0ovnFpBlc",
    authDomain: "let-schat-60e83.firebaseapp.com",
    projectId: "let-schat-60e83",
    storageBucket: "let-schat-60e83.appspot.com",
    messagingSenderId: "621746450640",
    appId: "1:621746450640:web:96d805e89aa207f2576ed5",
    measurementId: "G-SE1S67QYRB"
  };
  firebase.initializeApp(firebaseConfig);
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name)
  }