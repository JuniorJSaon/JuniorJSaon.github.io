
( function () {
     console.log(arguments);

     const clock = document.getElementById("clock");
     const audio = new Audio(`sounds/${"tic-tac.MP3"}`);

     function getTimeRemaining() {
          const now = new Date(); 
          const nextYear = now.getFullYear() + 1; 
          const targetDate = new Date(nextYear, 4, 4, 9, 0, 0); 
      
          const diffMs = targetDate - now;
      
          if (diffMs <= 0) {
              console.log("Już po czasie!");
              return;
          }
      
          const diffSec = Math.floor(diffMs / 1000);
          const days = Math.floor(diffSec / (3600 * 24));
          const hours = Math.floor((diffSec % (3600 * 24)) / 3600);
          const minutes = Math.floor((diffSec % 3600) / 60);
          const seconds = diffSec % 60;
          
          audio.play();
          clock.textContent = `Time left: ${days}d ${hours}h ${minutes}min ${seconds}sec.`;
     }
     getTimeRemaining();
     setInterval(getTimeRemaining, 1000);
}) ( [ ...[1 ,2 ,3 ] ] );