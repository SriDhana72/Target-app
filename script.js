/* ════ DATA ════ */
const REPS=[  
  {name:"Kavitha Rajan",   mgr:"Ananya Iyer",   region:"India S",      bu:"CRM BU",       tenure:5,rev:24.8,deals:118,wr:76,att:128,comm:1.64,type:"Sales",   color:"#10b981"},  
  {name:"Arjun Pillai",    mgr:"Ananya Iyer",   region:"India S",      bu:"CRM BU",       tenure:3,rev:19.2,deals:96, wr:70,att:114,comm:1.28,type:"Sales",   color:"#3b82f6"},  
  {name:"Meena Krishnan",  mgr:"Rajesh Menon",  region:"India N",      bu:"Marketing BU", tenure:6,rev:22.1,deals:108,wr:73,att:120,comm:1.48,type:"Partner", color:"#8b5cf6"},  
  {name:"Dinesh Kumar",    mgr:"Rajesh Menon",  region:"India N",      bu:"Marketing BU", tenure:2,rev:12.4,deals:64, wr:58,att:88, comm:0.84,type:"Sales",   color:"#f59e0b"},  
  {name:"Sunita Verma",    mgr:"Priya Suresh",  region:"India W",      bu:"Finance BU",   tenure:4,rev:17.8,deals:88, wr:67,att:102,comm:1.18,type:"Renewal", color:"#06b6d4"},  
  {name:"Rahul Desai",     mgr:"Ananya Iyer",   region:"India S",      bu:"CRM BU",       tenure:1,rev:7.2, deals:42, wr:51,att:68, comm:0.48,type:"Sales",   color:"#ef4444"},  
  {name:"Preethi Subram.", mgr:"Priya Suresh",  region:"India Central",bu:"HR BU",        tenure:7,rev:28.4,deals:138,wr:80,att:142,comm:1.88,type:"Sales",   color:"#10b981"},  
  {name:"Carlos Mendez",   mgr:"Vikram Nair",   region:"LATAM",        bu:"CRM BU",       tenure:3,rev:9.8, deals:52, wr:55,att:76, comm:0.64,type:"Partner", color:"#ef4444"},  
  {name:"Divya Nambiar",   mgr:"Vikram Nair",   region:"APAC",         bu:"Analytics BU", tenure:2,rev:7.4, deals:38, wr:48,att:62, comm:0.48,type:"Sales",   color:"#ef4444"},  
  {name:"Sean O'Brien",    mgr:"Rajesh Menon",  region:"US East",      bu:"CRM BU",       tenure:5,rev:23.2,deals:112,wr:71,att:116,comm:1.54,type:"Renewal", color:"#3b82f6"},  
  {name:"Lakshmi Pillai",  mgr:"Ananya Iyer",   region:"India S",      bu:"HR BU",        tenure:8,rev:31.2,deals:148,wr:82,att:148,comm:2.08,type:"Sales",   color:"#10b981"},  
  {name:"Mohan Prasad",    mgr:"Priya Suresh",  region:"India E",      bu:"Marketing BU", tenure:4,rev:15.8,deals:78, wr:64,att:96, comm:1.04,type:"Sales",   color:"#f59e0b"},  
  {name:"Eva Müller",      mgr:"Rajesh Menon",  region:"US West",      bu:"CRM BU",       tenure:1,rev:5.8, deals:32, wr:44,att:56, comm:0.38,type:"Sales",   color:"#ef4444"},  
  {name:"Suresh Babu",     mgr:"Ananya Iyer",   region:"India S",      bu:"CRM BU",       tenure:3,rev:12.2,deals:62, wr:62,att:88, comm:0.82,type:"Partner", color:"#f59e0b"},  
  {name:"Fatima Al-Amin",  mgr:"Vikram Nair",   region:"ANZ",          bu:"Finance BU",   tenure:6,rev:20.4,deals:98, wr:69,att:110,comm:1.36,type:"Renewal", color:"#10b981"},  
  {name:"Ravi Shankar",    mgr:"Priya Suresh",  region:"India Central",bu:"Analytics BU", tenure:2,rev:6.4, deals:34, wr:46,att:58, comm:0.42,type:"Sales",   color:"#ef4444"},  
  {name:"Grace Kim",       mgr:"Rajesh Menon",  region:"US East",      bu:"Marketing BU", tenure:9,rev:34.8,deals:164,wr:84,att:158,comm:2.32,type:"Sales",   color:"#10b981"},  
  {name:"Ben Carter",      mgr:"Vikram Nair",   region:"Canada",       bu:"CRM BU",       tenure:1,rev:4.8, deals:26, wr:41,att:52, comm:0.32,type:"Sales",   color:"#ef4444"},  
  {name:"Yuki Watanabe",   mgr:"Priya Suresh",  region:"APAC",         bu:"Analytics BU", tenure:5,rev:21.4,deals:104,wr:72,att:112,comm:1.42,type:"Partner", color:"#10b981"},  
  {name:"Amrita Singh",    mgr:"Ananya Iyer",   region:"India N",      bu:"HR BU",        tenure:4,rev:14.8,deals:72, wr:63,att:92, comm:0.98,type:"Sales",   color:"#f59e0b"},  
  {name:"Lucas Ferreira",  mgr:"Vikram Nair",   region:"Brazil",       bu:"Operations BU",tenure:3,rev:16.8,deals:82, wr:65,att:98, comm:1.12,type:"Renewal", color:"#f59e0b"},  
  {name:"Deepak Menon",    mgr:"Vikram Nair",   region:"LATAM",        bu:"CRM BU",       tenure:2,rev:8.8, deals:46, wr:52,att:72, comm:0.58,type:"Sales",   color:"#ef4444"},  
  {name:"Nisha Goyal",     mgr:"Rajesh Menon",  region:"India W",      bu:"Finance BU",   tenure:7,rev:24.2,deals:118,wr:74,att:122,comm:1.62,type:"Sales",   color:"#10b981"},  
  {name:"Arun Natarajan",  mgr:"Priya Suresh",  region:"India S",      bu:"CRM BU",       tenure:4,rev:14.2,deals:70, wr:61,att:90, comm:0.94,type:"Partner", color:"#f59e0b"},  
  {name:"Chris Donovan",   mgr:"Rajesh Menon",  region:"US West",      bu:"Marketing BU", tenure:6,rev:26.8,deals:128,wr:77,att:132,comm:1.78,type:"Sales",   color:"#10b981"},  
  {name:"Pallavi Iyer",    mgr:"Ananya Iyer",   region:"India Central",bu:"Analytics BU", tenure:5,rev:18.4,deals:90, wr:68,att:104,comm:1.22,type:"Renewal", color:"#10b981"},  
  {name:"Sankar Raman",    mgr:"Vikram Nair",   region:"ANZ",          bu:"Operations BU",tenure:3,rev:11.2,deals:58, wr:56,att:82, comm:0.74,type:"Sales",   color:"#f59e0b"},
];
const cls=r=>r.att>=110?'top':r.att>=80?'avg':'critical';
const ini=n=>n.split(' ').map(x=>x[0]).join('').slice(0,2);

const REGIONS=[  
  {name:"India S",       wr:76,rev:"$98M", deals:348,c:"rg-high",flag:"🇮🇳"},  
  {name:"India N",       wr:68,rev:"$72M", deals:276,c:"rg-mid", flag:"🇮🇳"},  
  {name:"India W",       wr:65,rev:"$58M", deals:204,c:"rg-mid", flag:"🇮🇳"},  
  {name:"India E",       wr:62,rev:"$42M", deals:148,c:"rg-mid", flag:"🇮🇳"},  
  {name:"India Central", wr:70,rev:"$64M", deals:228,c:"rg-mid", flag:"🇮🇳"},  
  {name:"US East",       wr:72,rev:"$88M", deals:276,c:"rg-high",flag:"🇺🇸"},  
  {name:"US West",       wr:68,rev:"$74M", deals:242,c:"rg-mid", flag:"🇺🇸"},  
  {name:"ANZ",           wr:64,rev:"$48M", deals:156,c:"rg-mid", flag:"🇦🇺"},  
  {name:"APAC",          wr:60,rev:"$36M", deals:142,c:"rg-mid", flag:"🌏"},  
  {name:"Canada",        wr:58,rev:"$18M", deals:72, c:"rg-low", flag:"🇨🇦"},  
  {name:"LATAM",         wr:52,rev:"$22M", deals:98, c:"rg-low", flag:"🌎"},  
  {name:"Brazil",        wr:55,rev:"$24M", deals:108,c:"rg-low", flag:"🇧🇷"},
];

const WIN_MATRIX={  
  "CRM":       {"India S":80,"India N":72,"US East":76,"APAC":64,"LATAM":56,"ANZ":68},  
  "CRM Plus":  {"India S":76,"India N":68,"US East":74,"APAC":61,"LATAM":53,"ANZ":65},  
  "Zoho ONE":  {"India S":74,"India N":66,"US East":72,"APAC":59,"LATAM":50,"ANZ":63},  
  "Desk":      {"India S":72,"India N":64,"US East":68,"APAC":57,"LATAM":48,"ANZ":60},  
  "Analytics": {"India S":70,"India N":62,"US East":66,"APAC":55,"LATAM":46,"ANZ":58},  
  "People":    {"India S":68,"India N":60,"US East":64,"APAC":53,"LATAM":44,"ANZ":56},
};

const LOGOS=[  
  {icon:"🏦",name:"HDFC Bank",       region:"India S",  svc:"CRM Plus",   rev:"$18.4M"},  
  {icon:"🏭",name:"Tata Consultancy",region:"India N",  svc:"Zoho ONE",   rev:"$14.8M"},  
  {icon:"💻",name:"Infosys",         region:"India S",  svc:"Analytics",  rev:"$12.6M"},  
  {icon:"🏥",name:"Apollo Hospitals",region:"India W",  svc:"People",     rev:"$11.2M"},  
  {icon:"📡",name:"Reliance Jio",    region:"India W",  svc:"CRM",        rev:"$10.8M"},  
  {icon:"🚀",name:"Amazon AWS India",region:"India S",  svc:"Zoho ONE",   rev:"$10.2M"},  
  {icon:"☁️",name:"Salesforce India",region:"US East",  svc:"Desk",       rev:"$9.4M"},  
  {icon:"🏗️",name:"L&T Group",      region:"India N",  svc:"Projects",   rev:"$8.8M"},  
  {icon:"💊",name:"Sun Pharma",      region:"India W",  svc:"People Plus",rev:"$7.2M"},  
  {icon:"🎓",name:"BYJU's",          region:"India S",  svc:"Analytics",  rev:"$6.8M"},
];

const ANOMALIES=[  
  {icon:"⚠️",text:"<strong>Carlos Mendez (LATAM)</strong> — $3.8M Zoho ONE deal idle 110 days. No CRM activity in 52 days."},  
  {icon:"🔴",text:"<strong>Divya Nambiar (APAC)</strong> — Pipeline coverage below 2×. $9.6M active vs $15M target."},  
  {icon:"⚠️",text:"<strong>LATAM region</strong> — 4 Desk deals stuck in Proposal for 65+ days. $8.4M exposure."},  
  {icon:"🔴",text:"<strong>Eva Müller (US West)</strong> — Win rate crashed from 63% → 44%. Zoho ONE pricing objections."},  
  {icon:"⚠️",text:"<strong>Analytics pipeline</strong> — Zero late-stage deals in LATAM & Brazil for Q1 FY26."},
];

const HIGH_CONV=[  
  {co:"HDFC Bank",        rep:"Lakshmi Pillai",   stage:"Negotiation",  svc:"CRM Plus",  reg:"India S",      val:"$8.2M",prob:91},  
  {co:"Infosys",          rep:"Preethi Subram.",  stage:"Legal Review", svc:"Analytics", reg:"India Central",val:"$6.4M",prob:86},  
  {co:"Amazon AWS India", rep:"Kavitha Rajan",    stage:"Verbal Yes",   svc:"Zoho ONE",  reg:"India S",      val:"$5.8M",prob:94},  
  {co:"Salesforce India", rep:"Grace Kim",        stage:"Negotiation",  svc:"Desk",      reg:"US East",      val:"$4.8M",prob:82},  
  {co:"L&T Group",        rep:"Meena Krishnan",   stage:"Proposal",     svc:"Projects",  reg:"India N",      val:"$4.2M",prob:74},  
  {co:"Apollo Hospitals", rep:"Sunita Verma",     stage:"Verbal Yes",   svc:"People",    reg:"India W",      val:"$3.8M",prob:88},
];

const ACTIVITY=[  
  {av:"KR",col:"#10b981",text:"<span>Kavitha Rajan</span> closed $8.2M deal with HDFC Bank",tag:"won",time:"2m ago"},  
  {av:"PR",col:"#3b82f6",text:"<span>Preethi Subram.</span> qualified Infosys for Legal Review stage",tag:"qualified",time:"14m ago"},  
  {av:"GK",col:"#10b981",text:"<span>Grace Kim</span> got verbal yes from Salesforce India",tag:"qualified",time:"28m ago"},  
  {av:"CM",col:"#ef4444",text:"<span>Carlos Mendez</span> LATAM deal flagged as at-risk",tag:"risk",time:"1h ago"},  
  {av:"AR",col:"#f59e0b",text:"<span>Arjun Pillai</span> submitted proposal to Wipro for $3.4M",tag:"qualified",time:"2h ago"},  
  {av:"EM",col:"#ef4444",text:"<span>Eva Müller</span> lost Siemens deal on pricing objection",tag:"lost",time:"3h ago"},  
  {av:"SV",col:"#06b6d4",text:"<span>Sunita Verma</span> booked Apollo Hospitals demo",tag:"qualified",time:"4h ago"},
];

const RC_DATA={  
  service:[    
    {l:"CRM",       v:24,rev:"$91M", c:"#3b82f6"},    
    {l:"CRM Plus",  v:18,rev:"$68M", c:"#8b5cf6"},    
    {l:"Zoho ONE",  v:16,rev:"$61M", c:"#f59e0b"},    
    {l:"Desk",      v:12,rev:"$46M", c:"#10b981"},    
    {l:"Analytics", v:10,rev:"$38M", c:"#f97316"},    
    {l:"People",    v:8, rev:"$30M", c:"#ec4899"},    
    {l:"People Plus",v:5,rev:"$19M", c:"#14b8a6"},    
    {l:"Projects",  v:4, rev:"$15M", c:"#a855f7"},    
    {l:"Webinar",   v:2, rev:"$8M",  c:"#ef4444"},    
    {l:"Lens",      v:1, rev:"$5M",  c:"#84cc16"},  
  ],  
  region:[    
    {l:"India S",       v:26,rev:"$98M",  c:"#3b82f6"},    
    {l:"India N",       v:19,rev:"$72M",  c:"#8b5cf6"},    
    {l:"US East",       v:16,rev:"$62M",  c:"#f59e0b"},    
    {l:"India W",       v:13,rev:"$50M",  c:"#10b981"},    
    {l:"India Central", v:11,rev:"$42M",  c:"#f97316"},    
    {l:"US West",       v:9, rev:"$34M",  c:"#ec4899"},    
    {l:"ANZ",           v:5, rev:"$19M",  c:"#14b8a6"},    
    {l:"APAC",          v:4, rev:"$15M",  c:"#a855f7"},    
    {l:"Brazil",        v:3, rev:"$11M",  c:"#ef4444"},    
    {l:"LATAM",         v:2, rev:"$8M",   c:"#84cc16"},    
    {l:"Canada",        v:1, rev:"$5M",   c:"#facc15"},    
    {l:"India E",       v:3, rev:"$12M",  c:"#6366f1"},  
  ],  
  bu:[    
    {l:"CRM BU",       v:38,rev:"$145M",c:"#3b82f6"},    
    {l:"Marketing BU", v:22,rev:"$84M", c:"#8b5cf6"},    
    {l:"Analytics BU", v:16,rev:"$61M", c:"#f59e0b"},    
    {l:"Finance BU",   v:12,rev:"$46M", c:"#10b981"},    
    {l:"HR BU",        v:8, rev:"$30M", c:"#f97316"},    
    {l:"Operations BU",v:4, rev:"$16M", c:"#ec4899"},  
  ],
};

