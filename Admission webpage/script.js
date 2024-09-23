document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting automatically for demo purposes
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
  
    if (!name || !email || !phone || !course) {
      alert("Please fill in all fields before submitting.");
    } else {
      alert("Thank you for your submission!");
    }
  });
  