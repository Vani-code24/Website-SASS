
//header toggling menu bar
let nav= document.getElementById("header__nav");
let menu= document.getElementById("menu");

menu.addEventListener('click',()=>{
    nav.classList.toggle("active");
    menu.classList.toggle("active");
})



// switching cards with button element

monthlyBtn = document.getElementById("monthlybtn");
yearlyBtn = document.getElementById("yearlybtn");
plans1 = document.getElementById("plans1");
plans2 = document.getElementById("plans2");
plansCards = document.getElementsByClassName("plans__cards");

// window.onload=function(){
//     plans1.click();
//     monthlyBtn.style.backgroundColor = "rgba(0,30,0,0.7)";
//   };


monthlyBtn.addEventListener('click',()=>{
   monthlyBtn.classList.add("active");
   yearlyBtn.classList.remove("active");
    plans1.style.display = "flex";
    plans2.style.display = "none";  
});

yearlyBtn.addEventListener('click',()=>{
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
    plans1.style.display ="none";
    plans2.style.display ="flex";
});



//carousel

const carousal = document.querySelector('.feedAllcards');

const cards = document.querySelector('.feedAllcards__cards');
const slides = Array.from(carousal.children);
const nextButton = document.querySelector('.feedback__carouselBtn--right');
const prevButton = document.querySelector('.feedback__carouselBtn--left');
const dotNav = document.querySelector('.feedbackCards__nav');
const dots = Array.from(dotNav.children);
let slidesWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another



slides.forEach((slide,index)=>{
    slide.style.left = slidesWidth*index+'px';  
  });
 



  const moveToSlide = (carousal,currentSlide,targetSlide) =>{
    carousal.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    // carousal.style.top ='25%';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    currentSlide.classList.remove('carousel__styles');
    targetSlide.classList.add('carousel__styles');

  }

  const updateDots=(currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  }

  //When i click left, move the slides to left
  prevButton.addEventListener('click',e=>{
    const currentSlide = carousal.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

  moveToSlide(carousal,currentSlide,prevSlide);
  
  updateDots(currentDot,prevDot);
  currentSlide.style.filter = 'blur(-10px)';
  prevSlide.style.filter="opacity(1)";

  });
  
  
  //When i click right, move the slides to right
  nextButton.addEventListener('click', e=>{
    const currentSlide = carousal.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    carousal.style.overflow="visible";

    

  moveToSlide(carousal,currentSlide,nextSlide);


  updateDots(currentDot,nextDot);
  currentSlide.style.filter = 'blur(4px)';
  nextSlide.style.filter="opacity(1)";

  
  });



  dotNav.addEventListener('click',e=>{
      const targetDot = e.target.closest('button');
      if(!targetDot) return;

      const currentSlide = carousal.querySelector('.current-slide');
      const currentDot = dotNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot=> dot === targetDot);
        const targetSlide = slides[targetIndex];
        moveToSlide(carousal,currentSlide,targetSlide);
       updateDots(currentDot,targetDot);
       currentSlide.style.filter = 'blur(1px)';
       targetSlide.style.filter="opacity(1)";
  })