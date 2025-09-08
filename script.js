/* VARIABLES */
let startButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let d1Button;
let d2Button;
let e1Button;
let e2Button;
let f1Button;
let f2Button;
let nextButton;
let restartButton;
let scoreDisplayButton;
let screen = 0;
let score = 0;
let questionTextSize = 20;
let backgroundImg;
let parkImg;
let cafeImg;
let roomImg;
let closetImg;
let suburbsImg;
let classroomImg;
let classroom2Img;
let cafeteriaImg;
let endBackgroundImg;
let libraryImg;

/* PRELOAD LOADS FILES */
function preload() {
  font = loadFont('assets/MotleyForcesRegular.ttf');
  backgroundImg = loadImage("assets/school.png");
  parkImg = loadImage("assets/park.png");
  cafeImg = loadImage("assets/cafe.png");
  nextButtonImg = loadImage("assets/arrowImage.png");
  classroomImg = loadImage("assets/classroom.png");
  classroom2Img = loadImage("assets/classroom2.png");
  roomImg = loadImage("assets/room.png");
  closetImg = loadImage("assets/closet.png");
  suburbsImg = loadImage("assets/suburbs.png");
  cafeteriaImg = loadImage("assets/cafeteria.png");
  endBackgroundImg= loadImage("assets/schoolBackground.png");
  libraryImg = loadImage("assets/library.png");
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);

  textAlign(CENTER);
  fill("pink")
  textSize(30);
  noStroke();
  textFont(font);

  // Set up the home screen
  background(backgroundImg, 224, 224, 224);
  textSize(50);
  stroke("black")
  text("School Hours", width / 2, height / 2 - 25
  );
  noStroke();
  fill("white")
  textSize(15);
  text("Earn as many points as possible by making good \ndecisions during your day at school!", width / 2, height / 2 + 20);


  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-250, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-1500, -1520);
  c1Button = new Sprite(-2500, -2502);
  c2Button = new Sprite(-3040, -300);
  d1Button = new Sprite(-3550, -350);
  d2Button = new Sprite(-400, -400);
  e1Button = new Sprite(-4550, -4550);
  e2Button = new Sprite(-5000, -500);
  f1Button = new Sprite(-5530, -550);
  f2Button = new Sprite(-6040, -600);
  nextButton = new Sprite(nextButtonImg, 2000, 80, 300);
  restartButton = new Sprite(-750, -6500);
  scoreDisplayButton = new Sprite(-1270, -1270)
  nextButtonImg.resize(70, 0)
}


