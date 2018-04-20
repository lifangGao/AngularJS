var aneObj=function(){
	this.rootX=[];
	this.headX=[];
	this.headY=[];
	// this.x=[];
	// this.len=[];

	this.alpha;
	this.amp=[];

}
aneObj.prototype.num=50;//定义ane数量
aneObj.prototype.init=function(){
	//初始化位置
	for(var i=0;i<this.num;i++){
		this.rootX[i]=i*18+Math.random()*20;
		this.headX[i]=this.rootX[i];
		this.headY[i]=canHeight-200+Math.random()*50;
		this.amp[i]=Math.random()*20+50;
	}
	this.alpha=0;
}
aneObj.prototype.draw=function(){
	this.alpha+=deltaTime*0.0005;

	var l=Math.sin(this.alpha);
	cxt2.save();//save()和restore()之间设置的样式属性只在这个区间有效
	cxt2.globalAlpha=0.6;//设置透明度
	cxt2.lineWidth=20;
	cxt2.lineCap='round';
	cxt2.strokeStyle='#3b154e';
	for(var i=0;i<this.num;i++){
		cxt2.beginPath();
		cxt2.moveTo(this.rootX[i],canHeight);
		cxt2.quadraticCurveTo(this.rootX[i],canHeight-150,this.headX[i]+l*this.amp[i],this.headY[i]);	
		cxt2.stroke();
	}
	cxt2.restore();
}