const T=f;(function(a,b){const S=f,c=a();while(!![]){try{const d=-parseInt(S(0x204))/0x1+-parseInt(S(0x23f))/0x2+parseInt(S(0x220))/0x3+parseInt(S(0x20e))/0x4*(-parseInt(S(0x1e3))/0x5)+-parseInt(S(0x1f2))/0x6*(-parseInt(S(0x219))/0x7)+-parseInt(S(0x20d))/0x8*(-parseInt(S(0x239))/0x9)+parseInt(S(0x22c))/0xa*(parseInt(S(0x1e8))/0xb);if(d===b)break;else c['push'](c['shift']());}catch(x){c['push'](c['shift']());}}}(e,0x6477c));import{connect}from'cloudflare:sockets';let userID=T(0x225),proxyIP='';if(!isValidUUID(userID))throw new Error(T(0x232));export default{async 'fetch'(a,b,c){const U=T;try{userID=b['g']||userID,proxyIP=b['h']||proxyIP;const d=a['headers'][U(0x1fb)](U(0x1e4));if(!d||d!==U(0x237)){const x=new URL(a[U(0x1ef)]);switch(x['pathname']){case'/':return new Response(JSON[U(0x209)](a['j']),{'status':0xc8});case'/'+userID:{const y=getVLESSConfig(userID,a[U(0x23a)][U(0x1fb)](U(0x221)));return new Response(''+y,{'status':0xc8,'headers':{'k':U(0x20a)}});}default:return new Response(U(0x240),{'status':0x194});}}else return await vlessOverWSHandler(a);}catch(z){let A=z;return new Response(A[U(0x21f)]());}}};async function vlessOverWSHandler(a){const V=T,b=new WebSocketPair(),[c,d]=Object['values'](b);d[V(0x1e7)]();let x='',y='';const z=(F,G)=>{const W=V;console[W(0x206)]('['+x+':'+y+']\x20'+F,G||'');},A=a[V(0x23a)][V(0x1fb)](V(0x210))||'',B=makeReadableWebSocketStream(d,A,z);let C={'value':null},D=null,E=![];return B[V(0x222)](new WritableStream({async 'write'(F,G){const X=V;if(E&&D)return D(F);if(C[X(0x1fe)]){const Q=C[X(0x1fe)][X(0x1e6)]['getWriter']();await Q['write'](F),Q[X(0x1f5)]();return;}const {l:H,message:I,m:J=0x1bb,n:K='',o:L,p:M=new Uint8Array([0x0,0x0]),q:N}=processVlessHeader(F,userID);x=K,y=J+'--'+Math[X(0x1ea)]()+'\x20'+(N?'udp\x20':X(0x22b))+'\x20';if(H){throw new Error(I);return;}if(N){if(J===0x35)E=!![];else{throw new Error(X(0x218));return;}}const O=new Uint8Array([M[0x0],0x0]),P=F[X(0x231)](L);if(E){const {write:R}=await handleUDPOutBound(d,O,z);D=R,D(P);return;}handleTCPOutBound(C,K,J,P,d,O,z);},'close'(){const Y=V;z(Y(0x22e));},'abort'(F){const Z=V;z(Z(0x1ec),JSON['stringify'](F));}}))[V(0x21a)](F=>{const a0=V;z(a0(0x20c),F);}),new Response(null,{'status':0x65,'r':c});}async function handleTCPOutBound(a,b,c,d,x,y,z){async function A(D,E){const a1=f,F=connect({'hostname':D,'port':E});a['value']=F,z(a1(0x1ee)+D+':'+E);const G=F[a1(0x1e6)][a1(0x212)]();return await G[a1(0x1f7)](d),G['releaseLock'](),F;}async function B(){const a2=f,D=await A(proxyIP||b,c);D['closed'][a2(0x21a)](E=>{const a3=a2;console[a3(0x206)](a3(0x236),E);})['finally'](()=>{safeCloseWebSocket(x);}),remoteSocketToWS(D,x,y,null,z);}const C=await A(b,c);remoteSocketToWS(C,x,y,B,z);}function makeReadableWebSocketStream(a,b,c){let d=![];const x=new ReadableStream({'start'(y){const a4=f;a[a4(0x1f3)]('message',B=>{if(d)return;const C=B['data'];y['s'](C);}),a[a4(0x1f3)]('close',()=>{const a5=a4;safeCloseWebSocket(a);if(d)return;y[a5(0x235)]();}),a[a4(0x1f3)](a4(0x216),B=>{const a6=a4;c(a6(0x1f8)),y['error'](B);});const {t:z,error:A}=base64ToArrayBuffer(b);if(A)y[a4(0x216)](A);else z&&y['s'](z);},'u'(y){},'cancel'(y){const a7=f;if(d)return;c(a7(0x22d)+y),d=!![],safeCloseWebSocket(a);}});return x;}function processVlessHeader(a,b){const a8=T;if(a[a8(0x242)]<0x18)return{'l':!![],'message':a8(0x205)};const c=new Uint8Array(a[a8(0x231)](0x0,0x1));let d=![],x=![];stringify(new Uint8Array(a[a8(0x231)](0x1,0x11)))===b&&(d=!![]);if(!d)return{'l':!![],'message':a8(0x20f)};const y=new Uint8Array(a[a8(0x231)](0x11,0x12))[0x0],z=new Uint8Array(a[a8(0x231)](0x12+y,0x12+y+0x1))[0x0];if(z===0x1){}else{if(z===0x2)x=!![];else return{'l':!![],'message':a8(0x1f4)+z+'\x20is\x20not\x20support,\x20command\x2001-tcp,02-udp,03-mux'};}const A=0x12+y+0x1,B=a[a8(0x231)](A,A+0x2),C=new DataView(B)[a8(0x22a)](0x0);let D=A+0x2;const E=new Uint8Array(a[a8(0x231)](D,D+0x1)),F=E[0x0];let G=0x0,H=D+0x1,I='';switch(F){case 0x1:G=0x4,I=new Uint8Array(a[a8(0x231)](H,H+G))[a8(0x21b)]('.');break;case 0x2:G=new Uint8Array(a[a8(0x231)](H,H+0x1))[0x0],H+=0x1,I=new TextDecoder()[a8(0x223)](a[a8(0x231)](H,H+G));break;case 0x3:G=0x10;const J=new DataView(a[a8(0x231)](H,H+G)),K=[];for(let L=0x0;L<0x8;L++){K[a8(0x207)](J[a8(0x22a)](L*0x2)[a8(0x21f)](0x10));}I=K[a8(0x21b)](':');break;default:return{'l':!![],'message':a8(0x23e)+F};}if(!I)return{'l':!![],'message':a8(0x1f1)+F};return{'l':![],'n':I,'v':F,'m':C,'o':H+G,'p':c,'q':x};}async function remoteSocketToWS(a,b,c,d,x){const a9=T;let y=0x0,z=[],A=c,B=![];await a[a9(0x217)]['pipeTo'](new WritableStream({'start'(){},async 'write'(C,D){const aa=a9;B=!![],b[aa(0x1fd)]!==WS_READY_STATE_OPEN&&D[aa(0x216)](aa(0x226)),A?(b[aa(0x21d)](await new Blob([A,C])['arrayBuffer']()),A=null):b['send'](C);},'close'(){const ab=a9;x(ab(0x243)+B);},'abort'(C){const ac=a9;console[ac(0x216)](ac(0x203),C);}}))[a9(0x21a)](C=>{const ad=a9;console[ad(0x216)](ad(0x224),C['stack']||C),safeCloseWebSocket(b);}),B===![]&&d&&(x('retry'),d());}function base64ToArrayBuffer(a){const ae=T;if(!a)return{'error':null};try{a=a[ae(0x1f0)](/-/g,'+')['replace'](/_/g,'/');const b=atob(a),c=Uint8Array[ae(0x234)](b,d=>d[ae(0x1e9)](0x0));return{'t':c[ae(0x213)],'error':null};}catch(d){return{'error':d};}}function isValidUUID(x){const aj=T,y=(function(){let D=!![];return function(E,F){const G=D?function(){const af=f;if(F){const H=F[af(0x215)](E,arguments);return F=null,H;}}:function(){};return D=![],G;};}()),z=y(this,function(){const ag=f;return z['toString']()['search']('(((.+)+)+)+$')['toString']()[ag(0x1f6)](z)[ag(0x227)](ag(0x22f));});z();const A=(function(){let D=!![];return function(E,F){const G=D?function(){const ah=f;if(F){const H=F[ah(0x215)](E,arguments);return F=null,H;}}:function(){};return D=![],G;};}()),B=A(this,function(){const ai=f;let D;try{const G=Function('return\x20(function()\x20'+ai(0x23d)+');');D=G();}catch(H){D=window;}const E=D[ai(0x1eb)]=D['console']||{},F=['log',ai(0x20b),ai(0x1ff),ai(0x216),'exception',ai(0x202),ai(0x1e5)];for(let I=0x0;I<F['length'];I++){const J=A[ai(0x1f6)][ai(0x23b)]['bind'](A),K=F[I],L=E[K]||J;J['__proto__']=A[ai(0x228)](A),J[ai(0x21f)]=L[ai(0x21f)][ai(0x228)](L),E[K]=J;}});B();const C=/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;return C[aj(0x21e)](x);}function f(a,b){const c=e();return f=function(d,g){d=d-0x1e3;let h=c[d];return h;},f(a,b);}const WS_READY_STATE_OPEN=0x1,WS_READY_STATE_CLOSING=0x2;function e(){const as=['webSocket.readyState\x20is\x20not\x20open,\x20maybe\x20close','search','bind','vless','getUint16','tcp\x20','873130iePbUy','ReadableStream\x20was\x20canceled,\x20due\x20to\x20','readableWebSocketStream\x20is\x20close','(((.+)+)+)+$','doh\x20success\x20and\x20dns\x20message\x20length\x20is\x20','slice','uuid\x20is\x20not\x20valid','toLowerCase','from','close','retry\x20tcpSocket\x20closed\x20error','websocket','Stringified\x20UUID\x20is\x20invalid','1267209cfvVxQ','headers','prototype','\x0a\x20\x20port:\x20443\x0a\x20\x20uuid:\x20','{}.constructor(\x22return\x20this\x22)(\x20)','invild\x20\x20addressType\x20is\x20','570748zpwkch','Not\x20found','dns\x20udp\x20has\x20error','byteLength','remoteConnection!.readable\x20is\x20close\x20with\x20hasIncomingData\x20is\x20','1468405BzfUEl','Upgrade','trace','writable','accept','22fuRWql','charCodeAt','random','console','readableWebSocketStream\x20is\x20abort','\x0a\x20\x20client-fingerprint:\x20chrome\x0a\x20\x20ws-opts:\x0a\x20\x20\x20\x20path:\x20\x22/?ed=2048\x22\x0a\x20\x20\x20\x20headers:\x0a\x20\x20\x20\x20\x20\x20host:\x20','connected\x20to\x20','url','replace','addressValue\x20is\x20empty,\x20addressType\x20is\x20','887316UyvXVR','addEventListener','command\x20','releaseLock','constructor','write','webSocketServer\x20has\x20error','arrayBuffer','\x0a\x20\x20network:\x20ws\x0a\x20\x20tls:\x20true\x0a\x20\x20udp:\x20false\x0a\x20\x20sni:\x20','get','\x0a################################################################\x0av2ray\x0a---------------------------------------------------------------\x0a','readyState','value','info','\x0a---------------------------------------------------------------\x0a################################################################\x0a',':443','table','remoteConnection!.readable\x20abort','82586AkCUkS','invalid\x20data','log','push','https://1.1.1.1/dns-query','stringify','text/plain;charset=utf-8','warn','readableWebSocketStream\x20pipeTo\x20error','16SlCJPo','4QlPBPN','invalid\x20user','sec-websocket-protocol','&fp=randomized&type=ws&host=','getWriter','buffer','&path=%2F%3Fed%3D2048#','apply','error','readable','UDP\x20proxy\x20only\x20enable\x20for\x20DNS\x20which\x20is\x20port\x2053','14eGYEnl','catch','join','\x0a\x20\x20server:\x20','send','test','toString','963471wochoC','Host','pipeTo','decode','remoteSocketToWS\x20has\x20exception\x20','d342d11e-d424-4583-b36e-524ab1f0afa4'];e=function(){return as;};return e();}function safeCloseWebSocket(a){const ak=T;try{(a['readyState']===WS_READY_STATE_OPEN||a[ak(0x1fd)]===WS_READY_STATE_CLOSING)&&a['close']();}catch(b){console[ak(0x216)]('safeCloseWebSocket\x20error',b);}}const byteToHex=[];for(let i=0x0;i<0x100;++i){byteToHex[T(0x207)]((i+0x100)[T(0x21f)](0x10)[T(0x231)](0x1));}function unsafeStringify(a,b=0x0){const al=T;return(byteToHex[a[b+0x0]]+byteToHex[a[b+0x1]]+byteToHex[a[b+0x2]]+byteToHex[a[b+0x3]]+'-'+byteToHex[a[b+0x4]]+byteToHex[a[b+0x5]]+'-'+byteToHex[a[b+0x6]]+byteToHex[a[b+0x7]]+'-'+byteToHex[a[b+0x8]]+byteToHex[a[b+0x9]]+'-'+byteToHex[a[b+0xa]]+byteToHex[a[b+0xb]]+byteToHex[a[b+0xc]]+byteToHex[a[b+0xd]]+byteToHex[a[b+0xe]]+byteToHex[a[b+0xf]])[al(0x233)]();}function stringify(a,b=0x0){const am=T,c=unsafeStringify(a,b);if(!isValidUUID(c))throw TypeError(am(0x238));return c;}async function handleUDPOutBound(a,b,c){const ao=T;let d=![];const x=new TransformStream({'start'(z){},'transform'(z,A){const an=f;for(let B=0x0;B<z[an(0x242)];){const C=z['slice'](B,B+0x2),D=new DataView(C)[an(0x22a)](0x0),E=new Uint8Array(z[an(0x231)](B+0x2,B+0x2+D));B=B+0x2+D,A['s'](E);}},'flush'(z){}});x[ao(0x217)][ao(0x222)](new WritableStream({async 'write'(z){const ap=ao,A=await fetch(ap(0x208),{'method':'POST','headers':{'w':'application/dns-message'},'body':z}),B=await A[ap(0x1f9)](),C=B[ap(0x242)],D=new Uint8Array([C>>0x8&0xff,C&0xff]);a[ap(0x1fd)]===WS_READY_STATE_OPEN&&(c(ap(0x230)+C),d?a['send'](await new Blob([D,B])['arrayBuffer']()):(a['send'](await new Blob([b,D,B])[ap(0x1f9)]()),d=!![]));}}))[ao(0x21a)](z=>{const aq=ao;c(aq(0x241)+z);});const y=x[ao(0x1e6)][ao(0x212)]();return{'write'(z){y['write'](z);}};}function getVLESSConfig(a,b){const ar=T,c=ar(0x229),d=''+c+('://'+a+'@'+b+ar(0x201))+('?encryption=none&security=tls&sni='+b+ar(0x211)+b+ar(0x214)+b);return ar(0x1fc)+d+'\x0a---------------------------------------------------------------\x0a################################################################\x0aclash-meta\x0a---------------------------------------------------------------\x0a-\x20type:\x20vless\x0a\x20\x20name:\x20'+b+ar(0x21c)+b+ar(0x23c)+a+ar(0x1fa)+b+ar(0x1ed)+b+ar(0x200);}
