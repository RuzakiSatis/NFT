let bg = document.querySelector('.mouse-parallax-bg');
let _background = document.querySelector('._background');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    _background.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
});