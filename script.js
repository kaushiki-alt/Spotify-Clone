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



tr