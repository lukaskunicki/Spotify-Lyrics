(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{130:function(n,e){},241:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,l,u,d,f,b,h,p,j,x=t(0),g=t.n(x),m=t(68),O=t.n(m),k=(t(91),t(6)),v=t.n(k),y=t(21),w=t(7),I=t(11),S=t.n(I),T=t(85),_={API_URL:"https://spotify-lyrics-web-app.herokuapp.com",CLIENT_ID:"e2f5bc73916845cca657f51299b431a6",REDIRECT_URI:"https://spotify-lyrics-web-app.herokuapp.com"},E=new T.a,N=function(n){var e=E.get("s_l_auth"),t=Object(x.useState)(null===e||void 0===e?void 0:e.accessToken),r=Object(w.a)(t,2),a=r[0],c=r[1],i=Object(x.useState)(null===e||void 0===e?void 0:e.refreshToken),o=Object(w.a)(i,2),s=o[0],l=o[1],u=Object(x.useState)(null===e||void 0===e?void 0:e.expiresIn),d=Object(w.a)(u,2),f=d[0],b=d[1];return Object(x.useEffect)((function(){E.set("s_l_auth",JSON.stringify({accessToken:a,refreshToken:s,expiresIn:f}),{path:"/"})}),[a,f,s]),Object(x.useEffect)((function(){if(!n)return null;S.a.post(_.API_URL+"/login",{code:n}).then((function(n){c(n.data.accessToken),l(n.data.refreshToken),b(n.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location.href="/"}))}),[n]),Object(x.useEffect)((function(){if(s&&f){var n=setInterval((function(){S.a.post(_.API_URL+"/refresh",{refreshToken:s}).then((function(n){c(n.data.accessToken),b(n.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(f-60));return function(){return clearInterval(n)}}}),[s,f]),a},z=t(3),R=t(4),L=t(1),C=R.a.form(r||(r=Object(z.a)(['\n  background: #000;\n  min-height: 82px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n\n  & > input {\n    font-family: "Noto Sans", sans-serif;\n    max-width: 500px;\n    width: 100%;\n    height: 52px;\n    border-radius: 12px;\n    border: none;\n    padding: 0 20px;\n    font-size: 1.2em;\n  }\n']))),D=function(n){var e=n.searchValue,t=n.searchValueHandler;return Object(L.jsx)(C,{children:Object(L.jsx)("input",{type:"search",placeholder:"Search for Songs and Artists",value:e,onChange:function(n){return t(n)},autoFocus:"autoFocus"})},"searchBar")},P=R.a.div(a||(a=Object(z.a)(['\n  background: #fff;\n  max-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n  overflow-y: scroll;\n  height: 400px;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  font-family: "Noto Sans", sans-serif;\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n']))),A=R.a.div(c||(c=Object(z.a)(["\n  display: flex;\n  padding: 5px;\n  &:hover {\n    cursor: pointer;\n    background: grey;\n    transition-property: background;\n    transition-duration: 0.2s;\n    background: #00000015;\n  }\n"]))),U=R.a.div(i||(i=Object(z.a)(["\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & > img {\n    width: 80px;\n  }\n"]))),H=R.a.div(o||(o=Object(z.a)(["\n  width: 75%;\n  padding: 0 25px;\n  & > .song-title {\n    text-align: left;\n    font-size: 16px;\n  }\n  & > .song-author {\n    text-align: left;\n    font-family: 14px;\n  }\n"]))),J=function(n){var e=n.searchResults,t=n.trackHandler;return Object(L.jsx)(P,{children:e.map((function(n){return Object(L.jsxs)(A,{onClick:function(){return t(n)},children:[Object(L.jsx)(U,{children:Object(L.jsx)("img",{src:n.thumbnail.url,alt:"".concat(n.name," icon")})}),Object(L.jsxs)(H,{children:[Object(L.jsx)("h3",{className:"song-title",children:n.title}),Object(L.jsx)("p",{className:"song-author",children:n.artist})]})]},n.uri)}))})},V=t(84),B=R.a.div(s||(s=Object(z.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 9;\n"]))),F=function(n){var e=n.accessToken,t=n.trackToPlay,r=Object(x.useState)(!1),a=Object(w.a)(r,2),c=a[0],i=a[1];return Object(x.useEffect)((function(){i(!0)}),[t]),e?Object(L.jsx)(B,{style:{pointerEvents:t?"all":"none",fontFamily:"Noto Sans"},children:Object(L.jsx)(V.a,{token:e,showSaveIcon:!0,play:c,callback:function(n){n.isPlaying||i(!1)},uris:t?[t]:[]})},t):null},M=R.a.div(l||(l=Object(z.a)(['\n  height: calc(100vh - 130px);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n\n  & > pre {\n    padding: 3em 2em 0;\n    white-space: pre-wrap;\n    max-width: 700px;\n    margin: 0 auto;\n    color: #fff;\n    font-size: 20px;\n    font-family: "Noto Sans", sans-serif;\n    text-align: center;\n    line-height: 1.8;\n    overflow-y: scroll;\n    height: calc(100vh - 250px);\n    text-shadow: 1px 1px 1px white;\n    overflow-x: hidden;\n    &::-webkit-scrollbar {\n      width: 10px;\n    }\n    &::-webkit-scrollbar-track {\n      background: #f1f1f122;\n    }\n    &::-webkit-scrollbar-thumb {\n      background: #888;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #555;\n    }\n  }\n']))),q=function(n){var e=n.text,t=n.backgroundImage;return Object(L.jsx)(M,{style:{background:"linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),url(".concat(t.url,") center")},children:Object(L.jsx)("pre",{children:e})})},K=t(80),Q=t.n(K),W=t(81),G=function(){var n=Object(y.a)(v.a.mark((function n(e){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={apiKey:"STDVqCKQcRjydo2OMsA-YTW-H_kPOoSbJph1EHviftI_NWeDhjsJUtqGru7CJsm4",title:e.title,artist:e.artist,optimizeQuery:!0},n.next=3,Object(W.getLyrics)(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Y=t(82),X=t.n(Y),Z=function(n){var e=[];for(var t in n)e.push("".concat(t,"=").concat(n[t]));return"?"+e.join("&")},$=R.a.div(u||(u=Object(z.a)(["\n  padding: 4em 2em;\n  @media (max-width: 768px) {\n    padding: 1em;\n  }\n"]))),nn=R.a.div(d||(d=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n"]))),en=R.a.a(f||(f=Object(z.a)(["\n  padding: 0.8em 1.3em;\n  font-size: 2em;\n  background: #1db954;\n  color: #fff;\n  border-radius: 10px;\n  transition-property: background, color;\n  transition: all 200ms ease;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-block;\n  margin: 1em auto;\n\n  :hover {\n    background: #fff;\n    color: #1db954;\n    border: 2px solid #1db954;\n  }\n"]))),tn=R.a.h1(b||(b=Object(z.a)(['\n  font-family: "Noto Sans", sans-serif;\n  width: 100%;\n  text-align: center;\n  font-size: 5em;\n  @media (max-width: 768px) {\n    font-size: 4em;\n  }\n']))),rn=R.a.p(h||(h=Object(z.a)(['\n  font-family: "Noto Sans", sans-serif;\n  width: 100%;\n  text-align: center;\n  font-size: 1.5em;\n']))),an=R.a.div(p||(p=Object(z.a)(['\n  position: absolute;\n  width: 100%;\n  height: 82px;\n  bottom: 0;\n  text-align: center;\n  font-family: "consolas";\n  font-family: 14px;\n  padding: 10px 0;\n  left: 0;\n\n  & > svg {\n    width: 20px;\n  }\n']))),cn=function(n){var e="https://accounts.spotify.com/authorize"+Z({client_id:_.CLIENT_ID,response_type:"code",redirect_uri:_.REDIRECT_URI,scope:"streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"});return Object(L.jsxs)($,{children:[Object(L.jsx)(tn,{children:"Spotify Lyrics"}),Object(L.jsx)(rn,{children:"Listen to your favourite songs and follow the lyrics"}),Object(L.jsx)(nn,{children:Object(L.jsx)(en,{href:e,children:"Login to Spotify"})}),Object(L.jsxs)(an,{children:[Object(L.jsx)("p",{children:"\xa9 lukaskunicki "}),Object(L.jsx)("p",{children:Object(L.jsx)("a",{href:"https://github.com/lukaskunicki",children:Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})]})]})},on=t(83),sn=t.n(on),ln=R.a.div(j||(j=Object(z.a)(['\n  font-size: 32px;\n  font-family: "Noto Sans", sans-serif;\n  height: 82vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']))),un=function(){return Object(L.jsx)(ln,{children:Object(L.jsx)(sn.a,{children:Object(L.jsx)("span",{children:"The lyrics will be presented here"})})})},dn=new Q.a({clientId:_.CLIENT_ID}),fn=function(){var n=new URLSearchParams(window.location.search).get("code"),e=N(n),t=Object(x.useState)(""),r=Object(w.a)(t,2),a=r[0],c=r[1],i=Object(x.useState)([]),o=Object(w.a)(i,2),s=o[0],l=o[1],u=Object(x.useState)(null),d=Object(w.a)(u,2),f=d[0],b=d[1],h=Object(x.useState)(null),p=Object(w.a)(h,2),j=p[0],g=p[1],m=Object(x.useState)(!1),O=Object(w.a)(m,2),k=O[0],I=O[1];Object(x.useEffect)((function(){e&&dn.setAccessToken(e)}),[e]),Object(x.useEffect)((function(){if(!a)return l([]);if(e){var n=!1;return dn.searchTracks(a).then((function(e){if(!n){var t=e.body.tracks.items.map((function(n){var e=n.album.images.sort((function(n,e){return n.height<e.height}));return{artist:n.artists[0].name,title:n.name,uri:n.uri,backgroundImage:e[0],thumbnail:e[e.length-1]}}));l(t)}})),function(){return n=!0}}}),[a,e]);var S=function(){var n=Object(y.a)(v.a.mark((function n(e){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(e),g(""),c(""),l(""),I(!0),n.next=7,G({title:e.title,artist:e.artist});case 7:t=n.sent,g(t),I(!1);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return n||e?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(D,{searchValue:a,searchValueHandler:function(n){return c(n.target.value)}}),s.length?Object(L.jsx)(J,{searchResults:s,trackHandler:S}):null,Object(L.jsx)(F,{accessToken:e,trackToPlay:null===f||void 0===f?void 0:f.uri}),j?Object(L.jsx)(q,{text:j,backgroundImage:null===f||void 0===f?void 0:f.backgroundImage}):k?Object(L.jsx)(X.a,{type:"ThreeDots",color:"#1DB954",height:"82vh",style:{textAlign:"center"}}):Object(L.jsx)(un,{})]}):Object(L.jsx)(cn,{})},bn=function(){return Object(L.jsx)(fn,{})};O.a.render(Object(L.jsx)(g.a.StrictMode,{children:Object(L.jsx)(bn,{})}),document.getElementById("root"))},91:function(n,e,t){}},[[241,1,2]]]);
//# sourceMappingURL=main.41c6140c.chunk.js.map