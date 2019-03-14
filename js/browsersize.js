function getBrowserInfo() {
	var ua = navigator.userAgent.toLocaleLowerCase();
	var browserType = null;
	if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
		browserType = "IE";
		if (parseInt($('html').width()) <= 1440) {
			$('html').css("zoom", "1.25");
		}

		browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
		$('.design-flow .content .pic img').css("top", "0.65rem");
		var kaForm = $('.ka-present-form .ka-product-content .per-right');
		kaForm.find('.pic2').css({
			'width': "130px",
			'height': '255px'
		});
		kaForm.find('.pic3').css({
			'width': "166px",
			'height': '336px'
		});
		kaForm.find('.pic4').css({
			'width': "192px",
			'height': "375px"
		});
		kaForm.find('.pic5').css({
			'display': "none"
		});

	} else if (ua.match(/firefox/) != null) {
		browserType = "火狐";
		var textBox = $('.cc-poster .text-box');
		textBox.find('.text').css({
			'padding-top': '28px',
			'padding-bottom': '30px'
		});
		textBox.find('h1').css("font-size", "22px");
		textBox.find('p').css({
			'font-size': '12px'
		});
	} else if (ua.match(/ubrowser/) != null) {
		browserType = "UC";
	} else if (ua.match(/opera/) != null) {
		browserType = "欧朋";
	} else if (ua.match(/bidubrowser/) != null) {
		browserType = "百度";
	} else if (ua.match(/metasr/) != null) {
		browserType = "搜狗";
	} else if ((ua.match(/tencenttraveler/) != null) || (ua.match(/qqbrowse/) != null)) {
		browserType = "QQ";
		if (parseInt($('html').width()) < 800) {
			$('html').css("zoom", "1.3");
		}
	} else if (ua.match(/maxthon/) != null) {
		browserType = "遨游";
	} else if (ua.match(/chrome/) != null) {
		browserType = "谷歌";
		var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");

		function _mime(option, value) {
			var mimeTypes = navigator.mimeTypes;
			for (var mt in mimeTypes) {
				if (mimeTypes[mt][option] == value) {
					return true;
				}
			}
			return false;
		}
		if (is360) {
			browserType = '360';
			// if (parseInt($('html').width()) <= 1440) {
			// 	$('html').css("zoom", "1.25");
			// }

		} else {
			// $('html').css("zoom", ".80");
			if (parseInt($('html').width()) < 800) {
				$('html').css("zoom", "1");
			}
		}
	} else if (ua.match(/safari/) != null) {
		browserType = "Safari";
	}
	return browserType;
}
getBrowserInfo();

// if (getBrowserInfo() == "360") {
// 	$('html').css({'font-size': 'calc(4.1666666666vw)'});
// }
// if (getBrowserInfo() == "QQ") {
// 	$('html').css({'font-size': 'calc(4.1666666666vw)'});
// }
// if (getBrowserInfo() == "IE") {
// 	$('html').css({
// 		'font-size': 'calc(4.17334401709399vw)'
// 	});
// }
// if (getBrowserInfo() == "火狐") {
// 	$('html').css({'font-size': 'calc(6.510417vw)'});
// }
// if (getBrowserInfo() == "谷歌") {
// 	$('html').css({
// 		'font-size': 'calc(6.510417vw)'
// 	});
// }