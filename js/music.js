window.Music = (() => {
  let ctx, master, osc1, osc2, timer;
  let isOn = false;
  const notes = [261.63, 329.63, 392, 523.25, 392, 329.63, 293.66, 349.23];
  function ensure() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.035;
      master.connect(ctx.destination);
    }
  }
  function blip(freq, duration = 0.12) {
    ensure();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    o.connect(g).connect(master);
    o.start();
    o.stop(ctx.currentTime + duration + 0.02);
  }
  function start() {
    ensure();
    if (isOn) return;
    isOn = true;
    let i = 0;
    timer = setInterval(() => { blip(notes[i % notes.length], 0.10); i++; }, 260);
  }
  function stop() { isOn = false; clearInterval(timer); }
  function toggle() { isOn ? stop() : start(); return isOn; }
  function success() { [523, 659, 784, 1046].forEach((n, i) => setTimeout(() => blip(n, .15), i * 90)); }
  function fail() { [220, 196, 164].forEach((n, i) => setTimeout(() => blip(n, .18), i * 110)); }
  return { start, stop, toggle, success, fail, get isOn(){ return isOn; } };
})();
