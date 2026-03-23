/* ════ ORGANIZATION TARGETS DATA & LOGIC ════ */
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

let ORG_TARGETS = [
    // Level 0: Top Node
    { id: 't1', level: 0, name: 'Peter Balaji', initials: 'PB', role: 'Director of Sales', actual: 29.1, target: 25.0, pct: 116, reports: 3, parentId: null, isExpanded: true },
    
    // Level 1: 3 Direct Reports to Peter
    { id: 't2', level: 1, name: 'Jinil K Sreejayan', initials: 'JK', role: 'Assistant Director', actual: 8.4, target: 13.75, pct: 61, reports: 2, parentId: 't1', isExpanded: true },
    { id: 't3', level: 1, name: 'Yogesh Manoharan', initials: 'YM', role: 'Assistant Director', actual: 13.3, target: 11.3, pct: 118, reports: 3, parentId: 't1', isExpanded: false },
    { id: 't11', level: 1, name: 'Priya Suresh', initials: 'PS', role: 'Assistant Director', actual: 7.4, target: 8.0, pct: 92, reports: 4, parentId: 't1', isExpanded: false },

    // Level 2: 2 Direct Reports to Jinil
    { id: 't4', level: 2, name: 'Harikrishna Reddy', initials: 'HR', role: 'Sales Head', actual: 4.1, target: 6.25, pct: 68, reports: 0, parentId: 't2', isExpanded: false },
    { id: 't5', level: 2, name: 'Jose Valentin', initials: 'JV', role: 'Sales Head', actual: 4.3, target: 7.5, pct: 55, reports: 0, parentId: 't2', isExpanded: false },

    // Level 2: 3 Direct Reports to Yogesh
    { id: 't7', level: 2, name: 'Mahendra A', initials: 'MA', role: 'Sales Manager', actual: 5.1, target: 4.6, pct: 110, reports: 0, parentId: 't3', isExpanded: false },
    { id: 't8', level: 2, name: 'Hariharan V', initials: 'HV', role: 'Sales Manager', actual: 4.2, target: 3.5, pct: 120, reports: 0, parentId: 't3', isExpanded: false },
    { id: 't12', level: 2, name: 'Arun Natarajan', initials: 'AN', role: 'Sales Manager', actual: 4.0, target: 3.2, pct: 125, reports: 0, parentId: 't3', isExpanded: false },

    // Level 2: 4 Direct Reports to Priya
    { id: 't13', level: 2, name: 'Kavitha Rajan', initials: 'KR', role: 'Sales Head', actual: 2.1, target: 2.0, pct: 105, reports: 0, parentId: 't11', isExpanded: false },
    { id: 't14', level: 2, name: 'Nisha Goyal', initials: 'NG', role: 'Sales Manager', actual: 1.8, target: 2.0, pct: 90, reports: 0, parentId: 't11', isExpanded: false },
    { id: 't15', level: 2, name: 'Sean O\'Brien', initials: 'SO', role: 'Sales Manager', actual: 1.5, target: 2.0, pct: 75, reports: 0, parentId: 't11', isExpanded: false },
    { id: 't16', level: 2, name: 'Meena Krishnan', initials: 'MK', role: 'Sales Head', actual: 2.0, target: 2.0, pct: 100, reports: 0, parentId: 't11', isExpanded: false }
];

let activeTargetId = 't2'; 
let tcTab = 'individual'; 
let selectedPanelCountries = [];
let viewTotalInIndividual = false; // New state to track the checkbox

function formatM(val) {
    if (val < 1) return '$' + Math.round(val * 1000) + 'K';
    return '$' + val.toFixed(1) + 'M';
}

function getPctColor(pct) {
    if (pct >= 100) return 'var(--green)';
    if (pct >= 60) return 'var(--amber)';
    return 'var(--red)';
}

function toggleExpand(event, id) {
    event.stopPropagation(); 
    const node = ORG_TARGETS.find(n => n.id === id);
    if (node) {
        node.isExpanded = !node.isExpanded;
        renderOrgTargetsList();
    }
}

