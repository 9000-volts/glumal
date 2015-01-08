// This is a modified version of the draggable element using pure JS code
/*--------------------------------------------------------------------------------------------
|  @desc:      Draggable element using pure javascript
|  @author:    Aravind Buddha
|  @url:       http://www.techumber.com
|  @date:      14 FEB 2013
|  @email:     aravind@techumber.com
|  @license:   Free! to Share,copy, distribute and transmit ,
|              but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
var Draggable = function (elem) {
    var el = elem,
        isDragReady = false,
    dragoffset = {
      x: 0,
      y: 0
    };
  this.init = function () {
    this.initPosition();
    this.events();
  };
  //only for this demo
  this.initPosition = function () {
    el.style.position = "absolute";
    el.style.bottom = "-5px";
    el.style.left = Math.floor(Math.random() * (document.documentElement.clientWidth - (el.offsetWidth + 20))) + 10 + "px";
  };
  //events for the element
  this.events = function () {
    var self = this;
    _on(el, 'mousedown', function (e) {
      if(e.target === el || e.target.className === "window-title") {
          isDragReady = true;
        //corssbrowser mouse pointer values
          e.pageX = e.pageX || e.clientX + (document.documentElement.scrollLeft ?
                                document.documentElement.scrollLeft :
            document.body.scrollLeft);
          e.pageY = e.pageY || e.clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
          dragoffset.x = e.pageX - el.offsetLeft;
        dragoffset.y = e.pageY - el.offsetTop;
      }
    });
    _on(document, 'mouseup', function () {
      isDragReady = false;
    });
    _on(document, 'mousemove', function (e) {
      if (isDragReady) {
          el.style.bottom = "";
        e.pageX = e.pageX || e.clientX + (document.documentElement.scrollLeft ?
          document.documentElement.scrollLeft :
          document.body.scrollLeft);
        e.pageY = e.pageY || e.clientY + (document.documentElement.scrollTop ?
          document.documentElement.scrollTop :
          document.body.scrollTop);
        el.style.top = (e.pageY - dragoffset.y) + "px";
        el.style.left = (e.pageX - dragoffset.x) + "px";
      }
    });
  };
  //cross browser event Helper function
  var _on = function (el, event, fn) {
    document.attachEvent ? el.attachEvent('on' + event, fn) : el.addEventListener(event, fn, !0);
  };
  this.init();
}
