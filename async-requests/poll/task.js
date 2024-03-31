const Title = document.getElementById('poll__title');
const Answers = document.getElementById('poll__answers');
const URL = "https://students.netoservices.ru/nestjs-backend/poll";

let xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();
xhr.addEventListener("load", () => {
  let xhrJSON = JSON.parse(xhr.response);
  Title.textContent = xhrJSON.data.title;
  for (const element of xhrJSON.data.answers) {
    let answerBtn = document.createElement("button");
    answerBtn.classList.add("poll__answer");
    answerBtn.innerHTML = element;
    answerBtn.addEventListener("click", () => {
      alert('Спасибо, ваш голос засчитан!');
      location.reload();
    });
    Answers.insertAdjacentElement("afterbegin", answerBtn);
  }
});

