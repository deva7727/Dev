// script.js
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you can perform actions like sending the form data to a server
    // or displaying a success message to the user.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Form submitted successfully!');
  });
});
