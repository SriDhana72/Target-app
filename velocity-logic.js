// Constants & Initial State
const managerTarget = 30000;
let state = {
    quarterlyTarget: managerTarget,
    currentSales: 12500,
    selectedQuarter: 1,
    workDaysPerWeek: 5,
    commissionRate: 5,
    goalError: ''
};

const today = new Date();
const currentMonthIndex = today.getMonth();

const quarters = [
    { name: 'Q1', months: ['January', 'February', 'March'] },
    { name: 'Q2', months: ['April', 'May', 'June'] },
    { name: 'Q3', months: ['July', 'August', 'September'] },
    { name: 'Q4', months: ['October', 'November', 'December'] }
];

let chartInstance = null;

// Utilities
function formatMoney(amount, decimals = 0) {
    return '$' + Math.round(amount).toLocaleString('en-US', { maximumFractionDigits: decimals });
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getRemainingWorkDays() {
    const year = today.getFullYear();
    const month = today.getMonth();
    const lastDay = getDaysInMonth(year, month);
    let count = 0;
    for (let d = today.getDate(); d <= lastDay; d++) {
        const date = new Date(year, month, d);
        const day = date.getDay();
        if (state.workDaysPerWeek === 5) {
            if (day !== 0 && day !== 6) count++;
        } else {
            if (day !== 0) count++;
        }
    }
    return count || 1; 
}

// Initialize Icons
lucide.createIcons();

// Main Render Function
function render() {
    const calcTarget = Number(state.quarterlyTarget) || managerTarget;
    const monthlyTarget = calcTarget / 3;
    const remainingWorkDays = getRemainingWorkDays();
    const remainingTarget = calcTarget - state.currentSales;
    
    // Simplified daily quota
    const dailyQuota = remainingTarget > 0 ? remainingTarget / (remainingWorkDays + (3 - (currentMonthIndex % 3) - 1) * 22) : 0;
    
    const progressPercentage = Math.min(Math.round((state.currentSales / calcTarget) * 100), 100);
    const currentCommission = state.currentSales * (state.commissionRate / 100);
    const targetCommission = calcTarget * (state.commissionRate / 100);

    // Update DOM Elements
    document.getElementById('daily-quota').textContent = formatMoney(dailyQuota);
    document.getElementById('mission-target').textContent = formatMoney(calcTarget);
    document.getElementById('target-commission-display').textContent = formatMoney(targetCommission);
    document.getElementById('days-left-badge').textContent = `${remainingWorkDays} days left`;
    
    document.getElementById('monthly-target').textContent = formatMoney(monthlyTarget);
    document.getElementById('avg-daily-target').textContent = formatMoney(monthlyTarget / 22);
    
    document.getElementById('progress-percentage').textContent = `${progressPercentage}%`;
    document.getElementById('current-sales-display').textContent = formatMoney(state.currentSales);
    document.getElementById('earned-comm-display').textContent = `Earned Comm: ${formatMoney(currentCommission)}`;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
    document.getElementById('progress-target').textContent = formatMoney(calcTarget);

    // Update Inputs (if not focused)
    const goalInput = document.getElementById('input-quarterly-goal');
    if (document.activeElement !== goalInput) goalInput.value = state.quarterlyTarget;
    
    document.getElementById('input-sales-to-date').value = state.currentSales;
    
    const commInput = document.getElementById('input-target-comm');
    if (document.activeElement !== commInput) commInput.value = Math.round(targetCommission);

    // Error Message handling
    const errorEl = document.getElementById('goal-error');
    if (state.goalError) {
        errorEl.textContent = state.goalError;
        errorEl.classList.remove('hidden');
        goalInput.classList.add('border-red-300', 'focus:ring-red-500');
        goalInput.classList.remove('border-slate-200', 'focus:ring-indigo-500');
    } else {
        errorEl.classList.add('hidden');
        goalInput.classList.remove('border-red-300', 'focus:ring-red-500');
        goalInput.classList.add('border-slate-200', 'focus:ring-indigo-500');
    }

    // Daily Tip
    document.getElementById('daily-tip').textContent = `Increase volume by ${progressPercentage < 50 ? '12%' : '5%'} to hit Q${state.selectedQuarter} goal.`;

    // Render Quarter Buttons
    const qContainer = document.getElementById('quarter-buttons');
    qContainer.innerHTML = '';
    quarters.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.textContent = q.name;
        const isSelected = state.selectedQuarter === idx + 1;
        btn.className = `px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${isSelected ? 'bg-white text-indigo-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`;
        btn.onclick = () => { state.selectedQuarter = idx + 1; render(); };
        qContainer.appendChild(btn);
    });

    // Render Work Day Buttons
    const wdContainer = document.getElementById('work-days-buttons');
    wdContainer.innerHTML = '';
    [5, 6].forEach(days => {
        const btn = document.createElement('button');
        btn.textContent = `${days} Days`;
        const isSelected = state.workDaysPerWeek === days;
        btn.className = `flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${isSelected ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`;
        btn.onclick = () => { state.workDaysPerWeek = days; render(); };
        wdContainer.appendChild(btn);
    });

    // Calendar
    const currentQuarterData = quarters[state.selectedQuarter - 1];
    const currentMonthName = currentQuarterData.months[currentMonthIndex % 3];
    document.getElementById('calendar-title').textContent = `Mission Calendar: ${currentMonthName}`;
    document.getElementById('calendar-days-left').textContent = `${remainingWorkDays} days left`;
    
    const calGrid = document.getElementById('calendar-grid');
    calGrid.innerHTML = '';
    for (let i = 0; i < 31; i++) {
        const day = i + 1;
        const isPast = day < today.getDate();
        const isToday = day === today.getDate();
        const isWeekend = (day % 7 === 0 || day % 7 === 6) && state.workDaysPerWeek === 5;

        let classes = 'p-1.5 rounded-lg border flex flex-col items-center justify-center transition-all ';
        if (isToday) classes += 'bg-indigo-600 border-indigo-600 text-white shadow-md z-10';
        else if (isPast) classes += 'bg-slate-50 border-slate-100 text-slate-400';
        else if (isWeekend) classes += 'bg-slate-50/50 border-dashed border-slate-200 text-slate-300';
        else classes += 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300';

        const valueText = isWeekend ? '-' : `$${Math.round(dailyQuota / 1000)}k`;
        const textClass = isToday ? 'text-white' : 'text-slate-700';

        calGrid.innerHTML += `
            <div class="${classes}">
                <span class="text-[9px] font-bold uppercase opacity-80 mb-0.5">D${day}</span>
                <span class="text-[11px] font-black ${textClass}">${valueText}</span>
            </div>
        `;
    }

    renderChart(currentQuarterData, monthlyTarget, calcTarget);
}

