var momObj=function(){
	this.x;
	this.y;
	this.angle;
	this.body=new Image();
	this.eye=new Image();
	this.tail=new Image();

	this.momTailTimer;
	this.momTailCount;

	this.momEyeTimer;
	this.momEyeCount;

	this.momBodyCount;

}
momObj.prototype.init = function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	this.body.src='./src/bigSwim0.png';
	this.eye.src='./src/bigEye0.png';
	this.tail.src='./src/bigTail0.png';

	this.momTailTimer=0;
	this.momTailCount=0;

	this.momEyeTimer=0;
	this.momEyeCount=0;

	this.momBodyCount=0;
};
momObj.prototype.draw=function(){
	//lerpDistance()使得坐标this.x趋向于mx,第三个参数越大反应越慢
	this.x=lerpDistance(mx, this.x, 0.99);
	this.y=lerpDistance(my, this.y, 0.99);

	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY, deltaX)+Math.PI;//度返回值是（-PI,PI）之间

	this.momTailTimer+=deltaTime;
	if(this.momTailTimer>50){	
		this.momTailCount++;
		if(this.momTailCount>7){
			this.momTailCount=0;
		}	
		this.momTailTimer=0;
	}

	this.momEyeTimer+=deltaTime;
	if(this.momEyeTimer>300){	
		this.momEyeCount++;
		if(this.momEyeCount>1){
			this.momEyeCount=0;
		}	
		this.momEyeTimer=0;
	}



	var momTailIndex=this.momTailCount;
	var momEyeIndex=this.momEyeCount;
	var momBodyIndex=this.momBodyCount;
	// console.log(momEye);
	//console.log('mom:'+momBodyIndex);

	//lerpAngle()使得角度趋向于角度
	this.angle=lerpAngle(beta,this.angle,0.6);

	cxt1.save();
	cxt1.translate(this.x,this.y);//translate()设定相对位置点
	cxt1.rotate(this.angle);//相对旋转角度（save()和restore()之间的内容）
	if(data.double==1){
		cxt1.drawImage(momBodyR[momBodyIndex],-momBodyR[momBodyIndex].width*0.5,-momBodyR[momBodyIndex].height*0.5);
	}else{
		cxt1.drawImage(momBodyB[momBodyIndex],-momBodyB[momBodyIndex].width*0.5,-momBodyB[momBodyIndex].height*0.5);
	}	
	cxt1.drawImage(momEye[momEyeIndex],-momEye[momEyeIndex].width*0.5,-momEye[momEyeIndex].height*0.5);
	cxt1.drawImage(momTail[momTailIndex],momTail[momTailIndex].width*0.5,-momTail[momTailIndex].height*0.5);
	cxt1.restore();
};