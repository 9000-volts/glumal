var textbox = function (label_text) {
    var section = document.createElement("div");
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    label.innerHTML = label_text;
    section.appendChild(label);
    section.appendChild(input);
    return { elem: section, label: label, input: input };
};
var assign_textbox_change_evt = function (element, evt) {
    element.onpaste = evt;
    element.onkeydown = evt;
    element.onchange = evt;
    element.oninput = evt;
}
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
            }
        };
    }
};
