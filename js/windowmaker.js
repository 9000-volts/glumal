var makeWindow = function (titletext, width, height) {
    var outer = document.createElement("div");
    outer.className = "window";
    outer.style.width = width + "px";
    outer.style.height = height + "px";
    var close = document.createElement("div");
    close.className = "window-close";
    var title = document.createElement("div");
    title.className = "window-title";
    title.innerHTML = titletext;
    var box = document.createElement("div");
    box.className = "window-box";
    var content = document.createElement("div");
    content.className = "window-content";
    document.body.appendChild(outer);
    outer.appendChild(close);
    outer.appendChild(title);
    outer.appendChild(box);
    box.appendChild(content);
    close.onclick = function () {
        document.body.removeChild(outer);
    };
    new Draggable(outer);
    return {
        window: outer,
        title: title,
        content: content
    };
};
