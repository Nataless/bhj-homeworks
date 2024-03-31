const items = document.querySelector("#items");
const loader = document.querySelector(".loader");
const url = "https://students.netoservices.ru/nestjs-backend/slow-get-courses";

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        let urlContent = JSON.parse(xhr.responseText)
        val = urlContent.response.Valute
        const div = document.createElement("div")
        for (let key in val) {
            items.insertAdjacentHTML("beforeend",
                `<div class="item">
                <div class="item__code">
                    ${val[key]["CharCode"]}
                </div>
                <div class="item__value">
                ${val[key]["Value"]}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>` )
        }
    }
})