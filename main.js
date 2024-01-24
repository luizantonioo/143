music=""
music2="";
musicstatus=""
music2status="";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload(){
 music = loadSound("music.mp3");
 music2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);//image(fonte da imagem, posição x e y, larg, alt)
    image(video, 0, 0, 600, 500);//image(fonte da imagem, posição x e y, larg, alt)
    musicstatus = music.isPlaying();
    music2status = music2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
if(scoreLeftWrist > 0.2){
circle(200,200);
stop();
if(music1 == false){
leftWrist = music1.reprodution;
song="music1";
}
}}
function modelLoaded(){
    console.log("PoseNet foi inicializado!");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX +"rightWristY = "+rightWristY);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = "+ leftWristX +"leftWristY = "+leftWristY);
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
}}