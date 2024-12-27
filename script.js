const app = document.getElementById('app');
let cheesyLinesNo = [
    "You are testing my patience!",
    "One more time and I'll cry",
    "I dare you to click NO again",
  "Oh come on, you can't say no to this face!",
  "What if I told you there's gift involved?",
  "Saying no is not an option today!",
  "A coffee date won't hurt, will it?",
  "You’re missing out on something magical!",
];
let cheesyLinesYes = [
    "Are we at an airport? Because my heart is taking off",
    "If i could rewrite the stars, I'd make sure our paths always cross",
    "Do you have a compass? Because I keep getting lost in your eyes",
    "Are you my morning coffee? Because you're the best part of my day",
    "Do you have a pencil? Because I want to draw us together",
    "I'm like your favorite song- you'll want to keep me on repeat",
    "if we were coffee, we'd be perfect blend",
    "If I were a leaf, I'd want to fall for you",
    "You must be a medicine, because you're what the doctor has adviced me",
    "If you were a paracetamol, I'd never miss a dose",
    "Do you believe in parallel universe? In one of them, we're already on a date",
  "Yay! You made my day!",
  "Coffee tastes better with you!",
  "I promise it'll be the best coffee date ever!",
  "I knew you'd say yes!",
];

function loadPage(content) {
  app.innerHTML = content;
}

function randomLine(lines) {
  return lines[Math.floor(Math.random() * lines.length)];
}

// Pages
function page1() {
  loadPage(`<button onclick="page2()">Start</button>`);
}

function page2() {
  loadPage(`
    <p>Hey Vishakha!! </p>
    <button onclick="page3()">Wanted to know a secret?</button>
  `);
}

function page3() {
  loadPage(`
    <p>Will you tell anyone?</p>
    <button onclick="page4()">No I won't :)</button>
  `);
}

function page4() {
    loadPage(`
      <p>Promise?</p>
      <button onclick="page5()">Promise!</button>
    `);
  }

function page5() {
  loadPage(`
    <p>Ok, I trust you.</p>
    <button onclick="page6()">Click here to know secret</button>
  `);
}

function page6() {
  loadPage(`
    <p>I know the perfect coffee spot. Wanna join?</p>
    <button onclick="page7()">Yes</button>
    <button onclick="cheesyNo()">No</button>
  `);
}

function cheesyNo() {
  alert(randomLine(cheesyLinesNo));
}

function page7() {
  loadPage(`
    <p>Select a date and leave me a message:</p>
    <input type="date" id="date" />
   
    <button onclick="page8()">Submit</button>
  `);
}

function page8() {
    loadPage(`
      <p>It's a Date</p>
      <button onclick="cheesyYes()">Yeah!! <3</button>
      
    `);
  }

  function cheesyYes() {
    alert(randomLine(cheesyLinesYes));
  }



// Start the application
page1();
