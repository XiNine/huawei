//轮播图
var i = 0;
var time;
$(document).ready(function () {
	$('.lbt li').eq(0).show().siblings().hide()
	//eq(0)选择给定索引值的元素\siblings() 获得匹配集合中每个元素的同胞
	timer();
	$('.btn-left').click(function () {
		clearInterval(time);
		if (i == 6) {
			i == 0;
		}
		i++;
		show();
		timer();
	})
	$('.btn-right').click(function () {
		clearInterval(time)//清除定时器
		if (i == 0) {
			i = 6;
		}
		i--;
		show();
		timer();
	})
})
function timer() {
	//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
	time = setInterval(function () {
		show();
		i++;
		if (i == 6) {
			i = 0;
		}
	}, 2000)
}
function show() {
	$('.lbt li').eq(i).fadeIn(300).siblings().fadeOut(300)//fadeIn:淡入/fadeOut:淡出
}

// 搜索框
