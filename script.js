document.addEventListener('DOMContentLoaded', () => {
    // Project Slider Logic
    const track = document.getElementById('projectsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        // Calculate the distance to scroll based on the width of a card plus the gap
        const getScrollAmount = () => {
            const card = track.querySelector('.project-card');
            if (card) {
                // Get the card width and the gap from the CSS layout
                const cardWidth = card.offsetWidth;
                const gap = parseInt(window.getComputedStyle(track).gap) || 0;
                return cardWidth + gap;
            }
            return 300; // Fallback
        };

        nextBtn.addEventListener('click', () => {
            track.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});