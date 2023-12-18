// inscription.js

// Part 1: Click Event Validation
function passValidation() {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm_password').value;
  if (password !== confirmPassword) {
    alert('Les mots de passe ne correspondent pas');
    return false;
  }
  return true;
}

// Part 2: Submit Event Listener
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    var isValid = true;
    var name = form.elements['nom'].value;
    var firstName = form.elements['prenom'].value;
    var phone = form.elements['phone'].value;
    var password = form.elements['password'].value;

    // Validation for Name
    if (name.length < 3 || !/^[a-zA-Z]+$/.test(name)) {
      // Display error next to the name field
      isValid = false;
    }

    // Validation for First Name
    if (firstName.length < 4) {
      // Display error next to the first name field
      isValid = false;
    }

    // Validation for Phone Number
    if (!/^\d{10}$/.test(phone)) {
      // Display error next to the phone field
      isValid = false;
    }

    // Validation for Password
    if (password.length < 10 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      // Display error next to the password field
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // Prevent form submission
    }
  });
});

// Part 3: Keyup Event for Name Field
function nameValidation() {
  var nameInput = document.getElementById('nom');
  var name = nameInput.value;
  if (name.length >= 3 && /^[a-zA-Z]+$/.test(name)) {
    // Show success message next to the name field
  } else {
    // Show error message next to the name field
  }
}

// Add the keyup event listener to the name field
document.getElementById('nom').addEventListener('keyup', nameValidation);
