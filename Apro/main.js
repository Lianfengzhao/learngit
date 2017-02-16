$(".com_type>li").click(function () {
	var txt = $(this).text();
	$(".com_type_name").text(txt);
});
$(".ddl>li").click(function () {
	var txt_2 = $(this).text();
	$(".ddl_name").text(txt_2);
});

function sub_file(){
	var txt="";
	if ($(".com_type_name").text()=="") {
		txt+="请选择比赛类别 ";
	}
	if ($("#filed_1").val()=="") {
		txt+=" 请上传文件";
	}
	alert(txt);
}
//跳出更多资料分享的页面

function share_change_index(couse){
	$(".main_index").addClass("hidden");
	$(".file_more_index").addClass("hidden");
	$(".goods_more_index").addClass("hidden");
	switch(couse){
		case "file" : {
				$(".file_more_index").removeClass("hidden");
					break;}
		case "goods" : {
					$(".goods_more_index").removeClass("hidden");
					break;}
		case "main" : {
					$(".main_index").removeClass("hidden");
					break;}
		}
}
//跳出更多闲置物品的页面
function more_goods(){

}
//注册页面提交信息
$("#zhuce_sub").click(function(){
	var couse=true;
	if ($("#zhuce_name").val()=="") {couse=false;}
	if ($("#zhuce_stu_numb").val()=="") {couse=false;}
	if ($("#zhuce_pw").val()=="") {couse=false;}
	if ($("#zhuce_major").val()=="") {couse=false;}
	if ($("#zhuce_email").val()=="") {couse=false;}
	if (couse) {

	}
	else(alert("请填写完整的信息"))
});
//登录后
function load(){
	var u1 = document.getElementById("load_check");
	if (true) {  //账号密码正确
		localStorage.setItem("load","true");
		if (u1.checked==true) {  //是否记住账号
			var us=$("#user_name").val();
			localStorage.setItem("user",us);  //保存用户名
			localStorage.setItem("load_check",true); //保存用户的按钮的保持
		}
		else{
			localStorage.removeItem("user");
			localStorage.setItem("load_check",false);
	}
	window.location.href='index.html';
	}
	else{alert("请输入正确的账号密码");}
}
//取消登录
function unload(){
	localStorage.setItem("load","false");
	location.reload();
}
//改变登录按钮为个人信息
function change(){
	if (localStorage.getItem("load")=="true") {
		$("#load_bt").css("display","none");
		$("#unload_bt").css("display","inline-block");
		$("#show_username").css("display","inline-block");
	}
	else{
		$("#load_bt").css("display","inline-block");
		$("#unload_bt").css("display","none");
		$("#show_username").css("display","none");
	}
	$.post("/api/user/",
	    {
	    	nam:"fengzhao"
	    },
	    function(data,status){
			alert("数据: \n" + data + "\n状态: " + status);
		}
		);
	//$("#show_username").txt($.get("/api/user/USER"));
}
//加载首页
function main_load(){
	change();
}
//加载登录网页时的初始行为
function on_load(){
	change();
	var c = localStorage.getItem("user");
	$("#user_name").val(c);
	document.getElementById("load_check").checked=localStorage.getItem("load_check");
}

//加载其他页面
function if_load(){
	if (localStorage.getItem("load")!="true") {
		window.location.href='load.html';
	}
	else{
		change();
	}
}

function cl_ear(){
	localStorage.setItem("load","false");
	alert("a");
}

$("#slider").powerSlider({handle:"left"});

