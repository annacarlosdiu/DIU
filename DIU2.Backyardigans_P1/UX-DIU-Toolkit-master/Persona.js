/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.Backyardigans";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Mark",
				Photo: "imageM11.jpg",
				Quote: "Todo pasa por algo",
				Age: 32,
				Occupation: "Electricista",
				Family: "Con pareja desde hace 4 años",
				Location: "Londres",
				Character: "Le gusta ir a tomar una cerveza con su novia y sus amigos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Obtener una mejor oferta de trabajo en España", "Pedrile matrimonio a su novia y comenzar una familia cuando obtenga un trabajo mejor pagado", "Aprender español"],
				Frustrations: ["Le encanta Londres pero odia el tiempo que hace", "Le gustaría tener más tiempo libre para poder aprender español","Cómo tiene que ayudar económicamente a su familia, no le suele sobrar mucho dinero para viajes o caprichos"],
				Bio: "Nació en Londres y estudió un grado superior para ser electricista. Conoció a su novia Emily en un bar y actualmente llevan 2 años viviendo juntos. De vez en cuando le toca hacer horas extra en el trabajo para ayudar a su familia ya que su padre está en paro. Su primo vive en Valencia desde hace un par de años y Emily y él han ido a visitarle unas cuantas veces y a ambos les ha encantando la cultura y el tiempo de España, por lo que planean mudarse en cuanto tengan la oportunidad. Emily le ha mencionado alguna que otra vez que le encantaría visitar Granada y ver la alhambra en vez de ir siempre a Valencia. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Su novia y él pasan últimamente muy poco tiempo juntos porque están los dos agobiados con el trabajo y le gustaría darle una sorpresa con un viaje a Granada por su quinto aniversario",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Marie",
				Photo: "imageF11.jpg",
				Quote: "La vida son 2 días",
				Age: 21,
				Occupation: "Estudiante de Derecho",
				Family: "Sus padres, Sylvie y Antonie y su hermano Luc viven en un pueblo llamado Cordes-Sur-Ciel",
				Location: "París",
				Character: "Sociable y aventurera",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Ahorrar para poder aprovechar todo el tiempo libre que tenga para viajar y ver mundo", "Terminar la carrera habiendo hecho amigas para toda la vida", "Saltar en paracaídas"],
				Frustrations: ["La rutina del día a día","No poder planear un viaje porque se sale de presupuesot","Le gustaría tener más tiempo libre y más recuros para poder viajar más"],
				Bio: "Nacida en Francia, Marie ha vivido hasta los 18 años con su familia en Cordes-Sur-Ciel. Desde pequeña ha querido ser abogada, y decidió estudiar derecho en la Universidad de París I Panthéon-Sorbonne especializada en ciencias sociales y reconocida entre las mejores universidades francesas y del mundo en los estudios de derecho, economía, ciencias políticas, geografía, historia y filosofía. A pesar de que tuvo que mudarse a París a 7 horas en coche de su pueblo natal y dejar atrás a sus amigos y familia, ha encontrado nuevas amigas estupendas en la carrera y con las cuales siempre viaja cuando tienen la oportunidad.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Se acercan las vacaciones y quiere planear un viaje económico a Granada con sus amigas de la carrera" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])