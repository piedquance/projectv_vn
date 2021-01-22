//let textbox = document.getElementById("textbox");

window.onload = () => {
  let doc = document;
  var name = document.getElementById("name");
  var textbox = document.getElementById("textbox");
  char = {};
  game = {
    dialogue: "HOT TIP(ouch!): Click on the panel to progress the story!",
    nameTalking: "",
    showText: false,
  };

  game.ref = doc.getElementById("game-container");

  title = {
    P: [2],
    S: [2],
    Y: [3],
    C: [4],
    H: [3],
    O: [2],
    A: [3],
    N: [4],
    T: [4],
    M: [2],
    list: ["P", "S", "Y", "C", "H", "O", "A", "N", "T", "M"],
  };
  game.tinit = () => {
    for (key in title) {
      if (key !== "list") {
        for (let n = 1; n < 5; n++) {
          title[key][n] = "css/images/LETTERS/" + key + n + ".png";
        }
      }
    }
  };

  char.andy = {
    info: {
      name: "Andy",
      title: "andy",
      show: false,
      x: 100,
      y: 70,
    },

    body: {
      links: ["css/images/andy/body_full_suit.png"],
      n: 0,
    },

    hair: {
      links: ["css/images/andy/hair1.png"],
      n: 0,
      y: 0,
    },

    mouth: {
      links: [
        "css/images/andy/mouth3.png",
        "css/images/andy/mouth1.png",
        "css/images/andy/mouth2.png",
        "css/images/andy/mouth4.png",
        "css/images/andy/mouth5.png",
      ],
      n: 0,
      y: 270,
    },

    eyes: {
      links: ["css/images/andy/eyes1.png"],
      n: 0,
      y: 150,
    },

    leftArm: {
      links: ["css/images/andy/larm1_full_suit.png"],
      n: 0,
      x: 110,
      y: 370,
    },

    rightArm: {
      links: ["css/images/andy/rarm1_full_suit.png"],
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
        <img draggable="false" (dragstart)=false class="char-image" id="${key}-${part}" src="${
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

    document.getElementById("textbox").style.display =
      game.showText == true ? "" : "none";

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
  game.tinit();

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
    // document.getElementById("keyboard").style.transform = `scale(${
    //   window.innerWidth / 2500
    // })`;

    game.ref.style.height = window.innerHeight + "px";

    game.update();
  }, 10);
};

// setInterval(() => {
//   title[title.list[Math.floor(Math.random() * 10 + 0)]][0] = Math.floor(
//     Math.random() * 4 + 1
//   );

//   for (key in title) {
//     if (key !== "list") {
//       if (title[key][0] < 2) title[key][0] = 2;
//     }
//   }

//   document.getElementById("title").children[0].src = title.P[title.P[0]];
//   document.getElementById("title").children[1].src = title.S[title.S[0] - 1];
//   document.getElementById("title").children[2].src = title.Y[title.Y[0]];
//   document.getElementById("title").children[3].src = title.C[title.C[0]];
//   document.getElementById("title").children[4].src = title.H[title.H[0]];
//   document.getElementById("title").children[5].src = title.O[title.O[0]];
//   document.getElementById("title").children[6].src = title.P[title.P[0] - 1];
//   document.getElementById("title").children[7].src = title.H[title.H[0] - 1];
//   document.getElementById("title").children[8].src = title.A[title.A[0]];
//   document.getElementById("title").children[9].src = title.N[title.N[0]];
//   document.getElementById("title").children[10].src = title.T[title.T[0]];
//   document.getElementById("title").children[11].src = title.A[title.A[0] - 1];
//   document.getElementById("title").children[12].src = title.S[title.S[0]];
//   document.getElementById("title").children[13].src = title.M[title.M[0]];
// }, 50);
