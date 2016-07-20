var $dentures = $('.dentures');
var $subtext = $('.subtext');
var $chelle = $('.chelle');

var $thumbcake = ('.thumbnail-cake');
var $thumbspace = ('.thumbnail-space');
var $thumbdive = ('.thumbnail-dive');
var $fullsize = ('.fullsize');


$chelle.on('mouseover', function () {
	$dentures.addClass('rollteeth');
	$subtext.addClass('fadein');
});

$chelle.on('click', function () {
	$dentures.addClass('rollteeth');
	$subtext.addClass('fadein');
});

$chelle.on('animationend', function () {
	$dentures.removeClass('rollteeth');
	$subtext.removeClass('fadein');
});

