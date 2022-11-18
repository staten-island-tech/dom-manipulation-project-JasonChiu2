const DOMSelectors = {
  artist: document.getElementById("artist"),
  album: document.getElementById("album"),
  button: document.getElementById("btn"),
  name: document.getElementById("name"),
  form: document.querySelector("#form"),
  container: document.getElementByClassName("container"),
};

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  let box = {};
  box.artist = document.getElementById("artist");
  box.album = document.getElementById("album");
  box.name = document.getElementById("name");
  console.log(box);
});

DOMSelectors.form.addEventListener("submit", function () {
  let name = DOMSelectors.name.value;
  console.log(name);
  DOMSelectors.container.insertAdjacentHTML("beforeend", `<p>${name}</p>`);
});
