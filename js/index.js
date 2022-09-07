
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const screenArray = document.querySelectorAll('.carousel__screen');
var index = 0;
var maxIndex = screenArray.length-1;
var minIndex = maxIndex*(-1);

//Initlice the carousel with their index
screenArray.forEach((screen,i) => {
    if(index === i) screen.classList.add()
    screen.style.transform = `translateX(${(i-index)*100}%)`
})

btnNext.addEventListener('click', ()=>{
    if(maxIndex === index) index = 0
    else index++
    screenArray.forEach((screen,i) => {
        if(index === i) screen.classList.add()
        screen.style.transform = `translateX(${(i-index)*100}%)`
    });
});

btnPrev.addEventListener('click', ()=>{
    if(0 === index) index = maxIndex;
    else index--
    screenArray.forEach((screen, i) =>{
        screen.style.transform = `translateX(${(i-index)*100}%)`;
    })
})

