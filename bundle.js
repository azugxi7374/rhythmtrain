(()=>{"use strict";function e(){return function(e){for(var t=120,n=e.split("\n"),r=[];n.length>0;){var a=n.shift();0===(a=a.trim()).length||(/^#BPM=[0-9]+$/.test(a)?t=parseInt(a.slice("#BPM=".length)):r.push.apply(r,a.split(" ")))}return function(e,t){for(var n=[],r=0;r<t.length;r++)for(var a=0;a<t[r].length;a++)for(var o=Number.parseInt(t[r].charAt(a)+"",16),i=0;i<4;i++)1==(o>>i&1)&&n.push({t:1e3+(4*r+a)*(6e4/e),type:i});return window.___chart=n,n}(t,r)}("\n#BPM=120\n2244 2244 1248 8421\n3c3c 9696 5a5a edb7\n0248 8420\n")}function t(e,t,a,o){for(var i=0,u=[a,o];i<u.length;i++){var s=u[i];s.width=e,s.height=t}var c=[a,o].map((function(e){return e.getContext("2d")})),l=c[0],f=c[1],h=function(e,t){return Math.floor(4*t/5)}(0,t),d={pause:!1,nextProcessLane:new Set},v={W:e,H:t,lineY:h,ctx2:f},p={scrollSpeed:1};l.fillRect(0,h-2,e,4),function(e,t,n,a){function o(e,t){for(var n=0;n<4;n++){var o=r(n,a),i=o[0],u=o[1];if(i<=e&&e<=i+u)return n}return null}for(var i=[["mousedown",function(e){e.preventDefault(),e.stopPropagation();var n=o(e.clientX,e.clientY);null!==n&&t(n)},{passive:!1}],["touchstart",function(e){e.preventDefault(),e.stopPropagation();for(var n=0,r=e.touches;n<r.length;n++){var a=r[n],i=o(a.clientX,a.clientY);null!==i&&t(i)}},{passive:!1}]],u=function(t,n,r){e.addEventListener(t,(function(e){return!d.pause&&n(e)}),r)},s=0,c=i;s<c.length;s++){var l=c[s];u(l[0],l[1],l[2])}}(o,(function(e){return d.nextProcessLane.add(e)}),0,v);var m={handleFrame:function(e,t,a){return function(e,t,a,o){for(var i=0,u=Array.from(t.values());i<u.length;i++)n(e,u[i]);t.clear(),function(e,t,n){var a=t.W,o=t.H,i=t.ctx2,u=t.lineY,s=n.scrollSpeed*o/1e3,c=e.chart,l=e.time,f=e.noteResults;i.clearRect(0,0,a,o),c.forEach((function(e,n){var a=e.t,o=e.type;if(void 0===f[n]){var c=u+(l-a)*s,h=r(o,t),d=h[0],v=h[1];0<=c&&c<=3e3&&i.fillRect(d,c-2,v,4)}}))}(e,a,o)}({chart:e,time:t,noteResults:a},d.nextProcessLane,v,p)},pause:function(e){return d.pause=e}};return m}function n(e,t){for(var n=e.chart,r=e.time,a=e.noteResults,o=0;o<n.length;o++){var i=Math.abs(r-n[o].t),u=void 0===a[o]&&i<108.442,s=n[o].type===t;if(u&&s){a[o]=0;break}}}function r(e,t){var n=t.W-100;return[50+n*e/4+5,n/4-5]}document.addEventListener("DOMContentLoaded",(function(){var n,r,a,o,i,u,s,c,l,f,h,d;n=window.location.href,a=(r=new URL(n)).searchParams.get("_"),o=Date.now(),(null===a||!/^\d+/.test(a)||Number(a)+3e4<o)&&(r.searchParams.set("_",o.toString()),window.location.href=r.href),c=t,l=window.innerHeight-10,f=window.innerWidth-10,h=document.querySelector("#canvas1"),d=document.querySelector("#canvas2"),i=c(f,l,h,d),u={pause:!0,offsetTime:-1,time:0,chart:e(),noteResults:{}},s=document.querySelector(".playbtn"),setInterval((function(){if(!u.pause){var e=Date.now()-u.offsetTime;u.time=e}var t,n;i.pause(u.pause),i.handleFrame(u.chart,u.time,u.noteResults),t=s,n=u.pause,t.dataset.pause===n.toString()||(t.dataset.pause=n,n?(t.innerHTML='<img src="lib/play-solid.svg">',["mousedown","touchstart"].forEach((function(e){t.firstElementChild.addEventListener(e,(function(){!function(e){e.pause=!1,e.offsetTime=Date.now()-e.time}(u)}))}))):(t.innerHTML='<img src="lib/pause-solid.svg">',["mousedown","touchstart"].forEach((function(e){t.firstElementChild.addEventListener(e,(function(){!function(e){e.pause=!0}(u)}))}))))}),1e3/60),window.state=u}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REEsQ0FBTWdFLEVDaENsRCxHQUNKLEtEZ0NSLEdBQUcsSUFaUyxJQWVackYsT0FBT3FGLE1BQVFBLENBOUNuQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmh5dGhtdHJhaW4vLi9zcmMvY2hhcnQudHMiLCJ3ZWJwYWNrOi8vcmh5dGhtdHJhaW4vLi9zcmMvZ2FtZV9zdGFuZGFyZDRMYW5lLnRzIiwid2VicGFjazovL3JoeXRobXRyYWluLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JoeXRobXRyYWluLy4vc3JjL3ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGVzdDIgPSBgXG4jQlBNPTEyMFxuMjI0NCAyMjQ0IDEyNDggODQyMVxuM2MzYyA5Njk2IDVhNWEgZWRiN1xuMDI0OCA4NDIwXG5gXG5cbi8vIGNvbnN0IGNoYXJ0MiA9IHBhcnNlVGV4dENoYXJ0KHRlc3QyKTtcblxuZnVuY3Rpb24gcGFyc2VUZXh0Q2hhcnQodGV4dDogc3RyaW5nKSB7XG4gICAgbGV0IGJwbSA9IDEyMDtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgYmFyTGlzdCA9IFtdO1xuICAgIHdoaWxlIChsaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBsaW5lID0gbGluZXMuc2hpZnQoKTtcbiAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIOepuuihjOOBquOCiU5PUFxuICAgICAgICB9IGVsc2UgaWYgKC9eI0JQTT1bMC05XSskLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICBicG0gPSBwYXJzZUludChsaW5lLnNsaWNlKFwiI0JQTT1cIi5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE8g4oaR5q2j6KaP6KGo54++5Yik5a6a44GZ44KLXG4gICAgICAgICAgICBiYXJMaXN0LnB1c2goLi4ubGluZS5zcGxpdChcIiBcIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHsgYnBtLCBiYXJMaXN0IH0pKTtcbiAgICByZXR1cm4gY29udmVydENoYXJ0KGJwbSwgYmFyTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDaGFydChicG06IG51bWJlciwgYmFyTGlzdDogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjaGFydCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGJhckxpc3RbaV0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG50ID0gTnVtYmVyLnBhcnNlSW50KGJhckxpc3RbaV0uY2hhckF0KGspICsgXCJcIiwgMTYpO1xuICAgICAgICAgICAgZm9yIChsZXQgYmkgPSAwOyBiaSA8IDQ7IGJpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKG50ID4+IGJpICYgMSkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0OiAxMDAwICsgKGkgKiA0ICsgaykgKiAoNjAgKiAxMDAwIC8gYnBtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGJpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd2luZG93Ll9fX2NoYXJ0ID0gY2hhcnQ7XG4gICAgcmV0dXJuIGNoYXJ0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0Q2hhcnQoKSB7XG4gICAgcmV0dXJuIHBhcnNlVGV4dENoYXJ0KHRlc3QyKTtcbiAgICAvKlxuICAgIC8vIHQ9MTAwMOOBi+OCiemghuOBq+OAgTQvNOOBpzHmi43jgZrjgaTjgIExNuWwj+evgFxuICAgIGNvbnN0IGJwbSA9IDEyMDtcbiAgICBjb25zdCBOID0gMTYgKiA0O1xuICAgIGNvbnN0IGNoYXJ0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOICsgMTsgaSsrKSB7XG4gICAgICAgIGlmIChpICUgNCA9PT0gMykge1xuICAgICAgICAgICAgLy8gc2tpcFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhcnQucHVzaCh7XG4gICAgICAgICAgICAgICAgdDogMTAwMCArIGkgKiAoNjAgKiAxMDAwIC8gYnBtKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYXJ0OyovXG59XG5cbiIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxudHlwZSBWaWV3U2V0ID0ge1xuICAgIFc6IG51bWJlciwgSDogbnVtYmVyLFxuICAgIGxpbmVZOiBudW1iZXIsXG4gICAgY3R4MjogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxufVxudHlwZSBTZXR0aW5ncyA9IHtcbiAgICBzY3JvbGxTcGVlZDogbnVtYmVyLFxufVxudHlwZSBDaGFydFN0YXRlID0ge1xuICAgIGNoYXJ0OiBDaGFydCxcbiAgICB0aW1lOiBudW1iZXIsXG4gICAgbm90ZVJlc3VsdHM6IGFueVtdLFxufVxuXG5jb25zdCBuTGFuZSA9IDQ7XG5jb25zdCBKVURHRV9SWU8gPSAyNS4wMjVcbmNvbnN0IEpVREdFX0tBID0gNzUuMDc1XG5jb25zdCBKVURHRV9GVUtBID0gMTA4LjQ0MlxuXG4vLyBnYW1lXG4vLyDorZzpnaLjga7jg5Xjgqnjg7zjg57jg4Pjg4hcbi8vIOeUu+mdouaPj+WGmeOBqOWFpeWKm+WHpueQhlxuLy8g5Yik5a6a44Go44GLXG4vLyBjcmVhdGU6IGNhbnZhc+imgee0oOOBqOOBi+ioreWumuOBqOOBi+WPl+OBkeWPluOBo+OBpuWIneacn+WMllxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlKFc6IG51bWJlciwgSDogbnVtYmVyLCBjYW52YXMxOiBIVE1MQ2FudmFzRWxlbWVudCwgY2FudmFzMjogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBmb3IgKGNvbnN0IGMgb2YgW2NhbnZhczEsIGNhbnZhczJdKSB7XG4gICAgICAgIGMud2lkdGggPSBXO1xuICAgICAgICBjLmhlaWdodCA9IEg7XG4gICAgfTtcbiAgICBjb25zdCBbY3R4MSwgY3R4Ml0gPSBbY2FudmFzMSwgY2FudmFzMl0ubWFwKGMgPT4gYy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk7XG4gICAgY29uc3QgbGluZVkgPSBnZXRKdWRnZUxpbmVZKFcsIEgpO1xuICAgIGNvbnN0IGdhbWVTdGF0ZSA9IHtcbiAgICAgICAgcGF1c2U6IGZhbHNlLFxuICAgICAgICBuZXh0UHJvY2Vzc0xhbmU6IG5ldyBTZXQ8bnVtYmVyPigpXG4gICAgfVxuXG4gICAgY29uc3Qgdmlld1NldDogVmlld1NldCA9IHsgVywgSCwgbGluZVksIGN0eDIgfVxuICAgIGNvbnN0IHNldHRpbmdzOiBTZXR0aW5ncyA9IHtcbiAgICAgICAgc2Nyb2xsU3BlZWQ6IDEuMCwgLy8g55S76Z2i5q+UXG4gICAgfVxuXG4gICAgY3R4MS5maWxsUmVjdCgwLCBsaW5lWSAtIDIsIFcsIDQpO1xuICAgIGluaXRFdmVudExpc3RlbmVycyhjYW52YXMyLCAobG4gPT4gZ2FtZVN0YXRlLm5leHRQcm9jZXNzTGFuZS5hZGQobG4pKSxcbiAgICAgICAgKCkgPT4gZ2FtZVN0YXRlLnBhdXNlLCB2aWV3U2V0KVxuXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICBoYW5kbGVGcmFtZTogKGNoYXJ0OiBDaGFydCwgdGltZTogbnVtYmVyLCBub3RlUmVzdWx0cykgPT4gaGFuZGxlRnJhbWUoeyBjaGFydCwgdGltZSwgbm90ZVJlc3VsdHMgfSwgZ2FtZVN0YXRlLm5leHRQcm9jZXNzTGFuZSwgdmlld1NldCwgc2V0dGluZ3MpLFxuICAgICAgICBwYXVzZTogKGZsZzogYm9vbGVhbikgPT4gZ2FtZVN0YXRlLnBhdXNlID0gZmxnXG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZyYW1lKGNoYXJ0U3RhdGU6IENoYXJ0U3RhdGUsIG5leHRQcm9jZXNzTGFuZTogU2V0PG51bWJlcj4sIHZpZXdTZXQ6IFZpZXdTZXQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xuXG4gICAgLy8gbm90ZeOCkuWFpeWKm+WHpueQhuOBl+OBpnJlbmRlcuOBmeOCi1xuICAgIGZvciAoY29uc3QgbGFuZSBvZiBBcnJheS5mcm9tKG5leHRQcm9jZXNzTGFuZS52YWx1ZXMoKSkpIHtcbiAgICAgICAgLy8gVE9ETyDlkIzjg5Xjg6zjg7zjg6DjgaDjgYvjgolsYW5lc+OBp+OCiOOBj+OBquOBhO+8n1xuICAgICAgICBoYW5kbGVUYXBMYW5lKGNoYXJ0U3RhdGUsIGxhbmUpO1xuICAgIH1cbiAgICBuZXh0UHJvY2Vzc0xhbmUuY2xlYXIoKTtcbiAgICByZW5kZXJOb3RlcyhjaGFydFN0YXRlLCB2aWV3U2V0LCBzZXR0aW5ncyk7XG59XG5cblxuZnVuY3Rpb24gaGFuZGxlVGFwTGFuZShjaGFydFN0YXRlOiBDaGFydFN0YXRlLCBsYW5lOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCB0aW1lLCBub3RlUmVzdWx0cyB9ID0gY2hhcnRTdGF0ZTtcblxuICAgIC8vIGNoYXJ044KS5YmN44GL44KJ6aCG55Wq44Gr44CB44G+44Gg5Yem55CG44GX44Gm44GE44Gq44GEICYmIOS4jeWPr+WIpOWumuaeoOWGhVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRpbWUgLSBjaGFydFtpXS50KTtcbiAgICAgICAgY29uc3Qgbm90ZVRpbWVGbGcgPSAobm90ZVJlc3VsdHNbaV0gPT09IHVuZGVmaW5lZCAmJiBkaWZmIDwgSlVER0VfRlVLQSk7XG4gICAgICAgIGNvbnN0IG5vdGVYRmxnID0gY2hhcnRbaV0udHlwZSA9PT0gbGFuZVxuICAgICAgICBpZiAobm90ZVRpbWVGbGcgJiYgbm90ZVhGbGcpIHtcbiAgICAgICAgICAgIG5vdGVSZXN1bHRzW2ldID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlck5vdGVzKGNoYXJ0U3RhdGU6IENoYXJ0U3RhdGUsIHZpZXdTZXQ6IFZpZXdTZXQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xuICAgIGNvbnN0IHsgVywgSCwgY3R4MiwgbGluZVkgfSA9IHZpZXdTZXQ7XG4gICAgY29uc3QgeyBzY3JvbGxTcGVlZDogX3Njcm9sbFNwZWVkIH0gPSBzZXR0aW5nc1xuICAgIGNvbnN0IHB4UGVyTXMgPSBfc2Nyb2xsU3BlZWQgKiBIIC8gMTAwMDtcbiAgICBjb25zdCB7IGNoYXJ0LCB0aW1lLCBub3RlUmVzdWx0cyB9ID0gY2hhcnRTdGF0ZTtcblxuICAgIGN0eDIuY2xlYXJSZWN0KDAsIDAsIFcsIEgpO1xuICAgIGNoYXJ0LmZvckVhY2goKHsgdCwgdHlwZSB9LCBpKSA9PiB7XG4gICAgICAgIGlmIChub3RlUmVzdWx0c1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gdGltZSAtIHQ7XG4gICAgICAgICAgICBjb25zdCBub3RlWSA9IGxpbmVZICsgZWxhcHNlZCAqIHB4UGVyTXM7XG4gICAgICAgICAgICBjb25zdCBbbm90ZVgsIHddID0gY2FsY05vdGVYKHR5cGUsIHZpZXdTZXQpO1xuICAgICAgICAgICAgaWYgKDAgPD0gbm90ZVkgJiYgbm90ZVkgPD0gMzAwMCkge1xuICAgICAgICAgICAgICAgIGN0eDIuZmlsbFJlY3Qobm90ZVgsIG5vdGVZIC0gMiwgdywgNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbml0RXZlbnRMaXN0ZW5lcnMoZWxlbSwgYWRkUHJlc3NMYW5lcywgZ2V0UGF1c2UsIHZpZXdTZXQ6IFZpZXdTZXQpIHtcbiAgICBmdW5jdGlvbiBnZXRMYW5lKHgsIHkpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgbGFuZSA9IDA7IGxhbmUgPCBuTGFuZTsgbGFuZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBbeDAsIHgxXSA9IGNhbGNOb3RlWChsYW5lLCB2aWV3U2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGZsZyA9ICh4MCA8PSB4ICYmIHggPD0geDAgKyB4MSk7XG4gICAgICAgICAgICBpZiAoZmxnKSB7IHJldHVybiBsYW5lIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IFtcbiAgICAgICAgWydtb3VzZWRvd24nLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGxhbmUgPSBnZXRMYW5lKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChsYW5lICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkUHJlc3NMYW5lcyhsYW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9XSxcbiAgICAgICAgWyd0b3VjaHN0YXJ0JywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBUT0RPIOKGk1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZm9yIChjb25zdCB0b3VjaCBvZiBlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5lID0gZ2V0TGFuZSh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgICAgICAgICAgICAgICBpZiAobGFuZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRQcmVzc0xhbmVzKGxhbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9XSxcbiAgICAgICAgLy8gVE9ETyBhZGQga2V5IGRmamtcbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IFtldm4sIGZ1bmMsIG9wdF0gb2YgZXZlbnRIYW5kbGVycyBhcyBhbnkpIHtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZuLCAoZTogRXZlbnQpID0+ICFnZXRQYXVzZSgpICYmIGZ1bmMoZSksIG9wdFxuICAgICAgICApXG4gICAgfVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gY2FsY05vdGVYKGk6IG51bWJlciwgdmlld1NldDogVmlld1NldCkge1xuICAgIGNvbnN0IFcgPSB2aWV3U2V0LldcbiAgICBjb25zdCBwYWQgPSA1MDtcbiAgICAvLyB8LXBhZC18LS0tLS0tLS18LXBhZC18XG4gICAgY29uc3Qgd2xhbmUgPSBXIC0gcGFkICogMjtcbiAgICBjb25zdCBwYWQyID0gNTtcbiAgICByZXR1cm4gW3BhZCArIHdsYW5lICogaSAvIG5MYW5lICsgcGFkMiwgd2xhbmUgLyBuTGFuZSAtIHBhZDJdO1xufVxuXG5mdW5jdGlvbiBnZXRKdWRnZUxpbmVZKFc6IG51bWJlciwgSDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoSCAqIDQgLyA1KTtcbn0iLCJpbXBvcnQgeyByZW5kZXJQbGF5QnV0dG9uIH0gZnJvbSBcIi4vdmlld1wiXG5pbXBvcnQgeyBjcmVhdGVUZXN0Q2hhcnQgfSBmcm9tIFwiLi9jaGFydFwiO1xuaW1wb3J0IFN0YW5kYXJkNExhbmUgZnJvbSBcIi4vZ2FtZV9zdGFuZGFyZDRMYW5lXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICByZWZyZXNoSWZOZWVkKCk7XG4gICAgbWFpbigpO1xufSk7XG5cbi8vIOOBhOOCieOBquOBhOOBi+OCglxuZnVuY3Rpb24gcmVmcmVzaElmTmVlZCgpIHtcbiAgICBjb25zdCBtYXhBZ2UgPSAzMCAqIDEwMDA7XG4gICAgY29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChocmVmKTtcbiAgICBjb25zdCBfID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ18nKTtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKF8gPT09IG51bGwgfHwgISgvXlxcZCsvLnRlc3QoXykpIHx8IE51bWJlcihfKSArIG1heEFnZSA8IG5vdykge1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnXycsIG5vdy50b1N0cmluZygpKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC5ocmVmO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IGdhbWUgPSBjcmVhdGVWaWV3KFN0YW5kYXJkNExhbmUpXG5cbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgLy8gYnBtOiAxODAsXG4gICAgICAgIHBhdXNlOiB0cnVlLFxuICAgICAgICBvZmZzZXRUaW1lOiAtMSwgLy8gcGF1c2U6dHJ1ZeaZguOBr+eEoeWKuVxuICAgICAgICB0aW1lOiAwLFxuICAgICAgICBjaGFydDogY3JlYXRlVGVzdENoYXJ0KCksXG4gICAgICAgIG5vdGVSZXN1bHRzOiB7fSwgLy8ge2lkeCwganVkZ2UsIGRpZmZ9XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJ0bicpO1xuXG4gICAgY29uc3QgRlBTID0gNjA7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICghc3RhdGUucGF1c2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQxID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSB0MSAtIHN0YXRlLm9mZnNldFRpbWU7XG4gICAgICAgICAgICBzdGF0ZS50aW1lID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lLnBhdXNlKHN0YXRlLnBhdXNlKTtcbiAgICAgICAgZ2FtZS5oYW5kbGVGcmFtZShzdGF0ZS5jaGFydCwgc3RhdGUudGltZSwgc3RhdGUubm90ZVJlc3VsdHMpO1xuXG4gICAgICAgIHJlbmRlclBsYXlCdXR0b24ocGxheUJ0biwgKCkgPT4gc3RhcnQoc3RhdGUpLCAoKSA9PiBwYXVzZShzdGF0ZSksIHN0YXRlLnBhdXNlKTtcbiAgICB9LCAxMDAwIC8gRlBTKVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdpbmRvdy5zdGF0ZSA9IHN0YXRlO1xufVxuXG4vLyBUT0RPIOWQjeWJjVxuZnVuY3Rpb24gY3JlYXRlVmlldyhHYW1lKSB7XG4gICAgY29uc3QgSCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwO1xuICAgIGNvbnN0IFcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwO1xuXG4gICAgY29uc3QgYzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzMScpO1xuICAgIGNvbnN0IGMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhczInKTtcbiAgICBjb25zdCBnYW1lID0gR2FtZShXLCBILCBjMSwgYzIpO1xuXG4gICAgcmV0dXJuIGdhbWU7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmZ1bmN0aW9uIHBhdXNlKHN0YXRlKSB7XG4gICAgc3RhdGUucGF1c2UgPSB0cnVlXG59XG5cbi8vIEB0cy1pZ25vcmVcbmZ1bmN0aW9uIHN0YXJ0KHN0YXRlKSB7XG4gICAgc3RhdGUucGF1c2UgPSBmYWxzZTtcbiAgICBzdGF0ZS5vZmZzZXRUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyUGxheUJ1dHRvbihidG4sIHN0YXJ0LCBwYXVzZSwgcGF1c2VGbGcpIHtcbiAgICBpZiAoYnRuLmRhdGFzZXQucGF1c2UgPT09IHBhdXNlRmxnLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgLy8gTk9QXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmRhdGFzZXQucGF1c2UgPSBwYXVzZUZsZ1xuICAgICAgICBpZiAocGF1c2VGbGcpIHtcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCJsaWIvcGxheS1zb2xpZC5zdmdcIj5gO1xuICAgICAgICAgICAgWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLmZvckVhY2goZW4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKGVuLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cImxpYi9wYXVzZS1zb2xpZC5zdmdcIj5gO1xuICAgICAgICAgICAgWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLmZvckVhY2goZW4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKGVuLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuZnVuY3Rpb24gYW5pbWF0aW9uVG91Y2goeCwgeSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBcImVmZmVjdF90b3VjaFwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICBjb25zdCBzaXplID0gNTA7XG4gICAgICAgIGVsZW0uc3R5bGUgPSBgXG4gICAgICAgICAgICB3aWR0aDoke3NpemV9cHg7XG4gICAgICAgICAgICBoZWlnaHQ6JHtzaXplfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBmZjtcbiAgICAgICAgICAgIHRvcDoke3l9cHg7XG4gICAgICAgICAgICBsZWZ0OiR7eH1weDtcbiAgICAgICAgYFxuICAgICAgICBjb25zdCBkdXIgPSAzMDA7XG4gICAgICAgIGNvbnN0IHJvdDEgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xuICAgICAgICBjb25zdCByb3QyID0gcm90MSArIE1hdGgucmFuZG9tKCkgKiAzNjA7XG4gICAgICAgIGNvbnN0IHR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMzAwO1xuICAgICAgICBjb25zdCB0eSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDMwMDtcbiAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogZWxlbSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogdHgsXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiB0eSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIHJvdGF0ZTogW3JvdDEsIHJvdDJdLFxuICAgICAgICAgICAgc2NhbGU6IFsxLCAwXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZWxlbS5yZW1vdmUoKSwgZHVyKTtcbiAgICB9XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgY29uc3Qgc2l6ZSA9IDU7XG4gICAgY29uc3QgZHVyID0gMzAwO1xuICAgIGRpdi5zdHlsZSA9IGBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAke3NpemUgKiAyfXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAke3NpemUgKiAyfXB4O1xuICAgICAgICAgICAgdG9wOiAke3kgLSBzaXplfXB4O1xuICAgICAgICAgICAgbGVmdDogJHt4IC0gc2l6ZX1weDtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYFxuICAgIGFuaW1lKHtcbiAgICAgICAgdGFyZ2V0czogZGl2LFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgIHNjYWxlOiAyMCxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGRpdi5yZW1vdmUoKSwgZHVyICsgMTApO1xufVxuKi9cblxuIl0sIm5hbWVzIjpbImNyZWF0ZVRlc3RDaGFydCIsInRleHQiLCJicG0iLCJsaW5lcyIsInNwbGl0IiwiYmFyTGlzdCIsImxlbmd0aCIsImxpbmUiLCJzaGlmdCIsInRyaW0iLCJ0ZXN0IiwicGFyc2VJbnQiLCJzbGljZSIsInB1c2giLCJjaGFydCIsImkiLCJrIiwibnQiLCJOdW1iZXIiLCJjaGFyQXQiLCJiaSIsInQiLCJ0eXBlIiwid2luZG93IiwiX19fY2hhcnQiLCJjb252ZXJ0Q2hhcnQiLCJwYXJzZVRleHRDaGFydCIsImNyZWF0ZSIsIlciLCJIIiwiY2FudmFzMSIsImNhbnZhczIiLCJjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJnZXRDb250ZXh0IiwiY3R4MSIsImN0eDIiLCJsaW5lWSIsIk1hdGgiLCJmbG9vciIsImdldEp1ZGdlTGluZVkiLCJnYW1lU3RhdGUiLCJwYXVzZSIsIm5leHRQcm9jZXNzTGFuZSIsIlNldCIsInZpZXdTZXQiLCJzZXR0aW5ncyIsInNjcm9sbFNwZWVkIiwiZmlsbFJlY3QiLCJlbGVtIiwiYWRkUHJlc3NMYW5lcyIsImdldFBhdXNlIiwiZ2V0TGFuZSIsIngiLCJ5IiwibGFuZSIsImNhbGNOb3RlWCIsIngwIiwieDEiLCJldmVudEhhbmRsZXJzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xpZW50WCIsImNsaWVudFkiLCJwYXNzaXZlIiwidG91Y2hlcyIsInRvdWNoIiwiZXZuIiwiZnVuYyIsIm9wdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJsbiIsImFkZCIsInJlcyIsImhhbmRsZUZyYW1lIiwidGltZSIsIm5vdGVSZXN1bHRzIiwiY2hhcnRTdGF0ZSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImhhbmRsZVRhcExhbmUiLCJjbGVhciIsInB4UGVyTXMiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwidW5kZWZpbmVkIiwibm90ZVkiLCJub3RlWCIsInciLCJyZW5kZXJOb3RlcyIsImZsZyIsImRpZmYiLCJhYnMiLCJub3RlVGltZUZsZyIsIm5vdGVYRmxnIiwid2xhbmUiLCJwYWQiLCJkb2N1bWVudCIsImhyZWYiLCJ1cmwiLCJfIiwibm93IiwiZ2FtZSIsInN0YXRlIiwicGxheUJ0biIsIkdhbWUiLCJjMSIsImMyIiwibG9jYXRpb24iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJEYXRlIiwic2V0IiwidG9TdHJpbmciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VGltZSIsInNldEludGVydmFsIiwiYnRuIiwicGF1c2VGbGciLCJkYXRhc2V0IiwiaW5uZXJIVE1MIiwiZW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==