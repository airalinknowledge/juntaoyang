(function(){
"use strict";
var images=[
"https://ik.imagekit.io/1zgbu3kyg/mmexport1780373070751.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_162849.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_162414.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_162728.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_143035.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260530_175254.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_162747.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260530_172132.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_143016.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260530_174156.jpg",
"https://ik.imagekit.io/1zgbu3kyg/IMG_20260606_162719.jpg"
];
var moreIndexes=[1,2,3,4,5,6,7,8,9,10],zh=(document.documentElement.lang||"").toLowerCase().indexOf("zh")===0;
function transformed(url,width,quality){return url+(url.indexOf("?")===-1?"?":"&")+"tr=w-"+(width||2200)+",q-"+(quality||90)+",f-auto";}
function preload(index){var img=new Image();img.src=transformed(images[(index+images.length)%images.length],1800,88);}
var overlay=document.createElement("div");overlay.className="pe-lightbox";overlay.setAttribute("role","dialog");overlay.setAttribute("aria-modal","true");overlay.setAttribute("aria-label",zh?"展览图片轮播":"Exhibition image carousel");overlay.hidden=true;
overlay.innerHTML='<button class="pe-lightbox-close" type="button" aria-label="'+(zh?"关闭":"Close")+'">×</button><button class="pe-lightbox-prev" type="button" aria-label="'+(zh?"上一张":"Previous image")+'">‹</button><figure class="pe-lightbox-stage"><img alt=""><figcaption><span class="pe-lightbox-caption"></span><span class="pe-lightbox-count"></span></figcaption></figure><button class="pe-lightbox-next" type="button" aria-label="'+(zh?"下一张":"Next image")+'">›</button>';
document.body.appendChild(overlay);
var stageImage=overlay.querySelector(".pe-lightbox-stage img"),count=overlay.querySelector(".pe-lightbox-count"),caption=overlay.querySelector(".pe-lightbox-caption"),closeButton=overlay.querySelector(".pe-lightbox-close"),current=0,lastFocus=null,touchStartX=null;
caption.textContent=zh?"Imaginary Z，杭州，2026":"Imaginary Z, Hangzhou, 2026";
function show(index){current=(index+images.length)%images.length;var original=images[current];stageImage.dataset.original=original;stageImage.dataset.fallbackDone="0";stageImage.alt=zh?"展览图片 "+(current+1):"Exhibition image "+(current+1);stageImage.src=transformed(original,2200,90);count.textContent=(current+1)+" / "+images.length;preload(current+1);preload(current-1);}
stageImage.addEventListener("error",function(){if(stageImage.dataset.fallbackDone==="1")return;stageImage.dataset.fallbackDone="1";stageImage.src=stageImage.dataset.original;});
function open(index,source){lastFocus=source||document.activeElement;show(typeof index==="number"?index:0);overlay.hidden=false;document.documentElement.classList.add("pe-lightbox-open");closeButton.focus({preventScroll:true});}
function close(){if(overlay.hidden)return;overlay.hidden=true;document.documentElement.classList.remove("pe-lightbox-open");if(lastFocus&&typeof lastFocus.focus==="function")lastFocus.focus({preventScroll:true});}
function next(){show(current+1);}function prev(){show(current-1);}
document.querySelectorAll("[data-pe-lightbox]").forEach(function(el){el.addEventListener("click",function(event){event.preventDefault();var idx=parseInt(el.getAttribute("data-pe-index"),10);open(Number.isFinite(idx)?idx:0,el);});});
closeButton.addEventListener("click",close);overlay.querySelector(".pe-lightbox-next").addEventListener("click",next);overlay.querySelector(".pe-lightbox-prev").addEventListener("click",prev);overlay.addEventListener("click",function(event){if(event.target===overlay)close();});
document.addEventListener("keydown",function(event){if(overlay.hidden)return;if(event.key==="Escape")close();else if(event.key==="ArrowRight")next();else if(event.key==="ArrowLeft")prev();});
overlay.addEventListener("touchstart",function(event){if(event.touches&&event.touches.length===1)touchStartX=event.touches[0].clientX;},{passive:true});overlay.addEventListener("touchend",function(event){if(touchStartX===null||!event.changedTouches||!event.changedTouches.length)return;var delta=event.changedTouches[0].clientX-touchStartX;touchStartX=null;if(Math.abs(delta)<45)return;if(delta<0)next();else prev();},{passive:true});
var inline=document.querySelector("[data-pe-inline-carousel]");if(inline){var inlineStage=inline.querySelector(".pe-inline-stage"),inlineImage=inline.querySelector(".pe-inline-image"),inlineCount=inline.querySelector(".pe-inline-count"),inlinePrev=inline.querySelector(".pe-inline-prev"),inlineNext=inline.querySelector(".pe-inline-next"),inlineCurrent=0,inlineTouchStartX=null;
function renderInline(position){inlineCurrent=(position+moreIndexes.length)%moreIndexes.length;var imageIndex=moreIndexes[inlineCurrent],original=images[imageIndex];inlineStage.setAttribute("data-pe-index",String(imageIndex));inlineImage.dataset.original=original;inlineImage.dataset.fallbackDone="0";inlineImage.alt=zh?"更多展览现场图片 "+(inlineCurrent+1):"More installation views "+(inlineCurrent+1);inlineImage.src=transformed(original,1800,88);inlineCount.textContent=(inlineCurrent+1)+" / "+moreIndexes.length;preload(moreIndexes[(inlineCurrent+1)%moreIndexes.length]);}
inlineImage.addEventListener("error",function(){if(inlineImage.dataset.fallbackDone==="1")return;inlineImage.dataset.fallbackDone="1";inlineImage.src=inlineImage.dataset.original;});inlinePrev.addEventListener("click",function(){renderInline(inlineCurrent-1);});inlineNext.addEventListener("click",function(){renderInline(inlineCurrent+1);});inline.addEventListener("touchstart",function(event){if(event.touches&&event.touches.length===1)inlineTouchStartX=event.touches[0].clientX;},{passive:true});inline.addEventListener("touchend",function(event){if(inlineTouchStartX===null||!event.changedTouches||!event.changedTouches.length)return;var delta=event.changedTouches[0].clientX-inlineTouchStartX;inlineTouchStartX=null;if(Math.abs(delta)<45)return;if(delta<0)renderInline(inlineCurrent+1);else renderInline(inlineCurrent-1);},{passive:true});renderInline(0);}
})();
