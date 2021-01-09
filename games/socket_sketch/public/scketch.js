var socket;
function setup(){
    createCanvas(200,200);
    background(0);

    socket = io.connect('http://127.0.0.1:3000');
    socket.on('mouse',newDrawing);
}
function newDrawing(data){
    console.log(data);
    noStroke();
    fill(255,0,255);
    ellipse(data.x,data.y,24,24);
}
function mouseDragged(){
    var data = {
        x:mouseX,
        y:mouseY
    }
     console.log(data)
    socket.emit('mouse',data);
    fill(255);
     noStroke();
    ellipse(mouseX,mouseY,24,24);
}
function draw(){
   
    
}