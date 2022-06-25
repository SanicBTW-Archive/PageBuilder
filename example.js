setBackground('./src/images/template/Nuevo proyecto.png');
setGlobalStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");

addDiv("mainDiv");
setStyle("mainDiv", "background-color: aqua;");

addHeader("hola", "h1", "header1");
appendTo("header1", "mainDiv");

addParagraph("tu puta madre me da sexo a diario", "p1");
appendTo("p1", "mainDiv");

addAudio('./src/audio/template/test.ogg', true, "audio1");
appendTo('audio1', "mainDiv");

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

addAnchor("https://discord.com", "discord", "discordAnch1");
setStyle('discordAnch1', "color: transparent; font-size: 0px; margin-left: 1rem;")

addImage("./src/images/template/pyro.png", "pyrojaja");
setStyle("pyrojaja", "width: 50rem")

appendTo("pyrojaja", "discordAnch1");

setStyle("buttonplay", "background-color: black; color: white;");

if(platform == "Desktop")
{
    addHeader("Sup desktop user", "h1", "daPlatform");
}
else
{
    addHeader("Sup mobile user", "h1", "daPlatform");
}

appendTo("daPlatform", "mainDiv");