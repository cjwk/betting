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

$(function(){
	var oldintr =$('.intr-wrap2 .intr').text();
	 var newintr= $('.intr-wrap2 .intr').text().substring(0,100);
	if($('.intr-wrap2 .intr').text().length>100){
		$('.intr-wrap2 .intr').html(newintr+'...'+'<a>详情</a>');
	}


$('.intr-wrap2 .intr').on('click','a',function(){
	$('.intr-wrap2 .intr').html(oldintr+'<i> 收起</i>');
})
$('.intr-wrap2 .intr').on('click','i',function(){
	$('.intr-wrap2 .intr').html(newintr+'...'+'<a>详情</a>');
})
})

// 新增

$(function(){
	$('.table-wrap ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
    $(document.body).on('click','.datech span',function(){
      $(this).addClass('active').siblings().removeClass('active')
    })

})

  $(function () {
  	var subtitle='周期盈利率走势';
  	var time= Date.parse(new Date().toLocaleDateString())
    var time7=[]
    for(var i=7;i>0;i--){
        // time7.push([time-i*24*3600*1000,0.5])
        time7.push(time-i*24*3600*1000)
    }
  	var new7 =[[time7[0],-0.3],[time7[1],0.7],[time7[2],0.5],[time7[3],0.8],[time7[4],0.7],[time7[5],0.6]]
  	//hover是图表跟随鼠标
  	
	$(document.body).on('mouseenter','td.yl',function(event){
  		event.preventDefault()
  		event.stopPropagation(); 
  		subtitle='周期盈利率走势'
  		$('#container-wrap').css({
  			top:this.offsetTop,
  			left:this.offsetLeft+98,
  			display:'block'
  		})
  		render()
  	})
 $(document.body).on('mouseenter','td.mz',function(event){
  event.preventDefault()
  event.stopPropagation(); 
  subtitle='周期命中率走势'
  new7 =[[time7[0],0.3],[time7[1],null],[time7[2],0.5],[time7[3],0.8],[time7[4],0.7],[time7[5],0.6]]
  $('#container-wrap').css({
   top:this.offsetTop,
   left:this.offsetLeft+99,
   display:'block'
 })
  render()
})
  	$(document.body).on('mouseenter','td.first',function(event){
  		$('#container-wrap').css({
  			top:this.offsetTop+1
  		})
  	})
  	$(document.body).on('mouseleave','td.yl,td.mz',function(event){
  		event.preventDefault()
  		event.stopPropagation(); 
  		$('#container-wrap').css({
  			display:'none'
  		})
  	})

    Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
    function render (){
    	$('#container').highcharts({
         credits:{
    		 enabled:false // 禁用版权信息
		},
        chart: {
            type: 'spline',
            width:312,
            height:190
        },
        title: {
            text: subtitle,
            style:{
        	color:"rgb(249,115,91)",
        	fontSize:'12px',
    }
        },
        subtitle: {
            text: '' 
        },
        xAxis: {
            type: 'datetime',  
            dateTimeLabelFormats: {   
                day: '%m-%d',  
            },
            tickmarkPlacement: 'on',
            crosshair:{
                color:'#1fa0ff'
            },
            startOnTick:false,

        },
        plotOptions: {
            series: {
                pointPlacement: 'on'
            },
            column: {
                dataLabels: {
                overflow: "none", 
                crop: false,
             }
         }
        },
        yAxis: {
            title: {
                text: '盈利率 %',
                align:'high',
                offset:0,
                rotation:0,
                y:-15,
                display:'block'
            },
            crosshair:{
                color:'#1fa0ff'
            },
            tickInterval:0.1,
            labels: {
                formatter: function () {
                    return this.value*100
                },

            },
            gridLineDashStyle:'Dash'
        },
        tooltip: {
            formatter: function () {   
                            return Highcharts.dateFormat('%m-%d',this.x)+'<br/>盈利率:' + this.y.toFixed(2)*100+'%';    
                        }    
        },
        
        series: [{
            name: '每日盈利',
            data: new7,
            color:'rgb(249,115,91)',
            showInLegend: false
        }]
    });
    }
    render()
    
});
//中文数字转阿拉伯数字
// var cnNum2ArabNum = function(cn){
//     var arab, parts, cnChars = '零一二三四五六七八九'

//     if (!cn) {
//         return 0
//     }

//     if (cn.indexOf('亿') !== -1){
//         parts = cn.split('亿')
//         return cnNum2ArabNum(parts[0]) * 1e8 + cnNum2ArabNum(parts[1])
//     }

//     if (cn.indexOf('万') !== -1){
//         parts = cn.split('万')
//         return cnNum2ArabNum(parts[0]) * 1e4 + cnNum2ArabNum(parts[1])
//     }

//     if (cn.indexOf('十') === 0){
//         cn = '一' + cn
//     }

//     arab = cn
//         .replace(/[零一二三四五六七八九]/g, function (a) {
//             return '+' + cnChars.indexOf(a)
//         })
//         .replace(/(十|百|千)/g, function(a, b){
//             return '*' + (
//                 b == '十' ? 1e1 :
//                 b == '百' ? 1e2 : 1e3
//             )
//         })
    
//     return (new Function('return ' + arab))()
// }


 $(function(){
 	$(document.body).on('click','table th:not(:first-child)',function(){
 		var index = $(this).index();
 		if($(this).hasClass('active')){
 			$(this).removeClass('active')
       var arr=[];
      var next=$(this).parent().nextAll()

      var oldnext = Array.prototype.slice.call(next,0);
      
      Array.prototype.splice.call(next,-1,1);
      next.each(function(){
        
        arr.push(parseFloat($(this).children().eq(index).text().replace(/%/,'')))
        console.log(arr);
      })
      oldarr= arr.slice(0)
      arr.sort(function(a,b){
        return b-a
      })
      var flag={};
      for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
          if(oldarr[i]==arr[j]){
            if(!(j in flag)){
              flag[j]='dd'
              $(next.eq(j)).replaceWith($(oldnext[i]).clone(true));
              break;
            }
          }
        }
      }
      $(this).parent().nextAll().find('td.first').removeClass('first');
     $(this).parent().nextAll().eq(0).children('td:nth-of-type(n+3)').addClass('first');
 			
 		}else{
 			$(this).addClass('active')
      var arr=[];
      var next=$(this).parent().nextAll()

      var oldnext = Array.prototype.slice.call(next,0);
      
 			Array.prototype.splice.call(next,-1,1);
      next.each(function(){
        arr.push(parseFloat($(this).children().eq(index).text().replace(/%/,'')))

      })
      oldarr= arr.slice(0)
      arr.sort(function(a,b){
        return a-b
      })
       var flag={}
 			for(var i=0;i<arr.length;i++){

        for(var j=0;j<arr.length;j++){
          if(oldarr[i]==arr[j] ){
           
            if(!(j in flag)){
              flag[j]='kk'
              console.log(flag);
               $(next.eq(j)).replaceWith($(oldnext[i]).clone(true));
               break;
            }
          }
        }
      }
      
      $(this).parent().nextAll().find('td.first').removeClass('first');
     $(this).parent().nextAll().eq(0).children('td:nth-of-type(n+3)').addClass('first');
    
 		}
 	})

  //新增tricker方法

$('table tr:nth-of-type(2) td').addClass('first');
    
 
    $(document.body).on('click','.datech span',function(){
      $(this).addClass('active').siblings().removeClass('active')
    })

 $('.table-wrap ul > li:last-child').css({
    'border-right':'1px solid #bbe2ff'
 })
    
 })

