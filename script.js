"use strict";

// // Mobile Hamburger Menu
// // Select elements
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".navlinks");
// const navButtons = document.querySelector(".nav__buttons");

// // Toggle menu on click
// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active"); // animate hamburger
//   navLinks.classList.toggle("active"); // show/hide nav links
//   navButtons.classList.toggle("active"); // show/hide buttons
// });

// // Optional: Close menu when a link is clicked (mobile UX best practice)
// document.querySelectorAll(".navlinks a").forEach((link) => {
//   link.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navLinks.classList.remove("active");
//     navButtons.classList.remove("active");
//   });
// });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");
const navButtons = document.querySelector(".nav__buttons");
const icon = hamburger.querySelector("span"); // material-symbols-outlined icon

// Toggle menu on click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  navButtons.classList.toggle("active");

  // Change hamburger → close icon
  if (hamburger.classList.contains("active")) {
    icon.textContent = "close";
  } else {
    icon.textContent = "menu";
  }
});

// Close menu when a link is clicked (mobile UX best practice)
document.querySelectorAll(".navlinks a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    navButtons.classList.remove("active");
    icon.textContent = "menu"; // reset back to hamburger
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

// Counter animation with fade-in when scrolled into view
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".counter-container");
  if (!container) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counters = entry.target.querySelectorAll("[data-target]");
        counters.forEach((counter) => {
          if (counter.dataset.animated) return;
          counter.classList.add("fade-in"); // trigger fade
          animateCounter(counter);
          counter.dataset.animated = "true";
        });
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(container);

  function animateCounter(counter) {
    const target = parseInt(counter.dataset.target, 10) || 0;
    const plus = counter.dataset.plus === "true";
    const duration = 1500;
    const frameTime = 25;
    const steps = Math.max(1, Math.ceil(duration / frameTime));
    const increment = Math.max(1, Math.ceil(target / steps));

    let count = 0;
    counter.innerText = "0";

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(timer);
        counter.innerText = plus ? `${target}+` : String(target);
      } else {
        counter.innerText = String(count);
      }
    }, frameTime);
  }
});
