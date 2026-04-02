// Mock Data Generation Logic
const tcNames = ["Rajesh M", "Ornica Nicholas", "Chaitanya R", "Robinson Maran N", "Laura Gamess", "Maria Bardisa", "Dennis Beukelaar", "Riyad Al Shalheen", "Lily Ramón Le", "Sadiq Shamem A", "Erdinc Sekerci", "Sri Dhanalakshmi K", "Aravind S I", "Kirubha Shankar", "Sai Prasad M", "Aaron Sundararaj"];

const tcGenerateData = () => {
    return Array.from({ length: 1000 }, (_, i) => {
        const quarters = ["Q1", "Q2", "Q3", "Q4"].map(q => {
            const target = (1000000 + Math.random() * 500000) / 4;
            const attained = (Math.random() * 1500000) / 4;
            const achieved = (attained / target) * 100;
            return {
                period: q, target, tgtComm: target * 0.05, pcr: 5, attained, achieved,
                accel: achieved > 100 ? (attained - target) * 0.02 : 0,
                bonus125: achieved > 125 ? 1250 : 0,
                dirComm: attained * 0.05, crossSell: attained * 0.1, csComm: (attained * 0.1) * 0.03,
                netComm: attained * 0.05, svcRev: attained * 0.15, svcComm: (attained * 0.15) * 0.04,
                total: (attained * 0.05) + ((attained * 0.15) * 0.04) + (achieved > 125 ? 1250 : 0)
            };
        });
        return {
            id: i + 1,
            name: tcNames[i % tcNames.length] + (i >= tcNames.length ? ` ${Math.floor(i/tcNames.length)}` : ""),
            period: "FY 2026",
            quarters,
            target: quarters.reduce((a, b) => a + b.target, 0),
            attained: quarters.reduce((a, b) => a + b.attained, 0),
            achieved: (quarters.reduce((a, b) => a + b.attained, 0) / quarters.reduce((a, b) => a + b.target, 0)) * 100,
            dirComm: quarters.reduce((a, b) => a + b.dirComm, 0),
            svcComm: quarters.reduce((a, b) => a + b.svcComm, 0),
            netComm: quarters.reduce((a, b) => a + b.netComm, 0),
            total: quarters.reduce((a, b) => a + b.total, 0),
            accel: quarters.reduce((a, b) => a + b.accel, 0),
            bonus125: quarters.reduce((a, b) => a + b.bonus125, 0),
            crossSell: quarters.reduce((a, b) => a + b.crossSell, 0),
            csComm: quarters.reduce((a, b) => a + b.csComm, 0),
            svcRev: quarters.reduce((a, b) => a + b.svcRev, 0),
            tgtComm: quarters.reduce((a, b) => a + b.tgtComm, 0),
            pcr: 5
        };
    });
};

const tcData = tcGenerateData();
let tcState = {
    searchTerm: "",
    currentPage: 1,
    rowsPerPage: 15,
    expandedRows: new Set(),
    filteredData: tcData
};

