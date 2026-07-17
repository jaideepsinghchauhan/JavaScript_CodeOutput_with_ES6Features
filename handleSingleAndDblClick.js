//<button onclick="singleClicked()" ondblclick="dblClicked()">Try it</button>

var dblClick = false;

function singleClicked() {
  this.dblClick = false;
  setTimeout(() => {
    if (this.dblClick === false) {
      console.log("click");
    }
  }, 250);
}
function dblClicked() {
  this.dblClick = true;
  console.log("dblclick");
}
