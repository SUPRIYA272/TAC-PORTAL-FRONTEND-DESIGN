document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('booking-form');
  const messageDiv = document.getElementById('message');

  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Check if all fields are filled
    const tacId = document.getElementById('tac-id').value.trim();
    const duration = document.getElementById('duration').value.trim();

    if (tacId !== '' && duration !== '') {
      // All fields are filled, show success message
      showMessage('Appointment applied successfully!', 'green');
      // You can add further actions here, such as submitting the form via AJAX
    } else {
      // Some fields are empty, show error message
      showMessage('Please fill out all fields.', 'red');
    }
  });

  // Function to display message in messageDiv
  function showMessage(text, color) {
    messageDiv.textContent = text;
    messageDiv.style.color = color;
    messageDiv.style.display = 'block';

    // Hide message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
      messageDiv.style.display = 'none';
    }, 3000);
  }
});
