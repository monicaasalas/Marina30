const KEY='MBQ_PROGRESS_V1';
const missions=[
{id:'gamer',icon:'🎮',title:'Quiz Gamer',desc:'Preguntas de Mario, Among Us, Stardew y más.',type:'quiz'},
{id:'perros',icon:'🐶',title:'Dog Master',desc:'15 razas de perros en 30 segundos.',type:'timer'},
{id:'musica',icon:'🎵',title:'Radio Retro',desc:'Adivina la canción con clips de 5 segundos.',type:'music'},
{id:'cocina',icon:'🍝',title:'Chef Supremo',desc:'Ingredientes, cocina y trampas culinarias.',type:'quiz'},
{id:'dilo',icon:'🎭',title:'Dilo sin decirlo',desc:'5 conceptos prohibidos para que el grupo adivine.',type:'party'},
{id:'letras',icon:'⚔️',title:'Duelo de Letras',desc:'Batalla verbal entre invitados.',type:'party'},
{id:'dibujo',icon:'🎨',title:'Picasso en Pánico',desc:'Dibujo rápido sin levantar el lápiz.',type:'drawing'},
{id:'inutil',icon:'🤹',title:'El Minuto Inútil',desc:'Un talento absurdo en 60 segundos.',type:'timer'},
{id:'diferencias',icon:'🔎',title:'Detective del Pasado',desc:'Busca las 7 diferencias en 4 recuerdos.',type:'spot'},
{id:'frases',icon:'💬',title:'¿Quién dijo eso?',desc:'Frases célebres del grupo.',type:'quiz'},
{id:'quien',icon:'🎭',title:'¿Quién es quién?',desc:'Adivina quién está cambiado de sexo.',type:'identity'}
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
 frases:{pass:7,reward:100,questions:[
  {q:'"Vamos a la sección de bollería." ¿Quién lo dijo?',a:['Marina','Alba','Raquel','Pablo'],ok:1},
  {q:'+ Tiene telarañas. / – ¿En el chocho o en el body? ¿Quién protagonizó esta conversación?',a:['Mónica y Marina','Alba y Natalia','Irene y Francis','Pablo y Raquel'],ok:2},
  {q:'"¿Pero cómo soy tan guarra?" ¿Quién lo dijo?',a:['Raquel','Irene','Marina','Natalia'],ok:0},
  {q:'"Entre puta o monja yo sería puta seguro. Por el dinero." ¿Quién lo dijo?',a:['Marina','Alba','Natalia','Irene'],ok:1},
  {q:'"Ya, es que yo soy barata y fácil." ¿Quién lo dijo?',a:['Angharad','Alba','Mónica','Francis'],ok:1},
  {q:'"Un día con vosotras es como una semana con los pibes." ¿Quién lo dijo?',a:['Pablo','Francis','Raquel','Natalia'],ok:0},
  {q:'"Las cosas, como el semen, a la cara." ¿Quién lo dijo?',a:['Natalia','Alba','Marina','Pablo'],ok:0},
  {q:'– ¿Ves cómo la votamos siempre? / + Es una guarra de verdad. ¿Quiénes fueron?',a:['Mónica y Angharad','Pablo y Natalia','Francis y Raquel','Alba e Irene'],ok:2},
  {q:'– Buah, estoy harta de comer, como por presión social. / + Igual que con las drogas. ¿Quiénes fueron?',a:['Alba y Marina','Natalia y Francis','Mónica y Angharad','Irene y Raquel'],ok:2}
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
function hud(){const p=load();return `<div class="hud"><span>❤️❤️❤️</span><span>🪙 ${p.coins||30}</span><span>⭐ ${stars()} / ${missions.length}</span><span>Nivel 30</span><button class="sound" onclick="toggleBeep()">🔊</button></div>`}
let audioCtx=null;function toggleBeep(){try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator();const g=audioCtx.createGain();o.type='square';o.frequency.value=520;g.gain.value=.03;o.connect(g);g.connect(audioCtx.destination);o.start();setTimeout(()=>o.stop(),130)}catch(e){}}
function render(){const id=qs(); if(!id) return home(); const m=missions.find(x=>x.id===id); if(!m) return home(); if(m.type==='quiz')return quiz(id); if(id==='musica')return music(); if(id==='perros')return dogMaster(); if(id==='dilo')return taboo(); if(id==='letras')return partyLetters(); if(id==='dibujo')return drawing(); if(id==='inutil')return useless(); if(id==='diferencias')return differences(); if(id==='quien')return identityGame();}
function home(){const p=load();app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🍄</div><h1>Marina's Birthday Quest</h1><p class="subtitle">La aventura definitiva para llegar al Nivel 30.</p><span class="badge">⭐ Progreso: ${stars()} / ${missions.length} misiones</span></section><section class="card"><h2>🗺️ Mapa de misiones</h2><div class="mission-list">${missions.map(m=>`<a class="mission-tile ${p.done[m.id]?'done':''}" href="?mission=${m.id}"><b>${p.done[m.id]?'✅':'🔒'} ${m.icon} ${m.title}</b><small>${m.desc}</small></a>`).join('')}</div></section><section class="card center"><button class="btn bad" onclick="if(confirm('¿Reiniciar progreso de prueba?')){localStorage.removeItem(KEY);render()}">Reiniciar progreso</button></section>`}
function intro(m,body){return hud()+`<section class="card center"><div class="big-emoji">${m.icon}</div><h1>${m.title}</h1><p class="subtitle">NPC Challenge desbloqueado</p>${body}</section>`}
function victory(id,title,extra=''){complete(id);app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🏆</div><h1>MISSION COMPLETE</h1><p class="result">${title}</p>${extra}<p class="badge">+1 ⭐ +100 🪙</p><p><a class="btn" href="./">Volver al mapa</a></p></section>`}
function quiz(id){const data=quizzes[id],m=missions.find(x=>x.id===id);let i=0,score=0,chosen=null;function screen(){const q=data.questions[i];app.innerHTML=hud()+`<section class="card"><div class="badge">${m.icon} ${m.title}</div><h2>Pregunta ${i+1}/${data.questions.length}</h2><div class="progressbar"><div style="width:${(i/data.questions.length)*100}%"></div></div><div class="question">${q.q}</div><div class="grid">${q.a.map((op,n)=>`<button class="btn option ${chosen===n?'selected':''}" onclick="selectOpt(${n})">${String.fromCharCode(65+n)}) ${op}</button>`).join('')}</div><div class="center"><button class="btn ${chosen===null?'secondary':''}" onclick="nextQuiz()">${i===data.questions.length-1?'Terminar':'Siguiente ▶'}</button></div></section>`}
window.selectOpt=n=>{chosen=n;screen()};window.nextQuiz=()=>{if(chosen===null){document.querySelector('.card').classList.add('shake');return} if(chosen===data.questions[i].ok)score++; i++; chosen=null; if(i>=data.questions.length){if(score>=data.pass) victory(id,`Has acertado ${score}/${data.questions.length}.`, `<p>Rango: ${score===data.questions.length?'👑 Leyenda':'🥇 Pro Gamer'}</p>`); else app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">💀</div><h1>GAME OVER</h1><p class="result">${score}/${data.questions.length}. Necesitas ${data.pass}.</p><button class="btn" onclick="quiz('${id}')">Reintentar</button><a class="btn secondary" href="./">Mapa</a></section>`}else screen()};screen()}
function music(){let i=0,score=0,played=false,audio=null;function screen(){const r=musicRounds[i];app.innerHTML=hud()+`<section class="card"><div class="badge">🎵 Radio Retro</div><h2>Clip ${i+1}/${musicRounds.length}</h2><div class="songbox"><div id="disc" class="disc"></div><div class="eq"><i></i><i></i><i></i><i></i></div><button class="btn pink" onclick="playClip()">▶ Escuchar 5 segundos</button><p>Escucha el fragmento y elige el título.</p></div><div id="opts" class="grid ${played?'':'hidden'}">${r.options.map((op,n)=>`<button class="btn option" onclick="answerSong(${n})">${op}</button>`).join('')}</div></section>`}
window.playClip=()=>{const r=musicRounds[i];played=true;screen();audio=new Audio(r.file);$('#disc').classList.add('spin');audio.play().catch(()=>{});setTimeout(()=>{audio.pause();audio.currentTime=0;const d=$('#disc'); if(d)d.classList.remove('spin')},5100)};
window.answerSong=n=>{if(n===musicRounds[i].ok)score++; i++; played=false; if(i>=musicRounds.length){score>=5?victory('musica',`Has acertado ${score}/${musicRounds.length}.`, '<p>🎧 DJ del Reino desbloqueada.</p>'):app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">📻</div><h1>Radio sin señal</h1><p class="result">${score}/${musicRounds.length}. Necesitas 5.</p><button class="btn" onclick="music()">Reintentar</button></section>`}else screen()};screen()}

function dogMaster(){
 let t=30,int=null;
 const words=['Labrador','Golden Retriever','Pastor Alemán','Bulldog Francés','Beagle','Caniche','Chihuahua','Husky','Yorkshire','Boxer','Dálmata','Border Collie','Cocker','Shiba Inu','Pomerania'];
 app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🐶</div><h1>Dog Master</h1><p class="subtitle">Tienes 30 segundos para decir 15 razas de perros.</p><div class="card"><h2>Reglas</h2><ul class="rules"><li>No se pueden repetir razas.</li><li>No vale decir solo “mestizo”.</li><li>Los invitados cuentan en voz alta.</li><li>Si llega a 15, misión superada.</li></ul><p class="hint">Lista de control opcional para el NPC: ${words.join(', ')}.</p></div><div id="timer" class="timer">30</div><button class="btn" onclick="startDogs()">▶ Empezar</button><button class="btn good" onclick="victory('perros','Enciclopedia perruna superada.')">Marcar misión superada ⭐</button></section>`;
 window.startDogs=()=>{clearInterval(int);t=30;$('#timer').textContent=t;int=setInterval(()=>{t--;$('#timer').textContent=t;if(t<=0){clearInterval(int);$('#timer').textContent='¡FIN!'}},1000)}
}

function taboo(){
 const cards=['Pizza','Golden Retriever','Mario Kart','Romantasy','Carbonara'];
 let i=0,ok=0;
 function show(){
  const word=cards[i];
  app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🎭</div><h1>Dilo sin decirlo</h1><span class="badge">Palabra ${i+1}/5</span><div class="round-card"><h2>${word}</h2><p>Consigue que el grupo lo adivine sin decir la palabra, ni derivados, ni señalar nada.</p></div><div class="grid"><button class="btn good" onclick="tabooGood()">✅ Adivinada</button><button class="btn secondary" onclick="tabooPass()">⏭️ Pasar</button></div><div class="card"><h2>Reglas</h2><ul class="rules"><li>No puedes decir la palabra.</li><li>No puedes decir derivados ni partes de la palabra.</li><li>No puedes deletrear.</li><li>Sí puedes describir, comparar o poner ejemplos.</li></ul></div></section>`
 }
 window.tabooGood=()=>{ok++;next()}; window.tabooPass=()=>next();
 function next(){i++; if(i>=cards.length){victory('dilo',`Has conseguido ${ok}/5 conceptos.`, '<p>El grupo decide si merece la estrella.</p>')}else show()}
 show();
}

function partyLetters(){const m=missions.find(x=>x.id==='letras');app.innerHTML=intro(m,`<div class="card"><h2>Cómo se juega</h2><ul class="rules"><li>Dos personas se enfrentan.</li><li>A la de 3, cada una dice una letra.</li><li>Hay que decir una palabra que empiece por la letra del jugador de la izquierda y termine por la del jugador de la derecha.</li><li>Ejemplo: izquierda dice <b>S</b>, derecha dice <b>A</b> → <b>SUELA</b>.</li><li>El primero que diga una palabra válida gana.</li><li>El ganador se queda y reta a otra persona hasta ganar a todos.</li></ul><div class="center"><button class="btn" onclick="victory('letras','Has conquistado la Arena de las Letras.')">Marcar misión superada ⭐</button></div></div>`)}
function drawing(){let r=0,t=30,int=null;function showRound(){app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🎨</div><h1>Picasso en Pánico</h1><span class="badge">Ronda ${r+1}/3</span><div class="round-card"><h2>${drawingRounds[r]}</h2><p>30 segundos. Sin levantar el lápiz. Sin escribir palabras.</p></div><div id="timer" class="timer">30</div><button class="btn" onclick="startDraw()">▶ Empezar ronda</button></section>`}
window.startDraw=()=>{t=30;clearInterval(int);int=setInterval(()=>{t--;$('#timer').textContent=t;if(t<=0){clearInterval(int);$('#timer').textContent='¡TIEMPO!';}},1000)};window.nextDraw=()=>{r++; r>=3?victory('dibujo','Marina vota: mejor, peor y más WTF.'):showRound()};showRound(); setTimeout(()=>{const sec=document.querySelector('section.card'); if(sec) sec.insertAdjacentHTML('beforeend','<p class="center"><button class="btn good" onclick="nextDraw()">Siguiente ronda / Terminar</button></p>')},0)}
function useless(){let t=60,int=null;app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🤹</div><h1>El Minuto Inútil</h1><p class="subtitle">Marina tiene exactamente 1 minuto para mostrar su talento más absurdo.</p><div class="card"><h2>Ideas permitidas</h2><p>Hacer una voz rara, contar un chiste malo, doblar los dedos de forma rara, imitar a alguien, inventarse un anuncio, cantar fatal... cuanto más inútil, mejor.</p><p>Al final, el grupo vota al <b>Gran Maestro de lo Inútil</b>.</p></div><div id="timer" class="timer">60</div><button class="btn" onclick="startUseless()">▶ Empezar minuto</button><button class="btn good" onclick="victory('inutil','Gran Maestro de lo Inútil desbloqueado.')">Marcar misión superada ⭐</button></section>`;window.startUseless=()=>{clearInterval(int);t=60;int=setInterval(()=>{t--;$('#timer').textContent=t;if(t<=0){clearInterval(int);$('#timer').textContent='¡FIN!'}},1000)}}

const diffLevels=[
 {name:'Foto 1',img:'assets/images/differences/photo1.png',points:[[1015,42,26],[835,115,28],[1210,45,28],[1090,130,24],[1240,178,30],[1370,144,24],[1450,80,26]]},
 {name:'Foto 2',img:'assets/images/differences/photo2.png',points:[[1330,73,28],[1328,40,30],[1490,220,30],[1275,214,28],[805,55,25],[1154,83,22],[1260,108,25]]},
 {name:'Foto 3',img:'assets/images/differences/photo3.png',points:[[815,170,25],[940,178,28],[1115,105,24],[1320,64,28],[1435,82,26],[1228,135,24],[1362,168,24]]},
 {name:'Foto 4',img:'assets/images/differences/photo4.png',points:[[890,169,34],[1180,164,28],[1375,52,32],[1120,20,28],[790,65,28],[1328,158,26],[1085,162,24]]}
];
function differences(){let lvl=0,found=[],mistakes=0;function draw(){const d=diffLevels[lvl];app.innerHTML=hud()+`<section class="card diff-card"><div class="badge">🔎 Detective del Pasado</div><h2>Recuerdo ${lvl+1}/4</h2><p>Encuentra las <b>7 diferencias</b>. Toca sobre la imagen de la derecha.</p><div class="diff-status"><span>✅ ${found.length}/7</span><span>❌ ${mistakes}/5</span></div><div class="diff-wrap"><img id="diffImg" src="${d.img}" onclick="tapDiff(event)">${found.map(i=>{const pt=d.points[i];return `<b class="mark" style="left:${pt[0]/1536*100}%;top:${pt[1]/256*100}%;width:${pt[2]*2/1536*100}%;height:${pt[2]*2/256*100}%"></b>`}).join('')}</div><p class="hint">Consejo: las diferencias están en la foto de la derecha. Si se ve pequeño, gira el móvil en horizontal.</p><div class="center"><button class="btn secondary" onclick="skipDiff()">Siguiente foto ▶</button></div></section>`}
window.tapDiff=(ev)=>{const img=ev.currentTarget;const rect=img.getBoundingClientRect();const x=(ev.clientX-rect.left)/rect.width*1536;const y=(ev.clientY-rect.top)/rect.height*256;const d=diffLevels[lvl];let hit=-1;d.points.forEach((pt,i)=>{const dx=x-pt[0],dy=y-pt[1];if(Math.sqrt(dx*dx+dy*dy)<=pt[2]&&!found.includes(i))hit=i});if(hit>=0){found.push(hit);toggleBeep(); if(found.length>=7){setTimeout(()=>nextDiff(),500)}else draw()}else{mistakes++; if(mistakes>=5){app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🕵️‍♀️</div><h1>¡Casi!</h1><p>Has agotado los intentos en este recuerdo.</p><button class="btn" onclick="differences()">Reintentar</button><button class="btn secondary" onclick="skipDiff()">Pasar foto</button></section>`}else draw()}}
function nextDiff(){lvl++;found=[];mistakes=0;if(lvl>=diffLevels.length){victory('diferencias','Álbum de recuerdos completado.', '<p>Has restaurado las 4 fotos modificadas.</p>')}else draw()}
window.skipDiff=()=>nextDiff();draw()}


const femaleNames=['Marina','Mónica','Angharad','María','Raquel','Irene','Daniela','Zaira','Alba','Majo'];
const maleNames=['Aitor','Francis','Rafa','Pablo','Carlos','Mario'];
const identityItems=[
 {name:'Marina',gender:'female',img:'assets/images/quien/marina.png'},
 {name:'Mónica',gender:'female',img:'assets/images/quien/monica.png'},
 {name:'Angharad',gender:'female',img:'assets/images/quien/angharad.png'},
 {name:'María',gender:'female',img:'assets/images/quien/maria.png'},
 {name:'Aitor',gender:'male',img:'assets/images/quien/aitor.png'},
 {name:'Francis',gender:'male',img:'assets/images/quien/francis.png'},
 {name:'Rafa',gender:'male',img:'assets/images/quien/rafa.png'},
 {name:'Raquel',gender:'female',img:'assets/images/quien/raquel.png'},
 {name:'Pablo',gender:'male',img:'assets/images/quien/pablo.png'},
 {name:'Irene',gender:'female',img:'assets/images/quien/irene.png'},
 {name:'Daniela',gender:'female',img:'assets/images/quien/daniela.png'},
 {name:'Carlos',gender:'male',img:'assets/images/quien/carlos.png'},
 {name:'Zaira',gender:'female',img:'assets/images/quien/zaira.png'},
 {name:'Alba',gender:'female',img:'assets/images/quien/alba.png'},
 {name:'Mario',gender:'male',img:'assets/images/quien/mario.png'}
];
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function makeOptions(item){
 const pool=item.gender==='female'?femaleNames:maleNames; // Si aparece hombre, opciones femeninas; si aparece mujer, opciones masculinas.
 const others=shuffle(pool.filter(x=>x!==item.name)).slice(0,3);
 return shuffle([item.name,...others]);
}
function identityGame(){
 let items=shuffle(identityItems),i=0,score=0,locked=false,opts=[];
 function screen(feedback=''){
  const it=items[i]; if(!opts.length) opts=makeOptions(it);
  app.innerHTML=hud()+`<section class="card center identity"><div class="badge">🎭 ¿Quién es quién?</div><h2>Foto ${i+1}/${items.length}</h2><p>Adivina quién es la persona transformada.</p><img class="identity-img" src="${it.img}" alt="persona transformada"><div class="grid">${opts.map(op=>`<button class="btn option" ${locked?'disabled':''} onclick="answerIdentity('${op.replace(/'/g,"\\'")}')">${op}</button>`).join('')}</div>${feedback}<p class="hint">Las opciones son del sexo original para que no sea cantoso.</p></section>`
 }
 window.answerIdentity=(op)=>{
  if(locked)return; locked=true; const it=items[i]; if(op===it.name){score++; screen(`<p class="good-text">✅ ¡Correcto! Era ${it.name}.</p>`)} else screen(`<p class="bad-text">❌ Era ${it.name}.</p>`);
  setTimeout(()=>{i++;opts=[];locked=false;if(i>=items.length){const pass=Math.ceil(items.length*.65); if(score>=pass) victory('quien',`Has acertado ${score}/${items.length}.`, '<p>Rango: detective del cambiazo.</p>'); else app.innerHTML=hud()+`<section class="card center"><div class="big-emoji">🕵️</div><h1>Se te han escapado</h1><p class="result">${score}/${items.length}. ¿Repetimos?</p><button class="btn" onclick="identityGame()">Reintentar</button></section>`}else screen()},900)
 }
 screen();
}

render();
