addDiv("mainDiv");
setGlobalStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");

if(platform == "Desktop")
{
    addHeader("Sup desktop user", "h1", "daPlatform");
}
else
{
    addHeader("Sup mobile user", "h1", "daPlatform");
}

appendTo("daPlatform", "mainDiv");