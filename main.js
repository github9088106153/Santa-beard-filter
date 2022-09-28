noseX=0;
noseY=0;
function preload() { e2= loadImage('https://i.postimg.cc/xd3Zdx3M/49-496390-santa-beard-png-transparent-png-removebg-preview.png');}

function setup() {
  canvas = createCanvas(700, 520);
  canvas.center();
video= createCapture(VIDEO);
video.size(640,480);
video.hide();

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Done Loading"); 
}

function gotPoses(results){
  if(results.length>0){
      console.log(results);
      noseX= results[0].pose.nose.x;
      noseY= results[0].pose.nose.y;
      console.log("nose x="+ results[0].pose.nose.x);
      console.log("nose y="+ results[0].pose.nose.y);
  }
}
  
  function draw(){
    image(video,0,0,700, 520);
    image(e2,noseX-220,noseY-300,600,600);
  }
  
  function take() {
    save("you.jpg");
  }
  