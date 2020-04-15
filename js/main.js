// config :

// les images ce situent dans /img/background/
let background = {
    "bgImg": [
        "two-burgers.jpg", 
        "ognon-burger.jpg", 
        "multiple-burgers.jpg"
    ],
    "bgTitle": [
        "Big Lorem Ipsum", 
        "Dolor Sit Amet", 
        "Simple lorem ipsum"
    ],
    "bgtxt": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium", 
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
    ]
}
// temps entre chaque images en ms
let timerCarousel = 5000;

// config end





// carousel

carousel();

function carousel(i = 0) {

  document.getElementById('img-bg').src = "/img/background/" + background.bgImg[i];
  document.getElementById('title-bg').innerText = background.bgTitle[i];
  document.getElementById('text-bg').innerText = background.bgtxt[i];

  if (i == background.bgImg.length - 1) 
  {   
    setTimeout(`carousel()`, timerCarousel);
  }
  else
  {
    setTimeout(`carousel(${i+1})`, timerCarousel);
  }

}
