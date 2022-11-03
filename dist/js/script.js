// * Import Function
import { generateUser } from "../../src/js/fetch.js";

// Langsung generate profile pas Halaman pertama kali dibuka
window.addEventListener("load", generateUser);

// Generate Profile Baru
const newProfileButton = document.getElementById("new-profile");
newProfileButton.addEventListener("click", generateUser);

// Salin Profile
const copyProfileButton = document.getElementById("copy-profile");
copyProfileButton.addEventListener("click", () => {
  const nama = document.getElementById("nama");

  // Bikin Efek Stabilo
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNode(nama);
  selection.removeAllRanges();
  selection.addRange(range);

  // Copy to Clipboard
  navigator.clipboard.writeText(nama.textContent);
});
