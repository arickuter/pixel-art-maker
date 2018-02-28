//Function that creates the blank table
function makeGrid() {
  const height = $('#inputHeight').val(); //Gets the value of the inputHeight field
  const width = $('#inputWeight').val(); //Gets the value of the inputWeight field

  const tbl = $('#pixelCanvas'); //Sets tbl to the table object
  for (let i = 0; i < height; i++) {
    let mRow = $('<tr id="' + i + '"">');

    tbl.append(mRow); //Adds the row to the table
    for (let j = 0; j < width; j++) {
      mRow.append($('<td id="' + j + '"">')); //Populates the row with cells
    }
  }
}

//Function that converts the rgb color format to hex format
function rgb2hex(orig) {
  const rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);

  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
}

//When the submit button is clicked, this resets the table
$("#subBtn").click(function() {
  $("table").find('tr').remove();
  makeGrid();
});

//Method for filling blocks with the color selected
$('#pixelCanvas').on('click', 'td', function() {
  const mCell = $(this);
  const pColor = $('.input-color').val();
  const cellColor = rgb2hex(mCell.css('background-color'));

  if (cellColor === pColor) { //Checking if the cell has color, if not, it adds color, if it does, it removes the color
    mCell.css('background-color', '#fff');
  } else {
    mCell.css('background-color', pColor);
  }
});
