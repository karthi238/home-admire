const btn = document.getElementById('submit-request-quote');
const nameInput = document.getElementById('request-quote-name');
const emailInput = document.getElementById('request-quote-email');
const phoneInput = document.getElementById('request-quote-phone');
const pincodeInput = document.getElementById('request-quote-pincode');
const messageInput = document.getElementById('request-quote-message');


window.document.getElementById('request-quote-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_y71uh1j';
        const templateID = 'template_bctxq5v';

        window.emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                nameInput.value = "";
                emailInput.value = "";
                phoneInput.value = "";
                pincodeInput.value = "";
                messageInput.value = "";
                alert('Request Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });