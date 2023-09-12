var form = document.getElementById('form');
var alert = document.querySelector('.alert');
var names=document.getElementById('name')
var locations=document.getElementById('location')
var email=document.getElementById('email')
var heading=document.getElementById('heading')
var message=document.getElementById('message')
var success=document.getElementById('success')

form.addEventListener('submit', function(e){
  e.preventDefault();

 
  // Wait for the document to be ready
  $(document).ready(function() {
   var  apiUrl='https://danielad7.pythonanywhere.com/api/addTestimonial'
    var sendData={
      'name':names.value,
      'email':email.value,
      'location':locations.value,
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
            locations.value=''
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