/* ════ HOME KPI & REVENUE CHART LOGIC ════ */

function animateHomeKPIs() {
  // 1. Animate Revenue Progress Bar
  const revBar = document.getElementById('kpi-rev-bar');
  if (revBar) {
      setTimeout(() => { revBar.style.width = '89%'; }, 100);
  }

  // 2. Animate Team Health Stacked Bar
  const trackBar = document.getElementById('kpi-team-track');
  const riskBar = document.getElementById('kpi-team-risk');
  const behindBar = document.getElementById('kpi-team-behind');

  setTimeout(() => {
      if(trackBar) trackBar.style.width = '52%'; // 14/27
      if(riskBar) riskBar.style.width = '33%';  // 9/27
      if(behindBar) behindBar.style.width = '15%'; // 4/27
  }, 200);
}

/* ════ DROPDOWNS ════ */
function toggleYearMenu(e) {
  e.stopPropagation();
  document.getElementById('yearMenu').classList.toggle('open');
}
/* ════ PROFILE DROPDOWN ════ */
function toggleProfileMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('profileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close popups when clicking outside
document.addEventListener('click', e => {  
  // 1. Quick Stats Panel
  const qsPanel = document.getElementById('qsPanel');  
  const qsTrigger = document.querySelector('.qs-trigger');  
  if(qsPanel && qsTrigger && qsPanel.classList.contains('open') && !qsPanel.contains(e.target) && !qsTrigger.contains(e.target)){    
      qsPanel.classList.remove('open');  
  }

  // 2. Year Dropdown Menu
  const yearMenu = document.getElementById('yearMenu');
  if(yearMenu && yearMenu.classList.contains('open') && !e.target.closest('.th-year-select-wrap')) {
      yearMenu.classList.remove('open');
  }

  // 3. Profile Dropdown Menu
  const profileMenu = document.getElementById('profileMenu');
  if(profileMenu && profileMenu.classList.contains('open') && !e.target.closest('.th-profile-wrap')) {
      profileMenu.classList.remove('open');
  }
  
  // 4. Target Config Multi-select
  const msDropdown = document.getElementById('tc-ms-dropdown');
  if(msDropdown && msDropdown.classList.contains('open') && !e.target.closest('#tc-ms-wrap')) {
      msDropdown.classList.remove('open');
  }
});
let rcKey='service', rcN=4;

const HIER={  
  name:"Sridhar Vembu",title:"CEO — Zoho Corp",rev:"$382M",deals:1248,wr:"64.8%",att:"89%",  
  children:[    
    {name:"Ananya Iyer",title:"RD — India South",rev:"$98M",deals:348,wr:"74.2%",att:"112%",color:"#10b981",region:"India S",     
     aes:[      
      {name:"Kavitha Rajan",  title:"Sr. AE",rev:"$24.8M",deals:118,wr:"76%",att:128,type:"top"},      
      {name:"Arjun Pillai",   title:"AE",    rev:"$19.2M",deals:96, wr:"70%",att:114,type:"top"},      
      {name:"Lakshmi Pillai", title:"Sr. AE",rev:"$31.2M",deals:148,wr:"82%",att:148,type:"top"},      
      {name:"Rahul Desai",    title:"AE",    rev:"$7.2M", deals:42, wr:"51%",att:68, type:"critical"},      
      {name:"Suresh Babu",    title:"AE",    rev:"$12.2M",deals:62, wr:"62%",att:88, type:"avg"},      
      {name:"Pallavi Iyer",   title:"AE",    rev:"$18.4M",deals:90, wr:"68%",att:104,type:"top"},      
      {name:"Arun Natarajan", title:"AE",    rev:"$14.2M",deals:70, wr:"61%",att:90, type:"avg"},    
    ]},    
    {name:"Rajesh Menon",title:"RD — India N & Americas",rev:"$168M",deals:584,wr:"72.1%",att:"118%",color:"#8b5cf6",region:"India N / US",     
     aes:[      
      {name:"Meena Krishnan", title:"Sr. AE",rev:"$22.1M",deals:108,wr:"73%",att:120,type:"top"},      
      {name:"Dinesh Kumar",   title:"AE",    rev:"$12.4M",deals:64, wr:"58%",att:88, type:"avg"},      
      {name:"Sean O'Brien",   title:"Sr. AE",rev:"$23.2M",deals:112,wr:"71%",att:116,type:"top"},      
      {name:"Eva Müller",     title:"Jr. AE",rev:"$5.8M", deals:32, wr:"44%",att:56, type:"critical"},      
      {name:"Grace Kim",      title:"Principal AE",rev:"$34.8M",deals:164,wr:"84%",att:158,type:"top"},      
      {name:"Nisha Goyal",    title:"Sr. AE",rev:"$24.2M",deals:118,wr:"74%",att:122,type:"top"},      
      {name:"Chris Donovan",  title:"Sr. AE",rev:"$26.8M",deals:128,wr:"77%",att:132,type:"top"},      
      {name:"Amrita Singh",   title:"AE",    rev:"$14.8M",deals:72, wr:"63%",att:92, type:"avg"},    
    ]},    
    {name:"Priya Suresh",title:"RD — India Central & APAC",rev:"$88M",deals:308,wr:"66.4%",att:"102%",color:"#f59e0b",region:"India Central / APAC",     
     aes:[      
      {name:"Preethi Subram.",title:"Sr. AE",rev:"$28.4M",deals:138,wr:"80%",att:142,type:"top"},      
      {name:"Sunita Verma",   title:"AE",    rev:"$17.8M",deals:88, wr:"67%",att:102,type:"top"},      
      {name:"Mohan Prasad",   title:"AE",    rev:"$15.8M",deals:78, wr:"64%",att:96, type:"avg"},      
      {name:"Ravi Shankar",   title:"Jr. AE",rev:"$6.4M", deals:34, wr:"46%",att:58, type:"critical"},      
      {name:"Yuki Watanabe",  title:"Sr. AE",rev:"$21.4M",deals:104,wr:"72%",att:112,type:"top"},    
    ]},    
    {name:"Vikram Nair",title:"RD — International",rev:"$54M",deals:190,wr:"54.8%",att:"76%",color:"#ef4444",region:"ANZ / LATAM / Brazil / Canada",     
     aes:[      
      {name:"Carlos Mendez",  title:"AE",    rev:"$9.8M", deals:52, wr:"55%",att:76, type:"critical"},      
      {name:"Divya Nambiar",  title:"Jr. AE",rev:"$7.4M", deals:38, wr:"48%",att:62, type:"critical"},      
      {name:"Fatima Al-Amin", title:"Sr. AE",rev:"$20.4M",deals:98, wr:"69%",att:110,type:"top"},      
      {name:"Ben Carter",     title:"Jr. AE",rev:"$4.8M", deals:26, wr:"41%",att:52, type:"critical"},      
      {name:"Lucas Ferreira", title:"AE",    rev:"$16.8M",deals:82, wr:"65%",att:98, type:"avg"},      
      {name:"Deepak Menon",   title:"AE",    rev:"$8.8M", deals:46, wr:"52%",att:72, type:"critical"},      
      {name:"Sankar Raman",   title:"AE",    rev:"$11.2M",deals:58, wr:"56%",att:82, type:"avg"},    
    ]},  
  ]
};

/* ════ BU ATTAINMENT: REFACTORED VERSION ════ */
function renderManagerPulse() {
  const container = document.getElementById('mgr-bars'); 
  if (!container) return;

  const bus = [
      { name: 'CRM BU', initial: 'CR', attainment: 114, leader: 'Ananya Iyer', target: 127.2, achieved: 145.0 },
      { name: 'Marketing BU', initial: 'MK', attainment: 108, leader: 'Rajesh Menon', target: 77.7, achieved: 84.0 },
      { name: 'Analytics BU', initial: 'AN', attainment: 96, leader: 'Priya Suresh', target: 63.5, achieved: 61.0 },
      { name: 'Finance BU', initial: 'FI', attainment: 92, leader: 'Vikram Nair', target: 50.0, achieved: 46.0 },
      { name: 'HR BU', initial: 'HR', attainment: 88, leader: 'Preethi S.', target: 34.1, achieved: 30.0 },
      { name: 'Operations BU', initial: 'OP', attainment: 82, leader: 'Lucas F.', target: 19.5, achieved: 16.0 }
  ];

  // No more crown icon, everything is rendered as a list item
  container.innerHTML = bus.map((bu, index) => {
      let statusColor = bu.attainment >= 100 ? 'var(--green)' : 'var(--amber)';
      
      return `
          <div class="mgr-node-card" tabindex="0">
              <div class="mgr-avatar" style="background: var(--surface2); color: var(--t1); border: 1px solid var(--border); width: 36px; height: 36px;">
                  ${bu.initial}
              </div>
              
              <div class="mgr-info" style="flex: 1; padding-left: 14px;">
                  <div class="mgr-name" style="font-weight: 700; font-size: 13px;">${bu.name}</div>
                  <div style="font-size: 11px; color: var(--t3);">Led by ${bu.leader}</div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 16px;">
                  <div style="text-align: right;">
                      <div style="font-size: 10px; color: var(--t3);">T: $${bu.target.toFixed(1)}M</div>
                      <div style="font-size: 12px; font-weight: 800;">$${bu.achieved.toFixed(1)}M</div>
                  </div>
                  
                  <div style="background: ${statusColor}1A; color: ${statusColor}; border: 1px solid ${statusColor}30; padding: 4px 8px; border-radius: 6px; font-weight: 800; font-size: 11px; min-width: 48px; text-align: center;">
                      ${bu.attainment}%
                  </div>
              </div>
          </div>
      `;
  }).join('');
}
/* ════ NAVIGATION ════ */
const PAGE_TITLES = {
  home: ['Overview','FY2024-25 · Q4 · Zoho Corp'],
  pipeline: ['Pipeline','Revenue & Opportunities'],
  regions: ['Regions & Products','Win Rate Intelligence'],
  orgchart: ['Org Chart','Reporting Hierarchy'],
  commission: ['Target Commission', 'Quota Attainment & Payout Projections'],
  targets: ['Leadership Dashboard','Sales Reps Performance Overview'],
  settings: ['Settings', 'Configure your preferences and account settings']
};
function goTo(id, btn) {  
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));  
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));  
  
  const targetSection = document.getElementById('sec-' + id);
  if(targetSection) targetSection.classList.add('active');  
  
  if (btn && btn.classList.contains('nav-item')) btn.classList.add('active');  
  
  const t = PAGE_TITLES[id] || [id, ''];  
  const pt = document.getElementById('pageTitle');
  const ps = document.getElementById('pageSub');
  if (pt) pt.textContent = t[0];  
  if (ps) ps.textContent = t[1];  
  
  if (id === 'pipeline') { setTimeout(() => drawProdChart(), 50); }  
  if (id === 'home') { setTimeout(() => drawRevChart(), 50); }
  if (id === 'targets') { setTimeout(() => drawOppsBubbleChart(), 10); } // Make sure this line exists!
  }

/* ════ THEME ════ */
function setTheme(mode) {  
  document.documentElement.setAttribute('data-theme', mode);  
  
  // Update Topbar Pills
  const btnDark = document.getElementById('btnDark');
  const btnLight = document.getElementById('btnLight');
  if(btnDark) btnDark.classList.toggle('active', mode === 'dark');  
  if(btnLight) btnLight.classList.toggle('active', mode === 'light');  

  // Sync the Settings toggle switch
  const settingToggle = document.getElementById('settingDarkToggle');
  if(settingToggle) settingToggle.checked = (mode === 'dark');
  
  setTimeout(() => {
      drawRevChart();
      if(document.getElementById('sec-pipeline').classList.contains('active')) drawProdChart();
      if(document.getElementById('sec-targets').classList.contains('active')) drawOppsBubbleChart();
  }, 60);
}

/* ════ HOME RENDERS ════ */
function drawRevChart(){  
  const c=document.getElementById('revChart');if(!c)return;  
  const ctx=c.getContext('2d');  
  c.width=c.parentElement.offsetWidth-40;c.height=160;  
  const W=c.width,H=c.height,data=[214,268,334,382],labels=['Q1','Q2','Q3','Q4'],max=440;  
  const pad={l:52,r:16,t:14,b:30},cw=W-pad.l-pad.r,ch=H-pad.t-pad.b;  
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';  
  const gridC=isDark?'#1e3050':'#dce6f5', textC=isDark?'#3a5580':'#6a88b0';  
  ctx.clearRect(0,0,W,H);  
  ctx.strokeStyle=gridC;ctx.lineWidth=1;  
  for(let i=0;i<=4;i++){const y=pad.t+ch-(i/4)*ch;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(pad.l+cw,y);ctx.stroke();ctx.fillStyle=textC;ctx.font='10px Plus Jakarta Sans,sans-serif';ctx.textAlign='right';ctx.fillText('$'+(i/4*max).toFixed(0)+'M',pad.l-5,y+4);}  
  const pts=data.map((v,i)=>({x:pad.l+i*(cw/3),y:pad.t+ch-(v/max)*ch}));  
  const g=ctx.createLinearGradient(0,pad.t,0,pad.t+ch);g.addColorStop(0,'rgba(59,130,246,0.25)');g.addColorStop(1,'rgba(59,130,246,0.01)');  
  ctx.beginPath();ctx.moveTo(pts[0].x,pad.t+ch);pts.forEach(p=>ctx.lineTo(p.x,p.y));ctx.lineTo(pts[3].x,pad.t+ch);ctx.closePath();ctx.fillStyle=g;ctx.fill();  
  ctx.beginPath();ctx.strokeStyle='#3b82f6';ctx.lineWidth=2.5;ctx.lineJoin='round';pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke();  
  pts.forEach((p,i)=>{ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.fillStyle=i===3?'#3b82f6':(isDark?'#111827':'#fff');ctx.strokeStyle='#3b82f6';ctx.lineWidth=2;ctx.fill();ctx.stroke();ctx.fillStyle=isDark?'#f1f5ff':'#0f1f3d';ctx.font='bold 11px Plus Jakarta Sans,sans-serif';ctx.textAlign='center';ctx.fillText('$'+data[i]+'M',p.x,p.y-12);ctx.fillStyle=textC;ctx.font='10px Plus Jakarta Sans,sans-serif';ctx.fillText(labels[i],p.x,pad.t+ch+18);});
}

