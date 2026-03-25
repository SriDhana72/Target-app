/* ════ QUARTERLY BREAKDOWN HIERARCHY LOGIC ════ */
function toggleDropdown(dataId, arrowId, event) {
    if (event.target.closest('.filter-button-group') || event.target.closest('input')) { return; }
    const nestedData = document.getElementById(dataId);
    const arrowIcon = document.getElementById(arrowId);
    if (!nestedData) return;
    if (nestedData.classList.contains('hidden')) {
        nestedData.classList.remove('hidden');
        if(arrowIcon) arrowIcon.classList.add('rotate-90');
    } else {
        nestedData.classList.add('hidden');
        if(arrowIcon) arrowIcon.classList.remove('rotate-90');
    }
}

let currentGlobalFilter = 'all';

// Updated data to match the new Top Performer Names
const summaryData = {
    ananya: {
        target:    { all: '$1.92M',   my_target: '$400K', my_team: '$1.52M' },
        achieved:  { all: '$1.50M',   my_target: '$288K', my_team: '$1.21M' },
        gap:       { all: '-$420K',   my_target: '-$112K', my_team: '-$308K' },
        percentage:{ all: '78%',      my_target: '72%',   my_team: '80%' }
    },
    kavitha: {
        target:    { all: '$750.0K', my_target: '$200K', my_team: '$550.0K' },
        achieved:  { all: '$525.0K', my_target: '$160K', my_team: '$365.0K' },
        gap:       { all: '-$225.0K',my_target: '-$40K', my_team: '-$185.0K' },
        percentage:{ all: '70%',      my_target: '80%',  my_team: '66%' }
    },
    arjun: {
        target:    { all: '$350.0K', my_target: '$350.0K', my_team: '$0' },
        achieved:  { all: '$255.5K', my_target: '$255.5K', my_team: '$0' },
        gap:       { all: '-$94.5K', my_target: '-$94.5K', my_team: '$0' },
        percentage:{ all: '73%',      my_target: '73%',    my_team: '0%' }
    },
    rajesh: {
        target:    { all: '$1.45M',   my_target: '$450K', my_team: '$1.00M' },
        achieved:  { all: '$1.33M',   my_target: '$405K', my_team: '$925K' },
        gap:       { all: '-$120K',   my_target: '-$45K', my_team: '-$75K' },
        percentage:{ all: '91%',      my_target: '90%',   my_team: '92%' }
    },
    meena: {
        target:    { all: '$400.0K', my_target: '$400.0K', my_team: '$0' },
        achieved:  { all: '$380.0K', my_target: '$380.0K', my_team: '$0' },
        gap:       { all: '-$20.0K', my_target: '-$20.0K', my_team: '$0' },
        percentage:{ all: '95%',      my_target: '95%',    my_team: '0%' }
    }
};

/* --- NEW SEARCH HIGHLIGHT FUNCTION --- */
function searchQuarterlyName() {
    const term = document.getElementById('qbSearchInput').value.toLowerCase();
    const nodes = document.querySelectorAll('#quarterly-breakdown-section .hier-node');

    nodes.forEach(node => {
        const nameEl = node.querySelector('.node-name');
        if (!nameEl) return;

        const nameText = nameEl.textContent.toLowerCase();
        
        if (term.length > 0 && nameText.includes(term)) {
            // Add Highlight
            node.classList.add('qb-highlight-green');
            
            // Auto-expand the matched node
            const onclickAttr = node.getAttribute('onclick');
            if(onclickAttr) {
                const match = onclickAttr.match(/'([^']+)'/);
                if (match && match[1]) {
                    const dataPanel = document.getElementById(match[1]);
                    const arrowIcon = node.querySelector('.node-arrow');
                    
                    if (dataPanel && dataPanel.classList.contains('hidden')) {
                        dataPanel.classList.remove('hidden');
                        if (arrowIcon) arrowIcon.classList.add('rotate-90');
                    }
                }
            }
        } else {
            // Remove Highlight if no match or search is empty
            node.classList.remove('qb-highlight-green');
        }
    });
}

