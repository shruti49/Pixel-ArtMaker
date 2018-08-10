/* ------CREATING A GRID-------*/

//ACCESSING FORM ELEMENT
const sizePicker = document.getElementById("sizePicker");

//ACCESSING TABLE ELEMENT
const table = document.getElementById("pixelCanvas");

//ADDING EVENT LISTENER
sizePicker.addEventListener("submit", function(event) {
  //PREVENTS PAGE FROM REFRESHING
  event.preventDefault();

  //CREATING A NEW GRID EVERYTIME
  table.innerHTML = "";

  //CALLING OF FUNCTION
  makeGrid();
});

//CREATING FUNCTION
function makeGrid() {
  //ACCESSING INPUTHEIGHT
  const row_input = document.getElementById("inputHeight").value;

  //ACCESSING INPUTWIDTH
  const col_input = document.getElementById("inputWidth").value;

  //CREATING AND APPENDING TABLE TAGS
  for (let i = 0; i < row_input; i++) {
    const row = document.createElement("tr");
    row.setAttribute("id", "myTr");
    for (let j = 0; j < col_input; j++) {
      const col = document.createElement("td");
      // col.setAttribute("id", "myTd");
      row.appendChild(col);
    }
    table.appendChild(row);
  }

  /*------COLORING GRID--------*/
  
  
  table.addEventListener('click' , function(event){
  const color = document.getElementById('colorPicker').value;
      if(event.target.nodeName === "TD"){
        event.target.style.backgroundColor = color;
      }
    });

  //ACCESSING THE COLORINPUT
    let down = !1;
table.addEventListener("mousedown", function(e) {
  down = !0;
  table.addEventListener("mouseup", function() {
    down = !1;
  });
  table.addEventListener("mouseleave", function() {
    down = !1;
  });
  table.addEventListener("mouseover", function(e) {
    const color = document.querySelector("#colorPicker").value;
    if (down) {
      if (e.target.tagName === "TD") {
        e.target.style.backgroundColor = color;
      }
    }
  });
});
}

