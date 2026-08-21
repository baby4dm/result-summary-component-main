import data from "./data.json" with { type: "json" };

const score = document.getElementById("score");
const summaryList = document.getElementById("summary-list");

const avgScore =
  data.reduce((acc, value) => {
    return acc + value.score;
  }, 0) / data.length;

score.textContent = Math.round(avgScore);

const results = data
  .map((el) => {
    return `<li class="h-14 bg-[${el.bg}] flex justify-between p-4 rounded-xl">
            <div class="flex items-center gap-4">
              <img src=${el.icon} alt=${el.category} />
              <h3 class="text-[${el.color}] font-medium leading-[130%]">
                ${el.category}
              </h3>
            </div>

            <p class="text-[#303B59] font-bold leading-[130%]">
              <span id="reaction" class="opacity-100">${el.score}</span>
              <span class="opacity-50">/ 100</span>
            </p>
          </li>`;
  })
  .join("");

summaryList.innerHTML = results;
