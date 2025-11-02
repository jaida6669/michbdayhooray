let img; // Declare globally

function preload() {
  img = loadImage('IMG_1033.jpeg'); 
}

function secondCanvas() {
  clear();
  background(0); // black background

  // Show the picture centered below the text
  imageMode(CENTER);
  image(img, width / 2, height / 1.8, 300, 300); // You can adjust size and position

  // Show the birthday message text
  fill('#ff69b4');
  textAlign(CENTER, TOP);
  textSize(24);
  textFont('Comic Sans MS');
  text(messageText, width / 2, 50, width - 100); // Wrapped message
}
