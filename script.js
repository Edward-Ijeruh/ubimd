// NAVBAR
//Navbar scroll behaviour
const navbar = document.getElementById("navbar");
const icons = document.querySelectorAll(".swap-icon");

window.addEventListener("scroll", () => {
  const heroHeight = document.getElementById("hero").offsetHeight;

  const scrolled = window.scrollY > heroHeight - 80;

  if (scrolled) {
    navbar.classList.add("navbar-scrolled");

    // Switch to dark
    icons.forEach((icon) => {
      const dark = icon.getAttribute("data-dark");
      if (dark) icon.src = dark;
    });
  } else {
    navbar.classList.remove("navbar-scrolled");

    // Switch to light
    icons.forEach((icon) => {
      const light = icon.getAttribute("data-light");
      if (light) icon.src = light;
    });
  }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navbarHeight = document.getElementById("navbar").offsetHeight;
      const elementPosition =
        targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 5;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// MOBILE MENU
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

function openMobileMenu() {
  mobileMenu.classList.remove("-translate-y-full");
}

function closeMobileMenu() {
  mobileMenu.classList.add("-translate-y-full");
}

// Toggle menu on hamburger click
mobileBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("-translate-y-full")) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

// Close menu on X button click
mobileMenuClose.addEventListener("click", closeMobileMenu);

// Hero background switcher
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0", "invisible");
      slide.classList.add("opacity-100", "visible");
    } else {
      slide.classList.remove("opacity-100", "visible");
      slide.classList.add("opacity-0", "invisible");
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("w-[35px]", "bg-blue-200");
      dot.classList.remove("w-3", "bg-white");
    } else {
      dot.classList.add("w-3", "bg-white");
      dot.classList.remove("w-[35px]", "bg-blue-200");
    }
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

// Initialize first slide
showSlide(0);

// SECURE SPOT FORM VALIDATION
const form = document.getElementById("earlyAccessForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // First Name validation
  const firstName = form.firstName;
  if (!firstName.value.trim()) {
    firstName.nextElementSibling.classList.remove("hidden");
    valid = false;
  } else {
    firstName.nextElementSibling.classList.add("hidden");
  }

  // Email validation
  const email = form.email;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.trim() || !emailPattern.test(email.value)) {
    email.nextElementSibling.classList.remove("hidden");
    valid = false;
  } else {
    email.nextElementSibling.classList.add("hidden");
  }

  // Phone validation
  const phone = form.phone;
  if (!phone.value.trim()) {
    phone.nextElementSibling.classList.remove("hidden");
    valid = false;
  } else {
    phone.nextElementSibling.classList.add("hidden");
  }

  // Referral select validation
  const referral = form.referral;
  // optional validation if you want

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
