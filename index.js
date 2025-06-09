// Form label handling
var fname = document.getElementById("f-name");
var lname = document.getElementById("l-name");
var email = document.getElementById("email-label");
var company = document.getElementById("company-label");
var countryLabel = document.getElementById("country-label");

var textfname = document.getElementById("firstname");
var textlname = document.getElementById("lastname");
var textemail = document.getElementById("email");
var textcompany = document.getElementById("company");
var countrySelect = document.getElementById("country");

function labelmove(inputname) {
  if (inputname == "firstname") {
    fname.style.transition = "all 0.2s";
    fname.style.marginTop = "-15px";
    fname.style.marginLeft = "10px";
    fname.style.zIndex = "10";
    fname.style.transform = "scale(0.9)";
    fname.style.padding = "5px 4px 5px 4px";
    fname.style.background = "#306f62";
    fname.style.fontSize = "13px"
    fname.style.opacity = "1";
  }
  if (inputname == "lastname") {
    lname.style.transition = "all 0.2s";
    lname.style.marginTop = "-15px";
    lname.style.marginLeft = "10px";
    lname.style.zIndex = "10";
    lname.style.transform = "scale(0.9)";
    lname.style.padding = "5px 4px 5px 4px";
    lname.style.background = "#306f62";
    lname.style.fontSize = "13px"
    lname.style.opacity = "1";
  }
  if (inputname == "email") {
    email.style.transition = "all 0.2s";
    email.style.marginTop = "-15px";
    email.style.marginLeft = "10px";
    email.style.zIndex = "10";
    email.style.transform = "scale(0.9)";
    email.style.padding = "5px 4px 5px 4px";
    email.style.background = "#306f62";
    email.style.fontSize = "13px"
    email.style.opacity = "1";
  }
  if (inputname == "company") {
    company.style.transition = "all 0.2s";
    company.style.marginTop = "-15px";
    company.style.marginLeft = "10px";
    company.style.zIndex = "10";
    company.style.transform = "scale(0.9)";
    company.style.padding = "5px 4px 5px 4px";
    company.style.background = "#306f62";
    company.style.fontSize = "13px"
    company.style.opacity = "1";
  }
  if (inputname == "country") {
    countryLabel.style.transition = "all 0.2s";
    countryLabel.style.marginTop = "-15px";
    countryLabel.style.marginLeft = "10px";
    countryLabel.style.zIndex = "10";
    countryLabel.style.transform = "scale(0.9)";
    countryLabel.style.padding = "5px 4px 5px 4px";
    countryLabel.style.background = "#306f62";
    countryLabel.style.fontSize = "13px";
    countryLabel.style.opacity = "1";
  }
}

window.onclick = function (event) {
  if (event.target != textfname && textfname.value.length == 0) {
    fname.style.transform = "scale(1)";
    fname.style.transition = "all 0.2s";
    fname.style.marginTop = "9px";
    fname.style.marginLeft = "10px";
    fname.style.zIndex = "0";
    fname.style.padding = "0px";
    fname.style.backgroundColor = "transparent";
    fname.style.fontSize = "16px";
    fname.style.opacity = "0.7"
  }
  if (event.target != textlname && textlname.value.length == 0) {
    lname.style.transform = "scale(1)";
    lname.style.transition = "all 0.2s";
    lname.style.marginTop = "9px";
    lname.style.marginLeft = "10px";
    lname.style.zIndex = "0";
    lname.style.padding = "0px";
    lname.style.backgroundColor = "transparent";
    lname.style.fontSize = "16px";
    lname.style.opacity = "0.7"
  }
  if (event.target != textemail && textemail.value.length == 0) {
    email.style.transform = "scale(1)";
    email.style.transition = "all 0.2s";
    email.style.marginTop = "9px";
    email.style.marginLeft = "10px";
    email.style.zIndex = "0";
    email.style.padding = "0px";
    email.style.backgroundColor = "transparent";
    email.style.fontSize = "16px";
    email.style.opacity = "0.7";
  }
  if (event.target != textcompany && textcompany.value.length == 0) {
    company.style.transform = "scale(1)";
    company.style.transition = "all 0.2s";
    company.style.marginTop = "9px";
    company.style.marginLeft = "10px";
    company.style.zIndex = "0";
    company.style.padding = "0px";
    company.style.backgroundColor = "transparent";
    company.style.fontSize = "16px";
    company.style.opacity = "0.7";
  }
  if (event.target != countrySelect && countrySelect.value == "") {
    countryLabel.style.transform = "scale(1)";
    countryLabel.style.transition = "all 0.2s";
    countryLabel.style.marginTop = "9px";
    countryLabel.style.marginLeft = "10px";
    countryLabel.style.zIndex = "0";
    countryLabel.style.padding = "0px";
    countryLabel.style.backgroundColor = "transparent";
    countryLabel.style.fontSize = "16px";
    countryLabel.style.opacity = "0.7";
  }
}

// Form error handling
document.querySelector(".submit-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let hasError = false;

  // Loop through all input-wrapper fields
  document.querySelectorAll(".input-wrapper").forEach((wrapper) => {
    const inputEl = wrapper.querySelector("input, select");
    const labelEl = wrapper.querySelector("label");
    const errorEl = wrapper.querySelector(".error-msg");

    if (inputEl && errorEl && labelEl) {
      if (inputEl.value.trim() === "") {
        inputEl.classList.add("input-error");
        labelEl.classList.add("label-error");
        errorEl.classList.add("active");
        hasError = true;
      } else {
        inputEl.classList.remove("input-error");
        labelEl.classList.remove("label-error");
        errorEl.classList.remove("active");
      }
    }
  });

  if (!hasError) {
    window.location.href = "./thankyou.html";
  }
});


// Carousel JS

let currentSlide = 0;
const dots = document.querySelectorAll('.dot');
const carouselTrack = document.getElementById('carouselTrack');
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}



// Responsive Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Video js
const playBtn = document.getElementById("playBtn");
const closeBtn = document.getElementById("closeBtn");
const video = document.getElementById("video");

if (playBtn && closeBtn && video) {
  playBtn.addEventListener("click", function () {
    playBtn.style.display = "none";
    video.style.display = "block";
    closeBtn.style.display = "flex"; 
    video.play();
  });

  closeBtn.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
    playBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
}