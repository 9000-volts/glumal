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
          var px, py;
          if(e.touches && e.touches[0]) {
              px = e.touches[0].pageX || e.touches[0].clientX + (document.documentElement.scrollLeft ?
                                document.documentElement.scrollLeft :
            document.body.scrollLeft);
          py = e.touches[0].pageY || e.touches[0].clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
          } else {
          px = e.pageX || e.clientX + (document.documentElement.scrollLeft ?
                                document.documentElement.scrollLeft :
            document.body.scrollLeft);
         py = e.pageY || e.clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
          }
          dragoffset.x = e.pageX - el.offsetLeft;
        dragoffset.y = e.pageY - el.offsetTop;
          e.preventDefault();
      }

    }, "touchstart");
    _on(document, 'mouseup', function (e) {
      isDragReady = false;
        e.preventDefault();
    }, 'touchend');
    _on(document, 'mousemove', function (e) {
      if (isDragReady) {
          console.log(e);
          el.style.bottom = "";
          var px, py;
          if(e.touches && e.touches[0]) {
              px = e.touches[0].pageX || e.touches[0].clientX + (document.documentElement.scrollLeft ?
          document.documentElement.scrollLeft :
          document.body.scrollLeft);
        py = e.touches[0].pageY || e.touches[0].clientY + (document.documentElement.scrollTop ?
          document.documentElement.scrollTop :
          document.body.scrollTop);
          } else {
        px = e.pageX || e.clientX + (document.documentElement.scrollLeft ?
          document.documentElement.scrollLeft :
          document.body.scrollLeft);
        py = e.pageY || e.clientY + (document.documentElement.scrollTop ?
          document.documentElement.scrollTop :
          document.body.scrollTop);
          }
          if(e.touches && e.touches[0]) {
        el.style.top = (py) + "px";
        el.style.left = (px) + "px";
          } else {
              el.style.top = (py - dragoffset.y) + "px";
        el.style.left = (px - dragoffset.x) + "px";
          }
          e.preventDefault();
      }
    }, "touchmove");
  };
  //cross browser event Helper function
  var _on = function (el, event, fn, evt2) {
    document.attachEvent ? el.attachEvent('on' + event, fn) : el.addEventListener(event, fn, !0);
    if(evt2) {
      document.attachEvent ? el.attachEvent('on' + evt2, fn) : el.addEventListener(evt2, fn, !0);
    }
  };
  this.init();
}
