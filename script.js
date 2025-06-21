// Toggle between Sign In and Sign Up forms
document.getElementById('switchToSignUp').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signInForm').classList.add('hidden');
  document.getElementById('signUpForm').classList.remove('hidden');
});

document.getElementById('switchToSignIn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signUpForm').classList.add('hidden');
  document.getElementById('signInForm').classList.remove('hidden');
});

// Dummy form submission handling
document.getElementById('signInForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  alert(`Signed in as ${email}`);
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;

  alert(`Account created for ${name} (${email})`);
});
