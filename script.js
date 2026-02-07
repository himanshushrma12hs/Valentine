const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 50;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yay!! 💖 You just made me the happiest 😍";
  noBtn.style.display = "none";
  yesBtn.disabled = true;
});
