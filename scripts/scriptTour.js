const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else {
        entry.target.classList.remove('show');
      }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const buttonTicket = document.getElementById("tickets");

buttonTicket.addEventListener("click", () => {
    window.open('https://afisha.yandex.kz/artist/saluki?city=astana', '_blank');
});

let x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 