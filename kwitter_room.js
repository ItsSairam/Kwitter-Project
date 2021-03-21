
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCXpetMwdBKiJdzsSrmRAq1q7KHE88jQxQ",
      authDomain: "kwitter-c8fef.firebaseapp.com",
      databaseURL: "https://kwitter-c8fef-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8fef",
      storageBucket: "kwitter-c8fef.appspot.com",
      messagingSenderId: "746377441178",
      appId: "1:746377441178:web:3c9a16dbf8b085b9f71423"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML ="Welcome " + user_name + "!"; 
function addRoom(){
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html";
}    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectTORoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}