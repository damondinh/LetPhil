// Reference to DOM elements
const emailForm = document.getElementById('emailForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const subjectInput = document.getElementById('subjectInput');
const messageTextArea = document.getElementById('messageTextArea');

// Event listener for the email form submission
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageTextArea.value.trim();

    if (name && email && subject && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the input fields after sending the message
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageTextArea.value = '';
    } else {
        alert('Please fill in all fields before sending your message.');
    }
});