// Chart.js Rendering
function renderChart(quarterData, monthlyTarget, calcTarget) {
    const ctx = document.getElementById('burnupChart').getContext('2d');
    const labels = quarterData.months;
    const targetData = [monthlyTarget, monthlyTarget * 2, calcTarget];
    const actualData = [monthlyTarget, state.currentSales, null];

    if (chartInstance) {
        chartInstance.data.labels = labels;
        chartInstance.data.datasets[0].data = targetData;
        chartInstance.data.datasets[1].data = actualData;
        chartInstance.options.scales.y.max = calcTarget;
        chartInstance.options.scales.y.ticks.stepSize = calcTarget / 4;
        chartInstance.update();
        return;
    }

    let gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Target',
                    data: targetData,
                    borderColor: '#cbd5e1',
                    borderWidth: 2,
                    borderDash: [6, 6],
                    fill: false,
                    pointRadius: 0,
                    tension: 0
                },
                {
                    label: 'Actual',
                    data: actualData,
                    borderColor: '#6366f1',
                    borderWidth: 3,
                    backgroundColor: gradient,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: '#111827',
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    borderColor: '#f1f5f9',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        labelTextColor: (context) => context.dataset.label === 'Target' ? '#cbd5e1' : '#6366f1',
                        label: (context) => context.dataset.label.toLowerCase() + ' : ' + context.parsed.y
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: true, color: '#f1f5f9', drawBorder: false },
                    ticks: { color: '#94a3b8', font: { size: 10 } }
                },
                y: {
                    grid: { color: '#f8fafc', drawBorder: false, borderDash: [4, 4] },
                    ticks: { 
                        color: '#94a3b8', 
                        font: { size: 10 },
                        callback: (val) => `$${val/1000}k`,
                        stepSize: calcTarget / 4
                    },
                    beginAtZero: true,
                    max: calcTarget
                }
            }
        }
    });
}

// Event Listeners
const goalInput = document.getElementById('input-quarterly-goal');
goalInput.addEventListener('input', (e) => {
    const val = e.target.value;
    const numVal = Number(val);

    if (numVal === managerTarget - 1 && state.quarterlyTarget === managerTarget) {
        state.goalError = `Manager-set goal ($${managerTarget.toLocaleString()}) is locked. You can only increase it.`;
        e.target.value = state.quarterlyTarget;
        render();
        setTimeout(() => { state.goalError = ''; render(); }, 4500);
        return;
    }

    state.quarterlyTarget = val === '' ? '' : numVal;
    state.goalError = (val !== '' && numVal < managerTarget) ? `Manager-set goal ($${managerTarget.toLocaleString()}) is locked. You can only increase it.` : '';
    render();
});

goalInput.addEventListener('blur', () => {
    if (state.quarterlyTarget === '' || Number(state.quarterlyTarget) < managerTarget) {
        state.quarterlyTarget = managerTarget;
        state.goalError = `Restored to manager-set minimum ($${managerTarget.toLocaleString()}).`;
        render();
        setTimeout(() => { state.goalError = ''; render(); }, 4000);
    }
});

document.getElementById('input-sales-to-date').addEventListener('input', (e) => {
    state.currentSales = Number(e.target.value);
    render();
});

document.getElementById('input-target-comm').addEventListener('input', (e) => {
    const val = Number(e.target.value);
    const calcTarget = Number(state.quarterlyTarget) || managerTarget;
    state.commissionRate = (val / calcTarget) * 100;
    render();
});

// Initial Render
render();