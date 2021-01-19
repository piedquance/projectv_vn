let mouthArray = [
  "css/images/andy_mouth3.png",
  "css/images/andy_mouth1.png",
  "css/images/andy_mouth2.png",
  "css/images/andy_mouth4.png",
];

let doc = document;

let andyMouth = doc.getElementById("andy-mouth");

let x = 0;

setInterval(() => {
  andyMouth.src = mouthArray[x];

  //console.log(x);

  x = x == mouthArray.length - 1 ? 0 : x + 1;
}, 1000);

setInterval(() => {
  doc.getElementById("andy-char").style.transform = `scale(${
    window.innerHeight / 1000
  })`;
  doc.getElementById("game-container").style.height = window.innerHeight + "px";
}, 10);
