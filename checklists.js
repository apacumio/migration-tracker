// ─────────────────────────────────────────────────────────────────────────────
// checklists.js — Per-platform checklist definitions
//
// HOW TO UPDATE:
//   1. Find the platform you want to update (ngpi, bpa, wmap, numap)
//   2. Replace the step strings with your real step names
//   3. Save the file and commit to GitHub — the site redeploys in ~60 seconds
//
// Each platform has 5 tasks: Discovery, Crawl append, Matching,
// Data quality, Monitoring. Each task has its own list of steps.
// ─────────────────────────────────────────────────────────────────────────────

const PLATFORM_STEPS = {

  // ── NGPI ─────────────────────────────────────────────────────────────────
  ngpi: {
    'Discovery': [
      'Schedule discovery job',
      'Configure job settings',
      'Set crawl frequency',
      'Verify job link is active',
      'Monitor first run output',
      'Stakeholder sign-off'
    ],
    'Crawl append': [
      'Define crawl domains',
      'Whitelist approved domains',
      'Run crawl append job',
      'Review append results',
      'Resolve BOT issues if any',
      'Sign off'
    ],
    'Matching': [
      'Whitelist matching domains',
      'Start hybrid matching run',
      'Review match rates',
      'Handle edge cases',
      'Validate final results',
      'Sign off'
    ],
    'Data quality': [
      'Define DQ rules',
      'Run completeness check',
      'Review accuracy %',
      'Generate exception report',
      'Build remediation plan',
      'Final sign off'
    ],
    'Monitoring': [
      'Schedule monitoring job',
      'Configure alert thresholds',
      'Capture baseline metrics',
      'Verify monitoring is active',
      'Review first report',
      'Sign off'
    ]
  },

  // ── BPA ──────────────────────────────────────────────────────────────────
  // Replace the TBD steps below when the BPA checklist is finalized
  bpa: {
    'Discovery':    ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Step 4 — TBD', 'Sign off'],
    'Crawl append': ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Matching':     ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Data quality': ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Monitoring':   ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off']
  },

  // ── WISER MAP ─────────────────────────────────────────────────────────────
  // Replace the TBD steps below when the Wiser MAP checklist is finalized
  wmap: {
    'Discovery':    ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Step 4 — TBD', 'Sign off'],
    'Crawl append': ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Matching':     ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Data quality': ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Monitoring':   ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off']
  },

  // ── NUMAP (CyberAnalyst) ──────────────────────────────────────────────────
  // Replace the TBD steps below when the NuMap checklist is finalized
  numap: {
    'Discovery':    ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Step 4 — TBD', 'Sign off'],
    'Crawl append': ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Matching':     ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Data quality': ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off'],
    'Monitoring':   ['Step 1 — TBD', 'Step 2 — TBD', 'Step 3 — TBD', 'Sign off']
  }

};

// Helper used by the app — do not edit
function getStepDefs(platform, taskName) {
  return (PLATFORM_STEPS[platform] || PLATFORM_STEPS.ngpi)[taskName] || [];
}
