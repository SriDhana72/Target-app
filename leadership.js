/* ════ LEADERSHIP DASHBOARD ════ */

// Global state to track the active filter
let currentLDFilter = 'Top Performers';

function initLDFilter() {
    // Remove the old static YTD filter if it exists in the DOM
    const oldDatePicker = document.querySelector('.ld-date-picker');
    if (oldDatePicker) {
        oldDatePicker.remove();
    }

    // Remove the instruction text as requested
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        if (div.textContent.trim() === 'Click on Agents below to include [+] them in Performance appraisal') {
            div.style.display = 'none';
        }
    });

    // Remove the 2 static icons (📊 and 📄) next to filters
    const staticIcons = document.querySelectorAll('#sec-targets .th-icon-btn');
    staticIcons.forEach(btn => {
        if (btn.textContent.includes('📊') || btn.textContent.includes('📄')) {
            btn.remove();
        }
    });

    const selects = document.querySelectorAll('.form-input');
    let ldSelect = null;
    
    // Find the dropdown that contains 'Top Performers'
    for (let s of selects) {
        if(s.innerHTML.includes('Top Performers')) {
            ldSelect = s;
            break;
        }
    }
    
    // Bind it once to prevent multiple event listeners
    if (ldSelect && !ldSelect.hasAttribute('data-bound')) {
        ldSelect.setAttribute('data-bound', 'true');
        ldSelect.innerHTML = '<option value="Top Performers">Top Performers</option><option value="Needs Attention">Needs Attention</option>';
        ldSelect.value = currentLDFilter;
        
        // Apply premium styling to the performance dropdown
        ldSelect.style.backgroundColor = 'var(--surface2)';
        ldSelect.style.border = '1px solid var(--border)';
        ldSelect.style.color = 'var(--t2)';
        ldSelect.style.fontWeight = '500';
        ldSelect.style.cursor = 'pointer';
        ldSelect.style.boxShadow = '0 2px 6px rgba(0,0,0,0.04)';
        
        ldSelect.addEventListener('change', (e) => {
            currentLDFilter = e.target.value;
            renderLeadershipDashboard();
            drawOppsBubbleChart(); // Ensure the chart instantly flips to the new dataset
        });

        // --- Dynamically Inject the Date Picker ---
        const headerFlex = ldSelect.parentElement;
        if (headerFlex && headerFlex.tagName === 'DIV') {
            // Create a wrapper for the right-side controls
            const controlsWrap = document.createElement('div');
            controlsWrap.style.display = 'flex';
            controlsWrap.style.gap = '12px';
            controlsWrap.style.alignItems = 'center';
            
            // Move the existing performance dropdown into the new wrapper
            headerFlex.insertBefore(controlsWrap, ldSelect);
            controlsWrap.appendChild(ldSelect);
            
            // Create the new Date Picker wrapper
            const dateSelectWrap = document.createElement('div');
            dateSelectWrap.style.display = 'flex';
            dateSelectWrap.style.alignItems = 'center';
            dateSelectWrap.style.gap = '8px';
            
            const dateIcon = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" style="position:absolute; left:12px; color:var(--t3); pointer-events:none; z-index:1;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
            
            // Dropdown for predefined date ranges
            const dateSelect = document.createElement('select');
            dateSelect.className = 'form-input';
            dateSelect.style.width = '150px';
            dateSelect.style.padding = '8px 12px 8px 34px';
            dateSelect.style.fontSize = '12px';
            dateSelect.style.borderRadius = '8px';
            dateSelect.style.cursor = 'pointer';
            dateSelect.style.backgroundColor = 'var(--surface2)';
            dateSelect.style.border = '1px solid var(--border)';
            dateSelect.style.color = 'var(--t2)';
            dateSelect.style.fontWeight = '500';
            dateSelect.style.boxShadow = '0 2px 6px rgba(0,0,0,0.04)';
            
            dateSelect.innerHTML = `
                <option value="Current Quarter">Current Quarter</option>
                <option value="This Year">This Year</option>
                <option value="Previous Year">Previous Year</option>
                <option value="Custom">Custom...</option>
            `;
            
            // Native HTML Date Picker for the "Custom" option
            const customDateInput = document.createElement('input');
            customDateInput.type = 'date';
            customDateInput.className = 'form-input';
            customDateInput.style.display = 'none'; // Hidden until "Custom" is selected
            customDateInput.style.padding = '7px 12px';
            customDateInput.style.fontSize = '12px';
            customDateInput.style.borderRadius = '8px';
            customDateInput.style.border = '1px solid var(--border)';
            customDateInput.style.backgroundColor = 'var(--surface2)';
            customDateInput.style.color = 'var(--t2)';
            customDateInput.style.fontWeight = '500';
            customDateInput.style.cursor = 'pointer';
            customDateInput.style.boxShadow = '0 2px 6px rgba(0,0,0,0.04)';
            
            dateSelect.addEventListener('change', (e) => {
                if (e.target.value === 'Custom') {
                    customDateInput.style.display = 'block';
                    // Auto-open the native calendar if the browser supports it
                    setTimeout(() => { if (customDateInput.showPicker) customDateInput.showPicker(); }, 50);
                } else {
                    customDateInput.style.display = 'none';
                }
                renderLeadershipDashboard();
                drawOppsBubbleChart();
            });

            customDateInput.addEventListener('change', () => {
                // Triggers updates when a specific custom date is picked
                renderLeadershipDashboard();
                drawOppsBubbleChart();
            });
            
            // Assemble the Select Input with its icon
            const selectContainer = document.createElement('div');
            selectContainer.style.position = 'relative';
            selectContainer.style.display = 'flex';
            selectContainer.style.alignItems = 'center';
            selectContainer.innerHTML = dateIcon;
            selectContainer.appendChild(dateSelect);

            dateSelectWrap.appendChild(selectContainer);
            dateSelectWrap.appendChild(customDateInput); // Attach custom date right next to it
            
            // Prepend the date picker wrap before the Performance dropdown
            controlsWrap.insertBefore(dateSelectWrap, ldSelect);
        }
    }
}

