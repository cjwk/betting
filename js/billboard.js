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
	$('.bill-items>li:first-child .icon-hat').css({
		'background-image':'url(../img/gold.png)'
	})
	$('.bill-items>li:nth-of-type(2) .icon-hat').css({
		'background-image':'url(../img/gold.png)'
	})
	$('.bill-items>li:nth-of-type(3) .icon-hat').css({
		'background-image':'url(../img/gold.png)'
	})
	// $('.bill-items>li:first-child .icon-bill').css({
	// 	'background-image':'url(../img/No1.png)',
	// 	// 'width':''
	// })
	// $('.bill-items>li:nth-of-type(2) .icon-bill').css({
	// 	'background-image':'url(../img/gold.png)'
	// })
	// $('.bill-items>li:nth-of-type(3) .icon-bill').css({
	// 	'background-image':'url(../img/gold.png)'
	// })
})