import {images} from './images.js';


const countofpicture=images.length;
let actualid=0;  
const slider=document.querySelector(".container");
const container=document.querySelector(".container");
const sliderimage=document.querySelector(".sliderimage");
const counter=document.querySelector(".counter");
const arrows=document.querySelector(".arrows");
const leftarrow=document.querySelector(".left--arrow");
const rightarrow=document.querySelector(".right--arrow");
const news=document.querySelector(".news");
const circle=document.querySelector(".circle");
const imageheight = 80; //vh 


const topcounter=() =>
counter.innerHTML=`${actualid+1}/${countofpicture}`;

const circlemaker = ()  => {
let circleelement="";
for (let i = 0; i < countofpicture; i++) {
   if (images[i].id===actualid) {circleelement=circleelement+` <img src="Images/circle-moon-svgrepo-com.svg" alt="kép${i+1} param=${i}" /> `}
    else {circleelement=circleelement+` <img src="Images/circle-outline-svgrepo-com.svg" alt="kép${i+1} param=${i}" /> `} 
  };
  circle.innerHTML=circleelement;
  };

  const circleclicker=()=>{
    const readycircle=document.querySelectorAll(".circle > img");
   
    for (let i = 0; i < readycircle.length; i++) {
      
      readycircle[i].addEventListener("click", () => {
      actualid=i;
      
      topcounter();
      circlemoverbyclick();
    })} 
  };
const countermoverbyarrow=(text) =>{
  if ((actualid===countofpicture-1) && (text==="right")) {
    actualid=0;
   } 
  else if
    ((actualid===0) && (text==="left")) {actualid=countofpicture-1} 
  else if
     (text==="right") {actualid+=1} 
  else if
    (text==="left") {actualid-=1};
  
  container.setAttribute("style", `background-image: url(../${images[actualid].source}); height: ${imageheight}vh;`);
  createnews();
  circlemaker();
  };

  const circlemoverbyclick=() =>{
    
    container.setAttribute("class", "animation"); 
    container.setAttribute("style", `background-image: url(../${images[actualid].source}); height: ${imageheight}vh; `);
    createnews();
    circlemaker();
    circleclicker();
    container.removeAttribute("class", "animation");
    };

const createnews=() => news.innerHTML=images[actualid].news;

const start=() => {
container.setAttribute("style", `background-image: url(../${images[actualid].source}); height: ${imageheight}vh; `);
topcounter();
createnews();
circlemaker();
circleclicker();
automover();
}

const automover=() =>{
  actualid+=1;
  if (actualid>countofpicture-1) {actualid=0};
  setTimeout(start, 10000);
};


leftarrow.addEventListener("click", () => {
    countermoverbyarrow("left");
  topcounter();
});
rightarrow.addEventListener("click", () => {
  countermoverbyarrow("right");
  topcounter();
})
 
start();
