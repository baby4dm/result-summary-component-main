import data from "./data.json" with { type: "json" };

const score = document.getElementById("score");

const avgScore =
  data.reduce((acc, value) => {
    return acc + value.score;
  }, 0) / data.length;

score.textContent = Math.round(avgScore);

const results = data.map((el) => {
  return `<li>
      <img src=${el.icon} alt=${el.category} />
      <h3>${el.category}</h3>
      <p>
        <span>alt=${el.score}</span> / 100
      </p>
    </li>`;
});
