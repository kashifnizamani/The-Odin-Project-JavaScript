const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  let formisValid = true;
  inputs.forEach((element) => {
    let span = element.nextElementSibling;
    if (!element.validity.valid) {
      span.textContent = "";
      showError(element, span);
      formisValid = false;
    }
  });

  if (!formisValid) {
    e.preventDefault();
  } else {
    console.log("form submitted!!!");
  }
});

inputs.forEach((element) => {
  let span = element.nextElementSibling;
  element.addEventListener("input", (e) => {
    span.textContent = "";

    if (element.validity.valid) {
      span.textContent = "";
      span.className = "error";

      if (element.id === "mail") {
        if (!element.value.endsWith("@gmail.com")) {
        }
      }
    } else {
      showError(element, span);
    }
  });
});

function showError(element, span) {
  const label = document.querySelector(`label[for="${element.id}"]`);
  const fieldName = label ? label.textContent.replace(":", "") : "this field";

  if (element.validity.valueMissing) {
    span.textContent = `you need to fill out this field`;
  } else if (element.validity.typeMismatch) {
    span.textContent = `you need to enter ${fieldName}`;
  } else if (element.validity.tooShort) {
    span.textContent = `${fieldName} should be at least ${element.minLength}`;
  }

  span.className = "error active";
}
