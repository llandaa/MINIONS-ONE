init();
function init(){
	if(!document.addEventListener){
	    window.open('../浏览器/index.html','_self')
	    return
	}
/***********菜单*****************/
var seek=document.getElementById('seek');
var category=document.getElementById('category');
var newGoods=document.getElementById('newgoods');
var boyCloth=document.getElementById('boycloth');
var grilCloth=document.getElementById('grilcloth')
var familyCloth=document.getElementById('familycloth')
var shoes=document.getElementById('shoes')
var watch=document.getElementById('watch')
var studyArtical=document.getElementById('study-artical')
var toyArtical=document.getElementById('toy-artical')
var details1=document.getElementById('details1');
var details2=document.getElementById('details2');
var details3=document.getElementById('details3');
var details4=document.getElementById('details4');
var details5=document.getElementById('details5');
var details6=document.getElementById('details6');
var details7=document.getElementById('details7');
var details8=document.getElementById('details8');
seek.onmouseover=function(){
	category.style.display="block";
}
seek.onmouseout=function(){
	setInterval(function(){
		category.style.display="none";
},5000)
}
function detaliB(obj1,obj2){//显示函数
	obj1.onmouseover=function(){
	obj2.style.display="block";
	}
}
function detaliN(obj1,obj2){//隐藏函数
	obj1.onmouseout=function(){
	obj2.style.display="none";
	}
}
detaliB(newGoods,details1);
detaliN(newGoods,details1);
detaliB(boyCloth,details2);
detaliN(boyCloth,details2);
detaliB(grilCloth,details3);
detaliN(grilCloth,details3);
detaliB(familyCloth,details4);
detaliN(familyCloth,details4);
detaliB(shoes,details5);
detaliN(shoes,details5);
detaliB(watch,details6);
detaliN(watch,details6);
detaliB(studyArtical,details7);
detaliN(studyArtical,details7);
detaliB(toyArtical,details8);
detaliN(toyArtical,details8);
/*************搜索**************/
var searchBtn=document.getElementsByClassName('search-title')[0];
var search=document.getElementById('search');
search.onkeydown=function(){
	search.style.color="#333";
}
search.onclick=function(){
	search.style.color="#ddd";
}
searchBtn.onclick=function(){
	if(search.value!=''){
	window.open('http://www.baidu.com');
	}
}
window.onkeydown=function(e){
	var e=e||window.event
	if(e.keyCode===13 && search.value!='')
	{
		window.open('http://www.baidu.com');
	}
}
/***************hot*************/
var hot=document.getElementById('hot');
function run(){
if(hot.style.display=="none")
	{
		hot.style.display="";
	}else{
		hot.style.display="none";
	}
}
setInterval(run,500);
/*****************banner********************/
var banner=document.getElementById('banner-box');
var Img=banner.getElementsByTagName("img");
var dot=document.getElementById('dot');
var pic=dot.getElementsByTagName('li');
var move=0;
for(var i=0;i<pic.length;i++){//手动
	pic[i].index=i;
	pic[i].onmouseover=function(){
		for(var j=0;j<pic.length;j++){
			pic[j].id="";
			Img[j].style.display="none";
		}
		this.id="active";
		Img[this.index].style.display="block";
	}
}
function re(){
	for(var j=0;j<pic.length;j++){
			pic[j].id="";
			Img[j].style.display="none";
		}
	move++;
	if(move>pic.length-1){
		move=0;
	}
	pic[move].id="active";
	Img[move].style.display="block";
}
setInterval(re,3000);

/*************左右*******/
var chatImg=document.getElementsByClassName('chatimg')[0];
var chat=document.getElementsByClassName('chat')[0];
var topImg=document.getElementsByClassName('topimg')[0];
var chatBox=document.getElementsByClassName('chat-box')[0];
var backBox=document.getElementsByClassName('back-box')[0];
var backTop=document.getElementsByClassName('backtop')[0];
var left=document.getElementsByClassName('short-line-nav')[0];
var ding=document.getElementsByClassName('ding')[0];
var man=document.getElementsByClassName('man')[0];
var woman=document.getElementsByClassName('woman')[0];
var jia=document.getElementsByClassName('jia')[0];
var mao=document.getElementsByClassName('mao')[0];
var xue=document.getElementsByClassName('xue')[0];
var pei=document.getElementsByClassName('pei')[0];
var shi=document.getElementsByClassName('shi')[0];
chatImg.onmouseover=function(){
	chatBox.style.display="block";
}
chat.onmouseleave=function(){
	chatBox.style.display="none";
}
topImg.onmouseover=function(){
	backBox.style.display="block";
}
backTop.onmouseleave=function(){
	backBox.style.display="none";
}
window.onscroll=function(){//控制左右显示函数
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		backTop.onclick=function(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
		}
		if(scrollT>550)
		{
			left.style.display="block";
			backTop.style.display="block";
		}else{
			left.style.display="none"
			backTop.style.display="none"
		}
		ding.onclick=function(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
		}
		change(800,1600,man,"#5ec3df");
		change(1600,2500,woman,"#fff100");
		change(2500,3200,jia,"#5ec3df");
		change(3200,4000,mao,"#fff100");
		change(4000,4800,xue,"#5ec3df");
		change(4800,5500,pei,"#fff100");
		change(5500,6300,shi,"#5ec3df");
		function change(h1,h2,obj,color){//颜色改变函数
			if(scrollT>h1&&scrollT<h2)
			{
				obj.style.background=color;
			}else{
				obj.style.background="rgba(0,0,0,.1)"
			}
		}
	}
/**********页面跳转*********/
var toyFourth=document.getElementsByClassName('toy-fourth')[0];
var newWin;
toyFourth.onclick=function(){
	newWin=window.open('../MINIONS2/index.html');
}
var toyThree=document.getElementsByClassName('toy-thrid')[0];
toyThree.onclick=function(){
	window.open('../404错误/index.html');
}


  /*if(!document.getElementsByClassName){
        window.open('../浏览器/index.html','_self')
    }*/
  function getClass(tagName,className){
  	if(document.getElementsByClassName){
  		return document.getElementsByClassName(className)
  	}else{
  		var nodes=document.getElementsByTagName(tagName)
  		ret=[]
  		for(i=0;i<nodes.length;i++){
  			if(hasClass(nodes[i],className)){
  				ret.push(nodes[i])
  			}
  		}
  		return ret;
  	}
  }
	function hasClass(node,className){
		var names=node.className.split(/\s+/)
		for(i=0;i<length;i++){
			if(names[i]==className)
			return true;
		}
		return false;
	}
}