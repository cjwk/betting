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
		$('.gameplay>a>.pth').text($(this).text());
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
			console.log($(this).parent().parent().children('.item-son'));
			$(this).parent().parent().children('.item-son').css({
				'display':'block'
			})
		}else{
			$(this).text(textVal);
			$(this).parent().parent().children('.item-son').css({
				'display':'none'
			})
		}
		$(this).toggleClass('active');
	})


	//推荐专家最后一个li不显示下边框
	$('.recommend li:last-child').css({
		'border-bottom':'none'
	})

	//验证码倒计时
	$('.personalCenter.phlogin .content .countdown').on('click', function () {
		if($(this).hasClass('active')){
			return;
		}
		$(this).addClass('active');
		var _this =$(this);
		var t =4;
		_this.text('重新获取('+ (t+1) +')');
		// var t =5;
		var timeId = setInterval(function () {
			_this.text('重新获取('+ t-- +')');
			t=t--;
			if (t==-1){
				_this.removeClass('active');
				clearInterval(timeId);
				_this.text('重新获取')
			}
		},1000)
	})


//付款状态取消
	$('.msgbox-tips .cancel').on('click',function () {
		$('.mask').css({
			'display':'none'
		})
	})

})