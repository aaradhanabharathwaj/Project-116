noseX=0
noseY=0
function preload(){
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}
function setup(){
    canvas=createCanvas(390,300);   
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(350,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,390,300);
    image(lipstick,noseX,noseY,50,50);
}
function take_snap(){
    save("Animation Image.png");
}
function modelLoaded(){
    console.log("PoseNet is initialized !!")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX);
        console.log("Nose Y = "+noseY);
    }
}