// Deterministic pseudo-random number generator (Fixed data on refresh)
function getSeededRandom(seedStr) {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
        hash = (hash << 5) - hash + seedStr.charCodeAt(i);
        hash |= 0; 
    }
    const x = Math.sin(hash) * 10000;
    return x - Math.floor(x);
}

function renderLeadershipDashboard() {
    const container1 = document.getElementById('ld-deals-won');
    const container2 = document.getElementById('ld-win-rate');
    const container4 = document.getElementById('ld-leaderboard');

    if(!container1) return;

    initLDFilter();
    const isTop = currentLDFilter === 'Top Performers';

    // Map your specific custom names to the top 14 spots safely, only once
    if (!window.DASHBOARD_REPS) {
        const targetNames = [
            "Samuel", "Hameed", "Jack", "Sanjay Thomas", "Foumin", 
            "Dhana", "Binny", "Rekha", "Goutham", "Yogi", 
            "Udhay charan", "Boojavani", "Prasanna", "Raghu"
        ];

        window.DASHBOARD_REPS = [...REPS].map((r, i) => {
            // Generate Target strictly between $100,000 and $1,000,000 using deterministic seed
            const rand1 = getSeededRandom(r.name + "target");
            const targetRev = Math.floor(rand1 * (1000000 - 100000 + 1)) + 100000;
            
            // Update Achieved Revenue based on target (between 60% and 150% attainment)
            const rand2 = getSeededRandom(r.name + "attainment");
            const randomAttainment = rand2 * 0.9 + 0.6;
            const achievedRev = Math.floor(targetRev * randomAttainment);
            const att = Math.round((achievedRev / targetRev) * 100);
            
            return {
                ...r,
                targetRev: targetRev,
                achievedRev: achievedRev,
                att: att,
                // SCORE is strictly their Achieved Revenue ($) to ensure perfect logical sorting down the list
                score: achievedRev 
            };
        }).sort((a,b) => b.score - a.score); // Sort strictly descending by Revenue

        // Assign the strict priority names after sorting so Peter is ALWAYS #1 Revenue, Logan #2, Mack #3
        window.DASHBOARD_REPS.forEach((r, i) => {
            if (i < targetNames.length) {
                r.name = targetNames[i];
            }
        });
    }

    // Filter dynamically based on the dropdown (Ascending for Needs Attention, Descending for Top Performers)
    const byAchieved = [...window.DASHBOARD_REPS].sort((a,b) => isTop ? b.achievedRev - a.achievedRev : a.achievedRev - b.achievedRev).slice(0, 3);
    const byWR = [...window.DASHBOARD_REPS].sort((a,b) => isTop ? b.wr - a.wr : a.wr - b.wr).slice(0, 3);

    // Fail-safe dynamic DOM title update for Achieved Column
    const colDealsTitle = document.querySelector('.ld-col-deals .acard-title');
    if (colDealsTitle) {
        colDealsTitle.textContent = isTop ? 'Top Performers by Achieved' : 'Needs Attention by Achieved';
    } else if (container1.previousElementSibling) {
        container1.previousElementSibling.textContent = isTop ? 'Top Performers by Achieved' : 'Needs Attention by Achieved';
    }

    const colWrTitle = document.querySelector('.ld-col-wr .acard-title');
    if (colWrTitle) {
        colWrTitle.textContent = isTop ? 'Top Performers by Win Rate' : 'Needs Attention by Win Rate';
    } else if (container2.previousElementSibling) {
        container2.previousElementSibling.textContent = isTop ? 'Top Performers by Win Rate' : 'Needs Attention by Win Rate';
    }

    // Robustly update the Leaderboard header and emoji
    const leadCard = document.querySelector('.ld-col-lead');
    if (leadCard) {
        const headerFlex = leadCard.firstElementChild;
        if (headerFlex) {
            const emojiEl = headerFlex.children[0];
            const titleEl = headerFlex.children[1]?.children[0];
            
            if (titleEl) titleEl.textContent = isTop ? 'Leaderboard' : 'Priority Action List';
            if (emojiEl) {
                emojiEl.textContent = isTop ? '🏆' : '⚠️';
                emojiEl.style.color = isTop ? '#c4870a' : 'var(--red)';
            }
        }
    }

    // Fetches professional, formal profile images based on the rep's name
    const getAvatar = (name) => {
        if (name.toLowerCase() === 'dhana') {
            return 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80';
        }

        const femaleNames = ["rekha", "dhana", "boojavani", "kavitha", "meena", "sunita", "preethi", "divya", "lakshmi", "eva", "fatima", "grace", "amrita", "nisha", "pallavi"];
        const isFemale = femaleNames.some(fn => name.toLowerCase().includes(fn));
        
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        hash = Math.abs(hash);
        const gender = isFemale ? 'women' : 'men';
        const num = (hash % 90) + 1; // 1 to 90
        return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
    };

    const renderRepCard = (r) => {
        const avgDeal = Math.round(r.achievedRev / r.deals).toLocaleString();
        return `
        <div class="ld-rep-row">
            <div style="width: 64px; height: 64px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); flex-shrink: 0; background: var(--surface3); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <img src="${getAvatar(r.name)}" class="ld-avatar-img" alt="${r.name}">
            </div>
            <div class="ld-rep-info">
                <div class="ld-rep-name">${r.name}</div>
                <div class="ld-rep-stat">• Achieved: <span style="font-weight: 700;">$${r.achievedRev.toLocaleString()}</span></div>
                <div class="ld-rep-stat">• Win rate: <span style="font-weight: 700;">${r.wr}%</span></div>
                <div class="ld-rep-stat">• Avg deal size: <span style="font-weight: 700;">$${avgDeal}</span></div>
            </div>
            <div class="ld-rep-tenure">Tenure: ${r.tenure*12} months</div>
        </div>`;
    };

    container1.innerHTML = byAchieved.map(renderRepCard).join('');
    container2.innerHTML = byWR.map(renderRepCard).join('');

    // Dynamically grab the Top 14 or Bottom 14 based strictly on Achieved Revenue ($) sorting
    const lbReps = [...window.DASHBOARD_REPS].sort((a,b) => isTop ? b.score - a.score : a.score - b.score).slice(0, 14);

    const top3 = lbReps.slice(0, 3);
    const rest = lbReps.slice(3);

    // Reorder Top 3 for Podium: [2nd, 1st, 3rd]
    const podiumReps = [top3[1], top3[0], top3[2]];

    let podiumHtml = `<div class="ld-podium-container">` + podiumReps.map((r, idx) => {
        if (!r) return '';
        const realRank = idx === 0 ? 2 : idx === 1 ? 1 : 3;
        const target = r.targetRev.toLocaleString();
        const achClass = r.att >= 100 ? 'ach' : '';
        
        let badgeSvg;
        let extraStyle = '';
        let borderOverride = '';
        let tooltipText = '';
        
        // Use Crowns/Ribbons for Top Performers, but Severity-tiered Icons for Needs Attention
        if (isTop) {
            badgeSvg = realRank === 1 
                ? `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="2 20 22 20 19 4 15 12 12 4 9 12 5 4 2 20"></polygon></svg>`
                : `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`;
            tooltipText = `Rank ${realRank}`;
            
            // SET GOLD BADGE TO YELLOW
            if (realRank === 1) {
                extraStyle = `background: #facc15; color: #854d0e; border-color: var(--surface);`;
            }
        } else {
            if (realRank === 1) {
                // Critical Severity (Center - Worst Performer)
                badgeSvg = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
                extraStyle = `background: var(--red); color: white; border-color: var(--surface);`;
                borderOverride = `border-color: var(--red); box-shadow: 0 8px 24px rgba(212, 63, 63, 0.15);`;
                tooltipText = `Critical Risk`;
            } else if (realRank === 2) {
                // High Severity (Left - 2nd Worst)
                badgeSvg = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
                extraStyle = `background: var(--orange); color: white; border-color: var(--surface);`;
                borderOverride = `border-color: var(--orange); box-shadow: 0 4px 16px rgba(196, 98, 10, 0.12);`;
                tooltipText = `High Risk`;
            } else {
                // Moderate Severity (Right - 3rd Worst)
                badgeSvg = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
                extraStyle = `background: var(--amber); color: white; border-color: var(--surface);`;
                borderOverride = `border-color: var(--amber); box-shadow: 0 4px 16px rgba(196, 135, 10, 0.12);`;
                tooltipText = `Moderate Risk`;
            }
        }

        return `
        <div class="podium-item rank-${realRank}" style="${borderOverride}">
            <div class="podium-medal m${realRank}" title="${tooltipText}" style="${extraStyle}">${badgeSvg}</div>
            <div class="podium-av"><img src="${getAvatar(r.name)}" class="ld-avatar-img"></div>
            <div class="podium-name">${r.name}</div>
            <div class="podium-score" style="font-size: 13px; font-weight: 700;">$${r.achievedRev.toLocaleString()}</div>
            <div class="podium-stat"><span>Target</span> <span>$${target}</span></div>
            <div class="podium-stat ${achClass}"><span>Achieved</span> <span>${r.att}%</span></div>
        </div>`;
    }).join('') + `</div>`;

    // Condensed, refined List Block (Ranks 4-14)
    let listHtml = `<div class="ld-list" style="padding: 8px 12px; display: flex; flex-direction: column; gap: 6px;">` + rest.map((r, i) => {
        const target = r.targetRev.toLocaleString();
        const achColor = r.att >= 100 ? 'var(--green)' : 'var(--amber)';
        
        // Clean SVG Icons to replace emojis and reduce congestion
        const targetIcon = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" stroke-width="2" style="opacity: 0.8;"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
        const achieveIcon = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" stroke-width="2" style="opacity: 0.8;"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`;

        return `
        <div class="ld-list-row" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; background: var(--surface); border: 1px solid var(--border); box-shadow: 0 1px 4px rgba(0,0,0,0.02);">
            <div class="ld-lb-rank" style="width: 18px; font-size: 14px; font-weight: 800; color: var(--t3); text-align: center;">${i+4}</div>
            <div style="width: 38px; height: 38px; overflow:hidden; border-radius: 50%; background: var(--surface3); border: 1px solid var(--border); flex-shrink: 0;">
                <img src="${getAvatar(r.name)}" class="ld-avatar-img">
            </div>
            <div style="flex: 1; min-width: 0;">
                <div class="ld-lb-name" style="font-size: 13px; font-weight: 800; color: var(--t1); margin-bottom: 4px;">${r.name}</div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <div>
                        <div style="font-size: 11px; font-weight: 700; color: var(--t2); display: flex; align-items: center; gap: 4px;">
                            ${targetIcon} $${target}
                        </div>
                        <div style="font-size: 10px; font-weight: 600; color: var(--t3); margin-top: 1px;">Target</div>
                    </div>
                    <div>
                        <div style="font-size: 11px; font-weight: 700; color: ${achColor}; display: flex; align-items: center; gap: 4px;">
                            ${achieveIcon} ${r.att}%
                        </div>
                        <div style="font-size: 10px; font-weight: 600; color: ${achColor}; margin-top: 1px;">Achieved</div>
                    </div>
                </div>
            </div>
            <div class="ld-lb-score" style="font-size: 13px; font-weight: 800; color: var(--t1);">$${r.achievedRev.toLocaleString()}</div>
        </div>`;
    }).join('') + `</div>`;

    container4.innerHTML = podiumHtml + listHtml;
    if (document.getElementById('tenure-bars')) renderTenureBars();
}

