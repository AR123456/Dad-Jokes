// https://icanhazdadjoke.com/api
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

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

  const jokeSplit = () => {
    jokeArr = dataRaw.joke.split("?");
    if (!jokeArr[1]) {
      console.log(jokeArr[0]);
      jokeEl.innerHTML = data.joke;
    } else {
      jokeEl.innerHTML = jokeArr[0];
      setInterval(function () {
        jokeEl.innerHTML = data.joke;
      }, 3000);
    }
  };
  jokeSplit();

  // jokeEl.innerHTML = data.joke;
}
