const signInTab = document.getElementById("signInTab");
const registerTab = document.getElementById("registerTab");
const signInForm = document.getElementById("signInForm");
const registerForm = document.getElementById("registerForm");

if (signInTab && registerTab && signInForm && registerForm) {
  signInTab.addEventListener("click", () => {
    signInTab.classList.add("active");
    registerTab.classList.remove("active");
    signInForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  });

  registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    signInTab.classList.remove("active");
    registerForm.classList.remove("hidden");
    signInForm.classList.add("hidden");
  });
}

const plantCards = document.querySelectorAll(".clickable-plant");
const plantModal = document.getElementById("plantModal");
const closePlantModal = document.getElementById("closePlantModal");

if (plantCards.length > 0 && plantModal && closePlantModal) {
  plantCards.forEach((card) => {
    card.addEventListener("click", () => {
      plantModal.classList.remove("hidden");
    });
  });

  closePlantModal.addEventListener("click", () => {
    plantModal.classList.add("hidden");
  });

  plantModal.addEventListener("click", (event) => {
    if (event.target === plantModal) {
      plantModal.classList.add("hidden");
    }
  });
}