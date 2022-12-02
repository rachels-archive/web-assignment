// Get the modal
var loginModal = document.getElementById('id01');
var signupModal = document.getElementById('id02');
//modal.style.display = "none";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
    document.querySelector(".header").style.display = "block";
    loginModal.classList.toggle("active");
  } else if (event.target == signupModal) {
    signupModal.style.display = "none";
    document.querySelector(".header").style.display = "none";
    signupModal.classList.toggle("active");
  }
}

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  loginModal.classList.toggle("active");

  if (loginModal.classList.contains("active")) {
    document.querySelector(".header").style.display = "none";
  }
})

var signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", function () {
  signupModal.classList.toggle("active");

  if (signupModal.classList.contains("active")) {
    document.querySelector(".header").style.display = "none";
  }
})

var inputPass = document.getElementById("password1");
var confirmPass = document.getElementById("password2");

confirmPass.addEventListener("click", function () {
  if (inputPass.value.length < 8) {
    window.alert("password must be at least 8 characters");
  }
})

function validate() {
  var password = document.getElementById("password1").value;
  var confirmPassword = document.getElementById("password2").value;
  if (password != confirmPassword) {
    alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
    return false;
  }
  return true;
}

var signupSubmit = document.getElementById("signupSubmitBtn");
signupSubmit.addEventListener("click", function (e) {
  var password = document.getElementById("password1").value;
  var confirmPassword = document.getElementById("password2").value;
  if (password != confirmPassword) {
    alert("Your first password does not match the 2nd password. Please try again.");
    e.preventDefault();
    return false;
  }
  alert("Sign up successful.");
  return true;
});

var closesBtn = document.getElementById("closeBtn");
closesBtn.addEventListener("click", function () {
  loginModal.classList.toggle("active");

  if (loginModal.classList.contains("active")) {
    document.querySelector(".header").style.display = "none";
  } else {
    document.querySelector(".header").style.display = "block";
  }
});

const scrollButton = document.querySelector(".scroll")
const elm = document.querySelector('#about');

scrollButton.addEventListener("click", () => { scrollIt(elm) });

// function to scroll home section to impact section
function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop - 90,
  });
}

// faq list toggling
var acc = document.getElementsByClassName("toggle-title");
var i;
const toggleIcon = document.getElementsByClassName("toggle-icon");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (this.classList.contains("active")) {
      this.firstElementChild.innerHTML = "<b>-<b>";
    } else {
      this.firstElementChild.innerHTML = "<b>+<b>";
    }
  });
}

// functions to start counter for impact section
function startCounter() {
  const counters = document.querySelectorAll('.counter');
  const speed = 400; // The lower the slower

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      // console.log(inc);
      // console.log(count);

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// call startCounter() when window reaches impact section
var myScrollFunc = function () {
  var y = window.scrollY;

  const scrollTo = document.getElementById("impact");

  if (y >= scrollTo.offsetTop - 450) {
    startCounter();
  }
};

window.addEventListener("scroll", myScrollFunc);
