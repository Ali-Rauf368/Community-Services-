document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const endpoint = 'https://example.com/submit-form'; // Replace with your backend endpoint URL

    fetch(endpoint, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Form submission successful:', data);
        alert('Form submitted successfully!');
        this.reset();
    })
    .catch(error => {
        console.error('There was a problem with form submission:', error.message);
        alert('Form submission failed. Please try again later.');
    });
});
