var dataObj=function (){
	var fruitNum;
	var double;
	var score;

	var alpha;
}
dataObj.prototype.init= function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.alpha=0;
}
dataObj.prototype.draw= function(){
	var w=can1.width;
	var h=can1.height;

	cxt1.save();

	cxt1.fillStyle='white';
	cxt1.font='20px Verdana';
	cxt1.textAlign='center';

	cxt1.shadowBlur=10;
	cxt1.shadowColor='white';
	// cxt1.fillText('num:'+this.fruitNum,w*0.5,h-50);
	// cxt1.fillText('double:'+this.double,w*0.5,h-80);
	// cxt1.fillText('score:'+this.score,w*0.5,h-20);
	if(gameOver){
		this.alpha+=deltaTime*0.0005;
		if(this.alpha>1){
			this.alpha=1;
		}
		cxt1.fillStyle='rgba(255,255,255,'+this.alpha+')';
		cxt1.fillText("gameOver",w*0.5,h*0.5);
		cxt1.fillText("你的得分："+this.score,w*0.5,h*0.6);
	}
	cxt1.restore();

}
dataObj.prototype.addScore= function(){
	this.score+=this.fruitNum;
	this.fruitNum=0;
}
