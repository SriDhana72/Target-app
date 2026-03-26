/* ════ ORGANIZATION TARGETS DATA & LOGIC ════ */

/* ════ CENTRAL ORG DATA ════ */
window.ORG_DATA = [
    // --- LEVEL 1: DIRECTOR ---
    {
        id: "peter_balaji",
        managerId: null, // Null means he is the top node
        name: "Peter Jackson",
        role: "Director of Sales",
        image: "https://i.pravatar.cc/150?img=14",
        target: 25000000,
        achieved: 29100000,
        winRate: 82,
        region: "Global",
        services: "All Zoho Products",
        risk: "EMEA Conversions (-12%)"
    },
    
    // --- LEVEL 2: MANAGERS ---
    {
        id: "logan",
        managerId: "peter_balaji", // Reports to Peter
        name: "Logan",
        role: "Regional Manager",
        image: "https://i.pravatar.cc/150?img=11",
        target: 8000000,
        achieved: 9200000,
        winRate: 78,
        region: "North America",
        services: "CRM, Desk, Analytics",
        risk: "Desk Upgrades (-5%)"
    },
    {
        id: "ananya_iyer",
        managerId: "peter_balaji", // Reports to Peter
        name: "Ananya Iyer",
        role: "Regional Manager",
        image: "https://i.pravatar.cc/150?img=5",
        target: 8500000,
        achieved: 9000000,
        winRate: 80,
        region: "APAC",
        services: "CRM Plus, Creator",
        risk: "Creator Enterprise (-8%)"
    },
    {
        id: "rajesh_menon",
        managerId: "peter_balaji", // Reports to Peter
        name: "Rajesh Menon",
        role: "Regional Manager",
        image: "https://i.pravatar.cc/150?img=8",
        target: 8500000,
        achieved: 10900000,
        winRate: 85,
        region: "EMEA",
        services: "Zoho ONE, Projects",
        risk: "Projects Churn (+2%)"
    },

    // --- LEVEL 3: TOP PERFORMERS ---
    {
        id: "samuel_walker",
        managerId: "logan", // Reports to Logan
        name: "Samuel Walker",
        role: "Account Executive",
        image: "https://i.pravatar.cc/150?img=15",
        target: 1000000,
        achieved: 1360498,
        winRate: 80,
        region: "US East",
        services: "CRM",
        risk: "Mid-Market Renewals"
    },
    {
        id: "kavitha_rajan",
        managerId: "ananya_iyer", // Reports to Ananya
        name: "Kavitha Rajan",
        role: "Account Executive",
        image: "https://i.pravatar.cc/150?img=9",
        target: 850000,
        achieved: 1120400,
        winRate: 76,
        region: "India West",
        services: "CRM Plus",
        risk: "Public Sector Delays"
    },
    {
        id: "lakshmi_pillai",
        managerId: "ananya_iyer", // Reports to Ananya
        name: "Lakshmi Pillai",
        role: "Account Executive",
        image: "https://i.pravatar.cc/150?img=12",
        target: 750000,
        achieved: 820000,
        winRate: 82,
        region: "Singapore",
        services: "Creator",
        risk: "Retail Sector (-4%)"
    },
    {
        id: "grace_kim",
        managerId: "rajesh_menon", // Reports to Rajesh
        name: "Grace Kim",
        role: "Account Executive",
        image: "https://i.pravatar.cc/150?img=16",
        target: 950000,
        achieved: 1100000,
        winRate: 84,
        region: "UK & Ireland",
        services: "Zoho ONE",
        risk: "Migration Timelines"
    }
];
const BU_SERVICES_MAP = {
    "Project Management": ["Orchestly", "Projects", "Projects Plus", "Sprints"],
    "Productivity": ["BugTracker", "Projects", "Projects Plus", "Sprints"],
    "Other BU's": ["Backstage", "Start"],
    "Marketing": ["Analytics", "AppCreator", "Assist", "Backstage", "Bookings", "Books", "BugTracker", "CRM", "CRM Platform", "CRMPlus", "Campaigns", "Checkout", "Cliq"],
    "HRMS": ["Expense", "People", "People Plus", "Recruit", "Workerly"],
    "HR": ["People", "People Plus", "Recruit", "Shifts", "Workerly"],
    "Finance": ["Books", "Checkout", "Commerce", "E-Invoice", "Expense", "FinancePlus", "Inventory", "Invoice", "Pay", "Payroll", "Practice", "Spend", "Subscriptions"],
    "Developer": ["AppCreator", "Creator", "Creator On-Premise", "Creator Plus", "Flow"],
    "Communication": ["Cliq", "Cliq Marketplace", "CommunitySpaces", "Connect", "Docs", "Meeting", "SalesIQ", "ShowTime", "Sign", "TeamInbox", "Vault", "Voice", "Webinar", "Wiki", "WorkDrive", "Zeptomail"],
    "CRM Group": ["Bigin", "CRM", "CRM Platform", "CRM Training", "CRMFlex", "CRMPlus", "Creator", "One", "Projects", "RouteIQ for Zoho CRM", "Sign"],
    "BI and Analytics": ["Analytics", "Analytics On-Premise", "Analytics White Label", "Apptics", "Dataprep"],
    "Automation": ["Flow", "QEngine", "RPA"]
};

