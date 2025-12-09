var firebase = require("firebase-admin");

var serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

module.exports = firebase;