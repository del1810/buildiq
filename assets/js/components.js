/**
 * BUILDIQ 2027 – Shared Layout (Header & Footer) + Reusable Card/List Item Templates
 * - Common Navbar & Mobile Drawer (#site-header)
 * - Common Footer, Floating Social Sidebar & Global Modal (#site-footer)
 * - Reusable Card / List Item HTML Generators for JSON-driven lists
 */

(function () {
  const ICONS = {
    home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    building: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
    wifi: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>',
    lightbulb: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    zap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    monitor: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
    wind: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>',
    network: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
    cpu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
    layers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
    calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    mapPin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    arrowRight: '<svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    sparkles: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
    globe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    handshake: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>',
    trendingUp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    rocket: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    award: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    sliders: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>',
    chevronDown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    newspaper: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>'
  };

  function getIcon(name) {
    if (!name) return ICONS.cpu;
    const key = String(name).toLowerCase();
    if (key.includes('home')) return ICONS.home;
    if (key.includes('building') || key.includes('landmark') || key.includes('hotel') || key.includes('factory')) return ICONS.building;
    if (key.includes('wifi') || key.includes('network') || key.includes('share') || key.includes('workflow')) return ICONS.network;
    if (key.includes('light')) return ICONS.lightbulb;
    if (key.includes('shield')) return ICONS.shield;
    if (key.includes('zap') || key.includes('activity')) return ICONS.zap;
    if (key.includes('monitor') || key.includes('presentation') || key.includes('eye')) return ICONS.monitor;
    if (key.includes('wind')) return ICONS.wind;
    if (key.includes('cpu') || key.includes('server') || key.includes('settings')) return ICONS.cpu;
    if (key.includes('layer') || key.includes('layout') || key.includes('compass')) return ICONS.layers;
    if (key.includes('calendar')) return ICONS.calendar;
    if (key.includes('map')) return ICONS.mapPin;
    if (key.includes('users') || key.includes('user') || key.includes('briefcase')) return ICONS.users;
    if (key.includes('sparkle') || key.includes('crown') || key.includes('star')) return ICONS.sparkles;
    if (key.includes('globe')) return ICONS.globe;
    if (key.includes('handshake')) return ICONS.handshake;
    if (key.includes('trend')) return ICONS.trendingUp;
    if (key.includes('rocket')) return ICONS.rocket;
    if (key.includes('award')) return ICONS.award;
    if (key.includes('slider') || key.includes('toggle')) return ICONS.sliders;
    if (key.includes('check')) return ICONS.check;
    if (key.includes('leaf')) return ICONS.leaf;
    return ICONS[name] || ICONS.cpu;
  }

  function getCurrentPageFile() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename === '' ? 'index.html' : filename;
  }

  /* ========================================================================
     1. COMMON HEADER (Shared across all pages via #site-header)
     ======================================================================== */
  function renderHeader() {
    const headerMount = document.getElementById('site-header');
    if (!headerMount) return;

    const currentFile = getCurrentPageFile();
    const chevronSvg = '<svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';

    const navGroups = [
      { type: 'link', label: 'Home', path: 'index.html' },
      { type: 'link', label: 'About BUILDIQ', path: 'about.html' },
      {
        type: 'dropdown',
        label: 'Exhibitors',
        items: [
          { label: 'Exhibit Profile', path: 'exhibit-profile.html', subtext: '10 smart building technology categories' },
          { label: 'Why Exhibit', path: 'why-exhibit.html', subtext: 'Exhibitor benefits & stall enquiry' }
        ]
      },
      {
        type: 'dropdown',
        label: 'Visitors',
        items: [
          { label: 'Visitor Profile', path: 'visitor-profile.html', subtext: '18 target professional visitor groups' },
          { label: 'Why Visit', path: 'why-visit.html', subtext: 'Key takeaways & visitor registration' }
        ]
      },
      {
        type: 'dropdown',
        label: 'Co-Expos, Sponsors & Media',
        alignRight: true,
        items: [
          { label: 'Concurrent Exhibitions', path: 'concurrent-exhibitions.html', subtext: 'ICONMEQ, ICONMAT, ELVISION & PROPAINT' },
          { label: 'Sponsors & Partners', path: 'sponsors.html', subtext: 'Sponsorship tiers & branding opportunities' },
          { label: 'Media & Updates', path: 'media.html', subtext: 'Official news, press & showcase gallery' }
        ]
      },
      { type: 'link', label: 'Contact', path: 'contact.html' }
    ];

    const mobileLinks = [
      { label: 'Home', path: 'index.html' },
      { label: 'About BUILDIQ', path: 'about.html' },
      { label: 'Exhibit Profile', path: 'exhibit-profile.html' },
      { label: 'Why Exhibit', path: 'why-exhibit.html' },
      { label: 'Visitor Profile', path: 'visitor-profile.html' },
      { label: 'Why Visit', path: 'why-visit.html' },
      { label: 'Concurrent Exhibitions', path: 'concurrent-exhibitions.html' },
      { label: 'Sponsors & Partners', path: 'sponsors.html' },
      { label: 'Media & Updates', path: 'media.html' },
      { label: 'Contact', path: 'contact.html' }
    ];

    const navLinksHtml = navGroups
      .map((group) => {
        if (group.type === 'link') {
          const isActive = currentFile === group.path;
          return `
            <div class="nav-item">
              <a href="${group.path}" class="nav-link ${isActive ? 'active' : ''}">${group.label}</a>
            </div>
          `;
        }

        const isGroupActive = group.items.some((i) => i.path === currentFile);
        const dropdownItemsHtml = group.items
          .map((item) => {
            const isItemActive = currentFile === item.path;
            return `
              <a href="${item.path}" class="nav-dropdown-item ${isItemActive ? 'active' : ''}">
                <strong>${item.label} <span>→</span></strong>
                <span>${item.subtext}</span>
              </a>
            `;
          })
          .join('');

        return `
          <div class="nav-item">
            <button type="button" class="nav-link ${isGroupActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">
              <span>${group.label}</span>
              ${chevronSvg}
            </button>
            <div class="nav-dropdown-menu ${group.alignRight ? 'align-right' : ''}" role="menu">
              ${dropdownItemsHtml}
            </div>
          </div>
        `;
      })
      .join('');

    const mobileNavLinksHtml = mobileLinks
      .map((item) => {
        const isActive = currentFile === item.path;
        return `<a href="${item.path}" class="mobile-nav-link ${isActive ? 'active' : ''}">
          <span>${item.label}</span>
          ${ICONS.arrowRight}
        </a>`;
      })
      .join('');

    headerMount.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <header class="site-header" id="main-sticky-header" role="banner">
        <div class="header-inner">
          <a href="index.html" class="header-brand" aria-label="BUILDIQ 2027 - Official Home">
            <img src="assets/images/buildiq-logo.png" alt="BUILDIQ 2027 Official Logo" class="header-logo" />
          </a>

          <nav class="header-nav" aria-label="Primary Navigation">
            ${navLinksHtml}
          </nav>

          <button type="button" class="mobile-menu-toggle" id="mobile-menu-open" aria-label="Open navigation menu" aria-expanded="false">
            ${ICONS.menu}
          </button>
        </div>
      </header>

      <div class="mobile-drawer-backdrop" id="mobile-drawer-backdrop"></div>
      <aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation" aria-hidden="true">
        <div class="mobile-drawer-header">
          <img src="assets/images/buildiq-logo.png" alt="BUILDIQ 2027 Logo" />
          <button type="button" class="mobile-drawer-close" id="mobile-menu-close" aria-label="Close navigation menu">
            ${ICONS.close}
          </button>
        </div>
        <div class="mobile-drawer-body">
          <nav class="mobile-nav-list">
            ${mobileNavLinksHtml}
          </nav>
        </div>
      </aside>
    `;

    // Sticky scroll shadow listener
    const stickyHeader = document.getElementById('main-sticky-header');
    const onScroll = () => {
      if (window.scrollY > 16) {
        stickyHeader.classList.add('scrolled');
      } else {
        stickyHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Exclusive Navbar Dropdown Control with Hover Grace Timer & Viewport Boundary Alignment
    const navItems = headerMount.querySelectorAll('.nav-item');
    const closeTimers = new WeakMap();

    function clearCloseTimer(item) {
      const t = closeTimers.get(item);
      if (t) {
        clearTimeout(t);
        closeTimers.delete(item);
      }
    }

    function adjustDropdownPosition(item) {
      const menu = item.querySelector('.nav-dropdown-menu');
      if (!menu) return;
      const rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth - 16) {
        menu.classList.add('align-right');
      }
    }

    function closeAllDropdowns(exceptItem = null) {
      navItems.forEach((item) => {
        if (item !== exceptItem) {
          clearCloseTimer(item);
          item.classList.remove('open');
          const btn = item.querySelector('button.nav-link');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    navItems.forEach((item) => {
      const hasDropdown = item.querySelector('.nav-dropdown-menu');
      const btn = item.querySelector('button.nav-link');

      item.addEventListener('mouseenter', () => {
        clearCloseTimer(item);
        closeAllDropdowns(item);
        if (hasDropdown) {
          item.classList.add('open');
          if (btn) btn.setAttribute('aria-expanded', 'true');
          adjustDropdownPosition(item);
        }
      });

      item.addEventListener('mouseleave', () => {
        if (hasDropdown) {
          const timer = setTimeout(() => {
            item.classList.remove('open');
            if (btn) {
              btn.setAttribute('aria-expanded', 'false');
              btn.blur();
            }
          }, 180);
          closeTimers.set(item, timer);
        }
      });

      if (btn && hasDropdown) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          clearCloseTimer(item);
          const willOpen = !item.classList.contains('open');
          closeAllDropdowns(item);
          item.classList.toggle('open', willOpen);
          btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
          if (willOpen) adjustDropdownPosition(item);
        });
      }
    });

    document.addEventListener('click', (e) => {
      if (!headerMount.contains(e.target)) {
        closeAllDropdowns();
      }
    });

    // Mobile drawer controls
    const openBtn = document.getElementById('mobile-menu-open');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');

    function closeDrawer() {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function openDrawer() {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
  }

  /* ========================================================================
     2. COMMON FOOTER + FLOATING SOCIAL BAR + MODAL (Shared via #site-footer)
     ======================================================================== */
  function renderFooter() {
    const footerMount = document.getElementById('site-footer');
    if (!footerMount) return;

    footerMount.innerHTML = `
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <a href="index.html" class="footer-logo-badge" aria-label="BUILDIQ 2027">
                <img src="assets/images/buildiq-logo.png" alt="BUILDIQ 2027 Official Logo" />
              </a>
              <p class="footer-desc">
                <strong>BUILDIQ 2027 – International Smart Building &amp; Intelligent Infrastructure Expo</strong><br />
                BUILDIQ 2027 is a focused B2B exhibition bringing together the latest innovations, technologies, products and solutions shaping the future of residential, commercial and industrial buildings.
              </p>
              <div style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:#93C5FD; font-weight:700; margin-bottom:8px;">Organised By</div>
              <div class="footer-organizer-box">
                <img src="assets/images/logos/fairconnects-logo.png" alt="FAIR CONNECTS INDIA LLP" />
              </div>
            </div>

            <div class="footer-col">
              <h4>Quick Navigation</h4>
              <ul class="footer-links">
                <li><a href="index.html"><span style="color:var(--color-secondary);">›</span> Home</a></li>
                <li><a href="about.html"><span style="color:var(--color-secondary);">›</span> About BUILDIQ</a></li>
                <li><a href="exhibit-profile.html"><span style="color:var(--color-secondary);">›</span> Exhibit Profile</a></li>
                <li><a href="why-exhibit.html"><span style="color:var(--color-secondary);">›</span> Why Exhibit</a></li>
                <li><a href="visitor-profile.html"><span style="color:var(--color-secondary);">›</span> Visitor Profile</a></li>
                <li><a href="why-visit.html"><span style="color:var(--color-secondary);">›</span> Why Visit</a></li>
                <li><a href="concurrent-exhibitions.html"><span style="color:var(--color-secondary);">›</span> Concurrent Exhibitions</a></li>
                <li><a href="sponsors.html"><span style="color:var(--color-secondary);">›</span> Sponsors &amp; Partners</a></li>
                <li><a href="media.html"><span style="color:var(--color-secondary);">›</span> Media &amp; Updates</a></li>
                <li><a href="contact.html"><span style="color:var(--color-secondary);">›</span> Contact</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Key Technology Sectors</h4>
              <ul class="footer-links">
                <li><a href="exhibit-profile.html#smart-home-automation"><span style="color:var(--color-secondary);">›</span> Smart Home Automation</a></li>
                <li><a href="exhibit-profile.html#building-management-systems"><span style="color:var(--color-secondary);">›</span> Building Management Systems</a></li>
                <li><a href="exhibit-profile.html#intelligent-lighting-technologies"><span style="color:var(--color-secondary);">›</span> Intelligent Lighting</a></li>
                <li><a href="exhibit-profile.html#smart-security-surveillance"><span style="color:var(--color-secondary);">›</span> Security &amp; Access Control</a></li>
                <li><a href="exhibit-profile.html#audio-visual-communication-solutions"><span style="color:var(--color-secondary);">›</span> AV &amp; Communication</a></li>
                <li><a href="exhibit-profile.html#smart-hvac-climate-management"><span style="color:var(--color-secondary);">›</span> Smart HVAC &amp; Climate</a></li>
                <li><a href="exhibit-profile.html" style="color:#93C5FD; font-weight:600;">View All 10 Categories →</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Official Event Details</h4>
              <div class="footer-event-list">
                <div class="footer-event-item">
                  ${ICONS.calendar}
                  <div>
                    <strong style="color:#fff; display:block;">Exhibition Dates</strong>
                    <span>14–16 May 2027</span>
                  </div>
                </div>
                <div class="footer-event-item">
                  ${ICONS.mapPin}
                  <div>
                    <strong style="color:#fff; display:block;">Venue</strong>
                    <span>Chennai Trade Centre, Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
                <div class="footer-event-item">
                  ${ICONS.building}
                  <div>
                    <strong style="color:#fff; display:block; margin-bottom:6px;">Organiser</strong>
                    <img src="assets/images/logos/fairconnects-logo.png" alt="FAIR CONNECTS INDIA LLP" style="height:56px; width:auto; object-fit:contain; display:block;" />
                  </div>
                </div>
              </div>
              <div style="margin-top:22px; display:flex; flex-direction:column; gap:10px;">
                <a href="contact.html?form=exhibitor-enquiry" class="btn btn-primary btn-sm" style="width:100%;">
                  <span>Book a Stall</span>
                  ${ICONS.arrowRight}
                </a>
                <a href="contact.html?form=visitor-registration" class="btn btn-glass btn-sm" style="width:100%;">
                  <span>Register to Visit</span>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div>
              © ${new Date().getFullYear()} <strong>BUILDIQ 2027</strong>. Organised by <strong>FAIR CONNECTS INDIA LLP</strong>. All Rights Reserved.
            </div>
            <div class="footer-legal-links">
              <button type="button" data-legal-modal="privacy">Privacy Policy</button>
              <button type="button" data-legal-modal="terms">Terms &amp; Conditions</button>
              <a href="contact.html">Contact &amp; Venue</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Floating Right Social Media Sidebar (Hidden by Default, Expands on Hover) -->
      <aside class="floating-social-sidebar" aria-label="Official Social Media Channels">
        <div class="floating-social-trigger" title="Hover to view official social channels">
          <svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span>Social</span>
        </div>
        <div class="floating-social-panel">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="floating-social-link" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="floating-social-link" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="floating-social-link" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="floating-social-link" aria-label="X (Twitter)" title="X">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" class="floating-social-link" aria-label="YouTube" title="YouTube">
            <svg viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
          </a>
        </div>
      </aside>

      <!-- Global Dynamic Modal -->
      <div class="modal-backdrop" id="global-modal-backdrop" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 id="global-modal-title" style="font-size:1.25rem;">Details</h3>
            <button type="button" class="mobile-drawer-close" id="global-modal-close" aria-label="Close modal">
              ${ICONS.close}
            </button>
          </div>
          <div class="modal-body" id="global-modal-body"></div>
        </div>
      </div>
    `;

    const modalBackdrop = document.getElementById('global-modal-backdrop');
    const modalClose = document.getElementById('global-modal-close');
    if (modalClose) modalClose.addEventListener('click', closeGlobalModal);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeGlobalModal();
      });
    }

    document.querySelectorAll('[data-legal-modal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-legal-modal');
        if (type === 'privacy') {
          openGlobalModal(
            'Privacy Policy – BUILDIQ 2027',
            `<p style="color:var(--color-muted); margin-bottom:14px;"><strong>BUILDIQ 2027 (International Smart Building &amp; Intelligent Infrastructure Expo)</strong> is organised by <strong>FAIR CONNECTS INDIA LLP</strong>.</p>
             <h4 style="margin:14px 0 6px;">1. Information Collection &amp; Purpose</h4>
             <p style="color:var(--color-muted); font-size:0.92rem;">Information submitted via our Exhibitor Enquiry, Visitor Registration, Sponsorship Enquiry, and Contact forms is collected solely to process your participation, issue visitor/exhibitor credentials, and share official updates regarding BUILDIQ 2027.</p>
             <h4 style="margin:14px 0 6px;">2. Data Protection &amp; Confidentiality</h4>
             <p style="color:var(--color-muted); font-size:0.92rem;">Submitted personal information is stored securely and is never exposed publicly. Access is restricted strictly to authorized personnel of FAIR CONNECTS INDIA LLP.</p>`
          );
        } else {
          openGlobalModal(
            'Terms & Conditions – BUILDIQ 2027',
            `<p style="color:var(--color-muted); margin-bottom:14px;">Welcome to the official website of <strong>BUILDIQ 2027 – International Smart Building &amp; Intelligent Infrastructure Expo</strong>, scheduled for <strong>14–16 May 2027</strong> at <strong>Chennai Trade Centre, Chennai</strong>.</p>
             <h4 style="margin:14px 0 6px;">1. Exhibition Participation &amp; Trade Entry</h4>
             <p style="color:var(--color-muted); font-size:0.92rem;">BUILDIQ 2027 is a professional B2B trade exhibition. Stall allocations, sponsorship deliverables, branding inventory, and visitor badge confirmations are subject to verification and formal approval by FAIR CONNECTS INDIA LLP.</p>
             <h4 style="margin:14px 0 6px;">2. Intellectual Property</h4>
             <p style="color:var(--color-muted); font-size:0.92rem;">The official BuildiQ wordmark, logo, and exhibition materials are the intellectual property of FAIR CONNECTS INDIA LLP and may not be altered or reproduced without prior written permission.</p>`
          );
        }
      });
    });
  }

  function openGlobalModal(title, htmlContent) {
    const backdrop = document.getElementById('global-modal-backdrop');
    const titleEl = document.getElementById('global-modal-title');
    const bodyEl = document.getElementById('global-modal-body');
    if (!backdrop || !titleEl || !bodyEl) return;
    titleEl.textContent = title;
    bodyEl.innerHTML = htmlContent;
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGlobalModal() {
    const backdrop = document.getElementById('global-modal-backdrop');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ========================================================================
     3. REUSABLE CARD & LIST ITEM GENERATORS (For JSON Lists Only)
     ======================================================================== */
  function createExhibitCardHtml(cat, options = { compact: false }) {
    const numLabel = String(cat.displayOrder).padStart(2, '0');
    const displayTitle = options.compact ? cat.shortTitle || cat.title : cat.title;

    if (options.compact) {
      return `
        <article class="exhibit-card exhibit-card-compact" data-category-slug="${cat.slug}" tabindex="0" role="button" aria-label="View details for ${cat.title}">
          <div class="exhibit-card-media">
            <img src="${cat.image}" alt="${cat.title}" loading="lazy" onerror="this.onerror=null;this.src='${cat.fallbackImage || 'assets/images/smart-home-control-panel.png'}';" />
            <span class="exhibit-card-badge">Category ${numLabel}</span>
          </div>
          <div class="exhibit-card-bar">
            <div class="exhibit-card-bar-left">
              <div class="exhibit-card-icon">${getIcon(cat.icon)}</div>
              <h3 class="exhibit-card-title">${displayTitle}</h3>
            </div>
            <span class="exhibit-card-arrow">${ICONS.arrowRight}</span>
          </div>
        </article>
      `;
    }

    const tagsHtml = (cat.solutions || [])
      .slice(0, 4)
      .map((s) => `<span class="exhibit-tag">${s}</span>`)
      .join('');

    return `
      <article class="exhibit-card" id="${cat.slug}" data-category-slug="${cat.slug}">
        <div class="exhibit-card-media">
          <img src="${cat.image}" alt="${cat.title}" loading="lazy" onerror="this.onerror=null;this.src='${cat.fallbackImage || 'assets/images/smart-home-control-panel.png'}';" />
          <span class="exhibit-card-badge">Category ${numLabel}</span>
        </div>
        <div class="exhibit-card-bar">
          <div class="exhibit-card-bar-left">
            <div class="exhibit-card-icon">${getIcon(cat.icon)}</div>
            <h3 class="exhibit-card-title">${cat.title}</h3>
          </div>
          <span class="exhibit-card-arrow">${ICONS.arrowRight}</span>
        </div>
        <div class="exhibit-card-body">
          <div>
            <p class="exhibit-card-desc">${cat.fullDescription}</p>
            <div class="exhibit-card-tags">${tagsHtml}</div>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between; padding-top:12px; border-top:1px solid var(--color-border);">
            <span class="exhibit-card-link">View Category Scope ${ICONS.arrowRight}</span>
          </div>
        </div>
      </article>
    `;
  }

  function bindCategoryCardModals(rootEl = document) {
    if (!window.BUILDIQ_DATA || !window.BUILDIQ_DATA.exhibitCategories) return;
    const { exhibitCategories } = window.BUILDIQ_DATA;

    rootEl.querySelectorAll('[data-category-slug]').forEach((card) => {
      const triggerModal = () => {
        const slug = card.getAttribute('data-category-slug');
        const cat = exhibitCategories.find((c) => c.slug === slug);
        if (!cat) return;

        const solutionsList = (cat.solutions || [])
          .map(
            (item) =>
              `<li style="display:flex; align-items:center; gap:8px; padding:8px 12px; background:var(--color-light); border-radius:6px; border:1px solid var(--color-border); font-size:0.88rem; font-weight:600;">
                <span style="color:var(--color-secondary); display:flex;">${ICONS.check}</span>
                <span>${item}</span>
              </li>`
          )
          .join('');

        openGlobalModal(
          `${cat.displayOrder}. ${cat.title}`,
          `<div>
            <div style="border-radius:12px; overflow:hidden; height:210px; margin-bottom:20px; border:1px solid var(--color-border);">
              <img src="${cat.image}" alt="${cat.title}" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null;this.src='${cat.fallbackImage || 'assets/images/smart-home-control-panel.png'}';" />
            </div>
            <div class="eyebrow" style="margin-bottom:6px;"><span class="slash">/</span><span>OFFICIAL EXHIBIT CATEGORY ${String(cat.displayOrder).padStart(2, '0')}</span></div>
            <p style="font-size:1rem; color:var(--color-text); line-height:1.7; margin-bottom:20px;">${cat.fullDescription}</p>
            <h4 style="font-size:0.95rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--color-primary); margin-bottom:12px;">Key Solutions &amp; Technologies Covered</h4>
            <ul style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:24px;">
              ${solutionsList}
            </ul>
            <div style="display:flex; flex-wrap:wrap; gap:12px; padding-top:16px; border-top:1px solid var(--color-border);">
              <a href="contact.html?form=exhibitor-enquiry&category=${encodeURIComponent(cat.title)}" class="btn btn-primary">
                <span>Book a Stall in This Category</span>
                ${ICONS.arrowRight}
              </a>
              <a href="contact.html?form=visitor-registration" class="btn btn-secondary">
                <span>Register to Visit</span>
              </a>
            </div>
          </div>`
        );
      };

      card.addEventListener('click', triggerModal);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerModal();
        }
      });
    });
  }

  function createBenefitCardHtml(item, idx) {
    const num = item.number || String(idx + 1).padStart(2, '0');
    return `
      <article class="benefit-card">
        <div class="benefit-card-top">
          <div class="benefit-icon-box">${getIcon(item.icon)}</div>
          <span class="benefit-num">${item.tag || item.highlight || num}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `;
  }

  function createConcurrentCardHtml(expo) {
    return `
      <article class="concurrent-card">
        <div class="concurrent-logo-box">
          <img src="${expo.logo}" alt="${expo.code} - ${expo.fullName} Official Logo" loading="lazy" />
        </div>
        <div class="concurrent-card-body">
          <span class="concurrent-code">${expo.code}</span>
          <h3>${expo.fullName}</h3>
          <p>${expo.focus}</p>
          ${expo.synergy ? `<div class="concurrent-synergy"><strong>Ecosystem Synergy:</strong> ${expo.synergy}</div>` : ''}
        </div>
      </article>
    `;
  }

  function createSponsorTierCardHtml(tier) {
    const highlights = (tier.highlights || [])
      .map((h) => `<li>${ICONS.check}<span>${h}</span></li>`)
      .join('');
    return `
      <article class="sponsor-tier-card">
        <span class="sponsor-tier-badge">${tier.badge}</span>
        <h3>${tier.name}</h3>
        <p>${tier.description}</p>
        <ul class="sponsor-highlights">${highlights}</ul>
      </article>
    `;
  }

  function openCategoryModal(idOrSlug) {
    if (!window.BUILDIQ_DATA || !window.BUILDIQ_DATA.exhibitCategories) return;
    const cat = window.BUILDIQ_DATA.exhibitCategories.find(
      (c) => c.id === idOrSlug || c.slug === idOrSlug
    );
    if (!cat) return;
    const card = document.querySelector(`[data-category-slug="${cat.slug}"]`);
    if (card) card.click();
  }

  window.BUILDIQ_COMPONENTS = window.BUILDIQ_UI = {
    ICONS,
    getIcon,
    renderHeader,
    renderFooter,
    createExhibitCardHtml,
    bindCategoryCardModals,
    openCategoryModal,
    createBenefitCardHtml,
    createConcurrentCardHtml,
    createSponsorTierCardHtml,
    openGlobalModal,
    closeGlobalModal
  };
})();
