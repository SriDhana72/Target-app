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
    {av:"PR",col:"#3b82f6",text:"<span>Preethi Subram.</span> moved Infosys to Legal Review stage",tag:"moved",time:"14m ago"},  
    {av:"GK",col:"#10b981",text:"<span>Grace Kim</span> got verbal yes from Salesforce India",tag:"moved",time:"28m ago"},  
    {av:"CM",col:"#ef4444",text:"<span>Carlos Mendez</span> LATAM deal flagged as at-risk",tag:"risk",time:"1h ago"},  
    {av:"AR",col:"#f59e0b",text:"<span>Arjun Pillai</span> submitted proposal to Wipro for $3.4M",tag:"moved",time:"2h ago"},  
    {av:"EM",col:"#ef4444",text:"<span>Eva Müller</span> lost Siemens deal on pricing objection",tag:"lost",time:"3h ago"},  
    {av:"SV",col:"#06b6d4",text:"<span>Sunita Verma</span> booked Apollo Hospitals demo",tag:"moved",time:"4h ago"},
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
  
/* ════ NAVIGATION ════ */
const PAGE_TITLES = {
    home: ['Overview','FY2024-25 · Q4 · Zoho Corp'],
    pipeline: ['Pipeline','Revenue & Opportunities'],
    regions: ['Regions & Products','Win Rate Intelligence'],
    orgchart: ['Org Chart','Reporting Hierarchy'],
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
  
  function renderLbRows(){  
    const reps  = window._lbReps || [];  
    const shown = reps.slice(0, lbShown);  
    const wrap  = document.getElementById('lbShowMoreWrap');  
    const btn   = document.getElementById('lbShowMoreBtn');
  
    if(reps.length === 0){    
      document.getElementById('lbBody').innerHTML = `      <div class="tp-empty">        <div class="tp-empty-icon">🔍</div>        <div class="tp-empty-title">No results found</div>        <div class="tp-empty-sub">No reps match the selected filters. Try adjusting Region, BU Group, or Type.</div>      </div>`;    
      if(wrap) wrap.style.display = 'none';    
      return;  
    }
  
    document.getElementById('lbBody').innerHTML = shown.map(r => {    
      const targetVal   = parseFloat((r.rev / (Math.min(r.att, 78) / 100)).toFixed(2));    
      const achievedVal = r.rev;    
      const gapVal      = parseFloat((achievedVal - targetVal).toFixed(2));    
      const gapFmt      = (gapVal < 0 ? '-' : '+') + fmtMoney(Math.abs(gapVal));
      const pct         = parseFloat(((achievedVal / targetVal) * 100).toFixed(1));    
      const barPct      = Math.min(pct, 100);    
      const progCol     = pct >= 90 ? '#c4870a' : pct >= 60 ? '#c4870a' : '#d43f3f';    
      const dotCol      = progCol;
      const badgeCls    = r.type.toLowerCase();    
      const roleTxt     = r.tenure >= 5 ? 'Sr. Account Executive' : r.tenure >= 3 ? 'Account Executive' : 'Jr. Account Executive';
      const pillBg   = 'rgba(212,63,63,0.18)';    
      const pillBdr  = '#d43f3f';
      const incentiveVal = '$0';    
      const incentiveCls = 'tp-cell incentive-zero';
  
      return `    <div class="tp-row" onclick="inspectRep(${JSON.stringify(r).replace(/"/g,'&quot;')})">      <div class="tp-name-wrap">        <div class="tp-av" style="background:${r.color}">          ${ini(r.name)}          <div class="tp-av-dot" style="background:${dotCol}"></div>        </div>        <div style="min-width:0">          <div class="tp-name">${r.name} <span class="tp-badge ${badgeCls}">${r.type}</span></div>          <div style="font-size:10px;color:var(--t3);margin-top:2px;white-space:nowrap">${r.region} · ${r.bu}</div>        </div>      </div>      <div class="tp-cell" style="font-size:11px;color:var(--t2)">${roleTxt}</div>      <div class="tp-cell mono">${fmtMoney(targetVal)}</div>      <div class="tp-cell mono" style="color:var(--t1);font-weight:700">${fmtMoney(achievedVal)}</div>      <div class="tp-prog-wrap">        <div class="tp-prog-dot" style="background:${dotCol}"></div>        <div class="tp-prog-bar"><div class="tp-prog-fill" style="width:${barPct}%;background:${progCol}"></div></div>        <div class="tp-prog-pct" style="color:${progCol}">${pct}%</div>      </div>      <div class="tp-cell gap-neg">${gapFmt}</div>      <div>        <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;background:${pillBg};border:1px solid ${pillBdr};font-size:11px;font-weight:700;color:${pillBdr};white-space:nowrap">          ↘ Behind        </span>      </div>      <div class="${incentiveCls}">        <span style="color:var(--amber);margin-right:3px;font-size:11px">$</span>${incentiveVal}      </div>    </div>`;  
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
  
  function renderCommBars(){  
    const cats=[{c:'top',l:'Top Performers',col:'var(--green)'},{c:'avg',l:'On Track',col:'var(--amber)'},{c:'critical',l:'Critical',col:'var(--red)'}];  
    const data=cats.map(x=>({...x,total:REPS.filter(r=>cls(r)===x.c).reduce((s,r)=>s+r.comm,0)}));  
    const mx=Math.max(...data.map(d=>d.total));  
    document.getElementById('comm-bars').innerHTML=data.map(d=>`    <div class="pbar-row">      <div class="pbar-label">${d.l}</div>      <div class="pbar-track"><div class="pbar-fill" style="width:${(d.total/mx)*100}%;background:${d.col}"></div></div>      <div class="pbar-val" style="color:${d.col}">$${d.total.toFixed(1)}M</div>    </div>`).join('');
  }
  
  function renderWRProduct(){  
    const data=[    {l:"CRM",        v:74, c:"#4a7cf7"},    {l:"CRM Plus",   v:70, c:"#7059c4"},    {l:"Zoho ONE",   v:68, c:"#c4870a"},    {l:"Analytics",  v:65, c:"#2ea87a"},    {l:"Desk",       v:63, c:"#c4620a"},    {l:"People",     v:60, c:"#b83058"},    {l:"People Plus",v:58, c:"#1a7fa0"},    {l:"Projects",   v:56, c:"#7059c4"},    {l:"Webinar",    v:52, c:"#d43f3f"},    {l:"Lens",       v:48, c:"#5a9a2a"},  ];  
    const left  = data.slice(0, 5);  
    const right = data.slice(5);  
    const row = d => `    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">      <div style="width:80px;flex-shrink:0;font-size:12px;font-weight:600;color:var(--t2);white-space:nowrap">${d.l}</div>      <div style="flex:1;background:var(--border);border-radius:4px;height:6px;overflow:hidden">        <div style="width:${d.v}%;height:100%;background:${d.c};border-radius:4px"></div>      </div>      <div style="width:34px;text-align:right;flex-shrink:0;font-size:12px;font-weight:700;color:${d.c}">${d.v}%</div>    </div>`;  
    document.getElementById('wr-product').innerHTML = `    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px">      <div>${left.map(row).join('')}</div>      <div>${right.map(row).join('')}</div>    </div>`;
  }
  
  function renderTenureBars(){  
    const buckets=[{l:"0–1 yr",min:0,max:1.9},{l:"2–3 yr",min:2,max:3.9},{l:"4–6 yr",min:4,max:6.9},{l:"7+ yr",min:7,max:99}];  
    document.getElementById('tenure-bars').innerHTML=buckets.map(b=>{    
      const g=REPS.filter(r=>r.tenure>=b.min&&r.tenure<=b.max);    
      const wr=g.length?Math.round(g.reduce((s,r)=>s+r.wr,0)/g.length):0;    
      const att=g.length?Math.round(g.reduce((s,r)=>s+r.att,0)/g.length):0;    
      const col=wr>=68?'var(--green)':wr>=58?'var(--amber)':'var(--red)';    
      return `<div class="pbar-row"><div class="pbar-label">${b.l} (${g.length} reps)</div><div class="pbar-track"><div class="pbar-fill" style="width:${wr}%;background:${col}"></div></div><div class="pbar-val" style="color:${col}">WR:${wr}% Att:${att}%</div></div>`;  
    }).join('');
  }
  
  function inspectRep(r){  
    const c=cls(r),col={top:'var(--green)',avg:'var(--amber)',critical:'var(--red)'}[c];  
    const chip=`<span class="chip ${c}">${c.toUpperCase()}</span>`;  
    document.getElementById('nodeBody').innerHTML=`    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">      <div style="width:44px;height:44px;border-radius:50%;background:${r.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff">${ini(r.name)}</div>      <div><div style="font-size:15px;font-weight:800;color:var(--t1)">${r.name}</div><div style="font-size:11px;color:var(--t3)">${r.mgr} · ${chip}</div></div>    </div>    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">      ${[['$'+r.rev+'M','Revenue',col],[''+r.att+'%','Attainment',col],[r.wr+'%','Win Rate','var(--accent)'],[r.deals,'Deals','var(--t1)']].map(([v,l,c])=>`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px"><div style="font-size:16px;font-weight:800;color:${c}">${v}</div><div style="font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;margin-top:2px">${l}</div></div>`).join('')}    </div>    ${[['Region',r.region],['BU Group',r.bu],['Tenure',r.tenure+'y'],['Type',r.type],['Commission','$'+r.comm+'M']].map(([l,v])=>`<div class="stat-row"><span class="stat-row-lbl">${l}</span><span class="stat-row-val">${v}</span></div>`).join('')}  `;
  }
  
  /* ════ PIPELINE ════ */
  function renderFunnel(){  
    const stages=[    
      {n:"Prospecting",  deals:424,val:"$386M",pct:100,c:"#3b82f6"},    
      {n:"Qualification",deals:312,val:"$284M",pct:74, c:"#8b5cf6"},    
      {n:"Proposal",     deals:188,val:"$182M",pct:47, c:"#f59e0b"},    
      {n:"Negotiation",  deals:98, val:"$108M",pct:28, c:"#10b981"},    
      {n:"Legal/Verbal", deals:54, val:"$68M", pct:18, c:"#10b981"},    
      {n:"Closed Won",   deals:1248,val:"$382M",pct:100,c:"#10b981"},  
    ];  
    document.getElementById('funnel').innerHTML=stages.map(s=>`<div class="funnel-row"><div class="funnel-stage-label">${s.n}</div><div class="funnel-bar-track"><div class="funnel-bar-fill" style="width:${s.pct}%;background:${s.c}"></div></div><div class="funnel-meta">${s.deals} · ${s.val}</div></div>`).join('');
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
  
  /* ════ RIGHT PANEL ════ */
  function renderActivityFeed(){  
    const el=document.getElementById('activityFeed');  
    if(!el)return;  
    el.innerHTML=ACTIVITY.map(a=>`    <div class="feed-item">      <div class="feed-avatar" style="background:${a.col}">${a.av}</div>      <div class="feed-body">        <div class="feed-title">${a.text}</div>        <div><span class="feed-tag ${a.tag}">${a.tag.toUpperCase()}</span></div>      </div>      <div class="feed-time">${a.time}</div>    </div>`).join('');
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
      <div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">      
        <div style="width:72px;flex-shrink:0;font-size:11px;font-weight:600;color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${d.l}">${d.l}</div>      
        <div style="flex:1;background:var(--border);border-radius:3px;height:5px;overflow:hidden">        
          <div style="width:${d.v}%;height:100%;background:${d.c};border-radius:3px"></div>      
        </div>      
        <div style="font-size:10px;font-weight:700;color:${d.c};width:52px;text-align:right;flex-shrink:0;white-space:nowrap">${d.rev} · ${d.v}%</div>    
      </div>`).join('');  
  }
  
  function laRcShowMore(){ 
    laRcN += 3; 
    renderLARc(); 
  }
  
  function renderLAFeed(){  
    document.getElementById('laFeed').innerHTML = ACTIVITY.map(a=>`    <div class="la-item">      <div class="la-av" style="background:${a.col}">${a.av}</div>      <div class="la-content">        <div class="la-text">${a.text}</div>        <div class="la-meta">          <span class="la-tag ${a.tag}">${a.tag.toUpperCase()}</span>          <span class="la-time">${a.time}</span>        </div>      </div>    </div>`).join('');  
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
  
  /* ════ INIT ════ */
  window.addEventListener('DOMContentLoaded', () => {  
    drawRevChart();  
    renderMgrBars();  
    renderHomePerfCards('home-top','top');  
    renderHomePerfCards('home-avg','avg');  
    renderHomePerfCards('home-crit','critical');  
    renderWRProduct();  
    renderRepGrid();  
    renderTenureBars();  
    renderCommBars();  
    renderFunnel();  
    renderAnomalies();  
    renderHighConv();  
    renderRegionCards();  
    renderRegionStats();  
    renderWinMatrix();  
    renderTopLogos();  
    renderHier();  
    renderLAFeed();  
    renderTargetRows();  
    renderTvsA();
  });
  
  window.addEventListener('resize', () => {  
    drawRevChart();  
    if(document.getElementById('sec-pipeline').classList.contains('active')) drawProdChart();
    if(document.getElementById('sec-targets').classList.contains('active')) {
        if(typeof drawOppsBubbleChart === 'function') drawOppsBubbleChart();
    }
  });