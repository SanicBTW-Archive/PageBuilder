var addedChilds = 0;
var platform = "";
var ver = "BETA 0.0.16";

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

    /**
     * 
     * @param {string} path The background path
     */
    setBackground(path)
    {
        document.body.style = `background-image: url('${path}')`;
    }

    /**
     * 
     * @param {string} path The image path
     * @param {string} id The Element ID
     */
    addImage(path, id)
    {
        var img = document.createElement("img");
        img.src = path;
        img.id =  `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(img);
    }

    /**
     * 
     * @param {string} text The text to display
     * @param {string} type Type of heading (h1 - h2 - h3 - h4 - h5 - h6)
     * @param {string} id 
     */
    addHeader(text, type, id)
    {
        var header = document.createElement(type);
        header.innerText = text;
        header.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(header);
    }

    /**
     * 
     * @param {string} text The text to display
     * @param {string} id The Element ID
     */
    addParagraph(text, id)
    {
        var paragraph = document.createElement("p");
        paragraph.innerText = text;
        paragraph.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(paragraph);
    }

    /**
     * 
     * @param {string} path The audio path
     * @param {boolean} showControls Should it show controls?
     * @param {string} id The Element ID
     */
    addAudio(path, showControls, id)
    {
        var audio = document.createElement("audio");
        audio.src = path;
        audio.controls = showControls;
        audio.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(audio);
    }

    /**
     * 
     * @param {string} text Text to display
     * @param {function} onClick The click function you want to execute when button clicked
     * @param {string} id The Element ID
     */
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

    /**
     * 
     * @param {string} id The Element ID to assign the style to
     * @param {string} style The style you want to assign to the element
     */
    setStyle(id, style)
    {
        var element = document.getElementById(id);
        element.style = style;
    }

    /**
     * 
     * @param {string} style Add CSS styling to the body
     */
    setBodyStyle(style)
    {
        document.body.style.cssText += style;
    }

    /**
     * 
     * @param {string} link Where does the "A" redirects you to
     * @param {string} text Text to display
     * @param {string} id The Element ID
     */
    addAnchor(link, text, id)
    {
        var anch = document.createElement("a");
        anch.href = link;
        anch.innerText = text;
        anch.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(anch);
    }

    /**
     * 
     * @param {string} toAppend What is going to be appended (as a child)
     * @param {string} where Where the element is going to be appended (as a child)
     */
    appendTo(toAppend, where)
    {
        var appendLoc = document.getElementById(where);
        var whatTo = document.getElementById(toAppend);
        appendLoc.appendChild(whatTo);
    }
    
    /**
     * 
     * @param {string} id The Element ID
     */
    addDiv(id)
    {
        var newDiv = document.createElement("div");
        newDiv.id = `${id != null ? id : addedChilds}`;
        addedChilds += 1;
        document.body.append(newDiv);
    }

    /**
     * 
     * @param {string} id The Element ID you want to assign the class to
     * @param {string} className The element class
     */
    setClass(id, className)
    {
        var element = document.getElementById(id);
        element.className = className;
    }

    /**
     * 
     * @param {string} className The element class name
     * @param {string} style What the class style should be
     */
    setClassStyle(className, style)
    {
        var newCSS = document.createElement("style");
        newCSS.innerHTML = `.${className} { ${style} }`;
        document.head.appendChild(newCSS);
    }
}