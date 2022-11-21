const DOMSelectors = {
  artist: document.getElementById("artist"),
  album: document.getElementById("album"),
  button: document.getElementById("btn"),
  name: document.getElementById("name"),
  form: document.querySelector("#form"),
  container: document.querySelector(".container"),
  remove: document.querySelectorAll("#remove"),
};

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  let box = {};
  box.artist = document.getElementById("artist");
  box.album = document.getElementById("album");
  box.name = document.getElementById("name");
});

DOMSelectors.form.addEventListener("submit", function () {
  let artist = DOMSelectors.artist.value;
  let album = DOMSelectors.album.value;
  let name = DOMSelectors.name.value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <img src="https://m.media-amazon.com/images/I/51WDisP1+DL._SY580_.jpg" alt="Weezer Blue Album" class=album-cover>
    <p>Hello, my name is ${name} and I am currently listening to ${album} by ${artist}.</p>
    <button onclick="remove()" id=remove>Remove</button>
  </div>>`
  );
});

DOMSelectors.form.addEventListener("submit", function () {
  DOMSelectors.artist.value = "";
  DOMSelectors.album.value = "";
  DOMSelectors.name.value = "";
});

function remove() {
  let remove = document.querySelectorAll("#remove");
  remove.forEach((button) => {
    button.addEventListener("submit", function () {
      remove.parentElement.remove();
    });
  });
}
