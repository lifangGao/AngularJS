var fruitObj=function(){
	this.alive=[];//是否存在
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];

	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();

	this.aneIds=[];
	this.furitIds=[];

}
fruitObj.prototype.num=30;
fruitObj.prototype.init= function(){
	for (var i = 0;i<this.num;i++){
		this.alive[i]=true;
		this.spd[i]=Math.random()*0.001+0.001;

		var ran=Math.random();
		if(ran<0.7){
			this.fruitType[i]='orange';
		}else{
			this.fruitType[i]='blue';
		}
		var aneId=Math.floor(Math.random()* ane.num);
		while(this.aneIds.indexOf(aneId)!=-1){
			aneId=Math.floor(Math.random()* ane.num);
		}
		this.aneIds.push(aneId);
		var y=Math.floor(Math.random()* (ane.headY[aneId]-10)+10);
		var l=Math.floor(Math.random()* 10);

		if(y<ane.headY[aneId]){
			this.x[i]=ane.rootX[aneId];
			this.y[i]=y;
			this.l[i]=10
		}else{
			that.l[i]=l;
			this.x[i]=ane.rootX[aneId];
			this.y[i]=y;
		}
		
	}
	this.orange.src='./src/fruit.png'
	this.blue.src='./src/blue.png'
}
fruitObj.prototype.draw = function(){
	var that=this;
	var ll=Math.sin(ane.alpha);
	
	 for (var i = 0;i<that.num;i++){
		if(that.alive[i]){
			if(that.l[i]<10){
				that.l[i]+=that.spd[i]*deltaTime;
				this.x[i]=ane.rootX[that.aneIds[i]]+ll*ane.amp[that.aneIds[i]];
			}else{
				that.y[i]-=that.spd[i]*8*deltaTime;
			}
			var img;
			if(that.fruitType[i]==='orange'){
				img=that.orange;
			}else{
				img=that.blue;
			}		
			cxt2.drawImage(img,that.x[i]-that.l[i]*0.5,that.y[i]-that.l[i]*0.5,that.l[i],that.l[i]);							

			if(that.y[i]<10){
				that.alive[i]=false
			}
		}else{
			that.alive[i]=true;		
			that.born(i);
		}
											
	}
	
}
fruitObj.prototype.born = function(i){

	var aneId=Math.floor(Math.random()* ane.num);
	while(this.aneIds.indexOf(aneId)!=-1){
		aneId=Math.floor(Math.random()* ane.num);
	}

	var ran=Math.random();
	if(ran<0.7){
		this.fruitType[i]='orange';
	}else{
		this.fruitType[i]='blue';
	}
	
	this.aneIds[i]=aneId;
	this.x[i]=ane.rootX[aneId];
	this.y[i]=ane.headY[aneId];	
	this.l[i]=0;	
}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;	
}