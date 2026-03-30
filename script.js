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

const identifyOpenButtons = document.querySelectorAll(".identify-open-btn");
const identifyModal = document.getElementById("identifyModal");
const closeIdentifyModal = document.getElementById("closeIdentifyModal");

if (identifyOpenButtons.length > 0 && identifyModal && closeIdentifyModal) {
  identifyOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      identifyModal.classList.remove("hidden");
    });
  });

  closeIdentifyModal.addEventListener("click", () => {
    identifyModal.classList.add("hidden");
  });

  identifyModal.addEventListener("click", (event) => {
    if (event.target === identifyModal) {
      identifyModal.classList.add("hidden");
    }
  });
}
const makePostOpenButtons = document.querySelectorAll(".make-post-open-btn");
const editPostOpenButtons = document.querySelectorAll(".edit-post-open-btn");

const makePostModal = document.getElementById("makePostModal");
const editPostModal = document.getElementById("editPostModal");

const closeMakePostModal = document.getElementById("closeMakePostModal");
const closeEditPostModal = document.getElementById("closeEditPostModal");

if (makePostOpenButtons.length > 0 && makePostModal && closeMakePostModal) {
  makePostOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      makePostModal.classList.remove("hidden");
    });
  });

  closeMakePostModal.addEventListener("click", () => {
    makePostModal.classList.add("hidden");
  });

  makePostModal.addEventListener("click", (event) => {
    if (event.target === makePostModal) {
      makePostModal.classList.add("hidden");
    }
  });
}

if (editPostOpenButtons.length > 0 && editPostModal && closeEditPostModal) {
  editPostOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      editPostModal.classList.remove("hidden");
    });
  });

  closeEditPostModal.addEventListener("click", () => {
    editPostModal.classList.add("hidden");
  });

  editPostModal.addEventListener("click", (event) => {
    if (event.target === editPostModal) {
      editPostModal.classList.add("hidden");
    }
  });
}