function getVisibleNodes() {
    const visible = [];
    
    function traverse(parentId) {
        ORG_TARGETS.filter(n => n.parentId === parentId).forEach(child => {
            visible.push(child);
            if (child.isExpanded) traverse(child.id);
        });
    }
    
    ORG_TARGETS.filter(n => n.parentId === null).forEach(root => {
        visible.push(root);
        if (root.isExpanded) traverse(root.id);
    });
    
    return visible;
}

/* --- DROPDOWNS & MULTI-SELECT LOGIC --- */
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
    
    let html = `
        <label class="tc-ms-item" style="font-weight:800; background:var(--surface2);">
            <input type="checkbox" id="ms-select-all" checked onchange="toggleAllServices(this)">
            Select All Services
        </label>
    `;
    
    services.forEach(svc => {
        html += `
        <label class="tc-ms-item">
            <input type="checkbox" class="ms-svc-cb" value="${svc}" checked onchange="updateMSTriggerText()">
            ${svc}
        </label>`;
    });
    
    msDropdown.innerHTML = html;
}

function toggleMSServices(e) {
    e.stopPropagation();
    const drop = document.getElementById('tc-ms-dropdown');
    if(drop) drop.classList.toggle('open');
}

function toggleAllServices(source) {
    const cbs = document.querySelectorAll('.ms-svc-cb');
    cbs.forEach(cb => cb.checked = source.checked);
    updateMSTriggerText();
}

function updateMSTriggerText() {
    const cbs = document.querySelectorAll('.ms-svc-cb');
    const checkedCbs = document.querySelectorAll('.ms-svc-cb:checked');
    const selectAllCb = document.getElementById('ms-select-all');
    const trigger = document.getElementById('tc-ms-trigger');
    if(!trigger) return;
    
    if(selectAllCb) selectAllCb.checked = (cbs.length === checkedCbs.length);
    
    if(checkedCbs.length === 0) {
        trigger.innerHTML = '<span style="color:var(--red);">No Services Selected</span>';
    } else if (checkedCbs.length === cbs.length) {
        trigger.innerHTML = 'All Services Selected';
    } else if (checkedCbs.length === 1) {
        trigger.innerHTML = checkedCbs[0].value;
    } else {
        trigger.innerHTML = `<span style="color:var(--accent); font-weight:800;">${checkedCbs.length} Services Selected</span>`;
    }
}

