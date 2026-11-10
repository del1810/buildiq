/**
 * BUILDIQ 2027 – Form Dropdown Populator & Submission Handler
 * Populates <select data-dropdown="..."> options from BUILDIQ_DATA.formDropdowns
 * (Currently forms are commented out in HTML; uncommenting them automatically enables dropdowns & validation)
 */

(function () {
  const ENTITY_PREFIX = "buildiq_entity_";

  function populateFormDropdowns() {
    const dropdownData = window.BUILDIQ_DATA && window.BUILDIQ_DATA.formDropdowns;
    if (!dropdownData) return;

    document.querySelectorAll("select[data-dropdown]").forEach((selectEl) => {
      const key = selectEl.getAttribute("data-dropdown");
      const options = dropdownData[key];
      if (!Array.isArray(options)) return;

      const placeholder = selectEl.getAttribute("data-placeholder") || "Select an option...";
      selectEl.innerHTML =
        `<option value="">${placeholder}</option>` +
        options.map((opt) => `<option value="${opt}">${opt}</option>`).join("");
    });
  }

  function getEntityRecords(entityName) {
    try {
      const raw = localStorage.getItem(ENTITY_PREFIX + entityName);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveEntityRecord(entityName, record) {
    const existing = getEntityRecords(entityName);
    const now = Date.now();
    const refId = "BIQ27-" + Math.random().toString(36).substring(2, 7).toUpperCase();
    const fullRecord = {
      id: refId,
      ...record,
      timestamp: now,
      submittedAt: new Date(now).toISOString(),
      status: "Received"
    };
    existing.unshift(fullRecord);
    localStorage.setItem(ENTITY_PREFIX + entityName, JSON.stringify(existing));
    return fullRecord;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", populateFormDropdowns);
  } else {
    populateFormDropdowns();
  }

  window.BUILDIQ_FORMS = {
    populateFormDropdowns,
    getEntityRecords,
    saveEntityRecord
  };
})();
