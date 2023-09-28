function getFormvalue() {
  // Get the values of the first name and last name input fields
  var firstName = document.forms["form1"]["fname"].value;
  var lastName = document.forms["form1"]["lname"].value;

  // Check if both fields are filled
  if (firstName !== "" && lastName !== "") {
    // Display the first and last name using alert
    alert(firstName + " " + lastName);
  } else {
    // Show an alert if either of the fields is empty
    //alert("Please fill in both First Name and Last Name fields.");
  }

  // Prevent the form from submitting and refreshing the page
  return false;
}
