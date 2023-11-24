const buttonPlay = document.getElementById("play");
const buttonPause = document.getElementById("pause");
let video = document.getElementById("video"); 

buttonPlay.addEventListener("click",() => {
  video.play(); 
});

buttonPause.addEventListener("click",() => {
  video.pause(); 
})

$("#cover_1").hover(
  function() {
    $("#cover_1").css("box-shadow", "3rem 3rem 1rem rgba(0, 0, 0, 0.103))");
    $("#cover_1").css("transform", "translateY(-.35em)");
  }, function() {
    $("#cover_1").css("transform", "translateY(0em)");
  }
);

$("#cover_2").hover(
  function() {
    $("#cover_2").css("box-shadow", "3rem 3rem 1rem rgba(0, 0, 0, 0.103))");
    $("#cover_2").css("transform", "translateY(-.35em)");
  }, function() {
    $("#cover_2").css("transform", "translateY(0em)");
  }
);

$("#cover_3").hover(
  function() {
    $("#cover_3").css("box-shadow", "3rem 3rem 1rem rgba(0, 0, 0, 0.103))");
    $("#cover_3").css("transform", "translateY(-.35em)");
  }, function() {
    $("#cover_3").css("transform", "translateY(0em)");
  }
);

$("#cover_4").hover(
  function() {
    $("#cover_4").css("box-shadow", "3rem 3rem 1rem rgba(0, 0, 0, 0.103))");
    $("#cover_4").css("transform", "translateY(-.35em)");
  }, function() {
    $("#cover_4").css("transform", "translateY(0em)");
  }
);

$("#cover_5").hover(
  function() {
    $("#cover_5").css("box-shadow", "3rem 3rem 1rem rgba(0, 0, 0, 0.103))");
    $("#cover_5").css("transform", "translateY(-.35em)");
  }, function() {
    $("#cover_5").css("transform", "translateY(0em)");
  }
);

$("#cover_6").hover(
  function() {
    $("#cover_6").css("box-shadow", "3rem 3rem 1rem rgba(0, 0, 0, 0.103))");
    $("#cover_6").css("transform", "translateY(-.35em)");
  }, function() {
    $("#cover_6").css("transform", "translateY(0em)");
  }
);

