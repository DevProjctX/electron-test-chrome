// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//console.log("i am in renderer!!");
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
//console.log("i am in renderer!!");
const firebaseConfig = {
    apiKey: "AIzaSyCFqdrDM-UZh8mOj12_AbdYu8qvzJE9Z5M",
      authDomain: "personal-test-81fe1.firebaseapp.com",
      databaseURL: "https://personal-test-81fe1-default-rtdb.firebaseio.com",
      projectId: "personal-test-81fe1",
      storageBucket: "personal-test-81fe1.appspot.com",
      messagingSenderId: "175534480516",
      appId: "1:175534480516:web:9cf8b0971d6ff0cfc6f6d1",
      measurementId: "G-BZQJ4NKXGQ"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function getCities(db) {
        const citiesCol = collection(db, 'db-test');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
        }

    const listdb = getCities(db)
    console.log( listdb )
/*
    const signIn = () => {
      const id = uuid()
      const oneTimeCodeRef = firebase.database().ref(`to-auth-codes/${id}`)

      oneTimeCodeRef.on(‘value’, async snapshot => {
        const authToken = snapshot.val()
        const credential = await firebase.auth().signInWithCustomToken(authToken)
      })

      const googleLink = `/desktop-sign-in?ot-auth-code=${id}`
      window.open(googleLink, ‘_blank’)
    })

    async componentDidMount() {
      const result = await firebase.auth().getRedirectResult()
      if (!result) {
        firebase.auth().signInWithRedirect(provider)
      } else {
        console.log(“Grabbed the user”, result.user)

        if (!result.user) {
          return
        }

        const params = new URLSearchParams(window.location.search)

        const token = await result.user.getIdToken()
        const code = params.get(“ot-auth-code”)

        const response = await fetch(`${getFirebaseDomain()}/create-auth-token?ot-auth-code=${code}&id-token=${token}`)
        await response.json()
      }
    }

    const admin = require(‘firebase-admin’)
    const cors = require(‘cors’)({
      origin: true
    })

    admin.initializeApp()

    exports.createAuthToken = functions.https.onRequest((request, response) => {
      cors(request, response, async () => {
        const query = request.query

        const oneTimeCode = query[“ot-auth-code”]
        const idToken = query[“id-token”]

        const decodedToken = await admin.auth().verifyIdToken(idToken)

        const uid = decodedToken.uid

        const authToken = await admin.auth().createCustomToken(uid)

        console.log(“Authentication token”, authToken)

        await admin.database().ref(`ot-auth-codes/${oneTimeCode}`).set(authToken)

        return response.status(200).send({
          token: authToken
        })
      })
    })
*/