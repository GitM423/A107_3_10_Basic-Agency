const open = document.getElementById("open");
const close = document.getElementById("close");
const aside = document.getElementById("aside");

function openAside() {
  aside.classList.remove("hidden");
}

function closeAside() {
  aside.classList.add("hidden");
}
