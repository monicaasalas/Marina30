window.Progress = (() => {
  const KEY = 'marina_birthday_quest_progress_v2';
  const defaults = { coins: 30, completed: {}, achievements: [] };
  function load() {
    try { return { ...defaults, ...(JSON.parse(localStorage.getItem(KEY)) || {}) }; }
    catch { return { ...defaults }; }
  }
  function save(state) { localStorage.setItem(KEY, JSON.stringify(state)); }
  function completeMission(id, coins) {
    const state = load();
    if (!state.completed[id]) {
      state.completed[id] = true;
      state.coins += coins || 0;
      save(state);
    }
    return state;
  }
  function reset() { localStorage.removeItem(KEY); }
  function stars() { return Object.keys(load().completed).length; }
  return { load, save, completeMission, reset, stars };
})();
