import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyBoGdXSVAXZ2THCBP7We9_NYnzrm5w9hIU",
  authDomain: "crwn-db-abc6f.firebaseapp.com",
  databaseURL: "https://crwn-db-abc6f.firebaseio.com",
  projectId: "crwn-db-abc6f",
  storageBucket: "",
  messagingSenderId: "944537514536",
  appId: "1:944537514536:web:f81aeb68a0a05745f43b1d"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase