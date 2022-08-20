function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes)
}
noseX=0;
noseY=0;
function preload()
{
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function modelloaded()
{
    console.log("modelisloaded")
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-120;
        noseY=results[0].pose.nose.y-15;
    }
}
function draw()
{
    image(video,0,0,400,400);
    image(mustache,noseX,noseY,80,35)
}
function take_snapshot()
{
    save("myfilterimage.png")
}