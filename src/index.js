function generateMovieScript(event) {
  event.preventDefault();

  new Typewriter("#movie", {
    strings: "Generating your oscar worthy movie script.....",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let movieFormElement = document.querySelector("#movie-generator-form");
movieFormElement.addEventListener("submit", generateMovieScript);
