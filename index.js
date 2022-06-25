setBackground('./Nuevo proyecto.png');
setGlobalStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");
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

addButton("add button", function add() {
    var newB = document.createElement("button");
    newB.innerText = `Child: ${addedChilds}`;
    newB.id = `${addedChilds}`;
    addedChilds += 1;
    newB.type = "button";
    newB.addEventListener("click", (click) => {
        alert("Just clicked: " + newB.innerText)
    })
    document.body.append(newB);
});

setStyle("buttonplay", "background-color: black; color: white;");