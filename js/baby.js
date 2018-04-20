var babyObj=function(){
	this.x;
	this.y;
	this.angle;
	this.body=new Image();
	this.eye=new Image();

	this.babyTailTimer;
	this.babyTailCount;

	this.babyEyeTimer;
	this.babyEyeCount;

	this.babyBodyTimer;
	this.babyBodyCount;

}
babyObj.prototype.init = function(){
	this.x=canWidth*0.5-80;
	this.y=canHeight*0.5+80;
	this.angle=0;
	this.body.src='./src/babyFade0.png';
	this.eye.src='./src/babyEye0.png';

	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;
	this.babyEyeCount=0;

	this.babyBodyTimer=0;
	this.babyBodyCount=0;
};
babyObj.prototype.draw=function(){
	//lerpDistance()使得坐标this.x趋向于mx,第三个参数越大反应越慢
	this.x=lerpDistance(mom.x, this.x, 0.99);
	this.y=lerpDistance(mom.y, this.y, 0.99);

	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY, deltaX)+Math.PI;//度返回值是（-PI,PI）之间

	// //lerpAngle()使得角度趋向于角度
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50){	
		this.babyTailCount++;
		if(this.babyTailCount>7){
			this.babyTailCount=0;
		}		
		this.babyTailTimer=0;
	}

	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>500){	
		this.babyEyeCount++;
		if(this.babyEyeCount>1){
			this.babyEyeCount=0;
		}		
		this.babyEyeTimer=0;
	}

	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300){	
		this.babyBodyCount++;
		if(this.babyBodyCount>19){
			this.babyBodyCount=19;
			//game over
			gameOver=true;			
		}		
		this.babyBodyTimer=0;
	}
	
	var babyTailIndex=this.babyTailCount;
	var babyEyeIndex=this.babyEyeCount;
	var babyBodyIndex=this.babyBodyCount;


	// console.log(babyBody[babyBodyIndex]);

	cxt1.save();
	cxt1.translate(this.x,this.y);//translate()设定相对位置点
	cxt1.rotate(this.angle);//相对旋转角度（save()和restore()之间的内容）
	cxt1.drawImage(babyBody[babyBodyIndex],-babyBody[babyBodyIndex].width*0.5,-babyBody[babyBodyIndex].height*0.5);
	cxt1.drawImage(babyEye[babyEyeIndex],-babyEye[babyEyeIndex].width*0.5,-babyEye[babyEyeIndex].height*0.5);
	cxt1.drawImage(babyTail[babyTailIndex],babyTail[babyTailIndex].width*0.5,-babyTail[babyTailIndex].height*0.5);
	cxt1.restore();
};
babyObj.prototype.reLive=function(){
	this.babyBodyCount=0;
	this.babyBodyTimer=0;
}