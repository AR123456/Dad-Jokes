// https://icanhazdadjoke.com/api
const jokeEl = document.getElementById("joke");
const punch = document.getElementById("punch");
const jokeBtn = document.getElementById("jokeBtn");
const spinnerDiv = `<br><div class="spinner-border text-danger" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// // USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  let dataRaw = data;
  const clearHTML = () => {
    jokeEl.innerHTML = "";
    punch.innerHTML = "";
  };

  const jokeSplit = () => {
    jokeArr = dataRaw.joke.split("?");
    if (!jokeArr[1]) {
      jokeEl.innerHTML = data.joke;
    } else {
      jokeEl.innerHTML = jokeArr[0] + spinnerDiv;

      setTimeout(function () {
        jokeEl.innerHTML = jokeArr[0];
        punch.innerHTML = jokeArr[1];
      }, 4000);
    }
  };
  clearHTML();
  jokeSplit();

  // jokeEl.innerHTML = data.joke;
}
