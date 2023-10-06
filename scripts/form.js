const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass1.value !== pass2.value) {
        message.textContent = "❗Passwords must match";
        message.style.visibility = "show";
        pass2.style.backgroundColor = "fff0f3";
        pass2.focus();
    }
    else {
        message.style.display = "none";
        pass2.style.backgroundColor = "#fff";
        pass2.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}