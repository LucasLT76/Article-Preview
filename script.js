const shareBtn = document.querySelector(".share-btn");
const shareMenu = document.getElementById("share-menu");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("active");
  shareBtn.classList.toggle("active"); // 🔑 button changes color too
});
