/* ════ ORGANIZATION TARGETS DATA & LOGIC ════ */
let ORG_TARGETS = [
    // Level 0: Top Node
    { id: 't1', level: 0, name: 'Peter Balaji', initials: 'PB', role: 'Director of Sales', actual: 29.1, target: 25.0, pct: 116, reports: 3, parentId: null, isExpanded: true },
    
    // Level 1: 3 Direct Reports to Peter
    { id: 't2', level: 1, name: 'Jinil K Sreejayan', initials: 'JK', role: 'Assistant Director', actual: 8.4, target: 13.8, pct: 61, reports: 2, parentId: 't1', isExpanded: true },
    { id: 't3', level: 1, name: 'Yogesh Manoharan', initials: 'YM', role: 'Assistant Director', actual: 13.3, target: 11.3, pct: 118, reports: 3, parentId: 't1', isExpanded: false },
    { id: 't11', level: 1, name: 'Priya Suresh', initials: 'PS', role: 'Assistant Director', actual: 7.4, target: 8.0, pct: 92, reports: 4, parentId: 't1', isExpanded: false },

    // Level 2: 2 Direct Reports to Jinil
    { id: 't4', level: 2, name: 'Harikrishna Reddy', initials: 'HR', role: 'Sales Head', actual: 4.1, target: 6.0, pct: 68, reports: 0, parentId: 't2', isExpanded: false },
    { id: 't5', level: 2, name: 'Jose Valentin', initials: 'JV', role: 'Sales Head', actual: 4.3, target: 7.8, pct: 55, reports: 0, parentId: 't2', isExpanded: false },

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
    const rawTargetValue = (node.target * 1000000).toLocaleString('en-US');

    container.innerHTML = `
        <div class="tc-header">
            <div class="tc-name">${node.name}</div>
            <div class="tc-role">${node.role}</div>
            <div class="tc-reports">${reportsToStr}</div>
        </div>

        <div class="tc-toggle-wrap">
            <button class="tc-toggle-btn active">👤 Individual</button>
            <button class="tc-toggle-btn">👥 Team Rollup</button>
        </div>

        <div class="tc-section-title">🏷️ TARGET DETAILS</div>
        
        <div class="tc-label">Quarter</div>
        <div class="tc-pill-grid">
            <div class="tc-pill active">Q1</div>
            <div class="tc-pill">Q2</div>
            <div class="tc-pill">Q3</div>
            <div class="tc-pill">Q4</div>
        </div>

        <div class="tc-label">Target Type</div>
        <div class="tc-pill-grid cols-3">
            <div class="tc-pill active">Sales</div>
            <div class="tc-pill">Partner</div>
            <div class="tc-pill">Renewal</div>
        </div>

        <div class="tc-label">BU Group</div>
        <select class="tc-select">
            <option>BI & Analytics</option>
            <option>CRM</option>
            <option>Marketing</option>
        </select>

        <div class="tc-label">Services (1 selected)</div>
        <div class="tc-tags">
            <div class="tc-tag active">Analytics</div>
            <div class="tc-tag">Analytics On Premise</div>
            <div class="tc-tag">Apptics</div>
            <div class="tc-tag">DataPrep</div>
        </div>

        <div class="tc-section-title" style="margin-top:24px;">🌐 Country / State</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <select class="tc-select" style="margin-bottom:0;"><option>India</option><option>USA</option></select>
            <select class="tc-select" style="margin-bottom:0;"><option>Delhi</option><option>Karnataka</option></select>
        </div>
        <div style="font-size:11px; color:var(--t3); margin-top:8px; display:flex; align-items:center; gap:6px;">
            Region: <span style="background:rgba(46,168,122,0.1); color:var(--green); padding:2px 8px; border-radius:12px;">India North</span>
        </div>

        <div class="tc-section-title" style="margin-top:24px;">👤 REPORTING MANAGER</div>
        <select class="tc-select">
            <option>${parentNode ? parentNode.name + ' (' + parentNode.role + ')' : 'N/A'}</option>
            <option>Sridhar Vembu (CEO)</option>
        </select>

        <div class="tc-save-wrap">
            <div>
                <div style="font-size:13px; font-weight:800; color:var(--t1); display:flex; align-items:center; gap:6px;">👤 Self Target</div>
                <div style="font-size:11px; color:var(--t3); margin-top:2px;">Direct contribution — not from team rollup.</div>
            </div>
            <div class="tc-save-inner">
                <span style="font-size:16px; font-weight:800; color:var(--t2); margin-left:12px;">$</span>
                <input type="text" class="tc-input-lg" value="${rawTargetValue}">
                <button class="tc-save-btn" onclick="saveNewTarget(this)" title="Save Target">💾</button>
            </div>
        </div>
    `;
}

function selectTargetNode(id) {
    activeTargetId = id;
    renderOrgTargetsList();
    renderTargetConfig();
}

function saveNewTarget(btn) {
    btn.innerHTML = '✓';
    setTimeout(() => { btn.innerHTML = '💾'; }, 1500);
}

window.addEventListener('DOMContentLoaded', () => {
    renderOrgTargetsList();
    renderTargetConfig();
});