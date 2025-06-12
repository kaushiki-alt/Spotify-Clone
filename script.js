document.addEventListener('DOMContentLoaded', () => {
    const leftTop = document.querySelector('.left-top');
    const heading = document.querySelector('.heading');
    const leftBottom = document.querySelector('.left-bottom')
    const trendingSongsList = document.querySelector('.trendingSongs')
    const rightbar = document.querySelector('.rightbar-wrapper')

    leftTop.addEventListener('scroll', () => {
        if (leftTop.scrollTop > 0) {
            heading.classList.add('shadow');
            leftBottom.classList.remove('border-top')

        } else {
            heading.classList.remove('shadow');
            leftBottom.classList.add('border-top')


        }
    });

    trendingSongsList.addEventListener('scroll', ()=>{
        if(trendingSongsList.scrollLeft > 0){
            trendingSongsList.classList.add('shadow');
        } else{
            trendingSongsList.classList.remove('shadow')
        }
    })
});

// For resing the leftbar
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





