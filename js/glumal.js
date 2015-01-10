var programs = [{
    initiate: function () {
        var win = makeWindow("Tool Launcher", 500, 500);
        win.content.innerHTML = "<h1>Choose a Tool:</h1>";
        var center = document.createElement("center");
        for (var i = 1; i < programs.length; i++) {
            var link = document.createElement("a");
            center.appendChild(link);
            link.innerHTML = programs[i].name;
            link.href = "#";
            var a = function (e) {
                alert("A");
            }
            link.onclick = programs[i].initiate;
            center.appendChild(document.createElement("br"));
        }
        win.content.appendChild(center);
    },
    name: "Tool Launcher"
}];
var windows = [];
window.onload = function () {
    document.querySelector("#lst").onclick = function () {
        programs[0].initiate();
    };
};
