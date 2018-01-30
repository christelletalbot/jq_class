console.log("coucou"); //console log pour vérifier que la console soit lie à ma page//

$("#Full").on("click", function(){  //j'appelle jquery pour lorsque je clique sur le button full j'ajoute 
	$("div").addClass("full")       // la couleur dans tout les éléments
})
$("#Empty").on("click", function(){  // lorsque je clique sur empty j'enlève la couleur 
	console.log("click");
	$("div").removeClass("full")
})
$(".circle").on("click", function(){  // j'appelle jquery quand je cliq sur le cercle il prend une couleur
	var classValue=$(this).attr("class")
	$(this).addClass("full")
	if(classValue==="circle full"){  // si le cercle est en couleur alors je le remet transparent
		$(this).removeClass("full")
	}
})