function renderMgrBars(){  
  const data=[{n:"Ananya Iyer",sub:"India South",v:112,c:"var(--green)"},{n:"Rajesh Menon",sub:"India N+US",v:118,c:"var(--green)"},{n:"Priya Suresh",sub:"Central+APAC",v:102,c:"var(--amber)"},{n:"Vikram Nair",sub:"International",v:76,c:"var(--red)"}];  
  document.getElementById('mgr-bars').innerHTML=data.map(d=>`    <div class="pbar-row">      <div style="display:flex;flex-direction:column;width:140px;flex-shrink:0">        <span style="font-size:12px;font-weight:700;color:var(--t1)">${d.n}</span>        <span style="font-size:10px;color:var(--t3)">${d.sub}</span>      </div>      <div class="pbar-track"><div class="pbar-fill" style="width:${Math.min(d.v,100)}%;background:${d.c}"></div></div>      <div class="pbar-val" style="color:${d.c}">${d.v}%</div>    </div>`).join('');
}

function renderHomePerfCards(id,classification){  
  const col={top:'var(--green)',avg:'var(--amber)',critical:'var(--red)'}[classification];  
  const reps=REPS.filter(r=>cls(r)===classification).slice(0,5);  
  document.getElementById(id).innerHTML=reps.map((r,i)=>`    <div style="display:flex;align-items:center;gap:10px;padding:9px 6px;border-bottom:1px solid var(--border);border-radius:8px;cursor:pointer;transition:background .15s" onmouseenter="this.style.background='var(--surface2)'" onmouseleave="this.style.background=''">      <div style="font-size:11px;font-weight:700;color:var(--t3);width:18px;text-align:center;flex-shrink:0;font-family:'Courier New',monospace">${i+1}</div>      <div style="width:30px;height:30px;border-radius:50%;background:${r.color};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#fff;flex-shrink:0">${ini(r.name)}</div>      <div style="flex:1;min-width:0">        <div style="font-size:12px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.name}</div>        <div style="font-size:10px;color:var(--t3)">${r.region} · ${r.bu}</div>      </div>      <div style="text-align:right;flex-shrink:0">        <div style="font-size:13px;font-weight:800;color:${col}">${r.att}%</div>        <div style="font-size:9px;color:var(--t3)">att.</div>      </div>    </div>`).join('');
}

/* ════ TEAM LEADERBOARD ════ */
let lbShown = 10;
let lbTypeFilter = 'all';

function setTypeFilter(type, btn){  
  lbTypeFilter = type;  
  document.querySelectorAll('.tp-type-pill').forEach(b=>b.classList.remove('active'));  
  btn.classList.add('active');  
  lbShown = 10;  
  renderRepGrid();
}

function setViewToggle(v, btn){  
  document.querySelectorAll('.tp-toggle-btn').forEach(b=>b.classList.remove('active'));  
  btn.classList.add('active');
}

function filterTeam(){ /* legacy no-op */ }

function renderRepGrid(){  
  lbShown = 10;  
  const reg = (document.getElementById('tpReg') || {value:''}).value;  
  const bu  = (document.getElementById('tpBU')  || {value:''}).value;  
  let reps = [...REPS];  
  if(reg) reps = reps.filter(r=>r.region===reg);  
  if(bu)  reps = reps.filter(r=>r.bu===bu);  
  if(lbTypeFilter !== 'all') reps = reps.filter(r=>r.type===lbTypeFilter);  
  reps.sort((a,b)=>b.att-a.att);  
  window._lbReps = reps;  
  renderLbRows();
}

function fmtMoney(val){  
  if(val >= 1) return '$' + val.toFixed(1) + 'M';  
  return '$' + (val * 1000).toFixed(1) + 'K';
}

/* ════ FILTER LOGIC ════ */
let activeTpType = 'Sales';
let activeTpView = 'Team';

/* ════ FILTER LOGIC WITH CLEAR BUTTON ════ */
function applyTpFilters() {
let filtered = [...REPS];

// Grab all current dropdown values
const svc = document.getElementById('newTpSvc').value;
const reg = document.getElementById('newTpReg').value;
const ctry = document.getElementById('newTpCtry').value;

// Filter by Dropdowns
if (svc) filtered = filtered.filter(r => r.bu.includes(svc) || r.name.includes(svc));
if (reg) filtered = filtered.filter(r => r.region === reg);
// (Country logic can be added here if REPS data gets a country property)

// Filter by Button Type
if (activeTpType && activeTpType !== 'All') {
    filtered = filtered.filter(r => r.type === activeTpType);
}

// Sort descending by Attainment
filtered.sort((a,b) => b.att - a.att);
window._lbReps = filtered;

// Show/Hide Clear Button dynamically
const clearBtn = document.getElementById('tpClearFilters');
if (clearBtn) {
    if (svc !== '' || reg !== '' || ctry !== '') {
        clearBtn.style.display = 'flex'; // Show if any dropdown is used
    } else {
        clearBtn.style.display = 'none'; // Hide if all dropdowns are empty
    }
}

// Re-render the table
renderLbRows();
}

// Function to reset all dropdowns to default
function clearTpFilters() {
document.getElementById('newTpSvc').value = '';
document.getElementById('newTpReg').value = '';
document.getElementById('newTpCtry').value = '';

applyTpFilters(); // Re-run the filter logic (which will hide the button again)
}

function setTpType(type, btn) {
  activeTpType = type;
  document.querySelectorAll('.tp-type-group .tp-f-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyTpFilters();
}

function setTpView(view, btn) {
  activeTpView = view;
  document.querySelectorAll('.tp-view-group .tp-f-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyTpFilters();
}

/* ════ EXACT PROTOTYPE TABLE RENDERING ════ */
function renderLbRows() {  
const reps  = window._lbReps || REPS.filter(r => r.type === activeTpType);  
const shown = reps.slice(0, lbShown);  
const wrap  = document.getElementById('lbShowMoreWrap');  
const btn   = document.getElementById('lbShowMoreBtn');

if(reps.length === 0){    
    document.getElementById('lbBody').innerHTML = `
    <div class="tp-empty" style="padding: 40px; text-align: center; color: #6b7280; font-size: 13px;">
        No results found. Adjust filters to see data.
    </div>`;    
    if(wrap) wrap.style.display = 'none';    
    return;  
}

// Mock data mapped EXACTLY to the numbers in your screenshot
const mockData = [
    { t: 5.0,  a: 0.1813, p: 4 },
    { t: 11.3, a: 0.450,  p: 4 },
    { t: 2.5,  a: 0.5296, p: 22 },
    { t: 1.3,  a: 0.2551, p: 19 },
    { t: 2.5,  a: 0.1125, p: 5 },
    { t: 3.8,  a: 0.150,  p: 4 },
    { t: 2.0,  a: 0.0688, p: 3 },
    { t: 3.5,  a: 0.1688, p: 5 },
    { t: 3.9,  a: 0.7399, p: 19 },
    { t: 2.4,  a: 0.6201, p: 26 },
    { t: 4.4,  a: 0.1938, p: 4 },
    { t: 1.8,  a: 1.400,  p: 82 },  // The orange 82% bar
    { t: 1.6,  a: 0.100,  p: 6 },
    { t: 1.3,  a: 0.075,  p: 6 },
    { t: 1.6,  a: 0.200,  p: 12 }
];

const fmtNumber = (val) => {
    const absVal = Math.abs(val);
    if (absVal >= 1) return '$' + absVal.toFixed(1).replace('.0','') + 'M';
    return '$' + (absVal * 1000).toFixed(1).replace('.0','') + 'K';
};

const getMultiInitials = (name) => {
    return name.split(' ').map(x => x[0]).join('').toUpperCase().slice(0, 3);
};

const swapSvg = `<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 4 21 8 17 12"></polyline><line x1="21" y1="8" x2="9" y2="8"></line><polyline points="7 20 3 16 7 12"></polyline><line x1="3" y1="16" x2="15" y2="16"></line></svg>`;

document.getElementById('lbBody').innerHTML = shown.map((r, index) => {    
    
    // Grab the exact math from the mock array so it matches the design perfectly
    const mock = mockData[index % mockData.length];
    const targetVal   = mock.t;
    const achievedVal = mock.a;
    const pct         = mock.p;
    
    const gapVal      = achievedVal - targetVal;
    const gapFmt      = gapVal < 0 ? "-" + fmtNumber(gapVal) : "+" + fmtNumber(gapVal);
    
    // Red for < 50%, Orange for >= 50%
    const progCol = pct < 50 ? '#ef4444' : '#f59e0b'; 
    const roleTxt = r.tenure >= 5 ? 'Sales Manager' : 'Business Unit';

    return `
    <div class="tp-row-new" onclick="inspectRep(${JSON.stringify(r).replace(/"/g,'&quot;')})">
        
        <div class="tp-n-wrap">
            <div class="tp-n-av">
                ${getMultiInitials(r.name)}
                <div class="tp-n-dot">${swapSvg}</div>
            </div>
            <div style="display:flex; align-items:center;">
                <div class="tp-n-name">${r.name}</div>
                <div class="tp-n-badge">Reassigned</div>
            </div>
        </div>
        
        <div class="tp-role">${roleTxt}</div>
        <div class="tp-val">${fmtNumber(targetVal)}</div>
        <div class="tp-val">${fmtNumber(achievedVal)}</div>
        
        <div class="tp-p-wrap">
            <div class="tp-p-bar"><div class="tp-p-fill" style="width:${pct}%; background:${progCol};"></div></div>
            <div class="tp-p-pct" style="color:${progCol};">${pct}%</div>
        </div>
        
        <div class="tp-gap">${gapFmt}</div>
        
        <div class="tp-status-wrap">
            <div class="tp-status-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                Behind
            </div>
        </div>
        
        <div class="tp-inc"><span class="tp-inc-sym">$</span> 0</div>
    </div>`;  
}).join('');

const remaining = reps.length - lbShown;  
if(wrap && btn){    
    if(remaining > 0){      
        wrap.style.display = 'block';      
        btn.textContent = `Show ${Math.min(remaining,10)} more  ·  ${remaining} remaining`;    
    } else {      
        wrap.style.display = 'none';    
    }  
}
}

function refreshTable(btn){  
  btn.style.transform = 'rotate(360deg)';  
  btn.style.transition = 'transform 0.5s ease';  
  lbShown = 10;  
  lbTypeFilter = 'all';  
  document.querySelectorAll('.tp-type-pill').forEach((b,i)=>b.classList.toggle('active',i===0));  
  document.getElementById('tpReg').value='';  
  document.getElementById('tpBU').value='';  
  renderRepGrid();  
  setTimeout(()=>{ btn.style.transform=''; btn.style.transition=''; }, 600);
}

function lbLoadMore(){  
  lbShown += 10;  
  renderLbRows();
}


function renderWRProduct() {
  const container = document.getElementById('wr-product');
  if (!container) return;

  // Forced all product bubbles to use the exact green hex code
  const data = [
      { name: "CRM", rate: 74, color: "#00A693", x: 10, y: 15 },
      { name: "CRM Plus", rate: 70, color: "#00A693", x: 40, y: 10 },
      { name: "Zoho ONE", rate: 68, color: "#00A693", x: 70, y: 20 },
      { name: "Analytics", rate: 65, color: "#00A693", x: 20, y: 55 },
      { name: "Desk", rate: 63, color: "#00A693", x: 50, y: 50 },
      { name: "People", rate: 60, color: "#00A693", x: 75, y: 60 },
      { name: "People Plus", rate: 58, color: "#00A693", x: 5, y: 70 },
      { name: "Projects", rate: 56, color: "#00A693", x: 32, y: 32 },
      { name: "Webinar", rate: 52, color: "#00A693", x: 60, y: 75 },
      { name: "Lens", rate: 48, color: "#00A693", x: 85, y: 40 }
  ];

  // Build the HTML structure - Removed the confusing color legend
  container.innerHTML = `
      <div class="bubble-chart-wrapper" id="bubble-canvas"></div>
  `;

  const canvas = document.getElementById('bubble-canvas');

  data.forEach((item, index) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Dynamic scaling: size ranges from ~80px to ~140px based on rate
      const size = 60 + (item.rate * 0.8); 
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.backgroundColor = item.color;
      bubble.style.left = `${item.x}%`;
      bubble.style.top = `${item.y}%`;
      
      // Staggered entry animation
      bubble.style.opacity = '0';
      bubble.style.transform = 'scale(0.5)';

      bubble.innerHTML = `
          <span class="name" style="color: #ffffff; font-weight: 700; font-size: 12px; text-align: center; display: block;">${item.name}</span>
          <span class="rate" style="color: #ffffff; font-weight: 800; font-size: 14px; text-align: center; display: block; margin-top: 2px;">${item.rate}%</span>
      `;

      canvas.appendChild(bubble);

      // Trigger animation
      setTimeout(() => {
          bubble.style.opacity = '1';
          bubble.style.transform = 'scale(1)';
      }, index * 50);
  });
}

function renderTenureBars(){  
  const buckets=[{l:"0–1 yr",min:0,max:1.9},{l:"2–3 yr",min:2,max:3.9},{l:"4–6 yr",min:4,max:6.9},{l:"7+ yr",min:7,max:99}];  
  document.getElementById('tenure-bars').innerHTML=buckets.map(b=>{    
    const g=REPS.filter(r=>r.tenure>=b.min&&r.tenure<=b.max);    
    const wr=g.length?Math.round(g.reduce((s,r)=>s+r.wr,0)/g.length):0;    
    const att=g.length?Math.round(g.reduce((s,r)=>s+r.att,0)/g.length):0;    
    const col=wr>=68?'var(--green)':wr>=58?'var(--amber)':'var(--red)';    
    return `<div class="pbar-row"><div class="pbar-label">${b.l} (${g.length} reps)</div><div class="pbar-track"><div class="pbar-fill" style="width:${wr}%;background:${col}"></div></div><div class="pbar-val" style="color:${col}; width: auto; white-space: nowrap; padding-left: 12px;">WR: ${wr}% &nbsp; Att: ${att}%</div></div>`;    }).join('');
}

function inspectRep(r){  
  const c=cls(r),col={top:'var(--green)',avg:'var(--amber)',critical:'var(--red)'}[c];  
  const chip=`<span class="chip ${c}">${c.toUpperCase()}</span>`;  
  document.getElementById('nodeBody').innerHTML=`    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">      <div style="width:44px;height:44px;border-radius:50%;background:${r.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff">${ini(r.name)}</div>      <div><div style="font-size:15px;font-weight:800;color:var(--t1)">${r.name}</div><div style="font-size:11px;color:var(--t3)">${r.mgr} · ${chip}</div></div>    </div>    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">      ${[['$'+r.rev+'M','Revenue',col],[''+r.att+'%','Attainment',col],[r.wr+'%','Win Rate','var(--accent)'],[r.deals,'Deals','var(--t1)']].map(([v,l,c])=>`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px"><div style="font-size:16px;font-weight:800;color:${c}">${v}</div><div style="font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;margin-top:2px">${l}</div></div>`).join('')}    </div>    ${[['Region',r.region],['BU Group',r.bu],['Tenure',r.tenure+'y'],['Type',r.type],['Commission','$'+r.comm+'M']].map(([l,v])=>`<div class="stat-row"><span class="stat-row-lbl">${l}</span><span class="stat-row-val">${v}</span></div>`).join('')}  `;
}

/* ════ PIPELINE ════ */
/* ════ PIPELINE ════ */
function renderFunnel(){  
const stages=[    
  {n:"Qualified",    deals:312,val:"$284M",pct:100, c:"#8b5cf6"},    
  {n:"Negotiation/legal",  deals:98, val:"$108M",pct:38,  c:"#10b981"}  
];  

document.getElementById('funnel').innerHTML = stages.map(s => 
  `<div class="funnel-row">
    <div class="funnel-stage-label">${s.n}</div>
    <div class="funnel-bar-track">
      <div class="funnel-bar-fill" style="width:${s.pct}%;background:${s.c}"></div>
    </div>
    <div class="funnel-meta">${s.deals} · ${s.val}</div>
  </div>`
).join('');
}

function renderAnomalies(){  
  document.getElementById('anomalies').innerHTML=ANOMALIES.map(a=>`<div class="anomaly-card"><div class="anomaly-icon">${a.icon}</div><div class="anomaly-body">${a.text}</div></div>`).join('');
}

function renderHighConv(){  
  document.getElementById('hconv').innerHTML=HIGH_CONV.map(h=>{    
    const pc=h.prob>=90?'var(--green)':h.prob>=80?'var(--accent2)':'var(--amber)';    
    return `<tr><td class="hi">${h.co}</td><td>${h.rep}</td><td>${h.stage}</td><td>${h.svc}</td><td>${h.reg}</td><td class="mono" style="color:var(--accent2)">${h.val}</td><td class="mono" style="color:${pc};font-weight:800">${h.prob}%</td><td class="mono">Mar–Apr</td></tr>`;  
  }).join('');
}

/* ════ REGIONS ════ */
function renderRegionCards(){  
  const sorted=[...REGIONS].sort((a,b)=>b.wr-a.wr);  
  const maxWR=sorted[0].wr;  
  document.getElementById('regionCards').innerHTML=`    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">    ${sorted.map((r,i)=>{      const col=r.c==='rg-high'?'var(--green)':r.c==='rg-mid'?'var(--accent2)':r.c==='rg-low'?'var(--red)':'var(--t3)';      const rankLabel=i===0?'#1 ':'i==='+i?' #'+(i+1)+' ':' #'+(i+1)+' ';      return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);${i%2===1?'padding-left:20px':''}" >        <div style="font-size:14px;width:20px;flex-shrink:0">${r.flag}</div>        <div style="width:88px;flex-shrink:0">          <div style="font-size:12px;font-weight:700;color:var(--t1)">${r.name}</div>          <div style="font-size:10px;color:var(--t3);margin-top:1px">${r.rev} · ${r.deals} deals</div>        </div>        <div style="flex:1;background:var(--border);border-radius:3px;height:6px;overflow:hidden">          <div style="width:${(r.wr/maxWR)*100}%;height:100%;background:${col};border-radius:3px;transition:width .7s ease"></div>        </div>        <div style="font-size:13px;font-weight:700;color:${col};width:38px;text-align:right;flex-shrink:0">${r.wr}%</div>        <div style="font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;background:${col}18;color:${col};border:1px solid ${col}40;flex-shrink:0;width:32px;text-align:center">#${i+1}</div>      </div>`;    }).join('')}    </div>`;
}

function renderWinMatrix(){  
  const regions=['India S','India N','US East','APAC','LATAM','ANZ'];  
  const services=Object.keys(WIN_MATRIX);  
  const hcClass=v=>v>=74?'hc-green':v>=65?'hc-teal':v>=55?'hc-amber':'hc-red';  
  const html=`<table class="heat-table">    <thead><tr>      <th style="padding:6px 4px">Product</th>      ${regions.map(r=>`<th>${r}</th>`).join('')}    </tr></thead>    <tbody>      ${services.map(svc=>`<tr>        <td class="heat-row-label">${svc}</td>        ${regions.map(r=>{const v=WIN_MATRIX[svc][r];return `<td><div class="heat-cell ${hcClass(v)}">${v}%</div></td>`;}).join('')}      </tr>`).join('')}    </tbody>  </table>`;  
  document.getElementById('heatMatrix').innerHTML=html;
}

function renderTopLogos(){  
  document.getElementById('topLogos').innerHTML=LOGOS.map(l=>`<div class="logo-row"><div class="logo-icon">${l.icon}</div><div style="flex:1;min-width:0"><div class="logo-name">${l.name}</div><div class="logo-sub">${l.region}</div></div><div class="logo-tags"><span class="logo-tag r">${l.region}</span><span class="logo-tag s">${l.svc}</span></div><div class="logo-rev">${l.rev}</div></div>`).join('');
}

/* ════ ORG CHART ════ */
function renderHier(){  
  const tree=document.getElementById('hierTree');  
  if(!tree) return;
  const vpA=parseFloat(HIER.att)>=100?'var(--green)':'var(--amber)';  
  tree.innerHTML=`    <div class="h-vp-card" onclick="showNodeDetail('vp')">      <div class="node-head">        <div class="node-av" style="background:linear-gradient(135deg,#3b82f6,#8b5cf6)">${ini(HIER.name)}</div>        <div class="node-info"><div class="node-name">${HIER.name}</div><div class="node-role">${HIER.title}</div></div>        <div class="node-kpis">          <div class="node-kpi"><div class="node-kpi-val" style="color:var(--accent2)">${HIER.rev}</div><div class="node-kpi-lbl">Revenue</div></div>          <div class="node-kpi"><div class="node-kpi-val">${HIER.deals}</div><div class="node-kpi-lbl">Deals</div></div>          <div class="node-kpi"><div class="node-kpi-val" style="color:var(--green)">${HIER.wr}</div><div class="node-kpi-lbl">Win Rate</div></div>          <div class="node-kpi"><div class="node-kpi-val" style="color:${vpA}">${HIER.att}</div><div class="node-kpi-lbl">Attainment</div></div>        </div>      </div>    </div>    <div class="h-rd-wrap">      ${HIER.children.map(rd=>buildRDCard(rd)).join('')}    </div>`;  
  renderLevelSum();
}

function buildRDCard(rd){  
  const sid='rd_'+rd.name.replace(/\W/g,'');  
  const attF=parseFloat(rd.att),attC=attF>=110?'var(--green)':attF>=80?'var(--amber)':'var(--red)';  
  return `    <div class="h-rd-card" id="${sid}" onclick="toggleRD('${sid}',${JSON.stringify(rd).replace(/"/g,'&quot;')})">      <div class="node-head">        <span class="toggle-arrow" id="arr_${sid}">▶</span>        <div class="node-av" style="background:${rd.color}">${ini(rd.name)}</div>        <div class="node-info">          <div class="node-name">${rd.name}</div>          <div class="node-role">${rd.title}</div>          <div style="font-size:10px;color:var(--t3);margin-top:2px">${rd.region}</div>        </div>        <div class="node-kpis">          <div class="node-kpi"><div class="node-kpi-val" style="color:var(--accent2)">${rd.rev}</div><div class="node-kpi-lbl">Revenue</div></div>          <div class="node-kpi"><div class="node-kpi-val">${rd.deals}</div><div class="node-kpi-lbl">Deals</div></div>          <div class="node-kpi"><div class="node-kpi-val" style="color:${rd.color}">${rd.wr}</div><div class="node-kpi-lbl">Win Rate</div></div>          <div class="node-kpi"><div class="node-kpi-val" style="color:${attC}">${rd.att}</div><div class="node-kpi-lbl">Attainment</div></div>        </div>      </div>    </div>    <div class="h-ae-wrap" id="ch_${sid}">      <div style="font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;padding:6px 0 8px">${rd.aes.length} AEs under ${rd.name.split(' ')[0]}</div>      <div class="h-ae-grid">${rd.aes.map(ae=>buildAEMini(ae)).join('')}</div>    </div>`;
}

