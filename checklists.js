// ─────────────────────────────────────────────────────────────────────────────
// checklists.js — Checklist step definitions
//
// All platforms share the same checklist steps.
// To update steps: edit the strings below and commit to GitHub (~60s redeploy).
//
// STRUCTURE:
//   Phase 1 : Discovery · Legacy migration · Monitoring P1
//   Phase 2 : Matching (iterative) · Data quality (iterative) ·
//             Re-discovery (retry) · Monitoring P2
//   Sign-off: Migration sign-off
// ─────────────────────────────────────────────────────────────────────────────

const CHECKLIST_STEPS = {
  'Discovery':          ['Crawl finished', 'Schema validation errors resolved'],
  'Legacy migration':   ['OPS — UAT', 'OPS — Issues resolved', 'GTM — UAT', 'GTM — Issues resolved'],
  'Monitoring P1':      ['Crawl started', 'Crawl finished'],
  'Matching':           ['Match complete'],
  'Data quality':       ['Match complete', 'Completeness benchmark met', 'Accuracy benchmark met'],
  'Re-discovery':       ['Re-discovery crawl finished', 'Schema validation errors resolved'],
  'Monitoring P2':      ['Crawl started', 'Crawl finished'],
  'Migration sign-off': ['OPS hand-off', 'GTM hand-off', 'Customer onboarded to Polaris']
};

// Phase structure
var PHASE1_TASKS   = ['Discovery', 'Legacy migration', 'Monitoring P1'];
var PHASE2_TASKS   = ['Matching', 'Data quality', 'Monitoring P2'];
var SIGNOFF_TASK   = 'Migration sign-off';
var REDISCOVERY    = 'Re-discovery';
var ALL_TASKS      = PHASE1_TASKS.concat(PHASE2_TASKS).concat([SIGNOFF_TASK]);

// GTM-specific steps (show CSM field)
var GTM_STEPS = ['GTM — UAT', 'GTM — Issues resolved', 'GTM hand-off'];

function getStepDefs(taskName) {
  return CHECKLIST_STEPS[taskName] || [];
}
