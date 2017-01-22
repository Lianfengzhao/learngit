//切换列表栏的参数
var meunIndex = "fire";
var meunHistory;

//切换主要内容的参数
var content2Index;
var add_element;

//改变列表栏
function change_type(meunIndex,meunHistory){
	$("li").click(function(){
		meunHistory=meunIndex;
		meunIndex=$(this).attr("alt");
		$(".content2>div[alt='"+meunHistory+"']").css("display","none");
		setcolor(meunIndex);
	});
}

//切换列表栏后的样式改变
function setcolor(meunIndex){
	if(meunIndex=="fire"){
		$(".content2").css("background","linear-gradient(to bottom right,#ffcc66,white)");
	}
	if(meunIndex=="water"){
		$(".content2").css("background","linear-gradient(to bottom right,#66ccff,white)");
	}
	if(meunIndex=="grass"){
		$(".content2").css("background","linear-gradient(to bottom right,#33ffcc,white)");
	}
	if(meunIndex=="elc"){
		$(".content2").css("background","linear-gradient(to bottom right,#ffff33,white)");
	}
	$(".content2>div[alt='"+meunIndex+"']").css("display","inline-block");
}

//添加
function add_content(content2Index){
	if(content2Index=='fire'){
		add_element="<img src='photo/fire_1.jpg'>"+"<p class='desc'>小火龙</p>";
	}
	if(content2Index=='water'){
		add_element="<img src='photo/water_1.jpg'>"+"<p class='desc'>水精灵</p>";
	}
	if(content2Index=='grass'){
		add_element="<img src='photo/grass_1.jpg'>"+"<p class='desc'>妙蛙草</p>";
	}
	if(content2Index=='elc'){
		add_element="<img src='photo/elc_1.jpg'>"+"<p class='desc'>皮卡丘</p>";
	}
	$(".bt[alt='"+content2Index+"']").before(
		"<div class='img'> "+
			add_element+
			"</div>"
		);
}

window.onload=function() {
	setcolor(meunIndex);
	change_type(meunIndex,meunHistory);
	}