// Formatting Utilities
const tcCurrencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const tcFormatCurrency = (val) => tcCurrencyFormatter.format(val);
const tcAbbreviateCurrency = (val) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(1)}K`;
    return `$${val.toFixed(0)}`;
};

// UI Rendering Functions
function tcRenderBreakdown() {
    const breakdownGrid = document.getElementById('breakdownGrid');
    if (!breakdownGrid) return;
    const totals = { direct: 999000, accelerator: 0, bonus: 0, service: 119900, crossSell: 59900, grandTotal: 1200000 };
    const cards = [
        { label: 'Direct Commission', value: totals.direct, bg: 'bg-slate-50', border: 'border-slate-100', text: 'text-slate-800' },
        { label: 'Accelerator', value: totals.accelerator, bg: 'bg-emerald-50/50', border: 'border-emerald-100', text: 'text-emerald-600' },
        { label: '>125% Bonus', value: totals.bonus, bg: 'bg-orange-50/50', border: 'border-orange-100', text: 'text-orange-500' },
        { label: 'Service Commission', value: totals.service, bg: 'bg-blue-50/50', border: 'border-blue-100', text: 'text-blue-500' },
        { label: 'Cross-Sell Commission', value: totals.crossSell, bg: 'bg-cyan-50/50', border: 'border-cyan-100', text: 'text-cyan-600' },
        { label: 'Grand Total', value: totals.grandTotal, bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', isLarge: true },
    ];
    breakdownGrid.innerHTML = cards.map(card => `
        <div class="${card.bg} p-4 rounded-xl border ${card.border} text-center flex flex-col justify-center min-h-[100px]">
            <p class="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">${card.label}</p>
            <p class="${card.isLarge ? 'text-xl' : 'text-lg'} font-bold ${card.text}">${tcAbbreviateCurrency(card.value)}</p>
        </div>
    `).join('');
}

function tcRenderStats() {
    const statsRow = document.getElementById('statsRow');
    if (!statsRow) return;
    const stats = [
        { label: 'Total Target', value: 119200000, icon: 'dollar-sign', color: 'text-teal-600', iconColor: 'text-slate-400', bg: 'bg-slate-50' },
        { label: 'Total Revenue', value: 20000000, icon: 'award', color: 'text-emerald-600', iconColor: 'text-emerald-400', bg: 'bg-emerald-50' },
        { label: 'Avg Achievement', value: '15%', icon: 'trending-up', color: 'text-orange-500', iconColor: 'text-orange-400', bg: 'bg-orange-50' },
    ];
    statsRow.innerHTML = stats.map(stat => `
        <div class="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">${stat.label}</p>
                <p class="text-xl font-bold ${stat.color}">${typeof stat.value === 'number' ? tcAbbreviateCurrency(stat.value) : stat.value}</p>
            </div>
            <div class="${stat.bg} p-3 rounded-full border border-slate-100">
                <i data-lucide="${stat.icon}" class="w-5 h-5 ${stat.iconColor}"></i>
            </div>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

