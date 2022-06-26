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
elements.addBreakline("break");
styles.setStyle("why", "text-align: center;");

elements.addAnchor("https://discord.com", "discord", "centerHeader");
elements.addAnchor("https://discord.com", "aka 'SanicBTW', 'Sanic', 'Saniczoned'", "alsoKnownAs");
elements.setAttribute(["centerHeader", "alsoKnownAs"],"target", "_blank");
elements.addParagraph("and idk what else", "lol");

styles.setStyle(["centerHeader", "alsoKnownAs", "lol"], "font-family: 'Courier New', Courier, monospace; text-align: left;");

elements.appendTo("mainDiv", "first");

elements.appendTo(["centerHeader", "alsoKnownAs", "lol"], "mainDiv");