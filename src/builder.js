var addedChilds = 0;

function setBackground(path)
{
    document.body.style = `background-image: url('${path}')`;
}

function addImage(path, id)
{
    var img = document.createElement("img");
    img.src = path;
    img.id =  `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(img);
}

function addHeader(text, type, id)
{
    var header = document.createElement(type);
    header.innerText = text;
    header.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(header);
}

function addParagraph(text, id)
{
    var paragraph = document.createElement("p");
    paragraph.innerText = text;
    paragraph.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(paragraph);
}

function addAudio(path, showControls, id)
{
    var audio = document.createElement("audio");
    audio.src = path;
    audio.controls = showControls;
    audio.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(audio);
}

function addButton(text, onClick, id)
{
    var button = document.createElement("button");
    button.addEventListener("click", (click) => {
        onClick();
    });
    button.type = "button";
    button.innerText = text;
    button.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(button);
}

function setStyle(id, style)
{
    var element = document.getElementById(id);
    element.style = style;
}

function setGlobalStyle(style)
{
    document.body.style.cssText += style;
}

function addAnchor(link, text, id)
{
    var anch = document.createElement("a");
    anch.href = link;
    anch.innerText = text;
    anch.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(anch);
}

//might improve it
function appendTo(toAppend, where)
{
    var appendLoc = document.getElementById(where);
    var whatTo = document.getElementById(toAppend);
    appendLoc.appendChild(whatTo);
}

function addDiv(id)
{
    var newDiv = document.createElement("div");
    newDiv.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(newDiv);
}