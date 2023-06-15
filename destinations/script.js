window.addEventListener("load", function(){
    let intro = document.querySelector(".intro");
    intro.classList.remove("visible");
    setTimeout(function() {
        document.body.classList.add("loaded");
    }, 2000);
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