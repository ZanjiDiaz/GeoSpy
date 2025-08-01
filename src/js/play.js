var game = document.getElementById("game");
var menu = document.getElementById("menu");
var play = document.getElementById("play");
var menu_cat = document.getElementById("game-mode");
var init_menu = document.getElementById("init-menu");
var playBtn = document.getElementById("play");
var geoGuessr = document.getElementById("geoGuessr");
var phBtn = document.getElementById("phBtn");
var worldBtn = document.getElementById("worldBtn");
var audioBtn = document.getElementById("audio-button");
var audioCollect = document.getElementById("audio-collect");
var audios = document.querySelectorAll("audio");

function clickPlay() {
  menu_cat.style.display = "flex";
  menu_cat.style.transform = "translateY(0px)";
  init_menu.style.transition = "1s ease";
  init_menu.style.display = "none";
}

function loadGoogleMapsAPI(callbackName) {
  // Prevent double loading
  if (window.google && window.google.maps) {
    if (typeof window[callbackName] === "function") window[callbackName]();
    return;
  }

  const script = document.createElement("script");
  script.src = "./src/js/mapsJavaScriptAPI.js;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

function world() {
  menu.style.display = "none";
  game.style.display = "block";

  const getLoc = document.createElement("script");
  getLoc.src = "./src/js/maps/randomWorld.js";
  document.head.appendChild(getLoc);

  const mechanics = document.createElement("script");
  mechanics.src = "./src/js/hide.js";
  document.head.appendChild(mechanics);

  loadGoogleMapsAPI("initMap");
}

function ph() {
  menu.style.display = "none";
  game.style.display = "block";

  const getLoc = document.createElement("script");
  getLoc.src = "./src/js/maps/phLandmarks.js";
  document.head.appendChild(getLoc);

  const mechanics = document.createElement("script");
  mechanics.src = "./src/js/hide.js";
  document.head.appendChild(mechanics);

  loadGoogleMapsAPI("initMap");
}

// SOUND EFFECTS
function addHoverAudio(target) {
  target.addEventListener("mouseover", () => audioBtn.play());
  target.addEventListener("mouseleave", () => {
    audioBtn.pause();
    audioBtn.currentTime = 0;
  });
}

function addClickAudio(target) {
  target.addEventListener("click", () => audioCollect.play());
}

[playBtn, geoGuessr, phBtn, worldBtn].forEach((btn) => {
  addHoverAudio(btn);
  addClickAudio(btn);
});