let chartDrawAttempts = 0;

function drawOppsBubbleChart() {
    const canvas = document.getElementById('oppsBubbleChart');
    if(!canvas) return;
    
    const rect = canvas.parentElement.getBoundingClientRect();
    
    if(rect.width === 0 || rect.height === 0) {
        if(chartDrawAttempts < 50) { 
            chartDrawAttempts++;
            setTimeout(drawOppsBubbleChart, 50);
        }
        return;
    }
    
    chartDrawAttempts = 0; // Reset
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);

    const isTop = currentLDFilter === 'Top Performers';

    // Sort the chart dynamically based on the dropdown filter too!
    const reps = [...(window.DASHBOARD_REPS || REPS)].sort((a,b) => isTop ? b.achievedRev - a.achievedRev : a.achievedRev - b.achievedRev).slice(0, 8);
    const padding = { top: 20, bottom: 30, left: 120, right: 20 };
    const w = canvas.width - padding.left - padding.right;
    const h = canvas.height - padding.top - padding.bottom;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.fillStyle = isDark ? "#7a90b0" : "#3a5272";
    ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    const rowH = h / reps.length;
    reps.forEach((r, i) => {
        const y = padding.top + (i * rowH) + (rowH/2);
        ctx.fillText(r.name, 10, y);

        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + w, y);
        ctx.strokeStyle = isDark ? "#222c3c" : "#dde4ef";
        ctx.lineWidth = 1;
        ctx.stroke();
    });

    const months = ['1 Jan', '1 Mar', '1 May', '1 Jul', '1 Sept'];
    ctx.textAlign = "center";
    months.forEach((m, i) => {
        const x = padding.left + (i * (w / (months.length-1)));
        ctx.fillText(m, x, canvas.height - 10);
    });

    const colors = ['#e5e7eb', '#e5e7eb', 'var(--red)', 'var(--accent)', 'var(--accent)', 'var(--accent2)'];
    for(let i=0; i<reps.length; i++) {
        const y = padding.top + (i * rowH) + (rowH/2);
        const numBubbles = (reps[i].name.length % 5) + 4; 
        
        for(let j=0; j<numBubbles; j++) {
            const xPct = ((reps[i].name.charCodeAt(j % reps[i].name.length) * (j+1)) % 100) / 100;
            const x = padding.left + (xPct * w);
            const radius = (((j * 3) % 7) + 4); 
            const color = colors[(i+j) % colors.length];
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI*2);
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.8;
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
    }
}

