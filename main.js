status="";
inputObject="";
function preload(){

}
function setup(){
canvas=createCanvas(640,420);
canvas.center;
video=createCapture(VIDEO);
video.size(640,420);
video.hide();
}
function startButton(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    inputObject=document.getElementById("inputs").value;

}
function modelLoaded(){
console.log("Model Loaded");    
status=true;
}
function draw(){
image(video,0,0,640,420);    
}