function buildAEMini(ae){  
  const sid='ae_'+ae.name.replace(/\W/g,'');  
  const col={top:'#10b981',avg:'#f59e0b',critical:'#ef4444'}[ae.type];  
  const attC=ae.att>=110?'var(--green)':ae.att>=80?'var(--amber)':'var(--red)';  
  const aeStr=JSON.stringify(ae).replace(/"/g,'&quot;');  
  return `<div class="h-ae-mini m-${ae.type}" id="${sid}" onclick="showAEDetail(${aeStr})">    <div class="h-ae-av" style="background:${col}">${ini(ae.name)}</div>    <div class="h-ae-info"><div class="h-ae-name" title="${ae.name}">${ae.name}</div><div class="h-ae-sub">${ae.title}</div></div>    <div class="h-ae-kpis"><div class="h-ae-rev">${ae.rev}</div><div class="h-ae-att" style="color:${attC}">${ae.att}%</div></div>  </div>`;
}

function toggleRD(sid,rd){  
  event.stopPropagation();  
  const el=document.getElementById(sid);  
  const ch=document.getElementById('ch_'+sid);  
  const arr=document.getElementById('arr_'+sid);  
  const isOpen=ch.classList.contains('open');  
  ch.classList.toggle('open',!isOpen);  
  el.classList.toggle('open',!isOpen);  
  arr.textContent=isOpen?'▶':'▼';  
  showRDDetail(rd);
}

function showNodeDetail(type){  
  const n=HIER;  
  document.getElementById('nodeBody').innerHTML=`    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">      <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff">${ini(n.name)}</div>      <div><div style="font-size:15px;font-weight:800;color:var(--t1)">${n.name}</div><div style="font-size:11px;color:var(--t3)">${n.title}</div></div>    </div>    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">      ${[['$382M','Revenue','var(--accent2)'],['1,248','Deals','var(--t1)'],['64.8%','Win Rate','var(--green)'],['89%','Attainment','var(--amber)']].map(([v,l,c])=>`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px"><div style="font-size:16px;font-weight:800;color:${c}">${v}</div><div style="font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;margin-top:2px">${l}</div></div>`).join('')}    </div>    <div class="stat-row"><span class="stat-row-lbl">Direct Reports</span><span class="stat-row-val">4 Regional Directors</span></div>    <div class="stat-row"><span class="stat-row-lbl">Total AEs</span><span class="stat-row-val">27</span></div>    <div class="stat-row"><span class="stat-row-lbl">Organization</span><span class="stat-row-val">Zoho Corp — Global</span></div>`;
}

function renderRegionStats(){  
  const mkRows=(data)=>data.map(d=>`<div class="pbar-row"><div class="pbar-label">${d.l}</div><div class="pbar-track"><div class="pbar-fill" style="width:${d.p}%;background:${d.c}"></div></div><div class="pbar-val" style="color:${d.c}">${d.v}</div></div>`).join('');  
  document.getElementById('best-region').innerHTML=mkRows([{l:"Revenue",p:82,c:"var(--green)",v:"$98M"},{l:"Win Rate",p:76,c:"var(--green)",v:"76%"},{l:"Deals Closed",p:62,c:"var(--green)",v:"348"},{l:"Attainment",p:100,c:"var(--green)",v:"112%"},{l:"Avg Deal Size",p:78,c:"var(--green)",v:"$28.2K"}]);  
  document.getElementById('worst-region').innerHTML=mkRows([{l:"Revenue",p:18,c:"var(--red)",v:"$22M"},{l:"Win Rate",p:52,c:"var(--red)",v:"52%"},{l:"Deals Closed",p:14,c:"var(--red)",v:"98"},{l:"Attainment",p:68,c:"var(--red)",v:"68%"},{l:"At-Risk Deals",p:80,c:"var(--red)",v:"8 active"}]);
}

function showRDDetail(rd){  
  const attF=parseFloat(rd.att),attC=attF>=110?'var(--green)':attF>=80?'var(--amber)':'var(--red)';
  const totalDeals=rd.deals;  
  const wrNum=parseFloat(rd.wr);  
  const totalOpps=Math.round(totalDeals/(wrNum/100));  
  const qual=Math.round(totalOpps*0.70);  
  const prop=Math.round(totalOpps*0.46);  
  const nego=Math.round(totalOpps*0.26);
  const rdProducts={    
    'India S':   {best:{p:'CRM',v:80},weak:{p:'People',v:68}},    
    'India N / US':  {best:{p:'CRM Plus',v:74},weak:{p:'Webinar',v:52}},    
    'India Central / APAC': {best:{p:'Zoho ONE',v:72},weak:{p:'Lens',v:48}},    
    'ANZ / LATAM / Brazil / Canada': {best:{p:'Desk',v:60},weak:{p:'People',v:44}},  
  };  
  const prods=rdProducts[rd.region]||{best:{p:'CRM',v:70},weak:{p:'People',v:55}};
  const topC=rd.aes.filter(a=>a.type==='top').length;  
  const avgC=rd.aes.filter(a=>a.type==='avg').length;  
  const critC=rd.aes.filter(a=>a.type==='critical').length;
  const suggestions=[];  
  if(critC>0) suggestions.push({icon:'→',text:`${critC} rep${critC>1?'s':''} need deal coaching — focus on proposal-to-close stage`});  
  if(attF<100) suggestions.push({icon:'→',text:`Boost pipeline by ${Math.round((100-attF)*2)}% to close the attainment gap before EoQ`});  
  if(prods.weak.v<60) suggestions.push({icon:'→',text:`${prods.weak.p} win rate at ${prods.weak.v}% — pricing playbook review recommended`});  
  if(attF>=110) suggestions.push({icon:'↑',text:`Strong ${attF}% attainment — consider stretch target for top performers`});
  const fBar=(label,val,maxV,col)=>`<div style="display:flex;align-items:center;gap:8px;padding:5px 0">    <div style="font-size:10px;color:var(--t3);width:80px;flex-shrink:0">${label}</div>    <div style="flex:1;background:var(--surface3);border-radius:4px;height:7px;overflow:hidden">      <div style="width:${(val/maxV)*100}%;height:100%;background:${col};border-radius:4px"></div>    </div>    <div style="font-size:10px;font-weight:700;color:var(--t1);width:32px;text-align:right">${val}</div>  </div>`;
  document.getElementById('nodeBody').innerHTML=`    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">      <div style="width:44px;height:44px;border-radius:50%;background:${rd.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff">${ini(rd.name)}</div>      <div style="flex:1;min-width:0">        <div style="font-size:15px;font-weight:800;color:var(--t1)">${rd.name}</div>        <div style="font-size:11px;color:var(--t3);margin-top:2px">${rd.title}</div>      </div>    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">      ${[[rd.rev,'Revenue','var(--accent2)'],[rd.att,'Attainment',attC],[rd.wr,'Win Rate',rd.color],[rd.deals+'','Deals','var(--t1)']].map(([v,l,c])=>`      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px">        <div style="font-size:16px;font-weight:800;color:${c}">${v}</div>        <div style="font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;margin-top:2px">${l}</div>      </div>`).join('')}    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">👥 Team Composition</div>    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:16px">      <div style="background:var(--green-dim);border:1px solid var(--green);border-radius:10px;padding:10px;text-align:center">        <div style="font-size:20px;font-weight:800;color:var(--green)">${topC}</div>        <div style="font-size:10px;color:var(--t3)">Top</div>      </div>      <div style="background:var(--amber-dim);border:1px solid var(--amber);border-radius:10px;padding:10px;text-align:center">        <div style="font-size:20px;font-weight:800;color:var(--amber)">${avgC}</div>        <div style="font-size:10px;color:var(--t3)">On Track</div>      </div>      <div style="background:var(--red-dim);border:1px solid var(--red);border-radius:10px;padding:10px;text-align:center">        <div style="font-size:20px;font-weight:800;color:var(--red)">${critC}</div>        <div style="font-size:10px;color:var(--t3)">Critical</div>      </div>    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">🔻 Team Pipeline Funnel</div>    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:16px">      ${fBar('Prospecting',totalOpps,totalOpps,'#3b82f6')}      ${fBar('Qualified',qual,totalOpps,'#8b5cf6')}      ${fBar('Proposed',prop,totalOpps,'#f59e0b')}      ${fBar('Negotiation',nego,totalOpps,'#06b6d4')}      ${fBar('Closed Won',totalDeals,totalOpps,rd.color)}      <div style="font-size:10px;color:var(--t3);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">        Team win rate <strong style="color:${attC}">${rd.wr}</strong> · ${totalDeals} closed from ~${totalOpps} opportunities      </div>    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">📦 Product Performance</div>    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">      <div style="background:var(--green-dim);border:1px solid var(--green);border-radius:10px;padding:12px">        <div style="font-size:9px;font-weight:700;color:var(--green);text-transform:uppercase;margin-bottom:4px">✅ Best Conversion</div>        <div style="font-size:14px;font-weight:800;color:var(--t1)">${prods.best.p}</div>        <div style="font-size:18px;font-weight:800;color:var(--green)">${prods.best.v}%</div>        <div style="font-size:9px;color:var(--t3)">win rate in region</div>      </div>      <div style="background:var(--red-dim);border:1px solid var(--red);border-radius:10px;padding:12px">        <div style="font-size:9px;font-weight:700;color:var(--red);text-transform:uppercase;margin-bottom:4px">⚠️ Needs Focus</div>        <div style="font-size:14px;font-weight:800;color:var(--t1)">${prods.weak.p}</div>        <div style="font-size:18px;font-weight:800;color:var(--red)">${prods.weak.v}%</div>        <div style="font-size:9px;color:var(--t3)">win rate in region</div>      </div>    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">💡 Recommendations</div>    <div>      ${suggestions.map(s=>`      <div style="display:flex;gap:10px;align-items:flex-start;padding:9px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;margin-bottom:7px">        <span style="font-size:16px;flex-shrink:0">${s.icon}</span>        <span style="font-size:12px;color:var(--t2);line-height:1.5">${s.text}</span>      </div>`).join('')}    </div>`;
}

function showAEDetail(ae){  
  document.querySelectorAll('.h-ae-mini').forEach(c=>c.classList.remove('sel'));  
  const sid='ae_'+ae.name.replace(/\W/g,'');  
  const card=document.getElementById(sid);if(card)card.classList.add('sel');
  const col={top:'#10b981',avg:'#f59e0b',critical:'#ef4444'}[ae.type];  
  const attC=ae.att>=110?'var(--green)':ae.att>=80?'var(--amber)':'var(--red)';  
  const chip=`<span class="chip ${ae.type}">${ae.type.toUpperCase()}</span>`;
  const avgWR=63, avgAtt=100, avgRev=14.2, avgDeals=82;  
  const dealSize=(ae.rev/ae.deals).toFixed(1);  
  const avgDealSize=(avgRev/avgDeals).toFixed(1);  
  const wrVsAvg=parseInt(ae.wr)-avgWR;  
  const attVsAvg=ae.att-avgAtt;  
  const revVsAvg=(parseFloat(ae.rev)-avgRev).toFixed(1);
  const totalOpps=Math.round(ae.deals/(parseInt(ae.wr)/100));  
  const qualified=Math.round(totalOpps*0.72);  
  const proposed=Math.round(totalOpps*0.48);  
  const negotiated=Math.round(totalOpps*0.28);  
  const closed=ae.deals;
  const qoqWR=ae.type==='top'?'+3.2pp':ae.type==='avg'?'+0.8pp':'-4.1pp';  
  const qoqRev=ae.type==='top'?'↑ 12%':ae.type==='avg'?'↑ 3%':'↓ 8%';  
  const qoqDeals=ae.type==='top'?'+14':ae.type==='avg'?'+4':'-9';
  const strengths=[], gaps=[];  
  if(parseInt(ae.wr)>avgWR+5) strengths.push({icon:'↑',text:'Win rate '+wrVsAvg+'pp above team avg'});  
  if(ae.att>110) strengths.push({icon:'↑',text:'Attainment '+ae.att+'% — overachieving target'});  
  if(parseFloat(dealSize)>parseFloat(avgDealSize)+2) strengths.push({icon:'→',text:'Avg deal size $'+dealSize+'M vs team avg $'+avgDealSize+'M'});  
  if(ae.att>105) strengths.push({icon:'↑',text:'Consistent pipeline velocity'});  
  if(parseInt(ae.wr)<avgWR-5) gaps.push({icon:'↓',text:'Win rate '+Math.abs(wrVsAvg)+'pp below team avg'});  
  if(ae.att<80) gaps.push({icon:'!',text:'Attainment '+(100-ae.att)+'pp below target — needs focus'});  
  if(parseFloat(dealSize)<parseFloat(avgDealSize)-2) gaps.push({icon:'→',text:'Deal size $'+dealSize+'M — below avg $'+avgDealSize+'M'});  
  if(ae.type==='critical') gaps.push({icon:'!',text:'Pipeline conversion needs immediate coaching'});  
  if(ae.type==='avg'&&strengths.length===0) strengths.push({icon:'✓',text:'Stable performance — within target range'});
  const funnelBar=(n,max,c)=>`<div style="display:flex;align-items:center;gap:8px;padding:5px 0">    <div style="font-size:10px;color:var(--t3);width:72px;flex-shrink:0">${n.label}</div>    <div style="flex:1;background:var(--surface3);border-radius:4px;height:7px;overflow:hidden">      <div style="width:${(n.val/max)*100}%;height:100%;background:${c};border-radius:4px"></div>    </div>    <div style="font-size:10px;font-weight:700;color:var(--t1);width:28px;text-align:right">${n.val}</div>  </div>`;
  const cmpRow=(label,repVal,avg,unit='',higherBetter=true)=>{    
    const diff=parseFloat(repVal)-parseFloat(avg);    
    const good=higherBetter?diff>=0:diff<=0;    
    const col2=good?'var(--green)':'var(--red)';    
    const arrow=diff>=0?'▲':'▼';    
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)">      <span style="font-size:11px;color:var(--t3)">${label}</span>      <div style="display:flex;align-items:center;gap:8px">        <span style="font-size:11px;color:var(--t2)">Avg: ${avg}${unit}</span>        <span style="font-size:12px;font-weight:800;color:${col2}">${arrow} ${repVal}${unit}</span>      </div>    </div>`;  
  };
  document.getElementById('nodeBody').innerHTML=`    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">      <div style="width:44px;height:44px;border-radius:50%;background:${col};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff">${ini(ae.name)}</div>      <div style="flex:1;min-width:0">        <div style="font-size:15px;font-weight:800;color:var(--t1)">${ae.name}</div>        <div style="font-size:11px;color:var(--t3);margin-top:2px">${ae.title} · ${chip}</div>      </div>    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">      ${[[ae.rev,'Revenue','var(--accent2)'],[ae.att+'%','Attainment',attC],[ae.wr,'Win Rate',col],[ae.deals+'','Deals','var(--t1)']].map(([v,l,c])=>`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px"><div style="font-size:16px;font-weight:800;color:${c}">${v}</div><div style="font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;margin-top:2px">${l}</div></div>`).join('')}    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">📅 QoQ Trend</div>    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:16px">      ${[['Win Rate',qoqWR],['Revenue',qoqRev],['Deals',qoqDeals]].map(([l,v])=>{        const isUp=v.includes('↑')||v.startsWith('+');        const isDn=v.includes('↓')||v.startsWith('-');        const c2=isUp?'var(--green)':isDn?'var(--red)':'var(--t2)';        return `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:9px;text-align:center">          <div style="font-size:13px;font-weight:800;color:${c2}">${v}</div>          <div style="font-size:9px;color:var(--t3);margin-top:2px">${l}</div>        </div>`;      }).join('')}    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">🔻 Personal Conversion Funnel</div>    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:16px">      ${funnelBar({label:'Prospecting',val:totalOpps},totalOpps,'#3b82f6')}      ${funnelBar({label:'Qualified',val:qualified},totalOpps,'#8b5cf6')}      ${funnelBar({label:'Proposed',val:proposed},totalOpps,'#f59e0b')}      ${funnelBar({label:'Negotiation',val:negotiated},totalOpps,'#06b6d4')}      ${funnelBar({label:'Closed Won',val:closed},totalOpps,col)}      <div style="font-size:10px;color:var(--t3);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">        Avg deal size <strong style="color:var(--t1)">$${dealSize}M</strong> · Conversion <strong style="color:${col}">${ae.wr}%</strong>      </div>    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">📊 vs Team Average</div>    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:16px">      ${cmpRow('Win Rate',ae.wr+'%',avgWR+'%','')}      ${cmpRow('Revenue',ae.rev+'M',avgRev+'M','')}      ${cmpRow('Deals',ae.deals+'',avgDeals+'')}      ${cmpRow('Deal Size','$'+dealSize+'M','$'+avgDealSize+'M','')}    </div>
    ${strengths.length?`<div style="font-size:11px;font-weight:800;color:var(--green);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px">✅ Strengths</div>    <div style="margin-bottom:12px">${strengths.map(s=>`<div style="display:flex;gap:8px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border)"><span style="flex-shrink:0">${s.icon}</span><span style="font-size:11px;color:var(--t2)">${s.text}</span></div>`).join('')}</div>`:''}    ${gaps.length?`<div style="font-size:11px;font-weight:800;color:var(--red);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px">⚠️ Focus Areas</div>    <div>${gaps.map(g=>`<div style="display:flex;gap:8px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border)"><span style="flex-shrink:0">${g.icon}</span><span style="font-size:11px;color:var(--t2)">${g.text}</span></div>`).join('')}</div>`:''}  `;
}

