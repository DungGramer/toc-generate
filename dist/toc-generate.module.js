function e(e,t){for(let n=e.length-1;n>=0;n--)if(e[n].level===t)return e[n].scope;return toc}function t(e,t){const n=document.createElement("li"),o=document.createElement("a");return t.id||=`${t.textContent.replace(/\s/g,"-").toLowerCase()}-${Math.random().toString(36).substring(2,15)}`,o.textContent=t.textContent,o.href=`#${t.id}`,n.appendChild(o),e.appendChild(n),n}function n(e="highlight",t="add",n){n.forEach((n=>{void 0!==n&&n.classList[t](e)}))}function o(o){const l=o.contentWrapperSelector||"body",r=o.tocSelector,c=o.headingLevelFrom||2,i=o.headingLevelTo||6,s=o.viewablePercentToHighlight||70,h=o.showsHighLight||!1,a=o.showsParentHighlight||!1,d=r&&document.querySelector(r),p=function(e,t,n){let o="";for(let n=e;n<=t;++n)o+=`h${n},`;return n.querySelectorAll(o.slice(0,-1))}(c,i,document.querySelector(l)),g=document.createElement("ol"),u=[{level:c,scope:g}];return p.forEach((n=>{const o=Number(n.tagName.slice(1)),l=u[u.length-1];if(l.level<o){const e=document.createElement("ol"),r=t(e,n);l.scope.appendChild(e),u.push({level:o,scope:e,selector:r,parent:u.at(-1).selector})}else if(l.level>o){const l=e(u,o),r=t(l,n);u.push({level:o,scope:l,selector:r})}else{const e=t(l.scope,n);u.push({level:o,scope:l.scope,selector:e,...l.parent&&{parent:l.parent}})}})),u.shift(),d&&d.appendChild(g),h&&function(e,t,o,l){for(let c=0;c<e.length;c++){const i=e[c],s=c-1>=0?c-1:1,h=e[c+1<e.length?c+1:c],a=t[c].parent,d=t[c].selector,p=t[s];function r(){let{bottom:e,top:t}=i.getBoundingClientRect();const r=h.getBoundingClientRect().top-e,c=r*o/100,s=r-c,g=window.innerHeight;e+s<=g&&t+c>=0?(n("highlight","add",[i,d]),l&&a&&n("parent_highlight","add",[a])):(t+c<=0||e>g)&&(n("highlight","remove",[i,d]),l&&p.parent&&n("parent_highlight","remove",[i,d,p.selector]))}r(),document.addEventListener("scroll",r)}}(p,u,s,a),g}export{o as default};