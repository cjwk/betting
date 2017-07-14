$(function () {

	$('.subnav .fl a').on('click',function(){
		$('.subnav .fl a.active').removeClass('active');
		$(this).addClass('active');
	})
	// 导航栏样式切换
	$('.nav a').on('click', function () {
		$('.nav .active').removeClass('active');
		$(this).addClass('active');
	});
	// 控制显示下拉菜单
	$('.gameplay').on('mouseenter',function () {
		$('.moreGameplay').addClass('active');
	});
	$('.gameplay').on('mouseleave',function () {
		$('.moreGameplay').removeClass('active');
	});
	$('.moreGameplay a').on('click', function() {
		console.log($(this).text());
		$('.gameplay>a').text($(this).text());
	}).on('click', function () {
		$('.moreGameplay').removeClass('active');
		$('.moreGameplay a.active').removeClass('active');
		$(this).addClass('active');
	})
	//专家更多推荐切换
	var textVal='';
	$('.getMore>p').on('click',function(){
		if($(this).hasClass('active')){
			textVal=$(this).text();
			$(this).text('收起专家其余推荐');
			$('.item-son').css({
				'height':'98px'
			})
		}else{
			$(this).text(textVal);
			$('.item-son').css({
				'height':'0'
			})
		}
		$(this).toggleClass('active');
	})

})