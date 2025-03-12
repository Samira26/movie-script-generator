function displayMovie(response) {
  // response.data.answer
  console.log(response.data.answer);
  new Typewriter("#movie", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateMovieScript(event) {
  event.preventDefault();

  let movieTheme = document.querySelector("#movie-theme");
  let apiKey = "df24oeedc433a37t0bf85c483b145ecb";
  let context =
    "You are academy award winning screenwiter and expert in writing short films for all genres. Your mission is to generate a complete movie script for a short film in only 15 lines in basic HTML(don't display the code tag). Make sure to follow the movie theme and incorporate the theme in the script.";
  let prompt = `Movie theme: ${movieTheme.value}. Generate a movie script for a short film with a title name and character names. The script should have a beginning, middle and an end.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let movieScriptElement = document.querySelector("#movie");
  movieScriptElement.classList.remove("hidden");
  movieScriptElement.innerHTML = `<div class="generating">🎬 Generating a short film script about ${movieTheme.value}...</div>`;

  console.log("generating movie script");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayMovie);
}

let movieFormElement = document.querySelector("#movie-generator-form");
movieFormElement.addEventListener("submit", generateMovieScript);