const quarterlyData = {
    peter: {
        all: [{ q: 'Q1', target: '$450K', achievement: '$420K', gap: '-$30K', pipeline: '$500K', prediction: '$480K', percentage: '93%' },{ q: 'Q2', target: '$480K', achievement: '$450K', gap: '-$30K', pipeline: '$550K', prediction: '$500K', percentage: '94%' },{ q: 'Q3', target: '$500K', achievement: '$480K', gap: '-$20K', pipeline: '$600K', prediction: '$520K', percentage: '96%' },{ q: 'Q4', target: '$500K', achievement: '$0',    gap: '-$500K', pipeline: '$650K', prediction: '$550K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$100K', achievement: '$95K', gap: '-$5K', pipeline: '$120K', prediction: '$110K', percentage: '95%' },{ q: 'Q2', target: '$100K', achievement: '$98K', gap: '-$2K', pipeline: '$130K', prediction: '$115K', percentage: '98%' },{ q: 'Q3', target: '$100K', achievement: '$95K',   gap: '-$5K', pipeline: '$140K', prediction: '$120K', percentage: '95%' },{ q: 'Q4', target: '$100K', achievement: '$0',   gap: '-$100K', pipeline: '$150K', prediction: '$125K', percentage: '0%' }],
        my_team: [{ q: 'Q1', target: '$350K', achievement: '$325K', gap: '-$25K', pipeline: '$380K', prediction: '$370K', percentage: '93%' },{ q: 'Q2', target: '$380K', achievement: '$352K', gap: '-$28K', pipeline: '$420K', prediction: '$385K', percentage: '93%' },{ q: 'Q3', target: '$400K', achievement: '$385K',    gap: '-$15K', pipeline: '$460K', prediction: '$400K', percentage: '96%' },{ q: 'Q4', target: '$400K', achievement: '$0',    gap: '-$400K', pipeline: '$500K', prediction: '$425K', percentage: '0%' }]
    },
    logan: {
        all: [{ q: 'Q1', target: '$180K', achievement: '$170K', gap: '-$10K', pipeline: '$200K', prediction: '$190K', percentage: '94%' },{ q: 'Q2', target: '$185K', achievement: '$175K', gap: '-$10K', pipeline: '$210K', prediction: '$195K', percentage: '95%' },{ q: 'Q3', target: '$190K', achievement: '$180K',    gap: '-$10K', pipeline: '$220K', prediction: '$200K', percentage: '95%' },{ q: 'Q4', target: '$195K', achievement: '$0',    gap: '-$195K', pipeline: '$230K', prediction: '$205K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$50K', achievement: '$48K', gap: '-$2K', pipeline: '$60K', prediction: '$55K', percentage: '96%' },{ q: 'Q2', target: '$50K', achievement: '$49K', gap: '-$1K', pipeline: '$65K', prediction: '$58K', percentage: '98%' },{ q: 'Q3', target: '$50K', achievement: '$48K',   gap: '-$2K', pipeline: '$70K', prediction: '$60K', percentage: '96%' },{ q: 'Q4', target: '$50K', achievement: '$0',   gap: '-$50K', pipeline: '$75K', prediction: '$62K', percentage: '0%' }],
        my_team: [{ q: 'Q1', target: '$130K', achievement: '$122K', gap: '-$8K', pipeline: '$140K', prediction: '$135K', percentage: '94%' },{ q: 'Q2', target: '$135K', achievement: '$126K', gap: '-$9K', pipeline: '$145K', prediction: '$137K', percentage: '93%' },{ q: 'Q3', target: '$140K', achievement: '$132K',    gap: '-$8K', pipeline: '$150K', prediction: '$140K', percentage: '94%' },{ q: 'Q4', target: '$145K', achievement: '$0',    gap: '-$145K', pipeline: '$155K', prediction: '$143K', percentage: '0%' }]
    },
    jinil: {
        all: [{ q: 'Q1', target: '$185K', achievement: '$178K', gap: '-$7K', pipeline: '$200K', prediction: '$195K', percentage: '96%' },{ q: 'Q2', target: '$190K', achievement: '$182K', gap: '-$8K', pipeline: '$210K', prediction: '$200K', percentage: '96%' },{ q: 'Q3', target: '$195K', achievement: '$190K',    gap: '-$5K', pipeline: '$220K', prediction: '$210K', percentage: '97%' },{ q: 'Q4', target: '$195K', achievement: '$0',    gap: '-$195K', pipeline: '$230K', prediction: '$215K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$50K', achievement: '$49K', gap: '-$1K', pipeline: '$60K', prediction: '$58K', percentage: '98%' },{ q: 'Q2', target: '$50K', achievement: '$49K', gap: '-$1K', pipeline: '$65K', prediction: '$60K', percentage: '98%' },{ q: 'Q3', target: '$55K', achievement: '$54K',   gap: '-$1K', pipeline: '$70K', prediction: '$65K', percentage: '98%' },{ q: 'Q4', target: '$55K', achievement: '$0',   gap: '-$55K', pipeline: '$75K', prediction: '$68K', percentage: '0%' }],
        my_team: [{ q: 'Q1', target: '$135K', achievement: '$129K', gap: '-$6K', pipeline: '$140K', prediction: '$137K', percentage: '96%' },{ q: 'Q2', target: '$140K', achievement: '$133K', gap: '-$7K', pipeline: '$145K', prediction: '$140K', percentage: '95%' },{ q: 'Q3', target: '$140K', achievement: '$136K',    gap: '-$4K', pipeline: '$150K', prediction: '$145K', percentage: '97%' },{ q: 'Q4', target: '$140K', achievement: '$0',    gap: '-$140K', pipeline: '$155K', prediction: '$147K', percentage: '0%' }]
    },
    binny: {
        all: [{ q: 'Q1', target: '$70K', achievement: '$65K', gap: '-$5K', pipeline: '$80K', prediction: '$75K', percentage: '93%' },{ q: 'Q2', target: '$75K', achievement: '$70K', gap: '-$5K', pipeline: '$85K', prediction: '$80K', percentage: '93%' },{ q: 'Q3', target: '$80K', achievement: '$75K', gap: '-$5K', pipeline: '$90K', prediction: '$85K', percentage: '94%' },{ q: 'Q4', target: '$85K', achievement: '$0', gap: '-$85K', pipeline: '$95K', prediction: '$90K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$70K', achievement: '$65K', gap: '-$5K', pipeline: '$80K', prediction: '$75K', percentage: '93%' },{ q: 'Q2', target: '$75K', achievement: '$70K', gap: '-$5K', pipeline: '$85K', prediction: '$80K', percentage: '93%' },{ q: 'Q3', target: '$80K', achievement: '$75K', gap: '-$5K', pipeline: '$90K', prediction: '$85K', percentage: '94%' },{ q: 'Q4', target: '$85K', achievement: '$0', gap: '-$85K', pipeline: '$95K', prediction: '$90K', percentage: '0%' }],
        my_team: []
    },
    foumin: {
        all: [{ q: 'Q1', target: '$60K', achievement: '$58K', gap: '-$2K', pipeline: '$70K', prediction: '$65K', percentage: '97%' },{ q: 'Q2', target: '$65K', achievement: '$62K', gap: '-$3K', pipeline: '$75K', prediction: '$70K', percentage: '95%' },{ q: 'Q3', target: '$70K', achievement: '$68K', gap: '-$2K', pipeline: '$80K', prediction: '$75K', percentage: '97%' },{ q: 'Q4', target: '$75K', achievement: '$0', gap: '-$75K', pipeline: '$85K', prediction: '$80K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$60K', achievement: '$58K', gap: '-$2K', pipeline: '$70K', prediction: '$65K', percentage: '97%' },{ q: 'Q2', target: '$65K', achievement: '$62K', gap: '-$3K', pipeline: '$75K', prediction: '$70K', percentage: '95%' },{ q: 'Q3', target: '$70K', achievement: '$68K', gap: '-$2K', pipeline: '$80K', prediction: '$75K', percentage: '97%' },{ q: 'Q4', target: '$75K', achievement: '$0', gap: '-$75K', pipeline: '$85K', prediction: '$80K', percentage: '0%' }],
        my_team: []
    },
    dhana: {
        all: [{ q: 'Q1', target: '$70K', achievement: '$68K', gap: '-$2K', pipeline: '$80K', prediction: '$75K', percentage: '97%' },{ q: 'Q2', target: '$75K', achievement: '$72K', gap: '-$3K', pipeline: '$85K', prediction: '$80K', percentage: '96%' },{ q: 'Q3', target: '$80K', achievement: '$78K', gap: '-$2K', pipeline: '$90K', prediction: '$85K', percentage: '98%' },{ q: 'Q4', target: '$85K', achievement: '$0', gap: '-$85K', pipeline: '$95K', prediction: '$90K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$70K', achievement: '$68K', gap: '-$2K', pipeline: '$80K', prediction: '$75K', percentage: '97%' },{ q: 'Q2', target: '$75K', achievement: '$72K', gap: '-$3K', pipeline: '$85K', prediction: '$80K', percentage: '96%' },{ q: 'Q3', target: '$80K', achievement: '$78K', gap: '-$2K', pipeline: '$90K', prediction: '$85K', percentage: '98%' },{ q: 'Q4', target: '$85K', achievement: '$0', gap: '-$85K', pipeline: '$95K', prediction: '$90K', percentage: '0%' }],
        my_team: []
    },
    dhruv: {
        all: [{ q: 'Q1', target: '$65K', achievement: '$60K', gap: '-$5K', pipeline: '$75K', prediction: '$70K', percentage: '92%' },{ q: 'Q2', target: '$70K', achievement: '$63K', gap: '-$7K', pipeline: '$80K', prediction: '$72K', percentage: '90%' },{ q: 'Q3', target: '$75K', achievement: '$70K', gap: '-$5K', pipeline: '$85K', prediction: '$80K', percentage: '93%' },{ q: 'Q4', target: '$80K', achievement: '$0', gap: '-$80K', pipeline: '$90K', prediction: '$85K', percentage: '0%' }],
        my_target: [{ q: 'Q1', target: '$65K', achievement: '$60K', gap: '-$5K', pipeline: '$75K', prediction: '$70K', percentage: '92%' },{ q: 'Q2', target: '$70K', achievement: '$63K', gap: '-$7K', pipeline: '$80K', prediction: '$72K', percentage: '90%' },{ q: 'Q3', target: '$75K', achievement: '$70K', gap: '-$5K', pipeline: '$85K', prediction: '$80K', percentage: '93%' },{ q: 'Q4', target: '$80K', achievement: '$0', gap: '-$80K', pipeline: '$90K', prediction: '$85K', percentage: '0%' }],
        my_team: []
    }
};

