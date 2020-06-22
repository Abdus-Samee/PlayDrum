var list = document.querySelectorAll("button");
for(var i = 0; i < list.length; i++){
  list[i].addEventListener("click", handleClick);
}

function handleClick(){
  var txt = this.innerText;
  makeSound(txt);
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
})

function makeSound(k){
  switch(k){
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
}