function tcRenderTable() {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    const start = (tcState.currentPage - 1) * tcState.rowsPerPage;
    const end = start + tcState.rowsPerPage;
    const pageData = tcState.filteredData.slice(start, end);

    let html = "";
    pageData.forEach(user => {
        const isExpanded = tcState.expandedRows.has(user.id);
        html += `
            <tr onclick="toggleRow(${user.id})" class="group hover:bg-slate-50/80 cursor-pointer transition-colors ${isExpanded ? 'bg-slate-50/40' : ''}">
                <td class="sticky left-0 z-10 bg-white group-hover:bg-slate-50 px-4 py-2.5 shadow-[1px_0_0_#e2e8f0] transition-colors ${isExpanded ? '!bg-slate-50/80' : ''}">
                    <div class="flex items-center gap-2.5">
                        <div class="text-slate-400 group-hover:text-slate-500 transition-colors">
                            <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" class="w-3.5 h-3.5"></i>
                        </div>
                        <div class="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-[9px] font-bold text-emerald-700 uppercase">
                            ${user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        <span class="text-[12px] font-semibold text-slate-700 whitespace-nowrap">${user.name}</span>
                    </div>
                </td>
                <td class="px-3 py-2.5 text-right text-[11px] font-semibold text-slate-700 tabular-nums">${tcFormatCurrency(user.target)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-600 tabular-nums">${tcFormatCurrency(user.tgtComm)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-500 tabular-nums">${user.pcr}%</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-bold text-slate-700 tabular-nums">${window.withTrend(tcFormatCurrency(user.attained))}</td>
                <td class="px-3 py-2.5">
                    <div class="flex items-center gap-2">
                        <div class="flex items-center flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full ${user.achieved >= 100 ? 'bg-emerald-500' : 'bg-amber-400'}" style="width: ${Math.min(user.achieved, 100)}%"></div>
                        </div>
                        <span class="text-[10px] font-bold w-8 text-right ${user.achieved >= 100 ? 'text-emerald-600' : 'text-amber-500'}">${user.achieved.toFixed(0)}%</span>
                    </div>
                </td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-500 tabular-nums">${tcFormatCurrency(user.accel)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-500 tabular-nums">${tcFormatCurrency(user.bonus125)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-600 tabular-nums">${tcFormatCurrency(user.dirComm)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-400 tabular-nums">${tcFormatCurrency(user.crossSell)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-600 tabular-nums">${tcFormatCurrency(user.csComm)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-bold text-slate-700 tabular-nums">${tcFormatCurrency(user.netComm)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-400 tabular-nums">${tcFormatCurrency(user.svcRev)}</td>
                <td class="px-3 py-2.5 text-right text-[11px] font-medium text-slate-600 tabular-nums">${tcFormatCurrency(user.svcComm)}</td>
                <td class="px-4 py-2.5 text-right text-[11px] font-bold text-emerald-700 tabular-nums bg-emerald-50/20">${window.withTrend(tcFormatCurrency(user.total))}</td>
            </tr>
        `;

        if (isExpanded) {
            user.quarters.forEach(q => {
                html += `
                    <tr onclick="event.stopPropagation(); showDetails(${user.id}, '${q.period}')" class="bg-slate-50/20 hover:bg-emerald-50/30 cursor-pointer transition-all border-l-2 border-emerald-300">
                        <td class="sticky left-0 z-10 bg-[#f8fafc] px-4 py-2 text-slate-500 shadow-[1px_0_0_#e2e8f0]">
                            <div class="flex items-center gap-3 pl-8"><span class="text-[10px] font-bold uppercase tracking-widest">${q.period}</span></div>
                        </td>
                        <td class="px-3 py-2 text-right text-[10px] font-medium text-slate-500 tabular-nums">${tcFormatCurrency(q.target)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.tgtComm)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${q.pcr}%</td>
                        <td class="px-3 py-2 text-right text-[10px] font-semibold text-slate-500 tabular-nums">${window.withTrend(tcFormatCurrency(q.attained))}</td>
                        <td class="px-3 py-2"><div class="flex items-center justify-end pr-2"><span class="text-[9px] font-bold text-slate-400">${q.achieved.toFixed(0)}%</span></div></td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.accel)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.bonus125)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.dirComm)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.crossSell)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.csComm)}</td>
                        <td class="px-3 py-2 text-right text-[10px] font-semibold text-slate-500 tabular-nums">${tcFormatCurrency(q.netComm)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-300 tabular-nums">${tcFormatCurrency(q.svcRev)}</td>
                        <td class="px-3 py-2 text-right text-[10px] text-slate-400 tabular-nums">${tcFormatCurrency(q.svcComm)}</td>
                        <td class="px-4 py-2 text-right text-[10px] font-bold text-emerald-700/70 tabular-nums">${window.withTrend(tcFormatCurrency(q.total))}</td>
                    </tr>
                `;
            });
        }
    });
    tbody.innerHTML = html;
    tcUpdatePagination();
    if (window.lucide) lucide.createIcons();
}
// Interaction Handlers
function toggleRow(id) {
    if (tcState.expandedRows.has(id)) tcState.expandedRows.delete(id);
    else tcState.expandedRows.add(id);
    tcRenderTable();
}

function tcUpdatePagination() {
    const totalPages = Math.ceil(tcState.filteredData.length / tcState.rowsPerPage);
    document.getElementById('pageIndicator').innerText = `Page ${tcState.currentPage} / ${totalPages}`;
    document.getElementById('paginationInfo').innerText = `Showing ${Math.min(tcState.filteredData.length, tcState.rowsPerPage)} of ${tcState.filteredData.length} records`;
    document.getElementById('prevPage').disabled = tcState.currentPage === 1;
    document.getElementById('nextPage').disabled = tcState.currentPage === totalPages;
}