function updateActiveButton(buttonContainer, activeFilterType) {
    buttonContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    const activeButton = buttonContainer.querySelector(`[data-filter-type="${activeFilterType}"]`);
    if (activeButton) { activeButton.classList.add('active'); }
}

function updateQuarterlyTable(person, filterType) {
    const tableBody = document.getElementById(`${person}-q-data`);
    if (!tableBody || !quarterlyData[person] || !quarterlyData[person][filterType]) return;
    tableBody.innerHTML = '';
    const dataSet = quarterlyData[person][filterType];
    dataSet.forEach(row => {
        const tr = document.createElement('tr');
        const percentageNum = parseFloat(row.percentage);
        const achievementClass = percentageNum >= 90 ? 'table-row-achievement' : 'table-row-gap';
        const gapClass = parseFloat(row.gap.replace(/[^0-9.-]+/g,"")) < 0 ? 'table-row-gap' : 'table-row-achievement';
        tr.innerHTML = `<td>${row.q}</td><td>${row.target}</td><td class="${achievementClass}">${row.achievement}</td><td class="${gapClass}">${row.gap}</td><td>${row.pipeline}</td><td>${row.prediction}</td><td class="${achievementClass}">${row.percentage}</td>`;
        tableBody.appendChild(tr);
    });
}

