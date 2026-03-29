/* ════ TARGET COMMISSION (TC) MODULE ════ */

// 1. THIS LOADS WHEN YOU CLICK THE 'TC' TAB IN THE SIDEBAR
window.initCommissionTab = function() {
    const container = document.getElementById('commission-content-area');
    if (!container) return;

    // We are clearing all internal content as requested.
    // This keeps the tab area clean while you use the 
    // Revenue Pacing Center on the Overview page instead.
    container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; opacity: 0.5;">
            <div style="font-size: 40px; margin-bottom: 16px;">🎯</div>
            <p style="color: var(--t3); font-size: 13px; font-weight: 500;">
                Commission details are currently being simulated in the Forecast Panel.
            </p>
        </div>
    `;
};

// 2. THE DRAWER LOGIC (Remains active for the Overview page button)
window.toggleForecastDrawer = function() {
    const drawer = document.getElementById('forecast-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const drawerBody = document.querySelector('.drawer-body');
    
    if (!drawer || !overlay || !drawerBody) return;

    const isOpen = drawer.classList.toggle('open');
    overlay.style.display = isOpen ? 'block' : 'none';

    if (isOpen) {
        window.renderDrawerUI(45); // Default to 45 days
    }
};

// 3. THE CALCULATION UI (Rendered in the Right Panel)
window.renderDrawerUI = function(days) {
    const drawerBody = document.querySelector('.drawer-body');
    if (!drawerBody) return;

    const target = 50.0 * 1000000; 
    const achieved = 21.2 * 1000000;
    const gap = target - achieved;
    const dailyEMI = gap / days;
    const progressPct = (achieved / target) * 100;

    drawerBody.innerHTML = `
        <div style="animation: fadeIn 0.3s ease; font-family: 'Plus Jakarta Sans', sans-serif;">
            
            <div style="background: var(--surface2); padding: 20px; border-radius: 16px; border: 1px solid var(--border); margin-bottom: 24px;">
                <div style="font-size: 10px; color: var(--t3); font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Current Pacing</div>
                <div style="font-size: 24px; font-weight: 800; color: var(--t1); margin: 8px 0;">$${(achieved/1000000).toFixed(1)}M / $50M</div>
                
                <div style="width:100%; height:6px; background:var(--border); border-radius:10px; overflow:hidden; margin: 12px 0;">
                    <div style="width: ${progressPct}%; height:100%; background: var(--accent); transition: width 1s ease;"></div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="font-size: 11px; color: var(--red); font-weight: 700;">Gap: $${(gap/1000000).toFixed(1)}M</div>
                    <div style="font-size: 11px; color: var(--t3); font-weight: 600;">${progressPct.toFixed(1)}% Attained</div>
                </div>
            </div>

            <div style="margin-bottom: 30px; padding: 0 5px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; align-items:center;">
                    <span style="font-size: 12px; font-weight: 800; color: var(--t1); text-transform: uppercase;">Time Sensitivity</span>
                    <span style="font-size: 12px; font-weight: 800; color: var(--accent); background: var(--accent-dim); padding: 4px 10px; border-radius: 6px;">${days} Days Left</span>
                </div>
                <input type="range" min="1" max="90" value="${days}" id="drawerSlider" style="width: 100%; cursor: pointer; accent-color: var(--accent);">
            </div>

            <div style="background: var(--surface2); padding: 32px 24px; border-radius: 16px; border: 1px solid var(--border); text-align: center;">
                <div style="font-size: 10px; color: var(--t3); font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">Required Daily "EMI"</div>
                <div style="font-size: 52px; font-weight: 900; color: var(--t1); margin: 5px 0; letter-spacing: -1px;">$${(dailyEMI/1000).toFixed(0)}K</div>
                <p style="font-size: 13px; color: var(--t2); line-height: 1.6; margin-top: 15px; font-weight: 600;">
                    Average closing amount required per business day.
                </p>
            </div>
        </div>
    `;

    document.getElementById('drawerSlider').addEventListener('input', (e) => {
        window.renderDrawerUI(e.target.value);
    });
};

// ... toggleForecastDrawer logic remains the same ...

// 2. THIS LOADS THE CONTENT INSIDE THE SLIDE-OUT PANEL
/* ════ REVENUE PACING & FORECAST LOGIC ════ */

// Toggle function for the Right-Side Drawer
window.toggleForecastDrawer = function() {
    const drawer = document.getElementById('forecast-drawer');
    const overlay = document.getElementById('drawer-overlay');
    
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.toggle('open');
    overlay.style.display = isOpen ? 'block' : 'none';

    if (isOpen) {
        renderDrawerUI(30); // Start with 30 days default
    }
};

// The actual Forecast Calculation Logic
window.renderDrawerUI = function(days) {
    const drawerBody = document.querySelector('.drawer-body');
    if (!drawerBody) return;

    // Values as per your requirement
    const target = 50.0 * 1000000; 
    const achieved = 21.2 * 1000000;
    const gap = target - achieved;
    const dailyEMI = gap / days;
    const progressPct = (achieved / target) * 100;

    drawerBody.innerHTML = `
        <div style="animation: fadeIn 0.3s ease; font-family: 'Plus Jakarta Sans', sans-serif;">
            
            <div style="background: var(--surface2); padding: 20px; border-radius: 16px; border: 1px solid var(--border); margin-bottom: 24px;">
                <div style="font-size: 10px; color: var(--t3); font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Current Pacing</div>
                <div style="font-size: 24px; font-weight: 800; color: var(--t1); margin: 8px 0;">$${(achieved/1000000).toFixed(1)}M / $50M</div>
                
                <div style="width:100%; height:6px; background:var(--border); border-radius:10px; overflow:hidden; margin: 12px 0;">
                    <div style="width: ${progressPct}%; height:100%; background: var(--accent); transition: width 1s ease;"></div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="font-size: 11px; color: var(--red); font-weight: 700;">Gap: $${(gap/1000000).toFixed(1)}M</div>
                    <div style="font-size: 11px; color: var(--t3); font-weight: 600;">${progressPct.toFixed(1)}% Attained</div>
                </div>
                <p style="font-size: 11px; color: var(--t2); margin-top: 12px; line-height: 1.5; border-top: 1px solid var(--border); padding-top: 10px;">
                    The <b>$${(gap/1000000).toFixed(1)}M deficit</b> is the primary figure used to calculate your required daily closing run-rate.
                </p>
            </div>

            <div style="margin-bottom: 30px; padding: 0 5px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; align-items:center;">
                    <span style="font-size: 12px; font-weight: 800; color: var(--t1); text-transform: uppercase;">Time Sensitivity</span>
                    <span style="font-size: 12px; font-weight: 800; color: var(--accent); background: var(--accent-dim); padding: 4px 10px; border-radius: 6px;">${days} Days Left</span>
                </div>
                <input type="range" min="1" max="90" value="${days}" id="drawerSlider" style="width: 100%; cursor: pointer; accent-color: var(--accent);">
                <p style="font-size: 11px; color: var(--t3); margin-top: 10px; line-height: 1.4;">
                    <b>Fewer days</b> result in a <b>higher daily "EMI"</b> to compensate for lost time.
                </p>
            </div>

            <div style="background: var(--surface2); padding: 32px 24px; border-radius: 16px; border: 1px solid var(--border); text-align: center;">
                <div style="font-size: 11px; color: var(--t3); font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">Required Daily "EMI"</div>
                <div style="font-size: 52px; font-weight: 900; color: var(--t1); margin: 5px 0; letter-spacing: -1px;">$${(dailyEMI/1000).toFixed(0)}K</div>
                <p style="font-size: 13px; color: var(--t2); line-height: 1.6; margin-top: 15px; font-weight: 600;">
                    To hit 100% attainment, you must average this closing amount every business day.
                </p>
                <p style="font-size: 10px; color: var(--t4); margin-top: 20px; font-weight: 600; font-style: italic;">
                    *Calculated by dividing total gap by remaining days.
                </p>
            </div>
        </div>
    `;

    // Re-attach the slider event listener
    document.getElementById('drawerSlider').addEventListener('input', (e) => {
        window.renderDrawerUI(e.target.value);
    });
};