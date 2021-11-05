var pos = document.getElementById("PacMan").getBoundingClientRect().left;
console.log(pos)
const pacArray = [
    ['static/PacMan1.png', 'static/PacMan2.png'],
    ['static/PacMan3.png', 'static/PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    // Use setTimeout to call Run every 200 millesecs
    setTimeout(Run, 200);
}

function checkPageBounds(direction, imgWidth) {
    let windowWidth  = document.getElementById('head-pac').innerWidth || document.getElementById('head-pac').clientWidth ||
        document.getElementById('head-pac').clientWidth;

    if (pos > document.getElementById("head-pac").getBoundingClientRect().right-100){
        direction = 1;
    }
    if (pos<document.getElementById("head-pac").getBoundingClientRect().left-20) {
        direction = 0;
    }

    return direction;
}

Run();