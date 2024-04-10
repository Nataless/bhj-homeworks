const editor = document.getElementById("editor");

document.addEventListener("keyup", () => {
  localStorage.setItem("input", editor.value);
})

window.addEventListener("load", () => {
  editor.value = localStorage.getItem("input");
})