"use strict";
document.querySelector("#copyright-year").textContent = new Date().getFullYear();
const video = document.querySelector("#walkthrough");
const status = document.querySelector("#video-status");
const cover = document.querySelector("#play-preview");
const playLabel = document.querySelector("#play-label");
const chapters = [...document.querySelectorAll(".chapter")];
let starting = false;
async function playAt(time = 0) {
  if (starting) return;
  starting = true;
  status.textContent = "Loading the silent prototype film…";
  playLabel.textContent = "Loading…";
  video.scrollIntoView({block:"center",behavior:"auto"});
  try {
    video.currentTime = time;
    await video.play();
  } catch (error) {
    if(error.name === "AbortError" && video.paused){
      status.textContent = "Paused. Inspect the details or keep watching.";
      playLabel.textContent = "Play the walkthrough";
    } else {
      status.textContent = "Playback couldn’t start. Try Play again or open the video separately.";
      playLabel.textContent = "Try again";
    }
  } finally { starting = false; }
}
document.querySelector("#watch").addEventListener("click",()=>playAt());
cover.addEventListener("click",()=>playAt());
chapters.forEach(chapter=>chapter.addEventListener("click",()=>playAt(Number(chapter.dataset.time))));
video.addEventListener("playing",()=>{
  const wasCovered = !cover.hidden;
  cover.hidden = true;
  video.removeAttribute("aria-hidden");
  video.tabIndex = 0;
  updateChapters();
  if (wasCovered) video.focus({preventScroll:true});
  status.textContent = "Playing · silent private prototype film.";
});
function updateChapters(){
  const time = video.currentTime;
  const active = chapters.reduce((active,indexedChapter,index)=>time >= Number(indexedChapter.dataset.time) ? index : active,-1);
  chapters.forEach((chapter,index)=>chapter.setAttribute("aria-pressed",String(index===active)));
}
video.addEventListener("timeupdate",updateChapters);
video.addEventListener("seeked",updateChapters);
video.addEventListener("pause",()=>{if(!video.ended)status.textContent="Paused. Inspect the details or keep watching.";});
video.addEventListener("ended",()=>{status.textContent="Film complete · built-in example and later receipt still.";});
video.addEventListener("waiting",()=>{status.textContent="Loading the prototype film…";});
function failed(){cover.hidden=false;playLabel.textContent="Try playing again";status.textContent="The video couldn’t load. Try opening it separately.";}
video.addEventListener("error",failed);
video.querySelector("source").addEventListener("error",failed);

const form = document.querySelector("#signup-form");
const formStatus = document.querySelector("#form-status");
const preview = document.body.dataset.preview !== "false";
document.querySelector("#signup-fields").disabled = false;
if(!preview){document.querySelector(".review-note")?.setAttribute("hidden", "");formStatus.textContent="";}
form.addEventListener("submit",event=>{
  if(preview){event.preventDefault();formStatus.textContent="Preview only. Your email has not been sent or saved.";}
});

// A deliberately started, editorial motion story. No engine, storage or requests.
(() => {
  const shell = document.querySelector('#interactive-story');
  if (!shell) return;
  const panels = [...document.querySelectorAll('[data-story-panel]')];
  const tabs = [...document.querySelectorAll('[data-story-step]')];
  const forward = [...document.querySelectorAll('[data-story-next]')];
  const back = document.querySelector('#story-back'), next = document.querySelector('#story-next');
  const play = document.querySelector('#story-play'), message = document.querySelector('#story-status');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const durations = [5000,5500,7500,6000];
  let step = 0, timer = null, running = false;
  const titles = ['The moment','Look closer','The source','Bring it back'];
  function stop() { if (timer !== null) clearTimeout(timer); timer = null; running = false; shell.classList.remove('story-running'); play.textContent = step === 3 ? 'Replay story' : step === 0 ? 'Play 24-sec story' : 'Play from start'; }
  function source(angle) {
    document.querySelector('#story-source-title').textContent = angle === 'appearance' ? 'Looks can raise a question.' : 'A hands-on process.';
    document.querySelector('#story-source-explanation').textContent = angle === 'appearance'
      ? 'Rolling Stone reports that viewers questioned unusual-looking details. The same report describes drawings, 2D/3D animation and analog treatments. Appearance alone doesn’t establish the production method.'
      : 'Rolling Stone describes drawings, 2D/3D animation and analog treatments, including filming screen output for the retro effect.';
  }
  function show(value, focus = false) {
    step = Math.max(0,Math.min(3,value));
    panels.forEach((panel,index) => { panel.hidden = index !== step; });
    tabs.forEach((tab,index) => tab.setAttribute('aria-pressed',String(index === step)));
    back.disabled = step === 0; next.disabled = step === 3;
    shell.dataset.storyStep = String(step); shell.classList.add('story-engaged');
    message.textContent = 'Chapter '+(step+1)+' of 4: '+titles[step]+'.';
    if (focus) panels[step].focus({preventScroll:true});
  }
  function manual(value) { stop(); show(value,true); preference(); }
  function schedule() {
    timer = setTimeout(() => { timer = null; if (!running) return; if (step === 3) { stop(); message.textContent = 'Story complete. Explore the source or get beta updates.'; return; } show(step+1); schedule(); },durations[step]);
  }
  tabs.forEach(tab => tab.addEventListener('click',() => manual(Number(tab.dataset.storyStep))));
  forward.forEach(button => { button.disabled = false; button.addEventListener('click',() => manual(step+1)); });
  document.querySelectorAll('[data-story-angle]').forEach(button => button.addEventListener('click',() => { source(button.dataset.storyAngle); manual(2); }));
  back.addEventListener('click',() => manual(step-1)); next.addEventListener('click',() => manual(step+1));
  play.addEventListener('click',() => { if (running) { stop(); return; } if (motion.matches) return; source('process'); show(0); running = true; shell.classList.add('story-running'); play.textContent = 'Pause story'; schedule(); });
  function preference() { if (motion.matches) { stop(); play.disabled = true; play.textContent = 'Use Next · reduced motion'; } else { play.disabled = false; play.textContent = step === 3 ? 'Replay story' : step === 0 ? 'Play 24-sec story' : 'Play from start'; } }
  motion.addEventListener('change',preference);
  panels.forEach(panel => panel.addEventListener('focusin',() => { if (running) { stop(); preference(); message.textContent = 'Story paused for reading. Use Next when you’re ready.'; } }));
  document.addEventListener('visibilitychange',() => { if (document.hidden) { stop(); preference(); } });
  const recording = document.querySelector('#prototype-proof');
  recording.addEventListener('toggle',() => { if (!recording.open) video.pause(); else { stop(); preference(); } });
  video.addEventListener('playing',() => { stop(); preference(); });
  play.addEventListener('click',() => { if (running) video.pause(); });
  document.querySelector('.story-tabs').hidden = false; document.querySelector('.story-controls').hidden = false;
  shell.dataset.storyStep = '0'; preference();
})();
