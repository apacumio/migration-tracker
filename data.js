// ─────────────────────────────────────────────────────────────────────────────
// data.js — Tranches and customers for all four platforms
//
// HOW TO ADD A CUSTOMER:
//   1. Find the right platform section below (NGPI, BPA, WISER MAP, NUMAP)
//   2. Copy an existing customer entry and paste it at the end of that section
//   3. Update: _id (must be unique), t (tranche id), name, cid, freq, hd, csm,
//      notes, job, lnk
//   4. Save and commit to GitHub
//
// HOW TO ADD A TRANCHE:
//   1. Add a new entry to the TRANCHES array for the right platform
//   2. Use a new unique _id (e.g. 't14' for NGPI, 'bpa-t3' for BPA, etc.)
//   3. Add customers referencing that tranche id in their `t` field
//
// HOW TO UPDATE A CSM OR DATE:
//   Just find the customer by name and update the `csm` or `hd` field.
//   Dates use the add() helper — add(45) means 45 days from Apr 2, 2026.
//   To use an absolute date instead: replace add(45) with '2026-06-15'
// ─────────────────────────────────────────────────────────────────────────────

// Date helper — days from base date
const BASE_DATE = new Date('2026-04-02');
function add(days) {
  const d = new Date(BASE_DATE);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// ─────────────────────────────────────────────────────────────────────────────
// TRANCHES
// Fields: _id, Title, Platform, Phase, Customers (count), CSM, GoLive, Notes
// ─────────────────────────────────────────────────────────────────────────────
const TRANCHES = [

  // ── NGPI ──
  { _id:'t0',  Title:'Tranche 0',  Platform:'ngpi', Phase:'Matching',  Customers:5, CSM:'Sarah K.',  GoLive:add(45),  Notes:null },
  { _id:'t1',  Title:'Tranche 1',  Platform:'ngpi', Phase:'Matching',  Customers:4,  CSM:'James T.',  GoLive:add(50),  Notes:null },
  { _id:'t2',  Title:'Tranche 2',  Platform:'ngpi', Phase:'Matching',  Customers:3, CSM:'Maria L.',  GoLive:add(60),  Notes:null },
  { _id:'t3',  Title:'Tranche 3',  Platform:'ngpi', Phase:'Matching',  Customers:2,  CSM:'David R.',  GoLive:add(65),  Notes:null },
  { _id:'t4',  Title:'Tranche 4',  Platform:'ngpi', Phase:'Matching',  Customers:1,  CSM:'Priya N.',  GoLive:add(70),  Notes:null },
  { _id:'t5',  Title:'Tranche 5',  Platform:'ngpi', Phase:'Discovery', Customers:3,  CSM:'Tom W.',    GoLive:add(90),  Notes:null },
  { _id:'t6',  Title:'Tranche 6',  Platform:'ngpi', Phase:'Matching',  Customers:1,  CSM:'Sarah K.',  GoLive:add(55),  Notes:null },
  { _id:'t7',  Title:'Tranche 7',  Platform:'ngpi', Phase:'Matching',  Customers:1,  CSM:'James T.',  GoLive:add(60),  Notes:null },
  { _id:'t8',  Title:'Tranche 8',  Platform:'ngpi', Phase:'Discovery', Customers:1,  CSM:'Maria L.',  GoLive:add(100), Notes:null },
  { _id:'t9',  Title:'Tranche 9',  Platform:'ngpi', Phase:'Discovery', Customers:1,  CSM:'David R.',  GoLive:add(105), Notes:null },
  { _id:'t10', Title:'Tranche 10', Platform:'ngpi', Phase:'Discovery', Customers:2,  CSM:'Priya N.',  GoLive:add(115), Notes:null },
  { _id:'t11', Title:'Tranche 11', Platform:'ngpi', Phase:'Discovery', Customers:1,  CSM:'Tom W.',    GoLive:add(120), Notes:null },
  { _id:'t12', Title:'Tranche 12', Platform:'ngpi', Phase:'Discovery', Customers:2,  CSM:'Sarah K.',  GoLive:add(150), Notes:'Largest: Radwell and Zoro' },
  { _id:'t13', Title:'Tranche 13', Platform:'ngpi', Phase:'Discovery', Customers:0,  CSM:'James T.',  GoLive:add(160), Notes:'Incoming — not started' },

  // ── BPA ──
  { _id:'bpa-t1', Title:'BPA Active',          Platform:'bpa', Phase:'Discovery', Customers:78, CSM:'Maria L.', GoLive:add(120), Notes:'Tranche assignments TBD' },
  { _id:'bpa-t2', Title:'BPA Churned / Ignored',Platform:'bpa', Phase:'Discovery', Customers:4,  CSM:'Maria L.', GoLive:null,     Notes:'4 customers ignored or churned' },

  // ── WISER MAP ──
  { _id:'wmap-t1', Title:'Wiser MAP', Platform:'wmap', Phase:'Discovery', Customers:14, CSM:'David R.', GoLive:add(110), Notes:null },

  // ── NUMAP (CyberAnalyst) ──
  { _id:'nm-t1', Title:'NuMap Tranche 1', Platform:'numap', Phase:'Discovery', Customers:20, CSM:'Priya N.', GoLive:add(90),  Notes:'20 customers' },
  { _id:'nm-t2', Title:'NuMap Tranche 2', Platform:'numap', Phase:'Discovery', Customers:7,  CSM:'Priya N.', GoLive:add(110), Notes:'7 customers' },
  { _id:'nm-t3', Title:'NuMap Tranche 3', Platform:'numap', Phase:'Discovery', Customers:9,  CSM:'Tom W.',   GoLive:add(130), Notes:'9 customers' },
];

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOMERS
// Fields: _id, t (tranche id), p (platform), name, cid (customer id),
//         freq (crawl frequency), st (status), hd (handoff date),
//         csm, notes, job (discovery job name), lnk (job link)
// ─────────────────────────────────────────────────────────────────────────────
const CUSTOMERS_RAW = [

  // ── NGPI — Tranche 0 ─────────────────────────────────────────────────────
  { _id:'n0', t:'t0', p:'ngpi', name:'Toshiba',          cid:'555158', freq:'Daily',     st:'production', hd:add(40), csm:'Sarah K.', notes:null,                                    job:'customertoshiba (555158)',        lnk:'https://orchestration.wiser.com/jobs/68f7b0f861fc5928bf0b8175' },
  { _id:'n1', t:'t0', p:'ngpi', name:'Home Hardware LBM', cid:'555028', freq:'Weekly',    st:'production', hd:add(42), csm:'Sarah K.', notes:null,                                    job:'Home Hardware LBM (555028)',      lnk:'https://orchestration.wiser.com/jobs/68a35f321e91164be7d184b8' },
  { _id:'n2', t:'t0', p:'ngpi', name:'PC Connection',     cid:'555063', freq:'Daily',     st:'production', hd:add(44), csm:'Sarah K.', notes:null,                                    job:'PC Connection (555063)',          lnk:'https://orchestration.wiser.com/jobs/68a7808524d57a833a4735f3' },
  { _id:'n3', t:'t0', p:'ngpi', name:'Costco Canada',     cid:'555385', freq:'Biweekly',  st:'production', hd:add(50), csm:'Sarah K.', notes:null,                                    job:'CostcoCA (555385)',               lnk:'https://orchestration.wiser.com/jobs/698019636dfce9e1f8c0ff96' },
  { _id:'n4', t:'t0', p:'ngpi', name:'Best Buy',           cid:'555070', freq:'Daily',     st:'production', hd:add(55), csm:'Sarah K.', notes:'Blocked domains: homedepot, lowes, walmart', job:null, lnk:null },

  // ── NGPI — Tranche 1 ─────────────────────────────────────────────────────
  { _id:'n5', t:'t1', p:'ngpi', name:'Petwise',      cid:'555755', freq:null, st:'production', hd:add(48), csm:'James T.', notes:'25% renewal risk',        job:'Petwise (555755)',        lnk:'https://orchestration.wiser.com/jobs/68e010b42449d6a4bfea0fa8' },
  { _id:'n6', t:'t1', p:'ngpi', name:'Rrigoods',     cid:'555754', freq:null, st:'production', hd:add(50), csm:'James T.', notes:'90% – expires 3/7/27',    job:'Rrigoods700 (555754)',    lnk:'https://orchestration.wiser.com/jobs/697c6c96c515e84a0d112ea6' },
  { _id:'n7', t:'t1', p:'ngpi', name:'The Brick',    cid:'555328', freq:null, st:'production', hd:add(52), csm:'James T.', notes:'90% – expires 12/31/26',  job:'TheBrick (555328)',       lnk:'https://orchestration.wiser.com/jobs/696da02b3384b43abc98ae21' },
  { _id:'n8', t:'t1', p:'ngpi', name:'RepairClinic', cid:'555439', freq:null, st:'production', hd:add(50), csm:'James T.', notes:'100% – auto renewed',     job:'RepairClinic (555439)',   lnk:'https://orchestration.wiser.com/jobs/696e6c2cd1d011cb20237a0f' },

  // ── NGPI — Tranche 2 ─────────────────────────────────────────────────────
  { _id:'n9',  t:'t2', p:'ngpi', name:'Electrolux', cid:'555834', freq:null, st:'production', hd:add(58), csm:'Maria L.', notes:null,                      job:'Electrolux780 (555834)', lnk:'https://orchestration.wiser.com/jobs/697c6e73ac0d44c1b0ad6229' },
  { _id:'n10', t:'t2', p:'ngpi', name:'Rockler',    cid:'555747', freq:null, st:'production', hd:add(60), csm:'Maria L.', notes:'90% – expires 1/7/27',    job:'Rockler693 (555747)',    lnk:'https://orchestration.wiser.com/jobs/697c724ac515e84a0d11327e' },
  { _id:'n11', t:'t2', p:'ngpi', name:'84 Lumber',  cid:'555154', freq:null, st:'production', hd:add(28), csm:'Maria L.', notes:'Expires 4/30/26 – at risk',job:'84lumber (555154)',      lnk:'https://orchestration.wiser.com/jobs/697d05ff15da8e8c50bc887b' },

  // ── NGPI — Tranche 3 ─────────────────────────────────────────────────────
  { _id:'n12', t:'t3', p:'ngpi', name:'Oscar de France', cid:'555735', freq:null, st:'churned',    hd:null,     csm:'David R.', notes:'Customer churned',    job:'Disabled', lnk:null },
  { _id:'n13', t:'t3', p:'ngpi', name:'Purina Canada',   cid:'555641', freq:null, st:'production', hd:add(63), csm:'David R.', notes:'BOT issues found',    job:'purinacanada (555641)',  lnk:'https://orchestration.wiser.com/jobs/6983bb0bd7806b82a6ebbbf3' },

  // ── NGPI — Tranche 4 ─────────────────────────────────────────────────────
  { _id:'n14', t:'t4', p:'ngpi', name:'Lifetime', cid:'555099', freq:'Daily', st:'production', hd:add(68), csm:'Priya N.', notes:null, job:'lifetime (555099)', lnk:'https://orchestration.wiser.com/jobs/698a25c5e848ba27197d8fc8' },

  // ── NGPI — Tranche 5 ─────────────────────────────────────────────────────
  { _id:'n15', t:'t5', p:'ngpi', name:'CPO2',      cid:'36074',  freq:'Weekly', st:'production', hd:add(88), csm:'Tom W.', notes:'Discovery complete',             job:'cpo2 (36074)',      lnk:'https://orchestration.wiser.com/jobs/698a2b598f3940f5c55cd934' },
  { _id:'n16', t:'t5', p:'ngpi', name:'Rustoleum', cid:'555798', freq:'Weekly', st:'production', hd:add(90), csm:'Tom W.', notes:null,                            job:'Rustoleum (555798)',lnk:'https://orchestration.wiser.com/jobs/69bc65e652894de36179721b' },
  { _id:'n17', t:'t5', p:'ngpi', name:'Bass Pro',  cid:'555626', freq:'Weekly', st:'production', hd:add(95), csm:'Tom W.', notes:'2 groups running, 660k catalog', job:null, lnk:null },

  // ── NGPI — Tranche 6 ─────────────────────────────────────────────────────
  { _id:'n18', t:'t6', p:'ngpi', name:'Hisense UK', cid:'555795', freq:null, st:'production', hd:add(53), csm:'Sarah K.', notes:'Discovery complete', job:'hisenseuk (555795)', lnk:'https://orchestration.wiser.com/jobs/698a32378f3940f5c55cdc2b' },

  // ── NGPI — Tranche 7 ─────────────────────────────────────────────────────
  { _id:'n19', t:'t7', p:'ngpi', name:'BSR Stancash', cid:'555791', freq:'Daily', st:'production', hd:add(58), csm:'James T.', notes:'BOT resolved', job:'bsrstancash (555791)', lnk:'https://orchestration.wiser.com/jobs/698a36e6e848ba27197d981c' },

  // ── NGPI — Tranche 8 ─────────────────────────────────────────────────────
  { _id:'n20', t:'t8', p:'ngpi', name:'eStrading Bathrooms', cid:'555827', freq:null, st:'onboarding', hd:add(100), csm:'Maria L.', notes:'BOT resolved', job:'estrading (555827)', lnk:'https://orchestration.wiser.com/jobs/698a3bfe8f3940f5c55ce26b' },

  // ── NGPI — Tranche 9 ─────────────────────────────────────────────────────
  { _id:'n21', t:'t9', p:'ngpi', name:'Vitamin Shoppe', cid:'555815', freq:null, st:'onboarding', hd:add(103), csm:'David R.', notes:'BOT resolved', job:'vitaminshoppe (555815)', lnk:'https://orchestration.wiser.com/jobs/698a3e901f4ec7bc059a15b5' },

  // ── NGPI — Tranche 10 ────────────────────────────────────────────────────
  { _id:'n22', t:'t10', p:'ngpi', name:'RealTruck',    cid:'555825', freq:null, st:'onboarding', hd:add(113), csm:'Priya N.', notes:'BOT issues found',  job:'Realtruck (555825)',     lnk:'https://orchestration.wiser.com/jobs/69727d490e4ffc46b78bf0c2' },
  { _id:'n23', t:'t10', p:'ngpi', name:'Mattress Firm', cid:'555828', freq:null, st:'onboarding', hd:add(115), csm:'Priya N.', notes:'Complete checking', job:'mattressfirm (555828)', lnk:'https://orchestration.wiser.com/jobs/698a3fb21f4ec7bc059a1679' },

  // ── NGPI — Tranche 11 ────────────────────────────────────────────────────
  { _id:'n24', t:'t11', p:'ngpi', name:'Jenson USA 2', cid:'555805', freq:'Daily', st:'onboarding', hd:add(118), csm:'Tom W.', notes:'Discovery complete', job:'jensonusa2 (555805)', lnk:'https://orchestration.wiser.com/jobs/698a4154e848ba27197d9e17' },

  // ── NGPI — Tranche 12 ────────────────────────────────────────────────────
  { _id:'n25', t:'t12', p:'ngpi', name:'Radwell', cid:'555801', freq:null,     st:'production', hd:add(148), csm:'Sarah K.', notes:'Do not run yet', job:null, lnk:null },
  { _id:'n26', t:'t12', p:'ngpi', name:'Zoro',    cid:'555008', freq:'Weekly', st:'production', hd:add(150), csm:'Sarah K.', notes:'Do not run yet', job:null, lnk:null },

  // ── BPA — Active ─────────────────────────────────────────────────────────
  { _id:'ba0',  t:'bpa-t1', p:'bpa', name:'AHF',                       cid:null, freq:null, st:'production', hd:add(100), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba1',  t:'bpa-t1', p:'bpa', name:'Airxcel',                   cid:null, freq:null, st:'production', hd:add(101), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba2',  t:'bpa-t1', p:'bpa', name:'Ansell',                    cid:null, freq:null, st:'production', hd:add(102), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba3',  t:'bpa-t1', p:'bpa', name:'Arnott',                    cid:null, freq:null, st:'production', hd:add(103), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba4',  t:'bpa-t1', p:'bpa', name:'Bauerfeind',                cid:null, freq:null, st:'production', hd:add(104), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba5',  t:'bpa-t1', p:'bpa', name:'Beats by Dre UPP',          cid:null, freq:null, st:'production', hd:add(105), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba6',  t:'bpa-t1', p:'bpa', name:'Beautyrest',                cid:null, freq:null, st:'production', hd:add(106), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba7',  t:'bpa-t1', p:'bpa', name:'Beautyrest Black',          cid:null, freq:null, st:'production', hd:add(107), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba8',  t:'bpa-t1', p:'bpa', name:'Big Bike Parts',            cid:null, freq:null, st:'production', hd:add(108), csm:'Maria L.', notes:null, job:'(BPA) Bike Bike Parts - Full Discovery', lnk:'https://orchestration.wiser.com/jobs/69b8cf1d69e0c6b47f702f5e' },
  { _id:'ba9',  t:'bpa-t1', p:'bpa', name:'Bilstein',                  cid:null, freq:null, st:'production', hd:add(109), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba10', t:'bpa-t1', p:'bpa', name:'BRK',                       cid:null, freq:null, st:'production', hd:add(110), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba11', t:'bpa-t1', p:'bpa', name:'Cal Mil',                   cid:null, freq:null, st:'production', hd:add(111), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba12', t:'bpa-t1', p:'bpa', name:'Cole Haan',                 cid:null, freq:null, st:'production', hd:add(112), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba13', t:'bpa-t1', p:'bpa', name:'DanaCorp',                  cid:null, freq:null, st:'production', hd:add(113), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba14', t:'bpa-t1', p:'bpa', name:'DanaCorp UJoints',          cid:null, freq:null, st:'production', hd:add(114), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba15', t:'bpa-t1', p:'bpa', name:'Dan Post Boots',            cid:null, freq:null, st:'production', hd:add(115), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba16', t:'bpa-t1', p:'bpa', name:'Eaton Electric',            cid:null, freq:null, st:'production', hd:add(116), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba17', t:'bpa-t1', p:'bpa', name:'Eaton Vehicle Group',       cid:null, freq:null, st:'production', hd:add(117), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba18', t:'bpa-t1', p:'bpa', name:'EMC Hospitality',           cid:null, freq:null, st:'production', hd:add(118), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba19', t:'bpa-t1', p:'bpa', name:'Encompass',                 cid:null, freq:null, st:'production', hd:add(119), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba20', t:'bpa-t1', p:'bpa', name:'ENERSYS',                   cid:null, freq:null, st:'production', hd:add(120), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba21', t:'bpa-t1', p:'bpa', name:'English Riding Supply',     cid:null, freq:null, st:'production', hd:add(121), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba22', t:'bpa-t1', p:'bpa', name:'Federal Industries',        cid:null, freq:null, st:'production', hd:add(122), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba23', t:'bpa-t1', p:'bpa', name:'FedPro',                    cid:null, freq:null, st:'production', hd:add(123), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba24', t:'bpa-t1', p:'bpa', name:'Fiskars Gerber Gear',       cid:null, freq:null, st:'production', hd:add(124), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba25', t:'bpa-t1', p:'bpa', name:'Fox Head',                  cid:null, freq:null, st:'production', hd:add(125), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba26', t:'bpa-t1', p:'bpa', name:'General Motors',            cid:null, freq:null, st:'production', hd:add(126), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba27', t:'bpa-t1', p:'bpa', name:'Goodyear',                  cid:null, freq:null, st:'production', hd:add(127), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba28', t:'bpa-t1', p:'bpa', name:'Goodyear ATC',              cid:null, freq:null, st:'production', hd:add(128), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba29', t:'bpa-t1', p:'bpa', name:'Goodyear CA',               cid:null, freq:null, st:'production', hd:add(129), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba30', t:'bpa-t1', p:'bpa', name:'Grundfos',                  cid:null, freq:null, st:'production', hd:add(130), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba31', t:'bpa-t1', p:'bpa', name:'HH Brown',                  cid:null, freq:null, st:'production', hd:add(131), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba32', t:'bpa-t1', p:'bpa', name:"Hill's Pet",                cid:null, freq:null, st:'production', hd:add(132), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba33', t:'bpa-t1', p:'bpa', name:'Hoshino',                   cid:null, freq:null, st:'production', hd:add(133), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba34', t:'bpa-t1', p:'bpa', name:'Hoshizaki UPP',             cid:null, freq:null, st:'production', hd:add(134), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba35', t:'bpa-t1', p:'bpa', name:'Integrated Supply Network', cid:null, freq:null, st:'production', hd:add(135), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba36', t:'bpa-t1', p:'bpa', name:'BPA Internal',              cid:null, freq:null, st:'production', hd:add(136), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba37', t:'bpa-t1', p:'bpa', name:'Jon Renau',                 cid:null, freq:null, st:'production', hd:add(137), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba38', t:'bpa-t1', p:'bpa', name:'Jon Renau AU',              cid:null, freq:null, st:'production', hd:add(138), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba39', t:'bpa-t1', p:'bpa', name:'Justin Boots',              cid:null, freq:null, st:'production', hd:add(139), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba40', t:'bpa-t1', p:'bpa', name:'Lego',                      cid:null, freq:null, st:'production', hd:add(140), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba41', t:'bpa-t1', p:'bpa', name:'Lego RPM',                  cid:null, freq:null, st:'production', hd:add(141), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba42', t:'bpa-t1', p:'bpa', name:'LEM Products',              cid:null, freq:null, st:'production', hd:add(142), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba43', t:'bpa-t1', p:'bpa', name:'Leupold Stevens',           cid:null, freq:null, st:'production', hd:add(143), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba44', t:'bpa-t1', p:'bpa', name:'Lippert Components',        cid:null, freq:null, st:'production', hd:add(144), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba45', t:'bpa-t1', p:'bpa', name:'McLeod Racing',             cid:null, freq:null, st:'production', hd:add(145), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba46', t:'bpa-t1', p:'bpa', name:'McLeod Racing (alt)',       cid:null, freq:null, st:'production', hd:add(146), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba47', t:'bpa-t1', p:'bpa', name:'Mevotech',                  cid:null, freq:null, st:'production', hd:add(147), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba48', t:'bpa-t1', p:'bpa', name:'Mickey Thompson Tires',     cid:null, freq:null, st:'production', hd:add(148), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba49', t:'bpa-t1', p:'bpa', name:'Oculus VR',                 cid:null, freq:null, st:'production', hd:add(149), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba50', t:'bpa-t1', p:'bpa', name:'Painless Performance',      cid:null, freq:null, st:'production', hd:add(150), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba51', t:'bpa-t1', p:'bpa', name:'Pentland',                  cid:null, freq:null, st:'production', hd:add(151), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba52', t:'bpa-t1', p:'bpa', name:'Promaster',                 cid:null, freq:null, st:'production', hd:add(152), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba53', t:'bpa-t1', p:'bpa', name:'Puma',                      cid:null, freq:null, st:'production', hd:add(153), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba54', t:'bpa-t1', p:'bpa', name:'Putco',                     cid:null, freq:null, st:'production', hd:add(154), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba55', t:'bpa-t1', p:'bpa', name:'Raceline Wheels',           cid:null, freq:null, st:'production', hd:add(155), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba56', t:'bpa-t1', p:'bpa', name:'Razor',                     cid:null, freq:null, st:'production', hd:add(156), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba57', t:'bpa-t1', p:'bpa', name:'Regal Rexnord',             cid:null, freq:null, st:'production', hd:add(157), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba58', t:'bpa-t1', p:'bpa', name:'Revelyst',                  cid:null, freq:null, st:'production', hd:add(158), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba59', t:'bpa-t1', p:'bpa', name:'Rigid Industries',          cid:null, freq:null, st:'production', hd:add(159), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba60', t:'bpa-t1', p:'bpa', name:'Samsung Appliances',        cid:null, freq:null, st:'production', hd:add(160), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba61', t:'bpa-t1', p:'bpa', name:'Seirus',                    cid:null, freq:null, st:'production', hd:add(161), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba62', t:'bpa-t1', p:'bpa', name:'Serta',                     cid:null, freq:null, st:'production', hd:add(162), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba63', t:'bpa-t1', p:'bpa', name:'Serta Simmons Bedding',     cid:null, freq:null, st:'production', hd:add(163), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba64', t:'bpa-t1', p:'bpa', name:'SRAM',                      cid:null, freq:null, st:'production', hd:add(164), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba65', t:'bpa-t1', p:'bpa', name:'Standard Motor Products',   cid:null, freq:null, st:'production', hd:add(165), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba66', t:'bpa-t1', p:'bpa', name:'TireCo',                    cid:null, freq:null, st:'production', hd:add(166), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba67', t:'bpa-t1', p:'bpa', name:'TireCo RM',                 cid:null, freq:null, st:'production', hd:add(167), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba68', t:'bpa-t1', p:'bpa', name:'Trane',                     cid:null, freq:null, st:'production', hd:add(168), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba69', t:'bpa-t1', p:'bpa', name:'Traxxas',                   cid:null, freq:null, st:'production', hd:add(169), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba70', t:'bpa-t1', p:'bpa', name:'Ultimate Support',          cid:null, freq:null, st:'production', hd:add(170), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba71', t:'bpa-t1', p:'bpa', name:'Umbra',                     cid:null, freq:null, st:'production', hd:add(171), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba72', t:'bpa-t1', p:'bpa', name:'VF Imagewear US',           cid:null, freq:null, st:'production', hd:add(172), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba73', t:'bpa-t1', p:'bpa', name:'Vision Wheel',              cid:null, freq:null, st:'production', hd:add(173), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba74', t:'bpa-t1', p:'bpa', name:'Wheel Pros',                cid:null, freq:null, st:'production', hd:add(174), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba75', t:'bpa-t1', p:'bpa', name:'WWRD',                      cid:null, freq:null, st:'production', hd:add(175), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba76', t:'bpa-t1', p:'bpa', name:'Yamaha Motor',              cid:null, freq:null, st:'production', hd:add(176), csm:'Maria L.', notes:null, job:null, lnk:null },
  { _id:'ba77', t:'bpa-t1', p:'bpa', name:'Zoeller',                   cid:null, freq:null, st:'production', hd:add(177), csm:'Maria L.', notes:null, job:null, lnk:null },

  // ── BPA — Churned ────────────────────────────────────────────────────────
  { _id:'bc0', t:'bpa-t2', p:'bpa', name:'Aeromotive', cid:null, freq:null, st:'churned', hd:null, csm:'Maria L.', notes:'Ignored / churned', job:null, lnk:null },
  { _id:'bc1', t:'bpa-t2', p:'bpa', name:'Jackson',    cid:null, freq:null, st:'churned', hd:null, csm:'Maria L.', notes:'Ignored / churned', job:null, lnk:null },
  { _id:'bc2', t:'bpa-t2', p:'bpa', name:'Pertronix',  cid:null, freq:null, st:'churned', hd:null, csm:'Maria L.', notes:'Ignored / churned', job:null, lnk:null },
  { _id:'bc3', t:'bpa-t2', p:'bpa', name:'Scarpa',     cid:null, freq:null, st:'churned', hd:null, csm:'Maria L.', notes:'Ignored / churned', job:null, lnk:null },

  // ── WISER MAP ─────────────────────────────────────────────────────────────
  { _id:'wm0',  t:'wmap-t1', p:'wmap', name:'LG Canada',             cid:null, freq:null, st:'production', hd:add(108), csm:'David R.', notes:'Consumer Electronics',   job:null,                                             lnk:null },
  { _id:'wm1',  t:'wmap-t1', p:'wmap', name:'100PercentMoto',        cid:null, freq:null, st:'production', hd:add(110), csm:'David R.', notes:'Apparel / Sportswear',   job:null,                                             lnk:null },
  { _id:'wm2',  t:'wmap-t1', p:'wmap', name:'ExxelOutdoors',         cid:null, freq:null, st:'production', hd:add(112), csm:'David R.', notes:'Apparel / Sportswear',   job:null,                                             lnk:null },
  { _id:'wm3',  t:'wmap-t1', p:'wmap', name:'AmericanMetalCraft',    cid:null, freq:null, st:'production', hd:add(114), csm:'David R.', notes:'Home & Kitchen',          job:'(WM) AmericanMetalCraft - Full Discovery',       lnk:'https://orchestration.wiser.com/jobs/69863a8c8f3940f5c55b488b' },
  { _id:'wm4',  t:'wmap-t1', p:'wmap', name:'Nokian',                cid:null, freq:null, st:'production', hd:add(116), csm:'David R.', notes:'Automotive',              job:null,                                             lnk:null },
  { _id:'wm5',  t:'wmap-t1', p:'wmap', name:'TYR',                   cid:null, freq:null, st:'production', hd:add(118), csm:'David R.', notes:'Apparel / Sportswear',   job:null,                                             lnk:null },
  { _id:'wm6',  t:'wmap-t1', p:'wmap', name:'Corral Boots',          cid:null, freq:null, st:'production', hd:add(120), csm:'David R.', notes:'Apparel / Sportswear',   job:'(WM) Corral Boots - Full Discovery',              lnk:'https://orchestration.wiser.com/jobs/69ab5fd1de871104d1fd2dac' },
  { _id:'wm7',  t:'wmap-t1', p:'wmap', name:'Round 2 Corp',          cid:null, freq:null, st:'production', hd:add(122), csm:'David R.', notes:'Automotive / Industrial', job:null,                                             lnk:null },
  { _id:'wm8',  t:'wmap-t1', p:'wmap', name:'STI',                   cid:null, freq:null, st:'production', hd:add(124), csm:'David R.', notes:'Industrial / B2B',       job:'(WM) Specified Technologies - Full Discovery',    lnk:'https://orchestration.wiser.com/jobs/6991431176f68e44eb2e08a2' },
  { _id:'wm9',  t:'wmap-t1', p:'wmap', name:'New Balance',           cid:null, freq:null, st:'production', hd:add(126), csm:'David R.', notes:'Apparel / Sportswear',   job:'(WM) New Balance - Full Discovery',               lnk:'https://orchestration.wiser.com/jobs/6993444b76f68e44eb2faceb' },
  { _id:'wm10', t:'wmap-t1', p:'wmap', name:'Nutramax',              cid:null, freq:null, st:'production', hd:add(128), csm:'David R.', notes:'Pet Supplies',            job:null,                                             lnk:null },
  { _id:'wm11', t:'wmap-t1', p:'wmap', name:'Hypard',                cid:null, freq:null, st:'production', hd:add(130), csm:'David R.', notes:'Apparel / Sportswear',   job:'(WM) Hypard - Full Discovery',                   lnk:'https://orchestration.wiser.com/jobs/69863e3ce848ba27197c31a2' },
  { _id:'wm12', t:'wmap-t1', p:'wmap', name:'EnhancedLaserProducts', cid:null, freq:null, st:'production', hd:add(132), csm:'David R.', notes:'Industrial / B2B',       job:'(WM) EnhancedLaserProducts - Full Discovery',    lnk:'https://orchestration.wiser.com/jobs/698640018f3940f5c55b495a' },
  { _id:'wm13', t:'wmap-t1', p:'wmap', name:'Prym MAP',              cid:null, freq:null, st:'production', hd:add(134), csm:'David R.', notes:'Pet Supplies',            job:'(WM) Prym - Full Discovery',                     lnk:'https://orchestration.wiser.com/jobs/699157dd76f68e44eb2e1263' },

  // ── NUMAP — Tranche 1 (20 customers) ─────────────────────────────────────
  { _id:'nm1-0',  t:'nm-t1', p:'numap', name:'Rockford Fosgate 5730',          cid:null, freq:'Yearly',             st:'production', hd:add(85),  csm:'Priya N.', notes:'Consumer Electronics > Audio > Automotive', job:null,                                                     lnk:null },
  { _id:'nm1-1',  t:'nm-t1', p:'numap', name:'Canon 672 Printer',              cid:null, freq:'Weekly or Monthly',  st:'production', hd:add(87),  csm:'Priya N.', notes:'Consumer Electronics',                     job:'(CA) Canon672_Printer - Full Discovery',           lnk:'https://orchestration.wiser.com/jobs/69987342871be482a7af11be' },
  { _id:'nm1-2',  t:'nm-t1', p:'numap', name:'Motorola Solutions Canada',      cid:null, freq:'Monthly or Quarterly',st:'production',hd:add(89),  csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-3',  t:'nm-t1', p:'numap', name:'Lexmark 5404',                   cid:null, freq:'Monthly',            st:'production', hd:add(91),  csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-4',  t:'nm-t1', p:'numap', name:'Timex MAP',                      cid:null, freq:'Half Yearly',        st:'production', hd:add(93),  csm:'Priya N.', notes:'Consumer Electronics',                     job:'(CA) Timex - Full Discovery',                      lnk:'https://orchestration.wiser.com/jobs/699875bf60f6b6b384ce2fbc' },
  { _id:'nm1-5',  t:'nm-t1', p:'numap', name:'QSC 202',                        cid:null, freq:'Yearly',             st:'production', hd:add(95),  csm:'Priya N.', notes:'Consumer Electronics > Audio > Pro Systems',job:'(CA) QSC - Full Discovery',                        lnk:'https://orchestration.wiser.com/jobs/69861c578f3940f5c55b33e4' },
  { _id:'nm1-6',  t:'nm-t1', p:'numap', name:'Google Inc Canada',              cid:null, freq:'Yearly',             st:'production', hd:add(97),  csm:'Priya N.', notes:'Consumer Electronics',                     job:'(CA) Google Canada - Full Discovery',              lnk:'https://orchestration.wiser.com/jobs/698e8a0de848ba2719805d24' },
  { _id:'nm1-7',  t:'nm-t1', p:'numap', name:'Sharp B2B 4916',                 cid:null, freq:'Quarterly',          st:'production', hd:add(99),  csm:'Priya N.', notes:'Consumer Electronics',                     job:'(CA) SharpB2B4916 - Full Discovery',               lnk:'https://orchestration.wiser.com/jobs/699889333bc48005346786a2' },
  { _id:'nm1-8',  t:'nm-t1', p:'numap', name:'Philips Canada',                 cid:null, freq:'Monthly',            st:'production', hd:add(101), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-9',  t:'nm-t1', p:'numap', name:'Google Inc 5573',                cid:null, freq:'Yearly',             st:'production', hd:add(103), csm:'Priya N.', notes:'Consumer Electronics',                     job:'(CA) GoogleInc5573 - Full Discovery',              lnk:'https://orchestration.wiser.com/jobs/698630511f4ec7bc059889bd' },
  { _id:'nm1-10', t:'nm-t1', p:'numap', name:'Logitech',                       cid:null, freq:'Monthly',            st:'production', hd:add(105), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-11', t:'nm-t1', p:'numap', name:'Sony Interactive Entertainment', cid:null, freq:'Monthly',            st:'production', hd:add(107), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-12', t:'nm-t1', p:'numap', name:'Philips 2025 MAP Program',       cid:null, freq:'Weekly',             st:'production', hd:add(109), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-13', t:'nm-t1', p:'numap', name:'LG Home Appliances',             cid:null, freq:'Weekly',             st:'production', hd:add(111), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-14', t:'nm-t1', p:'numap', name:'Philips Domestic Appliances CA', cid:null, freq:'Half yearly',        st:'production', hd:add(113), csm:'Priya N.', notes:'Consumer Electronics',                     job:'(CA) Philips Domestic Appliances CA - Full Discovery',lnk:'https://orchestration.wiser.com/jobs/69988f615b101c5eafc46296' },
  { _id:'nm1-15', t:'nm-t1', p:'numap', name:'LG Electronics UPP',             cid:null, freq:'Weekly',             st:'production', hd:add(115), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-16', t:'nm-t1', p:'numap', name:'LG Electronics',                 cid:null, freq:'Weekly',             st:'production', hd:add(117), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-17', t:'nm-t1', p:'numap', name:'Canon 672',                      cid:null, freq:'Weekly or Monthly',  st:'production', hd:add(119), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-18', t:'nm-t1', p:'numap', name:'Sony IPSA',                      cid:null, freq:'Monthly or Quarterly',st:'production',hd:add(121), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },
  { _id:'nm1-19', t:'nm-t1', p:'numap', name:'Sony Electronics',               cid:null, freq:'Weekly',             st:'production', hd:add(123), csm:'Priya N.', notes:'Consumer Electronics',                     job:null,                                                     lnk:null },

  // ── NUMAP — Tranche 2 (7 customers) ──────────────────────────────────────
  { _id:'nm2-0', t:'nm-t2', p:'numap', name:'Goodman Canada',             cid:null, freq:'Quarterly',            st:'production', hd:add(105), csm:'Priya N.', notes:'Heating and Cooling / HVAC',             job:null, lnk:null },
  { _id:'nm2-1', t:'nm-t2', p:'numap', name:'Goodman Turk Bundle MAP',    cid:null, freq:'Quarterly',            st:'production', hd:add(107), csm:'Priya N.', notes:'Heating and Cooling / HVAC',             job:null, lnk:null },
  { _id:'nm2-2', t:'nm-t2', p:'numap', name:'Philips Domestic Appl. US',  cid:null, freq:'Half yearly',         st:'production', hd:add(109), csm:'Priya N.', notes:'Domestic Appliances',                    job:null, lnk:null },
  { _id:'nm2-3', t:'nm-t2', p:'numap', name:"D'Addario 2421",             cid:null, freq:'Monthly',             st:'production', hd:add(111), csm:'Priya N.', notes:'Musical Instruments & Pro Audio',        job:null, lnk:null },
  { _id:'nm2-4', t:'nm-t2', p:'numap', name:'Motorola',                   cid:null, freq:'Monthly or Quarterly',st:'production', hd:add(113), csm:'Priya N.', notes:'Professional Communications Equipment',  job:null, lnk:null },
  { _id:'nm2-5', t:'nm-t2', p:'numap', name:'Philips Lighting',           cid:null, freq:'Discontinue',         st:'production', hd:add(115), csm:'Priya N.', notes:'Home Improvement > Lighting',            job:null, lnk:null },
  { _id:'nm2-6', t:'nm-t2', p:'numap', name:'Goodman 5223',               cid:null, freq:'Quarterly',           st:'production', hd:add(117), csm:'Priya N.', notes:'Heating and Cooling / HVAC',             job:null, lnk:null },

  // ── NUMAP — Tranche 3 (9 customers) ──────────────────────────────────────
  { _id:'nm3-0', t:'nm-t3', p:'numap', name:'Livon 578',          cid:null, freq:'Yearly',              st:'production', hd:add(125), csm:'Tom W.', notes:'Health & Beauty > Supplements',  job:null,                                       lnk:null },
  { _id:'nm3-1', t:'nm-t3', p:'numap', name:'Citizen International',cid:null,freq:'Quarterly',           st:'production', hd:add(127), csm:'Tom W.', notes:'Accessories > Watches',          job:null,                                       lnk:null },
  { _id:'nm3-2', t:'nm-t3', p:'numap', name:'Steve Madden 5376',   cid:null, freq:'Monthly or Quarterly',st:'production', hd:add(129), csm:'Tom W.', notes:'Apparel',                        job:null,                                       lnk:null },
  { _id:'nm3-3', t:'nm-t3', p:'numap', name:'Converse Canada',     cid:null, freq:'Monthly',             st:'production', hd:add(131), csm:'Tom W.', notes:'Apparel',                        job:null,                                       lnk:null },
  { _id:'nm3-4', t:'nm-t3', p:'numap', name:'Citizen 4927',        cid:null, freq:'Yearly',              st:'production', hd:add(133), csm:'Tom W.', notes:'Accessories > Watches',          job:null,                                       lnk:null },
  { _id:'nm3-5', t:'nm-t3', p:'numap', name:'Colgate 2015',        cid:null, freq:'Yearly',              st:'production', hd:add(135), csm:'Tom W.', notes:'Health & Beauty > Oral Care',    job:'(CA) Colgate 2026 - Full Discovery',       lnk:'https://orchestration.wiser.com/jobs/69ab633ed5048e1f45819d5d' },
  { _id:'nm3-6', t:'nm-t3', p:'numap', name:'Bayer MAP',           cid:null, freq:'Monthly or Quarterly',st:'production', hd:add(137), csm:'Tom W.', notes:'Health & Beauty > Supplements',  job:null,                                       lnk:null },
  { _id:'nm3-7', t:'nm-t3', p:'numap', name:'Kawasaki Demo 5721',  cid:null, freq:'Monthly',             st:'production', hd:add(139), csm:'Tom W.', notes:'Automotive',                     job:null,                                       lnk:null },
  { _id:'nm3-8', t:'nm-t3', p:'numap', name:'Converse',            cid:null, freq:'Half yearly',         st:'production', hd:add(141), csm:'Tom W.', notes:'Apparel',                        job:null,                                       lnk:null },

];
