// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";
function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace('px','');
    const left = parseInt(leftNumber,10);
    if (left>0){
        dodger.style.left = `${left - 10}px`;
    }
}
function moveDodgerRight(){
    const rightNumber = dodger.style.left.replace('px','');
    const right = parseInt(rightNumber,10);
    if (right<360){
        dodger.style.left = `${right + 10}px`;
    }
}
function moveDodgerDown(){
    const downNumber = dodger.style.bottom.replace('px','');
    const down = parseInt(downNumber,10);
    if (down > 0){
        dodger.style.bottom = `${down - 10}px`;
    }
}
function moveDodgerUp(){
    const upNumber = dodger.style.bottom.replace('px','');
    const upper = parseInt(upNumber,10);
    if (upper < 380){
        dodger.style.bottom = `${upper + 10}px`;
    }
}
document.addEventListener('keydown',function(e){
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight'){
        moveDodgerRight();
    } else if (e.key === 'ArrowDown'){
        moveDodgerDown();
    } else if (e.key === 'ArrowUp'){
        moveDodgerUp();
    }
})