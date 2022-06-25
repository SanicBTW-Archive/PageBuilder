setBackground('./Nuevo proyecto.png');
addHeader("hola", "h1", "header1");
addParagraph("tu puta madre me da sexo a diario", "p1");
addAudio('./test.ogg', false, "audio1");

addButton("holaa", function xd() {
    alert("hola")
}, "button1");

addButton("play", function play() {
    var the = document.getElementById("audio1");
    the.play();
}, "buttonplay");

addButton("stop", function play() {
    var the = document.getElementById("audio1");
    the.pause();
}, "buttonstop");

setStyle("buttonplay", "background-color: black; color: white;");
setGlobalStyle("font-family: 'Courier New', Courier, monospace; color: white;");