const REGION_COUNTRY_MAP = {
    "US": ["United States", "United States Minor Outlying Islands"],
    "ConEurope": ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Faroe Islands", "Finland", "France", "Georgia", "Germany", "Gibraltar", "Greece", "Greenland", "Holy See (Vatican City State)", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "Montenegro", "Serbia", "Kosovo", "Yugoslavia"],
    "MEA": ["Algeria", "Angola", "Bahrain", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Congo, Democratic Republic", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Guinea", "Guinea-bissau", "Israel", "Jordan", "Kenya", "Kuwait", "Lebanon", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Oman", "Palestine", "Pitcairn", "Qatar", "Reunion", "Rwanda", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Sierra Leone", "Somalia", "South Africa", "Svalbard and Jan Mayen", "Swaziland", "Tanzania", "Togo", "Tokelau", "Tunisia", "Uganda", "United Arab Emirates", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Aland Islands", "Bonaire", "Cote d'Ivoire", "South Sudan", "Sudan"],
    "APAC": ["American Samoa", "Bangladesh", "Bhutan", "Brunei Darussalam", "Cambodia", "Cook Islands", "East Timor", "Fiji", "Hong Kong", "Indonesia", "Kazakhstan", "Kiribati", "South Korea", "Kyrgyzstan", "Macau", "Malaysia", "Maldives", "Marshall Islands", "Micronesia", "Mongolia", "Myanmar", "Nauru", "Nepal", "Niue", "Norfolk Island", "Northern Mariana Islands", "Pakistan", "Palau", "Papua New Guinea", "Philippines", "Samoa", "Seychelles", "Singapore", "Sri Lanka", "Taiwan", "Tajikistan", "Thailand", "Tonga", "Turkmenistan", "Tuvalu", "Uzbekistan", "Vanuatu", "Vietnam", "Afghanistan", "Laos"],
    "LATAM": ["Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Bahamas", "Barbados", "Belize", "Bermuda", "Bolivia", "Brazil", "Cayman Islands", "Chile", "Colombia", "Costa Rica", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Falkland Islands", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Martinique", "Mexico", "Montserrat", "Netherlands Antilles", "Nicaragua", "Panama", "Paraguay", "Peru", "Puerto Rico", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and The Grenadines", "South Georgia", "Suriname", "Trinidad and Tobago", "Turks and Caicos Islands", "Uruguay", "Venezuela", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Curacao", "Saint Barthelemy", "Saint Helena", "Saint Martin", "Saint Pierre And Miquelon", "Sint Maarten"],
    "Others": ["Antarctica"],
    "UK": ["British Indian Ocean Territory", "United Kingdom", "Guernsey", "Isle Of Man", "Jersey"],
    "China": ["China"],
    "ANZ": ["Australia", "Christmas Island", "Cocos (Keeling) Islands", "Heard Island and Mcdonald Islands", "New Zealand"],
    "Japan": ["Japan"],
    "India": ["India"],
    "Canada": ["Canada"]
};

let activeTargetId = 'peter_balaji'; // Start with Peter highlighted
let tcTab = 'individual'; 
let selectedPanelCountries = [];
let viewTotalInIndividual = false; 
let activeTreeBU = 'All';

function formatM(val) {
    if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
    if (val >= 1000) return '$' + Math.round(val / 1000) + 'K';
    return '$' + val;
}

function getPctColor(pct) {
    if (pct >= 100) return 'var(--green)';
    if (pct >= 80) return 'var(--amber)';
    return '#dc2626';
}

/* ════ THE WATERFALL RENDERER ════ */
function buildTreeHTML(managerId) {
    const reports = window.ORG_DATA.filter(n => n.managerId === managerId);
    if (reports.length === 0) return '';
    
    let html = managerId === null ? '' : '<div class="wf-children">';
    
    reports.forEach(node => {
        const pct = Math.round((node.achieved / node.target) * 100) || 0;
        const pctColor = getPctColor(pct);
        const isHighligted = node.id === activeTargetId ? 'highlight' : '';
        
        // Smart BU Dimming Logic
        let isDimmed = '';
        if (activeTreeBU !== 'All') {
            if (node.services !== 'All Zoho Products') {
                const buServices = BU_SERVICES_MAP[activeTreeBU] || [];
                // Check if the person sells any service in the selected BU
                const hasMatch = buServices.some(svc => node.services.includes(svc));
                if (!hasMatch) {
                    isDimmed = 'dimmed';
                }
            }
        }

        const childrenHtml = buildTreeHTML(node.id); 
        
        html += `
        <div class="wf-node">
            <div class="wf-card ${isHighligted} ${isDimmed}" onclick="selectTargetNode('${node.id}')">
                
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <img src="${node.image}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--border);">
                    <div>
                        <div style="font-size:13px; font-weight:800; color:var(--t1); line-height:1.2;">${node.name}</div>
                        <div style="font-size:10px; color:var(--t2); font-weight:600;">${node.role}</div>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; margin-bottom:10px; background:var(--surface2); padding:8px; border-radius:6px; border: 1px solid var(--border);">
                    <div>
                        <div style="font-size:8px; color:var(--t3); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">Target</div>
                        <div style="font-size:12px; font-weight:800; color:var(--t1);">${formatM(node.target)}</div>
                    </div>
                    <div>
                        <div style="font-size:8px; color:var(--t3); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">Achieved</div>
                        <div style="font-size:12px; font-weight:800; color:${pctColor};">${formatM(node.achieved)} <span style="font-size:9px; background:rgba(0,0,0,0.05); padding:2px 4px; border-radius:4px;">${pct}%</span></div>
                    </div>
                </div>

                <div style="font-size:10px; color:var(--t2); margin-bottom:4px; display:flex; justify-content:space-between;"><b>Win Rate:</b> <span style="font-weight:700; color:var(--t1);">${node.winRate}%</span></div>
                <div style="font-size:10px; color:var(--t2); margin-bottom:4px; display:flex; justify-content:space-between;"><b>Region:</b> <span style="font-weight:700; color:var(--t1);">${node.region}</span></div>
                <div style="font-size:10px; color:var(--t2); margin-bottom:8px; display:flex; justify-content:space-between;"><b>Services:</b> <span style="font-weight:700; color:var(--t1); text-align:right; max-width:110px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${node.services}">${node.services}</span></div>
                
                <div style="font-size:10px; font-weight:700; color:#dc2626; background:#fef2f2; border: 1px solid #fecaca; padding:4px 6px; border-radius:4px; display:flex; gap:4px; align-items:flex-start;">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" stroke-width="2.5" style="flex-shrink:0; margin-top:1px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <span style="line-height:1.2;">${node.risk}</span>
                </div>

            </div>
            ${childrenHtml}
        </div>`;
    });
    
    html += managerId === null ? '' : '</div>';
    return html;
}

function renderOrgTargetsList() {
    const container = document.getElementById('newHierTree');
    if (!container) return;

    // 1. Build the Sidebar List for Business Units
    let buOptions = `
        <div class="sidebar-filter-item ${activeTreeBU === 'All' ? 'active' : ''}" onclick="activeTreeBU = 'All'; renderOrgTargetsList();">
            All Business Units
        </div>`;
    
    Object.keys(BU_SERVICES_MAP).forEach(bu => {
        buOptions += `
        <div class="sidebar-filter-item ${activeTreeBU === bu ? 'active' : ''}" onclick="activeTreeBU = '${bu}'; renderOrgTargetsList();">
            ${bu}
        </div>`;
    });

    // 2. The Clean, Borderless Right Panel
    const rightPanelHTML = `
    <div style="width: 220px; flex-shrink: 0; padding: 10px 0; display: flex; flex-direction: column; align-self: flex-start; position: sticky; top: 120px; z-index: 10;">
        <div style="text-align: right;">
            <div style="font-size: 10px; font-weight: 800; color: var(--t3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; padding-right: 12px; opacity: 0.8;">
                Filter by BU Group
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
                ${buOptions}
            </div>
        </div>
    </div>
`;

    // 3. Updated CSS for the borderless items
    const layoutStyles = `
    <style>
.org-waterfall { 
    display: flex; 
    justify-content: center; 
    padding: 20px 0 40px 0; 
    min-width: max-content; 
}        .wf-node { display: flex; flex-direction: column; align-items: center; position: relative; padding: 0 10px; }
        
        .wf-card { width: 220px; background: var(--surface, #fff); border: 1px solid var(--border, #e5e7eb); border-radius: 10px; padding: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); position: relative; z-index: 2; text-align: left; transition: all 0.2s ease; cursor: pointer; }
        .wf-card.highlight { border: 2px solid #00A693; box-shadow: 0 0 15px rgba(0, 166, 147, 0.2); transform: scale(1.02); }
        
        .wf-card.dimmed { opacity: 0.3; filter: grayscale(100%); background: var(--surface2); border: 1px dashed var(--border); box-shadow: none; }
        .wf-card.dimmed:hover { opacity: 0.8; filter: none; }

        .wf-children { display: flex; justify-content: center; padding-top: 20px; position: relative; width: max-content; margin: 0 auto; }
        .wf-children::before { content: ''; position: absolute; top: 0; left: 50%; width: 0; height: 20px; border-left: 2px solid var(--border, #cbd5e1); }
        .wf-node::before { content: ''; position: absolute; top: -20px; left: 50%; width: 0; height: 20px; border-left: 2px solid var(--border, #cbd5e1); }
        .wf-node:first-child::after { content: ''; position: absolute; top: -20px; left: 50%; width: 50%; height: 2px; background: var(--border, #cbd5e1); }
        .wf-node:last-child::after { content: ''; position: absolute; top: -20px; right: 50%; width: 50%; height: 2px; background: var(--border, #cbd5e1); }
        .wf-node:only-child::after { display: none; }

        /* Modern, borderless sidebar items */
        .sidebar-filter-item {
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            color: var(--t2);
            cursor: pointer;
            transition: all 0.15s ease;
            text-align: right;
            border-right: 3px solid transparent;
        }
        .sidebar-filter-item:hover {
            color: var(--t1);
            background: var(--surface2);
        }
.sidebar-filter-item.active {
    color: #00A693;
    font-weight: 800;
    background: rgba(0, 166, 147, 0.05); 
    border-right: 4px solid #00A693; 
    border-radius: 4px 0 0 4px;
}
    </style>
    `;

    container.innerHTML = layoutStyles + `
    <div style="display: flex; gap: 40px; align-items: flex-start; width: 100%; padding-top: 20px;">
        <div style="flex: 1; overflow-x: auto; padding-bottom: 24px;">
            <div class="org-waterfall">${buildTreeHTML(null)}</div>
        </div>
        ${rightPanelHTML}
    </div>`;
}

/* ════ DROPDOWNS & MULTI-SELECT LOGIC ════ */
function updatePanelServices() {
    const buSelect = document.getElementById('panel-bu');
    const msDropdown = document.getElementById('tc-ms-dropdown');
    const msTrigger = document.getElementById('tc-ms-trigger');
    const selectedBU = buSelect.value;
    if(!msDropdown) return;
    msDropdown.innerHTML = ''; 
    if (!selectedBU) {
        msTrigger.innerHTML = 'Select BU First';
        msDropdown.innerHTML = '<div class="tc-ms-empty">Select a BU Group above</div>';
        return;
    }
    const services = BU_SERVICES_MAP[selectedBU] || [];
    msTrigger.innerHTML = 'All Services Selected';
    let html = `<label class="tc-ms-item" style="font-weight:800; background:var(--surface2);"><input type="checkbox" id="ms-select-all" checked onchange="toggleAllServices(this)">Select All Services</label>`;
    services.forEach(svc => {
        html += `<label class="tc-ms-item"><input type="checkbox" class="ms-svc-cb" value="${svc}" checked onchange="updateMSTriggerText()">${svc}</label>`;
    });
    msDropdown.innerHTML = html;
}

let selectedPanelServices = [];

function updatePanelServices() {
    const buSelect = document.getElementById('panel-bu');
    if(!buSelect) return;
    const selectedBU = buSelect.value;
    
    // Auto-populate all services from that BU
    selectedPanelServices = selectedBU ? [...(BU_SERVICES_MAP[selectedBU] || [])] : [];
    renderServiceTags();
}

function removeService(serviceName) {
    selectedPanelServices = selectedPanelServices.filter(s => s !== serviceName);
    renderServiceTags();
}

function renderServiceTags() {
    const container = document.getElementById('tc-service-tags');
    if (!container) return;
    
    if (selectedPanelServices.length === 0) {
        container.innerHTML = '<div class="tc-ms-empty" style="padding:12px; width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:8px; text-align:left;">No services selected.</div>';
        return;
    }

    // Using the same CSS class as country tags for a consistent look
    container.innerHTML = selectedPanelServices.map(s => `
        <div class="tc-country-tag" style="background:rgba(0, 166, 147, 0.1); color:#00A693; border:1px solid rgba(0, 166, 147, 0.2);">
            ${s}
            <span class="tc-tag-close" onclick="removeService('${s.replace(/'/g, "\\'")}')" title="Remove">✕</span>
        </div>
    `).join('');
}

function toggleMSServices(e) { e.stopPropagation(); const drop = document.getElementById('tc-ms-dropdown'); if(drop) drop.classList.toggle('open'); }
function toggleAllServices(source) { const cbs = document.querySelectorAll('.ms-svc-cb'); cbs.forEach(cb => cb.checked = source.checked); updateMSTriggerText(); }

function updateMSTriggerText() {
    const cbs = document.querySelectorAll('.ms-svc-cb');
    const checkedCbs = document.querySelectorAll('.ms-svc-cb:checked');
    const selectAllCb = document.getElementById('ms-select-all');
    const trigger = document.getElementById('tc-ms-trigger');
    if(!trigger) return;
    if(selectAllCb) selectAllCb.checked = (cbs.length === checkedCbs.length);
    if(checkedCbs.length === 0) trigger.innerHTML = '<span style="color:var(--red);">No Services Selected</span>';
    else if (checkedCbs.length === cbs.length) trigger.innerHTML = 'All Services Selected';
    else if (checkedCbs.length === 1) trigger.innerHTML = checkedCbs[0].value;
    else trigger.innerHTML = `<span style="color:var(--accent); font-weight:800;">${checkedCbs.length} Services Selected</span>`;
}

function updatePanelCountries() {
    const regionSelect = document.getElementById('panel-region');
    if(!regionSelect) return;
    selectedPanelCountries = regionSelect.value ? [...(REGION_COUNTRY_MAP[regionSelect.value] || [])] : [];
    renderCountryTags();
}

function removeCountry(countryName) {
    selectedPanelCountries = selectedPanelCountries.filter(c => c !== countryName);
    renderCountryTags();
}

function renderCountryTags() {
    const container = document.getElementById('tc-country-tags');
    if (!container) return;
    if (selectedPanelCountries.length === 0) {
        container.innerHTML = '<div class="tc-ms-empty" style="padding:12px; width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:8px; text-align:left;">No countries selected. Choose a region above.</div>';
        return;
    }
    container.innerHTML = selectedPanelCountries.map(c => `<div class="tc-country-tag">${c}<span class="tc-tag-close" onclick="removeCountry('${c.replace(/'/g, "\\'")}')" title="Remove">✕</span></div>`).join('');
}

/* ════ TAB, LOGIC & MATH VALIDATION ════ */
function selectTCPill(element) {
    const pills = element.parentElement.querySelectorAll('.tc-pill');
    pills.forEach(p => p.classList.remove('active'));
    element.classList.add('active');
}

function switchTCTab(tab) { tcTab = tab; renderTargetConfig(); }
function toggleTargetView(isChecked) { viewTotalInIndividual = isChecked; renderTargetConfig(); }

function splitEvenly() {
    const node = window.ORG_DATA.find(n => n.id === activeTargetId);
    if (!node) return;
    const directReports = window.ORG_DATA.filter(n => n.managerId === node.id);
    if (directReports.length === 0) return;
    
    const splitAmount = Math.round(node.target / directReports.length);
    directReports.forEach(rep => rep.target = splitAmount);
    
    renderOrgTargetsList();
    renderTargetConfig();
}

function updateRepTarget(repId, value, isSelfOnly = false) {
    const rep = window.ORG_DATA.find(n => n.id === repId);
    if (rep) {
        const numericVal = parseInt(value.replace(/[^0-9.-]+/g,""), 10);
        if (!isNaN(numericVal)) {
            if (isSelfOnly) {
                const directReports = window.ORG_DATA.filter(n => n.managerId === repId);
                const teamTotalValue = directReports.reduce((sum, r) => sum + r.target, 0);
                rep.target = numericVal + teamTotalValue;
            } else {
                rep.target = numericVal;
            }
        }
    }
    renderOrgTargetsList();
    renderTargetConfig();
}

function renderTargetConfig() {
    const container = document.getElementById('targetConfigPanel');
    if (!container) return;

    const node = window.ORG_DATA.find(n => n.id === activeTargetId);
    if (!node) return;

    // CLEAN SINGLE DECLARATION
    const parentNode = window.ORG_DATA.find(n => n.id === node.managerId);
    const reportsToStr = parentNode 
        ? `Reports to: <span style="font-weight:800; color:var(--t1);">${parentNode.name}</span>` 
        : ''; 
    const directReports = window.ORG_DATA.filter(n => n.managerId === node.id);
    const teamRollupVal = directReports.reduce((sum, r) => sum + r.target, 0);
    const totalTargetVal = node.target;
    const selfTargetVal = totalTargetVal - teamRollupVal;
    
    let buOptions = '<option value="">Select BU Group</option>';
    Object.keys(BU_SERVICES_MAP).forEach(bu => buOptions += `<option value="${bu}">${bu}</option>`);

    let regionOptions = '<option value="">Select Region</option>';
    Object.keys(REGION_COUNTRY_MAP).forEach(reg => regionOptions += `<option value="${reg}">${reg}</option>`);

    const headerContent = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
        <div>
            <div style="font-size:16px; font-weight:800; color:var(--t1);">${node.name}</div>
            <div style="font-size:12px; font-weight:600; color:var(--accent); margin-top:2px;">${node.role}</div>
            <div style="font-size:12px; color:var(--t3); margin-top:4px;">${reportsToStr}</div>
        </div>
        
        <div>
            <div class="tc-toggle-wrap" style="margin-bottom: 0; min-width: 300px;">
                <button class="tc-toggle-btn ${tcTab === 'individual' ? 'active' : ''}" onclick="switchTCTab('individual')">👤 Individual</button>
                <button class="tc-toggle-btn ${tcTab === 'rollup' ? 'active' : ''}" onclick="switchTCTab('rollup')">👥 Team Rollup</button>
            </div>
        </div>
    </div>
`;
    
    let bottomContent = '';

    if (tcTab === 'individual') {
        bottomContent = `
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; border-top: 1px solid var(--border); padding-top: 24px;">
            <div>
                <div class="tc-label">Quarter</div>
<div class="tc-pill-grid">
    <div class="tc-pill active" onclick="selectTCPill(this)">Q1</div>
    <div class="tc-pill" onclick="selectTCPill(this)">Q2</div>
    <div class="tc-pill" onclick="selectTCPill(this)">Q3</div>
    <div class="tc-pill" onclick="selectTCPill(this)">Q4</div>
</div>
                <div class="tc-label">Target Type</div>
                <div class="tc-pill-grid cols-3">
                    <div class="tc-pill active" onclick="selectTCPill(this)">Sales</div><div class="tc-pill" onclick="selectTCPill(this)">Partner</div><div class="tc-pill" onclick="selectTCPill(this)">Renewal</div>
                </div>
            </div>
<div>
                <div class="tc-label">BU Group</div>
                <select class="tc-select" id="panel-bu" onchange="updatePanelServices()" style="margin-bottom: 16px;">${buOptions}</select>
                <div class="tc-label">Included Service(s)</div>
                <div class="tc-country-tags-wrap" id="tc-service-tags" style="max-height: 100px;">
                    <div class="tc-ms-empty" style="padding:12px; width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:8px; text-align:left;">Select a BU Group above</div>
                </div>
            </div>
            <div>
                <div class="tc-label">Region</div>
                <select class="tc-select" id="panel-region" style="margin-bottom: 16px;" onchange="updatePanelCountries()">${regionOptions}</select>
                <div class="tc-label">Included Countries</div>
                <div class="tc-country-tags-wrap" id="tc-country-tags" style="max-height: 100px;">
                    <div class="tc-ms-empty" style="padding:12px; width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:8px; text-align:left;">Select a Region above to auto-populate countries</div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                    <div class="tc-label">Reporting Manager</div>
                    <select class="tc-select" style="margin-bottom: 0;">
                        <option>${parentNode ? parentNode.name + ' (' + parentNode.role + ')' : 'N/A'}</option>
                        <option>Sridhar Vembu (CEO)</option>
                    </select>
                </div>
                <div style="background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; padding: 16px; transition: all 0.2s;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 800; color: var(--t1);">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            ${viewTotalInIndividual ? 'Total Target' : 'Self Target'}
                        </div>
                        <label style="display:flex; align-items:center; gap:6px; font-size:10px; font-weight:700; color:var(--t3); cursor:pointer; user-select:none;">
                            <input type="checkbox" onchange="toggleTargetView(this.checked)" ${viewTotalInIndividual ? 'checked' : ''} style="cursor:pointer; accent-color:var(--accent);">
                            Include Team
                        </label>
                    </div>
                    <div style="font-size: 11px; color: var(--t3); margin-bottom: 12px;">
                        ${viewTotalInIndividual ? 'Includes self target + team rollup.' : 'Direct contribution — not from team rollup.'}
                    </div>
                    <div style="display: flex; align-items: center; background: var(--surface); padding: 6px 12px; border-radius: 8px; border: 1px solid var(--border);">
                        <span style="font-size: 15px; font-weight: 800; color: var(--t2); margin-right: 8px;">$</span>
                        <input type="text" value="${(viewTotalInIndividual ? totalTargetVal : selfTargetVal).toLocaleString('en-US')}" onchange="updateRepTarget('${node.id}', this.value, ${!viewTotalInIndividual})" style="background: transparent; border: none; font-size: 15px; font-weight: 800; color: var(--t1); outline: none; width: 100%; text-align: right; font-family: inherit;">
                        <button class="th-icon-btn" style="background: var(--accent2); color: white; border: none; border-radius: 6px; width: 32px; height: 32px; margin-left: 12px; flex-shrink: 0;" onclick="saveNewTarget(this)" title="Save Target">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                        </button>
                    </div>
                    ${viewTotalInIndividual ? `
                    <div style="display:flex; justify-content:space-between; margin-top:16px; padding-top:12px; border-top:1px dashed var(--border-hi);">
                        <div style="font-size:11px;">
                            <div style="color:var(--t3); font-weight:600; margin-bottom:4px;">Self Target</div>
                            <div style="color:var(--t1); font-weight:800;">$${selfTargetVal.toLocaleString('en-US')}</div>
                        </div>
                        <div style="font-size:11px; text-align:right;">
                            <div style="color:var(--t3); font-weight:600; margin-bottom:4px;">Team Roll-up</div>
                            <div style="color:var(--t1); font-weight:800;">$${teamRollupVal.toLocaleString('en-US')}</div>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        </div>`;
    } else if (tcTab === 'rollup') {
        // Fix: Use window.ORG_DATA instead of the old array
        const directReports = window.ORG_DATA.filter(n => n.managerId === node.id);
        const parentTargetValue = node.target;
        
        if (directReports.length === 0) {
            bottomContent = `<div style="padding: 40px; text-align: center; color: var(--t3); font-weight: 600; border-top: 1px solid var(--border); margin-top: 24px; padding-top: 40px;">This person has no direct reports to roll up targets for.</div>`;
        } else {
            const teamTotalValue = directReports.reduce((sum, r) => sum + r.target, 0);
            const isMatch = Math.abs(teamTotalValue - parentTargetValue) < 1;

            const teamRows = directReports.map(rep => {
                return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="color: var(--t3); font-size: 16px; margin-right: 4px;">›</div>
                        <div>
                            <div style="font-size: 13px; font-weight: 800; color: var(--t1);">${rep.name}</div>
                            <div style="font-size: 11px; color: var(--t3); margin-top: 2px;">${rep.role}</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="display: flex; align-items: center; padding: 6px 12px; background: var(--surface2); border-radius: 6px; border: 1px solid var(--border);">
                            <span style="font-size: 12px; color: var(--t2); margin-right: 6px;">$</span>
                            <input type="text" value="${rep.target.toLocaleString('en-US')}" onchange="updateRepTarget('${rep.id}', this.value)" style="width: 120px; background: transparent; border: none; font-size: 13px; font-weight: 800; color: var(--t1); outline: none; text-align: right; font-family: inherit;">
                        </div>
                        <button class="th-icon-btn" style="border: 1px solid var(--border); border-radius: 6px; width: 32px; height: 32px;" onclick="saveNewTarget(this)" title="Save changes">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                        </button>
                    </div>
                </div>`;
            }).join('');

            bottomContent = `
            <div style="display: grid; grid-template-columns: 1fr 280px; gap: 32px; border-top: 1px solid var(--border); padding-top: 24px;">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <div style="font-size: 14px; font-weight: 800; color: var(--t1); display: flex; align-items: center; gap: 8px;">
                            👥 Team Members (${directReports.length})
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn-ghost" onclick="splitEvenly()" style="padding: 6px 14px; font-size: 12px; display: flex; align-items: center; gap: 6px;">
                                🔁 Even Split
                            </button>
                            <button class="btn-accent" style="padding: 6px 14px; font-size: 12px; background: rgba(46, 168, 122, 0.15); color: var(--green); border: 1px solid var(--green); box-shadow: none;" onclick="saveNewTarget(this)">💾 Save All</button>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        ${teamRows}
                    </div>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <div class="tc-label" style="margin-top:0; margin-bottom: 6px;">Reporting Manager</div>
                        <select class="tc-select" style="margin-bottom: 20px;">
                            <option>${parentNode ? parentNode.name + ' (' + parentNode.role + ')' : 'N/A'}</option>
                            <option>Sridhar Vembu (CEO)</option>
                        </select>
                        <div style="font-size: 14px; font-weight: 800; color: var(--t1); margin-bottom: 4px;">Total Target — 2026</div>
                        <div style="font-size: 11px; color: var(--t3); margin-bottom: 10px;">Includes self target + team rollup.</div>
                        <div style="display: flex; align-items: center; background: var(--surface2); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border);">
                            <span style="font-size: 14px; font-weight: 800; color: var(--t2); margin-right: 8px;">$</span>
                            <input type="text" value="${parentTargetValue.toLocaleString('en-US')}" onchange="updateRepTarget('${node.id}', this.value)" style="background: transparent; border: none; font-size: 14px; font-weight: 800; color: var(--t1); outline: none; width: 100%; text-align: right; font-family: inherit;">
                        </div>
                    </div>

                    <div style="background: var(--surface2); padding: 16px; border-radius: 10px; border: 1px solid var(--border);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-size: 12px; color: var(--t2); font-weight: 600;">Team total</span>
                            <span style="font-size: 13px; font-weight: 800; color: var(--t1);">$${teamTotalValue.toLocaleString('en-US')}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-size: 12px; color: var(--t2); font-weight: 600;">Parent target</span>
                            <span style="font-size: 13px; font-weight: 800; color: var(--t1);">$${parentTargetValue.toLocaleString('en-US')}</span>
                        </div>
                        <div style="height: 1px; background: var(--border); margin: 10px 0;"></div>
                        ${isMatch ? 
                            `<div style="font-size: 11px; font-weight: 700; color: var(--green); display: flex; align-items: center; gap: 6px;">✅ Targets match perfectly</div>` : 
                            `<div style="font-size: 11px; font-weight: 700; color: var(--amber); display: flex; align-items: center; gap: 6px;">⚠️ Child targets don't match parent</div>`
                        }
                    </div>
                </div>
            </div>`;
        }
    }
    container.innerHTML = headerContent + bottomContent;
}

function selectTargetNode(id) {
    activeTargetId = id;
    const node = window.ORG_DATA.find(n => n.id === id);
    if (!node) return;

    tcTab = 'individual'; 
    viewTotalInIndividual = false; 

    // 1. Prepare the Global Tag States before rendering
    const regionKey = Object.keys(REGION_COUNTRY_MAP).find(k => k === node.region) || node.region;
    selectedPanelCountries = [...(REGION_COUNTRY_MAP[regionKey] || [])];
    selectedPanelServices = node.services === "All Zoho Products" ? [] : node.services.split(', ');

    // 2. Redraw the HTML Components
    renderOrgTargetsList(); 
    renderTargetConfig();

    // 3. Force the DOM elements to match the data
    setTimeout(() => {
        const buSelect = document.getElementById('panel-bu');
        const regSelect = document.getElementById('panel-region');
        
        // Find which BU this person belongs to
        let matchedBU = "";
        for (const [bu, services] of Object.entries(BU_SERVICES_MAP)) {
            if (services.some(s => node.services.includes(s))) {
                matchedBU = bu;
                break;
            }
        }

        if (buSelect) buSelect.value = matchedBU;
        if (regSelect) regSelect.value = regionKey;

        // Render the tags into the newly created containers
        renderCountryTags();
        renderServiceTags();

        // 4. Highlight the Manager in the tree
        const managerId = node.managerId;
        if (managerId) {
            const allCards = document.querySelectorAll('.wf-card');
            allCards.forEach(card => {
                if (card.getAttribute('onclick').includes(`'${managerId}'`)) {
                    card.classList.add('manager-highlight');
                }
            });
        }
    }, 50); // Small delay to ensure the DOM is ready
}

// Move the sync logic to a helper to keep it clean
function syncSelectionToUI(node) {
    const regionKey = Object.keys(REGION_COUNTRY_MAP).find(k => k === node.region) || node.region;
    selectedPanelCountries = [...(REGION_COUNTRY_MAP[regionKey] || [])];
    selectedPanelServices = node.services === "All Zoho Products" ? [] : node.services.split(', ');

    const buSelect = document.getElementById('panel-bu');
    const regSelect = document.getElementById('panel-region');
    
    if (buSelect) {
        let matchedBU = "";
        for (const [bu, services] of Object.entries(BU_SERVICES_MAP)) {
            if (services.some(s => node.services.includes(s))) {
                matchedBU = bu;
                break;
            }
        }
        buSelect.value = matchedBU;
    }
    if (regSelect) regSelect.value = regionKey;

    renderCountryTags();
    renderServiceTags();
}

function saveNewTarget(btn) {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '✓';
    setTimeout(() => { btn.innerHTML = originalHTML; }, 1500);
}

window.addEventListener('DOMContentLoaded', () => {
    renderOrgTargetsList();
    renderTargetConfig();
});