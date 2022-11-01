// * Import Function
import { generateUser } from "../../src/js/fetch.js";

window.addEventListener("load", generateUser);

const newProfileButton = document.getElementById("new-profile");
newProfileButton.addEventListener("click", generateUser);
