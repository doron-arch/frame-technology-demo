// ===== WORKFLOW ENGINE =====
// Scenario definitions
const SCENARIOS = {
  gaza_strike: {
    title: '"Wait for Facts" Campaign',
    desc: 'IDF civilian strike in Gaza \u2014 rapid counter-narrative production',
    nodes: [
      {id:'trigger',x:40,y:48,w:160,h:64,label:'EVENT TRIGGER',name:'Breaking News',desc:'Gaza civilian strike report',color:'#4FC3F7',headerColor:'#1800AD'},
      {id:'claude',x:300,y:138,w:180,h:64,label:'CLAUDE LLM',name:'Script + Translation',desc:'EN / AR / FR content generation',color:'#7C4DFF',headerColor:'#7C4DFF'},
      {id:'whisper',x:300,y:228,w:180,h:64,label:'WHISPER',name:'Transcribe Audio',desc:'Hebrew speech to SRT + text',color:'#4FC3F7',headerColor:'#4FC3F7'},
      {id:'eleven',x:560,y:228,w:180,h:64,label:'ELEVENLABS',name:'Voice Clone + TTS',desc:'Multilingual V2 + Sync Pro',color:'#FF9800',headerColor:'#FF9800'},
      {id:'imagen',x:560,y:348,w:180,h:64,label:'GOOGLE IMAGEN 4',name:'Campaign Visuals',desc:'AI-generated branded images',color:'#66bb6a',headerColor:'#66bb6a'},
      {id:'kling',x:560,y:448,w:180,h:64,label:'KLING 3',name:'Video Generation',desc:'AI video from text scripts',color:'#FF8A80',headerColor:'#FF5252'},
      {id:'ffmpeg',x:800,y:348,w:180,h:64,label:'FFMPEG PROCESSOR',name:'Compose + Brand',desc:'Captions, watermark, audio mix',color:'#4FC3F7',headerColor:'#4FC3F7'},
      {id:'out1',x:850,y:516,w:120,h:48,label:'OUTPUT',name:'9:16 Portrait',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out2',x:850,y:596,w:120,h:48,label:'OUTPUT',name:'16:9 Landscape',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out3',x:850,y:676,w:120,h:48,label:'OUTPUT',name:'1:1 Square',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true}
    ],
    edges: [
      {from:[200,80],to:[300,170]},
      {from:[200,80],to:[300,260]},
      {from:[480,170],to:[560,260]},
      {from:[480,170],to:[560,380]},
      {from:[480,260],to:[480,170],dash:true},
      {from:[480,170],to:[560,480]},
      {from:[740,260],to:[800,380]},
      {from:[740,380],to:[850,540]},
      {from:[740,480],to:[800,380]},
      {from:[980,380],to:[910,620]},
      {from:[980,380],to:[910,700]},
      {from:[740,380],to:[910,700]},
      {from:[740,380],to:[910,620]}
    ],
    connectors: [[200,80],[300,170],[300,260],[480,170],[480,260],[560,260],[560,380],[560,480],[740,260],[740,380],[740,480],[800,380],[980,380],[850,540],[850,620],[850,700]],
    nodeCount: 10, assetCount: 18,
    langBadges: [{x:858,y:560},{x:858,y:640},{x:858,y:720}]
  },
  campus_protest: {
    title: 'Campus Protest Response',
    desc: 'Anti-Israel campus protest \u2014 rapid fact-check and social media response',
    nodes: [
      {id:'trigger',x:40,y:80,w:160,h:64,label:'SOCIAL LISTENER',name:'Protest Detected',desc:'Campus anti-Israel protest alert',color:'#FF5252',headerColor:'#FF5252'},
      {id:'claude',x:280,y:48,w:180,h:64,label:'CLAUDE LLM',name:'Fact-Check Engine',desc:'Verify claims, generate rebuttals',color:'#7C4DFF',headerColor:'#7C4DFF'},
      {id:'context',x:280,y:148,w:180,h:64,label:'CONTEXT ENGINE',name:'Historical Context',desc:'Map claims to verified facts',color:'#4FC3F7',headerColor:'#4FC3F7'},
      {id:'imagen',x:540,y:48,w:180,h:64,label:'GOOGLE IMAGEN 4',name:'Infographic Generator',desc:'Fact-check visual cards',color:'#66bb6a',headerColor:'#66bb6a'},
      {id:'eleven',x:540,y:148,w:180,h:64,label:'ELEVENLABS',name:'Audio Explainer',desc:'Short-form audio responses',color:'#FF9800',headerColor:'#FF9800'},
      {id:'ffmpeg',x:540,y:248,w:180,h:64,label:'FFMPEG PROCESSOR',name:'Video Assembly',desc:'Combine visuals + audio + text',color:'#4FC3F7',headerColor:'#4FC3F7'},
      {id:'out1',x:800,y:48,w:140,h:48,label:'OUTPUT',name:'Twitter/X Thread',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out2',x:800,y:128,w:140,h:48,label:'OUTPUT',name:'Instagram Story',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out3',x:800,y:208,w:140,h:48,label:'OUTPUT',name:'TikTok Short',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out4',x:800,y:288,w:140,h:48,label:'OUTPUT',name:'Fact-Check PDF',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true}
    ],
    edges: [
      {from:[200,112],to:[280,80]},
      {from:[200,112],to:[280,180]},
      {from:[460,80],to:[540,80]},
      {from:[460,80],to:[540,180]},
      {from:[460,180],to:[540,280]},
      {from:[460,180],to:[460,80],dash:true},
      {from:[720,80],to:[800,72]},
      {from:[720,180],to:[800,152]},
      {from:[720,280],to:[800,232]},
      {from:[720,80],to:[800,312]}
    ],
    connectors: [[200,112],[280,80],[280,180],[460,80],[460,180],[540,80],[540,180],[540,280],[720,80],[720,180],[720,280],[800,72],[800,152],[800,232],[800,312]],
    nodeCount: 10, assetCount: 12,
    langBadges: [{x:808,y:90},{x:808,y:170},{x:808,y:250},{x:808,y:330}]
  },
  un_resolution: {
    title: 'UN Resolution Response',
    desc: 'Anti-Israel UN resolution \u2014 multi-audience diplomatic counter-campaign',
    nodes: [
      {id:'trigger',x:40,y:140,w:160,h:64,label:'NEWS FEED',name:'Resolution Alert',desc:'UN vote detected via wire feeds',color:'#FF5252',headerColor:'#FF5252'},
      {id:'claude',x:280,y:60,w:190,h:64,label:'CLAUDE LLM',name:'Legal Analysis',desc:'Resolution text parsing + precedent',color:'#7C4DFF',headerColor:'#7C4DFF'},
      {id:'talking',x:280,y:160,w:190,h:64,label:'CLAUDE LLM',name:'Talking Points',desc:'Audience-specific messaging (5 tracks)',color:'#7C4DFF',headerColor:'#7C4DFF'},
      {id:'data',x:280,y:260,w:190,h:64,label:'DATA ENGINE',name:'Vote Visualization',desc:'Country-by-country vote mapping',color:'#4FC3F7',headerColor:'#4FC3F7'},
      {id:'imagen',x:560,y:60,w:180,h:64,label:'GOOGLE IMAGEN 4',name:'Branded Graphics',desc:'Quote cards + vote map visuals',color:'#66bb6a',headerColor:'#66bb6a'},
      {id:'eleven',x:560,y:160,w:180,h:64,label:'ELEVENLABS',name:'Audio Briefs',desc:'Ambassador-style audio briefs',color:'#FF9800',headerColor:'#FF9800'},
      {id:'ffmpeg',x:560,y:260,w:180,h:64,label:'FFMPEG PROCESSOR',name:'Campaign Package',desc:'Video + data viz compositing',color:'#4FC3F7',headerColor:'#4FC3F7'},
      {id:'out1',x:830,y:48,w:140,h:48,label:'OUTPUT',name:'Diplomatic Brief',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out2',x:830,y:128,w:140,h:48,label:'OUTPUT',name:'Social Campaign',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out3',x:830,y:208,w:140,h:48,label:'OUTPUT',name:'Media Package',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true},
      {id:'out4',x:830,y:288,w:140,h:48,label:'OUTPUT',name:'Data Dashboard',desc:'',color:'#7C4DFF',headerColor:'#1800AD',small:true}
    ],
    edges: [
      {from:[200,172],to:[280,92]},
      {from:[200,172],to:[280,192]},
      {from:[200,172],to:[280,292]},
      {from:[470,92],to:[560,92]},
      {from:[470,192],to:[560,192]},
      {from:[470,292],to:[560,292]},
      {from:[470,92],to:[560,192],dash:true},
      {from:[740,92],to:[830,72]},
      {from:[740,92],to:[830,152]},
      {from:[740,192],to:[830,152]},
      {from:[740,192],to:[830,232]},
      {from:[740,292],to:[830,312]},
      {from:[740,292],to:[830,232]}
    ],
    connectors: [[200,172],[280,92],[280,192],[280,292],[470,92],[470,192],[470,292],[560,92],[560,192],[560,292],[740,92],[740,192],[740,292],[830,72],[830,152],[830,232],[830,312]],
    nodeCount: 11, assetCount: 24,
    langBadges: [{x:838,y:90},{x:838,y:170},{x:838,y:250},{x:838,y:330}]
  }
};

const WF_NODE_INFO = {
  'trigger': {name:'Event Trigger',desc:'Detects breaking news. Pulls raw reports from social media, news feeds, and partner alerts. Initiates the full pipeline.',color:'#4FC3F7'},
  'claude': {name:'Claude LLM (Anthropic)',desc:'Generates fact-checking scripts in English, Arabic, and French. Produces counter-narratives with cultural adaptation per audience. Creates captions and hashtags.',color:'#7C4DFF'},
  'whisper': {name:'Whisper (Replicate)',desc:'Transcribes Hebrew source audio to text + SRT timestamps. Provides transcript to Claude for translation and content generation.',color:'#4FC3F7'},
  'eleven': {name:'ElevenLabs TTS',desc:'Clones original speaker voice profile. Generates multilingual voice-overs using Multilingual V2. Applies Sync 2 Pro lip-sync for natural delivery.',color:'#FF9800'},
  'imagen': {name:'Google Imagen 4',desc:'Creates AI-generated branded campaign visuals. Produces static images for each language with gradient backgrounds, slogans, and brand elements.',color:'#66bb6a'},
  'kling': {name:'Kling 3',desc:'Generates AI video content from text-based scripts. Creates campaign videos that can be composited with voice-over and branding.',color:'#FF8A80'},
  'ffmpeg': {name:'FFmpeg Processor',desc:'Composites video + audio + captions + watermark. Burns in subtitles. Mixes audio: original at -30%, voice-over at +100%. Exports to all formats.',color:'#4FC3F7'},
  'out1': {name:'Format Output 1',desc:'Multi-language output package. 3 languages x (video + graphic) assets.',color:'#7C4DFF'},
  'out2': {name:'Format Output 2',desc:'Multi-language output package. 3 languages x (video + graphic) assets.',color:'#7C4DFF'},
  'out3': {name:'Format Output 3',desc:'Multi-language output package. 3 languages x (video + graphic) assets.',color:'#7C4DFF'},
  'out4': {name:'Format Output 4',desc:'Compiled data and analysis package.',color:'#7C4DFF'},
  'context': {name:'Context Engine',desc:'Maps protest claims to verified historical facts. Provides sourced data points for rebuttals.',color:'#4FC3F7'},
  'talking': {name:'Talking Points Generator',desc:'Creates audience-specific messaging tracks: diplomatic, media, social, academic, and grassroots.',color:'#7C4DFF'},
  'data': {name:'Data Engine',desc:'Real-time vote tracking and country-by-country analysis. Generates interactive data visualizations.',color:'#4FC3F7'},
};

let currentScenario = 'gaza_strike';
let currentNodes = [];

function getThemeColors() {
  const cs = getComputedStyle(document.body);
  return {
    edgeColor: cs.getPropertyValue('--edge-color').trim(),
    edgeLit: cs.getPropertyValue('--edge-lit').trim(),
    dotColor: cs.getPropertyValue('--dot-color').trim(),
    nodeFill: cs.getPropertyValue('--node-fill').trim(),
    nodeBorder: cs.getPropertyValue('--node-border').trim(),
    canvasBg: cs.getPropertyValue('--canvas-bg').trim(),
    textPrimary: cs.getPropertyValue('--text-primary').trim(),
    textSecondary: cs.getPropertyValue('--text-secondary').trim(),
  };
}

function buildSVG(scenario) {
  const svg = document.getElementById('wfCanvas');
  const sc = SCENARIOS[scenario];
  const tc = getThemeColors();

  // Calculate needed height
  let maxY = 0;
  sc.nodes.forEach(n => { const bottom = n.y + n.h + 30; if (bottom > maxY) maxY = bottom; });
  const svgHeight = Math.max(400, maxY + 40);
  svg.setAttribute('height', svgHeight);

  let html = '';
  // Defs
  html += `<defs>
    <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="${tc.edgeColor}" stroke-width="1"/></marker>
    <marker id="arrowLit" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="${tc.edgeLit}" stroke-width="1.5"/></marker>
    <filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="edgeGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>`;

  // Grid dots
  html += `<pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="0.5" fill="${tc.dotColor}"/></pattern>`;
  html += `<rect width="100%" height="100%" fill="url(#dots)"/>`;

  // Edges with visible color
  html += `<g id="wfEdges">`;
  sc.edges.forEach(e => {
    const [x1,y1] = e.from;
    const [x2,y2] = e.to;
    const mx1 = x1 + (x2-x1)*0.4;
    const mx2 = x1 + (x2-x1)*0.6;
    const dashAttr = e.dash ? ' stroke-dasharray="6,4"' : '';
    // Glow layer (thicker, more transparent)
    html += `<path class="wf-edge-glow" d="M${x1},${y1} C${mx1},${y1} ${mx2},${y2} ${x2},${y2}" fill="none" stroke="${tc.edgeLit}" stroke-width="4" stroke-opacity="0.08"${dashAttr}/>`;
    // Main edge
    html += `<path class="wf-edge" d="M${x1},${y1} C${mx1},${y1} ${mx2},${y2} ${x2},${y2}" fill="none" stroke="${tc.edgeLit}" stroke-width="1.5" stroke-opacity="0.3"${dashAttr} filter="url(#edgeGlow)"/>`;
  });
  html += `</g>`;

  // Connectors (port circles)
  sc.connectors.forEach(([cx,cy]) => {
    html += `<circle cx="${cx}" cy="${cy}" r="4" fill="${tc.nodeFill}" stroke="${tc.nodeBorder}" stroke-width="1.5"/>`;
  });

  // Nodes
  sc.nodes.forEach((n,i) => {
    const isSmall = n.small;
    const headerH = isSmall ? 18 : 22;
    html += `<g class="wf-node" data-nid="${n.id}" data-order="${i}" style="cursor:pointer">`;
    html += `<rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="${isSmall?6:8}" fill="${tc.nodeFill}" stroke="${tc.nodeBorder}" stroke-width="1.5"/>`;
    html += `<rect x="${n.x}" y="${n.y}" width="${n.w}" height="${headerH}" rx="${isSmall?6:8}" fill="${n.headerColor}" opacity="0.2"/>`;
    const labelSize = isSmall ? 8 : 9;
    const nameSize = isSmall ? 11 : 12;
    const labelY = n.y + (isSmall ? 13 : 16);
    const nameY = n.y + (isSmall ? 35 : 40);
    const descY = nameY + 14;
    html += `<text x="${n.x+12}" y="${labelY}" font-size="${labelSize}" fill="${n.color}" font-family="Inter" font-weight="600" letter-spacing="1">${n.label}</text>`;
    html += `<text x="${n.x+12}" y="${nameY}" font-size="${nameSize}" fill="${tc.textPrimary}" font-family="Inter" font-weight="600">${n.name}</text>`;
    if (n.desc) {
      html += `<text x="${n.x+16}" y="${descY}" font-size="9" fill="${tc.textSecondary}" font-family="Inter">${n.desc}</text>`;
    }
    html += `</g>`;
  });

  // Language badges
  if (sc.langBadges) {
    html += `<g font-size="8" font-family="JetBrains Mono" font-weight="500">`;
    sc.langBadges.forEach(b => {
      html += `<text x="${b.x}" y="${b.y}" fill="${tc.edgeLit}">EN  AR  FR</text>`;
    });
    html += `</g>`;
  }

  svg.innerHTML = html;

  // Bind click events
  svg.querySelectorAll('.wf-node').forEach(node => {
    node.addEventListener('click', () => {
      // Reset all
      svg.querySelectorAll('.wf-node rect:first-child').forEach(r => { r.setAttribute('stroke', tc.nodeBorder); r.setAttribute('stroke-width','1.5'); });
      // Highlight
      const rect = node.querySelector('rect');
      rect.setAttribute('stroke', tc.edgeLit);
      rect.setAttribute('stroke-width','2.5');
      rect.style.filter = 'url(#glow)';
      const nid = node.getAttribute('data-nid');
      showNodeInfo(nid, sc);
    });
  });

  // Update counts
  currentNodes = sc.nodes.map(n => n.id);
  document.getElementById('wfNodeCount').textContent = sc.nodeCount + ' nodes';
  document.getElementById('wfAssetCount').textContent = sc.assetCount + ' output assets';
  document.getElementById('wfKpiNodes').textContent = sc.nodeCount;
  document.getElementById('wfKpiAssets').textContent = sc.assetCount;
}

function loadScenario(id) {
  currentScenario = id;
  buildSVG(id);
  const sc = SCENARIOS[id];
  document.getElementById('nodeInspector').innerHTML = `<div style="font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:4px">${sc.title}</div><div style="font-size:12px;color:var(--text-secondary)">${sc.desc}. Click "Run Workflow" or click a node to inspect it.</div>`;
}

function showNodeInfo(nid, sc) {
  // Try scenario-specific node data first, then global
  const nodeData = sc ? sc.nodes.find(n => n.id === nid) : null;
  const info = WF_NODE_INFO[nid];
  if (!info && !nodeData) return;
  const name = nodeData ? nodeData.name : (info ? info.name : nid);
  const desc = info ? info.desc : (nodeData ? nodeData.desc : '');
  const color = info ? info.color : (nodeData ? nodeData.color : '#4FC3F7');
  const el = document.getElementById('nodeInspector');
  el.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:12px;height:12px;border-radius:3px;background:${color}"></div><span style="font-size:14px;font-weight:600;color:var(--text-primary)">${name}</span></div><div style="font-size:12px;color:var(--text-secondary);line-height:1.7">${desc}</div>`;
}

async function runWorkflow() {
  resetWorkflow();
  const sc = SCENARIOS[currentScenario];
  const tc = getThemeColors();
  const svg = document.getElementById('wfCanvas');
  const edges = svg.querySelectorAll('.wf-edge');
  const glows = svg.querySelectorAll('.wf-edge-glow');
  const nodes = svg.querySelectorAll('.wf-node');
  let edgeIdx = 0;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const rect = node.querySelector('rect');
    const nid = node.getAttribute('data-nid');
    // Activate
    rect.setAttribute('stroke', tc.edgeLit);
    rect.setAttribute('stroke-width', '2.5');
    rect.style.filter = 'url(#glow)';
    showNodeInfo(nid, sc);

    // Light up edges
    if (edgeIdx < edges.length && i > 0) {
      edges[edgeIdx].setAttribute('stroke', tc.edgeLit);
      edges[edgeIdx].setAttribute('stroke-opacity', '0.9');
      edges[edgeIdx].setAttribute('stroke-width', '2');
      if (glows[edgeIdx]) { glows[edgeIdx].setAttribute('stroke-opacity', '0.25'); }
      edgeIdx++;
      if (i >= 3 && edgeIdx < edges.length) {
        edges[edgeIdx].setAttribute('stroke', tc.edgeLit);
        edges[edgeIdx].setAttribute('stroke-opacity', '0.9');
        edges[edgeIdx].setAttribute('stroke-width', '2');
        if (glows[edgeIdx]) { glows[edgeIdx].setAttribute('stroke-opacity', '0.25'); }
        edgeIdx++;
      }
    }

    await new Promise(r => setTimeout(r, 600));
    // Settle
    rect.setAttribute('stroke', tc.edgeLit);
    rect.setAttribute('stroke-width', '1.5');
    rect.style.filter = '';
  }
}

function resetWorkflow() {
  loadScenario(currentScenario);
}
