var addedChilds = 0;
var platform = "";
var ver = "BETA 0.0.15";

class Builder
{
    constructor()
    {
        const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            ? 'Mobile'
            : 'Desktop';
        platform = detectDeviceType();
        console.log("Platform: " + platform);

        //might improve it soon
        var versionFileGithub = fetch('https://raw.githubusercontent.com/SanicBTW/PageBuilder/master/version.txt');
        versionFileGithub.then((resp) => {
            resp.text().then((gitVer) => {
                console.log("GITHUB VERSION: " + gitVer);
                console.log("CURRENT VERSION: " + ver);
                if(ver > gitVer)
                {
                    console.warn("[WARNING - Version checker]\nCurrent version is newer than the old version\nPush commit or check the Github version");
                }
                if(ver == gitVer)
                {
                    console.info("[INFO - Version checker]\nUp to date");
                }
                if(ver < gitVer)
                {
                    console.error("[ERROR - Version checker]\nGithub version is newer\nCheck the current version and check the Github version");
                }
            });
        });
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

    setClass(id, className)
    {
        var element = document.getElementById(id);
        element.className = className;
    }
}