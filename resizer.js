document.addEventListener('DOMContentLoaded', () => {
    const resizer = document.querySelector('.resizer');
    const leftbar = document.querySelector('.leftbar');
    
    let startX, startWidth;

    resizer.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startWidth = leftbar.offsetWidth;
        
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
        resizer.classList.add('resizing');
    });

    function resize(e) {
        // Calculate width based on drag direction
        const dx = e.clientX - startX;
        const newWidth = startWidth + dx;
        
        // Only allow making it wider (up to 450px)
        if (newWidth >= 280 && newWidth <= 450) {
            leftbar.style.width = `${newWidth}px`;
        }
    }

    function stopResize() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        resizer.classList.remove('resizing');
    }
});
