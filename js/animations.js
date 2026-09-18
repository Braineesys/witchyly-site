/**
 * WitchyLy — Lightweight Magical Animations & Micro-Interactions
 * - Scroll reveals using IntersectionObserver
 * - Floating magical starfield & particles in Hero
 * - Interactive gameplay showcase with falling ingredients and responsive cauldron
 * - Full prefers-reduced-motion respect
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * 1. Scroll Reveal Animations (IntersectionObserver)
   */
  function initScrollReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('in-view');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: once revealed, unobserve to free resources
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * 2. Lightweight Hero Sparkles Canvas
   */
  function initHeroSparkles() {
    if (prefersReducedMotion) return;

    const canvas = document.getElementById('hero-sparkles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    window.addEventListener('resize', () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    });

    const particles = [];
    const particleCount = Math.min(35, Math.floor(width / 35));
    const colors = ['#C77DFF', '#FFD166', '#E0AAFF', '#70E000', '#48CAE4', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2, // gently float upward
        alpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2
      });
    }

    let isHeroVisible = true;
    const heroObserver = new IntersectionObserver(([entry]) => {
      isHeroVisible = entry.isIntersecting;
    });
    const heroSection = document.getElementById('hero');
    if (heroSection) heroObserver.observe(heroSection);

    function animate() {
      if (isHeroVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.pulseSpeed;

          // Wrap around edges
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
          }
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          const currentAlpha = p.alpha + Math.sin(p.angle) * 0.25;

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        }
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  /**
   * 3. Interactive Gameplay Marketing Animation
   * Falling ingredients towards Ly's cauldron with gentle mouse follow
   */
  function initGameplayAnimation() {
    const stage = document.getElementById('gameplay-interactive-stage');
    const cauldron = document.getElementById('interactive-cauldron');
    if (!stage || !cauldron) return;

    if (prefersReducedMotion) return;

    // Official 23 ingredient sprites, each mapped to one of the 6 potion families
    const SPRITE_FAMILY_MAP = {
      'assets/ingredients/sprites/green_frog.png': 'creature',
      'assets/ingredients/sprites/spider.png': 'creature',
      'assets/ingredients/sprites/scarab_beetle.png': 'creature',
      'assets/ingredients/sprites/scorpion.png': 'creature',
      'assets/ingredients/sprites/crystal_diamond.png': 'arcane',
      'assets/ingredients/sprites/ruby_gem.png': 'arcane',
      'assets/ingredients/sprites/rune_g.png': 'arcane',
      'assets/ingredients/sprites/crystal_ball.png': 'arcane',
      'assets/ingredients/sprites/mushroom.png': 'nature',
      'assets/ingredients/sprites/dragon_egg.png': 'nature',
      'assets/ingredients/sprites/thorny_nut.png': 'nature',
      'assets/ingredients/sprites/rainbow_shell.png': 'nature',
      'assets/ingredients/sprites/skull.png': 'dark',
      'assets/ingredients/sprites/eyeball.png': 'dark',
      'assets/ingredients/sprites/black_rose.png': 'dark',
      'assets/ingredients/sprites/feather.png': 'dark',
      'assets/ingredients/sprites/firefly.png': 'ethereal',
      'assets/ingredients/sprites/spell_scroll.png': 'ethereal',
      'assets/ingredients/sprites/soul_flame.png': 'ethereal',
      'assets/ingredients/sprites/fire_flame.png': 'ethereal',
      'assets/ingredients/sprites/candy.png': 'sweets',
      'assets/ingredients/sprites/cupcake.png': 'sweets',
      'assets/ingredients/sprites/slime_cookie.png': 'sweets'
    };
    const ingredientSprites = Object.keys(SPRITE_FAMILY_MAP);

    let stageWidth = stage.clientWidth;
    let stageHeight = stage.clientHeight;
    let cauldronX = stageWidth / 2;
    let targetCauldronX = stageWidth / 2;

    function updateDimensions() {
      stageWidth = stage.clientWidth;
      stageHeight = stage.clientHeight;
    }
    window.addEventListener('resize', updateDimensions);

    // Mouse / touch interaction to gently nudge the cauldron
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      targetCauldronX = Math.max(60, Math.min(stageWidth - 60, relativeX));
    });

    stage.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        const rect = stage.getBoundingClientRect();
        const relativeX = e.touches[0].clientX - rect.left;
        targetCauldronX = Math.max(60, Math.min(stageWidth - 60, relativeX));
      }
    }, { passive: true });

    // Active falling items
    const fallingItems = [];
    const maxActiveItems = 4;
    let lastSpawnTime = 0;

    function spawnIngredient() {
      if (fallingItems.length >= maxActiveItems) return;
      const sprite = ingredientSprites[Math.floor(Math.random() * ingredientSprites.length)];
      const itemEl = document.createElement('div');
      itemEl.className = 'falling-ingredient-item';
      itemEl.innerHTML = `<img src="${sprite}" alt="Falling magical ingredient" loading="lazy">`;

      const startX = Math.random() * (stageWidth - 120) + 60;
      const speed = Math.random() * 1.2 + 1.2;
      const swayAmplitude = Math.random() * 25 + 10;
      const swayFrequency = Math.random() * 0.03 + 0.015;
      const rotationSpeed = (Math.random() - 0.5) * 2;

      stage.appendChild(itemEl);

      fallingItems.push({
        el: itemEl,
        sprite: sprite,
        x: startX,
        y: -40,
        startX: startX,
        speed: speed,
        swayAmp: swayAmplitude,
        swayFreq: swayFrequency,
        rot: 0,
        rotSpeed: rotationSpeed,
        tick: Math.random() * 100
      });
    }

    let isGameplayVisible = true;
    const gameplayObserver = new IntersectionObserver(([entry]) => {
      isGameplayVisible = entry.isIntersecting;
    });
    gameplayObserver.observe(stage);

    // 3-slot brewing queue: matched by family instead of plain FIFO overwrite
    const MAX_COLLECTED = 3;
    const collectedQueue = []; // stores { sprite, family }

    const hudSlotsContainer = document.getElementById('tray-slots');
    const floatingSlotsContainer = document.getElementById('floating-queue-slots');
    const floatingQueueWrap = document.getElementById('cauldron-floating-queue');
    const trayStatusText = document.getElementById('tray-status-text');
    const outcomeBanner = document.getElementById('cauldron-outcome-banner');

    function translate(key, fallback) {
      try {
        const lang = document.documentElement.lang || 'en';
        const dict = (typeof translations !== 'undefined') ? (translations[lang] || translations.en) : null;
        const value = dict ? getNestedValue(dict, key) : undefined;
        return value !== undefined ? value : fallback;
      } catch (e) {
        return fallback;
      }
    }

    function updateStatusText() {
      if (!trayStatusText) return;
      if (collectedQueue.length === 0) {
        trayStatusText.textContent = translate('gameplay.cauldron_status_empty', 'Catch 3 ingredients to brew!');
      } else {
        trayStatusText.textContent = translate('gameplay.cauldron_status_progress', 'Match families for a potion!');
      }
    }

    function updateCollectedDisplay() {
      // 1. Stage HUD Tray
      if (hudSlotsContainer) {
        const hudSlots = hudSlotsContainer.querySelectorAll('.tray-slot');
        hudSlots.forEach((slot, index) => {
          if (index < collectedQueue.length) {
            const { sprite } = collectedQueue[index];
            const isNewest = index === collectedQueue.length - 1;
            slot.className = `tray-slot filled ${isNewest ? 'just-added' : ''}`;
            slot.innerHTML = `<img src="${sprite}" alt="Collected ingredient ${index + 1}">`;
          } else {
            slot.className = 'tray-slot empty';
            slot.innerHTML = `<span class="slot-num">${index + 1}</span>`;
          }
        });
      }

      // 2. Overhead Cauldron Floating Queue
      if (floatingSlotsContainer) {
        const floatingSlots = floatingSlotsContainer.querySelectorAll('.floating-slot');
        floatingSlots.forEach((slot, index) => {
          if (index < collectedQueue.length) {
            const { sprite } = collectedQueue[index];
            const isNewest = index === collectedQueue.length - 1;
            slot.className = `floating-slot filled ${isNewest ? 'just-added' : ''}`;
            slot.innerHTML = `<img src="${sprite}" alt="Collected ingredient ${index + 1}">`;
          } else {
            slot.className = 'floating-slot empty';
            slot.innerHTML = '';
          }
        });
        if (floatingQueueWrap) {
          floatingQueueWrap.classList.toggle('has-items', collectedQueue.length > 0);
        }
      }

      updateStatusText();
    }

    function showOutcomeBanner(type) {
      if (!outcomeBanner) return;
      const config = {
        potion: { icon: '🧪', text: translate('gameplay.outcome_potion', 'Potion Brewed!') },
        xp: { icon: '⭐', text: translate('gameplay.outcome_xp', '+50 XP!') },
        curse: { icon: '💀', text: translate('gameplay.outcome_curse', 'CURSE!') }
      }[type];
      if (!config) return;

      outcomeBanner.innerHTML = `<span class="outcome-icon">${config.icon}</span><span class="outcome-text">${config.text}</span>`;
      outcomeBanner.className = `cauldron-outcome-banner show outcome-${type}`;
      setTimeout(() => {
        outcomeBanner.classList.remove('show');
      }, 1300);
    }

    function evaluateBrew() {
      const families = collectedQueue.map(item => item.family);
      const uniqueFamilies = new Set(families);

      let outcome;
      if (uniqueFamilies.size === 1) {
        outcome = 'potion'; // 3 of the same family
      } else if (uniqueFamilies.size === 2) {
        outcome = 'xp'; // 2 of the same family + 1 different
      } else {
        outcome = 'curse'; // all 3 different families
      }

      showOutcomeBanner(outcome);

      // Clear the cauldron after the outcome is revealed, then resume catching
      setTimeout(() => {
        collectedQueue.length = 0;
        updateCollectedDisplay();
      }, 700);
    }

    function addIngredientToQueue(sprite) {
      const family = SPRITE_FAMILY_MAP[sprite] || null;
      if (collectedQueue.length >= MAX_COLLECTED) {
        collectedQueue.length = 0; // safety reset, should already be cleared post-brew
      }
      collectedQueue.push({ sprite, family });
      updateCollectedDisplay();

      if (collectedQueue.length === MAX_COLLECTED) {
        evaluateBrew();
      }
    }

    function triggerCauldronCatchEffect(sprite) {
      // Add to the 3-slot brewing queue
      addIngredientToQueue(sprite);

      // Bounce effect on inner sprite (cauldron position is never reset)
      cauldron.classList.remove('splash-effect');
      void cauldron.offsetWidth;
      cauldron.classList.add('splash-effect');

      // Floating mini sprite popup rising out of cauldron
      const popup = document.createElement('div');
      popup.className = 'cauldron-catch-popup';
      popup.innerHTML = `<img src="${sprite}" alt="Caught ingredient">`;
      cauldron.appendChild(popup);
      setTimeout(() => popup.remove(), 600);

      // Create burst sparkles
      for (let s = 0; s < 6; s++) {
        const spark = document.createElement('span');
        spark.className = 'cauldron-spark';
        const colors = ['#70E000', '#FFD166', '#C77DFF', '#48CAE4', '#FF4D8D'];
        spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        spark.style.setProperty('--dx', `${(Math.random() - 0.5) * 80}px`);
        spark.style.setProperty('--dy', `${-Math.random() * 50 - 20}px`);
        cauldron.appendChild(spark);
        setTimeout(() => spark.remove(), 700);
      }
    }

    updateStatusText();

    function renderLoop(time) {
      if (isGameplayVisible) {
        // Smooth cauldron lerp
        cauldronX += (targetCauldronX - cauldronX) * 0.12;
        cauldron.style.transform = `translateX(${cauldronX - cauldron.offsetWidth / 2}px)`;

        // Spawn timer
        if (time - lastSpawnTime > 2000) {
          spawnIngredient();
          lastSpawnTime = time;
        }

        // Update falling items
        const cauldronTop = stageHeight - 110;

        for (let i = fallingItems.length - 1; i >= 0; i--) {
          const item = fallingItems[i];
          item.tick += item.swayFreq;
          item.y += item.speed;
          item.x = item.startX + Math.sin(item.tick) * item.swayAmp;
          item.rot += item.rotSpeed;

          item.el.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.rot}deg)`;

          // Check if caught by cauldron
          const distToCauldronX = Math.abs(item.x - cauldronX);
          if (item.y >= cauldronTop - 30 && item.y <= cauldronTop + 20 && distToCauldronX < 55) {
            triggerCauldronCatchEffect(item.sprite);
            item.el.remove();
            fallingItems.splice(i, 1);
            continue;
          }

          // Fall past bottom
          if (item.y > stageHeight + 30) {
            item.el.remove();
            fallingItems.splice(i, 1);
          }
        }
      }

      requestAnimationFrame(renderLoop);
    }

    requestAnimationFrame(renderLoop);
  }

  // Initialize once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initHeroSparkles();
    initGameplayAnimation();
  });
})();
