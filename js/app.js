document.addEventListener('DOMContentLoaded', function() {
  //DOM is loaded, things can happen

  // create a new document fragment to add to the port
  var toAdd = document.createDocumentFragment();

  //creates an (x,y) drawing space
  function artbox(x, y) {
    //for the amount of rows
    for (var i = 0; i < x; i++) {
      //creates a new div with class row
      var newRow = document.createElement('div');
      newRow.className = 'row';
      //fills the row with y divs w/ pixel class
      for (var j = 0; j < y; j++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'pixel on border';
        //appends each pixel to the div
        newRow.append(newDiv);
      }
      //appends the rows to the toAdd fragment
      toAdd.append(newRow);
    }
    //appends the fragment to the port
    document.getElementById('port').append(toAdd);
  }

  //sets a 10 x 10 draw space
  artbox(30, 30);

  // default brush color
  var brushColor = 'green';
  let pixel = document.getElementsByClassName('pixel');
  // let currentColor = document.getElementsByClassName('colorIndicator');
  //changes clicked pixel based on brush color
  document.addEventListener('click', function(event, color) {
    console.log(brushColor == 'white');
    if (event.target.classList.contains('pixel')) {
      var thing = event.target;
      if (brushColor == 'white') {
        thing.className = 'pixel on border'
      }

      if (thing.classList.contains(brushColor)) {
        thing.classList.remove(brushColor);
      } else if (!thing.classList.contains(brushColor)) {
        thing.classList.add(brushColor);
      }
    }
  }, false);

  var color = document.getElementById('currentColor');
  color.classList = 'green';
  //changes brushColor when a new swatch is clicked
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('swatch')) {
      brush = event.target;
      brushColor = '';
      if (brush.classList.contains('red')) {
        brushColor = 'red';
        color.classList = brushColor;
      } else if (brush.classList.contains('white')) {
        brushColor = 'white';
        color.classList = brushColor;
      } else if (brush.classList.contains('green')) {
        brushColor = 'green';
        color.classList = brushColor;
      } else if (brush.classList.contains('black')) {
        brushColor = 'black';
        color.classList = brushColor;
      } else if (brush.classList.contains('light-blue')) {
        brushColor = 'light-blue';
        color.classList = brushColor;
      } else if (brush.classList.contains('dark-blue')) {
        brushColor = 'dark-blue';
        color.classList = brushColor;
      } else if (brush.classList.contains('light-green')) {
        brushColor = 'light-green';
        color.classList = brushColor;
      } else if (brush.classList.contains('dark-green')) {
        brushColor = 'dark-green';
        color.classList = brushColor;
      } else if (brush.classList.contains('yellow')) {
        brushColor = 'yellow';
        color.classList = brushColor;
      } else if (brush.classList.contains('tan')) {
        brushColor = 'tan';
        color.classList = brushColor;
      } else if (brush.classList.contains('brown')) {
        brushColor = 'brown';
        color.classList = brushColor;
      }
    }
    console.log(brushColor);
  }, false);

});
