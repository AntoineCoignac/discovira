window.addEventListener("load", function(){
    let intro = document.querySelector(".intro");
    intro.classList.remove("visible");
    setTimeout(function() {
        document.body.classList.add("loaded");
    }, 2000);
})

var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  console.log(setHeight.style.height);
});

var isScrolling = false;

window.addEventListener('scroll', function() {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(function() {
      scrollPlay();
      isScrolling = false;
    }, 150); // ajustez le délai selon vos besoins
  }
});

function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  console.log(vid.currentTime);
}

// Sélectionnez votre image
var image = document.getElementById('floating');

// Ajoutez un écouteur d'événement pour le mouvement de la souris
document.addEventListener('mousemove', function(event) {
  // Obtenez les coordonnées du curseur
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  
  // Mettez à jour la position de l'image en fonction des coordonnées du curseur
  image.style.left = mouseX+50 + 'px';
  image.style.top = mouseY+50 + 'px';
});

var links = document.querySelectorAll(".screen2 a");

links.forEach(link=>{
    link.addEventListener("mouseover", function(e){
        image.src = "img/"+e.target.id+"-min.jpg";
    });
})

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var input = document.querySelector(".search input");
var searchLinks = document.querySelectorAll(".link-list a");

input.addEventListener("input", function(){

  var inputValue = removeAccents(input.value.toLowerCase());

  searchLinks.forEach(link => {
    if (inputValue != ""){
      if (link.id.includes(inputValue)){
        link.classList.add("active");
      }else{
        link.classList.remove("active");
      }
    }else{
      link.classList.remove("active");
    }
  })
})