// English Example
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Βγάλε το createConfetti() έξω από το listener για να είναι πιο καθαρό
const createConfetti = () => {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = ['#ff69b4', '#ff1493', '#ffffff', '#ffd700'][Math.floor(Math.random() * 4)];
        document.body.appendChild(confetti);
        setTimeout(() => { confetti.remove(); }, 5000);
    }
};

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
// English Example
yesBtn.addEventListener('click', () => {
    // 1. Πηγαίνουμε στην κορυφή της σελίδας
    window.scrollTo(0, 0);

    // 2. Αλλάζουμε το στυλ του body για να κεντράρουμε τη νέα σελίδα
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden'; // Σταματάμε το scroll

    // 3. Αντικατάσταση περιεχομένου
    document.body.innerHTML = `
        <div class="success-page">
            <div class="image-wrapper">
                <img src="assets/4.jpeg" alt="Us Together" class="final-img">
            </div>
            <h1 class="success-text">A deal it's a deal! 🌹</h1>
        </div>
    `;

    // 4. Εκκίνηση Confetti
    createConfetti();
});

