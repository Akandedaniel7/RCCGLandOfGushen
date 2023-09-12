var form = document.getElementById('prayerrequestform');
var alert = document.querySelector('.alert');
var names=document.getElementById('name')
var email=document.getElementById('email')
var heading=document.getElementById('heading')
var message=document.getElementById('message')
var success=document.getElementById('success')

form.addEventListener('submit', function(e){
  e.preventDefault();

 
  // Wait for the document to be ready
  $(document).ready(function() {
   var  apiUrl='https://danielad7.pythonanywhere.com/api/addPrayerRequest'
    var sendData={
      'name':names.value,
      'email':email.value,
      'header':heading.value,
      'message':message.value,
        csrfmiddlewaretoken: '{{ csrf_token }}'
      // csrfmiddlewaretoken:'input[name=csrfmiddlewaretoken]'
      
    }
    $.ajax({
        url: apiUrl,
        type: "GET",
        data:sendData,
        success: function(data) {
         
           if (data.success){
            success.style.display='block'
            names.value=''
            email.value=''
            heading.value=''
              message.value=''
              window.scrollTo(0,0)
           }
          
          // Handle the successful response here
          console.log("API Response:", data);
          

        },
        error: function(xhr, status, error) {
          // Handle errors here
          console.error("Error:", status, error);
        }
      });
     
      
   
  });

})


// const firebaseConfig = {

//     apiKey: "AIzaSyCeSiQHMHN3iLKlQZuHXTzj72pEGpLEEfw",

//     authDomain: "form-3d730.firebaseapp.com",

//     databaseURL: "https://form-3d730-default-rtdb.firebaseio.com",

//     projectId: "form-3d730",

//     storageBucket: "form-3d730.appspot.com",

//     messagingSenderId: "11218832654",

//     appId: "1:11218832654:web:d9e3eb0b1a757bddb01b5f"

//   };

// Initialize Firebase

//   firebase.initializeApp(firebaseConfig);

//   const database = firebase.database()

//   const ref = database.ref('prayerRequest');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name =  document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subjet = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     ref.push( {
//         name: name,
//         email : email,
//         subject : subject,
//         message : message
//     })
//      alert.style.display = 'block';

//      setTimeout(() => {
//         alert.style.display = 'none'
//      }, 2000)
//     form.reset();
// })
