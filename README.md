# Hangboard Timer

A simple, offline web app embedded in a bookmark link for tracking hangboard workouts. Workouts are based on the workout schedule defined in [this article](https://www.99boulders.com/beginner-hangboard-training)

## Opening & Saving the app

Simply copy and paste this code into your address bar. You can bookmark the page and it will work even if you're offline.

```
data:text/html, <title></title><script>let t,n,o,r,i,e,a,l,c,u=!1,f=!0;function d(e){e=document.getElementById(e);return Number(e.options[e.selectedIndex].value)}function s(e){const t=new Date(1e3*e);e=`${String(t.getUTCMinutes()).padStart(2,"0")}:${String(t.getUTCSeconds()).padStart(2,"0")}`;document.title=e,document.getElementById("time").innerHTML=e}function y(e){document.getElementById("message").innerHTML=e}function m(){o+=5,y("Get Ready...")}function v(){o+=10,y("Hang!")}function g(){o+=e,y("Rest")}function I(){o+=120,y("Take a short break")}function S(){y("Done"),w()}function*M(){yield v;for(let e=1;e<r;e++)yield g,yield v}function*T(){yield m;for(var e of M())yield e;for(let e=1;e<i;e++){yield I;for(var t of M())yield t}}function D(){var e=Math.floor(Date.now()/1e3)-n;return o-e-n}function h(){n=Math.floor(Date.now()/1e3),o=n,r=4,i=d("sets"),e=d("rest"),a=(()=>{const e=T();let t=e.next();return()=>{t.done?S():(t.value(),t=e.next())}})(),a(),p()}function p(){function e(){let e=D();e<1&&(a(),e=D()),s(e)}l=()=>{u=!0,clearInterval(t),c=setInterval(()=>{o+=1},1e3)},u=!1,clearInterval(c),e(),t=setInterval(e,1e3)}function w(){f=!0,s(0),y("Press Start"),clearInterval(t)}function x(){f?(f=!1,h()):u&&p()}function B(){f||(u?w:l)()}</script><style>body{background-color:black}button,select{background-color:black;color:white;border:2px solid white;border-radius:5px;font-size:5em;cursor:pointer}label,span{font-size:5em}.main{color:white;position:absolute;top:50%;left:0;width:100%;text-align:center;margin-top:-200px}</style><div class="main"><h1 id="time" style="font-size:10em;margin:0">00:00</h1><h3 id="message" style="font-size:5em;margin:0">Press Start</h3><p><button onclick="clickStart()">Start</button><span>&nbsp;</span><button onclick="clickStop()">Stop</button></p><p><label>Rest:</label> <select id="rest"><option value="30">30s</option><option value="20">20s</option></select> <span>&nbsp</span> <label>Sets:</label> <select id="sets"><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></p></div>
```

## Usage

Select the amount of time you want to rest between reps and the number of sets and click "Start". You can pause by clicking "Stop". When paused, you can clear the workout by clicking "Stop" again or resume the workout by clicking "Start".