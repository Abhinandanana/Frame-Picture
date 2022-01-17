function preload(){

}

function setup(){
    canvas= createCanvas(500, 500);
canvas.position(500, 100);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    rect(1, 40, 400, 350);
    image(video, 70, 90, 250, 250);
    circle(30, 70, 50);
    circle(370, 70, 50);
    circle(30, 360, 50);
    circle(370, 360, 50);
}

function snapshot(){
    save('frame_picture.png');
}