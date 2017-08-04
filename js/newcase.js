$(function () {
	//滚动条初始化
	 $(window).on("load",function(){
            $(".table-wrap").mCustomScrollbar({
            	theme:"dark"
            });
        });


		$(document.body).on('mouseenter','.choose>div>span',function () {
		$(this).addClass('active');
	});
	$(document.body).on('mouseleave','.choose>div>span',function () {
		$(this).removeClass('active');
	});
	$(document.body).on('click','.choose>div>span>ul>li>a', function() {
		$(this).parent().parent().parent().children('.word').text($(this).text());
		$(this).parent().parent().parent().find('a.active').removeClass('active');
		$(this).parent().parent().parent().removeClass('active');
		$(this).addClass('active');
	})

	//隔行换色
	$('.table-wrap tr:nth-of-type(even)').addClass('even');
	$('.table-wrap tr:nth-of-type(odd)').addClass('odd');

	//点击选中状态
	$('.fjc').on('click','.tbody td.choose',function() {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			return;
		}
		$(this).addClass('active').siblings().removeClass('active').parent().siblings().children().removeClass('active');
	})
	//竞彩单关
	$('.jc').on('click','.tbody td.choose',function() {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			return;
		}
		if($('.jc td.choose.active').parent().children('.active').length===2){
			return;
		}
		else{
			if($(this).parent().parent().parent().parent().parent().siblings().find('.choose.active').length !=0 || $(this).parent().siblings().children('.choose.active').length!=0){
				return;
				
			}else{
				$(this).addClass('active');
			}
			
		}
	})
	//tab切换
	$(document.body).on('click','.choose .fl>span',function (){
		$(this).addClass('sel').parent().siblings().find('.sel').removeClass('sel');
	})
	$(document.body).on('click','.choose .fl ul>li>a',function() {
		$(this).parent().parent().siblings().find('span').addClass('sel').parent().parent().parent().siblings().find('.sel').removeClass('sel');
	})



//label选择

$(document.body).on('click','.msgbox-publish .select label',function(event){
	event.stopPropagation();
	event.preventDefault()
	if($(this).children('span').hasClass('active')){
		$(this).children('span').removeClass('active');
	}else{
		$(this).children('span').addClass('active');
	}

})

})