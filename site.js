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
      playLabel.textContent = "Follow the check";
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
