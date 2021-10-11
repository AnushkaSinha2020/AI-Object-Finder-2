objects=[];
status="";
function setup(){
    canvas= createCanvas(380, 380);
    canvas.position(580, 310);
    video= createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
        console.log("Model Loaded");
        status= true;
}

function draw() { 
    image(video, 0, 0, 380, 380); 
}

function gotResult(error , result){
    if (error){
        console.log(error);
    }
    else{
    console.log(result);
}
}