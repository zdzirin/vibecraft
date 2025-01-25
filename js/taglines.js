const tagline = document.querySelector(".tagline");

const taglines = [
    "The vibiest minecraft server",
    "Minecraft is brat",
    "Bush did 9/11",
    "Weegee!",
    "Spaghetti!",
    "HAAAAAACKS",
    "I'm doing my part!",
    "Rock and Stone!",
    "Thank you USA, you are my best friend",
];

// set the tagline to a random tagline
const i = Math.ceil(Math.random() * taglines.length) - 1;
tagline.innerHTML = taglines[i];
