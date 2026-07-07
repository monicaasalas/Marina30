window.UI = (() => {
  const screen = () => document.getElementById('screen');
  const data = () => window.MARINA_GAME;
  function updateHud() {
    const state = Progress.load();
    document.getElementById('coins').textContent = state.coins;
    document.getElementById('stars').textContent = Object.keys(state.completed).length;
    document.getElementById('totalStars').textContent = data().totalMissions;
  }
  function button(text, cls = 'primary-btn') { return `<button class="${cls}" type="button">${text}</button>`; }
  function renderHome() {
    updateHud();
    const missions = data().missions.map(m => {
      const done = Progress.load().completed[m.id];
      return `<button class="mission-card ${done ? 'done' : ''}" data-mission="${m.id}">
        <span class="mission-icon">${m.icon}</span>
        <span><b>${m.title}</b><small>${m.npc} · ${m.difficulty}</small></span>
        <span class="status">${done ? '⭐' : '▶'}</span>
      </button>`;
    }).join('');
    screen().innerHTML = `<section class="panel title-panel">
      <p class="eyebrow">LEVEL 30</p>
      <h1>MARINA'S<br/>BIRTHDAY QUEST</h1>
      <p class="subtitle">Escanea misiones, gana estrellas y completa la aventura.</p>
      <div class="map-line">🍄──⭐──🌳──🎮──👑</div>
      <div class="mission-list">${missions}</div>
    </section>`;
  }
  function renderIntro(mission) {
    updateHud();
    screen().innerHTML = `<section class="panel npc-panel">
      <div class="npc-avatar">${mission.icon}</div>
      <p class="eyebrow">${mission.npc}</p>
      <h2>${mission.title}</h2>
      <p>${mission.intro}</p>
      <p class="difficulty">Dificultad: ${mission.difficulty}</p>
      ${button('▶ COMENZAR MISIÓN')}
      ${button('← Volver al mapa', 'secondary-btn')}
    </section>`;
  }
  function renderPlaceholder(mission) {
    screen().innerHTML = `<section class="panel npc-panel">
      <div class="npc-avatar">${mission.icon}</div>
      <h2>${mission.title}</h2>
      <p>Este nivel está reservado. Lo iremos definiendo juntas y se enchufará aquí sin tocar el resto del juego.</p>
      ${button('⭐ Marcar como completada de prueba')}
      ${button('← Volver al mapa', 'secondary-btn')}
    </section>`;
  }
  function renderVictory(mission, scoreText = '') {
    Progress.completeMission(mission.id, mission.rewardCoins || 100);
    updateHud();
    Music.success();
    screen().innerHTML = `<section class="panel victory-panel">
      <div class="big-stars">⭐⭐⭐⭐⭐</div>
      <h2>MISSION COMPLETE</h2>
      <p>${scoreText}</p>
      <p>+1 estrella · +${mission.rewardCoins || 100} monedas</p>
      ${button('🗺️ Volver al mapa')}
    </section>`;
  }
  function renderDefeat(mission, scoreText = '') {
    Music.fail();
    screen().innerHTML = `<section class="panel defeat-panel">
      <h2>GAME OVER</h2>
      <p>${scoreText}</p>
      <p>Has estado cerca... vuelve a intentarlo.</p>
      ${button('🔁 Reintentar')}
      ${button('🗺️ Volver al mapa', 'secondary-btn')}
    </section>`;
  }
  return { updateHud, renderHome, renderIntro, renderPlaceholder, renderVictory, renderDefeat };
})();
