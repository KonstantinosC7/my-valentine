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
    // 1. Πυροδότηση Κομφετί αμέσως
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
    });

    // 2. ΚΑΘΑΡΙΣΜΟΣ στυλ του body (Πολύ σημαντικό!)
    document.body.style.display = 'block'; // Αλλάζουμε το flex σε block
    document.body.style.height = 'auto';

    // 3. Αλλαγή Περιεχομένου
    document.body.innerHTML = `
        <div class="success-page">
            <div class="image-wrapper">
                <img src="assets/4.jpeg" alt="Us Together" class="final-img">
            </div>
            <h1 class="success-text">A deal it's a deal! 🌹</h1>
        </div>
    `;
    
    // 4. Συνεχόμενο κομφετί
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff69b4'] });
        confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff69b4'] });
        if (Date.now() < end) { requestAnimationFrame(frame); }
    }());
});