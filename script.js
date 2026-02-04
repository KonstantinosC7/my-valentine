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

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = "<h1>Can't wait for our date! ❤️🌹</h1>";
});