/*
{status: "failed", reasons: ["reason 1", "reason 2"]};


*/

var passwordValidationStatus = (password1, password2) => {
  //var password1 = "abcd1234";
  //var password2 = "abcd1234";

  var isMathcingPasswords = password1 === password2;
  var isRequiredLength = password1.length >= 8;

  var isValidPassword = isMathcingPasswords && isRequiredLength;

  if (isValidPassword) {
    return { status: "sucess" };
    //console.log("This is valid password");
  } else {
    var reasons = [];
    console.log("this password is invalid");
  }

  if (!isMathcingPasswords) {
    reasons.push("Fix: The passwords do not match");
    //console.log("Fix: The passwords do not match");
  }

  if (!isRequiredLength) {
    reasons.push("Fix: password must be at least 8 characters long");
    //console.log("Fix: password must be at least 8 characters long");
  }

  return { status: "failed", reasons: reasons };
};

var pass1 = "abcd123";
var pass2 = "abcd123";

var returned = passwordValidationStatus(pass1, pass2);

if (returned.status === "sucess") {
  console.log("this password is valid");
} else {
  console.log("sorry, this password is invalid");
  console.log(returned.reasons);
}
