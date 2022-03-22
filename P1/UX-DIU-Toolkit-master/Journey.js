/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.Backyardigans";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Mark",
                Photo: "imageM11.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a Granada con su novia por su quinto aniversario",
                touch1: "Agenda",
                feel1: "4",
                con1: "Cuadrar los días libres que tenga en el trabajo con los de su novia",
                ima1: "cartoon-looking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas de alojamiento en Hoteles o Airbnb para esas fechas",
                touch2: "Movil",
                feel2: "1",
                con2: "No encuentra nada 'barato'",
                ima2: "cartoon-PCcrying.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar otras alternativas de alojamiento, como el alquiler de una habitación",
                touch3: "Ordenador",
                feel3: "2",
                con3: "No le gustaría tener que compartir casa con niños pequeños",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Le empiezan a salir anuncios de Hosteles en Granada a un precio muy asequible",
                touch4: "Ordenador y Móvil (whatsapp)",
                feel4: "4",
                con4: "No sabe muy bien cuál es la diferencia entre un Hotel y un Hostel, por lo que pregunta a sus amigos por Whatsapp si han estado en alguno y cuál fue su experencia. Contento con la respuesta de uno de sus amigos, le ha convencido la idea del Hostel.",
                ima4: "cartoon-PCSurprised.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 2 opciones que encajan en sus preferencias, una habitación mixta para 4 personas o bien una habtación mixta para 6 personas",
                touch5: "Ordenador",
                feel5: "4",
                con5: "No sabe que opción elegir ya que prefiere la habitación para 4 personas, pero la habitación para 6 personas sale más económica",
                ima5: "cartoon-PCtyping.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Decide elegir la habitación mixta para 4 personas ya que estarán más cómodos y está impaciente por contarle la sorpresa a su novia",
                touch6: "Ordenador",
                feel6: "4",
                con6: "No hay posibilidad de cancelación, por lo que si a él o a su novia les surge alguna incompatibilidad con el trabajo perdería el dinero",
                ima6: "cartoon-shaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Marie",
                Photo: "imageF11.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con sus amigas de la carrera en Semana Santa a Granada",
                touch1: "Agenda",
                feel1: "5",
                con1: "Tienen un presupuesto para el viaje muy limitado y si no se cumple algunas de ellas no podrán ir",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscan en internet alojamiento para 3 personas y encuentran un Hotel que les convence",
                touch2: "Móvil",
                feel2: "4",
                con2: "Las habitaciones que tiene el hotel son sólo para 2 personas",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Llaman al hotel para preguntar si se podría añadir una cama suplementaria",
                touch3: "Móvil (llamada)",
                feel3: "1",
                con3: "El hotel les dice que no se puede añadir camas suplementarias, que tendrían que coger otra habitación, lo cuál se saldría del presupuesto que tienen",
                ima3: "cartoon-KO.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "La prima de una de ellas les sugiere que miren Hosteles, que ella siempre se aloja en ellos cunado viaja con amigos y que sale muy económico",
                touch4: "Móvil (whatsapp)",
                feel4: "4",
                con4: "No encuentran muchos Hosteles en Granada",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentran un Hostel que les gusta a 10min de la Alhambra",
                touch5: "Ordenador",
                feel5: "4",
                con5: "Las habitaciones son de 4 o 6 personas, por lo que les tocaría compartir habitación con más gente",
                ima5: "cartoon-PChappy.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Le comentan el viaje a la prima y decide apuntarse, por lo que reservan la habitación para 4",
                touch6: "Ordenador (reserva OK)",
                feel6: "5",
                con6: "Tendrán que buscar ahora los vuelos",
                ima6: "cartoon-planning.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



