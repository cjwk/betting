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
})