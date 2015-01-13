/****

    glumal UI tools: For creating a consistent UI across all glumal windows.

****/
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
            label_elem: label,
            input_elem: input,
            label: function (text) {
                this.label_elem.innerHTML = text;
            },
            onchange: function (evt) {
                this.input_elem.onpaste = evt;
                this.input_elem.onkeydown = evt;
                this.input_elem.onchange = evt;
                this.input_elem.oninput = evt;
            },
            onclick: function (evt) {
                this.elem.onclick = evt;
            },
            value: function (text) {
                if(text) {
                    this.input_elem.value = text;
                }
                return this.input_elem.value;
            }
        };
    },
    button: function (button_text) {
        var button = document.createElement("button");
        button.innerHTML = button_text;
        return {
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
    },
    symbols: function (text) {
        var s = document.createElement("span");
        s.innerHTML = text;
        s.className = "pict";
        return {
            elem: s,
            label: function (text) {
                this.elem.innerHTML = text;
            }
        };
    },
    span: function (text) {
        var s = document.createElement("span");
        s.innerHTML = text;
        return {
            elem: s,
            label: function (text) {
                this.elem.innerHTML = text;
            }
        };
    }
};
