window.utils = {};							//!

utils.captureMouse = function(element){
	var mouse={x:0,y:0};

	element.addEventListener('mousemove',function(event){
		var x,y;
		if(event.pageX || event.pageY){
			x = event.pageX;
			y = event.pageY;
		}else {
			x = event.clientX + document.body.scrollLeft + document.documentElement.ScrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;
	},false);
	return mouse;
};

// window.utils.captureMouse = function (element) {
//   var mouse = {x: 0, y: 0, event: null},
//       body_scrollLeft = document.body.scrollLeft,
//       element_scrollLeft = document.documentElement.scrollLeft,
//       body_scrollTop = document.body.scrollTop,
//       element_scrollTop = document.documentElement.scrollTop,
//       offsetLeft = element.offsetLeft,
//       offsetTop = element.offsetTop;
  
//   element.addEventListener('mousemove', function (event) {
//     var x, y;
    
//     if (event.pageX || event.pageY) {
//       x = event.pageX;
//       y = event.pageY;
//     } else {
//       x = event.clientX + body_scrollLeft + element_scrollLeft;
//       y = event.clientY + body_scrollTop + element_scrollTop;
//     }
//     x -= offsetLeft;
//     y -= offsetTop;
    
//     mouse.x = x;
//     mouse.y = y;
//     mouse.event = event;
//   }, false);
  
//   return mouse;
// };


utils.captureTouch = function (element){
	var touch = {x: null , y: null, isPressed: false};

	element.addEventListener('touchstart',function(event){
		touch.isPressed = true;
	},false );

	element.addEventListener('touchend',function(event){
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
	},false );

	element.addEventListener('touchmove',function(event){
	var x,y,
		touch_event = event.touches[0];			//first touch
		
	if (touch_event.pageX || touch_event.pageY){
		x = touch_event.pageX;
		y = touch_event.pageY;
	}else{
		x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= element.offsetLeft;
	y -= element.offsetTop;

	touch.x = x;
	touch.y = y;
	},false );

	return touch;
};


//#animation03
window.utils.parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};



//#与颜色相关的工具函数
window.utils.colorToRGB = function (color, alpha) {
  //number in octal format or string prefixed with #
  if (typeof color === 'string' && color[0] === '#') {
    color = window.parseInt(color.slice(1), 16);
  }
  alpha = (alpha === undefined) ? 1 : alpha;
  //parse hex values
  var r = color >> 16 & 0xff,
      g = color >> 8 & 0xff,
      b = color & 0xff,
      a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha);
  //only use 'rgba' if needed
  if (a === 1) {
    return "rgb("+ r +","+ g +","+ b +")";
  } else {
    return "rgba("+ r +","+ g +","+ b +","+ a +")";
  }
};