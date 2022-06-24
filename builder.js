var addedChilds = 0;

function setBG(path)
{
    document.body.style = `background-image: url('${path}')`;
}

function addIMG(path)
{
    var img = document.createElement("img");
    img.src = path;
    img.id = addedChilds;
    alert(img.id);
    addedChilds += 1;
    document.body.append(img);
}