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
