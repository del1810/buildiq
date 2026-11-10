/**
 * BUILDIQ 2027 - Main Application Controller
 * Renders the shared Header & Footer and populates repeating card/list containers from BUILDIQ_DATA.
 */

(function () {
  function initApp() {
    const data = window.BUILDIQ_DATA;
    const ui = window.BUILDIQ_COMPONENTS || window.BUILDIQ_UI;
    if (!data || !ui) return;

    // 1. Render shared Header & Footer across all pages
    ui.renderHeader();
    ui.renderFooter();

    // 2. Populate repeating card & list containers if present on the current page
    renderTechStrip(data, ui);
    renderWelcomeHighlights(data, ui);
    renderExhibitGrids(data, ui);
    renderWhyBuildiqGrid(data, ui);
    renderWhyExhibitPillarsGrid(data, ui);
    renderWhoShouldExhibitGrid(data, ui);
    renderVisitorGroupsGrid(data, ui);
    renderVisitorDirectoryGrid(data, ui);
    renderWhyVisitGrid(data, ui);
    renderVisitorChecklist(data, ui);
    renderMarketDriversGrid(data, ui);
    renderConcurrentGrid(data, ui);
    renderSponsorTiersGrid(data, ui);
    renderSponsorChecklist(data, ui);
    renderNewsArticlesList(data, ui);
    renderMediaGalleryGrid(data);
    renderFaqAccordionList(data, ui);
  }

  // 1. Technology Ecosystem Strip (#tech-strip-list)
  function renderTechStrip(data, ui) {
    const el = document.getElementById("tech-strip-list");
    if (!el || !data.technologyStrip) return;
    el.innerHTML = data.technologyStrip
      .map(
        (item) => `
      <a href="exhibit-profile.html?category=${item.slug}" class="tech-strip-item">
        <div class="tech-strip-icon">${ui.getIcon(item.icon)}</div>
        <span class="tech-strip-label">${item.title}</span>
      </a>`
      )
      .join("");
  }

  // 2. Welcome Highlight Stat Cards (#welcome-highlights-list)
  function renderWelcomeHighlights(data, ui) {
    const el = document.getElementById("welcome-highlights-list");
    if (!el || !data.welcomeHighlights) return;
    el.innerHTML = data.welcomeHighlights
      .map(
        (h) => `
      <div class="welcome-stat-item">
        <div class="welcome-stat-icon">${ui.getIcon(h.icon)}</div>
        <div class="welcome-stat-value">${h.value}</div>
        <div class="welcome-stat-label">${h.label}</div>
      </div>`
      )
      .join("");
  }

  // 3. Exhibit Category Grids (#home-exhibit-grid & #exhibit-profile-grid)
  function renderExhibitGrids(data, ui) {
    const categories = (data.exhibitCategories || [])
      .filter((c) => c.active !== false)
      .sort((a, b) => a.displayOrder - b.displayOrder);

    const homeGrid = document.getElementById("home-exhibit-grid");
    if (homeGrid) {
      homeGrid.innerHTML = categories
        .map((cat) => ui.createExhibitCardHtml(cat, { compact: true }))
        .join("");
      ui.bindCategoryCardModals(homeGrid);
    }

    const profileGrid = document.getElementById("exhibit-profile-grid");
    if (profileGrid) {
      profileGrid.innerHTML = categories
        .map((cat) => ui.createExhibitCardHtml(cat, { compact: false }))
        .join("");
      ui.bindCategoryCardModals(profileGrid);

      // Deep-link support: ?category=slug
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("category");
      if (slug) {
        const match = categories.find((c) => c.slug === slug);
        if (match && ui.openCategoryModal) {
          setTimeout(() => ui.openCategoryModal(match.slug), 250);
        }
      }
    }
  }

  // 4. Why BUILDIQ Benefit Cards (#why-buildiq-grid)
  function renderWhyBuildiqGrid(data, ui) {
    const el = document.getElementById("why-buildiq-grid");
    if (!el || !data.whyBuildiqBenefits) return;
    el.innerHTML = data.whyBuildiqBenefits
      .map((item, idx) => ui.createBenefitCardHtml(item, idx))
      .join("");
  }

  // 5. Why Exhibit 6 Strategic Pillars (#why-exhibit-pillars-grid)
  function renderWhyExhibitPillarsGrid(data, ui) {
    const el = document.getElementById("why-exhibit-pillars-grid");
    if (!el || !data.whyExhibitPillars) return;
    el.innerHTML = data.whyExhibitPillars
      .map((item, idx) => ui.createBenefitCardHtml(item, idx))
      .join("");
  }

  // 6. Who Should Exhibit Chips (#who-exhibit-grid)
  function renderWhoShouldExhibitGrid(data, ui) {
    const el = document.getElementById("who-exhibit-grid");
    if (!el || !data.whoShouldExhibit) return;
    el.innerHTML = data.whoShouldExhibit
      .map(
        (cat) => `
      <div class="who-exhibit-chip">
        <div class="who-exhibit-chip-icon">${ui.getIcon(cat.icon)}</div>
        <span>${cat.title}</span>
      </div>`
      )
      .join("");
  }

  // 7. Visitor Profile Sector Groups (#visitor-groups-grid)
  function renderVisitorGroupsGrid(data, ui) {
    const el = document.getElementById("visitor-groups-grid");
    if (!el || !data.visitorGroups) return;
    el.innerHTML = data.visitorGroups
      .map(
        (grp) => `
      <div class="visitor-group-card">
        <div class="visitor-group-header">
          <div class="visitor-group-icon">${ui.getIcon(grp.icon)}</div>
          <div>
            <h3>${grp.groupTitle}</h3>
          </div>
        </div>
        <p style="font-size:0.9rem; color:var(--color-muted);">${grp.description}</p>
        <div class="visitor-group-list">
          ${grp.audiences
            .map(
              (aud) => `
            <div class="visitor-group-item">
              ${ui.getIcon("check")}
              <span>${aud.title}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`
      )
      .join("");
  }

  // 8. Complete 18 Visitor Profile Directory (#visitor-directory-grid)
  function renderVisitorDirectoryGrid(data, ui) {
    const el = document.getElementById("visitor-directory-grid");
    if (!el || !data.visitorDirectory) return;
    el.innerHTML = data.visitorDirectory
      .map(
        (cat) => `
      <div class="visitor-badge-card">
        ${ui.getIcon(cat.icon)}
        <span>${cat.title}</span>
      </div>`
      )
      .join("");
  }

  // 9. Why Visit Core Benefit Cards (#why-visit-grid)
  function renderWhyVisitGrid(data, ui) {
    const el = document.getElementById("why-visit-grid");
    if (!el || !data.whyVisitBenefits) return;
    el.innerHTML = data.whyVisitBenefits
      .map((item, idx) => ui.createBenefitCardHtml(item, idx))
      .join("");
  }

  // 10. Official Visitor Takeaway Checklist (#visitor-checklist-items)
  function renderVisitorChecklist(data, ui) {
    const el = document.getElementById("visitor-checklist-items");
    if (!el || !data.visitorChecklist) return;
    el.innerHTML = data.visitorChecklist
      .map(
        (point) => `
      <div class="checklist-item">
        ${ui.getIcon("check")}
        <span>${point}</span>
      </div>`
      )
      .join("");
  }

  // 11. Market Opportunity Drivers (#market-drivers-grid)
  function renderMarketDriversGrid(data, ui) {
    const el = document.getElementById("market-drivers-grid");
    if (!el || !data.marketDrivers) return;
    el.innerHTML = data.marketDrivers
      .map(
        (d) => `
      <div class="driver-card">
        <div class="driver-icon">${ui.getIcon(d.icon)}</div>
        <p>${d.text}</p>
      </div>`
      )
      .join("");
  }

  // 12. Concurrent Exhibitions Cards (#concurrent-grid)
  function renderConcurrentGrid(data, ui) {
    const el = document.getElementById("concurrent-grid");
    if (!el || !data.concurrentExhibitions) return;
    el.innerHTML = data.concurrentExhibitions
      .map((expo) => ui.createConcurrentCardHtml(expo))
      .join("");
  }

  // 13. Sponsorship Tier Cards (#sponsor-tiers-grid)
  function renderSponsorTiersGrid(data, ui) {
    const el = document.getElementById("sponsor-tiers-grid");
    if (!el || !data.sponsorshipTiers) return;
    const isHome =
      (window.location.pathname.split("/").pop() || "index.html") === "index.html";
    const tiers = isHome
      ? data.sponsorshipTiers.slice(0, 6)
      : data.sponsorshipTiers;
    el.innerHTML = tiers
      .map((tier) => ui.createSponsorTierCardHtml(tier))
      .join("");
  }

  // 14. Official Sponsorship Checklist (#sponsor-official-list)
  function renderSponsorChecklist(data, ui) {
    const el = document.getElementById("sponsor-official-list");
    if (!el || !data.sponsorshipChecklist) return;
    el.innerHTML = data.sponsorshipChecklist
      .map(
        (item) => `
      <div class="checklist-item">
        ${ui.getIcon("check")}
        <span>${item}</span>
      </div>`
      )
      .join("");
  }

  // 15. News Articles List (#news-articles-list)
  function renderNewsArticlesList(data, ui) {
    const el = document.getElementById("news-articles-list");
    if (!el) return;
    const articles = data.newsArticles || [];
    if (articles.length > 0) {
      el.innerHTML = `<div class="news-grid">
        ${articles
          .map(
            (art) => `
          <article class="gallery-card">
            <div class="gallery-card-img">
              <img src="${art.image}" alt="${art.title}" loading="lazy" />
            </div>
            <div class="gallery-card-body">
              <span>${art.category || "Press Release"}</span>
              <h3>${art.title}</h3>
              <p>${art.summary}</p>
            </div>
          </article>`
          )
          .join("")}
      </div>`;
    } else {
      el.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon">${ui.getIcon("newspaper")}</div>
          <h3>Official Press Releases & Announcements Coming Soon</h3>
          <p>Official exhibition announcements, keynote schedules, and media releases for BUILDIQ 2027 (14–16 May 2027 at Chennai Trade Centre) will be published here as confirmed by FAIR CONNECTS INDIA LLP.</p>
          <a href="contact.html" class="btn btn-outline-blue">
            <span>Media & Association Enquiry</span>
            ${ui.getIcon("arrowRight")}
          </a>
        </div>`;
    }
  }

  // 16. Media Showcase Gallery (#media-gallery-grid)
  function renderMediaGalleryGrid(data) {
    const el = document.getElementById("media-gallery-grid");
    if (!el || !data.mediaGallery) return;
    el.innerHTML = data.mediaGallery
      .map(
        (item) => `
      <article class="gallery-card">
        <div class="gallery-card-img">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="gallery-card-body">
          <span>${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.caption}</p>
        </div>
      </article>`
      )
      .join("");
  }

  // 17. FAQ Accordion (#faq-accordion-list)
  function renderFaqAccordionList(data, ui) {
    const el = document.getElementById("faq-accordion-list");
    if (!el || !data.faqs) return;
    el.innerHTML = data.faqs
      .map(
        (faq, idx) => `
      <div class="faq-item ${idx === 0 ? "open" : ""}">
        <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? "true" : "false"}">
          <span>${faq.question}</span>
          ${ui.getIcon("chevronDown")}
        </button>
        <div class="faq-content">${faq.answer}</div>
      </div>`
      )
      .join("");

    el.querySelectorAll(".faq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".faq-item");
        const isOpen = item.classList.contains("open");
        el.querySelectorAll(".faq-item").forEach((other) => {
          other.classList.remove("open");
          const btn = other.querySelector(".faq-trigger");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
