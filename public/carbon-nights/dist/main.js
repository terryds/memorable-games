var Qh="186";var jh=0,il=1,tu=2;var nr=1,eu=2,gs=3,xs=0,je=1,rn=2,gn=0,bi=1,tn=2,sl=3,rl=4,nu=5;var _s=100,iu=101,su=102,ru=103,au=104,ou=200,lu=201,cu=202,hu=203,uu=204,du=205,fu=206,pu=207,mu=208,gu=209,xu=210,_u=211,vu=212,yu=213,Mu=214,Su=0,bu=1,Eu=2,al=3,Tu=4,wu=5,Au=6,Ru=7,Cu=0,Iu=1,Pu=2,Tn=0,ir=1,sr=2,rr=3,Ei=4,ar=5,or=6,lr=7;var vs=301,Ti=302,Sa=303,ba=304,cr=306,ys=1000,Ea=1001,Lu=1002,ui=1003,Nu=1004;var hr=1005;var on=1006,Ta=1007;var wi=1008;var wn=1009,Du=1010,Uu=1011,ur=1012,ol=1013,di=1014,Kn=1015,Be=1016,ll=1017,cl=1018,Ms=1020,Fu=35902,Ou=35899,Bu=1021,zu=1022,Un=1023,Ai=1026,Ri=1027,Hu=1028,hl=1029,Ci=1030,ul=1031;var dl=1033,wa=33776,Aa=33777,Ra=33778,Ca=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,vl=37496,yl=37488,Ml=37489,Ia=37490,Sl=37491,bl=37808,El=37809,Tl=37810,wl=37811,Al=37812,Rl=37813,Cl=37814,Il=37815,Pl=37816,Ll=37817,Nl=37818,Dl=37819,Ul=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,Hl=36283,Gl=36284,Pa=36285,kl=36286;var Vl=0,Gu=1,Ii="",Ss="srgb",Wl="srgb-linear",Xl="linear",_e="srgb";var ku=512,Vu=513,Wu=514,La=515,Xu=516,qu=517,Na=518,Yu=519;var Pi=35048;var ql="300 es",Yl=2000;function If(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function $s(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zu(){let t=$s("canvas");return t.style.display="block",t}var mh={},fs=null;function Js(...t){let e="THREE."+t.shift();if(fs)fs("log",e,...t);else console.log(e,...t)}function $u(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Xt(...t){t=$u(t);let e="THREE."+t.shift();if(fs)fs("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Yt(...t){t=$u(t);let e="THREE."+t.shift();if(fs)fs("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Mi(...t){let e=t.join(" ");if(e in mh)return;mh[e]=!0,Xt(...t)}function Ju(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Ku={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Qn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wo=Math.PI/180,Ks=180/Math.PI;function Zn(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[t&255]+Je[t>>8&255]+Je[t>>16&255]+Je[t>>24&255]+"-"+Je[e&255]+Je[e>>8&255]+"-"+Je[e>>16&15|64]+Je[e>>24&255]+"-"+Je[n&63|128]+Je[n>>8&255]+"-"+Je[n>>16&255]+Je[n>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function se(t,e,n){return Math.max(e,Math.min(n,t))}function Lf(t,e){return(t%e+e)%e}function Ao(t,e,n){return(1-n)*t+n*e}function Dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Me(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class ht{static{ht.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],f=s[r+2],g=s[r+3];if(u!==g||o!==d||l!==h||c!==f){let y=o*d+l*h+c*f+u*g;if(y<0)d=-d,h=-h,f=-f,g=-g,y=-y;let m=1-a;if(y<0.9995){let p=Math.acos(y),b=Math.sin(p);m=Math.sin(m*p)/b,a=Math.sin(a*p)/b,o=o*m+d*a,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a}else{o=o*m+d*a,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a;let p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],f=s[r+3];return t[e]=a*f+c*u+o*h-l*d,t[e+1]=o*f+c*d+l*u-a*h,t[e+2]=l*f+c*h+a*d-o*u,t[e+3]=c*f-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{static{I.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,o=t.w,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,r=e.x,a=e.y,o=e.z;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ro=new I,gh=new ln;class Jt{static{Jt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],f=n[8],g=i[0],y=i[3],m=i[6],p=i[1],b=i[4],w=i[7],_=i[2],E=i[5],A=i[8];return s[0]=r*g+a*p+o*_,s[3]=r*y+a*b+o*E,s[6]=r*m+a*w+o*A,s[1]=l*g+c*p+u*_,s[4]=l*y+c*b+u*E,s[7]=l*m+c*w+u*A,s[2]=d*g+h*p+f*_,s[5]=d*y+h*b+f*E,s[8]=d*m+h*w+f*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,f=e*u+n*d+i*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return t[0]=u*g,t[1]=(i*l-c*n)*g,t[2]=(a*n-i*r)*g,t[3]=d*g,t[4]=(c*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=h*g,t[7]=(n*o-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Co.makeScale(t,e)),this}rotate(t){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Co=new Jt,xh=new Jt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),_h=new Jt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Nf(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:xh,fromXYZ:_h,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:xh,fromXYZ:_h,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var ie=Nf();function $n(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function ds(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Zi;class Zl{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Zi===void 0)Zi=$s("canvas");Zi.width=t.width,Zi.height=t.height;let i=Zi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=$n(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor($n(e[n]/255)*255);else e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Df=0;class dr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Io(i[r].image));else s.push(Io(i[r]))}else s=Io(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Io(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Zl.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Xt("Texture: Unable to serialize Texture."),{}}var Uf=0,Po=new I;class Ye extends Qn{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ye.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Zn(),this.name="",this.source=new dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Po).x}get height(){return this.source.getSize(Po).y}get depth(){return this.source.getSize(Po).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=300;Ye.DEFAULT_ANISOTROPY=1;class be{static{be.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],f=o[9],g=o[2],y=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-g)<0.01&&Math.abs(f-y)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+g)<0.1&&Math.abs(f+y)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,w=(h+1)/2,_=(m+1)/2,E=(c+d)/4,A=(u+g)/4,R=(f+y)/4;if(b>w&&b>_)if(b<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(b),i=E/n,s=A/n;else if(w>_)if(w<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(w),n=E/i,s=R/i;else if(_<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(_),n=A/s,i=R/s;return this.set(n,i,s,e),this}let p=Math.sqrt((y-f)*(y-f)+(u-g)*(u-g)+(d-c)*(d-c));if(Math.abs(p)<0.001)p=1;return this.x=(y-f)/p,this.y=(u-g)/p,this.z=(d-c)/p,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends Qn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ye(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new dr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ie extends $l{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Da extends Ye{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jl extends Ye{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class te{static{te.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,d,h,f,g,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,d,h,f,g,y)}set(t,e,n,i,s,r,a,o,l,c,u,d,h,f,g,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=d,m[3]=h,m[7]=f,m[11]=g,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),s=1/$i.setFromMatrixColumn(t,1).length(),r=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*c,h=r*u,f=a*c,g=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+f*l,e[5]=d-g*l,e[9]=-a*o,e[2]=g-d*l,e[6]=f+h*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,h=o*u,f=l*c,g=l*u;e[0]=d+g*a,e[4]=f*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-f,e[6]=g+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,h=o*u,f=l*c,g=l*u;e[0]=d-g*a,e[4]=-r*u,e[8]=f+h*a,e[1]=h+f*a,e[5]=r*c,e[9]=g-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,h=r*u,f=a*c,g=a*u;e[0]=o*c,e[4]=f*l-h,e[8]=d*l+g,e[1]=o*u,e[5]=g*l+d,e[9]=h*l-f,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,h=r*l,f=a*o,g=a*l;e[0]=o*c,e[4]=g-d*u,e[8]=f*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+f,e[10]=d-g*u}else if(t.order==="XZY"){let d=r*o,h=r*l,f=a*o,g=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=d*u+g,e[5]=r*c,e[9]=h*u-f,e[2]=f*u-h,e[6]=a*c,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Of)}lookAt(t,e,n){let i=this.elements;if(hn.subVectors(t,e),hn.lengthSq()===0)hn.z=1;if(hn.normalize(),ai.crossVectors(n,hn),ai.lengthSq()===0){if(Math.abs(n.z)===1)hn.x+=0.0001;else hn.z+=0.0001;hn.normalize(),ai.crossVectors(n,hn)}return ai.normalize(),Vr.crossVectors(hn,ai),i[0]=ai.x,i[4]=Vr.x,i[8]=hn.x,i[1]=ai.y,i[5]=Vr.y,i[9]=hn.y,i[2]=ai.z,i[6]=Vr.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],f=n[2],g=n[6],y=n[10],m=n[14],p=n[3],b=n[7],w=n[11],_=n[15],E=i[0],A=i[4],R=i[8],v=i[12],T=i[1],G=i[5],D=i[9],U=i[13],et=i[2],L=i[6],V=i[10],tt=i[14],q=i[3],ut=i[7],j=i[11],ot=i[15];return s[0]=r*E+a*T+o*et+l*q,s[4]=r*A+a*G+o*L+l*ut,s[8]=r*R+a*D+o*V+l*j,s[12]=r*v+a*U+o*tt+l*ot,s[1]=c*E+u*T+d*et+h*q,s[5]=c*A+u*G+d*L+h*ut,s[9]=c*R+u*D+d*V+h*j,s[13]=c*v+u*U+d*tt+h*ot,s[2]=f*E+g*T+y*et+m*q,s[6]=f*A+g*G+y*L+m*ut,s[10]=f*R+g*D+y*V+m*j,s[14]=f*v+g*U+y*tt+m*ot,s[3]=p*E+b*T+w*et+_*q,s[7]=p*A+b*G+w*L+_*ut,s[11]=p*R+b*D+w*V+_*j,s[15]=p*v+b*U+w*tt+_*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],d=t[10],h=t[14],f=t[3],g=t[7],y=t[11],m=t[15],p=o*h-l*d,b=a*h-l*u,w=a*d-o*u,_=r*h-l*c,E=r*d-o*c,A=r*u-a*c;return e*(g*p-y*b+m*w)-n*(f*p-y*_+m*E)+i*(f*b-g*_+m*A)-s*(f*w-g*E+y*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],h=t[11],f=t[12],g=t[13],y=t[14],m=t[15],p=e*a-n*r,b=e*o-i*r,w=e*l-s*r,_=n*o-i*a,E=n*l-s*a,A=i*l-s*o,R=c*g-u*f,v=c*y-d*f,T=c*m-h*f,G=u*y-d*g,D=u*m-h*g,U=d*m-h*y,et=p*U-b*D+w*G+_*T-E*v+A*R;if(et===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/et;return t[0]=(a*U-o*D+l*G)*L,t[1]=(i*D-n*U-s*G)*L,t[2]=(g*A-y*E+m*_)*L,t[3]=(d*E-u*A-h*_)*L,t[4]=(o*T-r*U-l*v)*L,t[5]=(e*U-i*T+s*v)*L,t[6]=(y*w-f*A-m*b)*L,t[7]=(c*A-d*w+h*b)*L,t[8]=(r*D-a*T+l*R)*L,t[9]=(n*T-e*D-s*R)*L,t[10]=(f*E-g*w+m*p)*L,t[11]=(u*w-c*E-h*p)*L,t[12]=(a*v-r*G-o*R)*L,t[13]=(e*G-n*v+i*R)*L,t[14]=(g*b-f*_-y*p)*L,t[15]=(c*_-u*b+d*p)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,o=t.z,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,o=e._w,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,f=s*u,g=r*c,y=r*u,m=a*u,p=o*l,b=o*c,w=o*u,_=n.x,E=n.y,A=n.z;return i[0]=(1-(g+m))*_,i[1]=(h+w)*_,i[2]=(f-b)*_,i[3]=0,i[4]=(h-w)*E,i[5]=(1-(d+m))*E,i[6]=(y+p)*E,i[7]=0,i[8]=(f+b)*A,i[9]=(y-p)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=$i.set(i[0],i[1],i[2]).length(),a=$i.set(i[4],i[5],i[6]).length(),o=$i.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Sn.copy(this);let l=1/r,c=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i),f,g;if(o)f=s/(r-s),g=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),h=-(n+i)/(n-i),f,g;if(o)f=1/(r-s),g=r/(r-s);else if(a===2000)f=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var $i=new I,Sn=new te,Ff=new I(0,0,0),Of=new I(1,1,1),ai=new I,Vr=new I,hn=new I,vh=new te,yh=new ln;class Jn{constructor(t=0,e=0,n=0,i=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(se(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-se(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(se(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(se(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-se(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Bf=0,Mh=new I,Ji=new ln,Vn=new te,Wr=new I,Fs=new I,zf=new I,Hf=new ln,Sh=new I(1,0,0),bh=new I(0,1,0),Eh=new I(0,0,1),Th={type:"added"},Gf={type:"removed"},Ki={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Ce extends Qn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();let t=new I,e=new Jn,n=new ln,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Sh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return Mh.copy(t).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Wr.copy(t);else Wr.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Vn.lookAt(Fs,Wr,this.up);else Vn.lookAt(Wr,Fs,this.up);if(this.quaternion.setFromRotationMatrix(Vn),i)Vn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Vn),this.quaternion.premultiply(Ji.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Yt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null;else Yt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gf),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld);return t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),h=r(t.animations),f=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qe extends Ce{constructor(){super();this.isGroup=!0,this.type="Group"}}var kf={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let y=e.getJointPose(g,n),m=this._getHandJoint(l,g);if(y!==null)m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius;m.visible=y!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,f=0.005;if(l.inputState.pinching&&d>h+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=h-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(kf)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function No(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Lf(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=No(r,s,t+0.3333333333333333),this.g=No(r,s,t),this.b=No(r,s,t-0.3333333333333333)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Qu[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Xt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ie.workingToColorSpace(Ke.copy(this),t),Math.round(se(Ke.r*255,0,255))*65536+Math.round(se(Ke.g*255,0,255))*256+Math.round(se(Ke.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ke.copy(this),e);let{r:n,g:i,b:s}=Ke,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t="srgb"){ie.workingToColorSpace(Ke.copy(this),t);let{r:e,g:n,b:i}=Ke;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Xr);let n=Ao(oi.h,Xr.h,e),i=Ao(oi.s,Xr.s,e),s=Ao(oi.l,Xr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ke=new vt;vt.NAMES=Qu;class pr{constructor(t,e=0.00025){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new pr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fa extends Ce{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var bn=new I,Wn=new I,Do=new I,Xn=new I,Qi=new I,ji=new I,wh=new I,Uo=new I,Fo=new I,Oo=new I,Bo=new be,zo=new be,Ho=new be;class dn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),Wn.subVectors(n,e),Do.subVectors(t,e);let r=bn.dot(bn),a=bn.dot(Wn),o=bn.dot(Do),l=Wn.dot(Wn),c=Wn.dot(Do),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,f=(r*c-a*o)*d;return s.set(1-h-f,f,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Xn)===null)return!1;return Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Xn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Xn.x),o.addScaledVector(r,Xn.y),o.addScaledVector(a,Xn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Bo.setScalar(0),zo.setScalar(0),Ho.setScalar(0),Bo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Ho.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Bo,s.x),r.addScaledVector(zo,s.y),r.addScaledVector(Ho,s.z),r}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Wn.subVectors(t,e),bn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Qi.subVectors(i,n),ji.subVectors(s,n),Uo.subVectors(t,n);let o=Qi.dot(Uo),l=ji.dot(Uo);if(o<=0&&l<=0)return e.copy(n);Fo.subVectors(t,i);let c=Qi.dot(Fo),u=ji.dot(Fo);if(c>=0&&u<=c)return e.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Qi,r);Oo.subVectors(t,s);let h=Qi.dot(Oo),f=ji.dot(Oo);if(f>=0&&h<=f)return e.copy(s);let g=h*l-o*f;if(g<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(ji,a);let y=c*f-h*u;if(y<=0&&u-c>=0&&h-f>=0)return wh.subVectors(s,i),a=(u-c)/(u-c+(h-f)),e.copy(i).addScaledVector(wh,a);let m=1/(y+g+d);return r=g*m,a=d*m,e.copy(n).addScaledVector(Qi,r).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,En);else En.fromBufferAttribute(s,r);En.applyMatrix4(t.matrixWorld),this.expandByPoint(En)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();qr.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();qr.copy(n.boundingBox)}qr.applyMatrix4(t.matrixWorld),this.union(qr)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Yr.subVectors(this.max,Os),ts.subVectors(t.a,Os),es.subVectors(t.b,Os),ns.subVectors(t.c,Os),li.subVectors(es,ts),ci.subVectors(ns,es),gi.subVectors(ts,ns);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-gi.z,gi.y,li.z,0,-li.x,ci.z,0,-ci.x,gi.z,0,-gi.x,-li.y,li.x,0,-ci.y,ci.x,0,-gi.y,gi.x,0];if(!Go(e,ts,es,ns,Yr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Go(e,ts,es,ns,Yr))return!1;return Zr.crossVectors(li,ci),e=[Zr.x,Zr.y,Zr.z],Go(e,ts,es,ns,Yr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(En).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var qn=[new I,new I,new I,new I,new I,new I,new I,new I],En=new I,qr=new jn,ts=new I,es=new I,ns=new I,li=new I,ci=new I,gi=new I,Os=new I,Yr=new I,Zr=new I,xi=new I;function Go(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){xi.fromArray(t,r);let o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=n.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Oe=new I,$r=new ht,Vf=0;class xe extends Qn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Dn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Me(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Dn(e,this.array);return e}setX(t,e){if(this.normalized)e=Me(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Dn(e,this.array);return e}setY(t,e){if(this.normalized)e=Me(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Dn(e,this.array);return e}setZ(t,e){if(this.normalized)e=Me(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Dn(e,this.array);return e}setW(t,e){if(this.normalized)e=Me(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Me(e,this.array),n=Me(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Oa extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ba extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Wf=new jn,Bs=new I,ko=new I;class ti{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Wf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ko)),this.expandByPoint(Bs.copy(t.center).sub(ko));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Xf=0,pn=new te,Vo=new Ce,is=new I,un=new jn,zs=new jn,We=new I;class fe extends Qn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((If(t))?Ba:Oa)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new jn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(un.setFromBufferAttribute(s),this.morphTargetsRelative)We.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(We);else this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ti;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(zs.setFromBufferAttribute(a),this.morphTargetsRelative)We.addVectors(un.min,zs.min),un.expandByPoint(We),We.addVectors(un.max,zs.max),un.expandByPoint(We);else un.expandByPoint(zs.min),un.expandByPoint(zs.max)}un.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)We.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(We));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(We.fromBufferAttribute(a,l),o)is.fromBufferAttribute(t,l),We.add(is);i=Math.max(i,n.distanceToSquared(We))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let R=0;R<n.count;R++)a[R]=new I,o[R]=new I;let l=new I,c=new I,u=new I,d=new ht,h=new ht,f=new ht,g=new I,y=new I;function m(R,v,T){l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),c.sub(l),u.sub(l),h.sub(d),f.sub(d);let G=1/(h.x*f.y-f.x*h.y);if(!isFinite(G))return;g.copy(c).multiplyScalar(f.y).addScaledVector(u,-h.y).multiplyScalar(G),y.copy(u).multiplyScalar(h.x).addScaledVector(c,-f.x).multiplyScalar(G),a[R].add(g),a[v].add(g),a[T].add(g),o[R].add(y),o[v].add(y),o[T].add(y)}let p=this.groups;if(p.length===0)p=[{start:0,count:t.count}];for(let R=0,v=p.length;R<v;++R){let T=p[R],G=T.start,D=T.count;for(let U=G,et=G+D;U<et;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new I,w=new I,_=new I,E=new I;function A(R){_.fromBufferAttribute(i,R),E.copy(_);let v=a[R];b.copy(v),b.sub(_.multiplyScalar(_.dot(v))).normalize(),w.crossVectors(E,v);let G=w.dot(o[R])<0?-1:1;r.setXYZW(R,b.x,b.y,b.z,G)}for(let R=0,v=p.length;R<v;++R){let T=p[R],G=T.start,D=T.count;for(let U=G,et=G+D;U<et;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I;if(t)for(let d=0,h=t.count;d<h;d+=3){let f=t.getX(d+0),g=t.getX(d+1),y=t.getX(d+2);i.fromBufferAttribute(e,f),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,f=0;for(let g=0,y=o.length;g<y;g++){if(a.isInterleavedBufferAttribute)h=o[g]*a.data.stride+a.offset;else h=o[g]*c;for(let m=0;m<c;m++)d[f++]=l[h++]}return new xe(d,c,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new fe,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=t(d,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class za{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Zn();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Zn();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}var sn=new I;class ps{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=Dn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Me(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=Me(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=Me(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=Me(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=Me(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=Dn(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=Dn(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=Dn(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=Dn(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=Me(e,this.array),n=Me(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new ps(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var Wo=new I,qf=new I,Yf=new Jt;class mn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wo.subVectors(n,e).cross(qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Wo),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),i=this.coplanarPoint(Wo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Zf=0;class Fn extends Qn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new vt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new mn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new ht().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class mr extends Fn{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var ss,Hs=new I,rs=new I,as=new I,os=new ht,Gs=new ht,ju=new te,Jr=new I,ks=new I,Kr=new I,Ah=new ht,Xo=new ht,Rh=new ht;class Ha extends Ce{constructor(t=new mr){super();if(this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new fe;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new za(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new ps(n,3,0,!1)),ss.setAttribute("uv",new ps(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new ht(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(rs.setFromMatrixScale(this.matrixWorld),ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)rs.multiplyScalar(-as.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Qr(Jr.set(-0.5,-0.5,0),as,r,rs,i,s),Qr(ks.set(0.5,-0.5,0),as,r,rs,i,s),Qr(Kr.set(0.5,0.5,0),as,r,rs,i,s),Ah.set(0,0),Xo.set(1,0),Rh.set(1,1);let a=t.ray.intersectTriangle(Jr,ks,Kr,!1,Hs);if(a===null){if(Qr(ks.set(-0.5,0.5,0),as,r,rs,i,s),Xo.set(0,1),a=t.ray.intersectTriangle(Jr,Kr,ks,!1,Hs),a===null)return}let o=t.ray.origin.distanceTo(Hs);if(o<t.near||o>t.far)return;e.push({distance:o,point:Hs.clone(),uv:dn.getInterpolation(Hs,Jr,ks,Kr,Ah,Xo,Rh,new ht),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Qr(t,e,n,i,s,r){if(os.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)Gs.x=r*os.x-s*os.y,Gs.y=s*os.x+r*os.y;else Gs.copy(os);t.copy(e),t.x+=Gs.x,t.y+=Gs.y,t.applyMatrix4(ju)}var Yn=new I,qo=new I,jr=new I,ta=new I;class gr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){qo.copy(t).add(e).multiplyScalar(0.5),jr.copy(e).sub(t).normalize(),ta.copy(this.origin).sub(qo);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(jr),a=ta.dot(this.direction),o=-ta.dot(jr),l=ta.lengthSq(),c=Math.abs(1-r*r),u,d,h,f;if(c>0)if(u=r*o-a,d=r*a-o,f=s*c,u>=0)if(d>=-f)if(d<=f){let g=1/c;u*=g,d*=g,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-f)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=f)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(qo).addScaledVector(jr,d);return h}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u;else a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,o=a.x,l=a.y,c=a.z,u=t.x-r.x,d=t.y-r.y,h=t.z-r.z,f=e.x-r.x,g=e.y-r.y,y=e.z-r.z,m=n.x-r.x,p=n.y-r.y,b=n.z-r.z,w=Math.abs(o),_=Math.abs(l),E=Math.abs(c),A,R,v,T,G,D,U,et,L,V,tt,q;if(w>=_&&w>=E)if(v=o,D=u,L=f,q=m,o>=0)A=l,R=c,T=d,G=h,U=g,et=y,V=p,tt=b;else A=c,R=l,T=h,G=d,U=y,et=g,V=b,tt=p;else if(_>=E)if(v=l,D=d,L=g,q=p,l>=0)A=c,R=o,T=h,G=u,U=y,et=f,V=b,tt=m;else A=o,R=c,T=u,G=h,U=f,et=y,V=m,tt=b;else if(v=c,D=h,L=y,q=b,c>=0)A=o,R=l,T=u,G=d,U=f,et=g,V=m,tt=p;else A=l,R=o,T=d,G=u,U=g,et=f,V=p,tt=m;if(v===0)return null;let ut=A/v,j=R/v,ot=1/v,lt=T-ut*D,Nt=G-j*D,Ft=U-ut*L,re=et-j*L,Zt=V-ut*q,Q=tt-j*q,gt=Zt*re-Q*Ft,it=lt*Q-Nt*Zt,xt=Ft*Nt-re*lt;if(i){if(gt<0||it<0||xt<0)return null}else if((gt<0||it<0||xt<0)&&(gt>0||it>0||xt>0))return null;let Pt=gt+it+xt;if(Pt===0)return null;let Mt=ot*(gt*D+it*L+xt*q);if(Pt>0?Mt<0:Mt>0)return null;return this.at(Mt/Pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le extends Fn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Ch=new te,_i=new gr,ea=new ti,Ih=new I,na=new I,ia=new I,sa=new I,Yo=new I,ra=new I,Ph=new I,aa=new I;class wt extends Ce{constructor(t=new fe,e=new Le){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){ra.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Yo.fromBufferAttribute(u,t),r)ra.addScaledVector(Yo,c);else ra.addScaledVector(Yo.sub(e),c)}e.add(ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(ea.copy(n.boundingSphere),ea.applyMatrix4(s),_i.copy(t.ray).recast(t.near),ea.containsPoint(_i.origin)===!1){if(_i.intersectSphere(ea,Ih)===null)return;if(_i.origin.distanceToSquared(Ih)>(t.far-t.near)**2)return}if(Ch.copy(s).invert(),_i.copy(t.ray).applyMatrix4(Ch),n.boundingBox!==null){if(_i.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,_i)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){let y=d[f],m=r[y.materialIndex],p=Math.max(y.start,h.start),b=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let w=p,_=b;w<_;w+=3){let E=a.getX(w),A=a.getX(w+1),R=a.getX(w+2);if(i=oa(this,m,t,n,l,c,u,E,A,R),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=y.materialIndex,e.push(i)}}else{let f=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let y=f,m=g;y<m;y+=3){let p=a.getX(y),b=a.getX(y+1),w=a.getX(y+2);if(i=oa(this,r,t,n,l,c,u,p,b,w),i)i.faceIndex=Math.floor(y/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){let y=d[f],m=r[y.materialIndex],p=Math.max(y.start,h.start),b=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let w=p,_=b;w<_;w+=3){let E=w,A=w+1,R=w+2;if(i=oa(this,m,t,n,l,c,u,E,A,R),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=y.materialIndex,e.push(i)}}else{let f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let y=f,m=g;y<m;y+=3){let p=y,b=y+1,w=y+2;if(i=oa(this,r,t,n,l,c,u,p,b,w),i)i.faceIndex=Math.floor(y/3),e.push(i)}}}}function $f(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;aa.copy(o),aa.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(aa);if(c<n.near||c>n.far)return null;return{distance:c,point:aa.clone(),object:t}}function oa(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,na),t.getVertexPosition(l,ia),t.getVertexPosition(c,sa);let u=$f(t,e,n,i,na,ia,sa,Ph);if(u){let d=new I;if(dn.getBarycoord(Ph,na,ia,sa,d),s)u.uv=dn.getInterpolatedAttribute(s,o,l,c,d,new ht);if(r)u.uv1=dn.getInterpolatedAttribute(r,o,l,c,d,new ht);if(a){if(u.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new I,materialIndex:0};dn.getNormal(na,ia,sa,h.normal),u.face=h,u.barycoord=d}return u}class Ga extends Ye{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,d){super(null,r,a,o,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs extends xe{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var ls=new te,Lh=new te,la=[],Nh=new jn,Jf=new te,Vs=new wt,Ws=new ti;class cn extends wt{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jf)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new jn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Nh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Nh)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new ti;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Ws.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ws)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,ls),Lh.multiplyMatrices(n,ls),Vs.matrixWorld=Lh,Vs.raycast(t,la);for(let r=0,a=la.length;r<a;r++){let o=la[r];o.instanceId=s,o.object=this,e.push(o)}la.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Ga(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var vi=new ti,Kf=new ht(0.5,0.5),ca=new I;class xr{constructor(t=new mn,e=new mn,n=new mn,i=new mn,s=new mn,r=new mn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],b=s[13],w=s[14],_=s[15];if(i[0].setComponents(l-r,h-c,m-f,_-p).normalize(),i[1].setComponents(l+r,h+c,m+f,_+p).normalize(),i[2].setComponents(l+a,h+u,m+g,_+b).normalize(),i[3].setComponents(l-a,h-u,m-g,_-b).normalize(),n)i[4].setComponents(o,d,y,w).normalize(),i[5].setComponents(l-o,h-d,m-y,_-w).normalize();else if(i[4].setComponents(l-o,h-d,m-y,_-w).normalize(),e===2000)i[5].setComponents(l+o,h+d,m+y,_+w).normalize();else if(e===2001)i[5].setComponents(o,d,y,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=Kf.distanceTo(t.center);return vi.radius=0.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ca.x=i.normal.x>0?t.max.x:t.min.x,ca.y=i.normal.y>0?t.max.y:t.min.y,ca.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kl extends Fn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var _a=new I,va=new I,Dh=new te,Xs=new gr,ha=new ti,Zo=new I,Uh=new I;class Ql extends Ce{constructor(t=new fe,e=new Kl){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)_a.fromBufferAttribute(e,i-1),va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_a.distanceTo(va);t.setAttribute("lineDistance",new oe(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(ha.copy(n.boundingSphere),ha.applyMatrix4(i),ha.radius+=s,t.ray.intersectsSphere(ha)===!1)return;Dh.copy(i).invert(),Xs.copy(t.ray).applyMatrix4(Dh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=h,y=f-1;g<y;g+=l){let m=c.getX(g),p=c.getX(g+1),b=ua(this,t,Xs,o,m,p,g);if(b)e.push(b)}if(this.isLineLoop){let g=c.getX(f-1),y=c.getX(h),m=ua(this,t,Xs,o,g,y,f-1);if(m)e.push(m)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,y=f-1;g<y;g+=l){let m=ua(this,t,Xs,o,g,g+1,g);if(m)e.push(m)}if(this.isLineLoop){let g=ua(this,t,Xs,o,f-1,h,f-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ua(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(_a.fromBufferAttribute(o,s),va.fromBufferAttribute(o,r),n.distanceSqToSegment(_a,va,Zo,Uh)>i)return;Zo.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Zo);if(c<e.near||c>e.far)return;return{distance:c,point:Uh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var Fh=new I,Oh=new I;class ka extends Ql{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Fh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fh.distanceTo(Oh);t.setAttribute("lineDistance",new oe(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _r extends Fn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Bh=new te,tl=new gr,da=new ti,fa=new I;class bs extends Ce{constructor(t=new fe,e=new _r){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;Bh.copy(i).invert(),tl.copy(t.ray).applyMatrix4(Bh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let f=d,g=h;f<g;f++){let y=l.getX(f);fa.fromBufferAttribute(u,y),zh(fa,y,o,i,t,e,this)}}else{let d=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let f=d,g=h;f<g;f++)fa.fromBufferAttribute(u,f),zh(fa,f,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zh(t,e,n,i,s,r,a){let o=tl.distanceSqToPoint(t);if(o<n){let l=new I;tl.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Va extends Ye{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Es extends Ye{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Li extends Ye{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class jl extends Li{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Wa extends Ye{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $t extends fe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;f("z","y","x",-1,-1,n,e,t,r,s,0),f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,1,t,n,e,i,r,2),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,n,i,s,4),f("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(u,2));function f(g,y,m,p,b,w,_,E,A,R,v){let T=w/A,G=_/R,D=w/2,U=_/2,et=E/2,L=A+1,V=R+1,tt=0,q=0,ut=new I;for(let j=0;j<V;j++){let ot=j*G-U;for(let lt=0;lt<L;lt++){let Nt=lt*T-D;ut[g]=Nt*p,ut[y]=ot*b,ut[m]=et,l.push(ut.x,ut.y,ut.z),ut[g]=0,ut[y]=0,ut[m]=E>0?1:-1,c.push(ut.x,ut.y,ut.z),u.push(lt/A),u.push(1-j/R),tt+=1}}for(let j=0;j<R;j++)for(let ot=0;ot<A;ot++){let lt=d+ot+L*j,Nt=d+ot+L*(j+1),Ft=d+(ot+1)+L*(j+1),re=d+(ot+1)+L*j;o.push(lt,Nt,re),o.push(Nt,Ft,re),q+=6}a.addGroup(h,q,v),h+=q,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xn extends fe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],d=[],h=[],f=0,g=[],y=n/2,m=0;if(p(),r===!1){if(t>0)b(!0);if(e>0)b(!1)}this.setIndex(c),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(h,2));function p(){let w=new I,_=new I,E=0,A=(e-t)/n;for(let R=0;R<=s;R++){let v=[],T=R/s,G=T*(e-t)+t;for(let D=0;D<=i;D++){let U=D/i,et=U*o+a,L=Math.sin(et),V=Math.cos(et);_.x=G*L,_.y=-T*n+y,_.z=G*V,u.push(_.x,_.y,_.z),w.set(L,A,V).normalize(),d.push(w.x,w.y,w.z),h.push(U,1-T),v.push(f++)}g.push(v)}for(let R=0;R<i;R++)for(let v=0;v<s;v++){let T=g[v][R],G=g[v+1][R],D=g[v+1][R+1],U=g[v][R+1];if(t>0||v!==0)c.push(T,G,U),E+=3;if(e>0||v!==s-1)c.push(G,D,U),E+=3}l.addGroup(m,E,0),m+=E}function b(w){let _=f,E=new ht,A=new I,R=0,v=w===!0?t:e,T=w===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,y*T,0),d.push(0,T,0),h.push(0.5,0.5),f++;let G=f;for(let D=0;D<=i;D++){let et=D/i*o+a,L=Math.cos(et),V=Math.sin(et);A.x=v*V,A.y=y*T,A.z=v*L,u.push(A.x,A.y,A.z),d.push(0,T,0),E.x=L*0.5+0.5,E.y=V*0.5*T+0.5,h.push(E.x,E.y),f++}for(let D=0;D<i;D++){let U=_+D,et=G+D;if(w===!0)c.push(et,et+1,U);else c.push(et+1,et,U);R+=3}l.addGroup(m,R,w===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class On extends xn{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new On(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,h=(r-c)/d;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new ht:new I);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],s=[],r=[],a=new I,o=new te;for(let h=0;h<=t;h++){let f=h/t;i[h]=this.getTangentAt(f,new I)}s[0]=new I,r[0]=new I;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(se(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,f))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(se(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let f=1;f<=t;f++)s[f].applyMatrix4(o.makeRotationAxis(i[f],h*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vr extends _n{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new ht){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,h=l-this.aY;o=d*c-h*u+this.aX,l=d*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tc extends vr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Hh=new I,Gh=new I,$o=new ec,Jo=new ec,Ko=new ec;class fi extends _n{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Gh.subVectors(i[0],i[1]).add(i[0]),l=Gh;let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Hh.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Hh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(d),h),y=Math.pow(d.distanceToSquared(c),h);if(g<0.0001)g=1;if(f<0.0001)f=g;if(y<0.0001)y=g;$o.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,f,g,y),Jo.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,f,g,y),Ko.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,f,g,y)}else if(this.curveType==="catmullrom")$o.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Jo.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),Ko.initCatmullRom(l.z,u.z,d.z,c.z,this.tension);return n.set($o.calc(o),Jo.calc(o),Ko.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kh(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Qf(t,e){let n=1-t;return n*n*e}function jf(t,e){return 2*(1-t)*t*e}function tp(t,e){return t*t*e}function Ys(t,e,n,i){return Qf(t,e)+jf(t,n)+tp(t,i)}function ep(t,e){let n=1-t;return n*n*n*e}function np(t,e){let n=1-t;return 3*n*n*t*e}function ip(t,e){return 3*(1-t)*t*t*e}function sp(t,e){return t*t*t*e}function Zs(t,e,n,i,s){return ep(t,e)+np(t,n)+ip(t,i)+sp(t,s)}class Xa extends _n{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Zs(t,i.x,s.x,r.x,a.x),Zs(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nc extends _n{constructor(t=new I,e=new I,n=new I,i=new I){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Zs(t,i.x,s.x,r.x,a.x),Zs(t,i.y,s.y,r.y,a.y),Zs(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qa extends _n{constructor(t=new ht,e=new ht){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ic extends _n{constructor(t=new I,e=new I){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ya extends _n{constructor(t=new ht,e=new ht,n=new ht){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Ys(t,i.x,s.x,r.x),Ys(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Za extends _n{constructor(t=new I,e=new I,n=new I){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Ys(t,i.x,s.x,r.x),Ys(t,i.y,s.y,r.y),Ys(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $a extends _n{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(kh(a,o.x,l.x,c.x,u.x),kh(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var ya=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:fi,CubicBezierCurve:Xa,CubicBezierCurve3:nc,EllipseCurve:vr,LineCurve:qa,LineCurve3:ic,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:Za,SplineCurve:$a});class sc extends _n{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ya[i.type]().fromJSON(i))}return this}}class Ma extends sc{constructor(t){super();if(this.type="Path",this.currentPoint=new ht,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qa(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Ya(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Xa(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new vr(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yr extends Ma{constructor(t){super(t);this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ma().fromJSON(i))}return this}}function rp(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=td(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=hp(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let u=o,d=l;for(let h=n;h<s;h+=n){let f=t[h],g=t[h+1];if(f<o)o=f;if(g<l)l=g;if(f>u)u=f;if(g>d)d=g}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return js(r,a,n,o,l,c,0),a}function td(t,e,n,i,s){let r;if(s===Mp(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Vh(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Vh(a/i|0,t[a],t[a+1],r);if(r&&ms(r,r.next))er(r),r=r.next;return r}function Si(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(ms(n,n.next)||Re(n.prev,n,n.next)===0)){if(er(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function js(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)mp(t,i,s,r);let o=t;while(t.prev!==t.next){let{prev:l,next:c}=t;if(r?op(t,i,s,r):ap(t)){e.push(l.i,t.i,c.i),er(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)js(Si(t),e,n,i,s,r,1);else if(a===1)t=lp(Si(t),e),js(t,e,n,i,s,r,2);else if(a===2)cp(t,e,n,i,s,r);break}}}function ap(t){let e=t.prev,n=t,i=t.next;if(Re(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;while(g!==e){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&qs(s,o,r,l,a,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function op(t,e,n,i){let s=t.prev,r=t,a=t.next;if(Re(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),y=Math.max(o,l,c),m=Math.max(u,d,h),p=el(f,g,e,n,i),b=el(y,m,e,n,i),w=t.prevZ,_=t.nextZ;while(w&&w.z>=p&&_&&_.z<=b){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&qs(o,u,l,d,c,h,w.x,w.y)&&Re(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&qs(o,u,l,d,c,h,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}while(w&&w.z>=p){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&qs(o,u,l,d,c,h,w.x,w.y)&&Re(w.prev,w,w.next)>=0)return!1;w=w.prevZ}while(_&&_.z<=b){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&qs(o,u,l,d,c,h,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function lp(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!ms(i,s)&&nd(i,n,n.next,s)&&tr(i,s)&&tr(s,i))e.push(i.i,n.i,s.i),er(n),er(n.next),n=t=s;n=n.next}while(n!==t);return Si(n)}function cp(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&_p(a,o)){let l=id(a,o);a=Si(a,a.next),l=Si(l,l.next),js(a,e,n,i,s,r,0),js(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function hp(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=td(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(xp(c))}s.sort(up);for(let r=0;r<s.length;r++)n=dp(s[r],n);return n}function up(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function dp(t,e){let n=fp(t,e);if(!n)return e;let i=id(n,t);return Si(i,i.next),Si(n,n.next)}function fp(t,e){let n=e,i=t.x,s=t.y,r=-1/0,a;if(ms(t,n))return n;do{if(ms(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&ed(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(tr(n,t)&&(d<u||d===u&&(n.x>a.x||n.x===a.x&&pp(a,n))))a=n,u=d}n=n.next}while(n!==o);return a}function pp(t,e){return Re(t.prev,t,e.prev)<0&&Re(e.next,t,t.next)<0}function mp(t,e,n,i){let s=t;do{if(s.z===0)s.z=el(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,gp(s)}function gp(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function el(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function xp(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function ed(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function qs(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&ed(t,e,n,i,s,r,a,o)}function _p(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!vp(t,e)&&(tr(t,e)&&tr(e,t)&&yp(t,e)&&(Re(t.prev,t,e.prev)||Re(t,e.prev,e))||ms(t,e)&&Re(t.prev,t,t.next)>0&&Re(e.prev,e,e.next)>0)}function Re(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ms(t,e){return t.x===e.x&&t.y===e.y}function nd(t,e,n,i){let s=ma(Re(t,e,n)),r=ma(Re(t,e,i)),a=ma(Re(n,i,t)),o=ma(Re(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&pa(t,n,e))return!0;if(r===0&&pa(t,i,e))return!0;if(a===0&&pa(n,t,i))return!0;if(o===0&&pa(n,e,i))return!0;return!1}function pa(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ma(t){return t>0?1:t<0?-1:0}function vp(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&nd(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function tr(t,e){return Re(t.prev,t,t.next)<0?Re(t,e,t.next)>=0&&Re(t,t.prev,e)>=0:Re(t,e,t.prev)<0||Re(t,t.next,e)<0}function yp(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function id(t,e){let n=nl(t.i,t.x,t.y),i=nl(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Vh(t,e,n,i){let s=nl(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function er(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function nl(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mp(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class sd{static triangulate(t,e,n=2){return rp(t,e,n)}}class yi{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return yi.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Wh(t),Xh(n,t);let r=t.length;e.forEach(Wh);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,Xh(n,e[o]);let a=sd.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function Wh(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Xh(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Mr extends fe{constructor(t=new yr([new ht(0.5,0.5),new ht(-0.5,0.5),new ht(-0.5,-0.5),new ht(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new oe(i,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:0.2,f=e.bevelSize!==void 0?e.bevelSize:h-0.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:Sp,b,w=!1,_,E,A,R;if(m){b=m.getSpacedPoints(c),w=!0,d=!1;let N=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(c,N),E=new I,A=new I,R=new I}if(!d)y=0,h=0,f=0,g=0;let v=a.extractPoints(l),T=v.shape,G=v.holes;if(!yi.isClockWise(T)){T=T.reverse();for(let N=0,H=G.length;N<H;N++){let Y=G[N];if(yi.isClockWise(Y))G[N]=Y.reverse()}}function U(N){let k=N[0];for(let st=1;st<=N.length;st++){let ft=st%N.length,pt=N[ft],yt=pt.x-k.x,ct=pt.y-k.y,C=yt*yt+ct*ct,Rt=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(k.x),Math.abs(k.y)),kt=0.000000000000000000010000000000000001*Rt*Rt;if(C<=kt){N.splice(ft,1),st--;continue}k=pt}}U(T),G.forEach(U);let et=G.length,L=T;for(let N=0;N<et;N++){let H=G[N];T=T.concat(H)}function V(N,H,Y){if(!H)Yt("ExtrudeGeometry: vec does not exist");return N.clone().addScaledVector(H,Y)}let tt=T.length;function q(N,H,Y){let k,st,ft,pt=N.x-H.x,yt=N.y-H.y,ct=Y.x-N.x,C=Y.y-N.y,Rt=pt*pt+yt*yt,kt=pt*C-yt*ct;if(Math.abs(kt)>Number.EPSILON){let Bt=Math.sqrt(Rt),S=Math.sqrt(ct*ct+C*C),x=H.x-yt/Bt,P=H.y+pt/Bt,B=Y.x-C/S,nt=Y.y+ct/S,K=((B-x)*C-(nt-P)*ct)/(pt*C-yt*ct);k=x+pt*K-N.x,st=P+yt*K-N.y;let mt=k*k+st*st;if(mt<=2)return new ht(k,st);else ft=Math.sqrt(mt/2)}else{let Bt=!1;if(pt>Number.EPSILON){if(ct>Number.EPSILON)Bt=!0}else if(pt<-Number.EPSILON){if(ct<-Number.EPSILON)Bt=!0}else if(Math.sign(yt)===Math.sign(C))Bt=!0;if(Bt)k=-yt,st=pt,ft=Math.sqrt(Rt);else k=pt,st=yt,ft=Math.sqrt(Rt/2)}return new ht(k/ft,st/ft)}let ut=[];for(let N=0,H=L.length,Y=H-1,k=N+1;N<H;N++,Y++,k++){if(Y===H)Y=0;if(k===H)k=0;ut[N]=q(L[N],L[Y],L[k])}let j=[],ot,lt=ut.concat();for(let N=0,H=et;N<H;N++){let Y=G[N];ot=[];for(let k=0,st=Y.length,ft=st-1,pt=k+1;k<st;k++,ft++,pt++){if(ft===st)ft=0;if(pt===st)pt=0;ot[k]=q(Y[k],Y[ft],Y[pt])}j.push(ot),lt=lt.concat(ot)}let Nt;if(y===0)Nt=yi.triangulateShape(L,G);else{let N=[],H=[];for(let Y=0;Y<y;Y++){let k=Y/y,st=h*Math.cos(k*Math.PI/2),ft=f*Math.sin(k*Math.PI/2)+g;for(let pt=0,yt=L.length;pt<yt;pt++){let ct=V(L[pt],ut[pt],ft);if(it(ct.x,ct.y,-st),k===0)N.push(ct)}for(let pt=0,yt=et;pt<yt;pt++){let ct=G[pt];ot=j[pt];let C=[];for(let Rt=0,kt=ct.length;Rt<kt;Rt++){let Bt=V(ct[Rt],ot[Rt],ft);if(it(Bt.x,Bt.y,-st),k===0)C.push(Bt)}if(k===0)H.push(C)}}Nt=yi.triangulateShape(N,H)}let Ft=Nt.length,re=f+g;for(let N=0;N<tt;N++){let H=d?V(T[N],lt[N],re):T[N];if(!w)it(H.x,H.y,0);else A.copy(_.normals[0]).multiplyScalar(H.x),E.copy(_.binormals[0]).multiplyScalar(H.y),R.copy(b[0]).add(A).add(E),it(R.x,R.y,R.z)}for(let N=1;N<=c;N++)for(let H=0;H<tt;H++){let Y=d?V(T[H],lt[H],re):T[H];if(!w)it(Y.x,Y.y,u/c*N);else A.copy(_.normals[N]).multiplyScalar(Y.x),E.copy(_.binormals[N]).multiplyScalar(Y.y),R.copy(b[N]).add(A).add(E),it(R.x,R.y,R.z)}for(let N=y-1;N>=0;N--){let H=N/y,Y=h*Math.cos(H*Math.PI/2),k=f*Math.sin(H*Math.PI/2)+g;for(let st=0,ft=L.length;st<ft;st++){let pt=V(L[st],ut[st],k);it(pt.x,pt.y,u+Y)}for(let st=0,ft=G.length;st<ft;st++){let pt=G[st];ot=j[st];for(let yt=0,ct=pt.length;yt<ct;yt++){let C=V(pt[yt],ot[yt],k);if(!w)it(C.x,C.y,u+Y);else it(C.x,C.y+b[c-1].y,b[c-1].x+Y)}}}Zt(),Q();function Zt(){let N=i.length/3;if(d){let H=0,Y=tt*H;for(let k=0;k<Ft;k++){let st=Nt[k];xt(st[2]+Y,st[1]+Y,st[0]+Y)}H=c+y*2,Y=tt*H;for(let k=0;k<Ft;k++){let st=Nt[k];xt(st[0]+Y,st[1]+Y,st[2]+Y)}}else{for(let H=0;H<Ft;H++){let Y=Nt[H];xt(Y[2],Y[1],Y[0])}for(let H=0;H<Ft;H++){let Y=Nt[H];xt(Y[0]+tt*c,Y[1]+tt*c,Y[2]+tt*c)}}n.addGroup(N,i.length/3-N,0)}function Q(){let N=i.length/3,H=0;gt(L,H),H+=L.length;for(let Y=0,k=G.length;Y<k;Y++){let st=G[Y];gt(st,H),H+=st.length}n.addGroup(N,i.length/3-N,1)}function gt(N,H){let Y=N.length;while(--Y>=0){let k=Y,st=Y-1;if(st<0)st=N.length-1;for(let ft=0,pt=c+y*2;ft<pt;ft++){let yt=tt*ft,ct=tt*(ft+1),C=H+k+yt,Rt=H+st+yt,kt=H+st+ct,Bt=H+k+ct;Pt(C,Rt,kt,Bt)}}}function it(N,H,Y){o.push(N),o.push(H),o.push(Y)}function xt(N,H,Y){Mt(N),Mt(H),Mt(Y);let k=i.length/3,st=p.generateTopUV(n,i,k-3,k-2,k-1);jt(st[0]),jt(st[1]),jt(st[2])}function Pt(N,H,Y,k){Mt(N),Mt(H),Mt(k),Mt(H),Mt(Y),Mt(k);let st=i.length/3,ft=p.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);jt(ft[0]),jt(ft[1]),jt(ft[3]),jt(ft[1]),jt(ft[2]),jt(ft[3])}function Mt(N){i.push(o[N*3+0]),i.push(o[N*3+1]),i.push(o[N*3+2])}function jt(N){s.push(N.x),s.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bp(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new ya[i.type]().fromJSON(i);return new Mr(n,t.options)}}var Sp={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ht(r,a),new ht(o,l),new ht(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new ht(a,1-l),new ht(c,1-d),new ht(h,1-g),new ht(y,1-p)];else return[new ht(o,1-l),new ht(u,1-d),new ht(f,1-g),new ht(m,1-p)]}};function bp(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class Ze extends fe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,d=e/o,h=[],f=[],g=[],y=[];for(let m=0;m<c;m++){let p=m*d-r;for(let b=0;b<l;b++){let w=b*u-s;f.push(w,-p,0),g.push(0,0,1),y.push(b/a),y.push(1-m/o)}}for(let m=0;m<o;m++)for(let p=0;p<a;p++){let b=p+l*m,w=p+l*(m+1),_=p+1+l*(m+1),E=p+1+l*m;h.push(b,w,E),h.push(w,_,E)}this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(g,3)),this.setAttribute("uv",new oe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ni extends fe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new I,d=new I,h=[],f=[],g=[],y=[];for(let m=0;m<=n;m++){let p=[],b=m/n,w=r+b*a,_=t*Math.cos(w),E=Math.sqrt(t*t-_*_),A=0;if(m===0&&r===0)A=0.5/e;else if(m===n&&o===Math.PI)A=-0.5/e;for(let R=0;R<=e;R++){let v=R/e,T=i+v*s;u.x=-E*Math.cos(T),u.y=_,u.z=E*Math.sin(T),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),y.push(v+A,1-b),p.push(l++)}c.push(p)}for(let m=0;m<n;m++)for(let p=0;p<e;p++){let b=c[m][p+1],w=c[m][p],_=c[m+1][p],E=c[m+1][p+1];if(m!==0||r>0)h.push(b,w,E);if(m!==n-1||o<Math.PI)h.push(w,_,E)}this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(g,3)),this.setAttribute("uv",new oe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ts extends fe{constructor(t=new Za(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new I,o=new I,l=new ht,c=new I,u=[],d=[],h=[],f=[];g(),this.setIndex(f),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(h,2));function g(){for(let b=0;b<e;b++)y(b);y(s===!1?e:0),p(),m()}function y(b){c=t.getPointAt(b/e,c);let w=r.normals[b],_=r.binormals[b];for(let E=0;E<=i;E++){let A=E/i*Math.PI*2,R=Math.sin(A),v=-Math.cos(A);o.x=v*w.x+R*_.x,o.y=v*w.y+R*_.y,o.z=v*w.z+R*_.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,u.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=e;b++)for(let w=1;w<=i;w++){let _=(i+1)*(b-1)+(w-1),E=(i+1)*b+(w-1),A=(i+1)*b+w,R=(i+1)*(b-1)+w;f.push(_,E,R),f.push(E,A,R)}}function p(){for(let b=0;b<=e;b++)for(let w=0;w<=i;w++)l.x=b/e,l.y=w/i,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ts(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Di(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(qh(s))if(s.isRenderTargetTexture)Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function en(t){let e={};for(let n=0;n<t.length;n++){let i=Di(t[n]);for(let s in i)e[s]=i[s]}return e}function qh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ep(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rc(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return ie.workingColorSpace}var ei={clone:Di,merge:en},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pe extends Fn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new vt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new te().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Sr extends pe{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class we extends Fn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ui extends we{constructor(t){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){if(this._anisotropy>0!==t>0)this.version++;this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){if(this._clearcoat>0!==t>0)this.version++;this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){if(this._iridescence>0!==t>0)this.version++;this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){if(this._dispersion>0!==t>0)this.version++;this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){if(this._retroreflectivity>0!==t>0)this.version++;this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){if(this._sheen>0!==t>0)this.version++;this._sheen=t}get transmission(){return this._transmission}set transmission(t){if(this._transmission>0!==t>0)this.version++;this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ac extends Fn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oc extends Fn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function cs(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Qo(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class Fi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class lc extends Fi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-e)/(i-e),g=f*f,y=g*f,m=-d*y+2*d*g-d*f,p=(1+d)*y+(-1.5-2*d)*g+(-0.5+d)*f+1,b=(-1-h)*y+(1.5+h)*g+0.5*f,w=h*y-h*g;for(let _=0;_!==a;++_)s[_]=m*r[c+_]+p*r[l+_]+b*r[o+_]+w*r[u+_];return s}}class cc extends Fi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class hc extends Fi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class uc extends Fi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let f=(n-e)/(i-e),g=1-f;for(let y=0;y!==a;++y)s[y]=r[l+y]*g+r[o+y]*f;return s}let d=a*2,h=t-1;for(let f=0;f!==a;++f){let g=r[l+f],y=r[o+f],m=h*d+f*2,p=u[m],b=u[m+1],w=t*d+f*2,_=c[w],E=c[w+1],A=Rp(n,e,p,_,i);s[f]=rd(A,g,b,E,y)}return s}}function rd(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Ap(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Rp(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=rd(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Ap(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class vn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Qo(t.settings))n.settings={inTangents:cs(t.settings.inTangents,Array),outTangents:cs(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uc(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Qo(this.settings))Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Yt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Yt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Yt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Yt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Pf(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Yt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let f=0;f!==n;++f){let g=e[u+f];if(g!==e[d+f]||g!==e[h+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)e[d+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Qo(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Yh(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=2301;class Oi extends vn{constructor(t,e,n){super(t,e,n)}}Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=2300;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class dc extends vn{constructor(t,e,n,i){super(t,e,n,i)}}dc.prototype.ValueTypeName="color";class fc extends vn{constructor(t,e,n,i){super(t,e,n,i)}}fc.prototype.ValueTypeName="number";class pc extends Fi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)ln.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Ja extends vn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}}Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends vn{constructor(t,e,n){super(t,e,n)}}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=2300;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class mc extends vn{constructor(t,e,n,i){super(t,e,n,i)}}mc.prototype.ValueTypeName="vector";class gc{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],f=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var ad=new gc;class xc{constructor(t){if(this.manager=t!==void 0?t:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xc.DEFAULT_MATERIAL_NAME="__DEFAULT";class br extends Ce{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ka extends br{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var jo=new te,Zh=new I,$h=new I;class Qa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jo,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ga=new I,xa=new ln,Nn=new I;class ja extends Ce{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ga,xa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ga,xa,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ga,xa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ga,xa,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var hi=new I,Jh=new ht,Kh=new ht;class Xe extends ja{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(wo*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Kh),e.subVectors(Kh,Jh)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class od extends Qa{constructor(){super(new Xe(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;if(n!==e.fov||i!==e.aspect||s!==e.far)e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix();super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class to extends br{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new od}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);if(e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture)e.object.map=this.map.toJSON(t).uuid;return e.object.shadow=this.shadow.toJSON(),e}}class zi extends ja{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class ld extends Qa{constructor(){super(new zi(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class eo extends br{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new ld}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var hs=-90,us=1;class _c extends Ce{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xe(hs,us,t,e);i.layers=this.layers,this.add(i);let s=new Xe(hs,us,t,e);s.layers=this.layers,this.add(s);let r=new Xe(hs,us,t,e);r.layers=this.layers,this.add(r);let a=new Xe(hs,us,t,e);a.layers=this.layers,this.add(a);let o=new Xe(hs,us,t,e);o.layers=this.layers,this.add(o);let l=new Xe(hs,us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;if(t.isWebGLRenderer===!0)y=t.state.buffers.depth.getReversed();else y=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),y&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class vc extends Xe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class no{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=Cp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Cp(){if(this._document.hidden===!1)this.reset()}var yc="\\[\\]\\.:\\/",Ip=new RegExp("["+yc+"]","g"),Mc="[^"+yc+"]",Pp="[^"+yc.replace("\\.","")+"]",Lp=/((?:WC+[\/:])*)/.source.replace("WC",Mc),Np=/(WCOD+)?/.source.replace("WCOD",Pp),Dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),Fp=new RegExp("^"+Lp+Np+Dp+Up+"$"),Op=["material","materials","bones","map"];class cd{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ge{constructor(t,e,n){this.path=e,this.parsedPath=n||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ge(t,e,n);else return new ge.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ip,"")}static parseTrackName(t){let e=Fp.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Op.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(!t)t=ge.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=cd;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);class Sc{static{Sc.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function bc(t,e,n,i){let s=Bp(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Xt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Pd(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function kp(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=t.HALF_FLOAT;else f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];if(y.start<=g.start+g.count+1)g.count=Math.max(g.count,y.start+y.count-g.start);else++h,d[h]=y}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:Zp,aomap_fragment:$p,aomap_pars_fragment:Jp,batching_pars_vertex:Kp,batching_vertex:Qp,begin_vertex:jp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:_m,colorspace_fragment:vm,colorspace_pars_fragment:ym,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:bm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:Tm,fog_vertex:wm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Dm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:km,lights_fragment_maps:Vm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:$m,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:x0,packing:_0,premultiplied_alpha_fragment:v0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:w0,shadowmap_vertex:A0,shadowmask_pars_fragment:R0,skinbase_vertex:C0,skinning_pars_vertex:I0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:N0,specularmap_pars_fragment:D0,tonemapping_fragment:U0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:k0,background_vert:V0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:$0,depth_frag:J0,distance_vert:K0,distance_frag:Q0,equirect_vert:j0,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:ag,meshmatcap_vert:og,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:xg,points_frag:_g,shadow_vert:vg,shadow_frag:yg,sprite_vert:Mg,sprite_frag:Sg},At={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ht(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},zn={basic:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:en([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:en([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new vt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:en([At.points,At.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:en([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:en([At.common,At.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:en([At.sprite,At.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:en([At.common,At.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:en([At.lights,At.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var io={r:0,b:0,g:0},bg=new te,Ld=new Jt;Ld.set(-1,0,0,0,1,0,0,0,1);function Eg(t,e,n,i,s,r){let a=new vt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let _=b.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(b){let w=!1,_=f(b);if(_===null)m(a,o);else if(_&&_.isColor)m(_,1),w=!0;let E=t.xr.getEnvironmentBlendMode();if(E==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(E==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||w)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function y(b,w){let _=f(w);if(_&&(_.isCubeTexture||_.mapping===cr)){if(c===void 0)c=new wt(new $t(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:Di(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Ld);if(c.material.toneMapped=ie.getTransfer(_.colorSpace)!==_e,u!==_||d!==_.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=_,d=_.version,h=t.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}else if(_&&_.isTexture){if(l===void 0)l=new wt(new Ze(2,2),new pe({name:"BackgroundMaterial",uniforms:Di(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0)_.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(_.matrix),u!==_||d!==_.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=_,d=_.version,h=t.toneMapping;l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)}}function m(b,w){b.getRGB(io,rc(t)),n.buffers.color.setClear(io.r,io.g,io.b,w,r)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Tg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,U,et,L,V){let tt=!1,q=d(D,L,et,U);if(r!==q)r=q,c(r.object);if(tt=f(D,L,et,V),tt)g(D,L,et,V);if(V!==null)e.update(V,t.ELEMENT_ARRAY_BUFFER);if(tt||a){if(a=!1,_(D,U,et,L),V!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer)}}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,U,et,L){let V=L.wireframe===!0,tt=i[U.id];if(tt===void 0)tt={},i[U.id]=tt;let q=D.isInstancedMesh===!0?D.id:0,ut=tt[q];if(ut===void 0)ut={},tt[q]=ut;let j=ut[et.id];if(j===void 0)j={},ut[et.id]=j;let ot=j[V];if(ot===void 0)ot=h(l()),j[V]=ot;return ot}function h(D){let U=[],et=[],L=[];for(let V=0;V<n;V++)U[V]=0,et[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:et,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,U,et,L){let V=r.attributes,tt=U.attributes,q=0,ut=et.getAttributes();for(let j in ut)if(ut[j].location>=0){let lt=V[j],Nt=tt[j];if(Nt===void 0){if(j==="instanceMatrix"&&D.instanceMatrix)Nt=D.instanceMatrix;if(j==="instanceColor"&&D.instanceColor)Nt=D.instanceColor}if(lt===void 0)return!0;if(lt.attribute!==Nt)return!0;if(Nt&&lt.data!==Nt.data)return!0;q++}if(r.attributesNum!==q)return!0;if(r.index!==L)return!0;return!1}function g(D,U,et,L){let V={},tt=U.attributes,q=0,ut=et.getAttributes();for(let j in ut)if(ut[j].location>=0){let lt=tt[j];if(lt===void 0){if(j==="instanceMatrix"&&D.instanceMatrix)lt=D.instanceMatrix;if(j==="instanceColor"&&D.instanceColor)lt=D.instanceColor}let Nt={};if(Nt.attribute=lt,lt&&lt.data)Nt.data=lt.data;V[j]=Nt,q++}r.attributes=V,r.attributesNum=q,r.index=L}function y(){let D=r.newAttributes;for(let U=0,et=D.length;U<et;U++)D[U]=0}function m(D){p(D,0)}function p(D,U){let{newAttributes:et,enabledAttributes:L,attributeDivisors:V}=r;if(et[D]=1,L[D]===0)t.enableVertexAttribArray(D),L[D]=1;if(V[D]!==U)t.vertexAttribDivisor(D,U),V[D]=U}function b(){let{newAttributes:D,enabledAttributes:U}=r;for(let et=0,L=U.length;et<L;et++)if(U[et]!==D[et])t.disableVertexAttribArray(et),U[et]=0}function w(D,U,et,L,V,tt,q){if(q===!0)t.vertexAttribIPointer(D,U,et,V,tt);else t.vertexAttribPointer(D,U,et,L,V,tt)}function _(D,U,et,L){y();let V=L.attributes,tt=et.getAttributes(),q=U.defaultAttributeValues;for(let ut in tt){let j=tt[ut];if(j.location>=0){let ot=V[ut];if(ot===void 0){if(ut==="instanceMatrix"&&D.instanceMatrix)ot=D.instanceMatrix;if(ut==="instanceColor"&&D.instanceColor)ot=D.instanceColor}if(ot!==void 0){let{normalized:lt,itemSize:Nt}=ot,Ft=e.get(ot);if(Ft===void 0)continue;let{buffer:re,type:Zt,bytesPerElement:Q}=Ft,gt=Zt===t.INT||Zt===t.UNSIGNED_INT||ot.gpuType===ol;if(ot.isInterleavedBufferAttribute){let it=ot.data,xt=it.stride,Pt=ot.offset;if(it.isInstancedInterleavedBuffer){for(let Mt=0;Mt<j.locationSize;Mt++)p(j.location+Mt,it.meshPerAttribute);if(D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=it.meshPerAttribute*it.count}else for(let Mt=0;Mt<j.locationSize;Mt++)m(j.location+Mt);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Mt=0;Mt<j.locationSize;Mt++)w(j.location+Mt,Nt/j.locationSize,Zt,lt,xt*Q,(Pt+Nt/j.locationSize*Mt)*Q,gt)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<j.locationSize;it++)p(j.location+it,ot.meshPerAttribute);if(D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=ot.meshPerAttribute*ot.count}else for(let it=0;it<j.locationSize;it++)m(j.location+it);t.bindBuffer(t.ARRAY_BUFFER,re);for(let it=0;it<j.locationSize;it++)w(j.location+it,Nt/j.locationSize,Zt,lt,Nt*Q,Nt/j.locationSize*it*Q,gt)}}else if(q!==void 0){let lt=q[ut];if(lt!==void 0)switch(lt.length){case 2:t.vertexAttrib2fv(j.location,lt);break;case 3:t.vertexAttrib3fv(j.location,lt);break;case 4:t.vertexAttrib4fv(j.location,lt);break;default:t.vertexAttrib1fv(j.location,lt)}}}}b()}function E(){T();for(let D in i){let U=i[D];for(let et in U){let L=U[et];for(let V in L){let tt=L[V];for(let q in tt)u(tt[q].object),delete tt[q];delete L[V]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let U=i[D.id];for(let et in U){let L=U[et];for(let V in L){let tt=L[V];for(let q in tt)u(tt[q].object),delete tt[q];delete L[V]}}delete i[D.id]}function R(D){for(let U in i){let et=i[U];for(let L in et){let V=et[L];if(V[D.id]===void 0)continue;let tt=V[D.id];for(let q in tt)u(tt[q].object),delete tt[q];delete V[D.id]}}}function v(D){for(let U in i){let et=i[U],L=D.isInstancedMesh===!0?D.id:0,V=et[L];if(V===void 0)continue;for(let tt in V){let q=V[tt];for(let ut in q)u(q[ut].object),delete q[ut];delete V[tt]}if(delete et[L],Object.keys(et).length===0)delete i[U]}}function T(){if(G(),a=!0,r===s)return;r=s,c(r.object)}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:G,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function wg(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ag(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){if(R!==Un&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(R){let v=R===Be&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(R!==wn&&R!==Kn&&!v&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:A}}function Rg(t){let e=this,n=null,i=0,s=!1,r=!1,a=new mn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let{clippingPlanes:g,clipIntersection:y,clipShadows:m}=d,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)if(r)u(null);else c();else{let b=r?0:i,w=b*4,_=p.clippingState||null;l.value=_,_=u(g,h,w,f);for(let E=0;E!==w;++E)_[E]=n[E];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=h.matrixWorldInverse;if(o.getNormalMatrix(b),m===null||m.length<p)m=new Float32Array(p);for(let w=0,_=f;w!==y;++w,_+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var As=4,Cg=6,Ig=20,Pg=256,Er=new zi,hd=new vt,Ec=null,Tc=0,wc=0,Ac=!1,Lg=new I,Hi=new I;class Rr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Lg}=s;Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,Tc,wc),this._renderer.xr.enabled=Ac,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===vs||t.mapping===Ti)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Be,format:Un,colorSpace:Wl,depthBuffer:!1},i=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ud(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ng(s)),this._blurMaterial=Ug(s,t,e),this._ggxMaterial=Dg(s,t,e)}return i}_compileMaterial(t){let e=new wt(new fe,t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,n,i,s){let o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;if(u.getClearColor(hd),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new wt(new $t,new Le({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,y=g.material,m=!1,p=t.background;if(p){if(p.isColor)y.color.copy(p),t.background=null,m=!0}else y.color.copy(hd),m=!0;for(let b=0;b<6;b++){let w=b%3;if(w===0)o.up.set(0,l[b],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[b],s.y,s.z);else if(w===1)o.up.set(0,0,l[b]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[b],s.z);else o.up.set(0,l[b],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[b]);let _=this._cubeSize;if(ws(i,w*_,b>2?_:0,_,_),u.setRenderTarget(i),m)u.render(g,o);u.render(t,o)}u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===vs||t.mapping===Ti;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=fd();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=dd();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;ws(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,Er)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),d=l*1.25,h=u*d,{_lodMax:f}=this,g=this._sizeLods[n],y=3*g*(n>f-As?n-f+As:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=f-e,ws(s,y,m,3*g,2*g),i.setRenderTarget(s),i.render(a,Er),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=f-n,ws(t,y,m,3*g,2*g),i.setRenderTarget(t),i.render(a,Er)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],u=3*c*(i>this._lodMax-As?i-this._lodMax+As:0),d=4*(this._cubeSize-c);ws(e,u,d,3*c,2*c),r.setRenderTarget(e),r.render(o,Er)}}function Ng(t){let e=[],n=[],i=t,s=t-As+1+Cg;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,_=[b,w,0,b+0.6666666666666666,w,0,b+0.6666666666666666,w+1,0,b,w,0,b+0.6666666666666666,w+1,0,b,w+1,0];g.set(_,f*h*p);for(let E=0;E<h;E++){let A=u[E*2]*2-1,R=u[E*2+1]*2-1;if(p===0)Hi.set(1,R,A);else if(p===1)Hi.set(-A,1,-R);else if(p===2)Hi.set(-A,R,1);else if(p===3)Hi.set(-1,R,-A);else if(p===4)Hi.set(-A,-1,R);else Hi.set(A,R,-1);Hi.toArray(y,(p*h+E)*f)}}let m=new fe;if(m.setAttribute("position",new xe(g,f)),m.setAttribute("outputDirection",new xe(y,f)),n.push(new wt(m,null)),i>As)i--}return{lodMeshes:n,sizeLods:e}}function ud(t,e,n){let i=new Ie(t,e,n);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Dg(t,e,n){return new pe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ug(t,e,n){return new pe({name:"SphericalGaussianBlur",defines:{SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function dd(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function fd(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lc extends Ie{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),s=new pe({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:gn});s.uniforms.tEquirect.value=e;let r=new wt(i,s),a=e.minFilter;if(e.minFilter===wi)e.minFilter=on;return new _c(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Fg(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){if(h===null||h===void 0)return null;if(f)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Sa||f===ba)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Lc(g.height);return y.fromEquirectangularTexture(t,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Sa||f===ba,y=f===vs||f===Ti;if(g||y){let m=n.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p){if(i===null)i=new Rr(t);return m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let b=h.image;if(g&&b&&b.height>0||y&&b&&l(b)){if(i===null)i=new Rr(t);return m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture}else return null}}}return h}function o(h,f){if(f===Sa)h.mapping=vs;else if(f===ba)h.mapping=Ti;return h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)if(h[y]!==void 0)f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);if(g!==void 0)e.delete(f),g.dispose()}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=n.get(f);if(g!==void 0)n.delete(f),g.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Og(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Mi("WebGLRenderer: "+i+" extension not supported.");return s}}}function Bg(t,e,n,i){let s={},r=new WeakMap;function a(d){let h=d.target;if(h.index!==null)e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);if(f)e.remove(f),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(d,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,_=b.length;w<_;w+=3){let E=b[w+0],A=b[w+1],R=b[w+2];h.push(E,A,A,R,R,E)}}else{let b=g.array;y=g.version;for(let w=0,_=b.length/3-1;w<_;w+=3){let E=w+0,A=w+1,R=w+2;h.push(E,A,A,R,R,E)}}let m=new(g.count>=65535?Ba:Oa)(h,1);m.version=y;let p=r.get(d);if(p)e.remove(p);r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;if(f!==null){if(h.version<f.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function zg(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,f){if(f===0)return;t.drawElementsInstanced(i,h,r,d*a,f),n.update(h,i,f)}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];n.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Hg(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Gg(t,e,n){let i=new WeakMap,s=new be;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};if(h!==void 0)h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;if(f===!0)w=1;if(g===!0)w=2;if(y===!0)w=3;let _=o.attributes.position.count*w,E=1;if(_>e.maxTextureSize)E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize;let A=new Float32Array(_*E*4*d),R=new Da(A,_,E,d);R.type=Kn,R.needsUpdate=!0;let v=w*4;for(let G=0;G<d;G++){let D=m[G],U=p[G],et=b[G],L=_*E*4*G;for(let V=0;V<D.count;V++){let tt=V*v;if(f===!0)s.fromBufferAttribute(D,V),A[L+tt+0]=s.x,A[L+tt+1]=s.y,A[L+tt+2]=s.z,A[L+tt+3]=0;if(g===!0)s.fromBufferAttribute(U,V),A[L+tt+4]=s.x,A[L+tt+5]=s.y,A[L+tt+6]=s.z,A[L+tt+7]=0;if(y===!0)s.fromBufferAttribute(et,V),A[L+tt+8]=s.x,A[L+tt+9]=s.y,A[L+tt+10]=s.z,A[L+tt+11]=et.itemSize===4?s.w:1}}h={count:d,texture:R,size:new ht(_,E)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function kg(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==u)f.update(),r.set(f,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var Vg={[ir]:"LINEAR_TONE_MAPPING",[sr]:"REINHARD_TONE_MAPPING",[rr]:"CINEON_TONE_MAPPING",[Ei]:"ACES_FILMIC_TONE_MAPPING",[or]:"AGX_TONE_MAPPING",[lr]:"NEUTRAL_TONE_MAPPING",[ar]:"CUSTOM_TONE_MAPPING"};function Wg(t,e,n,i,s,r){let a=new Ie(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new fe;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let u=new Sr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new wt(c,u),h=new zi(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,b=[],w=!1;this.setSize=function(_,E){if(a.setSize(_,E),o!==null)o.setSize(_,E);if(l!==null)l.setSize(_,E);for(let A=0;A<b.length;A++){let R=b[A];if(R.setSize)R.setSize(_,E)}},this.setEffects=function(_){b=_,w=b.length>0&&b[0].isRenderPass===!0;let{width:E,height:A}=a;if(b.length>0&&o===null)o=new Ie(E,A,{type:Be,depthBuffer:!1,stencilBuffer:!1}),l=new Ie(E,A,{type:Be,depthBuffer:!1,stencilBuffer:!1});for(let R=0;R<b.length;R++){let v=b[R];if(v.setSize)v.setSize(E,A)}},this.begin=function(_,E){if(y)return!1;if(_.toneMapping===Tn&&b.length===0)return!1;if(p=E,E!==null){let{width:A,height:R}=E;if(a.width!==A||a.height!==R)this.setSize(A,R)}if(w===!1)_.setRenderTarget(a);return m=_.toneMapping,_.toneMapping=Tn,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=m,y=!0;let A=a,R=o;for(let v=0;v<b.length;v++){let T=b[v];if(T.enabled===!1)continue;if(T.render(_,R,A,E),T.needsSwap!==!1)A=R,R=R===o?l:o}if(f!==_.outputColorSpace||g!==_.toneMapping){if(f=_.outputColorSpace,g=_.toneMapping,u.defines={},ie.getTransfer(f)===_e)u.defines.SRGB_TRANSFER="";let v=Vg[g];if(v)u.defines[v]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(p),_.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),u.dispose()}}var Nd=new Ye,Ic=new Li(1,1),Dd=new Da,Ud=new Jl,Fd=new Va,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function Rs(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=pd[s];if(r===void 0)r=new Float32Array(s),pd[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ge(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ke(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ao(t,e){let n=md[e];if(n===void 0)n=new Int32Array(e),md[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Xg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function qg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ge(n,e))return;t.uniform2fv(this.addr,e),ke(n,e)}}function Yg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ge(n,e))return;t.uniform3fv(this.addr,e),ke(n,e)}}function Zg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ge(n,e))return;t.uniform4fv(this.addr,e),ke(n,e)}}function $g(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ge(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ke(n,e)}else{if(Ge(n,i))return;_d.set(i),t.uniformMatrix2fv(this.addr,!1,_d),ke(n,i)}}function Jg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ge(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ke(n,e)}else{if(Ge(n,i))return;xd.set(i),t.uniformMatrix3fv(this.addr,!1,xd),ke(n,i)}}function Kg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ge(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ke(n,e)}else{if(Ge(n,i))return;gd.set(i),t.uniformMatrix4fv(this.addr,!1,gd),ke(n,i)}}function Qg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function jg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ge(n,e))return;t.uniform2iv(this.addr,e),ke(n,e)}}function tx(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ge(n,e))return;t.uniform3iv(this.addr,e),ke(n,e)}}function ex(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ge(n,e))return;t.uniform4iv(this.addr,e),ke(n,e)}}function nx(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function ix(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ge(n,e))return;t.uniform2uiv(this.addr,e),ke(n,e)}}function sx(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ge(n,e))return;t.uniform3uiv(this.addr,e),ke(n,e)}}function rx(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ge(n,e))return;t.uniform4uiv(this.addr,e),ke(n,e)}}function ax(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Ic.compareFunction=n.isReversedDepthBuffer()?Na:La,r=Ic;else r=Nd;n.setTexture2D(e||r,s)}function ox(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ud,s)}function lx(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Fd,s)}function cx(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Dd,s)}function hx(t){switch(t){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return $g;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function ux(t,e){t.uniform1fv(this.addr,e)}function dx(t,e){let n=Rs(e,this.size,2);t.uniform2fv(this.addr,n)}function fx(t,e){let n=Rs(e,this.size,3);t.uniform3fv(this.addr,n)}function px(t,e){let n=Rs(e,this.size,4);t.uniform4fv(this.addr,n)}function mx(t,e){let n=Rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gx(t,e){let n=Rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xx(t,e){let n=Rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _x(t,e){t.uniform1iv(this.addr,e)}function vx(t,e){t.uniform2iv(this.addr,e)}function yx(t,e){t.uniform3iv(this.addr,e)}function Mx(t,e){t.uniform4iv(this.addr,e)}function Sx(t,e){t.uniform1uiv(this.addr,e)}function bx(t,e){t.uniform2uiv(this.addr,e)}function Ex(t,e){t.uniform3uiv(this.addr,e)}function Tx(t,e){t.uniform4uiv(this.addr,e)}function wx(t,e,n){let i=this.cache,s=e.length,r=ao(n,s);if(!Ge(i,r))t.uniform1iv(this.addr,r),ke(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Ic;else a=Nd;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Ax(t,e,n){let i=this.cache,s=e.length,r=ao(n,s);if(!Ge(i,r))t.uniform1iv(this.addr,r),ke(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Ud,r[a])}function Rx(t,e,n){let i=this.cache,s=e.length,r=ao(n,s);if(!Ge(i,r))t.uniform1iv(this.addr,r),ke(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Fd,r[a])}function Cx(t,e,n){let i=this.cache,s=e.length,r=ao(n,s);if(!Ge(i,r))t.uniform1iv(this.addr,r),ke(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Dd,r[a])}function Ix(t){switch(t){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return bx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}class Od{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hx(e.type)}}class Bd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}}class zd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Rc=/(\w+)(\])?(\[|\.)?/g;function vd(t,e){t.seq.push(e),t.map[e.id]=e}function Px(t,e,n){let i=t.name,s=i.length;Rc.lastIndex=0;while(!0){let r=Rc.exec(i),a=Rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){vd(n,c===void 0?new Od(o,t,e):new Bd(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new zd(o),vd(n,d);n=d}}}class Ar{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Px(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function yd(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Lx=37297,Nx=0;function Dx(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Md=new Jt;function Ux(t){ie._getMatrix(Md,ie.workingColorSpace,t);let e=`mat3( ${Md.elements.map((n)=>n.toFixed(4))} )`;switch(ie.getTransfer(t)){case Xl:return[e,"LinearTransferOETF"];case _e:return[e,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sd(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Dx(t.getShaderSource(e),o)}else return r}function Fx(t,e){let n=Ux(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Ox={[ir]:"Linear",[sr]:"Reinhard",[rr]:"Cineon",[Ei]:"ACESFilmic",[or]:"AgX",[lr]:"Neutral",[ar]:"Custom"};function Bx(t,e){let n=Ox[e];if(n===void 0)return Xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var so=new I;function zx(){ie.getLuminanceCoefficients(so);let t=so.x.toFixed(4),e=so.y.toFixed(4),n=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Hx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Gx(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function kx(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function wr(t){return t!==""}function bd(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(t){return t.replace(Vx,Xx)}var Wx=new Map;function Xx(t,e){let n=ne[e];if(n===void 0){let i=Wx.get(e);if(i!==void 0)n=ne[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pc(n)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(t){return t.replace(qx,Yx)}function Yx(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var Zx={[nr]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"};function $x(t){return Zx[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jx={[vs]:"ENVMAP_TYPE_CUBE",[Ti]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE_UV"};function Kx(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return Jx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qx={[Ti]:"ENVMAP_MODE_REFRACTION"};function jx(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Qx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t_={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Pu]:"ENVMAP_BLENDING_ADD"};function e_(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return t_[t.combine]||"ENVMAP_BLENDING_NONE"}function n_(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function i_(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=$x(n),c=Kx(n),u=jx(n),d=e_(n),h=n_(n),f=Hx(n),g=Gx(r),y=s.createProgram(),m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(wr).join(`
`),m.length>0)m+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(wr).join(`
`),p.length>0)p+=`
`}else m=[wd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[wd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tn?"#define TONE_MAPPING":"",n.toneMapping!==Tn?ne.tonemapping_pars_fragment:"",n.toneMapping!==Tn?Bx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Fx("linearToOutputTexel",n.outputColorSpace),zx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wr).join(`
`);if(a=Pc(a),a=bd(a,n),a=Ed(a,n),o=Pc(o),o=bd(o,n),o=Ed(o,n),a=Td(a),o=Td(o),n.isRawShaderMaterial!==!0)b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let w=b+m+a,_=b+p+o,E=yd(s,s.VERTEX_SHADER,w),A=yd(s,s.FRAGMENT_SHADER,_);if(s.attachShader(y,E),s.attachShader(y,A),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function R(D){if(t.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",et=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(A)||"",V=U.trim(),tt=et.trim(),q=L.trim(),ut=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ut=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,y,E,A);else{let ot=Sd(s,E,"vertex"),lt=Sd(s,A,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ot+`
`+lt)}else if(V!=="")Xt("WebGLProgram: Program Info Log:",V);else if(tt===""||q==="")j=!1;if(j)D.diagnostics={runnable:ut,programLog:V,vertexShader:{log:tt,prefix:m},fragmentShader:{log:q,prefix:p}}}s.deleteShader(E),s.deleteShader(A),v=new Ar(s,y),T=kx(s,y)}let v;this.getUniforms=function(){if(v===void 0)R(this);return v};let T;this.getAttributes=function(){if(T===void 0)R(this);return T};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(G===!1)G=s.getProgramParameter(y,Lx);return G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}var s_=0;class Hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Gd(t),e.set(t,n);return n}}class Gd{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}}function r_(t){return t===Ci||t===Ia||t===Pa}function a_(t,e,n,i,s,r){let a=new Ua,o=new Hd,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){if(l.add(v),v===0)return"uv";return`uv${v}`}function y(v,T,G,D,U,et){let L=D.fog,V=U.geometry,tt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ut=e.get(v.envMap||tt,q),j=!!ut&&ut.mapping===cr?ut.image.height:null,ot=f[v.type];if(v.precision!==null){if(h=i.getMaxPrecision(v.precision),h!==v.precision)Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead.")}let lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Nt=lt!==void 0?lt.length:0,Ft=0;if(V.morphAttributes.position!==void 0)Ft=1;if(V.morphAttributes.normal!==void 0)Ft=2;if(V.morphAttributes.color!==void 0)Ft=3;let re,Zt,Q,gt;if(ot){let Ee=zn[ot];re=Ee.vertexShader,Zt=Ee.fragmentShader}else{re=v.vertexShader,Zt=v.fragmentShader;let Ee=o.getVertexShaderStage(v),ue=o.getFragmentShaderStage(v);o.update(v,Ee,ue),Q=Ee.id,gt=ue.id}let it=t.getRenderTarget(),xt=t.state.buffers.depth.getReversed(),Pt=U.isInstancedMesh===!0,Mt=U.isBatchedMesh===!0,jt=!!v.map,N=!!v.matcap,H=!!ut,Y=!!v.aoMap,k=!!v.lightMap,st=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,pt=!!v.displacementMap,yt=!!v.emissiveMap,ct=!!v.metalnessMap,C=!!v.roughnessMap,Rt=v.anisotropy>0,kt=v.clearcoat>0,Bt=v.dispersion>0,S=v.retroreflectivity>0,x=v.iridescence>0,P=v.sheen>0,B=v.transmission>0,nt=Rt&&!!v.anisotropyMap,K=kt&&!!v.clearcoatMap,mt=kt&&!!v.clearcoatNormalMap,Z=kt&&!!v.clearcoatRoughnessMap,rt=x&&!!v.iridescenceMap,bt=x&&!!v.iridescenceThicknessMap,Vt=P&&!!v.sheenColorMap,Tt=P&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Wt=!!v.specularColorMap,qt=!!v.specularIntensityMap,he=B&&!!v.transmissionMap,O=B&&!!v.thicknessMap,St=!!v.gradientMap,at=!!v.alphaMap,Et=v.alphaTest>0,Dt=!!v.alphaHash,dt=!!v.extensions,Ct=Tn;if(v.toneMapped){if(it===null||it.isXRRenderTarget===!0)Ct=t.toneMapping}let Kt={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:Zt,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&U._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&U.instanceColor!==null,instancingMorph:Pt&&U.morphTexture!==null,outputColorSpace:it===null?t.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:N,envMap:H,envMapMode:H&&ut.mapping,envMapCubeUVHeight:j,aoMap:Y,lightMap:k,bumpMap:st,normalMap:ft,displacementMap:pt,emissiveMap:yt,normalMapObjectSpace:ft&&v.normalMapType===Gu,normalMapTangentSpace:ft&&v.normalMapType===Vl,packedNormalMap:ft&&v.normalMapType===Vl&&r_(v.normalMap.format),metalnessMap:ct,roughnessMap:C,anisotropy:Rt,anisotropyMap:nt,clearcoat:kt,clearcoatMap:K,clearcoatNormalMap:mt,clearcoatRoughnessMap:Z,dispersion:Bt,retroreflection:S,iridescence:x,iridescenceMap:rt,iridescenceThicknessMap:bt,sheen:P,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:_t,specularColorMap:Wt,specularIntensityMap:qt,transmission:B,transmissionMap:he,thicknessMap:O,gradientMap:St,opaque:v.transparent===!1&&v.blending===bi&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:Et,alphaHash:Dt,combine:v.combine,mapUv:jt&&g(v.map.channel),aoMapUv:Y&&g(v.aoMap.channel),lightMapUv:k&&g(v.lightMap.channel),bumpMapUv:st&&g(v.bumpMap.channel),normalMapUv:ft&&g(v.normalMap.channel),displacementMapUv:pt&&g(v.displacementMap.channel),emissiveMapUv:yt&&g(v.emissiveMap.channel),metalnessMapUv:ct&&g(v.metalnessMap.channel),roughnessMapUv:C&&g(v.roughnessMap.channel),anisotropyMapUv:nt&&g(v.anisotropyMap.channel),clearcoatMapUv:K&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(v.sheenRoughnessMap.channel),specularMapUv:_t&&g(v.specularMap.channel),specularColorMapUv:Wt&&g(v.specularColorMap.channel),specularIntensityMapUv:qt&&g(v.specularIntensityMap.channel),transmissionMapUv:he&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:at&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ft||Rt),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(jt||at),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Ft,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ct,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:yt&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===rn,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function m(v){let T=[];if(v.shaderID)T.push(v.shaderID);else T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID);if(v.defines!==void 0)for(let G in v.defines)T.push(G),T.push(v.defines[G]);if(v.isRawShaderMaterial===!1)p(T,v),b(T,v),T.push(t.outputColorSpace);return T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){if(a.disableAll(),T.instancing)a.enable(0);if(T.instancingColor)a.enable(1);if(T.instancingMorph)a.enable(2);if(T.matcap)a.enable(3);if(T.envMap)a.enable(4);if(T.normalMapObjectSpace)a.enable(5);if(T.normalMapTangentSpace)a.enable(6);if(T.clearcoat)a.enable(7);if(T.iridescence)a.enable(8);if(T.alphaTest)a.enable(9);if(T.vertexColors)a.enable(10);if(T.vertexAlphas)a.enable(11);if(T.vertexUv1s)a.enable(12);if(T.vertexUv2s)a.enable(13);if(T.vertexUv3s)a.enable(14);if(T.vertexTangents)a.enable(15);if(T.anisotropy)a.enable(16);if(T.alphaHash)a.enable(17);if(T.batching)a.enable(18);if(T.dispersion)a.enable(19);if(T.retroreflection)a.enable(24);if(T.batchingColor)a.enable(20);if(T.gradientMap)a.enable(21);if(T.packedNormalMap)a.enable(22);if(T.vertexNormals)a.enable(23);if(v.push(a.mask),a.disableAll(),T.fog)a.enable(0);if(T.useFog)a.enable(1);if(T.flatShading)a.enable(2);if(T.logarithmicDepthBuffer)a.enable(3);if(T.reversedDepthBuffer)a.enable(4);if(T.skinning)a.enable(5);if(T.morphTargets)a.enable(6);if(T.morphNormals)a.enable(7);if(T.morphColors)a.enable(8);if(T.premultipliedAlpha)a.enable(9);if(T.shadowMapEnabled)a.enable(10);if(T.doubleSided)a.enable(11);if(T.flipSided)a.enable(12);if(T.useDepthPacking)a.enable(13);if(T.dithering)a.enable(14);if(T.transmission)a.enable(15);if(T.sheen)a.enable(16);if(T.opaque)a.enable(17);if(T.pointsUvs)a.enable(18);if(T.decodeVideoTexture)a.enable(19);if(T.decodeVideoTextureEmissive)a.enable(20);if(T.alphaToCoverage)a.enable(21);if(T.numLightProbeGrids>0)a.enable(22);if(T.hasPositionAttribute)a.enable(23);v.push(a.mask)}function w(v){let T=f[v.type],G;if(T){let D=zn[T];G=ei.clone(D.uniforms)}else G=v.uniforms;return G}function _(v,T){let G=u.get(T);if(G!==void 0)++G.usedTimes;else G=new i_(t,T,v,s),c.push(G),u.set(T,G);return G}function E(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function o_(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function l_(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Ad(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Rd(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;if(h.isInstancedMesh)f+=2;if(h.isSkinnedMesh)f+=1;return f}function o(h,f,g,y,m,p){let b=t[e];if(b===void 0)b={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},t[e]=b;else b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=a(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=m,b.group=p;return e++,b}function l(h,f,g,y,m,p,b){if(b.reversedDepth===!0)m=-m;let w=o(h,f,g,y,m,p);if(g.transmission>0)i.push(w);else if(g.transparent===!0)s.push(w);else n.push(w)}function c(h,f,g,y,m,p){let b=o(h,f,g,y,m,p);if(g.transmission>0)i.unshift(b);else if(g.transparent===!0)s.unshift(b);else n.unshift(b)}function u(h,f){if(n.length>1)n.sort(h||l_);if(i.length>1)i.sort(f||Ad);if(s.length>1)s.sort(f||Ad)}function d(){for(let h=e,f=t.length;h<f;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function c_(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Rd,t.set(i,[a]);else if(s>=r.length)a=new Rd,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function h_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new vt};break;case"SpotLight":n={position:new I,direction:new I,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function u_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var d_=0;function f_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function p_(t){let e=new h_,n=u_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new te,a=new te;function o(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,w=0,_=0,E=0,A=0,R=0,v=0,T=0,G=0;c.sort(f_);for(let U=0,et=c.length;U<et;U++){let L=c[U],V=L.color,tt=L.intensity,q=L.distance,ut=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===Ci)ut=L.shadow.map.texture;else ut=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)u+=V.r*tt,d+=V.g*tt,h+=V.b*tt;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],tt);G++}else if(L.isSunLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,lt=n.get(L);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[g]=lt,i.sunShadowMap[g]=ut;let Nt=ot.getViewportCount();for(let Ft=0;Ft<Nt;Ft++)i.sunShadowMatrix[y+Ft]=ot.getMatrix(Ft),i.sunShadowCascade[y+Ft]=ot._cascadeData[Ft];y+=Nt,g++}i.sun[f]=j,f++}else if(L.isDirectionalLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,lt=n.get(L);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,i.directionalShadow[m]=lt,i.directionalShadowMap[m]=ut,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=j,m++}else if(L.isSpotLight){let j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(V).multiplyScalar(tt),j.distance=q,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[b]=j;let ot=L.shadow;if(L.map){if(i.spotLightMap[v]=L.map,v++,ot.updateMatrices(L),L.castShadow)T++}if(i.spotLightMatrix[b]=ot.matrix,L.castShadow){let lt=n.get(L);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,i.spotShadow[b]=lt,i.spotShadowMap[b]=ut,R++}b++}else if(L.isRectAreaLight){let j=e.get(L);j.color.copy(V).multiplyScalar(tt),j.halfWidth.set(L.width*0.5,0,0),j.halfHeight.set(0,L.height*0.5,0),i.rectArea[w]=j,w++}else if(L.isPointLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){let ot=L.shadow,lt=n.get(L);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,lt.shadowCameraNear=ot.camera.near,lt.shadowCameraFar=ot.camera.far,i.pointShadow[p]=lt,i.pointShadowMap[p]=ut,i.pointShadowMatrix[p]=L.shadow.matrix,A++}i.point[p]=j,p++}else if(L.isHemisphereLight){let j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(tt),j.groundColor.copy(L.groundColor).multiplyScalar(tt),i.hemi[_]=j,_++}}if(w>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2;else i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;if(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==w||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==A||D.numSpotShadows!==R||D.numSpotMaps!==v||D.numLightProbes!==G)i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=w,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=G,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=b,D.rectAreaLength=w,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=A,D.numSpotShadows=R,D.numSpotMaps=v,D.numLightProbes=G,i.version=d_++}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let _=c[b];if(_.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(_.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(_.width*0.5,0,0),E.halfHeight.set(0,_.height*0.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Cd(t){let e=new p_(t),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function m_(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Cd(t),e.set(s,[o]);else if(r>=a.length)o=new Cd(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`,__=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],v_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Id=new te,Tr=new I,Cc=new I;function y_(t,e,n){let i=new xr,s=new ht,r=new ht,a=new be,o=new ac,l=new oc,c={},u=n.maxTextureSize,d={[xs]:je,[je]:xs,[rn]:rn},h=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new xe(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let p=this.type;this.render=function(A,R,v){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===eu)Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr;let T=t.getRenderTarget(),G=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;if(U.setBlending(gn),U.buffers.depth.getReversed()===!0)U.buffers.color.setClear(0,0,0,0);else U.buffers.color.setClear(1,1,1,1);U.buffers.depth.setTest(!0),U.setScissorTest(!1);let et=p!==this.type;if(et)R.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((V)=>V.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,V=A.length;L<V;L++){let tt=A[L],q=tt.shadow;if(q===void 0){Xt("WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ut=q.getFrameExtents();if(s.multiply(ut),r.copy(q.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,q.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,q.mapSize.y=r.y}let j=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=j,q.map===null||et===!0){if(q.map!==null){if(q.map.depthTexture!==null)q.map.depthTexture.dispose(),q.map.depthTexture=null;q.map.dispose()}if(this.type===gs){if(tt.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ie(s.x,s.y,{format:Ci,type:Be,minFilter:on,magFilter:on,generateMipmaps:!1}),q.map.texture.name=tt.name+".shadowMap",q.map.depthTexture=new Li(s.x,s.y,Kn),q.map.depthTexture.name=tt.name+".shadowMapDepth",q.map.depthTexture.format=Ai,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ui,q.map.depthTexture.magFilter=ui}else{if(tt.isPointLight)q.map=new Lc(s.x),q.map.depthTexture=new jl(s.x,di);else q.map=new Ie(s.x,s.y),q.map.depthTexture=new Li(s.x,s.y,di);if(q.map.depthTexture.name=tt.name+".shadowMap",q.map.depthTexture.format=Ai,this.type===nr)q.map.depthTexture.compareFunction=j?Na:La,q.map.depthTexture.minFilter=on,q.map.depthTexture.magFilter=on;else q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ui,q.map.depthTexture.magFilter=ui}q.camera.updateProjectionMatrix()}if(q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y))q.map.setSize(s.x,s.y);let ot=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();if(tt.isPointLight!==!0)q.updateMatrices(tt,v);for(let lt=0;lt<ot;lt++){let Nt=q.getCamera(lt);if(tt.isPointLight){let{camera:Ft,matrix:re}=q,Zt=tt.distance||Ft.far;if(Zt!==Ft.far)Ft.far=Zt,Ft.updateProjectionMatrix();Tr.setFromMatrixPosition(tt.matrixWorld),Ft.position.copy(Tr),Cc.copy(Ft.position),Cc.add(__[lt]),Ft.up.copy(v_[lt]),Ft.lookAt(Cc),Ft.updateMatrixWorld(),re.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Id.multiplyMatrices(Ft.projectionMatrix,Ft.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Id,Ft.coordinateSystem,Ft.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,lt),t.clear();else{if(lt===0)t.setRenderTarget(q.map),t.clear();let Ft=q.getViewport(lt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),U.viewport(a)}i=q.getFrustum(lt),_(R,v,Nt,tt,this.type)}if(q.isPointLightShadow!==!0&&this.type===gs)b(q,v);q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,G,D)};function b(A,R){let v=e.update(y);if(h.defines.VSM_SAMPLES!==A.blurSamples)h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new Ie(s.x,s.y,{format:Ci,type:Be});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,v,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,v,f,y,null)}function w(A,R,v,T){let G=null,D=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)G=D;else if(G=v.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=G.uuid,et=R.uuid,L=c[U];if(L===void 0)L={},c[U]=L;let V=L[et];if(V===void 0)V=G.clone(),L[et]=V,R.addEventListener("dispose",E);G=V}if(G.visible=R.visible,G.wireframe=R.wireframe,T===gs)G.side=R.shadowSide!==null?R.shadowSide:R.side;else G.side=R.shadowSide!==null?R.shadowSide:d[R.side];if(G.alphaMap=R.alphaMap,G.alphaTest=R.alphaToCoverage===!0?0.5:R.alphaTest,G.map=R.map,G.clipShadows=R.clipShadows,G.clippingPlanes=R.clippingPlanes,G.clipIntersection=R.clipIntersection,G.displacementMap=R.displacementMap,G.displacementScale=R.displacementScale,G.displacementBias=R.displacementBias,G.wireframeLinewidth=R.wireframeLinewidth,G.linewidth=R.linewidth,v.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let U=t.properties.get(G);U.light=v}return G}function _(A,R,v,T,G){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&G===gs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let et=e.update(A),L=A.material;if(Array.isArray(L)){let V=et.groups;for(let tt=0,q=V.length;tt<q;tt++){let ut=V[tt],j=L[ut.materialIndex];if(j&&j.visible){let ot=w(A,j,T,G);A.onBeforeShadow(t,A,R,v,et,ot,ut),t.renderBufferDirect(v,null,et,ot,A,ut),A.onAfterShadow(t,A,R,v,et,ot,ut)}}}else if(L.visible){let V=w(A,L,T,G);A.onBeforeShadow(t,A,R,v,et,V,null),t.renderBufferDirect(v,null,et,V,A,null),A.onAfterShadow(t,A,R,v,et,V,null)}}}let U=A.children;for(let et=0,L=U.length;et<L;et++)_(U[et],R,v,T,G)}function E(A){A.target.removeEventListener("dispose",E);for(let v in c){let T=c[v],G=A.target.uuid;if(G in T)T[G].dispose(),delete T[G]}}}function M_(t,e){function n(){let O=!1,St=new be,at=null,Et=new be(0,0,0,0);return{setMask:function(Dt){if(at!==Dt&&!O)t.colorMask(Dt,Dt,Dt,Dt),at=Dt},setLocked:function(Dt){O=Dt},setClear:function(Dt,dt,Ct,Kt,Ee){if(Ee===!0)Dt*=Kt,dt*=Kt,Ct*=Kt;if(St.set(Dt,dt,Ct,Kt),Et.equals(St)===!1)t.clearColor(Dt,dt,Ct,Kt),Et.copy(St)},reset:function(){O=!1,at=null,Et.set(-1,0,0,0)}}}function i(){let O=!1,St=!1,at=null,Et=null,Dt=null;return{setReversed:function(dt){if(St!==dt){let Ct=e.get("EXT_clip_control");if(dt)Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT);else Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);St=dt;let Kt=Dt;Dt=null,this.setClear(Kt)}},getReversed:function(){return St},setTest:function(dt){if(dt)it(t.DEPTH_TEST);else xt(t.DEPTH_TEST)},setMask:function(dt){if(at!==dt&&!O)t.depthMask(dt),at=dt},setFunc:function(dt){if(St)dt=Ku[dt];if(Et!==dt){switch(dt){case Su:t.depthFunc(t.NEVER);break;case bu:t.depthFunc(t.ALWAYS);break;case Eu:t.depthFunc(t.LESS);break;case al:t.depthFunc(t.LEQUAL);break;case Tu:t.depthFunc(t.EQUAL);break;case wu:t.depthFunc(t.GEQUAL);break;case Au:t.depthFunc(t.GREATER);break;case Ru:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Et=dt}},setLocked:function(dt){O=dt},setClear:function(dt){if(Dt!==dt){if(Dt=dt,St)dt=1-dt;t.clearDepth(dt)}},reset:function(){O=!1,at=null,Et=null,Dt=null,St=!1}}}function s(){let O=!1,St=null,at=null,Et=null,Dt=null,dt=null,Ct=null,Kt=null,Ee=null;return{setTest:function(ue){if(!O)if(ue)it(t.STENCIL_TEST);else xt(t.STENCIL_TEST)},setMask:function(ue){if(St!==ue&&!O)t.stencilMask(ue),St=ue},setFunc:function(ue,Pn,kn){if(at!==ue||Et!==Pn||Dt!==kn)t.stencilFunc(ue,Pn,kn),at=ue,Et=Pn,Dt=kn},setOp:function(ue,Pn,kn){if(dt!==ue||Ct!==Pn||Kt!==kn)t.stencilOp(ue,Pn,kn),dt=ue,Ct=Pn,Kt=kn},setLocked:function(ue){O=ue},setClear:function(ue){if(Ee!==ue)t.clearStencil(ue),Ee=ue},reset:function(){O=!1,St=null,at=null,Et=null,Dt=null,dt=null,Ct=null,Kt=null,Ee=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,_=null,E=null,A=null,R=null,v=new vt(0,0,0),T=0,G=!1,D=null,U=null,et=null,L=null,V=null,tt=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ut=0,j=t.getParameter(t.VERSION);if(j.indexOf("WebGL")!==-1)ut=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=ut>=1;else if(j.indexOf("OpenGL ES")!==-1)ut=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=ut>=2;let ot=null,lt={},Nt=t.getParameter(t.SCISSOR_BOX),Ft=t.getParameter(t.VIEWPORT),re=new be().fromArray(Nt),Zt=new be().fromArray(Ft);function Q(O,St,at,Et){let Dt=new Uint8Array(4),dt=t.createTexture();t.bindTexture(O,dt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ct=0;Ct<at;Ct++)if(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)t.texImage3D(St,0,t.RGBA,1,1,Et,0,t.RGBA,t.UNSIGNED_BYTE,Dt);else t.texImage2D(St+Ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Dt);return dt}let gt={};gt[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),gt[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),gt[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(t.DEPTH_TEST),a.setFunc(al),st(!1),ft(il),it(t.CULL_FACE),Y(gn);function it(O){if(u[O]!==!0)t.enable(O),u[O]=!0}function xt(O){if(u[O]!==!1)t.disable(O),u[O]=!1}function Pt(O,St){if(h[O]!==St){if(t.bindFramebuffer(O,St),h[O]=St,O===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=St;if(O===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=St;return!0}return!1}function Mt(O,St){let at=g,Et=!1;if(O){if(at=f.get(St),at===void 0)at=[],f.set(St,at);let Dt=O.textures;if(at.length!==Dt.length||at[0]!==t.COLOR_ATTACHMENT0){for(let dt=0,Ct=Dt.length;dt<Ct;dt++)at[dt]=t.COLOR_ATTACHMENT0+dt;at.length=Dt.length,Et=!0}}else if(at[0]!==t.BACK)at[0]=t.BACK,Et=!0;if(Et)t.drawBuffers(at)}function jt(O){if(y!==O)return t.useProgram(O),y=O,!0;return!1}let N={[_s]:t.FUNC_ADD,[iu]:t.FUNC_SUBTRACT,[su]:t.FUNC_REVERSE_SUBTRACT};N[ru]=t.MIN,N[au]=t.MAX;let H={[ou]:t.ZERO,[lu]:t.ONE,[cu]:t.SRC_COLOR,[uu]:t.SRC_ALPHA,[xu]:t.SRC_ALPHA_SATURATE,[mu]:t.DST_COLOR,[fu]:t.DST_ALPHA,[hu]:t.ONE_MINUS_SRC_COLOR,[du]:t.ONE_MINUS_SRC_ALPHA,[gu]:t.ONE_MINUS_DST_COLOR,[pu]:t.ONE_MINUS_DST_ALPHA,[_u]:t.CONSTANT_COLOR,[vu]:t.ONE_MINUS_CONSTANT_COLOR,[yu]:t.CONSTANT_ALPHA,[Mu]:t.ONE_MINUS_CONSTANT_ALPHA};function Y(O,St,at,Et,Dt,dt,Ct,Kt,Ee,ue){if(O===gn){if(m===!0)xt(t.BLEND),m=!1;return}if(m===!1)it(t.BLEND),m=!0;if(O!==nu){if(O!==p||ue!==G){if(b!==_s||E!==_s)t.blendEquation(t.FUNC_ADD),b=_s,E=_s;if(ue)switch(O){case bi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tn:t.blendFunc(t.ONE,t.ONE);break;case sl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Yt("WebGLState: Invalid blending: ",O);break}else switch(O){case bi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case sl:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",O);break}w=null,_=null,A=null,R=null,v.set(0,0,0),T=0,p=O,G=ue}return}if(Dt=Dt||St,dt=dt||at,Ct=Ct||Et,St!==b||Dt!==E)t.blendEquationSeparate(N[St],N[Dt]),b=St,E=Dt;if(at!==w||Et!==_||dt!==A||Ct!==R)t.blendFuncSeparate(H[at],H[Et],H[dt],H[Ct]),w=at,_=Et,A=dt,R=Ct;if(Kt.equals(v)===!1||Ee!==T)t.blendColor(Kt.r,Kt.g,Kt.b,Ee),v.copy(Kt),T=Ee;p=O,G=!1}function k(O,St){O.side===rn?xt(t.CULL_FACE):it(t.CULL_FACE);let at=O.side===je;if(St)at=!at;st(at),O.blending===bi&&O.transparent===!1?Y(gn):Y(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Et=O.stencilWrite;if(o.setTest(Et),Et)o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(t.SAMPLE_ALPHA_TO_COVERAGE):xt(t.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){if(D!==O){if(O)t.frontFace(t.CW);else t.frontFace(t.CCW);D=O}}function ft(O){if(O!==jh){if(it(t.CULL_FACE),O!==U)if(O===il)t.cullFace(t.BACK);else if(O===tu)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else xt(t.CULL_FACE);U=O}function pt(O){if(O!==et){if(q)t.lineWidth(O);et=O}}function yt(O,St,at){if(O){if(it(t.POLYGON_OFFSET_FILL),L!==St||V!==at){if(L=St,V=at,a.getReversed())St=-St;t.polygonOffset(St,at)}}else xt(t.POLYGON_OFFSET_FILL)}function ct(O){if(O)it(t.SCISSOR_TEST);else xt(t.SCISSOR_TEST)}function C(O){if(O===void 0)O=t.TEXTURE0+tt-1;if(ot!==O)t.activeTexture(O),ot=O}function Rt(O,St,at){if(at===void 0)if(ot===null)at=t.TEXTURE0+tt-1;else at=ot;let Et=lt[at];if(Et===void 0)Et={type:void 0,texture:void 0},lt[at]=Et;if(Et.type!==O||Et.texture!==St){if(ot!==at)t.activeTexture(at),ot=at;t.bindTexture(O,St||gt[O]),Et.type=O,Et.texture=St}}function kt(){let O=lt[ot];if(O!==void 0&&O.type!==void 0)t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function Bt(){try{t.compressedTexImage2D(...arguments)}catch(O){Yt("WebGLState:",O)}}function S(){try{t.compressedTexImage3D(...arguments)}catch(O){Yt("WebGLState:",O)}}function x(){try{t.texSubImage2D(...arguments)}catch(O){Yt("WebGLState:",O)}}function P(){try{t.texSubImage3D(...arguments)}catch(O){Yt("WebGLState:",O)}}function B(){try{t.compressedTexSubImage2D(...arguments)}catch(O){Yt("WebGLState:",O)}}function nt(){try{t.compressedTexSubImage3D(...arguments)}catch(O){Yt("WebGLState:",O)}}function K(){try{t.texStorage2D(...arguments)}catch(O){Yt("WebGLState:",O)}}function mt(){try{t.texStorage3D(...arguments)}catch(O){Yt("WebGLState:",O)}}function Z(){try{t.texImage2D(...arguments)}catch(O){Yt("WebGLState:",O)}}function rt(){try{t.texImage3D(...arguments)}catch(O){Yt("WebGLState:",O)}}function bt(O){if(d[O]!==void 0)return d[O];else return t.getParameter(O)}function Vt(O,St){if(d[O]!==St)t.pixelStorei(O,St),d[O]=St}function Tt(O){if(re.equals(O)===!1)t.scissor(O.x,O.y,O.z,O.w),re.copy(O)}function _t(O){if(Zt.equals(O)===!1)t.viewport(O.x,O.y,O.z,O.w),Zt.copy(O)}function Wt(O,St){let at=c.get(St);if(at===void 0)at=new WeakMap,c.set(St,at);let Et=at.get(O);if(Et===void 0)Et=t.getUniformBlockIndex(St,O.name),at.set(O,Et)}function qt(O,St){let Et=c.get(St).get(O);if(l.get(St)!==Et)t.uniformBlockBinding(St,Et,O.__bindingPointIndex),l.set(St,Et)}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ot=null,lt={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,_=null,E=null,A=null,R=null,v=new vt(0,0,0),T=0,G=!1,D=null,U=null,et=null,L=null,V=null,re.set(0,0,t.canvas.width,t.canvas.height),Zt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:xt,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:jt,setBlending:Y,setMaterial:k,setFlipSided:st,setCullFace:ft,setLineWidth:pt,setPolygonOffset:yt,setScissorTest:ct,activeTexture:C,bindTexture:Rt,unbindTexture:kt,compressedTexImage2D:Bt,compressedTexImage3D:S,texImage2D:Z,texImage3D:rt,pixelStorei:Vt,getParameter:bt,updateUBOMapping:Wt,uniformBlockBinding:qt,texStorage2D:K,texStorage3D:mt,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:B,compressedTexSubImage3D:nt,scissor:Tt,viewport:_t,reset:he}}function S_(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function y(S,x){return g?new OffscreenCanvas(S,x):$s("canvas")}function m(S,x,P){let B=1,nt=Bt(S);if(nt.width>P||nt.height>P)B=P/Math.max(nt.width,nt.height);if(B<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let K=Math.floor(B*nt.width),mt=Math.floor(B*nt.height);if(h===void 0)h=y(K,mt);let Z=x?y(K,mt):h;return Z.width=K,Z.height=mt,Z.getContext("2d").drawImage(S,0,0,K,mt),Xt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+mt+")."),Z}else{if("data"in S)Xt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+").");return S}return S}function p(S){return S.generateMipmaps}function b(S){t.generateMipmap(S)}function w(S){if(S.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(S.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function _(S,x,P,B,nt,K=!1){if(S!==null){if(t[S]!==void 0)return t[S];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let mt;if(B){if(mt=e.get("EXT_texture_norm16"),!mt)Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Z=x;if(x===t.RED){if(P===t.FLOAT)Z=t.R32F;if(P===t.HALF_FLOAT)Z=t.R16F;if(P===t.UNSIGNED_BYTE)Z=t.R8;if(P===t.UNSIGNED_SHORT&&mt)Z=mt.R16_EXT;if(P===t.SHORT&&mt)Z=mt.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(P===t.UNSIGNED_BYTE)Z=t.R8UI;if(P===t.UNSIGNED_SHORT)Z=t.R16UI;if(P===t.UNSIGNED_INT)Z=t.R32UI;if(P===t.BYTE)Z=t.R8I;if(P===t.SHORT)Z=t.R16I;if(P===t.INT)Z=t.R32I}if(x===t.RG){if(P===t.FLOAT)Z=t.RG32F;if(P===t.HALF_FLOAT)Z=t.RG16F;if(P===t.UNSIGNED_BYTE)Z=t.RG8;if(P===t.UNSIGNED_SHORT&&mt)Z=mt.RG16_EXT;if(P===t.SHORT&&mt)Z=mt.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(P===t.UNSIGNED_BYTE)Z=t.RG8UI;if(P===t.UNSIGNED_SHORT)Z=t.RG16UI;if(P===t.UNSIGNED_INT)Z=t.RG32UI;if(P===t.BYTE)Z=t.RG8I;if(P===t.SHORT)Z=t.RG16I;if(P===t.INT)Z=t.RG32I}if(x===t.RGB_INTEGER){if(P===t.UNSIGNED_BYTE)Z=t.RGB8UI;if(P===t.UNSIGNED_SHORT)Z=t.RGB16UI;if(P===t.UNSIGNED_INT)Z=t.RGB32UI;if(P===t.BYTE)Z=t.RGB8I;if(P===t.SHORT)Z=t.RGB16I;if(P===t.INT)Z=t.RGB32I}if(x===t.RGBA_INTEGER){if(P===t.UNSIGNED_BYTE)Z=t.RGBA8UI;if(P===t.UNSIGNED_SHORT)Z=t.RGBA16UI;if(P===t.UNSIGNED_INT)Z=t.RGBA32UI;if(P===t.BYTE)Z=t.RGBA8I;if(P===t.SHORT)Z=t.RGBA16I;if(P===t.INT)Z=t.RGBA32I}if(x===t.RGB){if(P===t.UNSIGNED_SHORT&&mt)Z=mt.RGB16_EXT;if(P===t.SHORT&&mt)Z=mt.RGB16_SNORM_EXT;if(P===t.UNSIGNED_INT_5_9_9_9_REV)Z=t.RGB9_E5;if(P===t.UNSIGNED_INT_10F_11F_11F_REV)Z=t.R11F_G11F_B10F}if(x===t.RGBA){let rt=K?Xl:ie.getTransfer(nt);if(P===t.FLOAT)Z=t.RGBA32F;if(P===t.HALF_FLOAT)Z=t.RGBA16F;if(P===t.UNSIGNED_BYTE)Z=rt===_e?t.SRGB8_ALPHA8:t.RGBA8;if(P===t.UNSIGNED_SHORT&&mt)Z=mt.RGBA16_EXT;if(P===t.SHORT&&mt)Z=mt.RGBA16_SNORM_EXT;if(P===t.UNSIGNED_SHORT_4_4_4_4)Z=t.RGBA4;if(P===t.UNSIGNED_SHORT_5_5_5_1)Z=t.RGB5_A1}if(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)e.get("EXT_color_buffer_float");return Z}function E(S,x){let P;if(S){if(x===null||x===di||x===Ms)P=t.DEPTH24_STENCIL8;else if(x===Kn)P=t.DEPTH32F_STENCIL8;else if(x===ur)P=t.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===di||x===Ms)P=t.DEPTH_COMPONENT24;else if(x===Kn)P=t.DEPTH_COMPONENT32F;else if(x===ur)P=t.DEPTH_COMPONENT16;return P}function A(S,x){if(p(S)===!0||S.isFramebufferTexture&&S.minFilter!==ui&&S.minFilter!==on)return Math.log2(Math.max(x.width,x.height))+1;else if(S.mipmaps!==void 0&&S.mipmaps.length>0)return S.mipmaps.length;else if(S.isCompressedTexture&&Array.isArray(S.image))return x.mipmaps.length;else return 1}function R(S){let x=S.target;if(x.removeEventListener("dispose",R),T(x),x.isVideoTexture)u.delete(x);if(x.isHTMLTexture)d.delete(x)}function v(S){let x=S.target;x.removeEventListener("dispose",v),D(x)}function T(S){let x=i.get(S);if(x.__webglInit===void 0)return;let P=S.source,B=f.get(P);if(B){let nt=B[x.__cacheKey];if(nt.usedTimes--,nt.usedTimes===0)G(S);if(Object.keys(B).length===0)f.delete(P)}i.remove(S)}function G(S){let x=i.get(S);t.deleteTexture(x.__webglTexture);let P=S.source,B=f.get(P);delete B[x.__cacheKey],a.memory.textures--}function D(S){let x=i.get(S);if(S.depthTexture)S.depthTexture.dispose(),i.remove(S.depthTexture);if(S.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(x.__webglFramebuffer[B]))for(let nt=0;nt<x.__webglFramebuffer[B].length;nt++)t.deleteFramebuffer(x.__webglFramebuffer[B][nt]);else t.deleteFramebuffer(x.__webglFramebuffer[B]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[B])}else{if(Array.isArray(x.__webglFramebuffer))for(let B=0;B<x.__webglFramebuffer.length;B++)t.deleteFramebuffer(x.__webglFramebuffer[B]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let B=0;B<x.__webglColorRenderbuffer.length;B++)if(x.__webglColorRenderbuffer[B])t.deleteRenderbuffer(x.__webglColorRenderbuffer[B])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=S.textures;for(let B=0,nt=P.length;B<nt;B++){let K=i.get(P[B]);if(K.__webglTexture)t.deleteTexture(K.__webglTexture),a.memory.textures--;i.remove(P[B])}i.remove(S)}let U=0;function et(){U=0}function L(){return U}function V(S){U=S}function tt(){let S=U;if(S>=s.maxTextures)Xt("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures);return U+=1,S}function q(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function ut(S,x){let P=i.get(S);if(S.isVideoTexture)Rt(S);if(S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&P.__version!==S.version){let B=S.image;if(B===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(P,S,x);return}}else if(S.isExternalTexture)P.__webglTexture=S.sourceTexture?S.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+x)}function j(S,x){let P=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){xt(P,S,x);return}else if(S.isExternalTexture)P.__webglTexture=S.sourceTexture?S.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+x)}function ot(S,x){let P=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){xt(P,S,x);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+x)}function lt(S,x){let P=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&P.__version!==S.version){Pt(P,S,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+x)}let Nt={[ys]:t.REPEAT,[Ea]:t.CLAMP_TO_EDGE,[Lu]:t.MIRRORED_REPEAT},Ft={[ui]:t.NEAREST,[Nu]:t.NEAREST_MIPMAP_NEAREST,[hr]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Ta]:t.LINEAR_MIPMAP_NEAREST,[wi]:t.LINEAR_MIPMAP_LINEAR},re={[ku]:t.NEVER,[Yu]:t.ALWAYS,[Vu]:t.LESS,[La]:t.LEQUAL,[Wu]:t.EQUAL,[Na]:t.GEQUAL,[Xu]:t.GREATER,[qu]:t.NOTEQUAL};function Zt(S,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===Ta||x.magFilter===hr||x.magFilter===wi||x.minFilter===on||x.minFilter===Ta||x.minFilter===hr||x.minFilter===wi))Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(S,t.TEXTURE_WRAP_S,Nt[x.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,Nt[x.wrapT]),S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)t.texParameteri(S,t.TEXTURE_WRAP_R,Nt[x.wrapR]);if(t.texParameteri(S,t.TEXTURE_MAG_FILTER,Ft[x.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Ft[x.minFilter]),x.compareFunction)t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,re[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ui)return;if(x.minFilter!==hr&&x.minFilter!==wi)return;if(x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Q(S,x){let P=!1;if(S.__webglInit===void 0)S.__webglInit=!0,x.addEventListener("dispose",R);let B=x.source,nt=f.get(B);if(nt===void 0)nt={},f.set(B,nt);let K=q(x);if(K!==S.__cacheKey){if(nt[K]===void 0)nt[K]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0;nt[K].usedTimes++;let mt=nt[S.__cacheKey];if(mt!==void 0){if(nt[S.__cacheKey].usedTimes--,mt.usedTimes===0)G(x)}S.__cacheKey=K,S.__webglTexture=nt[K].texture}return P}function gt(S,x,P){return Math.floor(Math.floor(S/P)/x)}function it(S,x,P,B){let K=S.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,P,B,x.data);else{K.sort((Vt,Tt)=>Vt.start-Tt.start);let mt=0;for(let Vt=1;Vt<K.length;Vt++){let Tt=K[mt],_t=K[Vt],Wt=Tt.start+Tt.count,qt=gt(_t.start,x.width,4),he=gt(Tt.start,x.width,4);if(_t.start<=Wt+1&&qt===he&&gt(_t.start+_t.count-1,x.width,4)===qt)Tt.count=Math.max(Tt.count,_t.start+_t.count-Tt.start);else++mt,K[mt]=_t}K.length=mt+1;let Z=n.getParameter(t.UNPACK_ROW_LENGTH),rt=n.getParameter(t.UNPACK_SKIP_PIXELS),bt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Vt=0,Tt=K.length;Vt<Tt;Vt++){let _t=K[Vt],Wt=Math.floor(_t.start/4),qt=Math.ceil(_t.count/4),he=Wt%x.width,O=Math.floor(Wt/x.width),St=qt,at=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,he),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,he,O,St,1,P,B,x.data)}S.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(t.UNPACK_SKIP_ROWS,bt)}}function xt(S,x,P){let B=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)B=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)B=t.TEXTURE_3D;let nt=Q(S,x),K=x.source;n.bindTexture(B,S.__webglTexture,t.TEXTURE0+P);let mt=i.get(K);if(K.version!==mt.__version||nt===!0){if(n.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=ie.getPrimaries(ie.workingColorSpace),Et=x.colorSpace===Ii?null:ie.getPrimaries(x.colorSpace),Dt=x.colorSpace===Ii||at===Et?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let rt=m(x.image,!1,s.maxTextureSize);rt=kt(x,rt);let bt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type),Tt=_(x.internalFormat,bt,Vt,x.normalized,x.colorSpace,x.isVideoTexture);Zt(B,x);let _t,Wt=x.mipmaps,qt=x.isVideoTexture!==!0,he=mt.__version===void 0||nt===!0,O=K.dataReady,St=A(x,rt);if(x.isDepthTexture){if(Tt=E(x.format===Ri,x.type),he)if(qt)n.texStorage2D(t.TEXTURE_2D,1,Tt,rt.width,rt.height);else n.texImage2D(t.TEXTURE_2D,0,Tt,rt.width,rt.height,0,bt,Vt,null)}else if(x.isDataTexture)if(Wt.length>0){if(qt&&he)n.texStorage2D(t.TEXTURE_2D,St,Tt,Wt[0].width,Wt[0].height);for(let at=0,Et=Wt.length;at<Et;at++)if(_t=Wt[at],qt){if(O)n.texSubImage2D(t.TEXTURE_2D,at,0,0,_t.width,_t.height,bt,Vt,_t.data)}else n.texImage2D(t.TEXTURE_2D,at,Tt,_t.width,_t.height,0,bt,Vt,_t.data);x.generateMipmaps=!1}else if(qt){if(he)n.texStorage2D(t.TEXTURE_2D,St,Tt,rt.width,rt.height);if(O)it(x,rt,bt,Vt)}else n.texImage2D(t.TEXTURE_2D,0,Tt,rt.width,rt.height,0,bt,Vt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(qt&&he)n.texStorage3D(t.TEXTURE_2D_ARRAY,St,Tt,Wt[0].width,Wt[0].height,rt.depth);for(let at=0,Et=Wt.length;at<Et;at++)if(_t=Wt[at],x.format!==Un)if(bt!==null)if(qt){if(O)if(x.layerUpdates.size>0){let Dt=bc(_t.width,_t.height,x.format,x.type);for(let dt of x.layerUpdates){let Ct=_t.data.subarray(dt*Dt/_t.data.BYTES_PER_ELEMENT,(dt+1)*Dt/_t.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,at,0,0,dt,_t.width,_t.height,1,bt,Ct)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,rt.depth,bt,_t.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,at,Tt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(qt){if(O)n.texSubImage3D(t.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,rt.depth,bt,Vt,_t.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,at,Tt,_t.width,_t.height,rt.depth,0,bt,Vt,_t.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(qt&&he)n.texStorage2D(t.TEXTURE_2D,St,Tt,Wt[0].width,Wt[0].height);for(let at=0,Et=Wt.length;at<Et;at++)if(_t=Wt[at],x.format!==Un)if(bt!==null)if(qt){if(O)n.compressedTexSubImage2D(t.TEXTURE_2D,at,0,0,_t.width,_t.height,bt,_t.data)}else n.compressedTexImage2D(t.TEXTURE_2D,at,Tt,_t.width,_t.height,0,_t.data);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(qt){if(O)n.texSubImage2D(t.TEXTURE_2D,at,0,0,_t.width,_t.height,bt,Vt,_t.data)}else n.texImage2D(t.TEXTURE_2D,at,Tt,_t.width,_t.height,0,bt,Vt,_t.data)}else if(x.isDataArrayTexture)if(qt){if(he)n.texStorage3D(t.TEXTURE_2D_ARRAY,St,Tt,rt.width,rt.height,rt.depth);if(O)if(x.layerUpdates.size>0){let at=bc(rt.width,rt.height,x.format,x.type);for(let Et of x.layerUpdates){let Dt=rt.data.subarray(Et*at/rt.data.BYTES_PER_ELEMENT,(Et+1)*at/rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Et,rt.width,rt.height,1,bt,Vt,Dt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,Vt,rt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Tt,rt.width,rt.height,rt.depth,0,bt,Vt,rt.data);else if(x.isData3DTexture)if(qt){if(he)n.texStorage3D(t.TEXTURE_3D,St,Tt,rt.width,rt.height,rt.depth);if(O)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,Vt,rt.data)}else n.texImage3D(t.TEXTURE_3D,0,Tt,rt.width,rt.height,rt.depth,0,bt,Vt,rt.data);else if(x.isFramebufferTexture){if(he)if(qt)n.texStorage2D(t.TEXTURE_2D,St,Tt,rt.width,rt.height);else{let{width:at,height:Et}=rt;for(let Dt=0;Dt<St;Dt++)n.texImage2D(t.TEXTURE_2D,Dt,Tt,at,Et,0,bt,Vt,null),at>>=1,Et>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let at=t.canvas;if(!at.hasAttribute("layoutsubtree"))at.setAttribute("layoutsubtree","true");if(rt.parentNode!==at){at.appendChild(rt),d.add(x),at.onpaint=(Et)=>{let Dt=Et.changedElements;for(let dt of d)if(Dt.includes(dt.image))dt.needsUpdate=!0},at.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,rt);else{let{RGBA:Dt,RGBA:dt,UNSIGNED_BYTE:Ct}=t;t.texElementImage2D(t.TEXTURE_2D,0,Dt,dt,Ct,rt)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(qt&&he){let at=Bt(Wt[0]);n.texStorage2D(t.TEXTURE_2D,St,Tt,at.width,at.height)}for(let at=0,Et=Wt.length;at<Et;at++)if(_t=Wt[at],qt){if(O)n.texSubImage2D(t.TEXTURE_2D,at,0,0,bt,Vt,_t)}else n.texImage2D(t.TEXTURE_2D,at,Tt,bt,Vt,_t);x.generateMipmaps=!1}else if(qt){if(he){let at=Bt(rt);n.texStorage2D(t.TEXTURE_2D,St,Tt,at.width,at.height)}if(O)n.texSubImage2D(t.TEXTURE_2D,0,0,0,bt,Vt,rt)}else n.texImage2D(t.TEXTURE_2D,0,Tt,bt,Vt,rt);if(p(x))b(B);if(mt.__version=K.version,x.onUpdate)x.onUpdate(x)}S.__version=x.version}function Pt(S,x,P){if(x.image.length!==6)return;let B=Q(S,x),nt=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+P);let K=i.get(nt);if(nt.version!==K.__version||B===!0){n.activeTexture(t.TEXTURE0+P);let mt=ie.getPrimaries(ie.workingColorSpace),Z=x.colorSpace===Ii?null:ie.getPrimaries(x.colorSpace),rt=x.colorSpace===Ii||mt===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let bt=x.isCompressedTexture||x.image[0].isCompressedTexture,Vt=x.image[0]&&x.image[0].isDataTexture,Tt=[];for(let dt=0;dt<6;dt++){if(!bt&&!Vt)Tt[dt]=m(x.image[dt],!0,s.maxCubemapSize);else Tt[dt]=Vt?x.image[dt].image:x.image[dt];Tt[dt]=kt(x,Tt[dt])}let _t=Tt[0],Wt=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),he=_(x.internalFormat,Wt,qt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,St=K.__version===void 0||B===!0,at=nt.dataReady,Et=A(x,_t);Zt(t.TEXTURE_CUBE_MAP,x);let Dt;if(bt){if(O&&St)n.texStorage2D(t.TEXTURE_CUBE_MAP,Et,he,_t.width,_t.height);for(let dt=0;dt<6;dt++){Dt=Tt[dt].mipmaps;for(let Ct=0;Ct<Dt.length;Ct++){let Kt=Dt[Ct];if(x.format!==Un)if(Wt!==null)if(O){if(at)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,Kt.width,Kt.height,Wt,Kt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,he,Kt.width,Kt.height,0,Kt.data);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(O){if(at)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,Kt.width,Kt.height,Wt,qt,Kt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,he,Kt.width,Kt.height,0,Wt,qt,Kt.data)}}}else{if(Dt=x.mipmaps,O&&St){if(Dt.length>0)Et++;let dt=Bt(Tt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Et,he,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Vt){if(O){if(at)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Tt[dt].width,Tt[dt].height,Wt,qt,Tt[dt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,Tt[dt].width,Tt[dt].height,0,Wt,qt,Tt[dt].data);for(let Ct=0;Ct<Dt.length;Ct++){let Ee=Dt[Ct].image[dt].image;if(O){if(at)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,Ee.width,Ee.height,Wt,qt,Ee.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,he,Ee.width,Ee.height,0,Wt,qt,Ee.data)}}else{if(O){if(at)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Wt,qt,Tt[dt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,Wt,qt,Tt[dt]);for(let Ct=0;Ct<Dt.length;Ct++){let Kt=Dt[Ct];if(O){if(at)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,Wt,qt,Kt.image[dt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,he,Wt,qt,Kt.image[dt])}}}if(p(x))b(t.TEXTURE_CUBE_MAP);if(K.__version=nt.version,x.onUpdate)x.onUpdate(x)}S.__version=x.version}function Mt(S,x,P,B,nt,K){let mt=r.convert(P.format,P.colorSpace),Z=r.convert(P.type),rt=_(P.internalFormat,mt,Z,P.normalized,P.colorSpace),bt=i.get(x),Vt=i.get(P);if(Vt.__renderTarget=x,!bt.__hasExternalTextures){let Tt=Math.max(1,x.width>>K),_t=Math.max(1,x.height>>K);if(nt===t.TEXTURE_3D||nt===t.TEXTURE_2D_ARRAY)n.texImage3D(nt,K,rt,Tt,_t,x.depth,0,mt,Z,null);else n.texImage2D(nt,K,rt,Tt,_t,0,mt,Z,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,S),C(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,nt,Vt.__webglTexture,0,ct(x));else if(nt===t.TEXTURE_2D||nt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,B,nt,Vt.__webglTexture,K);n.bindFramebuffer(t.FRAMEBUFFER,null)}function jt(S,x,P){if(t.bindRenderbuffer(t.RENDERBUFFER,S),x.depthBuffer){let B=x.depthTexture,nt=B&&B.isDepthTexture?B.type:null,K=E(x.stencilBuffer,nt),mt=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(C(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(x),K,x.width,x.height);else if(P)t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(x),K,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,mt,t.RENDERBUFFER,S)}else{let B=x.textures;for(let nt=0;nt<B.length;nt++){let K=B[nt],mt=r.convert(K.format,K.colorSpace),Z=r.convert(K.type),rt=_(K.internalFormat,mt,Z,K.normalized,K.colorSpace);if(C(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(x),rt,x.width,x.height);else if(P)t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(x),rt,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,rt,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function N(S,x,P){let B=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(x.depthTexture);if(nt.__renderTarget=x,!nt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(B){if(nt.__webglInit===void 0)nt.__webglInit=!0,x.depthTexture.addEventListener("dispose",R);if(nt.__webglTexture===void 0){nt.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,nt.__webglTexture),Zt(t.TEXTURE_CUBE_MAP,x.depthTexture);let bt=r.convert(x.depthTexture.format),Vt=r.convert(x.depthTexture.type),Tt;if(x.depthTexture.format===Ai)Tt=t.DEPTH_COMPONENT24;else if(x.depthTexture.format===Ri)Tt=t.DEPTH24_STENCIL8;for(let _t=0;_t<6;_t++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Tt,x.width,x.height,0,bt,Vt,null)}}else ut(x.depthTexture,0);let K=nt.__webglTexture,mt=ct(x),Z=B?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,rt=x.depthTexture.format===Ri?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ai)if(C(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,rt,Z,K,0,mt);else t.framebufferTexture2D(t.FRAMEBUFFER,rt,Z,K,0);else if(x.depthTexture.format===Ri)if(C(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,rt,Z,K,0,mt);else t.framebufferTexture2D(t.FRAMEBUFFER,rt,Z,K,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(S){let x=i.get(S),P=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let B=S.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(B){let nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,B.removeEventListener("dispose",nt)};B.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=B}if(S.depthTexture&&!x.__autoAllocateDepthBuffer)if(P)for(let B=0;B<6;B++)N(x.__webglFramebuffer[B],S,B);else{let B=S.texture.mipmaps;if(B&&B.length>0)N(x.__webglFramebuffer[0],S,0);else N(x.__webglFramebuffer,S,0)}else if(P){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]===void 0)x.__webglDepthbuffer[B]=t.createRenderbuffer(),jt(x.__webglDepthbuffer[B],S,!1);else{let nt=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[B];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,nt,t.RENDERBUFFER,K)}}else{let B=S.texture.mipmaps;if(B&&B.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),jt(x.__webglDepthbuffer,S,!1);else{let nt=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,nt,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Y(S,x,P){let B=i.get(S);if(x!==void 0)Mt(B.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(P!==void 0)H(S)}function k(S){let x=S.texture,P=i.get(S),B=i.get(x);S.addEventListener("dispose",v);let nt=S.textures,K=S.isWebGLCubeRenderTarget===!0,mt=nt.length>1;if(!mt){if(B.__webglTexture===void 0)B.__webglTexture=t.createTexture();B.__version=x.version,a.memory.textures++}if(K){P.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[Z]=[];for(let rt=0;rt<x.mipmaps.length;rt++)P.__webglFramebuffer[Z][rt]=t.createFramebuffer()}else P.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)P.__webglFramebuffer[Z]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(mt)for(let Z=0,rt=nt.length;Z<rt;Z++){let bt=i.get(nt[Z]);if(bt.__webglTexture===void 0)bt.__webglTexture=t.createTexture(),a.memory.textures++}if(S.samples>0&&C(S)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Z=0;Z<nt.length;Z++){let rt=nt[Z];P.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[Z]);let bt=r.convert(rt.format,rt.colorSpace),Vt=r.convert(rt.type),Tt=_(rt.internalFormat,bt,Vt,rt.normalized,rt.colorSpace,S.isXRRenderTarget===!0),_t=ct(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,_t,Tt,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,P.__webglColorRenderbuffer[Z])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer)P.__webglDepthRenderbuffer=t.createRenderbuffer(),jt(P.__webglDepthRenderbuffer,S,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),Zt(t.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Mt(P.__webglFramebuffer[Z][rt],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt);else Mt(P.__webglFramebuffer[Z],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);if(p(x))b(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(mt){for(let Z=0,rt=nt.length;Z<rt;Z++){let bt=nt[Z],Vt=i.get(bt),Tt=t.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)Tt=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Tt,Vt.__webglTexture),Zt(Tt,bt),Mt(P.__webglFramebuffer,S,bt,t.COLOR_ATTACHMENT0+Z,Tt,0),p(bt))b(Tt)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)Z=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Z,B.__webglTexture),Zt(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Mt(P.__webglFramebuffer[rt],S,x,t.COLOR_ATTACHMENT0,Z,rt);else Mt(P.__webglFramebuffer,S,x,t.COLOR_ATTACHMENT0,Z,0);if(p(x))b(Z);n.unbindTexture()}if(S.depthBuffer)H(S)}function st(S){let x=S.textures;for(let P=0,B=x.length;P<B;P++){let nt=x[P];if(p(nt)){let K=w(S),mt=i.get(nt).__webglTexture;n.bindTexture(K,mt),b(K),n.unbindTexture()}}}let ft=[],pt=[];function yt(S){if(S.samples>0){if(C(S)===!1){let{textures:x,width:P,height:B}=S,nt=t.COLOR_BUFFER_BIT,K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,mt=i.get(S),Z=x.length>1;if(Z)for(let bt=0;bt<x.length;bt++)n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+bt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+bt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let rt=S.texture.mipmaps;if(rt&&rt.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(S.resolveDepthBuffer){if(S.depthBuffer)nt|=t.DEPTH_BUFFER_BIT;if(S.stencilBuffer&&S.resolveStencilBuffer)nt|=t.STENCIL_BUFFER_BIT}if(Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,mt.__webglColorRenderbuffer[bt]);let Vt=i.get(x[bt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Vt,0)}if(t.blitFramebuffer(0,0,P,B,0,0,P,B,nt,t.NEAREST),l===!0){if(ft.length=0,pt.length=0,ft.push(t.COLOR_ATTACHMENT0+bt),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1)ft.push(K),pt.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ft)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let bt=0;bt<x.length;bt++){n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+bt,t.RENDERBUFFER,mt.__webglColorRenderbuffer[bt]);let Vt=i.get(x[bt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+bt,t.TEXTURE_2D,Vt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let x=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ct(S){return Math.min(s.maxSamples,S.samples)}function C(S){let x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(S){let x=a.render.frame;if(u.get(S)!==x)u.set(S,x),S.update()}function kt(S,x){let{colorSpace:P,format:B,type:nt}=S;if(S.isCompressedTexture===!0||S.isVideoTexture===!0)return x;if(P!==Wl&&P!==Ii)if(ie.getTransfer(P)===_e){if(B!==Un||nt!==wn)Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Yt("WebGLTextures: Unsupported texture color space:",P);return x}function Bt(S){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement)c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height;else if(typeof VideoFrame<"u"&&S instanceof VideoFrame)c.width=S.displayWidth,c.height=S.displayHeight;else c.width=S.width,c.height=S.height;return c}this.allocateTextureUnit=tt,this.resetTextureUnits=et,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=ut,this.setTexture2DArray=j,this.setTexture3D=ot,this.setTextureCube=lt,this.rebindTextures=Y,this.setupRenderTarget=k,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=C,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function b_(t,e){function n(i,s=Ii){let r,a=ie.getTransfer(s);if(i===wn)return t.UNSIGNED_BYTE;if(i===ll)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Du)return t.BYTE;if(i===Uu)return t.SHORT;if(i===ur)return t.UNSIGNED_SHORT;if(i===ol)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===Be)return t.HALF_FLOAT;if(i===Bu)return t.ALPHA;if(i===zu)return t.RGB;if(i===Un)return t.RGBA;if(i===Ai)return t.DEPTH_COMPONENT;if(i===Ri)return t.DEPTH_STENCIL;if(i===Hu)return t.RED;if(i===hl)return t.RED_INTEGER;if(i===Ci)return t.RG;if(i===ul)return t.RG_INTEGER;if(i===dl)return t.RGBA_INTEGER;if(i===wa||i===Aa||i===Ra||i===Ca)if(a===_e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===_l||i===vl||i===yl||i===Ml||i===Ia||i===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xl||i===_l)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yl)return r.COMPRESSED_R11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ia)return r.COMPRESSED_RG11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ll||i===Nl||i===Dl||i===Ul||i===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===Bl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ol)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hl||i===Gl||i===Pa||i===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ms)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`;class kd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wa(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:E_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new Ze(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vd extends Qn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null,g=typeof XRWebGLBinding<"u",y=new kd,m={},p=e.getContextAttributes(),b=null,w=null,_=[],E=[],A=new ht,R=null,v=null,T=new Xe;T.viewport=new be;let G=new Xe;G.viewport=new be;let D=[T,G],U=new vc,et=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let gt=_[Q];if(gt===void 0)gt=new fr,_[Q]=gt;return gt.getTargetRaySpace()},this.getControllerGrip=function(Q){let gt=_[Q];if(gt===void 0)gt=new fr,_[Q]=gt;return gt.getGripSpace()},this.getHand=function(Q){let gt=_[Q];if(gt===void 0)gt=new fr,_[Q]=gt;return gt.getHandSpace()};function V(Q){let gt=E.indexOf(Q.inputSource);if(gt===-1)return;let it=_[gt];if(it!==void 0)it.update(Q.inputSource,Q.frame,l||r),it.dispatchEvent({type:Q.type,data:Q.inputSource})}function tt(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",q);for(let Q=0;Q<_.length;Q++){let gt=E[Q];if(gt===null)continue;E[Q]=null,_[Q].disconnect(gt)}et=null,L=null,y.reset();for(let Q in m)delete m[Q];if(t.setRenderTarget(b),h=null,d=null,u=null,i=null,w=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),v!==null){let Q=v.camera;Q.fov=v.fov,Q.zoom=v.zoom,Q.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){if(s=Q,n.isPresenting===!0)Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){if(a=Q,n.isPresenting===!0)Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&g)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0)await e.makeXRCompatible();if(R=t.getPixelRatio(),t.getSize(A),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Ie(h.framebufferWidth,h.framebufferHeight,{format:Un,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let it=null,xt=null,Pt=null;if(p.depth)Pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Ri:Ai,xt=p.stencil?Ms:di;let Mt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ie(d.textureWidth,d.textureHeight,{format:Un,type:wn,depthTexture:new Li(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(Q){for(let gt=0;gt<Q.removed.length;gt++){let it=Q.removed[gt],xt=E.indexOf(it);if(xt>=0)E[xt]=null,_[xt].disconnect(it)}for(let gt=0;gt<Q.added.length;gt++){let it=Q.added[gt],xt=E.indexOf(it);if(xt===-1){for(let Mt=0;Mt<_.length;Mt++)if(Mt>=E.length){E.push(it),xt=Mt;break}else if(E[Mt]===null){E[Mt]=it,xt=Mt;break}if(xt===-1)break}let Pt=_[xt];if(Pt)Pt.connect(it)}}let ut=new I,j=new I;function ot(Q,gt,it){ut.setFromMatrixPosition(gt.matrixWorld),j.setFromMatrixPosition(it.matrixWorld);let xt=ut.distanceTo(j),Pt=gt.projectionMatrix.elements,Mt=it.projectionMatrix.elements,jt=Pt[14]/(Pt[10]-1),N=Pt[14]/(Pt[10]+1),H=(Pt[9]+1)/Pt[5],Y=(Pt[9]-1)/Pt[5],k=(Pt[8]-1)/Pt[0],st=(Mt[8]+1)/Mt[0],ft=jt*k,pt=jt*st,yt=xt/(-k+st),ct=yt*-k;if(gt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ct),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pt[10]===-1)Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let C=jt+yt,Rt=N+yt,kt=ft-ct,Bt=pt+(xt-ct),S=H*N/Rt*C,x=Y*N/Rt*C;Q.projectionMatrix.makePerspective(kt,Bt,S,x,C,Rt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function lt(Q,gt){if(gt===null)Q.matrixWorld.copy(Q.matrix);else Q.matrixWorld.multiplyMatrices(gt.matrixWorld,Q.matrix);Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let{near:gt,far:it}=Q;if(y.texture!==null){if(y.depthNear>0)gt=y.depthNear;if(y.depthFar>0)it=y.depthFar}if(U.near=G.near=T.near=gt,U.far=G.far=T.far=it,et!==U.near||L!==U.far)i.updateRenderState({depthNear:U.near,depthFar:U.far}),et=U.near,L=U.far;U.layers.mask=Q.layers.mask|6,T.layers.mask=U.layers.mask&-5,G.layers.mask=U.layers.mask&-3;let xt=Q.parent,Pt=U.cameras;lt(U,xt);for(let Mt=0;Mt<Pt.length;Mt++)lt(Pt[Mt],xt);if(Pt.length===2)ot(U,T,G);else U.projectionMatrix.copy(T.projectionMatrix);if(v===null&&Q.isPerspectiveCamera)v={camera:Q,fov:Q.fov,zoom:Q.zoom};Nt(Q,U,xt)};function Nt(Q,gt,it){if(it===null)Q.matrix.copy(gt.matrixWorld);else Q.matrix.copy(it.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(gt.matrixWorld);if(Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Q.isPerspectiveCamera)Q.fov=Ks*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1}this.getCamera=function(){return U},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(Q){if(o=Q,d!==null)d.fixedFoveation=Q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=Q},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(U)},this.getCameraTexture=function(Q){return m[Q]};let Ft=null;function re(Q,gt){if(c=gt.getViewerPose(l||r),f=gt,c!==null){let it=c.views;if(h!==null)t.setRenderTargetFramebuffer(w,h.framebuffer),t.setRenderTarget(w);let xt=!1;if(it.length!==U.cameras.length)U.cameras.length=0,xt=!0;for(let N=0;N<it.length;N++){let H=it[N],Y=null;if(h!==null)Y=h.getViewport(H);else{let st=u.getViewSubImage(d,H);if(Y=st.viewport,N===0)t.setRenderTargetTextures(w,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(w)}let k=D[N];if(k===void 0)k=new Xe,k.layers.enable(N),k.viewport=new be,D[N]=k;if(k.matrix.fromArray(H.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(H.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Y.x,Y.y,Y.width,Y.height),N===0)U.matrix.copy(k.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);if(xt===!0)U.cameras.push(k)}let Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let N=u.getDepthInformation(it[0]);if(N&&N.isValid&&N.texture)y.init(N,i.renderState)}if(Pt&&Pt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let N=0;N<it.length;N++){let H=it[N].camera;if(H){let Y=m[H];if(!Y)Y=new Wa,m[H]=Y;let k=u.getCameraImage(H);Y.sourceTexture=k}}}}for(let it=0;it<_.length;it++){let xt=E[it],Pt=_[it];if(xt!==null&&Pt!==void 0)Pt.update(xt,gt,l||r)}if(Ft)Ft(Q,gt);if(gt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:gt});f=null}let Zt=new Pd;Zt.setAnimationLoop(re),this.setAnimationLoop=function(Q){Ft=Q},this.dispose=function(){}}}var w_=new te,Wd=new Jt;Wd.set(-1,0,0,0,1,0,0,0,1);function A_(t,e){function n(m,p){if(m.matrixAutoUpdate===!0)m.updateMatrix();p.value.copy(m.matrix)}function i(m,p){if(p.color.getRGB(m.fogColor.value,rc(t)),p.isFog)m.fogNear.value=p.near,m.fogFar.value=p.far;else if(p.isFogExp2)m.fogDensity.value=p.density}function s(m,p,b,w,_){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(m,p);else if(p.isMeshLambertMaterial){if(r(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(m,p),d(m,p);else if(p.isMeshPhongMaterial){if(r(m,p),u(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(m,p),h(m,p),p.isMeshPhysicalMaterial)f(m,p,_)}else if(p.isMeshMatcapMaterial)r(m,p),g(m,p);else if(p.isMeshDepthMaterial)r(m,p);else if(p.isMeshDistanceMaterial)r(m,p),y(m,p);else if(p.isMeshNormalMaterial)r(m,p);else if(p.isLineBasicMaterial){if(a(m,p),p.isLineDashedMaterial)o(m,p)}else if(p.isPointsMaterial)l(m,p,b,w);else if(p.isSpriteMaterial)c(m,p);else if(p.isShadowMaterial)m.color.value.copy(p.color),m.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(m,p){if(m.opacity.value=p.opacity,p.color)m.diffuse.value.copy(p.color);if(p.emissive)m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.bumpMap){if(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je)m.bumpScale.value*=-1}if(p.normalMap){if(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je)m.normalScale.value.negate()}if(p.displacementMap)m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias;if(p.emissiveMap)m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform);if(p.specularMap)m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest;let b=e.get(p),w=b.envMap,_=b.envMapRotation;if(w){if(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Wd);m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio}if(p.lightMap)m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform);if(p.aoMap)m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform)}function a(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map)m.map.value=p.map,n(p.map,m.mapTransform)}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*0.5,p.map)m.map.value=p.map,n(p.map,m.uvTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function c(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,0.0001)}function d(m,p){if(p.gradientMap)m.gradientMap.value=p.gradientMap}function h(m,p){if(m.metalness.value=p.metalness,p.metalnessMap)m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=p.roughness,p.roughnessMap)m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform);if(p.envMap)m.envMapIntensity.value=p.envMapIntensity}function f(m,p,b){if(m.ior.value=p.ior,p.sheen>0){if(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform);if(p.sheenRoughnessMap)m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform);if(p.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je)m.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)m.dispersion.value=p.dispersion;if(p.retroreflectivity>0)m.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform);if(p.iridescenceThicknessMap)m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(p.transmission>0){if(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap)m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=p.thickness,p.thicknessMap)m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap)m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform);if(p.specularIntensityMap)m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,p){if(p.matcap)m.matcap.value=p.matcap}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function R_(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let A=E.program;i.uniformBlockBinding(_,A)}function c(_,E){let A=s[_.id];if(A===void 0)m(_),A=u(_),s[_.id]=A,_.addEventListener("dispose",b);let R=E.program;i.updateUBOMapping(_,R);let v=e.render.frame;if(r[_.id]!==v)h(_),r[_.id]=v}function u(_){let E=d();_.__bindingPointIndex=E;let A=t.createBuffer(),R=_.__size,v=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,R,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let E=s[_.id],A=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let v=0,T=A.length;v<T;v++){let G=A[v];if(Array.isArray(G))for(let D=0,U=G.length;D<U;D++)f(G[D],v,D,R);else f(G,v,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(_,E,A,R){if(y(_,E,A,R)===!0){let{__offset:v,value:T}=_;if(Array.isArray(T)){let G=0;for(let D=0;D<T.length;D++){let U=T[D],et=p(U);if(g(U,_.__data,G),typeof U!=="number"&&typeof U!=="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U))G+=et.storage/Float32Array.BYTES_PER_ELEMENT}}else g(T,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,_.__data)}}function g(_,E,A){if(typeof _==="number"||typeof _==="boolean")E[0]=_;else if(_.isMatrix3)E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0;else if(ArrayBuffer.isView(_))E.set(new _.constructor(_.buffer,_.byteOffset,E.length));else _.toArray(E,A)}function y(_,E,A,R){let v=_.value,T=E+"_"+A;if(R[T]===void 0){if(typeof v==="number"||typeof v==="boolean")R[T]=v;else if(ArrayBuffer.isView(v))R[T]=v.slice();else R[T]=v.clone();return!0}else{let G=R[T];if(typeof v==="number"||typeof v==="boolean"){if(G!==v)return R[T]=v,!0}else if(ArrayBuffer.isView(v))return!0;else if(G.equals(v)===!1)return G.copy(v),!0}return!1}function m(_){let E=_.uniforms,A=0,R=16;for(let T=0,G=E.length;T<G;T++){let D=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,et=D.length;U<et;U++){let L=D[U],V=Array.isArray(L.value)?L.value:[L.value];for(let tt=0,q=V.length;tt<q;tt++){let ut=V[tt],j=p(ut),ot=A%R,lt=ot%j.boundary,Nt=ot+lt;if(A+=lt,Nt!==0&&R-Nt<j.storage)A+=R-Nt;L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=j.storage}}}let v=A%R;if(v>0)A+=R-v;return _.__size=A,_.__cache={},this}function p(_){let E={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")E.boundary=4,E.storage=4;else if(_.isVector2)E.boundary=8,E.storage=8;else if(_.isVector3||_.isColor)E.boundary=16,E.storage=12;else if(_.isVector4)E.boundary=16,E.storage=16;else if(_.isMatrix3)E.boundary=48,E.storage=48;else if(_.isMatrix4)E.boundary=64,E.storage=64;else if(_.isTexture)Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))E.boundary=16,E.storage=_.byteLength;else Xt("WebGLRenderer: Unsupported uniform value type.",_);return E}function b(_){let E=_.target;E.removeEventListener("dispose",b);let A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let _ in s)t.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function I_(){if(Bn===null)Bn=new Ga(C_,16,16,Ci,Be),Bn.name="DFG_LUT",Bn.minFilter=on,Bn.magFilter=on,Bn.wrapS=Ea,Bn.wrapT=Ea,Bn.generateMipmaps=!1,Bn.needsUpdate=!0;return Bn}class Nc{constructor(t={}){let{canvas:e=Zu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=wn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let g=h,y=new Set([dl,ul,hl]),m=new Set([wn,di,ur,Ms,ll,cl]),p=new Uint32Array(4),b=new Int32Array(4),w=new I,_=null,E=null,A=[],R=[],v=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,G=!1,D=null,U=null,et=null,L=null;this._outputColorSpace=Ss;let V=0,tt=0,q=null,ut=-1,j=null,ot=new be,lt=new be,Nt=null,Ft=new vt(0),re=0,Zt=e.width,Q=e.height,gt=1,it=null,xt=null,Pt=new be(0,0,Zt,Q),Mt=new be(0,0,Zt,Q),jt=!1,N=new xr,H=!1,Y=!1,k=new te,st=new I,ft=new be,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function ct(){return q===null?gt:1}let C=n;function Rt(M,F){return e.getContext(M,F)}let kt,Bt,S,x,P,B,nt,K,mt,Z,rt,bt,Vt,Tt,_t,Wt,qt,he,O,St,at,Et,Dt;try{let M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Qh}`);if(e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",ue,!1),C===null){if(C=Rt("webgl2",M),C===null)if(Rt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(M){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),Yt("WebGLRenderer: "+M.message),M}function dt(){if(kt=new Og(C),kt.init(),at=new b_(C,kt),Bt=new Ag(C,kt,t,at),S=new M_(C,kt),Bt.reversedDepthBuffer&&d)S.buffers.depth.setReversed(!0);U=C.createFramebuffer(),et=C.createFramebuffer(),L=C.createFramebuffer(),x=new Hg(C),P=new o_,B=new S_(C,kt,S,P,Bt,at,x),nt=new Fg(T),K=new kp(C),Et=new Tg(C,K),mt=new Bg(C,K,x,Et),Z=new kg(C,mt,K,Et,x),he=new Gg(C,Bt,B),_t=new Rg(P),rt=new a_(T,nt,kt,Bt,Et,_t),bt=new A_(T,P),Vt=new c_,Tt=new m_(kt),qt=new Eg(T,nt,S,Z,f,o),Wt=new y_(T,Z,Bt),Dt=new R_(C,x,Bt,S),O=new wg(C,kt,x),St=new zg(C,kt,x),x.programs=rt.programs,T.capabilities=Bt,T.extensions=kt,T.properties=P,T.renderLists=Vt,T.shadowMap=Wt,T.state=S,T.info=x}if(g!==wn)v=new Wg(g,e.width,e.height,a,i,s);let Ct=new Vd(T,C);this.xr=Ct,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=kt.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=kt.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(M){if(M===void 0)return;gt=M,this.setSize(Zt,Q,!1)},this.getSize=function(M){return M.set(Zt,Q)},this.setSize=function(M,F,J=!0){if(Ct.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Zt=M,Q=F,e.width=Math.floor(M*gt),e.height=Math.floor(F*gt),J===!0)e.style.width=M+"px",e.style.height=F+"px";if(v!==null)v.setSize(e.width,e.height);this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Zt*gt,Q*gt).floor()},this.setDrawingBufferSize=function(M,F,J){Zt=M,Q=F,gt=J,e.width=Math.floor(M*J),e.height=Math.floor(F*J),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(g===wn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ot)},this.getViewport=function(M){return M.copy(Pt)},this.setViewport=function(M,F,J,W){if(M.isVector4)Pt.set(M.x,M.y,M.z,M.w);else Pt.set(M,F,J,W);S.viewport(ot.copy(Pt).multiplyScalar(gt).round())},this.getScissor=function(M){return M.copy(Mt)},this.setScissor=function(M,F,J,W){if(M.isVector4)Mt.set(M.x,M.y,M.z,M.w);else Mt.set(M,F,J,W);S.scissor(lt.copy(Mt).multiplyScalar(gt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){S.setScissorTest(jt=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,J=!0){let W=0;if(M){let X=!1;if(q!==null){let Lt=q.texture.format;X=y.has(Lt)}if(X){let Lt=q.texture.type,Ot=m.has(Lt),It=qt.getClearColor(),zt=qt.getClearAlpha(),Gt=It.r,ee=It.g,ae=It.b;if(Ot)p[0]=Gt,p[1]=ee,p[2]=ae,p[3]=zt,C.clearBufferuiv(C.COLOR,0,p);else b[0]=Gt,b[1]=ee,b[2]=ae,b[3]=zt,C.clearBufferiv(C.COLOR,0,b)}else W|=C.COLOR_BUFFER_BIT}if(F)W|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(J)W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(W!==0)C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),qt.dispose(),Vt.dispose(),Tt.dispose(),P.dispose(),nt.dispose(),Z.dispose(),Et.dispose(),Dt.dispose(),rt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ah),Ct.removeEventListener("sessionend",oh),mi.stop()};function Kt(M){M.preventDefault(),Js("WebGLRenderer: Context Lost."),G=!0}function Ee(){Js("WebGLRenderer: Context Restored."),G=!1;let M=x.autoReset,F=Wt.enabled,J=Wt.autoUpdate,W=Wt.needsUpdate,X=Wt.type;dt(),x.autoReset=M,Wt.enabled=F,Wt.autoUpdate=J,Wt.needsUpdate=W,Wt.type=X}function ue(M){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pn(M){let F=M.target;F.removeEventListener("dispose",Pn),kn(F)}function kn(M){Ef(M),P.remove(M)}function Ef(M){let F=P.get(M).programs;if(F!==void 0){if(F.forEach(function(J){rt.releaseProgram(J)}),M.isShaderMaterial)rt.releaseShaderCache(M)}}this.renderBufferDirect=function(M,F,J,W,X,Lt){if(F===null)F=pt;let Ot=X.isMesh&&X.matrixWorld.determinantAffine()<0,It=Af(M,F,J,W,X);S.setMaterial(W,Ot);let zt=J.index,Gt=1;if(W.wireframe===!0){if(zt=mt.getWireframeAttribute(J),zt===void 0)return;Gt=2}let ee=J.drawRange,ae=J.attributes.position,Ht=ee.start*Gt,de=(ee.start+ee.count)*Gt;if(Lt!==null)Ht=Math.max(Ht,Lt.start*Gt),de=Math.min(de,(Lt.start+Lt.count)*Gt);if(zt!==null)Ht=Math.max(Ht,0),de=Math.min(de,zt.count);else if(ae!==void 0&&ae!==null)Ht=Math.max(Ht,0),de=Math.min(de,ae.count);let Fe=de-Ht;if(Fe<0||Fe===1/0)return;Et.setup(X,W,It,J,zt);let Ae,Se=O;if(zt!==null)Ae=K.get(zt),Se=St,Se.setIndex(Ae);if(X.isMesh)if(W.wireframe===!0)S.setLineWidth(W.wireframeLinewidth*ct()),Se.setMode(C.LINES);else Se.setMode(C.TRIANGLES);else if(X.isLine){let $e=W.linewidth;if($e===void 0)$e=1;if(S.setLineWidth($e*ct()),X.isLineSegments)Se.setMode(C.LINES);else if(X.isLineLoop)Se.setMode(C.LINE_LOOP);else Se.setMode(C.LINE_STRIP)}else if(X.isPoints)Se.setMode(C.POINTS);else if(X.isSprite)Se.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(!kt.get("WEBGL_multi_draw")){let{_multiDrawStarts:$e,_multiDrawCounts:Ut,_multiDrawCount:nn}=X,le=zt?K.get(zt).bytesPerElement:1,fn=P.get(W).currentProgram.getUniforms();for(let Ln=0;Ln<nn;Ln++)fn.setValue(C,"_gl_DrawID",Ln),Se.render($e[Ln]/le,Ut[Ln])}else Se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Se.renderInstances(Ht,Fe,X.count);else if(J.isInstancedBufferGeometry){let $e=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ut=Math.min(J.instanceCount,$e);Se.renderInstances(Ht,Fe,Ut)}else Se.render(Ht,Fe)};function rh(M,F,J,W){if(D!==null&&M.isNodeMaterial)D.setObject(W,M);if(H===!0)_t.setState(M,J,!1);if(M.transparent===!0&&M.side===rn&&M.forceSinglePass===!1)M.side=je,M.needsUpdate=!0,kr(M,F,W),M.side=xs,M.needsUpdate=!0,kr(M,F,W),M.side=rn;else kr(M,F,W)}this.compile=function(M,F,J=null){if(J===null)J=M;if(D!==null)D.renderStart(M,F,J);if(E=Tt.get(J),E.init(F),R.push(E),J.traverseVisible(function(X){if(X.isLight&&X.layers.test(F.layers)){if(E.pushLight(X),X.castShadow)E.pushShadow(X)}}),M!==J)M.traverseVisible(function(X){if(X.isLight&&X.layers.test(F.layers)){if(E.pushLight(X),X.castShadow)E.pushShadow(X)}});if(E.setupLights(),D!==null)D.updateLights(E.state.lightsArray);if(Y=this.localClippingEnabled,H=_t.init(this.clippingPlanes,Y),H===!0)_t.setGlobalState(this.clippingPlanes,F);if(D!==null)Wt.render(E.state.shadowsArray,J,F);let W=new Set;if(M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Lt=X.material;if(Lt)if(Array.isArray(Lt))for(let Ot=0;Ot<Lt.length;Ot++){let It=Lt[Ot];rh(It,J,F,X),W.add(It)}else rh(Lt,J,F,X),W.add(Lt)}),E=R.pop(),D!==null)D.renderEnd();return W},this.compileAsync=function(M,F,J=null){let W=this.compile(M,F,J);return new Promise((X)=>{function Lt(){if(W.forEach(function(Ot){let zt=P.get(Ot).currentProgram;if(zt===void 0||zt.isReady())W.delete(Ot)}),W.size===0){X(M);return}setTimeout(Lt,10)}if(kt.get("KHR_parallel_shader_compile")!==null)Lt();else setTimeout(Lt,10)})};let Eo=null;function Tf(M){if(Eo)Eo(M)}function ah(){mi.stop()}function oh(){mi.start()}let mi=new Pd;if(mi.setAnimationLoop(Tf),typeof self<"u")mi.setContext(self);this.setAnimationLoop=function(M){Eo=M,Ct.setAnimationLoop(M),M===null?mi.stop():mi.start()},Ct.addEventListener("sessionstart",ah),Ct.addEventListener("sessionend",oh),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(D!==null)D.renderStart(M,F);let J=Ct.enabled===!0&&Ct.isPresenting===!0,W=v!==null&&(q===null||J)&&v.begin(T,q);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(Ct.enabled===!0&&Ct.isPresenting===!0&&(v===null||v.isCompositing()===!1)){if(Ct.cameraAutoUpdate===!0)Ct.updateCamera(F);F=Ct.getCamera()}if(M.isScene===!0)M.onBeforeRender(T,M,F,q);if(E=Tt.get(M,R.length),E.init(F),E.state.textureUnits=B.getTextureUnits(),R.push(E),k.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),N.setFromProjectionMatrix(k,Yl,F.reversedDepth),Y=this.localClippingEnabled,H=_t.init(this.clippingPlanes,Y),_=Vt.get(M,A.length),_.init(),A.push(_),Ct.enabled===!0&&Ct.isPresenting===!0){let Ot=T.xr.getDepthSensingMesh();if(Ot!==null)To(Ot,F,-1/0,T.sortObjects)}if(To(M,F,0,T.sortObjects),_.finish(),D!==null)D.updateLights(E.state.lightsArray);if(T.sortObjects===!0)_.sort(it,xt);if(yt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,yt)qt.addToRenderList(_,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(H===!0)_t.beginShadows();let X=E.state.shadowsArray;if(Wt.render(X,M,F),H===!0)_t.endShadows();if((W&&v.hasRenderPass())===!1){let{opaque:Ot,transmissive:It}=_;if(E.setupLights(),F.isArrayCamera){let zt=F.cameras;if(It.length>0)for(let Gt=0,ee=zt.length;Gt<ee;Gt++){let ae=zt[Gt];ch(Ot,It,M,ae)}if(yt)qt.render(M);for(let Gt=0,ee=zt.length;Gt<ee;Gt++){let ae=zt[Gt];lh(_,M,ae,ae.viewport)}}else{if(It.length>0)ch(Ot,It,M,F);if(yt)qt.render(M);lh(_,M,F)}}if(q!==null&&tt===0)B.updateMultisampleRenderTarget(q),B.updateRenderTargetMipmap(q);if(W)v.end(T);if(M.isScene===!0)M.onAfterRender(T,M,F);if(Et.resetDefaultState(),ut=-1,j=null,R.pop(),R.length>0){if(E=R[R.length-1],B.setTextureUnits(E.state.textureUnits),H===!0)_t.setGlobalState(T.clippingPlanes,E.state.camera)}else E=null;if(A.pop(),A.length>0)_=A[A.length-1];else _=null;if(D!==null)D.renderEnd()};function To(M,F,J,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(F)}else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight){if(E.pushLight(M),M.castShadow)E.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(N)){if(W)ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(k);let Ot=Z.update(M),It=M.material;if(It.visible)_.push(M,Ot,It,J,ft.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(N)){let Ot=Z.update(M),It=M.material;if(W){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();ft.copy(M.boundingSphere.center)}else{if(Ot.boundingSphere===null)Ot.computeBoundingSphere();ft.copy(Ot.boundingSphere.center)}ft.applyMatrix4(M.matrixWorld).applyMatrix4(k)}if(Array.isArray(It)){let zt=Ot.groups;for(let Gt=0,ee=zt.length;Gt<ee;Gt++){let ae=zt[Gt],Ht=It[ae.materialIndex];if(Ht&&Ht.visible)_.push(M,Ot,Ht,J,ft.z,ae,F)}}else if(It.visible)_.push(M,Ot,It,J,ft.z,null,F)}}}let Lt=M.children;for(let Ot=0,It=Lt.length;Ot<It;Ot++)To(Lt[Ot],F,J,W)}function lh(M,F,J,W){let{opaque:X,transmissive:Lt,transparent:Ot}=M;if(E.setupLightsView(J),H===!0)_t.setGlobalState(T.clippingPlanes,J);if(W)S.viewport(ot.copy(W));if(X.length>0)Gr(X,F,J);if(Lt.length>0)Gr(Lt,F,J);if(Ot.length>0)Gr(Ot,F,J);S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ch(M,F,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ht=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Ie(1,1,{generateMipmaps:!0,type:Ht?Be:wn,minFilter:wi,samples:Math.max(4,Bt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Lt=E.state.transmissionRenderTarget[W.id],Ot=W.viewport||ot;Lt.setSize(Ot.z*T.transmissionResolutionScale,Ot.w*T.transmissionResolutionScale);let It=T.getRenderTarget(),zt=T.getActiveCubeFace(),Gt=T.getActiveMipmapLevel();if(T.setRenderTarget(Lt),T.getClearColor(Ft),re=T.getClearAlpha(),re<1)T.setClearColor(16777215,0.5);if(T.clear(),yt)qt.render(J);let ee=T.toneMapping;T.toneMapping=Tn;let ae=W.viewport;if(W.viewport!==void 0)W.viewport=void 0;if(E.setupLightsView(W),H===!0)_t.setGlobalState(T.clippingPlanes,W);if(Gr(M,J,W),B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let de=0,Fe=F.length;de<Fe;de++){let Ae=F[de],{object:Se,geometry:$e,material:Ut,group:nn}=Ae;if(Ut.side===rn&&Se.layers.test(W.layers)){let le=Ut.side;Ut.side=je,Ut.needsUpdate=!0,hh(Se,J,W,$e,Ut,nn),Ut.side=le,Ut.needsUpdate=!0,Ht=!0}}if(Ht===!0)B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt)}if(T.setRenderTarget(It,zt,Gt),T.setClearColor(Ft,re),ae!==void 0)W.viewport=ae;T.toneMapping=ee}function Gr(M,F,J){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Lt=M.length;X<Lt;X++){let Ot=M[X],{object:It,geometry:zt,group:Gt}=Ot,ee=Ot.material;if(ee.allowOverride===!0&&W!==null)ee=W;if(It.layers.test(J.layers))hh(It,F,J,zt,ee,Gt)}}function hh(M,F,J,W,X,Lt){if(D!==null&&X.isNodeMaterial)D.setObject(M,X);if(M.onBeforeRender(T,F,J,W,X,Lt),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(T,F,J,W,M,Lt),X.transparent===!0&&X.side===rn&&X.forceSinglePass===!1)X.side=je,X.needsUpdate=!0,T.renderBufferDirect(J,F,W,X,M,Lt),X.side=xs,X.needsUpdate=!0,T.renderBufferDirect(J,F,W,X,M,Lt),X.side=rn;else T.renderBufferDirect(J,F,W,X,M,Lt);M.onAfterRender(T,F,J,W,X,Lt)}function kr(M,F,J){if(F.isScene!==!0)F=pt;let W=P.get(M),X=E.state.lights,Lt=E.state.shadowsArray,Ot=X.state.version,It=rt.getParameters(M,X.state,Lt,F,J,E.state.lightProbeGridArray),zt=rt.getProgramCacheKey(It),Gt=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(W.envMap=nt.get(M.envMap||W.environment,ee),W.envMapRotation=W.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Gt===void 0)M.addEventListener("dispose",Pn),Gt=new Map,W.programs=Gt;let ae=Gt.get(zt);if(ae!==void 0){if(W.currentProgram===ae&&W.lightsStateVersion===Ot)return dh(M,It),ae}else{if(It.uniforms=rt.getUniforms(M),D!==null&&M.isNodeMaterial)D.build(M,J,It);M.onBeforeCompile(It,T),ae=rt.acquireProgram(It,zt),Gt.set(zt,ae),W.uniforms=It.uniforms}let Ht=W.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)Ht.clippingPlanes=_t.uniform;if(dh(M,It),W.needsLights=Cf(M),W.lightsStateVersion=Ot,W.needsLights)Ht.ambientLightColor.value=X.state.ambient,Ht.lightProbe.value=X.state.probe,Ht.sunLights.value=X.state.sun,Ht.sunLightShadows.value=X.state.sunShadow,Ht.directionalLights.value=X.state.directional,Ht.directionalLightShadows.value=X.state.directionalShadow,Ht.spotLights.value=X.state.spot,Ht.spotLightShadows.value=X.state.spotShadow,Ht.rectAreaLights.value=X.state.rectArea,Ht.ltc_1.value=X.state.rectAreaLTC1,Ht.ltc_2.value=X.state.rectAreaLTC2,Ht.pointLights.value=X.state.point,Ht.pointLightShadows.value=X.state.pointShadow,Ht.hemisphereLights.value=X.state.hemi,Ht.sunShadowMatrix.value=X.state.sunShadowMatrix,Ht.sunShadowCascade.value=X.state.sunShadowCascade,Ht.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ht.spotLightMatrix.value=X.state.spotLightMatrix,Ht.spotLightMap.value=X.state.spotLightMap,Ht.pointShadowMatrix.value=X.state.pointShadowMatrix;return W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=ae,W.uniformsList=null,ae}function uh(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Ar.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function dh(M,F){let J=P.get(M);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function wf(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;w.setFromMatrixPosition(F.matrixWorld);for(let J=0,W=M.length;J<W;J++){let X=M[J];if(X.texture!==null&&X.boundingBox.containsPoint(w))return X}return null}function Af(M,F,J,W,X){if(F.isScene!==!0)F=pt;B.resetTextureUnits();let Lt=F.fog,Ot=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,It=q===null?T.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ie.workingColorSpace,zt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Gt=nt.get(W.envMap||Ot,zt),ee=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ae=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!J.morphAttributes.position,de=!!J.morphAttributes.normal,Fe=!!J.morphAttributes.color,Ae=Tn;if(W.toneMapped){if(q===null||q.isXRRenderTarget===!0)Ae=T.toneMapping}let Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,$e=Se!==void 0?Se.length:0,Ut=P.get(W),nn=E.state.lights;if(H===!0){if(Y===!0||M!==j){let Te=M===j&&W.id===ut;_t.setState(W,M,Te)}}let le=!1;if(W.version===Ut.__version){if(Ut.needsLights&&Ut.lightsStateVersion!==nn.state.version)le=!0;else if(Ut.outputColorSpace!==It)le=!0;else if(X.isBatchedMesh&&Ut.batching===!1)le=!0;else if(!X.isBatchedMesh&&Ut.batching===!0)le=!0;else if(X.isBatchedMesh&&Ut.batchingColor===!0&&X._colorsTexture===null)le=!0;else if(X.isBatchedMesh&&Ut.batchingColor===!1&&X._colorsTexture!==null)le=!0;else if(X.isInstancedMesh&&Ut.instancing===!1)le=!0;else if(!X.isInstancedMesh&&Ut.instancing===!0)le=!0;else if(X.isSkinnedMesh&&Ut.skinning===!1)le=!0;else if(!X.isSkinnedMesh&&Ut.skinning===!0)le=!0;else if(X.isInstancedMesh&&Ut.instancingColor===!0&&X.instanceColor===null)le=!0;else if(X.isInstancedMesh&&Ut.instancingColor===!1&&X.instanceColor!==null)le=!0;else if(X.isInstancedMesh&&Ut.instancingMorph===!0&&X.morphTexture===null)le=!0;else if(X.isInstancedMesh&&Ut.instancingMorph===!1&&X.morphTexture!==null)le=!0;else if(Ut.envMap!==Gt)le=!0;else if(W.fog===!0&&Ut.fog!==Lt)le=!0;else if(Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==_t.numPlanes||Ut.numIntersection!==_t.numIntersection))le=!0;else if(Ut.vertexAlphas!==ee)le=!0;else if(Ut.vertexTangents!==ae)le=!0;else if(Ut.morphTargets!==Ht)le=!0;else if(Ut.morphNormals!==de)le=!0;else if(Ut.morphColors!==Fe)le=!0;else if(Ut.toneMapping!==Ae)le=!0;else if(Ut.morphTargetsCount!==$e)le=!0;else if(!!Ut.lightProbeGrid!==E.state.lightProbeGridArray.length>0)le=!0}else le=!0,Ut.__version=W.version;let fn=Ut.currentProgram;if(le===!0){if(fn=kr(W,F,X),D&&W.isNodeMaterial)D.onUpdateProgram(W,fn,Ut)}let Ln=!1,ii=!1,qi=!1,ye=fn.getUniforms(),Ne=Ut.uniforms;if(S.useProgram(fn.program))Ln=!0,ii=!0,qi=!0;if(W.id!==ut)ut=W.id,ii=!0;if(Ut.needsLights){let Te=wf(E.state.lightProbeGridArray,X);if(Ut.lightProbeGrid!==Te)Ut.lightProbeGrid=Te,ii=!0}if(Ln||j!==M){if(S.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();ye.setValue(C,"projectionMatrix",M.projectionMatrix),ye.setValue(C,"viewMatrix",M.matrixWorldInverse);let ri=ye.map.cameraPosition;if(ri!==void 0)ri.setValue(C,st.setFromMatrixPosition(M.matrixWorld));if(Bt.logarithmicDepthBuffer)ye.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)ye.setValue(C,"isOrthographic",M.isOrthographicCamera===!0);if(j!==M)j=M,ii=!0,qi=!0}if(Ut.needsLights){if(nn.state.sunShadowMap.length>0)ye.setValue(C,"sunShadowMap",nn.state.sunShadowMap,B);if(nn.state.directionalShadowMap.length>0)ye.setValue(C,"directionalShadowMap",nn.state.directionalShadowMap,B);if(nn.state.spotShadowMap.length>0)ye.setValue(C,"spotShadowMap",nn.state.spotShadowMap,B);if(nn.state.pointShadowMap.length>0)ye.setValue(C,"pointShadowMap",nn.state.pointShadowMap,B)}if(X.isSkinnedMesh){ye.setOptional(C,X,"bindMatrix"),ye.setOptional(C,X,"bindMatrixInverse");let Te=X.skeleton;if(Te){if(Te.boneTexture===null)Te.computeBoneTexture();ye.setValue(C,"boneTexture",Te.boneTexture,B)}}if(X.isBatchedMesh){if(ye.setOptional(C,X,"batchingTexture"),ye.setValue(C,"batchingTexture",X._matricesTexture,B),ye.setOptional(C,X,"batchingIdTexture"),ye.setValue(C,"batchingIdTexture",X._indirectTexture,B),ye.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null)ye.setValue(C,"batchingColorTexture",X._colorsTexture,B)}let si=J.morphAttributes;if(si.position!==void 0||si.normal!==void 0||si.color!==void 0)he.update(X,J,fn);if(ii||Ut.receiveShadow!==X.receiveShadow)Ut.receiveShadow=X.receiveShadow,ye.setValue(C,"receiveShadow",X.receiveShadow);if((W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null)Ne.envMapIntensity.value=F.environmentIntensity;if(Ne.dfgLUT!==void 0)Ne.dfgLUT.value=I_();if(ii){if(ye.setValue(C,"toneMappingExposure",T.toneMappingExposure),Ut.needsLights)Rf(Ne,qi);if(Lt&&W.fog===!0)bt.refreshFogUniforms(Ne,Lt);if(bt.refreshMaterialUniforms(Ne,W,gt,Q,E.state.transmissionRenderTarget[M.id]),Ut.needsLights&&Ut.lightProbeGrid){let Te=Ut.lightProbeGrid;Ne.probesSH.value=Te.texture,Ne.probesMin.value.copy(Te.boundingBox.min),Ne.probesMax.value.copy(Te.boundingBox.max),Ne.probesResolution.value.copy(Te.resolution)}Ar.upload(C,uh(Ut),Ne,B)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0)Ar.upload(C,uh(Ut),Ne,B),W.uniformsNeedUpdate=!1;if(W.isSpriteMaterial)ye.setValue(C,"center",X.center);if(ye.setValue(C,"modelViewMatrix",X.modelViewMatrix),ye.setValue(C,"normalMatrix",X.normalMatrix),ye.setValue(C,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Te=W.uniformsGroups;for(let ri=0,Yi=Te.length;ri<Yi;ri++){let ph=Te[ri];Dt.update(ph,fn),Dt.bind(ph,fn)}}return fn}function Rf(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Cf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(M,F,J){let W=P.get(M);if(W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1)W.__useRenderToTexture=!1;P.get(M.texture).__webglTexture=F,P.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let J=P.get(M);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,J=0){q=M,V=F,tt=J;let W=null,X=!1,Lt=!1;if(M){let It=P.get(M);if(It.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(C.FRAMEBUFFER,It.__webglFramebuffer),ot.copy(M.viewport),lt.copy(M.scissor),Nt=M.scissorTest,S.viewport(ot),S.scissor(lt),S.setScissorTest(Nt),ut=-1;return}else if(It.__webglFramebuffer===void 0)B.setupRenderTarget(M);else if(It.__hasExternalTextures)B.rebindTextures(M,P.get(M.texture).__webglTexture,P.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ee=M.depthTexture;if(It.__boundDepthTexture!==ee){if(ee!==null&&P.has(ee)&&(M.width!==ee.image.width||M.height!==ee.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(M)}}let zt=M.texture;if(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)Lt=!0;let Gt=P.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(Gt[F]))W=Gt[F][J];else W=Gt[F];X=!0}else if(M.samples>0&&B.useMultisampledRTT(M)===!1)W=P.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(Gt))W=Gt[J];else W=Gt;ot.copy(M.viewport),lt.copy(M.scissor),Nt=M.scissorTest}else ot.copy(Pt).multiplyScalar(gt).floor(),lt.copy(Mt).multiplyScalar(gt).floor(),Nt=jt;if(J!==0)W=U;if(S.bindFramebuffer(C.FRAMEBUFFER,W))S.drawBuffers(M,W);if(S.viewport(ot),S.scissor(lt),S.setScissorTest(Nt),X){let It=P.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,J)}else if(Lt){let It=F;for(let zt=0;zt<M.textures.length;zt++){let Gt=P.get(M.textures[zt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+zt,Gt.__webglTexture,J,It)}}else if(M!==null&&J!==0){let It=P.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,It.__webglTexture,J)}ut=-1};function fh(M){let F=P.get(M);if(F.__readFormat!==M.format||F.__readType!==M.type)F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=Bt.textureFormatReadable(M.format),F.__typeReadable=Bt.textureTypeReadable(M.type);return F}if(this.readRenderTargetPixels=function(M,F,J,W,X,Lt,Ot,It=0){if(!(M&&M.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=P.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ot!==void 0)zt=zt[Ot];if(zt){S.bindFramebuffer(C.FRAMEBUFFER,zt);try{let Gt=M.textures[It],ee=Gt.format,ae=Gt.type;if(M.textures.length>1)C.readBuffer(C.COLOR_ATTACHMENT0+It);let Ht=fh(Gt);if(Ht.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=M.width-W&&(J>=0&&J<=M.height-X))C.readPixels(F,J,W,X,at.convert(ee),at.convert(ae),Lt)}finally{let Gt=q!==null?P.get(q).__webglFramebuffer:null;S.bindFramebuffer(C.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(M,F,J,W,X,Lt,Ot,It=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=P.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ot!==void 0)zt=zt[Ot];if(zt)if(F>=0&&F<=M.width-W&&(J>=0&&J<=M.height-X)){S.bindFramebuffer(C.FRAMEBUFFER,zt);let Gt=M.textures[It],ee=Gt.format,ae=Gt.type;if(M.textures.length>1)C.readBuffer(C.COLOR_ATTACHMENT0+It);let Ht=fh(Gt);if(Ht.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,de),C.bufferData(C.PIXEL_PACK_BUFFER,Lt.byteLength,C.STREAM_READ),C.readPixels(F,J,W,X,at.convert(ee),at.convert(ae),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Fe=q!==null?P.get(q).__webglFramebuffer:null;S.bindFramebuffer(C.FRAMEBUFFER,Fe);let Ae=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ju(C,Ae,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,de),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Lt),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(de),C.deleteSync(Ae),Lt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,J=0){let W=Math.pow(2,-J),X=Math.floor(M.image.width*W),Lt=Math.floor(M.image.height*W),Ot=F!==null?F.x:0,It=F!==null?F.y:0;B.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Ot,It,X,Lt),S.unbindTexture()},this.copyTextureToTexture=function(M,F,J=null,W=null,X=0,Lt=0){let Ot,It,zt,Gt,ee,ae,Ht,de,Fe,Ae=M.isCompressedTexture?M.mipmaps[Lt]:M.image;if(J!==null)Ot=J.max.x-J.min.x,It=J.max.y-J.min.y,zt=J.isBox3?J.max.z-J.min.z:1,Gt=J.min.x,ee=J.min.y,ae=J.isBox3?J.min.z:0;else{let Ne=Math.pow(2,-X);if(Ot=Math.floor(Ae.width*Ne),It=Math.floor(Ae.height*Ne),M.isDataArrayTexture)zt=Ae.depth;else if(M.isData3DTexture)zt=Math.floor(Ae.depth*Ne);else zt=1;Gt=0,ee=0,ae=0}if(W!==null)Ht=W.x,de=W.y,Fe=W.z;else Ht=0,de=0,Fe=0;let Se=at.convert(F.format),$e=at.convert(F.type),Ut;if(F.isData3DTexture)B.setTexture3D(F,0),Ut=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)B.setTexture2DArray(F,0),Ut=C.TEXTURE_2D_ARRAY;else B.setTexture2D(F,0),Ut=C.TEXTURE_2D;S.activeTexture(C.TEXTURE0),S.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=S.getParameter(C.UNPACK_ROW_LENGTH),le=S.getParameter(C.UNPACK_IMAGE_HEIGHT),fn=S.getParameter(C.UNPACK_SKIP_PIXELS),Ln=S.getParameter(C.UNPACK_SKIP_ROWS),ii=S.getParameter(C.UNPACK_SKIP_IMAGES);S.pixelStorei(C.UNPACK_ROW_LENGTH,Ae.width),S.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ae.height),S.pixelStorei(C.UNPACK_SKIP_PIXELS,Gt),S.pixelStorei(C.UNPACK_SKIP_ROWS,ee),S.pixelStorei(C.UNPACK_SKIP_IMAGES,ae);let qi=M.isDataArrayTexture||M.isData3DTexture,ye=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Ne=P.get(M),si=P.get(F),Te=P.get(Ne.__renderTarget),ri=P.get(si.__renderTarget);S.bindFramebuffer(C.READ_FRAMEBUFFER,Te.__webglFramebuffer),S.bindFramebuffer(C.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Yi=0;Yi<zt;Yi++){if(qi)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,P.get(M).__webglTexture,X,ae+Yi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,P.get(F).__webglTexture,Lt,Fe+Yi);C.blitFramebuffer(Gt,ee,Ot,It,Ht,de,Ot,It,C.DEPTH_BUFFER_BIT,C.NEAREST)}S.bindFramebuffer(C.READ_FRAMEBUFFER,null),S.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||P.has(M)){let Ne=P.get(M),si=P.get(F);S.bindFramebuffer(C.READ_FRAMEBUFFER,et),S.bindFramebuffer(C.DRAW_FRAMEBUFFER,L);for(let Te=0;Te<zt;Te++){if(qi)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,X,ae+Te);else C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,X);if(ye)C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,si.__webglTexture,Lt,Fe+Te);else C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,si.__webglTexture,Lt);if(X!==0)C.blitFramebuffer(Gt,ee,Ot,It,Ht,de,Ot,It,C.COLOR_BUFFER_BIT,C.NEAREST);else if(ye)C.copyTexSubImage3D(Ut,Lt,Ht,de,Fe+Te,Gt,ee,Ot,It);else C.copyTexSubImage2D(Ut,Lt,Ht,de,Gt,ee,Ot,It)}S.bindFramebuffer(C.READ_FRAMEBUFFER,null),S.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ye)if(M.isDataTexture||M.isData3DTexture)C.texSubImage3D(Ut,Lt,Ht,de,Fe,Ot,It,zt,Se,$e,Ae.data);else if(F.isCompressedArrayTexture)C.compressedTexSubImage3D(Ut,Lt,Ht,de,Fe,Ot,It,zt,Se,Ae.data);else C.texSubImage3D(Ut,Lt,Ht,de,Fe,Ot,It,zt,Se,$e,Ae);else if(M.isDataTexture)C.texSubImage2D(C.TEXTURE_2D,Lt,Ht,de,Ot,It,Se,$e,Ae.data);else if(M.isCompressedTexture)C.compressedTexSubImage2D(C.TEXTURE_2D,Lt,Ht,de,Ae.width,Ae.height,Se,Ae.data);else C.texSubImage2D(C.TEXTURE_2D,Lt,Ht,de,Ot,It,Se,$e,Ae);if(S.pixelStorei(C.UNPACK_ROW_LENGTH,nn),S.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),S.pixelStorei(C.UNPACK_SKIP_PIXELS,fn),S.pixelStorei(C.UNPACK_SKIP_ROWS,Ln),S.pixelStorei(C.UNPACK_SKIP_IMAGES,ii),Lt===0&&F.generateMipmaps)C.generateMipmap(Ut);S.unbindTexture()},this.initRenderTarget=function(M){if(P.get(M).__webglFramebuffer===void 0)B.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)B.setTextureCube(M,0);else if(M.isData3DTexture)B.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)B.setTexture2DArray(M,0);else B.setTexture2D(M,0);S.unbindTexture()},this.resetState=function(){V=0,tt=0,q=null,S.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}var An=9,me={x0:-560,x1:330,z0:-260,z1:330},P_=[[230,0,175],[60,0,160],[-120,0,160],[-300,0,165],[-420,0,130],[-470,0,40],[-440,0,-60],[-480,0,-150],[-580,3,-210],[-700,12,-235],[-790,24,-305],[-800,38,-420],[-720,52,-500],[-600,62,-510],[-480,72,-560],[-350,82,-600],[-210,90,-580],[-80,95,-520],[50,95,-540],[180,90,-600],[310,84,-580],[420,76,-500],[460,66,-390],[540,56,-300],[650,46,-270],[740,36,-190],[770,26,-60],[730,16,70],[650,8,170],[600,4,270],[510,1.5,345],[390,0.5,375],[290,0,345],[250,0,260]];function L_(t,e,n=0){return t>me.x0&&t<me.x1&&e>me.z0&&e<me.z1&&n<2}class Dc{constructor(){let t=P_.map(([s,r,a])=>new I(s,r,a));this.curve=new fi(t,!0,"centripetal"),this.length=this.curve.getLength();let e=Math.round(this.length/2);this.N=e,this.ds=this.length/e;let n=this.curve.getSpacedPoints(e);this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e);for(let s=0;s<e;s++)this.px[s]=n[s].x,this.py[s]=n[s].y,this.pz[s]=n[s].z;for(let s=0;s<4;s++){let r=this.py.slice();for(let a=0;a<e;a++){let o=0;for(let l=-4;l<=4;l++)o+=r[(a+l+e)%e];this.py[a]=o/9}}this.tx=new Float32Array(e),this.tz=new Float32Array(e),this.city=new Uint8Array(e);for(let s=0;s<e;s++){let r=(s+1)%e,a=(s-1+e)%e,o=this.px[r]-this.px[a],l=this.pz[r]-this.pz[a],c=Math.hypot(o,l);this.tx[s]=o/c,this.tz[s]=l/c,this.city[s]=L_(this.px[s],this.pz[s],this.py[s])?1:0}let i=new Float32Array(e);for(let s=0;s<e;s++){let r=(s+2)%e,a=(s-2+e)%e,o=this.tx[a]*this.tz[r]-this.tz[a]*this.tx[r];i[s]=Math.asin(Math.max(-1,Math.min(1,o)))/(4*this.ds)}this.curv=new Float32Array(e);for(let s=0;s<e;s++){let r=0;for(let a=-5;a<=5;a++)r+=i[(s+a+e)%e];this.curv[s]=r/11}this.startIdx=Math.round(e*0.035),this.buildGrid()}rightX(t){return-this.tz[t]}rightZ(t){return this.tx[t]}buildGrid(){this.cell=64,this.grid=new Map;for(let t=0;t<this.N;t++){let e=this.key(Math.floor(this.px[t]/this.cell),Math.floor(this.pz[t]/this.cell)),n=this.grid.get(e);if(!n)this.grid.set(e,n=[]);n.push(t)}}key(t,e){return t*73856093^e*19349663}nearestCoarse(t,e){let n=Math.floor(t/this.cell),i=Math.floor(e/this.cell),s=-1,r=1/0;for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let l=this.grid.get(this.key(n+a,i+o));if(!l)continue;for(let c of l){let u=this.px[c]-t,d=this.pz[c]-e,h=u*u+d*d;if(h<r)r=h,s=c}}return s<0?null:{i:s,d:Math.sqrt(r)}}project(t,e,n=-1,i={}){let s=this.N,r=0,a=1/0;if(n<0)for(let _=0;_<s;_++){let E=this.px[_]-t,A=this.pz[_]-e,R=E*E+A*A;if(R<a)a=R,r=_}else for(let _=-40;_<=40;_++){let E=(n+_+s)%s,A=this.px[E]-t,R=this.pz[E]-e,v=A*A+R*R;if(v<a)a=v,r=E}let o=r,l=t-this.px[o],c=e-this.pz[o];if(l*this.tx[o]+c*this.tz[o]<0)o=(o-1+s)%s;let u=(o+1)%s,d=this.px[u]-this.px[o],h=this.pz[u]-this.pz[o],f=d*d+h*h,g=((t-this.px[o])*d+(e-this.pz[o])*h)/f;g=Math.max(0,Math.min(1,g));let y=this.px[o]+d*g,m=this.pz[o]+h*g,p=this.tx[o]+(this.tx[u]-this.tx[o])*g,b=this.tz[o]+(this.tz[u]-this.tz[o])*g,w=Math.hypot(p,b);return i.i=o,i.f=g,i.tx=p/w,i.tz=b/w,i.rx=-i.tz,i.rz=i.tx,i.lat=(t-y)*i.rx+(e-m)*i.rz,i.y=this.py[o]+(this.py[u]-this.py[o])*g,i.slope=(this.py[u]-this.py[o])/Math.sqrt(f),i.s=(o+g)*this.ds,i}pointAt(t,e=0){let n=this.N,i=(Math.floor(t)%n+n)%n,s=(i+1)%n,r=t-Math.floor(t),a=this.px[i]+(this.px[s]-this.px[i])*r,o=this.pz[i]+(this.pz[s]-this.pz[i])*r;return new I(a+this.rightX(i)*e,this.py[i]+(this.py[s]-this.py[i])*r,o+this.rightZ(i)*e)}runs(t){let e=this.N,n=[],i=0;while(i<e&&t(i))i++;if(i===e)return[[0,e+1]];let s=i;for(let r=0;r<e;r++,s++){let a=s%e;if(t(a)&&!t((a-1+e)%e)){let o=a;while(t(o%e)&&o-a<e)o++;n.push([a,o])}}return n}sweep(t,e,{vScale:n=0.025,uvAcross:i=null,yOffset:s=0}={}){let r=this.N,a=t.length,o=[],l=[],c=[],u=i;if(!u){u=[0];let h=0;for(let f=1;f<a;f++)h+=Math.hypot(t[f][0]-t[f-1][0],t[f][1]-t[f-1][1]),u.push(h/4)}for(let[h,f]of e){let g=o.length/3,y=f-h+1;for(let m=0;m<y;m++){let p=(h+m)%r,b=this.rightX(p),w=this.rightZ(p);for(let _=0;_<a;_++){let[E,A]=t[_];o.push(this.px[p]+b*E,this.py[p]+A+s,this.pz[p]+w*E),l.push(u[_],(h+m)*this.ds*n)}}for(let m=0;m<y-1;m++)for(let p=0;p<a-1;p++){let b=g+m*a+p,w=b+1,_=b+a,E=_+1;c.push(b,w,_,w,E,_)}}let d=new fe;return d.setAttribute("position",new oe(o,3)),d.setAttribute("uv",new oe(l,2)),d.setIndex(c),d.computeVertexNormals(),d}}function Rn(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new fe,c=0;for(let u=0;u<t.length;++u){let d=t[u],h=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;if(r[f]===void 0)r[f]=[];r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(a[f]===void 0)a[f]=[];a[f].push(d.morphAttributes[f])}if(e){let f;if(n)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(n){let u=0,d=[];for(let h=0;h<t.length;++h){let f=t[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=t[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Xd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][h]);let g=Xd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Xd(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let u=t[c];if(e===void 0)e=u.array.constructor;if(e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=u.itemSize;if(n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=u.normalized;if(i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=u.gpuType;if(s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*n}let a=new e(r),o=new xe(a,n,i),l=0;for(let c=0;c<t.length;++c){let u=t[c];if(u.isInterleavedBufferAttribute){let d=l/n;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<n;g++){let y=u.getComponent(h,g);o.setComponent(h+d,g,y)}}else a.set(u.array,l);l+=u.count*n}if(s!==void 0)o.gpuType=s;return o}function Cn(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,[n,n.getContext("2d")]}function yn(t=1){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Hn(t,e=!0,n=!0){let i=new Es(t);if(e)i.colorSpace=Ss;if(n)i.wrapS=i.wrapT=ys;return i.anisotropy=8,i}function oo(t,e,n){let i=new Float32Array(t*t),s=1,r=0;for(let a of e){let o=new Float32Array(a*a).map(()=>n());for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=c/t*a,d=l/t*a,h=Math.floor(u),f=Math.floor(d),g=u-h,y=d-f,m=g*g*(3-2*g),p=y*y*(3-2*y),b=o[f%a*a+h%a],w=o[f%a*a+(h+1)%a],_=o[(f+1)%a*a+h%a],E=o[(f+1)%a*a+(h+1)%a];i[l*t+c]+=s*(b+(w-b)*m+(_-b)*p+(b-w-_+E)*m*p)}r+=s,s*=0.5}for(let a=0;a<i.length;a++)i[a]/=r;return i}function qd(){let[t,e]=Cn(512,1024),n=yn(7);e.fillStyle="#26262b",e.fillRect(0,0,512,1024);for(let i=0;i<26000;i++){let s=25+n()*40;e.fillStyle=`rgba(${s},${s},${s+4},${0.25+n()*0.4})`,e.fillRect(n()*512,n()*1024,1+n()*2,1+n()*2)}for(let i of[0.13,0.37,0.63,0.87]){let s=e.createLinearGradient((i-0.07)*512,0,(i+0.07)*512,0);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(0.5,"rgba(8,8,12,0.35)"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.fillRect((i-0.07)*512,0,71.68,1024)}e.fillStyle="#d8d8d0",e.fillRect(12,0,9,1024),e.fillRect(491,0,9,1024);for(let i of[0.25,0.75])for(let s=0;s<1024;s+=256)e.fillRect(i*512-4,s+40,8,150);e.fillStyle="#d9a43a",e.fillRect(246,0,6,1024),e.fillRect(260,0,6,1024),e.strokeStyle="rgba(10,10,12,0.5)",e.lineWidth=1.2;for(let i=0;i<14;i++){let s=n()*512,r=n()*1024;e.beginPath(),e.moveTo(s,r);for(let a=0;a<6;a++)s+=(n()-0.5)*40,r+=(n()-0.5)*40,e.lineTo(s,r);e.stroke()}return Hn(t)}function Yd(){let e=yn(3),n=oo(256,[4,8,16,32],e),i=oo(256,[16,32,64],yn(11)),[s,r]=Cn(256,256),a=r.createImageData(256,256);for(let o=0;o<65536;o++)a.data[o*4]=Math.min(255,Math.max(0,(n[o]-0.3)*2.2*255)),a.data[o*4+1]=i[o]*255,a.data[o*4+2]=n[o*7%65536]*255,a.data[o*4+3]=255;return r.putImageData(a,0,0),Hn(s,!1)}function lo(t=5,e=[8,16,32,64],n=3){let s=oo(256,e,yn(t)),[r,a]=Cn(256,256),o=a.createImageData(256,256);for(let l=0;l<256;l++)for(let c=0;c<256;c++){let u=l*256+c,d=(s[l*256+(c+1)%256]-s[l*256+(c-1+256)%256])*n*256/16,h=(s[(l+1)%256*256+c]-s[(l-1+256)%256*256+c])*n*256/16,f=Math.hypot(d,h,1);o.data[u*4]=(-d/f*0.5+0.5)*255,o.data[u*4+1]=(-h/f*0.5+0.5)*255,o.data[u*4+2]=(1/f*0.5+0.5)*255,o.data[u*4+3]=255}return a.putImageData(o,0,0),Hn(r,!1)}function Uc(t=1,e=!0){let[r,a]=Cn(1024,1024),o=yn(t);a.fillStyle="#0b0c12",a.fillRect(0,0,1024,1024);let l=e?["#ffd9a0","#ffe6bf","#ffcf8a","#f5f0e0","#cfe6ff","#bfe0ff"]:["#bfe0ff","#d6ecff","#9fd0ff","#ffe6bf"];for(let c=0;c<16;c++){let u=o()<0.12,d=o()<0.15;for(let h=0;h<16;h++){let f=h*64,g=c*64,y=7.68,m=11.52;if(u?o()<0.85:d?o()<0.04:o()<0.26){let b=l[Math.floor(o()*l.length)];if(a.fillStyle=b,a.globalAlpha=0.35+o()*0.6,a.fillRect(f+7.68,g+11.52,48.64,40.96),a.globalAlpha=0.25,a.fillStyle="#000",o()<0.4)for(let w=0;w<5;w++)a.fillRect(f+7.68,g+11.52+w*40.96/5,48.64,2);if(o()<0.2)a.fillRect(f+7.68+o()*38.64,g+64-11.52-22,10,22);a.globalAlpha=1}else{let b=a.createLinearGradient(f,g+11.52,f+64,g+64-11.52);b.addColorStop(0,"#141a26"),b.addColorStop(1,"#07090e"),a.fillStyle=b,a.fillRect(f+7.68,g+11.52,48.64,40.96)}}}return Hn(r)}function Gi(t="rgba(255,255,255,1)",e="rgba(255,255,255,0.35)"){let[n,i]=Cn(128,128),s=i.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,t),s.addColorStop(0.25,e),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),Hn(n,!0,!1)}function Fc(){let[t,e]=Cn(128,128),n=yn(9);for(let i=0;i<18;i++){let s=64+(n()-0.5)*40,r=64+(n()-0.5)*40,a=20+n()*30,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return Hn(t,!0,!1)}function Zd(){let[t,e]=Cn(256,64);for(let n=0;n<4;n++)for(let i=0;i<16;i++)e.fillStyle=(i+n)%2?"#111":"#eee",e.fillRect(i*16,n*16,16,16);return Hn(t,!0,!1)}function $d(){let[t,e]=Cn(256,256),n=yn(21);e.fillStyle="#4a4a50",e.fillRect(0,0,256,256);for(let i=0;i<5000;i++){let s=50+n()*40;e.fillStyle=`rgba(${s},${s},${s+5},0.4)`,e.fillRect(n()*256,n()*256,2,2)}e.strokeStyle="#2c2c32",e.lineWidth=3;for(let i=0;i<=256;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke(),e.beginPath(),e.moveTo(i,0),e.lineTo(i,256),e.stroke();return Hn(t)}function co(){let e=oo(256,[8,16,32,64,128],yn(31)),[n,i]=Cn(256,256),s=i.createImageData(256,256);for(let r=0;r<65536;r++){let a=120+(e[r]-0.5)*170;s.data[r*4]=a,s.data[r*4+1]=a,s.data[r*4+2]=a,s.data[r*4+3]=255}return i.putImageData(s,0,0),Hn(n)}var N_=['900 italic 110px "Rajdhani", sans-serif','700 100px "Orbitron", sans-serif',"800 110px sans-serif"];function ho(t,e,n={}){let i=!!n.vertical,s=n.font??N_[0],[r,a]=i?Cn(160,640):Cn(640,200);a.fillStyle="rgba(6,4,12,0.92)",a.fillRect(0,0,r.width,r.height),a.strokeStyle=e,a.lineWidth=6,a.shadowColor=e,a.shadowBlur=18,a.strokeRect(10,10,r.width-20,r.height-20),a.font=s,a.textAlign="center",a.textBaseline="middle";let o=()=>{if(i){let l=[...t],c=(r.height-60)/l.length;a.font=s.replace(/\d+px/,`${Math.min(110,c*0.95)|0}px`),l.forEach((u,d)=>a.fillText(u,r.width/2,30+c*(d+0.5)))}else{let l=110;a.font=s.replace(/\d+px/,`${l}px`);while(a.measureText(t).width>r.width-70&&l>30)l-=6,a.font=s.replace(/\d+px/,`${l}px`);a.fillText(t,r.width/2,r.height/2+4)}};return a.fillStyle=e,a.shadowBlur=30,o(),a.shadowBlur=8,a.fillStyle="#ffffff",a.globalAlpha=0.85,o(),a.globalAlpha=1,Hn(r,!0,!1)}function uo(t,e){let n=Math.imul(t,374761393)+Math.imul(e,668265263)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Jd(t,e){let n=Math.floor(t),i=Math.floor(e),s=t-n,r=e-i;s=s*s*(3-2*s),r=r*r*(3-2*r);let a=uo(n,i),o=uo(n+1,i),l=uo(n,i+1),c=uo(n+1,i+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}function Kd(t,e,n=5){let i=0,s=0.5,r=0;for(let a=0;a<n;a++)i+=s*Jd(t,e),r+=s,t*=2.03,e*=2.03,s*=0.5;return i/r}function U_(t,e,n=5){let i=0,s=0.5,r=0;for(let a=0;a<n;a++){let o=1-Math.abs(2*Jd(t,e)-1);i+=s*o*o,r+=s,t*=2.1,e*=2.1,s*=0.5}return i/r}var Ve=(t,e,n)=>{let i=(n-t)/(e-t);return i=i<0?0:i>1?1:i,i*i*(3-2*i)},fo=(t,e,n)=>t+(e-t)*n,Oc=-1.2;function F_(t,e){let n=Kd(t*0.0045,e*0.0045,5),i=U_(t*0.0022+7.3,e*0.0022-2.1,5),s=Ve(-280,-980,e)*240,r=Ve(-520,-1150,t)*150,a=Ve(380,1000,t)*125,o=Ve(1050,1550,Math.hypot(t,e*1.15))*330*(1-Ve(150,700,e)),c=Math.max(s,r,a,o)*(0.42+0.85*i)+n*16,u=Ve(me.x0-90,me.x0,t)*Ve(me.x1+90,me.x1,t)*Ve(me.z0-90,me.z0,e)*Ve(me.z1+50,me.z1,e);c=fo(c,-0.1,u);let d=Ve(330,470,e);return c=fo(c,-14-n*6,d),c=fo(c,1.5+n*3,Ve(1150,1240,e)),c}class Bc{constructor(t){this.SIZE=3400,this.RES=425,this.step=8;let i=new Float32Array(181476);this.H=i;for(let h=0;h<=425;h++)for(let f=0;f<=425;f++){let g=-1700+f*this.step,y=-1700+h*this.step,m=F_(g,y),p=t.nearestCoarse(g,y);if(p){let b=t.py[p.i],w=Ve(An+5,An+52,p.d);m=fo(b-0.3,m,w)}i[h*426+f]=m}let s=new Ze(3400,3400,425,425);s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let h=0;h<r.count;h++){let f=h%426,g=Math.floor(h/426);r.setY(h,i[g*426+f])}s.computeVertexNormals();let a=s.attributes.normal,o=new Float32Array(r.count*3),l=new vt;for(let h=0;h<r.count;h++){let f=r.getX(h),g=r.getY(h),y=r.getZ(h),m=a.getY(h),p=Kd(f*0.02,y*0.02,3),b=new vt(0.035+p*0.02,0.055+p*0.03,0.03),w=new vt(0.1+p*0.05,0.088+p*0.04,0.08+p*0.03),_=new vt(0.035,0.035,0.042);l.copy(b).lerp(w,Ve(0.86,0.7,m)),l.lerp(w,Ve(150,260,g)*0.6);let E=Ve(me.x0-40,me.x0,f)*Ve(me.x1+40,me.x1,f)*Ve(me.z0-40,me.z0,y)*Ve(me.z1+20,me.z1,y);l.lerp(_,E),l.lerp(new vt(0.16,0.14,0.11),Ve(2.5,0.2,Math.abs(g-Oc-1))*(1-E)*0.8),o[h*3]=l.r,o[h*3+1]=l.g,o[h*3+2]=l.b}s.setAttribute("color",new xe(o,3));let c=co();c.repeat.set(242.85714285714286,242.85714285714286);let u=lo(13,[16,32,64,128],4);u.repeat.set(154.54545454545453,154.54545454545453);let d=new we({vertexColors:!0,map:c,normalMap:u,normalScale:new ht(1.2,1.2),roughness:0.92,metalness:0});this.mesh=new wt(s,d),this.mesh.name="terrain"}height(t,e){let{RES:n,step:i,SIZE:s,H:r}=this,a=(t+s/2)/i,o=(e+s/2)/i;a=Math.max(0,Math.min(n-0.001,a)),o=Math.max(0,Math.min(n-0.001,o));let l=Math.floor(a),c=Math.floor(o),u=a-l,d=o-c,h=r[c*(n+1)+l],f=r[c*(n+1)+l+1],g=r[(c+1)*(n+1)+l],y=r[(c+1)*(n+1)+l+1];return h+(f-h)*u+(g-h)*d+(h-f-g+y)*u*d}slope(t,e){let i=this.height(t+3,e)-this.height(t-3,e),s=this.height(t,e+3)-this.height(t,e-3);return Math.hypot(i,s)/6}}function Qd(t,e){let n=yn(77),i=[],s=new xn(0.18,0.28,3,5);s.translate(0,1.5,0),i.push(s);for(let p=0;p<3;p++){let b=new On(2.6-p*0.7,4.2-p*0.6,7);b.translate(0,3.2+p*2.3,0),i.push(b)}let r=[new vt(0.09,0.06,0.04),new vt(0.04,0.09,0.05),new vt(0.045,0.1,0.055),new vt(0.05,0.11,0.06)];i.forEach((p,b)=>{let w=p.attributes.position.count,_=new Float32Array(w*3);for(let E=0;E<w;E++)_[E*3]=r[b].r,_[E*3+1]=r[b].g,_[E*3+2]=r[b].b;p.setAttribute("color",new xe(_,3))});let a=Rn(i.map((p)=>p.toNonIndexed())),o=new we({vertexColors:!0,roughness:0.9,flatShading:!0}),l=5200,c=new cn(a,o,l),u=new te,d=new ln,h=new I,f=new I,g=new vt,y=0,m=0;while(y<l&&m<80000){m++;let p,b;if(n()<0.6){let A=Math.floor(n()*e.N);if(e.city[A])continue;let R=n()<0.5?-1:1,v=An+12+n()*160;p=e.px[A]+e.rightX(A)*v*R+(n()-0.5)*30,b=e.pz[A]+e.rightZ(A)*v*R+(n()-0.5)*30}else p=(n()-0.5)*3000,b=-1500+n()*2200;if(p>me.x0-40&&p<me.x1+40&&b>me.z0-40&&b<me.z1+40)continue;let w=t.height(p,b);if(w<1.5||w>330)continue;if(t.slope(p,b)>0.75)continue;let _=e.nearestCoarse(p,b);if(_&&_.d<An+10)continue;let E=0.8+n()*0.9;f.set(p,w-0.3,b),d.setFromAxisAngle(new I(0,1,0),n()*6.28),h.set(E,E*(0.85+n()*0.5),E),u.compose(f,d,h),c.setMatrixAt(y,u),g.setScalar(0.7+n()*0.6),c.setColorAt(y,g),y++}return c.count=y,c.name="trees",c.userData.noReflect=!0,c}var zc=new I(0.35,0.3,0.88).normalize();function jd(){let t=new pe({side:je,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uMoonDir:{value:zc},uGlowDir:{value:new I(0.1,0,1).normalize()}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      varying vec3 vDir;
      uniform float uTime; uniform vec3 uMoonDir; uniform vec3 uGlowDir;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float noise(vec3 x) {
        vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.07; a *= 0.5; } return s; }
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        float t = clamp(h, 0.0, 1.0);
        vec3 zenith = vec3(0.004, 0.006, 0.022);
        vec3 mid = vec3(0.022, 0.018, 0.07);
        vec3 horizon = vec3(0.16, 0.06, 0.17);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.16, t));
        col = mix(col, zenith, smoothstep(0.12, 0.75, t));
        // warm light pollution over the city
        vec3 hd = normalize(vec3(d.x, 0.0, d.z) + 1e-5);
        float g = (0.35 + 0.65 * pow(max(dot(hd, uGlowDir), 0.0), 2.0)) * exp(-max(h, 0.0) * 9.0);
        col += vec3(0.42, 0.13, 0.12) * g * 0.55;
        if (h < 0.0) col = mix(horizon * 0.7 + vec3(0.15, 0.05, 0.05) * g, vec3(0.012, 0.01, 0.03), smoothstep(0.0, 0.25, -h));
        // stars
        vec3 sp = d * 380.0; vec3 cell = floor(sp); float r = hash(cell);
        float star = 0.0;
        if (r > 0.9965) {
          vec3 c = cell + 0.5 + (vec3(hash(cell + 1.3), hash(cell + 2.7), hash(cell + 3.1)) - 0.5) * 0.6;
          star = (1.0 - smoothstep(0.0, 0.42, length(sp - c))) * (0.55 + 0.45 * sin(uTime * (1.0 + r * 40.0) + r * 300.0));
          star *= 0.6 + 2.5 * hash(cell + 9.0);
        }
        star *= smoothstep(0.03, 0.3, h);
        // moon
        float md = dot(d, uMoonDir);
        float moon = smoothstep(0.99972, 0.99980, md);
        float mare = noise(d * 700.0) * 0.6 + noise(d * 1900.0) * 0.4;
        vec3 moonCol = vec3(1.0, 0.95, 0.86) * (2.4 - 0.9 * smoothstep(0.45, 0.75, mare));
        float halo = pow(max(md, 0.0), 900.0) * 0.55 + pow(max(md, 0.0), 60.0) * 0.12 + pow(max(md, 0.0), 8.0) * 0.03;
        // clouds lit by moon and city glow
        vec2 cp = d.xz / (h + 0.1);
        float c = fbm(vec3(cp * 0.9 + vec2(uTime * 0.004, uTime * 0.002), uTime * 0.003));
        c += 0.5 * fbm(vec3(cp * 2.6 - vec2(uTime * 0.006, 0.0), 3.0)) - 0.25;
        float cloud = smoothstep(0.42, 0.85, c) * smoothstep(0.0, 0.12, h);
        vec3 cloudCol = vec3(0.045, 0.035, 0.08) + vec3(0.30, 0.11, 0.14) * g * 1.4 + vec3(0.55, 0.58, 0.7) * halo * 2.2;
        float edge = smoothstep(0.42, 0.6, c) - smoothstep(0.6, 0.85, c);
        cloudCol += vec3(0.35, 0.38, 0.5) * edge * pow(max(md, 0.0), 6.0) * 0.6;
        col += vec3(0.9, 0.95, 1.0) * star * (1.0 - cloud);
        col += vec3(0.55, 0.6, 0.78) * halo * (1.0 - cloud * 0.5);
        col = mix(col, moonCol, moon * (1.0 - cloud * 0.85));
        col = mix(col, cloudCol, cloud * 0.9);
        gl_FragColor = vec4(col, 1.0);
      }`}),e=new wt(new Ni(5000,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e}class Hc{constructor(t=0.5){this.scale=t,this.rt=new Ie(16,16,{type:Be,samples:0}),this.rt.texture.generateMipmaps=!1,this.camera=new Xe,this.textureMatrix=new te,this.enabled=!0,this.hidden=[],this._n=new I(0,1,0),this._v=new I,this._c=new I,this._t=new I,this._la=new I,this._rm=new te,this._plane=new mn,this._clip=new be,this._q=new be,this.uniforms={uReflTex:{value:this.rt.texture},uReflMatrix:{value:this.textureMatrix},uReflOn:{value:1}}}setSize(t,e){this.rt.setSize(Math.max(16,t*this.scale|0),Math.max(16,e*this.scale|0)),this.uniforms.uReflOn.value=0}update(t,e,n){if(!this.enabled){this.uniforms.uReflOn.value=0;return}let i=this._n,s=this.camera;if(this._c.setFromMatrixPosition(n.matrixWorld),this._c.y<0.05)return;this._v.set(this._c.x,-this._c.y,this._c.z),this._rm.extractRotation(n.matrixWorld),this._la.set(0,0,-1).applyMatrix4(this._rm).add(this._c),this._t.set(this._la.x,-this._la.y,this._la.z),s.position.copy(this._v),s.up.set(0,1,0).applyMatrix4(this._rm).reflect(i),s.lookAt(this._t),s.far=n.far,s.near=n.near,s.updateMatrixWorld(),s.projectionMatrix.copy(n.projectionMatrix),this.textureMatrix.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),this.textureMatrix.multiply(s.projectionMatrix).multiply(s.matrixWorldInverse),this._plane.setFromNormalAndCoplanarPoint(i,new I(0,0,0)).applyMatrix4(s.matrixWorldInverse);let r=this._clip.set(this._plane.normal.x,this._plane.normal.y,this._plane.normal.z,this._plane.constant),a=s.projectionMatrix.elements,o=this._q;o.x=(Math.sign(r.x)+a[8])/a[0],o.y=(Math.sign(r.y)+a[9])/a[5],o.z=-1,o.w=(1+a[10])/a[14],r.multiplyScalar(2/r.dot(o)),a[2]=r.x,a[6]=r.y,a[10]=r.z+1-0.003,a[14]=r.w;let l=this.hidden.map((u)=>u.visible);this.hidden.forEach((u)=>u.visible=!1);let c=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,s),t.setRenderTarget(c),this.hidden.forEach((u,d)=>u.visible=l[d]),this.uniforms.uReflOn.value=1}}function po(t,e,n,i="road"){t.onBeforeCompile=(s)=>{Object.assign(s.uniforms,e.uniforms,n),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying vec4 vRefl;
uniform mat4 uReflMatrix;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vRefl = uReflMatrix * vec4(vWPos, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec4 vRefl;
uniform sampler2D uReflTex; uniform float uReflOn; uniform sampler2D uPuddle; uniform float uTime; uniform float uWet;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
{
  vec3 V = normalize(cameraPosition - vWPos);
  float fres = 0.04 + 0.96 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
  ${i==="road"?`
  float pud = texture2D(uPuddle, vWPos.xz * 0.012).r;
  float flatness = (1.0 - smoothstep(0.15, 0.6, abs(vWPos.y)));
  float wet = uWet * flatness * (0.35 + 0.65 * smoothstep(0.05, 0.6, pud));
  vec2 rip = (texture2D(uPuddle, vWPos.xz * 0.5 + vec2(uTime * 0.03, uTime * 0.021)).gb - 0.5) * (0.002 + 0.006 * (1.0 - pud));
  float k = wet * mix(0.17, 0.58, fres);`:`
  vec2 rip = (texture2D(uPuddle, vWPos.xz * 0.02 + vec2(uTime * 0.006, uTime * 0.004)).gb - 0.5) * 0.05
           + (texture2D(uPuddle, vWPos.xz * 0.07 - vec2(uTime * 0.01, 0.0)).gb - 0.5) * 0.025;
  float k = mix(0.25, 1.0, fres);`}
  vec4 rc = vRefl; rc.xy += rip * rc.w;
  ${i==="road"?`
  // wet asphalt smears reflections into vertical streaks
  float sp = (0.006 + 0.012 * (1.0 - pud)) * rc.w;
  vec3 refl = texture2DProj(uReflTex, rc).rgb * 0.28
            + texture2DProj(uReflTex, rc + vec4(0.0, sp, 0.0, 0.0)).rgb * 0.2
            + texture2DProj(uReflTex, rc - vec4(0.0, sp, 0.0, 0.0)).rgb * 0.2
            + texture2DProj(uReflTex, rc + vec4(0.0, sp * 2.5, 0.0, 0.0)).rgb * 0.16
            + texture2DProj(uReflTex, rc - vec4(0.0, sp * 2.5, 0.0, 0.0)).rgb * 0.16;`:`
  vec3 refl = texture2DProj(uReflTex, rc).rgb;`}
  if (uReflOn > 0.5) gl_FragColor.rgb += max(refl, vec3(0.0)) * k;
}`)},t.customProgramCacheKey=()=>"refl-"+i}var Qt=An,Cr=["#ff2bd6","#00e5ff","#ff3355","#ffb000","#7cff4f","#b14bff","#ff7a1a","#3dfcff"],mo=["NOODLES","HOTEL","ラーメン","24H","CLUB","KARAOKE","TATTOO","DINER","PACHINKO","SUSHI","ARCADE","MOTEL","CAFE","寿司","カラオケ","GARAGE","NITRO","BAR","LIQUOR","DRIFT"];function Cs(t,e){let n=t.attributes.position.count,i=new Float32Array(n*3);for(let s=0;s<n;s++)i[s*3]=e.r,i[s*3+1]=e.g,i[s*3+2]=e.b;return t.setAttribute("color",new xe(i,3)),t}function Gc(t,e,n,i,s,r){let a=new $t(t,e,n),o=a.attributes.uv,l=[n,n,t,t,t,t];for(let c=0;c<6;c++)for(let u=0;u<4;u++){let d=c*4+u;if(c===2||c===3){o.setXY(d,0.003,0.003);continue}o.setXY(d,i+o.getX(d)*l[c]/34,s+o.getY(d)*e/50)}return Cs(a,r),a}function tf(t,e,n,i,s,r){let a=yn(2024),o={hideInReflection:[],update:()=>{}},l=e.N,c=qd(),u=new we({map:c,roughness:0.34,metalness:0,color:13158608});po(u,i,s,"road");let d=new wt(e.sweep([[-Qt,0],[Qt,0]],[[0,l+1]],{uvAcross:[0,1],vScale:0.025}),u);d.name="road",t.add(d);let h=e.runs((N)=>e.city[N]===1),f=e.runs((N)=>e.city[N]===0),g=new we({color:1776154,roughness:0.95,map:co()}),y=new wt(Rn([e.sweep([[-Qt-4.5,-0.9],[-Qt-0.6,0],[-Qt,0]],f,{vScale:0.25}),e.sweep([[Qt,0],[Qt+0.6,0],[Qt+4.5,-0.9]],f,{vScale:0.25})]),g);t.add(y);let m=$d(),p=new we({map:m,color:10131620,roughness:0.6});po(p,i,s,"road");let b=new wt(Rn([e.sweep([[Qt,0],[Qt,0.22],[Qt+0.3,0.22],[Qt+5,0.22],[Qt+5,-1]],h,{vScale:0.25}),e.sweep([[-Qt-5,-1],[-Qt-5,0.22],[-Qt-0.3,0.22],[-Qt,0.22],[-Qt,0]],h,{vScale:0.25})]),p);t.add(b);let w=new we({color:9080729,roughness:0.35,metalness:0.55,side:rn}),_=new wt(Rn([e.sweep([[Qt+0.9,0.5],[Qt+0.75,0.68],[Qt+0.9,0.86]],f,{vScale:0.25}),e.sweep([[-Qt-0.9,0.86],[-Qt-0.75,0.68],[-Qt-0.9,0.5]],f,{vScale:0.25})]),w);t.add(_);{let N=[],H=[];for(let[pt,yt]of f)for(let ct=pt;ct<yt;ct+=2){let C=ct%l;for(let Rt of[-1,1])if(N.push([e.px[C]+e.rightX(C)*Rt*(Qt+1),e.py[C],e.pz[C]+e.rightZ(C)*Rt*(Qt+1)]),ct%8===0)H.push([e.px[C]+e.rightX(C)*Rt*(Qt+0.85),e.py[C]+0.98,e.pz[C]+e.rightZ(C)*Rt*(Qt+0.85),Rt])}let Y=new cn(new $t(0.16,1,0.16).translate(0,0.5,0),new we({color:5593182,roughness:0.6,metalness:0.4}),N.length),k=new te;N.forEach((pt,yt)=>Y.setMatrixAt(yt,k.makeTranslation(pt[0],pt[1],pt[2]))),t.add(Y);let st=new cn(new $t(0.12,0.08,0.12),new Le({color:16777215}),H.length),ft=new vt;H.forEach((pt,yt)=>{st.setMatrixAt(yt,k.makeTranslation(pt[0],pt[1],pt[2])),st.setColorAt(yt,pt[3]>0?ft.setRGB(3,0.25,0.1):ft.setRGB(3,1.6,0.3))}),t.add(st)}let E=lo(41,[8,16,32,64],2.5);E.repeat.set(220,220);let A=new we({color:132881,roughness:0.12,metalness:0.1,normalMap:E,normalScale:new ht(0.6,0.6)});po(A,i,s,"water");let R=new wt(new Ze(1e4,1e4).rotateX(-Math.PI/2),A);R.position.set(0,Oc,2500),R.name="water",t.add(R);let v=[],T=[],G=[],D=[],U=[],et=(N,H,Y)=>{for(let k of v){let st=k.x-N,ft=k.z-H;if(st*st+ft*ft<(k.rad+Y)*(k.rad+Y)*0.42)return!0}return!1},L=(N,H,Y,k,st,ft)=>{let pt=Math.cos(st),yt=Math.sin(st);for(let ct=-1;ct<=1;ct+=0.5)for(let C=-1;C<=1;C+=0.5){let Rt=ct*Y/2,kt=C*k/2,Bt=N+Rt*pt+kt*yt,S=H-Rt*yt+kt*pt,x=e.nearestCoarse(Bt,S);if(x&&x.d<Qt+ft)return!1}return!0},V=[new vt(0.42,0.45,0.55),new vt(0.55,0.48,0.42),new vt(0.34,0.38,0.42),new vt(0.46,0.46,0.5),new vt(0.4,0.35,0.5)],tt=Cr.map((N)=>new vt(N).multiplyScalar(3.5)),q=(N,H,Y,k,st,ft,pt=0,yt=null)=>{let ct=V[Math.floor(a()*V.length)],C=yt??(a()<0.55?T:G),Rt=Math.floor(a()*16)/16,kt=Math.floor(a()*16)/16,Bt=[Gc(Y,st,k,Rt,kt,ct).translate(0,st/2,0)],S=st;if(st>40&&a()<0.55){let x=Y*(0.55+a()*0.25),P=k*(0.55+a()*0.25),B=st*(0.15+a()*0.3);if(Bt.push(Gc(x,B,P,Rt+0.25,kt,ct).translate(0,st+B/2,0)),S=st+B,a()<0.7)D.push(Cs(new $t(x+0.3,0.7,P+0.3).translate(0,S-0.5,0),tt[Math.floor(a()*tt.length)]).rotateY(ft).translate(N,pt,H))}else if(st>25&&a()<0.45)D.push(Cs(new $t(Y+0.3,0.6,k+0.3).translate(0,st-0.6,0),tt[Math.floor(a()*tt.length)]).rotateY(ft).translate(N,pt,H));if(st>18&&a()<0.6)Bt.push(Gc(3+a()*4,2+a()*2,3+a()*4,0,0,ct).translate((a()-0.5)*Y*0.4,S+1,(a()-0.5)*k*0.4));if(S>55){let x=6+a()*14,P=Cs(new $t(0.4,x,0.4).translate(0,S+x/2,0),new vt(0.15,0.15,0.16));P.attributes.uv.array.fill(0.003),Bt.push(P),U.push(new I(N,pt+S+x,H))}for(let x of Bt)x.rotateY(ft),x.translate(N,pt,H),C.push(x);return v.push({x:N,z:H,rad:Math.hypot(Y,k)/2}),S},ut=(N,H)=>Math.exp(-((N+110)**2+(H+20)**2)/135200),j=new Map,ot=(N,H,Y)=>{let k=N+H+Y;if(!j.has(k))j.set(k,new Le({map:ho(N,H,{vertical:Y}),color:new vt(2.4,2.4,2.4),side:rn}));return j.get(k)},lt=new Qe;t.add(lt);for(let N of[-1,1])for(let H=0;H<l;H+=0){let Y=9+Math.floor(a()*7);H+=Y;let k=H%l;if(!e.city[k])continue;let st=14+a()*16,ft=14+a()*14,pt=ut(e.px[k],e.pz[k]),yt=10+a()*22+pt*Math.pow(a(),1.5)*120,ct=Qt+5+1.2+ft/2,C=e.px[k]+e.rightX(k)*N*ct,Rt=e.pz[k]+e.rightZ(k)*N*ct,kt=Math.atan2(-e.tz[k],e.tx[k]);if(!L(C,Rt,st,ft,kt,5.6))continue;if(et(C,Rt,Math.hypot(st,ft)/2))continue;q(C,Rt,st,ft,yt,kt);let Bt=e.px[k]+e.rightX(k)*N*(Qt+5+1.2),S=e.pz[k]+e.rightZ(k)*N*(Qt+5+1.2);if(a()<0.55){let x=Cr[Math.floor(a()*Cr.length)],P=mo[Math.floor(a()*mo.length)],B=ot(P,x,!0),nt=(a()<0.5?-1:1)*(st/2-1.5),K=7+a()*4,mt=K/4,Z=new wt(new Ze(mt,K),B);Z.position.set(Bt+e.tx[k]*nt-e.rightX(k)*N*1.6,Math.max(K/2+3,Math.min(yt-K/2-1,5+K/2+a()*4)),S+e.tz[k]*nt-e.rightZ(k)*N*1.6),Z.rotation.y=Math.atan2(e.tx[k],e.tz[k]),lt.add(Z)}if(a()<0.45){let x=Cr[Math.floor(a()*Cr.length)],P=mo[Math.floor(a()*mo.length)],B=Math.min(st-3,9+a()*5),nt=B*0.31,K=new wt(new Ze(B,nt),ot(P,x,!1));K.position.set(Bt-e.rightX(k)*N*0.15,4.2+a()*2,S-e.rightZ(k)*N*0.15),K.rotation.y=Math.atan2(-e.rightX(k)*N,-e.rightZ(k)*N),lt.add(K)}}for(let N=me.x0-60;N<me.x1+60;N+=30)for(let H=me.z0-60;H<me.z1+30;H+=30){if(a()<0.12)continue;let Y=N+(a()-0.5)*14,k=H+(a()-0.5)*14,st=e.nearestCoarse(Y,k),ft=st?Math.atan2(-e.tz[st.i],e.tx[st.i]):0,pt=14+a()*16,yt=14+a()*16;if(!L(Y,k,pt,yt,ft,7))continue;if(et(Y,k,Math.hypot(pt,yt)/2))continue;if(n.height(Y,k)>1.5)continue;let ct=ut(Y,k),C=12+a()*26+ct*Math.pow(a(),1.3)*170;q(Y,k,pt,yt,C,ft)}let Nt=[],Ft=[];for(let N=-1500;N<1500;N+=34)for(let H=1270;H<1560;H+=34){if(a()<0.3)continue;let Y=Math.exp(-((N-250)**2)/288800),k=15+a()*40+Y*Math.pow(a(),1.2)*230,st=16+a()*18,ft=16+a()*18;q(N+(a()-0.5)*10,H+(a()-0.5)*10,st,ft,k,(a()-0.5)*0.3,1.5,a()<0.5?Nt:Ft)}let re=Uc(5,!0),Zt=Uc(9,!1),Q=(N,H)=>new we({map:N,emissiveMap:N,emissive:16777215,emissiveIntensity:H,vertexColors:!0,roughness:0.55,metalness:0.35}),gt=[Q(re,1.05),Q(Zt,1.05)],it=[Q(re,2.6),Q(Zt,2.6)];for(let[N,H]of[[T,gt[0]],[G,gt[1]],[Nt,it[0]],[Ft,it[1]]]){if(!N.length)continue;let Y=new wt(Rn(N.map((k)=>k.index?k.toNonIndexed():k)),H);t.add(Y)}if(D.length){let N=new wt(Rn(D.map((H)=>(H.deleteAttribute("uv"),H.deleteAttribute("normal"),H.toNonIndexed()))),new Le({vertexColors:!0}));t.add(N)}let xt=new Le({color:new vt(6,0.3,0.2)}),Pt=new cn(new Ni(0.7,8,6),xt,U.length);U.forEach((N,H)=>Pt.setMatrixAt(H,new te().makeTranslation(N.x,N.y,N.z))),t.add(Pt);let Mt=[];for(let[N,H]of h)for(let Y=N+4;Y<H-2;Y+=17){let k=Y%l,st=Math.floor(Y/17)%2?1:-1;Mt.push(jt(k,st,Qt+1.2,8.6,"city"))}for(let[N,H]of f)for(let Y=N+10;Y<H-4;Y+=38){let k=Y%l,st=e.curv[k]>0.002?-1:e.curv[k]<-0.002?1:Y/38%2?1:-1;Mt.push(jt(k,st,Qt+1.6,10,"open"))}function jt(N,H,Y,k,st){let ft=e.px[N]+e.rightX(N)*H*Y,pt=e.pz[N]+e.rightZ(N)*H*Y,yt=-e.rightX(N)*H,ct=-e.rightZ(N)*H,C=2.6;return{x:ft,y:e.py[N]+(st==="city"?0.22:0),z:pt,h:k,hx:ft+yt*2.6,hz:pt+ct*2.6,rot:Math.atan2(-ct,yt),kind:st}}{let N=Rn([new xn(0.11,0.17,1,8).translate(0,0.5,0)]),H=new $t(2.8,0.12,0.14).translate(1.3,0,0),Y=new $t(0.9,0.12,0.38),k=new we({color:2763827,roughness:0.5,metalness:0.6}),st=new cn(N,k,Mt.length),ft=new cn(H,k,Mt.length),pt=new cn(Y,new Le({color:16777215}),Mt.length),yt=Gi(),ct=new cn(new Ze(1,1).rotateX(-Math.PI/2),new Le({map:yt,transparent:!0,blending:tn,depthWrite:!1,color:16777215,polygonOffset:!0,polygonOffsetFactor:-2}),Mt.length),C=new On(5.2,8.5,28,1,!0).translate(0,-4.25,0),Rt=new pe({transparent:!0,depthWrite:!1,blending:tn,uniforms:{uRain:s.uWet},vertexShader:`
        varying float vH; varying float vF; varying vec3 vCol;
        void main() {
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vec3 n = normalize(mat3(modelViewMatrix * instanceMatrix) * normal);
          vF = abs(dot(n, normalize(-mv.xyz)));
          vH = -position.y / 8.5;
          vCol = instanceColor;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vH; varying float vF; varying vec3 vCol; uniform float uRain;
        void main() {
          float a = pow(clamp(1.0 - vH, 0.0, 1.0), 1.6) * pow(clamp(vF, 0.0, 1.0), 2.0) * (0.05 + 0.08 * uRain);
          gl_FragColor = vec4(vCol * a, 1.0);
        }`}),kt=new cn(C,Rt,Mt.length),Bt=new te,S=new ln,x=new I,P=new I,B=new I(0,1,0),nt=new vt;Mt.forEach((K,mt)=>{S.setFromAxisAngle(B,K.rot),st.setMatrixAt(mt,Bt.compose(P.set(K.x,K.y,K.z),S,x.set(1,K.h,1))),ft.setMatrixAt(mt,Bt.compose(P.set(K.x,K.y+K.h-0.1,K.z),S,x.set(1,1,1))),pt.setMatrixAt(mt,Bt.compose(P.set(K.hx,K.y+K.h-0.22,K.hz),S,x.set(1,1,1)));let Z=K.kind==="open"?nt.setRGB(1,0.5,0.16):mt%5===0?nt.setRGB(0.75,0.85,1):nt.setRGB(1,0.72,0.42);pt.setColorAt(mt,nt.clone().multiplyScalar(9));let rt=e.project(K.hx,K.hz,-1).y;ct.setMatrixAt(mt,Bt.compose(P.set(K.hx,rt+0.06,K.hz),S.identity(),x.set(22,1,22))),ct.setColorAt(mt,nt.clone().multiplyScalar(0.55));let bt=K.y+K.h-0.3-rt;kt.setMatrixAt(mt,Bt.compose(P.set(K.hx,K.y+K.h-0.3,K.hz),S.identity(),x.setScalar(bt/8.5))),kt.setColorAt(mt,nt)}),t.add(st,ft,pt,ct,kt),o.hideInReflection.push(ct)}{let N=new fi([new I(0,0,0),new I(0.3,3,0),new I(1.1,6.5,0),new I(2.2,9.5,0)]),H=[Cs(new Ts(N,10,0.24,6),new vt(0.16,0.12,0.09))];for(let ct=0;ct<8;ct++){let C=[],Rt=ct/8*Math.PI*2+0.3,kt=[];for(let x=0;x<=8;x++){let P=x/8,B=4.2*P,nt=-2.2*P*P,K=Math.sin(Math.PI*P)*0.65,mt=Math.cos(Rt)*B,Z=Math.sin(Rt)*B,rt=-Math.sin(Rt)*K,bt=Math.cos(Rt)*K;kt.push(mt+rt,nt+P*0.6,Z+bt,mt-rt,nt+P*0.6,Z-bt)}let Bt=[];for(let x=0;x<8;x++){let P=x*2;Bt.push(P,P+1,P+2,P+1,P+3,P+2)}let S=new fe;S.setAttribute("position",new oe(kt,3)),S.setIndex(Bt),S.computeVertexNormals(),S.translate(2.2,9.5,0),H.push(Cs(S,new vt(0.05,0.1,0.05)))}let Y=Rn(H.map((ct)=>(ct.deleteAttribute("uv"),ct.index?ct.toNonIndexed():ct))),k=[];for(let ct=0;ct<l;ct+=11){if(e.city[ct]||e.pz[ct]<250||e.py[ct]>6)continue;for(let C of[-1,1]){if(a()<0.25)continue;let Rt=C*(Qt+3.5+a()*2);k.push([e.px[ct]+e.rightX(ct)*Rt,e.py[ct]-0.3,e.pz[ct]+e.rightZ(ct)*Rt])}}for(let ct=0;ct<l;ct+=13){if(!e.city[ct]||e.pz[ct]<140||e.px[ct]>200)continue;let Rt=(ct/13%2?1:-1)*(Qt+3.6);k.push([e.px[ct]+e.rightX(ct)*Rt,0.2,e.pz[ct]+e.rightZ(ct)*Rt])}let st=new cn(Y,new we({vertexColors:!0,roughness:0.85,side:rn}),k.length),ft=new te,pt=new ln,yt=new I(0,1,0);k.forEach((ct,C)=>{let Rt=0.85+a()*0.45;pt.setFromAxisAngle(yt,a()*Math.PI*2),st.setMatrixAt(C,ft.compose(new I(...ct),pt,new I(Rt,Rt,Rt)))}),t.add(st)}{let N=e.startIdx,H=new Qe,Y=new we({color:1842466,roughness:0.4,metalness:0.7});for(let C of[-1,1]){let Rt=new wt(new $t(0.8,8.5,0.8),Y);Rt.position.set(C*(Qt+1.6),4.25,0),H.add(Rt)}let k=new wt(new $t(2*Qt+4,1.6,0.9),Y);k.position.y=8.2,H.add(k);let st=new wt(new Ze(14,1.35),new Le({map:ho("CARBON NIGHTS","#00e5ff",{font:'700 100px "Orbitron", sans-serif'}),color:new vt(2.5,2.5,2.5)}));st.position.set(0,8.2,-0.47),st.rotation.y=Math.PI,H.add(st);let ft=st.clone();ft.position.z=0.47,ft.rotation.y=0,H.add(ft);let pt=new Le({color:new vt(4,1.2,0.2)});for(let C of[7.35,9.05]){let Rt=new wt(new $t(2*Qt+4,0.08,1),pt);Rt.position.y=C,H.add(Rt)}H.position.set(e.px[N],e.py[N],e.pz[N]),H.rotation.y=Math.atan2(e.tx[N],e.tz[N]),t.add(H);let yt=Zd();yt.wrapS=yt.wrapT=ys;let ct=new wt(e.sweep([[-Qt,0.03],[Qt,0.03]],[[N,N+1]],{uvAcross:[0,1],vScale:0.5}),new we({map:yt,roughness:0.5}));t.add(ct)}{let N=[["NOS","#3dfcff"],["DRIFT KINGS","#ff2bd6"],["CANYON","#ffb000"],["PALM BAY","#ff3355"],["TUNER CREW","#7cff4f"],["MIDNIGHT","#b14bff"]],H=0;for(let[Y,k]of f)for(let st=Y+60;st<k-30;st+=230){let ft=st%l,pt=e.curv[ft]>0?-1:1,yt=pt*(Qt+9),[ct,C]=N[H++%N.length],Rt=e.px[ft]+e.rightX(ft)*yt,kt=e.pz[ft]+e.rightZ(ft)*yt,Bt=e.py[ft],S=new Qe,x=new wt(new Ze(12,3.75),new Le({map:ho(ct,C),color:new vt(2,2,2),side:rn}));x.position.y=6.5,S.add(x);for(let P of[-4,4]){let B=new wt(new $t(0.3,5,0.3),new we({color:2236968}));B.position.set(P,2.5,0),S.add(B)}S.position.set(Rt,Bt,kt),S.rotation.y=Math.atan2(-e.tx[ft],-e.tz[ft])+pt*0.5,t.add(S)}}{let st=[600,1080],pt=new Qe,yt=new we({color:3811888,roughness:0.6,metalness:0.4}),ct=new wt(new $t(26,2.4,970),yt);ct.position.set(-330,16,815),pt.add(ct);for(let B of st)for(let nt of[-1,1]){let K=new wt(new $t(3.2,130,3.2),yt);K.position.set(-330+nt*12,47,B),pt.add(K);for(let mt of[46,104]){let Z=new wt(new $t(26,3,3),yt);Z.position.set(-330,mt,B),pt.add(Z)}}for(let B of st){let nt=new wt(new $t(34,30,14),yt);nt.position.set(-330,-10,B),pt.add(nt)}let C=[],Rt=[],kt=(B)=>{let[nt,K]=st;if(B<nt){let Z=(B-330)/(nt-330);return 19+91*Z*Z}if(B>K){let Z=(1300-B)/(1300-K);return 19+91*Z*Z}let mt=(B-nt)/(K-nt);return 20+90*Math.pow(2*mt-1,2)},Bt=[];for(let B of[-1,1]){let nt=[];for(let K=330;K<=1300;K+=6){let mt=kt(K);if(nt.push(new I(-330+B*12,mt,K)),(K-330)%18===0)C.push(-330+B*12,mt,K),Rt.push(1.4,1.5,2.2);if((K-330)%12===0)C.push(-330+B*13,17.6,K),Rt.push(2.4,1.3,0.5);if((K-330)%24===0)Bt.push(new $t(0.15,Math.max(0.1,mt-16),0.15).translate(-330+B*12,(mt+16)/2,K))}Bt.push(new Ts(new fi(nt),160,0.5,5))}for(let B of st)for(let nt of[-1,1])C.push(-330+nt*12,112.2,B),Rt.push(6,0.3,0.2);let S=new wt(Rn(Bt.map((B)=>(B.deleteAttribute("uv"),B.index?B.toNonIndexed():B))),yt);pt.add(S);let x=new fe;x.setAttribute("position",new oe(C,3)),x.setAttribute("color",new oe(Rt,3));let P=new bs(x,new _r({size:3.2,map:Gi(),vertexColors:!0,transparent:!0,blending:tn,depthWrite:!1}));pt.add(P),t.add(pt)}return o.update=(N)=>{xt.color.setRGB(6*(Math.sin(N*3)>0.6?1:0.08),0.3,0.2)},o.hideInReflection.push(d,y,b,R),o}var Ir={tuner:{name:"TUNER",model:"KAZE RX-8",blurb:"Light, twitchy, born to slide.",top:76,power:16,aLat:27,grip:9.5,driftGrip:2,steer:0.62,stats:{speed:0.68,accel:0.8,handling:0.95,drift:1},L:4.3,W:1.82,wheelR:0.33,glow:"#00e5ff"},muscle:{name:"MUSCLE",model:"BRUTUS V8",blurb:"Brutal torque. Smokes everything.",top:81,power:19,aLat:23.5,grip:8.8,driftGrip:1.5,steer:0.54,stats:{speed:0.8,accel:1,handling:0.6,drift:0.85},L:4.75,W:1.96,wheelR:0.36,glow:"#ff7a1a"},exotic:{name:"EXOTIC",model:"VELOCE GT",blurb:"Untouchable top speed, planted grip.",top:90,power:17.5,aLat:26,grip:10.5,driftGrip:1.75,steer:0.55,stats:{speed:1,accel:0.9,handling:0.82,drift:0.65},L:4.6,W:2,wheelR:0.35,glow:"#ff2bd6"}},go;function kc(t,e,n=0.06,i=null){let s=new yr;s.moveTo(t[0][0],t[0][1]);for(let a=1;a<t.length;a++){let o=t[a];if(o.length===4)s.quadraticCurveTo(o[0],o[1],o[2],o[3]);else s.lineTo(o[0],o[1])}if(i){let{fz:a,rz:o,ar:l,by:c}=i;s.lineTo(a+l,c),s.absarc(a,c,l,0,Math.PI,!1),s.lineTo(o+l,c),s.absarc(o,c,l,0,Math.PI,!1)}s.closePath();let r=new Mr(s,{depth:e,bevelEnabled:n>0,bevelThickness:n*1.3,bevelSize:n,bevelSegments:4,curveSegments:14});return r.translate(0,0,-e/2),r.rotateY(-Math.PI/2),r.computeVertexNormals(),r}function O_(t,e){let n=e/2,i=-e/2;if(t==="muscle")return{body:[[i+0.05,0.3],[i,0.5],[i+0.02,0.88],[i+0.5,0.95],[-1,0.96],[0.9,0.94],[n-0.35,0.9],[n,0.84],[n+0.02,0.5],[n-0.05,0.3]],cabin:[[-1.45,0.92],[-0.85,1.36],[0.25,1.38],[0.95,0.92]],roof:[[-0.92,1.3],[-0.82,1.385],[0.25,1.395],[0.35,1.3]]};if(t==="exotic")return{body:[[i+0.05,0.28],[i,0.5],[i+0.05,0.86],[i+0.6,0.9],[-0.9,0.92],[0.2,0.86],[n-0.6,0.66],[n-0.05,0.52,n,0.38],[n-0.05,0.26]],cabin:[[-1.35,0.9],[-0.55,1.18],[0.1,1.18],[1.05,0.8]],roof:[[-0.62,1.13],[-0.5,1.195],[0.08,1.195],[0.2,1.13]]};return{body:[[i+0.05,0.28],[i,0.48],[i+0.04,0.82],[i+0.55,0.88],[-1,0.9],[0.85,0.86],[n-0.4,0.74],[n-0.02,0.62,n,0.45],[n-0.06,0.27]],cabin:[[-1.3,0.88],[-0.6,1.27],[0.25,1.29],[0.95,0.86]],roof:[[-0.68,1.21],[-0.58,1.28],[0.24,1.3],[0.34,1.21]]}}function B_(t,e,n){go??=Gi();let i=Ir[t],{L:s,W:r,wheelR:a}=i,o=new Qe,l=new Qe;o.add(l);let c=new Ui({color:e,metalness:0.7,roughness:0.22,clearcoat:1,clearcoatRoughness:0.09,envMap:n,envMapIntensity:1.8}),u=new Ui({color:395276,metalness:0.3,roughness:0.04,envMap:n,envMapIntensity:2.2}),d=new we({color:657932,roughness:0.55,metalness:0.2,envMap:n,envMapIntensity:0.6}),h=new we({color:14212324,metalness:1,roughness:0.18,envMap:n,envMapIntensity:1.6}),f=new we({color:921104,roughness:0.85}),g=new Le({color:new vt(2.6,2.6,2.4)}),y=new Le({color:new vt(0.9,0,0.02)}),m=O_(t,s),p=s/2-(t==="exotic"?1.22:1.18),b=-s/2+(t==="exotic"?1.15:1.05),w=m.body[m.body.length-1].slice(-1)[0],_=new wt(kc(m.body,r-0.2,0.08,{fz:p,rz:b,ar:a+0.09,by:w}),c);l.add(_);let E=new wt(kc(m.cabin,r*0.78-0.1,0.05),u);l.add(E);let A=new wt(kc(m.roof,r*0.78-0.06,0.05),c);l.add(A);let R=new $t(0.1,0.16,s*0.45);for(let it of[-1,1]){let xt=new wt(R,d);xt.position.set(it*(r/2-0.02),0.3,-0.02),l.add(xt)}let v=new wt(new $t(r-0.1,0.06,0.35),d);v.position.set(0,0.24,s/2-0.1),l.add(v);let T=new wt(new $t(r*0.55,0.16,0.06),d);T.position.set(0,0.38,s/2+0.1),l.add(T);let G=new wt(new $t(r-0.3,0.14,0.3),d);G.position.set(0,0.3,-s/2-0.02),l.add(G);let D=new $t(0.46,0.09,0.1);for(let it of[-1,1]){let xt=new wt(D,g);xt.position.set(it*(r/2-0.36),t==="exotic"?0.6:t==="muscle"?0.72:0.64,s/2+(t==="exotic"?-0.3:0.06)),xt.rotation.y=it*0.12,l.add(xt)}let U=new Ui({color:328967,metalness:0.4,roughness:0.08,clearcoat:1,envMap:n,envMapIntensity:1.5}),et=new wt(new $t(r-0.2,0.22,0.04),U);et.position.set(0,t==="muscle"?0.76:0.72,-s/2-0.1),l.add(et);let L=new wt(new $t(0.52,0.12,0.02),new we({color:14211276,emissive:5592392,roughness:0.5}));L.position.set(0,0.48,-s/2-0.1),l.add(L);for(let it=-2;it<=2;it++){let xt=new wt(new $t(0.03,0.12,0.28),d);xt.position.set(it*0.28,0.26,-s/2-0.05),l.add(xt)}let V=new wt(new $t(r-0.25,0.06,0.05),y);V.position.set(0,t==="muscle"?0.78:0.74,-s/2-0.125),l.add(V);for(let it of[-1,1]){let xt=new wt(new $t(0.34,0.12,0.05),y);xt.position.set(it*(r/2-0.26),t==="muscle"?0.74:0.7,-s/2-0.13),l.add(xt)}for(let it of[-1,1]){let xt=new wt(new $t(0.22,0.1,0.14),c);xt.position.set(it*(r*0.41+0.1),0.98,0.72),l.add(xt)}if(t==="tuner"){let it=new wt(new $t(r-0.1,0.05,0.38),d);it.position.set(0,1.18,-s/2+0.28),it.rotation.x=-0.08,l.add(it);for(let xt of[-0.55,0.55]){let Pt=new wt(new $t(0.06,0.3,0.2),d);Pt.position.set(xt,1,-s/2+0.3),l.add(Pt)}for(let xt of[-1,1]){let Pt=new wt(new $t(0.03,0.18,0.42),c);Pt.position.set(xt*(r/2-0.05),1.18,-s/2+0.28),l.add(Pt)}}else if(t==="muscle"){let it=new wt(new $t(0.62,0.12,0.9),d);it.position.set(0,0.99,1.25),l.add(it);let xt=new wt(new $t(r-0.3,0.06,0.16),c);xt.position.set(0,0.99,-s/2+0.15),xt.rotation.x=0.25,l.add(xt);let Pt=new Ui({color:15921906,metalness:0.3,roughness:0.3,clearcoat:1,envMap:n});for(let Mt of[-0.2,0.2]){let jt=new wt(new $t(0.16,0.012,1.9),Pt);jt.position.set(Mt,0.962,1.35),l.add(jt);let N=new wt(new $t(0.16,0.012,1),Pt);N.position.set(Mt,1.4,-0.3),l.add(N)}}else{let it=new wt(new $t(r-0.25,0.05,0.26),d);it.position.set(0,0.95,-s/2+0.2),it.rotation.x=0.2,l.add(it);for(let xt of[-1,1]){let Pt=new wt(new $t(0.06,0.22,0.6),d);Pt.position.set(xt*(r/2+0.01),0.62,-0.6),l.add(Pt)}}let tt=[],q=new Le({color:new vt(1.2,1.8,6),transparent:!0,blending:tn,depthWrite:!1,map:go});for(let it of t==="muscle"?[-0.6,-0.45,0.45,0.6]:[-0.42,0.42]){let xt=new wt(new xn(0.06,0.06,0.18,10).rotateX(Math.PI/2),h);xt.position.set(it,0.3,-s/2-0.1),l.add(xt);let Pt=new wt(new On(0.13,1.2,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-0.6),q);Pt.position.set(it,0.3,-s/2-0.18),Pt.visible=!1,l.add(Pt),tt.push(Pt)}let ut=[],j=new xn(a,a,0.27,28).rotateZ(Math.PI/2),ot=new xn(a*0.66,a*0.66,0.285,20).rotateZ(Math.PI/2),lt=new $t(0.03,a*1.25,0.07),Nt=t==="muscle"?h:new we({color:t==="tuner"?1710622:3816772,metalness:0.9,roughness:0.3,envMap:n});for(let[it,xt,Pt]of[[-1,p,!0],[1,p,!0],[-1,b,!1],[1,b,!1]]){let Mt=new Qe;Mt.position.set(it*(r/2-0.16),a,xt);let jt=new Qe;jt.add(new wt(j,f));let N=new wt(ot,Nt);jt.add(N);for(let H=0;H<5;H++){let Y=new wt(lt,Nt);Y.position.x=it*0.13,Y.rotation.x=H/5*Math.PI,jt.add(Y)}Mt.add(jt),o.add(Mt),ut.push({pivot:Mt,spin:jt,front:Pt})}let Ft=new wt(new Ze(r*1.7,s*1.35).rotateX(-Math.PI/2),new Le({map:go,color:0,transparent:!0,opacity:0.85,depthWrite:!1}));Ft.position.y=0.04,o.add(Ft);let re=new vt(i.glow),Zt=new wt(new Ze(r*2.2,s*1.4).rotateX(-Math.PI/2),new Le({map:go,color:re.clone().multiplyScalar(1.6),transparent:!0,blending:tn,depthWrite:!1}));Zt.position.y=0.06,o.add(Zt);let Q=new to(16773596,1100,140,0.48,0.6,1.5);Q.position.set(0,0.75,s/2),Q.target.position.set(0,-1.2,s/2+24),o.add(Q,Q.target);let gt=new pe({transparent:!0,depthWrite:!1,blending:tn,vertexShader:`
      varying float vH; varying float vF;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vF = abs(dot(n, normalize(-mv.xyz)));
        vH = uv.y;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vH; varying float vF; uniform float uI;
      void main() { float a = pow(clamp(vH, 0.0, 1.0), 2.2) * pow(clamp(vF, 0.0, 1.0), 2.0) * 0.06 * uI; gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * a, 1.0); }`,uniforms:{uI:{value:1}}});for(let it of[-1,1]){let xt=new wt(new On(2.6,16,20,1,!0).translate(0,-8,0).rotateX(-Math.PI/2+0.06),gt);xt.position.set(it*(r/2-0.36),0.66,s/2),l.add(xt)}return o.traverse((it)=>{if(it.isMesh)it.frustumCulled=!0}),{group:o,body:l,wheels:ut,flames:tt,tail:y,paint:c,spot:Q,under:Zt,beamMat:gt}}class Pr{constructor(t,e,n,i="YOU"){this.type=t,this.spec=Ir[t],this.name=i,this.model=B_(t,e,n),this.obj=this.model.group,this.x=0,this.y=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.yaw=0,this.steer=0,this.vF=0,this.vR=0,this.speed=0,this.drifting=!1,this.driftTime=0,this.slip=0,this.nitro=1,this.nitroOn=!1,this.gear=1,this.rpm=900,this.wheelRot=0,this.roll=0,this.pitch=0,this.slopePitch=0,this.q={i:0},this.lap=0,this.passedHalf=!0,this.rel=0,this.progress=0,this.finished=!1,this.finishTime=0,this.impact=0,this.braking=!1,this.acc=0,this.wrongWay=0}place(t,e,n){let i=t.pointAt(e,n),s=Math.floor(e)%t.N;this.x=i.x,this.z=i.z,this.y=i.y,this.h=Math.atan2(t.tx[s],t.tz[s]),this.vx=this.vz=this.yaw=this.steer=0,this.drifting=!1,t.project(this.x,this.z,-1,this.q);let r=t.length;this.rel=(this.q.s-t.startIdx*t.ds+r)%r,this.syncObj()}update(t,e,n){let i=this.spec,s=Math.sin(this.h),r=Math.cos(this.h),a=-r,o=s,l=this.vx*s+this.vz*r,c=this.vx*a+this.vz*o,u=Math.hypot(this.vx,this.vz),d=e.steer;this.steer+=(d-this.steer)*Math.min(1,t*(Math.abs(d)>Math.abs(this.steer)?7:12));let h=i.steer*(1-Math.min(0.7,u/100)),f=this.steer*h;this.nitroOn=e.nitro&&this.nitro>0.01&&e.throttle>0.1&&l>2;let g=i.top*(this.nitroOn?1.17:1)*(e.topMul??1),y=0;if(e.throttle>0&&l>-1)y+=i.power*(e.powerMul??1)*e.throttle*Math.max(0,1-Math.pow(Math.max(0,l)/g,2.4))+(this.nitroOn?12:0);else if(e.throttle>0)y+=22*e.throttle;if(this.braking=!1,e.brake>0){if(l>0.5)y-=32*e.brake,this.braking=!0;else if(l>-16)y-=10*e.brake}if(y-=0.0011*l*Math.abs(l),Math.abs(l)>0.2)y-=Math.sign(l)*0.5;if(l>i.top*1.02&&!this.nitroOn)y-=(l-i.top)*1.5;if(e.handbrake&&Math.abs(l)>0.5)y-=Math.sign(l)*6;let m=l;if(l+=y*t,e.throttle===0&&e.brake===0&&Math.abs(l)<0.4)l=0;if(m>0&&l<0&&e.brake>0&&e.throttle===0&&Math.abs(m)>0.5)l=0;this.acc=y;let p=Math.atan2(c,Math.max(Math.abs(l),1));if(this.slip=p,!this.drifting&&u>14&&l>0){if(e.handbrake)this.drifting=!0,this.driftTime=0,this.yaw+=this.steer*1.1;else if(e.brake>0.5&&e.throttle>0.5&&Math.abs(this.steer)>0.6&&u>24)this.drifting=!0,this.driftTime=0,this.yaw+=this.steer*0.7}if(this.drifting){if(this.driftTime+=t,Math.abs(p)<0.09&&!e.handbrake&&this.driftTime>0.35||u<7||l<0)this.drifting=!1}let b=this.drifting?i.driftGrip*(e.handbrake?0.6:1):i.grip*(e.handbrake?0.35:1),w=c*Math.exp(-b*t);if(this.drifting&&l>0&&l<g)l+=Math.abs(c-w)*0.3-Math.abs(p)*3.5*t;c=w;let _=l*Math.tan(f)/2.6,E=i.aLat*(this.drifting?1.55:1)/Math.max(u,1);if(Math.abs(l)>3)_=Math.max(-E,Math.min(E,_));if(this.drifting)_*=1.25;this.yaw+=(_-this.yaw)*(1-Math.exp(-t*(this.drifting?3.4:9))),this.h-=this.yaw*t,this.vx=s*l+a*c,this.vz=r*l+o*c,this.x+=this.vx*t,this.z+=this.vz*t,this.vF=l,this.vR=c,this.speed=Math.hypot(this.vx,this.vz);let A=n.project(this.x,this.z,this.q.i,this.q),R=An-1.05;if(this.impact=0,Math.abs(A.lat)>R){let ut=Math.sign(A.lat),j=A.lat-ut*R;this.x-=A.rx*j,this.z-=A.rz*j;let ot=A.rx*ut,lt=A.rz*ut,Nt=this.vx*ot+this.vz*lt;if(Nt>0){this.vx-=ot*Nt*1.35,this.vz-=lt*Nt*1.35;let Ft=1-Math.min(0.45,Nt*0.025);this.vx*=Ft,this.vz*=Ft,this.impact=Nt,this.yaw*=0.4;let re=Math.atan2(A.tx,A.tz),gt=((Math.sin(this.h)*A.tx+Math.cos(this.h)*A.tz>=0?re:re+Math.PI)-this.h+Math.PI*3)%(Math.PI*2)-Math.PI;if(this.h+=gt*Math.min(1,Nt*0.02),Nt>5)this.drifting=!1}}this.y=A.y,this.slopePitch=Math.atan(A.slope)*(Math.sin(this.h)*A.tx+Math.cos(this.h)*A.tz);let v=n.length,T=n.startIdx*n.ds,G=(A.s-T+v)%v;if(G>v*0.4&&G<v*0.6)this.passedHalf=!0;if(this.rel>v*0.8&&G<v*0.2){if(this.passedHalf)this.lap++,this.passedHalf=!1,this.lapEvent=!0}else if(this.rel<v*0.2&&G>v*0.8)this.lap--,this.passedHalf=!0;this.rel=G,this.progress=(this.lap-1)*v+G;let D=Math.sin(this.h)*A.tx+Math.cos(this.h)*A.tz;if(this.wrongWay=D<-0.3&&this.speed>6?this.wrongWay+t:0,this.nitroOn)this.nitro=Math.max(0,this.nitro-t*0.22);else this.nitro=Math.min(1,this.nitro+t*(this.drifting?0.07*Math.min(1,Math.abs(p)*3):0.012));let U=[0.18,0.34,0.5,0.66,0.83,1.05],et=Math.abs(l),L=0;while(L<5&&et>U[L]*i.top)L++;let V=L===0?0:U[L-1]*i.top,tt=U[L]*i.top,q=1000+(et-V)/(tt-V)*6900;if(L>0)q=3600+(et-V)/(tt-V)*4300;if(this.drifting)q+=700;if(e.throttle>0&&et<3)q=2500+e.throttle*3500;this.gear=l<-0.5?"R":L+1,this.rpm+=(Math.min(8200,q)-this.rpm)*Math.min(1,t*10)}syncObj(t=0.016,e=0){let n=this.obj;n.position.set(this.x,this.y,this.z),n.rotation.set(0,this.h,0,"YXZ");let i=this.yaw*this.vF;this.roll+=(Math.max(-0.07,Math.min(0.07,i*0.0022))-this.roll)*Math.min(1,t*6),this.pitch+=(Math.max(-0.05,Math.min(0.05,-this.acc*0.0016))-this.pitch)*Math.min(1,t*5),n.rotation.x=-this.slopePitch,this.model.body.rotation.set(this.pitch,0,this.roll),this.model.body.position.y=Math.sin(e*33)*0.004*Math.min(1,this.speed/30),this.wheelRot+=this.vF*t/this.spec.wheelR;for(let r of this.model.wheels)if(r.spin.rotation.x=this.wheelRot,r.front)r.pivot.rotation.y=-this.steer*0.5;let s=this.braking||this.drifting;this.model.tail.color.setRGB(s?2.2:0.9,s?0.01:0,s?0.03:0.02);for(let r of this.model.flames)if(r.visible=this.nitroOn,this.nitroOn)r.scale.set(1,1,0.7+Math.random()*0.7)}}class xo{constructor(t,e,{skill:n=1,lane:i=0,seed:s=1}={}){this.car=t,this.track=e,this.skill=n,this.lane=i,this.baseLane=i,this.phase=s*1.7,this.avoid=0,this.nitroCool=0}input(t,e,n,i){let s=this.car,r=this.track,a=r.N,o=s.q,l=s.speed,c=Math.max(0.86,Math.min(1.16,1+n*0.0007)),u=this.skill*c,d=s.spec.aLat*0.93,h=s.spec.top*Math.min(1.08,u),f=Math.min(260,30+l*l/30);for(let U=0;U<f;U+=4){let et=(o.i+Math.round(U/r.ds))%a,L=Math.abs(r.curv[et])+0.0001,V=Math.sqrt(d*Math.min(1,u)/L),tt=Math.sqrt(V*V+40*U);if(tt<h)h=tt}let g=0,y=Math.sin(s.h),m=Math.cos(s.h);for(let U of e){if(U===s)continue;let et=U.x-s.x,L=U.z-s.z,V=et*y+L*m,tt=et*-m+L*y;if(V>0&&V<16+l*0.3&&Math.abs(tt)<3.2){if(g+=(tt>0?-1:1)*4.5,V<9&&U.speed<l)h=Math.min(h,U.speed+4)}}this.avoid+=(g-this.avoid)*Math.min(1,t*2),this.lane=this.baseLane+Math.sin(i*0.13+this.phase)*2.2;let p=Math.max(-An+2.2,Math.min(An-2.2,this.lane+this.avoid)),b=6+l*0.42,w=r.pointAt(o.i+o.f+b/r.ds,p),_=w.x-s.x,E=w.z-s.z,A=Math.atan2(_*-m+E*y,_*y+E*m),R=Math.max(-1,Math.min(1,A*2.6)),v=l<h?1:l<h+1.5?0.3:0,T=l>h+2.5?Math.min(1,(l-h)/8):0;if(this.nitroCool-=t,h>l+12&&s.nitro>0.3&&this.nitroCool<0&&Math.random()<0.02)this.nitroCool=2.5;let D=this.nitroCool>0.5&&h>l+4;return{throttle:v,brake:T,steer:R,handbrake:!1,nitro:D,powerMul:Math.min(1.1,u),topMul:Math.min(1.06,u)}}}function ef(t,e){for(let n=0;n<t.length;n++)for(let i=n+1;i<t.length;i++){let s=t[n],r=t[i],a=r.x-s.x,o=r.z-s.z;if(a*a+o*o>49)continue;if(Math.abs(s.y-r.y)>3)continue;for(let l of[-1.15,1.15])for(let c of[-1.15,1.15]){let u=s.x+Math.sin(s.h)*l,d=s.z+Math.cos(s.h)*l,h=r.x+Math.sin(r.h)*c,f=r.z+Math.cos(r.h)*c,g=h-u,y=f-d,m=Math.hypot(g,y),p=2.05;if(m<2.05&&m>0.0001){let b=g/m,w=y/m,_=(2.05-m)/2;s.x-=b*_,s.z-=w*_,r.x+=b*_,r.z+=w*_;let E=(r.vx-s.vx)*b+(r.vz-s.vz)*w;if(E<0){let A=-E*0.6;s.vx-=b*A,s.vz-=w*A,r.vx+=b*A,r.vz+=w*A,s.yaw+=(Math.random()-0.5)*E*0.02,r.yaw+=(Math.random()-0.5)*E*0.02,e?.(s,r,-E,(u+h)/2,(s.y+r.y)/2+0.6,(d+f)/2)}}}}}var Is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Mn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var z_=new zi(-1,1,1,-1,0,1);class nf extends fe{constructor(){super();this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}var H_=new nf;class ki{constructor(t){this._mesh=new wt(H_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,z_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ps extends Mn{constructor(t,e="tDiffuse"){super();if(this.textureID=e,this.uniforms=null,this.material=null,t instanceof pe)this.uniforms=t.uniforms,this.material=t;else if(t)this.uniforms=ei.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader});this._fsQuad=new ki(this.material)}render(t,e,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(e),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _o extends Mn{constructor(t,e){super();this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear)t.clear();if(t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear)t.clear();t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Vc extends Mn{constructor(){super();this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Wc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new Ie(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Be}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ps(Is),this.copyPass.material.blending=gn,this.timer=new no}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);if(e!==-1)this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){if(this.timer.update(),t===void 0)t=this.timer.getDelta();let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(_o!==void 0){if(r instanceof _o)n=!0;else if(r instanceof Vc)n=!1}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xc extends Mn{constructor(t,e,n=null,i=null,s=null){super();this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha());if(this.clearAlpha!==null)s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)t.clearDepth();if(t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);if(t.render(this.scene,this.camera),this.clearColor!==null)t.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)t.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;t.autoClear=i}}var sf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vi extends Mn{constructor(t,e=1,n,i){super();this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ie(s,r,{type:Be,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new Ie(s,r,{type:Be,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ie(s,r,{type:Be,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let a=sf;this.highPassUniforms=ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ht(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ei.clone(Is.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:Is.vertexShader,fragmentShader:Is.fragmentShader,premultipliedAlpha:!0,blending:tn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Le,this._fsQuad=new ki(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ht(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let r=t.autoClear;if(t.autoClear=!1,t.setClearColor(this.clearColor,0),s)t.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=Vi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=Vi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[o];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)t.state.buffers.stencil.setTest(!0);if(this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else t.setRenderTarget(n),this._fsQuad.render(t);t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let r=0;r<t;r++)e.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<t;r+=2){let a=e[r],o=r+1<t?e[r+1]:0,l=a+o;i.push((r*a+(r+1)*o)/l),s.push(l)}return new pe({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ht(0.5,0.5)},direction:{value:new ht(0.5,0.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Vi.BlurDirectionX=new ht(1,0);Vi.BlurDirectionY=new ht(0,1);var Lr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class qc extends Mn{constructor(){super();this.isOutputPass=!0,this.uniforms=ei.clone(Lr.uniforms),this.material=new Sr({name:Lr.name,uniforms:this.uniforms,vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader}),this._fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping){if(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===_e)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ir)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===sr)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===rr)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Ei)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===or)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===lr)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ar)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(e),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Yc{constructor(t=9000){let n=new Float32Array(t*6),i=new Float32Array(t*2),s=new Float32Array(t*2);for(let o=0;o<t;o++){let l=Math.random()*90,c=Math.random()*50,u=Math.random()*90,d=Math.random();n.set([l,c,u,l,c,u],o*6),i[o*2]=0,i[o*2+1]=1,s[o*2]=s[o*2+1]=d}let r=new fe;r.setAttribute("position",new xe(n,3)),r.setAttribute("aEnd",new xe(i,1)),r.setAttribute("aRnd",new xe(s,1)),this.uniforms={uTime:{value:0},uCam:{value:new I},uVel:{value:new I},uAmt:{value:1}};let a=new pe({transparent:!0,depthWrite:!1,blending:tn,uniforms:this.uniforms,vertexShader:`
        attribute float aEnd; attribute float aRnd;
        uniform float uTime; uniform vec3 uCam; uniform vec3 uVel; uniform float uAmt;
        varying float vA;
        void main() {
          const vec3 B = vec3(90.0, 50.0, 90.0);
          float fall = 26.0 + aRnd * 10.0;
          vec3 p = position + vec3(uTime * 3.0, -uTime * fall, uTime * 1.0);
          p = mod(p - uCam + B * 0.5, B) - B * 0.5 + uCam;
          vec3 streak = vec3(3.0, -fall, 1.0) * 0.022 - uVel * 0.03;
          p += streak * aEnd;
          vA = (0.12 + 0.18 * aRnd) * step(aRnd, uAmt) * (1.0 - aEnd * 0.6);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vA *= smoothstep(2.5, 9.0, -mv.z) * (1.0 - smoothstep(30.0, 45.0, -mv.z)) * 0.8;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA;
        void main() { gl_FragColor = vec4(vec3(0.75, 0.82, 1.0) * vA, 1.0); }`});this.mesh=new ka(r,a),this.mesh.frustumCulled=!1}update(t,e,n){this.uniforms.uTime.value=t,this.uniforms.uCam.value.copy(e),this.uniforms.uVel.value.copy(n)}}class vo{constructor(t,{additive:e=!1,texture:n,gravity:i=0,drag:s=1,color:r=[1,1,1]}={}){this.max=t,this.gravity=i,this.drag=s,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.cursor=0;let a=new fe;a.setAttribute("position",new xe(this.pos,3).setUsage(Pi)),a.setAttribute("aSize",new xe(this.size,1).setUsage(Pi)),a.setAttribute("aAlpha",new xe(this.alpha,1).setUsage(Pi)),this.geo=a;let o=new pe({transparent:!0,depthWrite:!1,blending:e?tn:bi,uniforms:{uTex:{value:n},uColor:{value:new vt(...r)},uScale:{value:600}},vertexShader:`
        attribute float aSize; attribute float aAlpha; varying float vA; uniform float uScale;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(-mv.z, 0.5);
          vA = aAlpha;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uTex; uniform vec3 uColor; varying float vA;
        void main() {
          vec4 t = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(uColor * t.rgb, t.a * vA);
          #include <colorspace_fragment>
        }`});this.mesh=new bs(a,o),this.mesh.frustumCulled=!1}emit(t,e,n,i,s,r,a,o,l=0,c=1){let u=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=n,this.vel[u*3]=i,this.vel[u*3+1]=s,this.vel[u*3+2]=r,this.life[u]=a,this.maxLife[u]=a,this.size[u]=o,this.grow[u]=l,this.alpha[u]=c,this.baseAlpha??=new Float32Array(this.max),this.baseAlpha[u]=c}update(t){let e=Math.exp(-this.drag*t);for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t,this.vel[n*3]*=e,this.vel[n*3+1]=this.vel[n*3+1]*e-this.gravity*t,this.vel[n*3+2]*=e,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t;let i=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=this.baseAlpha[n]*i*Math.min(1,(1-i)*6+0.2)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}}function rf(){return new vo(500,{texture:Fc(),drag:1.6,gravity:-0.6,color:[0.4,0.39,0.46]})}function af(){return new vo(300,{texture:Gi(),additive:!0,drag:0.6,gravity:14,color:[6,2.6,0.6]})}function of(){return new vo(400,{texture:Fc(),drag:2.5,gravity:2,color:[0.5,0.55,0.7]})}class Zc{constructor(t=2400){this.max=t,this.cursor=0,this.pos=new Float32Array(t*6*3),this.a=new Float32Array(t*6);let e=new fe;e.setAttribute("position",new xe(this.pos,3).setUsage(Pi)),e.setAttribute("aA",new xe(this.a,1).setUsage(Pi)),this.geo=e,this.mesh=new wt(e,new pe({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.0, 0.0, 0.0, vA); }"})),this.mesh.frustumCulled=!1,this.last=new Map}add(t,e,n,i,s,r,a){let o=this.last.get(t);if(this.last.set(t,{x:e,y:n,z:i,rx:s,rz:r}),!o)return;let l=e-o.x,c=i-o.z;if(l*l+c*c>16||l*l+c*c<0.01)return;let u=0.14,d=this.cursor;this.cursor=(this.cursor+1)%this.max;let h=[[o.x-o.rx*u,o.y,o.z-o.rz*u],[o.x+o.rx*u,o.y,o.z+o.rz*u],[e-s*u,n,i-r*u],[e+s*u,n,i+r*u]];[0,2,1,1,2,3].forEach((g,y)=>{this.pos.set(h[g],(d*6+y)*3),this.a[d*6+y]=0.55*a}),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aA.needsUpdate=!0}break(t){this.last.delete(t)}}var G_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uSpeed:{value:0},uNitro:{value:0},uSlow:{value:0},uHit:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uSpeed, uNitro, uSlow, uHit; varying vec2 vUv;
    float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float r = length(c);
      // radial speed blur
      float blur = (uSpeed * 0.018 + uNitro * 0.03) * smoothstep(0.12, 0.6, r);
      vec3 col = vec3(0.0);
      for (int i = 0; i < 8; i++) { float k = float(i) / 7.0; col += texture2D(tDiffuse, vUv - c * blur * k).rgb; }
      col /= 8.0;
      // chromatic aberration toward the edges
      float ca = 0.0025 * r * r * 4.0 * (1.0 + uNitro * 2.0 + uHit * 6.0);
      col.r = mix(col.r, texture2D(tDiffuse, vUv - c * ca).r, 0.8);
      col.b = mix(col.b, texture2D(tDiffuse, vUv + c * ca).b, 0.8);
      // carbon grade: teal shadows, warm highlights
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, col * vec3(0.86, 1.02, 1.12), (1.0 - smoothstep(0.0, 0.4, l)) * 0.5);
      col = mix(col, col * vec3(1.08, 1.0, 0.9), smoothstep(0.3, 1.2, l) * 0.35);
      // speedbreaker: desaturate + cold tint
      col = mix(col, vec3(l) * vec3(0.7, 0.95, 1.25), uSlow * 0.55);
      // vignette
      col *= mix(1.0, (1.0 - smoothstep(0.25, 0.85, r)), 0.55 + uSlow * 0.3);
      col += (rand(vUv * 731.0 + uTime) - 0.5) * 0.025;
      gl_FragColor = vec4(col, 1.0);
    }`};function lf(t,e,n){let i=t.getDrawingBufferSize(new ht),s=new Ie(i.x,i.y,{type:Be,samples:4}),r=new Wc(t,s);r.addPass(new Xc(e,n)),r.addPass(new Ps({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv);
        if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
        gl_FragColor = vec4(min(c.rgb, vec3(16.0)), 1.0); }`}));let a=new Vi(new ht(i.x,i.y),0.45,0.45,1.05);r.addPass(a);let o=new Ps(G_);return r.addPass(o),r.addPass(new qc),{composer:r,bloom:a,final:o}}class $c{constructor(){this.ctx=null,this.musicOn=!0,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=0.7,this.master.connect(t.destination);let e=t.createDynamicsCompressor();e.connect(this.master),this.out=e,this.noiseBuf=t.createBuffer(1,t.sampleRate*2,t.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=Math.random()*2-1;this.eng=t.createGain(),this.eng.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.Q.value=4;let i=t.createWaveShaper(),s=new Float32Array(1024);for(let r=0;r<1024;r++){let a=r/512-1;s[r]=Math.tanh(a*2.5)}i.curve=s,this.oscs=[];for(let[r,a,o]of[["sawtooth",1,0.5],["sawtooth",1.005,0.4],["square",0.5,0.35],["triangle",2,0.15]]){let l=t.createOscillator();l.type=r;let c=t.createGain();c.gain.value=o,l.connect(c),c.connect(i),l.start(),this.oscs.push([l,a])}i.connect(this.engFilter),this.engFilter.connect(this.eng),this.eng.connect(this.out),this.skid=this.loopNoise("bandpass",1300,2.5),this.wind=this.loopNoise("lowpass",500,0.5),this.nos=this.loopNoise("bandpass",2400,1.2),this.rain=this.loopNoise("highpass",3500,0.3),this.rain.gain.gain.value=0.035,this.music=t.createGain(),this.music.gain.value=0.16,this.music.connect(this.out),this.nextNote=t.currentTime+0.1,this.step=0}loopNoise(t,e,n){let i=this.ctx,s=i.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;let r=i.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=n;let a=i.createGain();return a.gain.value=0,s.connect(r),r.connect(a),a.connect(this.out),s.start(),{src:s,filter:r,gain:a}}setMuted(t){if(this.muted=t,this.master)this.master.gain.value=t?0:0.7}toggleMusic(){if(this.musicOn=!this.musicOn,this.music)this.music.gain.value=this.musicOn?0.16:0;return this.musicOn}update(t,e,n=1){if(!this.ctx)return;let i=this.ctx.currentTime,s=t?t.rpm:900,r=(28+s/60*0.9)*(0.75+0.25*n);for(let[l,c]of this.oscs)l.frequency.setTargetAtTime(r*c,i,0.03);let a=t?.throttleIn??0;this.engFilter.frequency.setTargetAtTime(300+s*0.25+a*1400,i,0.05),this.eng.gain.setTargetAtTime(e?0.13+a*0.12:0.06,i,0.05);let o=t?Math.min(1,Math.abs(t.slip)*2.5)*Math.min(1,t.speed/20):0;this.skid.gain.gain.setTargetAtTime(e&&(t.drifting||o>0.35)?0.22*o+0.04:0,i,0.05),this.skid.filter.frequency.setTargetAtTime(900+o*900,i,0.1),this.wind.gain.gain.setTargetAtTime(t?Math.min(0.3,t.speed/300):0,i,0.1),this.wind.filter.frequency.setTargetAtTime(300+(t?.speed??0)*12,i,0.1),this.nos.gain.gain.setTargetAtTime(t?.nitroOn?0.12:0,i,0.05),this.music.gain.setTargetAtTime(this.musicOn?0.16:0,i,0.3),this.schedule()}schedule(){let t=this.ctx,n=[[57,60,64,69],[53,57,60,65],[48,52,55,60],[55,59,62,67]];while(this.nextNote<t.currentTime+0.2){let i=Math.floor(this.step/16)%4,s=this.step%16,r=n[i],a=this.nextNote;if(this.musicOn){if(s%2===0)this.note(r[0]-24,a,0.24,"sawtooth",0.32,260);let o=r[[0,1,2,3,2,1,3,2][s%8]]+(s>=8?12:0);if(this.note(o,a,0.135,"square",0.07,1800),s===0)for(let l of r)this.note(l,a,2.25,"sawtooth",0.035,900);if(s%4===0)this.kick(a);if(s%8===4)this.hat(a,0.12);else if(s%2===1)this.hat(a,0.04)}this.nextNote+=0.15,this.step++}}note(t,e,n,i,s,r){let a=this.ctx,o=a.createOscillator(),l=a.createGain(),c=a.createBiquadFilter();o.type=i,o.frequency.value=440*Math.pow(2,(t-69)/12),c.type="lowpass",c.frequency.value=r,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(s,e+0.01),l.gain.exponentialRampToValueAtTime(0.0001,e+n),o.connect(c),c.connect(l),l.connect(this.music),o.start(e),o.stop(e+n+0.05)}kick(t){let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.frequency.setValueAtTime(130,t),n.frequency.exponentialRampToValueAtTime(40,t+0.15),i.gain.setValueAtTime(0.5,t),i.gain.exponentialRampToValueAtTime(0.001,t+0.25),n.connect(i),i.connect(this.music),n.start(t),n.stop(t+0.3)}hat(t,e){let n=this.ctx,i=n.createBufferSource(),s=n.createBiquadFilter(),r=n.createGain();i.buffer=this.noiseBuf,s.type="highpass",s.frequency.value=7000,r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(0.001,t+0.05),i.connect(s),s.connect(r),r.connect(this.music),i.start(t,Math.random()),i.stop(t+0.06)}impact(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain();i.buffer=this.noiseBuf,s.type="lowpass",s.frequency.value=900+t*80;let a=Math.min(0.9,0.15+t*0.04);r.gain.setValueAtTime(a,n),r.gain.exponentialRampToValueAtTime(0.001,n+0.35),i.connect(s),s.connect(r),r.connect(this.out),i.start(n,Math.random()),i.stop(n+0.4);let o=e.createOscillator(),l=e.createGain();o.frequency.setValueAtTime(90,n),o.frequency.exponentialRampToValueAtTime(35,n+0.2),l.gain.setValueAtTime(a,n),l.gain.exponentialRampToValueAtTime(0.001,n+0.25),o.connect(l),l.connect(this.out),o.start(n),o.stop(n+0.3)}beep(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="square",i.frequency.value=t?1320:660,s.gain.setValueAtTime(0.18,n),s.gain.exponentialRampToValueAtTime(0.001,n+(t?0.7:0.25)),i.connect(s),s.connect(this.out),i.start(n),i.stop(n+0.8)}whoosh(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource(),i=t.createBiquadFilter(),s=t.createGain();n.buffer=this.noiseBuf,i.type="bandpass",i.Q.value=2,i.frequency.setValueAtTime(400,e),i.frequency.exponentialRampToValueAtTime(3000,e+0.4),s.gain.setValueAtTime(0.25,e),s.gain.exponentialRampToValueAtTime(0.001,e+0.6),n.connect(i),i.connect(s),s.connect(this.out),n.start(e),n.stop(e+0.7)}shift(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource(),i=t.createBiquadFilter(),s=t.createGain();n.buffer=this.noiseBuf,i.type="bandpass",i.frequency.value=1800,i.Q.value=6,s.gain.setValueAtTime(0.08,e),s.gain.exponentialRampToValueAtTime(0.001,e+0.12),n.connect(i),i.connect(s),s.connect(this.out),n.start(e,Math.random()),n.stop(e+0.15)}}var De=(t)=>document.getElementById(t);function pi(t){if(!isFinite(t))return"--:--.--";let e=Math.floor(t/60),n=t-e*60;return`${e}:${n<10?"0":""}${n.toFixed(2)}`}var Jc=(t)=>t+(["th","st","nd","rd"][t%100>10&&t%100<14?0:t%10]||"th");class Kc{constructor(t){this.track=t,this.speedo=De("speedo").getContext("2d"),this.nos=De("nos").getContext("2d"),this.mini=De("minimap").getContext("2d"),this.msgTimer=0,this.chainTimer=0,this.path=[];for(let e=0;e<t.N;e+=3)this.path.push([t.px[e],t.pz[e]])}show(t){De("hud").classList.toggle("hidden",!t)}message(t,e=2){let n=De("msg");n.textContent=t,n.classList.add("show"),this.msgTimer=e}countdown(t){let e=De("count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}chain(t,e="",n=0){let i=De("chain");i.innerHTML=t,i.className=e,this.chainTimer=n}tick(t){if(this.msgTimer>0&&(this.msgTimer-=t)<=0)De("msg").classList.remove("show");if(this.chainTimer>0&&(this.chainTimer-=t)<=0)De("chain").innerHTML=""}setMode(t,e){De("posbox").classList.toggle("hidden",t!=="race"),De("lapbox").classList.toggle("hidden",t==="free"),De("standings").classList.toggle("hidden",t!=="race"),De("driftbox").classList.toggle("hidden",t!=="drift"),De("timebox").classList.toggle("hidden",t==="free"),this.laps=e}update({pos:t,total:e,lap:n,time:i,best:s,standings:r,drift:a}){if(t!=null)De("pos").textContent=t,De("posof").textContent="/"+e;if(De("lap").textContent=`${Math.max(1,Math.min(n,this.laps))}/${this.laps}`,De("time").textContent=pi(i),De("best").textContent=s?"BEST LAP "+pi(s):"",r)De("standings").innerHTML=r.map((o)=>`<div class="${o.me?"me":""}" style="--c:${o.color}"><span>${o.pos}</span><span>${o.name}</span><em>${o.gap}</em></div>`).join("");if(a!=null)De("driftscore").textContent=Math.floor(a).toLocaleString()}drawSpeedo(t,e,n){let i=this.speedo;i.clearRect(0,0,520,520);let o=Math.PI*0.75,l=Math.PI*2.25,c=9000,u=(m)=>o+(l-o)*Math.min(1,m/c),d=i.createRadialGradient(270,270,40,270,270,230);d.addColorStop(0,"rgba(6,8,20,0.85)"),d.addColorStop(0.85,"rgba(6,8,20,0.55)"),d.addColorStop(1,"rgba(6,8,20,0)"),i.fillStyle=d,i.beginPath(),i.arc(270,270,230,0,Math.PI*2),i.fill(),i.lineCap="butt",i.lineWidth=14,i.strokeStyle="rgba(255,255,255,0.1)",i.beginPath(),i.arc(270,270,196,o,l),i.stroke(),i.strokeStyle="rgba(255,40,70,0.55)",i.beginPath(),i.arc(270,270,196,u(7400),l),i.stroke();let h=i.createLinearGradient(40,400,480,120);h.addColorStop(0,"#00e5ff"),h.addColorStop(0.7,"#ff2bd6"),h.addColorStop(1,"#ff3355"),i.strokeStyle=h,i.shadowColor="#00e5ff",i.shadowBlur=16,i.beginPath(),i.arc(270,270,196,o,u(t.rpm)),i.stroke(),i.shadowBlur=0,i.fillStyle="#dfe8ff",i.font="600 24px Orbitron",i.textAlign="center",i.textBaseline="middle";for(let m=0;m<=9;m++){let p=u(m*1000);if(i.strokeStyle=m>=8?"#ff3355":"rgba(255,255,255,0.75)",i.lineWidth=4,i.beginPath(),i.moveTo(270+Math.cos(p)*172,270+Math.sin(p)*172),i.lineTo(270+Math.cos(p)*184,270+Math.sin(p)*184),i.stroke(),i.fillStyle=m>=8?"#ff3355":"rgba(255,255,255,0.8)",i.fillText(m,270+Math.cos(p)*148,270+Math.sin(p)*148),m<9){let b=u(m*1000+500);i.lineWidth=2,i.strokeStyle="rgba(255,255,255,0.35)",i.beginPath(),i.moveTo(270+Math.cos(b)*178,270+Math.sin(b)*178),i.lineTo(270+Math.cos(b)*184,270+Math.sin(b)*184),i.stroke()}}let f=u(t.rpm);i.strokeStyle="#ff7a1a",i.lineWidth=6,i.shadowColor="#ff7a1a",i.shadowBlur=18,i.beginPath(),i.moveTo(270+Math.cos(f)*40,270+Math.sin(f)*40),i.lineTo(270+Math.cos(f)*192,270+Math.sin(f)*192),i.stroke(),i.shadowBlur=0;let g=Math.round(Math.abs(t.vF)*3.6);i.fillStyle="#fff",i.font="900 88px Orbitron",i.textAlign="center",i.shadowColor="rgba(0,229,255,0.7)",i.shadowBlur=20,i.fillText(g,270,276),i.shadowBlur=0,i.font="600 20px Orbitron",i.fillStyle="rgba(255,255,255,0.6)",i.fillText("KM/H",270,332),i.font="900 40px Orbitron",i.fillStyle="#ff7a1a",i.fillText(t.gear,270,196),((m,p,b,w,_)=>{i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(180,m,180,10),i.fillStyle=b,i.shadowColor=b,i.shadowBlur=_?18:6,i.fillRect(180,m,180*p,10),i.shadowBlur=0,i.font="600 14px Orbitron",i.fillStyle="rgba(255,255,255,0.7)",i.textAlign="left",i.fillText(w,180,m-10),i.textAlign="center"})(398,e,"#ffb000","SPEEDBREAKER",n),this.drawNos(t)}drawNos(t){let e=this.nos,u=performance.now()/1000;e.clearRect(0,0,240,340);for(let d=0;d<3;d++){let h=15+d*76,f=Math.max(0,Math.min(1,t.nitro*3-d)),g=t.nitroOn&&f>0&&f<1||t.nitroOn&&f===1&&t.nitro*3-d<1.02,y=()=>{e.beginPath(),e.moveTo(h+17.4,52),e.lineTo(h+40.599999999999994,52),e.lineTo(h+40.599999999999994,66),e.quadraticCurveTo(h+58,70,h+58,94),e.lineTo(h+58,280),e.quadraticCurveTo(h+58,290,h+58-10,290),e.lineTo(h+10,290),e.quadraticCurveTo(h,290,h,280),e.lineTo(h,94),e.quadraticCurveTo(h,70,h+17.4,66),e.closePath()};if(e.fillStyle="rgba(200,210,230,0.75)",e.fillRect(h+20.88,36,16.240000000000002,16),e.fillStyle=f>0?"#3dfcff":"rgba(255,255,255,0.25)",e.fillRect(h+12.76,28,32.480000000000004,9),y(),e.fillStyle="rgba(8,12,28,0.75)",e.fill(),f>0){e.save(),y(),e.clip();let m=290-238*f,p=e.createLinearGradient(0,m,0,290);if(p.addColorStop(0,g?"#e6fdff":"#7af6ff"),p.addColorStop(0.35,"#1fb8ff"),p.addColorStop(1,"#2a3cff"),e.fillStyle=p,e.shadowColor="#3dfcff",e.shadowBlur=g?30:12,e.fillRect(h-4,m+(g?Math.sin(u*40+d)*2:0),66,290-m+4),t.nitroOn){e.fillStyle="rgba(255,255,255,0.6)";for(let b=0;b<4;b++){let w=290-(u*160+b*57+d*31)%(290-m);e.beginPath(),e.arc(h+12+(b*13+d*7)%34,w,3,0,6.3),e.fill()}}e.restore()}y(),e.lineWidth=3,e.strokeStyle=f>0?"rgba(61,252,255,0.9)":"rgba(255,255,255,0.25)",e.shadowColor="#3dfcff",e.shadowBlur=f>0?10:0,e.stroke(),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(h+3,130,52,34),e.save(),e.translate(h+29,147),e.font="900 17px Orbitron",e.textAlign="center",e.textBaseline="middle",e.fillStyle=f>0?"#fff":"rgba(255,255,255,0.35)",e.fillText("N₂O",0,1),e.restore()}e.font="700 26px Orbitron",e.textAlign="center",e.fillStyle=t.nitroOn?"#e6fdff":"rgba(255,255,255,0.75)",e.shadowColor="#3dfcff",e.shadowBlur=t.nitroOn?18:0,e.fillText("NOS",120,328),e.shadowBlur=0}drawMinimap(t,e,n){let i=this.mini;i.clearRect(0,0,440,440),i.save(),i.beginPath(),i.arc(220,220,214,0,Math.PI*2),i.clip(),i.fillStyle="rgba(5,7,18,0.72)",i.fillRect(0,0,440,440);let o=Math.sin(e.h),l=Math.cos(e.h),c=-l,u=o,d=(b,w)=>{let _=b-e.x,E=w-e.z;return[220+(_*c+E*u)*0.2,220-(_*o+E*l)*0.2]};i.lineJoin="round",i.lineCap="round";for(let[b,w]of[[20,"rgba(0,229,255,0.18)"],[9,"rgba(210,225,255,0.85)"]])i.lineWidth=b,i.strokeStyle=w,i.beginPath(),this.path.forEach(([_,E],A)=>{let[R,v]=d(_,E);A?i.lineTo(R,v):i.moveTo(R,v)}),i.closePath(),i.stroke();let h=this.track,f=h.startIdx,[g,y]=d(h.px[f]+h.rightX(f)*12,h.pz[f]+h.rightZ(f)*12),[m,p]=d(h.px[f]-h.rightX(f)*12,h.pz[f]-h.rightZ(f)*12);i.strokeStyle="#ffb000",i.lineWidth=5,i.beginPath(),i.moveTo(g,y),i.lineTo(m,p),i.stroke(),t.forEach((b,w)=>{if(b===e)return;let[_,E]=d(b.x,b.z);i.fillStyle=n[w],i.shadowColor=n[w],i.shadowBlur=12,i.beginPath(),i.arc(_,E,9,0,Math.PI*2),i.fill(),i.shadowBlur=0}),i.fillStyle="#fff",i.shadowColor="#00e5ff",i.shadowBlur=16,i.beginPath(),i.moveTo(220,204),i.lineTo(231,232),i.lineTo(220,226),i.lineTo(209,232),i.closePath(),i.fill(),i.restore(),i.strokeStyle="rgba(0,229,255,0.5)",i.lineWidth=3,i.beginPath(),i.arc(220,220,214,0,Math.PI*2),i.stroke()}}var ve=(t)=>document.getElementById(t),df=["#0b5cff","#e8e9ee","#c8102e","#ff6a00","#0fd18c","#8a2be2","#ffcc00","#141418"],k_=[{name:"KAITO",type:"tuner",color:"#e8e9ee",skill:0.97,accent:"#7cff4f"},{name:"VEX",type:"exotic",color:"#b0101f",skill:1,accent:"#ff3355"},{name:"MONA",type:"muscle",color:"#2430b8",skill:0.95,accent:"#b14bff"}],ce={mode:"race",cls:"tuner",paint:df[0],quality:"high",rain:!0,music:!0};try{Object.assign(ce,JSON.parse(localStorage.getItem("carbon-nights")||"{}"))}catch{}var Wi=()=>localStorage.setItem("carbon-nights",JSON.stringify(ce)),V_=()=>new Promise((t)=>requestAnimationFrame(()=>setTimeout(t,0))),cf=(t,e,n)=>t+(((e-t)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI)*n,qe=new Nc({antialias:!1,powerPreference:"high-performance",stencil:!1}),ff=()=>ce.quality==="high"?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,1)*0.8;qe.setPixelRatio(ff());qe.setSize(innerWidth,innerHeight);qe.toneMapping=Ei;qe.toneMappingExposure=1.1;document.body.prepend(qe.domElement);var Pe=new Fa;Pe.fog=new pr(854816,0.00085);var ze=new Xe(64,innerWidth/innerHeight,0.15,7000);Pe.add(new Ka(4609423,1313812,0.9));var pf=new eo(11123967,0.9);pf.position.copy(zc).multiplyScalar(1000);Pe.add(pf);var yo={uTime:{value:0},uWet:{value:1},uPuddle:{value:null}},an=new $c,z={state:"loading",cars:[],ais:[],player:null,labels:[],time:0,raceTime:0,countdown:0,laps:2,camMode:0,sb:1,sbOn:!1,slow:0,shake:0,lapStart:0,bestLap:null,drift:{total:0,chain:0,mult:1,active:!1,idle:0,time:0,best:0},finishTimer:-1,prevState:null,nitroWas:!1,gearWas:1,topSpeed:0},He,Nr,jc,Fr,Gn,Ls,Ns,Us,Ds,Or,Mo,Ue,In;async function W_(){let t=ve("loadbar"),e=ve("loadtext"),n=async(a,o)=>{t.style.width=a+"%",e.textContent=o,await V_()};await n(4,"Loading fonts");try{await Promise.race([Promise.all([document.fonts.load('700 100px "Orbitron"'),document.fonts.load('700 100px "Rajdhani"')]),new Promise((a)=>setTimeout(a,2500))])}catch{}await n(10,"Laying asphalt"),He=new Dc,yo.uPuddle.value=Yd(),await n(22,"Carving the canyon"),Nr=new Bc(He),Pe.add(Nr.mesh),await n(40,"Planting forests");let i=Qd(Nr,He);Pe.add(i),Fr=jd(),Pe.add(Fr),await n(52,"Raising the skyline"),Gn=new Hc(0.5),jc=tf(Pe,He,Nr,Gn,yo,ce.quality),Gn.hidden.push(...jc.hideInReflection,i),await n(72,"Capturing reflections");let s=new Rr(qe),r=new I(-60,7,150);Fr.position.copy(r),qe.setRenderTarget(Gn.rt),qe.setClearColor(0,1),qe.clear(),qe.setRenderTarget(null),Gn.uniforms.uReflOn.value=0,Mo=s.fromScene(Pe,0.03,0.5,6000,{position:r}).texture,await n(80,"Tuning engines"),Ls=new Yc(9000),Pe.add(Ls.mesh),Ns=rf(),Pe.add(Ns.mesh),Us=af(),Pe.add(Us.mesh),Ds=of(),Pe.add(Ds.mesh),Or=new Zc,Pe.add(Or.mesh),Gn.hidden.push(Ls.mesh,Ns.mesh,Ds.mesh,Or.mesh),In=lf(qe,Pe,ze),Ue=new Kc(He),th(),sh(),q_(),So(),await n(90,"Compiling shaders"),ih(0.016);try{await qe.compileAsync(Pe,ze)}catch{}await n(100,"Ready"),ve("loading").classList.add("hidden"),Hr(),requestAnimationFrame(bf)}var zr=new Set;addEventListener("keydown",(t)=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(t.code))t.preventDefault();if(zr.add(t.code),t.repeat)return;Dr(t.code)});addEventListener("keyup",(t)=>zr.delete(t.code));addEventListener("blur",()=>zr.clear());function mf(){if(Br)return Br();let t=(o)=>zr.has(o),e=t("KeyW")||t("ArrowUp")?1:0,n=t("KeyS")||t("ArrowDown")?1:0,i=(t("KeyD")||t("ArrowRight")?1:0)-(t("KeyA")||t("ArrowLeft")?1:0),s=t("Space"),r=t("ShiftLeft")||t("ShiftRight"),a=gf();if(a){if(Math.abs(a.axes[0])>0.12)i=Math.sign(a.axes[0])*(Math.abs(a.axes[0])-0.12)/0.88;if(a.buttons[14]?.pressed)i=-1;if(a.buttons[15]?.pressed)i=1;e=Math.max(e,a.buttons[7]?.value||0),n=Math.max(n,a.buttons[6]?.value||0),s||=!!a.buttons[0]?.pressed,r||=!!(a.buttons[1]?.pressed||a.buttons[2]?.pressed)}return{throttle:e,brake:n,steer:i,handbrake:s,nitro:r}}function gf(){for(let t of navigator.getGamepads?.()||[])if(t&&t.connected)return t;return null}var Qc=[];function X_(){let t=gf(),e=ve("padstatus");if(e){let r=t?"Controller connected: "+t.id.replace(/\s*\(.*\)\s*$/,"").slice(0,40):"No controller detected — plug one in and press any button.";if(e.textContent!==r)e.textContent=r,e.classList.toggle("on",!!t)}if(!t){Qc=[];return}let n=t.buttons.map((r)=>r.pressed),i=(r)=>n[r]&&!Qc[r],s=z.state;if(s==="menu"){if(i(0)||i(9))an.start(),Xi()}else if(s==="results"){if(i(0)||i(9))Xi();else if(i(1))Hr()}else if(s==="paused"){if(i(9)||i(1))eh()}else if(s==="race"||s==="countdown"){if(i(9))Dr("Escape");if(i(3))Dr("KeyQ");if(i(5))Dr("KeyC");if(i(8))Dr("KeyR")}Qc=n}function Dr(t){let e=z.state;if(t==="KeyM")ce.music=an.toggleMusic(),Wi(),bo();if(e==="menu"){if(t==="Enter")Xi();return}if(e==="results"){if(t==="Enter")Xi();if(t==="Escape")Hr();return}if(e==="paused"){if(t==="Escape")eh();return}if(t==="Escape"){Z_();return}if(t==="KeyC")z.camMode=(z.camMode+1)%3;if(t==="KeyR"&&z.state==="race"&&!z.player.finished)$_();if(t==="KeyQ"&&z.state==="race"){if(z.sbOn)z.sbOn=!1;else if(z.sb>0.15)z.sbOn=!0,an.whoosh()}}function q_(){let t=ve("classes");t.innerHTML=Object.entries(Ir).map(([e,n])=>`
    <button class="card cls" data-cls="${e}"><b>${n.name}</b><small>${n.model}</small>
      ${Object.entries(n.stats).map(([i,s])=>`<div class="stat"><em>${i.toUpperCase()}</em><i style="--v:${s*100}%"></i></div>`).join("")}
    </button>`).join(""),ve("swatches").innerHTML=df.map((e)=>`<button class="sw" data-paint="${e}" style="background:${e}"></button>`).join(""),document.querySelectorAll(".mode").forEach((e)=>e.onclick=()=>{ce.mode=e.dataset.mode,Wi(),Ur()}),document.querySelectorAll(".cls").forEach((e)=>e.onclick=()=>{ce.cls=e.dataset.cls,Wi(),Ur(),So()}),document.querySelectorAll(".sw").forEach((e)=>e.onclick=()=>{ce.paint=e.dataset.paint,Wi(),Ur(),So()}),ve("optQuality").onclick=()=>{ce.quality=ce.quality==="high"?"low":"high",Wi(),th()},ve("optRain").onclick=()=>{ce.rain=!ce.rain,Wi(),th()},ve("optMusic").onclick=()=>{an.start(),ce.music=an.toggleMusic(),Wi(),bo()},ve("go").onclick=()=>Xi(),document.querySelectorAll("[data-act]").forEach((e)=>e.onclick=()=>{let n=e.dataset.act;if(n==="resume")eh();if(n==="restart")Xi();if(n==="menu")Hr()}),Ur()}function Ur(){document.querySelectorAll(".mode").forEach((e)=>e.classList.toggle("sel",e.dataset.mode===ce.mode)),document.querySelectorAll(".cls").forEach((e)=>e.classList.toggle("sel",e.dataset.cls===ce.cls)),document.querySelectorAll(".sw").forEach((e)=>e.classList.toggle("sel",e.dataset.paint===ce.paint));let t=Ir[ce.cls];ve("carname").textContent=t.model,ve("carblurb").textContent=t.blurb,bo()}function bo(){ve("optQuality").textContent="Graphics: "+ce.quality.toUpperCase(),ve("optRain").textContent="Rain: "+(ce.rain?"ON":"OFF"),ve("optMusic").textContent="Music: "+(ce.music?"ON":"OFF")}function th(){Gn.enabled=ce.quality==="high",Ls.mesh.visible=ce.rain,yo.uWet.value=ce.rain?1:0.55,Ls.uniforms.uAmt.value=ce.quality==="high"?1:0.5,an.musicOn=ce.music,qe.setPixelRatio(ff()),sh(),bo()}function xf(){for(let t of z.cars)Pe.remove(t.obj);for(let t of z.labels)Pe.remove(t);z.cars=[],z.ais=[],z.labels=[],z.player=null,z.playerAI=null}function So(){if(z.state!=="menu"&&z.state!=="loading")return;xf();let t=new Pr(ce.cls,ce.paint,Mo,"YOU");t.place(He,He.startIdx-6,0),Pe.add(t.obj),z.player=t,z.cars=[t],t.syncObj()}function Hr(){z.state="menu",["pause","results"].forEach((t)=>ve(t).classList.add("hidden")),ve("menu").classList.remove("hidden"),Ue.show(!1),z.sbOn=!1,So(),Ur()}function Y_(t,e){let n=document.createElement("canvas");n.width=256,n.height=64;let i=n.getContext("2d");i.font="700 38px Orbitron, sans-serif",i.textAlign="center",i.textBaseline="middle",i.shadowColor=e,i.shadowBlur=14,i.fillStyle="#fff",i.fillText(t,128,34);let s=new Es(n);s.colorSpace=Ss;let r=new Ha(new mr({map:s,transparent:!0,depthWrite:!1,color:new vt(1.6,1.6,1.6)}));return r.scale.set(3.4,0.85,1),r}function Xi(){an.start(),an.musicOn=ce.music,xf(),["menu","pause","results"].forEach((i)=>ve(i).classList.add("hidden"));let t=ce.mode,e=He.startIdx;z.mode=t,z.laps=t==="free"?1:2;let n=new Pr(ce.cls,ce.paint,Mo,"YOU");if(n.accent="#00e5ff",t==="race"){let i=[[e-5,-4.3],[e-5,4.3],[e-14,-4.3],[e-14,4.3]];k_.forEach((s,r)=>{let a=new Pr(s.type,s.color,Mo,s.name);a.accent=s.accent,a.place(He,i[r][0],i[r][1]);let o=new xo(a,He,{skill:s.skill,lane:i[r][1]*0.6,seed:r+1});o.delay=0.1+Math.random()*0.35,z.ais.push(o),z.cars.push(a),Pe.add(a.obj);let l=Y_(s.name,s.accent);Pe.add(l),z.labels.push(l),a.label=l}),n.place(He,i[3][0],i[3][1])}else n.place(He,e-6,0);z.cars.push(n),Pe.add(n.obj),z.player=n;for(let i of z.cars)i.syncObj();if(z.state="countdown",z.countdown=3.999,z.lastCount=4,z.raceTime=0,z.lapStart=0,z.bestLap=null,z.finishTimer=-1,z.sb=1,z.sbOn=!1,z.topSpeed=0,z.drift={total:0,chain:0,mult:1,active:!1,idle:0,time:0,best:0},z.cam={ang:n.h,y:n.y+2,fov:64},Ue.setMode(t,z.laps),Ue.show(!0),Ue.chain(""),ve("hint").textContent=t==="free"?"FREE ROAM — ESC for menu":"",t==="free")z.countdown=0,z.state="race",Ue.message("FREE ROAM",2)}function Z_(){z.prevState=z.state,z.state="paused",ve("pause").classList.remove("hidden")}function eh(){z.state=z.prevState,ve("pause").classList.add("hidden")}function $_(){let t=z.player;t.place(He,t.q.i+1,0),Ue.message("RESET",0.8)}function J_(t,e,n,i,s,r){if(n>3){for(let a=0;a<Math.min(30,n*2);a++)Us.emit(i,s,r,(Math.random()-0.5)*9,Math.random()*5,(Math.random()-0.5)*9,0.4+Math.random()*0.3,0.12);if(t===z.player||e===z.player)an.impact(n),z.shake=Math.min(1,z.shake+n*0.05)}}function _f(t){let e=z.player;if(z.state!=="race")return;z.raceTime+=t;let i;if(e.finished&&z.playerAI)i=z.playerAI.input(t,z.cars,0,z.raceTime);else i=mf();e.throttleIn=i.throttle,e.update(t,i,He);for(let s of z.ais){let r=s.car;if(z.raceTime<s.delay){r.update(t,{throttle:0,brake:1,steer:0},He);continue}let a=e.progress-r.progress,o=s.input(t,z.cars,r.finished?-400:a,z.raceTime);r.update(t,o,He)}ef(z.cars,J_)}function vf(){let t=z.player;for(let e of z.cars){if(!e.lapEvent)continue;if(e.lapEvent=!1,z.mode==="free")continue;if(e.lap>z.laps&&!e.finished){if(e.finished=!0,e.finishTime=z.raceTime,e===t)K_();continue}if(e===t&&e.lap>1){let n=z.raceTime-z.lapStart;if(z.lapStart=z.raceTime,!z.bestLap||n<z.bestLap)z.bestLap=n;Ue.message(e.lap===z.laps?`FINAL LAP · ${pi(n)}`:`LAP ${e.lap} · ${pi(n)}`,2.5)}}}function K_(){let t=z.player;if(z.mode==="drift")yf();z.playerAI=new xo(t,He,{skill:0.75,lane:0}),z.finishTimer=3,z.sbOn=!1;let e=z.mode==="race"?nh().findIndex((n)=>n===t)+1:1;Ue.message(z.mode==="race"?e===1?"1ST — YOU OWN THE NIGHT":`${Jc(e).toUpperCase()} PLACE`:"FINISH",3),ve("flash").style.opacity=0.35,setTimeout(()=>ve("flash").style.opacity=0,120)}function nh(){return[...z.cars].sort((t,e)=>{if(t.finished&&e.finished)return t.finishTime-e.finishTime;if(t.finished)return-1;if(e.finished)return 1;return e.progress-t.progress})}function Q_(){z.state="results",Ue.show(!1);let t=ve("results"),e=ve("resbody");t.classList.remove("hidden");let n=z.player;if(z.mode==="race"){let i=z.laps*He.length,s=nh(),r=(l)=>l.finished?l.finishTime:z.raceTime+Math.max(0,i-l.progress)/Math.max(l.speed,35),a=s.map((l)=>({c:l,t:r(l)})).sort((l,c)=>l.t-c.t),o=a.findIndex((l)=>l.c===n)+1;ve("restitle").textContent=o===1?"VICTORY":`${Jc(o).toUpperCase()} PLACE`,e.innerHTML=a.map((l,c)=>`<div class="res ${l.c===n?"me":""}" style="--c:${l.c.accent}"><b>${c+1}</b><span>${l.c.name}</span><span>${l.c.spec.model}</span><span>${pi(l.t)}</span></div>`).join("")+`<div class="sub" style="margin-top:14px">BEST LAP ${pi(z.bestLap??NaN)}</div>`}else if(z.mode==="drift"){let i=Number(localStorage.getItem("cn-drift-best")||0),s=Math.floor(z.drift.total);if(s>i)localStorage.setItem("cn-drift-best",s);ve("restitle").textContent="DRIFT ATTACK",e.innerHTML=`<div class="sub">TOTAL SCORE</div><div class="bigscore">${s.toLocaleString()}</div>
      <div class="sub">BEST CHAIN ${Math.floor(z.drift.best).toLocaleString()} · TIME ${pi(n.finishTime)}</div>
      <div class="sub">${s>i?"NEW PERSONAL BEST!":"PERSONAL BEST "+i.toLocaleString()}</div>`}}function yf(){let t=z.drift;if(!t.active)return;let e=t.chain*t.mult;if(t.total+=e,t.best=Math.max(t.best,e),t.active=!1,e>50)Ue.chain(`+${Math.floor(e).toLocaleString()}<small>DRIFT BANKED</small>`,"bank",1.6);else Ue.chain("")}function Mf(t){let{player:e,drift:n}=z;if(z.mode==="race"||z.state!=="race"||e.finished)return;if(e.drifting&&e.speed>11&&Math.abs(e.slip)>0.12){if(!n.active)n.active=!0,n.chain=0,n.time=0;n.time+=t,n.idle=0,n.chain+=t*e.speed*Math.abs(e.slip)*9,n.mult=Math.min(5,1+Math.floor(n.time/1.6)),Ue.chain(`${Math.floor(n.chain).toLocaleString()} <span style="color:#ffb000">×${n.mult}</span><small>DRIFT</small>`,"",0)}else if(n.active){if(n.idle+=t,n.idle>0.7)yf()}if(n.active&&e.impact>3)n.active=!1,Ue.chain("CHAIN LOST<small>WATCH THE WALLS</small>","lost",1.4)}var hf=new I;function Sf(t,e){let n=Math.sin(t.h),i=Math.cos(t.h),s=-i,r=n,a=t.spec.W,o=-t.spec.L/2+1.05,l=t.speed>6&&(t.drifting||Math.abs(t.slip)>0.22||t.braking&&t.speed>25&&t.throttleIn>0.5),c=t.throttleIn>0.9&&t.speed<10&&t.speed>0.5&&t===z.player;for(let u of[-1,1]){let d=u*(a/2-0.16),h=t.x+s*d+n*o,f=t.z+r*d+i*o,g=t.y,y=t.name+u;if(l||c){if(Or.add(y,h,g+0.035,f,s,r,Math.min(1,Math.abs(t.slip)*3+0.4)),Math.random()<(t.drifting?0.7:0.3))Ns.emit(h+(Math.random()-0.5)*0.4,g+0.3,f+(Math.random()-0.5)*0.4,t.vx*0.25+(Math.random()-0.5)*2,0.5+Math.random(),t.vz*0.25+(Math.random()-0.5)*2,1.1+Math.random()*0.9,1,2.2,Math.min(0.3,0.1+Math.abs(t.slip)*0.6))}else Or.break(y);if(ce.rain&&t.speed>10&&Math.random()<0.8)Ds.emit(h-n*0.5,g+0.2,f-i*0.5,t.vx*0.55+s*u*1.5+(Math.random()-0.5)*2,0.8+Math.random()*1.6,t.vz*0.55+r*u*1.5+(Math.random()-0.5)*2,0.35+Math.random()*0.25,0.35,1.6,Math.min(0.16,t.speed/300))}if(t.impact>2){let u=Math.sign(t.q.lat),d=t.x+t.q.rx*u*a/2,h=t.z+t.q.rz*u*a/2;for(let f=0;f<Math.min(40,t.impact*3);f++)Us.emit(d+n*(Math.random()-0.5)*3,t.y+0.5,h+i*(Math.random()-0.5)*3,t.vx*0.4+(Math.random()-0.5)*6,Math.random()*4,t.vz*0.4+(Math.random()-0.5)*6,0.35+Math.random()*0.3,0.1);if(t===z.player)an.impact(t.impact),z.shake=Math.min(1,z.shake+t.impact*0.04)}}function j_(t,e){let n=Math.abs(t)/Math.max(e,25);return(t>=0?"▲ ":"▼ ")+n.toFixed(1)+"s"}function ih(t){let e=z.player;if(!e)return;if(z.state==="menu"||z.state==="loading"){let a=z.time*0.11+2.2,o=7.6;ze.position.set(e.x+Math.sin(a)*7.6,e.y+1.7+Math.sin(z.time*0.21)*0.4,e.z+Math.cos(a)*7.6),ze.lookAt(e.x-Math.sin(a)*0.6,e.y+0.7,e.z-Math.cos(a)*0.6),ze.fov=50,ze.updateProjectionMatrix();return}let n=z.cam,i=Math.sin(e.h),s=Math.cos(e.h);if(z.camMode===2)ze.position.set(e.x+i*0.2,e.y+1.22,e.z+s*0.2),ze.lookAt(e.x+i*30,e.y+0.9+Math.sin(e.slopePitch)*30,e.z+s*30);else{let a=Math.atan2(e.vx,e.vz),o=e.h;if(e.speed>4&&e.vF>0)o=cf(e.h,a,0.5);n.ang=cf(n.ang,o,1-Math.exp(-t*5.5));let l=z.camMode===1,c=(l?9.4:6.3)+e.speed*0.022+(e.nitroOn?0.7:0),u=l?3.1:1.95,d=e.x-Math.sin(n.ang)*c,h=e.z-Math.cos(n.ang)*c;n.y+=(e.y+u-n.y)*(1-Math.exp(-t*6));let f=Math.max(Nr.height(d,h),He.project(d,h,e.q.i,{}).y)+0.9,g=Math.max(n.y,f),y=z.shake*0.25+Math.max(0,e.speed-55)*0.0012+(e.nitroOn?0.03:0);ze.position.set(d+(Math.random()-0.5)*y,g+(Math.random()-0.5)*y,h+(Math.random()-0.5)*y),ze.lookAt(e.x+i*3.5,e.y+(l?1.3:1.05),e.z+s*3.5)}let r=62+Math.min(e.speed,95)*0.17+(e.nitroOn?7:0)-z.slow*6;n.fov+=(r-n.fov)*(1-Math.exp(-t*4)),ze.fov=n.fov,ze.updateProjectionMatrix(),z.shake=Math.max(0,z.shake-t*2.5)}var uf=performance.now();function bf(t){requestAnimationFrame(bf);let e=Math.min(0.05,(t-uf)/1000);uf=t,X_(),z.time+=e;let n=z.player,i=z.state==="race"||z.state==="countdown";if(z.state==="countdown"){z.countdown-=e;let r=Math.ceil(z.countdown);if(r!==z.lastCount)if(z.lastCount=r,r>0)Ue.countdown(String(r)),an.beep(!1);else Ue.countdown("GO!"),an.beep(!0),z.state="race";let a=mf();n.throttleIn=a.throttle,n.rpm+=(900+a.throttle*6500-n.rpm)*Math.min(1,e*8)}if(z.state==="race")if(z.sbOn){if(z.sb-=e*0.22,z.sb<=0)z.sb=0,z.sbOn=!1}else z.sb=Math.min(1,z.sb+e*(0.012+(n.drifting?0.05:0)+(n.speed>60?0.012:0)));z.slow+=((z.sbOn?1:0)-z.slow)*Math.min(1,e*5);let s=1-z.slow*0.62;if(z.state==="race"){let r=e*s,a=Math.max(1,Math.ceil(r/0.008333333333333333));for(let o=0;o<a;o++)_f(r/a);if(vf(),Mf(r),n.nitroOn&&!z.nitroWas)an.whoosh();if(z.nitroWas=n.nitroOn,typeof n.gear==="number"&&n.gear>z.gearWas)an.shift();if(z.gearWas=n.gear,z.topSpeed=Math.max(z.topSpeed,n.speed),n.wrongWay>1.2&&!n.finished)Ue.message("WRONG WAY",0.3);if(z.finishTimer>0&&(z.finishTimer-=e)<=0)Q_()}if(i||z.state==="menu"||z.state==="results")for(let r of z.cars){if(r.syncObj(e*(z.state==="race"?s:1),z.time),z.state==="race")Sf(r,e*s);if(r.label){r.label.position.set(r.x,r.y+2.3,r.z);let a=Math.hypot(r.x-ze.position.x,r.z-ze.position.z);r.label.visible=a<160&&a>4}}if(z.state!=="paused"){if(Ns.update(e*s),Us.update(e*s),Ds.update(e*s),z.state!=="results")ih(e)}if(i&&n){let r=nh(),a=r.indexOf(n)+1;Ue.update({pos:a,total:z.cars.length,lap:Math.max(1,n.lap),time:z.raceTime,best:z.bestLap,standings:z.mode==="race"?r.map((o,l)=>({pos:l+1,name:o.name,color:o.accent,me:o===n,gap:o===n?"":j_(o.progress-n.progress,n.speed)})):null,drift:z.mode==="drift"?z.drift.total:null}),Ue.drawSpeedo(n,z.sb,z.sbOn),Ue.drawMinimap(z.cars,n,z.cars.map((o)=>o.accent))}Ue?.tick(e),an.update(n,i&&z.state!=="paused",s),yo.uTime.value=z.time,Fr.material.uniforms.uTime.value=z.time,Fr.position.copy(ze.position),jc.update(z.time),hf.set(n?n.vx:0,0,n?n.vz:0),Ls.update(z.time,ze.position,hf),In.final.uniforms.uTime.value=z.time,In.final.uniforms.uSpeed.value=n&&i?Math.max(0,(n.speed-35)/55):0,In.final.uniforms.uNitro.value+=((n?.nitroOn?1:0)-In.final.uniforms.uNitro.value)*Math.min(1,e*6),In.final.uniforms.uSlow.value=z.slow,In.final.uniforms.uHit.value=z.shake,Gn.update(qe,Pe,ze),In.composer.render(e)}function sh(){let t=innerWidth,e=innerHeight;if(qe.setSize(t,e),ze.aspect=t/e,ze.updateProjectionMatrix(),In)In.composer.setPixelRatio(qe.getPixelRatio()),In.composer.setSize(t,e);if(Gn){let n=qe.getDrawingBufferSize(new ht);Gn.setSize(n.x,n.y)}}addEventListener("resize",sh);window.__game={G:z,settings:ce,startEvent:Xi,enterMenu:Hr,camera:ze,scene:Pe,renderer:qe,keys:zr,get track(){return He},advance(t,e={}){if(z.state==="countdown")z.state="race",ve("count").textContent="";let n={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...e},i=Br;Br=()=>n;for(let s=0;s<t;s+=0.016666666666666666){for(let r=0;r<2;r++)_f(0.008333333333333333);vf(),Mf(0.016666666666666666);for(let r of z.cars)r.syncObj(0.016666666666666666,z.time),Sf(r,0.016666666666666666);Ns.update(0.016666666666666666),Us.update(0.016666666666666666),Ds.update(0.016666666666666666),ih(0.016666666666666666),z.time+=0.016666666666666666}Br=i}};var Br=null;W_().catch((t)=>{console.error(t),ve("loadtext").textContent="Error: "+t.message});
