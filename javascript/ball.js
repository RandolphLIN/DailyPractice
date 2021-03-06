function Ball (radius,color){
	if (radius === undefined){radius = 40;}
	// if (color === undefined){color = "#4339DF";}		//@utils.js - animation03
	this.color = "#C55959";
	this.x = 0;
	this.y = 0;
	this.radius = radius;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	// this.color = utils.parseColor(color);			//@utils.js - animation03
	this.lineWidth = 1;
}

Ball.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;
	context.beginPath();
	//x, y, radius, start_angle, end_angle, anti-clockwise
	context.arc(0, 0, this.radius, 0, (Math.PI *2), true);
	context.closePath();
	context.fill();
	if (this.lineWidth > 0){
		context.stroke();
	}
	context.restore();
};

//page130 用户交互
Ball.prototype.getBounds = function(){
	return{
		x: this.x - this.radius,
		y: this.y - this.radius,
		width: this.radius * 2,
		height: this.radius * 2
	};
};