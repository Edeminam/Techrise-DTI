"use strict";

// Get DOM elements
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const navButtons = document.querySelector('.nav__buttons');

// Toggle menu function
function toggleMenu() {
  hamburger.classList.toggle('active');
  navlinks.classList.toggle('active');
  navButtons.classList.toggle('active');
  
  // Update aria-label for accessibility
  const isOpen = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Toggle menu');
  hamburger.setAttribute('aria-expanded', isOpen);
}

// Event listener for hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && 
      !navlinks.contains(e.target) && 
      !navButtons.contains(e.target)) {
    hamburger.classList.remove('active');
    navlinks.classList.remove('active');
    navButtons.classList.remove('active');
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Close menu when clicking on a nav link (optional, for smooth UX)
const navLinks = document.querySelectorAll('.navlinks a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navlinks.classList.remove('active');
    navButtons.classList.remove('active');
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Handle window resize (close menu if expanded when resizing to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    navlinks.classList.remove('active');
    navButtons.classList.remove('active');
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

//FIRST OPTION FOR HAMBURGER MENU
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".navlinks");
// const navButtons = document.querySelector(".nav__buttons");
// const icon = hamburger.querySelector("span"); // material-symbols-outlined icon

// // Toggle menu on click
// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navLinks.classList.toggle("active");
//   navButtons.classList.toggle("active");

//   // Change hamburger → close icon
//   if (hamburger.classList.contains("active")) {
//     icon.textContent = "close";
//   } else {
//     icon.textContent = "menu";
//   }
// });

// // Close menu when a link is clicked (mobile UX best practice)
// document.querySelectorAll(".navlinks a").forEach((link) => {
//   link.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navLinks.classList.remove("active");
//     navButtons.classList.remove("active");
//     icon.textContent = "menu"; // reset back to hamburger
//   });
// });

// // Newsletter Form Validation

// (function () {
//   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
// })();

// // Step 3: Send email when button is clicked
// const sendBtn = document.querySelector(".send-btn a");
// if (sendBtn) {
//   sendBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const emailInput = document.querySelector(".entryarea input");

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailInput && emailRegex.test(emailInput.value)) {
//       const subscriberEmail = emailInput.value;

//       // Disable button and show loading
//       const originalText = sendBtn.textContent;
//       sendBtn.textContent = "Sending...";
//       sendBtn.style.pointerEvents = "none";
//       sendBtn.style.opacity = "0.6";

//       try {
//         // Send email using EmailJS
//         const response = await emailjs.send(
//           "service_tbhfnve", // Replace with your EmailJS Service ID
//           "service_tbhfnve",
//           "template_clkojct", // Replace with your EmailJS Template ID
//           {
//             to_email: "info@techrisedti.org",
//             subscriber_email: subscriberEmail,
//             message: `New newsletter subscription from: ${subscriberEmail}`,
//             subscription_date: new Date().toLocaleString(),
//             subject: "New Newsletter Subscription",
//           }
//         );

//         console.log("Email sent successfully!", response.status, response.text);
//         alert(
//           "Thank you for subscribing! We'll send updates to " + subscriberEmail
//         );
//         emailInput.value = "";
//       } catch (error) {
//         console.error("Failed to send email:", error);
//         alert(
//           "Sorry, something went wrong. Please try again or contact us directly."
//         );
//       } finally {
//         // Reset button
//         sendBtn.textContent = originalText;
//         sendBtn.style.pointerEvents = "auto";
//         sendBtn.style.opacity = "1";
//       }
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   });
// }


//SECOND OPTION
// const sendBtn = document.querySelector(".send-btn a");
// if (sendBtn) {
//   sendBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const emailInput = document.querySelector(".entryarea input");

//     if (emailInput && emailInput.value.includes("@")) {
//       const email = emailInput.value;

//       try {
//         // Show loading state
//         sendBtn.textContent = "Sending...";
//         sendBtn.style.pointerEvents = "none";

//         // Send email to your backend
//         const response = await fetch("/api/subscribe", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: email,
//             subscribedAt: new Date().toISOString(),
//           }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           alert(
//             "Thank you for subscribing! Check your email for confirmation."
//           );
//           emailInput.value = "";
//         } else {
//           alert(data.message || "Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Failed to subscribe. Please try again later.");
//       } finally {
//         // Reset button state
//         sendBtn.textContent = "Send";
//         sendBtn.style.pointerEvents = "auto";
//       }
//     } else {
//       alert("Please enter a valid email.");
//     }
//   });
// }

// FIRST OPTION

// const sendBtn = document.querySelector(".send-btn a");
// if (sendBtn) {
//   sendBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const emailInput = document.querySelector(".entryarea input");
//     if (emailInput && emailInput.value.includes("@")) {
//       alert("Thank you for subscribing!");
//       emailInput.value = "";
//     } else {
//       alert("Please enter a valid email.");
//     }
//   });
// }

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

const form = document.getElementById('emailForm');
  const popup = document.getElementById('successPopup');
  const closeBtn = document.getElementById('closePopup');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop actual form submission

    // Show popup card
    popup.style.display = 'flex';

    // Clear the form
    form.reset();
  });

  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  // Optional: close popup when clicking outside the card
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });