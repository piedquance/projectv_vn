let doc = document;

char = {};
game = {
  ref: doc.getElementById("game-container"),
  box: doc.getElementById("text-box"),
  dialogue: doc.getElementById("dialogue"),
  nameDisplayed: doc.getElementById("name"),
};

char.andy = {
  info: {
    name: "Andy",
    title: "andy",
    show: true,
    x: 300,
    y: 70,
  },

  body: {
    links: ["css/images/andy_body_full_suit.png"],
    n: 0,
  },

  hair: {
    links: ["css/images/andy_hair1.png"],
    n: 0,
    y: 0,
  },

  mouth: {
    links: [
      "css/images/andy_mouth3.png",
      "css/images/andy_mouth1.png",
      "css/images/andy_mouth2.png",
      "css/images/andy_mouth4.png",
    ],
    n: 1,
    y: 270,
  },

  eyes: {
    links: ["css/images/andy_eyes1.png"],
    n: 0,
    y: 150,
  },

  leftArm: {
    links: ["css/images/andy_larm1_full_suit.png"],
    n: 0,
    x: 110,
    y: 370,
  },

  rightArm: {
    links: ["css/images/andy_rarm1_full_suit.png"],
    n: 0,
    x: 110,
    y: 370,
  },
};

game.cinit = () => {
  for (var key in char) {
    game.ref.innerHTML += `<div class="char" id="${key}-char"></div>`;
    char[key].info.dref = doc.getElementById(`${key}-char`);

    for (var part in char[key]) {
      if (part !== "info") {
        char[
          key
        ].info.dref.innerHTML += `<div class="container" id="${key}-${part}-container">
        <img id="${key}-${part}" src="${
          char[key][part].links[char[key][part].n]
        }" /></div>`;
      }
    }
    char[key].hair.dref = doc.getElementById(`${key}-hair-container`);
    char[key].hair.iref = doc.getElementById(`${key}-hair`);

    char[key].mouth.dref = doc.getElementById(`${key}-mouth-container`);
    char[key].mouth.iref = doc.getElementById(`${key}-mouth`);

    char[key].eyes.dref = doc.getElementById(`${key}-eyes-container`);
    char[key].eyes.iref = doc.getElementById(`${key}-eyes`);

    char[key].body.dref = doc.getElementById(`${key}-body-container`);
    char[key].body.iref = doc.getElementById(`${key}-body`);

    char[key].leftArm.dref = doc.getElementById(`${key}-leftArm-container`);
    char[key].leftArm.iref = doc.getElementById(`${key}-leftArm`);

    char[key].rightArm.dref = doc.getElementById(`${key}-rightArm-container`);
    char[key].rightArm.iref = doc.getElementById(`${key}-rightArm`);
  }
};

game.update = () => {
  for (var key in char) {
    game.ref.innerHTML += `<div id="${key}-char"></div>`;
    char[key].info.dref = doc.getElementById(`${key}-char`);

    for (var part in char[key]) {
    }
  }
};

game.cinit();

let x = 0;

setInterval(() => {
  char.andy.mouth.iref.src = char.andy.mouth.links[x];

  x = x == char.andy.mouth.links.length - 1 ? 0 : x + 1;
}, 1000);

setInterval(() => {
  char.andy.info.dref.style.transform = `scale(${window.innerHeight / 1000})`;

  game.ref.style.height = window.innerHeight + "px";
}, 10);
