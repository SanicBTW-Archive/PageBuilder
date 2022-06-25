var elements = new ElementsHandler();
var styles = new StylesHandler();

styles.setBackground("./src/images/mean.jpeg", "repeat", "auto");

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

elements.appendTo("mainDiv", "first");

elements.appendTo("why", "mainDiv");