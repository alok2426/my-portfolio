const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

(function(){
var lb=document.getElementById("lb"),li=document.getElementById("lbImg"),cap=document.getElementById("lbCap"),sc=document.getElementById("lbScroll"),cur=null;
document.querySelectorAll("[data-proj]").forEach(function(p){
 var imgs=p.querySelectorAll(".v-imgs img"),tabs=p.querySelectorAll(".v-tabs button");
 function show(k){imgs.forEach(function(m,j){m.classList.toggle("on",j===k)});tabs.forEach(function(t,j){t.classList.toggle("on",j===k)})}
 tabs.forEach(function(t){t.addEventListener("click",function(){show(+t.dataset.i)})});
 imgs.forEach(function(m,k){m.addEventListener("click",function(){cur={p:p,imgs:imgs,k:k,show:show};open()})});
});
function open(){var m=cur.imgs[cur.k];li.src=m.src;li.alt=m.alt;cap.textContent=m.alt.replace(" screenshot: "," · ");lb.hidden=false;document.body.style.overflow="hidden";sc.scrollTop=0;sc.scrollLeft=0}
function step(d){var n=cur.imgs.length;cur.k=(cur.k+d+n)%n;cur.show(cur.k);open()}
function close(){lb.hidden=true;document.body.style.overflow=""}
document.getElementById("lbClose").onclick=close;
document.getElementById("lbPrev").onclick=function(){step(-1)};
document.getElementById("lbNext").onclick=function(){step(1)};
lb.addEventListener("click",function(e){if(e.target===lb||e.target===sc)close()});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
})();

(function(){
var st=document.getElementById("heroStage");if(!st)return;
var dots=document.getElementById("heroDots"),cap=document.getElementById("heroCap"),projs=document.querySelectorAll("[data-proj]");
var names=["CES REGULATORY DASHBOARD","NEW CONNECTION DASHBOARD","TABLEAU ENERGY SUITE","DATA PIPELINE MONITOR"],fits=[0,0,1,0],sl=[],k=0,tm;
projs.forEach(function(p,i){var s=p.querySelector(".v-imgs img");if(!s)return;
 var m=document.createElement("img");m.src=s.src;m.alt=names[i]+" preview";if(fits[i])m.className="fit";st.appendChild(m);
 var d=document.createElement("button");d.setAttribute("aria-label","Show "+names[i]);var n=sl.length;d.onclick=function(){go(n);play()};dots.appendChild(d);sl.push({m:m,d:d,t:names[i]})});
function go(n){k=n;sl.forEach(function(s,j){s.m.classList.toggle("on",j===n);s.d.classList.toggle("on",j===n)});cap.textContent=sl[n].t}
function play(){clearInterval(tm);if(matchMedia("(prefers-reduced-motion:reduce)").matches||sl.length<2)return;tm=setInterval(function(){go((k+1)%sl.length)},3500)}
st.addEventListener("click",function(){location.hash="#projects"});
st.addEventListener("mouseenter",function(){clearInterval(tm)});st.addEventListener("mouseleave",play);
if(sl.length){go(0);play()}
})();
