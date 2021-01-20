//let textbox = document.getElementById("textbox");

window.onload = () => {
  let doc = document;
  var name = document.getElementById("name");
  var textbox = document.getElementById("textbox");
  char = {};
  game = {
    dialogue: "HOT TIP(ouch!): Click on the panel to progress the story!",
    nameTalking: "",
  };

  game.ref = doc.getElementById("game-container");

  char.andy = {
    info: {
      name: "Andy",
      title: "andy",
      show: false,
      x: 100,
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
      n: 0,
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

      let temp = char[key];
      for (var part in temp) {
        if (part !== "info") {
          temp.info.dref.innerHTML += `<div class="container ${part}" id="${key}-${part}-container">
        <img id="${key}-${part}" src="${
            temp[part].links[temp[part].n]
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
    document.getElementById("dialogue").innerHTML = game.dialogue;
    document.getElementById("name").innerHTML = game.nameTalking;

    for (var key in char) {
      char[key].info.dref.style.display = char[key].info.show ? "" : "none";
      if (!char[key].info.show) continue;
      char[key].info.dref.style.left = char[key].info.x + "px";
      char[key].info.dref.style.top = char[key].info.y + "px";

      let temp = char[key];

      for (var part in temp) {
        if (part !== "info") {
          if (part == "leftArm")
            temp[part].dref.style.right = temp[part].x + "px";
          if (part == "rightArm")
            temp[part].dref.style.left = temp[part].x + "px";

          temp[part].dref.style.top = temp[part].y + "px";

          temp[part].iref.src = temp[part].links[temp[part].n];
        }
      }
    }
  };

  game.cinit();

  document.getElementById("textbox").addEventListener("click", () => {
    console.log(game.story[0]);

    game.story[0]++;

    if (game.story[game.story[0]] !== undefined) game.story[game.story[0]]();
  });

  game.story = [
    0,
    () => {
      char.andy.info.show = true;
      game.nameTalking = "Andy";
      game.dialogue = "Wah? A visual novel?";
      char.andy.mouth.n = 0;
    },
    () => {
      game.dialogue = "Nah, don't be silly! This is just a demo!";
      char.andy.mouth.n = 0;
    },
    () => {
      game.dialogue = "...";
      char.andy.mouth.n = 1;
    },
    () => {
      game.dialogue = "This is just a demo...";
      char.andy.mouth.n = 2;
    },
    () => {
      game.dialogue = "I'm just a demo...";
      char.andy.mouth.n = 3;
    },
    () => {
      game.dialogue = "...";
      char.andy.mouth.n = 3;
    },
    () => {
      game.dialogue = "Oh well!";
      char.andy.mouth.n = 0;
    },
  ];

  setInterval(() => {
    char.andy.info.dref.style.transform = `scale(${window.innerHeight / 1000})`;

    game.ref.style.height = window.innerHeight + "px";

    game.update();
  }, 10);
};
