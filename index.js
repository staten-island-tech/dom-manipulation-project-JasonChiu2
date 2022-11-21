const DOMSelectors = {
  artist: document.getElementById("artist"),
  album: document.getElementById("album"),
  button: document.getElementById("btn"),
  name: document.getElementById("name"),
  form: document.querySelector("#form"),
  container: document.querySelector(".container"),
};

function createObject() {
  event.preventDefault();
  let box = {};
  box.artist = document.getElementById("artist");
  box.album = document.getElementById("album");
  box.name = document.getElementById("name");
}

function insert() {
  let artist = DOMSelectors.artist.value;
  let album = DOMSelectors.album.value;
  let name = DOMSelectors.name.value;
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class=card>
    <img src="https://m.media-amazon.com/images/I/51WDisP1+DL._SY580_.jpg" alt="Weezer Blue Album" class=album-cover>
    <p>Hello, my name is ${name} and I am currently listening to ${album} by ${artist}.</p>
    <button id=remove>Remove</button>
  </div>>`
  );
}

function clear() {
  DOMSelectors.artist.value = "";
  DOMSelectors.album.value = "";
  DOMSelectors.name.value = "";
}

function remove() {
  const remove = Array.from(document.querySelectorAll("#remove"));
  remove.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

DOMSelectors.form.addEventListener("submit", function () {
  createObject();
  insert();
  clear();
  remove();
});
