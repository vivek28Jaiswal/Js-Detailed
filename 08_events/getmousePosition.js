let body = document.querySelector('body');
let square = document.querySelector('.square');

body.addEventListener('click', function(e){
    // Store mouse coordinates
    let clientMouse = { x: e.clientX, y: e.clientY };
    
    // Move the square to the clicked position
    square.style.position = 'absolute';
    square.style.left = clientMouse.x + 'px';
    square.style.top = clientMouse.y + 'px';
});
