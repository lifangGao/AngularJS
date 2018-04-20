var can1;
var can2;

var cxt1;
var cxt2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var bgPic=new Image();

var ane;
var fruit;
var mom;
var baby;
var data;

var babyTail=[];
var momTail=[];

var babyEye=[];
var momEye=[];

var babyBody=[];
var momBodyR=[];
var momBodyB=[];

var mx;
var my;

var gameOver;

document.body.onload=game;
function game(){
	console.log('onload');
	init();
	lastTime=Date.now();
	gameloop();
}
function init(){
	//获取canvas context
	can1=document.getElementById('canvas1');//finish,dust,UI,circle
	console.log(can1);
	cxt1=can1.getContext('2d');
	console.log(cxt1);

	can2=document.getElementById('canvas2');//background,ane,fruits
	cxt2=can2.getContext('2d');

	can1.addEventListener('mousemove', onmousemove, false)

	bgPic.src='./src/background.jpg';
	bgPic.setAttribute("crossOrigin",'Anonymous');

	canWidth=can1.width;
	canHeight=can1.height;

	gameOver=false;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	baby=new babyObj();
	baby.init();

	data=new dataObj();
	data.init();

	for(var i=0;i<8;i++){
		var babyTailImg=new Image();
		babyTailImg.src='./src/babyTail'+i+'.png';
		babyTail.push(babyTailImg);
	}

	for(var i=0;i<8;i++){
		var momTailImg=new Image();
		momTailImg.src='./src/bigTail'+i+'.png';
		momTail.push(momTailImg);
	}

	for(var i=0;i<2;i++){
		var babyEyeImg=new Image();
		babyEyeImg.src='./src/babyEye'+i+'.png';
		babyEye.push(babyEyeImg);
	}

	for(var i=0;i<2;i++){
		var momEyeImg=new Image();
		momEyeImg.src='./src/bigEye'+i+'.png';
		momEye.push(momEyeImg);
	}


	for(var i=0;i<20;i++){
		var babyBodyImg=new Image();
		babyBodyImg.src='./src/babyFade'+i+'.png';
		babyBody.push(babyBodyImg);
	}

	for(var i=0;i<8;i++){
		var momBodyRImg=new Image();
		momBodyRImg.src='./src/bigSwim'+i+'.png';
		momBodyR.push(momBodyRImg);
	}
	for(var i=0;i<8;i++){
		var momBodyBImg=new Image();
		momBodyBImg.src='./src/bigSwimBlue'+i+'.png';
		momBodyB.push(momBodyBImg);
	}
	

	mx=canWidth*0.5;
	my=canHeight*0.5;

}
function gameloop(){
	window.requestAnimFrame(gameloop);//当前绘制完成之后，根据机器性能来确定间隔多久绘制下一帧（动态时间间隔）
	//setInterval,setTimeout，间隔固定时间

	var now=Date.now();
	deltaTime=now-lastTime;
	if(deltaTime>40){
		deltaTime=40;
	}
	lastTime=now;
	// console.log(deltaTime);
	drawBackground();
	ane.draw();
	fruit.draw();

	cxt1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitsCollision();
	baby.draw();
	momBabyCollision();
	data.draw();

}
function onmousemove(e){
	if(!gameOver){
		if(e.offSetX || e.layerX){
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}