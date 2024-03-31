const progress = document.getElementById("progress");
const form = document.getElementById("form");
const URL = "https://students.netoservices.ru/nestjs-backend/upload";

form.addEventListener("submit", barProgression);

function barProgression(event) {
  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);  

  event.preventDefault();

  xhr.open("POST", URL);
  xhr.upload.addEventListener("progress", (event) => {
    progress.value = event.loaded / event.total;
  })
  xhr.upload.addEventListener("load", () => {
    alert('Данные полностью загружены!')
  });
  xhr.send(formData);
}