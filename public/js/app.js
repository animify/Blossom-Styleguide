if (typeof(jQuery) == 'undefined') {
	console.log('App.js did not detect jQuery.')
} else {
	$(() => {
		$('#app').on('click', '.view-source', function(e) {
			const _parent = $(this).parents('.example')
			_parent.toggleClass('showing')
			_parent.find('.note').eq(0).toggleClass('hidden')
			_parent.find('.module').eq(0).toggleClass('collapsed')
		})

		$('#replay_landing').bind('click', function(e) {
			$('.landing .square').each(function(i, obj) {
				$(obj).attr("class", `square`)
				setTimeout(() => {
					$(obj).addClass(`square landing-${$(obj).attr('data-landing')}`)
				}, 100)
			})
		})
	})
}
