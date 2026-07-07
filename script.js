const STORAGE_KEY = 'marinaBirthdayQuestProgress_v01';
const levels = {
  gamer: {
    id: 'gamer', npc: 'NPC #01', title: 'Quiz Gamer', difficulty: '⭐⭐⭐☆☆', type: 'quiz', passScore: 7, rewardCoins: 100,
    intro: 'Hola Marina. He oído que eres una auténtica gamer... pero solo alguien de Nivel 30 puede superar este desafío.',
    questions: [
      { q:'En Super Mario Odyssey, ¿quién acompaña a Mario durante toda la aventura?', a:['Tiara','Cappy','Toadette','Lubba'], ok:1 },
      { q:'En Luigi’s Mansion 3, ¿dónde transcurre principalmente la aventura?', a:['Un castillo','Una mansión clásica','Un hotel encantado','Un museo'], ok:2 },
      { q:'¿Qué necesita la Odyssey para viajar entre reinos?', a:['Estrellas','Power Moons','Cristales','Monedas rojas'], ok:1 },
      { q:'En Stardew Valley, ¿quién te regala la primera caña de pescar?', a:['Lewis','Gus','Willy','Robin'], ok:2 },
      { q:'¿Cuál de estos reinos NO aparece en Super Mario Odyssey?', a:['Reino Cocina','Reino Cascada','Reino Lava','Reino Bosque'], ok:2 },
      { q:'En Among Us, cuando se reporta un cadáver, ¿qué ocurre?', a:['Se inicia una reunión','Se reinicia la partida','Gana el impostor','Se cierran puertas'], ok:0 },
      { q:'¿Qué enemigo clásico de Mario lanza martillos?', a:['Koopa Troopa','Hammer Bro','Goomba','Lakitu'], ok:1 },
      { q:'En Stardew Valley, ¿qué heredas al principio?', a:['Una mina','Una granja','Una tienda','Un barco'], ok:1 },
      { q:'¿Cómo se llama el profesor que ayuda a Luigi?', a:['Profesor Oak','Profesor Fesor / E. Gadd','Profesor Toad','Profesor Kamek'], ok:1 },
      { q:'Si todos los tripulantes completan sus tareas en Among Us...', a:['Ganan los tripulantes','Gana el impostor','Hay ronda extra','Se vota otra vez'], ok:0 }
    ]
  },
  perros: { id:'perros', npc:'NPC #02', title:'Dog Master', difficulty:'⭐⭐☆☆☆', type:'placeholder', intro:'Próximamente: reto de 30 segundos para decir razas de perros.' },
  chef: { id:'chef', npc:'NPC #03', title:'Chef Supremo', difficulty:'⭐⭐⭐☆☆', type:'placeholder', intro:'Próximamente: reto de cocina, pasta y tartas de cumpleaños.' },
  musica: { id:'musica', npc:'NPC #04', title:'Adivina la canción', difficulty:'⭐⭐⭐☆☆', type:'placeholder', intro:'Próximamente: canciones, recuerdos y risas.' },
  fotos: { id:'fotos', npc:'NPC #05', title:'Recuerdo desbloqueado', difficulty:'⭐⭐⭐☆☆', type:'placeholder', intro:'Próximamente: fotos antiguas y momentos míticos.' },
  boss: { id:'boss', npc:'NPC #18', title:'Final Boss', difficulty:'⭐⭐⭐⭐⭐', type:'placeholder', intro:'El desafío final todavía está bloqueado...' }
};
const levelOrder = ['gamer','perros','chef','musica','fotos','boss'];
let state = { current: 0, score: 0, audioOn: false, level: getLevel() };
let audioCtx, musicTimer;

