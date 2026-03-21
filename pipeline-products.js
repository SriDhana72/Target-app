function drawProdChart() {  
    const container = document.getElementById('appProdRev');  
    if(!container) return;  
    
    const data = [  
      { l: "CRM",       v: 91, max: 100, c: "#3b82f6", sub: "↑ 18% QoQ" },  
      { l: "Zoho ONE",  v: 61, max: 100, c: "#8b5cf6", sub: "↑ 12% QoQ" },  
      { l: "Desk",      v: 46, max: 100, c: "#10b981", sub: "↑ 24% QoQ" },  
      { l: "Analytics", v: 38, max: 100, c: "#f59e0b", sub: "↑ 8% QoQ" },  
      { l: "People",    v: 30, max: 100, c: "#f97316", sub: "↑ 15% QoQ" }  
    ];  
    
    container.innerHTML = data.map(d => `  
      <div class="app-prod-row">  
        <div class="app-prod-info">  
          <div class="app-prod-name">${d.l}</div>  
          <div class="app-prod-sub" style="color:${d.c}">${d.sub}</div>  
        </div>  
        <div class="app-prod-track">  
          <div class="app-prod-fill" style="width:${(d.v/d.max)*100}%; background:${d.c}; box-shadow: 0 0 10px ${d.c}60"></div>  
        </div>  
        <div class="app-prod-val">$${d.v}M</div>  
      </div>  
    `).join('');  
}