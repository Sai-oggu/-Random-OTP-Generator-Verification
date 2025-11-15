let generatedOTP = null;

function generateOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000);

  // Show OTP in popup window (alert)
  alert("Your OTP is: " + generatedOTP);

  // Clear result box
  document.getElementById("result").textContent = "";
}

function checkOTP() {
  let userOTP = document.getElementById("otp-input").value;

  if (!generatedOTP) {
    document.getElementById("result").textContent = "Generate OTP first!";
    document.getElementById("result").style.color = "red";
    return;
  }

  if (userOTP == generatedOTP) {
    document.getElementById("result").textContent = "OTP Verified Successfully!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = "Incorrect OTP. Try again.";
    document.getElementById("result").style.color = "red";
  }
}
