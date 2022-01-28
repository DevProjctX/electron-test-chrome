
//const { initializeApp } = require('firebase/app');
//const { firebase } = require('firebase/app');
//import firebase from 'firebase/compat/app'
//const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');
//console.log("hhheeellllloo11");
const {initializeAuth, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, indexedDBLocalPersistence} = require( 'firebase/auth' );
//import {initializeApp} from "firebase/app";
//console.log("hhheeellllloo22");
//const app = initializeApp({/** Your app config */});
const auth = initializeAuth(app, {
    persistence: indexedDBLocalPersistence
});

const { GoogleAuthProvider, signInWithRedirect } = require( 'firebase/auth' ) //"https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js"
//export declare class GoogleAuthProvider extends BaseOAuthProvider
//console.log("hhheeellllloo333");
//const app1 = initializeApp(firebaseConfig1);
/*
const signIn = () => {
      const id = uuid()
      const oneTimeCodeRef = firebase.database().ref(`to-auth-codes/${id}`)
      console.log("hhhheelllllooooo11");
      oneTimeCodeRef.on(‘value’, async snapshot => {
        console.log("hhhheelllllooooo33");
        const authToken = snapshot.val()
        const credential = await firebase.auth().signInWithCustomToken(authToken)
      })
      console.log("hhhheelllllooooo22");
      const googleLink = `/desktop-sign-in?ot-auth-code=${id}`
      window.open(googleLink, ‘_blank’)
    })
*/
async function signIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    await signInWithRedirect(auth, provider);
    return
}



/*document.getElementById( "loginBtn" ).addEventListener( "click", () => {

    signIn();
    //const provider = new firebase.auth.GoogleAuthProvider();
    //app.auth().signInWithPopup( provider );
});*/