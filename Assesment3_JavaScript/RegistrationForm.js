function validateForm(event) {
  event.preventDefault();

  // Get form field values
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const mobileField = document.getElementById("mobile");
  const genderFields = document.querySelectorAll('input[name="gender"]');
  const dobField = document.getElementById("dob");
  const addressField = document.getElementById("address");
  const cityField = document.getElementById("city");
  const areaPinField = document.getElementById("areaPin");
  const stateField = document.getElementById("state");
  const qualificationField = document.getElementById("qualification");
  const specializationFields = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const passwordField = document.getElementById("password");

  // Validate first name field
  if (firstNameField.value === "") {
    alert("Please enter your first name.");
    firstNameField.focus();
    return;
  } else if (!/^[A-Za-z]{3,6}$/.test(firstNameField.value)) {
    alert("First name should contain 3 to 6 alphabets only.");
    firstNameField.focus();
    return;
  }

  // Validate last name field
  if (lastNameField.value === "") {
    alert("Please enter your last name.");
    lastNameField.focus();
    return;
  } else if (!/^[A-Za-z]{3,6}$/.test(lastNameField.value)) {
    alert("Last name should contain 3 to 6 alphabets only.");
    lastNameField.focus();
    return;
  }

  // Validate email field
  if (emailField.value === "") {
    alert("Please enter your email.");
    emailField.focus();
    return;
  }

  // Validate mobile field
  if (mobileField.value === "") {
    alert("Please enter your mobile number.");
    mobileField.focus();
    return;
  } else if (!/^\d{10}$/.test(mobileField.value)) {
    alert("Mobile number should be 10 digits.");
    mobileField.focus();
    return;
  }

  // Validate gender field
  let selectedGender = false;
  genderFields.forEach((genderField) => {
    if (genderField.checked) {
      selectedGender = true;
    }
  });
  if (!selectedGender) {
    alert("Please select your gender.");
    return;
  }

  // Validate date of birth field
  if (dobField.value === "") {
    alert("Please enter your date of birth.");
    dobField.focus();
    return;
  }

  // Validate address field
  if (addressField.value === "") {
    alert("Please enter your address.");
    addressField.focus();
    return;
  }

  // Validate city field
  if (cityField.value === "") {
    alert("Please enter your city.");
    cityField.focus();
    return;
  }

  // Validate area PIN field
  if (areaPinField.value === "") {
    alert("Please enter your area PIN.");
    areaPinField.focus();
    return;
  }

  // Validate state field
  if (stateField.value === "") {
    alert("Please enter your state.");
    stateField.focus();
    return;
  }

  // Validate qualification field
  if (qualificationField.value === "") {
    alert("Please select your qualification.");
    qualificationField.focus();
    return;
  }

  // Validate specialization field
  if (specializationFields.length === 0) {
    alert("Please select at least one specialization.");
    return;
  }

  // Validate password field
  if (passwordField.value === "") {
    alert("Please enter your password.");
    passwordField.focus();
    return;
  }

  // Form is valid, proceed with submission
  alert("Registration successful!");
  document.getElementById("registrationForm").reset();
}
