'use strict';
var $ = require ('jquery');
window.$ = require('jquery');
window.jQuery = $;

var $form = $('form');
var $input = $('input');
var $output = $('.output');

$form.on('submit', function(e){
	e.preventDefault();
	var x;
	
	x = ($input.val()<1 ? 'Please enter a valid age' 
		: $input.val()>99 ? 'Get off the road, Geezer!' 
		: $input.val()>=16 ? 'Drive up a storm!': 'go home stupid');
	$output.html(x);
	$input.val('');
})