const container = document.querySelector('#container');



//function to create 16x16 grid
function makeRows(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for(i = 0; i < (rows * cols); i++){
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    container.appendChild(cell);
  };
  hoverColor();
};

//function tha creates a random color
let randomColor = function(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 

//function that changes colors of divs hovered over
function hoverColor(){
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${randomColor()}`;
    })
  })
}

makeRows(16, 16);

