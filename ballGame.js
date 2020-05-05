var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cir1=canvas.getContext("2d");
var cir2=canvas.getContext("2d");
var cir3=canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-50;
var z = 0;
var dy = 0;
var angle1=0;
var angle2=Math.PI;
var score=0;
var bestscore=0;
var ctxcolor;
var cir1color;
var cir2color;
var point=0;
var k=0;
var temp=0;
var tem=0;
var choice=0;
var choose=0;
var audio = new Audio('2012-11-10_Darkness_Approaches_-_David_Fesliyan.mp3');
function prodsound(){
	audio.play();
}
var colors=["#ffffff","#ff0000","#e699ff","#ffff99","#99c2ff","#F633FF","#26E5D4"]
if((localStorage.getItem("bestscore"))!=null){bestscore=localStorage.getItem("bestscore");}
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(temp==0){choosecolor();temp++;}
	if(choose==0){drawobstacle1();}
	if(choose==1){drawobstacle2();}
	if(choose==2){drawobstacle3();}
	updatepositionball();
	drawScore();
	drawbestScore();
}
function updatepositionball() {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2);
    ctx.fillStyle = ctxcolor;
    ctx.fill();
    ctx.closePath();
    y+=dy;
    if(y==canvas.height-50){dy=0;tem=0;}
    if(y>canvas.height-50){dy=-0.5;tem=0;}
}
function reset(){
	localStorage.setItem("bestscore",bestscore);
    document.location.reload();
}
function drawScore() {
  ctx.font = "100% Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
function drawbestScore() {
  ctx.font = "100% Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Best Score: "+bestscore, 8, 40);
}
function choosecolor(){
	var i=Math.floor(Math.random()*(6+1));
	var j=Math.floor(Math.random()*(6+1));
	while(i==j){j=Math.floor(Math.random()*(6+1));}
	cir1color=colors[i];
	cir2color=colors[j];
	ctxcolor=colors[i];
}
canvas.addEventListener("click",jump);
function jump(){
	    k=1;
	    tem=1;
	    dy = -0.5;
	    setTimeout(() => {dy=0.5;}, 320);
}
function gameover(){
	clearInterval(window.resetvar);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.font = "100% Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 120, 55);
    ctx.fillText("Press any key to continue",72,90);
    var c=canvas.getContext("2d");
    canvas.addEventListener("click",reset);
}
window.resetvar=setInterval(draw,10);
function chooseobstacle(){
	choose=Math.floor(Math.random()*(2+1));
	if(choose==0){drawobstacle1();}
	if(choose==1){drawobstacle2();}
	if(choose==2){drawobstacle3();}
}
function drawobstacle1(){
	cir1.beginPath();
	cir1.arc(x,z-23,23,angle1,Math.PI+angle1);
	cir1.fillStyle=cir1color;
	cir1.fill();
	cir1.closePath();
	cir2.beginPath();
	cir2.arc(x,z-23,23,angle2,Math.PI+angle2);
	cir2.fillStyle=cir2color;
	cir2.fill();
	cir2.closePath();
	cir3.beginPath();
	cir3.arc(x,z-23,18,0,Math.PI*2);
	cir3.fillStyle="#000000";
	cir3.fill();
	cir3.closePath();
	if(k==1){
	    angle1+=0.01;
	    angle2+=0.01;}
	if(z-2*23>canvas.height){
	    z=0;point=0;temp=0;chooseobstacle();}
	if(angle1>Math.PI*2){angle1=0;}
	if(angle2>Math.PI*2){angle2=0;}
	if(tem==1){z+=0.19;}
	if((y-5<z&&y-5>z-5)||(y+5<z&&y+5>z-5)||(y<z&&y>z-5)){
		if(angle1>Math.PI*1.5||(angle1>=0&&angle1<Math.PI*0.5)){
		}else{
			gameover();
		}
	}
	if((y-5<z-41&&y-5>z-46)||(y+5<z-41&&y+5>z-46)||(y<z-41&&y>z-46)){
		if((angle1>Math.PI*0.5)&&(angle1<Math.PI*1.5)){
		}else{
			gameover();
		}
	}
	if(z-46>y+5){
		if(point==0){score++;point++;
			if(score>=bestscore){bestscore=score;}
		}
	}
	if(y-5==0){
		dy = 0.5;
	}
}
function drawobstacle2(){
	ctx.beginPath();
    ctx.arc(x-23,z-23,23,angle1,Math.PI+angle1);
    ctx.fillStyle=cir1color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x-23,z-23,23,angle2,Math.PI+angle2);
    ctx.fillStyle=cir2color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x-23,z-23,18,0,Math.PI*2);
    ctx.fillStyle="#000000";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x+23,z-23,23,-angle1,-(Math.PI+angle1));
    ctx.fillStyle=cir1color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x+23,z-23,23,-angle2,-(Math.PI+angle2));
    ctx.fillStyle=cir2color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x+23,z-23,18,0,Math.PI*2);
    ctx.fillStyle="#000000";
    ctx.fill();
    ctx.closePath();
    if(k==1){
	    angle1+=0.01;
	    angle2+=0.01;}
	if(z-2*23>canvas.height){
	    z=0;point=0;temp=0;chooseobstacle();}
	if(angle1>Math.PI*2){angle1=0;}
	if(angle2>Math.PI*2){angle2=0;}
	if(tem==1){z+=0.19;}
	if((z-23-y<=16&&z-23-y>=0)||(y-z+23<=16&&y-z+23>=0)){
		if(angle2>0.02&&angle2<0.02+Math.PI){
			}else{gameover();}
		}
	if(z-46>y+5){
		if(point==0){score++;point++;
			if(score>=bestscore){bestscore=score;}
		}
	}
	if(y-5==0){
		dy = 0.5;
	}
}
function drawobstacle3(){canvas.height
	ctx.beginPath();
    ctx.arc(x,z-27,27,angle1,Math.PI+angle1);
    ctx.fillStyle=cir1color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x,z-27,27,angle2,Math.PI+angle2);
    ctx.fillStyle=cir2color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x,z-27,23,0,Math.PI*2);
    ctx.fillStyle="#000000";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x,z-27,22,-angle1,-(Math.PI+angle1));
    ctx.fillStyle=cir1color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x,z-27,22,-angle2,-(Math.PI+angle2));
    ctx.fillStyle=cir2color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x,z-27,17,0,Math.PI*2);
    ctx.fillStyle="#000000";
    ctx.fill();
    ctx.closePath();
    if(k==1){
	    angle1+=0.01;
	    angle2+=0.01;}
	if(z-2*27>canvas.height){
	    z=0;point=0;temp=0;chooseobstacle();}
	if(angle1>Math.PI*2){angle1=0;}
	if(angle2>Math.PI*2){angle2=0;}
	if(tem==1){z+=0.19;}
	if((y-5<z&&y-5>z-10)||(y+5<z&&y+5>z-10)||(y<z&&y>z-10)){
		if(angle1>Math.PI*1.5||(angle1>=0&&angle1<Math.PI*0.5)){
		}else{
			gameover();
		}
	}
	if((y-5<z-44&&y-5>z-54)||(y+5<z-44&&y+5>z-54)||(y<z-44&&y>z-54)){
		if((angle1>Math.PI*0.5)&&(angle1<Math.PI*1.5)){
		}else{
			gameover();
		}
	}
	if(z-54>y+5){
		if(point==0){score++;point++;
			if(score>=bestscore){bestscore=score;}
		}
	}
	if(y-5==0){
		dy = 0.5;
	}
}