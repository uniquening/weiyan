// 头部导航开始
jQuery(document).ready(function() {

	var ulTotWidth = 0;
	var curIndex = '';
	$('.nav-btn>li').each(function(index, ele) {
		if ($(this).hasClass('active')) {
			curIndex = index;
		}
	})
	$('.nav-btn>li').hover(function() {
		if ($(this).find('ul').length != 0) {
			$(this).find('.sec-menu').css('display', 'block');
			$(this).find('ul').each(function(ele, index) {
				ulTotWidth += $(this).width();
			})
			ulTotWidth += 24;
			$(this).siblings().removeClass('active tria-active');
			$(this).addClass('active tria-active');
			$(this).find('.sec-menu').css('display', 'none');

			$(this).find('.sec-menu').css({
				'width': ulTotWidth + 'px',
				'height': 'auto'
			});
			$(this).find('.sec-menu').stop(true).slideDown(500);
		}
	}, function() {
		$(this).removeClass('active tria-active');
		$(this).find('.sec-menu').stop(true).slideUp(500)
			.css({
				'height': '0'
			});
		$('.nav-btn>li').eq(curIndex).addClass('active');
		ulTotWidth = 0;
	})
})

// 头部导航结束



jQuery(document).ready(function() {
	var curIndex = '';
	$('.per-left .sidebar .nav-menus .nav-box ul>li>a').each(function(index, ele) {
		if ($(this).hasClass('active')) {
			curIndex = index;
		}
	})
	$('.per-left .sidebar .nav-menus .nav-box ul>li>a').mouseenter(function() {

		$('.per-left .sidebar .nav-menus .nav-box ul>li>a').removeClass('active');
		$(this).addClass('active');
	}).mouseleave(function() {
		var sidebarA = $('.per-left .sidebar .nav-menus .nav-box ul>li>a')
		sidebarA.removeClass('active');
		sidebarA.eq(curIndex).addClass('active');
	})
})