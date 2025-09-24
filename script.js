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

// Counter Animation with Scroll Trigger
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter div[data-target]");
  const speed = 100; // lower = faster

  const animateCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText || 0;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        // Add "+" if data-plus attribute exists
        if (counter.getAttribute("data-plus") === "true") {
          counter.innerText = target + "+";
        } else {
          counter.innerText = target;
        }
      }
    };
    updateCount();
  };

  // Use Intersection Observer to trigger animation
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counterElements =
            entry.target.querySelectorAll("[data-target]");
          counterElements.forEach((counter) => animateCounter(counter));
          observer.unobserve(entry.target); // Run only once
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% visible
  );

  // Observe the container
  const counterContainer = document.querySelector(".counter-container");
  if (counterContainer) {
    observer.observe(counterContainer);
  }
});
