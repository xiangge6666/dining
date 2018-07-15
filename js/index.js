$(document).ready(function(){
	
//	获取和改变样式
	
	var bannerw = parseInt($('.ban-title .over').css('width'));
	var dotnum = 999;
	$('.dot div span').eq(0).css('opacity',1);
	
	var banul = $('.ban-title ul');
	var banli = banul.children('li')
	
	banul.append(banli.first().clone());
	banul.prepend(banli.last().clone());
	
	var banlilen = $('.ban-title ul li').length;
	var aaaaaaaaaa = (bannerw)*(banlilen);
	
	$('.ban-title ul').css('width',(aaaaaaaaaa + 'px'));
	$('.ban-title ul li').css('width',bannerw + 'px');
	$('.ban-title ul').css('left',-bannerw + 'px');
	
	var accli = $('.menu-accordion ul li');
	
	for (var i = 0; i < accli.length; i++ ) {
		accli.eq(i).css('width','12%');
	}
	
//	折叠菜单
	
	accli.click(function(){
		
		
		var i = $(this).index();
		accli.css('width','12%');
		$(this).css('width','36%');
		
	})
	
	
	
	
	
//	轮播按钮
	
	$('.btn-left').click(function(){
		$('.ban-title ul').stop(true,false).animate({
			left: '-=' + bannerw
		},function(){
				dotnum++;
			var x = parseInt($('.ban-title ul').css('left'));
			var y = parseInt(bannerw)*(banlilen-2);
			if (x < -y) {
				$('.ban-title ul').css('left',-bannerw);
			};
			$('.dot div span').css('opacity',0.6);
			$('.dot div span').eq(dotnum%3).css('opacity',1);	
			console.log(x)
			console.log(y)
		})
	});
	
	
	$('.btn-right').click(function(){
		$('.ban-title ul').stop(true,false).animate({
			left: '+=' + bannerw
		},function(){
				dotnum--;
			var x = parseInt($('.ban-title ul').css('left'));
			var y = bannerw*(banlilen-2);
			if (x >= 0) {
				$('.ban-title ul').css('left',-y);
			};
			$('.dot div span').css('opacity',0.6);
			$('.dot div span').eq(dotnum%3).css('opacity',1);			
		})
	})
	
	
	
	
	
})