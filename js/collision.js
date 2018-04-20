//判断大鱼和果实的距离
function momFruitsCollision(){
	if(!gameOver){
		for (var i = 0;i<fruit.num;i++){
			if(fruit.alive[i]){
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);//大鱼和果实距离的平方
				if(l<900){
					fruit.dead(i);
					mom.momBodyCount++;
					if(mom.momBodyCount>7){
						mom.momBodyCount=7;
					}	
					console.log('momCount:'+mom.momBodyCount)		
					if(fruit.fruitType[i]=='blue'){
						data.double=2;
						data.fruitNum+=2;
						//console.log('blue:'+data.double);
					}else{
						data.double=1;
						data.fruitNum+=1;

					}
				}
			}
			
		}
	}
}

//判断大鱼和小鱼的距离
function momBabyCollision(){
	if(!gameOver){
		var l=calLength2(baby.x,baby.y,mom.x,mom.y);//大鱼和小鱼距离的平方
		if(l<900){
			if(data.fruitNum>0){
				baby.reLive();
				mom.momBodyCount--;
				if(mom.momBodyCount<0){
					mom.momBodyCount=0;
				}
				data.addScore();
			}
			//console.log('momCount1:'+data.score);
		}
	}
} 