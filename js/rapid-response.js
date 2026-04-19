// ===== RAPID RESPONSE ENGINE =====
function loadExample() {
  document.getElementById('adaptInput').value = 'IDF strike reported on residential building in central Gaza. Multiple civilian casualties reported by local sources. Unverified footage circulating on social media showing aftermath. Hamas-linked accounts amplifying narrative of deliberate targeting of civilians.';
}

async function runRRE() {
  const steps = document.querySelectorAll('#rrePipeline .pipe-step');
  const btn = document.getElementById('rreBtn');
  btn.disabled = true;
  steps.forEach(s => { s.classList.remove('done','active'); });
  for(let i=0;i<steps.length;i++) {
    steps[i].classList.add('active');
    await new Promise(r => setTimeout(r, 700));
    steps[i].classList.remove('active');
    steps[i].classList.add('done');
  }
  btn.disabled = false;
}
