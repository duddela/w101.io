var Names = (firstName, lastName) => {
  var fullName = firstName + " " + lastName;
  console.log("Hello, " + fullName);
};

var printPasswordStatus = (password1, password2) => {
  //var password1 = "abcd1234";
  //var password2 = "abcd1234";

  var isMathcingPasswords = password1 === password2;
  var isRequiredLength = password1.length >= 8;

  var isValidPassword = isMathcingPasswords && isRequiredLength;

  if (isValidPassword) {
    console.log("This is valid password");
  } else {
    console.log("this password is invalid");
  }

  if (!isMathcingPasswords) {
    console.log("Fix: The passwords do not match");
  }

  if (!isRequiredLength) {
    console.log("Fix: password must be at least 8 characters long");
  }
};

var pass1 = "abcd234";
var pass2 = "abcd1234";

printPasswordStatus(pass1, pass2);

var sumOfSquares = (x, y) => {
  var squareX = x * x;
  var squareY = y * y;

  var result = squareX + squareY;

  return result;
};
