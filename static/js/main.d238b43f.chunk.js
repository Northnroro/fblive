(this.webpackJsonpffbooker=this.webpackJsonpffbooker||[]).push([[0],{150:function(e,t,a){e.exports=a(371)},155:function(e,t,a){},160:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(17),o=a.n(c),s=(a(155),a(14)),i=a(13),u=a(423),m=a(418),f=a(422),d=a(421),p=a(417),b=a(419),g=a(420),v=a(413),E=a(91),h=a(19),y=a.n(h),k=a(37),C=a(62),O=a.n(C),j=0;function x(e){return S.apply(this,arguments)}function S(){return(S=Object(k.a)(y.a.mark((function e(t){var a,n,r,l,c,o,s,i=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e).getDay()]},c=function(e){return new Date(1e3*e).toLocaleDateString()},l=function(e){return new Date(1e3*e).toTimeString().substring(0,5)},a=i.length>1&&void 0!==i[1]?i[1]:1,n={programIds:t.paramClasses,fromDate:t.fromDate?t.fromDate:parseInt(Date.now()/1e3+t.fromDateAdj),toDate:t.toDate?t.toDate:parseInt(Date.now()/1e3+t.toDateAdj),pageSize:100,pageNumber:a,distance:2147483647,latitude:0,longitude:0},"FFP"!==(null===t||void 0===t?void 0:t.paramClub)&&(n.clubId=t.paramClub),console.log("Search Start"),console.log(n),e.next=10,O.a.ajax({type:"GET",url:"https://api-mobile.circuithq.com/api/v2/class/search",dataType:"json",headers:{Authorization:t.accessToken,"User-Country-Code":"sg"},data:n});case 10:return r=e.sent,s=(s=r.data).map((function(e){var a,n,r,s;return{classId:e.classId,class:e.name,club:null===(a=t.clubTypes)||void 0===a||null===(n=a[e.club.clubId])||void 0===n?void 0:n.fullname,clubTier:null===(r=t.clubTypes)||void 0===r||null===(s=r[e.club.clubId])||void 0===s?void 0:s.type,clubId:e.club.clubId,date:c(e.timeStart),day:o(e.timeStart),timestamp:e.timeStart,duration:e.timeEnd-e.timeStart,start:l(e.timeStart),end:l(e.timeEnd),capacity:e.capacity,address:e.club.address}})).filter((function(e){return e.capacity>0||!t.accessToken||t.paramShowFull})),"FFP"===t.paramClub&&(s=s.filter((function(e){return"Platinum"===e.clubTier}))),"No Work"===t.paramTime&&(s=s.filter((function(e){return"Sat"===e.day||"Sun"===e.day||parseInt(e.end)<=11||parseInt(e.start)>=20}))),e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){n()}function w(e){return e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()}function I(){return(I=Object(k.a)(y.a.mark((function e(t,a,n,r){var l,c,o,s,i,u,m;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Booking... "+t+" ("+w(new Date)+")"),l=(new Date).getTime(),e.prev=2,!n){e.next=13;break}return console.log("DEBUG"),c=Math.random()*Math.random()*Math.random(),o=Math.random()*Math.random()*Math.random(),e.next=9,new Promise((function(e){return setTimeout(e,50+c*o*2e4)}));case 9:if(!(Math.random()>.01)){e.next=11;break}throw{responseText:'{"error":{"messages":["Debug_Error"]}}'};case 11:e.next=18;break;case 13:return e.next=15,O.a.ajax({type:"POST",url:"https://api-mobile.circuithq.com/api/v2/class/book",dataType:"json",headers:{Authorization:a,"User-Country-Code":"sg"},data:{class_id:t}});case 15:s=e.sent,console.table(s),r(null);case 18:return i=(new Date).getTime(),console.log("["+(i-l)+"ms] Success... "+t+" ("+w(new Date)+")"),e.abrupt("return",!0);case 23:return e.prev=23,e.t0=e.catch(2),(u=JSON.parse(e.t0.responseText))&&u.message?console.error(u.message):u&&u.error&&u.error.messages?u.error.messages.forEach((function(e){return console.error(null===e||void 0===e?void 0:e.message)})):console.error(u),m=(new Date).getTime(),console.log("["+(m-l)+"ms] Failed... "+t+" ("+w(new Date)+")"),e.abrupt("return",!1);case 30:case"end":return e.stop()}}),e,null,[[2,23]])})))).apply(this,arguments)}function D(e,t,a,n,r){var l=function(e,t,a,n){return I.apply(this,arguments)}(e,t,a,r).then((function(e){return Promise.resolve((function(t){return new Promise((function(t){return t(e)}))}))})),c=new Promise((function(e){return setTimeout(e,n)})).then((function(e){return function(e){return Promise.resolve(l.then((function(e){return Promise.resolve(e())})))}}));return Promise.race([l,c])}var A=Object(u.a)({tableWrapper:{maxWidth:1e3,margin:"5px 0",backgroundColor:"#ffffffe0"},tableContainer:{maxHeight:"calc(100vh - 20px)",transition:"max-height 0.5s"},table:{minWidth:650,userSelect:"none"},thead:{"& th":{fontWeight:"bold",backgroundColor:"#b6ccdd"}}}),P=function(e){var t=function(e){var t=Object(r.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(r.useReducer)((function(e){return e+1}),0),s=Object(i.a)(o,2),u=s[0],m=s[1];return n=m,Object(r.useEffect)((function(){e.paramClasses&&Object.keys(e.clubTypes).length&&Object.keys(e.classTypes).length&&function(){var t=Object(k.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c([]),t.next=3,x(e);case 3:if(n=t.sent,a!==j){t.next=11;break}if(c(n),!(n.length<30)){t.next=11;break}return t.next=9,x(e,2);case 9:r=t.sent,a===j&&c([].concat(Object(E.a)(n),Object(E.a)(r)));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(++j)}),[e.fromDateAdj,e.toDateAdj,e.paramClub,e.paramClasses,e.paramTime,e.accessToken,u,e.clubTypes,e.classTypes]),l}(e),a=A(),c=null;return l.a.createElement(v.a,{elevation:3,className:a.tableWrapper},l.a.createElement(p.a,{className:a.tableContainer,style:{maxHeight:t.length?"":36}},l.a.createElement(m.a,{stickyHeader:!0,className:a.table,size:"small"},l.a.createElement(b.a,{className:a.thead},l.a.createElement(g.a,null,l.a.createElement(d.a,null,"ID"),l.a.createElement(d.a,null,"Club"),l.a.createElement(d.a,null,"Class"),l.a.createElement(d.a,null,"Date"),l.a.createElement(d.a,null,"Time"),l.a.createElement(d.a,null,"Capacity"))),l.a.createElement(f.a,null,t.sort((function(e,t){return e.timestamp-t.timestamp})).map((function(t){var a,n=c;return c=t.date,l.a.createElement(g.a,{key:t.classId,onClick:function(){return function(t){e.handleSelection(t)}(t)},style:{backgroundColor:(null===(a=e.selected)||void 0===a?void 0:a.classId)===t.classId?"#00d8f57d":"",boxShadow:null==n||t.date===n?"":"#b6ccdd 0 2px 0 0 inset"},hover:!0},l.a.createElement(d.a,null,t.classId),l.a.createElement(d.a,null,t.club),l.a.createElement(d.a,null,t.class),l.a.createElement(d.a,null,t.date," (",t.day,")"),l.a.createElement(d.a,null,t.start," - ",t.end),l.a.createElement(d.a,null,t.capacity))}))))))},N=a(35),z=a(425),F=a(372),W=a(424),M=a(428),U=a(429),R=a(430),_=a(431),J=a(447),B=Object(r.createContext)(!1),G=null;var q=function(e){var t,a,n,c,o,u,m,f,d,p=Object(r.useState)(parseInt(Date.now()/1e3)),b=Object(i.a)(p,2),g=b[0],E=b[1],h=Object(r.useReducer)((function(t,a){var n={};if("ADD"===a.action||"UPDATE"===a.action)n=Object(s.a)(Object(s.a)({},t),{},Object(N.a)({},a.target.classId,a.target));else if("REMOVE"===a.action){var r=Object(s.a)({},t);delete r[a.target.classId],n=r}else"EXECUTE"===a.action&&(a.target.timestamp=g+e.bookOpen+e.bookOffset+3,n=Object(s.a)(Object(s.a)({},t),{},Object(N.a)({},a.target.classId,a.target)));return localStorage.setItem("watches",JSON.stringify(n)),n}),{},(function(e){var t=localStorage.getItem("watches");return t?JSON.parse(t):{}})),C=Object(i.a)(h,2),O=C[0],j=C[1],S=Object(r.useReducer)((function(e,t){return G=t,t}),null),T=Object(i.a)(S,2),w=T[0],I=T[1],A=L(),P=Object(r.useContext)(B);Object(r.useEffect)((function(){Object(k.a)(y.a.mark((function t(){var a,n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=0,n=0;case 2:if(null===w||null===G){t.next=11;break}return t.next=6,D(w,e.accessToken,P,e.bookWait,I);case 6:r=t.sent,console.log(r()),r().then((function(e){e?(j({action:"UPDATE",target:Object(s.a)(Object(s.a)({},O[w]),{},{success:++a,fail:n})}),I(null)):j({action:"UPDATE",target:Object(s.a)(Object(s.a)({},O[w]),{},{success:a,fail:++n})})})),t.next=12;break;case 11:return t.abrupt("break",14);case 12:t.next=2;break;case 14:case"end":return t.stop()}}),t)})))()}),[w]),Object(r.useEffect)((function(){setInterval((function(e){E(parseInt(Date.now()/1e3))}),100)}),[]),Object(r.useEffect)((function(){Object.keys(O).forEach(function(){var t=Object(k.a)(y.a.mark((function t(a){var n,r,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=O[a]).lastSeen&&!(g-n.lastSeen>=43200)){t.next=20;break}return n.seenStatus=!1,t.prev=3,t.next=6,x({fromDate:n.timestamp-900,toDate:n.timestamp+n.duration+900,paramClub:n.clubId,paramClasses:"[]",paramTime:"All",paramShowFull:!0,accessToken:e.accessToken});case 6:r=t.sent,l=r.filter((function(e){return e.classId==a}))[0],n.seenStatus=!!l,n.seenCapacity=null===l||void 0===l?void 0:l.capacity,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),delete n.seenStatus,console.error(t.t0);case 16:return t.prev=16,n.lastSeen=parseInt(Date.now()/1e3),j({action:"UPDATE",target:n}),t.finish(16);case 20:case"end":return t.stop()}}),t,null,[[3,12,16,20]])})));return function(e){return t.apply(this,arguments)}}())}),[parseInt(g/10)]);var q=function(e){return e.toISOString().replace(/[-:]/g,"").replace(/\d\d\.\d\d\d/,"00")},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=parseInt(e/60/60/24);if(t&&a>0)return a+"d";var n=parseInt(e/60/60%24);if(t&&n>0)return n+"h";var r=parseInt(e/60%60);if(t&&r>0)return r+"m";var l=parseInt(e%60);if(t&&l>0)return l+"s";var c=(a?a+"d ":"")+(n?n+"h ":"")+(r?r+"m ":"")+(l?l+"s ":"");return c},Q=l.a.createElement("div",{style:H},l.a.createElement(v.a,{elevation:3,style:{backgroundColor:e.targetClass?O[e.targetClass.classId]?"#fdc4d2":"#c4f6fd":"",padding:5},className:A.preview},l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},Y),{},{margin:"auto"})},e.targetClass&&l.a.createElement(F.a,{onClick:function(t){return a=e.targetClass,void window.open("http://google.com/maps/dir//".concat(escape(a.address)),"_blank");var a}},l.a.createElement(W.a,{color:"action",fontSize:"small"}))),l.a.createElement("strong",null,"Class ID: ")," ",null===(t=e.targetClass)||void 0===t?void 0:t.classId," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Club: ")," ",null===(a=e.targetClass)||void 0===a?void 0:a.club," (",null===(n=e.targetClass)||void 0===n?void 0:n.clubId,") ",l.a.createElement("br",null),l.a.createElement("strong",null,"Class: ")," ",null===(c=e.targetClass)||void 0===c?void 0:c.class," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Date: ")," ",null===(o=e.targetClass)||void 0===o?void 0:o.date," (",null===(u=e.targetClass)||void 0===u?void 0:u.day,") ",l.a.createElement("br",null),l.a.createElement("strong",null,"Time: ")," ",null===(m=e.targetClass)||void 0===m?void 0:m.start," - ",null===(f=e.targetClass)||void 0===f?void 0:f.end," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Capacity: ")," ",null===(d=e.targetClass)||void 0===d?void 0:d.capacity," ",l.a.createElement("br",null),l.a.createElement("div",{style:Y},e.targetClass&&!O[e.targetClass.classId]&&l.a.createElement(z.a,{component:v.a,style:{backgroundColor:"#1c94f3b5"},onClick:function(){return j({action:"ADD",target:e.targetClass})}},"Add"),P&&e.targetClass&&O[e.targetClass.classId]&&l.a.createElement(z.a,{component:v.a,style:{backgroundColor:"#d21cf3"},onClick:function(){return j({action:"EXECUTE",target:e.targetClass})}},"Execute"),e.targetClass&&O[e.targetClass.classId]&&l.a.createElement(z.a,{component:v.a,style:{backgroundColor:"#f31c68b5"},onClick:function(){return j({action:"REMOVE",target:e.targetClass})}},"Remove")))),$=l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},H),{},{overflowX:"hidden",overflowY:"overlay"})},l.a.createElement(v.a,{elevation:3,style:{padding:"1px 5px 1px 5px",backgroundColor:"#ffffffd0"}},l.a.createElement("div",{style:{marginBottom:-6}},l.a.createElement("strong",null,"Execution Queue")),Object.keys(O).map((function(t){var a,n;return l.a.createElement("div",{key:t,style:X},l.a.createElement(v.a,{elevation:2,className:A.hoverPaper,onClick:function(a){return e.handleSelection(O[t])},style:{backgroundColor:(null===(a=e.targetClass)||void 0===a?void 0:a.classId)==t?"#99f3ff":"",padding:3}},l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},V),{},{backgroundColor:w==t?"#d07dff":O[t].success?"#7dff84":O[t].fail?"#ff7daa":"#d0d0d0",boxShadow:(null===(n=e.targetClass)||void 0===n?void 0:n.classId)==t?"#00c4ffbf 0 0 99px 0 inset":"",margin:"-3px -3px 0",padding:"0 3px"})},l.a.createElement("strong",{style:{textDecoration:"underline"}},O[t].club),l.a.createElement("strong",null,": ",O[t].class),l.a.createElement(J.a,{title:function(e){O[t].classId;var a,n=!1===O[t].seenStatus?"[INVALID]":"",r=(null!==(a=O[t].seenCapacity)&&void 0!==a?a:"?")+" / "+O[t].capacity,l=O[t].lastSeen&&"("+Z(parseInt(Date.now()/1e3)-O[t].lastSeen,!0)+" ago)"||"";return"".concat(n," Cap: ").concat(r," ").concat(l)}(),placement:"top",classes:{tooltip:A.tooltip},arrow:!0},l.a.createElement("span",{onClick:function(){delete O[t].lastSeen,delete O[t].seenStatus,j({action:"UPDATE",target:O[t]})}},!0===O[t].seenStatus?l.a.createElement(M.a,{fontSize:"small",style:{color:"green",marginBottom:-3}}):!1===O[t].seenStatus?l.a.createElement(U.a,{fontSize:"small",style:{color:"red",marginBottom:-3}}):l.a.createElement(R.a,{fontSize:"small",style:{color:"gray",marginBottom:-3}}))),l.a.createElement("span",{style:{color:"gray"}})),l.a.createElement("strong",null,O[t].date," (",O[t].day,")"),l.a.createElement("span",null," (",O[t].start," - ",O[t].end,")"),l.a.createElement("br",null),function(t){var a=t.timestamp-g-e.bookOpen-e.bookOffset,n=t.success?l.a.createElement("span",null,"SUCCESS: ",l.a.createElement("strong",{style:{color:"green"}},t.success)," "):"",r=t.fail?l.a.createElement("span",null,"FAILED: ",l.a.createElement("strong",{style:{color:"red"}},t.fail)):"",c=(n||r)&&l.a.createElement("div",null,n,r);if(a<=0&&a+e.bookDuration>=0&&null==w&&!c&&I(t.classId),w===t.classId){if((a+=e.bookDuration)>=0)return l.a.createElement("strong",null,l.a.createElement("span",{style:{color:"red"}},"...EXECUTING...")," (finish in ",parseInt(a)," s)",l.a.createElement("br",null),c);I(null)}else{if(a>=0){var o={color:a>10800?"black":a>3600?"orange":"red"},s=Z(a);return l.a.createElement("span",null,"Start Booking in ",l.a.createElement("strong",{style:o},s))}if(c)return l.a.createElement("span",null,c)}return l.a.createElement("span",null,"Invalid")}(O[t]),l.a.createElement("div",{style:Y},!!O[t].success&&l.a.createElement(F.a,{onClick:function(e){return(a=O[t]).calendarSaved=!0,j({action:"UPDATE",target:a}),void window.open("http://www.google.com/calendar/render?"+"action=TEMPLATE\n&text=".concat(a.class,"\n&dates=").concat(q(new Date(1e3*a.timestamp)),"/").concat(q(new Date(1e3*a.timestamp+1e3*(a.duration||5400))),"\n&details=").concat(a.club+": "+a.class,"\n&location=").concat(escape(a.address),"\n&trp=false\n&sprop=\n&sprop=name:"),"_blank");var a}},l.a.createElement(_.a,{color:O[t].calendarSaved?"disabled":void 0,fontSize:"small"})))))}))));return l.a.createElement(l.a.Fragment,null,Q,!!Object.keys(O).length&&$)},L=Object(u.a)({hoverPaper:{"&:hover":{backgroundColor:"#ffffffff",transform:"scale(1.03)"},transition:"transform 0.1s",backgroundColor:"#ffffff80"},preview:{"&:hover":{backgroundColor:"#fffffff0",transition:"background-color 0.1s"},transition:"",backgroundColor:"#ffffffd0"},tooltip:{top:"8px",color:"#efefef",fontSize:"small",backgroundColor:"#333333","&>span.MuiTooltop-arrow":{backgroundColor:"#333333"}}}),H={margin:"5px 0",flexGrow:1,userSelect:"none"},X={margin:"8px 0px",flexGrow:1},V={borderRadius:"5px 5px 0px 0px "},Y={float:"right",margin:"-40px 5px",gap:5,display:"grid",gridTemplateColumns:"auto auto"},Z=a(446),Q=a(444),$=a(441),K=a(439),ee=a(440),te=a(448),ae=a(432),ne=a(433),re=a(434),le=a(442),ce=a(435);var oe=function(e){var t=Object(r.useState)(e.accessToken),a=Object(i.a)(t,2),n=a[0],c=a[1],o=function(t){c(e.accessToken),e.setOpen(!1)};return l.a.createElement(te.a,{open:e.open,onClose:o},l.a.createElement(ae.a,null,"Settings"),l.a.createElement(ne.a,null,l.a.createElement(re.a,null,"Access Token is required for getting class capacity and booking classes."),l.a.createElement("br",null),l.a.createElement(le.a,{label:"Access Token",placeholder:"Bearer 58f7GciOiJIUzI1NiJ9.eyJpc3MiOiJodHRw3...",multiline:!0,fullWidth:!0,rows:8,variant:"outlined",InputLabelProps:{shrink:!0},value:n,onChange:function(e){return c(e.target.value)}})),l.a.createElement(ce.a,null,l.a.createElement(z.a,{onClick:o,color:"primary"},"Cancel"),l.a.createElement(z.a,{onClick:function(t){e.setAccessToken(n),localStorage.setItem("accessToken",n),e.setOpen(!1)},color:"primary"},"Save")))},se=a(443),ie=a(436),ue=a(437),me=a(438);var fe=function(e){var t=Object(r.useState)(null),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(e.favs),u=Object(i.a)(o,2),m=u[0],f=u[1];Object(r.useEffect)((function(){return f(e.favs)}),[e.favs,e.open]);var d=de(),p=function(t){e.setOpen(!1),f({}),c(null)},b={};return Object.keys(e.favChoices||{}).forEach((function(t){return b[e.favChoices[t].type]=!0})),l.a.createElement(te.a,{open:e.open,onClose:p,fullWidth:!0},l.a.createElement(ae.a,null,"Favorite ",e.favTypeText),l.a.createElement(ne.a,null,l.a.createElement(se.a,{TabIndicatorProps:{style:{backgroundColor:"#0000"}},value:n,textColor:"secondary",onChange:function(e,t){return c(t)},className:d.tab},l.a.createElement(ie.a,{value:null,label:"All",wrapped:!0}),Object.keys(b).map((function(e){return l.a.createElement(ie.a,{key:e,value:e,label:e})}))),l.a.createElement(v.a,{className:d.list},Object.keys(e.favChoices||{}).filter((function(t){return null==n||e.favChoices[t].type===n})).sort((function(t,a){return(e.favChoices[t].fullname||e.favChoices[t].name).localeCompare(e.favChoices[a].fullname||e.favChoices[a].name)})).map((function(t){return l.a.createElement(v.a,{className:"".concat(d.item," ").concat(m[t]?d.selectedItem:""),onClick:function(){return f(Object(s.a)(Object(s.a)({},m),{},Object(N.a)({},t,!m[t])))},key:t},m[t]?l.a.createElement(ue.a,{color:"secondary",className:d.star}):l.a.createElement(me.a,{color:"action",className:d.star}),e.favChoices[t].fullname||e.favChoices[t].name)})))),l.a.createElement(ce.a,null,l.a.createElement(z.a,{onClick:p,color:"primary"},"Cancel"),l.a.createElement(z.a,{onClick:function(t){localStorage.setItem(e.favType,JSON.stringify(m)),e.updateFavs(),p()},color:"primary"},"Save")))},de=Object(u.a)({tab:{backgroundColor:"whitesmoke",borderRadius:"10px 10px 0px 0px","& [role=tablist]":{flexFlow:"wrap"},"& [role=tablist]>.Mui-selected":{backgroundColor:"#f7d7e1",borderRadius:"10px 10px 0px 0px",border:"2px #f7d7e6 solid"},"& [role=tablist]>button":{backgroundColor:"#00000008",borderRadius:"10px 10px 0px 0px",borderTop:"2px #f5f5f5 solid"}},list:{height:"50vh",overflow:"auto",backgroundColor:"#f5f5f5",position:"relative"},item:{padding:8,margin:5,paddingLeft:35,userSelect:"none","&:hover":{transform:"scale(1.02)"}},selectedItem:{backgroundColor:"#f66497",fontWeight:"bold"},star:{position:"absolute",left:10}});var pe=function(e){var t=Object(r.useState)({}),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)({}),u=Object(i.a)(o,2),m=u[0],f=u[1],d=Object(r.useState)({}),p=Object(i.a)(d,2),b=p[0],g=p[1],E=Object(r.useState)(null),h=Object(i.a)(E,2),y=h[0],k=h[1],C=Object(r.useState)(null),O=Object(i.a)(C,2),j=O[0],x=O[1],S=Object(r.useState)(null),w=Object(i.a)(S,2),I=w[0],D=w[1],A=function(){c(JSON.parse(localStorage.getItem("favClubs")||"{}")),f(JSON.parse(localStorage.getItem("favClasses")||"{}"))};Object(r.useEffect)(A,[]);var P=Object(r.useState)(!1),W=Object(i.a)(P,2),M=W[0],U=W[1],R=Object(r.useState)(!1),_=Object(i.a)(R,2),J=_[0],B=_[1],G=Object(s.a)({All:null,Platinum:"FFP"},Object.keys(n).filter((function(e){return n[e]})).reduce((function(t,a){var n;return t[null===(n=e.clubTypes[a])||void 0===n?void 0:n.shortname]=a,t}),{})),q=Object(s.a)({Access:[183,184,185,182]},Object.keys(m).filter((function(e){return m[e]})).reduce((function(t,a){var n;return t[null===(n=e.classTypes[a])||void 0===n?void 0:n.shortname]=[a],t}),{})),L=Object(r.useReducer)((function(e,t){return localStorage.setItem("selClub",t),t}),null,(function(){return localStorage.getItem("selClub")})),H=Object(i.a)(L,2),X=H[0],V=H[1],Y=Object(r.useReducer)((function(e,t){return localStorage.setItem("selClasses",JSON.stringify(t)),t}),{},(function(){return JSON.parse(localStorage.getItem("selClasses")||"{}")})),te=Object(i.a)(Y,2),ae=te[0],ne=te[1],re=Object(r.useReducer)((function(e,t){return localStorage.setItem("selTime",t),t}),"All",(function(){return localStorage.getItem("selTime")||"All"})),le=Object(i.a)(re,2),ce=le[0],se=le[1];Object(r.useEffect)((function(){e.setParamClub(X),e.setParamClasses("["+Object.keys(ae).filter((function(e){return ae[e]})).map((function(e){return q[e]})).flat().filter((function(e){return e}))+"]"),e.setParamTime(ce)}));var ie=ge();return l.a.createElement("div",{style:be},l.a.createElement(v.a,{elevation:3,style:{padding:5},className:ie.filter},l.a.createElement("span",{style:{float:"right"}},l.a.createElement(F.a,{onClick:function(e){return B(!0)}},l.a.createElement(K.a,{color:"action",fontSize:"small"})),l.a.createElement(oe,{open:J,setOpen:B,accessToken:e.accessToken,setAccessToken:e.setAccessToken}),l.a.createElement(fe,Object.assign({open:M,setOpen:U},{favs:b,favType:y,favTypeText:j,favChoices:I,updateFavs:A}))),l.a.createElement("strong",null,"Club: "),l.a.createElement(F.a,{style:{position:"absolute",margin:-10},onClick:function(t){k("favClubs"),x("Clubs"),D(e.clubTypes),g(n),U(!0)}},l.a.createElement(ee.a,{color:"action",fontSize:"small"})),l.a.createElement("br",null),Object.keys(G).map((function(e){return l.a.createElement("span",{key:e},l.a.createElement($.a,{control:l.a.createElement(Q.a,{checked:X==G[e],onChange:function(t){return V(G[e])}}),label:e}))})),l.a.createElement("br",null),l.a.createElement("strong",null,"Class: "),l.a.createElement(F.a,{style:{position:"absolute",margin:-10},onClick:function(t){k("favClasses"),x("Classes"),D(e.classTypes),g(m),U(!0)}},l.a.createElement(ee.a,{color:"action",fontSize:"small"})),l.a.createElement("br",null),Object.keys(q).map((function(e){return l.a.createElement("span",{key:e},l.a.createElement($.a,{control:l.a.createElement(Z.a,{checked:ae[e]||!1,onChange:function(t){return ne(Object(s.a)(Object(s.a)({},ae),{},Object(N.a)({},e,!ae[e])))}}),label:e}))})),l.a.createElement("br",null),l.a.createElement("strong",null,"Time: "),l.a.createElement("br",null),["All","No Work"].map((function(e){return l.a.createElement("span",{key:e},l.a.createElement($.a,{control:l.a.createElement(Q.a,{checked:ce==e,onChange:function(t){return se(e)}}),label:e}))})),l.a.createElement("br",null),l.a.createElement("div",{style:ve},l.a.createElement(z.a,{component:v.a,style:{backgroundColor:"#ff4571"},onClick:T},"Search"))))},be={margin:"5px 0",flexGrow:1,userSelect:"none"},ge=Object(u.a)({filter:{"&:hover":{backgroundColor:"#fffffff0"},transition:"background-color 0.1s",backgroundColor:"#ffffffd0"}}),ve={float:"right",margin:"-40px 5px",gap:5,display:"grid",gridTemplateColumns:"auto auto"},Ee=(a(160),a(135)),he=a.n(Ee),ye={particles:{number:{value:80,density:{enable:!0,value_area:2e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1.7582417582417584,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:1,size_min:2,sync:!1}},line_linked:{enable:!0,distance:175,color:"#ffffff",opacity:.9,width:2},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:881.8766334760375,rotateY:801.7060304327614}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"bubble"},resize:!0},modes:{grab:{distance:299.7002997002997,line_linked:{opacity:1}},bubble:{distance:523.7898019343676,size:4.060386061506726,duration:.08120772123013452,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1};var ke=function(){var e=Object(r.useState)((function(e){return localStorage.getItem("accessToken")||""})),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useReducer)((function(e,t){return(null===e||void 0===e?void 0:e.classId)!==(null===t||void 0===t?void 0:t.classId)?t:null}),null),o=Object(i.a)(c,2),u=o[0],m=o[1],f=function(e){var t=Object(r.useState)({}),a=Object(i.a)(t,2),n=a[0],l=a[1];return Object(r.useEffect)((function(){function t(){return(t=Object(k.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.ajax({type:"GET",url:"https://api-mobile.circuithq.com/api/v2/club/sg",dataType:"json",headers:{Authorization:e.accessToken,"User-Country-Code":"sg"}});case 2:a=t.sent,l(a.data.reduce((function(e,t){return e[t.clubId]={name:t.name,address:t.address,fullname:t.clubWebsiteName,shortname:t.name.replace(/^FFP?\s*/,""),type:t.name.indexOf("FFP")>=0?"Platinum":"Premium"},e}),{}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.accessToken]),n}({accessToken:a}),d=function(e){var t=Object(r.useState)({}),a=Object(i.a)(t,2),n=a[0],l=a[1];return Object(r.useEffect)((function(){function t(){return(t=Object(k.a)(y.a.mark((function t(){var a,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.ajax({type:"GET",url:"https://api-mobile.circuithq.com/api/v2/topic/sg",dataType:"json",headers:{Authorization:e.accessToken,"User-Country-Code":"sg"}});case 2:a=t.sent,n={},l(a.data.flatMap((function(e){return n[e.programTypeId]=e.name,e.subTopics})).reduce((function(e,t){return e[t.programId]={name:t.name,shortname:t.name.replace(/([A-Za-z0-9])([A-Za-z0-9]*)/g,(function(e,t,a){return t.toUpperCase()+a.toLowerCase()})),type:n[t.programTypeId]},e}),{}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.accessToken]),n}({accessToken:a}),p=Object(r.useState)(null),b=Object(i.a)(p,2),g=b[0],v=b[1],E=Object(r.useState)(null),h=Object(i.a)(E,2),C=h[0],j=h[1],x=Object(r.useState)(null),S=Object(i.a)(x,2),T=S[0],w=S[1];function I(e){e.target===e.currentTarget&&m(null)}return Object(r.useEffect)((function(){Notification.requestPermission().then((function(){var e=!1;setInterval((function(){if(document.hidden){if(!e){e=!0;var t=new Notification("The FF Booker tab is not active!",{body:"Click here to return to the tab",requireInteraction:!0});t.onclick=function(){window.focus(),window.parent.focus(),t.close()}}}else e=!1}),100)}))}),[]),l.a.createElement(B.Provider,{value:!1},l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},Ce),{},{display:"flex"}),onClick:I},l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},Oe),{},{maxWidth:1e3}),onClick:I},l.a.createElement(P,Object.assign({handleSelection:function(e){return m(e)},fromDateAdj:0,toDateAdj:511200,selected:u,accessToken:a},{paramClub:g,paramClasses:C,paramTime:T},{clubTypes:f,classTypes:d}))),l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},Oe),{},{minWidth:"325px",maxWidth:"400px",flexGrow:0}),onClick:I},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxHeight:"100%"}},l.a.createElement(pe,Object.assign({setParamClub:v,setParamClasses:j,setParamTime:w},{accessToken:a,setAccessToken:n},{clubTypes:f,classTypes:d})),l.a.createElement(q,Object.assign({handleSelection:function(e){return m(e)},targetClass:u,bookOpen:165600,bookOffset:1,bookDuration:10,bookWait:150,accessToken:a},{clubTypes:f,classTypes:d}))))),l.a.createElement(he.a,{width:"100vw",height:"100vh",params:ye}))},Ce={position:"absolute",top:0,bottom:0,left:0,right:0,padding:"0 5px"},Oe={margin:"5px 5px",flexGrow:1};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[150,1,2]]]);
//# sourceMappingURL=main.d238b43f.chunk.js.map