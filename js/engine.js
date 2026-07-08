(() => {
  let currentMission = null;
  let currentIndex = 0;
  let score = 0;
  let activeAudio = null;
  let activeTimer = null;
  let partyIndex = 0;
  let partyRemaining = 0;

  const $screen = () => document.getElementById('screen');
  const missions = () => window.MARINA_GAME.missions;
  const missionById = id => missions().find(m => m.id === id) || missions()[0];

  function route() {
    const params = new URLSearchParams(location.search);
    const missionId = params.get('mission') || location.hash.replace('#', '');
    if (missionId) showIntro(missionById(missionId));
    else UI.renderHome();
  }

  function showIntro(mission) {
    stopAudio();
    currentMission = mission;
    UI.renderIntro(mission);
  }

  function startMission(mission) {
    stopAudio();
    currentMission = mission;
    if (mission.type === 'quiz') return startQuestionMission(mission);
    if (mission.type === 'music') return startMusicMission(mission);
    if (mission.type === 'party') return startPartyMission(mission);
    return UI.renderPlaceholder(mission);
  }

  function startQuestionMission(mission) {
    currentIndex = 0;
    score = 0;
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentMission.questions[currentIndex];
    const progress = Math.round((currentIndex / currentMission.questions.length) * 100);
    $screen().innerHTML = `<section class="panel quiz-panel">
      <p class="eyebrow">${currentMission.title}</p>
      <div class="progress"><span style="width:${progress}%"></span></div>
      <h2>Pregunta ${currentIndex + 1}/${currentMission.questions.length}</h2>
      <p class="question">${q.text}</p>
      <div class="answers">
        ${q.options.map((op, i) => `<button class="answer-btn" data-answer="${i}" type="button">${op}</button>`).join('')}
      </div>
    </section>`;
  }

  function startMusicMission(mission) {
    currentIndex = 0;
    score = 0;
    renderMusicQuestion(false);
  }

  function renderMusicQuestion(hasPlayed) {
    const q = currentMission.questions[currentIndex];
    const progress = Math.round((currentIndex / currentMission.questions.length) * 100);
    $screen().innerHTML = `<section class="panel music-panel">
      <p class="eyebrow">${currentMission.title}</p>
      <div class="progress"><span style="width:${progress}%"></span></div>
      <h2>Canción ${currentIndex + 1}/${currentMission.questions.length}</h2>
      <div class="radio-box ${hasPlayed ? '' : 'waiting'}">
        <div class="vinyl" id="vinyl">🎵</div>
        <div class="equalizer"><span></span><span></span><span></span><span></span><span></span></div>
        <p class="song-hint">Pulsa PLAY. Solo sonarán 5 segundos.</p>
        <button class="primary-btn play-song-btn" data-play-song="true" type="button" ${hasPlayed ? 'disabled' : ''}>▶ PLAY 5s</button>
        <p class="countdown" id="countdown">${hasPlayed ? 'Fragmento escuchado' : '00:05'}</p>
      </div>
      <div class="answers ${hasPlayed ? '' : 'locked'}">
        ${q.options.map((op, i) => `<button class="answer-btn" data-answer="${i}" type="button" ${hasPlayed ? '' : 'disabled'}>${op}</button>`).join('')}
      </div>
    </section>`;
  }

  function playCurrentSong() {
    const q = currentMission.questions[currentIndex];
    stopAudio();
    activeAudio = new Audio(q.audio);
    activeAudio.volume = 0.95;
    const vinyl = document.getElementById('vinyl');
    const countdown = document.getElementById('countdown');
    const playBtn = document.querySelector('.play-song-btn');
    if (vinyl) vinyl.classList.add('spinning');
    if (playBtn) playBtn.disabled = true;
    let remaining = 5;
    if (countdown) countdown.textContent = '00:05';
    activeTimer = setInterval(() => {
      remaining -= 1;
      if (countdown) countdown.textContent = `00:0${Math.max(remaining,0)}`;
      if (remaining <= 0) {
        stopAudio(false);
        renderMusicQuestion(true);
      }
    }, 1000);
    activeAudio.play().catch(() => {
      if (countdown) countdown.textContent = 'Toca de nuevo para activar audio';
      if (playBtn) playBtn.disabled = false;
    });
  }



  function startPartyMission(mission) {
    partyIndex = 0;
    stopAudio();
    renderPartyRules(mission);
  }

  function renderPartyRules(mission) {
    const rules = (mission.rules || []).map(r => `<li>${r}</li>`).join('');
    $screen().innerHTML = `<section class="panel party-panel">
      <div class="npc-avatar">${mission.icon}</div>
      <p class="eyebrow">${mission.title}</p>
      <h2>Cómo se juega</h2>
      <p class="question">${mission.objective || ''}</p>
      <ul class="rules-list">${rules}</ul>
      ${mission.subtype === 'rules'
        ? '<button class="primary-btn" data-party-complete="true" type="button">🏆 Misión superada</button>'
        : '<button class="primary-btn" data-party-start="true" type="button">▶ Empezar ronda</button>'}
      <button class="secondary-btn" type="button">← Volver al mapa</button>
    </section>`;
  }

  function startPartyRound() {
    const total = (currentMission.rounds || []).length;
    if (!total) return UI.renderVictory(currentMission, currentMission.finalText || 'Misión superada.');
    renderPartyRound(false);
  }

  function renderPartyRound(finished = false) {
    const total = currentMission.rounds.length;
    const text = currentMission.rounds[partyIndex];
    const seconds = currentMission.secondsPerRound || 30;
    $screen().innerHTML = `<section class="panel party-panel">
      <p class="eyebrow">${currentMission.title}</p>
      <h2>Ronda ${partyIndex + 1}/${total}</h2>
      <div class="challenge-card">${text}</div>
      <div class="giant-timer" id="partyTimer">${finished ? '⏰ TIEMPO' : seconds}</div>
      <p>${finished ? '¡Enseñad el resultado!' : 'Preparados, listos...'}</p>
      ${finished
        ? `<button class="primary-btn" data-party-next="true" type="button">${partyIndex + 1 >= total ? '🏆 Finalizar misión' : 'Siguiente ronda ▶'}</button>`
        : '<button class="primary-btn" data-party-countdown="true" type="button">⏱️ Iniciar cuenta atrás</button>'}
      <button class="secondary-btn" type="button">← Volver al mapa</button>
    </section>`;
  }

  function startPartyCountdown() {
    clearInterval(activeTimer);
    partyRemaining = currentMission.secondsPerRound || 30;
    const timerEl = document.getElementById('partyTimer');
    const btn = document.querySelector('[data-party-countdown]');
    if (btn) btn.disabled = true;
    if (timerEl) timerEl.textContent = partyRemaining;
    activeTimer = setInterval(() => {
      partyRemaining -= 1;
      if (timerEl) timerEl.textContent = partyRemaining > 0 ? partyRemaining : '⏰ TIEMPO';
      if (partyRemaining <= 0) {
        clearInterval(activeTimer);
        activeTimer = null;
        renderPartyRound(true);
      }
    }, 1000);
  }

  function nextPartyRound() {
    clearInterval(activeTimer);
    partyIndex += 1;
    if (partyIndex >= (currentMission.rounds || []).length) {
      return UI.renderVictory(currentMission, currentMission.finalText || 'Misión superada.');
    }
    renderPartyRound(false);
  }

  function stopAudio(clearUi = true) {
    if (activeTimer) clearInterval(activeTimer);
    activeTimer = null;
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }
    activeAudio = null;
    if (clearUi) {
      const vinyl = document.getElementById('vinyl');
      if (vinyl) vinyl.classList.remove('spinning');
    }
  }

  function answer(i) {
    const q = currentMission.questions[currentIndex];
    const correct = Number(i) === q.answer;
    if (correct) score++;
    document.querySelectorAll('.answer-btn').forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) btn.classList.add('correct');
      if (idx === Number(i) && !correct) btn.classList.add('wrong');
    });
    setTimeout(() => {
      currentIndex++;
      if (currentIndex < currentMission.questions.length) {
        if (currentMission.type === 'music') renderMusicQuestion(false);
        else renderQuestion();
      } else finishMission();
    }, 850);
  }

  function finishMission() {
    stopAudio();
    const text = `Resultado: ${score}/${currentMission.questions.length} aciertos.`;
    if (score >= currentMission.passScore) UI.renderVictory(currentMission, text);
    else UI.renderDefeat(currentMission, text);
  }

  document.addEventListener('click', (e) => {
    const missionBtn = e.target.closest('[data-mission]');
    if (missionBtn) return showIntro(missionById(missionBtn.dataset.mission));

    const playBtn = e.target.closest('[data-play-song]');
    if (playBtn) return playCurrentSong();

    const answerBtn = e.target.closest('[data-answer]');
    if (answerBtn) return answer(answerBtn.dataset.answer);

    if (e.target.closest('[data-party-start]')) return startPartyRound();
    if (e.target.closest('[data-party-countdown]')) return startPartyCountdown();
    if (e.target.closest('[data-party-next]')) return nextPartyRound();
    if (e.target.closest('[data-party-complete]')) return UI.renderVictory(currentMission, currentMission.finalText || 'Misión superada.');

    if (e.target.id === 'soundBtn') {
      const on = Music.toggle();
      e.target.textContent = on ? '🔊' : '🔇';
      return;
    }

    if (e.target.classList.contains('primary-btn')) {
      if (!currentMission) return UI.renderHome();
      if (e.target.textContent.includes('COMENZAR')) return startMission(currentMission);
      if (e.target.textContent.includes('completada')) return UI.renderVictory(currentMission, 'Nivel completado en modo prueba.');
      if (e.target.textContent.includes('Volver')) return UI.renderHome();
      if (e.target.textContent.includes('Reintentar')) return startMission(currentMission);
      return UI.renderHome();
    }
    if (e.target.classList.contains('secondary-btn')) UI.renderHome();
  });

  window.addEventListener('load', () => {
    const state = Progress.load();
    if (state.coins === undefined) Progress.save({ coins: window.MARINA_GAME.startCoins, completed: {}, achievements: [] });
    UI.updateHud();
    route();
  });
})();
