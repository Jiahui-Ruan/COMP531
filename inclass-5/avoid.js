	//design the pattern of button escaping
	var escape = function(){
		var docHeight = $(document).height(),
	        docWidth = $(document).width(),
	        $button = $('#btn'),
	        btnWidth = $button.width(),
	        btnHeight = $button.height(),
	        heightMax = docHeight - btnHeight,
	        widthMax = docWidth - btnWidth;
	    //change the postion of the button by css
	    $button.css({
	        left: Math.floor( Math.random() * widthMax ),
	        top: Math.floor( Math.random() * heightMax )
	    });
	}

	var state = document.getElementById('btn');
	var congrats = document.getElementById('hidden');

	//when the mouse approch the button, it escapes
	$('#btn').hover(function(e) {
		if(e.shiftKey) {
			return false;
		}
		
		if(state.innerHTML == "Play Again") {
			return false;
		}
		escape();
	});
	//there are two state when the btn is clicked
	$('#btn').click(function() {
		if(state.innerHTML == "Click Me") {
			/*inline-block enables multiple lines*/
			congrats.style.display = 'inline-block';
			escape();
			state.innerHTML = "Play Again";
		}
		else if(state.innerHTML == "Play Again") {
			congrats.style.display = 'none';
			escape();
			state.innerHTML = "Click Me";
		}
	});
	$('#tips').click(function() {
		alert("press shiftKey to stop the button.");
	})