import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCCstXs1gVaV-189gO0c_DZTAF0jFTVk08",
    authDomain: "crud-seftian.firebaseapp.com",
    projectId: "crud-seftian",
    storageBucket: "crud-seftian.appspot.com",
    messagingSenderId: "378752290253",
    appId: "1:378752290253:web:bba14f192bc05e64bf4884"
};

firebase.initializeApp(firebaseConfig);

export default firebase;