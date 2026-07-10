export const missions=[
{id:'gamer',icon:'🎮',title:'Quiz Gamer',type:'quiz'},
{id:'perros',icon:'🐶',title:'Dog Master',type:'party'},
{id:'musica',icon:'🎵',title:'Radio Retro',type:'audio'},
{id:'cocina',icon:'👩‍🍳',title:'MasterChef',type:'recipe'},
{id:'dilo',icon:'🎭',title:'Dilo sin decirlo',type:'party'},
{id:'letras',icon:'⚔️',title:'Duelo de Letras',type:'party'},
{id:'dibujo',icon:'🎨',title:'Picasso en Pánico',type:'party'},
{id:'inutil',icon:'🌀',title:'El Minuto Inútil',type:'party'},
{id:'frases',icon:'💬',title:'¿Quién dijo eso?',type:'quiz'},
{id:'quien',icon:'🧪',title:'¿Quién es quién?',type:'quiz'},
{id:'bingo',icon:'🎼',title:'Bingo Musical',type:'party'},
{id:'video',icon:'🎬',title:'Viaje de recuerdos',type:'video'},
{id:'dibuja',icon:'✏️',title:'Ella dibuja, ella adivina',type:'party'},
{id:'acertijos',icon:'🧠',title:'Guardián de los Acertijos',type:'riddle'},
{id:'final',icon:'🏆',title:'Nivel 30 completado',type:'final'}
];
export const gamer={pass:7,questions:[
{q:'En Super Mario Odyssey, ¿qué reino alberga la ciudad de Nueva Donk?',a:'Reino Urbano',o:['Reino Urbano','Reino Sombrero','Reino Lago','Reino Perdido']},
{q:'¿Cómo se llama el sombrero fantasma que acompaña a Mario?',a:'Cappy',o:['Cappy','Tiara','Gooigi','Polterpup']},
{q:'En Luigi’s Mansion 3, ¿cómo se llama la copia gelatinosa de Luigi?',a:'Gooigi',o:['Gooigi','Luigi Verde','Slimigi','Booigi']},
{q:'¿Qué aparato utiliza Luigi para capturar fantasmas?',a:'Poltergust G-00',o:['Poltergust G-00','F.L.U.D.D.','Ectoblast 3000','Vacuum Star']},
{q:'En Stardew Valley, ¿quién entrega la primera caña de pescar?',a:'Willy',o:['Willy','Lewis','Clint','Gus']},
{q:'¿En qué estación se celebra la Danza de las Flores en Stardew Valley?',a:'Primavera',o:['Primavera','Verano','Otoño','Invierno']},
{q:'En Among Us, ¿qué sabotaje puede ganar la partida si no se repara a tiempo?',a:'Reactor u oxígeno',o:['Reactor u oxígeno','Comunicaciones','Luces','Puertas']},
{q:'¿Qué color NO fue uno de los colores originales de tripulante en Among Us?',a:'Coral',o:['Coral','Rojo','Azul','Verde']},
{q:'En Super Mario Odyssey, ¿qué coleccionable alimenta la Odyssey?',a:'Energilunas',o:['Energilunas','Grandes estrellas','Soles','Medallas lunares']},
{q:'¿Cuál de estos NO es un reino de Super Mario Odyssey?',a:'Reino Volcán',o:['Reino Volcán','Reino de las Arenas','Reino de los Fogones','Reino Arbolado']}
]};
export const phrases={pass:7,questions:[
{q:'“Vamos a la sección de bollería.”',a:'Alba',o:['Marina','Alba','Raquel','Pablo']},
{q:'+ Tiene telarañas.\n– ¿En el chocho o en el body?',a:'Irene y Francis',o:['Mónica y Marina','Alba y Natalia','Irene y Francis','Pablo y Raquel']},
{q:'“¿Pero cómo soy tan guarra?”',a:'Raquel',o:['Raquel','Irene','Marina','Natalia']},
{q:'“Entre puta o monja yo sería puta seguro. Por el dinero.”',a:'Alba',o:['Marina','Alba','Natalia','Irene']},
{q:'“Ya, es que yo soy barata y fácil.”',a:'Alba',o:['Angharad','Alba','Mónica','Francis']},
{q:'“Un día con vosotras es como una semana con los pibes.”',a:'Pablo',o:['Pablo','Francis','Raquel','Natalia']},
{q:'“Las cosas, como el semen, a la cara.”',a:'Natalia',o:['Natalia','Alba','Marina','Pablo']},
{q:'– ¿Ves cómo la votamos siempre?\n+ Es una guarra de verdad.',a:'Francis y Raquel',o:['Mónica y Angharad','Pablo y Natalia','Francis y Raquel','Alba e Irene']},
{q:'– Buah, estoy harta de comer, como por presión social.\n+ Igual que con las drogas.',a:'Mónica y Angharad',o:['Alba y Marina','Natalia y Francis','Mónica y Angharad','Irene y Raquel']}
]};
export const songs=[
{title:'Niña Bonita',artist:'Chino & Nacho',file:'assets/audio/songs/nina_bonita.mp3',start:0},
{title:'Andas en mi cabeza',artist:'Chino & Nacho',file:'assets/audio/songs/andas_cabeza.mp3',start:0},
{title:'Me Llamas',artist:'Piso 21',file:'assets/audio/songs/me_llamas.mp3',start:0},
{title:'Dembow',artist:'Danny Ocean',file:'assets/audio/songs/dembow.mp3',start:0},
{title:'Reggaetón Lento',artist:'CNCO',file:'assets/audio/songs/reggaeton_lento.mp3',start:0},
{title:'Vale la Pena',artist:'Juan Luis Guerra',file:'assets/audio/songs/vale_la_pena.mp3',start:0},
{title:'Se Preparó',artist:'Ozuna',file:'assets/audio/songs/se_preparo.mp3',start:0} ,
{title:'Cuando nadie ve',artist:'Morat',file:'assets/audio/songs/cuando_nadie_ve.mp3',start:0},
{title:'+ (Más)',artist:'Aitana',file:'assets/audio/songs/mas.mp3',start:0},
{title:'Tiempos bonitos',artist:'Pablo Alborán',file:'assets/audio/songs/tiempos_bonitos.mp3',start:0}

];
export const songDistractors=['Cuando nadie ve','Besos en guerra','No se va','Cómo te atreves','+ (Más)','Mon Amour','Los Ángeles','Vas a quedarte','Tiempos bonitos','Saturno','Solamente tú','Prometo','Me Rehúso','Darte un Beso','Borro Cassette','La Bicicleta','Propuesta Indecente','Mi Gente','Súbeme la Radio','La Bachata','Tacones Rojos','Robarte un Beso','Vente Pa’ Ca','Despacito','Felices los 4','Échame la Culpa','Una Lady Como Tú','Traicionera','Vivir Mi Vida','Bailando','Calma','Tusa','Hawái','Dákiti','Colgando en tus manos','Loco contigo','La Gozadera','Limbo','Te Boté','Todo de Ti','Cómo Te Atreves','Pareja del Año'];
export const recipes=[
{name:'Carbonara tradicional',count:6,correct:['Pasta','Guanciale','Pecorino Romano','Huevo','Pimienta negra','Agua de cocción'],options:['Pasta','Guanciale','Pecorino Romano','Huevo','Pimienta negra','Agua de cocción','Nata','Bacon','Cebolla','Ajo','Mantequilla','Orégano']},
{name:'Paella valenciana',count:8,correct:['Arroz redondo','Pollo','Conejo','Judía verde','Garrofón','Tomate','Azafrán','Agua'],options:['Arroz redondo','Pollo','Conejo','Judía verde','Garrofón','Tomate','Azafrán','Agua','Chorizo','Cebolla','Guisantes','Marisco','Nata','Patata']},
{name:'Pesto genovés',count:6,correct:['Albahaca','Piñones','Ajo','Parmigiano Reggiano','Pecorino','Aceite de oliva'],options:['Albahaca','Piñones','Ajo','Parmigiano Reggiano','Pecorino','Aceite de oliva','Perejil','Nata','Nueces','Limón','Mantequilla','Tomate']},
{name:'Guacamole clásico',count:6,correct:['Aguacate','Lima','Cilantro','Cebolla','Tomate','Sal'],options:['Aguacate','Lima','Cilantro','Cebolla','Tomate','Sal','Yogur','Queso cheddar','Curry','Mayonesa','Perejil','Pepino']},
{name:'Risotto de setas',count:8,correct:['Arroz arborio','Setas','Caldo','Vino blanco','Cebolla','Mantequilla','Parmesano','Aceite de oliva'],options:['Arroz arborio','Setas','Caldo','Vino blanco','Cebolla','Mantequilla','Parmesano','Aceite de oliva','Nata','Arroz basmati','Tomate frito','Mozzarella','Leche','Pimiento']},
{name:'Hummus',count:7,correct:['Garbanzos','Tahini','Limón','Ajo','Comino','Aceite de oliva','Sal'],options:['Garbanzos','Tahini','Limón','Ajo','Comino','Aceite de oliva','Sal','Yogur','Cilantro','Mayonesa','Vinagre','Mostaza']},
{name:'Pad Thai',count:9,correct:['Fideos de arroz','Huevo','Tofu o pollo','Brotes de soja','Cacahuetes','Lima','Salsa de pescado','Tamarindo','Cebolleta'],options:['Fideos de arroz','Huevo','Tofu o pollo','Brotes de soja','Cacahuetes','Lima','Salsa de pescado','Tamarindo','Cebolleta','Nata','Tomate','Queso','Curry rojo','Salsa teriyaki']},
{name:'Ramen shoyu',count:8,correct:['Fideos ramen','Caldo','Salsa de soja','Chashu','Huevo marinado','Cebolleta','Alga nori','Menma'],options:['Fideos ramen','Caldo','Salsa de soja','Chashu','Huevo marinado','Cebolleta','Alga nori','Menma','Mozzarella','Tomate','Ketchup','Nata','Cuscús','Aguacate']},
{name:'Tarta de queso al horno',count:7,correct:['Queso crema','Huevos','Azúcar','Nata','Galletas','Mantequilla','Vainilla'],options:['Queso crema','Huevos','Azúcar','Nata','Galletas','Mantequilla','Vainilla','Levadura','Aceite de oliva','Gelatina','Harina de maíz','Sal gruesa']},
{name:'Sushi maki',count:8,correct:['Arroz de sushi','Vinagre de arroz','Alga nori','Salmón o atún','Pepino','Aguacate','Wasabi','Salsa de soja'],options:['Arroz de sushi','Vinagre de arroz','Alga nori','Salmón o atún','Pepino','Aguacate','Wasabi','Salsa de soja','Arroz basmati','Queso cheddar','Tomate frito','Pan rallado','Nata','Orégano']}
];
export const diloWords=['Pizza','Golden Retriever','Mario Kart','Romantasy','Carbonara','Kobe','Mainake','Carcassonne','7 Wonders','Pádel','Babolat','Navidad','Sushi','Tarta de cumpleaños','Málaga','Vecina','Videojuego','Fotografía','Naturaleza','Pasta','Cocinar','Terracita','Libro','Perro','Among Us','Stardew Valley','Luigi’s Mansion','Mario Odyssey','Cumpleaños','Restaurante','WhatsApp','Bachata','Maleta','Playa','Croqueta','Helado','Aspiradora','Princesa','Fantasma','Champiñón'];
export const drawRounds=['Un oso en patinete comiendo sushi','Una jirafa jugando al pádel contra un pulpo mientras llueve pizza','Un pingüino cocinando una tortilla encima de un unicornio que vuela hacia la luna'];
export const drawingWords=['Cuadro','Ventana','Pera','Manzana','Huevo','Pelota','Nevera','Lavadora','Ordenador','Rueda','Volante','Planeta','Huevo estrellado','Basura','Refresco','Botella','Silla','Mesa','WiFi','Sol'];
export const people=[
{name:'Marina',group:'mujeres',img:'assets/images/quien/marina.jpg'},{name:'Mónica',group:'mujeres',img:'assets/images/quien/monica.jpg'},{name:'Angharad',group:'mujeres',img:'assets/images/quien/angharad.jpg'},{name:'María',group:'mujeres',img:'assets/images/quien/maria.jpg'},{name:'Raquel',group:'mujeres',img:'assets/images/quien/raquel.jpg'},{name:'Irene',group:'mujeres',img:'assets/images/quien/irene.jpg'},{name:'Daniela',group:'mujeres',img:'assets/images/quien/daniela.jpg'},{name:'Zaira',group:'mujeres',img:'assets/images/quien/zaira.jpg'},{name:'Alba',group:'mujeres',img:'assets/images/quien/alba.jpg'},{name:'Majo',group:'mujeres',img:null},
{name:'Aitor',group:'hombres',img:'assets/images/quien/aitor.jpg'},{name:'Francis',group:'hombres',img:'assets/images/quien/francis.jpg'},{name:'Rafa',group:'hombres',img:'assets/images/quien/rafa.jpg'},{name:'Pablo',group:'hombres',img:'assets/images/quien/pablo.jpg'},{name:'Carlos',group:'hombres',img:'assets/images/quien/carlos.jpg'},{name:'Mario',group:'hombres',img:'assets/images/quien/mario.jpg'}
];
