var addedChilds:number = 0;

export function setBackground(path:string)
{
    document.body.style.cssText = `background-image: url('${path}')`;
}

export function addImage(path:string)
{
    var img = document.createElement("img");
    img.src = path;
    img.id = `${addedChilds}`;
    addedChilds += 1;
    document.body.append(img);
}

export function addHeader(text:string, type:any)
{
    var header = document.createElement(type);
    header.innerText = text;
    header.id = `${addedChilds}`;
    addedChilds += 1;
    document.body.append(header);
}