/*---------------------------------\
            General           
\----------------------------------*/
window.onload = function () {

    /*---------------------------------\
            Pop out for modal         
    \----------------------------------*/

    let video = document.querySelector('video');
    let close = document.querySelector('.fa-times-circle')

    video.addEventListener('click', () => {
        video.classList.add('modal');
        video.setAttribute('controls', '');
        close.classList.add('delete'); 
    })
    close.addEventListener('click', () => {
        close.classList.remove('delete');
        video.classList.remove('modal'); 
        video.removeAttribute('controls');
        video.pause();
    })

    /*---------------------------------\
            Carousel Images        
    \----------------------------------*/
    
    /*---- To save variables ----------*/

        const images = [
            'https://images.unsplash.com/photo-1621586198754-3704e7d5ede4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aG1lbnZRaFVteE18fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1551033541-2075d8363c66?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1619434285112-daedd7ddeba7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ];
        const timeInterval = 4000;
        let position = 0;
        let image = document.getElementById('image');
     
    /*---- Declared functions ----------*/

        function nextImage() {
            if(position >= images.length - 1) {
                position = 0;
            } else {
                position++;
            }
            renderImage();
        }
       
        function renderImage () {
            image.style.backgroundImage = `url(${images[position]})`;
            image.style.backgroundRepeat = "no-repeat";
            image.style.backgroundSize = "cover";
        }
    
        function playInterval() {
            setInterval(nextImage, timeInterval);    
        }
        
    /*---- Init functions ----------*/
    
        playInterval();
        renderImage();
}
