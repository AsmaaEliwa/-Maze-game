!function(){"use strict";var t,e,i;t=class{constructor(){this.remainingSeconds=60,this.timerElement=document.getElementById("time"),this.timerId=null}startTimer(){this.timerId=setInterval((()=>{this.remainingSeconds--,this.timerElement.textContent=`Timer: ${this.remainingSeconds} seconds`,0===this.remainingSeconds&&(this.stopTimer(),alert("Time is up!"))}),1e3)}stopTimer(){clearInterval(this.timerId)}},e=class{constructor(t){this.ele=t,this.pausebutton=this.pausebutton.bind(this),this.mutebutton=this.mutebutton.bind(this),this.play=this.play.bind(this),this.pausebutton(),this.mutebutton(),this.restartbutton(),this.play(),document.getElementById("gameName").addEventListener("click",this.hideSide)}play(){window.addEventListener("load",(()=>{const e=this.ele,i=document.createElement("button");i.classList.add("play"),i.addEventListener("click",(()=>{document.getElementById("time").classList.add("time1"),(new t).startTimer()})),i.addEventListener("click",this.onMusic),e.appendChild(i)}))}onMusic(){document.getElementById("gameMusic").play()}offMusic(){document.getElementById("gameMusic").pause()}hideSide(){const t=document.getElementsByClassName("side")[0],e=document.createElement("h2");e.textContent="Hello, World!",e.classList.add("header"),t.classList.toggle("hidden")}pausebutton(){window.addEventListener("load",(()=>{const t=this.ele,e=document.createElement("button");e.classList.add("pause-button"),e.addEventListener("click",(()=>{alert("Button clicked!")})),t.appendChild(e)}))}mutebutton(){window.addEventListener("load",(()=>{const t=this.ele,e=document.createElement("button");e.classList.add("mute-button"),e.addEventListener("click",this.offMusic),t.appendChild(e)}))}restartbutton(){window.addEventListener("load",(()=>{const t=this.ele,e=document.createElement("button");e.classList.add("restart-button"),e.addEventListener("click",(()=>{alert("restarted!")})),t.appendChild(e)}))}},i=class{constructor(t){this.canvas=t,this.createMap=this.createMap.bind(this),this.moveElement=this.moveElement.bind(this),this.img=new Image,this.img.src="1.webp",this.img.onload=this.handleImageLoad.bind(this),this.imageX=160,this.imageY=0,this.createMap(),document.addEventListener("keydown",this.moveElement)}handleImageLoad(){this.createMap()}createMap(){this.canvas;let t=[[1,1,1,1,3,1,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,1,0,1,0,0,0,0,0,0,1],[1,0,1,1,0,1,0,1,1,1,1,1,1,0,1],[1,0,1,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,1,0,1,1],[1,0,0,0,1,0,1,0,0,0,0,0,0,0,1],[1,1,1,0,1,0,1,0,1,1,1,1,1,0,1],[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],[1,0,1,1,1,0,1,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];const e=this.canvas.getContext("2d"),i=40;for(let s=0;s<15;s++)for(let n=0;n<15;n++){const a=t[s][n],d=n*i,o=s*i;0===a?e.fillStyle="white":1===a?e.fillStyle="#ABEED7":3===a&&e.drawImage(this.img,this.imageX,this.imageY,i,i),e.fillRect(d,o,i,i)}}moveElement(t){t.preventDefault();const e=this.canvas.getContext("2d");"ArrowLeft"===t.key?this.imageX-=10:"ArrowRight"===t.key?this.imageX+=10:"ArrowUp"===t.key?this.imageY-=10:"ArrowDown"===t.key&&(this.imageY+=10),e.clearRect(0,0,this.canvas.width,this.canvas.height),this.createMap()}},document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("main");new e(t);const s=document.getElementById("mapCanvas");new i(s)}))}();
//# sourceMappingURL=main.js.map