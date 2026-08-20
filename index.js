import data from "./data.json" with { type: "json" };

const score = document.getElementById("score");
const avgScore =
  data.reduce((acc, value) => {
    return acc + value.score;
  }, 0) / data.length;

score.textContent = avgScore;
