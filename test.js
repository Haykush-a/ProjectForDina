const questionContainer = document.querySelector(".question-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const resultContainer = document.querySelector('.result-container'); 
const question = document.querySelector(".question")
const sure = document.querySelector(".sure")
const question2 = document.querySelector('.question2')
const firstGif = document.querySelector('.firstGif')
const question3 = document.querySelector('.question3')
const secondGiff = document.querySelector('.secondGiff')

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";
  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.opacity = "1";
    gifResult.play();
  }, 3000);

});
noBtn.addEventListener("click",() => {
  firstGif.style.display = 'none'
  question.style.display = 'none'
  sure.style.display = 'block'
  question2.style.display = 'flex'

  noBtn.addEventListener("click",() =>{
    question3.style.display = 'block'
    question2.style.display = 'none'
    secondGiff.style.display = 'block'
    sure.style.display = 'none'
    
    noBtn.addEventListener("mouseover", () => {
      const newX = Math.floor(Math.random() * questionContainer.offsetWidth)*10;
      const newY = Math.floor(Math.random() * 10);
    
      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;
    });
  })
})
