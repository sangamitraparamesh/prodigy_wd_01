// Glow animation for course overview cards only
const cards = document.querySelectorAll('.cards .card');
cards.forEach(card => {
    let glow = 0;
    setInterval(() => {
        glow = (glow + 1) % 100;
        card.style.boxShadow = `0 0 ${20 + glow/2}px rgba(180,0,255,0.5), 0 0 ${50 + glow/2}px rgba(154,0,230,0.5)`;
    }, 100);
});
