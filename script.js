let circle = document.querySelector('.circle');
let moveBy = 10;

window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
    }
});

var world = [];
var worldDict = {
    0: 'wall',
    1: 'blank',
    2: 'sushi',
    3: 'onigiri'
}

function drawWorld(){
    output = "";
    var worldheight = 15;
    var worldwidth = 15;
    for(var row = 0; row < worldheight; row++){
        world.push([])
        output += "<div class = 'row'>"

            for (var col = 0; col < worldwidth; col++){
                //first row is all walls
                if(row == 0 || row == 14 || col==0 || col==14){
                    output += "<div class = '" + worldDict[0] +"'> </div>";
                    world[row].push(0);
                }else{
                  world[row].push(Math.floor(Math.random()*4));
                  output += "<div class = '" + worldDict[world[row][col]] +"'></div>";
                }
            }


        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}
drawWorld();