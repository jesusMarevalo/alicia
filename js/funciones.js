function mostrarCaja(x){
	$('#box'+x+' .caja_negra').css({'opacity':'0.8'});
	$('#box'+x+' .subtitulo').css({'opacity':'1'});
	$('#box'+x+' .link').css({'opacity':'1'});
}

function esconderCaja(x){
	$('#box'+x+' .caja_negra').css({'opacity':'0'});
	$('#box'+x+' .subtitulo').css({'opacity':'0'});
	$('#box'+x+' .link').css({'opacity':'0'});
}


function abrir(x){
	$('#descripcion'+x).toggle();
}

function ajustarImagenes(){
	var w = $('#content').width();
	
	var big = w;
	
	var medium = (w/2);
	var small = (w/4);
	var triple = (w/4*3);
	$('.big img').css({'width':big});
	$('.medium img').css({'width':medium});
	$('.small img').css({'width':small});
	$('.triple img').css({'width':triple});
	
}

jQuery(window).load(function(){

	ajustarImagenes();

});

$(document).ready(function(){ 
	ajustarImagenes();
 
});

$(window).bind('resize', function(e){
	window.resizeEvt;
	$(window).resize(function() {
		clearTimeout(window.resizeEvt);
		window.resizeEvt = setTimeout(function(){
		}, 250);
	});
});

$(window).resize(function(){ 
	ajustarImagenes();

});