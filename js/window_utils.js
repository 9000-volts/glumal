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
        }
    }
};
