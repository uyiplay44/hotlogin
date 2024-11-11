"use strict";

const emailForm = document.getElementById("emailform");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  console.log("hello world");

  const email = document.getElementById("email").value;

  // Save email to local storage
  localStorage.setItem("userEmail", email);

  // Navigate to the password page
  window.location.href = "password.html";
});