function updateYTDSummary(person, filterType) {
    const ytdContainer = document.getElementById(`${person}-ytd-summary`);
    if (!ytdContainer || !summaryData[person]) return;
    Object.keys(summaryData[person]).forEach(metric => {
        if (metric === 'pipeline') return;
        const value = summaryData[person][metric][filterType];
        const element = ytdContainer.querySelector(`[data-ytd="${metric}"]`);
        if (element) { element.textContent = value; }
    });
    const progressElement = ytdContainer.querySelector(`[data-ytd="progress"]`);
    const percentageValue = summaryData[person]['percentage'][filterType];
    if (progressElement && percentageValue) { progressElement.style.width = percentageValue; }
}

function setGlobalFilter(filterType, element) {
    if(event) event.stopPropagation();
    currentGlobalFilter = filterType;
    if (element) { updateActiveButton(element.parentElement, filterType); }
    Object.keys(summaryData).forEach(person => {
        updateQuarterlyTable(person, currentGlobalFilter);
        updateYTDSummary(person, currentGlobalFilter);
        const individualFilterContainer = document.querySelector(`[data-filter-for="${person}"]`);
        if (individualFilterContainer) {
            updateActiveButton(individualFilterContainer, filterType);
        }
    });
}

function setIndividualFilter(person, filterType, element) {
    event.stopPropagation();
    updateActiveButton(element.parentElement, filterType);
    updateQuarterlyTable(person, filterType);
    updateYTDSummary(person, filterType);
}

