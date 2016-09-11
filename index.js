$(function(){
	$('.input1').focus(function(){
		var oVal=$(this).val();
		if(oVal='输入您要查找的商品的名称'){ 
		    $(this).attr('value','').css('color','#333');
		}
	});
	$('.input1').blur(function(){
		var oVval=$(this).val();
		if ( oVval==''){
			 $(this).attr('value','输入您要查找的商品的名称').css('color','#ccc');
	     }
	});
	$('.left1').hover(function(){
		$(this).children('ul').stop().show();
	},function(){
		$(this).children('ul').stop().hide();
	});
	
	
	$('.fu2 li').click(function(){		
			var num=$(this).index()	
		
		$('.ul1 li').eq(num).stop().fadeIn().siblings().stop().fadeOut();
		$('.fu2 li').eq(num).addClass('act').siblings().removeClass('act');
	});
	$( '.ul_l li').hover(function(){
		$(this).addClass('cur1').siblings().addClass('cur2')
	},function(){
		$(this).addClass('cur2')
	});
	
	  
	});
	