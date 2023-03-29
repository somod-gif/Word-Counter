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
function mode() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("char").style.color = "white";
    document.getElementById("word").style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("char").style.color = "black";
    document.getElementById("word").style.color = "black";
  }
}
// function mode() {
//     if (document.body.style.background = "white") {
//         document.body.style.background = "black"
//         document.body.style.color = "white"
//         document.getElementById("char").style.color = "white"
//         document.getElementById("word").style.color = "white"
//     }
// }