function updatePanelCountries() {
    const regionSelect = document.getElementById('panel-region');
    if(!regionSelect) return;
    const region = regionSelect.value;
    
    if (!region) {
        selectedPanelCountries = [];
    } else {
        selectedPanelCountries = [...(REGION_COUNTRY_MAP[region] || [])];
    }
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

    container.innerHTML = selectedPanelCountries.map(c => {
        const escaped = c.replace(/'/g, "\\'");
        return `
        <div class="tc-country-tag">
            ${c}
            <span class="tc-tag-close" onclick="removeCountry('${escaped}')" title="Remove">✕</span>
        </div>
        `;
    }).join('');
}

/* --- TAB, LOGIC & MATH VALDITATION --- */
function selectTCPill(element) {
    const parent = element.parentElement;
    const pills = parent.querySelectorAll('.tc-pill');
    pills.forEach(p => p.classList.remove('active'));
    element.classList.add('active');
}

function switchTCTab(tab) {
    tcTab = tab;
    renderTargetConfig();
}

function toggleTargetView(isChecked) {
    viewTotalInIndividual = isChecked;
    renderTargetConfig();
}

function splitEvenly() {
    const node = ORG_TARGETS.find(n => n.id === activeTargetId);
    if (!node) return;
    
    const directReports = ORG_TARGETS.filter(n => n.parentId === node.id);
    if (directReports.length === 0) return;
    
    const parentTargetVal = node.target * 1000000;
    const splitAmount = parentTargetVal / directReports.length;
    
    directReports.forEach(rep => {
        rep.target = parseFloat((splitAmount / 1000000).toFixed(4));
    });
    
    renderOrgTargetsList();
    renderTargetConfig();
}

function updateRepTarget(repId, value, isSelfOnly = false) {
    const rep = ORG_TARGETS.find(n => n.id === repId);
    if (rep) {
        const numericVal = parseFloat(value.replace(/[^0-9.-]+/g,""));
        if (!isNaN(numericVal)) {
            if (isSelfOnly) {
                // Find team total and add it to the newly input Self Target to set the new Total Target
                const directReports = ORG_TARGETS.filter(n => n.parentId === repId);
                const teamTotalValue = directReports.reduce((sum, r) => sum + (r.target * 1000000), 0);
                rep.target = (numericVal + teamTotalValue) / 1000000;
            } else {
                // Update Total Target directly
                rep.target = numericVal / 1000000;
            }
        }
    }
    renderOrgTargetsList();
    renderTargetConfig();
}

function renderOrgTargetsList() {
    const container = document.getElementById('newHierTree');
    if (!container) return;

    const visibleNodes = getVisibleNodes();

    container.innerHTML = visibleNodes.map(node => {
        const isActive = node.id === activeTargetId ? 'active' : '';
        const indentClass = node.level > 0 ? `ot-indent-${node.level}` : '';
        const pctCol = getPctColor(node.pct);
        const hasChildren = ORG_TARGETS.some(n => n.parentId === node.id);
        
        const arrowStr = hasChildren 
            ? `<span style="color:var(--t3); margin-right:8px; font-size:10px; cursor:pointer; padding:4px;" onclick="toggleExpand(event, '${node.id}')">${node.isExpanded ? '▼' : '▶'}</span>` 
            : `<span style="width:22px; display:inline-block;"></span>`;

        return `
        <div class="ot-node ${isActive} ${indentClass}" onclick="selectTargetNode('${node.id}')">
            <div style="display:flex; align-items:center;">
                ${arrowStr}
                <div class="ot-av-wrap">
                    <div class="ot-av" style="border-color:${isActive ? 'var(--accent)' : 'var(--surface)'}">${node.initials}</div>
                    <div class="ot-av-badge">${node.reports}</div>
                </div>
                <div class="ot-info">
                    <div class="ot-name">
                        ${node.name} 
                        <span class="ot-swap-icon">⇄</span>
                        <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${pctCol}"></span>
                    </div>
                    <div class="ot-role">${node.role}</div>
                </div>
            </div>
            <div class="ot-stats">
                <div class="ot-pct" style="color:${pctCol}">${node.pct}%</div>
                <div class="ot-stat-main">${formatM(node.actual)} <span>/ ${formatM(node.target)}</span></div>
            </div>
        </div>`;
    }).join('');
}

function renderTargetConfig() {
    const container = document.getElementById('targetConfigPanel');
    if (!container) return;

    const node = ORG_TARGETS.find(n => n.id === activeTargetId);
    if (!node) return;

    const parentNode = ORG_TARGETS.find(n => n.id === node.parentId);
    const reportsToStr = parentNode ? `Reports to: <span>${parentNode.name}</span>` : 'Head of Department';
    
    // Core Math for Individual Box breakdown
    const directReports = ORG_TARGETS.filter(n => n.parentId === node.id);
    const teamRollupVal = directReports.reduce((sum, r) => sum + Math.round(r.target * 1000000), 0);
    const totalTargetVal = Math.round(node.target * 1000000);
    const selfTargetVal = totalTargetVal - teamRollupVal;
    
    const rawTargetValue = totalTargetVal.toLocaleString('en-US');

    let buOptions = '<option value="">Select BU Group</option>';
    Object.keys(BU_SERVICES_MAP).forEach(bu => {
        buOptions += `<option value="${bu}">${bu}</option>`;
    });

    let regionOptions = '<option value="">Select Region</option>';
    Object.keys(REGION_COUNTRY_MAP).forEach(reg => {
        regionOptions += `<option value="${reg}">${reg}</option>`;
    });

    const headerContent = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
            <div>
                <div style="font-size:20px; font-weight:800; color:var(--t1);">${node.name}</div>
                <div style="font-size:13px; font-weight:600; color:var(--accent); margin-top:2px;">${node.role}</div>
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
            <!-- Column 1: Time & Type -->
            <div>
                <div class="tc-label">Quarter</div>
                <div class="tc-pill-grid" style="margin-bottom: 16px;">
                    <div class="tc-pill active" onclick="selectTCPill(this)">Q1</div>
                    <div class="tc-pill" onclick="selectTCPill(this)">Q2</div>
                    <div class="tc-pill" onclick="selectTCPill(this)">Q3</div>
                    <div class="tc-pill" onclick="selectTCPill(this)">Q4</div>
                </div>
                <div class="tc-label">Target Type</div>
                <div class="tc-pill-grid cols-3">
                    <div class="tc-pill active" onclick="selectTCPill(this)">Sales</div>
                    <div class="tc-pill" onclick="selectTCPill(this)">Partner</div>
                    <div class="tc-pill" onclick="selectTCPill(this)">Renewal</div>
                </div>
            </div>

            <!-- Column 2: Product & Service -->
            <div>
                <div class="tc-label">BU Group</div>
                <select class="tc-select" id="panel-bu" onchange="updatePanelServices()" style="margin-bottom: 16px;">
                    ${buOptions}
                </select>

                <div class="tc-label">Service(s)</div>
                <div class="tc-multiselect-wrap" id="tc-ms-wrap">
                    <div class="tc-select tc-ms-trigger" onclick="toggleMSServices(event)" id="tc-ms-trigger">
                        Select BU First
                    </div>
                    <div class="tc-ms-dropdown" id="tc-ms-dropdown">
                        <div class="tc-ms-empty">Select a BU Group above</div>
                    </div>
                </div>
            </div>

            <!-- Column 3: Geography -->
            <div>
                <div class="tc-label">Region</div>
                <select class="tc-select" id="panel-region" style="margin-bottom: 16px;" onchange="updatePanelCountries()">
                    ${regionOptions}
                </select>

                <div class="tc-label">Included Countries</div>
                <div class="tc-country-tags-wrap" id="tc-country-tags" style="max-height: 100px;">
                    <div class="tc-ms-empty" style="padding:12px; width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:8px; text-align:left;">Select a Region above to auto-populate countries</div>
                </div>
            </div>

            <!-- Column 4: Hierarchy Info & Self Target -->
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
                    </div>
                    ` : ''}

                </div>
            </div>
        </div>
        `;
    } else if (tcTab === 'rollup') {
        const directReports = ORG_TARGETS.filter(n => n.parentId === node.id);
        const parentTargetValue = node.target * 1000000;
        
        if (directReports.length === 0) {
            bottomContent = `<div style="padding: 40px; text-align: center; color: var(--t3); font-weight: 600; border-top: 1px solid var(--border); margin-top: 24px; padding-top: 40px;">This person has no direct reports to roll up targets for.</div>`;
        } else {
            const teamTotalValue = directReports.reduce((sum, r) => sum + (r.target * 1000000), 0);
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
                            <input type="text" value="${(rep.target * 1000000).toLocaleString('en-US')}" onchange="updateRepTarget('${rep.id}', this.value)" style="width: 100px; background: transparent; border: none; font-size: 13px; font-weight: 800; color: var(--t1); outline: none; text-align: right; font-family: inherit;">
                        </div>
                        <button class="th-icon-btn" style="border: 1px solid var(--border); border-radius: 6px; width: 32px; height: 32px;" onclick="saveNewTarget(this)" title="Save changes">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                        </button>
                    </div>
                </div>`;
            }).join('');

            bottomContent = `
            <div style="display: grid; grid-template-columns: 1fr 280px; gap: 32px; border-top: 1px solid var(--border); padding-top: 24px;">
                
                <!-- Left Side: Team List -->
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
                
                <!-- Right Side: Summary Panel -->
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
                            `<div style="font-size: 11px; font-weight: 700; color: var(--green); display: flex; align-items: center; gap: 6px;">
                                ✅ Targets match perfectly
                            </div>` : 
                            `<div style="font-size: 11px; font-weight: 700; color: var(--amber); display: flex; align-items: center; gap: 6px;">
                                ⚠️ Child targets don't match parent
                            </div>`
                        }
                    </div>
                </div>

            </div>
            `;
        }
    }

    container.innerHTML = headerContent + bottomContent;
}

function selectTargetNode(id) {
    activeTargetId = id;
    tcTab = 'individual'; 
    viewTotalInIndividual = false; // reset the checkbox
    renderOrgTargetsList();
    renderTargetConfig();
}

function saveNewTarget(btn) {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '✓';
    setTimeout(() => { 
        btn.innerHTML = originalHTML;
    }, 1500);
}

window.addEventListener('DOMContentLoaded', () => {
    renderOrgTargetsList();
    renderTargetConfig();
});