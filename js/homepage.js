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
			$(this).parent().parent().children('.item-son').css({
				'display':'block'
			})
			$(this).parent().parent().addClass('showborder').css({
				'padding-left':'15px',
				'padding-right':'15px'
			})
			$(this).parent().parent().css({
			'padding-top':'16px'
		});
		}else{
			$(this).text(textVal);
			$(this).parent().parent().children('.item-son').css({
				'display':'none'
			})
			$(this).parent().parent().removeClass('showborder').css({
				'padding-left':'16px',
				'padding-right':'16px'
			})
			$(this).parent().parent().css({
			'padding-top':'0px'
		});
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



	$('.applyBtn').on('click',function () {
		$('.tips-name').css({
			'display':'none'
		})
		
	})
	$('.applyBtn').on('mouseenter',function(){
		$('.tips-name').css({
			'display':'block'
		})
	}).on('mouseleave',function() {
		$('.tips-name').css({
			'display':'none'
		})
	})



	//自定义radio样式
	$(document.body).on('click','.mode>label',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).addClass('active').siblings().removeClass('active');
	})
	// $(document.body).on('click','label.refund',function(event){
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$(this).hasClass('active')?$(this).removeClass('active'):$(this).addClass('active');
	// 	console.log($('#select').is(':checked'));
	// })


	//分页按钮样式

	function pagenation (num){
		if(num<=5){
			for(var i=0;i<num;i++){
				$('.pages ul').append('<li>'+(i+1)+'</li>')
			}
			$('.pages').width((num+2)*33);
			$('.pages ul li:first-child').addClass('current')
		} else{
			for(var i=0;i<3;i++){
				$('.pages ul').append('<li>'+(i+1)+'</li>')
			}
			$('.pages ul').append('<li>...</li><li>'+num+'</li>')
			$('.pages ul li:first-child').addClass('current')
			//点击事件
			var pageIndex=$('.pages>ul>.current').index()+1;
			$('.pages .arr-right').on('click',function(){
				$('.pages .arr-left').css({
					'background-image':'url(./img/arrow-left-1.png)'
				})
				if(pageIndex==2){
					$('.pages ul li').eq(1).text('...');
				}
				if(pageIndex>=3 && pageIndex<num-2){;
					$('.pages ul li').eq(2).text(++pageIndex);
					return;
				}
				if(pageIndex==num-2){
					$('.pages ul li').eq(3).text(num-1);
					
				}
				if($('.pages ul li').eq(4).hasClass('current')){
					return;
				}else{
					$('.pages>ul>.current').removeClass('current').next().addClass('current');
					if($('.pages ul li').eq(4).hasClass('current')){
					$('.pages .arr-right').css({
					'background-image':'url(./img/arrow-right-2.png)'
				})
				}
					++pageIndex;
				}
			})
			//左点击事件

			$('.pages .arr-left').on('click',function(){
				$('.pages .arr-right').css({
					'background-image':'url(./img/arrow-right-1.png)'
				})
				// var pageIndex=$('.pages>ul>.current').index();
				if(pageIndex==1){
					$(this).css({
						'background-image':'url(./img/arrow-left-2.png)'
					})
				}
				if(pageIndex==0){
					return;
				}else{
					$('.pages>ul>.current').removeClass('current').prev().addClass('current')


				}
			})
		}
		
	}
	// pagenation(10);
	
	//滚动
	$(window).on('scroll',function() {
		var scrollTop= $(this).scrollTop();
		if(scrollTop>0){
			$('.gotop').css({
				'display':'block'
			})
		}else{
			$('.gotop').css({
				'display':'none'
			})
		}
	})
	$(document.body).on('click','.gotop',function(){
		var userAgent = navigator.userAgent.toLowerCase();
		var moz = /Gecko\//i.test(userAgent);
		var ie=/msie/.test( userAgent ) && !/opera/.test( userAgent )
		var body=document[moz?'documentElement':'body'];
		body=ie?document.documentElement:body;
		$(body).animate({scrollTop:0},200);
	})
})