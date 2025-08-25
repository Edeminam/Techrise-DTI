"use strict";

// Mobile Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
      navLinks.classList.remove("active");
    }
  });
});

// Newsletter Form Validation
const sendBtn = document.querySelector(".send-btn a");
if (sendBtn) {
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailInput = document.querySelector(".entryarea input");
    if (emailInput && emailInput.value.includes("@")) {
      alert("Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email.");
    }
  });
}
