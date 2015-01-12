var makeWindow = function (titletext, width, height) {
    var outer = document.createElement("div");
    outer.className = "window";
    outer.style.width = width + "px";
    outer.style.height = height + "px";
    outer.onclick = function (e) {
        if(e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
            win_up(windows[this.id.substring(14)]);
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
    close.onclick = function () {
        document.body.removeChild(outer);
        windows[this.parentNode.id.substring(14)].open = false;
    };
    new Draggable(outer);
    outer.style.zIndex = windows.length;
    var win = {
        window: outer,
        title: title,
        content: content,
        open: true,
        z: windows.length
    };
    windows.push(win);
    outer.id = "window-number-" + windows.indexOf(win);
    return win;
};
var win_up = function (win) {
    if(win.z < windows.length - 1) {
        var grz = 0;
        for(var i = 0; i < windows.length; i++) {
            if(windows[i].open && windows[i].z > win.z) {
                if(windows[i].z > grz) grz = windows[i].z;
                windows[i].z--;
                windows[i].window.style.zIndex = windows[i].z;
            }
        }
        win.z = grz;
        win.window.style.zIndex = grz;
    }
};
