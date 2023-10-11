var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textBox");


   function start() { 
    Textbox.innerHTML = ""; 
    recognition.start();
 }


recognition.result = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    speak()
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = document.getElementById("textBox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera = document.getElementById("Camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
})