function renderLevelSum(){  
  document.getElementById('levelSum').innerHTML=[    
    {l:"CEO / VP",n:1,wr:"64.8%",rev:"$382M",c:"var(--accent)"},    
    {l:"Regional Directors",n:4,wr:"66.9%",rev:"$408M",c:"var(--purple)"},    
    {l:"Account Executives",n:27,wr:"63.4%",rev:"$382M",c:"var(--green)"},  
  ].map(x=>`<div class="stat-row"><div style="display:flex;align-items:center;gap:8px"><span class="chip info" style="background:${x.c}18;color:${x.c};border-color:${x.c}">${x.n}</span><div><div style="font-size:12px;font-weight:700;color:var(--t1)">${x.l}</div><div style="font-size:10px;color:var(--t3)">Avg WR: ${x.wr}</div></div></div><div style="font-size:12px;font-weight:800;color:var(--accent2)">${x.rev}</div></div>`).join('');
}

/* ════ RIGHT PANEL AND LIVE FEED UPDATES ════ */
function renderActivityFeed(){  
const el=document.getElementById('activityFeed');  
if(!el)return;  
el.innerHTML=ACTIVITY.map(a=>`
  <div class="feed-item">
    <div class="feed-avatar" style="background:var(--surface2); color:var(--t1); border:1px solid var(--border);">${a.av}</div>
    <div class="feed-body">
      <div class="feed-title">${a.text}</div>
      <div><span class="feed-tag">#${a.tag.toLowerCase()}</span></div>
    </div>
    <div class="feed-time">${a.time}</div>
  </div>`).join('');
}

function switchRC(key){  
  if(!document.getElementById('rcContent'))return;  
  rcKey=key; rcN=4;  
  ['rcT1','rcT2','rcT3'].forEach((id,i)=>{    
    const btn=document.getElementById(id);    
    const isActive=['service','region','bu'][i]===key;    
    btn.style.borderBottomColor=isActive?'var(--accent)':'transparent';    
    btn.style.color=isActive?'var(--accent)':'var(--t3)';  
  });
}

function renderRC(){  
  if(!document.getElementById('rcContent'))return;  
  const data=RC_DATA[rcKey].slice(0,rcN);  
  document.getElementById('rcContent').innerHTML=data.map(d=>`<div class="pbar-row"><div class="pbar-label" title="${d.l}">${d.l}</div><div class="pbar-track"><div class="pbar-fill" style="width:${d.v}%;background:${d.c}"></div></div><div class="pbar-val" style="color:${d.c}">${d.v}%</div></div>`).join('');  
  const total=RC_DATA[rcKey].length;  
  const btn=document.getElementById('rcMore');  
  if(btn){btn.style.display=rcN>=total?'none':'block';btn.textContent=`▼ ${total-rcN} more`;}
}

function rcShowMore(){ 
  if(!document.getElementById('rcContent'))return; 
  rcN+=3; 
  renderRC(); 
}

/* ════ TARGETS ════ */
function renderTargetRows(){  
  document.getElementById('targetRows').innerHTML=`    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr auto;gap:8px;padding-bottom:8px;border-bottom:1px solid var(--border-hi)">      ${['Rep','Region','Type','Rev Target','Deals',''].map(h=>`<div style="font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase">${h}</div>`).join('')}    </div>    ${REPS.slice(0,8).map((r,i)=>`    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr auto;gap:8px;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)" id="tr_${i}">      <div><div style="font-size:13px;font-weight:700;color:var(--t1)">${r.name}</div><div style="font-size:10px;color:var(--t3)">${r.mgr}</div></div>      <div style="font-size:11px;font-weight:600;color:var(--t2)">${r.region}</div>      <div><select class="form-input" style="padding:6px;font-size:11px"><option ${r.type==='Sales'?'selected':''}>Sales</option><option ${r.type==='Partner'?'selected':''}>Partner</option><option ${r.type==='Renewal'?'selected':''}>Renewal</option></select></div>      <div><input class="form-input" type="text" style="padding:6px;font-size:11px" value="$${(r.rev/0.89).toFixed(1)}M"></div>      <div><input class="form-input" type="number" style="padding:6px;font-size:11px" value="${Math.round(r.deals/0.89)}"></div>      <div><button onclick="document.getElementById('tr_${i}').querySelectorAll('input').forEach(e=>e.value='')" style="background:none;border:1px solid var(--border);color:var(--t3);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:11px">✕</button></div>    </div>`).join('')}`;
}

