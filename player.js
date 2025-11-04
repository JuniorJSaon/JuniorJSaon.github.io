(() => {
    const clock = document.getElementById("clock");
    const audio = new Audio(`sounds/tic-tac.MP3`);
    
    // Preload the audio
    audio.preload = "auto";

    function getTimeRemaining() {
        const now = new Date(); 
        const nextYear = now.getFullYear() + 1; 
        const targetDate = new Date(nextYear, 4, 4, 9, 0, 0); 
    
        const diffMs = targetDate - now;
    
        if (diffMs <= 0) {
            console.log("Run out of time!");
            return;
        }
    
        const diffSec = Math.floor(diffMs / 1000);
        const days = Math.floor(diffSec / (3600 * 24));
        const hours = Math.floor((diffSec % (3600 * 24)) / 3600);
        const minutes = Math.floor((diffSec % 3600) / 60);
        const seconds = diffSec % 60;
    
        // Reset and play each time
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Audio play failed:", e));
        
        clock.textContent = `Time left: ${days}d ${hours}h ${minutes}min ${seconds}sec.`;
    }
    
    getTimeRemaining();
    setInterval(getTimeRemaining, 1000);
})();