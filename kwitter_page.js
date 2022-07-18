//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyC_kWchxv9FAGuVnRM5ujQGq37B9zeJjEg",
      authDomain: "kwitter-e54df.firebaseapp.com",
      databaseURL: "https://kwitter-e54df-default-rtdb.firebaseio.com",
      projectId: "kwitter-e54df",
      storageBucket: "kwitter-e54df.appspot.com",
      messagingSenderId: "883918894504",
      appId: "1:883918894504:web:fb2b123af0adff66e6d99d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