function getLevel(){ const p = new URLSearchParams(location.search); return p.get('level') || location.hash.replace('#','') || 'gamer'; }
function loadProgress(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {stars:[], coins:30}; } catch { return {stars:[], coins:30}; }}
function saveProgress(p){ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); updateHud(); }
function completeLevel(id, coins){ const p=loadProgress(); if(!p.stars.includes(id)) p.stars.push(id); p.coins = Math.max(30, p.coins || 30) + coins; saveProgress(p); }
function updateHud(){ const p=loadProgress(); document.getElementById('stars').textContent=p.stars.length; document.getElementById('coins').textContent=p.coins || 30; }
function screen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function init(){ updateHud(); setTimeout(showMenu, 1200); document.getElementById('startBtn').onclick=startLevel; document.getElementById('mapBtn').onclick=showMap; document.querySelector('.back-menu').onclick=showMenu; document.getElementById('finishMapBtn').onclick=showMap; document.getElementById('retryBtn').onclick=startLevel; document.getElementById('soundBtn').onclick=toggleMusic; renderMap(); }
function showMenu(){ const l=levels[state.level] || levels.gamer; document.getElementById('missionTitle').textContent=l.title; document.getElementById('missionIntro').textContent=l.intro; document.getElementById('npcTag').textContent=l.npc; document.getElementById('difficulty').textContent=l.difficulty; screen('screen-menu'); }
function renderMap(){ const p=loadProgress(); const map=document.getElementById('worldMap'); map.innerHTML=''; levelOrder.forEach((id,i)=>{ const l=levels[id]; const d=document.createElement('div'); d.className='level-node '+(p.stars.includes(id)?'done':(l.type==='placeholder'?'locked':'')); d.innerHTML=`<div>${p.stars.includes(id)?'⭐':'🎮'} ${i+1}</div><small>${l.title}</small>`; map.appendChild(d); }); }
function showMap(){ renderMap(); screen('screen-map'); }
function startLevel(){ const l=levels[state.level] || levels.gamer; if(l.type !== 'quiz'){ document.getElementById('resultTitle').textContent='🚧 MISIÓN EN CONSTRUCCIÓN'; document.getElementById('resultScore').textContent=l.intro; document.getElementById('reward').textContent='Pronto desbloquearemos este nivel.'; screen('screen-result'); return; } state.current=0; state.score=0; showQuestion(); }
function showQuestion(){ const l=levels[state.level]; const q=l.questions[state.current]; document.getElementById('questionCounter').textContent=`Pregunta ${state.current+1} / ${l.questions.length}`; document.getElementById('progressBar').style.width=`${(state.current/l.questions.length)*100}%`; document.getElementById('questionText').textContent=q.q; const answers=document.getElementById('answers'); answers.innerHTML=''; q.a.forEach((text,i)=>{ const b=document.createElement('button'); b.type='button'; b.textContent=text; b.onclick=()=>answer(i,b); answers.appendChild(b); }); screen('screen-quiz'); }
function answer(i,btn){ const l=levels[state.level]; const q=l.questions[state.current]; [...document.querySelectorAll('#answers button')].forEach((b,idx)=>{ b.disabled=true; if(idx===q.ok)b.classList.add('correct'); if(idx===i && idx!==q.ok)b.classList.add('wrong'); }); if(i===q.ok){ state.score++; beep(660,.08); } else { beep(180,.12); } setTimeout(()=>{ state.current++; if(state.current>=l.questions.length) finish(); else showQuestion(); }, 750); }
function finish(){ const l=levels[state.level]; const won=state.score>=l.passScore; document.getElementById('progressBar').style.width='100%'; if(won){ completeLevel(l.id,l.rewardCoins); document.getElementById('resultTitle').textContent='🏆 MISSION COMPLETE'; document.getElementById('reward').textContent=`⭐ +1 estrella · 🪙 +${l.rewardCoins} monedas`; fanfare(); } else { document.getElementById('resultTitle').textContent='💀 GAME OVER'; document.getElementById('reward').textContent='Puedes reintentarlo para conseguir la estrella.'; } document.getElementById('resultScore').textContent=`Resultado: ${state.score}/${l.questions.length} · Objetivo: ${l.passScore}/${l.questions.length}`; screen('screen-result'); }
function toggleMusic(){ state.audioOn=!state.audioOn; document.getElementById('soundBtn').textContent=state.audioOn?'🔊':'🔇'; if(state.audioOn) startMusic(); else stopMusic(); }
function ensureAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
function beep(freq=440,dur=.1){ if(!state.audioOn) return; ensureAudio(); const o=audioCtx.createOscillator(), g=audioCtx.createGain(); o.type='square'; o.frequency.value=freq; g.gain.value=.04; o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime+dur); }
function startMusic(){ ensureAudio(); stopMusic(); const notes=[523,659,784,659,587,698,880,698]; let i=0; musicTimer=setInterval(()=>{ beep(notes[i%notes.length],.09); i++; }, 260); }
function stopMusic(){ if(musicTimer) clearInterval(musicTimer); musicTimer=null; }
function fanfare(){ [523,659,784,1046].forEach((n,i)=>setTimeout(()=>beep(n,.12),i*140)); }
init();
