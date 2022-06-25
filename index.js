var elements = new ElementsHandler();
var styles = new StylesHandler();

styles.setBackground("./src/images/mean.jpeg");

elements.addDiv("mainDiv");

styles.setBodyStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");
styles.setClassStyle("mainStyle", "background-color: white;");

elements.setClass("mainDiv", "mainStyle");

elements.addHeader("Everyone is so mean 2 me", "h1", "why");

elements.appendTo("why", "mainDiv");