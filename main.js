function preload() {
    clownNose = loadImage("clown_nose_image.jpg");
}
nose_x = 0;
nose_y = 0;
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose, nose_x, nose_y, 30, 30);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x-15;
        nose_y = results[0].pose.nose.y-15;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function takeSnapshot() {
    save("clown-nose-pic.png");
}




