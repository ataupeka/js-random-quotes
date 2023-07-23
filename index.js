let text = "The wisdom of the day";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector("#h1").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);

    }

}


type();













const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
  "There is some good in this world, and it’s worth fighting for. – J.R.R. Tolkien, The Two Towers",
  "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise. – Brené Brown, Rising Strong",
  "I assign myself no rank or any limit, and such an attitude is very much against the trend of the times. But my world has become one of infinite possibilities. – Ralph Ellison, Invisible Man",
  "It’s no use going back to yesterday, because I was a different person then. – Lewis Carroll, Alice’s Adventures in Wonderland",
  " If you’re making mistakes it means you’re out there doing something. – Neil Gaiman, Make Good Art",
  "You never really understand a person until you consider things from his point of view … Until you climb inside of his skin and walk around in it. – Harper Lee, To Kill a Mockingbird",
  "One day I will find the right words, and they will be simple. – Jack Kerouac, The Dharma Bums",
  "It is never too late to be wise. – Daniel Defoe, Robinson Crusoe"
]

button.addEventListener("click", () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  par.style.display = "block";
  par.textContent = randomQuote;
})


