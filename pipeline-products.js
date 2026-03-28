/* ════ PIPELINE PRODUCTS CHART LOGIC ════ */
function drawProdChart() {  
  const container = document.getElementById('appProdRev');  
  if(!container) return;  
  
  // 1. Data updated with 'q' property to map to your UI Quarters
  const allData = [  
    { l: "CRM",       v: 91, max: 100, c: "#3b82f6", sub: "↑ 18% QoQ", q: "Q1" },  
    { l: "Zoho ONE",  v: 61, max: 100, c: "#8b5cf6", sub: "↑ 12% QoQ", q: "Q2" },  
    { l: "Desk",      v: 46, max: 100, c: "#10b981", sub: "↑ 24% QoQ", q: "Q3" },  
    { l: "Analytics", v: 38, max: 100, c: "#f59e0b", sub: "↑ 8% QoQ",  q: "Q4" },  
    { l: "People",    v: 30, max: 100, c: "#f97316", sub: "↑ 15% QoQ", q: "Q1" }  
  ];  

  // 2. Get the current active quarter from your .tc-pill elements
  const activeQPill = document.querySelector('.tc-pill.active');
  const activeQ = activeQPill ? activeQPill.textContent.trim() : 'Q1';

  // 3. Logic: Filter out anything that doesn't match the selection
  const filteredData = allData.filter(d => d.q === activeQ);
  
  // 4. Render only the filtered results
  container.innerHTML = filteredData.map(d => `  
    <div class="app-prod-row">  
      <div class="app-prod-info">  
        <div class="app-prod-name">${d.l}</div>  
        <div class="app-prod-sub" style="color:${d.c}">${d.sub}</div>  
      </div>  
      <div class="app-prod-track">  
        <div class="app-prod-fill" style="width:${(d.v/d.max)*100}%; background:${d.c};"></div>  
      </div>  
      <div class="app-prod-val">$${d.v}M</div>  
    </div>  
  `).join('');  
}

// 5. Global Listener: Re-draw when any quarter pill is clicked
// This ensures the removal happens immediately upon user interaction
document.querySelectorAll('.tc-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        // 50ms timeout ensures the 'active' class has switched on the DOM before we read it
        setTimeout(drawProdChart, 50);
    });
});