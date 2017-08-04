$(function(){
	$(document.body).on('click','.tab-column li',function () {
		var tabIndex=$(this).index();
		$('.showItem').eq(tabIndex).addClass('active').siblings().removeClass('active')
		$(this).addClass('active').siblings().removeClass('active');
	})
	$(document.body).on('click','.tab-title span' ,function () {
		$(this).addClass('active').siblings().removeClass('active');
		var itemIndex=$(this).index();
		$('.tab-rec>ul').eq(itemIndex).addClass('active').siblings().removeClass('active')
		$('ul.guan').eq(itemIndex).addClass('active').siblings().removeClass('active')

	})

	$(document.body).on('click','.showItem.help>ul>li>p', function () {
		if($(this).siblings('ul').hasClass('active')){
			$(this).siblings('ul').removeClass('active');
			$(this).children('span').removeClass('icon-up');
		}else{
			$(this).siblings('ul').addClass('active').end().children('span').addClass('icon-up');
		}
		
	})
	$('#datetimepicker').datetimepicker(
		{
			
			timepicker:false,
			format:'Y/m/d'
		});
$.datetimepicker.setLocale('ch')
	$('#datetimepicker2').datetimepicker(
		{
		
			timepicker:false,
			format:'Y/m/d'
		});
	//自定义radio样式
	$(document.body).on('click','.tab-select label',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).hasClass('active')?$(this).removeClass('active'):$(this).addClass('active').siblings().removeClass('active');
	})
})


if($('.tab-column ul li:first-child').hasClass('hide')){	
	$('.tab-column ul li:nth-of-type(2)').addClass('active');
	$('.showItem').eq(1).addClass('active').siblings().removeClass('active');
}



//隔行换色样式
$('table.purse tbody tr:nth-of-type(even)').css({
	'background-color':'#f4f4f4'
})


