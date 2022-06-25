var elements = new ElementsHandler();
var styles = new StylesHandler();

styles.setBackground("./assets/images/mean.jpeg", "repeat", "auto");
styles.setFavicon('./assets/images/smiley2.png');

styles.setBodyStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");

if(platform == "Desktop")
{
    styles.setClassStyle("outer", `width: 100%; height: 98vh; display: flex; justify-content: center; align-items: center;`);
}
else
{
    styles.setClassStyle("outer", `width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center; `);
}

elements.addDiv("first");
elements.addDiv("mainDiv");
elements.setClass("first", "outer");

elements.addHeader("Everyone is so mean to me", "h1", "why");
styles.setStyle("why", "text-align: center;");
elements.addAudio('./assets/audio/test.ogg', true, "audio1");

elements.appendTo("mainDiv", "first");

elements.appendTo("why", "mainDiv");
elements.appendTo("audio1", "mainDiv");