const next = document.querySelector('.bi-arrow-right');
const prev = document.querySelector('.bi-arrow-left');
const imageBox = document.querySelector('.images');
const span = document.querySelectorAll('.dots span');

let translate = 350;

const slide = (e)=> {
  //Get the class of clicked element
  let className = e.target.className.split(' ');
  //if its forword button then go next
  if (className[1] == 'bi-arrow-right'){
    
    if (translate < 1050) {
      translate += 350;
      forword();
      imageBox.style.transform = `translateX(-${translate}px)`;
    }else {
      translate = 0;
      imageBox.style.transform = `translateX(-${translate}px)`;
      forword();
    };
  //OtherWise go previus..
  }else {
    if (translate > 0) {
      translate -= 350;
      imageBox.style.transform = `translateX(-${translate}px)`;
      back();
    };
    
  };
  
};
//Listener for both buttons
next.addEventListener('click', slide);
prev.addEventListener('click', slide);

//When previus button clicked
function back () {
  //Random Color
  const clr = '#' + Math.floor(Math.random() * 12345678).toString(16);
  
  switch(translate){
    case 0:
      span[1].style.background = 'rgba(255,255,255,0.70)';
      span[0].style.background = clr;
      span[1].style.width = '7px';
      span[0].style.width = '15px';
      break;
    case 350:
      span[2].style.background = 'rgba(255,255,255,0.70)';
      span[1].style.background = clr;
      span[2].style.width = '7px';
      span[1].style.width = '15px';
      break;
    case 700:
      span[3].style.background = 'rgba(255,255,255,0.70)';
      span[2].style.background = clr;
      span[3].style.width = '7px';
      span[2].style.width = '15px';
      break;
  };
}

//When Next button clicked
function forword () {
  //Random Color
  const clr = '#' + Math.floor(Math.random() * 12345678).toString(16);
  
  switch(translate){
    case 0:
      span[3].style.background = 'rgba(255,255,255,0.70)';
      span[0].style.background = clr;
      span[3].style.width = '7px';
      span[0].style.width = '15px';
      break;
    case 350:
      span[0].style.background = 'rgba(255,255,255,0.70)';
      span[1].style.background = clr;
      span[0].style.width = '7px';
      span[1].style.width = '15px';
      break;
    case 700:
      span[1].style.background = 'rgba(255,255,255,0.70)';
      span[2].style.background = clr;
      span[1].style.width = '7px';
      span[2].style.width = '15px';
      break;
    case 1050:
      span[2].style.background = 'rgba(255,255,255,0.70)';
      span[3].style.background = clr;
      span[2].style.width = '7px';
      span[3].style.width = '15px';
      break;
  };
}
forword();

//kshapi