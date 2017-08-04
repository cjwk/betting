$(function() {
	// 控制显示下拉菜单
	$(document.body).on('mouseenter','.bill-select>div>span',function () {
		$(this).addClass('active');
	});
	$(document.body).on('mouseleave','.bill-select>div>span',function () {
		$(this).removeClass('active');
	});
	$(document.body).on('click','.bill-select>div>span>ul>li>a', function() {
		$(this).parent().parent().parent().children('.word').text($(this).text());
		$(this).parent().parent().parent().find('a.active').removeClass('active');
		$(this).parent().parent().parent().removeClass('active');
		$(this).addClass('active');
	})


	//tab切换
	$('.bill-header').on('click','span',function (){
		$(this).addClass('active').siblings().removeClass('active');
		var tabIndex= $(this).index()
		$('.bill-content').removeClass('active');
		$('.bill-content').eq(tabIndex).addClass('active');
	})
	//设置头像和排名
	$('.bill-items>li:first-child .icon-bill').css({
		'background-image':'url(../img/NO1.png)'
	})
	$('.bill-items>li:nth-of-type(2) .icon-bill').css({
		'background-image':'url(../img/NO2.png)'
	})
	$('.bill-items>li:nth-of-type(3) .icon-bill').css({
		'background-image':'url(../img/NO3.png)'
	})
	$('.bill-items>li:nth-of-type(n+4) .icon-no').each(function () {
		var index=$(this).parent().parent().index()+1;
		$(this).text(index);
		$(this).css({
			'visibility': 'visible'
		})
	})
	//截取字符串长度  Y*L=n*X+D
	var Y=3;
	var L=$('.item-intr p').width();
	var X=14
	var D=14
	var n=(Y*L-D)/X
	$('.item-intr p').each(function () {
		var str =$(this).text()
		var newStr= str.substring(0,n);
		if(str.length>=n){
			$(this).text(newStr+'...');
		}else{
			$(this).text(newStr);
		}
		
	})

})