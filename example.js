var base = new Builder();
base.setBackground('./src/images/template/Nuevo proyecto.png');
base.setBodyStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");

base.addDiv("mainDiv");
base.setStyle("mainDiv", "background-color: aqua;");

base.addHeader("hola", "h1", "header1");
base.appendTo("header1", "mainDiv");

base.addParagraph("tu puta madre me da sexo a diario", "p1");
base.appendTo("p1", "mainDiv");

base.addAudio('./src/audio/template/test.ogg', true, "audio1");
base.appendTo('audio1', "mainDiv");

base.addButton("holaa", function xd() {
    alert("hola")
}, "button1");

base.addButton("play", function play() {
    var the = document.getElementById("audio1");
    the.play();
}, "buttonplay");

base.addButton("stop", function play() {
    var the = document.getElementById("audio1");
    the.pause();
}, "buttonstop");

base.addButton("add button", function add() {
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

base.addAnchor("https://discord.com", "discord", "discordAnch1");
base.setStyle('discordAnch1', "color: transparent; font-size: 0px; margin-left: 1rem;")

base.addImage("./src/images/template/pyro.png", "pyrojaja");
base.setStyle("pyrojaja", "width: 50rem")

base.appendTo("pyrojaja", "discordAnch1");

base.setStyle("buttonplay", "background-color: black; color: white;");

if(platform == "Desktop")
{
    base.addHeader("Sup desktop user", "h1", "daPlatform");
}
else
{
    base.addHeader("Sup mobile user", "h1", "daPlatform");
}

base.appendTo("daPlatform", "mainDiv");