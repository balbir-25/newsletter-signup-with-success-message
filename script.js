const invalid = document.getElementById("invalid");
const mail = document.getElementById("mail");
const next = document.getElementById("next");
const thanks = document.getElementById("thanks");
const email = document.getElementById("email");
const back = document.getElementById("back");

function isValidEmail(email) {
  // This is a simple email validation function that matches most email patterns, but not all
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

next.addEventListener('click', () => {
  if (mail.value.trim() === '' || !isValidEmail(mail.value)) {
    invalid.style.display = 'block';
    mail.style.borderColor = 'hsl(4, 100%, 67%)';
    mail.style.backgroundColor = 'hsla(9, 100%, 67%, 0.41)';
    mail.style.color = 'hsl(4, 100%, 67%)';
  } else {
    signup.style.display = 'none';
    thanks.style.display = 'block';
    email.textContent = mail.value;
  }
});

mail.addEventListener('focus', () => {
  invalid.style.display = 'none';
  mail.style.borderColor = '';
  mail.style.backgroundColor = '';
  mail.style.color = '';
});

back.addEventListener('click', () => {
  signup.style.display = 'flex';
  thanks.style.display = 'none';
  mail.value = '';
});
