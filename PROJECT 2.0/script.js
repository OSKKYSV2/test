let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000);



const textElement = document.getElementById("text4");
const textToType = textElement.innerText;
const wordsToType = [
  "I AM A STUDENT WHO IS LOVING PROGRAMMING AND GAME CALLED LEAGUE OF LEGENDS,\n\nIM QUIET NEW IN THIS SO I HAVE FEW PROJECTS BY THIS TIME.\n\nBUT I BELIEVE I WILL CONTINUE IN THIS PATH AND WILL MAKE LARGE PROGRESS \n\nWITH DEVELOPING. SO STAY TUNED FELLAS.....................\n\n\n\n🤍 🤍 🤍 🤍 🤍 🤍 🤍 🤍 🤍 🤍 🤍 🤍 🤍 ",
];

const maxWordLength = Math.max(...wordsToType.map((word) => word.length));

let currentWordIndex = 0;
let currentWord = wordsToType[currentWordIndex];

let index = 0;
function typeText() {
  textElement.innerText = currentWord.slice(0, index++);

  if (index <= currentWord.length) {
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 10000);
  }
}

function eraseText() {
  textElement.innerText = currentWord.slice(0, index);

  if (index > 0) {
    index--;
    setTimeout(eraseText, 150);
  } else {
    currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
    currentWord = wordsToType[currentWordIndex];
    setTimeout(typeText, maxWordLength * 50);
  }
}

typeText();
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'OSKKYS',
    'ABOUT ME',
//    'you\'re going to realize',
//    'just as I did',
//    'that there\'s a difference',
//    'between knowing the path',
//    'and walking the path'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
}

next()

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
const button = document.querySelector('.button');

// Add a click event listener
button.addEventListener('click', function() {
});
