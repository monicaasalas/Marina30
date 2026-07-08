window.MARINA_GAME = {
  title: "Marina's Birthday Quest",
  level: 30,
  totalMissions: 18,
  startCoins: 30,
  missions: [
    {
      id: "gamer",
      npc: "NPC #01",
      title: "Quiz Gamer",
      icon: "🎮",
      difficulty: "⭐⭐⭐☆☆",
      intro: "He oído que eres una auténtica gamer... pero solo las heroínas de nivel 30 pueden superar este reto.",
      type: "quiz",
      passScore: 7,
      rewardCoins: 100,
      questions: [
        { text: "En Super Mario Odyssey, ¿qué personaje acompaña a Mario durante toda la aventura?", options: ["Tiara", "Cappy", "Lubba", "Toadette"], answer: 1 },
        { text: "En Luigi's Mansion 3, ¿en qué edificio transcurre la aventura?", options: ["Un castillo", "Una mansión", "Un hotel encantado", "Un museo"], answer: 2 },
        { text: "¿Cómo se llama el combustible que necesita la Odyssey para viajar entre reinos?", options: ["Estrellas", "Soles", "Power Moons", "Cristales"], answer: 2 },
        { text: "En Stardew Valley, ¿quién te regala la primera caña de pescar?", options: ["Lewis", "Gus", "Willy", "Robin"], answer: 2 },
        { text: "En Stardew Valley, ¿qué necesitas para entrar en las Minas por primera vez?", options: ["Una llave oxidada", "Nada: se desbloquean y puedes entrar", "Un pico de hierro", "Una bomba"], answer: 1 },
        { text: "En Among Us, si alguien reporta un cadáver, ¿qué ocurre inmediatamente?", options: ["Todos aparecen en cafetería", "Se inicia una reunión", "Se cierran todas las puertas", "El impostor gana un punto"], answer: 1 },
        { text: "¿Qué enemigo clásico de Mario lanza martillos?", options: ["Koopa Troopa", "Hammer Bro", "Goomba", "Lakitu"], answer: 1 },
        { text: "¿Cuál de estos reinos NO aparece en Super Mario Odyssey?", options: ["Reino Cocina", "Reino Cascada", "Reino Lava", "Reino Bosque"], answer: 2 },
        { text: "¿Cómo se llama el profesor que ayuda a Luigi en Luigi's Mansion?", options: ["Profesor Oak", "Profesor Fesor / E. Gadd", "Profesor Toad", "Profesor Kamek"], answer: 1 },
        { text: "En Among Us, si todos los tripulantes completan sus tareas antes de morir...", options: ["Gana el impostor", "Se reinicia la partida", "Ganan los tripulantes", "Se desbloquea una ronda extra"], answer: 2 }
      ]
    },
    {
      id: "musica",
      npc: "NPC #02",
      title: "Radio Retro",
      icon: "🎵",
      difficulty: "⭐⭐⭐⭐☆",
      intro: "La radio del Reino se ha desconfigurado. Escucha 5 segundos y adivina la canción antes de que el disco deje de girar.",
      type: "music",
      passScore: 5,
      rewardCoins: 120,
      questions: [
        { audio: "assets/audio/music/song1_nina_bonita.mp3", answerTitle: "Niña Bonita", options: ["Niña Bonita", "Andas en mi Cabeza", "Reggaetón Lento", "Dembow"], answer: 0 },
        { audio: "assets/audio/music/song2_andas_en_mi_cabeza.mp3", answerTitle: "Andas en mi Cabeza", options: ["Me Llamas", "Andas en mi Cabeza", "Se Preparó", "Vale la Pena"], answer: 1 },
        { audio: "assets/audio/music/song3_me_llamas.mp3", answerTitle: "Me Llamas", options: ["Dembow", "Reggaetón Lento", "Me Llamas", "Niña Bonita"], answer: 2 },
        { audio: "assets/audio/music/song4_dembow.mp3", answerTitle: "Dembow", options: ["Vale la Pena", "Dembow", "Se Preparó", "Me Llamas"], answer: 1 },
        { audio: "assets/audio/music/song5_reggaeton_lento.mp3", answerTitle: "Reggaetón Lento", options: ["Reggaetón Lento", "Andas en mi Cabeza", "Niña Bonita", "Dembow"], answer: 0 },
        { audio: "assets/audio/music/song6_vale_la_pena.mp3", answerTitle: "Vale la Pena", options: ["Se Preparó", "Vale la Pena", "Me Llamas", "Reggaetón Lento"], answer: 1 },
        { audio: "assets/audio/music/song7_se_preparo.mp3", answerTitle: "Se Preparó", options: ["Andas en mi Cabeza", "Dembow", "Vale la Pena", "Se Preparó"], answer: 3 }
      ]
    },
    {
      id: "cocina",
      npc: "NPC #03",
      title: "Chef Supremo",
      icon: "🍝",
      difficulty: "⭐⭐⭐☆☆",
      intro: "El restaurante del Reino abre solo una noche. Detecta ingredientes, platos y trampas culinarias para salvar la cena.",
      type: "quiz",
      passScore: 6,
      rewardCoins: 100,
      questions: [
        { text: "Para una carbonara clásica, ¿qué ingrediente NO debería aparecer?", options: ["Huevo", "Guanciale o panceta", "Nata", "Queso pecorino/parmesano"], answer: 2 },
        { text: "¿Qué ingrediente es básico para hacer guacamole?", options: ["Aguacate", "Manzana", "Nata", "Arroz"], answer: 0 },
        { text: "Si una tarta queda muy seca, ¿qué recurso puede salvarla mejor?", options: ["Almíbar", "Más horno", "Congelarla", "Quitarle azúcar"], answer: 0 },
        { text: "¿Qué pasta suele ir rellena?", options: ["Macarrones", "Tortellini", "Espaguetis", "Fusilli"], answer: 1 },
        { text: "En repostería, ¿para qué sirve montar claras a punto de nieve?", options: ["Dar aire y esponjosidad", "Salar la masa", "Espesar aceite", "Bajar el dulzor"], answer: 0 },
        { text: "¿Qué ingrediente ayuda a que una masa de bizcocho suba?", options: ["Levadura química/impulsor", "Sal gruesa", "Vinagre solo", "Agua fría"], answer: 0 },
        { text: "¿Qué plato encaja más con arroz, alga nori y pescado?", options: ["Sushi", "Lasaña", "Cachopo", "Gazpacho"], answer: 0 },
        { text: "Pregunta trampa: si se quema un poco el ajo al principio...", options: ["Puede amargar el plato", "Sabe más dulce", "No pasa nada nunca", "Se convierte en cebolla"], answer: 0 }
      ]
    },
    {
      id: "letras",
      npc: "NPC #05",
      title: "Duelo de Letras",
      icon: "⚔️",
      difficulty: "⭐⭐⭐☆☆",
      intro: "La arena se abre: dos jugadores entran, solo uno sigue en pie. Preparad vuestras letras.",
      type: "party",
      subtype: "rules",
      rewardCoins: 100,
      objective: "Ganar duelos de palabras hasta derrotar a todos los rivales.",
      rules: [
        "Dos personas se enfrentan.",
        "A la de 3, cada una dice una letra: una será la inicial y otra la final.",
        "Los dos deben pensar una palabra que empiece por la primera letra y termine por la segunda.",
        "Ejemplo: S + A → SUELA.",
        "El primero que diga una palabra válida gana la ronda.",
        "El ganador se queda y reta a otra persona.",
        "La misión termina cuando alguien haya ganado a todos."
      ],
      finalText: "Has conquistado la Arena de las Letras."
    },
    {
      id: "dibujo",
      npc: "NPC #06",
      title: "Picasso en Pánico",
      icon: "🎨",
      difficulty: "⭐⭐⭐⭐☆",
      intro: "El pincel mágico se ha vuelto loco. Dibujad rápido, mal y sin ningún tipo de control.",
      type: "party",
      subtype: "rounds",
      secondsPerRound: 30,
      rewardCoins: 120,
      objective: "Dibujar 3 escenas absurdas en 30 segundos cada una.",
      rules: [
        "Todos dibujan a la vez.",
        "No se puede levantar el lápiz del papel.",
        "No se pueden escribir letras ni palabras.",
        "Al terminar cada ronda, todos enseñan el dibujo.",
        "Marina vota: mejor dibujo, peor dibujo y dibujo más WTF."
      ],
      rounds: [
        "Un oso en patinete comiendo sushi.",
        "Una jirafa haciendo pádel contra un pulpo mientras llueve pizza.",
        "Un pingüino cocinando una tortilla encima de un unicornio que vuela hacia la luna."
      ],
      finalText: "Has sobrevivido al caos artístico."
    },
    {
      id: "inutil",
      npc: "NPC #07",
      title: "El Minuto Inútil",
      icon: "🤡",
      difficulty: "⭐⭐☆☆☆",
      intro: "Ha llegado el momento de demostrar un talento que no sirve absolutamente para nada... y precisamente por eso es legendario.",
      type: "party",
      subtype: "talent",
      secondsPerRound: 60,
      rewardCoins: 100,
      objective: "Marina tiene 1 minuto exacto para mostrar su talento inútil más absurdo.",
      rules: [
        "Tiene exactamente 1 minuto.",
        "Puede hacer una voz rara, contar un chiste malo, doblar los dedos de forma rara o cualquier habilidad absurda.",
        "Cuanto más inútil, mejor.",
        "Al terminar, el grupo vota si merece el título de Gran Maestra de lo Inútil."
      ],
      rounds: [
        "Demuestra tu talento inútil. Tienes 60 segundos."
      ],
      finalText: "El grupo ha presenciado un talento absurdamente innecesario."
    },
    {
      id: "perros",
      npc: "NPC #04",
      title: "Dog Master",
      icon: "🐶",
      difficulty: "⭐⭐☆☆☆",
      intro: "Misión preparada para amantes de los perros. Próximamente la afinamos juntas.",
      type: "placeholder",
      rewardCoins: 100
    },
    {
      id: "boss-final",
      npc: "FINAL BOSS",
      title: "Boss Final",
      icon: "👑",
      difficulty: "⭐⭐⭐⭐⭐",
      intro: "El último reto de Marina's Birthday Quest. Lo dejaremos para el final.",
      type: "placeholder",
      rewardCoins: 300
    }
  ]
};
