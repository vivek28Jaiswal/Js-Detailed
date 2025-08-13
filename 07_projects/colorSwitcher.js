let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach(function (button) {
  // console.log(button.id)
  button.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// switch method
buttons.forEach(function (button) {
button.addEventListener("click", function (e) {
    // console.log(e)
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "white":
        body.style.backgroundColor = "white";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      default:
        console.log("none");
        break;
    }
  });
});
