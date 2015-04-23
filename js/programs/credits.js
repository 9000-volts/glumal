programs.push({
    name: "glumal credits",
    initiate: function () {
        var cred = makeWindow("glumal credits", 500, 300);
        var credText = "<h1>Credits</h1>";
        credText += "<center>glumal - Copyright &copy; 2015 htmlguy. Licensed under the MIT license.</center>";
        credText += "<h2>External Tools, Libraries, and Assets:</h2>";
        credText += "<ul>";
        credText += "<li><a href='http://www.techumber.com/2014/03/simple-draggable-element-using-only-javascript.html'>Draggable.js by Aravind Buddha</a></li>";
        credText += "<li><a href='http://www.noisetexturegenerator.com/'>Noise Texture Generator</a></li>";
        credText += "<li><a href='http://www.fontsquirrel.com/fonts/open-sans'>Open Sans font by Ascender Fonts</a></li>";
        credText += "<li><a href='http://www.fontsquirrel.com/fonts/modern-pictograms'>Modern Pictograms font by John Caserta</a></li>";
        credText += "</ul>";
        cred.content.innerHTML = credText;
    }
});
