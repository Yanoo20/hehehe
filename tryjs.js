const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const gif1 = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",()=> {
question.innerHTML = "hehehehe";
gif.src ="https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

yesBtn.addEventListener("click",()=> {
question.innerHTML = "Iloveyouu";
gif1.src ="i-love-you-love.gif";
});

const gif1 = document.querySelector(".gif");
const desiredWidth = 300; 
const aspectRatio = gif1.naturalWidth / gif1.naturalHeight;
const desiredHeight = desiredWidth / aspectRatio;

gif1.style.width = `${desiredWidth}px`;
gif1.style.height = `${desiredHeight}px`;

});

noBtn.addEventListener("mouseover", ()=> {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window. innerWidth - noBtnRect.width;
const maxY = window. innerHeight - noBtnRect.height;

const randomX = Math.floor(Math.random()* maxX);
const randomY = Math.floor(Math.random()* maxY);

noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";
});