/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "lightblue";
  enterButton.text = "Start";
  enterButton.textSize = "20"

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("pressed");
    showScreen1();
    screen = 1;
  }

  //Switch screens 
  if (screen == 1 && nextButton.mouse.presses()) {
    showScreen2();
    hideNextButton();
    screen = 2;
    print(screen);
  } else if (screen == 2 && nextButton.mouse.presses()) {
    showScreen3();
    hideNextButton();
    screen = 3;
    print(screen);
  } else if (screen == 3 && nextButton.mouse.presses()) {
    showScreen4();
    hideNextButton();
    screen = 4;
    print(screen);
  } else if (screen == 4 && nextButton.mouse.presses()) {
    showScreen5();
    hideNextButton();
    screen = 5;
    print(screen);
  } else if (screen == 5 && nextButton.mouse.presses()) {
    showScreen6();
    hideNextButton();
    screen = 6;
    print(screen);
  } else if (screen == 6 && nextButton.mouse.presses()) {
    endScreen();
    print("end");
  }


  //Earn or lose points based on options
  if (a1Button.mouse.presses()) {
    score = score + 15
    a1Button.color = "white"
    updateScreen();
    fill("lightgreen");
    text("+ 15 points \n By waking up extra early, you were able to get ready \nand eat a nice breakfast before heading off to school.", width / 2, 300);
  } else if (a2Button.mouse.presses()) {
    score = score + 10
    a2Button.color = "white"
    updateScreen();
    fill("lightgreen");
    text("+ 10 points \n You woke up at a decent time, got ready, and ate a \nlight breakfast before heading off to school. \nHowever, you felt slightly rushed.", width / 2, 300);

  }

  if (b1Button.mouse.presses()) {
    score = score - 5
    b1Button.color = "white"
    updateScreen();
    fill("red");
    text("- 5 points \nThe outfit you chose was too hot for the weather\nand you were uncomfortable during class.", width / 2, 300);
  } else if (b2Button.mouse.presses()) {
    score = score + 10;
    b2Button.color = "white"
    updateScreen();
    fill("lightgreen");
    text("+ 10 points \nPerfect choice for the hot weather.", width / 2, 300);

  }

  if (c1Button.mouse.presses()) {
    score = score + 15;
    c1Button.color = "white"
    updateScreen();
    fill("lightgreen");
    text("+ 15 points \nThe teacher thanks you for your honesty \nand decides to give you a break.", width / 2, 300);
  } else if (c2Button.mouse.presses()) {
    score = score + 5;
    c2Button.color = "white"
    updateScreen();
    fill("lightgreen");
    text("+ 5 points \nYour friend allows you to copy their \nhomework and you turn it in on time.", width / 2, 300);
  }

  if (d1Button.mouse.presses()) {
    score = score - 10;
    d1Button.color = "white"
    updateScreen();
    fill("red");
    text("- 10 points \nImmediately after lunch, you feel hungry and \nyou are low on energy during your next class.", width / 2, 300);
  } else if (d2Button.mouse.presses()) {
    d2Button.color = "white"
    score = score + 10;
    updateScreen();
    fill("lightgreen");
    text("+ 10 points \nThe cafeteria is serving your favorite food today! \nYou enjoy your lunch with your friends.", width / 2, 300);
  }
  if (e1Button.mouse.presses()) {
    e1Button.color = "white"
    score = score + 20;
    updateScreen();
    fill("lightgreen");
    text("+ 20 points \nBy engaging in class discussions, you find that you feel \nmore energized after talking to peers.", width / 2, 300);
  } else if (e2Button.mouse.presses()) {
    e2Button.color = "white"
    score = score + 10;
    updateScreen();
    fill("lightgreen");
    text("+ 10 points \nYou feel tired throughout your classes, \nbut you were able to get a lot of work done.", width / 2, 300);
  }

  if (f1Button.mouse.presses()) {
    background(cafeImg, 224, 224, 224);
    f1Button.color = "white"
    score = score + 20;
    updateScreen();
    showScreen6Text();
    fill("lightgreen");
    text("+ 20 points \nAfter a long school day, a good drink and \na snack was just what you needed.", width / 2, 300);
  } else if (f2Button.mouse.presses()) {
    background(parkImg, 224, 224, 224);
    score = score + 20;
    updateScreen();
    showScreen6Text();
    f2Button.color = "white"
    fill("lightgreen");
    text("+ 20 points \nA relaxing walk in the park was just\nwhat you needed after a long school day.", width / 2, 300);
  }

  if (restartButton.mouse.presses()) {
    restart();
  }

}










/* FUNCTIONS */

//Screen 1
function showScreen1() {
  fill("white");
  noStroke();
  background(roomImg);
  textSize(questionTextSize);
  text("School starts at 8:30 am. \nWhat time do you wake up this morning?", width / 2, height / 2 - 100);
  enterButton.pos = { x: 1000, y: 1000 };
  a1Button.pos = { x: width / 2 - 100, y: height / 2 + 25 };
  a1Button.w = 150;
  a1Button.h = 50;
  a1Button.collider = "s";
  a1Button.color = "pink";
  a1Button.text = "6:00 am";
  a1Button.textSize = 20;
  // Add A2 button
  a2Button.pos = { x: width / 2 + 100, y: height / 2 + 25 };
  a2Button.w = 150;
  a2Button.h = 50;
  a2Button.collider = "s";
  a2Button.color = "pink";
  a2Button.text = "7:00 am";
  a2Button.textSize = 20;
}

