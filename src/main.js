import "./style.css";
import modernizeLogo from "/logo.svg";

function renderAdBox({
  title = "",
  label = "",
  heading = "",
  content = "",
  link = "",
} = {}) {
  return `
    <section class="ad">
        <p class="ad__title">${title}</p>

        <div class="ad__inner">
          <div>
            <p class="ad__label">${label}</p>
            <h3 class="ad__heading">${heading}</h3>
          </div>
          <div>
            <p class="ad__text">
              ${content}
            </p>
            <a href="${link}" class="ad__link" target="_blank">READ MORE</a>
          </div>
        </div>
      </section>
  `;
}

document.querySelector("#app").innerHTML = `
 <div class="container">
  <header class="header">
    <img src="${modernizeLogo}" alt="Modernize Logo" class="header__logo" />
  </header>

  <section class="form-section">
    <div class="form-box">
      <div class="form-box__header">
        <p class="form-box__title">
          Enter to win a 3rd generation Nest Learning Thermostat worth $299.
        </p>
      </div>
      <form id="userForm" class="form">
        <input
          id="name"
          type="text"
          class="form__input"
          placeholder="Name"
          required
          minlength="2"
        />
        <div class="form__location">
          <input id="city" type="text" class="form__input form__location-city" placeholder="City" />
          <input
            id="state"
            type="text"
            class="form__input form__location-state"
            placeholder="State"
          />
        </div>
        <input id="phone" type="text" class="form__input" placeholder="Phone Number" required />
        <input id="email" type="email" class="form__input" placeholder="Email Address" required />
        <button id="submit" class="form__submit" type="submit">
          Enter to Win
        </button>
      </form>
    </div>
  </section>

  <div class="bottom-section">
    ${renderAdBox({
      title: "Even More Savings",
      label: "ADVERTORIAL",
      heading: "Tricks Homeowners Use to Eliminate Bills",
      content:
        "Surging energy bills, unpredictable weather patterns and dissatisfaction with utility companies have homeowners scrambling...",
      link: "https://www.google.com",
    })}
  </div>
</div>
`;

const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#city");
const stateInput = document.querySelector("#state");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const form = document.querySelector("#userForm");
const submitBtn = document.querySelector("#submit");

phoneInput.addEventListener("input", handlePhoneInput);
emailInput.addEventListener("input", handleEmailInput);
form.addEventListener("input", handleFormInput);
form.addEventListener("submit", handleFormSubmit);

document.querySelectorAll(".form__input").forEach((input) => {
  input.addEventListener("blur", () => {
    input.classList.add("form__input--touched");
  });
});

function handlePhoneInput(e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 10) value = value.slice(0, 10);

  let formatted = "";

  if (value.length > 0) formatted += "(" + value.slice(0, 3);
  if (value.length >= 4) formatted += ") " + value.slice(3, 6);
  if (value.length >= 7) formatted += "-" + value.slice(6, 10);

  e.target.value = formatted;

  const isValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(e.target.value);

  if (!isValid) {
    e.target.setCustomValidity("Invalid phone format");
  } else {
    e.target.setCustomValidity("");
  }
}

function handleEmailInput(e) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(e.target.value)) {
    e.target.setCustomValidity("Invalid phone format");
  } else {
    e.target.setCustomValidity("");
  }
}

function handleFormInput() {
  console.log(form.checkValidity());
  submitBtn.disabled = !form.checkValidity();
}

async function handleFormSubmit(event) {
  event.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = "Submitted!";

  const data = {
    name: nameInput.value,
    city: cityInput.value,
    state: stateInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };

  try {
    const response = await fetch(
      "https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log("Form submitted successfully:");
  } catch (error) {
    console.error("Submission failed:");
  }
}
