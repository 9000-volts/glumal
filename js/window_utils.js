/* UITools Script */
var UI = {
    textbox: function (label_text) {
        var section = document.createElement("div");
        var label = document.createElement("label");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        label.innerHTML = label_text;
        section.appendChild(label);
        section.appendChild(input);
        return {
            elem: section,
            label: label,
            input: input,
            onchange: function (evt) {
                this.input.onpaste = evt;
                this.input.onkeydown = evt;
                this.input.onchange = evt;
                this.input.oninput = evt;
            },
            onclick: function (evt) {
                this.elem.onclick = evt;
            }
        };
    },
    button: function (button_text) {
        var button = document.createElement("button");
        button.innerHTML = button_text;
        return: {
            elem: button,
            onclick: function (evt) {
                this.elem.onclick = evt;
            },
            label: function (button_text) {
                this.elem.innerHTML = button_text;
            }
        };
    },
    h1: function (text) {
        var h1 = document.createElement("h1");
        h1.innerHTML = text;
        return {
            elem: h1,
            label: function (text) {
                this.elem.innerHTML = text;
            }
        };
    },
    h2: function (text) {
        var h2 = document.createElement("h2");
        h2.innerHTML = text;
        return {
            elem: h2,
            label: function (text) {
                this.elem.innerHTML = text;
            }
        };
    },
    para: function (text) {
        var p = document.createElement("p");
        p.innerHTML = text;
        return {
            elem: p,
            label: function (text) {
                this.elem.innerHTML = text;
            }
        };
    }
};