// Automatically trigger data load
window.addEventListener('DOMContentLoaded', () => {
    const globalBtn = document.querySelector('#global-filter-container button');
    if(globalBtn) setGlobalFilter('all', globalBtn);
});

function searchQuarterlyBreakdown(term) {
    term = term.toLowerCase().trim();
    const allNodes = document.querySelectorAll('.hier-node');
    const allDataPanels = document.querySelectorAll('.hierarchy-container, .qb-data-panel');

    // 1. Reset highlights if search is empty
    if (!term) {
        allNodes.forEach(node => {
            node.style.background = '';
            node.style.borderColor = '';
        });
        return;
    }

    // 2. Find the matched person
    let matchedNode = null;
    allNodes.forEach(node => {
        const nameEl = node.querySelector('.node-name');
        if (nameEl) {
            // Extract text without the inner span path
            let rawName = "";
            nameEl.childNodes.forEach(child => {
                if (child.nodeType === 3) rawName += child.textContent; 
            });
            if (rawName.toLowerCase().includes(term)) {
                matchedNode = node;
            }
        }
    });

    if (!matchedNode) return;

    // 3. Collapse absolutely ALL panels first (This fixes your wrapping issue)
    allDataPanels.forEach(panel => panel.classList.add('hidden'));
    allNodes.forEach(node => {
        node.style.background = 'var(--surface)';
        node.style.borderColor = 'var(--border)';
        const arrow = node.querySelector('.node-arrow');
        if (arrow) arrow.classList.remove('rotate-90');
    });

    // 4. Highlight the searched person
    matchedNode.style.background = 'rgba(46, 168, 122, 0.08)'; 
    matchedNode.style.borderColor = 'var(--green)';

    // 5. Expand the searched person's specific data box
    const targetData = matchedNode.nextElementSibling;
    if (targetData && (targetData.classList.contains('hierarchy-container') || targetData.classList.contains('qb-data-panel'))) {
        targetData.classList.remove('hidden');
        const arrow = matchedNode.querySelector('.node-arrow');
        if (arrow) arrow.classList.add('rotate-90');
    }

    // 6. Walk up the tree and expand ONLY their direct managers/parents
    let currentParent = matchedNode.parentElement;
    while (currentParent) {
        if (currentParent.classList.contains('hierarchy-container') || currentParent.classList.contains('qb-data-panel')) {
            currentParent.classList.remove('hidden');
            
            const parentNode = currentParent.previousElementSibling;
            if (parentNode && parentNode.classList.contains('hier-node')) {
                const arrow = parentNode.querySelector('.node-arrow');
                if (arrow) arrow.classList.add('rotate-90');
            }
        }
        currentParent = currentParent.parentElement;
    }
}

