const KEY='MBQ_PROGRESS_V1';
const missions=[
{id:'gamer',icon:'🎮',title:'Quiz Gamer',desc:'Preguntas de Mario, Among Us, Stardew y más.',type:'quiz'},
{id:'musica',icon:'🎵',title:'Radio Retro',desc:'Adivina la canción con clips de 5 segundos.',type:'music'},
{id:'cocina',icon:'🍝',title:'Chef Supremo',desc:'Ingredientes, cocina y trampas culinarias.',type:'quiz'},
{id:'letras',icon:'⚔️',title:'Duelo de Letras',desc:'Batalla verbal entre invitados.',type:'party'},
{id:'dibujo',icon:'🎨',title:'Picasso en Pánico',desc:'Dibujo rápido sin levantar el lápiz.',type:'drawing'},
{id:'inutil',icon:'🤹',title:'El Minuto Inútil',desc:'Un talento absurdo en 60 segundos.',type:'timer'}
];
const quizzes={
 gamer:{pass:7,reward:100,questions:[
  {q:'En Super Mario Odyssey, ¿cómo se llama el sombrero que acompaña a Mario?',a:['Cappy','Tiara','Toadette','Lubba'],ok:0},
  {q:'En Luigi’s Mansion 3, ¿dónde transcurre la aventura?',a:['Un castillo','Un hotel encantado','Un museo','Una estación espacial'],ok:1},
  {q:'¿Qué recoge Mario en Odyssey para avanzar entre reinos?',a:['Estrellas','Power Moons','Champiñones dorados','Monedas rojas'],ok:1},
  {q:'En Stardew Valley, ¿quién te regala la primera caña de pescar?',a:['Lewis','Robin','Willy','Gus'],ok:2},
  {q:'En Among Us, si se reporta un cadáver, ¿qué ocurre?',a:['Gana el impostor','Se inicia reunión','Se cierran puertas','Todos pierden tareas'],ok:1},
  {q:'¿Qué enemigo clásico de Mario lanza martillos?',a:['Goomba','Lakitu','Hammer Bro','Boo'],ok:2},
  {q:'¿Cuál de estos reinos NO aparece como tal en Super Mario Odyssey?',a:['Reino Cascada','Reino Cocina','Reino Bosque','Reino Lava'],ok:3},
  {q:'¿Cómo se llama el profesor que ayuda a Luigi en Luigi’s Mansion?',a:['Profesor Oak','Profesor Fesor / E. Gadd','Profesor Kamek','Profesor Toad'],ok:1},
  {q:'En Among Us, ¿cómo ganan los tripulantes sin expulsar al impostor?',a:['Completando todas las tareas','Escondiéndose 3 minutos','Recogiendo monedas','Saboteando el reactor'],ok:0},
  {q:'En Mario Kart, ¿qué objeto da un impulso de velocidad?',a:['Plátano','Caparazón rojo','Champiñón','Flor de fuego'],ok:2}
 ]},
 cocina:{pass:4,reward:100,questions:[
  {q:'Para una carbonara clásica italiana, ¿qué ingrediente NO debería llevar?',a:['Guanciale','Huevo','Nata','Pecorino'],ok:2},
  {q:'¿Qué significa “al dente” en la pasta?',a:['Muy blanda','En su punto, con ligera firmeza','Sin sal','Con mucho queso'],ok:1},
  {q:'¿Qué ingrediente ayuda a montar mejor una mayonesa?',a:['Aceite añadido poco a poco','Agua hirviendo','Azúcar glas','Pan rallado'],ok:0},
  {q:'¿Qué se suele usar para que un bizcocho suba?',a:['Levadura química / impulsor','Vinagre solo','Hielo','Pimienta'],ok:0},
  {q:'En cocina, “pochar” cebolla es...',a:['Quemarla rápido','Cocinarla suave hasta que esté transparente','Congelarla','Freírla empanada'],ok:1},
  {q:'¿Qué pasta es tubular y corta?',a:['Spaghetti','Tagliatelle','Penne / macarrón','Lasaña'],ok:2}
 ]}
};
const musicRounds=[
 {file:'assets/audio/clips/song1.mp3',title:'Niña Bonita',artist:'Chino & Nacho',options:['Andas en mi cabeza','Niña Bonita','Me Llamas','Dembow'],ok:1},
 {file:'assets/audio/clips/song2.mp3',title:'Andas en mi cabeza',artist:'Chino & Nacho',options:['Reggaetón Lento','Andas en mi cabeza','Se preparó','Vale la pena'],ok:1},
 {file:'assets/audio/clips/song3.mp3',title:'Me Llamas',artist:'Piso 21',options:['Me Llamas','Niña Bonita','Dembow','Se preparó'],ok:0},
 {file:'assets/audio/clips/song4.mp3',title:'Dembow',artist:'Danny Ocean',options:['Vale la pena','Reggaetón Lento','Dembow','Andas en mi cabeza'],ok:2},
 {file:'assets/audio/clips/song5.mp3',title:'Reggaetón Lento',artist:'CNCO',options:['Me Llamas','Reggaetón Lento','Niña Bonita','Se preparó'],ok:1},
 {file:'assets/audio/clips/song6.mp3',title:'Vale la Pena',artist:'Juan Luis Guerra',options:['Vale la Pena','Dembow','Me Llamas','Reggaetón Lento'],ok:0},
 {file:'assets/audio/clips/song7.mp3',title:'Se Preparó',artist:'Ozuna',options:['Andas en mi cabeza','Niña Bonita','Se Preparó','Vale la Pena'],ok:2}
];
const drawingRounds=['Un oso en patinete comiendo sushi.','Una jirafa jugando al pádel contra un pulpo mientras llueve pizza.','Un pingüino cocinando una tortilla encima de un unicornio que vuela hacia la luna.'];
function load(){return JSON.parse(localStorage.getItem(KEY)||'{"coins":30,"done":{}}')}
function save(p){localStorage.setItem(KEY,JSON.stringify(p))}
function complete(id,coins=100){const p=load();if(!p.done[id]){p.done[id]=true;p.coins=(p.coins||30)+coins;save(p)}return p}
function stars(){return Object.values(load().done||{}).filter(Boolean).length}
const $=s=>document.querySelector(s); const app=$('#app');
function qs(){return new URLSearchParams(location.search).get('mission')}
function hud(){const p=load();return `<div class="hud"><span>❤️❤️❤️</span><span>🪙 ${p.coins||30}</span><span>⭐ ${stars()} / 18</span><span>Nivel 30</span><button class="sound" onclick="toggleBeep()">🔊</button></div>`}
let audioCtx=null;function toggleBeep(){try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator();const g=audioCtx.createGain();o.type='square';o.frequency.value=520;g.gain.value=.03;o.connect(g);g.connect(audioCtx.destination);o.start();setTimeout(()=>o.stop(),130)}catch(e){}}
function render(){const id=qs(); if(!id) return home(); const m=missions.find(x=>x.id===id); if(!m) return home(); if(m.type==='quiz')return quiz(id); if(id==='musica')return music(); if(id==='letras')return partyLetters(); if(id==='dibujo')return drawing(); if(id==='inutil')return useless();}
function home(){const p=load();app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🍄</div><h1>Marina's Birthday Quest</h1><p class="subtitle">La aventura definitiva para llegar al Nivel 30.</p><span class="badge">⭐ Progreso: ${stars()} / 18 misiones</span></section><section class="card"><h2>🗺️ Mapa de misiones</h2><div class="mission-list">${missions.map(m=>`<a class="mission-tile ${p.done[m.id]?'done':''}" href="?mission=${m.id}"><b>${p.done[m.id]?'✅':'🔒'} ${m.icon} ${m.title}</b><small>${m.desc}</small></a>`).join('')}</div></section><section class="card center"><button class="btn bad" onclick="if(confirm('¿Reiniciar progreso de prueba?')){localStorage.removeItem(KEY);render()}">Reiniciar progreso</button></section>`}
function intro(m,body){return hud()+`<section class="card center"><div class="big-emoji">${m.icon}</div><h1>${m.title}</h1><p class="subtitle">NPC Challenge desbloqueado</p>${body}</section>`}
function victory(id,title,extra=''){complete(id);app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🏆</div><h1>MISSION COMPLETE</h1><p class="result">${title}</p>${extra}<p class="badge">+1 ⭐ +100 🪙</p><p><a class="btn" href="./">Volver al mapa</a></p></section>`}
function quiz(id){const data=quizzes[id],m=missions.find(x=>x.id===id);let i=0,score=0,chosen=null;function screen(){const q=data.questions[i];app.innerHTML=hud()+`<section class="card"><div class="badge">${m.icon} ${m.title}</div><h2>Pregunta ${i+1}/${data.questions.length}</h2><div class="progressbar"><div style="width:${(i/data.questions.length)*100}%"></div></div><div class="question">${q.q}</div><div class="grid">${q.a.map((op,n)=>`<button class="btn option ${chosen===n?'selected':''}" onclick="selectOpt(${n})">${String.fromCharCode(65+n)}) ${op}</button>`).join('')}</div><div class="center"><button class="btn ${chosen===null?'secondary':''}" onclick="nextQuiz()">${i===data.questions.length-1?'Terminar':'Siguiente ▶'}</button></div></section>`}
window.selectOpt=n=>{chosen=n;screen()};window.nextQuiz=()=>{if(chosen===null){document.querySelector('.card').classList.add('shake');return} if(chosen===data.questions[i].ok)score++; i++; chosen=null; if(i>=data.questions.length){if(score>=data.pass) victory(id,`Has acertado ${score}/${data.questions.length}.`, `<p>Rango: ${score===data.questions.length?'👑 Leyenda':'🥇 Pro Gamer'}</p>`); else app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">💀</div><h1>GAME OVER</h1><p class="result">${score}/${data.questions.length}. Necesitas ${data.pass}.</p><button class="btn" onclick="quiz('${id}')">Reintentar</button><a class="btn secondary" href="./">Mapa</a></section>`}else screen()};screen()}
function music(){let i=0,score=0,played=false,audio=null;function screen(){const r=musicRounds[i];app.innerHTML=hud()+`<section class="card"><div class="badge">🎵 Radio Retro</div><h2>Clip ${i+1}/${musicRounds.length}</h2><div class="songbox"><div id="disc" class="disc"></div><div class="eq"><i></i><i></i><i></i><i></i></div><button class="btn pink" onclick="playClip()">▶ Escuchar 5 segundos</button><p>Escucha el fragmento y elige el título.</p></div><div id="opts" class="grid ${played?'':'hidden'}">${r.options.map((op,n)=>`<button class="btn option" onclick="answerSong(${n})">${op}</button>`).join('')}</div></section>`}
window.playClip=()=>{const r=musicRounds[i];played=true;screen();audio=new Audio(r.file);$('#disc').classList.add('spin');audio.play().catch(()=>{});setTimeout(()=>{audio.pause();audio.currentTime=0;const d=$('#disc'); if(d)d.classList.remove('spin')},5100)};
window.answerSong=n=>{if(n===musicRounds[i].ok)score++; i++; played=false; if(i>=musicRounds.length){score>=5?victory('musica',`Has acertado ${score}/${musicRounds.length}.`, '<p>🎧 DJ del Reino desbloqueada.</p>'):app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">📻</div><h1>Radio sin señal</h1><p class="result">${score}/${musicRounds.length}. Necesitas 5.</p><button class="btn" onclick="music()">Reintentar</button></section>`}else screen()};screen()}
function partyLetters(){const m=missions.find(x=>x.id==='letras');app.innerHTML=intro(m,`<div class="card"><h2>Cómo se juega</h2><ul class="rules"><li>Dos personas se enfrentan.</li><li>A la de 3, cada una dice una letra.</li><li>Hay que decir una palabra que empiece por la letra del jugador de la izquierda y termine por la del jugador de la derecha.</li><li>Ejemplo: izquierda dice <b>S</b>, derecha dice <b>A</b> → <b>SUELA</b>.</li><li>El primero que diga una palabra válida gana.</li><li>El ganador se queda y reta a otra persona hasta ganar a todos.</li></ul><div class="center"><button class="btn" onclick="victory('letras','Has conquistado la Arena de las Letras.')">Marcar misión superada ⭐</button></div></div>`)}
function drawing(){let r=0,t=30,int=null;function showRound(){app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🎨</div><h1>Picasso en Pánico</h1><span class="badge">Ronda ${r+1}/3</span><div class="round-card"><h2>${drawingRounds[r]}</h2><p>30 segundos. Sin levantar el lápiz. Sin escribir palabras.</p></div><div id="timer" class="timer">30</div><button class="btn" onclick="startDraw()">▶ Empezar ronda</button></section>`}
window.startDraw=()=>{t=30;clearInterval(int);int=setInterval(()=>{t--;$('#timer').textContent=t;if(t<=0){clearInterval(int);$('#timer').textContent='¡TIEMPO!';}},1000)};window.nextDraw=()=>{r++; r>=3?victory('dibujo','Marina vota: mejor, peor y más WTF.'):showRound()};showRound(); setTimeout(()=>{const sec=document.querySelector('section.card'); if(sec) sec.insertAdjacentHTML('beforeend','<p class="center"><button class="btn good" onclick="nextDraw()">Siguiente ronda / Terminar</button></p>')},0)}
function useless(){let t=60,int=null;app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🤹</div><h1>El Minuto Inútil</h1><p class="subtitle">Marina tiene exactamente 1 minuto para mostrar su talento más absurdo.</p><div class="card"><h2>Ideas permitidas</h2><p>Hacer una voz rara, contar un chiste malo, doblar los dedos de forma rara, imitar a alguien, inventarse un anuncio, cantar fatal... cuanto más inútil, mejor.</p><p>Al final, el grupo vota al <b>Gran Maestro de lo Inútil</b>.</p></div><div id="timer" class="timer">60</div><button class="btn" onclick="startUseless()">▶ Empezar minuto</button><button class="btn good" onclick="victory('inutil','Gran Maestro de lo Inútil desbloqueado.')">Marcar misión superada ⭐</button></section>`;window.startUseless=()=>{clearInterval(int);t=60;int=setInterval(()=>{t--;$('#timer').textContent=t;if(t<=0){clearInterval(int);$('#timer').textContent='¡FIN!'}},1000)}}
render();
