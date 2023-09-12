const form = document.getElementById('testimonial_form');
const alert = document.querySelector('.alert');

const firebaseConfig = {

    apiKey: "AIzaSyCeSiQHMHN3iLKlQZuHXTzj72pEGpLEEfw",

    authDomain: "form-3d730.firebaseapp.com",

    databaseURL: "https://form-3d730-default-rtdb.firebaseio.com",

    projectId: "form-3d730",

    storageBucket: "form-3d730.appspot.com",

    messagingSenderId: "11218832654",

    appId: "1:11218832654:web:d9e3eb0b1a757bddb01b5f"

  };


  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const ref = database.ref('Testimonies');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name =  document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const heading = document.getElementById('heading').value;
    const lock  = document.getElementById('lock').value;

    ref.push( {
        name: name,
        email : email,
        lock : lock,
        heading : heading,
        message : message
    })
     alert.style.display = 'block';

     setTimeout(() => {
        alert.style.display = 'none'
     }, 2000)
    form.reset();
})