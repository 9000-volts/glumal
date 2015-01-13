programs.push({
    name: "Reminders",
    initiate: function () {
        var rem = makeWindow("Remiders", 600, 700);
        var add_rem = function (text, ind) {
            var el = document.createElement("div");
            el.className = "reminderprg-rem";
            el.innerHTML = text;
            rem.content.insertBefore(el, rem.content.firstChild);
            var ar = JSON.parse(localStorage.remindersprg_items);
            el.id = "remindersprg-rem-" + (ind ? ind - 1 : ar.length) + "-win-" + windows.indexOf(rem);
            if(!ind) {
                ar.push(text);
            }
            localStorage.remindersprg_items = JSON.stringify(ar);
            el.onclick = function () {
                var ar = JSON.parse(localStorage.remindersprg_items);
                console.log(this.id.split("-win-")[0].substr(17));
                ar.splice(this.id.split("-win-")[0].substr(17), 1);
                localStorage.remindersprg_items = JSON.stringify(ar);
                this.parentElement.removeChild(this);
            };
        };
        var inf = document.createElement("div");
        inf.className = "reminderprg-rem add";
        var sp = document.createElement("span");
        sp.innerHTML = "Add a reminder...";
        var plus = UI.symbols("+");
        inf.appendChild(plus.elem);
        inf.appendChild(sp);
        rem.content.appendChild(inf);
        inf.onclick = function (e) {
            if(sp.contentEditable !== "true") {
                sp.innerHTML = "";
                sp.contentEditable = true;
                sp.focus();
            }
            //e.stopPropagation();
        };
        sp.onkeydown = function (e) {
            if(this.contentEditable === "true" && e.keyCode === 13) {
                add_rem(sp.innerHTML);
                sp.contentEditable = false;
                sp.innerHTML = "Add a reminder...";
            }
        };
        plus.onmousedown = function (e) {
            if(sp.contentEditable === "true") {
                add_rem(sp.innerHTML);
                sp.contentEditable = false;
                sp.innerHTML = "Add a reminder...";
            }
        };
        if(!localStorage.remindersprg_items) localStorage.remindersprg_items = JSON.stringify([]);
        var dat = JSON.parse(localStorage.remindersprg_items);
        for(var i = 0; i < dat.length; i++) {
            add_rem(dat[i], i + 1);
        }
    }
});