//Screen 2
function showScreen2() {
  background(closetImg);
  fill("white");
  noStroke();
  textSize(questionTextSize);
  text("Today's weather is hot outside with a high \ntemperature of 90 degrees Fahrenheit . \nWhat outfit did you wear to school?", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  a1Button.pos = { x: 2000, y: -2000 };
  a2Button.pos = { x: 3000, y: -3000 };
  // Add B1 button
  b1Button.pos = { x: width / 2 - 100, y: height / 2 + 25 };
  b1Button.w = 150;
  b1Button.h = 50;
  b1Button.collider = "s";
  b1Button.color = "#b5ebf7";
  b1Button.text = "hoodie + jeans";
  b1Button.textSize = 20;
  //Add B2 button
  b2Button.pos = { x: width / 2 + 100, y: height / 2 + 25 };
  b2Button.w = 150;
  b2Button.h = 50;
  b2Button.color = "#b5ebf7";
  b2Button.text = "t-shirt + shorts";
  b2Button.textSize = 20;
  b2Button.collider = "s";
}

//Screen 3
function showScreen3() {
  background(classroom2Img);
  fill("white");
  textSize(questionTextSize);
  text("The teacher tells everyone to turn in last night's \nassignment. OH NO! You realize you forgot your \nhomework at home! What do you do?", width / 2, height / 2 - 100);
  noStroke();
  // Move extra buttons off screen
  b1Button.pos = { x: -4000, y: -4000 };
  b2Button.pos = { x: -5000, y: -5000 };
  // Add C1 button
  c1Button.pos = { x: width / 2 - 100, y: height / 2 + 25 };
  c1Button.w = 170;
  c1Button.h = 50;
  c1Button.collider = "s";
  c1Button.color = "pink";
  c1Button.text = "Be honest and tell the \nteacher you forgot";
  c1Button.textSize = 15;
  //Add C2 Button
  c2Button.pos = { x: width / 2 + 100, y: height / 2 + 25 };
  c2Button.w = 170;
  c2Button.h = 50;
  c2Button.color = "pink";
  c2Button.text = "Ask a friend and copy \noff of them quickly";
  c2Button.textSize = 15;
  c2Button.collider = "s";


}

function showScreen4() {
  background(cafeteriaImg);
  fill("white");
  noStroke();
  textSize(questionTextSize);
  text("It's lunch time! You go outside and join your friends for \nlunch. You don't feel very hungry. What do you do?", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  c1Button.pos = { x: -6000, y: -6000 };
  c2Button.pos = { x: -7000, y: -7000 };
  // Add B1 button
  d1Button.pos = { x: width / 2 - 100, y: height / 2 + 25 };
  d1Button.w = 150;
  d1Button.h = 70;
  d1Button.collider = "s";
  d1Button.color = "#b5ebf7";
  d1Button.text = "Skip lunch and \nplay games on \nyour phone";
  d1Button.textSize = 15;
  //Add D2 button
  d2Button.pos = { x: width / 2 + 100, y: height / 2 + 25 };
  d2Button.w = 150;
  d2Button.h = 70;
  d2Button.color = "#b5ebf7";
  d2Button.text = "Grab lunch from \nthe cafeteria \nand eat anyways";
  d2Button.textSize = 15;
  d2Button.collider = "s";
}

function showScreen5() {
  fill("white");
  noStroke();
  textSize(questionTextSize);
  background(libraryImg);
  text("After lunch, you attend the rest of your classes. \nHowever, you start to feel tired as the day goes on. \nHow do you participate in your classes?", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  d1Button.pos = { x: -8000, y: -8000 };
  d2Button.pos = { x: -9000, y: -9000 };
  e1Button.pos = { x: width / 2 - 100, y: height / 2 + 25 };
  e1Button.w = 150;
  e1Button.h = 70;
  e1Button.collider = "s";
  e1Button.color = "lightpink";
  e1Button.text = "Pay attention \nand engage in \nclass discussions";
  e1Button.textSize = 15;
  e2Button.pos = { x: width / 2 + 100, y: height / 2 + 25 };
  e2Button.w = 150;
  e2Button.h = 70;
  e2Button.color = "lightpink";
  e2Button.text = "Actively listen \nbut stay quiet";
  e2Button.textSize = 15;
  e2Button.collider = "s";


}

function showScreen6() {
  fill("white");
   background(suburbsImg);
  noStroke();
  textSize(questionTextSize);
  text("Class is finally over! \nWhere do you decide to go?", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  e1Button.pos = { x: 10000, y: 10000 };
  e2Button.pos = { x: 11000, y: 11000 };
  // Add F1 button
  f1Button.pos = { x: width / 2 - 100, y: height / 2 + 25 };
  f1Button.w = 150;
  f1Button.h = 50;
  f1Button.collider = "s";
  f1Button.color = "#b5ebf7";
  f1Button.text = "Grab a drink from \nthe local cafe";
  f1Button.textSize = 15;
  //Add f2 button
  f2Button.pos = { x: width / 2 + 100, y: height / 2 + 25 };
  f2Button.w = 150;
  f2Button.h = 50;
  f2Button.color = "#b5ebf7";
  f2Button.text = "Go to the park \nand take a walk";
  f2Button.textSize = 15;
  f2Button.collider = "s";
}

function endScreen() {
  fill("pink");
  noStroke();
  background(endBackgroundImg);
  textSize(40);
  text("CONGRATULATIONS!!", width / 2, height / 2 - 70);
  textSize(15);
  fill("white");
  text("You completed your day at school! Despite starting off \nthe day rough and facing some challenges at school, \nyou stayed hopeful. Your day eventually got better!", width / 2, height / 2 - 30);
  // Move extra buttons off screen
  f1Button.pos = { x: -120, y: -120 };
  f2Button.pos = { x: -130, y: -130 };
  nextButton.pos = { x: -150, y: -150 };
  //Add restart button
  restartButton.pos = { x: 300, y: 300 };
  restartButton.w = 200;
  restartButton.h = 40;
  restartButton.collider = "s";
  restartButton.color = "lightblue";
  restartButton.text = "Click to restart";
  restartButton.textSize = 20;

  //Display points earned 
  fill("lightgreen");
  textSize(20);
  text("Total score: " + score, 300, 255);
}

function restart() {
  score = 0
  restartButton.pos = { x: -1500, y: -1500 };
  scoreDisplayButton.pos = { x: -12700, y: -12700 };
  setup();
}


//Display next button and draw score to screen
function updateScreen() {
  print("score " + score);
  nextButton.pos = { x: 550, y: 350 };
  nextButton.w = 50;
  nextButton.h = 30;
  nextButton.collider = "s";
  nextButton.color = "white";
  nextButton.textSize = 20;
  //Show score
  scoreDisplayButton.pos = { x: 60, y: 35 };
  scoreDisplayButton.w = 75;
  scoreDisplayButton.h = 30;
  scoreDisplayButton.collider = "s";
  scoreDisplayButton.color = ("#fff1cc");
  scoreDisplayButton.text = "Points: " + score;
  scoreDisplayButton.textSize = 15;
  textSize(15);
}

// Hides the next button when screens are switched
function hideNextButton() {
  nextButton.pos = { x: 3000, y: -3000 };
}

//Screen 6 Question text
function showScreen6Text() {
  textSize(questionTextSize)
  fill("white");
  text("Class is finally over! \nWhere do you decide to go?", width / 2, height / 2 - 100);
}
