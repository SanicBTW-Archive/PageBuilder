var addedChilds = 0;

function setBackground(path)
{
    document.body.style.cssText = `background-image: url('${path}')`;
}

function addImage(path)
{
    var img = document.createElement("img");
    img.src = path;
    img.id = `${addedChilds}`;
    addedChilds += 1;
    document.body.append(img);
}

function addHeader(text, type)
{
    var header = document.createElement(type);
    header.innerText = text;
    header.id = `${addedChilds}`;
    addedChilds += 1;
    document.body.append(header);
}

function addParagraph(text)
{
    var paragraph = document.createElement("p");
    paragraph.innerText = text;
    paragraph.id = `${addedChilds}`;
    addedChilds += 1;
    document.body.append(paragraph);
}