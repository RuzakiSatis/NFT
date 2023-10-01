const colors = ['hue-rotate(36deg) brightness(1.5)', 'hue-rotate(360deg) brightness(1)'];
let currentColorIndex = 0;

function changeBackgroundColor(){
    var img = document.getElementById('img_blurr');
    const newColor = colors[currentColorIndex];
    img.style.filter = newColor;

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
setInterval(changeBackgroundColor, 2000);
    

