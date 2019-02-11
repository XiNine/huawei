//轮播图区域
var i = 0, time;
$(document).ready(function () {
	//eq(0)选择给定索引值的元素 siblings() 获得匹配集合中每个元素的同胞
	$('.lbt li').eq(0).show().siblings().hide()
	timer();
	//点击左按钮时清除定时器
	$('.btn-left').click(function () {
		clearInterval(time);
		if (i == 6) {
			i == 0;
		}
		i++;
		//再次调用淡入淡出效果和定时器效果
		show();
		timer();
	})
	//点击右边按钮时清除定时器
	$('.btn-right').click(function () {
		clearInterval(time)
		if (i == 0) {
			i = 6;
		}
		i--;
		show();
		timer();
	})
})
//自动轮播效果
function timer() {
	time = setInterval(function () {
		show();
		i++;
		if (i == 6) {
			i = 0;
		}
	}, 2000)
}
//淡入淡出效果
function show() {
	$('.lbt li').eq(i).fadeIn(500).siblings().fadeOut(500)
}