function renderTvsA(){  
  document.getElementById('tvsaBody').innerHTML=REPS.slice(0,12).map(r=>{    
    const t=(r.rev/0.89).toFixed(1),gap=(r.rev-t).toFixed(1);    
    const c=cls(r),col={top:'var(--green)',avg:'var(--amber)',critical:'var(--red)'}[c];    
    return `<tr><td class="hi">${r.name}</td><td style="font-size:10px;color:var(--t3)">${r.type}</td><td>${r.region}</td><td>${r.bu}</td><td class="mono">$${t}M</td><td class="mono" style="color:var(--accent2)">$${r.rev}M</td><td class="mono" style="color:${Number(gap)<0?'var(--red)':'var(--green)'}">${Number(gap)<0?'':'+'}$${Math.abs(gap)}M</td><td class="mono" style="color:${col};font-weight:800">${r.att}%</td><td><span class="chip ${c}">${c.toUpperCase()}</span></td></tr>`;  
  }).join('');
}

function setPill(btn){ 
  btn.closest('.tpill-group').querySelectorAll('.tpill').forEach(b=>b.classList.remove('active')); 
  btn.classList.add('active'); 
}

function saveT(e){
  const b=e.currentTarget;
  b.textContent='✅ Saved!';
  setTimeout(()=>b.textContent='💾 Save Targets',2000);
}

function distT(e){
  const b=e.currentTarget;
  b.textContent='⚡ Distributing…';
  setTimeout(()=>b.textContent='⚡ Auto-Distribute',1800);
}

function copyT(e){
  const b=e.currentTarget;
  b.textContent='✅ Copied!';
  setTimeout(()=>b.textContent='📋 Copy Last Quarter',2000);
}

/* ════ LIVE ACTIVITY ════ */
function openLA() { document.body.classList.add('la-open'); }
function closeLA() { document.body.classList.remove('la-open'); }

let laRcKey = 'service';
let laRcN   = 3;

function switchLARC(key){  
  laRcKey = key; 
  laRcN = 3;  
  ['laRcT1','laRcT2','laRcT3'].forEach((id,i)=>{    
    const btn = document.getElementById(id);    
    const isActive = ['service','region','bu'][i] === key;    
    btn.style.borderBottomColor = isActive ? 'var(--accent)' : 'transparent';    
    btn.style.color = isActive ? 'var(--accent)' : 'var(--t3)';  
  });  
  renderLARc();
}

function renderLARc(){  
  const data = RC_DATA[laRcKey];  
  document.getElementById('laRcContent').innerHTML = data.map(d=>`    
    <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">      
      
      <div style="width:92px;flex-shrink:0;font-size:11px;font-weight:600;color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${d.l}">${d.l}</div>      
      
      <div style="flex:1; max-width:110px; background:var(--border);border-radius:3px;height:4px;overflow:hidden">        
        <div style="width:${d.v}%;height:100%;background:#00A693;border-radius:3px"></div>      
      </div>      
      
      <div style="font-size:10px;font-weight:800;color:var(--t1);width:auto;text-align:right;flex-shrink:0;white-space:nowrap">${d.rev} · ${d.v}%</div>    
    
    </div>`).join('');  
}

function laRcShowMore(){ 
  laRcN += 3; 
  renderLARc(); 
}

function renderLAFeed(){  
  const el = document.getElementById('laFeed');
  if(!el) return;
  el.innerHTML = ACTIVITY.map(a=>`
    <div class="la-item">
      <div class="la-av" style="background:var(--surface2); color:var(--t1); border:1px solid var(--border);">${a.av}</div>
      <div class="la-content">
        <div class="la-text">${a.text}</div>
        <div class="la-meta">
          <span class="la-tag">#${a.tag.toLowerCase()}</span>
          <span class="la-time">${a.time}</span>
        </div>
      </div>
    </div>`).join('');  
  renderLARc();
}

/* ════ QUICK STATS ════ */
function toggleQS(){  
  document.getElementById('qsPanel').classList.toggle('open');
}

// Close when clicking outside
document.addEventListener('click', e => {  
  const panel=document.getElementById('qsPanel');  
  const trigger=document.querySelector('.qs-trigger');  
  if(panel && trigger && panel.classList.contains('open') && !panel.contains(e.target) && !trigger.contains(e.target)){    
    panel.classList.remove('open');  
  }
});

/* ════ HOME KPI ANIMATIONS ════ */
function animateHomeKPIs() {
  const revBar = document.getElementById('kpi-rev-bar');
  if (revBar) {
    setTimeout(() => {
      revBar.style.width = '89%';
    }, 100);
  }

  const trackBar = document.getElementById('kpi-team-track');
  const riskBar = document.getElementById('kpi-team-risk');
  const behindBar = document.getElementById('kpi-team-behind');

  setTimeout(() => {
    if(trackBar) trackBar.style.width = '52%';
    if(riskBar) riskBar.style.width = '33%';
    if(behindBar) behindBar.style.width = '15%';
  }, 200);
}



/* ════ SAFE INIT ════ */
window.addEventListener('DOMContentLoaded', () => {
  // 1. Core Visuals
  if (document.getElementById('kpi-rev-bar')) animateHomeKPIs();  
  if (document.getElementById('revChart')) drawRevChart();
  
  // 2. YOUR NEW COMPONENT (Manager Attainment)
  // This targets id="mgr-bars" in your HTML
  if (document.getElementById('mgr-bars')) {
      renderManagerPulse(); 
  } 
  
  // 4. Data Tables & Charts
  if (document.getElementById('wr-product')) renderWRProduct();  
  if (document.getElementById('lbBody')) renderRepGrid();      
  // 5. Section Specifics
  if (document.getElementById('funnel')) renderFunnel();  
  if (document.getElementById('anomalies')) renderAnomalies();  
  if (document.getElementById('hconv')) renderHighConv();  
  
  // 6. Fix for the Console Crash (Activity Feed)
  if (document.getElementById('laFeed')) renderLAFeed();
  
  // 7. Regional / Org Logic
  renderRegionCards();  
  renderRegionStats();  
  renderWinMatrix();  
  renderTopLogos();  
  renderHier();  
});

window.addEventListener('resize', () => {  
  // Handle Pipeline Tab if active
  if(document.getElementById('sec-pipeline').classList.contains('active')) {
      drawProdChart();
  }

  // Handle Leadership Tab if active
  if(document.getElementById('sec-targets').classList.contains('active')) {
      // Only call if the function exists in leadership.js
      if(typeof renderLeadershipDashboard === 'function') {
          renderLeadershipDashboard();
      }
  }
});

/* ════ AGENT PERFORMANCE DASHBOARD LOGIC ════ */
const apAgents = [
  "Benjamin Smith", "Edward Robinson", "Harry Clark",
  "Leo Anderson", "Lucas Martin", "Samuel Walker"
];

const apMetrics = [
  { 
      title: "NEW + EXISTING BUSINESS", 
      val: "$128.4K", 
      mom: "115% <svg viewBox='0 0 24 24' width='14' height='14' stroke='currentColor' fill='none' stroke-width='2.5' style='vertical-align:middle; margin-left:2px; margin-bottom:2px;'><polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline><polyline points='17 6 23 6 23 12'></polyline></svg>", 
      rank: "🏆 2nd of 12", 
      color: "#a3c0a3", trend: "up", momLbl: "QUOTA ATTAINMENT", rankLbl: "TEAM RANK", 
      desc: "Total combined closed-won revenue from both net-new logos and current customer accounts." 
  },
  { 
      title: "NEW BUSINESS REVENUE", 
      val: "$85.0K", 
      mom: "108% <svg viewBox='0 0 24 24' width='14' height='14' stroke='currentColor' fill='none' stroke-width='2.5' style='vertical-align:middle; margin-left:2px; margin-bottom:2px;'><polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline><polyline points='17 6 23 6 23 12'></polyline></svg>", 
      rank: "🏆 1st of 12", 
      color: "#92b4d2", trend: "up", momLbl: "QUOTA ATTAINMENT", rankLbl: "TEAM RANK", 
      desc: "Revenue generated strictly from newly acquired customers." 
  },
  { 
      title: "EXISTING BUSINESS", 
      val: "$43.4K", 
      mom: "105% <svg viewBox='0 0 24 24' width='14' height='14' stroke='currentColor' fill='none' stroke-width='2.5' style='vertical-align:middle; margin-left:2px; margin-bottom:2px;'><polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline><polyline points='17 6 23 6 23 12'></polyline></svg>", 
      rank: "5th of 12", 
      color: "#b4a7d6", trend: "up", momLbl: "QUOTA ATTAINMENT", rankLbl: "TEAM RANK", 
      desc: "Revenue maintained and expanded from the current customer base (Upgrades + Renewals)." 
  },
  { 
      title: "AVERAGE DEAL SIZE", 
      val: "$14.2K", 
      mom: "▲ $1.2K", 
      rank: "Top 10%", 
      color: "#d9d282", trend: "up", momLbl: "VS LAST QUARTER", rankLbl: "PERCENTILE", 
      desc: "Average monetary value of closed-won deals across all business types." 
  },
  { 
      title: "UPGRADE REVENUE", 
      val: "$24.2K", 
      mom: "122% 📈", 
      rank: "🏆 1st of 12", 
      color: "#95c2b7", trend: "up", momLbl: "EXPANSION TARGET", rankLbl: "TEAM RANK", 
      desc: "Additional revenue generated by moving existing customers to higher tiers or adding licenses." 
  },
  { 
      title: "RENEWAL REVENUE", 
      val: "$19.2K", 
      mom: "98% 🔁", 
      rank: "3rd of 12", 
      color: "#e0a3a3", trend: "up", momLbl: "RETENTION RATE", rankLbl: "TEAM RANK", 
      desc: "Retained revenue from existing customers renewing their current contracts." 
  }
];

/* ════  5-CARD KPI ROW ════ */
function renderAPDashboard() {
  const horizontalRow = document.getElementById('kpi-row-v2');
  if (!horizontalRow) return;

  const activeBtn = document.querySelector('#ap-quarter-container button.active');
  const quarter = activeBtn ? parseInt(activeBtn.dataset.q) : 1;
  const startIdx = (quarter - 1) * 3;

  const quarterMonths = {
    1: ["Jan", "Feb", "Mar"], 2: ["Apr", "May", "Jun"],
    3: ["Jul", "Aug", "Sep"], 4: ["Oct", "Nov", "Dec"]
  };
  const currentMonths = quarterMonths[quarter];

  // Exact matches for your data array
  const targetTitles = [
    "NEW + EXISTING BUSINESS", 
    "NEW BUSINESS REVENUE", 
    "EXISTING BUSINESS", 
    "UPGRADE REVENUE", 
    "RENEWAL REVENUE"
  ];

  // Map data and ensure all properties like desc and momLbl are preserved
  const filteredMetrics = targetTitles.map(title => {
      return apMetrics.find(m => m.title.toUpperCase() === title.toUpperCase());
  }).filter(m => m !== undefined);

  horizontalRow.innerHTML = filteredMetrics.map((m, index) => {
      const fullTrendData = [75, 85, 70, 95, 80, 110, 65, 115, 85, 95, 75, 110];
      const activeTrend = fullTrendData.slice(startIdx, startIdx + 3);
      
      return `
          <div class="ap-card" style="border-radius: 12px; height: 320px; display: flex; flex-direction: column; background: var(--surface); border: 1px solid var(--border); padding: 16px; min-width: 0; overflow: visible !important;">
              <div class="ap-card-head" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 12px;">
                  <div class="ap-card-title" style="font-size: 8.5px; font-weight: 800; color: var(--t3); white-space: nowrap;">${m.title}</div>
                  <div class="ap-info-sm" data-desc="${m.desc}" style="width: 16px; height: 16px; font-size: 9px; border-radius: 50%; background: var(--surface3); display: flex; align-items: center; justify-content: center; color:var(--t3); cursor: help;">i</div>
              </div>
              
              <div class="ap-card-val" style="color: ${m.color}; font-size: 26px; font-weight: 900; margin-bottom: 15px;">${m.val}</div>
              
              <div class="ap-chart-area" style="flex: 1; display: flex; align-items: flex-end; gap: 8px; margin-bottom: 20px; height: 100px;">
                  ${activeTrend.map((h, i) => `
                      <div style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; min-width: 0;">
                          <div style="font-size: 8px; font-weight: 800; color: var(--t2); text-align: center; margin-bottom: 4px;">$${h}K</div>
                          <div class="kpi-bar-fill" 
                               data-val="${h}" 
                               style="height: 0%; width: 100%; background: ${m.color}; border-radius: 4px 4px 1px 1px; opacity: 0.9;">
                          </div>
                          <div style="font-size: 9px; font-weight: 700; color: var(--t3); text-align: center; margin-top: 6px; text-transform: uppercase;">${currentMonths[i]}</div>
                      </div>
                  `).join('')}
              </div>

              <div class="ap-card-foot" style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid var(--border); padding-top: 12px;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                      <span style="font-size: 8px; font-weight: 800; color: var(--t3);">${m.momLbl}</span>
                      <div style="background: ${m.color}1A; color: ${m.color}; font-size: 10px; font-weight: 800; padding: 3px 6px; border-radius: 4px;">${m.mom}</div>
                  </div>
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                      <span style="font-size: 8px; font-weight: 800; color: var(--t3);">${m.rankLbl}</span>
                      <div style="background: var(--surface2); color: var(--t2); font-size: 10px; font-weight: 800; padding: 3px 6px; border-radius: 4px; border: 1px solid var(--border);">${m.rank}</div>
                  </div>
              </div>
          </div>
      `;
  }).join('');

  setTimeout(() => {
    document.querySelectorAll('.kpi-bar-fill').forEach(bar => {
      bar.style.height = bar.getAttribute('data-val') + '%';
    });
  }, 50);
}
// Run immediately
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', renderAPDashboard);
} else {
renderAPDashboard();
}

function selectAPAgent(element, name) {
// Reset all rows
document.querySelectorAll('.ap-agent-row').forEach(row => {
    row.style.background = 'transparent';
    row.style.borderRadius = '0';
});

// Highlight selected row
element.style.background = '#e2e8f0';
element.style.borderRadius = '6px';

// Update header name
const subHeader = document.querySelector('.ap-side-sub');
if (subHeader) {
    subHeader.innerHTML = name + ' | Dec 2025';
}
}
function selectAPMonth(btn) {
document.querySelectorAll('.ap-month-toggles button').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
}

function selectAPRegion(btn) {
document.querySelectorAll('.ap-region-toggles button').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
}

const managerReporteesMap = {
"Peter": ["Binny", "Foumin", "Dhana", "Dhruv"],
"Logan": ["Binny", "Foumin"],
"Jinil": ["Dhana", "Dhruv"]
};

function handleManagerChange(select) {
const manager = select.value;
const container = document.getElementById('selectedReportees');
container.innerHTML = ''; 

if (manager && managerReporteesMap[manager]) {
    managerReporteesMap[manager].forEach(rep => {
        container.innerHTML += `
            <div class="ap-chip">
                ${rep} <span onclick="this.parentElement.remove()">✕</span>
            </div>
        `;
    });
}
}

