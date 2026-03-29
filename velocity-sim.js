/* ════ VELOCITY SIMULATOR MODULE ════ */

const VELOCITY_CONFIG = {
    managerTarget: 30000,
    defaultCommission: 5,
    quarters: [
        { name: 'Q1', months: ['January', 'February', 'March'] },
        { name: 'Q2', months: ['April', 'May', 'June'] },
        { name: 'Q3', months: ['July', 'August', 'September'] },
        { name: 'Q4', months: ['October', 'November', 'December'] }
    ]
};

let vState = {
    target: VELOCITY_CONFIG.managerTarget,
    actual: 12500,
    selectedQ: 1,
    workDays: 5,
    commRate: VELOCITY_CONFIG.defaultCommission
};

/**
 * Main Entry Point: Injects and renders the simulator
 */
window.initVelocitySimulator = function() {
    const container = document.getElementById('hierarchy-performance-content');
    if (!container) return;

    container.innerHTML = `
        <div class="velocity-wrapper" style="display: flex; flex-direction: column; gap: 20px;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
                
                <div class="velocity-gradient-card" style="height: 180px; display: flex; flex-direction: column; justify-content: center;">
                    <div style="font-size: 10px; text-transform: uppercase; font-weight: 800; opacity: 0.8; letter-spacing: 1px;">Today's Mission</div>
                    <div id="v-daily-quota" style="font-size: 48px; font-weight: 900; margin: 8px 0;">$0</div>
                    <div style="font-size: 12px; opacity: 0.9;">Required daily closing to hit <span id="v-mission-target">$0</span></div>
                    <div id="v-days-badge" style="position:absolute; top:20px; right:20px; background: rgba(255,255,255,0.15); padding: 6px 12px; border-radius: 30px; font-size: 11px; font-weight: 700;">-- days left</div>
                </div>

                <div class="velocity-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div style="font-size: 10px; color: var(--t3); font-weight: 800; text-transform: uppercase;">Monthly Pacing</div>
                        <div id="v-monthly-target" style="font-size: 22px; font-weight: 800; color: var(--t1); margin-top: 4px;">$0</div>
                    </div>
                    <div style="border-top: 1px solid var(--border); pt: 10px; font-size: 11px; color: var(--t2);">
                        Avg. Daily: <b id="v-avg-daily" style="color: var(--t1);">$0</b>
                    </div>
                </div>

                <div class="velocity-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 10px; color: var(--t3); font-weight: 800; text-transform: uppercase;">QTD Achieved</span>
                            <span id="v-progress-pct" style="font-size: 11px; font-weight: 800; color: var(--orange);">0%</span>
                        </div>
                        <div id="v-current-sales" style="font-size: 22px; font-weight: 800; color: var(--t1); margin-top: 4px;">$0</div>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--surface3); border-radius: 10px; overflow: hidden;">
                        <div id="v-progress-bar" style="height: 100%; background: var(--orange); width: 0%; transition: width 1s ease;"></div>
                    </div>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 16px;">
                <div class="velocity-card">
                    <h3 style="font-size: 13px; font-weight: 800; margin-bottom: 16px; color: var(--t1);">Simulator Settings</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div>
                            <label style="font-size: 10px; color: var(--t3); font-weight: 700; display: block; margin-bottom: 4px;">Quarterly Goal</label>
                            <input type="number" id="v-in-goal" class="velocity-input" value="${vState.target}">
                        </div>
                        <div>
                            <label style="font-size: 10px; color: var(--t3); font-weight: 700; display: block; margin-bottom: 4px;">Sales to Date</label>
                            <input type="number" id="v-in-actual" class="velocity-input" value="${vState.actual}">
                        </div>
                    </div>
                </div>

                <div class="velocity-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h3 style="font-size: 13px; font-weight: 800; color: var(--t1);">Burn-up Calendar</h3>
                        <div id="v-cal-month" style="font-size: 11px; color: var(--t3); font-weight: 700;">--</div>
                    </div>
                    <div id="v-calendar-grid" class="cal-grid-mini"></div>
                </div>
            </div>
        </div>
    `;

    attachVelocityListeners();
    renderVelocityUpdates();
};

function attachVelocityListeners() {
    document.getElementById('v-in-goal').addEventListener('input', (e) => {
        vState.target = parseFloat(e.target.value) || 0;
        renderVelocityUpdates();
    });
    document.getElementById('v-in-actual').addEventListener('input', (e) => {
        vState.actual = parseFloat(e.target.value) || 0;
        renderVelocityUpdates();
    });
}

function renderVelocityUpdates() {
    const remainingTarget = vState.target - vState.actual;
    const daysLeft = 22; // This should eventually sync with your sidebar quarter
    const daily = remainingTarget > 0 ? remainingTarget / daysLeft : 0;
    const progress = Math.min((vState.actual / vState.target) * 100, 100);

    // Update Mission Card
    document.getElementById('v-daily-quota').textContent = '$' + (daily/1000).toFixed(1) + 'K';
    document.getElementById('v-mission-target').textContent = '$' + (vState.target/1000).toFixed(0) + 'K';
    document.getElementById('v-days-badge').textContent = daysLeft + ' days left';

    // Update Progress
    document.getElementById('v-progress-pct').textContent = Math.round(progress) + '%';
    document.getElementById('v-progress-bar').style.width = progress + '%';
    document.getElementById('v-current-sales').textContent = '$' + (vState.actual/1000).toFixed(1) + 'K';

    // Update Pacing
    document.getElementById('v-monthly-target').textContent = '$' + (vState.target / 3000).toFixed(1) + 'M';
    document.getElementById('v-avg-daily').textContent = '$' + (vState.target / 66000).toFixed(1) + 'K';

    renderVelocityCalendar(daily);
}

function renderVelocityCalendar(daily) {
    const grid = document.getElementById('v-calendar-grid');
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 1; i <= 24; i++) {
        grid.innerHTML += `
            <div class="cal-day-box" style="background: ${i <= 10 ? 'var(--surface2)' : 'var(--surface)'}; opacity: ${i <= 10 ? 0.5 : 1}">
                <div style="font-size: 8px; color: var(--t3);">Day ${i}</div>
                <div style="font-weight: 800; color: var(--t1);">$${(daily/1000).toFixed(1)}k</div>
            </div>
        `;
    }
}