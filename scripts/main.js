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
	x = ($input.val()>=16 ? 'Drive up a storm!' : 'Go home');
	if ($input.val()<1){
		x = 'Please enter a valid age';
	}
	if ($input.val()>99){
		x = 'Get off the road, Geezer';
	}
	$output.html(x);
	$input.val('');
})