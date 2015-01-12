programs.push({
    name: "Dec / Hex / Bin Converter",
    initiate: function () {
        var dhb = makeWindow("Dec / Hex / Bin Converter", 300, 232);
        var dec = UI.textbox("Decimal:");
        var hex = UI.textbox("Hexadecimal:");
        var bin = UI.textbox("Binary:");
        dhb.content.appendChild(dec.elem);
        dhb.content.appendChild(hex.elem);
        dhb.content.appendChild(bin.elem);
        var bincnv = function () {
            var v;
            if(isNaN(parseInt(bin.value(), 2))) {
                v = "0";
            } else {
                v = bin.value();
            }
            hex.value(parseInt(v, 2).toString(16));
            dec.value(parseInt(v, 2).toString());
        };
        var hexcnv = function () {
            var v;
            if(isNaN(parseInt(hex.value(), 16))) {
                v = "0";
            } else {
                v = hex.value();
            }
            bin.value(parseInt(v, 16).toString(2));
            dec.value(parseInt(v, 16).toString());
        };
        var deccnv = function () {
            var v;
            if(isNaN(parseInt(dec.value()))) {
                v = "0";
            } else {
                v = dec.value();
            }
            hex.value(parseInt(v).toString(16));
            bin.value(parseInt(v).toString(2));
        };
        bin.onchange(bincnv);
        dec.onchange(deccnv);
        hex.onchange(hexcnv);
    }
});
