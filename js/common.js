
$(function() {
	var oldintr =$('.per-intr').text();
	 var newintr= $('.per-intr').text().substring(0,33);
	 console.log(newintr)
	if($('.per-intr').text().length>33){
		$('.per-intr').html(newintr+'...'+'<a>详情</a>');
	}


$('.per-intr').on('click','a',function(){
	$('.per-intr').html(oldintr+'<i> 收起</i>');
})
$('.per-intr').on('click','i',function(){
	$('.per-intr').html(newintr+'...'+'<a>详情</a>');
})

})