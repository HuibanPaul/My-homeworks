const submit = document.getElementById("submit");
submit.addEventListener("click", validate);

function validate() {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const showBanner = document.getElementById("banner");
  if (firstName.value == "") {
    firstName.style.border = "3px solid Red";
  }
  if (lastName.value == "") {
    lastName.style.border = "3px solid Red";
    return false;
  } else {
    showBanner.style.visibility = "visible";
  }
}
console.log(validate);
