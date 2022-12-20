// settimg up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBb_crjjELEIp1s2PGBngon9AayPbrRgJA",
  authDomain: "qpilogin.firebaseapp.com",
  projectId: "qpilogin",
  storageBucket: "qpilogin.appspot.com",
  messagingSenderId: "804822827543",
  appId: "1:804822827543:web:ff17a2bac4406e3057d252"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// signup function
const signUp = () =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
   document.write("You are Signed Up")
   console.log(result)
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });

}

// Signin function
const signIn =()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You are Signed In")
   console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}