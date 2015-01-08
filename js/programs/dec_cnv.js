programs.push({
    name: "Dec / Hex / Bin Converter",
    initiate: function () {
        var dhb = makeWindow("Dec / Hex / Bin Converter", 300, 229);
        var dec = textbox("Decimal:");
        var hex = textbox("Hexadecimal:");
        var bin = textbox("Binary:");
        dhb.content.appendChild(dec.elem);
        dhb.content.appendChild(hex.elem);
        dhb.content.appendChild(bin.elem);
        var bincnv = function () {
            var v;
            if(isNaN(parseInt(bin.input.value, 2))) {
                v = "0";
            } else {
                v = bin.input.value;
            }
            hex.input.value = parseInt(v, 2).toString(16);
            dec.input.value = parseInt(v, 2).toString();
        };
        var hexcnv = function () {
            var v;
            if(isNaN(parseInt(hex.input.value, 16))) {
                v = "0";
            } else {
                v = hex.input.value;
            }
            bin.input.value = parseInt(v, 16).toString(2);
            dec.input.value = parseInt(v, 16).toString();
        };
        var deccnv = function () {
            var v;
            if(isNaN(parseInt(dec.input.value))) {
                v = "0";
            } else {
                v = dec.input.value;
            }
            hex.input.value = parseInt(v).toString(16);
            bin.input.value = parseInt(v).toString(2);
            console.log(dec.input.value);
        };
        assign_textbox_change_evt(bin.input, bincnv);
        assign_textbox_change_evt(dec.input, deccnv);
        assign_textbox_change_evt(hex.input, hexcnv);
    }
});
