$(document).ready(function(){
	$('#search').click(function(){
		$('#search').hide();
		$('#div-src').show(1, function(){
			$('#btn-src').show(1, function(){
				$('#inpu-src').show();
				$('#inpu-src').animate({
					width: 160+'px'
				})
			
		})

		})


		return false;

	});

});