
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAaUhKVmq7iN_dSDpKxZhy_o4IkREhuxLg",
      authDomain: "kwitter-e19b7.firebaseapp.com",
      databaseURL: "https://kwitter-e19b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e19b7",
      storageBucket: "kwitter-e19b7.appspot.com",
      messagingSenderId: "58018856661",
      appId: "1:58018856661:web:3d52bb2d564d89f824ac5c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

     function addroom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose: "adding room"
           });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html"
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

