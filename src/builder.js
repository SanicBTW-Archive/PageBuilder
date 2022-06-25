var addedChilds = 0;
var platform = "";
var ver = "BETA 0.0.14";

class Builder
{
    constructor()
    {
        const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            ? 'Mobile'
            : 'Desktop';
        platform = detectDeviceType();
        console.log("Platform: " + platform);
        //check builder version
        console.log("CURRENT VERSION: " + ver);
    }

    setBackground(path)
    {
        document.body.style = `background-image: url('${path}')`;
    }

    addImage(path, id)
    {
        var img = document.createElement("img");
        img.src = path;
        img.id =  `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(img);
    }

    addHeader(text, type, id)
    {
        var header = document.createElement(type);
        header.innerText = text;
        header.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(header);
    }

    addParagraph(text, id)
    {
        var paragraph = document.createElement("p");
        paragraph.innerText = text;
        paragraph.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(paragraph);
    }

    addAudio(path, showControls, id)
    {
        var audio = document.createElement("audio");
        audio.src = path;
        audio.controls = showControls;
        audio.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(audio);
    }

    addButton(text, onClick, id)
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

    setStyle(id, style)
    {
        var element = document.getElementById(id);
        element.style = style;
    }

    setBodyStyle(style)
    {
        document.body.style.cssText += style;
    }

    addAnchor(link, text, id)
    {
        var anch = document.createElement("a");
        anch.href = link;
        anch.innerText = text;
        anch.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(anch);
    }

    appendTo(toAppend, where)
    {
        var appendLoc = document.getElementById(where);
        var whatTo = document.getElementById(toAppend);
        appendLoc.appendChild(whatTo);
    }
    
    addDiv(id)
    {
        var newDiv = document.createElement("div");
        newDiv.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(newDiv);
    }
}