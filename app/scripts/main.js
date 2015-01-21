/**
 * The nav stuff
 */
(function( window ){
	
	'use strict';

	var body = document.body,
		mask = document.createElement("div"),
		togglePushTop = document.querySelector( ".toggle-push-top" ),
		pushMenuTop = document.querySelector( ".push-menu-top" ),
		activeNav
	;
	mask.className = "mask";
	/* Push menu top */
	togglePushTop.addEventListener( "click", function(){
		classie.add( body, "pmt-open" );
		document.body.appendChild(mask);
		activeNav = "pmt-open";
	} );

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});


})( window );