var box = document.getElementById("app");
var counter = 0;
box.style.cssText =
  "display:flex;width:100%;margin:auto;overflow:hidden;height:500px;position:relative;max-width:200px";

function createSlider(app, numSlider) {
  for (let i = 0; i <= numSlider; i++) {
    let img = document.createElement("img");
    img.src = `https://source.unsplash.com/random/200x200?sig=${i}`;
    img.alt = "random-pic";
    img.setAttribute("width", "100%");
    app.appendChild(img);
  }
  for (let i = 0; i <= 1; i++) {
    let button = document.createElement("button");
    button.style.cssText = "position:absolute;color:blue;top:50%";
    button.id = `btn${i}`;
    if (button.id === "btn0") {
      button.style.left = "0";
      button.innerText = "left";
    }
    if (button.id === "btn1") {
      button.style.right = "0";
      button.innerText = "right";
    }
    app.appendChild(button);
  }
}

createSlider(box, 2);

function rotateAnti() {
  var collection = document.getElementsByTagName("img");
  [...collection].forEach((node) => (node.style.display = "none"));
  --counter;
  counter = counter % collection.length;
  collection[Math.abs(counter)].style.display = "block";
  // var collection = [...collectionOld];
  // let first = collection[0];
  // for (let i = 1; i < collection.length; i++) {
  //   collection[i - 1] = collection[i];
  // }
  // collection[collection.length - 1] = first;
  // // collection = Object.fromEntries(collection);
  // console.log(collection, collectionOld);
  // for (let i = 0; i < collection.length; i++) {
  //   document
  //     .getElementById("app")
  //     .replaceChild(collection[i], collectionOld[i]);
  // }
}

function rotateClock() {
  var collection = document.getElementsByTagName("img");
  [...collection].forEach((node) => (node.style.display = "none"));
  ++counter;
  counter = counter % collection.length;
  collection[Math.abs(counter)].style.display = "block";
  // var collection = { ...collectionOld };
  // let last = collection[collection.length - 1];
  // for (let i = collection.length - 1; i > 0; i--) {
  //   collection[i] = collection[i - 1];
  // }
  // collection[0] = last;
  // for (let i = 0; i < collection.length; i++) {
  //   document
  //     .getElementById("app")
  //     .replaceChild(collection[i], collectionOld[i]);
  // }
}
function handleSlide() {
  var btns = document.getElementsByTagName("button");
  [...btns].forEach((btn) => btn.addEventListener("click", slideShow));
}

handleSlide();

function slideShow(e) {
  if (e.target.id === "btn0") {
    rotateAnti();
  }
  if (e.target.id === "btn1") {
    rotateClock();
  }
}

// console.log(box);
