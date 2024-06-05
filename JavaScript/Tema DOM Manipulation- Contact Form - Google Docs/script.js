const submit = document.getElementById("submit");
submit.addEventListener("click", validate);

function validate() {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const showBanner = document.getElementById("banner");
  const bannerText = document.getElementById("text");

  if (firstName.value == "") {
    firstName.style.border = "3px solid Red";
  }
  if (lastName.value == "") {
    lastName.style.border = "3px solid Red";
    return false;
  } else {
    showBanner.style.visibility = "visible";
  }
  const bannerClose = document.getElementById("bannerclose");
  bannerClose.onclick = () => {
    showBanner.style.display = "none";
  };
  bannerText.innerHTML = "Thank you for contacting us, " + firstName.value;
}
console.log(validate);
