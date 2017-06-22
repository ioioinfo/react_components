$(document).ready(function() {
//缁戝畾鍏冪礌鐐瑰嚮浜嬩欢
$(".menu_list ul li").click(function() {
	//鍒ゆ柇瀵硅薄鏄樉绀鸿繕鏄殣钘�
	if($(this).children(".div1").is(":hidden")){
		//琛ㄧず闅愯棌
		if(!$(this).children(".div1").is(":animated")) {
			$(this).children(".xiala").css({'transform':'rotate(180deg)'});
			//濡傛灉褰撳墠娌℃湁杩涜鍔ㄧ敾锛屽垯娣诲姞鏂板姩鐢�
			$(this).children(".div1").animate({
					height: 'show'
				}, 1000)
				//siblings閬嶅巻div1鐨勫厓绱�
				.end().siblings().find(".div1").hide(1000);
		}
	} else {
		//琛ㄧず鏄剧ず
		if(!$(this).children(".div1").is(":animated")) {
			$(this).children(".xiala").css({'transform':'rotate(360deg)'});
			$(this).children(".div1").animate({
					height: 'hide'
				}, 1000)
				.end().siblings().find(".div1").hide(1000);
		}
	}
});

//闃绘浜嬩欢鍐掓场锛屽瓙鍏冪礌涓嶅啀缁ф壙鐖跺厓绱犵殑鐐瑰嚮浜嬩欢
$('.div1').click(function(e){
	e.stopPropagation();
});

//鐐瑰嚮瀛愯彍鍗曚负瀛愯彍鍗曟坊鍔犳牱寮忥紝骞剁Щ闄ゆ墍鏈夊叾浠栧瓙鑿滃崟鏍峰紡
$(".menu_list ul li .div1 .zcd").click(function() {
	//璁剧疆褰撳墠鑿滃崟涓洪€変腑鐘舵€佺殑鏍峰紡锛屽苟绉婚櫎鍚岀被鍚岀骇鍒殑鍏朵粬鍏冪礌鐨勬牱寮�
	$(this).addClass("removes").siblings().removeClass("removes");
	//閬嶅巻鑾峰彇鎵€鏈夌埗鑿滃崟鍏冪礌
	  $(".div1").each(function(){
	  		//鍒ゆ柇褰撳墠鐨勭埗鑿滃崟鏄惁鏄殣钘忕姸鎬�
	  		if($(this).is(":hidden")){
	  			//濡傛灉鏄殣钘忕姸鎬佸垯绉婚櫎鍏舵牱寮�
	  			$(this).children(".zcd").removeClass("removes");
		  		}
		  });
	});
});
