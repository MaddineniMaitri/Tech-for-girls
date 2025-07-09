let clickCount = 0;

const shareBtn = document.getElementById("shareBtn");
const clickCounter = document.getElementById("clickCounter");
const form = document.getElementById("registrationForm");
const successMsg = document.getElementById("successMsg");

// Check if already submitted
if (localStorage.getItem("submitted") === "true") {
  form.classList.add("hidden");
  successMsg.classList.remove("hidden");
}

shareBtn.addEventListener("click", () => {
  if (clickCount >= 5) return;

  const message = encodeURIComponent("Hey Buddy, Join Tech For Girls Community");
  const whatsappURL = `https://wa.me/?text=${message}`;
  window.open(whatsappURL, "_blank");

  clickCount++;
  clickCounter.textContent = `Click count: ${clickCount}/5`;

  if (clickCount === 5) {
    alert("Sharing complete. Please continue.");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (clickCount < 5) {
    alert("Please complete WhatsApp sharing (5/5) before submitting.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const college = document.getElementById("college").value.trim();
  const file = document.getElementById("screenshot").files[0];
  form.classList.add("hidden");
  successMsg.classList.remove("hidden");
  localStorage.setItem("submitted", "true");

  console.log({ name, phone, email, college, file });
});
