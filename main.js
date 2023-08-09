"use strict";

const sidebar = document.querySelector(".sidebar");
const btnOpen = document.querySelector(".exp-btn");

btnOpen.addEventListener("click", function (e) {
  sidebar.classList.toggle("unactive");
  sidebar.classList.toggle("active");
});
