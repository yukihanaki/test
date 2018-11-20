jQuery(function($) {
	//アイコン hoverアクション
	$('#sample1_btn a img').each(function(){
		var img = $(this);
		var src_off = img.attr('src');
		var src_on = src_off.replace(/^(.+)_off(\.[^\.]+)$/, '$1_on$2');
		$('<img />').attr('src', src_on);
		$(this).parents('a').hover(function(){
			img.attr('src', src_on);
		},function(){
			img.attr('src', src_off);
		});
	});
});
