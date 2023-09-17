let btn = document.getElementById("btn");
let input = document.getElementById("input");
let output = document.getElementById("output");

const serverUrl = "https://api.funtranslations.com/translate/numbers.json";

function getTranslationURL(input) {
  return serverUrl + "?" + "text=" + input;
}

btn.addEventListener("click", clickHandler);

function clickHandler() {
  const inputText = input.value;
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(console.errorHandler);
}
