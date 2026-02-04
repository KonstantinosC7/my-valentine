// English Example
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
    // Ορίζουμε ένα περιθώριο (padding) για να μην ακουμπάει τις άκρες
    const padding = 50; 
    
    // Υπολογισμός μέγιστων διαστάσεων εντός του ορατού παραθύρου
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    // Τυχαία θέση που ξεκινάει τουλάχιστον από το padding
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    noBtn.style.position = 'fixed'; // Χρησιμοποιούμε fixed για να μένει στην οθόνη
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// English Example
yesBtn.addEventListener('click', () => {
    // 1. Καθαρισμός και Αλλαγή Σελίδας
    document.body.style.display = 'block';
    document.body.innerHTML = `
        <div class="success-page">
            <div class="image-wrapper">
                <img src="assets/4.jpeg" alt="Us Together" class="final-img">
            </div>
            <h1 class="success-text">A deal it's a deal! 🌹</h1>
        </div>
    `;

    // 2. Χειροκίνητο Confetti Function
    const createConfetti = () => {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            
            // Τυχαία θέση, χρώμα και ταχύτητα
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = ['#ff69b4', '#ff1493', '#ffffff', '#ffd700'][Math.floor(Math.random() * 4)];
            confetti.style.opacity = Math.random();
            
            document.body.appendChild(confetti);

            // Διαγραφή του στοιχείου αφού πέσει για να μην βαραίνει το site
            setTimeout(() => { confetti.remove(); }, 5000);
        }
    };

    createConfetti();
});