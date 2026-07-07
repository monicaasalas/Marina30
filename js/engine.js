(() => {
  let currentMission = null;
  let quizIndex = 0;
  let score = 0;

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
    currentMission = mission;
    UI.renderIntro(mission);
  }

  function startMission(mission) {
    currentMission = mission;
    if (mission.type === 'quiz') startQuiz(mission);
    else UI.renderPlaceholder(mission);
  }

  function startQuiz(mission) {
    quizIndex = 0;
    score = 0;
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentMission.questions[quizIndex];
    const progress = Math.round(((quizIndex) / currentMission.questions.length) * 100);
    $screen().innerHTML = `<section class="panel quiz-panel">
      <p class="eyebrow">${currentMission.title}</p>
      <div class="progress"><span style="width:${progress}%"></span></div>
      <h2>Pregunta ${quizIndex + 1}/${currentMission.questions.length}</h2>
      <p class="question">${q.text}</p>
      <div class="answers">
        ${q.options.map((op, i) => `<button class="answer-btn" data-answer="${i}" type="button">${op}</button>`).join('')}
      </div>
    </section>`;
  }

  function answer(i) {
    const q = currentMission.questions[quizIndex];
    const correct = Number(i) === q.answer;
    if (correct) score++;
    document.querySelectorAll('.answer-btn').forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) btn.classList.add('correct');
      if (idx === Number(i) && !correct) btn.classList.add('wrong');
    });
    setTimeout(() => {
      quizIndex++;
      if (quizIndex < currentMission.questions.length) renderQuestion();
      else finishQuiz();
    }, 650);
  }

  function finishQuiz() {
    const text = `Resultado: ${score}/${currentMission.questions.length} aciertos.`;
    if (score >= currentMission.passScore) UI.renderVictory(currentMission, text);
    else UI.renderDefeat(currentMission, text);
  }

  document.addEventListener('click', (e) => {
    const missionBtn = e.target.closest('[data-mission]');
    if (missionBtn) return showIntro(missionById(missionBtn.dataset.mission));

    const answerBtn = e.target.closest('[data-answer]');
    if (answerBtn) return answer(answerBtn.dataset.answer);

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
