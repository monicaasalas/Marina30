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
        {
          text: "En Super Mario Odyssey, ¿qué personaje acompaña a Mario durante toda la aventura?",
          options: ["Tiara", "Cappy", "Lubba", "Toadette"],
          answer: 1
        },
        {
          text: "En Luigi's Mansion 3, ¿en qué edificio transcurre la aventura?",
          options: ["Un castillo", "Una mansión", "Un hotel encantado", "Un museo"],
          answer: 2
        },
        {
          text: "¿Cómo se llama el combustible que necesita la Odyssey para viajar entre reinos?",
          options: ["Estrellas", "Soles", "Power Moons", "Cristales"],
          answer: 2
        },
        {
          text: "En Stardew Valley, ¿quién te regala la primera caña de pescar?",
          options: ["Lewis", "Gus", "Willy", "Robin"],
          answer: 2
        },
        {
          text: "En Stardew Valley, ¿qué necesitas para entrar en las Minas por primera vez?",
          options: ["Una llave oxidada", "Nada: se desbloquean y puedes entrar", "Un pico de hierro", "Una bomba"],
          answer: 1
        },
        {
          text: "En Among Us, si alguien reporta un cadáver, ¿qué ocurre inmediatamente?",
          options: ["Todos aparecen en cafetería", "Se inicia una reunión", "Se cierran todas las puertas", "El impostor gana un punto"],
          answer: 1
        },
        {
          text: "¿Qué enemigo clásico de Mario lanza martillos?",
          options: ["Koopa Troopa", "Hammer Bro", "Goomba", "Lakitu"],
          answer: 1
        },
        {
          text: "¿Cuál de estos reinos NO aparece en Super Mario Odyssey?",
          options: ["Reino Cocina", "Reino Cascada", "Reino Lava", "Reino Bosque"],
          answer: 2
        },
        {
          text: "¿Cómo se llama el profesor que ayuda a Luigi en Luigi's Mansion?",
          options: ["Profesor Oak", "Profesor Fesor / E. Gadd", "Profesor Toad", "Profesor Kamek"],
          answer: 1
        },
        {
          text: "En Among Us, si todos los tripulantes completan sus tareas antes de morir...",
          options: ["Gana el impostor", "Se reinicia la partida", "Ganan los tripulantes", "Se desbloquea una ronda extra"],
          answer: 2
        }
      ]
    },
    {
      id: "perros",
      npc: "NPC #02",
      title: "Dog Master",
      icon: "🐶",
      difficulty: "⭐⭐☆☆☆",
      intro: "Misión preparada para amantes de los perros. Próximamente la afinamos juntas.",
      type: "placeholder",
      rewardCoins: 100
    },
    {
      id: "cocina",
      npc: "NPC #03",
      title: "Chef Supremo",
      icon: "🍝",
      difficulty: "⭐⭐⭐☆☆",
      intro: "Reto culinario pendiente de definir.",
      type: "placeholder",
      rewardCoins: 100
    },
    {
      id: "musica",
      npc: "NPC #04",
      title: "Adivina la canción",
      icon: "🎵",
      difficulty: "⭐⭐⭐☆☆",
      intro: "Reto musical pendiente de definir.",
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