// Hook into the document lifecycle
window.addEventListener('DOMContentLoaded', () => {
    renderLeadershipDashboard();

    const canvasWrap = document.getElementById('oppsBubbleChart')?.parentElement;
    if(canvasWrap) {
        const observer = new ResizeObserver(() => {
            const targetSec = document.getElementById('sec-targets');
            if(targetSec && targetSec.classList.contains('active')) {
                drawOppsBubbleChart();
            }
        });
        observer.observe(canvasWrap);
    }
});

function scrollToOrgChart() {
    goTo('orgchart'); 
    
    let attempts = 0;
    let scrollTimer = setInterval(() => {
        attempts++;
        
        let target = null;
        const allTags = document.querySelectorAll('h1, h2, h3, h4, div, span, b, strong');
        
        for (let el of allTags) {
            if (el.textContent.trim() === 'Organization Hierarchy') {
                target = el;
                break;
            }
        }

        if (target && target.offsetHeight > 0) {
            // We use window.scrollTo with an offset of 120px to keep the header clear
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 120; 

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            clearInterval(scrollTimer);
        }

        if (attempts > 15) clearInterval(scrollTimer);
    }, 150); 
}

/* ════ TOP PERFORMERS RENDERING ════ */
function renderTopPerformers() {
    const container = document.getElementById('ld-deals-won');
    if (!container) return;

    const topPerformers = [
        {
            name: "Samuel Walker",
            image: "https://i.pravatar.cc/150?img=11",
            manager: "Logan",
            target: "$1,000,000",
            achieved: "$1,360,498",
            attainment: "136%",
            winRate: "80%",
            avgDealSize: "$9,859",
            tenure: "84 months"
        },
        {
            name: "Kavitha Rajan",
            image: "https://i.pravatar.cc/150?img=5",
            manager: "Ananya Iyer",
            target: "$850,000",
            achieved: "$1,120,400",
            attainment: "131%",
            winRate: "76%",
            avgDealSize: "$12,400",
            tenure: "60 months"
        }
    ];

    container.innerHTML = topPerformers.map((performer, index) => `
        <div style="position: relative; padding: 16px; border-bottom: ${index === topPerformers.length - 1 ? 'none' : '1px solid var(--border)'}; display: flex; gap: 16px;">
            
            <div style="position: absolute; top: 16px; right: 16px; color: var(--t3); cursor: pointer;" title="View Hierarchy" onclick="scrollToOrgChart()">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="10" width="5" height="5" rx="1"></rect>
                    <rect x="16" y="4" width="5" height="5" rx="1"></rect>
                    <rect x="16" y="15" width="5" height="5" rx="1"></rect>
                    <path d="M8 12.5h4v-6h4"></path>
                    <path d="M12 12.5v5h4"></path>
                </svg>
            </div>
            <img src="${performer.image}" alt="${performer.name}" style="width: 54px; height: 54px; border-radius: 12px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0;">
            <div style="flex: 1; padding-right: 24px;">
                <div style="font-size: 16px; font-weight: 800; color: #3b82f6; margin-bottom: 4px;">${performer.name}</div>
                <div style="font-size: 11px; color: var(--t2); margin-bottom: 12px; display: flex; align-items: center; gap: 4px;">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 3v12a3 3 0 0 0 3 3h12"></path>
                        <polyline points="17 14 21 18 17 22"></polyline>
                    </svg>
                    Reporting to: <strong style="color: var(--t1);">${performer.manager}</strong>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; background: var(--surface2); padding: 10px; border-radius: 8px; border: 1px solid var(--border);">
                    <div>
                        <div style="font-size: 9px; color: var(--t3); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Q1 Target</div>
                        <div style="font-size: 13px; font-weight: 700; color: var(--t1);">${performer.target}</div>
                    </div>
                    <div>
                        <div style="font-size: 9px; color: var(--t3); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Q1 Achieved</div>
                        <div style="font-size: 13px; font-weight: 800; color: #00A693;">${performer.achieved} <span style="font-size: 10px; background: #eaf5f0; padding: 2px 4px; border-radius: 4px;">${performer.attainment}</span></div>
                    </div>
                </div>
                <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: var(--t2); line-height: 1.6;">
                    <li>Win rate: <strong style="color: var(--t1);">${performer.winRate}</strong></li>
                    <li>Avg deal size: <strong style="color: var(--t1);">${performer.avgDealSize}</strong></li>
                    <li>Tenure: <strong style="color: var(--t1);">${performer.tenure}</strong></li>
                </ul>
            </div>
        </div>
    `).join('');
}
window.addEventListener('DOMContentLoaded', renderTopPerformers);

