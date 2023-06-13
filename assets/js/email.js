/*emailJS*/
const btn = document.getElementById('send-button');
let fullName = document.getElementById('from-name');
let email = document.getElementById('email');
let message = document.getElementById('message');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_0x6ustg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
        fullName.value = null;
        email.value = null;
        message.value = null;
      alert('Message sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});
