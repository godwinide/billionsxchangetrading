"use strict";function hasClass(e,t){return-1<e.getAttribute("class").indexOf(t)}function addClass(e,t){e.classList?e.classList.add(t):hasClass(e,t)||e.setAttribute("class",e.getAttribute("class")+" "+t)}function removeClass(e,t){e.classList?e.classList.remove(t):hasClass(e,t)&&e.setAttribute("class",e.getAttribute("class").replace(t," "))}function burgerToggleListener(){hasClass(document.documentElement,"menu--open")?removeClass(document.documentElement,"menu--open"):addClass(document.documentElement,"menu--open")}function copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(t)}function copyTarget(e){copyTextToClipboard(e.target.getAttribute("data-text"))}function getXhrObject(){return"undefined"==typeof XMLHttpRequest&&(XMLHttpRequest=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}),new XMLHttpRequest}function newPayment(e,t,n,s){var a=document.getElementById("js-header-opers"),o=a.childNodes,d=[],r=document.createElement("div"),c=document.createElement("div"),l=document.createElement("span"),i=document.createElement("div");for(var u in l.setAttribute("class","oper__user"),l.innerText=t,i.setAttribute("class","oper__cell"),i.innerText=parseFloat(n)+" "+s,i.appendChild(l),c.setAttribute("class","label oper__cell oper__label"),c.innerText="Paidout",r.id=e,r.setAttribute("class","oper header__oper js-header-oper"),r.appendChild(c),r.appendChild(i),o)1==o[u].nodeType&&d.push(o[u]);a.insertBefore(r,d[0]),5<=d.length&&a.removeChild(d[d.length-1])}function scanPayments(){if(document.getElementById("js-header-opers")){var e=document.getElementById("js-header-opers").childNodes,t=null,n=0;for(var s in e)if(1==e[s].nodeType){t=e[s];break}t&&(n=t.id);var a=getXhrObject();a.open("GET","/ajax/payments/"+n,!0),a.onreadystatechange=function(){4==a.readyState&&200==a.status&&JSON.parse(a.responseText).forEach(function(e,t){setTimeout(function(){newPayment(e.id,e.login,e.amount,e.currs)},1e3*t)})},a.send(null)}}function contentLoaded(){try{var e=document.getElementById("js-menu-burger"),t=document.getElementById("js-menu");document.getElementById("js-sidebar-toggle"),document.getElementById("js-sidebar");null!==e&&null!==t&&(e.addEventListener?e.addEventListener("click",burgerToggleListener):e.attachEvent("onclick",burgerToggleListener));for(var n=document.getElementsByClassName("js-copy"),s=0;s<n.length;s++){var a=n[s];a.addEventListener?a.addEventListener("click",copyTarget):a.attachEvent("onclick",copyTarget)}document.getElementById("js-header-opers")&&setInterval(scanPayments,7e3),addClass(document.getElementById("preloader"),"loaded")}catch(e){console.log(e),addClass(document.getElementById("preloader"),"loaded")}}document.addEventListener?document.addEventListener("DOMContentLoaded",contentLoaded):document.attachEvent("onreadystatechange",contentLoaded);
//# sourceMappingURL=common.js.map
