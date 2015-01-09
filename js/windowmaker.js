var makeWindow = function (titletext, width, height) {
    var outer = document.createElement("div");
    outer.className = "window";
    outer.style.width = width + "px";
    outer.style.height = height + "px";
    outer.onclick = function (e) {
        if(e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
            console.log(e.target.tagName);
            var c = document.getElementsByClassName("window");
            for(var i = 0; i < c.length; i++) {
                if(c[i] !== this) {
                    c[i].style.zIndex = "2";
                }
            }
            this.style.zIndex = "3";
        }
    };
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
    outer.style.zIndex = "3";
    var c = document.getElementsByClassName("window");
    for(var i = 0; i < c.length; i++) {
        if(c[i] !== outer) {
            c[i].style.zIndex = "2";
        }
    }
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
