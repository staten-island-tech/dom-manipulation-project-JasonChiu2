const DOMSelectors = {
  artist: document.getElementsByClassName("artist"),
  album: document.getElementsByClassName("album"),
  button: document.getElementById("btn"),
  name: document.getElementsByClassName("name"),
  form: document.querySelector("#form"),
};

DOMSelectors.form.addEventListener("submit", function (Event) {
  Event.preventDefault(refresh);
  let artist = DOMSelectors.artist.value;
  let album = DOMSelectors.album.value;
  let name = DOMSelectors.name.value;
  console.log(Event);
});
