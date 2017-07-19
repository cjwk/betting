$(function () {

	$(document.body).on('click','.subnav .fl a',function(){
		$('.subnav .fl a.active').removeClass('active');
		$(this).addClass('active');
	})
	// 导航栏样式切换
	$(document.body).on('click', '.nav a',function () {
		$('.nav .active').removeClass('active');
		$(this).addClass('active');
	});
	// 控制显示下拉菜单
	$(document.body).on('mouseenter','.gameplay',function () {
		$('.moreGameplay').addClass('active');
	});
	$(document.body).on('mouseleave','.gameplay',function () {
		$('.moreGameplay').removeClass('active');
	});
	$(document.body).on('click', '.moreGameplay a',function() {
		$('.gameplay>a>.pth').text($(this).text());
		$('.moreGameplay').removeClass('active');
		$('.moreGameplay a.active').removeClass('active');
		$(this).addClass('active');
	})
	//专家更多推荐切换
	var textVal='';
	$(document.body).on('click','.getMore>p',function(){
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
	$(document.body).on('click', '.personalCenter.phlogin .content .countdown',function () {
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

	$(document.body).on('click', '.msgbox-phno .verify-word',function () {
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
	$(document.body).on('click','.msgbox-tips .cancel',function () {
		$('.mask').css({
			'display':'none'
		})
	})
//付款确定按钮
	$(document.body).on('click','.msgbox-tips .confirm',function () {
		$('.mask').css({
			'display':'none'
		})
		//调用后台逻辑



	})
	//付款关闭按钮
	$(document.body).on('click','.mask .close',function () {
		$('.mask').css({
			'display':'none'
		})
	})

	// 支付方式选择
	$(document.body).on('click','.mask .chooseBtn',function () {
		$('.mask .chooseBtn.active').removeClass('active');
		$(this).addClass('active');
		$('.tipsword').removeClass('active');
		if($(this).hasClass('wx')){
			$('.msgbox-pay .wx-tip').addClass('active');
		}else{
			$('.msgbox-pay .zfb-tip').addClass('active');
		}
	})

	//滚动加载逻辑
	// var loading = false;
	// $(window).on('scroll',function() {
	// 	var offsetTop= $('.main>.content').offset().top;
	// 	var scrollTop= $(this).scrollTop();
	// 	var height=$('.main>.content').height();
	// 	var winHeight=$(window).height();
	// 	var bottomHeight=(offsetTop+height)-(scrollTop+winHeight)
	// 	console.log(bottomHeight)
	// 	if(bottomHeight<30 && !loading){
	// 		loading = true;
	// 		console.log('再加载一次')
	// 		$('.recItems>ul').append("<li class='clearfix active haveMore pr'><div class='clearfix item-wrap'></div></li>")
	// 		loading =false;
	// 	}
	// })

	//最后一个li样式
	$('.moreRec.item-son li:last-child').css({
		'margin-bottom':'0'
	});
})