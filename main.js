Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"enviroment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'>"
    })
}

console.log("ml5 version:"+ml5.version);
classifer = ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("modelloaded");
}

function check(){
img=document.getElementById("captured_img");
classifer.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}