const hmProducts = ['CRM', 'CRM Plus', 'Zoho ONE', 'Desk', 'Analytics', 'Mail', 'Projects', 'Webinar', 'Workplace', 'Lens', 'Bigin'];
const hmRegions = ['India S', 'India N', 'India W', 'US East', 'LATAM', 'APAC', 'ANZ', 'Con Europe', 'MEA', 'Brazil', 'Canada', 'UK'];

function renderHeatMatrix() {
  const container = document.getElementById('heatMatrix');
  if (!container) return;

  let html = '<table style="min-width: 1400px; width: 100%; border-collapse: separate; border-spacing: 12px 12px;"><thead><tr><th style="color:var(--t3); font-size:11px; font-weight:700; text-transform:uppercase; text-align:left; border:none; padding-bottom:8px;">Product</th>';
  
  hmRegions.forEach(r => html += `<th style="color:#8ba3b8; font-size:11px; font-weight:700; text-transform:uppercase; text-align:center; border:none; padding-bottom:8px; letter-spacing:0.5px;">${r}</th>`);
  html += '</tr></thead><tbody>';

  hmProducts.forEach(p => {
      // Changed font-weight to 600, forced background to solid white for scrolling
      html += `<tr><td style="font-weight: 600; font-size:13px; color: var(--t2); background: #ffffff; position: sticky; left: 0; z-index: 11; border:none;">${p}</td>`;
      hmRegions.forEach(r => {
          const winRate = Math.floor(Math.random() * 45) + 40; 
          
          let textColor = '';
          let bgColor = '';
          
          if (winRate >= 74) {
              textColor = '#2e8c6a'; bgColor = '#eaf5f0';
          } else if (winRate >= 65) {
              textColor = '#3a6ea5'; bgColor = '#eff4fa';
          } else if (winRate >= 55) {
              textColor = '#9e732c'; bgColor = '#faf5eb';
          } else {
              textColor = '#c74a4a'; bgColor = '#faecec';
          }

          // Changed padding to 8px 0 to reduce box height
          html += `<td style="padding: 0; border:none;"><div style="background: ${bgColor}; color: ${textColor}; padding: 8px 0; border-radius: 6px; text-align: center; font-size: 13px; font-weight: 700; width: 100%;">${winRate}%</div></td>`;
      });
      html += '</tr>';
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}
window.addEventListener('DOMContentLoaded', renderHeatMatrix);

/* ════ DYNAMIC GREETING LOGIC ════ */
function updateDynamicGreeting() {
const greetingElement = document.getElementById('dynamic-greeting');
if (!greetingElement) return;

const hour = new Date().getHours();
let greeting = "";

if (hour >= 5 && hour < 12) {
    greeting = "Good morning, Peter";
} else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon, Peter";
} else if (hour >= 17 && hour < 21) {
    greeting = "Good evening, Peter";
} else {
    greeting = "Welcome back, Peter"; // Late night/Early morning
}

greetingElement.textContent = greeting;
}

// Initialize the greeting on load
window.addEventListener('DOMContentLoaded', updateDynamicGreeting);

function selectAPQuarter(btn) {
// UI Update
const parent = btn.parentElement;
parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
btn.classList.add('active');

// Logic Update
renderAPDashboard(); // Updates KPI colors

const quarter = parseInt(btn.dataset.q); 
const startIdx = (quarter - 1) * 3;
const endIdx = startIdx + 3;
if (typeof updateWinRateChart === 'function') {
    updateWinRateChart(startIdx, endIdx); // Updates Win Rate chart
}
}
window.addEventListener('DOMContentLoaded', () => {
updateDynamicGreeting(); // Greets Peter
initQuarterSelection();  // Highlights Q1 in #00A693 and colors the bars
});
/* ════ DYNAMIC DEFAULT QUARTER ════ */
function initQuarterSelection() {
const container = document.getElementById('ap-quarter-container');
if (!container) return;

// We are in March 2026, so currentQ will be 1
const month = new Date().getMonth(); 
const currentQ = Math.floor(month / 3) + 1; 

// Find the Q1 button and trigger the click logic
const targetBtn = container.querySelector(`button[data-q="${currentQ}"]`);
if (targetBtn) {
    selectAPQuarter(targetBtn); // This will apply the green color and update bars
}
}

/* Accordion Filter Logic */
function toggleAccordion(id, trigger) {
const content = document.getElementById(id);
trigger.classList.toggle('open');

if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0px'; // Close it
} else {
    content.style.maxHeight = content.scrollHeight + 'px'; // Open it smoothly
}
}

/* ════ ADVANCED 3-TIER CASCADING FILTERS ════ */

const managerDataMap = [
{ name: "Ananya Iyer", region: "India S", bu: "CRM BU", reps: ["Kavitha Rajan", "Arjun Pillai", "Rahul Desai", "Suresh Babu", "Pallavi Iyer"] },
{ name: "Rajesh Menon", region: "India N", bu: "Marketing BU", reps: ["Meena Krishnan", "Dinesh Kumar", "Sean O'Brien", "Eva Müller", "Grace Kim", "Nisha Goyal"] },
{ name: "Priya Suresh", region: "APAC", bu: "Analytics BU", reps: ["Sunita Verma", "Mohan Prasad", "Ravi Shankar", "Yuki Watanabe", "Arun Natarajan"] },
{ name: "Vikram Nair", region: "LATAM", bu: "CRM BU", reps: ["Carlos Mendez", "Divya Nambiar", "Fatima Al-Amin", "Ben Carter", "Lucas Ferreira", "Deepak Menon"] },
{ name: "Sarah Jenkins", region: "US East", bu: "CRM BU", reps: ["John Doe", "Jane Smith"] },
{ name: "Elena Rodriguez", region: "US West", bu: "Marketing BU", reps: ["Mike Johnson", "Emily Davis"] }
];

function toggleSelectAll(selectAllCb, listId) {
const checkboxes = document.querySelectorAll(`#${listId} input[type="checkbox"]:not(.select-all-cb)`);
checkboxes.forEach(cb => cb.checked = selectAllCb.checked);
}

// 1. Updated Manager List Generator
function runCascades() {
const selectedBUs = getSelectedValues('bu-list');
const selectedRegions = getSelectedValues('region-list');

let filteredMgrs = managerDataMap;
if (selectedBUs.length > 0) filteredMgrs = filteredMgrs.filter(m => selectedBUs.includes(m.bu));
if (selectedRegions.length > 0) filteredMgrs = filteredMgrs.filter(m => selectedRegions.includes(m.region));

window.currentFilteredMgrs = filteredMgrs; 

const mgrContainer = document.querySelector('#manager-list > div');
if (mgrContainer) {
    if (filteredMgrs.length === 0) {
        mgrContainer.innerHTML = '<div style="font-size:12px; color:var(--t3); padding:12px 0;">No managers match filters.</div>';
    } else {
        mgrContainer.innerHTML = `
            <div class="ap-multi-item" style="font-style: italic; opacity: 0.7; margin-bottom: 4px; padding-bottom: 8px; border-bottom: 1px solid var(--border);" onclick="toggleAllInList('manager-list')">
                Select All Managers
            </div>
        ` + filteredMgrs.map(m => `
            <div class="ap-multi-item" onclick="toggleMultiItem(this, '${m.name}')">
                ${m.name} <span style="font-weight: 500; font-size: 11px; color: var(--t3); opacity: 0.6;">(${m.region})</span>
            </div>
        `).join('');
    }
}

updateReportees(); 
}
// 2. Updated Reportee List Generator
function updateReportees() {
const filteredMgrs = window.currentFilteredMgrs || managerDataMap;
const selectedMgrs = getSelectedValues('manager-list');

let activeMgrs = selectedMgrs.length > 0 ? filteredMgrs.filter(m => selectedMgrs.includes(m.name)) : filteredMgrs;

let reportees = [];
activeMgrs.forEach(m => {
    if (m.reps) reportees.push(...m.reps);
});
reportees = [...new Set(reportees)].sort();

const repContainer = document.querySelector('#reportee-list > div');
if (repContainer) {
    if (reportees.length === 0) {
        repContainer.innerHTML = '<div style="font-size:12px; color:var(--t3); padding:12px 0;">No reportees found.</div>';
    } else {
        repContainer.innerHTML = `
            <div class="ap-multi-item" style="font-style: italic; opacity: 0.7; margin-bottom: 4px; padding-bottom: 8px; border-bottom: 1px solid var(--border);" onclick="toggleAllInList('reportee-list')">
                Select All Reportees
            </div>
        ` + reportees.map(rep => `
            <div class="ap-multi-item" onclick="toggleMultiItem(this, '${rep}')">
                ${rep}
            </div>
        `).join('');
    }
}
}

window.addEventListener('DOMContentLoaded', () => {
// 1. Run your existing cascades (BU/Region/Managers)
runCascades();

// 2. NEW: Initial fill of the Leadership Performance categories
// This ensures the columns aren't empty on the first load.
if (typeof updatePerformanceCategories === 'function') {
    updatePerformanceCategories();
}

// 3. Optional: Initialize Org Chart if available
if (typeof renderOrgTargetsList === 'function') renderOrgTargetsList();
});

let selectedSidebarFilters = {
bu: [],
region: []
};

function toggleMultiItem(element, value) {
// 1. Toggle the visual green state (CSS .selected)
element.classList.toggle('selected');

// 2. Identify which group was clicked to trigger the correct cascade
const parentAccordion = element.closest('.accordion-content');
if (!parentAccordion) return;

const parentId = parentAccordion.id;

// 3. Trigger Logic Flow: BU/Region -> Managers -> Reportees
if (parentId === 'bu-list' || parentId === 'region-list') {
    runCascades(); 
} else if (parentId === 'manager-list') {
    updateReportees();
}

// 4. THE SYNC: Update the Leadership Performance columns whenever any filter changes
// This handles the "On-Target", "Fluctuating", and "Under Target" buckets.
if (typeof updatePerformanceCategories === 'function') {
    updatePerformanceCategories();
}
}

function toggleAllInList(listId) {
const list = document.getElementById(listId);
if (!list) return;

// Filter out the 'Select All' div itself so it doesn't turn green
const items = Array.from(list.querySelectorAll('.ap-multi-item')).filter(item => {
    return !item.textContent.toLowerCase().includes('select all');
});

// If every item is already green, we clear them. Otherwise, we fill them.
const allSelected = items.every(i => i.classList.contains('selected'));

items.forEach(item => {
    if (allSelected) {
        item.classList.remove('selected');
    } else {
        item.classList.add('selected');
    }
});

// Run the data update logic immediately
if (listId === 'bu-list' || listId === 'region-list') {
    runCascades(); 
} else if (listId === 'manager-list') {
    updateReportees();
}
}
function renderManagerList(managers) {
const container = document.getElementById('manager-items-container');
if (!container) return;

container.innerHTML = managers.map(mgr => `
    <div class="ap-multi-item" onclick="toggleMultiItem(this, '${mgr.name}')">
        ${mgr.name}
    </div>
`).join('');
}

function renderReporteeList(reportees) {
const container = document.getElementById('reportee-items-container');
if (!container) return;

container.innerHTML = reportees.map(rep => `
    <div class="ap-multi-item" onclick="toggleMultiItem(this, '${rep.name}')">
        ${rep.name}
    </div>
`).join('');
}
// Helper to read which custom items are selected
function getSelectedValues(listId) {
const items = document.querySelectorAll(`#${listId} .ap-multi-item.selected`);
return Array.from(items).map(item => {
    // Strip out the (Region) text if it exists to get just the name
    return item.childNodes[0].textContent.trim();
});
}
/* ════ PERFORMANCE CATEGORIZATION ENGINE ════ */
function updatePerformanceCategories() {
// 1. Get current active filters from your sidebar
const selectedRegions = getSelectedValues('region-list');
const selectedBUs = getSelectedValues('bu-list');

// 2. Filter the REPS array based on Region and Service (BU)
let filteredReps = REPS.filter(rep => {
    const regionMatch = selectedRegions.length === 0 || selectedRegions.includes(rep.region);
    const buMatch = selectedBUs.length === 0 || selectedBUs.includes(rep.bu);
    return regionMatch && buMatch;
});

// 3. Clear and Setup the Buckets
const buckets = {
    onTarget: { el: document.getElementById('list-on-target'), countEl: document.getElementById('count-on-target'), data: [] },
    fluctuating: { el: document.getElementById('list-fluctuating'), countEl: document.getElementById('count-fluctuating'), data: [] },
    underTarget: { el: document.getElementById('list-under-target'), countEl: document.getElementById('count-under-target'), data: [] }
};

// 4. Sort Reps into Buckets based on Primary Values (Attainment)
filteredReps.forEach(rep => {
    if (rep.att >= 100) buckets.onTarget.data.push(rep);
    else if (rep.att >= 80) buckets.fluctuating.data.push(rep);
    else buckets.underTarget.data.push(rep);
});

// 5. Render to UI
renderBucket(buckets.onTarget, '#10b981');    // Green
renderBucket(buckets.fluctuating, '#f59e0b'); // Amber
renderBucket(buckets.underTarget, '#ef4444'); // Red
}

/* ════ DYNAMIC QUARTER TOGGLE HELPER ════ */
window.setRepQuarter = function(repId, q, att, colorClass, element) {
  // 1. Update the Top Banner metrics
  const valEl = document.getElementById('q-val-' + repId);
  const lblEl = document.getElementById('q-lbl-' + repId);
  if(valEl) {
      valEl.textContent = att + '%';
      valEl.className = 'font-black text-[15px] leading-none tracking-tight ' + colorClass;
  }
  if(lblEl) {
      lblEl.textContent = 'Q' + q + ' Att.';
  }
  
  // 2. Reset all quarter cards in this specific row
  const grid = element.closest('.grid');
  grid.querySelectorAll('.q-card').forEach(card => {
      card.classList.remove('bg-indigo-50/40');
      card.classList.add('bg-white');
      
      const topBar = card.querySelector('.q-active-bar');
      if(topBar) topBar.remove();
      
      const qLbl = card.querySelector('.q-lbl-text');
      if(qLbl) {
          qLbl.classList.remove('text-indigo-600', 'font-bold');
          qLbl.classList.add('text-slate-400', 'font-semibold');
          const dot = qLbl.querySelector('.q-dot');
          if(dot) dot.remove();
      }
  });
  
  // 3. Highlight the specific clicked quarter
  element.classList.remove('bg-white');
  element.classList.add('bg-indigo-50/40');
  element.insertAdjacentHTML('afterbegin', '<div class="q-active-bar absolute top-0 inset-x-0 h-[3px] bg-indigo-500"></div>');
  
  const qLbl = element.querySelector('.q-lbl-text');
  if(qLbl) {
      qLbl.classList.remove('text-slate-400', 'font-semibold');
      qLbl.classList.add('text-indigo-600', 'font-bold');
      qLbl.insertAdjacentHTML('beforeend', '<span class="q-dot text-indigo-400 ml-0.5">●</span>');
  }
};

