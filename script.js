let textArea = document.getElementById("textArea");
let character = document.getElementById("char");
let wordCount = document.getElementById("word");

textArea.addEventListener("input", function () {
  let text = this.value;
  text = text.trim();
  let char = text.length;
  character.value = char;
  let newText = text.split(/\s+/);
  let clearWords = newText.filter((element) => {
    return element !== "";
  });
  wordCount.value = clearWords.length;
});
