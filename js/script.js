let doc = document;

char = {};
game = {
  ref: doc.getElementById("game-container"),
};

char.andy = {
  info: {
    name: "Andy",
    title: "andy",
    show: true,
    x: 300,
    y: 70,
    dref: {},
  },

  body: {
    links: ["css/images/andy_body_full_suit.png"],
    n: 0,
    dref: {},
    iref: {},
  },

  hair: {
    links: ["css/images/andy_hair1.png"],
    n: 0,
    y: 0,
    dref: {},
    iref: {},
  },

  mouth: {
    links: [
      "css/images/andy_mouth3.png",
      "css/images/andy_mouth1.png",
      "css/images/andy_mouth2.png",
      "css/images/andy_mouth4.png",
    ],
    n: 0,
    y: 270,
    dref: {},
    iref: {},
  },

  eyes: {
    links: ["css/images/andy_eyes1.png"],
    n: 0,
    y: 150,
    dref: {},
    iref: {},
  },

  leftArm: {
    links: ["css/images/andy_larm1_full_suit.png"],
    n: 0,
    x: 110,
    y: 370,
    dref: {},
    iref: {},
  },

  rightArm: {
    links: ["css/images/andy_rarm1_full_suit.png"],
    n: 0,
    x: 110,
    y: 370,
    dref: {},
    iref: {},
  },
};

game.cinit = () => {
  for (var key in char) {
    console.log(char[key].info.name);

    game.ref.innerHTML += `<div id="${key}-char"></div>`;
    char[key].info.dref = doc.getElementById(`${key}-char`);

    for (var part in char[key]) {
      if (part !== "info") {
        console.log(part);

        char[key].info.dref.innerHTML += `  <div id="${key}-${part}-container">
        <img id="${key}-${part}" src="${
          char[key][part].links[char[key][part].n]
        }" />
      </div>`;

        char[key][part].dref = doc.getElementById(`${key}-${part}-container`);
        char[key][part].iref = doc.getElementById(`${key}-${part}`);
      }
    }
  }
};

game.cinit();

// let andyMouth = doc.getElementById("andy-mouth");

// let x = 0;

// setInterval(() => {
//   andyMouth.src = char.andy.mouth.links[x];

//   //console.log(x);

//   x = x == char.andy.mouth.links.length - 1 ? 0 : x + 1;
// }, 1000);

setInterval(() => {
  doc.getElementById("andy-char").style.transform = `scale(${
    window.innerHeight / 1000
  })`;
  doc.getElementById("game-container").style.height = window.innerHeight + "px";
}, 10);
