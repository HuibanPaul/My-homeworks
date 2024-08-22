let hardcodedComments = [
  {
    id: Math.floor(Math.random() * 100),
    username: "Paul",
    text: "Un text oarecare",
  },
  {
    id: Math.floor(Math.random() * 100),
    username: "Paul",
    text: "Alt text oarecare",
  },
  {
    id: Math.floor(Math.random() * 100),
    username: "Paul",
    text: "Inca un text oarecare",
  },
  {
    id: Math.floor(Math.random() * 100),
    username: "Paul",
    text: "Iar un text oarecare",
  },
];
function genereazaContinut() {
  hardcodedComments.forEach((id) => {
    console.log(id);
  });

  let container = document.getElementById("container");
  container.innerHTML = "";
  hardcodedComments.forEach((comment, index) => {
    container.innerHTML += `<div id = ${
      comment.username + comment.id
    }><textarea>${
      comment.text
    }</textarea><button onclick="stergeComment(${index})">X</button></div>`;
  });
}
genereazaContinut();
function stergeComment(id) {
  console.log(id);
  hardcodedComments.splice(id, 1);
  genereazaContinut();
}
