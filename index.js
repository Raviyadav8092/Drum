
//deteccting button press

var drumlength = document.querySelectorAll(".drum").length;

for(var i=0 ; i<drumlength ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function()  {

      var buttonInnerHtml = this.innerHTML;

      makeSound(buttonInnerHtml);

      buttonanimation(buttonInnerHtml);

});

}

//detecting keyboard press

    document.addEventListener('keydown',function(event)
    {

        makeSound(event.key);

        buttonanimation(event.key);

    });



    function makeSound(key){

      switch (key)
       {
          case "w":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;

          case "a":
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;

          case "s":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;

          case "d":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;

          case "j":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                      break;

          case "k":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;

          case "l":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;

          default: console.log(buttonInnerHtml);

          }

    }

    function buttonanimation(currentkey){

        var activeButton = document.querySelector("."  + currentkey);

        activeButton.classList.add("pressed");  //adding css pressed class



        setTimeout(function(){

          activeButton.classList.remove("pressed");   //setTimeout will set time after which a certain thing will happen

        },100);                                     //IN this case it is set to 0.1 sec after which pressed class will get removed.

    }
