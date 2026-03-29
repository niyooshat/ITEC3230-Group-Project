const signInTab = document.getElementById("signInTab");
const registerTab = document.getElementById("registerTab");
const signInForm = document.getElementById("signInForm");
const registerForm = document.getElementById("registerForm");

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