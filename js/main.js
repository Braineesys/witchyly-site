/**
 * WitchyLy — Main UI Controller
 * Handles Navigation, Mobile Drawer, Sticky Header, Room Selector, Grimoire Inspector & Lightbox
 */

(function () {
  'use strict';

  // Room data catalogue for the 8 Rooms section (authentic backgrounds from game)
  const ROOMS_DATA = [
    {
      id: 1,
      nameKey: 'rooms.r1_name',
      descKey: 'rooms.r1_desc',
      levelsKey: 'rooms.r1_levels',
      badgeKey: 'rooms.badge_featured',
      img: 'assets/rooms/room_1_living_room.jpg',
      thumb: 'assets/rooms/room_1_living_room.jpg',
      color: '#6A2E9E',
      isUnlocked: true
    },
    {
      id: 2,
      nameKey: 'rooms.r2_name',
      descKey: 'rooms.r2_desc',
      levelsKey: 'rooms.r2_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_2_kitchen.jpg',
      thumb: 'assets/rooms/room_2_kitchen.jpg',
      color: '#B5179E',
      isUnlocked: true
    },
    {
      id: 3,
      nameKey: 'rooms.r3_name',
      descKey: 'rooms.r3_desc',
      levelsKey: 'rooms.r3_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_3_bedroom.jpg',
      thumb: 'assets/rooms/room_3_bedroom.jpg',
      color: '#7209B7',
      isUnlocked: true
    },
    {
      id: 4,
      nameKey: 'rooms.r4_name',
      descKey: 'rooms.r4_desc',
      levelsKey: 'rooms.r4_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_4_bathroom.jpg',
      thumb: 'assets/rooms/room_4_bathroom.jpg',
      color: '#4361EE',
      isUnlocked: true
    },
    {
      id: 5,
      nameKey: 'rooms.r5_name',
      descKey: 'rooms.r5_desc',
      levelsKey: 'rooms.r5_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_5_laboratory.jpg',
      thumb: 'assets/rooms/room_5_laboratory.jpg',
      color: '#4CC9F0',
      isUnlocked: true
    },
    {
      id: 6,
      nameKey: 'rooms.r6_name',
      descKey: 'rooms.r6_desc',
      levelsKey: 'rooms.r6_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_6_greenhouse.jpg',
      thumb: 'assets/rooms/room_6_greenhouse.jpg',
      color: '#38B000',
      isUnlocked: true
    },
    {
      id: 7,
      nameKey: 'rooms.r7_name',
      descKey: 'rooms.r7_desc',
      levelsKey: 'rooms.r7_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_7_library.jpg',
      thumb: 'assets/rooms/room_7_library.jpg',
      color: '#F72585',
      isUnlocked: true
    },
    {
      id: 8,
      nameKey: 'rooms.r8_name',
      descKey: 'rooms.r8_desc',
      levelsKey: 'rooms.r8_levels',
      badgeKey: 'rooms.badge_locked',
      img: 'assets/rooms/room_8_attic.jpg',
      thumb: 'assets/rooms/room_8_attic.jpg',
      color: '#FFB703',
      isUnlocked: true
    }
  ];

  // Potion inventory catalogue for Lilly's Grimoire
  const POTIONS_DATA = [
    {
      id: 'dark-magic',
      nameKey: 'grimoire.p1_name',
      typeKey: 'grimoire.p1_type',
      descKey: 'grimoire.p1_desc',
      img: 'assets/potions/potion_dark_magic_hires.jpg',
      count: 'x5',
      family: 'Dark Magic',
      color: '#8A2BE2'
    },
    {
      id: 'creature',
      nameKey: 'grimoire.p2_name',
      typeKey: 'grimoire.p2_type',
      descKey: 'grimoire.p2_desc',
      img: 'assets/potions/potion_creature_hires.jpg',
      count: 'x8',
      family: 'Creature',
      color: '#2EC4B6'
    },
    {
      id: 'arcane',
      nameKey: 'grimoire.p3_name',
      typeKey: 'grimoire.p3_type',
      descKey: 'grimoire.p3_desc',
      img: 'assets/potions/potion_arcane_hires.jpg',
      count: 'x1',
      family: 'Arcane',
      color: '#9D4EDD'
    },
    {
      id: 'nature',
      nameKey: 'grimoire.p4_name',
      typeKey: 'grimoire.p4_type',
      descKey: 'grimoire.p4_desc',
      img: 'assets/potions/potion_nature_hires.jpg',
      count: 'x2',
      family: 'Nature',
      color: '#70E000'
    },
    {
      id: 'ethereal',
      nameKey: 'grimoire.p5_name',
      typeKey: 'grimoire.p5_type',
      descKey: 'grimoire.p5_desc',
      img: 'assets/potions/potion_ethereal_hires.jpg',
      count: 'x4',
      family: 'Ethereal',
      color: '#48CAE4'
    },
    {
      id: 'sweets',
      nameKey: 'grimoire.p6_name',
      typeKey: 'grimoire.p6_type',
      descKey: 'grimoire.p6_desc',
      img: 'assets/potions/potion_sweets_hires.jpg',
      count: 'x6',
      family: 'Sweets',
      color: '#FF4D8D'
    }
  ];

  let currentRoomIndex = 0;
  let currentPotionIndex = 0;

  /**
   * Sticky Header & Scroll Spy
   */
  function initNavigation() {
    const navbar = document.querySelector('.site-nav');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active link highlighting
      let currentId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, { passive: true });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Close mobile menu if open
            closeMobileMenu();
          }
        }
      });
    });
  }

  /**
   * Mobile Drawer Menu
   */
  function initMobileMenu() {
    const hamburger = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const backdrop = document.querySelector('.mobile-nav-backdrop');
    const closeBtn = document.querySelector('.mobile-nav-close');

    if (!hamburger || !drawer) return;

    function openMenu() {
      drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  function closeMobileMenu() {
    const drawer = document.querySelector('.mobile-nav-drawer');
    const backdrop = document.querySelector('.mobile-nav-backdrop');
    const hamburger = document.querySelector('.mobile-menu-toggle');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /**
   * Room Explorer (8 Rooms Carousel / Switcher)
   */
  function initRoomExplorer() {
    const roomContainer = document.getElementById('room-showcase');
    if (!roomContainer) return;

    const prevBtn = document.getElementById('room-prev-btn');
    const nextBtn = document.getElementById('room-next-btn');
    const tabsContainer = document.getElementById('room-tabs-list');

    function renderRoom(index) {
      currentRoomIndex = (index + ROOMS_DATA.length) % ROOMS_DATA.length;
      const room = ROOMS_DATA[currentRoomIndex];

      // Update room details
      const titleEl = document.getElementById('active-room-title');
      const descEl = document.getElementById('active-room-desc');
      const levelsEl = document.getElementById('active-room-levels');
      const badgeEl = document.getElementById('active-room-badge');
      const imgEl = document.getElementById('active-room-image');
      const frameEl = document.getElementById('active-room-frame');

      if (titleEl) {
        titleEl.setAttribute('data-i18n', room.nameKey);
      }
      if (descEl) {
        descEl.setAttribute('data-i18n', room.descKey);
      }
      if (levelsEl) {
        levelsEl.setAttribute('data-i18n', room.levelsKey);
      }
      if (badgeEl) {
        badgeEl.setAttribute('data-i18n', room.badgeKey);
        badgeEl.className = `room-status-badge ${room.isUnlocked ? 'badge-featured' : 'badge-locked'}`;
      }
      if (imgEl) {
        imgEl.src = room.img;
        imgEl.alt = `WitchyLy Room ${room.id}`;
      }
      if (frameEl) {
        frameEl.style.setProperty('--room-accent', room.color);
      }

      // Re-apply localization so text matches current language immediately
      if (window.applyLanguage && document.documentElement.lang) {
        window.applyLanguage(document.documentElement.lang);
      }

      // Update tab active classes
      document.querySelectorAll('.room-tab-item').forEach((tab, i) => {
        if (i === currentRoomIndex) {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
        } else {
          tab.classList.remove('active');
          tab.setAttribute('aria-selected', 'false');
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => renderRoom(currentRoomIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => renderRoom(currentRoomIndex + 1));
    }

    // Bind tab clicks
    if (tabsContainer) {
      tabsContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.room-tab-item');
        if (tab) {
          const index = parseInt(tab.getAttribute('data-room-index'), 10);
          if (!isNaN(index)) {
            renderRoom(index);
          }
        }
      });
    }

    renderRoom(0);
  }

  /**
   * Lilly's Grimoire Interactive Potion Showcase
   */
  function initGrimoireShowcase() {
    const grimoireContainer = document.getElementById('grimoire') || document.querySelector('.grimoire-section');
    if (!grimoireContainer) return;

    const cards = document.querySelectorAll('.grimoire-potion-card');
    const showcaseBottle = document.getElementById('showcase-potion-img');
    const showcaseTitle = document.getElementById('showcase-potion-title');
    const showcaseType = document.getElementById('showcase-potion-type');
    const showcaseDesc = document.getElementById('showcase-potion-desc');
    const showcaseCount = document.getElementById('showcase-potion-count');

    function selectPotion(index) {
      currentPotionIndex = index;
      const potion = POTIONS_DATA[currentPotionIndex];
      if (!potion) return;

      cards.forEach((c, i) => {
        if (i === index) {
          c.classList.add('active');
          c.setAttribute('aria-selected', 'true');
        } else {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        }
      });

      if (showcaseBottle) {
        showcaseBottle.src = potion.img;
        showcaseBottle.alt = potion.family;
      }
      if (showcaseTitle) {
        showcaseTitle.setAttribute('data-i18n', potion.nameKey);
      }
      if (showcaseType) {
        showcaseType.setAttribute('data-i18n', potion.typeKey);
      }
      if (showcaseDesc) {
        showcaseDesc.setAttribute('data-i18n', potion.descKey);
      }
      if (showcaseCount) {
        showcaseCount.textContent = potion.count;
      }

      // Re-trigger current language on newly injected keys
      if (window.applyLanguage && document.documentElement.lang) {
        window.applyLanguage(document.documentElement.lang);
      }
    }

    cards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        selectPotion(index);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectPotion(index);
        }
      });
    });

    selectPotion(0);
  }

  /**
   * Screenshot Gallery Lightbox
   */
  function initScreenshotLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-card');
    const modal = document.getElementById('gallery-lightbox-modal');
    if (!modal) return;

    const modalImg = document.getElementById('lightbox-active-img');
    const modalCaption = document.getElementById('lightbox-active-caption');
    const closeBtn = document.querySelector('.lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    let currentIndex = 0;
    const itemsData = [];

    galleryItems.forEach((card, index) => {
      const img = card.querySelector('img');
      const captionKey = card.getAttribute('data-caption-key') || '';
      itemsData.push({
        src: img ? img.src : '',
        alt: img ? img.alt : '',
        captionKey: captionKey
      });

      card.addEventListener('click', () => openLightbox(index));
    });

    function openLightbox(index) {
      currentIndex = index;
      updateLightboxContent();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    function updateLightboxContent() {
      const item = itemsData[currentIndex];
      if (!item) return;
      modalImg.src = item.src;
      modalImg.alt = item.alt;
      if (item.captionKey) {
        modalCaption.setAttribute('data-i18n', item.captionKey);
        if (window.applyLanguage && document.documentElement.lang) {
          window.applyLanguage(document.documentElement.lang);
        }
      } else {
        modalCaption.textContent = item.alt;
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + itemsData.length) % itemsData.length;
        updateLightboxContent();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % itemsData.length;
        updateLightboxContent();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + itemsData.length) % itemsData.length;
        updateLightboxContent();
      }
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % itemsData.length;
        updateLightboxContent();
      }
    });
  }

  // Initialize all interactive controllers on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initRoomExplorer();
    initGrimoireShowcase();
    initScreenshotLightbox();
  });
})();
