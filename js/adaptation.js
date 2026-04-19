// ===== ADAPTATION FACTORY =====
const RATIOS = [
  {name:'16:9',w:16,h:9,label:'YouTube / TV'},
  {name:'9:16',w:9,h:16,label:'TikTok / Reels'},
  {name:'1:1',w:1,h:1,label:'Instagram Post'},
  {name:'4:5',w:4,h:5,label:'Instagram Feed'},
  {name:'4:3',w:4,h:3,label:'Facebook Video'},
  {name:'21:9',w:21,h:9,label:'Cinematic'},
  {name:'2:3',w:2,h:3,label:'Pinterest'},
  {name:'3:4',w:3,h:4,label:'Portrait'},
  {name:'16:10',w:16,h:10,label:'Presentation'}
];
let selectedRatio = 0;

const TRANSLATIONS = {
  en: {sub:'IDF confirms targeted strike on Hamas command center embedded in civilian area',flag:'&#127482;&#127480;',lang:'English'},
  ar: {sub:'&#1575;&#1604;&#1580;&#1610;&#1588; &#1575;&#1604;&#1573;&#1587;&#1585;&#1575;&#1574;&#1610;&#1604;&#1610; &#1610;&#1572;&#1603;&#1583; &#1590;&#1585;&#1576;&#1577; &#1605;&#1608;&#1580;&#1607;&#1577; &#1604;&#1605;&#1585;&#1603;&#1586; &#1602;&#1610;&#1575;&#1583;&#1577; &#1581;&#1605;&#1575;&#1587;',flag:'&#127480;&#127462;',lang:'Arabic'},
  fr: {sub:"Tsahal confirme une frappe cibl\u00e9e sur un centre de commandement du Hamas",flag:'&#127467;&#127479;',lang:'French'}
};

function buildRatioGrid() {
  const g = document.getElementById('ratioGrid');
  g.innerHTML = '';
  RATIOS.forEach((r,i) => {
    const maxW=80,maxH=60,s=Math.min(maxW/r.w,maxH/r.h),w=r.w*s,h=r.h*s;
    const d = document.createElement('div');
    d.className = 'ratio-card' + (i===selectedRatio?' selected':'');
    d.onclick = () => { selectedRatio=i; buildRatioGrid(); updateTrackFrames(); };
    d.innerHTML = `<div class="ratio-box" style="width:${w}px;height:${h}px">${r.name}</div><div class="ratio-name">${r.name}</div><div class="ratio-platform">${r.label}</div>`;
    g.appendChild(d);
  });
}

function updateTrackFrames() {
  const r = RATIOS[selectedRatio];
  document.getElementById('trackAFrame').style.aspectRatio = `${r.w}/${r.h}`;
  document.getElementById('trackBFrame').style.aspectRatio = `${r.w}/${r.h}`;
  document.getElementById('trackARatio').textContent = r.name;
  document.getElementById('trackBRatio').textContent = r.name;
}

function selectLang(btn, code) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const t = TRANSLATIONS[code];
  document.getElementById('trackBSub').innerHTML = `[${code.toUpperCase()}] ${t.sub}`;
  document.getElementById('trackBFlag').innerHTML = t.flag;
  document.getElementById('trackBLang').textContent = t.lang;
  document.getElementById('trackBLabel').textContent = `Translated \u2014 ${t.lang}`;
}

function animateStep(stepId, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      const el = document.getElementById(stepId);
      el.classList.add('active');
      setTimeout(() => { el.classList.remove('active'); el.classList.add('done'); resolve(); }, 600);
    }, delay);
  });
}

async function runAdaptation() {
  const btn = document.getElementById('adaptBtn');
  btn.disabled = true;
  document.getElementById('adaptPipeline').style.display = 'block';
  document.getElementById('adaptResults').style.display = 'none';
  document.getElementById('adaptStatus').textContent = 'Processing...';
  for(let i=1;i<=6;i++) { const s=document.getElementById('as'+i); s.classList.remove('done','active'); }
  for(let i=1;i<=6;i++) { await animateStep('as'+i, 400); }
  document.getElementById('adaptResults').style.display = 'block';
  document.getElementById('adaptStatus').textContent = 'Complete \u2014 54 assets generated';
  btn.disabled = false;
  buildRatioGrid();
}