// FIX: Auto-move Quarterly Breakdown and update View Details button
window.addEventListener('DOMContentLoaded', () => {
    // 1. Find the Quarterly Breakdown card
    const qbCard = Array.from(document.querySelectorAll('.acard')).find(
        card => card.innerHTML.includes('Quarterly Breakdown') && card.innerHTML.includes('global-filter-container')
    );
    
    // 2. Find the Team Performance block in the Overview tab
    const tpWrap = document.querySelector('.tp-wrap');

    // 3. Move the card right below Team Performance
    if (qbCard && tpWrap) {
        qbCard.id = 'quarterly-breakdown-card';
        qbCard.style.marginTop = '24px';
        tpWrap.parentNode.insertBefore(qbCard, tpWrap.nextSibling);
    }

    // 4. Update the View Details button to scroll to it smoothly
    const viewBtn = document.querySelector('.tp-view-link');
    if (viewBtn) {
        // Clone button and FORCE remove the old onclick attribute
        const newBtn = viewBtn.cloneNode(true);
        newBtn.removeAttribute('onclick'); 
        viewBtn.parentNode.replaceChild(newBtn, viewBtn);
        
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Ensure we stay on the Overview tab
            const overviewTabBtn = document.querySelectorAll('.nav-item')[0];
            if (typeof goTo === 'function') goTo('home', overviewTabBtn);

            // Scroll to the card
            const target = document.getElementById('quarterly-breakdown-card');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Briefly flash a border so you see what changed
                target.style.transition = 'box-shadow 0.4s ease';
                target.style.boxShadow = '0 0 0 3px var(--accent)';
                setTimeout(() => target.style.boxShadow = 'none', 1200);
            }
        });
    }
});
// Auto-fill empty quarterly tables with reference data + Earned Commission
window.addEventListener('DOMContentLoaded', () => {
    const tableBodies = document.querySelectorAll('.quarter-table tbody');
    const referenceData = `
        <tr>
            <td>Q1</td>
            <td>$450K</td>
            <td style="font-weight: 700; color: var(--t1);">$420K</td>
            <td style="font-weight: 700; color: var(--t1);">-$30K</td>
            <td>$500K</td>
            <td>$480K</td>
            <td style="font-weight: 700; color: var(--t1);">93%</td>
            <td style="font-weight: 700; color: var(--green);">$42K</td>
        </tr>
        <tr>
            <td>Q2</td>
            <td>$480K</td>
            <td style="font-weight: 700; color: var(--t1);">$450K</td>
            <td style="font-weight: 700; color: var(--t1);">-$30K</td>
            <td>$550K</td>
            <td>$500K</td>
            <td style="font-weight: 700; color: var(--t1);">94%</td>
            <td style="font-weight: 700; color: var(--green);">$45K</td>
        </tr>
        <tr>
            <td>Q3</td>
            <td>$500K</td>
            <td style="font-weight: 700; color: var(--t1);">$480K</td>
            <td style="font-weight: 700; color: var(--t1);">-$20K</td>
            <td>$600K</td>
            <td>$520K</td>
            <td style="font-weight: 700; color: var(--t1);">96%</td>
            <td style="font-weight: 700; color: var(--green);">$48K</td>
        </tr>
        <tr>
            <td style="border-bottom: none;">Q4</td>
            <td style="border-bottom: none;">$500K</td>
            <td style="font-weight: 700; color: var(--t1); border-bottom: none;">$0</td>
            <td style="font-weight: 700; color: var(--t1); border-bottom: none;">-$500K</td>
            <td style="border-bottom: none;">$650K</td>
            <td style="border-bottom: none;">$550K</td>
            <td style="font-weight: 700; color: var(--t1); border-bottom: none;">0%</td>
            <td style="font-weight: 700; color: var(--t1); border-bottom: none;">$0</td>
        </tr>
    `;
    
    tableBodies.forEach(tbody => {
        if (tbody.innerHTML.trim() === '') {
            tbody.innerHTML = referenceData;
        }
    });
});