/* Internal Helper to Render Each Column */
function renderBucket(bucket, color) {
  if (!bucket.el) return;
  
  bucket.countEl.textContent = bucket.data.length;
  
  if (bucket.data.length === 0) {
      bucket.el.innerHTML = `<div style="padding:20px; text-align:center; color:var(--t3); font-size:11px;">No reps in this category.</div>`;
      return;
  }
  
  bucket.el.innerHTML = bucket.data.map(rep => {
      const baseTgt = (rep.rev / (rep.att / 100)) / 4;
      const seed = rep.name.charCodeAt(0) + rep.name.charCodeAt(1); 
      const formatNum = (n) => n < 10 ? n.toFixed(1) : Math.round(n);
      
      // Create a safe, unique ID for this specific rep
      const repId = rep.name.replace(/\W/g, ''); 
      
      let q1Att = 0;
      let q1Color = '';
  
      const quartersHtml = [1, 2, 3, 4].map(q => {
          const isCurrent = q === 1; 
          
          let qAtt = rep.att;
          if (!isCurrent) {
              const variance = [0, (seed % 15) - 5, (seed % 20) - 10, (seed % 25) - 12][q - 1];
              qAtt = Math.max(10, rep.att + variance); 
          }
          const qAch = baseTgt * (qAtt / 100);
          
          const qColor = qAtt >= 100 ? 'text-emerald-600' : (qAtt >= 80 ? 'text-amber-500' : 'text-rose-500');
          const bgClass = isCurrent ? 'bg-indigo-50/40' : 'bg-white';
          const qLabelClass = isCurrent ? 'text-indigo-600 font-bold' : 'text-slate-400 font-semibold';
          
          // Capture initial Q1 stats for the banner
          if (isCurrent) {
              q1Att = qAtt;
              q1Color = qColor;
          }
  
          return `
          <div class="q-card p-2 flex flex-col items-center relative ${bgClass} cursor-pointer hover:bg-slate-50 transition-colors" onclick="setRepQuarter('${repId}', ${q}, ${qAtt}, '${qColor}', this)">
              ${isCurrent ? '<div class="q-active-bar absolute top-0 inset-x-0 h-[3px] bg-indigo-500"></div>' : ''}
              <div class="q-lbl-text text-[9px] uppercase tracking-widest mb-1.5 ${qLabelClass}">Q${q} ${isCurrent ? '<span class="q-dot text-indigo-400 ml-0.5">●</span>' : ''}</div>
              
              <div class="w-full space-y-1 mb-2 pointer-events-none">
                  <div class="flex justify-between items-center text-[9px]">
                      <span class="text-slate-400">TGT</span>
                      <span class="font-bold text-slate-700">$${formatNum(baseTgt)}M</span>
                  </div>
                  <div class="flex justify-between items-center text-[9px]">
                      <span class="text-slate-400">ACH</span>
                      <span class="font-bold text-slate-900">$${formatNum(qAch)}M</span>
                  </div>
              </div>
              
              <div class="mt-auto text-[10px] font-black ${qColor} bg-slate-50 w-full text-center py-1 rounded border border-slate-100 shadow-sm pointer-events-none">
                  ${qAtt}%
              </div>
          </div>
          `;
      }).join('');
  
      return `
      <div class="perf-rep-item bg-white border border-slate-200 rounded-xl shadow-sm mb-4 overflow-hidden transition-all hover:border-slate-300 hover:shadow-md">
          
          <div class="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                  <div class="perf-rep-name font-bold text-slate-900 text-[13px]">${rep.name}</div>
                  <div class="perf-rep-meta text-[10px] font-medium text-slate-500 mt-0.5">${rep.region} • ${rep.bu}</div>
              </div>
              <div class="flex items-center gap-4">
                  <div class="text-right border-r border-slate-200 pr-4">
                      <div id="q-val-${repId}" class="font-black text-[15px] leading-none tracking-tight ${q1Color}">${q1Att}%</div>
                      <div id="q-lbl-${repId}" class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Q1 Att.</div>
                  </div>
                  <div class="text-right">
                      <div class="perf-rep-pct font-black text-[15px] leading-none tracking-tight" style="color:${color}">${rep.att}%</div>
                      <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">YTD Att.</div>
                  </div>
              </div>
          </div>
          
          <div class="grid grid-cols-4 divide-x divide-slate-100">
              ${quartersHtml}
          </div>
      </div>
      `;
  }).join('');
}

/* ════ LEADERSHIP BUCKET SEARCH ════ */
function filterPerfBuckets(searchTerm) {
const term = searchTerm.toLowerCase().trim();
const columns = ['on-target', 'fluctuating', 'under-target'];

columns.forEach(colId => {
    const list = document.getElementById(`list-${colId}`);
    if (!list) return;
    
    const items = list.querySelectorAll('.perf-rep-item');
    let visibleCount = 0;

    items.forEach(item => {
        const name = item.querySelector('.perf-rep-name').textContent.toLowerCase();
        if (name.includes(term)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Update the count badge to reflect the search result
    const countBadge = document.getElementById(`count-${colId}`);
    if (countBadge) countBadge.textContent = visibleCount;
});
}
document.addEventListener('DOMContentLoaded', () => {
  if (typeof initVelocitySimulator === 'function') {
      initVelocitySimulator();
  }
});

//Tenure vs Win Rate Scatter Plot
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('tenureWinRateChart');
  if (!ctx) return;

  // Beautiful matching colors from the Tailwind palette
  const colors = {
      salesRep: 'rgba(59, 130, 246, 0.8)',   // Blue
      teamLead: 'rgba(16, 185, 129, 0.8)',   // Emerald
      srManager: 'rgba(168, 85, 247, 0.8)',  // Purple
      buHead: 'rgba(249, 115, 22, 0.8)'      // Orange
  };

  new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [
              {
                  label: 'Sales Reps',
                  backgroundColor: colors.salesRep,
                  borderColor: colors.salesRep,
                  pointRadius: 6,
                  pointHoverRadius: 8,
                  // X = Tenure (Months), Y = Win Rate (%)
                  data: [{x: 3, y: 15}, {x: 6, y: 22}, {x: 12, y: 35}, {x: 18, y: 42}, {x: 24, y: 38}, {x: 8, y: 28}]
              },
              {
                  label: 'Team Leads',
                  backgroundColor: colors.teamLead,
                  borderColor: colors.teamLead,
                  pointRadius: 7,
                  pointHoverRadius: 9,
                  data: [{x: 24, y: 45}, {x: 36, y: 55}, {x: 42, y: 62}, {x: 48, y: 58}, {x: 30, y: 48}]
              },
              {
                  label: 'Sr. Managers',
                  backgroundColor: colors.srManager,
                  borderColor: colors.srManager,
                  pointRadius: 8,
                  pointHoverRadius: 10,
                  data: [{x: 48, y: 65}, {x: 60, y: 72}, {x: 72, y: 78}, {x: 84, y: 75}]
              },
              {
                  label: 'BU Heads',
                  backgroundColor: colors.buHead,
                  borderColor: colors.buHead,
                  pointRadius: 10,
                  pointHoverRadius: 12,
                  data: [{x: 72, y: 82}, {x: 96, y: 88}, {x: 120, y: 92}]
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { display: false }, // Hidden because we built a prettier custom HTML legend above!
              tooltip: {
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  titleFont: { size: 13, family: 'Inter' },
                  bodyFont: { size: 12, family: 'Inter' },
                  padding: 12,
                  callbacks: {
                      label: function(context) {
                          return `${context.dataset.label}: ${context.raw.x} months, ${context.raw.y}% Win Rate`;
                      }
                  }
              }
          },
          scales: {
              x: {
                  title: { display: true, text: 'Tenure (Months)', font: { size: 10, weight: 'bold' }, color: '#94a3b8' },
                  grid: { borderDash: [4, 4], color: '#f1f5f9' },
                  border: { display: false }
              },
              y: {
                  title: { display: true, text: 'Win Rate (%)', font: { size: 10, weight: 'bold' }, color: '#94a3b8' },
                  grid: { borderDash: [4, 4], color: '#f1f5f9' },
                  border: { display: false },
                  min: 0,
                  max: 100
              }
          }
      }
  });
});

// --- Adding THIS HELPER FUNCTION ---
// --- GLOBAL TREND HELPER ---
window.withTrend = (formattedCurrencyValue, forcePositive = false) => {
  const percent = (Math.random() * 34 + 1).toFixed(1);
  const isUp = forcePositive || Math.random() > 0.3; 
  
  const colorClass = isUp ? 'text-emerald-500' : 'text-rose-500';
  const arrow = isUp ? '▲' : '▼';
  
  return `
      <div class="flex items-center justify-end gap-1.5">
          <span class="text-inherit">${formattedCurrencyValue}</span>
          <span class="${colorClass} text-[10px] font-bold tracking-tight">${arrow} ${percent}%</span>
      </div>
  `;
};

// --- TAILWIND SQUARE TOGGLE HELPER ---
window.handleTailwindToggle = function(btn) {
  const parent = btn.parentElement;
  // Reset all buttons in this group to the grey/inactive state
  const buttons = parent.querySelectorAll('button');
  buttons.forEach(b => {
      b.className = "px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 rounded-md transition-all";
  });
  // Set the clicked button to the solid black/active state
  btn.className = "px-4 py-1.5 text-xs font-bold bg-slate-900 text-white rounded-md shadow-sm transition-all";
};

/* ════ ALERTS WIDGET ════ */
const alertsData = [
  { icon: '⚡', main: '$16,000 to accelerator', sub: 'Close by Jun 30' },
  { icon: '⌛', main: '1 pending approval', sub: 'Luminary — $6,448' },
  { icon: '📊', main: 'Rank #3 of 6 on team', sub: '+2 positions this month', highlight: true },
  { icon: '🎯', main: 'Q2 ends in 97 days', sub: "You're on pace" }
];

function initializeAlerts() {
  const alertCards = document.querySelectorAll('.alert-card');
  alertCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f0ebe5';
    });
    card.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '#f7f3f0';
    });
  });
}

/* ════ QUOTA WIDGET ════ */
function updateQuotaUI(current, target) {
  const percent = Math.min((current / target) * 100, 100);
  const donutFill = document.getElementById('quota-donut');
  
  // SVG Donut Math: Circumference is ~251.2
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percent / 100) * circumference;
  donutFill.style.strokeDashoffset = offset;

  document.getElementById('quota-pct').textContent = `${Math.round(percent)}%`;
  
  // Update the progress bar at the bottom
  document.getElementById('gap-progress').style.width = `${percent}%`;
}

// Initialize quota widget on page load
document.addEventListener('DOMContentLoaded', function() {
  updateQuotaUI(134000, 200000);
});
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('sim-deal-slider');
  const fill = document.getElementById('sim-slider-fill');
  const thumb = document.getElementById('sim-slider-thumb');
  const valueDisplay = document.getElementById('sim-deal-value-display');
  const rateDisplay = document.getElementById('sim-rate-display');
  const earnedDisplay = document.getElementById('sim-earned-display');
  const tierDisplay = document.getElementById('sim-tier-display');

  if (!slider) return;

  function updateSimulator() {
    const val = Number(slider.value);
    const max = Number(slider.max);
    const percent = (val / max) * 100;

    fill.style.width = `${percent}%`;
    thumb.style.left = `${percent}%`;

    const format$ = (num) => new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);

    valueDisplay.textContent = format$(val);

    let rate = 5.0;
    let tier = "Base Rate";
    let tClass = "text-slate-600 bg-slate-200 border-slate-300";
    let calcDesc = "Standard base commission rate.";

    if (val >= 150000) {
      rate = 12.0;
      tier = "Max Accel.";
      tClass = "text-purple-700 bg-purple-100 border-purple-200";
      calcDesc = "Includes maximum accelerator multiplier.";
    } else if (val >= 75000) {
      rate = 9.0;
      tier = "Tier 3";
      tClass = "text-indigo-700 bg-indigo-100 border-indigo-200";
      calcDesc = "Includes Tier 3 volume bonus.";
    } else if (val >= 25000) {
      rate = 7.0;
      tier = "Tier 2";
      tClass = "text-emerald-700 bg-emerald-100 border-emerald-200";
      calcDesc = "Includes Tier 2 volume bonus.";
    }

    const earned = val * (rate / 100);

    rateDisplay.textContent = rate.toFixed(1) + '%';
    tierDisplay.textContent = tier;
    tierDisplay.className = `text-[10px] font-bold uppercase px-2 py-1.5 rounded-md border shadow-sm transition-colors ${tClass}`;
    earnedDisplay.textContent = format$(earned);

    document.getElementById('sim-calc-math').innerHTML = `${format$(val)} <span class="text-slate-400 mx-1">×</span> <span class="text-indigo-600">${rate.toFixed(1)}%</span>`;
    document.getElementById('sim-calc-result').textContent = format$(earned);
    document.getElementById('sim-calc-desc').innerHTML = `<i data-lucide="info" class="w-3.5 h-3.5 text-indigo-400"></i> ${calcDesc}`;

    const baseTargetInput = document.getElementById('input-quarterly-goal');
    const currentSalesInput = document.getElementById('input-sales-to-date');
    const baseTarget = baseTargetInput ? (Number(baseTargetInput.value) || 30000) : 30000;
    const currentSales = currentSalesInput ? (Number(currentSalesInput.value) || 12500) : 12500;
    const newTotal = currentSales + val;
    const currentPct = (currentSales / baseTarget) * 100;
    const newPct = (newTotal / baseTarget) * 100;

    document.getElementById('sim-base-target').textContent = format$(baseTarget);
    document.getElementById('sim-new-total').textContent = format$(newTotal);
    document.getElementById('sim-new-pct').textContent = `(${newPct.toFixed(0)}%)`;

// 7. Update Stacked Progress Bar & Tooltips
const cappedCurrentPct = Math.min(currentPct, 100);
const cappedNewPct = Math.min(newPct - cappedCurrentPct, 100 - cappedCurrentPct);

const progCurrent = document.getElementById('sim-prog-current');
const progNew = document.getElementById('sim-prog-new');

if (progCurrent) {
    progCurrent.style.width = `${cappedCurrentPct}%`;
    // Dynamically round corners so it stays perfectly pill-shaped
    progCurrent.style.borderRadius = cappedNewPct === 0 ? '9999px' : '9999px 0 0 9999px';
}
if (progNew) {
    progNew.style.width = `${cappedNewPct}%`;
    // Dynamically round corners so it stays perfectly pill-shaped
    progNew.style.borderRadius = cappedCurrentPct === 0 ? '9999px' : '0 9999px 9999px 0';
}

    document.getElementById('sim-prog-current').style.width = `${cappedCurrentPct}%`;
    document.getElementById('sim-prog-new').style.width = `${cappedNewPct}%`;

    if (window.lucide) window.lucide.createIcons();
  }

  slider.addEventListener('input', updateSimulator);
  document.getElementById('input-quarterly-goal')?.addEventListener('input', updateSimulator);
  document.getElementById('input-sales-to-date')?.addEventListener('input', updateSimulator);

  updateSimulator();
});

// Add these to your existing updateSimulator function
const earningsVal = document.getElementById('earnings-val');
const forecastVal = document.getElementById('forecast-val');

// Example logic:
// If 'earned' is what you calculated in the previous step:
earningsVal.textContent = format$(earned);

// If 'forecast' is a future projection (e.g., earned + potential):
const forecast = earned * 1.5; // Replace with your actual logic
forecastVal.textContent = format$(forecast);