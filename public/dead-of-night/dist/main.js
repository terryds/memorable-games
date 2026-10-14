var ru="186";var au=0,fl=1,ou=2;var Vi=1,lu=2,Hs=3,Gs=0,Je=1,Wn=2,vn=0,Wi=1,Cn=2,pl=3,ml=4,cu=5;var Vs=100,hu=101,uu=102,du=103,fu=104,pu=200,mu=201,gu=202,xu=203,_u=204,vu=205,yu=206,Mu=207,Su=208,bu=209,Tu=210,wu=211,Eu=212,Au=213,Ru=214,Cu=0,Iu=1,Pu=2,gl=3,Lu=4,Nu=5,Du=6,Uu=7,Fu=0,Ou=1,Bu=2,In=0,wr=1,Er=2,Ar=3,Xi=4,Rr=5,Cr=6,Ir=7;var Ws=301,qi=302,Ga=303,Va=304,Pr=306,Wa=1000,Xa=1001,zu=1002,Ii=1003,ku=1004;var Lr=1005;var an=1006,qa=1007;var Yi=1008;var Pn=1009,Hu=1010,Gu=1011,Nr=1012,xl=1013,Pi=1014,ui=1015,We=1016,_l=1017,vl=1018,Xs=1020,Vu=35902,Wu=35899,Xu=1021,qu=1022,Xn=1023,Zi=1026,$i=1027,Yu=1028,yl=1029,Ji=1030,Ml=1031;var Sl=1033,Ya=33776,Za=33777,$a=33778,Ja=33779,bl=35840,Tl=35841,wl=35842,El=35843,Al=36196,Rl=37492,Cl=37496,Il=37488,Pl=37489,Ka=37490,Ll=37491,Nl=37808,Dl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,kl=37815,Hl=37816,Gl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,$l=36495,Jl=36283,Kl=36284,Qa=36285,Ql=36286;var jl=0,Zu=1,Ki="",ja="srgb",tc="srgb-linear",ec="linear",ue="srgb";var $u=512,Ju=513,Ku=514,to=515,Qu=516,ju=517,eo=518,td=519;var Dr=35048;var nc="300 es",ic=2000;function Yf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Mr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ed(){let t=Mr("canvas");return t.style.display="block",t}var Rh={},zs=null;function Sr(...t){let e="THREE."+t.shift();if(zs)zs("log",e,...t);else console.log(e,...t)}function nd(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Dt(...t){t=nd(t);let e="THREE."+t.shift();if(zs)zs("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=nd(t);let e="THREE."+t.shift();if(zs)zs("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Gi(...t){let e=t.join(" ");if(e in Rh)return;Rh[e]=!0,Dt(...t)}function id(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var sd={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class di{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ho=Math.PI/180,br=180/Math.PI;function Ci(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[t&255]+Ze[t>>8&255]+Ze[t>>16&255]+Ze[t>>24&255]+"-"+Ze[e&255]+Ze[e>>8&255]+"-"+Ze[e>>16&15|64]+Ze[e>>24&255]+"-"+Ze[n&63|128]+Ze[n>>8&255]+"-"+Ze[n>>16&255]+Ze[n>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function $f(t,e){return(t%e+e)%e}function Go(t,e,n){return(1-n)*t+n*e}function Vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function pe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class wt{static{wt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],p=s[r+2],g=s[r+3];if(h!==g||o!==d||l!==u||c!==p){let A=o*d+l*u+c*p+h*g;if(A<0)d=-d,u=-u,p=-p,g=-g,A=-A;let m=1-a;if(A<0.9995){let f=Math.acos(A),C=Math.sin(f);m=Math.sin(m*f)/C,a=Math.sin(a*f)/C,o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+g*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+g*a;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],p=s[r+3];return t[e]=a*p+c*h+o*u-l*d,t[e+1]=o*p+c*d+l*h-a*u,t[e+2]=l*p+c*u+a*d-o*h,t[e+3]=c*p-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),p=o(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{static{k.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,o=t.w,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,r=e.x,a=e.y,o=e.z;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Vo=new k,Ch=new Ln;class kt{static{kt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],p=n[8],g=i[0],A=i[3],m=i[6],f=i[1],C=i[4],T=i[7],_=i[2],b=i[5],I=i[8];return s[0]=r*g+a*f+o*_,s[3]=r*A+a*C+o*b,s[6]=r*m+a*T+o*I,s[1]=l*g+c*f+h*_,s[4]=l*A+c*C+h*b,s[7]=l*m+c*T+h*I,s[2]=d*g+u*f+p*_,s[5]=d*A+u*C+p*b,s[8]=d*m+u*T+p*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,d=a*o-c*s,u=l*s-r*o,p=e*h+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=h*g,t[1]=(i*l-c*n)*g,t[2]=(a*n-i*r)*g,t[3]=d*g,t[4]=(c*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=u*g,t[7]=(n*o-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Wo=new kt,Ih=new kt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ph=new kt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Jf(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Ih,fromXYZ:Ph,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Ih,fromXYZ:Ph,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var qt=Jf();function hi(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Bs(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ys;class sc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(ys===void 0)ys=Mr("canvas");ys.width=t.width,ys.height=t.height;let i=ys.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=hi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(hi(e[n]/255)*255);else e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Kf=0;class Ur{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Xo(i[r].image));else s.push(Xo(i[r]))}else s=Xo(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Xo(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return sc.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Dt("Texture: Unable to serialize Texture."),{}}var Qf=0,qo=new k;class qe extends di{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=qe.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ci(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=300;qe.DEFAULT_ANISOTROPY=1;class we{static{we.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],p=o[9],g=o[2],A=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-g)<0.01&&Math.abs(p-A)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+g)<0.1&&Math.abs(p+A)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,T=(u+1)/2,_=(m+1)/2,b=(c+d)/4,I=(h+g)/4,R=(p+A)/4;if(C>T&&C>_)if(C<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(C),i=b/n,s=I/n;else if(T>_)if(T<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(T),n=b/i,s=R/i;else if(_<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(_),n=I/s,i=R/s;return this.set(n,i,s,e),this}let f=Math.sqrt((A-p)*(A-p)+(h-g)*(h-g)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(A-p)/f,this.y=(h-g)/f,this.z=(d-c)/f,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rc extends di{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new qe(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ur(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pe extends rc{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class no extends qe{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ac extends qe{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ee{static{ee.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,d,u,p,g,A){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,g,A)}set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,g,A){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=h,m[14]=d,m[3]=u,m[7]=p,m[11]=g,m[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),s=1/Ms.setFromMatrixColumn(t,1).length(),r=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*h,p=a*c,g=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+p*l,e[5]=d-g*l,e[9]=-a*o,e[2]=g-d*l,e[6]=p+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,p=l*c,g=l*h;e[0]=d+g*a,e[4]=p*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=u*a-p,e[6]=g+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,p=l*c,g=l*h;e[0]=d-g*a,e[4]=-r*h,e[8]=p+u*a,e[1]=u+p*a,e[5]=r*c,e[9]=g-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*h,p=a*c,g=a*h;e[0]=o*c,e[4]=p*l-u,e[8]=d*l+g,e[1]=o*h,e[5]=g*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,p=a*o,g=a*l;e[0]=o*c,e[4]=g-d*h,e[8]=p*h+u,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+p,e[10]=d-g*h}else if(t.order==="XZY"){let d=r*o,u=r*l,p=a*o,g=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+g,e[5]=r*c,e[9]=u*h-p,e[2]=p*h-u,e[6]=a*c,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,tp)}lookAt(t,e,n){let i=this.elements;if(un.subVectors(t,e),un.lengthSq()===0)un.z=1;if(un.normalize(),Ti.crossVectors(n,un),Ti.lengthSq()===0){if(Math.abs(n.z)===1)un.x+=0.0001;else un.z+=0.0001;un.normalize(),Ti.crossVectors(n,un)}return Ti.normalize(),fa.crossVectors(un,Ti),i[0]=Ti.x,i[4]=fa.x,i[8]=un.x,i[1]=Ti.y,i[5]=fa.y,i[9]=un.y,i[2]=Ti.z,i[6]=fa.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],p=n[2],g=n[6],A=n[10],m=n[14],f=n[3],C=n[7],T=n[11],_=n[15],b=i[0],I=i[4],R=i[8],x=i[12],M=i[1],H=i[5],L=i[9],S=i[13],P=i[2],w=i[6],D=i[10],z=i[14],N=i[3],X=i[7],G=i[11],Y=i[15];return s[0]=r*b+a*M+o*P+l*N,s[4]=r*I+a*H+o*w+l*X,s[8]=r*R+a*L+o*D+l*G,s[12]=r*x+a*S+o*z+l*Y,s[1]=c*b+h*M+d*P+u*N,s[5]=c*I+h*H+d*w+u*X,s[9]=c*R+h*L+d*D+u*G,s[13]=c*x+h*S+d*z+u*Y,s[2]=p*b+g*M+A*P+m*N,s[6]=p*I+g*H+A*w+m*X,s[10]=p*R+g*L+A*D+m*G,s[14]=p*x+g*S+A*z+m*Y,s[3]=f*b+C*M+T*P+_*N,s[7]=f*I+C*H+T*w+_*X,s[11]=f*R+C*L+T*D+_*G,s[15]=f*x+C*S+T*z+_*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14],p=t[3],g=t[7],A=t[11],m=t[15],f=o*u-l*d,C=a*u-l*h,T=a*d-o*h,_=r*u-l*c,b=r*d-o*c,I=r*h-a*c;return e*(g*f-A*C+m*T)-n*(p*f-A*_+m*b)+i*(p*C-g*_+m*I)-s*(p*T-g*b+A*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],p=t[12],g=t[13],A=t[14],m=t[15],f=e*a-n*r,C=e*o-i*r,T=e*l-s*r,_=n*o-i*a,b=n*l-s*a,I=i*l-s*o,R=c*g-h*p,x=c*A-d*p,M=c*m-u*p,H=h*A-d*g,L=h*m-u*g,S=d*m-u*A,P=f*S-C*L+T*H+_*M-b*x+I*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/P;return t[0]=(a*S-o*L+l*H)*w,t[1]=(i*L-n*S-s*H)*w,t[2]=(g*I-A*b+m*_)*w,t[3]=(d*b-h*I-u*_)*w,t[4]=(o*M-r*S-l*x)*w,t[5]=(e*S-i*M+s*x)*w,t[6]=(A*T-p*I-m*C)*w,t[7]=(c*I-d*T+u*C)*w,t[8]=(r*L-a*M+l*R)*w,t[9]=(n*M-e*L-s*R)*w,t[10]=(p*b-g*T+m*f)*w,t[11]=(h*T-c*b-u*f)*w,t[12]=(a*x-r*H-o*R)*w,t[13]=(e*H-n*x+i*R)*w,t[14]=(g*C-p*_-A*f)*w,t[15]=(c*_-h*C+d*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,o=t.z,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,o=e._w,l=s+s,c=r+r,h=a+a,d=s*l,u=s*c,p=s*h,g=r*c,A=r*h,m=a*h,f=o*l,C=o*c,T=o*h,_=n.x,b=n.y,I=n.z;return i[0]=(1-(g+m))*_,i[1]=(u+T)*_,i[2]=(p-C)*_,i[3]=0,i[4]=(u-T)*b,i[5]=(1-(d+m))*b,i[6]=(A+f)*b,i[7]=0,i[8]=(p+C)*I,i[9]=(A-f)*I,i[10]=(1-(d+g))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Ms.set(i[0],i[1],i[2]).length(),a=Ms.set(i[4],i[5],i[6]).length(),o=Ms.set(i[8],i[9],i[10]).length();if(s<0)r=-r;wn.copy(this);let l=1/r,c=1/a,h=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=c,wn.elements[5]*=c,wn.elements[6]*=c,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,e.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,g;if(o)p=s/(r-s),g=r*s/(r-s);else if(a===2000)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)p=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,g;if(o)p=1/(r-s),g=r/(r-s);else if(a===2000)p=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)p=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Ms=new k,wn=new ee,jf=new k(0,0,0),tp=new k(1,1,1),Ti=new k,fa=new k,un=new k,Lh=new ee,Nh=new Ln;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin($t(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin($t(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin($t(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var ep=0,Dh=new k,Ss=new Ln,ri=new ee,pa=new k,ur=new k,np=new k,ip=new Ln,Uh=new k(1,0,0),Fh=new k(0,1,0),Oh=new k(0,0,1),Bh={type:"added"},sp={type:"removed"},bs={type:"childadded",child:null},Yo={type:"childremoved",child:null};class Se extends di{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();let t=new k,e=new Rn,n=new Ln,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new kt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)pa.copy(t);else pa.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ri.lookAt(ur,pa,this.up);else ri.lookAt(pa,ur,this.up);if(this.quaternion.setFromRotationMatrix(ri),i)ri.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(ri),this.quaternion.premultiply(Ss.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),bs.child=t,this.dispatchEvent(bs),bs.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld);return t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),p=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(p.length>0)n.nodes=p}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Se.DEFAULT_UP=new k(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class te extends Se{constructor(){super();this.isGroup=!0,this.type="Group"}}var rp={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let A=e.getJointPose(g,n),m=this._getHandJoint(l,g);if(A!==null)m.matrix.fromArray(A.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=A.radius;m.visible=A!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,p=0.005;if(l.inputState.pinching&&d>u+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(rp)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Zo(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=$f(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Zo(r,s,t+0.3333333333333333),this.g=Zo(r,s,t),this.b=Zo(r,s,t-0.3333333333333333)}return qt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Dt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=rd[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Dt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return qt.workingToColorSpace($e.copy(this),t),Math.round($t($e.r*255,0,255))*65536+Math.round($t($e.g*255,0,255))*256+Math.round($t($e.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace($e.copy(this),e);let{r:n,g:i,b:s}=$e,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t="srgb"){qt.workingToColorSpace($e.copy(this),t);let{r:e,g:n,b:i}=$e;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(ma);let n=Go(wi.h,ma.h,e),i=Go(wi.s,ma.s,e),s=Go(wi.l,ma.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var $e=new Et;Et.NAMES=rd;class Or{constructor(t,e=0.00025){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new Or(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Br extends Se{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var En=new k,ai=new k,$o=new k,oi=new k,Ts=new k,ws=new k,zh=new k,Jo=new k,Ko=new k,Qo=new k,jo=new we,tl=new we,el=new we;class fn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){En.subVectors(i,e),ai.subVectors(n,e),$o.subVectors(t,e);let r=En.dot(En),a=En.dot(ai),o=En.dot($o),l=ai.dot(ai),c=ai.dot($o),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,p=(r*c-a*o)*d;return s.set(1-u-p,p,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,oi)===null)return!1;return oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,oi)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,oi.x),o.addScaledVector(r,oi.y),o.addScaledVector(a,oi.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return jo.setScalar(0),tl.setScalar(0),el.setScalar(0),jo.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,n),el.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(jo,s.x),r.addScaledVector(tl,s.y),r.addScaledVector(el,s.z),r}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),ai.subVectors(t,e),En.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),En.cross(ai).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Ts.subVectors(i,n),ws.subVectors(s,n),Jo.subVectors(t,n);let o=Ts.dot(Jo),l=ws.dot(Jo);if(o<=0&&l<=0)return e.copy(n);Ko.subVectors(t,i);let c=Ts.dot(Ko),h=ws.dot(Ko);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Ts,r);Qo.subVectors(t,s);let u=Ts.dot(Qo),p=ws.dot(Qo);if(p>=0&&u<=p)return e.copy(s);let g=u*l-o*p;if(g<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(ws,a);let A=c*p-u*h;if(A<=0&&h-c>=0&&u-p>=0)return zh.subVectors(s,i),a=(h-c)/(h-c+(u-p)),e.copy(i).addScaledVector(zh,a);let m=1/(A+g+d);return r=g*m,a=d*m,e.copy(n).addScaledVector(Ts,r).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,An);else An.fromBufferAttribute(s,r);An.applyMatrix4(t.matrixWorld),this.expandByPoint(An)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();ga.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();ga.copy(n.boundingBox)}ga.applyMatrix4(t.matrixWorld),this.union(ga)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),xa.subVectors(this.max,dr),Es.subVectors(t.a,dr),As.subVectors(t.b,dr),Rs.subVectors(t.c,dr),Ei.subVectors(As,Es),Ai.subVectors(Rs,As),Bi.subVectors(Es,Rs);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Bi.z,Bi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Bi.z,0,-Bi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Bi.y,Bi.x,0];if(!nl(e,Es,As,Rs,xa))return!1;if(e=[1,0,0,0,1,0,0,0,1],!nl(e,Es,As,Rs,xa))return!1;return _a.crossVectors(Ei,Ai),e=[_a.x,_a.y,_a.z],nl(e,Es,As,Rs,xa)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(An).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var li=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,ga=new fi,Es=new k,As=new k,Rs=new k,Ei=new k,Ai=new k,Bi=new k,dr=new k,xa=new k,_a=new k,zi=new k;function nl(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){zi.fromArray(t,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=n.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ne=new k,va=new wt,ap=0;class ze extends di{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Vn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=pe(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Vn(e,this.array);return e}setX(t,e){if(this.normalized)e=pe(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Vn(e,this.array);return e}setY(t,e){if(this.normalized)e=pe(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Vn(e,this.array);return e}setZ(t,e){if(this.normalized)e=pe(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Vn(e,this.array);return e}setW(t,e){if(this.normalized)e=pe(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=pe(e,this.array),n=pe(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),s=pe(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class so extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ro extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}var op=new fi,fr=new k,il=new k;class pi{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else op.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(il)),this.expandByPoint(fr.copy(t.center).sub(il));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var lp=0,_n=new ee,sl=new Se,Cs=new k,dn=new fi,pr=new fi,Ge=new k;class Re extends di{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Yf(t))?ro:so)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new fi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(dn.setFromBufferAttribute(s),this.morphTargetsRelative)Ge.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ge);else this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new pi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(pr.setFromBufferAttribute(a),this.morphTargetsRelative)Ge.addVectors(dn.min,pr.min),dn.expandByPoint(Ge),Ge.addVectors(dn.max,pr.max),dn.expandByPoint(Ge);else dn.expandByPoint(pr.min),dn.expandByPoint(pr.max)}dn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ge.fromBufferAttribute(a,l),o)Cs.fromBufferAttribute(t,l),Ge.add(Cs);i=Math.max(i,n.distanceToSquared(Ge))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let R=0;R<n.count;R++)a[R]=new k,o[R]=new k;let l=new k,c=new k,h=new k,d=new wt,u=new wt,p=new wt,g=new k,A=new k;function m(R,x,M){l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,R),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,M),c.sub(l),h.sub(l),u.sub(d),p.sub(d);let H=1/(u.x*p.y-p.x*u.y);if(!isFinite(H))return;g.copy(c).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(H),A.copy(h).multiplyScalar(u.x).addScaledVector(c,-p.x).multiplyScalar(H),a[R].add(g),a[x].add(g),a[M].add(g),o[R].add(A),o[x].add(A),o[M].add(A)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let R=0,x=f.length;R<x;++R){let M=f[R],H=M.start,L=M.count;for(let S=H,P=H+L;S<P;S+=3)m(t.getX(S+0),t.getX(S+1),t.getX(S+2))}let C=new k,T=new k,_=new k,b=new k;function I(R){_.fromBufferAttribute(i,R),b.copy(_);let x=a[R];C.copy(x),C.sub(_.multiplyScalar(_.dot(x))).normalize(),T.crossVectors(b,x);let H=T.dot(o[R])<0?-1:1;r.setXYZW(R,C.x,C.y,C.z,H)}for(let R=0,x=f.length;R<x;++R){let M=f[R],H=M.start,L=M.count;for(let S=H,P=H+L;S<P;S+=3)I(t.getX(S+0)),I(t.getX(S+1)),I(t.getX(S+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new k,s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),g=t.getX(d+1),A=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,A),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,p=0;for(let g=0,A=o.length;g<A;g++){if(a.isInterleavedBufferAttribute)u=o[g]*a.data.stride+a.offset;else u=o[g]*c;for(let m=0;m<c;m++)d[p++]=l[u++]}return new ze(d,c,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Re,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ao{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Ci();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Ci();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}var en=new k;class ks{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=Vn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=pe(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=pe(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=pe(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=pe(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=pe(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=Vn(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=Vn(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=Vn(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=Vn(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=pe(e,this.array),n=pe(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),s=pe(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var rl=new k,cp=new k,hp=new kt;class Gn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=rl.subVectors(n,e).cross(cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(rl),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hp.getNormalMatrix(t),i=this.coplanarPoint(rl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var up=0;class qn extends di{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Et().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new Gn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new wt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class Qi extends qn{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Is,mr=new k,Ps=new k,Ls=new k,Ns=new wt,gr=new wt,ad=new ee,ya=new k,xr=new k,Ma=new k,kh=new wt,al=new wt,Hh=new wt;class qs extends Se{constructor(t=new Qi){super();if(this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Re;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new ao(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new ks(n,3,0,!1)),Is.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new wt(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Ps.setFromMatrixScale(this.matrixWorld),ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Ps.multiplyScalar(-Ls.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Sa(ya.set(-0.5,-0.5,0),Ls,r,Ps,i,s),Sa(xr.set(0.5,-0.5,0),Ls,r,Ps,i,s),Sa(Ma.set(0.5,0.5,0),Ls,r,Ps,i,s),kh.set(0,0),al.set(1,0),Hh.set(1,1);let a=t.ray.intersectTriangle(ya,xr,Ma,!1,mr);if(a===null){if(Sa(xr.set(-0.5,0.5,0),Ls,r,Ps,i,s),al.set(0,1),a=t.ray.intersectTriangle(ya,Ma,xr,!1,mr),a===null)return}let o=t.ray.origin.distanceTo(mr);if(o<t.near||o>t.far)return;e.push({distance:o,point:mr.clone(),uv:fn.getInterpolation(mr,ya,xr,Ma,kh,al,Hh,new wt),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Sa(t,e,n,i,s,r){if(Ns.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)gr.x=r*Ns.x-s*Ns.y,gr.y=s*Ns.x+r*Ns.y;else gr.copy(Ns);t.copy(e),t.x+=gr.x,t.y+=gr.y,t.applyMatrix4(ad)}var ci=new k,ol=new k,ba=new k,Ta=new k;class zr{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){ol.copy(t).add(e).multiplyScalar(0.5),ba.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(ol);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(ba),a=Ta.dot(this.direction),o=-Ta.dot(ba),l=Ta.lengthSq(),c=Math.abs(1-r*r),h,d,u,p;if(c>0)if(h=r*o-a,d=r*a-o,p=s*c,h>=0)if(d>=-p)if(d<=p){let g=1/c;h*=g,d*=g,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else if(d<=-p)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else if(d<=p)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(ol).addScaledVector(ba,d);return u}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,o=a.x,l=a.y,c=a.z,h=t.x-r.x,d=t.y-r.y,u=t.z-r.z,p=e.x-r.x,g=e.y-r.y,A=e.z-r.z,m=n.x-r.x,f=n.y-r.y,C=n.z-r.z,T=Math.abs(o),_=Math.abs(l),b=Math.abs(c),I,R,x,M,H,L,S,P,w,D,z,N;if(T>=_&&T>=b)if(x=o,L=h,w=p,N=m,o>=0)I=l,R=c,M=d,H=u,S=g,P=A,D=f,z=C;else I=c,R=l,M=u,H=d,S=A,P=g,D=C,z=f;else if(_>=b)if(x=l,L=d,w=g,N=f,l>=0)I=c,R=o,M=u,H=h,S=A,P=p,D=C,z=m;else I=o,R=c,M=h,H=u,S=p,P=A,D=m,z=C;else if(x=c,L=u,w=A,N=C,c>=0)I=o,R=l,M=h,H=d,S=p,P=g,D=m,z=f;else I=l,R=o,M=d,H=h,S=g,P=p,D=f,z=m;if(x===0)return null;let X=I/x,G=R/x,Y=1/x,tt=M-X*L,gt=H-G*L,St=S-X*w,Jt=P-G*w,Gt=D-X*N,Q=z-G*N,st=Gt*Jt-Q*St,at=tt*Q-gt*Gt,Lt=St*gt-Jt*tt;if(i){if(st<0||at<0||Lt<0)return null}else if((st<0||at<0||Lt<0)&&(st>0||at>0||Lt>0))return null;let Ot=st+at+Lt;if(Ot===0)return null;let It=Y*(st*L+at*w+Lt*N);if(Ot>0?It<0:It>0)return null;return this.at(It/Ot,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De extends qn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Gh=new ee,ki=new zr,wa=new pi,Vh=new k,Ea=new k,Aa=new k,Ra=new k,ll=new k,Ca=new k,Wh=new k,Ia=new k;class Ut extends Se{constructor(t=new Re,e=new De){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(ll.fromBufferAttribute(h,t),r)Ca.addScaledVector(ll,c);else Ca.addScaledVector(ll.sub(e),c)}e.add(Ca)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(wa.copy(n.boundingSphere),wa.applyMatrix4(s),ki.copy(t.ray).recast(t.near),wa.containsPoint(ki.origin)===!1){if(ki.intersectSphere(wa,Vh)===null)return;if(ki.origin.distanceToSquared(Vh)>(t.far-t.near)**2)return}if(Gh.copy(s).invert(),ki.copy(t.ray).applyMatrix4(Gh),n.boundingBox!==null){if(ki.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,ki)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){let A=d[p],m=r[A.materialIndex],f=Math.max(A.start,u.start),C=Math.min(a.count,Math.min(A.start+A.count,u.start+u.count));for(let T=f,_=C;T<_;T+=3){let b=a.getX(T),I=a.getX(T+1),R=a.getX(T+2);if(i=Pa(this,m,t,n,l,c,h,b,I,R),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=A.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let A=p,m=g;A<m;A+=3){let f=a.getX(A),C=a.getX(A+1),T=a.getX(A+2);if(i=Pa(this,r,t,n,l,c,h,f,C,T),i)i.faceIndex=Math.floor(A/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){let A=d[p],m=r[A.materialIndex],f=Math.max(A.start,u.start),C=Math.min(o.count,Math.min(A.start+A.count,u.start+u.count));for(let T=f,_=C;T<_;T+=3){let b=T,I=T+1,R=T+2;if(i=Pa(this,m,t,n,l,c,h,b,I,R),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=A.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let A=p,m=g;A<m;A+=3){let f=A,C=A+1,T=A+2;if(i=Pa(this,r,t,n,l,c,h,f,C,T),i)i.faceIndex=Math.floor(A/3),e.push(i)}}}}function dp(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Ia.copy(o),Ia.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ia);if(c<n.near||c>n.far)return null;return{distance:c,point:Ia.clone(),object:t}}function Pa(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Ea),t.getVertexPosition(l,Aa),t.getVertexPosition(c,Ra);let h=dp(t,e,n,i,Ea,Aa,Ra,Wh);if(h){let d=new k;if(fn.getBarycoord(Wh,Ea,Aa,Ra,d),s)h.uv=fn.getInterpolatedAttribute(s,o,l,c,d,new wt);if(r)h.uv1=fn.getInterpolatedAttribute(r,o,l,c,d,new wt);if(a){if(h.normal=fn.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new k,materialIndex:0};fn.getNormal(Ea,Aa,Ra,u.normal),h.face=u,h.barycoord=d}return h}class oo extends qe{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,d){super(null,r,a,o,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr extends ze{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Ds=new ee,Xh=new ee,La=[],qh=new fi,fp=new ee,_r=new Ut,vr=new pi;class Ys extends Ut{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fp)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new fi;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),qh.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new pi;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),vr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(vr)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Ds),Xh.multiplyMatrices(n,Ds),_r.matrixWorld=Xh,_r.raycast(t,La);for(let r=0,a=La.length;r<a;r++){let o=La[r];o.instanceId=s,o.object=this,e.push(o)}La.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new oo(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Hi=new pi,pp=new wt(0.5,0.5),Na=new k;class kr{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,s=new Gn,r=new Gn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],A=s[10],m=s[11],f=s[12],C=s[13],T=s[14],_=s[15];if(i[0].setComponents(l-r,u-c,m-p,_-f).normalize(),i[1].setComponents(l+r,u+c,m+p,_+f).normalize(),i[2].setComponents(l+a,u+h,m+g,_+C).normalize(),i[3].setComponents(l-a,u-h,m-g,_-C).normalize(),n)i[4].setComponents(o,d,A,T).normalize(),i[5].setComponents(l-o,u-d,m-A,_-T).normalize();else if(i[4].setComponents(l-o,u-d,m-A,_-T).normalize(),e===2000)i[5].setComponents(l+o,u+d,m+A,_+T).normalize();else if(e===2001)i[5].setComponents(o,d,A,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=pp.distanceTo(t.center);return Hi.radius=0.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Na.x=i.normal.x>0?t.max.x:t.min.x,Na.y=i.normal.y>0?t.max.y:t.min.y,Na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hr extends qn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var ka=new k,Ha=new k,Yh=new ee,yr=new zr,Da=new pi,cl=new k,Zh=new k;class oc extends Se{constructor(t=new Re,e=new Hr){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ka.fromBufferAttribute(e,i-1),Ha.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ka.distanceTo(Ha);t.setAttribute("lineDistance",new _e(n,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=s,t.ray.intersectsSphere(Da)===!1)return;Yh.copy(i).invert(),yr.copy(t.ray).applyMatrix4(Yh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,A=p-1;g<A;g+=l){let m=c.getX(g),f=c.getX(g+1),C=Ua(this,t,yr,o,m,f,g);if(C)e.push(C)}if(this.isLineLoop){let g=c.getX(p-1),A=c.getX(u),m=Ua(this,t,yr,o,g,A,p-1);if(m)e.push(m)}}else{let u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,A=p-1;g<A;g+=l){let m=Ua(this,t,yr,o,g,g+1,g);if(m)e.push(m)}if(this.isLineLoop){let g=Ua(this,t,yr,o,p-1,u,p-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ua(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(ka.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),n.distanceSqToSegment(ka,Ha,cl,Zh)>i)return;cl.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(cl);if(c<e.near||c>e.far)return;return{distance:c,point:Zh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var $h=new k,Jh=new k;class lo extends oc{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)$h.fromBufferAttribute(e,i),Jh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$h.distanceTo(Jh);t.setAttribute("lineDistance",new _e(n,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lc extends qn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Kh=new ee,dl=new zr,Fa=new pi,Oa=new k;class co extends Se{constructor(t=new Re,e=new lc){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;Kh.copy(i).invert(),dl.copy(t.ray).applyMatrix4(Kh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let p=d,g=u;p<g;p++){let A=l.getX(p);Oa.fromBufferAttribute(h,A),Qh(Oa,A,o,i,t,e,this)}}else{let d=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let p=d,g=u;p<g;p++)Oa.fromBufferAttribute(h,p),Qh(Oa,p,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qh(t,e,n,i,s,r,a){let o=dl.distanceSqToPoint(t);if(o<n){let l=new k;dl.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ho extends qe{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uo extends qe{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji extends qe{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class cc extends ji{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fo extends qe{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ft extends Re{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=0,u=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2));function p(g,A,m,f,C,T,_,b,I,R,x){let M=T/I,H=_/R,L=T/2,S=_/2,P=b/2,w=I+1,D=R+1,z=0,N=0,X=new k;for(let G=0;G<D;G++){let Y=G*H-S;for(let tt=0;tt<w;tt++){let gt=tt*M-L;X[g]=gt*f,X[A]=Y*C,X[m]=P,l.push(X.x,X.y,X.z),X[g]=0,X[A]=0,X[m]=b>0?1:-1,c.push(X.x,X.y,X.z),h.push(tt/I),h.push(1-G/R),z+=1}}for(let G=0;G<R;G++)for(let Y=0;Y<I;Y++){let tt=d+Y+w*G,gt=d+Y+w*(G+1),St=d+(Y+1)+w*(G+1),Jt=d+(Y+1)+w*G;o.push(tt,gt,Jt),o.push(gt,St,Jt),N+=6}a.addGroup(u,N,x),u+=N,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ue extends Re{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],p=0,g=[],A=n/2,m=0;if(f(),r===!1){if(t>0)C(!0);if(e>0)C(!1)}this.setIndex(c),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(u,2));function f(){let T=new k,_=new k,b=0,I=(e-t)/n;for(let R=0;R<=s;R++){let x=[],M=R/s,H=M*(e-t)+t;for(let L=0;L<=i;L++){let S=L/i,P=S*o+a,w=Math.sin(P),D=Math.cos(P);_.x=H*w,_.y=-M*n+A,_.z=H*D,h.push(_.x,_.y,_.z),T.set(w,I,D).normalize(),d.push(T.x,T.y,T.z),u.push(S,1-M),x.push(p++)}g.push(x)}for(let R=0;R<i;R++)for(let x=0;x<s;x++){let M=g[x][R],H=g[x+1][R],L=g[x+1][R+1],S=g[x][R+1];if(t>0||x!==0)c.push(M,H,S),b+=3;if(e>0||x!==s-1)c.push(H,L,S),b+=3}l.addGroup(m,b,0),m+=b}function C(T){let _=p,b=new wt,I=new k,R=0,x=T===!0?t:e,M=T===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,A*M,0),d.push(0,M,0),u.push(0.5,0.5),p++;let H=p;for(let L=0;L<=i;L++){let P=L/i*o+a,w=Math.cos(P),D=Math.sin(P);I.x=x*D,I.y=A*M,I.z=x*w,h.push(I.x,I.y,I.z),d.push(0,M,0),b.x=w*0.5+0.5,b.y=D*0.5*M+0.5,u.push(b.x,b.y),p++}for(let L=0;L<i;L++){let S=_+L,P=H+L;if(T===!0)c.push(P,P+1,S);else c.push(P+1,P,S);R+=3}l.addGroup(m,R,T===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class po extends Re{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(s.slice(),3)),this.setAttribute("uv",new _e(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(f){let C=new k,T=new k,_=new k;for(let b=0;b<e.length;b+=3)u(e[b+0],C),u(e[b+1],T),u(e[b+2],_),o(C,T,_,f)}function o(f,C,T,_){let b=_+1,I=[];for(let R=0;R<=b;R++){I[R]=[];let x=f.clone().lerp(T,R/b),M=C.clone().lerp(T,R/b),H=b-R;for(let L=0;L<=H;L++)if(L===0&&R===b)I[R][L]=x;else I[R][L]=x.clone().lerp(M,L/H)}for(let R=0;R<b;R++)for(let x=0;x<2*(b-R)-1;x++){let M=Math.floor(x/2);if(x%2===0)d(I[R][M+1]),d(I[R+1][M]),d(I[R][M]);else d(I[R][M+1]),d(I[R+1][M+1]),d(I[R+1][M])}}function l(f){let C=new k;for(let T=0;T<s.length;T+=3)C.x=s[T+0],C.y=s[T+1],C.z=s[T+2],C.normalize().multiplyScalar(f),s[T+0]=C.x,s[T+1]=C.y,s[T+2]=C.z}function c(){let f=new k;for(let C=0;C<s.length;C+=3){f.x=s[C+0],f.y=s[C+1],f.z=s[C+2];let T=A(f)/2/Math.PI+0.5,_=m(f)/Math.PI+0.5;r.push(T,1-_)}p(),h()}function h(){for(let f=0;f<r.length;f+=6){let C=r[f+0],T=r[f+2],_=r[f+4],b=Math.max(C,T,_),I=Math.min(C,T,_);if(b>0.9&&I<0.1){if(C<0.2)r[f+0]+=1;if(T<0.2)r[f+2]+=1;if(_<0.2)r[f+4]+=1}}}function d(f){s.push(f.x,f.y,f.z)}function u(f,C){let T=f*3;C.x=t[T+0],C.y=t[T+1],C.z=t[T+2]}function p(){let f=new k,C=new k,T=new k,_=new k,b=new wt,I=new wt,R=new wt;for(let x=0,M=0;x<s.length;x+=9,M+=6){f.set(s[x+0],s[x+1],s[x+2]),C.set(s[x+3],s[x+4],s[x+5]),T.set(s[x+6],s[x+7],s[x+8]),b.set(r[M+0],r[M+1]),I.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),_.copy(f).add(C).add(T).divideScalar(3);let H=A(_);g(b,M+0,f,H),g(I,M+2,C,H),g(R,M+4,T,H)}}function g(f,C,T,_){if(_<0&&f.x===1)r[C]=f.x-1;if(T.x===0&&T.z===0)r[C]=_/2/Math.PI+0.5}function A(f){return Math.atan2(f.z,-f.x)}function m(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.vertices,t.indices,t.radius,t.detail)}}class Gr extends po{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gr(t.radius,t.detail)}}class Ke extends Re{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],p=[],g=[],A=[];for(let m=0;m<c;m++){let f=m*d-r;for(let C=0;C<l;C++){let T=C*h-s;p.push(T,-f,0),g.push(0,0,1),A.push(C/a),A.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let C=f+l*m,T=f+l*(m+1),_=f+1+l*(m+1),b=f+1+l*m;u.push(C,T,b),u.push(T,_,b)}this.setIndex(u),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nn extends Re{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],h=new k,d=new k,u=[],p=[],g=[],A=[];for(let m=0;m<=n;m++){let f=[],C=m/n,T=r+C*a,_=t*Math.cos(T),b=Math.sqrt(t*t-_*_),I=0;if(m===0&&r===0)I=0.5/e;else if(m===n&&o===Math.PI)I=-0.5/e;for(let R=0;R<=e;R++){let x=R/e,M=i+x*s;h.x=-b*Math.cos(M),h.y=_,h.z=b*Math.sin(M),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),A.push(x+I,1-C),f.push(l++)}c.push(f)}for(let m=0;m<n;m++)for(let f=0;f<e;f++){let C=c[m][f+1],T=c[m][f],_=c[m+1][f],b=c[m+1][f+1];if(m!==0||r>0)u.push(C,T,b);if(m!==n-1||o<Math.PI)u.push(T,_,b)}this.setIndex(u),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ts(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(jh(s))if(s.isRenderTargetTexture)Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(jh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Qe(t){let e={};for(let n=0;n<t.length;n++){let i=ts(t[n]);for(let s in i)e[s]=i[s]}return e}function jh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function mp(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hc(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return qt.workingColorSpace}var mi={clone:ts,merge:Qe},gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ee extends qn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(i.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Vr extends Ee{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yn extends qn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uc extends qn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dc extends qn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Us(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function hl(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class es{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class fc extends es{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),g=p*p,A=g*p,m=-d*A+2*d*g-d*p,f=(1+d)*A+(-1.5-2*d)*g+(-0.5+d)*p+1,C=(-1-u)*A+(1.5+u)*g+0.5*p,T=u*A-u*g;for(let _=0;_!==a;++_)s[_]=m*r[c+_]+f*r[l+_]+C*r[o+_]+T*r[h+_];return s}}class pc extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[o+d]*c;return s}}class mc extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class gc extends es{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(n-e)/(i-e),g=1-p;for(let A=0;A!==a;++A)s[A]=r[l+A]*g+r[o+A]*p;return s}let d=a*2,u=t-1;for(let p=0;p!==a;++p){let g=r[l+p],A=r[o+p],m=u*d+p*2,f=h[m],C=h[m+1],T=t*d+p*2,_=c[T],b=c[T+1],I=vp(n,e,f,_,i);s[p]=od(I,g,C,b,A)}return s}}function od(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function _p(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function vp(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=od(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=_p(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Mn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(hl(t.settings))n.settings={inTangents:Us(t.settings.inTangents,Array),outTangents:Us(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gc(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(hl(this.settings))tu(this.settings.inTangents,t),tu(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Zf(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let g=e[h+p];if(g!==e[d+p]||g!==e[u+p]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,hl(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function tu(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=2301;class ns extends Mn{constructor(t,e,n){super(t,e,n)}}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=2300;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class xc extends Mn{constructor(t,e,n,i){super(t,e,n,i)}}xc.prototype.ValueTypeName="color";class _c extends Mn{constructor(t,e,n,i){super(t,e,n,i)}}_c.prototype.ValueTypeName="number";class vc extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Ln.slerpFlat(s,0,r,l-a,r,l,o);return s}}class mo extends Mn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}}mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends Mn{constructor(t,e,n){super(t,e,n)}}is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=2300;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class yc extends Mn{constructor(t,e,n,i){super(t,e,n,i)}}yc.prototype.ValueTypeName="vector";class Mc{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var ld=new Mc;class Sc{constructor(t){if(this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zs extends Se{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wr extends Zs{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var ul=new ee,eu=new k,nu=new k;class Xr{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ul,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Ba=new k,za=new Ln,Hn=new k;class go extends Se{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,za,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ba,za,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ba,za,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ba,za,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Ri=new k,iu=new wt,su=new wt;class Ve extends go{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ho*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(Ho*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ho*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class cd extends Xr{constructor(){super(new Ve(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=br*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;if(n!==e.fov||i!==e.aspect||s!==e.far)e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix();super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Li extends Zs{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new cd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);if(e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture)e.object.map=this.map.toJSON(t).uuid;return e.object.shadow=this.shadow.toJSON(),e}}class hd extends Xr{constructor(){super(new Ve(90,1,0.5,500));this.isPointLightShadow=!0}}class Dn extends Zs{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ss extends go{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class ud extends Xr{constructor(){super(new ss(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class xo extends Zs{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ud}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var Fs=-90,Os=1;class bc extends Se{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ve(Fs,Os,t,e);i.layers=this.layers,this.add(i);let s=new Ve(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Fs,Os,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Fs,Os,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Fs,Os,t,e);o.layers=this.layers,this.add(o);let l=new Ve(Fs,Os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let A=!1;if(t.isWebGLRenderer===!0)A=t.state.buffers.depth.getReversed();else A=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),A&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),A&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),A&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),A&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),A&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),A&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Tc extends Ve{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class _o{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=yp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function yp(){if(this._document.hidden===!1)this.reset()}var wc="\\[\\]\\.:\\/",Mp=new RegExp("["+wc+"]","g"),Ec="[^"+wc+"]",Sp="[^"+wc.replace("\\.","")+"]",bp=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Tp=/(WCOD+)?/.source.replace("WCOD",Sp),wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Ap=new RegExp("^"+bp+Tp+wp+Ep+"$"),Rp=["material","materials","bones","map"];class dd{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new he(t,e,n);else return new he.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mp,"")}static parseTrackName(t){let e=Ap.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Rp.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(!t)t=he.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=dd;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);class Ac{static{Ac.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function Rc(t,e,n,i){let s=Cp(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Cp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Dt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Dd(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Np(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:h,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],A=d[p];if(A.start<=g.start+g.count+1)g.count=Math.max(g.count,A.start+A.count-g.start);else++u,d[u]=A}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let A=d[p];t.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Dp,alphahash_pars_fragment:Up,alphamap_fragment:Fp,alphamap_pars_fragment:Op,alphatest_fragment:Bp,alphatest_pars_fragment:zp,aomap_fragment:kp,aomap_pars_fragment:Hp,batching_pars_vertex:Gp,batching_vertex:Vp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Qp,color_fragment:jp,color_pars_fragment:tm,color_pars_vertex:em,color_vertex:nm,common:im,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:am,displacementmap_vertex:om,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Em,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:ym,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Tm,lights_pars_begin:wm,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Im,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Nm,lights_fragment_maps:Dm,lights_fragment_end:Um,lightprobes_pars_fragment:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:km,map_fragment:Hm,map_pars_fragment:Gm,map_particle_fragment:Vm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:$m,morphtarget_pars_vertex:Jm,morphtarget_vertex:Km,normal_fragment_begin:Qm,normal_fragment_maps:jm,normal_pars_fragment:t0,normal_pars_vertex:e0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:x0,shadowmap_vertex:_0,shadowmask_pars_fragment:v0,skinbase_vertex:y0,skinning_pars_vertex:M0,skinning_vertex:S0,skinnormal_vertex:b0,specularmap_fragment:T0,specularmap_pars_fragment:w0,tonemapping_fragment:E0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:I0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:N0,background_vert:D0,background_frag:U0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:z0,depth_vert:k0,depth_frag:H0,distance_vert:G0,distance_frag:V0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:$0,meshlambert_vert:J0,meshlambert_frag:K0,meshmatcap_vert:Q0,meshmatcap_frag:j0,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},dt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new wt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Zn={basic:{uniforms:Qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Qe([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Qe([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Qe([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Qe([dt.common,dt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Qe([dt.lights,dt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Zn.physical={uniforms:Qe([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var vo={r:0,b:0,g:0},pg=new ee,Ud=new kt;Ud.set(-1,0,0,0,1,0,0,0,1);function mg(t,e,n,i,s,r){let a=new Et(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(C){let T=C.isScene===!0?C.background:null;if(T&&T.isTexture){let _=C.backgroundBlurriness>0;T=e.get(T,_)}return T}function g(C){let T=!1,_=p(C);if(_===null)m(a,o);else if(_&&_.isColor)m(_,1),T=!0;let b=t.xr.getEnvironmentBlendMode();if(b==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(b==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||T)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function A(C,T){let _=p(T);if(_&&(_.isCubeTexture||_.mapping===Pr)){if(c===void 0)c=new Ut(new Ft(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:ts(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Ud);if(c.material.toneMapped=qt.getTransfer(_.colorSpace)!==ue,h!==_||d!==_.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=_,d=_.version,u=t.toneMapping;c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)}else if(_&&_.isTexture){if(l===void 0)l=new Ut(new Ke(2,2),new Ee({name:"BackgroundMaterial",uniforms:ts(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qt.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0)_.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(_.matrix),h!==_||d!==_.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=_,d=_.version,u=t.toneMapping;l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)}}function m(C,T){C.getRGB(vo,hc(t)),n.buffers.color.setClear(vo.r,vo.g,vo.b,T,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(C,T=1){a.set(C),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,m(a,o)},render:g,addToRenderList:A,dispose:f}}function gg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,S,P,w,D){let z=!1,N=d(L,w,P,S);if(r!==N)r=N,c(r.object);if(z=p(L,w,P,D),z)g(L,w,P,D);if(D!==null)e.update(D,t.ELEMENT_ARRAY_BUFFER);if(z||a){if(a=!1,_(L,S,P,w),D!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer)}}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function d(L,S,P,w){let D=w.wireframe===!0,z=i[S.id];if(z===void 0)z={},i[S.id]=z;let N=L.isInstancedMesh===!0?L.id:0,X=z[N];if(X===void 0)X={},z[N]=X;let G=X[P.id];if(G===void 0)G={},X[P.id]=G;let Y=G[D];if(Y===void 0)Y=u(l()),G[D]=Y;return Y}function u(L){let S=[],P=[],w=[];for(let D=0;D<n;D++)S[D]=0,P[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:P,attributeDivisors:w,object:L,attributes:{},index:null}}function p(L,S,P,w){let D=r.attributes,z=S.attributes,N=0,X=P.getAttributes();for(let G in X)if(X[G].location>=0){let tt=D[G],gt=z[G];if(gt===void 0){if(G==="instanceMatrix"&&L.instanceMatrix)gt=L.instanceMatrix;if(G==="instanceColor"&&L.instanceColor)gt=L.instanceColor}if(tt===void 0)return!0;if(tt.attribute!==gt)return!0;if(gt&&tt.data!==gt.data)return!0;N++}if(r.attributesNum!==N)return!0;if(r.index!==w)return!0;return!1}function g(L,S,P,w){let D={},z=S.attributes,N=0,X=P.getAttributes();for(let G in X)if(X[G].location>=0){let tt=z[G];if(tt===void 0){if(G==="instanceMatrix"&&L.instanceMatrix)tt=L.instanceMatrix;if(G==="instanceColor"&&L.instanceColor)tt=L.instanceColor}let gt={};if(gt.attribute=tt,tt&&tt.data)gt.data=tt.data;D[G]=gt,N++}r.attributes=D,r.attributesNum=N,r.index=w}function A(){let L=r.newAttributes;for(let S=0,P=L.length;S<P;S++)L[S]=0}function m(L){f(L,0)}function f(L,S){let{newAttributes:P,enabledAttributes:w,attributeDivisors:D}=r;if(P[L]=1,w[L]===0)t.enableVertexAttribArray(L),w[L]=1;if(D[L]!==S)t.vertexAttribDivisor(L,S),D[L]=S}function C(){let{newAttributes:L,enabledAttributes:S}=r;for(let P=0,w=S.length;P<w;P++)if(S[P]!==L[P])t.disableVertexAttribArray(P),S[P]=0}function T(L,S,P,w,D,z,N){if(N===!0)t.vertexAttribIPointer(L,S,P,D,z);else t.vertexAttribPointer(L,S,P,w,D,z)}function _(L,S,P,w){A();let D=w.attributes,z=P.getAttributes(),N=S.defaultAttributeValues;for(let X in z){let G=z[X];if(G.location>=0){let Y=D[X];if(Y===void 0){if(X==="instanceMatrix"&&L.instanceMatrix)Y=L.instanceMatrix;if(X==="instanceColor"&&L.instanceColor)Y=L.instanceColor}if(Y!==void 0){let{normalized:tt,itemSize:gt}=Y,St=e.get(Y);if(St===void 0)continue;let{buffer:Jt,type:Gt,bytesPerElement:Q}=St,st=Gt===t.INT||Gt===t.UNSIGNED_INT||Y.gpuType===xl;if(Y.isInterleavedBufferAttribute){let at=Y.data,Lt=at.stride,Ot=Y.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)f(G.location+It,at.meshPerAttribute);if(L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=at.meshPerAttribute*at.count}else for(let It=0;It<G.locationSize;It++)m(G.location+It);t.bindBuffer(t.ARRAY_BUFFER,Jt);for(let It=0;It<G.locationSize;It++)T(G.location+It,gt/G.locationSize,Gt,tt,Lt*Q,(Ot+gt/G.locationSize*It)*Q,st)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)f(G.location+at,Y.meshPerAttribute);if(L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=Y.meshPerAttribute*Y.count}else for(let at=0;at<G.locationSize;at++)m(G.location+at);t.bindBuffer(t.ARRAY_BUFFER,Jt);for(let at=0;at<G.locationSize;at++)T(G.location+at,gt/G.locationSize,Gt,tt,gt*Q,gt/G.locationSize*at*Q,st)}}else if(N!==void 0){let tt=N[X];if(tt!==void 0)switch(tt.length){case 2:t.vertexAttrib2fv(G.location,tt);break;case 3:t.vertexAttrib3fv(G.location,tt);break;case 4:t.vertexAttrib4fv(G.location,tt);break;default:t.vertexAttrib1fv(G.location,tt)}}}}C()}function b(){M();for(let L in i){let S=i[L];for(let P in S){let w=S[P];for(let D in w){let z=w[D];for(let N in z)h(z[N].object),delete z[N];delete w[D]}}delete i[L]}}function I(L){if(i[L.id]===void 0)return;let S=i[L.id];for(let P in S){let w=S[P];for(let D in w){let z=w[D];for(let N in z)h(z[N].object),delete z[N];delete w[D]}}delete i[L.id]}function R(L){for(let S in i){let P=i[S];for(let w in P){let D=P[w];if(D[L.id]===void 0)continue;let z=D[L.id];for(let N in z)h(z[N].object),delete z[N];delete D[L.id]}}}function x(L){for(let S in i){let P=i[S],w=L.isInstancedMesh===!0?L.id:0,D=P[w];if(D===void 0)continue;for(let z in D){let N=D[z];for(let X in N)h(N[X].object),delete N[X];delete D[z]}if(delete P[w],Object.keys(P).length===0)delete i[S]}}function M(){if(H(),a=!0,r===s)return;r=s,c(r.object)}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:A,enableAttribute:m,disableUnusedAttributes:C}}function xg(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _g(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){if(R!==Xn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(R){let x=R===We&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(R!==Pn&&R!==ui&&!x&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&u===!1)Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),I=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:_,maxSamples:b,samples:I}}function vg(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Gn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let{clippingPlanes:g,clipIntersection:A,clipShadows:m}=d,f=t.get(d);if(!s||g===null||g.length===0||r&&!m)if(r)h(null);else c();else{let C=r?0:i,T=C*4,_=f.clippingState||null;l.value=_,_=h(g,u,T,p);for(let b=0;b!==T;++b)_[b]=n[b];f.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let A=d!==null?d.length:0,m=null;if(A!==0){if(m=l.value,g!==!0||m===null){let f=p+A*4,C=u.matrixWorldInverse;if(o.getNormalMatrix(C),m===null||m.length<f)m=new Float32Array(f);for(let T=0,_=p;T!==A;++T,_+=4)a.copy(d[T]).applyMatrix4(C,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}var Js=4,yg=6,Mg=20,Sg=256,qr=new ss,fd=new Et,Cc=null,Ic=0,Pc=0,Lc=!1,bg=new k,rs=new k;class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=bg}=s;Cc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cc,Ic,Pc),this._renderer.xr.enabled=Lc,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Ws||t.mapping===qi)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Cc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:We,format:Xn,colorSpace:tc,depthBuffer:!1},i=pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=pd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tg(s)),this._blurMaterial=Eg(s,t,e),this._ggxMaterial=wg(s,t,e)}return i}_compileMaterial(t){let e=new Ut(new Re,t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,i,s){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;if(h.getClearColor(fd),h.toneMapping=In,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Ut(new Ft,new De({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,A=g.material,m=!1,f=t.background;if(f){if(f.isColor)A.color.copy(f),t.background=null,m=!0}else A.color.copy(fd),m=!0;for(let C=0;C<6;C++){let T=C%3;if(T===0)o.up.set(0,l[C],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[C],s.y,s.z);else if(T===1)o.up.set(0,0,l[C]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[C],s.z);else o.up.set(0,l[C],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[C]);let _=this._cubeSize;if($s(i,T*_,C>2?_:0,_,_),h.setRenderTarget(i),m)h.render(g,o);h.render(t,o)}h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ws||t.mapping===qi;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=gd();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=md();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;$s(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=l*1.25,u=h*d,{_lodMax:p}=this,g=this._sizeLods[n],A=3*g*(n>p-Js?n-p+Js:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=p-e,$s(s,A,m,3*g,2*g),i.setRenderTarget(s),i.render(a,qr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=p-n,$s(t,A,m,3*g,2*g),i.setRenderTarget(t),i.render(a,qr)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],h=3*c*(i>this._lodMax-Js?i-this._lodMax+Js:0),d=4*(this._cubeSize-c);$s(e,h,d,3*c,2*c),r.setRenderTarget(e),r.render(o,qr)}}function Tg(t){let e=[],n=[],i=t,s=t-Js+1+yg;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),A=new Float32Array(p*u*d);for(let f=0;f<d;f++){let C=f%3*2/3-1,T=f>2?0:-1,_=[C,T,0,C+0.6666666666666666,T,0,C+0.6666666666666666,T+1,0,C,T,0,C+0.6666666666666666,T+1,0,C,T+1,0];g.set(_,p*u*f);for(let b=0;b<u;b++){let I=h[b*2]*2-1,R=h[b*2+1]*2-1;if(f===0)rs.set(1,R,I);else if(f===1)rs.set(-I,1,-R);else if(f===2)rs.set(-I,R,1);else if(f===3)rs.set(-1,R,-I);else if(f===4)rs.set(-I,-1,R);else rs.set(I,R,-1);rs.toArray(A,(f*u+b)*p)}}let m=new Re;if(m.setAttribute("position",new ze(g,p)),m.setAttribute("outputDirection",new ze(A,p)),n.push(new Ut(m,null)),i>Js)i--}return{lodMeshes:n,sizeLods:e}}function pd(t,e,n){let i=new Pe(t,e,n);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function wg(t,e,n){return new Ee({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Eg(t,e,n){return new Ee({name:"SphericalGaussianBlur",defines:{SAMPLES:Mg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function md(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function gd(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bc extends Pe{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ho(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ft(5,5,5),s=new Ee({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:vn});s.uniforms.tEquirect.value=e;let r=new Ut(i,s),a=e.minFilter;if(e.minFilter===Yi)e.minFilter=an;return new bc(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Ag(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){if(u===null||u===void 0)return null;if(p)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ga||p===Va)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let A=new Bc(g.height);return A.fromEquirectangularTexture(t,u),e.set(u,A),u.addEventListener("dispose",c),o(A.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===Ga||p===Va,A=p===Ws||p===qi;if(g||A){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f){if(i===null)i=new Uc(t);return m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let C=u.image;if(g&&C&&C.height>0||A&&C&&l(C)){if(i===null)i=new Uc(t);return m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,p){if(p===Ga)u.mapping=Ws;else if(p===Va)u.mapping=qi;return u}function l(u){let p=0,g=6;for(let A=0;A<g;A++)if(u[A]!==void 0)p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);if(g!==void 0)e.delete(p),g.dispose()}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=n.get(p);if(g!==void 0)n.delete(p),g.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Rg(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Gi("WebGLRenderer: "+i+" extension not supported.");return s}}}function Cg(t,e,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;if(u.index!==null)e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);if(p)e.remove(p),r.delete(u);if(i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0)delete u._maxInstanceCount;n.memory.geometries--}function o(d,u){if(s[u.id]===!0)return u;return u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++,u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,A=0;if(g===void 0)return;if(p!==null){let C=p.array;A=p.version;for(let T=0,_=C.length;T<_;T+=3){let b=C[T+0],I=C[T+1],R=C[T+2];u.push(b,I,I,R,R,b)}}else{let C=g.array;A=g.version;for(let T=0,_=C.length/3-1;T<_;T+=3){let b=T+0,I=T+1,R=T+2;u.push(b,I,I,R,R,b)}}let m=new(g.count>=65535?ro:so)(u,1);m.version=A;let f=r.get(d);if(f)e.remove(f);r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;if(p!==null){if(u.version<p.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ig(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,p){if(p===0)return;t.drawElementsInstanced(i,u,r,d*a,p),n.update(u,i,p)}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let A=0;for(let m=0;m<p;m++)A+=u[m];n.update(A,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Pg(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Lg(t,e,n){let i=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};if(u!==void 0)u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],T=0;if(p===!0)T=1;if(g===!0)T=2;if(A===!0)T=3;let _=o.attributes.position.count*T,b=1;if(_>e.maxTextureSize)b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize;let I=new Float32Array(_*b*4*d),R=new no(I,_,b,d);R.type=ui,R.needsUpdate=!0;let x=T*4;for(let H=0;H<d;H++){let L=m[H],S=f[H],P=C[H],w=_*b*4*H;for(let D=0;D<L.count;D++){let z=D*x;if(p===!0)s.fromBufferAttribute(L,D),I[w+z+0]=s.x,I[w+z+1]=s.y,I[w+z+2]=s.z,I[w+z+3]=0;if(g===!0)s.fromBufferAttribute(S,D),I[w+z+4]=s.x,I[w+z+5]=s.y,I[w+z+6]=s.z,I[w+z+7]=0;if(A===!0)s.fromBufferAttribute(P,D),I[w+z+8]=s.x,I[w+z+9]=s.y,I[w+z+10]=s.z,I[w+z+11]=P.itemSize===4?s.w:1}}u={count:d,texture:R,size:new wt(_,b)},i.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function Ng(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let p=c.skeleton;if(r.get(p)!==h)p.update(),r.set(p,h)}return u}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var Dg={[wr]:"LINEAR_TONE_MAPPING",[Er]:"REINHARD_TONE_MAPPING",[Ar]:"CINEON_TONE_MAPPING",[Xi]:"ACES_FILMIC_TONE_MAPPING",[Cr]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[Rr]:"CUSTOM_TONE_MAPPING"};function Ug(t,e,n,i,s,r){let a=new Pe(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Re;c.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new Vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ut(c,h),u=new ss(-1,1,1,-1,0,1),p=null,g=null,A=!1,m,f=null,C=[],T=!1;this.setSize=function(_,b){if(a.setSize(_,b),o!==null)o.setSize(_,b);if(l!==null)l.setSize(_,b);for(let I=0;I<C.length;I++){let R=C[I];if(R.setSize)R.setSize(_,b)}},this.setEffects=function(_){C=_,T=C.length>0&&C[0].isRenderPass===!0;let{width:b,height:I}=a;if(C.length>0&&o===null)o=new Pe(b,I,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new Pe(b,I,{type:We,depthBuffer:!1,stencilBuffer:!1});for(let R=0;R<C.length;R++){let x=C[R];if(x.setSize)x.setSize(b,I)}},this.begin=function(_,b){if(A)return!1;if(_.toneMapping===In&&C.length===0)return!1;if(f=b,b!==null){let{width:I,height:R}=b;if(a.width!==I||a.height!==R)this.setSize(I,R)}if(T===!1)_.setRenderTarget(a);return m=_.toneMapping,_.toneMapping=In,!0},this.hasRenderPass=function(){return T},this.end=function(_,b){_.toneMapping=m,A=!0;let I=a,R=o;for(let x=0;x<C.length;x++){let M=C[x];if(M.enabled===!1)continue;if(M.render(_,R,I,b),M.needsSwap!==!1)I=R,R=R===o?l:o}if(p!==_.outputColorSpace||g!==_.toneMapping){if(p=_.outputColorSpace,g=_.toneMapping,h.defines={},qt.getTransfer(p)===ue)h.defines.SRGB_TRANSFER="";let x=Dg[g];if(x)h.defines[x]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,_.setRenderTarget(f),_.render(d,u),f=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),h.dispose()}}var Fd=new qe,Fc=new ji(1,1),Od=new no,Bd=new ac,zd=new ho,xd=[],_d=[],vd=new Float32Array(16),yd=new Float32Array(9),Md=new Float32Array(4);function Ks(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=xd[s];if(r===void 0)r=new Float32Array(s),xd[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function ke(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function He(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function So(t,e){let n=_d[e];if(n===void 0)n=new Int32Array(e),_d[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Fg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Og(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ke(n,e))return;t.uniform2fv(this.addr,e),He(n,e)}}function Bg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(ke(n,e))return;t.uniform3fv(this.addr,e),He(n,e)}}function zg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ke(n,e))return;t.uniform4fv(this.addr,e),He(n,e)}}function kg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ke(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),He(n,e)}else{if(ke(n,i))return;Md.set(i),t.uniformMatrix2fv(this.addr,!1,Md),He(n,i)}}function Hg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ke(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),He(n,e)}else{if(ke(n,i))return;yd.set(i),t.uniformMatrix3fv(this.addr,!1,yd),He(n,i)}}function Gg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ke(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),He(n,e)}else{if(ke(n,i))return;vd.set(i),t.uniformMatrix4fv(this.addr,!1,vd),He(n,i)}}function Vg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Wg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ke(n,e))return;t.uniform2iv(this.addr,e),He(n,e)}}function Xg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ke(n,e))return;t.uniform3iv(this.addr,e),He(n,e)}}function qg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ke(n,e))return;t.uniform4iv(this.addr,e),He(n,e)}}function Yg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Zg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ke(n,e))return;t.uniform2uiv(this.addr,e),He(n,e)}}function $g(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ke(n,e))return;t.uniform3uiv(this.addr,e),He(n,e)}}function Jg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ke(n,e))return;t.uniform4uiv(this.addr,e),He(n,e)}}function Kg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Fc.compareFunction=n.isReversedDepthBuffer()?eo:to,r=Fc;else r=Fd;n.setTexture2D(e||r,s)}function Qg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Bd,s)}function jg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||zd,s)}function tx(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Od,s)}function ex(t){switch(t){case 5126:return Fg;case 35664:return Og;case 35665:return Bg;case 35666:return zg;case 35674:return kg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return $g;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return tx}}function nx(t,e){t.uniform1fv(this.addr,e)}function ix(t,e){let n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function sx(t,e){let n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function rx(t,e){let n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function ax(t,e){let n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ox(t,e){let n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lx(t,e){let n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cx(t,e){t.uniform1iv(this.addr,e)}function hx(t,e){t.uniform2iv(this.addr,e)}function ux(t,e){t.uniform3iv(this.addr,e)}function dx(t,e){t.uniform4iv(this.addr,e)}function fx(t,e){t.uniform1uiv(this.addr,e)}function px(t,e){t.uniform2uiv(this.addr,e)}function mx(t,e){t.uniform3uiv(this.addr,e)}function gx(t,e){t.uniform4uiv(this.addr,e)}function xx(t,e,n){let i=this.cache,s=e.length,r=So(n,s);if(!ke(i,r))t.uniform1iv(this.addr,r),He(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Fc;else a=Fd;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function _x(t,e,n){let i=this.cache,s=e.length,r=So(n,s);if(!ke(i,r))t.uniform1iv(this.addr,r),He(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Bd,r[a])}function vx(t,e,n){let i=this.cache,s=e.length,r=So(n,s);if(!ke(i,r))t.uniform1iv(this.addr,r),He(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||zd,r[a])}function yx(t,e,n){let i=this.cache,s=e.length,r=So(n,s);if(!ke(i,r))t.uniform1iv(this.addr,r),He(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Od,r[a])}function Mx(t){switch(t){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return yx}}class kd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ex(e.type)}}class Hd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}}class Gd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Nc=/(\w+)(\])?(\[|\.)?/g;function Sd(t,e){t.seq.push(e),t.map[e.id]=e}function Sx(t,e,n){let i=t.name,s=i.length;Nc.lastIndex=0;while(!0){let r=Nc.exec(i),a=Nc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Sd(n,c===void 0?new kd(o,t,e):new Hd(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new Gd(o),Sd(n,d);n=d}}}class $r{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Sx(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function bd(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var bx=37297,Tx=0;function wx(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Td=new kt;function Ex(t){qt._getMatrix(Td,qt.workingColorSpace,t);let e=`mat3( ${Td.elements.map((n)=>n.toFixed(4))} )`;switch(qt.getTransfer(t)){case ec:return[e,"LinearTransferOETF"];case ue:return[e,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wd(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+wx(t.getShaderSource(e),o)}else return r}function Ax(t,e){let n=Ex(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Rx={[wr]:"Linear",[Er]:"Reinhard",[Ar]:"Cineon",[Xi]:"ACESFilmic",[Cr]:"AgX",[Ir]:"Neutral",[Rr]:"Custom"};function Cx(t,e){let n=Rx[e];if(n===void 0)return Dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var yo=new k;function Ix(){qt.getLuminanceCoefficients(yo);let t=yo.x.toFixed(4),e=yo.y.toFixed(4),n=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Px(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Lx(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function Nx(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Zr(t){return t!==""}function Ed(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(t){return t.replace(Dx,Fx)}var Ux=new Map;function Fx(t,e){let n=Xt[e];if(n===void 0){let i=Ux.get(e);if(i!==void 0)n=Xt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oc(n)}var Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(t){return t.replace(Ox,Bx)}function Bx(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var zx={[Vi]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function kx(t){return zx[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hx={[Ws]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function Gx(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return Hx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var Vx={[qi]:"ENVMAP_MODE_REFRACTION"};function Wx(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Vx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xx={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function qx(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Xx[t.combine]||"ENVMAP_BLENDING_NONE"}function Yx(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Zx(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=kx(n),c=Gx(n),h=Wx(n),d=qx(n),u=Yx(n),p=Px(n),g=Lx(r),A=s.createProgram(),m,f,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zr).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zr).join(`
`),f.length>0)f+=`
`}else m=[Cd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),f=[Cd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==In?"#define TONE_MAPPING":"",n.toneMapping!==In?Xt.tonemapping_pars_fragment:"",n.toneMapping!==In?Cx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ax("linearToOutputTexel",n.outputColorSpace),Ix(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zr).join(`
`);if(a=Oc(a),a=Ed(a,n),a=Ad(a,n),o=Oc(o),o=Ed(o,n),o=Ad(o,n),a=Rd(a),o=Rd(o),n.isRawShaderMaterial!==!0)C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let T=C+m+a,_=C+f+o,b=bd(s,s.VERTEX_SHADER,T),I=bd(s,s.FRAGMENT_SHADER,_);if(s.attachShader(A,b),s.attachShader(A,I),n.index0AttributeName!==void 0)s.bindAttribLocation(A,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(A,0,"position");s.linkProgram(A);function R(L){if(t.debug.checkShaderErrors){let S=s.getProgramInfoLog(A)||"",P=s.getShaderInfoLog(b)||"",w=s.getShaderInfoLog(I)||"",D=S.trim(),z=P.trim(),N=w.trim(),X=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,A,b,I);else{let Y=wd(s,b,"vertex"),tt=wd(s,I,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+Y+`
`+tt)}else if(D!=="")Dt("WebGLProgram: Program Info Log:",D);else if(z===""||N==="")G=!1;if(G)L.diagnostics={runnable:X,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:N,prefix:f}}}s.deleteShader(b),s.deleteShader(I),x=new $r(s,A),M=Nx(s,A)}let x;this.getUniforms=function(){if(x===void 0)R(this);return x};let M;this.getAttributes=function(){if(M===void 0)R(this);return M};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(H===!1)H=s.getProgramParameter(A,bx);return H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Tx++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=b,this.fragmentShader=I,this}var $x=0;class Vd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Wd(t),e.set(t,n);return n}}class Wd{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}}function Jx(t){return t===Ji||t===Ka||t===Qa}function Kx(t,e,n,i,s,r){let a=new io,o=new Vd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function A(x,M,H,L,S,P){let w=L.fog,D=S.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||z,N),G=!!X&&X.mapping===Pr?X.image.height:null,Y=p[x.type];if(x.precision!==null){if(u=i.getMaxPrecision(x.precision),u!==x.precision)Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead.")}let tt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,gt=tt!==void 0?tt.length:0,St=0;if(D.morphAttributes.position!==void 0)St=1;if(D.morphAttributes.normal!==void 0)St=2;if(D.morphAttributes.color!==void 0)St=3;let Jt,Gt,Q,st;if(Y){let ge=Zn[Y];Jt=ge.vertexShader,Gt=ge.fragmentShader}else{Jt=x.vertexShader,Gt=x.fragmentShader;let ge=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,ge,oe),Q=ge.id,st=oe.id}let at=t.getRenderTarget(),Lt=t.state.buffers.depth.getReversed(),Ot=S.isInstancedMesh===!0,It=S.isBatchedMesh===!0,Fe=!!x.map,Zt=!!x.matcap,Kt=!!X,ce=!!x.aoMap,Qt=!!x.lightMap,Xe=!!x.bumpMap&&x.wireframe===!1,ye=!!x.normalMap,sn=!!x.displacementMap,Oe=!!x.emissiveMap,Be=!!x.metalnessMap,F=!!x.roughnessMap,rn=x.anisotropy>0,ae=x.clearcoat>0,Ae=x.dispersion>0,E=x.retroreflectivity>0,v=x.iridescence>0,U=x.sheen>0,Z=x.transmission>0,it=rn&&!!x.anisotropyMap,ot=ae&&!!x.clearcoatMap,ht=ae&&!!x.clearcoatNormalMap,K=ae&&!!x.clearcoatRoughnessMap,et=v&&!!x.iridescenceMap,xt=v&&!!x.iridescenceThicknessMap,Rt=U&&!!x.sheenColorMap,ut=U&&!!x.sheenRoughnessMap,rt=!!x.specularMap,Pt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,re=Z&&!!x.transmissionMap,B=Z&&!!x.thicknessMap,lt=!!x.gradientMap,j=!!x.alphaMap,ct=x.alphaTest>0,_t=!!x.alphaHash,nt=!!x.extensions,ft=In;if(x.toneMapped){if(at===null||at.isXRRenderTarget===!0)ft=t.toneMapping}let Ht={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:Gt,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:It,batchingColor:It&&S._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&S.instanceColor!==null,instancingMorph:Ot&&S.morphTexture!==null,outputColorSpace:at===null?t.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:Zt,envMap:Kt,envMapMode:Kt&&X.mapping,envMapCubeUVHeight:G,aoMap:ce,lightMap:Qt,bumpMap:Xe,normalMap:ye,displacementMap:sn,emissiveMap:Oe,normalMapObjectSpace:ye&&x.normalMapType===Zu,normalMapTangentSpace:ye&&x.normalMapType===jl,packedNormalMap:ye&&x.normalMapType===jl&&Jx(x.normalMap.format),metalnessMap:Be,roughnessMap:F,anisotropy:rn,anisotropyMap:it,clearcoat:ae,clearcoatMap:ot,clearcoatNormalMap:ht,clearcoatRoughnessMap:K,dispersion:Ae,retroreflection:E,iridescence:v,iridescenceMap:et,iridescenceThicknessMap:xt,sheen:U,sheenColorMap:Rt,sheenRoughnessMap:ut,specularMap:rt,specularColorMap:Pt,specularIntensityMap:Nt,transmission:Z,transmissionMap:re,thicknessMap:B,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:_t,combine:x.combine,mapUv:Fe&&g(x.map.channel),aoMapUv:ce&&g(x.aoMap.channel),lightMapUv:Qt&&g(x.lightMap.channel),bumpMapUv:Xe&&g(x.bumpMap.channel),normalMapUv:ye&&g(x.normalMap.channel),displacementMapUv:sn&&g(x.displacementMap.channel),emissiveMapUv:Oe&&g(x.emissiveMap.channel),metalnessMapUv:Be&&g(x.metalnessMap.channel),roughnessMapUv:F&&g(x.roughnessMap.channel),anisotropyMapUv:it&&g(x.anisotropyMap.channel),clearcoatMapUv:ot&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:rt&&g(x.specularMap.channel),specularColorMapUv:Pt&&g(x.specularColorMap.channel),specularIntensityMapUv:Nt&&g(x.specularIntensityMap.channel),transmissionMapUv:re&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ye||rn),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!D.attributes.uv&&(Fe||j),fog:!!w,useFog:x.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Lt,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:St,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wn,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(x){let M=[];if(x.shaderID)M.push(x.shaderID);else M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let H in x.defines)M.push(H),M.push(x.defines[H]);if(x.isRawShaderMaterial===!1)f(M,x),C(M,x),M.push(t.outputColorSpace);return M.push(x.customProgramCacheKey),M.join()}function f(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function C(x,M){if(a.disableAll(),M.instancing)a.enable(0);if(M.instancingColor)a.enable(1);if(M.instancingMorph)a.enable(2);if(M.matcap)a.enable(3);if(M.envMap)a.enable(4);if(M.normalMapObjectSpace)a.enable(5);if(M.normalMapTangentSpace)a.enable(6);if(M.clearcoat)a.enable(7);if(M.iridescence)a.enable(8);if(M.alphaTest)a.enable(9);if(M.vertexColors)a.enable(10);if(M.vertexAlphas)a.enable(11);if(M.vertexUv1s)a.enable(12);if(M.vertexUv2s)a.enable(13);if(M.vertexUv3s)a.enable(14);if(M.vertexTangents)a.enable(15);if(M.anisotropy)a.enable(16);if(M.alphaHash)a.enable(17);if(M.batching)a.enable(18);if(M.dispersion)a.enable(19);if(M.retroreflection)a.enable(24);if(M.batchingColor)a.enable(20);if(M.gradientMap)a.enable(21);if(M.packedNormalMap)a.enable(22);if(M.vertexNormals)a.enable(23);if(x.push(a.mask),a.disableAll(),M.fog)a.enable(0);if(M.useFog)a.enable(1);if(M.flatShading)a.enable(2);if(M.logarithmicDepthBuffer)a.enable(3);if(M.reversedDepthBuffer)a.enable(4);if(M.skinning)a.enable(5);if(M.morphTargets)a.enable(6);if(M.morphNormals)a.enable(7);if(M.morphColors)a.enable(8);if(M.premultipliedAlpha)a.enable(9);if(M.shadowMapEnabled)a.enable(10);if(M.doubleSided)a.enable(11);if(M.flipSided)a.enable(12);if(M.useDepthPacking)a.enable(13);if(M.dithering)a.enable(14);if(M.transmission)a.enable(15);if(M.sheen)a.enable(16);if(M.opaque)a.enable(17);if(M.pointsUvs)a.enable(18);if(M.decodeVideoTexture)a.enable(19);if(M.decodeVideoTextureEmissive)a.enable(20);if(M.alphaToCoverage)a.enable(21);if(M.numLightProbeGrids>0)a.enable(22);if(M.hasPositionAttribute)a.enable(23);x.push(a.mask)}function T(x){let M=p[x.type],H;if(M){let L=Zn[M];H=mi.clone(L.uniforms)}else H=x.uniforms;return H}function _(x,M){let H=h.get(M);if(H!==void 0)++H.usedTimes;else H=new Zx(t,M,x,s),c.push(H),h.set(M,H);return H}function b(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function I(x){o.remove(x)}function R(){o.dispose()}return{getParameters:A,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:b,releaseShaderCache:I,programs:c,dispose:R}}function Qx(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function jx(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Id(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Pd(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let p=0;if(u.isInstancedMesh)p+=2;if(u.isSkinnedMesh)p+=1;return p}function o(u,p,g,A,m,f){let C=t[e];if(C===void 0)C={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:A,renderOrder:u.renderOrder,z:m,group:f},t[e]=C;else C.id=u.id,C.object=u,C.geometry=p,C.material=g,C.materialVariant=a(u),C.groupOrder=A,C.renderOrder=u.renderOrder,C.z=m,C.group=f;return e++,C}function l(u,p,g,A,m,f,C){if(C.reversedDepth===!0)m=-m;let T=o(u,p,g,A,m,f);if(g.transmission>0)i.push(T);else if(g.transparent===!0)s.push(T);else n.push(T)}function c(u,p,g,A,m,f){let C=o(u,p,g,A,m,f);if(g.transmission>0)i.unshift(C);else if(g.transparent===!0)s.unshift(C);else n.unshift(C)}function h(u,p){if(n.length>1)n.sort(u||jx);if(i.length>1)i.sort(p||Id);if(s.length>1)s.sort(p||Id)}function d(){for(let u=e,p=t.length;u<p;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function t_(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Pd,t.set(i,[a]);else if(s>=r.length)a=new Pd,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function e_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new k,color:new Et};break;case"SpotLight":n={position:new k,direction:new k,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function n_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var i_=0;function s_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function r_(t){let e=new e_,n=n_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new ee,a=new ee;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,A=0,m=0,f=0,C=0,T=0,_=0,b=0,I=0,R=0,x=0,M=0,H=0;c.sort(s_);for(let S=0,P=c.length;S<P;S++){let w=c[S],D=w.color,z=w.intensity,N=w.distance,X=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===Ji)X=w.shadow.map.texture;else X=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)h+=D.r*z,d+=D.g*z,u+=D.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],z);H++}else if(w.isSunLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,tt=n.get(w);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=tt,i.sunShadowMap[g]=X;let gt=Y.getViewportCount();for(let St=0;St<gt;St++)i.sunShadowMatrix[A+St]=Y.getMatrix(St),i.sunShadowCascade[A+St]=Y._cascadeData[St];A+=gt,g++}i.sun[p]=G,p++}else if(w.isDirectionalLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,tt=n.get(w);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=G,m++}else if(w.isSpotLight){let G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(D).multiplyScalar(z),G.distance=N,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[C]=G;let Y=w.shadow;if(w.map){if(i.spotLightMap[x]=w.map,x++,Y.updateMatrices(w),w.castShadow)M++}if(i.spotLightMatrix[C]=Y.matrix,w.castShadow){let tt=n.get(w);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,i.spotShadow[C]=tt,i.spotShadowMap[C]=X,R++}C++}else if(w.isRectAreaLight){let G=e.get(w);G.color.copy(D).multiplyScalar(z),G.halfWidth.set(w.width*0.5,0,0),G.halfHeight.set(0,w.height*0.5,0),i.rectArea[T]=G,T++}else if(w.isPointLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let Y=w.shadow,tt=n.get(w);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,i.pointShadow[f]=tt,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=w.shadow.matrix,I++}i.point[f]=G,f++}else if(w.isHemisphereLight){let G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[_]=G,_++}}if(T>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2;else i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;if(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==C||L.rectAreaLength!==T||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==I||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==H)i.sun.length=p,i.directional.length=m,i.spot.length=C,i.rectArea.length=T,i.point.length=f,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=A,i.sunShadowCascade.length=A,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-M,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=H,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=C,L.rectAreaLength=T,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=I,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=H,i.version=i_++}function l(c,h){let d=0,u=0,p=0,g=0,A=0,m=0,f=h.matrixWorldInverse;for(let C=0,T=c.length;C<T;C++){let _=c[C];if(_.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),d++}else if(_.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(_.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(_.isRectAreaLight){let b=i.rectArea[A];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(_.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(_.width*0.5,0,0),b.halfHeight.set(0,_.height*0.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),A++}else if(_.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Ld(t){let e=new r_(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function a_(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Ld(t),e.set(s,[o]);else if(r>=a.length)o=new Ld(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],h_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Nd=new ee,Yr=new k,Dc=new k;function u_(t,e,n){let i=new kr,s=new wt,r=new wt,a=new we,o=new uc,l=new dc,c={},h=n.maxTextureSize,d={[Gs]:Je,[Je]:Gs,[Wn]:Wn},u=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new ze(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let A=new Ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let f=this.type;this.render=function(I,R,x){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(I.length===0)return;if(this.type===lu)Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vi;let M=t.getRenderTarget(),H=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),S=t.state;if(S.setBlending(vn),S.buffers.depth.getReversed()===!0)S.buffers.color.setClear(0,0,0,0);else S.buffers.color.setClear(1,1,1,1);S.buffers.depth.setTest(!0),S.setScissorTest(!1);let P=f!==this.type;if(P)R.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((D)=>D.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,D=I.length;w<D;w++){let z=I[w],N=z.shadow;if(N===void 0){Dt("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let X=N.getFrameExtents();if(s.multiply(X),r.copy(N.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/X.x),s.x=r.x*X.x,N.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/X.y),s.y=r.y*X.y,N.mapSize.y=r.y}let G=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=G,N.map===null||P===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===Hs){if(z.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Pe(s.x,s.y,{format:Ji,type:We,minFilter:an,magFilter:an,generateMipmaps:!1}),N.map.texture.name=z.name+".shadowMap",N.map.depthTexture=new ji(s.x,s.y,ui),N.map.depthTexture.name=z.name+".shadowMapDepth",N.map.depthTexture.format=Zi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ii,N.map.depthTexture.magFilter=Ii}else{if(z.isPointLight)N.map=new Bc(s.x),N.map.depthTexture=new cc(s.x,Pi);else N.map=new Pe(s.x,s.y),N.map.depthTexture=new ji(s.x,s.y,Pi);if(N.map.depthTexture.name=z.name+".shadowMap",N.map.depthTexture.format=Zi,this.type===Vi)N.map.depthTexture.compareFunction=G?eo:to,N.map.depthTexture.minFilter=an,N.map.depthTexture.magFilter=an;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ii,N.map.depthTexture.magFilter=Ii}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y))N.map.setSize(s.x,s.y);let Y=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(z.isPointLight!==!0)N.updateMatrices(z,x);for(let tt=0;tt<Y;tt++){let gt=N.getCamera(tt);if(z.isPointLight){let{camera:St,matrix:Jt}=N,Gt=z.distance||St.far;if(Gt!==St.far)St.far=Gt,St.updateProjectionMatrix();Yr.setFromMatrixPosition(z.matrixWorld),St.position.copy(Yr),Dc.copy(St.position),Dc.add(c_[tt]),St.up.copy(h_[tt]),St.lookAt(Dc),St.updateMatrixWorld(),Jt.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Nd.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Nd,St.coordinateSystem,St.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,tt),t.clear();else{if(tt===0)t.setRenderTarget(N.map),t.clear();let St=N.getViewport(tt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),S.viewport(a)}i=N.getFrustum(tt),_(R,x,gt,z,this.type)}if(N.isPointLightShadow!==!0&&this.type===Hs)C(N,x);N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(M,H,L)};function C(I,R){let x=e.update(A);if(u.defines.VSM_SAMPLES!==I.blurSamples)u.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new Pe(s.x,s.y,{format:Ji,type:We});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(R,null,x,u,A,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value.set(I.map.width,I.map.height),p.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(R,null,x,p,A,null)}function T(I,R,x,M){let H=null,L=x.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)H=L;else if(H=x.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let S=H.uuid,P=R.uuid,w=c[S];if(w===void 0)w={},c[S]=w;let D=w[P];if(D===void 0)D=H.clone(),w[P]=D,R.addEventListener("dispose",b);H=D}if(H.visible=R.visible,H.wireframe=R.wireframe,M===Hs)H.side=R.shadowSide!==null?R.shadowSide:R.side;else H.side=R.shadowSide!==null?R.shadowSide:d[R.side];if(H.alphaMap=R.alphaMap,H.alphaTest=R.alphaToCoverage===!0?0.5:R.alphaTest,H.map=R.map,H.clipShadows=R.clipShadows,H.clippingPlanes=R.clippingPlanes,H.clipIntersection=R.clipIntersection,H.displacementMap=R.displacementMap,H.displacementScale=R.displacementScale,H.displacementBias=R.displacementBias,H.wireframeLinewidth=R.wireframeLinewidth,H.linewidth=R.linewidth,x.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let S=t.properties.get(H);S.light=x}return H}function _(I,R,x,M,H){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&H===Hs)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,I.matrixWorld);let P=e.update(I),w=I.material;if(Array.isArray(w)){let D=P.groups;for(let z=0,N=D.length;z<N;z++){let X=D[z],G=w[X.materialIndex];if(G&&G.visible){let Y=T(I,G,M,H);I.onBeforeShadow(t,I,R,x,P,Y,X),t.renderBufferDirect(x,null,P,Y,I,X),I.onAfterShadow(t,I,R,x,P,Y,X)}}}else if(w.visible){let D=T(I,w,M,H);I.onBeforeShadow(t,I,R,x,P,D,null),t.renderBufferDirect(x,null,P,D,I,null),I.onAfterShadow(t,I,R,x,P,D,null)}}}let S=I.children;for(let P=0,w=S.length;P<w;P++)_(S[P],R,x,M,H)}function b(I){I.target.removeEventListener("dispose",b);for(let x in c){let M=c[x],H=I.target.uuid;if(H in M)M[H].dispose(),delete M[H]}}}function d_(t,e){function n(){let B=!1,lt=new we,j=null,ct=new we(0,0,0,0);return{setMask:function(_t){if(j!==_t&&!B)t.colorMask(_t,_t,_t,_t),j=_t},setLocked:function(_t){B=_t},setClear:function(_t,nt,ft,Ht,ge){if(ge===!0)_t*=Ht,nt*=Ht,ft*=Ht;if(lt.set(_t,nt,ft,Ht),ct.equals(lt)===!1)t.clearColor(_t,nt,ft,Ht),ct.copy(lt)},reset:function(){B=!1,j=null,ct.set(-1,0,0,0)}}}function i(){let B=!1,lt=!1,j=null,ct=null,_t=null;return{setReversed:function(nt){if(lt!==nt){let ft=e.get("EXT_clip_control");if(nt)ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT);else ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);lt=nt;let Ht=_t;_t=null,this.setClear(Ht)}},getReversed:function(){return lt},setTest:function(nt){if(nt)at(t.DEPTH_TEST);else Lt(t.DEPTH_TEST)},setMask:function(nt){if(j!==nt&&!B)t.depthMask(nt),j=nt},setFunc:function(nt){if(lt)nt=sd[nt];if(ct!==nt){switch(nt){case Cu:t.depthFunc(t.NEVER);break;case Iu:t.depthFunc(t.ALWAYS);break;case Pu:t.depthFunc(t.LESS);break;case gl:t.depthFunc(t.LEQUAL);break;case Lu:t.depthFunc(t.EQUAL);break;case Nu:t.depthFunc(t.GEQUAL);break;case Du:t.depthFunc(t.GREATER);break;case Uu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ct=nt}},setLocked:function(nt){B=nt},setClear:function(nt){if(_t!==nt){if(_t=nt,lt)nt=1-nt;t.clearDepth(nt)}},reset:function(){B=!1,j=null,ct=null,_t=null,lt=!1}}}function s(){let B=!1,lt=null,j=null,ct=null,_t=null,nt=null,ft=null,Ht=null,ge=null;return{setTest:function(oe){if(!B)if(oe)at(t.STENCIL_TEST);else Lt(t.STENCIL_TEST)},setMask:function(oe){if(lt!==oe&&!B)t.stencilMask(oe),lt=oe},setFunc:function(oe,zn,si){if(j!==oe||ct!==zn||_t!==si)t.stencilFunc(oe,zn,si),j=oe,ct=zn,_t=si},setOp:function(oe,zn,si){if(nt!==oe||ft!==zn||Ht!==si)t.stencilOp(oe,zn,si),nt=oe,ft=zn,Ht=si},setLocked:function(oe){B=oe},setClear:function(oe){if(ge!==oe)t.clearStencil(oe),ge=oe},reset:function(){B=!1,lt=null,j=null,ct=null,_t=null,nt=null,ft=null,Ht=null,ge=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],A=null,m=!1,f=null,C=null,T=null,_=null,b=null,I=null,R=null,x=new Et(0,0,0),M=0,H=!1,L=null,S=null,P=null,w=null,D=null,z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,X=0,G=t.getParameter(t.VERSION);if(G.indexOf("WebGL")!==-1)X=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=X>=1;else if(G.indexOf("OpenGL ES")!==-1)X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=X>=2;let Y=null,tt={},gt=t.getParameter(t.SCISSOR_BOX),St=t.getParameter(t.VIEWPORT),Jt=new we().fromArray(gt),Gt=new we().fromArray(St);function Q(B,lt,j,ct){let _t=new Uint8Array(4),nt=t.createTexture();t.bindTexture(B,nt),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<j;ft++)if(B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY)t.texImage3D(lt,0,t.RGBA,1,1,ct,0,t.RGBA,t.UNSIGNED_BYTE,_t);else t.texImage2D(lt+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_t);return nt}let st={};st[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),st[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),st[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(t.DEPTH_TEST),a.setFunc(gl),Xe(!1),ye(fl),at(t.CULL_FACE),ce(vn);function at(B){if(h[B]!==!0)t.enable(B),h[B]=!0}function Lt(B){if(h[B]!==!1)t.disable(B),h[B]=!1}function Ot(B,lt){if(u[B]!==lt){if(t.bindFramebuffer(B,lt),u[B]=lt,B===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=lt;if(B===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=lt;return!0}return!1}function It(B,lt){let j=g,ct=!1;if(B){if(j=p.get(lt),j===void 0)j=[],p.set(lt,j);let _t=B.textures;if(j.length!==_t.length||j[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,ft=_t.length;nt<ft;nt++)j[nt]=t.COLOR_ATTACHMENT0+nt;j.length=_t.length,ct=!0}}else if(j[0]!==t.BACK)j[0]=t.BACK,ct=!0;if(ct)t.drawBuffers(j)}function Fe(B){if(A!==B)return t.useProgram(B),A=B,!0;return!1}let Zt={[Vs]:t.FUNC_ADD,[hu]:t.FUNC_SUBTRACT,[uu]:t.FUNC_REVERSE_SUBTRACT};Zt[du]=t.MIN,Zt[fu]=t.MAX;let Kt={[pu]:t.ZERO,[mu]:t.ONE,[gu]:t.SRC_COLOR,[_u]:t.SRC_ALPHA,[Tu]:t.SRC_ALPHA_SATURATE,[Su]:t.DST_COLOR,[yu]:t.DST_ALPHA,[xu]:t.ONE_MINUS_SRC_COLOR,[vu]:t.ONE_MINUS_SRC_ALPHA,[bu]:t.ONE_MINUS_DST_COLOR,[Mu]:t.ONE_MINUS_DST_ALPHA,[wu]:t.CONSTANT_COLOR,[Eu]:t.ONE_MINUS_CONSTANT_COLOR,[Au]:t.CONSTANT_ALPHA,[Ru]:t.ONE_MINUS_CONSTANT_ALPHA};function ce(B,lt,j,ct,_t,nt,ft,Ht,ge,oe){if(B===vn){if(m===!0)Lt(t.BLEND),m=!1;return}if(m===!1)at(t.BLEND),m=!0;if(B!==cu){if(B!==f||oe!==H){if(C!==Vs||b!==Vs)t.blendEquation(t.FUNC_ADD),C=Vs,b=Vs;if(oe)switch(B){case Wi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cn:t.blendFunc(t.ONE,t.ONE);break;case pl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ml:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",B);break}else switch(B){case Wi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",B);break}T=null,_=null,I=null,R=null,x.set(0,0,0),M=0,f=B,H=oe}return}if(_t=_t||lt,nt=nt||j,ft=ft||ct,lt!==C||_t!==b)t.blendEquationSeparate(Zt[lt],Zt[_t]),C=lt,b=_t;if(j!==T||ct!==_||nt!==I||ft!==R)t.blendFuncSeparate(Kt[j],Kt[ct],Kt[nt],Kt[ft]),T=j,_=ct,I=nt,R=ft;if(Ht.equals(x)===!1||ge!==M)t.blendColor(Ht.r,Ht.g,Ht.b,ge),x.copy(Ht),M=ge;f=B,H=!1}function Qt(B,lt){B.side===Wn?Lt(t.CULL_FACE):at(t.CULL_FACE);let j=B.side===Je;if(lt)j=!j;Xe(j),B.blending===Wi&&B.transparent===!1?ce(vn):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ct=B.stencilWrite;if(o.setTest(ct),ct)o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass);Oe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(t.SAMPLE_ALPHA_TO_COVERAGE):Lt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(B){if(L!==B){if(B)t.frontFace(t.CW);else t.frontFace(t.CCW);L=B}}function ye(B){if(B!==au){if(at(t.CULL_FACE),B!==S)if(B===fl)t.cullFace(t.BACK);else if(B===ou)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Lt(t.CULL_FACE);S=B}function sn(B){if(B!==P){if(N)t.lineWidth(B);P=B}}function Oe(B,lt,j){if(B){if(at(t.POLYGON_OFFSET_FILL),w!==lt||D!==j){if(w=lt,D=j,a.getReversed())lt=-lt;t.polygonOffset(lt,j)}}else Lt(t.POLYGON_OFFSET_FILL)}function Be(B){if(B)at(t.SCISSOR_TEST);else Lt(t.SCISSOR_TEST)}function F(B){if(B===void 0)B=t.TEXTURE0+z-1;if(Y!==B)t.activeTexture(B),Y=B}function rn(B,lt,j){if(j===void 0)if(Y===null)j=t.TEXTURE0+z-1;else j=Y;let ct=tt[j];if(ct===void 0)ct={type:void 0,texture:void 0},tt[j]=ct;if(ct.type!==B||ct.texture!==lt){if(Y!==j)t.activeTexture(j),Y=j;t.bindTexture(B,lt||st[B]),ct.type=B,ct.texture=lt}}function ae(){let B=tt[Y];if(B!==void 0&&B.type!==void 0)t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0}function Ae(){try{t.compressedTexImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function v(){try{t.texSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function U(){try{t.texSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function it(){try{t.compressedTexSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function ot(){try{t.texStorage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function ht(){try{t.texStorage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function K(){try{t.texImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function et(){try{t.texImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function xt(B){if(d[B]!==void 0)return d[B];else return t.getParameter(B)}function Rt(B,lt){if(d[B]!==lt)t.pixelStorei(B,lt),d[B]=lt}function ut(B){if(Jt.equals(B)===!1)t.scissor(B.x,B.y,B.z,B.w),Jt.copy(B)}function rt(B){if(Gt.equals(B)===!1)t.viewport(B.x,B.y,B.z,B.w),Gt.copy(B)}function Pt(B,lt){let j=c.get(lt);if(j===void 0)j=new WeakMap,c.set(lt,j);let ct=j.get(B);if(ct===void 0)ct=t.getUniformBlockIndex(lt,B.name),j.set(B,ct)}function Nt(B,lt){let ct=c.get(lt).get(B);if(l.get(lt)!==ct)t.uniformBlockBinding(lt,ct,B.__bindingPointIndex),l.set(lt,ct)}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,tt={},u={},p=new WeakMap,g=[],A=null,m=!1,f=null,C=null,T=null,_=null,b=null,I=null,R=null,x=new Et(0,0,0),M=0,H=!1,L=null,S=null,P=null,w=null,D=null,Jt.set(0,0,t.canvas.width,t.canvas.height),Gt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Lt,bindFramebuffer:Ot,drawBuffers:It,useProgram:Fe,setBlending:ce,setMaterial:Qt,setFlipSided:Xe,setCullFace:ye,setLineWidth:sn,setPolygonOffset:Oe,setScissorTest:Be,activeTexture:F,bindTexture:rn,unbindTexture:ae,compressedTexImage2D:Ae,compressedTexImage3D:E,texImage2D:K,texImage3D:et,pixelStorei:Rt,getParameter:xt,updateUBOMapping:Pt,uniformBlockBinding:Nt,texStorage2D:ot,texStorage3D:ht,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:Z,compressedTexSubImage3D:it,scissor:ut,viewport:rt,reset:re}}function f_(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function A(E,v){return g?new OffscreenCanvas(E,v):Mr("canvas")}function m(E,v,U){let Z=1,it=Ae(E);if(it.width>U||it.height>U)Z=U/Math.max(it.width,it.height);if(Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ot=Math.floor(Z*it.width),ht=Math.floor(Z*it.height);if(u===void 0)u=A(ot,ht);let K=v?A(ot,ht):u;return K.width=ot,K.height=ht,K.getContext("2d").drawImage(E,0,0,ot,ht),Dt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ot+"x"+ht+")."),K}else{if("data"in E)Dt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+").");return E}return E}function f(E){return E.generateMipmaps}function C(E){t.generateMipmap(E)}function T(E){if(E.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function _(E,v,U,Z,it,ot=!1){if(E!==null){if(t[E]!==void 0)return t[E];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ht;if(Z){if(ht=e.get("EXT_texture_norm16"),!ht)Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K=v;if(v===t.RED){if(U===t.FLOAT)K=t.R32F;if(U===t.HALF_FLOAT)K=t.R16F;if(U===t.UNSIGNED_BYTE)K=t.R8;if(U===t.UNSIGNED_SHORT&&ht)K=ht.R16_EXT;if(U===t.SHORT&&ht)K=ht.R16_SNORM_EXT}if(v===t.RED_INTEGER){if(U===t.UNSIGNED_BYTE)K=t.R8UI;if(U===t.UNSIGNED_SHORT)K=t.R16UI;if(U===t.UNSIGNED_INT)K=t.R32UI;if(U===t.BYTE)K=t.R8I;if(U===t.SHORT)K=t.R16I;if(U===t.INT)K=t.R32I}if(v===t.RG){if(U===t.FLOAT)K=t.RG32F;if(U===t.HALF_FLOAT)K=t.RG16F;if(U===t.UNSIGNED_BYTE)K=t.RG8;if(U===t.UNSIGNED_SHORT&&ht)K=ht.RG16_EXT;if(U===t.SHORT&&ht)K=ht.RG16_SNORM_EXT}if(v===t.RG_INTEGER){if(U===t.UNSIGNED_BYTE)K=t.RG8UI;if(U===t.UNSIGNED_SHORT)K=t.RG16UI;if(U===t.UNSIGNED_INT)K=t.RG32UI;if(U===t.BYTE)K=t.RG8I;if(U===t.SHORT)K=t.RG16I;if(U===t.INT)K=t.RG32I}if(v===t.RGB_INTEGER){if(U===t.UNSIGNED_BYTE)K=t.RGB8UI;if(U===t.UNSIGNED_SHORT)K=t.RGB16UI;if(U===t.UNSIGNED_INT)K=t.RGB32UI;if(U===t.BYTE)K=t.RGB8I;if(U===t.SHORT)K=t.RGB16I;if(U===t.INT)K=t.RGB32I}if(v===t.RGBA_INTEGER){if(U===t.UNSIGNED_BYTE)K=t.RGBA8UI;if(U===t.UNSIGNED_SHORT)K=t.RGBA16UI;if(U===t.UNSIGNED_INT)K=t.RGBA32UI;if(U===t.BYTE)K=t.RGBA8I;if(U===t.SHORT)K=t.RGBA16I;if(U===t.INT)K=t.RGBA32I}if(v===t.RGB){if(U===t.UNSIGNED_SHORT&&ht)K=ht.RGB16_EXT;if(U===t.SHORT&&ht)K=ht.RGB16_SNORM_EXT;if(U===t.UNSIGNED_INT_5_9_9_9_REV)K=t.RGB9_E5;if(U===t.UNSIGNED_INT_10F_11F_11F_REV)K=t.R11F_G11F_B10F}if(v===t.RGBA){let et=ot?ec:qt.getTransfer(it);if(U===t.FLOAT)K=t.RGBA32F;if(U===t.HALF_FLOAT)K=t.RGBA16F;if(U===t.UNSIGNED_BYTE)K=et===ue?t.SRGB8_ALPHA8:t.RGBA8;if(U===t.UNSIGNED_SHORT&&ht)K=ht.RGBA16_EXT;if(U===t.SHORT&&ht)K=ht.RGBA16_SNORM_EXT;if(U===t.UNSIGNED_SHORT_4_4_4_4)K=t.RGBA4;if(U===t.UNSIGNED_SHORT_5_5_5_1)K=t.RGB5_A1}if(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)e.get("EXT_color_buffer_float");return K}function b(E,v){let U;if(E){if(v===null||v===Pi||v===Xs)U=t.DEPTH24_STENCIL8;else if(v===ui)U=t.DEPTH32F_STENCIL8;else if(v===Nr)U=t.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(v===null||v===Pi||v===Xs)U=t.DEPTH_COMPONENT24;else if(v===ui)U=t.DEPTH_COMPONENT32F;else if(v===Nr)U=t.DEPTH_COMPONENT16;return U}function I(E,v){if(f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ii&&E.minFilter!==an)return Math.log2(Math.max(v.width,v.height))+1;else if(E.mipmaps!==void 0&&E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return v.mipmaps.length;else return 1}function R(E){let v=E.target;if(v.removeEventListener("dispose",R),M(v),v.isVideoTexture)h.delete(v);if(v.isHTMLTexture)d.delete(v)}function x(E){let v=E.target;v.removeEventListener("dispose",x),L(v)}function M(E){let v=i.get(E);if(v.__webglInit===void 0)return;let U=E.source,Z=p.get(U);if(Z){let it=Z[v.__cacheKey];if(it.usedTimes--,it.usedTimes===0)H(E);if(Object.keys(Z).length===0)p.delete(U)}i.remove(E)}function H(E){let v=i.get(E);t.deleteTexture(v.__webglTexture);let U=E.source,Z=p.get(U);delete Z[v.__cacheKey],a.memory.textures--}function L(E){let v=i.get(E);if(E.depthTexture)E.depthTexture.dispose(),i.remove(E.depthTexture);if(E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let it=0;it<v.__webglFramebuffer[Z].length;it++)t.deleteFramebuffer(v.__webglFramebuffer[Z][it]);else t.deleteFramebuffer(v.__webglFramebuffer[Z]);if(v.__webglDepthbuffer)t.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[Z]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer)t.deleteRenderbuffer(v.__webglDepthbuffer);if(v.__webglMultisampledFramebuffer)t.deleteFramebuffer(v.__webglMultisampledFramebuffer);if(v.__webglColorRenderbuffer){for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)if(v.__webglColorRenderbuffer[Z])t.deleteRenderbuffer(v.__webglColorRenderbuffer[Z])}if(v.__webglDepthRenderbuffer)t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=E.textures;for(let Z=0,it=U.length;Z<it;Z++){let ot=i.get(U[Z]);if(ot.__webglTexture)t.deleteTexture(ot.__webglTexture),a.memory.textures--;i.remove(U[Z])}i.remove(E)}let S=0;function P(){S=0}function w(){return S}function D(E){S=E}function z(){let E=S;if(E>=s.maxTextures)Dt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures);return S+=1,E}function N(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function X(E,v){let U=i.get(E);if(E.isVideoTexture)rn(E);if(E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let Z=E.image;if(Z===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(U,E,v);return}}else if(E.isExternalTexture)U.__webglTexture=E.sourceTexture?E.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function G(E,v){let U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Lt(U,E,v);return}else if(E.isExternalTexture)U.__webglTexture=E.sourceTexture?E.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function Y(E,v){let U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Lt(U,E,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function tt(E,v){let U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Ot(U,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}let gt={[Wa]:t.REPEAT,[Xa]:t.CLAMP_TO_EDGE,[zu]:t.MIRRORED_REPEAT},St={[Ii]:t.NEAREST,[ku]:t.NEAREST_MIPMAP_NEAREST,[Lr]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[qa]:t.LINEAR_MIPMAP_NEAREST,[Yi]:t.LINEAR_MIPMAP_LINEAR},Jt={[$u]:t.NEVER,[td]:t.ALWAYS,[Ju]:t.LESS,[to]:t.LEQUAL,[Ku]:t.EQUAL,[eo]:t.GEQUAL,[Qu]:t.GREATER,[ju]:t.NOTEQUAL};function Gt(E,v){if(v.type===ui&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===qa||v.magFilter===Lr||v.magFilter===Yi||v.minFilter===an||v.minFilter===qa||v.minFilter===Lr||v.minFilter===Yi))Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(E,t.TEXTURE_WRAP_S,gt[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,gt[v.wrapT]),E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)t.texParameteri(E,t.TEXTURE_WRAP_R,gt[v.wrapR]);if(t.texParameteri(E,t.TEXTURE_MAG_FILTER,St[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,St[v.minFilter]),v.compareFunction)t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Jt[v.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ii)return;if(v.minFilter!==Lr&&v.minFilter!==Yi)return;if(v.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Q(E,v){let U=!1;if(E.__webglInit===void 0)E.__webglInit=!0,v.addEventListener("dispose",R);let Z=v.source,it=p.get(Z);if(it===void 0)it={},p.set(Z,it);let ot=N(v);if(ot!==E.__cacheKey){if(it[ot]===void 0)it[ot]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0;it[ot].usedTimes++;let ht=it[E.__cacheKey];if(ht!==void 0){if(it[E.__cacheKey].usedTimes--,ht.usedTimes===0)H(v)}E.__cacheKey=ot,E.__webglTexture=it[ot].texture}return U}function st(E,v,U){return Math.floor(Math.floor(E/U)/v)}function at(E,v,U,Z){let ot=E.updateRanges;if(ot.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,U,Z,v.data);else{ot.sort((Rt,ut)=>Rt.start-ut.start);let ht=0;for(let Rt=1;Rt<ot.length;Rt++){let ut=ot[ht],rt=ot[Rt],Pt=ut.start+ut.count,Nt=st(rt.start,v.width,4),re=st(ut.start,v.width,4);if(rt.start<=Pt+1&&Nt===re&&st(rt.start+rt.count-1,v.width,4)===Nt)ut.count=Math.max(ut.count,rt.start+rt.count-ut.start);else++ht,ot[ht]=rt}ot.length=ht+1;let K=n.getParameter(t.UNPACK_ROW_LENGTH),et=n.getParameter(t.UNPACK_SKIP_PIXELS),xt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Rt=0,ut=ot.length;Rt<ut;Rt++){let rt=ot[Rt],Pt=Math.floor(rt.start/4),Nt=Math.ceil(rt.count/4),re=Pt%v.width,B=Math.floor(Pt/v.width),lt=Nt,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,re,B,lt,1,U,Z,v.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,xt)}}function Lt(E,v,U){let Z=t.TEXTURE_2D;if(v.isDataArrayTexture||v.isCompressedArrayTexture)Z=t.TEXTURE_2D_ARRAY;if(v.isData3DTexture)Z=t.TEXTURE_3D;let it=Q(E,v),ot=v.source;n.bindTexture(Z,E.__webglTexture,t.TEXTURE0+U);let ht=i.get(ot);if(ot.version!==ht.__version||it===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=qt.getPrimaries(qt.workingColorSpace),ct=v.colorSpace===Ki?null:qt.getPrimaries(v.colorSpace),_t=v.colorSpace===Ki||j===ct?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let et=m(v.image,!1,s.maxTextureSize);et=ae(v,et);let xt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),ut=_(v.internalFormat,xt,Rt,v.normalized,v.colorSpace,v.isVideoTexture);Gt(Z,v);let rt,Pt=v.mipmaps,Nt=v.isVideoTexture!==!0,re=ht.__version===void 0||it===!0,B=ot.dataReady,lt=I(v,et);if(v.isDepthTexture){if(ut=b(v.format===$i,v.type),re)if(Nt)n.texStorage2D(t.TEXTURE_2D,1,ut,et.width,et.height);else n.texImage2D(t.TEXTURE_2D,0,ut,et.width,et.height,0,xt,Rt,null)}else if(v.isDataTexture)if(Pt.length>0){if(Nt&&re)n.texStorage2D(t.TEXTURE_2D,lt,ut,Pt[0].width,Pt[0].height);for(let j=0,ct=Pt.length;j<ct;j++)if(rt=Pt[j],Nt){if(B)n.texSubImage2D(t.TEXTURE_2D,j,0,0,rt.width,rt.height,xt,Rt,rt.data)}else n.texImage2D(t.TEXTURE_2D,j,ut,rt.width,rt.height,0,xt,Rt,rt.data);v.generateMipmaps=!1}else if(Nt){if(re)n.texStorage2D(t.TEXTURE_2D,lt,ut,et.width,et.height);if(B)at(v,et,xt,Rt)}else n.texImage2D(t.TEXTURE_2D,0,ut,et.width,et.height,0,xt,Rt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){if(Nt&&re)n.texStorage3D(t.TEXTURE_2D_ARRAY,lt,ut,Pt[0].width,Pt[0].height,et.depth);for(let j=0,ct=Pt.length;j<ct;j++)if(rt=Pt[j],v.format!==Xn)if(xt!==null)if(Nt){if(B)if(v.layerUpdates.size>0){let _t=Rc(rt.width,rt.height,v.format,v.type);for(let nt of v.layerUpdates){let ft=rt.data.subarray(nt*_t/rt.data.BYTES_PER_ELEMENT,(nt+1)*_t/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,nt,rt.width,rt.height,1,xt,ft)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,rt.width,rt.height,et.depth,xt,rt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,ut,rt.width,rt.height,et.depth,0,rt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Nt){if(B)n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,rt.width,rt.height,et.depth,xt,Rt,rt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,j,ut,rt.width,rt.height,et.depth,0,xt,Rt,rt.data);if(v.layerUpdates.size>0)v.clearLayerUpdates()}else{if(Nt&&re)n.texStorage2D(t.TEXTURE_2D,lt,ut,Pt[0].width,Pt[0].height);for(let j=0,ct=Pt.length;j<ct;j++)if(rt=Pt[j],v.format!==Xn)if(xt!==null)if(Nt){if(B)n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,rt.width,rt.height,xt,rt.data)}else n.compressedTexImage2D(t.TEXTURE_2D,j,ut,rt.width,rt.height,0,rt.data);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Nt){if(B)n.texSubImage2D(t.TEXTURE_2D,j,0,0,rt.width,rt.height,xt,Rt,rt.data)}else n.texImage2D(t.TEXTURE_2D,j,ut,rt.width,rt.height,0,xt,Rt,rt.data)}else if(v.isDataArrayTexture)if(Nt){if(re)n.texStorage3D(t.TEXTURE_2D_ARRAY,lt,ut,et.width,et.height,et.depth);if(B)if(v.layerUpdates.size>0){let j=Rc(et.width,et.height,v.format,v.type);for(let ct of v.layerUpdates){let _t=et.data.subarray(ct*j/et.data.BYTES_PER_ELEMENT,(ct+1)*j/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ct,et.width,et.height,1,xt,Rt,_t)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Rt,et.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ut,et.width,et.height,et.depth,0,xt,Rt,et.data);else if(v.isData3DTexture)if(Nt){if(re)n.texStorage3D(t.TEXTURE_3D,lt,ut,et.width,et.height,et.depth);if(B)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Rt,et.data)}else n.texImage3D(t.TEXTURE_3D,0,ut,et.width,et.height,et.depth,0,xt,Rt,et.data);else if(v.isFramebufferTexture){if(re)if(Nt)n.texStorage2D(t.TEXTURE_2D,lt,ut,et.width,et.height);else{let{width:j,height:ct}=et;for(let _t=0;_t<lt;_t++)n.texImage2D(t.TEXTURE_2D,_t,ut,j,ct,0,xt,Rt,null),j>>=1,ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){let j=t.canvas;if(!j.hasAttribute("layoutsubtree"))j.setAttribute("layoutsubtree","true");if(et.parentNode!==j){j.appendChild(et),d.add(v),j.onpaint=(ct)=>{let _t=ct.changedElements;for(let nt of d)if(_t.includes(nt.image))nt.needsUpdate=!0},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,et);else{let{RGBA:_t,RGBA:nt,UNSIGNED_BYTE:ft}=t;t.texElementImage2D(t.TEXTURE_2D,0,_t,nt,ft,et)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Nt&&re){let j=Ae(Pt[0]);n.texStorage2D(t.TEXTURE_2D,lt,ut,j.width,j.height)}for(let j=0,ct=Pt.length;j<ct;j++)if(rt=Pt[j],Nt){if(B)n.texSubImage2D(t.TEXTURE_2D,j,0,0,xt,Rt,rt)}else n.texImage2D(t.TEXTURE_2D,j,ut,xt,Rt,rt);v.generateMipmaps=!1}else if(Nt){if(re){let j=Ae(et);n.texStorage2D(t.TEXTURE_2D,lt,ut,j.width,j.height)}if(B)n.texSubImage2D(t.TEXTURE_2D,0,0,0,xt,Rt,et)}else n.texImage2D(t.TEXTURE_2D,0,ut,xt,Rt,et);if(f(v))C(Z);if(ht.__version=ot.version,v.onUpdate)v.onUpdate(v)}E.__version=v.version}function Ot(E,v,U){if(v.image.length!==6)return;let Z=Q(E,v),it=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+U);let ot=i.get(it);if(it.version!==ot.__version||Z===!0){n.activeTexture(t.TEXTURE0+U);let ht=qt.getPrimaries(qt.workingColorSpace),K=v.colorSpace===Ki?null:qt.getPrimaries(v.colorSpace),et=v.colorSpace===Ki||ht===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let xt=v.isCompressedTexture||v.image[0].isCompressedTexture,Rt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++){if(!xt&&!Rt)ut[nt]=m(v.image[nt],!0,s.maxCubemapSize);else ut[nt]=Rt?v.image[nt].image:v.image[nt];ut[nt]=ae(v,ut[nt])}let rt=ut[0],Pt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),re=_(v.internalFormat,Pt,Nt,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,lt=ot.__version===void 0||Z===!0,j=it.dataReady,ct=I(v,rt);Gt(t.TEXTURE_CUBE_MAP,v);let _t;if(xt){if(B&&lt)n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,re,rt.width,rt.height);for(let nt=0;nt<6;nt++){_t=ut[nt].mipmaps;for(let ft=0;ft<_t.length;ft++){let Ht=_t[ft];if(v.format!==Xn)if(Pt!==null)if(B){if(j)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,0,0,Ht.width,Ht.height,Pt,Ht.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,re,Ht.width,Ht.height,0,Ht.data);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(B){if(j)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,0,0,Ht.width,Ht.height,Pt,Nt,Ht.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,re,Ht.width,Ht.height,0,Pt,Nt,Ht.data)}}}else{if(_t=v.mipmaps,B&&lt){if(_t.length>0)ct++;let nt=Ae(ut[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,re,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Rt){if(B){if(j)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,Pt,Nt,ut[nt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,re,ut[nt].width,ut[nt].height,0,Pt,Nt,ut[nt].data);for(let ft=0;ft<_t.length;ft++){let ge=_t[ft].image[nt].image;if(B){if(j)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,0,0,ge.width,ge.height,Pt,Nt,ge.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,re,ge.width,ge.height,0,Pt,Nt,ge.data)}}else{if(B){if(j)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt,Nt,ut[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,re,Pt,Nt,ut[nt]);for(let ft=0;ft<_t.length;ft++){let Ht=_t[ft];if(B){if(j)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,0,0,Pt,Nt,Ht.image[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,re,Pt,Nt,Ht.image[nt])}}}if(f(v))C(t.TEXTURE_CUBE_MAP);if(ot.__version=it.version,v.onUpdate)v.onUpdate(v)}E.__version=v.version}function It(E,v,U,Z,it,ot){let ht=r.convert(U.format,U.colorSpace),K=r.convert(U.type),et=_(U.internalFormat,ht,K,U.normalized,U.colorSpace),xt=i.get(v),Rt=i.get(U);if(Rt.__renderTarget=v,!xt.__hasExternalTextures){let ut=Math.max(1,v.width>>ot),rt=Math.max(1,v.height>>ot);if(it===t.TEXTURE_3D||it===t.TEXTURE_2D_ARRAY)n.texImage3D(it,ot,et,ut,rt,v.depth,0,ht,K,null);else n.texImage2D(it,ot,et,ut,rt,0,ht,K,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,E),F(v))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,it,Rt.__webglTexture,0,Be(v));else if(it===t.TEXTURE_2D||it>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,Z,it,Rt.__webglTexture,ot);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(E,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){let Z=v.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,ot=b(v.stencilBuffer,it),ht=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(F(v))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be(v),ot,v.width,v.height);else if(U)t.renderbufferStorageMultisample(t.RENDERBUFFER,Be(v),ot,v.width,v.height);else t.renderbufferStorage(t.RENDERBUFFER,ot,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ht,t.RENDERBUFFER,E)}else{let Z=v.textures;for(let it=0;it<Z.length;it++){let ot=Z[it],ht=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),et=_(ot.internalFormat,ht,K,ot.normalized,ot.colorSpace);if(F(v))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be(v),et,v.width,v.height);else if(U)t.renderbufferStorageMultisample(t.RENDERBUFFER,Be(v),et,v.width,v.height);else t.renderbufferStorage(t.RENDERBUFFER,et,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Zt(E,v,U){let Z=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(v.depthTexture);if(it.__renderTarget=v,!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0;if(Z){if(it.__webglInit===void 0)it.__webglInit=!0,v.depthTexture.addEventListener("dispose",R);if(it.__webglTexture===void 0){it.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,it.__webglTexture),Gt(t.TEXTURE_CUBE_MAP,v.depthTexture);let xt=r.convert(v.depthTexture.format),Rt=r.convert(v.depthTexture.type),ut;if(v.depthTexture.format===Zi)ut=t.DEPTH_COMPONENT24;else if(v.depthTexture.format===$i)ut=t.DEPTH24_STENCIL8;for(let rt=0;rt<6;rt++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ut,v.width,v.height,0,xt,Rt,null)}}else X(v.depthTexture,0);let ot=it.__webglTexture,ht=Be(v),K=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,et=v.depthTexture.format===$i?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zi)if(F(v))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,et,K,ot,0,ht);else t.framebufferTexture2D(t.FRAMEBUFFER,et,K,ot,0);else if(v.depthTexture.format===$i)if(F(v))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,et,K,ot,0,ht);else t.framebufferTexture2D(t.FRAMEBUFFER,et,K,ot,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(E){let v=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(v.__depthDisposeCallback)v.__depthDisposeCallback();if(Z){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)Zt(v.__webglFramebuffer[Z],E,Z);else{let Z=E.texture.mipmaps;if(Z&&Z.length>0)Zt(v.__webglFramebuffer[0],E,0);else Zt(v.__webglFramebuffer,E,0)}else if(U){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=t.createRenderbuffer(),Fe(v.__webglDepthbuffer[Z],E,!1);else{let it=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}else{let Z=E.texture.mipmaps;if(Z&&Z.length>0)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer);if(v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Fe(v.__webglDepthbuffer,E,!1);else{let it=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(E,v,U){let Z=i.get(E);if(v!==void 0)It(Z.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(U!==void 0)Kt(E)}function Qt(E){let v=E.texture,U=i.get(E),Z=i.get(v);E.addEventListener("dispose",x);let it=E.textures,ot=E.isWebGLCubeRenderTarget===!0,ht=it.length>1;if(!ht){if(Z.__webglTexture===void 0)Z.__webglTexture=t.createTexture();Z.__version=v.version,a.memory.textures++}if(ot){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let et=0;et<v.mipmaps.length;et++)U.__webglFramebuffer[K][et]=t.createFramebuffer()}else U.__webglFramebuffer[K]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)U.__webglFramebuffer[K]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ht)for(let K=0,et=it.length;K<et;K++){let xt=i.get(it[K]);if(xt.__webglTexture===void 0)xt.__webglTexture=t.createTexture(),a.memory.textures++}if(E.samples>0&&F(E)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<it.length;K++){let et=it[K];U.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let xt=r.convert(et.format,et.colorSpace),Rt=r.convert(et.type),ut=_(et.internalFormat,xt,Rt,et.normalized,et.colorSpace,E.isXRRenderTarget===!0),rt=Be(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,ut,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,U.__webglColorRenderbuffer[K])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer)U.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,E,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ot){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Gt(t.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)It(U.__webglFramebuffer[K][et],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else It(U.__webglFramebuffer[K],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);if(f(v))C(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ht){for(let K=0,et=it.length;K<et;K++){let xt=it[K],Rt=i.get(xt),ut=t.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)ut=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(ut,Rt.__webglTexture),Gt(ut,xt),It(U.__webglFramebuffer,E,xt,t.COLOR_ATTACHMENT0+K,ut,0),f(xt))C(ut)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)K=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(K,Z.__webglTexture),Gt(K,v),v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)It(U.__webglFramebuffer[et],E,v,t.COLOR_ATTACHMENT0,K,et);else It(U.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,K,0);if(f(v))C(K);n.unbindTexture()}if(E.depthBuffer)Kt(E)}function Xe(E){let v=E.textures;for(let U=0,Z=v.length;U<Z;U++){let it=v[U];if(f(it)){let ot=T(E),ht=i.get(it).__webglTexture;n.bindTexture(ot,ht),C(ot),n.unbindTexture()}}}let ye=[],sn=[];function Oe(E){if(E.samples>0){if(F(E)===!1){let{textures:v,width:U,height:Z}=E,it=t.COLOR_BUFFER_BIT,ot=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ht=i.get(E),K=v.length>1;if(K)for(let xt=0;xt<v.length;xt++)n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let et=E.texture.mipmaps;if(et&&et.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(E.resolveDepthBuffer){if(E.depthBuffer)it|=t.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)it|=t.STENCIL_BUFFER_BIT}if(K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ht.__webglColorRenderbuffer[xt]);let Rt=i.get(v[xt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Rt,0)}if(t.blitFramebuffer(0,0,U,Z,0,0,U,Z,it,t.NEAREST),l===!0){if(ye.length=0,sn.length=0,ye.push(t.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1)ye.push(ot),sn.push(ot),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,sn);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ye)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let xt=0;xt<v.length;xt++){n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.RENDERBUFFER,ht.__webglColorRenderbuffer[xt]);let Rt=i.get(v[xt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.TEXTURE_2D,Rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Be(E){return Math.min(s.maxSamples,E.samples)}function F(E){let v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rn(E){let v=a.render.frame;if(h.get(E)!==v)h.set(E,v),E.update()}function ae(E,v){let{colorSpace:U,format:Z,type:it}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return v;if(U!==tc&&U!==Ki)if(qt.getTransfer(U)===ue){if(Z!==Xn||it!==Pn)Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",U);return v}function Ae(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)c.width=E.displayWidth,c.height=E.displayHeight;else c.width=E.width,c.height=E.height;return c}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.getTextureUnits=w,this.setTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=tt,this.rebindTextures=ce,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function p_(t,e){function n(i,s=Ki){let r,a=qt.getTransfer(s);if(i===Pn)return t.UNSIGNED_BYTE;if(i===_l)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vu)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wu)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hu)return t.BYTE;if(i===Gu)return t.SHORT;if(i===Nr)return t.UNSIGNED_SHORT;if(i===xl)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===We)return t.HALF_FLOAT;if(i===Xu)return t.ALPHA;if(i===qu)return t.RGB;if(i===Xn)return t.RGBA;if(i===Zi)return t.DEPTH_COMPONENT;if(i===$i)return t.DEPTH_STENCIL;if(i===Yu)return t.RED;if(i===yl)return t.RED_INTEGER;if(i===Ji)return t.RG;if(i===Ml)return t.RG_INTEGER;if(i===Sl)return t.RGBA_INTEGER;if(i===Ya||i===Za||i===$a||i===Ja)if(a===ue)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Tl||i===wl||i===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ka||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Il)return r.COMPRESSED_R11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ka)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nl||i===Dl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Zl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===Kl||i===Qa||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Xs)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fo(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Ee({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Ke(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qd extends di{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",A=new Xd,m={},f=e.getContextAttributes(),C=null,T=null,_=[],b=[],I=new wt,R=null,x=null,M=new Ve;M.viewport=new we;let H=new Ve;H.viewport=new we;let L=[M,H],S=new Tc,P=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=_[Q];if(st===void 0)st=new Fr,_[Q]=st;return st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=_[Q];if(st===void 0)st=new Fr,_[Q]=st;return st.getGripSpace()},this.getHand=function(Q){let st=_[Q];if(st===void 0)st=new Fr,_[Q]=st;return st.getHandSpace()};function D(Q){let st=b.indexOf(Q.inputSource);if(st===-1)return;let at=_[st];if(at!==void 0)at.update(Q.inputSource,Q.frame,l||r),at.dispatchEvent({type:Q.type,data:Q.inputSource})}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",N);for(let Q=0;Q<_.length;Q++){let st=b[Q];if(st===null)continue;b[Q]=null,_[Q].disconnect(st)}P=null,w=null,A.reset();for(let Q in m)delete m[Q];if(t.setRenderTarget(C),u=null,d=null,h=null,i=null,T=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),x!==null){let Q=x.camera;Q.fov=x.fov,Q.zoom=x.zoom,Q.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){if(s=Q,n.isPresenting===!0)Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){if(a=Q,n.isPresenting===!0)Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",N),f.xrCompatible!==!0)await e.makeXRCompatible();if(R=t.getPixelRatio(),t.getSize(I),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let at={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Pe(u.framebufferWidth,u.framebufferHeight,{format:Xn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let at=null,Lt=null,Ot=null;if(f.depth)Ot=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=f.stencil?$i:Zi,Lt=f.stencil?Xs:Pi;let It={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Pe(d.textureWidth,d.textureHeight,{format:Xn,type:Pn,depthTexture:new ji(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function N(Q){for(let st=0;st<Q.removed.length;st++){let at=Q.removed[st],Lt=b.indexOf(at);if(Lt>=0)b[Lt]=null,_[Lt].disconnect(at)}for(let st=0;st<Q.added.length;st++){let at=Q.added[st],Lt=b.indexOf(at);if(Lt===-1){for(let It=0;It<_.length;It++)if(It>=b.length){b.push(at),Lt=It;break}else if(b[It]===null){b[It]=at,Lt=It;break}if(Lt===-1)break}let Ot=_[Lt];if(Ot)Ot.connect(at)}}let X=new k,G=new k;function Y(Q,st,at){X.setFromMatrixPosition(st.matrixWorld),G.setFromMatrixPosition(at.matrixWorld);let Lt=X.distanceTo(G),Ot=st.projectionMatrix.elements,It=at.projectionMatrix.elements,Fe=Ot[14]/(Ot[10]-1),Zt=Ot[14]/(Ot[10]+1),Kt=(Ot[9]+1)/Ot[5],ce=(Ot[9]-1)/Ot[5],Qt=(Ot[8]-1)/Ot[0],Xe=(It[8]+1)/It[0],ye=Fe*Qt,sn=Fe*Xe,Oe=Lt/(-Qt+Xe),Be=Oe*-Qt;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Be),Q.translateZ(Oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ot[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let F=Fe+Oe,rn=Zt+Oe,ae=ye-Be,Ae=sn+(Lt-Be),E=Kt*Zt/rn*F,v=ce*Zt/rn*F;Q.projectionMatrix.makePerspective(ae,Ae,E,v,F,rn),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function tt(Q,st){if(st===null)Q.matrixWorld.copy(Q.matrix);else Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix);Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let{near:st,far:at}=Q;if(A.texture!==null){if(A.depthNear>0)st=A.depthNear;if(A.depthFar>0)at=A.depthFar}if(S.near=H.near=M.near=st,S.far=H.far=M.far=at,P!==S.near||w!==S.far)i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,w=S.far;S.layers.mask=Q.layers.mask|6,M.layers.mask=S.layers.mask&-5,H.layers.mask=S.layers.mask&-3;let Lt=Q.parent,Ot=S.cameras;tt(S,Lt);for(let It=0;It<Ot.length;It++)tt(Ot[It],Lt);if(Ot.length===2)Y(S,M,H);else S.projectionMatrix.copy(M.projectionMatrix);if(x===null&&Q.isPerspectiveCamera)x={camera:Q,fov:Q.fov,zoom:Q.zoom};gt(Q,S,Lt)};function gt(Q,st,at){if(at===null)Q.matrix.copy(st.matrixWorld);else Q.matrix.copy(at.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld);if(Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera)Q.fov=br*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1}this.getCamera=function(){return S},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(Q){if(o=Q,d!==null)d.fixedFoveation=Q;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=Q},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(S)},this.getCameraTexture=function(Q){return m[Q]};let St=null;function Jt(Q,st){if(c=st.getViewerPose(l||r),p=st,c!==null){let at=c.views;if(u!==null)t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T);let Lt=!1;if(at.length!==S.cameras.length)S.cameras.length=0,Lt=!0;for(let Zt=0;Zt<at.length;Zt++){let Kt=at[Zt],ce=null;if(u!==null)ce=u.getViewport(Kt);else{let Xe=h.getViewSubImage(d,Kt);if(ce=Xe.viewport,Zt===0)t.setRenderTargetTextures(T,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(T)}let Qt=L[Zt];if(Qt===void 0)Qt=new Ve,Qt.layers.enable(Zt),Qt.viewport=new we,L[Zt]=Qt;if(Qt.matrix.fromArray(Kt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Kt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ce.x,ce.y,ce.width,ce.height),Zt===0)S.matrix.copy(Qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);if(Lt===!0)S.cameras.push(Qt)}let Ot=i.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let Zt=h.getDepthInformation(at[0]);if(Zt&&Zt.isValid&&Zt.texture)A.init(Zt,i.renderState)}if(Ot&&Ot.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let Zt=0;Zt<at.length;Zt++){let Kt=at[Zt].camera;if(Kt){let ce=m[Kt];if(!ce)ce=new fo,m[Kt]=ce;let Qt=h.getCameraImage(Kt);ce.sourceTexture=Qt}}}}for(let at=0;at<_.length;at++){let Lt=b[at],Ot=_[at];if(Lt!==null&&Ot!==void 0)Ot.update(Lt,st,l||r)}if(St)St(Q,st);if(st.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:st});p=null}let Gt=new Dd;Gt.setAnimationLoop(Jt),this.setAnimationLoop=function(Q){St=Q},this.dispose=function(){}}}var x_=new ee,Yd=new kt;Yd.set(-1,0,0,0,1,0,0,0,1);function __(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,hc(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,C,T,_){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),d(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),h(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),u(m,f),f.isMeshPhysicalMaterial)p(m,f,_)}else if(f.isMeshMatcapMaterial)r(m,f),g(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),A(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,C,T);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let C=e.get(f),T=C.envMap,_=C.envMapRotation;if(T){if(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Yd);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,C,T){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=T*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function d(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function u(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function p(m,f,C){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.retroreflectivity>0)m.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,f){if(f.matcap)m.matcap.value=f.matcap}function A(m,f){let C=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function v_(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let I=b.program;i.uniformBlockBinding(_,I)}function c(_,b){let I=s[_.id];if(I===void 0)m(_),I=h(_),s[_.id]=I,_.addEventListener("dispose",C);let R=b.program;i.updateUBOMapping(_,R);let x=e.render.frame;if(r[_.id]!==x)u(_),r[_.id]=x}function h(_){let b=d();_.__bindingPointIndex=b;let I=t.createBuffer(),R=_.__size,x=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,I),t.bufferData(t.UNIFORM_BUFFER,R,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,I),I}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],I=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let x=0,M=I.length;x<M;x++){let H=I[x];if(Array.isArray(H))for(let L=0,S=H.length;L<S;L++)p(H[L],x,L,R);else p(H,x,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,b,I,R){if(A(_,b,I,R)===!0){let{__offset:x,value:M}=_;if(Array.isArray(M)){let H=0;for(let L=0;L<M.length;L++){let S=M[L],P=f(S);if(g(S,_.__data,H),typeof S!=="number"&&typeof S!=="boolean"&&!S.isMatrix3&&!ArrayBuffer.isView(S))H+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else g(M,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,_.__data)}}function g(_,b,I){if(typeof _==="number"||typeof _==="boolean")b[0]=_;else if(_.isMatrix3)b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0;else if(ArrayBuffer.isView(_))b.set(new _.constructor(_.buffer,_.byteOffset,b.length));else _.toArray(b,I)}function A(_,b,I,R){let x=_.value,M=b+"_"+I;if(R[M]===void 0){if(typeof x==="number"||typeof x==="boolean")R[M]=x;else if(ArrayBuffer.isView(x))R[M]=x.slice();else R[M]=x.clone();return!0}else{let H=R[M];if(typeof x==="number"||typeof x==="boolean"){if(H!==x)return R[M]=x,!0}else if(ArrayBuffer.isView(x))return!0;else if(H.equals(x)===!1)return H.copy(x),!0}return!1}function m(_){let b=_.uniforms,I=0,R=16;for(let M=0,H=b.length;M<H;M++){let L=Array.isArray(b[M])?b[M]:[b[M]];for(let S=0,P=L.length;S<P;S++){let w=L[S],D=Array.isArray(w.value)?w.value:[w.value];for(let z=0,N=D.length;z<N;z++){let X=D[z],G=f(X),Y=I%R,tt=Y%G.boundary,gt=Y+tt;if(I+=tt,gt!==0&&R-gt<G.storage)I+=R-gt;w.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=I,I+=G.storage}}}let x=I%R;if(x>0)I+=R-x;return _.__size=I,_.__cache={},this}function f(_){let b={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")b.boundary=4,b.storage=4;else if(_.isVector2)b.boundary=8,b.storage=8;else if(_.isVector3||_.isColor)b.boundary=16,b.storage=12;else if(_.isVector4)b.boundary=16,b.storage=16;else if(_.isMatrix3)b.boundary=48,b.storage=48;else if(_.isMatrix4)b.boundary=64,b.storage=64;else if(_.isTexture)Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))b.boundary=16,b.storage=_.byteLength;else Dt("WebGLRenderer: Unsupported uniform value type.",_);return b}function C(_){let b=_.target;b.removeEventListener("dispose",C);let I=a.indexOf(b.__bindingPointIndex);a.splice(I,1),t.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let _ in s)t.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function M_(){if(Yn===null)Yn=new oo(y_,16,16,Ji,We),Yn.name="DFG_LUT",Yn.minFilter=an,Yn.magFilter=an,Yn.wrapS=Xa,Yn.wrapT=Xa,Yn.generateMipmaps=!1,Yn.needsUpdate=!0;return Yn}class zc{constructor(t={}){let{canvas:e=ed(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Pn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let g=u,A=new Set([Sl,Ml,yl]),m=new Set([Pn,Pi,Nr,Xs,_l,vl]),f=new Uint32Array(4),C=new Int32Array(4),T=new k,_=null,b=null,I=[],R=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,H=!1,L=null,S=null,P=null,w=null;this._outputColorSpace=ja;let D=0,z=0,N=null,X=-1,G=null,Y=new we,tt=new we,gt=null,St=new Et(0),Jt=0,Gt=e.width,Q=e.height,st=1,at=null,Lt=null,Ot=new we(0,0,Gt,Q),It=new we(0,0,Gt,Q),Fe=!1,Zt=new kr,Kt=!1,ce=!1,Qt=new ee,Xe=new k,ye=new we,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Be(){return N===null?st:1}let F=n;function rn(y,O){return e.getContext(y,O)}let ae,Ae,E,v,U,Z,it,ot,ht,K,et,xt,Rt,ut,rt,Pt,Nt,re,B,lt,j,ct,_t;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${ru}`);if(e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",oe,!1),F===null){if(F=rn("webgl2",y),F===null)if(rn("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(y){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),Bt("WebGLRenderer: "+y.message),y}function nt(){if(ae=new Rg(F),ae.init(),j=new p_(F,ae),Ae=new _g(F,ae,t,j),E=new d_(F,ae),Ae.reversedDepthBuffer&&d)E.buffers.depth.setReversed(!0);S=F.createFramebuffer(),P=F.createFramebuffer(),w=F.createFramebuffer(),v=new Pg(F),U=new Qx,Z=new f_(F,ae,E,U,Ae,j,v),it=new Ag(M),ot=new Np(F),ct=new gg(F,ot),ht=new Cg(F,ot,v,ct),K=new Ng(F,ht,ot,ct,v),re=new Lg(F,Ae,Z),rt=new vg(U),et=new Kx(M,it,ae,Ae,ct,rt),xt=new __(M,U),Rt=new t_,ut=new a_(ae),Nt=new mg(M,it,E,K,p,o),Pt=new u_(M,K,Ae),_t=new v_(F,v,Ae,E),B=new xg(F,ae,v),lt=new Ig(F,ae,v),v.programs=et.programs,M.capabilities=Ae,M.extensions=ae,M.properties=U,M.renderLists=Rt,M.shadowMap=Pt,M.state=E,M.info=v}if(g!==Pn)x=new Ug(g,e.width,e.height,a,i,s);let ft=new qd(M,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=ae.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=ae.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(y){if(y===void 0)return;st=y,this.setSize(Gt,Q,!1)},this.getSize=function(y){return y.set(Gt,Q)},this.setSize=function(y,O,J=!0){if(ft.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Gt=y,Q=O,e.width=Math.floor(y*st),e.height=Math.floor(O*st),J===!0)e.style.width=y+"px",e.style.height=O+"px";if(x!==null)x.setSize(e.width,e.height);this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Gt*st,Q*st).floor()},this.setDrawingBufferSize=function(y,O,J){Gt=y,Q=O,st=J,e.width=Math.floor(y*J),e.height=Math.floor(O*J),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(g===Pn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Y)},this.getViewport=function(y){return y.copy(Ot)},this.setViewport=function(y,O,J,V){if(y.isVector4)Ot.set(y.x,y.y,y.z,y.w);else Ot.set(y,O,J,V);E.viewport(Y.copy(Ot).multiplyScalar(st).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,O,J,V){if(y.isVector4)It.set(y.x,y.y,y.z,y.w);else It.set(y,O,J,V);E.scissor(tt.copy(It).multiplyScalar(st).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(y){E.setScissorTest(Fe=y)},this.setOpaqueSort=function(y){at=y},this.setTransparentSort=function(y){Lt=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,J=!0){let V=0;if(y){let W=!1;if(N!==null){let mt=N.texture.format;W=A.has(mt)}if(W){let mt=N.texture.type,yt=m.has(mt),pt=Nt.getClearColor(),bt=Nt.getClearAlpha(),At=pt.r,Wt=pt.g,Yt=pt.b;if(yt)f[0]=At,f[1]=Wt,f[2]=Yt,f[3]=bt,F.clearBufferuiv(F.COLOR,0,f);else C[0]=At,C[1]=Wt,C[2]=Yt,C[3]=bt,F.clearBufferiv(F.COLOR,0,C)}else V|=F.COLOR_BUFFER_BIT}if(O)V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(J)V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(V!==0)F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),L=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),Nt.dispose(),Rt.dispose(),ut.dispose(),U.dispose(),it.dispose(),K.dispose(),ct.dispose(),_t.dispose(),et.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",vh),ft.removeEventListener("sessionend",yh),Oi.stop()};function Ht(y){y.preventDefault(),Sr("WebGLRenderer: Context Lost."),H=!0}function ge(){Sr("WebGLRenderer: Context Restored."),H=!1;let y=v.autoReset,O=Pt.enabled,J=Pt.autoUpdate,V=Pt.needsUpdate,W=Pt.type;nt(),v.autoReset=y,Pt.enabled=O,Pt.autoUpdate=J,Pt.needsUpdate=V,Pt.type=W}function oe(y){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function zn(y){let O=y.target;O.removeEventListener("dispose",zn),si(O)}function si(y){Hf(y),U.remove(y)}function Hf(y){let O=U.get(y).programs;if(O!==void 0){if(O.forEach(function(J){et.releaseProgram(J)}),y.isShaderMaterial)et.releaseShaderCache(y)}}this.renderBufferDirect=function(y,O,J,V,W,mt){if(O===null)O=sn;let yt=W.isMesh&&W.matrixWorld.determinantAffine()<0,pt=Wf(y,O,J,V,W);E.setMaterial(V,yt);let bt=J.index,At=1;if(V.wireframe===!0){if(bt=ht.getWireframeAttribute(J),bt===void 0)return;At=2}let Wt=J.drawRange,Yt=J.attributes.position,Tt=Wt.start*At,le=(Wt.start+Wt.count)*At;if(mt!==null)Tt=Math.max(Tt,mt.start*At),le=Math.min(le,(mt.start+mt.count)*At);if(bt!==null)Tt=Math.max(Tt,0),le=Math.min(le,bt.count);else if(Yt!==void 0&&Yt!==null)Tt=Math.max(Tt,0),le=Math.min(le,Yt.count);let Le=le-Tt;if(Le<0||Le===1/0)return;ct.setup(W,V,pt,J,bt);let Me,me=B;if(bt!==null)Me=ot.get(bt),me=lt,me.setIndex(Me);if(W.isMesh)if(V.wireframe===!0)E.setLineWidth(V.wireframeLinewidth*Be()),me.setMode(F.LINES);else me.setMode(F.TRIANGLES);else if(W.isLine){let Ye=V.linewidth;if(Ye===void 0)Ye=1;if(E.setLineWidth(Ye*Be()),W.isLineSegments)me.setMode(F.LINES);else if(W.isLineLoop)me.setMode(F.LINE_LOOP);else me.setMode(F.LINE_STRIP)}else if(W.isPoints)me.setMode(F.POINTS);else if(W.isSprite)me.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(!ae.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ye,_multiDrawCounts:vt,_multiDrawCount:tn}=W,jt=bt?ot.get(bt).bytesPerElement:1,xn=U.get(V).currentProgram.getUniforms();for(let kn=0;kn<tn;kn++)xn.setValue(F,"_gl_DrawID",kn),me.render(Ye[kn]/jt,vt[kn])}else me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)me.renderInstances(Tt,Le,W.count);else if(J.isInstancedBufferGeometry){let Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,vt=Math.min(J.instanceCount,Ye);me.renderInstances(Tt,Le,vt)}else me.render(Tt,Le)};function _h(y,O,J,V){if(L!==null&&y.isNodeMaterial)L.setObject(V,y);if(Kt===!0)rt.setState(y,J,!1);if(y.transparent===!0&&y.side===Wn&&y.forceSinglePass===!1)y.side=Je,y.needsUpdate=!0,da(y,O,V),y.side=Gs,y.needsUpdate=!0,da(y,O,V),y.side=Wn;else da(y,O,V)}this.compile=function(y,O,J=null){if(J===null)J=y;if(L!==null)L.renderStart(y,O,J);if(b=ut.get(J),b.init(O),R.push(b),J.traverseVisible(function(W){if(W.isLight&&W.layers.test(O.layers)){if(b.pushLight(W),W.castShadow)b.pushShadow(W)}}),y!==J)y.traverseVisible(function(W){if(W.isLight&&W.layers.test(O.layers)){if(b.pushLight(W),W.castShadow)b.pushShadow(W)}});if(b.setupLights(),L!==null)L.updateLights(b.state.lightsArray);if(ce=this.localClippingEnabled,Kt=rt.init(this.clippingPlanes,ce),Kt===!0)rt.setGlobalState(this.clippingPlanes,O);if(L!==null)Pt.render(b.state.shadowsArray,J,O);let V=new Set;if(y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let mt=W.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){let pt=mt[yt];_h(pt,J,O,W),V.add(pt)}else _h(mt,J,O,W),V.add(mt)}),b=R.pop(),L!==null)L.renderEnd();return V},this.compileAsync=function(y,O,J=null){let V=this.compile(y,O,J);return new Promise((W)=>{function mt(){if(V.forEach(function(yt){let bt=U.get(yt).currentProgram;if(bt===void 0||bt.isReady())V.delete(yt)}),V.size===0){W(y);return}setTimeout(mt,10)}if(ae.get("KHR_parallel_shader_compile")!==null)mt();else setTimeout(mt,10)})};let zo=null;function Gf(y){if(zo)zo(y)}function vh(){Oi.stop()}function yh(){Oi.start()}let Oi=new Dd;if(Oi.setAnimationLoop(Gf),typeof self<"u")Oi.setContext(self);this.setAnimationLoop=function(y){zo=y,ft.setAnimationLoop(y),y===null?Oi.stop():Oi.start()},ft.addEventListener("sessionstart",vh),ft.addEventListener("sessionend",yh),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(L!==null)L.renderStart(y,O);let J=ft.enabled===!0&&ft.isPresenting===!0,V=x!==null&&(N===null||J)&&x.begin(M,N);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(O.parent===null&&O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(ft.enabled===!0&&ft.isPresenting===!0&&(x===null||x.isCompositing()===!1)){if(ft.cameraAutoUpdate===!0)ft.updateCamera(O);O=ft.getCamera()}if(y.isScene===!0)y.onBeforeRender(M,y,O,N);if(b=ut.get(y,R.length),b.init(O),b.state.textureUnits=Z.getTextureUnits(),R.push(b),Qt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Zt.setFromProjectionMatrix(Qt,ic,O.reversedDepth),ce=this.localClippingEnabled,Kt=rt.init(this.clippingPlanes,ce),_=Rt.get(y,I.length),_.init(),I.push(_),ft.enabled===!0&&ft.isPresenting===!0){let yt=M.xr.getDepthSensingMesh();if(yt!==null)ko(yt,O,-1/0,M.sortObjects)}if(ko(y,O,0,M.sortObjects),_.finish(),L!==null)L.updateLights(b.state.lightsArray);if(M.sortObjects===!0)_.sort(at,Lt);if(Oe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Oe)Nt.addToRenderList(_,y);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Kt===!0)rt.beginShadows();let W=b.state.shadowsArray;if(Pt.render(W,y,O),Kt===!0)rt.endShadows();if((V&&x.hasRenderPass())===!1){let{opaque:yt,transmissive:pt}=_;if(b.setupLights(),O.isArrayCamera){let bt=O.cameras;if(pt.length>0)for(let At=0,Wt=bt.length;At<Wt;At++){let Yt=bt[At];Sh(yt,pt,y,Yt)}if(Oe)Nt.render(y);for(let At=0,Wt=bt.length;At<Wt;At++){let Yt=bt[At];Mh(_,y,Yt,Yt.viewport)}}else{if(pt.length>0)Sh(yt,pt,y,O);if(Oe)Nt.render(y);Mh(_,y,O)}}if(N!==null&&z===0)Z.updateMultisampleRenderTarget(N),Z.updateRenderTargetMipmap(N);if(V)x.end(M);if(y.isScene===!0)y.onAfterRender(M,y,O);if(ct.resetDefaultState(),X=-1,G=null,R.pop(),R.length>0){if(b=R[R.length-1],Z.setTextureUnits(b.state.textureUnits),Kt===!0)rt.setGlobalState(M.clippingPlanes,b.state.camera)}else b=null;if(I.pop(),I.length>0)_=I[I.length-1];else _=null;if(L!==null)L.renderEnd()};function ko(y,O,J,V){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(O)}else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight){if(b.pushLight(y),y.castShadow)b.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Zt)){if(V)ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Qt);let yt=K.update(y),pt=y.material;if(pt.visible)_.push(y,yt,pt,J,ye.z,null,O)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(Zt)){let yt=K.update(y),pt=y.material;if(V){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();ye.copy(y.boundingSphere.center)}else{if(yt.boundingSphere===null)yt.computeBoundingSphere();ye.copy(yt.boundingSphere.center)}ye.applyMatrix4(y.matrixWorld).applyMatrix4(Qt)}if(Array.isArray(pt)){let bt=yt.groups;for(let At=0,Wt=bt.length;At<Wt;At++){let Yt=bt[At],Tt=pt[Yt.materialIndex];if(Tt&&Tt.visible)_.push(y,yt,Tt,J,ye.z,Yt,O)}}else if(pt.visible)_.push(y,yt,pt,J,ye.z,null,O)}}}let mt=y.children;for(let yt=0,pt=mt.length;yt<pt;yt++)ko(mt[yt],O,J,V)}function Mh(y,O,J,V){let{opaque:W,transmissive:mt,transparent:yt}=y;if(b.setupLightsView(J),Kt===!0)rt.setGlobalState(M.clippingPlanes,J);if(V)E.viewport(Y.copy(V));if(W.length>0)ua(W,O,J);if(mt.length>0)ua(mt,O,J);if(yt.length>0)ua(yt,O,J);E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Sh(y,O,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Tt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Pe(1,1,{generateMipmaps:!0,type:Tt?We:Pn,minFilter:Yi,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let mt=b.state.transmissionRenderTarget[V.id],yt=V.viewport||Y;mt.setSize(yt.z*M.transmissionResolutionScale,yt.w*M.transmissionResolutionScale);let pt=M.getRenderTarget(),bt=M.getActiveCubeFace(),At=M.getActiveMipmapLevel();if(M.setRenderTarget(mt),M.getClearColor(St),Jt=M.getClearAlpha(),Jt<1)M.setClearColor(16777215,0.5);if(M.clear(),Oe)Nt.render(J);let Wt=M.toneMapping;M.toneMapping=In;let Yt=V.viewport;if(V.viewport!==void 0)V.viewport=void 0;if(b.setupLightsView(V),Kt===!0)rt.setGlobalState(M.clippingPlanes,V);if(ua(y,J,V),Z.updateMultisampleRenderTarget(mt),Z.updateRenderTargetMipmap(mt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let le=0,Le=O.length;le<Le;le++){let Me=O[le],{object:me,geometry:Ye,material:vt,group:tn}=Me;if(vt.side===Wn&&me.layers.test(V.layers)){let jt=vt.side;vt.side=Je,vt.needsUpdate=!0,bh(me,J,V,Ye,vt,tn),vt.side=jt,vt.needsUpdate=!0,Tt=!0}}if(Tt===!0)Z.updateMultisampleRenderTarget(mt),Z.updateRenderTargetMipmap(mt)}if(M.setRenderTarget(pt,bt,At),M.setClearColor(St,Jt),Yt!==void 0)V.viewport=Yt;M.toneMapping=Wt}function ua(y,O,J){let V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,mt=y.length;W<mt;W++){let yt=y[W],{object:pt,geometry:bt,group:At}=yt,Wt=yt.material;if(Wt.allowOverride===!0&&V!==null)Wt=V;if(pt.layers.test(J.layers))bh(pt,O,J,bt,Wt,At)}}function bh(y,O,J,V,W,mt){if(L!==null&&W.isNodeMaterial)L.setObject(y,W);if(y.onBeforeRender(M,O,J,V,W,mt),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(M,O,J,V,y,mt),W.transparent===!0&&W.side===Wn&&W.forceSinglePass===!1)W.side=Je,W.needsUpdate=!0,M.renderBufferDirect(J,O,V,W,y,mt),W.side=Gs,W.needsUpdate=!0,M.renderBufferDirect(J,O,V,W,y,mt),W.side=Wn;else M.renderBufferDirect(J,O,V,W,y,mt);y.onAfterRender(M,O,J,V,W,mt)}function da(y,O,J){if(O.isScene!==!0)O=sn;let V=U.get(y),W=b.state.lights,mt=b.state.shadowsArray,yt=W.state.version,pt=et.getParameters(y,W.state,mt,O,J,b.state.lightProbeGridArray),bt=et.getProgramCacheKey(pt),At=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Wt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(V.envMap=it.get(y.envMap||V.environment,Wt),V.envMapRotation=V.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,At===void 0)y.addEventListener("dispose",zn),At=new Map,V.programs=At;let Yt=At.get(bt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===yt)return wh(y,pt),Yt}else{if(pt.uniforms=et.getUniforms(y),L!==null&&y.isNodeMaterial)L.build(y,J,pt);y.onBeforeCompile(pt,M),Yt=et.acquireProgram(pt,bt),At.set(bt,Yt),V.uniforms=pt.uniforms}let Tt=V.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)Tt.clippingPlanes=rt.uniform;if(wh(y,pt),V.needsLights=qf(y),V.lightsStateVersion=yt,V.needsLights)Tt.ambientLightColor.value=W.state.ambient,Tt.lightProbe.value=W.state.probe,Tt.sunLights.value=W.state.sun,Tt.sunLightShadows.value=W.state.sunShadow,Tt.directionalLights.value=W.state.directional,Tt.directionalLightShadows.value=W.state.directionalShadow,Tt.spotLights.value=W.state.spot,Tt.spotLightShadows.value=W.state.spotShadow,Tt.rectAreaLights.value=W.state.rectArea,Tt.ltc_1.value=W.state.rectAreaLTC1,Tt.ltc_2.value=W.state.rectAreaLTC2,Tt.pointLights.value=W.state.point,Tt.pointLightShadows.value=W.state.pointShadow,Tt.hemisphereLights.value=W.state.hemi,Tt.sunShadowMatrix.value=W.state.sunShadowMatrix,Tt.sunShadowCascade.value=W.state.sunShadowCascade,Tt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Tt.spotLightMatrix.value=W.state.spotLightMatrix,Tt.spotLightMap.value=W.state.spotLightMap,Tt.pointShadowMatrix.value=W.state.pointShadowMatrix;return V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Yt,V.uniformsList=null,Yt}function Th(y){if(y.uniformsList===null){let O=y.currentProgram.getUniforms();y.uniformsList=$r.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function wh(y,O){let J=U.get(y);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Vf(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;T.setFromMatrixPosition(O.matrixWorld);for(let J=0,V=y.length;J<V;J++){let W=y[J];if(W.texture!==null&&W.boundingBox.containsPoint(T))return W}return null}function Wf(y,O,J,V,W){if(O.isScene!==!0)O=sn;Z.resetTextureUnits();let mt=O.fog,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,pt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:qt.workingColorSpace,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,At=it.get(V.envMap||yt,bt),Wt=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Yt=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!J.morphAttributes.position,le=!!J.morphAttributes.normal,Le=!!J.morphAttributes.color,Me=In;if(V.toneMapped){if(N===null||N.isXRRenderTarget===!0)Me=M.toneMapping}let me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ye=me!==void 0?me.length:0,vt=U.get(V),tn=b.state.lights;if(Kt===!0){if(ce===!0||y!==G){let xe=y===G&&V.id===X;rt.setState(V,y,xe)}}let jt=!1;if(V.version===vt.__version){if(vt.needsLights&&vt.lightsStateVersion!==tn.state.version)jt=!0;else if(vt.outputColorSpace!==pt)jt=!0;else if(W.isBatchedMesh&&vt.batching===!1)jt=!0;else if(!W.isBatchedMesh&&vt.batching===!0)jt=!0;else if(W.isBatchedMesh&&vt.batchingColor===!0&&W._colorsTexture===null)jt=!0;else if(W.isBatchedMesh&&vt.batchingColor===!1&&W._colorsTexture!==null)jt=!0;else if(W.isInstancedMesh&&vt.instancing===!1)jt=!0;else if(!W.isInstancedMesh&&vt.instancing===!0)jt=!0;else if(W.isSkinnedMesh&&vt.skinning===!1)jt=!0;else if(!W.isSkinnedMesh&&vt.skinning===!0)jt=!0;else if(W.isInstancedMesh&&vt.instancingColor===!0&&W.instanceColor===null)jt=!0;else if(W.isInstancedMesh&&vt.instancingColor===!1&&W.instanceColor!==null)jt=!0;else if(W.isInstancedMesh&&vt.instancingMorph===!0&&W.morphTexture===null)jt=!0;else if(W.isInstancedMesh&&vt.instancingMorph===!1&&W.morphTexture!==null)jt=!0;else if(vt.envMap!==At)jt=!0;else if(V.fog===!0&&vt.fog!==mt)jt=!0;else if(vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==rt.numPlanes||vt.numIntersection!==rt.numIntersection))jt=!0;else if(vt.vertexAlphas!==Wt)jt=!0;else if(vt.vertexTangents!==Yt)jt=!0;else if(vt.morphTargets!==Tt)jt=!0;else if(vt.morphNormals!==le)jt=!0;else if(vt.morphColors!==Le)jt=!0;else if(vt.toneMapping!==Me)jt=!0;else if(vt.morphTargetsCount!==Ye)jt=!0;else if(!!vt.lightProbeGrid!==b.state.lightProbeGridArray.length>0)jt=!0}else jt=!0,vt.__version=V.version;let xn=vt.currentProgram;if(jt===!0){if(xn=da(V,O,W),L&&V.isNodeMaterial)L.onUpdateProgram(V,xn,vt)}let kn=!1,Mi=!1,_s=!1,fe=xn.getUniforms(),Ie=vt.uniforms;if(E.useProgram(xn.program))kn=!0,Mi=!0,_s=!0;if(V.id!==X)X=V.id,Mi=!0;if(vt.needsLights){let xe=Vf(b.state.lightProbeGridArray,W);if(vt.lightProbeGrid!==xe)vt.lightProbeGrid=xe,Mi=!0}if(kn||G!==y){if(E.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();fe.setValue(F,"projectionMatrix",y.projectionMatrix),fe.setValue(F,"viewMatrix",y.matrixWorldInverse);let bi=fe.map.cameraPosition;if(bi!==void 0)bi.setValue(F,Xe.setFromMatrixPosition(y.matrixWorld));if(Ae.logarithmicDepthBuffer)fe.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)fe.setValue(F,"isOrthographic",y.isOrthographicCamera===!0);if(G!==y)G=y,Mi=!0,_s=!0}if(vt.needsLights){if(tn.state.sunShadowMap.length>0)fe.setValue(F,"sunShadowMap",tn.state.sunShadowMap,Z);if(tn.state.directionalShadowMap.length>0)fe.setValue(F,"directionalShadowMap",tn.state.directionalShadowMap,Z);if(tn.state.spotShadowMap.length>0)fe.setValue(F,"spotShadowMap",tn.state.spotShadowMap,Z);if(tn.state.pointShadowMap.length>0)fe.setValue(F,"pointShadowMap",tn.state.pointShadowMap,Z)}if(W.isSkinnedMesh){fe.setOptional(F,W,"bindMatrix"),fe.setOptional(F,W,"bindMatrixInverse");let xe=W.skeleton;if(xe){if(xe.boneTexture===null)xe.computeBoneTexture();fe.setValue(F,"boneTexture",xe.boneTexture,Z)}}if(W.isBatchedMesh){if(fe.setOptional(F,W,"batchingTexture"),fe.setValue(F,"batchingTexture",W._matricesTexture,Z),fe.setOptional(F,W,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",W._indirectTexture,Z),fe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null)fe.setValue(F,"batchingColorTexture",W._colorsTexture,Z)}let Si=J.morphAttributes;if(Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)re.update(W,J,xn);if(Mi||vt.receiveShadow!==W.receiveShadow)vt.receiveShadow=W.receiveShadow,fe.setValue(F,"receiveShadow",W.receiveShadow);if((V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null)Ie.envMapIntensity.value=O.environmentIntensity;if(Ie.dfgLUT!==void 0)Ie.dfgLUT.value=M_();if(Mi){if(fe.setValue(F,"toneMappingExposure",M.toneMappingExposure),vt.needsLights)Xf(Ie,_s);if(mt&&V.fog===!0)xt.refreshFogUniforms(Ie,mt);if(xt.refreshMaterialUniforms(Ie,V,st,Q,b.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){let xe=vt.lightProbeGrid;Ie.probesSH.value=xe.texture,Ie.probesMin.value.copy(xe.boundingBox.min),Ie.probesMax.value.copy(xe.boundingBox.max),Ie.probesResolution.value.copy(xe.resolution)}$r.upload(F,Th(vt),Ie,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0)$r.upload(F,Th(vt),Ie,Z),V.uniformsNeedUpdate=!1;if(V.isSpriteMaterial)fe.setValue(F,"center",W.center);if(fe.setValue(F,"modelViewMatrix",W.modelViewMatrix),fe.setValue(F,"normalMatrix",W.normalMatrix),fe.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let xe=V.uniformsGroups;for(let bi=0,vs=xe.length;bi<vs;bi++){let Ah=xe[bi];_t.update(Ah,xn),_t.bind(Ah,xn)}}return xn}function Xf(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function qf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,O,J){let V=U.get(y);if(V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1)V.__useRenderToTexture=!1;U.get(y.texture).__webglTexture=O,U.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){let J=U.get(y);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,J=0){N=y,D=O,z=J;let V=null,W=!1,mt=!1;if(y){let pt=U.get(y);if(pt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(F.FRAMEBUFFER,pt.__webglFramebuffer),Y.copy(y.viewport),tt.copy(y.scissor),gt=y.scissorTest,E.viewport(Y),E.scissor(tt),E.setScissorTest(gt),X=-1;return}else if(pt.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(pt.__hasExternalTextures)Z.rebindTextures(y,U.get(y.texture).__webglTexture,U.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Wt=y.depthTexture;if(pt.__boundDepthTexture!==Wt){if(Wt!==null&&U.has(Wt)&&(y.width!==Wt.image.width||y.height!==Wt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}let bt=y.texture;if(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)mt=!0;let At=U.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(At[O]))V=At[O][J];else V=At[O];W=!0}else if(y.samples>0&&Z.useMultisampledRTT(y)===!1)V=U.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(At))V=At[J];else V=At;Y.copy(y.viewport),tt.copy(y.scissor),gt=y.scissorTest}else Y.copy(Ot).multiplyScalar(st).floor(),tt.copy(It).multiplyScalar(st).floor(),gt=Fe;if(J!==0)V=S;if(E.bindFramebuffer(F.FRAMEBUFFER,V))E.drawBuffers(y,V);if(E.viewport(Y),E.scissor(tt),E.setScissorTest(gt),W){let pt=U.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,pt.__webglTexture,J)}else if(mt){let pt=O;for(let bt=0;bt<y.textures.length;bt++){let At=U.get(y.textures[bt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+bt,At.__webglTexture,J,pt)}}else if(y!==null&&J!==0){let pt=U.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pt.__webglTexture,J)}X=-1};function Eh(y){let O=U.get(y);if(O.__readFormat!==y.format||O.__readType!==y.type)O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=Ae.textureFormatReadable(y.format),O.__typeReadable=Ae.textureTypeReadable(y.type);return O}if(this.readRenderTargetPixels=function(y,O,J,V,W,mt,yt,pt=0){if(!(y&&y.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=U.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0)bt=bt[yt];if(bt){E.bindFramebuffer(F.FRAMEBUFFER,bt);try{let At=y.textures[pt],Wt=At.format,Yt=At.type;if(y.textures.length>1)F.readBuffer(F.COLOR_ATTACHMENT0+pt);let Tt=Eh(At);if(Tt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(O>=0&&O<=y.width-V&&(J>=0&&J<=y.height-W))F.readPixels(O,J,V,W,j.convert(Wt),j.convert(Yt),mt)}finally{let At=N!==null?U.get(N).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,O,J,V,W,mt,yt,pt=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=U.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0)bt=bt[yt];if(bt)if(O>=0&&O<=y.width-V&&(J>=0&&J<=y.height-W)){E.bindFramebuffer(F.FRAMEBUFFER,bt);let At=y.textures[pt],Wt=At.format,Yt=At.type;if(y.textures.length>1)F.readBuffer(F.COLOR_ATTACHMENT0+pt);let Tt=Eh(At);if(Tt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,mt.byteLength,F.STREAM_READ),F.readPixels(O,J,V,W,j.convert(Wt),j.convert(Yt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Le=N!==null?U.get(N).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,Le);let Me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await id(F,Me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(le),F.deleteSync(Me),mt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,J=0){let V=Math.pow(2,-J),W=Math.floor(y.image.width*V),mt=Math.floor(y.image.height*V),yt=O!==null?O.x:0,pt=O!==null?O.y:0;Z.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,yt,pt,W,mt),E.unbindTexture()},this.copyTextureToTexture=function(y,O,J=null,V=null,W=0,mt=0){let yt,pt,bt,At,Wt,Yt,Tt,le,Le,Me=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(J!==null)yt=J.max.x-J.min.x,pt=J.max.y-J.min.y,bt=J.isBox3?J.max.z-J.min.z:1,At=J.min.x,Wt=J.min.y,Yt=J.isBox3?J.min.z:0;else{let Ie=Math.pow(2,-W);if(yt=Math.floor(Me.width*Ie),pt=Math.floor(Me.height*Ie),y.isDataArrayTexture)bt=Me.depth;else if(y.isData3DTexture)bt=Math.floor(Me.depth*Ie);else bt=1;At=0,Wt=0,Yt=0}if(V!==null)Tt=V.x,le=V.y,Le=V.z;else Tt=0,le=0,Le=0;let me=j.convert(O.format),Ye=j.convert(O.type),vt;if(O.isData3DTexture)Z.setTexture3D(O,0),vt=F.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Z.setTexture2DArray(O,0),vt=F.TEXTURE_2D_ARRAY;else Z.setTexture2D(O,0),vt=F.TEXTURE_2D;E.activeTexture(F.TEXTURE0),E.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let tn=E.getParameter(F.UNPACK_ROW_LENGTH),jt=E.getParameter(F.UNPACK_IMAGE_HEIGHT),xn=E.getParameter(F.UNPACK_SKIP_PIXELS),kn=E.getParameter(F.UNPACK_SKIP_ROWS),Mi=E.getParameter(F.UNPACK_SKIP_IMAGES);E.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),E.pixelStorei(F.UNPACK_SKIP_PIXELS,At),E.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),E.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);let _s=y.isDataArrayTexture||y.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){let Ie=U.get(y),Si=U.get(O),xe=U.get(Ie.__renderTarget),bi=U.get(Si.__renderTarget);E.bindFramebuffer(F.READ_FRAMEBUFFER,xe.__webglFramebuffer),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let vs=0;vs<bt;vs++){if(_s)F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,U.get(y).__webglTexture,W,Yt+vs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,U.get(O).__webglTexture,mt,Le+vs);F.blitFramebuffer(At,Wt,yt,pt,Tt,le,yt,pt,F.DEPTH_BUFFER_BIT,F.NEAREST)}E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||U.has(y)){let Ie=U.get(y),Si=U.get(O);E.bindFramebuffer(F.READ_FRAMEBUFFER,P),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,w);for(let xe=0;xe<bt;xe++){if(_s)F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,W,Yt+xe);else F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,W);if(fe)F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Si.__webglTexture,mt,Le+xe);else F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Si.__webglTexture,mt);if(W!==0)F.blitFramebuffer(At,Wt,yt,pt,Tt,le,yt,pt,F.COLOR_BUFFER_BIT,F.NEAREST);else if(fe)F.copyTexSubImage3D(vt,mt,Tt,le,Le+xe,At,Wt,yt,pt);else F.copyTexSubImage2D(vt,mt,Tt,le,At,Wt,yt,pt)}E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(fe)if(y.isDataTexture||y.isData3DTexture)F.texSubImage3D(vt,mt,Tt,le,Le,yt,pt,bt,me,Ye,Me.data);else if(O.isCompressedArrayTexture)F.compressedTexSubImage3D(vt,mt,Tt,le,Le,yt,pt,bt,me,Me.data);else F.texSubImage3D(vt,mt,Tt,le,Le,yt,pt,bt,me,Ye,Me);else if(y.isDataTexture)F.texSubImage2D(F.TEXTURE_2D,mt,Tt,le,yt,pt,me,Ye,Me.data);else if(y.isCompressedTexture)F.compressedTexSubImage2D(F.TEXTURE_2D,mt,Tt,le,Me.width,Me.height,me,Me.data);else F.texSubImage2D(F.TEXTURE_2D,mt,Tt,le,yt,pt,me,Ye,Me);if(E.pixelStorei(F.UNPACK_ROW_LENGTH,tn),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt),E.pixelStorei(F.UNPACK_SKIP_PIXELS,xn),E.pixelStorei(F.UNPACK_SKIP_ROWS,kn),E.pixelStorei(F.UNPACK_SKIP_IMAGES,Mi),mt===0&&O.generateMipmaps)F.generateMipmap(vt);E.unbindTexture()},this.initRenderTarget=function(y){if(U.get(y).__webglFramebuffer===void 0)Z.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)Z.setTextureCube(y,0);else if(y.isData3DTexture)Z.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)Z.setTexture2DArray(y,0);else Z.setTexture2D(y,0);E.unbindTexture()},this.resetState=function(){D=0,z=0,N=null,E.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ic}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}var Qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Sn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var S_=new ss(-1,1,1,-1,0,1);class Zd extends Re{constructor(){super();this.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _e([0,2,0,0,2,0],2))}}var b_=new Zd;class as{constructor(t){this._mesh=new Ut(b_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,S_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class js extends Sn{constructor(t,e="tDiffuse"){super();if(this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ee)this.uniforms=t.uniforms,this.material=t;else if(t)this.uniforms=mi.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader});this._fsQuad=new as(this.material)}render(t,e,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(e),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class bo extends Sn{constructor(t,e){super();this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear)t.clear();if(t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear)t.clear();t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class kc extends Sn{constructor(){super();this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Hc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new wt);this._width=n.width,this._height=n.height,e=new Pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new js(Qs),this.copyPass.material.blending=vn,this.timer=new _o}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);if(e!==-1)this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){if(this.timer.update(),t===void 0)t=this.timer.getDelta();let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(bo!==void 0){if(r instanceof bo)n=!0;else if(r instanceof kc)n=!1}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gc extends Sn{constructor(t,e,n=null,i=null,s=null){super();this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Et}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha());if(this.clearAlpha!==null)s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)t.clearDepth();if(t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);if(t.render(this.scene,this.camera),this.clearColor!==null)t.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)t.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;t.autoClear=i}}var $d={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends Sn{constructor(t,e=1,n,i){super();this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Pe(s,r,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Pe(s,r,{type:We,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Pe(s,r,{type:We,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let a=$d;this.highPassUniforms=mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new wt(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mi.clone(Qs.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,premultipliedAlpha:!0,blending:Cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new De,this._fsQuad=new as(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new wt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let r=t.autoClear;if(t.autoClear=!1,t.setClearColor(this.clearColor,0),s)t.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[o];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)t.state.buffers.stencil.setTest(!0);if(this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else t.setRenderTarget(n),this._fsQuad.render(t);t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let r=0;r<t;r++)e.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<t;r+=2){let a=e[r],o=r+1<t?e[r+1]:0,l=a+o;i.push((r*a+(r+1)*o)/l),s.push(l)}return new Ee({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new wt(0.5,0.5)},direction:{value:new wt(0.5,0.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}os.BlurDirectionX=new wt(1,0);os.BlurDirectionY=new wt(0,1);var Kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Vc extends Sn{constructor(){super();this.isOutputPass=!0,this.uniforms=mi.clone(Kr.uniforms),this.material=new Vr({name:Kr.name,uniforms:this.uniforms,vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader}),this._fsQuad=new as(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping){if(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ue)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===wr)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Er)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Ar)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Xi)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Cr)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Ir)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Rr)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(e),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Jd=4,er=48,nr=34,ir=192,sr=136,on=Array.from({length:34},()=>Array(48).fill("#")),bn=(t,e,n,i,s)=>{for(let r=e;r<=i;r++)for(let a=t;a<=n;a++)on[r][a]=s};bn(2,27,4,31,"S");on[29][5]="S";bn(6,26,34,31,".");bn(14,21,17,25,".");bn(30,17,34,25,".");bn(17,9,36,16,"P");bn(37,9,45,19,"G");bn(33,7,36,8,".");bn(11,2,37,6,"W");bn(9,3,10,5,".");bn(1,1,8,10,"E");bn(0,0,0,13,"w");bn(0,0,9,0,"w");var Kn=(t,e)=>{let n=on[Math.floor(e/4)];return n?n[Math.floor(t/4)]??"#":"#"},Xc=(t,e)=>t<0||e<0||t>=48||e>=34||on[e][t]==="#",T_=(t,e)=>Xc(t,e)||on[e][t]==="w",w_=new Set(["S","W"]),Yc=(t)=>t==="S"?4.2:t==="W"?7:0,cs=[],Zc=(t,e,n,i,s,r,a={})=>{let o={x0:t,x1:n,z0:e,z1:i,y0:0,y1:s,kind:r,...a};return cs.push(o),o},de=(t,e,n,i,s,r,a)=>Zc(t-n/2,e-i/2,t+n/2,e+i/2,s,r,a),Qn=(t,e,n="x",i={})=>n==="x"?de(t,e,4.4,2,1.5,"car",{along:n,...i}):de(t,e,2,4.4,1.5,"car",{along:n,...i}),$c=Zc(23.85,116.2,24.15,119.8,3,"srdoor");de(12,113,3,1.1,0.95,"table");de(10,125,2,0.9,0.5,"cot");de(16,125,2,0.9,0.5,"cot");Qn(36,108);Qn(52,121,"x",{burning:!0});Qn(66,113,"z");Qn(84,107,"x",{alarm:!0});Qn(98,122);Qn(112,112,"z",{burning:!0});Qn(124,106);Qn(46,105,"z");de(30,106.2,1.8,1.2,1.3,"dumpster");de(72,105.8,1.8,1.2,1.3,"dumpster");de(104,125.2,1.8,1.2,1.3,"dumpster");de(92,115,3.6,0.8,1.1,"barricade");de(60,117,3.6,0.8,1.1,"barricade");de(62,88,1.8,1.2,1.3,"dumpster");de(66,86,1.4,1.4,1,"crate");de(122,92,1.8,1.2,1.3,"dumpster");de(134,80,1.4,1.4,1,"crate");Qn(128,72,"z");for(let[t,e]of[[74,40],[86,58],[98,42],[110,60],[122,40],[80,52],[138,48],[104,52],[92,38],[130,62],[116,50]])de(t,e,0.7,0.7,4,"tree");de(96,50,4,4,0.8,"fountain");for(let[t,e,n]of[[88,46,0],[104,46,0],[112,56,1],[80,60,1]])n?de(t,e,0.6,2,0.5,"bench"):de(t,e,2,0.6,0.5,"bench");for(let[t,e]of[[160,50],[160,60],[170,50],[170,60]])de(t,e,1,2,1.6,"pump");for(let[t,e]of[[155,45],[175,45],[155,65],[175,65]])de(t,e,0.5,0.5,4.4,"pillar");Zc(154,44,176,66,4.8,"canopy",{y0:4.4});Qn(166,74,"z");de(176,40,6,1.2,1.1,"counter");for(let t of[56,72,88,104,120])de(t,12,1.4,9,3.4,"shelf");for(let[t,e]of[[64,20],[96,21],[112,10],[130,20],[52,22],[138,12]])de(t,e,1.6,1.6,1.4,"crate");de(80,22,1.4,2.4,2.1,"forklift");de(18,10,6,2.5,2.6,"container");de(22,34,2.5,6,2.6,"container",{tint:1});de(30,14,1.6,1.6,1.4,"crate");de(10,30,1.6,1.6,1.4,"crate");var GS=de(26,26,1.4,1.4,1.1,"radiocrate");for(let t=0;t<34;t++)for(let e=0;e<48;e++)if(w_.has(on[t][e])){let n=Yc(on[t][e]);cs.push({x0:e*4,x1:e*4+4,z0:t*4,z1:t*4+4,y0:n,y1:n+0.4,kind:"roof"})}var ta={x:14,z:118},Jn={x:14,z:20,boatX:-10,boatZ:22},ea={x0:4,x1:22,z0:8,z1:32};var To=[];function qc(t,e,n,i,s){To.length=0;let r=Math.floor((t-n)/4),a=Math.floor((t+n)/4),o=Math.floor((e-n)/4),l=Math.floor((e+n)/4);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++)if(T_(h,c))To.push({x0:h*4,x1:h*4+4,z0:c*4,z1:c*4+4});for(let c of cs)if(!c.off&&t+n>c.x0&&t-n<c.x1&&e+n>c.z0&&e-n<c.z1&&s>c.y0+0.001&&i<c.y1-0.001)To.push(c);return To}function Jc(t,e,n,i){let s=0;for(let r of cs)if(!r.off&&r.kind!=="roof"&&r.kind!=="canopy"&&t+n>r.x0&&t-n<r.x1&&e+n>r.z0&&e-n<r.z1&&r.y1<=i+0.06&&r.y1>s)s=r.y1;return s}function xi(t,e,n,i,s){let r=!1,a=!1,o=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(n))/0.3));for(let l=0;l<o;l++){if(e){t.x+=e/o;let c=qc(t.x,t.z,i,t.y+0.35,t.y+s);if(c.length)if(r=!0,e>0){let h=1/0;for(let d of c)h=Math.min(h,d.x0);t.x=h-i-0.0001}else{let h=-1/0;for(let d of c)h=Math.max(h,d.x1);t.x=h+i+0.0001}}if(n){t.z+=n/o;let c=qc(t.x,t.z,i,t.y+0.35,t.y+s);if(c.length)if(a=!0,n>0){let h=1/0;for(let d of c)h=Math.min(h,d.z0);t.z=h-i-0.0001}else{let h=-1/0;for(let d of c)h=Math.max(h,d.z1);t.z=h+i+0.0001}}}return{hitX:r,hitZ:a}}var ls=(t,e,n)=>qc(t,e,n,0.35,1.7).length===0;function rr(t,e,n,i,s,r,a=300){let o=a,l=0,c=0,h=0,d=null,u=null;if(s<-0.000001&&e>0){let R=-e/s;if(R<o)o=R,c=1,d="floor"}let p=Math.floor(t/4),g=Math.floor(n/4);if(Xc(p,g))return{t:0,nx:0,ny:0,nz:0,kind:"wall"};let A=i>0?1:-1,m=r>0?1:-1,f=Math.abs(i),C=Math.abs(r),T=f>0.000000001?((p+(i>0?1:0))*4-t)/i:1/0,_=C>0.000000001?((g+(r>0?1:0))*4-n)/r:1/0,b=f>0.000000001?4/f:1/0,I=C>0.000000001?4/C:1/0;for(let R=0;R<200;R++){let x,M;if(T<_)x=T,p+=A,T+=b,M=0;else x=_,g+=m,_+=I,M=1;if(x>=o)break;if(Xc(p,g)){if(o=x,d="wall",c=0,M===0)l=-A,h=0;else l=0,h=-m;break}}for(let R of cs){if(R.off)continue;let x=0,M=o,H=-1,L=!0,S=[t,e,n],P=[i,s,r],w=[R.x0,R.y0,R.z0],D=[R.x1,R.y1,R.z1];for(let z=0;z<3;z++){if(Math.abs(P[z])<0.000000001){if(S[z]<w[z]||S[z]>D[z]){L=!1;break}continue}let N=(w[z]-S[z])/P[z],X=(D[z]-S[z])/P[z];if(N>X){let G=N;N=X,X=G}if(N>x)x=N,H=z;if(X<M)M=X;if(x>M){L=!1;break}}if(L&&H>=0&&x<o)o=x,d=R.kind,u=R,l=H===0?-Math.sign(i):0,c=H===1?-Math.sign(s):0,h=H===2?-Math.sign(r):0}return d?{t:o,nx:l,ny:c,nz:h,kind:d,box:d==="wall"||d==="floor"?null:u}:null}function Fn(t,e,n,i,s,r){let a=i-t,o=s-e,l=r-n,c=Math.hypot(a,o,l);if(c<0.000001)return!0;let h=rr(t,e,n,a/c,o/c,l/c,c);return!h||h.t>=c-0.01}var $n=2,Vt=192/$n,je=136/$n,gi=new Uint8Array(Vt*je),na=[];for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)if(e||t)na.push([e,t]);var jr=new Uint8Array(Vt*je);function Kd(){for(let t=0;t<je;t++)for(let e=0;e<Vt;e++)gi[t*Vt+e]=ls((e+0.5)*$n,(t+0.5)*$n,0.6)?1:0;for(let t=0;t<je;t++)for(let e=0;e<Vt;e++){if(!gi[t*Vt+e]){jr[t*Vt+e]=0;continue}let n=0;na.forEach(([i,s],r)=>{let a=e+i,o=t+s;if(a<0||o<0||a>=Vt||o>=je||!gi[o*Vt+a])return;if(i&&s&&(!gi[t*Vt+a]||!gi[o*Vt+e]))return;if(!ls((e+0.5+i/2)*$n,(t+0.5+s/2)*$n,0.45))return;n|=1<<r}),jr[t*Vt+e]=n}}Kd();var hs=(t)=>(t%Vt+0.5)*$n,us=(t)=>((t/Vt|0)+0.5)*$n,Un=(t,e)=>{let n=Math.max(0,Math.min(Vt-1,Math.floor(t/$n))),i=Math.max(0,Math.min(je-1,Math.floor(e/$n)));if(gi[i*Vt+n])return i*Vt+n;let s=-1,r=1/0;for(let a=-3;a<=3;a++)for(let o=-3;o<=3;o++){let l=n+o,c=i+a;if(l<0||c<0||l>=Vt||c>=je||!gi[c*Vt+l])continue;let h=o*o+a*a;if(h<r)r=h,s=c*Vt+l}return s};function ar(t,e=new Float32Array(Vt*je)){e.fill(1/0);let n=[],i=(r,a)=>{n.push([r,a]);let o=n.length-1;while(o>0){let l=o-1>>1;if(n[l][0]<=n[o][0])break;[n[l],n[o]]=[n[o],n[l]],o=l}},s=()=>{let r=n[0],a=n.pop();if(n.length){n[0]=a;let o=0;for(;;){let l=2*o+1,c=l+1,h=o;if(l<n.length&&n[l][0]<n[h][0])h=l;if(c<n.length&&n[c][0]<n[h][0])h=c;if(h===o)break;[n[h],n[o]]=[n[o],n[h]],o=h}}return r};for(let r of t)if(r>=0)e[r]=0,i(0,r);while(n.length){let[r,a]=s();if(r>e[a])continue;let o=a%Vt,l=a/Vt|0,c=jr[a];for(let h=0;h<8;h++){if(!(c&1<<h))continue;let[d,u]=na[h],p=(l+u)*Vt+o+d,g=Math.fround(r+(d&&u?2.83:2));if(g<e[p])e[p]=g,i(g,p)}}return e}function Kc(t,e){let n=e%Vt,i=e/Vt|0,s=jr[e],r=e,a=t[e];for(let o=0;o<8;o++){if(!(s&1<<o))continue;let[l,c]=na[o],h=(i+c)*Vt+n+l;if(t[h]<a)a=t[h],r=h}return r}var tr=ar([Un(Jn.x,Jn.z)]);function Qc(){Kd(),tr=ar([Un(Jn.x,Jn.z)],tr)}var Qr=new Float32Array(Vt*je),Wc=new Int32Array(Vt*je),wo=new Uint8Array(Vt*je);function Qd(t,e,n,i){let s=Un(t,e),r=Un(n,i);if(s<0||r<0)return[[n,i]];Qr.fill(1/0),wo.fill(0),Wc.fill(-1);let a=r%Vt,o=r/Vt|0,l=(T)=>{let _=Math.abs(T%Vt-a),b=Math.abs((T/Vt|0)-o);return Math.max(_,b)+0.414*Math.min(_,b)},c=[],h=(T,_)=>{c.push([T,_]);let b=c.length-1;while(b>0){let I=b-1>>1;if(c[I][0]<=c[b][0])break;[c[I],c[b]]=[c[b],c[I]],b=I}},d=()=>{let T=c[0],_=c.pop();if(c.length){c[0]=_;let b=0;for(;;){let I=2*b+1,R=I+1,x=b;if(I<c.length&&c[I][0]<c[x][0])x=I;if(R<c.length&&c[R][0]<c[x][0])x=R;if(x===b)break;[c[x],c[b]]=[c[b],c[x]],b=x}}return T};Qr[s]=0,h(l(s),s);let u=!1;while(c.length){let[,T]=d();if(wo[T])continue;if(wo[T]=1,T===r){u=!0;break}let _=T%Vt,b=T/Vt|0,I=jr[T];for(let R=0;R<8;R++){if(!(I&1<<R))continue;let[x,M]=na[R],H=(b+M)*Vt+_+x;if(wo[H])continue;let L=Qr[T]+(x&&M?1.414:1);if(L<Qr[H])Qr[H]=L,Wc[H]=T,h(L+l(H),H)}}if(!u)return[[n,i]];let p=[];for(let T=r;T!==-1;T=Wc[T])p.push(T);p.reverse();let g=p.map((T)=>[hs(T),us(T)]);g[g.length-1]=[n,i];let A=[],m=0,f=t,C=e;while(m<g.length){let T=m;for(let _=Math.min(g.length-1,m+16);_>m;_--)if(jc(f,C,g[_][0],g[_][1])){T=_;break}A.push(g[T]),f=g[T][0],C=g[T][1],m=T+1}return A}function jc(t,e,n,i,s=0.5){let r=Math.hypot(n-t,i-e),a=Math.ceil(r/0.5);for(let o=1;o<=a;o++){let l=o/a;if(!ls(t+(n-t)*l,e+(i-e)*l,s))return!1}return!0}var ln={pistol:{name:"Dual Pistols",slot:"secondary",dmg:36,rof:0.15,mag:30,reserve:1/0,spread:0.012,pellets:1,reload:1.7,auto:!1,pierce:1,range:90},uzi:{name:"Submachine Gun",slot:"primary",tier:1,dmg:22,rof:0.065,mag:50,reserve:480,spread:0.028,pellets:1,reload:2,auto:!0,pierce:1,range:70},pump:{name:"Pump Shotgun",slot:"primary",tier:1,dmg:24,rof:0.85,mag:8,reserve:56,spread:0.075,pellets:9,reload:0.45,shell:!0,auto:!1,pierce:2,range:28},m16:{name:"Assault Rifle",slot:"primary",tier:2,dmg:33,rof:0.088,mag:50,reserve:360,spread:0.018,pellets:1,reload:2.2,auto:!0,pierce:2,range:110},auto:{name:"Auto Shotgun",slot:"primary",tier:2,dmg:23,rof:0.25,mag:10,reserve:90,spread:0.08,pellets:11,reload:0.4,shell:!0,auto:!0,pierce:2,range:30},rifle:{name:"Hunting Rifle",slot:"primary",tier:2,dmg:95,rof:0.25,mag:15,reserve:180,spread:0.003,pellets:1,reload:3,auto:!1,pierce:4,range:160}},E_={easy:{zdmg:1,sdmg:0.5,tankHp:4000,pop:0.7,bot:1.15,witchOneShot:!1},normal:{zdmg:2,sdmg:1,tankHp:6000,pop:1,bot:1,witchOneShot:!0},advanced:{zdmg:5,sdmg:1.5,tankHp:8000,pop:1.3,bot:0.92,witchOneShot:!0}},ef=[{name:"YOU",color:4026024},{name:"MARCUS",color:8014634},{name:"ROSA",color:9187130},{name:"DOC",color:5204794}],Ro=150,jd=5.4,A_=2.6,R_=2.1,th=16,Ao=(t,e,n)=>t<e?e:t>n?n:t,eh=(t,e)=>(t.x-e.x)**2+(t.z-e.z)**2;class nf{constructor(t,e){let n=ef[t];this.id=t,this.name=n.name,this.color=n.color,this.isPlayer=t===0,this.game=e,this.x=ta.x+(t%2?2.5:-2.5),this.z=ta.z+(t<2?-3:3),this.y=0,this.vy=0,this.vx=0,this.vz=0,this.yaw=Math.PI/2*-1,this.pitch=0,this.duck=0,this.onGround=!0,this.moveSpeed=0,this.hp=100,this.incap=!1,this.incapHp=300,this.incaps=0,this.dead=!1,this.primary=null,this.pistol={id:"pistol",mag:30,reserve:1/0},this.cur="secondary",this.throwable=null,this.medkit=!1,this.pills=!1,this.fireCd=0,this.reloadT=0,this.shoveCd=0,this.switchT=0,this.flash=!0,this.pinnedBy=null,this.reviveT=0,this.reviving=null,this.healT=0,this.bile=0,this.hurtT=0,this.kb=0,this.stats={kills:0,specials:0,dmg:0,incaps:0},this.lastFire=!1,this.lastUse=!1,this.spread=0}get alive(){return!this.dead}get up(){return!this.dead&&!this.incap}get eye(){return this.y+(this.incap?0.6:1.62-this.duck*0.55)}weapon(){return this.cur==="primary"&&this.primary?this.primary:this.pistol}weaponId(){if(this.cur==="throw"&&this.throwable)return this.throwable;if(this.cur==="med"&&this.medkit)return"medkit";if(this.cur==="pills"&&this.pills)return"pills";return this.weapon().id}has(t){return t==="primary"?!!this.primary:t==="secondary"?!0:t==="throw"?!!this.throwable:t==="med"?this.medkit:t==="pills"?this.pills:!1}}class nh{constructor({diff:t="normal",seed:e=1}={}){this.diff=E_[t],this.diffName=t;let n=e>>>0;this.rand=()=>{n=n+1831565813>>>0;let i=n;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296},$c.off=!1,Qc(),this.t=0,this.events=[],this.over=null,this.doorOpen=!1,this.survivors=ef.map((i,s)=>new nf(s,this)),this.player=this.survivors[0],this.zombies=[],this.specials=[],this.throws=[],this.fires=[],this.fieldSurv=new Float32Array(Vt*je),this.fieldBile=new Float32Array(Vt*je),this.fieldPipe=new Float32Array(Vt*je),this.hasBile=!1,this.hasPipe=!1,this.fieldT=0,this.items=[],this.placeItems(),this.dir={t:0,mobT:35,hordeT:110,specialT:30,intensity:0,relaxT:0,tankDone:!1,warehouseTank:!1,maxProg:1/0,ambientT:0},this.finale={started:!1,t:0,waveT:0,tank:!1,boat:!1,boatX:Jn.boatX-40},this.alarmUsed=!1,this.spawnCandidates=[];for(let i=0;i<Vt*je;i++)if(gi[i]&&Kn(hs(i),us(i))!=="S")this.spawnCandidates.push(i);this.spawnSpecial("witch",92,56,{sitting:!0}),this.populateAmbient(!0)}emit(t,e={}){this.events.push({type:t,...e})}placeItems(){let t=(e,n,i,s={})=>this.items.push({type:e,x:n,z:i,y:s.y??1,taken:!1,...s});t("weapon",10.6,113,{wid:"uzi"}),t("weapon",12,113,{wid:"pump"}),t("weapon",13.4,113,{wid:"uzi"});for(let e of[9.5,10.5,13.5,14.5])t("medkit",e,125,{y:0.55});t("ammo",18,120,{y:0.4,infinite:!0}),t("pipe",62,86.6,{y:1.4}),t("pills",66,86,{y:1.05}),t("ammo",58,90,{y:0.4,infinite:!0}),t("molotov",122,91.3,{y:1.35}),t("weapon",174,40,{wid:"m16",y:1.15}),t("weapon",176,40,{wid:"auto",y:1.15}),t("weapon",178,40,{wid:"rifle",y:1.15}),t("ammo",168,70,{y:0.4,infinite:!0}),t("pills",172.6,40,{y:1.15}),t("pipe",158,72,{y:0.4}),t("ammo",100,22,{y:0.4,infinite:!0}),t("medkit",112,10.8,{y:1.45}),t("medkit",64,20.8,{y:1.45}),t("pills",130,20.8,{y:1.45}),t("molotov",52,22.8,{y:1.45}),t("ammo",30,26,{y:0.4,infinite:!0}),t("medkit",30,14.8,{y:1.45}),t("medkit",10,30.8,{y:1.45}),t("pipe",24,26,{y:1.15})}step(t,e){if(this.over)return;this.t+=t;for(let n of this.survivors)this.stepSurvivor(n,e[n.id]||{},t);if(this.fieldT-=t,this.fieldT<=0)this.fieldT=0.3,this.updateFields();this.stepZombies(t),this.stepSpecials(t),this.stepThrows(t),this.stepDirector(t),this.stepFinale(t),this.checkOver()}checkOver(){let t=this.player;if(t.dead){this.over={win:!1,reason:"You died."},this.emit("over",this.over);return}if(this.survivors.every((e)=>e.dead||e.incap)){this.over={win:!1,reason:"All survivors are down."},this.emit("over",this.over);return}if(this.finale.boat&&this.finale.boatX>=Jn.boatX-0.5&&tf(t)&&t.up){let e=this.survivors.filter((n)=>n.alive&&(tf(n)||Math.hypot(n.x-t.x,n.z-t.z)<25));this.over={win:!0,saved:e.length,reason:`${e.length} of 4 survivors escaped.`},this.emit("over",this.over)}}stepSurvivor(t,e,n){if(t.dead)return;if(t.fireCd=Math.max(0,t.fireCd-n),t.shoveCd=Math.max(0,t.shoveCd-n),t.switchT=Math.max(0,t.switchT-n),t.bile=Math.max(0,t.bile-n),t.hurtT=Math.max(0,t.hurtT-n),e.flash)t.flash=!t.flash;if(t.yaw=e.yaw??t.yaw,t.pitch=Ao(e.pitch??t.pitch,-1.45,1.45),t.incap){if(t.incapHp-=n*(this.diffName==="easy"?0.8:1.4),t.incapHp<=0)return this.kill(t);if(t.moveSpeed=0,!t.pinnedBy)this.stepWeapon(t,e,n,!0);return}if(t.pinnedBy){t.moveSpeed=0,t.reviving=null,t.healT=0;return}if(t.kb>0)t.kb-=n,xi(t,t.vx*n,t.vz*n,0.4,1.8),t.vx*=Math.exp(-3*n),t.vz*=Math.exp(-3*n);else{let s=t.reviving||t.healT>0,r=!!e.crouch;t.duck+=((r?1:0)-t.duck)*Math.min(1,n*10);let a=r?R_:e.walk?A_:jd;if(t.hp<40)a*=0.85;if(s)a=0;let o=Ao(e.fwd||0,-1,1),l=Ao(e.side||0,-1,1),c=Math.hypot(o,l)||1,h=Math.sin(t.yaw),d=Math.cos(t.yaw),u=(-h*o+d*l)/c*a,p=(-d*o-h*l)/c*a,g=t.onGround?12:3;if(t.vx+=(u-t.vx)*Math.min(1,g*n),t.vz+=(p-t.vz)*Math.min(1,g*n),xi(t,t.vx*n,t.vz*n,0.4,1.8),t.moveSpeed=Math.hypot(t.vx,t.vz),e.jump&&t.onGround&&!s)t.vy=5.2,t.onGround=!1}t.vy-=th*n,t.y+=t.vy*n;let i=Jc(t.x,t.z,0.35,t.y);if(t.y<=i)t.y=i,t.vy=0,t.onGround=!0;else t.onGround=t.y-i<0.05;for(let s of this.zombies)if(!s.dead){let r=t.x-s.x,a=t.z-s.z,o=Math.hypot(r,a);if(o<0.7&&o>0.0001){let l=(0.7-o)*0.5;t.x+=r/o*l,t.z+=a/o*l,s.x-=r/o*l,s.z-=a/o*l}}this.stepWeapon(t,e,n,!1),this.stepUse(t,e,n)}stepUse(t,e,n){let i=e.use&&!t.lastUse;if(t.lastUse=!!e.use,t.reviving){let d=t.reviving;if(!e.use||!d.incap||d.dead||Math.hypot(d.x-t.x,d.z-t.z)>2.2||t.pinnedBy)t.reviving=null,t.reviveT=0;else{if(t.reviveT+=n,t.reviveT>=4)d.incap=!1,d.hp=30,d.incapHp=300,d.reviveT=0,t.reviving=null,t.reviveT=0,this.emit("revived",{who:d,by:t});return}}if(t.cur==="med"&&t.medkit&&e.fire){if(t.healT+=n,t.healT>=5)t.hp=Math.min(100,t.hp+(100-t.hp)*0.8),t.incaps=0,t.medkit=!1,t.healT=0,t.cur=t.primary?"primary":"secondary",this.emit("healed",{who:t});return}else t.healT=0;if(t.cur==="pills"&&t.pills&&e.fire&&!t.lastFire)t.hp=Math.min(100,t.hp+50),t.pills=!1,t.cur=t.primary?"primary":"secondary",this.emit("pills",{who:t});if(t.lastFire=!!e.fire,!e.use)return;for(let d of this.survivors)if(d!==t&&d.incap&&!d.dead&&!d.pinnedBy&&Math.hypot(d.x-t.x,d.z-t.z)<2){t.reviving=d,t.reviveT=0;return}if(!i)return;let{x:s,z:r}=t,a=Math.sin(t.yaw),o=Math.cos(t.yaw);if(Math.hypot(24-s,118-r)<3){this.toggleDoor(t);return}if(!this.finale.started&&Math.hypot(26-s,26-r)<2.6){this.startFinale(t);return}let c=null,h=2.4;for(let d of this.items){if(d.taken)continue;let u=d.x-s,p=d.z-r,g=Math.hypot(u,p);if(g<h&&-a*u-o*p>-0.4*g)c=d,h=g}if(c)this.pickup(t,c)}pickup(t,e){if(e.type==="weapon"){let n=ln[e.wid];if(t.primary={id:e.wid,mag:n.mag,reserve:n.reserve},t.cur="primary",t.switchT=0.5,t.reloadT=0,t.isPlayer)this.emit("pickup",{who:t,what:n.name});return}if(e.type==="ammo"){if(t.primary)t.primary.reserve=ln[t.primary.id].reserve,this.emit("pickup",{who:t,what:"Ammo"});return}if(e.type==="medkit"){if(t.medkit)return;t.medkit=!0}else if(e.type==="pills"){if(t.pills)return;t.pills=!0}else if(e.type==="pipe"||e.type==="molotov"){if(t.throwable)return;t.throwable=e.type}e.taken=!0,this.emit("pickup",{who:t,what:{medkit:"First Aid Kit",pills:"Pain Pills",pipe:"Pipe Bomb",molotov:"Molotov"}[e.type]})}toggleDoor(t){if(this.doorOpen)return;this.doorOpen=!0,$c.off=!0,Qc(),this.emit("door",{by:t})}stepWeapon(t,e,n,i){if(e.slot&&!i&&t.has(e.slot)&&e.slot!==t.cur)t.cur=e.slot,t.switchT=0.45,t.reloadT=0,t.healT=0;if(i)t.cur="secondary";let s=t.weapon(),r=ln[s.id];if(e.alt&&t.shoveCd<=0&&!i)t.shoveCd=0.75,this.shove(t);if(t.reloadT>0){if(t.reloadT-=n,r.shell){if(t.reloadT<=0){if(s.mag<r.mag&&s.reserve>0)s.mag++,s.reserve--,this.emit("shell",{who:t}),t.reloadT=r.mag>s.mag&&s.reserve>0?r.reload:0}if(e.fire&&s.mag>0&&!e.reloadHold)t.reloadT=0}else if(t.reloadT<=0){let o=r.mag-s.mag,l=Math.min(o,s.reserve);if(s.mag+=l,s.reserve!==1/0)s.reserve-=l}if(t.reloadT>0)return}if(t.cur==="throw"){if(e.fire&&t.throwable&&t.switchT<=0&&!t.lastThrow)this.throwItem(t);t.lastThrow=!!e.fire;return}if(t.cur==="med"||t.cur==="pills")return;if(e.reload&&s.mag<r.mag&&s.reserve>0||s.mag===0&&s.reserve>0){t.reloadT=r.shell?r.reload+0.2:r.reload,this.emit("reload",{who:t,id:s.id});return}let a=r.auto?e.fire:e.fire&&!t.lastTrigger;if(t.lastTrigger=!!e.fire,t.spread=Math.max(0,t.spread-n*0.12),a&&t.fireCd<=0&&t.switchT<=0&&s.mag>0){t.fireCd=r.rof,s.mag--;let o=Math.min(1,t.moveSpeed/jd),l=r.spread*(1+o*1.2-t.duck*0.35)+t.spread;t.spread=Math.min(0.05,t.spread+(r.pellets>1?0:0.006));let{x:c,eye:h,z:d}=t,u=Math.cos(t.pitch),p=-Math.sin(t.yaw)*u,g=Math.sin(t.pitch),A=-Math.cos(t.yaw)*u,m=!1;for(let f=0;f<r.pellets;f++){let C=this.rand()*Math.PI*2,T=Math.sqrt(this.rand())*l,_=Math.cos(t.yaw),b=-Math.sin(t.yaw),I=-Math.sin(t.yaw)*-Math.sin(t.pitch),R=Math.cos(t.pitch),x=-Math.cos(t.yaw)*-Math.sin(t.pitch),M=p+(_*Math.cos(C)+I*Math.sin(C))*T,H=g+R*Math.sin(C)*T,L=A+(b*Math.cos(C)+x*Math.sin(C))*T,S=Math.hypot(M,H,L);M/=S,H/=S,L/=S,m=this.fireBullet(t,c,h,d,M,H,L,r,f===0)||m}if(this.emit("shot",{who:t,id:s.id}),this.noise(t.x,t.z,28),s.mag===0&&s.reserve>0)t.reloadT=r.shell?r.reload+0.2:r.reload,this.emit("reload",{who:t,id:s.id})}}fireBullet(t,e,n,i,s,r,a,o,l){let c=rr(e,n,i,s,r,a,o.range),h=c?c.t:o.range,d=[],u=(T,_,b,I,R,x)=>{let M=e-T.x,H=i-T.z,L=s*s+a*a,S=2*(M*s+H*a),P=M*M+H*H-_*_,w=S*S-4*L*P,D=1/0;if(w>=0&&L>0.000000001){let X=(-S-Math.sqrt(w))/(2*L),G=n+r*X;if(X>0&&G>T.y+b&&G<T.y+I)D=X}let z=1/0;if(x){let X=e-T.x,G=n-(T.y+R),Y=i-T.z,tt=X*s+G*r+Y*a,gt=X*X+G*G+Y*Y-x*x,St=tt*tt-gt;if(St>=0){let Jt=-tt-Math.sqrt(St);if(Jt>0)z=Jt}}let N=Math.min(D,z);if(N<h)d.push({e:T,t:N,head:z<=D})};for(let T of this.zombies)if(!T.dead&&Math.abs(T.x-e)<o.range&&Math.abs(T.z-i)<o.range)u(T,0.32,0.05,1.45,1.62,0.17);for(let T of this.specials)if(!T.dead)if(T.type==="tank")u(T,0.85,0,2,2.15,0.35);else if(T.type==="boomer")u(T,0.6,0,1.5,1.7,0.22);else if(T.type==="witch")u(T,0.35,0,T.sitting?0.95:1.4,T.sitting?1.1:1.58,0.17);else u(T,0.38,0,T.crouch?0.9:1.4,T.crouch?1:1.6,0.18);d.sort((T,_)=>T.t-_.t);let p=o.pierce,g=h,A=!1;for(let T of d){let _=o.dmg;if(this.damageInfected(T.e,_,T.head,t,e+s*T.t,n+r*T.t,i+a*T.t,s,a,o.pellets>1),A=!0,T.e.type==="tank"||T.e.type==="witch"||--p<=0){g=T.t;break}}let m=e+s*g,f=n+r*g,C=i+a*g;if(l)this.emit("tracer",{x0:e,y0:n-0.15,z0:i,x1:m,y1:f,z1:C,who:t});if(c&&g===h&&c.box?.alarm)this.triggerAlarm();if(c&&g===h)this.emit("impact",{x:m,y:f,z:C,nx:c.nx,ny:c.ny,nz:c.nz,kind:c.kind});return A}damageInfected(t,e,n,i,s,r,a,o,l,c){if(t.dead)return;if(this.emit("blood",{x:s,y:r,z:a,dx:o,dz:l,head:n,special:!!t.type}),!t.type){if(t.hp-=n?e*4:e,c||e>60)t.vx+=o*3,t.vz+=l*3,t.stagger=Math.max(t.stagger,0.25);if(t.state==="idle"||t.state==="wander")this.aggro(t,i);if(t.hp<=0)this.killZombie(t,i,o,l,n);return}if(t.type==="witch"){if(t.sitting||t.state!=="rage")this.witchRage(t,i);t.hp-=n?e*2:e}else if(t.type==="tank")t.hp-=e*(n?1.2:1);else t.hp-=n?e*2:e;if(t.type==="hunter"&&t.pin&&e>=30)t.stagger=0.2;if(t.hp<=0)this.killSpecial(t,i)}killZombie(t,e,n=0,i=0,s=!1){if(t.dead=!0,t.deadT=0,t.fallDir=Math.atan2(n,i),e)e.stats.kills++;this.emit("zdeath",{z:t,head:s})}shove(t){this.emit("shove",{who:t});let e=-Math.sin(t.yaw),n=-Math.cos(t.yaw);for(let i of this.zombies){if(i.dead)continue;let s=i.x-t.x,r=i.z-t.z,a=Math.hypot(s,r);if(a<2&&(s*e+r*n)/(a||1)>0.35){if(i.stagger=0.9,i.vx=s/(a||1)*7,i.vz=r/(a||1)*7,i.attackCd=1,i.state==="idle"||i.state==="wander")this.aggro(i,t);this.emit("shoved",{z:i})}}for(let i of this.specials){if(i.dead||i.type==="tank"||i.type==="witch")continue;let s=i.x-t.x,r=i.z-t.z,a=Math.hypot(s,r);if(a<2.2&&(s*e+r*n)/(a||1)>0.2){if(i.pin)this.releasePin(i);i.stagger=1,i.vx=s/(a||1)*6,i.vz=r/(a||1)*6,i.vomitCd=Math.max(i.vomitCd||0,1),this.emit("shoved",{z:i})}}for(let i of this.survivors)if(i!==t&&i.pinnedBy&&Math.hypot(i.x-t.x,i.z-t.z)<2.2)this.releasePin(i.pinnedBy)}throwItem(t){let e=t.throwable;t.throwable=null,t.cur=t.primary?"primary":"secondary",t.switchT=0.4;let n=Math.cos(t.pitch),i=15;this.throws.push({type:e,x:t.x,y:t.eye-0.1,z:t.z,vx:-Math.sin(t.yaw)*n*i,vy:Math.sin(t.pitch)*i+3.5,vz:-Math.cos(t.yaw)*n*i,t:0,landed:!1,by:t}),this.emit("throw",{who:t,type:e})}stepThrows(t){for(let e=this.throws.length-1;e>=0;e--){let n=this.throws[e];if(n.t+=t,!n.landed){n.vy-=th*t;let i=n.x+n.vx*t,s=n.y+n.vy*t,r=n.z+n.vz*t,a=i-n.x,o=s-n.y,l=r-n.z,c=Math.hypot(a,o,l),h=c>0.000001?rr(n.x,n.y,n.z,a/c,o/c,l/c,c):null;if(h){if(n.x+=a/c*(h.t-0.05),n.y+=o/c*(h.t-0.05),n.z+=l/c*(h.t-0.05),n.type==="molotov"){this.igniteAt(n),this.throws.splice(e,1);continue}if(h.ny>0.5){if(n.vy=-n.vy*0.3,n.vx*=0.5,n.vz*=0.5,Math.abs(n.vy)<1)n.landed=!0,n.y=Math.max(n.y,0.1)}else{if(h.nx)n.vx=-n.vx*0.4;if(h.nz)n.vz=-n.vz*0.4;if(h.ny<-0.5)n.vy=-Math.abs(n.vy)*0.3}this.emit("bounce",{x:n.x,y:n.y,z:n.z,type:n.type})}else n.x=i,n.y=s,n.z=r;if(n.y<0.1&&n.type==="molotov"){n.y=0.1,this.igniteAt(n),this.throws.splice(e,1);continue}if(n.y<0.08)n.y=0.08,n.landed=!0}if(n.type==="pipe"){if(Math.floor(n.t*(1.5+n.t))!==Math.floor((n.t-t)*(1.5+n.t-t)))this.emit("beep",{x:n.x,y:n.y,z:n.z});if(n.t>6)this.explode(n.x,n.y,n.z,n.by),this.throws.splice(e,1)}}for(let e=this.fires.length-1;e>=0;e--){let n=this.fires[e];if(n.t+=t,n.t>15){this.fires.splice(e,1);continue}for(let i of this.zombies)if(!i.dead&&(i.x-n.x)**2+(i.z-n.z)**2<n.r*n.r){if(i.hp-=40*t,i.burning=3,i.hp<=0)this.killZombie(i,n.by)}for(let i of this.specials)if(!i.dead&&(i.x-n.x)**2+(i.z-n.z)**2<n.r*n.r){if(i.burning=3,i.type==="witch"&&i.sitting)this.witchRage(i,n.by)}for(let i of this.survivors)if(i.alive&&(i.x-n.x)**2+(i.z-n.z)**2<n.r*n.r&&i.y<0.6)this.hurt(i,8*t,null,!0)}for(let e of this.zombies)if(e.burning>0&&!e.dead){if(e.burning-=t,e.hp-=12*t,e.hp<=0)this.killZombie(e,null)}for(let e of this.specials)if(e.burning>0&&!e.dead){if(e.burning-=t,e.hp-=(e.type==="tank"?60:25)*t,e.hp<=0)this.killSpecial(e,null)}}igniteAt(t){this.fires.push({x:t.x,z:t.z,r:4,t:0,by:t.by}),this.emit("ignite",{x:t.x,z:t.z})}explode(t,e,n,i){this.emit("explode",{x:t,y:e,z:n});for(let s of this.zombies)if(!s.dead){let r=Math.hypot(s.x-t,s.z-n);if(r<7.5)this.killZombie(s,i,(s.x-t)/(r||1),(s.z-n)/(r||1))}for(let s of this.specials)if(!s.dead){if(Math.hypot(s.x-t,s.z-n)<7.5){if(s.type==="witch"&&s.sitting)this.witchRage(s,i);if(s.hp-=s.type==="tank"?400:300,s.hp<=0)this.killSpecial(s,i)}}for(let s of this.survivors)if(s.alive){let r=Math.hypot(s.x-t,s.z-n);if(r<5)this.hurt(s,10*(1-r/5),null,!0)}}noise(t,e,n){for(let i of this.zombies)if(!i.dead&&(i.state==="idle"||i.state==="wander")){if((i.x-t)**2+(i.z-e)**2<n*n&&this.rand()<0.6)this.aggro(i,null)}}hurt(t,e,n,i=!1){if(t.dead)return;if(!i)t.hurtT=0.35;if(t.stats.dmg+=e,t.incap){if(t.incapHp-=e*1.5,t.incapHp<=0)this.kill(t);return}if(t.hp-=e,n&&!i)this.emit("hurt",{who:t,src:n,amt:e});if(t.hp<=0){if(t.incaps>=2)return this.kill(t);if(t.hp=0,t.incap=!0,t.incapHp=300,t.incaps++,t.stats.incaps++,t.reviving=null,t.healT=0,t.cur="secondary",t.pinnedBy&&t.pinnedBy.type!=="hunter")t.pinnedBy=null;this.emit("incap",{who:t})}}kill(t){if(t.dead)return;if(t.dead=!0,t.incap=!1,t.pinnedBy){let e=t.pinnedBy;this.releasePin(e)}this.emit("death",{who:t})}updateFields(){let t=[],e=[];for(let s of this.survivors)if(s.alive){let r=Un(s.x,s.z);if(t.push(r),s.bile>0)e.push(r)}if(ar(t,this.fieldSurv),this.hasBile=e.length>0,this.hasBile)ar(e,this.fieldBile);let n=this.throws.filter((s)=>s.type==="pipe");if(this.hasPipe=n.length>0,this.hasPipe)ar(n.map((s)=>Un(s.x,s.z)),this.fieldPipe);let i=1/0;for(let s of this.survivors)if(s.alive)i=Math.min(i,tr[Un(s.x,s.z)]);if(isFinite(i))this.progress=i,this.dir.maxProg=Math.min(this.dir.maxProg,i)}spawnZombie(t,e,n="chase",i=null){if(this.zombies.filter((r)=>!r.dead).length>70)return null;let s={x:t,z:e,y:0,vx:0,vz:0,yaw:this.rand()*6.28,hp:50,state:n,target:i,attackCd:0.5+this.rand(),stagger:0,dead:!1,deadT:0,look:Math.floor(this.rand()*8),phase:this.rand()*10,speed:5.7+this.rand()*1,groanT:2+this.rand()*6,wanderT:0,burning:0,fallDir:0,lunge:0};return this.zombies.push(s),s}aggro(t,e){if(t.state="chase",t.target=e&&e.alive?e:null,this.rand()<0.3)this.emit("zscream",{z:t})}stepZombies(t){let e=this.survivors.filter((s)=>s.alive),n=new Map,i=(s,r)=>Math.floor(s/2)*7919^Math.floor(r/2);for(let s of this.zombies)if(!s.dead){let r=i(s.x,s.z),a=n.get(r);if(!a)n.set(r,a=[]);a.push(s)}for(let s=this.zombies.length-1;s>=0;s--){let r=this.zombies[s];if(r.dead){if(r.deadT+=t,r.deadT>12)this.zombies.splice(s,1);continue}if(r.groanT-=t,r.groanT<=0)r.groanT=3+this.rand()*7,this.emit("groan",{z:r});if(r.stagger>0){r.stagger-=t,xi(r,r.vx*t,r.vz*t,0.3,1.6),r.vx*=Math.exp(-6*t),r.vz*=Math.exp(-6*t);continue}let a=null,o=null,l=this.fieldSurv,c=null;if(r.state==="idle"||r.state==="wander"){for(let _ of e){let b=eh(r,_),I=_.flash?1.4:1;if(b<(8*I)**2||b<(16*I)**2&&this.rand()<t*1.5&&Fn(r.x,1.6,r.z,_.x,_.eye,_.z)){this.aggro(r,_);break}}if(r.state==="idle"){if(r.wanderT-=t,r.wanderT<=0)r.wanderT=3+this.rand()*6,r.state=this.rand()<0.4?"wander":"idle",r.yaw=this.rand()*6.28}if(r.state==="wander"){if(r.wanderT-=t,r.wanderT<=0)r.state="idle",r.wanderT=2+this.rand()*5;let _=0.9,b=-Math.sin(r.yaw)*_,I=-Math.cos(r.yaw)*_,R=xi(r,b*t,I*t,0.3,1.6);if(R.hitX||R.hitZ)r.yaw+=Math.PI*(0.5+this.rand());r.moving=_}else r.moving=0;continue}if(this.hasBile)l=this.fieldBile;else if(this.hasPipe){let _=Un(r.x,r.z);if(this.fieldPipe[_]<45)l=this.fieldPipe}let h=1/0;for(let _ of e){if(this.hasBile&&_.bile<=0)continue;let b=eh(r,_);if(b<h)h=b,c=_}if(l===this.fieldPipe){let _=this.throws.find((b)=>b.type==="pipe");if(_)a=_.x,o=_.z,c=null,h=(r.x-_.x)**2+(r.z-_.z)**2}else if(c)a=c.x,o=c.z;if(a===null){r.state="wander";continue}let d=Math.sqrt(h),u,p;if(d<7&&Fn(r.x,1.2,r.z,a,1.2,o))u=a-r.x,p=o-r.z;else{let _=Un(r.x,r.z),b=Kc(l,_);if(b===_)u=a-r.x,p=o-r.z;else u=hs(b)-r.x,p=us(b)-r.z}let g=Math.hypot(u,p)||1;if(d>4){let _=Math.sin(r.phase*1.7+this.t*0.6)*0.55,b=-p/g*_,I=u/g*_;u=u/g+b,p=p/g+I,g=Math.hypot(u,p)||1}let A=r.speed*(r.burning>0?1.15:1);if(c&&d<1.25&&Math.abs(c.y-r.y)<1.4){if(A=0.6,r.attackCd-=t,r.attackCd<=0){r.attackCd=1+this.rand()*0.3,r.lunge=0.35;let _=c.incap?this.diff.zdmg*2.5:this.diff.zdmg;this.hurt(c,_,r),this.emit("zhit",{z:r,who:c})}}r.lunge=Math.max(0,r.lunge-t);let m=u/g*A,f=p/g*A,C=Math.floor(r.x/2),T=Math.floor(r.z/2);for(let _=-1;_<=1;_++)for(let b=-1;b<=1;b++){let I=n.get((C+_)*7919^T+b);if(!I)continue;for(let R of I){if(R===r)continue;let x=r.x-R.x,M=r.z-R.z,H=x*x+M*M;if(H<0.5&&H>0.00001){let L=Math.sqrt(H);m+=x/L*1.8,f+=M/L*1.8}}}if(r.vx+=(m-r.vx)*Math.min(1,8*t),r.vz+=(f-r.vz)*Math.min(1,8*t),xi(r,r.vx*t,r.vz*t,0.3,1.6),r.yaw=Math.atan2(-u,-p),r.moving=Math.hypot(r.vx,r.vz),h>8100)r.state="wander",r.wanderT=4}}spawnSpecial(t,e,n,i={}){let s={hunter:250,boomer:50,tank:this.diff.tankHp,witch:1000}[t],r={type:t,x:e,z:n,y:0,vx:0,vz:0,vy:0,yaw:this.rand()*6.28,hp:s,maxHp:s,dead:!1,deadT:0,state:"stalk",t:0,stagger:0,target:null,attackCd:0,crouch:!1,pin:null,burning:0,...i};if(t==="witch")r.state="sit",r.startle=0,r.sitting=!0,r.yaw=0.6;return this.specials.push(r),this.emit("special",{sp:r}),r}killSpecial(t,e){if(t.dead)return;if(t.dead=!0,t.deadT=0,t.pin)this.releasePin(t);if(e)e.stats.specials++;if(t.type==="boomer"){this.emit("boomerpop",{x:t.x,z:t.z});for(let n of this.survivors)if(n.alive&&Math.hypot(n.x-t.x,n.z-t.z)<4)this.bile(n)}this.emit("sdeath",{sp:t})}releasePin(t){if(t.pin)t.pin.pinnedBy=null,t.pin=null,t.state="stalk",t.stagger=1,t.t=0}bile(t){let e=t.bile<=0;if(t.bile=15,this.emit("biled",{who:t}),e)this.spawnMob(12+Math.floor(this.rand()*6),t)}witchRage(t,e){if(t.state==="rage")return;t.state="rage",t.sitting=!1,t.target=e&&e.alive?e:this.nearestSurvivor(t),t.t=0,this.emit("witchrage",{w:t})}nearestSurvivor(t,e=!1){let n=null,i=1/0;for(let s of this.survivors)if(s.alive&&(!e||s.up)){let r=eh(t,s);if(r<i)i=r,n=s}return n}stepSpecials(t){for(let e=this.specials.length-1;e>=0;e--){let n=this.specials[e];if(n.dead){if(n.deadT+=t,n.deadT>15)this.specials.splice(e,1);continue}if(n.t+=t,n.stagger>0){n.stagger-=t,xi(n,n.vx*t,n.vz*t,0.4,1.6),n.vx*=Math.exp(-5*t),n.vz*=Math.exp(-5*t);continue}if(n.type==="witch")this.stepWitch(n,t);else if(n.type==="hunter")this.stepHunter(n,t);else if(n.type==="boomer")this.stepBoomer(n,t);else if(n.type==="tank")this.stepTank(n,t)}}chaseStep(t,e,n,i,s=0.4){let r=e.x-t.x,a=e.z-t.z,o=Math.hypot(r,a);if(!(o<8&&Fn(t.x,1.2,t.z,e.x,1.2,e.z))){let c=Un(t.x,t.z),h=Kc(this.fieldSurv,c);if(h!==c)r=hs(h)-t.x,a=us(h)-t.z}let l=Math.hypot(r,a)||1;return t.vx+=(r/l*n-t.vx)*Math.min(1,8*i),t.vz+=(a/l*n-t.vz)*Math.min(1,8*i),xi(t,t.vx*i,t.vz*i,s,1.7),t.yaw=Math.atan2(-r,-a),t.moving=Math.hypot(t.vx,t.vz),o}stepWitch(t,e){if(t.state==="sit"){t.moving=0;for(let s of this.survivors){if(!s.alive)continue;let r=Math.hypot(s.x-t.x,s.z-t.z),a=r<3?0.9:r<7?0.22:r<11?0.06:0;if(s.flash&&r<14){let o=-Math.sin(s.yaw),l=-Math.cos(s.yaw);if(((t.x-s.x)*o+(t.z-s.z)*l)/(r||1)>0.9)a+=r<7?0.35:0.12}if(s.moveSpeed>4&&r<9)a*=1.6;if(t.startle+=a*e,t.startle>=1){this.witchRage(t,s);return}}t.startle=Math.max(0,t.startle-e*0.03);return}let n=t.target&&t.target.alive?t.target:t.target=this.nearestSurvivor(t);if(!n)return;if(t.done){t.moving=0;return}let i=this.chaseStep(t,n,8.2,e,0.35);if(t.attackCd-=e,i<1.3&&t.attackCd<=0){if(t.attackCd=0.9,!n.incap&&this.diff.witchOneShot)this.hurt(n,999,t);else this.hurt(n,n.incap?20:45,t);if(this.emit("witchhit",{w:t,who:n}),n.dead||n.incap){if(t.slashes=(t.slashes||0)+1,t.slashes>4)t.done=!0}}}stepHunter(t,e){if(t.pin){let r=t.pin;if(t.x=r.x+Math.sin(t.yaw)*0.6,t.z=r.z+Math.cos(t.yaw)*0.6,t.crouch=!0,t.moving=0,t.attackCd-=e,t.attackCd<=0)t.attackCd=0.25,this.hurt(r,2.5*this.diff.sdmg*(r.incap?1.5:1),t),this.emit("hunterclaw",{h:t});return}if(t.state==="air"){t.vy-=th*e,t.y+=t.vy*e;let r=xi(t,t.vx*e,t.vz*e,0.4,1.2);for(let a of this.survivors){if(!a.up||a.pinnedBy)continue;if(Math.hypot(a.x-t.x,a.z-t.z)<1.3&&Math.abs(a.y+0.8-t.y)<1.6){t.pin=a,a.pinnedBy=t,t.state="pin",t.y=a.y,t.attackCd=0.2,t.yaw=Math.atan2(t.x-a.x,t.z-a.z),a.reviving=null,a.healT=0,this.emit("pinned",{who:a,h:t});return}}if(t.y<=0||r.hitX||r.hitZ)t.y=Math.max(0,Jc(t.x,t.z,0.3,t.y+0.1)),t.state="stalk",t.t=0,t.vx*=0.2,t.vz*=0.2;return}let n=this.nearestSurvivor(t,!0);if(!n)return;let i=Math.hypot(n.x-t.x,n.z-t.z),s=Fn(t.x,1,t.z,n.x,n.eye,n.z);if(t.state==="crouch"){if(t.crouch=!0,t.moving=0,t.yaw=Math.atan2(t.x-n.x,t.z-n.z),t.t>0.55)if(s&&i<22){let r=Math.max(0.35,i/15);t.vx=(n.x-t.x)/r,t.vz=(n.z-t.z)/r,t.vy=4+r*4,t.state="air",t.crouch=!1,this.emit("pounce",{h:t})}else t.state="stalk",t.t=0;return}if(t.crouch=i<25,s&&i<18&&i>3&&t.t>2){t.state="crouch",t.t=0,this.emit("hunterwarn",{h:t});return}if(i<2){if(t.attackCd-=e,t.attackCd<=0)t.attackCd=0.6,this.hurt(n,5*this.diff.sdmg,t)}if(this.chaseStep(t,n,t.crouch?3.2:6,e),t.growlT=(t.growlT||0)-e,t.growlT<=0)t.growlT=3+this.rand()*3,this.emit("huntergrowl",{h:t})}stepBoomer(t,e){let n=this.nearestSurvivor(t,!0);if(!n)return;t.vomitCd=Math.max(0,(t.vomitCd||0)-e);let i=Math.hypot(n.x-t.x,n.z-t.z);if(t.gurgleT=(t.gurgleT||0)-e,t.gurgleT<=0)t.gurgleT=2.5+this.rand()*3,this.emit("boomergurgle",{b:t});if(i<8&&t.vomitCd<=0&&Fn(t.x,1.4,t.z,n.x,n.eye,n.z)){t.vomitCd=18,t.vomiting=1.2,this.emit("vomit",{b:t});let s=(n.x-t.x)/(i||1),r=(n.z-t.z)/(i||1);for(let a of this.survivors){if(!a.alive)continue;let o=a.x-t.x,l=a.z-t.z,c=Math.hypot(o,l);if(c<8.5&&(o*s+l*r)/(c||1)>0.7)this.bile(a)}}if(t.vomiting=Math.max(0,(t.vomiting||0)-e),t.vomiting>0){t.moving=0;return}if(i>4)this.chaseStep(t,n,3.6,e,0.5);else t.moving=0;if(i<1.6){if(t.attackCd-=e,t.attackCd<=0)t.attackCd=1.2,this.hurt(n,4*this.diff.sdmg,t)}}stepTank(t,e){let n=this.nearestSurvivor(t,!0)||this.nearestSurvivor(t);if(!n)return;if(t.attackCd-=e,this.chaseStep(t,n,t.burning>0?6.4:5.6,e,0.8)<2.3&&t.attackCd<=0&&Math.abs(n.y-t.y)<1.5){t.attackCd=1.5,t.punch=0.4;let s=(n.incap?30:24)*this.diff.sdmg;if(this.hurt(n,s,t),!n.incap&&!n.dead){let r=n.x-t.x,a=n.z-t.z,o=Math.hypot(r,a)||1;n.vx=r/o*11,n.vz=a/o*11,n.vy=4.5,n.onGround=!1,n.kb=0.7}this.emit("tankpunch",{t,who:n})}if(t.punch=Math.max(0,(t.punch||0)-e),t.stompT=(t.stompT||0)-e*Math.max(0.3,t.moving/5),t.stompT<=0)t.stompT=0.45,this.emit("tankstep",{t})}visibleToSurvivors(t,e){for(let n of this.survivors)if(n.alive&&Math.hypot(n.x-t,n.z-e)<70&&Fn(n.x,n.eye,n.z,t,1.2,e))return!0;return!1}findSpawn(t=22,e=55,n=0.5){let i=this.progress??300,s=this.survivors.filter((r)=>r.alive);for(let r=0;r<60;r++){let a=this.spawnCandidates[Math.floor(this.rand()*this.spawnCandidates.length)],o=tr[a];if(!isFinite(o))continue;let l=i-o;if(this.rand()<n?l<5||l>70:l>-5||l<-60)continue;let c=hs(a),h=us(a),d=1/0;for(let u of s)d=Math.min(d,Math.hypot(u.x-c,u.z-h));if(d<t||d>e)continue;if(!this.finale.started&&Kn(c,h)==="E"&&i>60)continue;if(this.visibleToSurvivors(c,h))continue;return[c,h]}return null}spawnMob(t,e=null){let n=0;for(let i=0;i<t*2&&n<t;i++){let s=this.findSpawn(14,40,0.45);if(!s)continue;for(let r=0;r<Math.min(4,t-n);r++)if(this.spawnZombie(s[0]+(this.rand()-0.5)*2,s[1]+(this.rand()-0.5)*2,"chase",e))n++}return n}populateAmbient(t=!1){let e=Math.round(16*this.diff.pop),n=this.zombies.filter((i)=>!i.dead&&(i.state==="idle"||i.state==="wander")).length;for(let i=n;i<e;i++){let s=null;if(t)for(let r=0;r<40&&!s;r++){let a=this.spawnCandidates[Math.floor(this.rand()*this.spawnCandidates.length)],o=hs(a),l=us(a);if(tr[a]<270&&Math.hypot(o-ta.x,l-ta.z)>30)s=[o,l]}else s=this.findSpawn(30,70,1);if(s)this.spawnZombie(s[0],s[1],this.rand()<0.5?"idle":"wander")}}stepDirector(t){let e=this.dir;if(!this.doorOpen)return;e.t+=t;let n=this.zombies.filter((r)=>!r.dead&&r.state==="chase").length;if(e.intensity=Ao(e.intensity+(n*0.012-0.05)*t*3,0,1),e.ambientT-=t,e.ambientT<=0)e.ambientT=4,this.populateAmbient();if(this.finale.started)return;let i=e.intensity>0.8;if(e.mobT-=i?t*0.2:t,e.mobT<=0)e.mobT=30+this.rand()*35,this.spawnMob(Math.round((6+this.rand()*8)*this.diff.pop));if(e.hordeT-=i?t*0.3:t,e.hordeT<=0)e.hordeT=120+this.rand()*60,this.horde();let s=this.specials.filter((r)=>!r.dead&&r.type!=="witch").length;if(e.specialT-=t,e.specialT<=0&&s<(this.diffName==="advanced"?2:1)){let r=this.findSpawn(13,32,0.6);if(r)this.spawnSpecial(this.rand()<0.55?"hunter":"boomer",r[0],r[1]),e.specialT=35+this.rand()*30;else e.specialT=3}if(!e.warehouseTank&&this.progress<120){let r=this.findSpawn(25,50,0.9);if(r)e.warehouseTank=!0,this.spawnSpecial("tank",r[0],r[1])}}horde(t=1){this.emit("horde",{});let e=Math.round((22+this.rand()*8)*this.diff.pop*t),n=0;for(let i=0;i<4&&n<e;i++){let s=this.findSpawn(12,34,i%2?0.2:0.8);if(!s)continue;for(let r=0;r<Math.ceil(e/4)&&n<e;r++){let a=this.spawnZombie(s[0]+(this.rand()-0.5)*3,s[1]+(this.rand()-0.5)*3,"chase");if(a)a.speed+=0.6,n++}}if(n<e)this.spawnMob(e-n)}triggerAlarm(){if(this.alarmUsed)return;this.alarmUsed=!0,this.emit("alarm",{}),this.horde(1.1)}startFinale(t){this.finale.started=!0,this.finale.t=0,this.finale.waveT=6,this.emit("radio",{by:t})}stepFinale(t){let e=this.finale;if(!e.started)return;if(e.t+=t,e.t>8){if(e.waveT-=t,e.waveT<=0&&e.t<Ro){if(e.waveT=14,this.spawnMob(Math.round(11*this.diff.pop)),Math.floor(e.t/14)%3===0)this.emit("horde",{})}if(this.specials.filter((i)=>!i.dead&&i.type!=="witch").length<1&&this.rand()<t*0.05){let i=this.findSpawn(20,45,0.5);if(i)this.spawnSpecial(this.rand()<0.5?"hunter":"boomer",i[0],i[1])}}if(!e.tank&&e.t>70){let n=this.findSpawn(25,50,0.5);if(n)e.tank=!0,this.spawnSpecial("tank",n[0],n[1])}if(e.t>=Ro&&!e.boat)e.boat=!0,this.emit("boat",{});if(e.boat)e.boatX=Math.min(Jn.boatX,e.boatX+t*9)}}var tf=(t)=>t.x>ea.x0&&t.x<ea.x1&&t.z>ea.z0&&t.z<ea.z1;var sf=(t,e,n)=>t<e?e:t>n?n:t,ih=(t)=>(t+Math.PI*3)%(Math.PI*2)-Math.PI;class sh{constructor(t,e,n){this.s=t,this.g=e,this.slot=n,this.path=null,this.pathT=0,this.pathGoal=null,this.react=0,this.target=null,this.yaw=t.yaw,this.pitch=0,this.stuckT=0,this.lastPos=[t.x,t.z],this.healing=!1,this.useHold=!1}goal(){let t=this.g,e=this.s,n=t.player;if(t.finale.boat)return[12,20];if(t.finale.started)return[20+(this.slot-2)*4,22+this.slot%2*4];if(!n.alive)return[e.x,e.z];let i=n.yaw+(this.slot-2)*0.7,s=3.2+this.slot*0.6,r=n.x+Math.sin(i)*s,a=n.z+Math.cos(i)*s;if(!ls(r,a,0.45))r=n.x,a=n.z;return[r,a]}think(t){let e=this.g,n=this.s,i={yaw:this.yaw,pitch:this.pitch};if(!n.alive)return i;this.react-=t;let s=e.survivors,r=null,a=1/0,o=0,l=0,c=0,h=0;for(let S of e.zombies){if(S.dead)continue;let P=Math.hypot(S.x-n.x,S.z-n.z);if(S.state==="chase")l++,c+=S.x,h+=S.z;if(P>(S.state==="chase"?20:13))continue;if(P<2.2)o++;let w=P*(S.state==="chase"?1:2.5);if(w<a&&Fn(n.x,n.eye,n.z,S.x,1.3,S.z))a=w,r=S}for(let S of e.specials){if(S.dead)continue;if(S.type==="witch"&&S.state!=="rage")continue;let P=Math.hypot(S.x-n.x,S.z-n.z);if(P>(S.type==="tank"||S.pin||S.state==="rage"?40:22))continue;let w=P*(S.pin?0.05:S.type==="tank"?0.4:0.6);if(w<a&&Fn(n.x,n.eye,n.z,S.x,1.2,S.z))a=w,r=S}if(r!==this.target)this.target=r,this.react=0.38/e.diff.bot+Math.random()*0.25;let d,u,p=!1,g=!1,A=s.find((S)=>S!==n&&S.pinnedBy&&!S.dead),m=s.filter((S)=>S!==n&&S.incap&&!S.dead&&!S.pinnedBy).sort((S,P)=>Math.hypot(S.x-n.x,S.z-n.z)-Math.hypot(P.x-n.x,P.z-n.z))[0],f=e.specials.find((S)=>S.type==="tank"&&!S.dead);if(n.incap||n.pinnedBy)d=n.x,u=n.z;else if(A)d=A.x,u=A.z,p=!0;else if(m&&o===0&&!(f&&Math.hypot(f.x-m.x,f.z-m.z)<6)){if(d=m.x,u=m.z,p=!0,Math.hypot(m.x-n.x,m.z-n.z)<1.7)g=!0}else{[d,u]=this.goal();let S=this.wantItem();if(S&&o===0){if(d=S.x,u=S.z,Math.hypot(S.x-n.x,S.z-n.z)<1.8)g=!this.useHold}if(f&&!f.dead&&Math.hypot(f.x-n.x,f.z-n.z)<9){let P=n.x-f.x,w=n.z-f.z,D=Math.hypot(P,w)||1;d=n.x+P/D*6,u=n.z+w/D*6}}if(!e.doorOpen&&Math.hypot(24-n.x,118-n.z)<2.6&&e.player.x>18)g=!0;this.useHold=g,i.use=g;let C=Math.hypot(d-n.x,u-n.z),T=0,_=0;if(C>(p?0.9:1.6)){this.pathT-=t;let S=!this.pathGoal||Math.hypot(this.pathGoal[0]-d,this.pathGoal[1]-u)>3;if(!this.path||this.pathT<=0||S)this.path=jc(n.x,n.z,d,u)?[[d,u]]:Qd(n.x,n.z,d,u),this.pathT=1.2,this.pathGoal=[d,u];while(this.path.length>1&&Math.hypot(this.path[0][0]-n.x,this.path[0][1]-n.z)<1)this.path.shift();let P=this.path[0];T=P[0]-n.x,_=P[1]-n.z}if(o>=2&&!p&&r)T-=(r.x-n.x)*0.6,_-=(r.z-n.z)*0.6;let b=Math.hypot(T,_),I=C>14||p;if(b>0.05){let S=-Math.sin(n.yaw),P=-Math.cos(n.yaw),w=Math.cos(n.yaw),D=-Math.sin(n.yaw);i.fwd=(T*S+_*P)/b,i.side=(T*w+_*D)/b,i.walk=!I&&C<3}if(this.stuckT=Math.hypot(n.x-this.lastPos[0],n.z-this.lastPos[1])<0.02&&b>0.5?this.stuckT+t:0,this.lastPos=[n.x,n.z],this.stuckT>0.6)i.jump=!0,this.path=null;let R,x,M;if(r){let S=!r.type||r.type==="hunter",P=(1.15-e.diff.bot)*0.8+0.35;R=r.x+(r.vx||0)*0.08+(Math.random()-0.5)*P,M=r.z+(r.vz||0)*0.08+(Math.random()-0.5)*P,x=r.y+(r.type==="tank"?1.5:r.crouch||r.pin?0.7:S&&this.g.diff.bot>0.95?1.45:1.1)}else if(g&&m)R=m.x,x=0.3,M=m.z;else if(b>0.05)R=n.x+T,x=n.eye,M=n.z+_;if(R!==void 0){let S=R-n.x,P=M-n.z,w=x-n.eye,D=Math.atan2(-S,-P),z=Math.atan2(w,Math.hypot(S,P)),N=(r?9:5)*t;if(this.yaw+=sf(ih(D-this.yaw),-N,N),this.pitch+=sf(z-this.pitch,-N,N),i.yaw=this.yaw,i.pitch=this.pitch,r&&this.react<=0){let X=Math.abs(ih(D-this.yaw))+Math.abs(z-this.pitch),G=ln[n.weapon().id],Y=(G.pellets>1?0.14:0.06)/e.diff.bot,tt=Math.hypot(S,P);if(tt<1.6&&!r.type&&Math.abs(ih(D-this.yaw))<0.6)i.alt=!0;else if(r.pin&&tt<2)i.alt=!0;else if(X<Y&&tt<G.range)this.burst=(this.burst||0)+t,i.fire=G.auto?this.burst%1.1<0.65:Math.random()<0.35}}if(n.primary&&n.cur!=="primary"&&!this.healing&&n.cur!=="throw")i.slot="primary";if(!n.primary&&n.cur!=="secondary"&&!this.healing)i.slot="secondary";let H=n.weapon();if(!r&&H.mag<ln[H.id].mag*0.4&&H.reserve>0)i.reload=!0;let L=l<2&&!r&&!A&&!m;if(n.medkit&&n.hp<40&&L&&!n.incap)this.healing=!0;if(this.healing)if(!n.medkit||!L||n.hp>=99)this.healing=!1;else i.slot=n.cur!=="med"?"med":null,i.fire=n.cur==="med",i.fwd=i.side=0;if(n.pills&&n.hp<50&&!this.healing&&!n.incap)if(n.cur!=="pills")i.slot="pills";else i.fire=!0;if(n.throwable==="pipe"&&l>14&&!n.incap)if(n.cur!=="throw")i.slot="throw";else{let S=c/l,P=h/l;this.yaw=Math.atan2(-(S-n.x),-(P-n.z)),i.yaw=this.yaw,i.pitch=0.35,i.fire=!0}return i}wantItem(){let t=this.g,e=this.s,n=null,i=11;for(let s of t.items){if(s.taken)continue;let r=Math.hypot(s.x-e.x,s.z-e.z);if(r>i)continue;let a=!1;if(s.type==="weapon"){let o=ln[s.wid];if(a=!e.primary||ln[e.primary.id].tier<o.tier,a&&s.wid==="rifle")a=!1}else if(s.type==="ammo")a=e.primary&&e.primary.reserve<ln[e.primary.id].reserve*0.5;else if(s.type==="medkit")a=!e.medkit;else if(s.type==="pills")a=!e.pills;else if(s.type==="pipe"||s.type==="molotov")a=!e.throwable&&s.type==="pipe";if(a&&Fn(e.x,1.2,e.z,s.x,s.y,s.z))n=s,i=r}return n}}function Ni(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new Re,c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(r[p]===void 0)r[p]=[];r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(a[p]===void 0)a[p]=[];a[p].push(d.morphAttributes[p])}if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let p=t[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=rf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let A=0;A<a[h].length;++A)p.push(a[h][A][u]);let g=rf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function rf(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new ze(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<n;g++){let A=h.getComponent(u,g);o.setComponent(u+d,g,A)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}function pn(t=1){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function cn(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,[n,n.getContext("2d")]}function hn(t,{srgb:e=!0,repeat:n=!0,aniso:i=8}={}){let s=new uo(t);if(e)s.colorSpace=ja;if(n)s.wrapS=s.wrapT=Wa;return s.anisotropy=i,s}function ia(t,e,n,i,s,r,a=0.15,o=0.45,l=1,c=3){for(let h=0;h<s;h++){t.globalAlpha=a+i()*(o-a),t.fillStyle=r[Math.floor(i()*r.length)];let d=l+i()*(c-l);t.fillRect(i()*e,i()*n,d,d)}t.globalAlpha=1}function ds(t,e,n,i,s,r,a=60){for(let o=0;o<s;o++){let l=i()*e,c=i()*n,h=10+i()*a,d=t.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,r),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.fillRect(l-h,c-h,h*2,h*2)}}function af(){let[t,e]=cn(512,512),n=pn(3);e.fillStyle="#3c3d40",e.fillRect(0,0,512,512),ia(e,512,512,n,16000,["#2a2b2e","#4a4b4e","#343538","#56575a"]),ds(e,512,512,n,14,"rgba(10,10,12,0.5)",80),e.strokeStyle="rgba(8,8,10,0.75)",e.lineWidth=1.5;for(let i=0;i<18;i++){let s=n()*512,r=n()*512;e.beginPath(),e.moveTo(s,r);for(let a=0;a<8;a++)s+=(n()-0.5)*50,r+=(n()-0.5)*50,e.lineTo(s,r);e.stroke()}e.fillStyle="rgba(200,180,90,0.25)";for(let i=0;i<512;i+=128)e.fillRect(250,i+10,10,70);return hn(t)}function of(){let[t,e]=cn(256,256),n=pn(5);e.fillStyle="#56565a",e.fillRect(0,0,256,256),ia(e,256,256,n,5000,["#454549","#606065","#3a3a3e"]),ds(e,256,256,n,6,"rgba(20,22,18,0.4)",50),e.strokeStyle="#2f2f33",e.lineWidth=3;for(let i=0;i<=256;i+=128)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke(),e.beginPath(),e.moveTo(i,0),e.lineTo(i,256),e.stroke();return hn(t)}function lf(){let[t,e]=cn(256,256),n=pn(7);e.fillStyle="#2e3c22",e.fillRect(0,0,256,256);for(let i=0;i<9000;i++){e.strokeStyle=["#3c4e2a","#24301a","#465a2c","#36422a"][Math.floor(n()*4)],e.globalAlpha=0.6;let s=n()*256,r=n()*256;e.beginPath(),e.moveTo(s,r),e.lineTo(s+(n()-0.5)*3,r-3-n()*5),e.stroke()}return e.globalAlpha=1,ds(e,256,256,n,8,"rgba(40,30,18,0.45)",40),hn(t)}function fs(t=9,e="#4b4c4e"){let[n,i]=cn(256,256),s=pn(t);return i.fillStyle=e,i.fillRect(0,0,256,256),ia(i,256,256,s,6000,["#3b3c3e","#55565a","#333436"]),ds(i,256,256,s,10,"rgba(15,18,14,0.45)",60),hn(n)}function cf(){let[t,e]=cn(256,512),n=pn(11);for(let i=0;i<8;i++){let s=55+n()*20;e.fillStyle=`rgb(${s+10},${s},${s-12})`,e.fillRect(i*32,0,30,512);for(let r=0;r<30;r++){e.strokeStyle=`rgba(20,14,8,${0.15+n()*0.2})`,e.beginPath();let a=i*32+n()*30;e.moveTo(a,0),e.lineTo(a+(n()-0.5)*4,512),e.stroke()}e.fillStyle="#100c08",e.fillRect(i*32+30,0,2,512)}return hn(t)}function sa(t,e="brick"){let[s,r]=cn(512,512),a=pn(t);if(e==="brick"){r.fillStyle="#3a2620",r.fillRect(0,0,512,512);for(let o=0;o<512;o+=12)for(let l=o/12%2?-12:0;l<512;l+=24){let c=40+a()*25;r.fillStyle=`rgb(${c+22},${c},${c-8})`,r.fillRect(l+1,o+1,22,10)}}else r.fillStyle=e==="plaster"?"#5a5650":"#4a4e52",r.fillRect(0,0,512,512),ia(r,512,512,a,7000,["#4a4741","#635f58","#3e3b36"]);ds(r,512,512,a,18,"rgba(10,12,8,0.5)",90);for(let o=0;o<40;o++)r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(a()*512,a()*512*0.5,3+a()*4,60+a()*200);for(let o=0;o<4;o++)for(let l=0;l<4;l++){let c=28+l*128,h=30+o*128,p=a();if(r.fillStyle="#16171a",r.fillRect(c-6,h-6,82,96),p<0.25){r.fillStyle="#0c0d0e",r.fillRect(c,h,70,84);for(let g=0;g<3;g++)r.save(),r.translate(c+35,h+16+g*26),r.rotate((a()-0.5)*0.4),r.fillStyle="#4a3a28",r.fillRect(-41,-7,82,14),r.restore()}else if(p<0.33){let g=r.createLinearGradient(c,h,c,h+84);g.addColorStop(0,"#6b5a35"),g.addColorStop(1,"#2a2416"),r.fillStyle=g,r.fillRect(c,h,70,84)}else if(r.fillStyle="#07080a",r.fillRect(c,h,70,84),r.fillStyle="rgba(80,95,110,0.12)",r.fillRect(c+4,h+4,28,76),a()<0.3)r.strokeStyle="rgba(140,150,160,0.25)",r.beginPath(),r.moveTo(c+a()*70,h),r.lineTo(c+35,h+42),r.lineTo(c+a()*70,h+84),r.stroke();r.fillStyle="#26272a",r.fillRect(c-8,h+84+4,86,8)}return hn(s)}function hf(t=13){let[e,n]=cn(256,256),i=pn(t);n.fillStyle="#4a4d50",n.fillRect(0,0,256,256);for(let s=0;s<256;s+=16)n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,s,256,3),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(0,s+3,256,2);return ds(n,256,256,i,12,"rgba(90,50,20,0.35)",50),ia(n,256,256,i,3000,["#3a3c3e","#5a5d60"]),hn(e)}function or(t=17){let[e,n]=cn(128,128),i=pn(t);for(let s=0;s<26;s++){let r=64+(i()-0.5)*70,a=64+(i()-0.5)*70,o=3+i()*16;n.fillStyle=`rgba(${70+i()*40},${4+i()*6},${4+i()*6},${0.6+i()*0.4})`,n.beginPath(),n.arc(r,a,o,0,7),n.fill()}return hn(e,{repeat:!1})}function uf(){let[t,e]=cn(64,64),n=e.createRadialGradient(32,32,0,32,32,30);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(0.3,"rgba(15,12,10,0.9)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),hn(t,{repeat:!1})}function Co(){let[t,e]=cn(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(0.25,"rgba(255,255,255,0.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),hn(t,{repeat:!1})}function df(){let[t,e]=cn(128,128),n=pn(19);for(let i=0;i<16;i++){let s=64+(n()-0.5)*36,r=64+(n()-0.5)*36,a=22+n()*26,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return hn(t,{repeat:!1})}function ff(){let[t,e]=cn(256,256);e.fillStyle="#000",e.fillRect(0,0,256,256);let n=e.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,"#fffaf0"),n.addColorStop(0.18,"#f4ecd8"),n.addColorStop(0.3,"#b9b2a2"),n.addColorStop(0.36,"#d8d0bc"),n.addColorStop(0.42,"#6e6a60"),n.addColorStop(0.75,"#2a2824"),n.addColorStop(1,"#000"),e.fillStyle=n,e.fillRect(0,0,256,256),hn(t,{repeat:!1})}function Io(t,e="#1b2a1b",n="#c8c0a0"){let[i,s]=cn(512,128);s.fillStyle=e,s.fillRect(0,0,512,128),s.strokeStyle=n,s.lineWidth=6,s.strokeRect(8,8,496,112),s.font='700 64px "Special Elite", "Courier New", monospace',s.textAlign="center",s.textBaseline="middle",s.fillStyle=n,s.fillText(t,256,68);let r=pn(t.length);return ds(s,512,128,r,8,"rgba(0,0,0,0.5)",50),hn(i,{repeat:!1})}function ps(t,e="#a01818"){let[n,i]=cn(512,256),s=pn(t.length*7);i.font='700 74px "Special Elite", "Courier New", monospace',i.textAlign="center",i.textBaseline="middle",i.fillStyle=e,i.globalAlpha=0.85;let r=t.split(`
`);r.forEach((a,o)=>{i.save(),i.translate(256,128+(o-(r.length-1)/2)*80),i.rotate((s()-0.5)*0.1),i.fillText(a,0,0),i.restore()});for(let a=0;a<30;a++)i.fillRect(40+s()*430,90+s()*120,3,10+s()*40);return hn(n,{repeat:!1})}var ve=Jd,mf=(t,e)=>t>=0&&e>=0&&t<er&&e<nr&&on[e][t]!=="#",On=(t,e)=>{let n=Math.imul(t,374761393)^Math.imul(e,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function gf(t,e,n,i=16){let s=new Ft(t,e,n),r=s.attributes.uv,a=[n,n,t,t,t,t],o=[e,e,n,n,e,e];for(let l=0;l<6;l++)for(let c=0;c<4;c++){let h=l*4+c;r.setXY(h,r.getX(h)*a[l]/i,r.getY(h)*o[l]/i)}return s}var ne=(t)=>new yn({roughness:0.9,metalness:0,...t});function xf(t,e){let n={flicker:[],fires:[],door:null,alarm:null,boat:null,radioLed:null,lights:[]},i=8,s={".":ne({map:af(),roughness:0.8}),S:ne({map:fs(21,"#3e3a34")}),P:ne({map:lf(),roughness:1}),G:ne({map:fs(23,"#47484a"),roughness:0.75}),W:ne({map:fs(25,"#3a3b3c"),roughness:0.7}),E:ne({map:cf()})};for(let S of Object.values(s))S.map.repeat.set(1,1),S.map.anisotropy=8;let r={};for(let S=0;S<nr;S++)for(let P=0;P<er;P++){let w=on[S][P];if(!s[w])continue;let D=new Ke(ve,ve).rotateX(-Math.PI/2).translate(P*ve+ve/2,0,S*ve+ve/2),z=D.attributes.uv;for(let N=0;N<z.count;N++)z.setXY(N,(z.getX(N)+P)*(w==="E"?0.5:0.25),(z.getY(N)+S)*(w==="E"?0.5:0.25));(r[w]||=[]).push(D)}for(let[S,P]of Object.entries(r)){let w=new Ut(Ni(P),s[S]);w.receiveShadow=!0,t.add(w)}let a=[];for(let S=0;S<nr;S++)for(let P=0;P<er;P++){if(on[S][P]!==".")continue;for(let[w,D]of[[1,0],[-1,0],[0,1],[0,-1]]){if(mf(P+w,S+D))continue;let z=w?1.6:ve,N=D?1.6:ve,X=P*ve+ve/2+w*(ve/2-0.8),G=S*ve+ve/2+D*(ve/2-0.8);a.push(new Ke(z,N).rotateX(-Math.PI/2).translate(X,0.012,G))}}let o=new Ut(Ni(a),ne({map:of()}));o.material.map.repeat.set(0.4,0.4),o.receiveShadow=!0,t.add(o);let l=new Ut(new Ke(600,600).rotateX(-Math.PI/2),new yn({color:330253,roughness:0.15,metalness:0.4}));l.position.set(-200,-1.2,0),t.add(l),n.water=l;let c=[];for(let S=6;S<54;S+=3)c.push(new Ue(0.18,0.2,2.4,6).translate(3.6,-0.6,S));for(let S=6;S<38;S+=3)c.push(new Ue(0.18,0.2,2.4,6).translate(S,-0.6,3.6));t.add(new Ut(Ni(c),ne({color:2761241})));let h=[sa(1,"brick"),sa(2,"plaster"),sa(3,"concrete"),sa(4,"brick")],d=hf(),u=[...h.map((S)=>ne({map:S,roughness:0.95})),ne({map:d,roughness:0.6,color:9080466}),ne({map:fs(31,"#4a463e")})];u.forEach((S)=>{S.map.anisotropy=8});let p=u.map(()=>[]);for(let S=0;S<nr;S++)for(let P=0;P<er;P++){if(on[S][P]!=="#")continue;let w=null;for(let G=-1;G<=1;G++)for(let Y=-1;Y<=1;Y++)if(mf(P+Y,S+G)){let tt=on[S+G][P+Y];if(tt==="W")w="W";else if(!w||w==="w")w=tt}if(!w)continue;let D=On(Math.floor(P/3),Math.floor(S/3)),z=9+Math.floor(D*3)*4,N=Math.floor(On(Math.floor(P/4),Math.floor(S/2))*4);if(w==="W")z=9,N=4;else if(w==="S")N=5,z=Math.max(z,9);else if(w==="w")z=4,N=5;let X=gf(ve,z,ve).translate(P*ve+ve/2,z/2,S*ve+ve/2);p[N].push(X)}p.forEach((S,P)=>{if(!S.length)return;let w=new Ut(Ni(S),u[P]);w.castShadow=!0,w.receiveShadow=!0,t.add(w)});let g={S:[],W:[]};for(let S=0;S<nr;S++)for(let P=0;P<er;P++){let w=on[S][P];if(g[w])g[w].push(new Ft(ve,0.4,ve).translate(P*ve+ve/2,Yc(w)+0.2,S*ve+ve/2))}for(let[S,P]of Object.entries(g)){let w=new Ut(Ni(P),S==="W"?ne({map:d,color:5593180}):ne({map:fs(33,"#38342e")}));w.castShadow=!0,w.receiveShadow=!0,t.add(w)}let A=[];for(let S=46;S<150;S+=8)A.push(new Ft(0.3,0.5,20).translate(S,6.6,18));t.add(new Ut(Ni(A),ne({color:2763822,roughness:0.5})));let m={car:[2898500,4860452,3815990,5592138,2304044,4147770].map((S)=>ne({color:S,roughness:0.55,metalness:0.2})),burnt:ne({color:1315344,roughness:1}),glass:ne({color:658962,roughness:0.1,metalness:0.3}),tire:ne({color:789516}),dumpster:ne({color:2832938,roughness:0.7}),concrete:ne({map:fs(41,"#6a675f")}),wood:ne({color:5914918}),crate:ne({color:7032622}),bark:ne({color:1971986}),leaf:ne({color:1317904}),metal:ne({color:6119524,roughness:0.5,metalness:0.2}),red:ne({color:7214610,roughness:0.6}),yellow:ne({color:10123796,roughness:0.6}),cloth:ne({color:4082234})},f=(S,P,w,D,z,N=0,X=!0)=>{let G=new Ut(S,P);return G.position.set(w,D,z),G.rotation.y=N,G.castShadow=X,G.receiveShadow=!0,t.add(G),G},C=Co(),T=0;for(let S of cs){let P=(S.x0+S.x1)/2,w=(S.z0+S.z1)/2,D=S.x1-S.x0,z=S.z1-S.z0,N=S.y1-S.y0;switch(S.kind){case"car":{let X=new te;X.position.set(P,0,w),X.rotation.y=S.along==="x"?Math.PI/2:0,X.rotation.y+=(On(T,7)-0.5)*0.3;let G=S.burning?m.burnt:m.car[T++%m.car.length],Y=new Ut(new Ft(1.9,0.75,4.4),G);Y.position.y=0.62,X.add(Y);let tt=new Ut(new Ft(1.7,0.6,2.2),S.burning?m.burnt:m.glass);tt.position.set(0,1.25,-0.2),X.add(tt);for(let[gt,St]of[[-0.9,1.4],[0.9,1.4],[-0.9,-1.4],[0.9,-1.4]]){let Jt=new Ut(new Ue(0.35,0.35,0.25,12).rotateZ(Math.PI/2),m.tire);Jt.position.set(gt,0.35,St),X.add(Jt)}if(X.traverse((gt)=>{if(gt.isMesh)gt.castShadow=!0,gt.receiveShadow=!0}),t.add(X),S.burning){let gt=new Dn(16742954,30,16,2);gt.position.set(P,2,w),t.add(gt),n.fires.push({x:P,z:w,light:gt,base:30}),n.lights.push(gt)}if(S.alarm){let gt=[];for(let St of[-0.75,0.75])for(let Jt of[-2.2,2.2]){let Gt=new Ut(new Ft(0.3,0.12,0.05),new De({color:3348992}));Gt.position.set(St,0.75,Jt),X.add(Gt),gt.push(Gt)}n.alarm={lamps:gt,on:!1,t:0}}break}case"dumpster":f(new Ft(D,N,z),m.dumpster,P,N/2,w),f(new Ft(D+0.1,0.08,z+0.1),m.dumpster,P,N+0.05,w).rotation.x=0.15;break;case"barricade":f(new Ft(D,N,z*0.6),m.concrete,P,N/2,w),f(new Ft(D*0.98,0.12,z),m.red,P,N*0.8,w);break;case"crate":f(new Ft(D,N,z),m.crate,P,N/2,w);break;case"table":f(new Ft(D,0.08,z),m.wood,P,N-0.04,w);for(let[X,G]of[[-1,-1],[1,-1],[-1,1],[1,1]])f(new Ft(0.08,N,0.08),m.wood,P+X*(D/2-0.1),N/2,w+G*(z/2-0.1));break;case"cot":f(new Ft(D,0.15,z),m.cloth,P,0.42,w),f(new Ft(D,0.35,z*0.9),m.metal,P,0.17,w);break;case"tree":{let X=new te;X.position.set(P,0,w);let G=new Ut(new Ue(0.18,0.32,5,6),m.bark);G.position.y=2.5,X.add(G);for(let Y=0;Y<6;Y++){let tt=new Ut(new Ue(0.04,0.1,2.4,5),m.bark),gt=On(P,Y)*6.28,St=0.6+On(w,Y)*0.6;tt.position.set(Math.cos(gt)*0.6,3.6+Y*0.35,Math.sin(gt)*0.6),tt.rotation.set(Math.sin(gt)*St,0,-Math.cos(gt)*St),X.add(tt)}if(On(P,w)<0.5)for(let Y=0;Y<3;Y++){let tt=new Ut(new Gr(1.1,0),m.leaf);tt.position.set((On(Y,P)-0.5)*2.4,4.6+Y*0.5,(On(w,Y)-0.5)*2.4),X.add(tt)}X.traverse((Y)=>{if(Y.isMesh)Y.castShadow=!0}),t.add(X);break}case"fountain":f(new Ue(2.2,2.4,0.8,20),m.concrete,P,0.4,w),f(new Ue(1.95,1.95,0.1,20),new yn({color:659212,roughness:0.1}),P,0.72,w,0,!1),f(new Ue(0.3,0.4,1.6,10),m.concrete,P,1.2,w);break;case"bench":f(new Ft(D,0.08,z),m.wood,P,0.45,w),f(new Ft(D*0.9,0.45,z*0.9),m.metal,P,0.22,w);break;case"pump":f(new Ft(D,N,z),m.red,P,N/2,w),f(new Ft(D*0.8,0.35,0.05),new De({color:660496}),P,N*0.72,w+z/2+0.03,0,!1);break;case"pillar":f(new Ft(D,N,z),m.metal,P,N/2,w);break;case"canopy":{f(new Ft(D,0.4,z),m.metal,P,4.6,w),f(new Ft(D+0.2,0.7,0.15),m.red,P,4.6,S.z0,0,!1),f(new Ft(D+0.2,0.7,0.15),m.red,P,4.6,S.z1,0,!1);let X=new De({color:new Et(2.2,2.4,2.3)}),G=[];for(let tt=0;tt<4;tt++){let gt=f(new Ft(0.15,0.06,3),X,P-6+tt*4,4.36,w,0,!1);G.push(gt)}let Y=new Dn(13625087,40,22,2);Y.position.set(P,4,w),t.add(Y),n.flicker.push({light:Y,base:40,mats:[X],baseCol:X.color.clone(),rate:0.6,seed:3}),n.lights.push(Y);break}case"counter":f(new Ft(D,N,z),m.wood,P,N/2,w);break;case"shelf":{for(let X of[0.05,1.15,2.25,3.3])f(new Ft(D,0.08,z),m.metal,P,X,w);for(let X of[-1,1])for(let G of[-1,1])f(new Ft(0.08,N,0.08),m.yellow,P+G*(D/2-0.05),N/2,w+X*(z/2-0.05));for(let X=0;X<10;X++){let G=0.6+On(P,X)*0.5;f(new Ft(G*0.9,0.5+On(X,w)*0.4,G),m.crate,P+(On(X,3)-0.5)*0.4,[0.4,1.5,2.6][X%3],w-z/2+0.6+X/10*(z-1.2))}break}case"forklift":f(new Ft(D,1.2,z),m.yellow,P,0.6,w),f(new Ft(D*0.9,1,0.1),m.metal,P,1.7,w-z/2+0.3),f(new Ft(0.1,2.1,0.1),m.metal,P,1.05,w+z/2);break;case"container":f(gf(D,N,z,4),ne({map:d,color:S.tint?5909024:2375770,roughness:0.6}),P,N/2,w);break;case"radiocrate":{f(new Ft(D,N,z),m.crate,P,N/2,w),f(new Ft(0.6,0.35,0.4),m.metal,P,N+0.18,w),f(new Ue(0.015,0.015,1.2,4),m.metal,P+0.22,N+0.9,w,0,!1);let X=f(new Nn(0.04,8,6),new De({color:16719888}),P-0.2,N+0.3,w-0.21,0,!1);n.radioLed=X;break}case"srdoor":{let X=new te;X.position.set(24,0,116.2),t.add(X);let G=new Ut(new Ft(0.12,2.9,3.6),ne({color:6953492,roughness:0.5,metalness:0.2}));G.position.set(0,1.45,1.8),G.castShadow=!0,X.add(G);let Y=new Ut(new Ke(2.2,0.55),new De({map:Io("SAFE ROOM","#5a1410","#e8dcc0"),color:7829367}));Y.position.set(0.07,2.2,1.8),Y.rotation.y=Math.PI/2,X.add(Y);let tt=Y.clone();tt.position.x=-0.07,tt.rotation.y=-Math.PI/2,X.add(tt),n.door={pivot:X,open:0};break}default:break}}{let S=new Dn(16763272,70,20,2);S.position.set(14,3.6,118),t.add(S),n.lights.push(S),n.flicker.push({light:S,base:70,rate:0.03,seed:9}),f(new Ft(0.5,0.12,0.5),new De({color:new Et(3,2.4,1.6)}),14,4.1,118,0,!1)}let _=new Ue(0.08,0.12,6,6),b=new Ft(0.5,0.15,0.3);[[34,105],[66,105],[98,105],[130,105],[50,126],[82,126],[114,126],[121,84],[121,70],[24,22],[10,40],[36,10]].forEach(([S,P],w)=>{f(_,m.metal,S,3,P);let D=[1,4,7,9].includes(w),z=new De({color:D?new Et(2.4,1.6,0.8):1118481});if(f(b,z,S,6,P,0,!1),D){let N=new Dn(16756848,28,20,2);N.position.set(S,5.6,P),t.add(N),n.lights.push(N),n.flicker.push({light:N,base:28,mats:[z],baseCol:z.color.clone(),rate:w===4?0.5:0.15,seed:w})}});{let S=new Dn(16722458,22,26,2);S.position.set(90,6,12),t.add(S),n.lights.push(S),n.pulse=S;let P=new De({color:new Et(1.4,0.08,0.05)});for(let w of[60,90,120])f(new Ft(0.4,0.2,0.4),P,w,6.7,12,0,!1)}let R=(S,P,w,D,z,N,X)=>{let G=new Ut(new Ke(N,X),new yn({map:S,transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));G.position.set(P,w,D),G.rotation.y=z,t.add(G)};R(ps(`EVAC AT
THE DOCKS →`),40,2.8,104.05,0,5,2.5),R(ps(`THEY HEAR
YOUR GUNS`,"#8a1010"),104,2.6,104.05,0,5,2.5),R(ps(`DON'T GO IN
THE PARK`,"#c8c8c0"),119.95,2.6,80,Math.PI/2,5,2.5),R(ps(`SHE CRIES
LIGHTS OFF`,"#9a1414"),136.05,2.8,72,-Math.PI/2,5,2.5),R(ps(`NO ONE
IS COMING`,"#7a1010"),46,3,8.05,0,5,2.5),R(ps(`RADIO →
BOAT`,"#d8d0b0"),36.05,2.5,20,Math.PI/2,4,2),R(Io("GAS"),165,5.6,43.9,Math.PI,4,1),R(Io("WAREHOUSE 7","#20282c"),140,4.5,36.05,0,6,1.5);let x=[or(1),or(2),or(3)],M=pn(99);for(let S=0;S<70;S++){let P,w,D=0;do P=M()*ir,w=M()*sr,D++;while(D<50&&(Kn(P,w)==="#"||Kn(P,w)==="S"||Kn(P,w)==="w"));let z=0.8+M()*2.2,N=new Ut(new Ke(z,z).rotateX(-Math.PI/2),new yn({map:x[S%3],transparent:!0,depthWrite:!1,roughness:0.3,polygonOffset:!0,polygonOffsetFactor:-3}));N.position.set(P,0.02,w),N.rotation.y=M()*6,t.add(N)}let H=[];for(let S=0;S<160;S++){let P,w;do P=M()*ir,w=M()*sr;while(!ls(P,w,0.3)||Kn(P,w)==="S");let D=0.15+M()*0.45;H.push(new Ft(D,D*0.4,D*(0.6+M())).rotateY(M()*3).translate(P,D*0.2,w))}t.add(new Ut(Ni(H),ne({color:2762532})));{let S=new te,P=new Ut(new Ft(5,1.6,12),ne({color:14211280,roughness:0.6}));P.position.y=-0.2,S.add(P);let w=new Ut(new Ft(3.6,1.8,4),ne({color:2766400}));w.position.set(0,1.4,-1.5),S.add(w);let D=new Ut(new Nn(0.2,8,6),new De({color:new Et(4,1,0.2)}));D.position.set(0,2.5,-1.5),S.add(D);let z=new Li(16773328,200,70,0.4,0.5,1.5);z.position.set(0,2.4,2),z.target.position.set(14,0,0),S.add(z,z.target),S.position.set(-60,0,Jn.boatZ),S.visible=!1,t.add(S),n.boat={g:S,beacon:D,spot:z}}let L=new Ut(new Nn(900,32,16),new Ee({side:Je,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
      varying vec3 vD; uniform float uTime;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        vec3 col = mix(vec3(0.035, 0.045, 0.05), vec3(0.008, 0.01, 0.014), pow(y, 0.6));
        vec2 uv = d.xz / (d.y + 0.25) * 2.0 + vec2(uTime * 0.01, 0.0);
        float c = n(uv) * 0.6 + n(uv * 2.3) * 0.3 + n(uv * 5.1) * 0.1;
        vec3 moon = normalize(vec3(-0.6, 0.35, -0.4));
        float m = max(dot(d, moon), 0.0);
        col += vec3(0.25, 0.3, 0.32) * pow(m, 40.0) * 0.6 + vec3(0.12, 0.14, 0.15) * pow(m, 6.0) * 0.4;
        col = mix(col, col * 0.35 + vec3(0.02, 0.025, 0.028) * c, smoothstep(0.35, 0.75, c));
        gl_FragColor = vec4(col, 1.0);
      }`}));return L.frustumCulled=!1,L.renderOrder=-10,t.add(L),n.sky=L,n}var rh=new Map;function ms(t,e=0.8,n=0){let i=t+":"+e+":"+n;if(!rh.has(i))rh.set(i,new yn({color:t,roughness:e,metalness:0,emissive:n,emissiveIntensity:n?1:0}));return rh.get(i)}var ah=new Map;function Mt(t,e,n,i,s=0,r=0,a=0,o){let l=`${t},${e},${n}`;if(!ah.has(l))ah.set(l,new Ft(t,e,n));let c=new Ut(ah.get(l),ms(i,o));return c.position.set(s,r,a),c.castShadow=!0,c}function lr(t,e,n,i=0,s=0,r=0){let a=new Ut(new Ue(t,t,e,10),ms(n,0.5));return a.rotation.x=Math.PI/2,a.position.set(i,s,r),a.castShadow=!0,a}var _i=2763822,Po=4869456,Lo=5913120;function gs(t){let e=new te,n=(...s)=>s.forEach((r)=>e.add(r)),i=new k(0,0.03,-0.5);switch(t){case"pistol":n(Mt(0.032,0.044,0.19,3816512,0,0.04,-0.06),Mt(0.03,0.11,0.05,2236962,0,-0.02,0)),i.set(0,0.045,-0.17);break;case"uzi":n(Mt(0.05,0.08,0.26,_i,0,0.03,-0.06),Mt(0.035,0.16,0.05,_i,0,-0.08,-0.02),lr(0.014,0.1,Po,0,0.035,-0.24),Mt(0.02,0.03,0.18,_i,0,0,0.14)),i.set(0,0.035,-0.3);break;case"pump":n(Mt(0.055,0.07,0.42,_i,0,0.03,-0.1),lr(0.02,0.5,Po,0,0.05,-0.45),Mt(0.06,0.06,0.2,Lo,0,0,-0.42),Mt(0.05,0.1,0.28,Lo,0,-0.01,0.22)),i.set(0,0.05,-0.7);break;case"m16":n(Mt(0.05,0.085,0.38,_i,0,0.03,-0.12),Mt(0.045,0.085,0.22,_i,0,0,0.2),Mt(0.02,0.05,0.12,_i,0,0.1,-0.06),lr(0.022,0.3,1776669,0,0.035,-0.45),Mt(0.038,0.16,0.06,2829099,0,-0.1,-0.15)),i.set(0,0.035,-0.62);break;case"auto":n(Mt(0.06,0.09,0.46,1974048,0,0.03,-0.1),lr(0.024,0.46,Po,0,0.05,-0.48),Mt(0.05,0.1,0.26,1974048,0,-0.01,0.22),Mt(0.04,0.12,0.06,_i,0,-0.07,0.02)),i.set(0,0.05,-0.72);break;case"rifle":n(Mt(0.06,0.08,0.6,Lo,0,0.01,-0.05),lr(0.016,0.5,Po,0,0.04,-0.6),lr(0.03,0.3,1118481,0,0.12,-0.08),Mt(0.06,0.12,0.28,Lo,0,-0.02,0.3)),i.set(0,0.04,-0.86);break;case"medkit":n(Mt(0.22,0.16,0.08,12066840,0,0,0),Mt(0.12,0.03,0.085,15658734,0,0,0),Mt(0.03,0.12,0.085,15658734,0,0,0));break;case"pills":n(new Ut(new Ue(0.03,0.03,0.09,10),ms(14200864,0.4)),(()=>{let s=new Ut(new Ue(0.032,0.032,0.03,10),ms(15658734));return s.position.y=0.055,s})());break;case"pipe":{let s=new Ut(new Ue(0.035,0.035,0.18,10),ms(6975090,0.5));s.rotation.z=Math.PI/2,e.add(s),n(Mt(0.06,0.04,0.05,11542560,0,0.04,0));break}case"molotov":{let s=new Ut(new Ue(0.035,0.04,0.18,10),new yn({color:3824170,roughness:0.2,transparent:!0,opacity:0.85}));e.add(s),n(Mt(0.02,0.07,0.02,14207136,0,0.12,0));break}default:n(Mt(0.04,0.08,0.3,_i))}return e.userData.muzzle=i,e}var C_=[{shirt:4026024,pants:2831426,skin:14198914,hair:2759698,vest:0},{shirt:8014634,pants:3813926,skin:9067066,hair:1118481,vest:2894374},{shirt:9187130,pants:2501174,skin:14858390,hair:5909012,vest:0},{shirt:5204794,pants:4078128,skin:13672576,hair:9079430,vest:13158592}];class lh{constructor(t){let e=C_[t];this.root=new te,this.pivot=new te,this.root.add(this.pivot),this.legs=[];for(let r of[-1,1]){let a=new te;a.position.set(r*0.11,0.9,0),a.add(Mt(0.17,0.5,0.19,e.pants,0,-0.25,0));let o=new te;o.position.y=-0.5,a.add(o),o.add(Mt(0.15,0.36,0.17,e.pants,0,-0.18,0),Mt(0.16,0.08,0.26,1841688,0,-0.38,-0.04)),a.userData.knee=o,this.pivot.add(a),this.legs.push(a)}let n=this.upper=new te;if(n.position.y=0.9,this.pivot.add(n),n.add(Mt(0.44,0.6,0.26,e.shirt,0,0.3,0)),e.vest)n.add(Mt(0.46,0.4,0.28,e.vest,0,0.33,0.01));let i=this.neck=new te;i.position.y=0.62,n.add(i),i.add(Mt(0.22,0.25,0.24,e.skin,0,0.13,0),Mt(0.24,0.08,0.26,e.hair,0,0.27,0.02),Mt(0.16,0.03,0.02,1118481,0,0.15,-0.125));let s=(r,a,o)=>{let l=new te;return l.position.set(r*0.28,0.52,0),l.add(Mt(0.12,0.12,0.42,e.shirt,0,0,-0.18),Mt(0.1,0.1,0.08,e.skin,0,0,-0.42)),l.rotation.set(a,o,0),n.add(l),l};this.armR=s(1,-0.35,0.25),this.armL=s(-1,-0.25,-0.5),this.gunMount=new te,this.gunMount.position.set(0.1,0.42,-0.42),n.add(this.gunMount),this.gunId=null,this.walk=0}setGun(t){if(t===this.gunId)return;if(this.gun)this.gunMount.remove(this.gun);this.gunId=t,this.gun=gs(t),this.gun.traverse((e)=>{if(e.isMesh)e.castShadow=!0}),this.gunMount.add(this.gun)}update(t,e){this.root.position.set(t.x,t.y,t.z),this.root.rotation.y=t.yaw,this.setGun(t.weaponId());let n=t.incap||t.dead;this.pivot.rotation.x+=((n?-Math.PI/2*0.92:0)-this.pivot.rotation.x)*Math.min(1,e*6),this.pivot.position.y=n?0.15:0,this.pivot.position.z=n?0.6:0;let i=Math.min(1.2,t.moveSpeed/5.4);this.walk+=e*(4+i*6)*(i>0.05?1:0);let s=Math.sin(this.walk)*0.7*i,r=t.duck;this.legs.forEach((a,o)=>{let l=o?-1:1;a.rotation.x=l*s*(1-r*0.6)-r*0.9,a.userData.knee.rotation.x=r*1.6+Math.max(0,-l*Math.cos(this.walk))*0.6*i,a.position.y=0.9-r*0.42}),this.upper.position.y=0.9-r*0.42,this.upper.rotation.x=t.pitch*0.45+(t.pinnedBy?0.5:0),this.neck.rotation.x=t.pitch*0.4}}var cr=[8358514,9080698,7305828,10132104,8024160,9079416],oh=[4864560,3029576,5909030,3818548,6972504,2763310,8022608,4206666],No=[2763312,3814440,2370618,4209200,1973794];class ch{constructor(t,e=90){this.max=e;let n=(s,r,a,o)=>new Ft(s,r,a).translate(0,o,0),i=(s)=>{let r=new Ys(s,new yn({roughness:0.9}),e);return r.castShadow=!0,r.receiveShadow=!1,r.count=0,r.frustumCulled=!1,t.add(r),r};this.parts={torso:i(n(0.42,0.62,0.24,0.31)),head:i(n(0.22,0.25,0.24,0.12)),armL:i(n(0.11,0.6,0.11,-0.28)),armR:i(n(0.11,0.6,0.11,-0.28)),legL:i(n(0.16,0.9,0.18,-0.45)),legR:i(n(0.16,0.9,0.18,-0.45))},this.c=new Et,this.root=new ee,this.tmp=new ee,this.q=new Ln,this.e=new Rn,this.v=new k,this.one=new k(1,1,1)}set(t,e,n,i,s,r,a,o){this.e.set(r,a,o,"YXZ"),this.q.setFromEuler(this.e),this.tmp.compose(this.v.set(n,i,s),this.q,this.one),this.tmp.premultiply(this.root),this.parts[t].setMatrixAt(e,this.tmp)}update(t,e,n,i){let s=0;for(let r of t){if(s>=this.max)break;if((r.x-n)**2+(r.z-i)**2>12100)continue;let a=0,o=0;if(r.dead)o=Math.min(1,r.deadT*3),o=1-(1-o)**2,a=Math.max(0,r.deadT-8)*0.15;this.e.set(o*-1.45,r.dead?r.fallDir+Math.PI:r.yaw,0,"YXZ"),this.q.setFromEuler(this.e),this.root.compose(this.v.set(r.x,r.y-a,r.z),this.q,this.one);let l=r.phase+e*(r.moving>2?11:4),c=Math.min(1,(r.moving||0)/5),h=Math.sin(l)*(0.25+c*0.6)*(r.dead?0:1),d=r.dead?0:c*0.35+(r.stagger>0?-0.4:0);this.set("legL",s,-0.11,0.9,0,h,0,0),this.set("legR",s,0.11,0.9,0,-h,0,0),this.set("torso",s,0,0.9,0,d,0,Math.sin(r.phase)*0.12);let u=r.dead?0:-1.25-c*0.2+(r.lunge>0?-0.5:0);this.set("armL",s,-0.28*Math.cos(d),1.45,0.28*Math.sin(d),u+Math.sin(l+1)*0.25,0,0.1),this.set("armR",s,0.28*Math.cos(d),1.45,0.28*Math.sin(d),u+Math.sin(l)*0.25-(r.look%3===0?0.8:0),0,-0.1),this.set("head",s,0,1.52,-0.3*Math.sin(d),d*0.5-0.15,Math.sin(r.phase*3)*0.3,Math.sin(r.phase)*0.35);let p=r.look,g=r.burning>0?0.35:1;this.parts.head.setColorAt(s,this.c.set(cr[p%cr.length]).multiplyScalar(g)),this.parts.armL.setColorAt(s,this.c.set(p%2?cr[(p+1)%cr.length]:oh[p]).multiplyScalar(g)),this.parts.armR.setColorAt(s,this.c.set(p%2?cr[(p+2)%cr.length]:oh[p]).multiplyScalar(g)),this.parts.torso.setColorAt(s,this.c.set(oh[p]).multiplyScalar(g)),this.parts.legL.setColorAt(s,this.c.set(No[p%No.length]).multiplyScalar(g)),this.parts.legR.setColorAt(s,this.c.set(No[p%No.length]).multiplyScalar(g)),s++}for(let r of Object.values(this.parts))if(r.count=s,r.instanceMatrix.needsUpdate=!0,r.instanceColor)r.instanceColor.needsUpdate=!0}}function _f(t){let e=new te,n=new te;e.add(n);let i={};if(t==="hunter")n.add(Mt(0.4,0.55,0.26,2764342,0,1.05,0),Mt(0.24,0.26,0.26,2764342,0,1.45,0.02),Mt(0.17,0.12,0.02,657930,0,1.42,-0.12)),i.legs=[Mt(0.16,0.85,0.18,2237738,-0.11,0.45,0),Mt(0.16,0.85,0.18,2237738,0.11,0.45,0)],i.legs.forEach((r)=>n.add(r)),i.arms=[Mt(0.1,0.6,0.1,9080698,-0.28,1,-0.12),Mt(0.1,0.6,0.1,9080698,0.28,1,-0.12)],i.arms.forEach((r)=>n.add(r));else if(t==="boomer"){let r=new Ut(new Nn(0.62,14,10),ms(9079386,0.6));r.position.y=1,r.scale.set(1,1.1,0.9),r.castShadow=!0,n.add(r);let a=ms(11049034,0.5);for(let o=0;o<9;o++){let l=new Ut(new Nn(0.08+Math.random()*0.08,8,6),a),c=Math.random()*6.28,h=Math.random();l.position.set(Math.cos(c)*0.55,0.7+h*0.7,Math.sin(c)*0.5),n.add(l)}n.add(Mt(0.3,0.28,0.3,9079386,0,1.75,-0.05)),i.legs=[Mt(0.22,0.6,0.22,3814440,-0.2,0.3,0),Mt(0.22,0.6,0.22,3814440,0.2,0.3,0)],i.legs.forEach((o)=>n.add(o)),i.arms=[Mt(0.14,0.55,0.14,9079386,-0.62,1,0),Mt(0.14,0.55,0.14,9079386,0.62,1,0)],i.arms.forEach((o)=>n.add(o))}else if(t==="tank")n.add(Mt(1.5,1.2,0.95,8026722,0,1.75,0),Mt(1.1,0.7,0.7,3815472,0,0.95,0),Mt(0.4,0.38,0.42,8026722,0,2.45,-0.3)),i.legs=[Mt(0.36,0.8,0.4,2763302,-0.35,0.4,0),Mt(0.36,0.8,0.4,2763302,0.35,0.4,0)],i.legs.forEach((r)=>n.add(r)),i.arms=[new te,new te],i.arms.forEach((r,a)=>{let o=a?1:-1;r.position.set(o*0.95,2.2,0),r.add(Mt(0.5,1.3,0.5,8026722,0,-0.6,0),Mt(0.6,0.5,0.6,8026722,0,-1.4,0)),n.add(r)});else if(t==="witch"){n.add(Mt(0.32,0.55,0.2,9079424,0,1,0),Mt(0.2,0.24,0.22,13158584,0,1.45,0));let r=Mt(0.26,0.6,0.26,14211280,0,1.3,0.04);n.add(r);let a=new De({color:new Et(3,2,0.6)});for(let o of[-0.05,0.05]){let l=new Ut(new Nn(0.018,6,4),a);l.position.set(o,1.47,-0.12),n.add(l)}i.legs=[Mt(0.11,0.85,0.12,13158584,-0.08,0.45,0),Mt(0.11,0.85,0.12,13158584,0.08,0.45,0)],i.legs.forEach((o)=>n.add(o)),i.arms=[new te,new te],i.arms.forEach((o,l)=>{let c=l?1:-1;o.position.set(c*0.2,1.25,0),o.add(Mt(0.07,0.6,0.07,13158584,0,-0.3,0));for(let h=0;h<3;h++)o.add(Mt(0.015,0.22,0.015,15263968,(h-1)*0.025,-0.7,0));n.add(o)})}return e.traverse((s)=>{if(s.isMesh)s.castShadow=!0}),e.userData={body:n,P:i,walk:0},e}function vf(t,e,n,i){let{body:s,P:r}=t.userData;if(t.position.set(e.x,e.y,e.z),t.rotation.y=e.yaw,e.dead){s.rotation.x+=(-Math.PI/2-s.rotation.x)*Math.min(1,n*5),s.position.y=Math.max(-0.3,s.position.y-n*0.02);return}t.userData.walk+=n*Math.min(12,(e.moving||0)*2.2);let a=Math.sin(t.userData.walk)*Math.min(0.7,(e.moving||0)*0.15);if(r.legs)r.legs[0].rotation.x=a,r.legs[1].rotation.x=-a;if(e.type==="hunter"){let o=e.crouch||e.state==="crouch"||e.pin;s.position.y=o?-0.45:0,s.rotation.x=o?0.5:e.state==="air"?0.9:0,r.arms.forEach((l,c)=>{l.rotation.x=e.pin?-1.4+Math.sin(i*30+c*2)*0.8:o?-0.5:a*(c?-1:1)})}else if(e.type==="boomer")s.scale.setScalar(1+Math.sin(i*3)*0.03),r.arms.forEach((o,l)=>{o.rotation.z=(l?-1:1)*0.3+Math.sin(i*2+l)*0.1}),s.rotation.x=e.vomiting>0?0.4:0;else if(e.type==="tank"){let o=e.punch>0?Math.sin((0.4-e.punch)/0.4*Math.PI):0;r.arms[0].rotation.x=-o*1.8+a*0.6,r.arms[1].rotation.x=-o*1.6-a*0.6,s.rotation.x=0.15+o*0.2}else if(e.type==="witch")if(e.sitting)s.position.y=-0.55,s.rotation.x=0.55,r.legs.forEach((o)=>{o.rotation.x=-1.4}),r.arms.forEach((o,l)=>{o.rotation.x=-2.2+Math.sin(i*5+l)*0.08,o.rotation.z=(l?-1:1)*0.4}),s.rotation.z=Math.sin(i*7)*0.02*(1+e.startle*4);else s.position.y=0,s.rotation.x=0.25,r.arms.forEach((o,l)=>{o.rotation.x=-0.9+Math.sin(i*16+l*3)*0.6,o.rotation.z=(l?-1:1)*0.5})}function yf(t){let e=new te,n=(r)=>{let a=new te;return a.add(Mt(0.05,0.05,r,2241614,0,0,r/2+0.05)),a.add(Mt(0.045,0.045,0.07,10122328,0,0,0.01)),a},i=n(0.32);if(i.position.set(0.01,-0.06,0.04),i.rotation.set(1.05,0.15,0),e.add(i),["pipe","molotov","pills","medkit"].includes(t))return e;let s=n(0.34);if(t==="pistol")s.position.set(-0.035,-0.07,0.01),s.rotation.set(1,-0.35,0);else s.position.set(-0.02,-0.03,-0.34),s.rotation.set(0.95,-0.5,0);return e.add(s),e}function Mf(t){let e=new te;if(t.type==="weapon"){let n=gs(t.wid);n.rotation.set(0,Math.PI/2,Math.PI/2),e.add(n)}else if(t.type==="ammo"){e.add(Mt(0.7,0.35,0.5,3820074,0,0.18,0));for(let n=0;n<6;n++)e.add(Mt(0.16,0.12,0.1,5917216,-0.2+n%3*0.2,0.42,n>2?0.1:-0.1))}else if(t.type==="medkit"){let n=gs("medkit");n.scale.setScalar(1.6),n.rotation.x=-Math.PI/2,e.add(n)}else{let n=gs(t.type);n.scale.setScalar(1.5),e.add(n)}return e.traverse((n)=>{if(n.isMesh)n.castShadow=!0}),e}class Di{constructor(t,e,{additive:n=!1,gravity:i=0,drag:s=1}={}){this.max=t,this.gravity=i,this.drag=s,this.cursor=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.a0=new Float32Array(t);let r=this.geo=new Re,a=(o,l)=>new ze(o,l).setUsage(Dr);r.setAttribute("position",a(this.pos,3)),r.setAttribute("aCol",a(this.col,3)),r.setAttribute("aSize",a(this.size,1)),r.setAttribute("aAlpha",a(this.alpha,1)),this.mat=new Ee({transparent:!0,depthWrite:!1,blending:n?Cn:Wi,uniforms:{uTex:{value:e},uScale:{value:600}},vertexShader:`
        attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uScale / max(-mv.z, 0.3); vA = aAlpha; vC = aCol; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        uniform sampler2D uTex; varying float vA; varying vec3 vC;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); }`}),this.mesh=new co(r,this.mat),this.mesh.frustumCulled=!1}emit(t,e,n,i,s,r,a,o,l,c,h=1,d=1,u=1){let p=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[p*3]=t,this.pos[p*3+1]=e,this.pos[p*3+2]=n,this.vel[p*3]=i,this.vel[p*3+1]=s,this.vel[p*3+2]=r,this.col[p*3]=h,this.col[p*3+1]=d,this.col[p*3+2]=u,this.life[p]=this.maxLife[p]=a,this.size[p]=o,this.grow[p]=l,this.a0[p]=c,this.alpha[p]=c}update(t){let e=Math.exp(-this.drag*t);for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;let i=n*3;if(this.vel[i]*=e,this.vel[i+1]=this.vel[i+1]*e-this.gravity*t,this.vel[i+2]*=e,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.pos[i+1]<0.02)this.pos[i+1]=0.02,this.vel[i+1]*=-0.3;this.size[n]+=this.grow[n]*t;let s=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=this.a0[n]*s*Math.min(1,(1-s)*10+0.4)}for(let n of["position","aCol","aSize","aAlpha"])this.geo.attributes[n].needsUpdate=!0}}class hh{constructor(t,e=48){this.max=e,this.i=0,this.pos=new Float32Array(e*6),this.col=new Float32Array(e*6),this.life=new Float32Array(e);let n=this.geo=new Re;n.setAttribute("position",new ze(this.pos,3).setUsage(Dr)),n.setAttribute("color",new ze(this.col,3).setUsage(Dr)),this.mesh=new lo(n,new Hr({vertexColors:!0,transparent:!0,blending:Cn,depthWrite:!1})),this.mesh.frustumCulled=!1,t.add(this.mesh)}add(t,e,n,i,s,r){let a=this.i;this.i=(this.i+1)%this.max,this.life[a]=0.09,this.seg=this.seg||[],this.seg[a]=[t,e,n,i,s,r]}update(t){for(let e=0;e<this.max;e++){let n=e*6;if(this.life[e]<=0){this.col.fill(0,n,n+6);continue}this.life[e]-=t;let i=this.seg[e],s=1-Math.max(0,this.life[e])/0.09,r=Math.hypot(i[3]-i[0],i[4]-i[1],i[5]-i[2])||1,a=Math.min(r,4)/r,o=Math.min(1,s*1.3),l=Math.min(1,o+a);for(let h=0;h<3;h++)this.pos[n+h]=i[h]+(i[3+h]-i[h])*o,this.pos[n+3+h]=i[h]+(i[3+h]-i[h])*l;let c=Math.max(0,this.life[e]/0.09)*0.55;this.col[n]=1*c,this.col[n+1]=0.85*c,this.col[n+2]=0.5*c,this.col[n+3]=1*c,this.col[n+4]=0.9*c,this.col[n+5]=0.6*c}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}class Do{constructor(t,e,n=140){this.list=[],this.i=0,this.max=n;let i=new Ke(0.13,0.13),s=new De({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,opacity:0.9});this.mesh=new Ys(i,s,n),this.mesh.count=0,this.mesh.frustumCulled=!1,t.add(this.mesh),this.o=new Se}add(t,e,n,i,s,r,a=1){let o=this.o;o.position.set(t+i*0.01,e+s*0.01,n+r*0.01),o.lookAt(t+i,e+s,n+r),o.rotateZ(Math.random()*6.28),o.scale.setScalar(a*(0.8+Math.random()*0.4)),o.updateMatrix(),this.mesh.setMatrixAt(this.i,o.matrix),this.i=(this.i+1)%this.max,this.mesh.count=Math.min(this.max,this.mesh.count+1),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.mesh.count=0,this.i=0}}class uh{constructor(){this.ctx=null,this.volume=0.8,this.tankOn=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(t.destination);let e=t.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=4,e.connect(this.master),this.out=e,this.verb=t.createConvolver(),this.verb.buffer=this.impulse(4.5,2.2),this.verbIn=t.createGain(),this.verbIn.gain.value=1,this.verbIn.connect(this.verb);let n=t.createGain();n.gain.value=0.55,this.verb.connect(n),n.connect(this.out),this.noise=t.createBuffer(1,t.sampleRate*3,t.sampleRate);let i=this.noise.getChannelData(0),s=0;for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;this.brown=t.createBuffer(1,t.sampleRate*3,t.sampleRate);let r=this.brown.getChannelData(0);for(let a=0;a<r.length;a++)s=(s+0.02*(Math.random()*2-1))/1.02,r[a]=s*3.5;this.music=t.createGain(),this.music.gain.value=0.9,this.music.connect(this.out),this.music.connect(this.verbIn),this.ambient(),this.nextEvent=t.currentTime+4,this.heart=0,this.nextBeat=0,setInterval(()=>this.tick(),60)}setVolume(t){if(this.volume=t,this.master)this.master.gain.value=t}impulse(t,e){let n=this.ctx,i=n.sampleRate*t,s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){let a=s.getChannelData(r);for(let o=0;o<i;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/i,e)}return s}src(t,e=!0){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n}lfo(t,e,n,i){let s=this.ctx.createOscillator(),r=this.ctx.createGain();if(s.frequency.value=t,r.gain.value=e,s.connect(r),r.connect(n),i!==void 0)n.value=i;return s.start(),s}ambient(){let t=this.ctx;this.amb=t.createGain(),this.amb.gain.value=1,this.amb.connect(this.out);let e=t.createGain();e.gain.value=0.5,this.amb.connect(e),e.connect(this.verbIn);let n=t.createGain();n.gain.value=0.05;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=180,i.Q.value=3;for(let[u,p]of[[55,"sine"],[58.3,"sine"],[82.4,"triangle"],[110.6,"sine"]]){let g=t.createOscillator();g.type=p,g.frequency.value=u,g.connect(i),g.start(),this.lfo(0.03+Math.random()*0.04,0.6,g.detune,0)}this.lfo(0.05,90,i.frequency,180),i.connect(n),n.connect(this.amb),this.lfo(0.07,0.025,n.gain,0.05);let s=t.createOscillator();s.type="sine",s.frequency.value=1830;let r=t.createGain();r.gain.value=0,this.lfo(0.013,40,s.frequency,1830),this.lfo(0.11,0.004,r.gain,0.003),s.connect(r),r.connect(this.amb),s.start();let a=this.src(this.noise),o=t.createBiquadFilter();o.type="bandpass",o.Q.value=0.8;let l=t.createGain();l.gain.value=0.05,this.lfo(0.06,350,o.frequency,600),this.lfo(0.09,0.035,l.gain,0.05),a.connect(o),o.connect(l),l.connect(this.amb),a.start();let c=this.src(this.brown),h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=110;let d=t.createGain();d.gain.value=0.08,c.connect(h),h.connect(d),d.connect(this.amb),c.start(),this.heartBus=t.createGain(),this.heartBus.gain.value=0,this.heartBus.connect(this.out),this.tankBus=t.createGain(),this.tankBus.gain.value=0,this.tankBus.connect(this.music),this.duck=t.createBiquadFilter(),this.duck.type="lowpass",this.duck.frequency.value=20000}tick(){let t=this.ctx;if(!t)return;let e=t.currentTime;if(this.playing&&e>this.nextEvent){this.nextEvent=e+7+Math.random()*13;let n=Math.random(),i=Math.random()*2-1;if(n<0.22)this.distantScream(i);else if(n<0.36)this.howl(i);else if(n<0.5)this.creak(i);else if(n<0.6)this.musicBox();else if(n<0.7)this.glass(i);else if(n<0.8)this.thunder();else if(n<0.9)this.distantShots(i);else this.moanChorus(i)}if(this.heart>0&&e>this.nextBeat){let n=60+this.heart*60;this.nextBeat=e+60/n,this.thump(e,0.5*this.heart),this.thump(e+0.16,0.32*this.heart)}if(this.tankOn&&e>(this.nextTank||0)){this.nextTank=Math.max(e,this.nextTank||e)+0.22727272727272727,this.tankBeat=(this.tankBeat||0)+1;let i=this.tankBeat%8,s=[33,33,36,33,31,33,39,38];if(this.bassNote(s[i],e+0.02,0.20454545454545453,0.22),i%2===0)this.timp(e+0.02,i===0?0.5:0.3)}}bassNote(t,e,n,i){let s=this.ctx,r=s.createOscillator(),a=s.createGain(),o=s.createBiquadFilter();r.type="sawtooth",r.frequency.value=440*Math.pow(2,(t-69)/12),o.type="lowpass",o.frequency.value=400,a.gain.setValueAtTime(i,e),a.gain.exponentialRampToValueAtTime(0.001,e+n),r.connect(o),o.connect(a),a.connect(this.tankBus),r.start(e),r.stop(e+n+0.05)}timp(t,e){let n=this.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(90,t),i.frequency.exponentialRampToValueAtTime(42,t+0.4),s.gain.setValueAtTime(e,t),s.gain.exponentialRampToValueAtTime(0.001,t+0.7),i.connect(s),s.connect(this.tankBus),i.start(t),i.stop(t+0.8)}thump(t,e){let n=this.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(60,t),i.frequency.exponentialRampToValueAtTime(35,t+0.12),s.gain.setValueAtTime(e,t),s.gain.exponentialRampToValueAtTime(0.001,t+0.18),i.connect(s),s.connect(this.heartBus),i.start(t),i.stop(t+0.2)}panned(t,e=0.9,n=0.15){let i=this.ctx,s=i.createStereoPanner();s.pan.value=t;let r=i.createGain();r.gain.value=n;let a=i.createGain();return a.gain.value=e,s.connect(r),r.connect(this.out),s.connect(a),a.connect(this.verbIn),s}voice(t,e,n,i,s,r,a=900,o=6){let l=this.ctx,c=l.createOscillator(),h=l.createGain(),d=l.createBiquadFilter();c.type="sawtooth",c.frequency.setValueAtTime(n,e),c.frequency.exponentialRampToValueAtTime(i,e+s);let u=l.createOscillator(),p=l.createGain();u.frequency.value=o,p.gain.value=n*0.03,u.connect(p),p.connect(c.frequency),u.start(e),u.stop(e+s+0.1),d.type="bandpass",d.frequency.value=a,d.Q.value=4,h.gain.setValueAtTime(0.0001,e),h.gain.exponentialRampToValueAtTime(r,e+Math.min(0.15,s*0.3)),h.gain.exponentialRampToValueAtTime(0.0001,e+s),c.connect(d),d.connect(h),h.connect(t),c.start(e),c.stop(e+s+0.1)}distantScream(t){let e=this.ctx.currentTime,n=this.panned(t,1,0.05);this.voice(n,e,700+Math.random()*300,380,1.6+Math.random(),0.12,1200,7)}howl(t){let e=this.ctx.currentTime,n=this.panned(t,1,0.05);this.voice(n,e,420,640,0.9,0.06,700,4),this.voice(n,e+0.9,640,380,1.8,0.06,700,4)}creak(t){let e=this.ctx,n=e.currentTime,i=this.panned(t,0.8,0.2);for(let s=0;s<14;s++){let r=n+s*(0.04+Math.random()*0.05),a=e.createOscillator(),o=e.createGain();a.type="square",a.frequency.value=120+Math.sin(s*0.6)*40+Math.random()*20,o.gain.setValueAtTime(0.025,r),o.gain.exponentialRampToValueAtTime(0.0001,r+0.05),a.connect(o),o.connect(i),a.start(r),a.stop(r+0.06)}}glass(t){let e=this.ctx,n=e.currentTime,i=this.panned(t,0.9,0.1);for(let s=0;s<10;s++){let r=n+Math.random()*0.25,a=e.createOscillator(),o=e.createGain();a.frequency.value=2500+Math.random()*4000,o.gain.setValueAtTime(0.02,r),o.gain.exponentialRampToValueAtTime(0.0001,r+0.15),a.connect(o),o.connect(i),a.start(r),a.stop(r+0.2)}this.noiseHit(i,n,"highpass",3000,3000,0.3,0.05)}thunder(){let t=this.ctx,e=t.currentTime,n=this.panned(Math.random()-0.5,0.6,0.6),i=this.src(this.brown,!1),s=t.createBiquadFilter(),r=t.createGain();s.type="lowpass",s.frequency.value=200,r.gain.setValueAtTime(0.0001,e),r.gain.exponentialRampToValueAtTime(0.5,e+0.4),r.gain.exponentialRampToValueAtTime(0.0001,e+3.5),i.connect(s),s.connect(r),r.connect(n),i.start(e,Math.random()),i.stop(e+3.6)}distantShots(t){let e=this.ctx.currentTime,n=this.panned(t,1,0.02);for(let i=0;i<3+Math.floor(Math.random()*4);i++)this.noiseHit(n,e+i*(0.12+Math.random()*0.25),"lowpass",800,200,0.25,0.08)}moanChorus(t){let e=this.ctx.currentTime,n=this.panned(t,1,0.05);for(let i=0;i<5;i++)this.voice(n,e+i*0.3,140+Math.random()*60,90+Math.random()*30,2+Math.random(),0.03,500,3)}musicBox(){let t=this.ctx,e=t.currentTime,n=this.panned(Math.random()*1.6-0.8,1,0.08);([76,72,69,68,71,64,65][Math.floor(Math.random()*3)]?[76,72,69,68,71]:[64,67,63,60]).forEach((s,r)=>{let a=e+r*(0.38+r*0.05),o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.value=440*Math.pow(2,(s-69)/12)*(1-r*0.006),l.gain.setValueAtTime(0.05,a),l.gain.exponentialRampToValueAtTime(0.0001,a+1.4),o.connect(l),l.connect(n),o.start(a),o.stop(a+1.5)})}noiseHit(t,e,n,i,s,r,a,o=1){let l=this.ctx,c=this.src(this.noise,!1),h=l.createBiquadFilter(),d=l.createGain();h.type=n,h.Q.value=o,h.frequency.setValueAtTime(i,e),h.frequency.exponentialRampToValueAtTime(Math.max(20,s),e+r),d.gain.setValueAtTime(a,e),d.gain.exponentialRampToValueAtTime(0.0001,e+r),c.connect(h),h.connect(d),d.connect(t),c.start(e,Math.random()*2),c.stop(e+r+0.05)}listener(t){if(!this.ctx)return;let e=this.ctx.listener,n=this.ctx.currentTime,i=-Math.sin(t.rotation.y),s=-Math.cos(t.rotation.y);if(e.positionX)e.positionX.setTargetAtTime(t.position.x,n,0.02),e.positionY.setTargetAtTime(t.position.y,n,0.02),e.positionZ.setTargetAtTime(t.position.z,n,0.02),e.forwardX.setTargetAtTime(i,n,0.02),e.forwardY.setTargetAtTime(0,n,0.02),e.forwardZ.setTargetAtTime(s,n,0.02),e.upX.value=0,e.upY.value=1,e.upZ.value=0;else e.setPosition(t.position.x,t.position.y,t.position.z),e.setOrientation(i,0,s,0,1,0)}at(t,e,n,i=0.35,s=3,r=60){let a=this.ctx,o=a.createPanner();if(o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=s,o.maxDistance=r,o.rolloffFactor=1.3,o.positionX)o.positionX.value=t,o.positionY.value=e,o.positionZ.value=n;else o.setPosition(t,e,n);let l=a.createGain();return l.gain.value=i,o.connect(this.out),o.connect(l),l.connect(this.verbIn),o}groan(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=this.at(t,1.6,e,0.4,2.5),r=90+Math.random()*70;if(this.voice(s,i,r*(n?1.6:1),r*0.75,0.7+Math.random()*0.9,n?0.16:0.09,380+Math.random()*300,3+Math.random()*4),Math.random()<0.5)this.noiseHit(s,i,"bandpass",600,300,0.6,0.04,3)}scream(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1.6,e,0.5,4);this.voice(i,n,600,300,0.9,0.2,1400,9)}witchSob(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=this.at(t,0.9,e,0.6,3,70);this.noiseHit(s,i,"bandpass",1400,900,0.18,0.05+n*0.04,6),this.voice(s,i+0.18,520+n*200,330,0.9+Math.random()*0.6,0.06+n*0.06,1100,11)}witchShriek(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1.4,e,0.6,8,120);this.voice(i,n,900,1500,0.4,0.35,1800,14),this.voice(i,n+0.35,1500,700,1.4,0.3,1600,12),this.sting()}hunterScreech(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1,e,0.5,5);this.voice(i,n,1100,1600,0.5,0.18,2200,18),this.noiseHit(i,n,"highpass",4000,2000,0.5,0.08)}hunterGrowl(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1,e,0.4,3);this.voice(i,n,160,110,0.8,0.1,500,20)}boomerGurgle(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1.5,e,0.4,3);this.voice(i,n,90,70,1.1,0.12,300,14),this.noiseHit(i,n+0.2,"bandpass",300,200,0.6,0.06,4)}vomit(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1.5,e,0.3,4);this.noiseHit(i,n,"lowpass",1500,300,1.2,0.4),this.voice(i,n,140,90,1.2,0.15,400,18)}splat(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1,e,0.3,4);this.noiseHit(i,n,"lowpass",2000,150,0.5,0.6),this.thumpAt(i,n,0.6)}tankRoar(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,2,e,0.6,10,150);this.voice(i,n,140,70,1.6,0.4,350,10),this.noiseHit(i,n,"lowpass",800,100,1.4,0.3)}tankStep(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,0,e,0.3,6,80);this.thumpAt(i,n,0.5)}thumpAt(t,e,n){let i=this.ctx,s=i.createOscillator(),r=i.createGain();s.frequency.setValueAtTime(70,e),s.frequency.exponentialRampToValueAtTime(30,e+0.2),r.gain.setValueAtTime(n,e),r.gain.exponentialRampToValueAtTime(0.001,e+0.3),s.connect(r),r.connect(t),s.start(e),s.stop(e+0.32)}zhit(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1.2,e,0.1,2);this.noiseHit(i,n,"lowpass",900,200,0.12,0.35)}flesh(t,e,n,i){if(!this.ctx)return;let s=this.ctx.currentTime,r=this.at(t,e,n,0.1,3);this.noiseHit(r,s,"bandpass",i?1800:900,300,i?0.15:0.09,i?0.35:0.18,2)}beep(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,0.2,e,0.3,6),s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.value=1500,r.gain.setValueAtTime(0.12,n),r.gain.exponentialRampToValueAtTime(0.001,n+0.09),s.connect(r),r.connect(i),s.start(n),s.stop(n+0.1)}explosion(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1,e,0.7,12,200);this.noiseHit(i,n,"lowpass",3000,60,1.6,1),this.thumpAt(i,n,1)}fireWhoosh(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,0.5,e,0.3,6);this.noiseHit(i,n,"lowpass",600,2500,0.8,0.4)}alarm(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.at(t,1,e,0.4,10,200);for(let s=0;s<24;s++){let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="square",r.frequency.value=s%2?900:700,a.gain.setValueAtTime(0.12,n+s*0.35),a.gain.setValueAtTime(0,n+s*0.35+0.3),r.connect(a),a.connect(i),r.start(n+s*0.35),r.stop(n+s*0.35+0.32)}}gun(t,e,n,i){if(!this.ctx)return;let s=this.ctx.currentTime,r=i?this.out:this.at(e,1.5,n,0.25,8,150),a=t==="pump"||t==="auto",o=t==="rifle",l=i?a?0.55:o?0.5:t==="pistol"?0.32:0.3:0.3;if(this.noiseHit(r,s,"lowpass",a?2400:4000,200,a?0.35:0.14,l),this.thumpAt(r,s,a||o?0.6:0.3),i){let c=this.ctx.createGain();c.gain.value=0.25,c.connect(this.verbIn),this.noiseHit(c,s,"lowpass",1500,150,0.4,l)}if(t==="pump"&&i)setTimeout(()=>this.click(0.08,900),380)}click(t=0.08,e=2500){if(!this.ctx)return;let n=this.ctx.currentTime;this.noiseHit(this.out,n,"bandpass",e,e*0.8,0.04,t,4)}reload(){this.click(0.07,1800),setTimeout(()=>this.click(0.08,2600),500),setTimeout(()=>this.click(0.09,1400),1200)}shove(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(this.out,t,"bandpass",500,1500,0.15,0.12,1)}pickup(){this.click(0.1,1200),setTimeout(()=>this.click(0.1,1800),90)}hurt(){if(!this.ctx)return;let t=this.ctx.currentTime;this.voice(this.out,t,220,170,0.25,0.08,700,5)}step(t){if(!this.ctx)return;let e=this.ctx.currentTime;this.noiseHit(this.out,e,t==="E"?"lowpass":"bandpass",t==="P"?700:t==="E"?500:1400,300,0.07,0.035,2)}door(){if(!this.ctx)return;let t=this.ctx.currentTime;for(let e=0;e<8;e++){let n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.value=160+e*15,i.gain.setValueAtTime(0.04,t+e*0.06),i.gain.exponentialRampToValueAtTime(0.0001,t+e*0.06+0.08),n.connect(i),i.connect(this.out),n.start(t+e*0.06),n.stop(t+e*0.06+0.1)}this.thumpAt(this.out,t+0.5,0.4)}radio(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(this.out,t,"bandpass",2500,2500,2.5,0.15,2);for(let e=0;e<9;e++)this.voice(this.out,t+0.3+e*0.22,190+Math.random()*60,180,0.2,0.05,1500,4)}sting(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let n of[41,42,47,53,54]){let i=t.createOscillator(),s=t.createGain();i.type="sawtooth",i.frequency.value=440*Math.pow(2,(n-69)/12),s.gain.setValueAtTime(0.0001,e),s.gain.exponentialRampToValueAtTime(0.06,e+0.05),s.gain.exponentialRampToValueAtTime(0.0001,e+2.2);let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=1200,i.connect(r),r.connect(s),s.connect(this.music),i.start(e),i.stop(e+2.3)}}hordeCue(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;this.distantScream(0),this.moanChorus(-0.4),this.moanChorus(0.4);for(let n=0;n<16;n++)this.timpTo(this.music,e+0.8+n*0.32*(1-n*0.025),0.3+n*0.02);for(let n of[57,58,64]){let i=t.createOscillator(),s=t.createGain(),r=t.createOscillator(),a=t.createGain(),o=t.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(440*Math.pow(2,(n-69)/12),e+0.6),i.frequency.exponentialRampToValueAtTime(440*Math.pow(2,(n-57)/12),e+6.5),r.frequency.value=13,a.gain.value=0.5,r.connect(a),a.connect(s.gain),o.type="lowpass",o.frequency.value=2400,s.gain.setValueAtTime(0.0001,e+0.6),s.gain.exponentialRampToValueAtTime(0.05,e+4),s.gain.exponentialRampToValueAtTime(0.0001,e+7),i.connect(o),o.connect(s),s.connect(this.music),i.start(e+0.6),i.stop(e+7.2),r.start(e+0.6),r.stop(e+7.2)}}timpTo(t,e,n){let i=this.ctx,s=i.createOscillator(),r=i.createGain();s.frequency.setValueAtTime(100,e),s.frequency.exponentialRampToValueAtTime(45,e+0.3),r.gain.setValueAtTime(n,e),r.gain.exponentialRampToValueAtTime(0.001,e+0.5),s.connect(r),r.connect(t),s.start(e),s.stop(e+0.55)}tank(t){if(!this.ctx||t===this.tankOn)return;this.tankOn=t,this.tankBus.gain.setTargetAtTime(t?1:0,this.ctx.currentTime,t?0.3:1.5)}setHeart(t){if(this.heart=t,this.heartBus)this.heartBus.gain.setTargetAtTime(t>0?1:0,this.ctx.currentTime,0.3)}rescue(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;[[60,64,67],[65,69,72],[67,71,74],[72,76,79]].forEach((n,i)=>n.forEach((s)=>{let r=t.createOscillator(),a=t.createGain();r.type="triangle",r.frequency.value=440*Math.pow(2,(s-69)/12),a.gain.setValueAtTime(0.0001,e+i*1.1),a.gain.exponentialRampToValueAtTime(0.05,e+i*1.1+0.2),a.gain.exponentialRampToValueAtTime(0.0001,e+i*1.1+2.2),r.connect(a),a.connect(this.music),r.start(e+i*1.1),r.stop(e+i*1.1+2.3)}))}}var zt=(t)=>document.getElementById(t),se={diff:"normal",sens:1,volume:0.8,quality:"high",invert:!1};try{Object.assign(se,JSON.parse(localStorage.getItem("dead-of-night")||"{}"))}catch{}var Uo=()=>localStorage.setItem("dead-of-night",JSON.stringify(se)),I_=()=>new Promise((t)=>requestAnimationFrame(()=>setTimeout(t,0))),Af=(t,e,n)=>t<e?e:t>n?n:t,jn=0.016666666666666666,ph=["primary","secondary","throw","med","pills"],Rf=(t)=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`,Ce=new zc({antialias:!1,powerPreference:"high-performance"}),Cf=()=>se.quality==="high"?Math.min(devicePixelRatio,1.5):0.8;Ce.setPixelRatio(Cf());Ce.setSize(innerWidth,innerHeight);Ce.toneMapping=Xi;Ce.toneMappingExposure=1.4;Ce.shadowMap.enabled=!0;Ce.shadowMap.type=Vi;Ce.autoClear=!1;document.body.prepend(Ce.domElement);var be=new Br;be.background=new Et(329480);be.fog=new Or(790803,0.034);var Te=new Ve(75,innerWidth/innerHeight,0.05,1200);Te.rotation.order="YXZ";be.add(Te);var P_=new Wr(4874360,1315342,1.5);be.add(P_);var ii=new xo(10138832,1.3);ii.position.set(ir/2-70,140,sr/2-50);ii.target.position.set(ir/2,0,sr/2);ii.castShadow=!0;ii.shadow.mapSize.set(2048,2048);Object.assign(ii.shadow.camera,{left:-130,right:130,top:110,bottom:-110,near:10,far:400});ii.shadow.bias=-0.0008;ii.shadow.autoUpdate=!1;be.add(ii,ii.target);var nn=new Li(16773852,20,55,0.44,0.45,0.8);nn.map=ff();nn.castShadow=!0;nn.shadow.mapSize.set(1024,1024);nn.shadow.camera.near=0.3;nn.shadow.camera.far=48;nn.shadow.bias=-0.0005;nn.shadow.normalBias=0.04;nn.position.set(0.25,-0.2,0.1);Te.add(nn);Te.add(nn.target);nn.target.position.set(0.05,-0.15,-10);var Ui=new Dn(16760944,0,12,2);be.add(Ui);var ha=new Br,dh=new Ve(56,innerWidth/innerHeight,0.01,10);ha.add(new Wr(5925498,1118481,1));var oa=new Li(16773852,6,3,0.8,0.6,1);oa.position.set(0.3,0.1,0.3);oa.target.position.set(0,-0.2,-1);ha.add(oa,oa.target);var hr=new Dn(16756832,0,2,2);hr.position.set(0.1,-0.05,-0.6);ha.add(hr);var ti=new te;ha.add(ti);var Ct=new uh,q={state:"loading",game:null,brains:[],yaw:-Math.PI/2,pitch:0,acc:0,shake:0,bob:0,recoil:0,models:[],specials:new Map,items:new Map,throws:new Map,menuT:0,msgs:[],subT:0,hitT:0},ie,If,gn,mh,gh,la,ei,Tn,aa,xh=[],Sf={uniforms:{tDiffuse:{value:null},uT:{value:0},uHurt:{value:0},uLow:{value:0},uBile:{value:0},uIncap:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uT, uHurt, uLow, uBile, uIncap, uFlash; varying vec2 vUv;
    float rnd(vec2 c){ return fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; float r = length(c);
      vec2 wob = uBile * 0.006 * vec2(sin(vUv.y * 30.0 + uT * 3.0), cos(vUv.x * 25.0 + uT * 2.0));
      float ca = 0.0015 + r * r * 0.006 + uHurt * 0.01;
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + wob - c * ca).r;
      col.g = texture2D(tDiffuse, vUv + wob).g;
      col.b = texture2D(tDiffuse, vUv + wob + c * ca).b;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      // sickly grade: teal-green shadows, sodium highlights
      col = mix(col, col * vec3(0.85, 1.05, 1.0), 0.5);
      col = mix(col, vec3(l), 0.18 + uLow * 0.6 + uIncap * 0.4);
      col = mix(col, col * vec3(0.55, 1.25, 0.45) + vec3(0.02, 0.06, 0.0), uBile * 0.6);
      // vignette (tighter when hurt), red rim on damage
      float vig = smoothstep(0.85, 0.25, r);
      col *= mix(0.25, 1.0, vig);
      col += vec3(0.45, 0.0, 0.0) * smoothstep(0.42, 0.85, r) * min(0.8, uHurt * 0.6 + uIncap * 0.35 + uLow * 0.3);
      col += uFlash * 0.08;
      col += (rnd(vUv * 900.0 + uT * 60.0) - 0.5) * 0.035;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};function Pf(){let t=Ce.getDrawingBufferSize(new wt),e=new Pe(t.x,t.y,{type:We,samples:se.quality==="high"?4:0});ei=new Hc(Ce,e),ei.addPass(new Gc(be,Te)),ei.addPass(new js({uniforms:{tDiffuse:{value:null}},vertexShader:Sf.vertexShader,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0,0.0,0.0,1.0); gl_FragColor = vec4(min(c.rgb, vec3(12.0)), 1.0); }"})),ei.addPass(new os(new wt(t.x,t.y),0.4,0.6,1)),Tn=new js(Sf),ei.addPass(Tn),ei.addPass(new Vc)}var mn=new Set,Fi={l:!1,r:!1},ni={reload:!1,slot:null,flash:!1},xs=()=>document.pointerLockElement===Ce.domElement;function Oo(){try{let t=Ce.domElement.requestPointerLock({unadjustedMovement:!0});if(t?.catch)t.catch(()=>Ce.domElement.requestPointerLock())}catch{Ce.domElement.requestPointerLock()}}addEventListener("keydown",(t)=>{if(["Tab","Space"].includes(t.code))t.preventDefault();if(q.state==="menu"&&t.code==="Enter"){ca();return}if(q.state==="over"){if(t.code==="Enter")ca();if(t.code==="Escape")Bo();return}if(q.state!=="playing")return;if(mn.add(t.code),t.repeat)return;if(t.code==="KeyR")ni.reload=!0;if(t.code==="KeyF")ni.flash=!0;if(/^Digit[1-5]$/.test(t.code))ni.slot=ph[+t.code.slice(5)-1]});addEventListener("keyup",(t)=>mn.delete(t.code));addEventListener("blur",()=>{mn.clear(),Fi.l=Fi.r=!1});Ce.domElement.addEventListener("mousedown",(t)=>{if(q.state!=="playing")return;if(!xs()){Oo();return}if(t.button===0)Fi.l=!0;if(t.button===2)Fi.r=!0});addEventListener("mouseup",(t)=>{if(t.button===0)Fi.l=!1;if(t.button===2)Fi.r=!1});addEventListener("contextmenu",(t)=>t.preventDefault());addEventListener("mousemove",(t)=>{if(!xs()||q.state!=="playing")return;let e=0.0021*se.sens;q.yaw-=t.movementX*e,q.pitch=Af(q.pitch-t.movementY*e*(se.invert?-1:1),-1.45,1.45),q.swayX=(q.swayX||0)+t.movementX*0.00025,q.swayY=(q.swayY||0)+t.movementY*0.00025});addEventListener("wheel",(t)=>{if(q.state!=="playing"||!xs())return;let e=q.game.player,n=ph.filter((s)=>e.has(s)),i=n.indexOf(e.cur);ni.slot=n[(i+(t.deltaY>0?1:-1)+n.length)%n.length]},{passive:!0});document.addEventListener("pointerlockchange",()=>{if(q.state==="playing"&&!xs())F_();zt("clickToPlay").classList.toggle("hidden",!(q.state==="playing"&&!xs()))});zt("clickToPlay").addEventListener("click",()=>Oo());function L_(){let t=q.game.player;return{fwd:(mn.has("KeyW")?1:0)-(mn.has("KeyS")?1:0),side:(mn.has("KeyD")?1:0)-(mn.has("KeyA")?1:0),jump:mn.has("Space"),crouch:mn.has("KeyC")||mn.has("ControlLeft"),walk:mn.has("ShiftLeft")||mn.has("ShiftRight"),fire:Fi.l&&xs(),alt:Fi.r&&xs(),use:mn.has("KeyE"),reload:ni.reload,slot:ni.slot,flash:ni.flash,yaw:q.yaw,pitch:q.pitch,_p:t}}async function N_(){let t=zt("loadbar"),e=zt("loadtext"),n=async(s,r)=>{t.style.width=s+"%",e.textContent=r,await I_()};await n(5,"the radio crackles");try{await Promise.race([document.fonts.load('40px "Special Elite"'),new Promise((s)=>setTimeout(s,2500))])}catch{}await n(25,"the streets are empty. almost."),ie=xf(be,se.quality),If=new ch(be,90),await n(60,"something is crying in the park"),aa=Co();let i=df();gn={blood:new Di(500,i,{drag:3,gravity:7}),dust:new Di(300,i,{drag:2.5,gravity:1}),fire:new Di(400,aa,{additive:!0,drag:2,gravity:-3}),smoke:new Di(300,i,{drag:1,gravity:-0.8}),bile:new Di(200,i,{drag:2,gravity:5}),ash:new Di(400,aa,{additive:!0,drag:0.3,gravity:0.05})};for(let s of Object.values(gn))be.add(s.mesh);mh=new hh(be,64),gh=new Do(be,uf(),200),la=new Do(be,or(5),160),la.mesh.geometry=new Ke(0.9,0.9);for(let s=0;s<3;s++){let r=new Li(16773336,8,34,0.45,0.5,0.8);r.map=nn.map,be.add(r,r.target),xh.push(r)}Pf(),D_(),await n(85,"lock the door behind you"),Of(0);try{await Ce.compileAsync(be,Te)}catch{}ii.shadow.needsUpdate=!0,await n(100,""),zt("loading").classList.add("hidden"),Bo(),requestAnimationFrame(zf)}function D_(){let t=(n,i)=>zt(n).querySelectorAll(".pill").forEach((s)=>{s.classList.toggle("sel",se[i]===s.dataset.v),s.onclick=()=>{se[i]=s.dataset.v,Uo(),t(n,i)}});t("diffs","diff"),zt("sens").value=se.sens,zt("sensv").textContent=(+se.sens).toFixed(2),zt("sens").oninput=()=>{se.sens=+zt("sens").value,zt("sensv").textContent=se.sens.toFixed(2),Uo()},zt("vol").value=se.volume,zt("volv").textContent=Math.round(se.volume*100)+"%",zt("vol").oninput=()=>{se.volume=+zt("vol").value,zt("volv").textContent=Math.round(se.volume*100)+"%",Ct.setVolume(se.volume),Uo()};let e=(n,i,s)=>{let r=zt(n);r.textContent=i(),r.onclick=()=>{s(),Uo(),r.textContent=i()}};e("optQuality",()=>`Graphics: ${se.quality.toUpperCase()}`,()=>{se.quality=se.quality==="high"?"low":"high",U_()}),e("optInvert",()=>`Invert Y: ${se.invert?"ON":"OFF"}`,()=>{se.invert=!se.invert}),zt("go").onclick=()=>ca(),document.querySelectorAll("[data-act]").forEach((n)=>n.onclick=()=>{let i=n.dataset.act;if(i==="resume")O_();if(i==="restart")ca();if(i==="menu")Bo()})}function U_(){Ce.setPixelRatio(Cf()),nn.castShadow=se.quality==="high",xh.forEach((t)=>{t.visible=se.quality==="high"}),Pf(),kf()}function Bo(){if(q.state="menu",document.pointerLockElement)document.exitPointerLock();["pause","over"].forEach((t)=>zt(t).classList.add("hidden")),zt("hud").classList.add("hidden"),zt("menu").classList.remove("hidden"),Ct.playing=!0,Ct.tank(!1),Ct.setHeart(0),Lf(!0)}function ca(){Ct.start(),Ct.setVolume(se.volume),Ct.playing=!0,["menu","pause","over"].forEach((t)=>zt(t).classList.add("hidden")),zt("hud").classList.remove("hidden"),Lf(!1),q.state="playing",Oo(),vi("MARCUS","Radio said boats are pickin' up at the docks. Let's move.",5),Fo("Get to the docks. Open the safe room door (E).")}function F_(){if(q.state!=="playing")return;q.state="paused",zt("pause").classList.remove("hidden"),zt("clickToPlay").classList.add("hidden")}function O_(){zt("pause").classList.add("hidden"),q.state="playing",Oo()}function Lf(t){for(let n of q.models)be.remove(n.root);for(let[,n]of q.specials)be.remove(n);for(let[,n]of q.items)be.remove(n);for(let[,n]of q.throws)be.remove(n);q.models=[],q.specials.clear(),q.items.clear(),q.throws.clear(),gh.clear(),la.clear();let e=q.game=new nh({diff:se.diff,seed:Math.random()*1e9|0});q.brains=e.survivors.map((n,i)=>i?new sh(n,e,i):null);for(let n of e.survivors){let i=new lh(n.id);i.root.traverse((s)=>{if(s.isMesh)s.castShadow=!0}),be.add(i.root),q.models.push(i)}if(q.models[0].root.visible=!1,q.yaw=-Math.PI/2,q.pitch=0,q.acc=0,q.shake=0,q.lastHp=100,q.over=null,q.stepT=0,ie.door)ie.door.open=0,ie.door.pivot.rotation.y=0;if(ie.boat.g.visible=!1,ie.alarm)ie.alarm.on=!1;Ct.tank(!1),Df(null)}function vi(t,e,n=3.5){let i=q.game.survivors.find((r)=>r.name===t),s=i?"#"+new Et(i.color).offsetHSL(0,0,0.25).getHexString():"#d8d2c4";zt("sub").innerHTML=`<b style="color:${s}">${t}:</b>${e}`,q.subT=n}function Fo(t){zt("objective").textContent=t}var Bn=(t)=>{let e=q.game.survivors.filter((i)=>i.alive&&!i.isPlayer);if(!e.length)return;let n=e[Math.floor(Math.random()*e.length)];vi(n.name,t[Math.floor(Math.random()*t.length)])},bf="";function Nf(){let t=q.game,e=t.player,n=[e,...t.survivors.filter((p)=>!p.isPlayer)].map((p)=>{let g=p.dead?0:p.incap?p.incapHp/300:p.hp/100,A=p.incap?"#c8302a":p.hp>60?"#5a9a4a":p.hp>30?"#c8a030":"#c8402a",m=[p.medkit?"✚":"",p.pills?"\uD83D\uDC8A":"",p.throwable==="pipe"?"\uD83D\uDCA3":p.throwable==="molotov"?"\uD83D\uDD25":""].join(" "),f=p.dead?"DEAD":p.pinnedBy?"PINNED!":p.incap?"DOWN":p.incaps>=2?"B&W":Math.ceil(p.hp);return`<div class="mate ${p.isPlayer?"me":""} ${p.incap||p.pinnedBy?"down":""} ${p.dead?"dead":""}" style="--c:#${new Et(p.color).getHexString()}"><div class="nm"><span>${p.name}</span><em>${m} ${f}</em></div><div class="hp"><i style="width:${(g*100).toFixed(0)}%;background:${A}"></i></div></div>`}).join("");if(n!==bf)zt("team").innerHTML=n,bf=n;let i=e.weapon(),s=ln[i.id],r=e.cur==="throw"||e.cur==="med"||e.cur==="pills";zt("mag").textContent=r?"":i.mag,zt("res").textContent=r?"":i.reserve===1/0?"∞":i.reserve,zt("wname").textContent=r?{throw:e.throwable==="pipe"?"Pipe Bomb":"Molotov",med:"First Aid Kit — hold fire",pills:"Pain Pills — fire to use"}[e.cur]:s.name,zt("slots").innerHTML=ph.map((p,g)=>`<div class="${e.cur===p?"on":""}" style="opacity:${e.has(p)?1:0.25}"><small>${g+1}</small>${["\uD83D\uDD2B","\uD83D\uDD2B",e.throwable==="molotov"?"\uD83D\uDD25":"\uD83D\uDCA3","✚","\uD83D\uDC8A"][g]}</div>`).join("");let a="",o=null,l="";if(e.reviving)o=e.reviveT/4,l=`Reviving ${e.reviving.name}…`;else if(e.healT>0)o=e.healT/5,l="Healing…";else if(e.up){let p=(A,m,f)=>Math.hypot(A-e.x,m-e.z)<f,g=t.survivors.find((A)=>A!==e&&A.incap&&!A.dead&&p(A.x,A.z,2.2));if(g)a=`Hold <kbd>E</kbd> to revive ${g.name}`;else if(!t.doorOpen&&p(24,118,3))a="Press <kbd>E</kbd> to open the door";else if(!t.finale.started&&p(26,26,2.6))a="Press <kbd>E</kbd> to use the radio";else{let A=Math.sin(e.yaw),m=Math.cos(e.yaw),f=t.items.find((C)=>!C.taken&&p(C.x,C.z,2.4)&&-A*(C.x-e.x)-m*(C.z-e.z)>-0.4*Math.hypot(C.x-e.x,C.z-e.z));if(f)a=`<kbd>E</kbd> ${f.type==="weapon"?"Take "+ln[f.wid].name:f.type==="ammo"?"Refill ammo":"Take "+{medkit:"First Aid Kit",pills:"Pain Pills",pipe:"Pipe Bomb",molotov:"Molotov"}[f.type]}`}}else if(e.incap&&!e.dead)a=e.pinnedBy?"PINNED — your team has to save you!":"You are down. Hold on — your team will revive you.";else if(e.pinnedBy)a="PINNED — your team has to save you!";zt("prompt").innerHTML=a;let c=zt("bar");if(c.style.display=o!==null?"block":"none",o!==null)zt("barfill").style.width=(Af(o,0,1)*100).toFixed(0)+"%",zt("bartext").textContent=l;let h=t.finale;zt("finale").textContent=h.boat?"THE BOAT IS HERE — GET ON THE DOCK!":h.started?`Rescue arrives in ${Rf(Math.max(0,Ro-h.t))}`:"";let d=(s.spread+e.spread)*260+Math.min(1,e.moveSpeed/5)*10+6,u=zt("cross").children;u[0].style.top=`${-d-8}px`,u[1].style.top=`${d}px`,u[2].style.left=`${-d-8}px`,u[3].style.left=`${d}px`,zt("cross").style.display=e.cur==="med"||e.cur==="pills"?"none":""}var yi=null,ra=null,Tf=null,wf;function Df(t){if(t===Tf)return;if(Tf=t,yi)ti.remove(yi);if(ra)ti.remove(ra);if(yi=ra=null,!t)return;yi=gs(t),ra=yf(t),yi.add(ra),yi.scale.setScalar(0.85),ti.add(yi),q.switchAnim=1}function Uf(t){let e=q.game.player,n=e.dead||e.pinnedBy?null:e.weaponId();if(Df(n),!yi)return;q.switchAnim=Math.max(0,(q.switchAnim||0)-t*3),q.swayX=(q.swayX||0)*Math.exp(-8*t),q.swayY=(q.swayY||0)*Math.exp(-8*t),q.recoil=Math.max(0,q.recoil-t*6);let i=Math.min(1,e.moveSpeed/5.4),s=Math.sin(q.bob)*0.012*i,r=Math.abs(Math.cos(q.bob))*0.012*i,a=n==="pistol",o=["pipe","molotov","medkit","pills"].includes(n),l=e.reloadT>0?Math.sin(Math.min(1,e.reloadT/(ln[e.weapon().id].shell?0.6:ln[e.weapon().id].reload))*Math.PI):0,c=e.shoveCd>0.45?Math.sin((0.75-e.shoveCd)/0.3*Math.PI):0,h=e.healT>0?1:0;if(ti.position.set((a?0.16:o?0.17:0.19)+s-q.swayX-c*0.12,(a?-0.19:o?-0.17:-0.22)-r+q.swayY-q.switchAnim*0.3-l*0.08-h*0.1,(a?-0.44:o?-0.36:-0.47)+q.recoil*0.05+c*-0.1),ti.rotation.set(q.recoil*0.12+l*0.5+q.swayY*2+h*-0.6,q.swayX*2+c*0.9,l*-0.4+c*0.5),o)ti.position.y+=0.04,ti.rotation.x+=0.3;if(e.incap)ti.position.y-=0.05,ti.rotation.z+=0.3;if(hr.intensity=Math.max(0,hr.intensity-t*60),wf)wf.visible=hr.intensity>0.5;oa.intensity=e.flash?6:0.6}function Ff(){let t=q.game,e=t.player;for(let n of t.events)switch(n.type){case"shot":{let i=n.who===e;if(Ct.gun(n.id,n.who.x,n.who.z,i),i)q.recoil=1,hr.intensity=3,Ui.position.set(e.x,e.eye,e.z),Ui.intensity=25,q.shake=Math.max(q.shake,n.id==="pump"||n.id==="auto"||n.id==="rifle"?0.4:0.15);else Ui.position.set(n.who.x,n.who.eye,n.who.z),Ui.intensity=Math.max(Ui.intensity,12);break}case"tracer":mh.add(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);break;case"impact":gh.add(n.x,n.y,n.z,n.nx,n.ny,n.nz,1);for(let i=0;i<4;i++)gn.dust.emit(n.x,n.y,n.z,n.nx*2+(Math.random()-0.5)*2,n.ny*2+Math.random(),n.nz*2+(Math.random()-0.5)*2,0.5,0.15,0.4,0.4,0.5,0.48,0.44);break;case"blood":{for(let i=0;i<(n.head?10:5);i++)gn.blood.emit(n.x,n.y,n.z,n.dx*3+(Math.random()-0.5)*3,Math.random()*3,n.dz*3+(Math.random()-0.5)*3,0.5+Math.random()*0.3,n.head?0.22:0.15,0.3,0.9,0.25,0.02,0.02);if(Math.random()<0.25){let i=rr(n.x,n.y,n.z,n.dx,-0.4,n.dz,4);if(i)la.add(n.x+n.dx*i.t,n.y-0.4*i.t,n.z+n.dz*i.t,i.nx,i.ny,i.nz,1+Math.random())}if(n.head&&Math.hypot(n.x-e.x,n.z-e.z)<40)Ct.flesh(n.x,n.y,n.z,!0);q.hitT=0.12;break}case"zdeath":if(Math.random()<0.5)la.add(n.z.x,0.03,n.z.z,0,1,0,1.4);break;case"groan":{let i=n.z;if(Math.hypot(i.x-e.x,i.z-e.z)<40)Ct.groan(i.x,i.z,i.state==="chase");break}case"zscream":if(Math.hypot(n.z.x-e.x,n.z.z-e.z)<45)Ct.scream(n.z.x,n.z.z);break;case"zhit":Ct.zhit(n.z.x,n.z.z);break;case"hurt":if(n.who===e){if(q.hurtFlash=Math.min(0.8,(q.hurtFlash||0)+n.amt*0.04+0.1),q.shake=Math.max(q.shake,0.25),Math.random()<0.3)Ct.hurt()}break;case"shove":if(n.who===e)Ct.shove();break;case"shoved":Ct.zhit(n.z.x,n.z.z);break;case"reload":if(n.who===e)Ct.reload();break;case"shell":if(n.who===e)Ct.click(0.08,1600);break;case"pickup":if(n.who===e){if(Ct.pickup(),n.what)q.flashMsg=n.what}break;case"door":Ct.door(),Fo("Make your way through town to the docks."),Bn(["Door's open. Stay close.","Here we go…","Watch your corners."]);break;case"incap":if(n.who===e)Ct.sting();else vi(n.who.name,["I'm down! Help me up!","Somebody help me!","I can't get up!"][Math.floor(Math.random()*3)]);break;case"revived":if(n.who!==e)vi(n.who.name,"Thanks. I owe you.");break;case"death":if(n.who!==e)vi("",`${n.who.name} is dead.`,3);break;case"healed":if(n.who!==e)vi(n.who.name,"Patching myself up.");break;case"special":{if(n.sp.type==="tank")Ct.tankRoar(n.sp.x,n.sp.z),Ct.tank(!0),setTimeout(()=>Bn(["TANK! Run!","Oh no… it's a Tank!","TANK! Everybody shoot it!"]),1500);break}case"sdeath":{let i=n.sp.type;if(i==="tank"&&!q.game.specials.some((s)=>s.type==="tank"&&!s.dead))Ct.tank(!1),Bn(["The Tank is dead!","Got the big one!"]);if(i==="witch")Bn(["Witch is dead. Thank God."]);if(i==="hunter")Bn(["Hunter down.","Got the Hunter."]);break}case"pounce":Ct.hunterScreech(n.h.x,n.h.z);break;case"hunterwarn":Ct.hunterScreech(n.h.x,n.h.z);break;case"huntergrowl":if(Math.hypot(n.h.x-e.x,n.h.z-e.z)<45)Ct.hunterGrowl(n.h.x,n.h.z);break;case"hunterclaw":Ct.zhit(n.h.x,n.h.z);break;case"pinned":if(n.who===e)Ct.sting(),q.shake=0.6;else vi(n.who.name,["Get it off me!","HUNTER! Help!","Aaagh! Get it off!"][Math.floor(Math.random()*3)]);break;case"boomergurgle":if(Math.hypot(n.b.x-e.x,n.b.z-e.z)<40)Ct.boomerGurgle(n.b.x,n.b.z);break;case"vomit":Ct.vomit(n.b.x,n.b.z);break;case"boomerpop":Ct.splat(n.x,n.z);for(let i=0;i<40;i++)gn.bile.emit(n.x,1.2,n.z,(Math.random()-0.5)*9,Math.random()*6,(Math.random()-0.5)*9,1.2,0.5,1.2,0.8,0.35,0.45,0.12);break;case"biled":if(n.who===e)Bn(["You got puked on! Here they come!","Boomer bile! Horde incoming!"]),Ct.hordeCue();break;case"witchrage":Ct.witchShriek(n.w.x,n.w.z),Bn(["WITCH!","You startled the Witch!","RUN! The Witch!"]);break;case"witchhit":Ct.scream(n.w.x,n.w.z);break;case"tankpunch":if(Ct.splat(n.t.x,n.t.z),n.who===e)q.shake=1.2;break;case"tankstep":if(Math.hypot(n.t.x-e.x,n.t.z-e.z)<60){Ct.tankStep(n.t.x,n.t.z);let i=Math.hypot(n.t.x-e.x,n.t.z-e.z);q.shake=Math.max(q.shake,Math.max(0,0.25-i*0.008))}break;case"horde":Ct.hordeCue(),setTimeout(()=>Bn(["Here they come!","HORDE! Get ready!","Oh, here we go…","They're coming!"]),1800);break;case"alarm":if(Ct.alarm(84,107),ie.alarm)ie.alarm.on=!0,ie.alarm.t=0;Bn(["Who set off the car alarm?!","Great. Car alarm. Here they come!"]);break;case"throw":if(n.who!==e)vi(n.who.name,n.type==="pipe"?"Pipe bomb out!":"Molotov out!");break;case"beep":Ct.beep(n.x,n.z);break;case"explode":Ct.explosion(n.x,n.z);for(let i=0;i<60;i++)gn.fire.emit(n.x,n.y+0.5,n.z,(Math.random()-0.5)*14,Math.random()*10,(Math.random()-0.5)*14,0.5+Math.random()*0.4,1.4,2,0.9,2.4,1.2,0.3);for(let i=0;i<20;i++)gn.smoke.emit(n.x,n.y+1,n.z,(Math.random()-0.5)*4,2+Math.random()*3,(Math.random()-0.5)*4,3,2.5,2,0.6,0.2,0.2,0.2);q.shake=Math.max(q.shake,Math.max(0,1-Math.hypot(n.x-e.x,n.z-e.z)/20));break;case"ignite":Ct.fireWhoosh(n.x,n.z);break;case"radio":Ct.radio(),Fo("Hold out until the boat arrives!"),setTimeout(()=>vi("RADIO",`"…we read you. Boat's on its way. Hold out two and a half minutes…"`,6),600),setTimeout(()=>Ct.hordeCue(),4000);break;case"boat":Bn(["THE BOAT! Get to the dock!","Boat's here! GO GO GO!"]),Fo("Get on the dock by the boat!"),ie.boat.g.visible=!0;break;case"over":B_(n);break}t.events.length=0}function B_(t){let e=q.game,n=e.player;if(q.over=t,q.state="over",document.pointerLockElement)document.exitPointerLock();if(Ct.tank(!1),Ct.setHeart(0),t.win)Ct.rescue();else Ct.sting();setTimeout(()=>{zt("overtitle").textContent=t.win?"RESCUED":"YOU DIED",zt("overreason").textContent=t.win?`You made it off Harbor Town. ${t.reason}`:t.reason;let i=e.survivors.reduce((s,r)=>s+r.stats.kills,0);if(zt("overstats").innerHTML=[["Time",Rf(e.t)],["Your kills",n.stats.kills],["Specials killed",n.stats.specials],["Team kills",i],["Damage taken",Math.round(n.stats.dmg)],["Times downed",n.stats.incaps],["Difficulty",se.diff],["Survivors",e.survivors.filter((s)=>s.alive).length+"/4"]].map(([s,r])=>`<div>${s}<b>${r}</b></div>`).join(""),zt("over").classList.remove("hidden"),zt("hud").classList.add("hidden"),t.win){let s=+localStorage.getItem("dead.best."+se.diff)||0;if(!s||e.t<s)localStorage.setItem("dead.best."+se.diff,Math.round(e.t));localStorage.setItem("dead.wins",String((+localStorage.getItem("dead.wins")||0)+1))}},t.win?1500:2200)}function fh(t,e){let n=q.game,i=n.player;n.survivors.forEach((r,a)=>q.models[a].update(r,t)),n.survivors.slice(1).forEach((r,a)=>{let o=xh[a];if(!o)return;o.visible=r.alive&&se.quality==="high";let l=-Math.sin(r.yaw)*Math.cos(r.pitch),c=-Math.cos(r.yaw)*Math.cos(r.pitch),h=Math.sin(r.pitch);o.position.set(r.x+l*0.3,r.eye-0.3,r.z+c*0.3),o.target.position.set(r.x+l*10,r.eye-0.3+h*10,r.z+c*10)}),If.update(n.zombies,e,Te.position.x,Te.position.z);for(let r of n.specials){let a=q.specials.get(r);if(!a)a=_f(r.type),be.add(a),q.specials.set(r,a);vf(a,r,t,e)}for(let[r,a]of q.specials)if(!n.specials.includes(r))be.remove(a),q.specials.delete(r);let s=n.specials.find((r)=>r.type==="witch"&&!r.dead);if(s&&s.sitting){q.sobT=(q.sobT||0)-t;let r=Math.hypot(s.x-i.x,s.z-i.z);if(q.sobT<=0&&r<60)q.sobT=1+Math.random()*1.4-s.startle*0.6,Ct.witchSob(s.x,s.z,s.startle);if(r<20&&!q.witchWarned)q.witchWarned=!0,Bn(["Shh… you hear that? Witch. Lights off, don't startle her.","Witch nearby. Kill your flashlight."])}for(let r of n.items){let a=q.items.get(r);if(!a&&!r.taken){a=Mf(r),a.position.set(r.x,r.y,r.z),be.add(a),q.items.set(r,a);let o=new qs(new Qi({map:aa,color:9083514,blending:Cn,depthWrite:!1,transparent:!0,opacity:0}));o.scale.set(1.2,1.2,1),a.add(o),a.userData.halo=o}if(a){a.visible=!r.taken||r.type==="weapon"||r.type==="ammo";let o=Math.hypot(r.x-i.x,r.z-i.z);a.userData.halo.material.opacity=o<8&&a.visible?0.25*(1-o/8):0}}for(let r of n.throws){let a=q.throws.get(r);if(!a){a=gs(r.type),a.scale.setScalar(1.6);let o=new qs(new Qi({map:aa,color:16719888,blending:Cn,depthWrite:!1,transparent:!0}));o.scale.set(0.5,0.5,1),a.add(o),a.userData.led=o,be.add(a),q.throws.set(r,a)}if(a.position.set(r.x,r.y,r.z),a.rotation.x+=t*8,a.userData.led.visible=r.type==="pipe"&&Math.floor(r.t*(1.5+r.t))%2===0,r.type==="molotov")gn.fire.emit(r.x,r.y+0.15,r.z,0,0.5,0,0.2,0.25,0.3,0.8,2,1,0.2)}for(let[r,a]of q.throws)if(!n.throws.includes(r))be.remove(a),q.throws.delete(r);for(let r of n.fires)for(let a=0;a<4;a++){let o=Math.random()*6.28,l=Math.sqrt(Math.random())*r.r;gn.fire.emit(r.x+Math.cos(o)*l,0.2,r.z+Math.sin(o)*l,0,1.5+Math.random()*2,0,0.5+Math.random()*0.4,0.9,1.5,0.7,2.2,0.9,0.2)}for(let r of ie.fires){if(r.light.intensity=r.base*(0.75+Math.random()*0.45),Math.random()<0.7)gn.fire.emit(r.x+(Math.random()-0.5)*1.6,1.3,r.z+(Math.random()-0.5)*3,(Math.random()-0.5)*0.4,2+Math.random()*2,(Math.random()-0.5)*0.4,0.6+Math.random()*0.4,1,1.2,0.7,2.2,0.9,0.25);if(Math.random()<0.15)gn.smoke.emit(r.x,2.5,r.z,0.3,2.5,0.2,4,2,2,0.5,0.12,0.12,0.12)}for(let r of ie.flicker){let a=Math.random()>r.rate*t*8?1:0.05;r.cur=a<1?0.06:Math.min(1,(r.cur??1)+t*6);let o=r.cur*(0.92+Math.random()*0.08);if(r.light.intensity=r.base*o,r.mats)r.mats.forEach((l)=>l.color.copy(r.baseCol).multiplyScalar(Math.max(0.05,o)))}if(ie.pulse)ie.pulse.intensity=22*(0.4+0.6*Math.max(0,Math.sin(e*1.6)));if(ie.radioLed)ie.radioLed.visible=n.finale.started||Math.floor(e*2)%2===0;if(ie.alarm?.on){ie.alarm.t+=t;let r=Math.floor(ie.alarm.t*3)%2===0&&ie.alarm.t<9;ie.alarm.lamps.forEach((a)=>a.material.color.setRGB(r?4:0.2,r?2.4:0.1,0))}if(ie.door&&n.doorOpen&&ie.door.open<1)ie.door.open=Math.min(1,ie.door.open+t*1.5),ie.door.pivot.rotation.y=-ie.door.open*1.7;if(n.finale.boat)ie.boat.g.position.x=n.finale.boatX,ie.boat.g.position.y=Math.sin(e*1.3)*0.1,ie.boat.beacon.visible=Math.floor(e*2)%2===0;Ui.intensity=Math.max(0,Ui.intensity-t*400);for(let r=0;r<2;r++)gn.ash.emit(Te.position.x+(Math.random()-0.5)*14,Te.position.y+(Math.random()-0.3)*4,Te.position.z+(Math.random()-0.5)*14,(Math.random()-0.5)*0.3,-0.05,(Math.random()-0.5)*0.3,6,0.03,0,0.35,0.8,0.78,0.7);mh.update(t);for(let r of Object.values(gn))r.update(t);ie.sky.material.uniforms.uTime.value=e,ie.sky.position.copy(Te.position)}function Of(t){Te.position.set(30+t*0.35%14,1.75+Math.sin(t*0.3)*0.05,114+Math.sin(t*0.1)*1.5),Te.rotation.set(-0.04,-Math.PI/2+0.08+Math.sin(t*0.07)*0.12,Math.sin(t*0.2)*0.01),Te.fov=70,Te.updateProjectionMatrix()}function Bf(t){let e=q.game.player;q.bob+=t*Math.min(1,e.moveSpeed/5.4)*9;let n=Math.min(1,e.moveSpeed/5.4),i=e.eye;Te.position.set(e.x,i+Math.abs(Math.sin(q.bob))*0.04*n,e.z),q.shake=Math.max(0,q.shake-t*2.2);let s=q.shake*q.shake*0.08,r=q.yaw,a=q.pitch,o=0;if(e.pinnedBy){let l=e.pinnedBy;r=Math.atan2(-(l.x-e.x),-(l.z-e.z)),a=-0.3,o=Math.sin(q.game.t*20)*0.08}if(e.incap)o=0.25;if(Te.rotation.set(a+(Math.random()-0.5)*s,r+(Math.random()-0.5)*s,o+(Math.random()-0.5)*s*0.5),Te.fov=75,Te.updateProjectionMatrix(),nn.visible=e.flash&&e.alive,e.onGround&&e.moveSpeed>1.5){if(q.stepT=(q.stepT||0)-t*e.moveSpeed/5.4,q.stepT<=0)q.stepT=0.38,Ct.step(Kn(e.x,e.z))}}var Ef=performance.now();function zf(t){requestAnimationFrame(zf);let e=Math.min(0.05,(t-Ef)/1000);Ef=t,q.menuT+=e;let n=q.game;if(q.state==="playing"||q.state==="over"){if(q.state==="playing"){q.acc+=e;while(q.acc>=jn){q.acc-=jn;let s=[L_(),...q.brains.slice(1).map((r)=>r.think(jn))];if(n.step(jn,s),ni.reload=!1,ni.slot=null,ni.flash=!1,Ff(),q.state!=="playing")break}}fh(e,n.t),Bf(e),Uf(e),Nf();let i=n.player;if(q.hurtFlash=Math.max(0,(q.hurtFlash||0)-e*1.4),Tn.uniforms.uHurt.value=q.hurtFlash,Tn.uniforms.uLow.value=i.up&&i.hp<40?(40-i.hp)/40:i.incaps>=2?0.8:0,Tn.uniforms.uIncap.value=i.incap||i.dead?1:0,Tn.uniforms.uBile.value+=((i.bile>0?1:0)-Tn.uniforms.uBile.value)*Math.min(1,e*2),Ct.setHeart(i.alive&&(i.incap||i.hp<30)?i.incap?1:(30-i.hp)/30*0.8+0.2:0),q.subT>0&&(q.subT-=e)<=0)zt("sub").innerHTML="";if(q.hitT>0)q.hitT-=e,zt("hitmark").style.opacity=q.hitT>0?0.8:0}else if(q.state==="menu"){if(Of(q.menuT),fh(e,q.menuT),Math.random()<e*0.6)Ct.ctx&&Ct.witchSob(92,56,0);Tn.uniforms.uHurt.value=0,Tn.uniforms.uLow.value=0,Tn.uniforms.uIncap.value=0,Tn.uniforms.uBile.value=0,nn.visible=!1}if(Ct.listener(Te),Tn.uniforms.uT.value=q.menuT,Ce.clear(),ei.render(e),(q.state==="playing"||q.state==="paused")&&yi)dh.aspect=Te.aspect,dh.updateProjectionMatrix(),Ce.clearDepth(),Ce.render(ha,dh)}function kf(){if(Ce.setSize(innerWidth,innerHeight),Te.aspect=innerWidth/innerHeight,Te.updateProjectionMatrix(),ei)ei.setPixelRatio(Ce.getPixelRatio()),ei.setSize(innerWidth,innerHeight)}addEventListener("resize",kf);window.__game={G:q,settings:se,start:ca,enterMenu:Bo,camera:Te,sound:Ct,advance(t,e={}){for(let n=0;n<t;n+=jn){let i=[{yaw:q.yaw,pitch:q.pitch,...e},...q.brains.slice(1).map((s)=>s.think(jn))];q.game.step(jn,i),Ff(),fh(jn,q.game.t),Bf(jn),Uf(jn)}Nf()}};N_().catch((t)=>{console.error(t),zt("loadtext").textContent="Error: "+t.message});