function showDetails(userId, period) {
    const user = tcData.find(u => u.id === userId);
    const data = period ? user.quarters.find(q => q.period === period) : user;
    
    document.getElementById('detailName').innerText = user.name;
    document.getElementById('detailPeriod').innerText = period ? `${period} — FY 2026` : "FY 2026 Aggregate";
    document.getElementById('detailAvatar').innerText = user.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <section>
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Attainment</p>
                    <p class="text-2xl font-black text-slate-800">${data.achieved.toFixed(1)}%</p>
                </div>
                <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <p class="text-[10px] font-bold text-emerald-600 uppercase mb-1">Total Payout</p>
                    <p class="text-2xl font-black text-emerald-700 tabular-nums">${tcFormatCurrency(data.total)}</p>
                </div>
            </div>
        </section>
        
        <section class="mt-8 relative">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Core Metrics</h3>
            <div class="space-y-2 border-l-[3px] border-slate-200 pl-4 ml-1">
                ${tcDetailRow('Target', tcFormatCurrency(data.target))}
                ${tcDetailRow('Attained', tcFormatCurrency(data.attained), true)}
                ${tcDetailRow('Target Commission', tcFormatCurrency(data.tgtComm))}
                ${tcDetailRow('PCR', data.pcr + '%', true)}
            </div>
        </section>

        <section class="mt-8 relative">
            <h3 class="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4">You Earned</h3>
            <div class="space-y-2 border-l-[3px] border-emerald-400 pl-4 ml-1">
                ${tcDetailRow('Base Commission', tcFormatCurrency(data.dirComm))}
                ${tcDetailRow('Accelerator (100%+)', tcFormatCurrency(data.accel), true)}
                ${tcDetailRow('Bonus (125%+)', tcFormatCurrency(data.bonus125))}
                ${tcDetailRow('Cross-Sell Comm', tcFormatCurrency(data.csComm), true)}
                ${tcDetailRow('Services Comm', tcFormatCurrency(data.svcComm))}
            </div>
        </section>

        <section class="bg-slate-900 rounded-2xl p-6 text-white shadow-lg mt-8 mb-8">
            <div class="space-y-4">
                <div class="flex justify-between items-center opacity-80">
                    <span class="text-xs uppercase font-bold tracking-widest">Net Base</span>
                    <span class="text-sm font-semibold">${tcFormatCurrency(data.netComm)}</span>
                </div>
                <div class="flex justify-between items-center opacity-80">
                    <span class="text-xs uppercase font-bold tracking-widest">Accelerators & Bonuses</span>
                    <span class="text-sm font-semibold">${tcFormatCurrency(data.accel + data.bonus125)}</span>
                </div>
                <div class="flex justify-between items-center opacity-80">
                    <span class="text-xs uppercase font-bold tracking-widest">Cross-sell & Services</span>
                    <span class="text-sm font-semibold">${tcFormatCurrency(data.csComm + data.svcComm)}</span>
                </div>
                <div class="pt-4 border-t border-slate-700 flex justify-between items-center">
                    <span class="text-sm font-bold text-slate-300">Grand Total</span>
                    <span class="text-2xl font-black text-emerald-400 tracking-tight">${tcFormatCurrency(data.total)}</span>
                </div>
            </div>
        </section>
    `;

    const overlay = document.getElementById('detailOverlay');
    const panel = document.getElementById('detailPanel');

    // 1. Unhide the container and ensure it's not faded out
    overlay.classList.remove('hidden');
    overlay.classList.remove('fade-out');

    // 2. THE FIX: Force a DOM reflow. This guarantees the browser paints 
    // the new HTML off-screen BEFORE starting the CSS transition.
    void panel.offsetWidth; 

    // 3. Trigger the smooth slide-in
    panel.classList.remove('closed');
}

function tcDetailRow(label, value, highlight) {
    return `<div class="flex justify-between items-center py-2 px-3 rounded-xl ${highlight ? 'bg-slate-50' : ''}">
        <span class="text-xs font-bold text-slate-500 uppercase tracking-tight">${label}</span>
        <span class="text-sm font-black ${highlight ? 'text-slate-800' : 'text-slate-600'}">${value}</span>
    </div>`;
}

function closeDetails() {
    const overlay = document.getElementById('detailOverlay');
    const panel = document.getElementById('detailPanel');
    
    // 1. Slide the panel out and fade the background
    panel.classList.add('closed');
    overlay.classList.add('fade-out');
    
    // 2. Wait for the exact length of the 0.4s animation before hiding the container
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 400); 
}

// Event Listeners (Added safeties to make sure DOM elements exist)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            tcState.searchTerm = e.target.value.toLowerCase();
            tcState.filteredData = tcData.filter(u => u.name.toLowerCase().includes(tcState.searchTerm));
            tcState.currentPage = 1;
            tcRenderTable();
        });
    }

    const prevPageBtn = document.getElementById('prevPage');
    if (prevPageBtn) {
        prevPageBtn.onclick = () => { if(tcState.currentPage > 1) { tcState.currentPage--; tcRenderTable(); }};
    }

    const nextPageBtn = document.getElementById('nextPage');
    if (nextPageBtn) {
        nextPageBtn.onclick = () => { 
            const totalPages = Math.ceil(tcState.filteredData.length / tcState.rowsPerPage);
            if(tcState.currentPage < totalPages) { tcState.currentPage++; tcRenderTable(); }
        };
    }

    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.onclick = () => {
            const rows = [["Name", "Period", "Target", "Attained", "Achieved", "Total Commission"]];
            tcState.filteredData.forEach(user => {
                rows.push([user.name, user.period, user.target, user.attained, user.achieved.toFixed(2)+'%', user.total]);
                user.quarters.forEach(q => {
                    rows.push([user.name, q.period, q.target, q.attained, q.achieved.toFixed(2)+'%', q.total]);
                });
            });
            const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "commission_report.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    }

    tcRenderBreakdown();
    tcRenderStats();
    tcRenderTable();
});

window.updateUserTarget = function(userId, period, valString) {
    // 1. Clean the input (remove $ and commas)
    const val = Number(valString.replace(/[^0-9.-]+/g,""));
    
    // If invalid, re-render to reset back to original
    if(isNaN(val) || val <= 0) {
        tcRenderTable(); 
        return;
    }
    
    const user = tcData.find(u => u.id === userId);
    if(!user) return;

    if (period) {
        // Update specific Quarter
        const q = user.quarters.find(q => q.period === period);
        if (q) {
            q.target = val;
            q.tgtComm = val * (q.pcr / 100);
            q.achieved = (q.attained / val) * 100;
            q.accel = q.achieved > 100 ? (q.attained - val) * 0.02 : 0;
            q.bonus125 = q.achieved > 125 ? 1250 : 0;
            q.total = q.dirComm + q.csComm + q.svcComm + q.accel + q.bonus125;
        }
        // Rollup math to parent
        user.target = user.quarters.reduce((a, b) => a + b.target, 0);
        user.tgtComm = user.quarters.reduce((a, b) => a + b.tgtComm, 0);
        user.achieved = (user.attained / user.target) * 100;
        user.accel = user.quarters.reduce((a, b) => a + b.accel, 0);
        user.bonus125 = user.quarters.reduce((a, b) => a + b.bonus125, 0);
        user.total = user.quarters.reduce((a, b) => a + b.total, 0);
    } else {
        // Update Parent and distribute evenly to quarters
        user.target = val;
        user.tgtComm = val * (user.pcr / 100);
        user.achieved = (user.attained / val) * 100;
        user.accel = user.achieved > 100 ? (user.attained - val) * 0.02 : 0;
        user.bonus125 = user.achieved > 125 ? 1250 : 0;
        user.total = user.dirComm + user.csComm + user.svcComm + user.accel + user.bonus125;

        const qVal = val / 4;
        user.quarters.forEach(q => {
            q.target = qVal;
            q.tgtComm = qVal * (q.pcr / 100);
            q.achieved = (q.attained / qVal) * 100;
            q.accel = q.achieved > 100 ? (q.attained - qVal) * 0.02 : 0;
            q.bonus125 = q.achieved > 125 ? 1250 : 0;
            q.total = q.dirComm + q.csComm + q.svcComm + q.accel + q.bonus125;
        });
    }
    
    // Re-render table with new numbers!
    tcRenderTable();
};