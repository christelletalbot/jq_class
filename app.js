console.log("coucou"); //console log pour vérifier que la console soit lie à ma page//

$("#Full").on("click", function(){  //j'appelle jquery pour lorsque je clique sur le button full j'ajoute 
	$("div").addClass("full")       // la couleur dans tout les éléments
});
$("#Empty").on("click", function(){  // lorsque je clique sur empty j'enlève la couleur 
	console.log("click");
	$("div").removeClass("full")
});
$(".circle").on("click", function(){  // j'appelle jquery quand je cliq sur le cercle il prend une couleur
	var classValue=$(this).attr("class")
	$(this).addClass("full")
	if(classValue==="circle full"){  // si le cercle est en couleur alors je le remet transparent
		$(this).removeClass("full")
	}
});
// $(".square").on("click", function(){
// 	$(this).removeClass("full")
// 	if(classValue==="circle full"){
// 		$(this).toggleClass("full")
// 	}
// }()(jQuery);

// $(".square").on("click", function(){
// 	$square = $ (this);

// 	if($square.hasClass('empty')) {
// 		$square.parents('.row').children('div').remoteClass('empty');
// 	}else{
// 		$square.parents('.row').children('div').addclass('empty');
// 	}	
// 	})
// });

// 	$('diamond').on('click', function(){
// 		$diamond = $(this);

// 		if($diamond.hasClass('empty')){
// 			$diamond.parents('.row').children('div').removeClass('empty');
// 			$('.column').removeClass('empty');
// 		}else{
// 			$diamond.parents('row').children('div').addClass('empty');
// 			$('.column').addclass('empty');
// 			}	
// 		}
// 	})
$('square').on('click', function(){
	var idValue = $(this).attr('id')
	var classValue = $(this).attr('class')
	if (idValue === '11' && classValue === 'square') {
		$('#11').addclass('full')	
		$('#12').addclass('full')
		$('#13').addclass('full')
		$('#14').addClass('full')
		$('#15').addclass('full')
	} else {
		$('#11').removeClass('full')
		$('#12').removeClass('full')
		$('#13').removeClass('full')
		$('#14').removeClass('full')
		$('#15').removeClass('full')
	}
	if (idValue === '22' && classValue === 'square') {
		$('#21').addClass('full')
		$('#22').addClass('full')
		$('#23').addClass('full')
		$('#24').addClass('full')
		$('#25').addClass('full')
	} else {
		$('#21').removeClass('full')
		$('#22').removeClass('full')
		$('#23').removeClass('full')
		$('#24').removeClass('full')
		$('#25').removeClass('full')
	}
	if (idValue === '44' && classValue === 'square') {
		$('#41').addClass('full')
		$('#42').addClass('full')
		$('#43').addClass('full')
		$('#44').addClass('full')
		$('#45').addClass('full')
	} else {
		$('#41').removeClass('full')
		$('#42').removeClass('full')
		$('#43').removeClass('full')
		$('#44').removeClass('full')
		$('#45').removeClass('full')
	}
	if (idValue === '55' && classValue === 'square') {
		$('#51').addClass('full')
		$('#52').addClass('full')
		$('#53').addClass('full')
		$('#54').addClass('full')
		$('#55').addClass('full')
	} else {
		$('#51').removeClass('full')
		$('#52').removeClass('full')
		$('#53').removeClass('full')
		$('#54').removeClass('full')
		$('#55').removeClass('full')
	}
})

$('diamond').on('click', function() {
	var idValue = $(this).attr('id')
	var classValue = $(this).attr('class')
	if (idValue === '33' && classValue === 'diamond') {
		$('#31').addClass('full')
		$('#32').addClass('full')
		$('#33').addClass('full')
		$('#34').addClass('full')
		$('#35').addClass('full')
		$('#13').addClass('full')
		$('#23').addClass('full')
		$('#43').addClass('full')
		$('#53').addClass('full')
	}else {
		$('#31').removeClass('full')
		$('#32').removeClass('full')
		$('#33').removeClass('full')
		$('#34').removeClass('full')
		$('#35').removeClass('full')
		$('#13').removeClass('full')
		$('#23').removeClass('full')
		$('#43').removeClass('full')
		$('#53').removeClass('full')
	}
})