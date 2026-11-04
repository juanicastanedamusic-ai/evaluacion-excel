/* Animación flotante de la ilustración del hero (GSAP). */
(() => {
  const art = document.querySelector('.hero-art');
  if (!art || !window.gsap) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const q = (s) => art.querySelector(s);
  const sheet = q('.art-sheet');
  const one = q('.float-one');
  const two = q('.float-two');
  const orbitOne = q('.orbit-one');
  const orbitTwo = q('.orbit-two');
  const bars = art.querySelectorAll('.mini-bars i');
  const focus = q('.sheet-focus');

  // Conserva las rotaciones definidas en CSS para que GSAP no las sobrescriba.
  gsap.set(sheet, { rotation: -5 });
  gsap.set(one, { rotation: 4 });
  gsap.set(two, { rotation: 6 });

  let tweens = [];
  const start = () => {
    stop();
    const loop = { repeat: -1, yoyo: true, ease: 'sine.inOut' };
    tweens = [
      // Entrada suave
      gsap.from(sheet, { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }),
      gsap.from([one, two], { y: 24, opacity: 0, duration: .8, delay: .35, stagger: .15, ease: 'power3.out' }),
      // Flotación continua arriba y abajo, con ritmos distintos
      gsap.to(sheet, { y: -18, rotation: -3.5, duration: 3.2, delay: 1, ...loop }),
      gsap.to(two, { y: -14, rotation: 3, duration: 2.6, delay: 1.2, ...loop }),
      gsap.to(one, { y: 12, rotation: 6, duration: 2.9, delay: 1.1, ...loop }),
      gsap.to(orbitOne, { y: 10, scale: 1.03, duration: 4.2, ...loop }),
      gsap.to(orbitTwo, { y: -12, duration: 3.6, ...loop }),
      // Detalles: barras que crecen y celda destacada que late
      gsap.fromTo(bars, { scaleY: .55 }, { scaleY: 1, transformOrigin: '50% 100%', duration: 1.1, stagger: { each: .15, repeat: -1, yoyo: true }, ease: 'sine.inOut' }),
      gsap.to(focus, { boxShadow: '0 0 0 6px rgba(43,157,90,.18)', duration: 1.4, ...loop })
    ];
  };
  const stop = () => {
    tweens.forEach((t) => t.kill());
    tweens = [];
    gsap.set([sheet, one, two, orbitOne, orbitTwo], { y: 0, opacity: 1, scale: 1 });
    gsap.set(bars, { scaleY: 1 });
    gsap.set(focus, { clearProps: 'boxShadow' });
    gsap.set(sheet, { rotation: -5 });
    gsap.set(one, { rotation: 4 });
    gsap.set(two, { rotation: 6 });
  };
  const apply = () => (reduce.matches ? stop() : start());
  apply();
  reduce.addEventListener?.('change', apply);

  // Pausa cuando la portada no está visible (ahorra batería durante la prueba).
  const intro = document.getElementById('intro');
  if (intro && 'MutationObserver' in window) {
    new MutationObserver(() => {
      if (intro.hidden) gsap.globalTimeline.pause();
      else gsap.globalTimeline.resume();
    }).observe(intro, { attributes: true, attributeFilter: ['hidden'] });
  }
})();