/* ════ TOP WIN RATE PERFORMERS RENDERING ════ */
function renderTopWinRatePerformers() {
    const container = document.getElementById('ld-win-rate');
    if (!container) return;

    const topWRPerformers = [
        {
            name: "Grace Kim",
            image: "https://i.pravatar.cc/150?img=9", 
            manager: "Rajesh Menon",
            targetWR: "75%",
            actualWR: "84%",
            wrDelta: "+9%",
            revenue: "$34.8M",
            avgDealSize: "$212K",
            tenure: "108 months"
        },
        {
            name: "Lakshmi Pillai",
            image: "https://i.pravatar.cc/150?img=12", 
            manager: "Ananya Iyer",
            targetWR: "75%",
            actualWR: "82%",
            wrDelta: "+7%",
            revenue: "$31.2M",
            avgDealSize: "$210K",
            tenure: "96 months"
        }
    ];

    container.innerHTML = topWRPerformers.map((performer, index) => `
        <div style="position: relative; padding: 16px; border-bottom: ${index === topWRPerformers.length - 1 ? 'none' : '1px solid var(--border)'}; display: flex; gap: 16px;">
            
            <div style="position: absolute; top: 16px; right: 16px; color: var(--t3); cursor: pointer;" title="View Hierarchy" onclick="scrollToOrgChart()">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="10" width="5" height="5" rx="1"></rect>
                    <rect x="16" y="4" width="5" height="5" rx="1"></rect>
                    <rect x="16" y="15" width="5" height="5" rx="1"></rect>
                    <path d="M8 12.5h4v-6h4"></path>
                    <path d="M12 12.5v5h4"></path>
                </svg>
            </div>
            <img src="${performer.image}" alt="${performer.name}" style="width: 54px; height: 54px; border-radius: 12px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0;">
            <div style="flex: 1; padding-right: 24px;">
                <div style="font-size: 16px; font-weight: 800; color: #3b82f6; margin-bottom: 4px;">${performer.name}</div>
                <div style="font-size: 11px; color: var(--t2); margin-bottom: 12px; display: flex; align-items: center; gap: 4px;">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 3v12a3 3 0 0 0 3 3h12"></path>
                        <polyline points="17 14 21 18 17 22"></polyline>
                    </svg>
                    Reporting to: <strong style="color: var(--t1);">${performer.manager}</strong>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; background: var(--surface2); padding: 10px; border-radius: 8px; border: 1px solid var(--border);">
                    <div>
                        <div style="font-size: 9px; color: var(--t3); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Target Win Rate</div>
                        <div style="font-size: 13px; font-weight: 700; color: var(--t1);">${performer.targetWR}</div>
                    </div>
                    <div>
                        <div style="font-size: 9px; color: var(--t3); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Actual Win Rate</div>
                        <div style="font-size: 13px; font-weight: 800; color: #00A693;">${performer.actualWR} <span style="font-size: 10px; background: #eaf5f0; padding: 2px 4px; border-radius: 4px;">${performer.wrDelta}</span></div>
                    </div>
                </div>
                <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: var(--t2); line-height: 1.6;">
                    <li>Revenue achieved: <strong style="color: var(--t1);">${performer.revenue}</strong></li>
                    <li>Avg deal size: <strong style="color: var(--t1);">${performer.avgDealSize}</strong></li>
                    <li>Tenure: <strong style="color: var(--t1);">${performer.tenure}</strong></li>
                </ul>
            </div>
        </div>
    `).join('');
}
window.addEventListener('DOMContentLoaded', renderTopWinRatePerformers);