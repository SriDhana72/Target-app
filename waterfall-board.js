/* ════ WIN RATE PIPELINE BOARD LOGIC ════ */
function renderWaterfallBoard() {
    const board = document.getElementById('wfBoard');
    if(!board) return;

    const wfData = [
        { col: 'crit', title: 'Critical', desc: '< 55%', items: [
            { prod: 'People', region: 'India North', flag: '🇮🇳', wr: '44%', trend: '↓ 4%', vol: '$1.2M' },
            { prod: 'Analytics', region: 'India North', flag: '🇮🇳', wr: '46%', trend: '↓ 2%', vol: '$850K' },
            { prod: 'Zoho ONE', region: 'LATAM', flag: '🌎', wr: '50%', trend: '↓ 5%', vol: '$2.1M' }
        ]},
        { col: 'warn', title: 'At Risk', desc: '55% - 64%', items: [
            { prod: 'Desk', region: 'LATAM', flag: '🌎', wr: '58%', trend: '↑ 1%', vol: '$920K' },
            { prod: 'People', region: 'India South', flag: '🇮🇳', wr: '62%', trend: '↓ 1%', vol: '$1.5M' },
            { prod: 'CRM', region: 'APAC', flag: '🌏', wr: '64%', trend: '↑ 3%', vol: '$3.4M' }
        ]},
        { col: 'stable', title: 'Stable', desc: '65% - 73%', items: [
            { prod: 'Analytics', region: 'US East', flag: '🇺🇸', wr: '68%', trend: '↑ 2%', vol: '$4.2M' },
            { prod: 'Desk', region: 'ANZ', flag: '🇦🇺', wr: '70%', trend: '↑ 4%', vol: '$1.8M' },
            { prod: 'Zoho ONE', region: 'India South', flag: '🇮🇳', wr: '72%', trend: '↑ 1%', vol: '$5.5M' },
            { prod: 'Finance', region: 'UK', flag: '🇬🇧', wr: '73%', trend: '↑ 2%', vol: '$2.8M' }
        ]},
        { col: 'optimal', title: 'Optimal', desc: '≥ 74%', items: [
            { prod: 'CRM Plus', region: 'India South', flag: '🇮🇳', wr: '76%', trend: '↑ 5%', vol: '$6.1M' },
            { prod: 'CRM', region: 'India South', flag: '🇮🇳', wr: '80%', trend: '↑ 2%', vol: '$8.4M' },
            { prod: 'CRM', region: 'US East', flag: '🇺🇸', wr: '82%', trend: '↑ 6%', vol: '$12.5M' }
        ]}
    ];

    let html = '';
    let globalDelay = 0; // Staggered entry animation delay

    wfData.forEach((col) => {
        let cardsHtml = '';
        col.items.forEach((item) => {
            globalDelay += 0.08;
            cardsHtml += `
                <div class="wf-card" style="animation-delay: ${globalDelay}s">
                    <div class="wf-indicator"></div>
                    <div class="wf-prod">${item.prod}</div>
                    <div class="wf-region"><span>${item.flag}</span> ${item.region}</div>
                    <div class="wf-foot">
                        <div>
                            <div class="wf-vol-lbl">Pipeline</div>
                            <div class="wf-vol-val">${item.vol}</div>
                        </div>
                        <div style="text-align:right;">
                            <div class="wf-wr">${item.wr}</div>
                            <div class="wf-trend">${item.trend}</div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
            <div class="wf-col ${col.col}">
                <div class="wf-col-head">
                    <div>
                        <div class="wf-col-title">${col.title}</div>
                        <div style="font-size:10px; color:var(--t3); margin-top:2px;">${col.desc}</div>
                    </div>
                    <div class="wf-badge">${col.items.length}</div>
                </div>
                <div class="wf-cards-container">
                    ${cardsHtml}
                </div>
            </div>
        `;
    });

    board.innerHTML = html;
}

// Automatically run the function safely
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWaterfallBoard);
} else {
    renderWaterfallBoard();
}