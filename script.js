document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent!`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
document.getElementById('fetchButton').addEventListener('click', fetchFile);

function fetchFile() {
    const fileUrl = 'renukaresumenew.docx'; // Replace with your file URL

    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'renukaresumenew.docx'; // You can set the default file name here
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
