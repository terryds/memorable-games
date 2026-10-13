var uh="186";var dh=0,bo=1,fh=2;var wi=1,ph=2,Ss=3,bs=0,Ve=1,Ke=2,un=0,Ai=1,dn=2,To=3,Eo=4,mh=5;var Ts=100,gh=101,_h=102,xh=103,vh=104,yh=200,Mh=201,Sh=202,bh=203,Th=204,Eh=205,wh=206,Ah=207,Rh=208,Ch=209,Ih=210,Ph=211,Lh=212,Nh=213,Dh=214,Uh=0,Fh=1,Oh=2,wo=3,Bh=4,zh=5,Hh=6,Gh=7,kh=0,Vh=1,Wh=2,bn=0,Js=1,Ks=2,Qs=3,Ri=4,js=5,tr=6,er=7;var Es=301,Ci=302,jr=303,ta=304,nr=306,ea=1000,na=1001,Xh=1002,fn=1003,qh=1004;var ir=1005;var We=1006,ia=1007;var Ii=1008;var Tn=1009,Yh=1010,Zh=1011,sr=1012,Ao=1013,hi=1014,Zn=1015,Fe=1016,Ro=1017,Co=1018,ws=1020,$h=35902,Jh=35899,Kh=1021,Qh=1022,Fn=1023,Pi=1026,Li=1027,As=1028,Io=1029,Ni=1030,Po=1031;var Lo=1033,sa=33776,ra=33777,aa=33778,oa=33779,No=35840,Do=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Ho=37488,Go=37489,la=37490,ko=37491,Vo=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,Zo=37813,$o=37814,Jo=37815,Ko=37816,Qo=37817,jo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,ca=36285,ll=36286;var cl=0,jh=1,Di="",ui="srgb",hl="srgb-linear",ul="linear",oe="srgb";var tu=512,eu=513,nu=514,ha=515,iu=516,su=517,ua=518,ru=519;var dl=35048;var fl="300 es",pl=2000;function Dd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ud(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ys(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function au(){let t=Ys("canvas");return t.style.display="block",t}var Uc={},ys=null;function Zs(...t){let e="THREE."+t.shift();if(ys)ys("log",e,...t);else console.log(e,...t)}function ou(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ot(...t){t=ou(t);let e="THREE."+t.shift();if(ys)ys("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=ou(t);let e="THREE."+t.shift();if(ys)ys("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Ei(...t){let e=t.join(" ");if(e in Uc)return;Uc[e]=!0,Ot(...t)}function lu(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var cu={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class $n{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Za=Math.PI/180,Qr=180/Math.PI;function ci(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[t&255]+Ge[t>>8&255]+Ge[t>>16&255]+Ge[t>>24&255]+"-"+Ge[e&255]+Ge[e>>8&255]+"-"+Ge[e>>16&15|64]+Ge[e>>24&255]+"-"+Ge[n&63|128]+Ge[n>>8&255]+"-"+Ge[n>>16&255]+Ge[n>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function Fd(t,e){return(t%e+e)%e}function $a(t,e,n){return(1-n)*t+n*e}function Un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function ce(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class ut{static{ut.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],p=s[r+2],_=s[r+3];if(h!==_||o!==d||l!==u||c!==p){let b=o*d+l*u+c*p+h*_;if(b<0)d=-d,u=-u,p=-p,_=-_,b=-b;let m=1-a;if(b<0.9995){let f=Math.acos(b),w=Math.sin(f);m=Math.sin(m*f)/w,a=Math.sin(a*f)/w,o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+_*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+_*a;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],p=s[r+3];return t[e]=a*p+c*h+o*u-l*d,t[e+1]=o*p+c*d+l*h-a*u,t[e+2]=l*p+c*u+a*d-o*h,t[e+3]=c*p-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),p=o(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{static{I.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,o=t.w,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,r=e.x,a=e.y,o=e.z;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ja=new I,Fc=new Qe;class Ht{static{Ht.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],p=n[8],_=i[0],b=i[3],m=i[6],f=i[1],w=i[4],R=i[7],y=i[2],S=i[5],A=i[8];return s[0]=r*_+a*f+o*y,s[3]=r*b+a*w+o*S,s[6]=r*m+a*R+o*A,s[1]=l*_+c*f+h*y,s[4]=l*b+c*w+h*S,s[7]=l*m+c*R+h*A,s[2]=d*_+u*f+p*y,s[5]=d*b+u*w+p*S,s[8]=d*m+u*R+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,d=a*o-c*s,u=l*s-r*o,p=e*h+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=h*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=u*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Ka=new Ht,Oc=new Ht().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Bc=new Ht().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Od(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Xt=Od();function Yn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function vs(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var es;class ml{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(es===void 0)es=Ys("canvas");es.width=t.width,es.height=t.height;let i=es.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Yn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Yn(e[n]/255)*255);else e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Bd=0;class rr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Qa(i[r].image));else s.push(Qa(i[r]))}else s=Qa(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Qa(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return ml.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ot("Texture: Unable to serialize Texture."),{}}var zd=0,ja=new I;class Be extends $n{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Be.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ci(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=300;Be.DEFAULT_ANISOTROPY=1;class xe{static{xe.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],p=o[9],_=o[2],b=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-_)<0.01&&Math.abs(p-b)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+_)<0.1&&Math.abs(p+b)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,R=(u+1)/2,y=(m+1)/2,S=(c+d)/4,A=(h+_)/4,E=(p+b)/4;if(w>R&&w>y)if(w<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(w),i=S/n,s=A/n;else if(R>y)if(R<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(R),n=S/i,s=E/i;else if(y<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(y),n=A/s,i=E/s;return this.set(n,i,s,e),this}let f=Math.sqrt((b-p)*(b-p)+(h-_)*(h-_)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(b-p)/f,this.y=(h-_)/f,this.z=(d-c)/f,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gl extends $n{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Be(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Te extends gl{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class da extends Be{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _l extends Be{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class $t{static{$t.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,d,u,p,_,b){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,_,b)}set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,_,b){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=h,m[14]=d,m[3]=u,m[7]=p,m[11]=_,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),r=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*h,p=a*c,_=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+p*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=p+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,p=l*c,_=l*h;e[0]=d+_*a,e[4]=p*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=u*a-p,e[6]=_+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,p=l*c,_=l*h;e[0]=d-_*a,e[4]=-r*h,e[8]=p+u*a,e[1]=u+p*a,e[5]=r*c,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*h,p=a*c,_=a*h;e[0]=o*c,e[4]=p*l-u,e[8]=d*l+_,e[1]=o*h,e[5]=_*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,p=a*o,_=a*l;e[0]=o*c,e[4]=_-d*h,e[8]=p*h+u,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+p,e[10]=d-_*h}else if(t.order==="XZY"){let d=r*o,u=r*l,p=a*o,_=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+_,e[5]=r*c,e[9]=u*h-p,e[2]=p*h-u,e[6]=a*c,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Gd)}lookAt(t,e,n){let i=this.elements;if(rn.subVectors(t,e),rn.lengthSq()===0)rn.z=1;if(rn.normalize(),si.crossVectors(n,rn),si.lengthSq()===0){if(Math.abs(n.z)===1)rn.x+=0.0001;else rn.z+=0.0001;rn.normalize(),si.crossVectors(n,rn)}return si.normalize(),Ar.crossVectors(rn,si),i[0]=si.x,i[4]=Ar.x,i[8]=rn.x,i[1]=si.y,i[5]=Ar.y,i[9]=rn.y,i[2]=si.z,i[6]=Ar.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],p=n[2],_=n[6],b=n[10],m=n[14],f=n[3],w=n[7],R=n[11],y=n[15],S=i[0],A=i[4],E=i[8],g=i[12],v=i[1],G=i[5],P=i[9],L=i[13],K=i[2],C=i[6],O=i[10],H=i[14],F=i[3],k=i[7],z=i[11],X=i[15];return s[0]=r*S+a*v+o*K+l*F,s[4]=r*A+a*G+o*C+l*k,s[8]=r*E+a*P+o*O+l*z,s[12]=r*g+a*L+o*H+l*X,s[1]=c*S+h*v+d*K+u*F,s[5]=c*A+h*G+d*C+u*k,s[9]=c*E+h*P+d*O+u*z,s[13]=c*g+h*L+d*H+u*X,s[2]=p*S+_*v+b*K+m*F,s[6]=p*A+_*G+b*C+m*k,s[10]=p*E+_*P+b*O+m*z,s[14]=p*g+_*L+b*H+m*X,s[3]=f*S+w*v+R*K+y*F,s[7]=f*A+w*G+R*C+y*k,s[11]=f*E+w*P+R*O+y*z,s[15]=f*g+w*L+R*H+y*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14],p=t[3],_=t[7],b=t[11],m=t[15],f=o*u-l*d,w=a*u-l*h,R=a*d-o*h,y=r*u-l*c,S=r*d-o*c,A=r*h-a*c;return e*(_*f-b*w+m*R)-n*(p*f-b*y+m*S)+i*(p*w-_*y+m*A)-s*(p*R-_*S+b*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],p=t[12],_=t[13],b=t[14],m=t[15],f=e*a-n*r,w=e*o-i*r,R=e*l-s*r,y=n*o-i*a,S=n*l-s*a,A=i*l-s*o,E=c*_-h*p,g=c*b-d*p,v=c*m-u*p,G=h*b-d*_,P=h*m-u*_,L=d*m-u*b,K=f*L-w*P+R*G+y*v-S*g+A*E;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/K;return t[0]=(a*L-o*P+l*G)*C,t[1]=(i*P-n*L-s*G)*C,t[2]=(_*A-b*S+m*y)*C,t[3]=(d*S-h*A-u*y)*C,t[4]=(o*v-r*L-l*g)*C,t[5]=(e*L-i*v+s*g)*C,t[6]=(b*R-p*A-m*w)*C,t[7]=(c*A-d*R+u*w)*C,t[8]=(r*P-a*v+l*E)*C,t[9]=(n*v-e*P-s*E)*C,t[10]=(p*S-_*R+m*f)*C,t[11]=(h*R-c*S-u*f)*C,t[12]=(a*g-r*G-o*E)*C,t[13]=(e*G-n*g+i*E)*C,t[14]=(_*w-p*y-b*f)*C,t[15]=(c*y-h*w+d*f)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,o=t.z,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,o=e._w,l=s+s,c=r+r,h=a+a,d=s*l,u=s*c,p=s*h,_=r*c,b=r*h,m=a*h,f=o*l,w=o*c,R=o*h,y=n.x,S=n.y,A=n.z;return i[0]=(1-(_+m))*y,i[1]=(u+R)*y,i[2]=(p-w)*y,i[3]=0,i[4]=(u-R)*S,i[5]=(1-(d+m))*S,i[6]=(b+f)*S,i[7]=0,i[8]=(p+w)*A,i[9]=(b-f)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ns.set(i[0],i[1],i[2]).length(),a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();if(s<0)r=-r;vn.copy(this);let l=1/r,c=1/a,h=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,_;if(o)p=s/(r-s),_=r*s/(r-s);else if(a===2000)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)p=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,_;if(o)p=1/(r-s),_=r/(r-s);else if(a===2000)p=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)p=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ns=new I,vn=new $t,Hd=new I(0,0,0),Gd=new I(1,1,1),si=new I,Ar=new I,rn=new I,zc=new $t,Hc=new Qe;class Sn{constructor(t=0,e=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Zt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class fa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var kd=0,Gc=new I,is=new Qe,kn=new $t,Rr=new I,Fs=new I,Vd=new I,Wd=new Qe,kc=new I(1,0,0),Vc=new I(0,1,0),Wc=new I(0,0,1),Xc={type:"added"},Xd={type:"removed"},ss={type:"childadded",child:null},to={type:"childremoved",child:null};class Ce extends $n{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();let t=new I,e=new Sn,n=new Qe,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ht}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Rr.copy(t);else Rr.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)kn.lookAt(Fs,Rr,this.up);else kn.lookAt(Rr,Fs,this.up);if(this.quaternion.setFromRotationMatrix(kn),i)kn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(kn),this.quaternion.premultiply(is.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xc),ss.child=t,this.dispatchEvent(ss),ss.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),to.child=t,this.dispatchEvent(to),to.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld);return t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),p=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(p.length>0)n.nodes=p}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Re extends Ce{constructor(){super();this.isGroup=!0,this.type="Group"}}var qd={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let b=e.getJointPose(_,n),m=this._getHandJoint(l,_);if(b!==null)m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius;m.visible=b!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,p=0.005;if(l.inputState.pinching&&d>u+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(qd)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function eo(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Fd(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=eo(r,s,t+0.3333333333333333),this.g=eo(r,s,t),this.b=eo(r,s,t-0.3333333333333333)}return Xt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ot("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=hu[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ot("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Xt.workingToColorSpace(ke.copy(this),t),Math.round(Zt(ke.r*255,0,255))*65536+Math.round(Zt(ke.g*255,0,255))*256+Math.round(Zt(ke.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(ke.copy(this),e);let{r:n,g:i,b:s}=ke,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t="srgb"){Xt.workingToColorSpace(ke.copy(this),t);let{r:e,g:n,b:i}=ke;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Cr);let n=$a(ri.h,Cr.h,e),i=$a(ri.s,Cr.s,e),s=$a(ri.l,Cr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ke=new ht;ht.NAMES=hu;class or{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new ht(t),this.near=e,this.far=n}clone(){return new or(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pa extends Ce{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var yn=new I,Vn=new I,no=new I,Wn=new I,rs=new I,as=new I,qc=new I,io=new I,so=new I,ro=new I,ao=new xe,oo=new xe,lo=new xe;class on{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Vn.subVectors(n,e),no.subVectors(t,e);let r=yn.dot(yn),a=yn.dot(Vn),o=yn.dot(no),l=Vn.dot(Vn),c=Vn.dot(no),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,p=(r*c-a*o)*d;return s.set(1-u-p,p,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Wn)===null)return!1;return Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Wn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Wn.x),o.addScaledVector(r,Wn.y),o.addScaledVector(a,Wn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return ao.setScalar(0),oo.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(t,e),oo.fromBufferAttribute(t,n),lo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ao,s.x),r.addScaledVector(oo,s.y),r.addScaledVector(lo,s.z),r}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Vn.subVectors(t,e),yn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;rs.subVectors(i,n),as.subVectors(s,n),io.subVectors(t,n);let o=rs.dot(io),l=as.dot(io);if(o<=0&&l<=0)return e.copy(n);so.subVectors(t,i);let c=rs.dot(so),h=as.dot(so);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(rs,r);ro.subVectors(t,s);let u=rs.dot(ro),p=as.dot(ro);if(p>=0&&u<=p)return e.copy(s);let _=u*l-o*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(as,a);let b=c*p-u*h;if(b<=0&&h-c>=0&&u-p>=0)return qc.subVectors(s,i),a=(h-c)/(h-c+(u-p)),e.copy(i).addScaledVector(qc,a);let m=1/(b+_+d);return r=_*m,a=d*m,e.copy(n).addScaledVector(rs,r).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,Mn);else Mn.fromBufferAttribute(s,r);Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Ir.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Ir.copy(n.boundingBox)}Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Pr.subVectors(this.max,Os),os.subVectors(t.a,Os),ls.subVectors(t.b,Os),cs.subVectors(t.c,Os),ai.subVectors(ls,os),oi.subVectors(cs,ls),Mi.subVectors(os,cs);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];if(!co(e,os,ls,cs,Pr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!co(e,os,ls,cs,Pr))return!1;return Lr.crossVectors(ai,oi),e=[Lr.x,Lr.y,Lr.z],co(e,os,ls,cs,Pr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Mn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Xn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,Ir=new Jn,os=new I,ls=new I,cs=new I,ai=new I,oi=new I,Mi=new I,Os=new I,Pr=new I,Lr=new I,Si=new I;function co(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Si.fromArray(t,r);let o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),c=n.dot(Si),h=i.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ae=new I,Nr=new ut,Yd=0;class be extends $n{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Un(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ce(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Un(e,this.array);return e}setX(t,e){if(this.normalized)e=ce(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Un(e,this.array);return e}setY(t,e){if(this.normalized)e=ce(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Un(e,this.array);return e}setZ(t,e){if(this.normalized)e=ce(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Un(e,this.array);return e}setW(t,e){if(this.normalized)e=ce(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=ce(e,this.array),n=ce(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ma extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ga extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Zd=new Jn,Bs=new I,ho=new I;class di{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Zd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ho)),this.expandByPoint(Bs.copy(t.center).sub(ho));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var $d=0,hn=new $t,uo=new Ce,hs=new I,an=new Jn,zs=new Jn,Ue=new I;class he extends $n{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Dd(t))?ga:ma)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Jn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(an.setFromBufferAttribute(s),this.morphTargetsRelative)Ue.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ue);else this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new di;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(zs.setFromBufferAttribute(a),this.morphTargetsRelative)Ue.addVectors(an.min,zs.min),an.expandByPoint(Ue),Ue.addVectors(an.max,zs.max),an.expandByPoint(Ue);else an.expandByPoint(zs.min),an.expandByPoint(zs.max)}an.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ue.fromBufferAttribute(a,l),o)hs.fromBufferAttribute(t,l),Ue.add(hs);i=Math.max(i,n.distanceToSquared(Ue))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let E=0;E<n.count;E++)a[E]=new I,o[E]=new I;let l=new I,c=new I,h=new I,d=new ut,u=new ut,p=new ut,_=new I,b=new I;function m(E,g,v){l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,E),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,v),c.sub(l),h.sub(l),u.sub(d),p.sub(d);let G=1/(u.x*p.y-p.x*u.y);if(!isFinite(G))return;_.copy(c).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(G),b.copy(h).multiplyScalar(u.x).addScaledVector(c,-p.x).multiplyScalar(G),a[E].add(_),a[g].add(_),a[v].add(_),o[E].add(b),o[g].add(b),o[v].add(b)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let E=0,g=f.length;E<g;++E){let v=f[E],G=v.start,P=v.count;for(let L=G,K=G+P;L<K;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new I,R=new I,y=new I,S=new I;function A(E){y.fromBufferAttribute(i,E),S.copy(y);let g=a[E];w.copy(g),w.sub(y.multiplyScalar(y.dot(g))).normalize(),R.crossVectors(S,g);let G=R.dot(o[E])<0?-1:1;r.setXYZW(E,w.x,w.y,w.z,G)}for(let E=0,g=f.length;E<g;++E){let v=f[E],G=v.start,P=v.count;for(let L=G,K=G+P;L<K;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),_=t.getX(d+1),b=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,p=0;for(let _=0,b=o.length;_<b;_++){if(a.isInterleavedBufferAttribute)u=o[_]*a.data.stride+a.offset;else u=o[_]*c;for(let m=0;m<c;m++)d[p++]=l[u++]}return new be(d,c,h)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new he,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _a{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=ci();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=ci();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}var $e=new I;class Ms{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=Un(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ce(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=ce(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=ce(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=ce(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=ce(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=Un(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=Un(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=Un(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=Un(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=ce(e,this.array),n=ce(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new Ms(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var fo=new I,Jd=new I,Kd=new Ht;class Dn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=fo.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(fo),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),i=this.coplanarPoint(fo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Qd=0;class On extends $n{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new ht().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new Dn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new ut().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class fi extends On{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var us,Hs=new I,ds=new I,fs=new I,ps=new ut,Gs=new ut,uu=new $t,Dr=new I,ks=new I,Ur=new I,Yc=new ut,po=new ut,Zc=new ut;class Ui extends Ce{constructor(t=new fi){super();if(this.isSprite=!0,this.type="Sprite",us===void 0){us=new he;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new _a(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Ms(n,3,0,!1)),us.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new ut(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(ds.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)ds.multiplyScalar(-fs.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Fr(Dr.set(-0.5,-0.5,0),fs,r,ds,i,s),Fr(ks.set(0.5,-0.5,0),fs,r,ds,i,s),Fr(Ur.set(0.5,0.5,0),fs,r,ds,i,s),Yc.set(0,0),po.set(1,0),Zc.set(1,1);let a=t.ray.intersectTriangle(Dr,ks,Ur,!1,Hs);if(a===null){if(Fr(ks.set(-0.5,0.5,0),fs,r,ds,i,s),po.set(0,1),a=t.ray.intersectTriangle(Dr,Ur,ks,!1,Hs),a===null)return}let o=t.ray.origin.distanceTo(Hs);if(o<t.near||o>t.far)return;e.push({distance:o,point:Hs.clone(),uv:on.getInterpolation(Hs,Dr,ks,Ur,Yc,po,Zc,new ut),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Fr(t,e,n,i,s,r){if(ps.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)Gs.x=r*ps.x-s*ps.y,Gs.y=s*ps.x+r*ps.y;else Gs.copy(ps);t.copy(e),t.x+=Gs.x,t.y+=Gs.y,t.applyMatrix4(uu)}var qn=new I,mo=new I,Or=new I,Br=new I;class xa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){mo.copy(t).add(e).multiplyScalar(0.5),Or.copy(e).sub(t).normalize(),Br.copy(this.origin).sub(mo);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Or),a=Br.dot(this.direction),o=-Br.dot(Or),l=Br.lengthSq(),c=Math.abs(1-r*r),h,d,u,p;if(c>0)if(h=r*o-a,d=r*a-o,p=s*c,h>=0)if(d>=-p)if(d<=p){let _=1/c;h*=_,d*=_,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else if(d<=-p)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else if(d<=p)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(mo).addScaledVector(Or,d);return u}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),i=qn.dot(qn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,o=a.x,l=a.y,c=a.z,h=t.x-r.x,d=t.y-r.y,u=t.z-r.z,p=e.x-r.x,_=e.y-r.y,b=e.z-r.z,m=n.x-r.x,f=n.y-r.y,w=n.z-r.z,R=Math.abs(o),y=Math.abs(l),S=Math.abs(c),A,E,g,v,G,P,L,K,C,O,H,F;if(R>=y&&R>=S)if(g=o,P=h,C=p,F=m,o>=0)A=l,E=c,v=d,G=u,L=_,K=b,O=f,H=w;else A=c,E=l,v=u,G=d,L=b,K=_,O=w,H=f;else if(y>=S)if(g=l,P=d,C=_,F=f,l>=0)A=c,E=o,v=u,G=h,L=b,K=p,O=w,H=m;else A=o,E=c,v=h,G=u,L=p,K=b,O=m,H=w;else if(g=c,P=u,C=b,F=w,c>=0)A=o,E=l,v=h,G=d,L=p,K=_,O=m,H=f;else A=l,E=o,v=d,G=h,L=_,K=p,O=f,H=m;if(g===0)return null;let k=A/g,z=E/g,X=1/g,Z=v-k*P,nt=G-z*P,rt=L-k*C,yt=K-z*C,Ft=O-k*F,J=H-z*F,at=Ft*yt-J*rt,ot=Z*J-nt*Ft,Pt=rt*nt-yt*Z;if(i){if(at<0||ot<0||Pt<0)return null}else if((at<0||ot<0||Pt<0)&&(at>0||ot>0||Pt>0))return null;let Nt=at+ot+Pt;if(Nt===0)return null;let Rt=X*(at*P+ot*C+Pt*F);if(Nt>0?Rt<0:Rt>0)return null;return this.at(Rt/Nt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe extends On{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var $c=new $t,bi=new xa,zr=new di,Jc=new I,Hr=new I,Gr=new I,kr=new I,go=new I,Vr=new I,Kc=new I,Wr=new I;class Mt extends Ce{constructor(t=new he,e=new Xe){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Vr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(go.fromBufferAttribute(h,t),r)Vr.addScaledVector(go,c);else Vr.addScaledVector(go.sub(e),c)}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(zr.copy(n.boundingSphere),zr.applyMatrix4(s),bi.copy(t.ray).recast(t.near),zr.containsPoint(bi.origin)===!1){if(bi.intersectSphere(zr,Jc)===null)return;if(bi.origin.distanceToSquared(Jc)>(t.far-t.near)**2)return}if($c.copy(s).invert(),bi.copy(t.ray).applyMatrix4($c),n.boundingBox!==null){if(bi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,bi)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=d.length;p<_;p++){let b=d[p],m=r[b.materialIndex],f=Math.max(b.start,u.start),w=Math.min(a.count,Math.min(b.start+b.count,u.start+u.count));for(let R=f,y=w;R<y;R+=3){let S=a.getX(R),A=a.getX(R+1),E=a.getX(R+2);if(i=Xr(this,m,t,n,l,c,h,S,A,E),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let b=p,m=_;b<m;b+=3){let f=a.getX(b),w=a.getX(b+1),R=a.getX(b+2);if(i=Xr(this,r,t,n,l,c,h,f,w,R),i)i.faceIndex=Math.floor(b/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,_=d.length;p<_;p++){let b=d[p],m=r[b.materialIndex],f=Math.max(b.start,u.start),w=Math.min(o.count,Math.min(b.start+b.count,u.start+u.count));for(let R=f,y=w;R<y;R+=3){let S=R,A=R+1,E=R+2;if(i=Xr(this,m,t,n,l,c,h,S,A,E),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let b=p,m=_;b<m;b+=3){let f=b,w=b+1,R=b+2;if(i=Xr(this,r,t,n,l,c,h,f,w,R),i)i.faceIndex=Math.floor(b/3),e.push(i)}}}}function jd(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Wr.copy(o),Wr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Wr);if(c<n.near||c>n.far)return null;return{distance:c,point:Wr.clone(),object:t}}function Xr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Hr),t.getVertexPosition(l,Gr),t.getVertexPosition(c,kr);let h=jd(t,e,n,i,Hr,Gr,kr,Kc);if(h){let d=new I;if(on.getBarycoord(Kc,Hr,Gr,kr,d),s)h.uv=on.getInterpolatedAttribute(s,o,l,c,d,new ut);if(r)h.uv1=on.getInterpolatedAttribute(r,o,l,c,d,new ut);if(a){if(h.normal=on.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new I,materialIndex:0};on.getNormal(Hr,Gr,kr,u.normal),h.face=u,h.barycoord=d}return h}class pi extends Be{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,d){super(null,r,a,o,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s extends be{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var ms=new $t,Qc=new $t,qr=[],jc=new Jn,tf=new $t,Vs=new Mt,Ws=new di;class mi extends Mt{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tf)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Jn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),jc.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(jc)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new di;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Ws.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Ws)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,ms),Qc.multiplyMatrices(n,ms),Vs.matrixWorld=Qc,Vs.raycast(t,qr);for(let r=0,a=qr.length;r<a;r++){let o=qr[r];o.instanceId=s,o.object=this,e.push(o)}qr.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new pi(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Ti=new di,ef=new ut(0.5,0.5),Yr=new I;class lr{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,s=new Dn,r=new Dn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],_=s[9],b=s[10],m=s[11],f=s[12],w=s[13],R=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+a,u+h,m+_,y+w).normalize(),i[3].setComponents(l-a,u-h,m-_,y-w).normalize(),n)i[4].setComponents(o,d,b,R).normalize(),i[5].setComponents(l-o,u-d,m-b,y-R).normalize();else if(i[4].setComponents(l-o,u-d,m-b,y-R).normalize(),e===2000)i[5].setComponents(l+o,u+d,m+b,y+R).normalize();else if(e===2001)i[5].setComponents(o,d,b,R).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=ef.distanceTo(t.center);return Ti.radius=0.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Yr.x=i.normal.x>0?t.max.x:t.min.x,Yr.y=i.normal.y>0?t.max.y:t.min.y,Yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xl extends On{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var th=new $t,So=new xa,Zr=new di,$r=new I;class va extends Ce{constructor(t=new he,e=new xl){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;th.copy(i).invert(),So.copy(t.ray).applyMatrix4(th);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let p=d,_=u;p<_;p++){let b=l.getX(p);$r.fromBufferAttribute(h,b),eh($r,b,o,i,t,e,this)}}else{let d=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let p=d,_=u;p<_;p++)$r.fromBufferAttribute(h,p),eh($r,p,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eh(t,e,n,i,s,r,a){let o=So.distanceSqToPoint(t);if(o<n){let l=new I;So.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ya extends Be{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gi extends Be{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fi extends Be{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class vl extends Fi{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ma extends Be{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jt extends he{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=0,u=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2));function p(_,b,m,f,w,R,y,S,A,E,g){let v=R/A,G=y/E,P=R/2,L=y/2,K=S/2,C=A+1,O=E+1,H=0,F=0,k=new I;for(let z=0;z<O;z++){let X=z*G-L;for(let Z=0;Z<C;Z++){let nt=Z*v-P;k[_]=nt*f,k[b]=X*w,k[m]=K,l.push(k.x,k.y,k.z),k[_]=0,k[b]=0,k[m]=S>0?1:-1,c.push(k.x,k.y,k.z),h.push(Z/A),h.push(1-z/E),H+=1}}for(let z=0;z<E;z++)for(let X=0;X<A;X++){let Z=d+X+C*z,nt=d+X+C*(z+1),rt=d+(X+1)+C*(z+1),yt=d+(X+1)+C*z;o.push(Z,nt,yt),o.push(nt,rt,yt),F+=6}a.addGroup(u,F,g),u+=F,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oi extends he{constructor(t=1,e=1,n=4,i=8,s=1){super();this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],a=[],o=[],l=[],c=e/2,h=Math.PI/2*t,d=e,u=2*h+d,p=n*2+s,_=i+1,b=new I,m=new I;for(let f=0;f<=p;f++){let w=0,R=0,y=0,S=0;if(f<=n){let g=f/n,v=g*Math.PI/2;R=-c-t*Math.cos(v),y=t*Math.sin(v),S=-t*Math.cos(v),w=g*h}else if(f<=n+s){let g=(f-n)/s;R=-c+g*e,y=t,S=0,w=h+g*d}else{let g=(f-n-s)/n,v=g*Math.PI/2;R=c+t*Math.sin(v),y=t*Math.cos(v),S=t*Math.sin(v),w=h+d+g*h}let A=Math.max(0,Math.min(1,w/u)),E=0;if(f===0)E=0.5/i;else if(f===p)E=-0.5/i;for(let g=0;g<=i;g++){let v=g/i,G=v*Math.PI*2,P=Math.sin(G),L=Math.cos(G);m.x=-y*L,m.y=R,m.z=y*P,a.push(m.x,m.y,m.z),b.set(-y*L,S,y*P),b.normalize(),o.push(b.x,b.y,b.z),l.push(v+E,A)}if(f>0){let g=(f-1)*_;for(let v=0;v<i;v++){let G=g+v,P=g+v+1,L=f*_+v,K=f*_+v+1;r.push(G,P,L),r.push(P,K,L)}}}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Le extends he{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],p=0,_=[],b=n/2,m=0;if(f(),r===!1){if(t>0)w(!0);if(e>0)w(!1)}this.setIndex(c),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(u,2));function f(){let R=new I,y=new I,S=0,A=(e-t)/n;for(let E=0;E<=s;E++){let g=[],v=E/s,G=v*(e-t)+t;for(let P=0;P<=i;P++){let L=P/i,K=L*o+a,C=Math.sin(K),O=Math.cos(K);y.x=G*C,y.y=-v*n+b,y.z=G*O,h.push(y.x,y.y,y.z),R.set(C,A,O).normalize(),d.push(R.x,R.y,R.z),u.push(L,1-v),g.push(p++)}_.push(g)}for(let E=0;E<i;E++)for(let g=0;g<s;g++){let v=_[g][E],G=_[g+1][E],P=_[g+1][E+1],L=_[g][E+1];if(t>0||g!==0)c.push(v,G,L),S+=3;if(e>0||g!==s-1)c.push(G,P,L),S+=3}l.addGroup(m,S,0),m+=S}function w(R){let y=p,S=new ut,A=new I,E=0,g=R===!0?t:e,v=R===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,b*v,0),d.push(0,v,0),u.push(0.5,0.5),p++;let G=p;for(let P=0;P<=i;P++){let K=P/i*o+a,C=Math.cos(K),O=Math.sin(K);A.x=g*O,A.y=b*v,A.z=g*C,h.push(A.x,A.y,A.z),d.push(0,v,0),S.x=C*0.5+0.5,S.y=O*0.5*v+0.5,u.push(S.x,S.y),p++}for(let P=0;P<i;P++){let L=y+P,K=G+P;if(R===!0)c.push(K,K+1,L);else c.push(K+1,K,L);E+=3}l.addGroup(m,E,R===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class En extends Le{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new En(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cr extends he{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(f){let w=new I,R=new I,y=new I;for(let S=0;S<e.length;S+=3)u(e[S+0],w),u(e[S+1],R),u(e[S+2],y),o(w,R,y,f)}function o(f,w,R,y){let S=y+1,A=[];for(let E=0;E<=S;E++){A[E]=[];let g=f.clone().lerp(R,E/S),v=w.clone().lerp(R,E/S),G=S-E;for(let P=0;P<=G;P++)if(P===0&&E===S)A[E][P]=g;else A[E][P]=g.clone().lerp(v,P/G)}for(let E=0;E<S;E++)for(let g=0;g<2*(S-E)-1;g++){let v=Math.floor(g/2);if(g%2===0)d(A[E][v+1]),d(A[E+1][v]),d(A[E][v]);else d(A[E][v+1]),d(A[E+1][v+1]),d(A[E+1][v])}}function l(f){let w=new I;for(let R=0;R<s.length;R+=3)w.x=s[R+0],w.y=s[R+1],w.z=s[R+2],w.normalize().multiplyScalar(f),s[R+0]=w.x,s[R+1]=w.y,s[R+2]=w.z}function c(){let f=new I;for(let w=0;w<s.length;w+=3){f.x=s[w+0],f.y=s[w+1],f.z=s[w+2];let R=b(f)/2/Math.PI+0.5,y=m(f)/Math.PI+0.5;r.push(R,1-y)}p(),h()}function h(){for(let f=0;f<r.length;f+=6){let w=r[f+0],R=r[f+2],y=r[f+4],S=Math.max(w,R,y),A=Math.min(w,R,y);if(S>0.9&&A<0.1){if(w<0.2)r[f+0]+=1;if(R<0.2)r[f+2]+=1;if(y<0.2)r[f+4]+=1}}}function d(f){s.push(f.x,f.y,f.z)}function u(f,w){let R=f*3;w.x=t[R+0],w.y=t[R+1],w.z=t[R+2]}function p(){let f=new I,w=new I,R=new I,y=new I,S=new ut,A=new ut,E=new ut;for(let g=0,v=0;g<s.length;g+=9,v+=6){f.set(s[g+0],s[g+1],s[g+2]),w.set(s[g+3],s[g+4],s[g+5]),R.set(s[g+6],s[g+7],s[g+8]),S.set(r[v+0],r[v+1]),A.set(r[v+2],r[v+3]),E.set(r[v+4],r[v+5]),y.copy(f).add(w).add(R).divideScalar(3);let G=b(y);_(S,v+0,f,G),_(A,v+2,w,G),_(E,v+4,R,G)}}function _(f,w,R,y){if(y<0&&f.x===1)r[w]=f.x-1;if(R.x===0&&R.z===0)r[w]=y/2/Math.PI+0.5}function b(f){return Math.atan2(f.z,-f.x)}function m(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.vertices,t.indices,t.radius,t.detail)}}class hr extends cr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e);this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hr(t.radius,t.detail)}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,u=(r-c)/d;return(i+u)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new ut:new I);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],s=[],r=[],a=new I,o=new $t;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new I)}s[0]=new I,r[0]=new I;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(h<=l)l=h,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Zt(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(o.makeRotationAxis(a,p))}r[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos(Zt(s[0].dot(s[t]),-1,1));if(u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)u=-u;for(let p=1;p<=t;p++)s[p].applyMatrix4(o.makeRotationAxis(i[p],u*p)),r[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sa extends wn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new ut){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yl extends Sa{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Ml(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var nh=new I,ih=new I,_o=new Ml,xo=new Ml,vo=new Ml;class Bi extends wn{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else ih.subVectors(i[0],i[1]).add(i[0]),l=ih;let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else nh.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=nh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(h),u),_=Math.pow(h.distanceToSquared(d),u),b=Math.pow(d.distanceToSquared(c),u);if(_<0.0001)_=1;if(p<0.0001)p=_;if(b<0.0001)b=_;_o.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,p,_,b),xo.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,p,_,b),vo.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,p,_,b)}else if(this.curveType==="catmullrom")_o.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),xo.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),vo.initCatmullRom(l.z,h.z,d.z,c.z,this.tension);return n.set(_o.calc(o),xo.calc(o),vo.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sh(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function nf(t,e){let n=1-t;return n*n*e}function sf(t,e){return 2*(1-t)*t*e}function rf(t,e){return t*t*e}function Xs(t,e,n,i){return nf(t,e)+sf(t,n)+rf(t,i)}function af(t,e){let n=1-t;return n*n*n*e}function of(t,e){let n=1-t;return 3*n*n*t*e}function lf(t,e){return 3*(1-t)*t*t*e}function cf(t,e){return t*t*t*e}function qs(t,e,n,i,s){return af(t,e)+of(t,n)+lf(t,i)+cf(t,s)}class Sl extends wn{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(qs(t,i.x,s.x,r.x,a.x),qs(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bl extends wn{constructor(t=new I,e=new I,n=new I,i=new I){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(qs(t,i.x,s.x,r.x,a.x),qs(t,i.y,s.y,r.y,a.y),qs(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tl extends wn{constructor(t=new ut,e=new ut){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class El extends wn{constructor(t=new I,e=new I){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wl extends wn{constructor(t=new ut,e=new ut,n=new ut){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Xs(t,i.x,s.x,r.x),Xs(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ba extends wn{constructor(t=new I,e=new I,n=new I){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Xs(t,i.x,s.x,r.x),Xs(t,i.y,s.y,r.y),Xs(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Al extends wn{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(sh(a,o.x,l.x,c.x,h.x),sh(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var hf=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:Bi,CubicBezierCurve:Sl,CubicBezierCurve3:bl,EllipseCurve:Sa,LineCurve:Tl,LineCurve3:El,QuadraticBezierCurve:wl,QuadraticBezierCurve3:ba,SplineCurve:Al});class Rs extends cr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rs(t.radius,t.detail)}}class pn extends he{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],p=[],_=[],b=[];for(let m=0;m<c;m++){let f=m*d-r;for(let w=0;w<l;w++){let R=w*h-s;p.push(R,-f,0),_.push(0,0,1),b.push(w/a),b.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let w=f+l*m,R=f+l*(m+1),y=f+1+l*(m+1),S=f+1+l*m;u.push(w,R,S),u.push(R,y,S)}this.setIndex(u),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ye extends he{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],h=new I,d=new I,u=[],p=[],_=[],b=[];for(let m=0;m<=n;m++){let f=[],w=m/n,R=r+w*a,y=t*Math.cos(R),S=Math.sqrt(t*t-y*y),A=0;if(m===0&&r===0)A=0.5/e;else if(m===n&&o===Math.PI)A=-0.5/e;for(let E=0;E<=e;E++){let g=E/e,v=i+g*s;h.x=-S*Math.cos(v),h.y=y,h.z=S*Math.sin(v),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),b.push(g+A,1-w),f.push(l++)}c.push(f)}for(let m=0;m<n;m++)for(let f=0;f<e;f++){let w=c[m][f+1],R=c[m][f],y=c[m+1][f],S=c[m+1][f+1];if(m!==0||r>0)u.push(w,R,S);if(m!==n-1||o<Math.PI)u.push(R,y,S)}this.setIndex(u),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zi extends he{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new I,u=new I,p=new I;for(let _=0;_<=n;_++){let b=r+_/n*a;for(let m=0;m<=i;m++){let f=m/i*s;u.x=(t+e*Math.cos(b))*Math.cos(f),u.y=(t+e*Math.cos(b))*Math.sin(f),u.z=e*Math.sin(b),l.push(u.x,u.y,u.z),d.x=t*Math.cos(f),d.y=t*Math.sin(f),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(m/i),h.push(_/n)}}for(let _=1;_<=n;_++)for(let b=1;b<=i;b++){let m=(i+1)*_+b-1,f=(i+1)*(_-1)+b-1,w=(i+1)*(_-1)+b,R=(i+1)*_+b;o.push(m,f,R),o.push(f,w,R)}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ur extends he{constructor(t=new ba(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new I,o=new I,l=new ut,c=new I,h=[],d=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(u,2));function _(){for(let w=0;w<e;w++)b(w);b(s===!1?e:0),f(),m()}function b(w){c=t.getPointAt(w/e,c);let R=r.normals[w],y=r.binormals[w];for(let S=0;S<=i;S++){let A=S/i*Math.PI*2,E=Math.sin(A),g=-Math.cos(A);o.x=g*R.x+E*y.x,o.y=g*R.y+E*y.y,o.z=g*R.z+E*y.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=e;w++)for(let R=1;R<=i;R++){let y=(i+1)*(w-1)+(R-1),S=(i+1)*w+(R-1),A=(i+1)*w+R,E=(i+1)*(w-1)+R;p.push(y,S,E),p.push(S,A,E)}}function f(){for(let w=0;w<=e;w++)for(let R=0;R<=i;R++)l.x=w/e,l.y=R/i,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ur(new hf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Hi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(rh(s))if(s.isRenderTargetTexture)Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(rh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function qe(t){let e={};for(let n=0;n<t.length;n++){let i=Hi(t[n]);for(let s in i)e[s]=i[s]}return e}function rh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function uf(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rl(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Xt.workingColorSpace}var An={clone:Hi,merge:qe},df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fe extends On{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(i.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class dr extends fe{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kn extends On{constructor(t){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Rn extends On{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cl extends On{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Il extends On{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function gs(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function yo(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class Gi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Pl extends Gi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),_=p*p,b=_*p,m=-d*b+2*d*_-d*p,f=(1+d)*b+(-1.5-2*d)*_+(-0.5+d)*p+1,w=(-1-u)*b+(1.5+u)*_+0.5*p,R=u*b-u*_;for(let y=0;y!==a;++y)s[y]=m*r[c+y]+f*r[l+y]+w*r[o+y]+R*r[h+y];return s}}class Ll extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[o+d]*c;return s}}class Nl extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Dl extends Gi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(n-e)/(i-e),_=1-p;for(let b=0;b!==a;++b)s[b]=r[l+b]*_+r[o+b]*p;return s}let d=a*2,u=t-1;for(let p=0;p!==a;++p){let _=r[l+p],b=r[o+p],m=u*d+p*2,f=h[m],w=h[m+1],R=t*d+p*2,y=c[R],S=c[R+1],A=mf(n,e,f,y,i);s[p]=du(A,_,w,S,b)}return s}}function du(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function pf(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function mf(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=du(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=pf(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class mn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(yo(t.settings))n.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Dl(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(yo(this.settings))ah(this.settings.inTangents,t),ah(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Ud(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let _=e[h+p];if(_!==e[d+p]||_!==e[u+p]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,yo(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function ah(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=2301;class ki extends mn{constructor(t,e,n){super(t,e,n)}}ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=2300;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Ul extends mn{constructor(t,e,n,i){super(t,e,n,i)}}Ul.prototype.ValueTypeName="color";class Fl extends mn{constructor(t,e,n,i){super(t,e,n,i)}}Fl.prototype.ValueTypeName="number";class Ol extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Qe.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Ta extends mn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}}Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class Vi extends mn{constructor(t,e,n){super(t,e,n)}}Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=2300;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bl extends mn{constructor(t,e,n,i){super(t,e,n,i)}}Bl.prototype.ValueTypeName="vector";class zl{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var fu=new zl;class Hl{constructor(t){if(this.manager=t!==void 0?t:fu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ea extends Ce{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class wa extends Ea{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var Mo=new $t,oh=new I,lh=new I;class Gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mo,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Jr=new I,Kr=new Qe,Nn=new I;class Aa extends Ce{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Jr,Kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Jr,Kr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jr,Kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Jr,Kr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var li=new I,ch=new ut,hh=new ut;class Je extends Aa{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Za*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Za*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Za*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wi extends Aa{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class pu extends Gl{constructor(){super(new Wi(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Ra extends Ea{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var _s=-90,xs=1;class kl extends Ce{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Je(_s,xs,t,e);i.layers=this.layers,this.add(i);let s=new Je(_s,xs,t,e);s.layers=this.layers,this.add(s);let r=new Je(_s,xs,t,e);r.layers=this.layers,this.add(r);let a=new Je(_s,xs,t,e);a.layers=this.layers,this.add(a);let o=new Je(_s,xs,t,e);o.layers=this.layers,this.add(o);let l=new Je(_s,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;if(t.isWebGLRenderer===!0)b=t.state.buffers.depth.getReversed();else b=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),b&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Vl extends Je{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ca{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=gf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function gf(){if(this._document.hidden===!1)this.reset()}var Wl="\\[\\]\\.:\\/",_f=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",xf="[^"+Wl.replace("\\.","")+"]",vf=/((?:WC+[\/:])*)/.source.replace("WC",Xl),yf=/(WCOD+)?/.source.replace("WCOD",xf),Mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),bf=new RegExp("^"+vf+yf+Mf+Sf+"$"),Tf=["material","materials","bones","map"];class mu{constructor(t,e,n){let i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ae(t,e,n);else return new ae.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_f,"")}static parseTrackName(t){let e=bf.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Tf.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(!t)t=ae.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=mu;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);class ql{static{ql.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function Yl(t,e,n,i){let s=Ef(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ef(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Ot("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Ou(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Cf(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:h,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],b=d[p];if(b.start<=_.start+_.count+1)_.count=Math.max(_.count,b.start+b.count-_.start);else++u,d[u]=b}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let b=d[p];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,Rp=`uniform sampler2D dfgLUT;
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
}`,Cp=`
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Qm=`#define PHONG
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
}`,jm=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,e0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:If,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:Nf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:zf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:kf,iridescence_fragment:Vf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:Zf,color_fragment:$f,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:Qf,common:jf,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:ap,colorspace_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:Sp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:_p,lightmap_pars_fragment:xp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:bp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ep,lights_phong_pars_fragment:wp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Rp,lights_fragment_begin:Cp,lights_fragment_maps:Ip,lights_fragment_end:Pp,lightprobes_pars_fragment:Lp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:kp,morphinstance_vertex:Vp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:Zp,normal_fragment_maps:$p,normal_pars_fragment:Jp,normal_pars_vertex:Kp,normal_vertex:Qp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:Tm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Am,uv_vertex:Rm,worldpos_vertex:Cm,background_vert:Im,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Nm,cube_vert:Dm,cube_frag:Um,depth_vert:Fm,depth_frag:Om,distance_vert:Bm,distance_frag:zm,equirect_vert:Hm,equirect_frag:Gm,linedashed_vert:km,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:Zm,meshmatcap_frag:$m,meshnormal_vert:Jm,meshnormal_frag:Km,meshphong_vert:Qm,meshphong_frag:jm,meshphysical_vert:t0,meshphysical_frag:e0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},ft={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ut(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},zn={basic:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ht(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:qe([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:qe([ft.lights,ft.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};zn.physical={uniforms:qe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Ia={r:0,b:0,g:0},h0=new $t,Bu=new Ht;Bu.set(-1,0,0,0,1,0,0,0,1);function u0(t,e,n,i,s,r){let a=new ht(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let y=w.backgroundBlurriness>0;R=e.get(R,y)}return R}function _(w){let R=!1,y=p(w);if(y===null)m(a,o);else if(y&&y.isColor)m(y,1),R=!0;let S=t.xr.getEnvironmentBlendMode();if(S==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(S==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||R)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function b(w,R){let y=p(R);if(y&&(y.isCubeTexture||y.mapping===nr)){if(c===void 0)c=new Mt(new Jt(1,1,1),new fe({name:"BackgroundCubeMaterial",uniforms:Hi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Bu);if(c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==oe,h!==y||d!==y.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=y,d=y.version,u=t.toneMapping;c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)}else if(y&&y.isTexture){if(l===void 0)l=new Mt(new pn(2,2),new fe({name:"BackgroundMaterial",uniforms:Hi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0)y.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(y.matrix),h!==y||d!==y.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=y,d=y.version,u=t.toneMapping;l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)}}function m(w,R){w.getRGB(Ia,Rl(t)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,R,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:b,dispose:f}}function d0(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,L,K,C,O){let H=!1,F=d(P,C,K,L);if(r!==F)r=F,c(r.object);if(H=p(P,C,K,O),H)_(P,C,K,O);if(O!==null)e.update(O,t.ELEMENT_ARRAY_BUFFER);if(H||a){if(a=!1,y(P,L,K,C),O!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer)}}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function d(P,L,K,C){let O=C.wireframe===!0,H=i[L.id];if(H===void 0)H={},i[L.id]=H;let F=P.isInstancedMesh===!0?P.id:0,k=H[F];if(k===void 0)k={},H[F]=k;let z=k[K.id];if(z===void 0)z={},k[K.id]=z;let X=z[O];if(X===void 0)X=u(l()),z[O]=X;return X}function u(P){let L=[],K=[],C=[];for(let O=0;O<n;O++)L[O]=0,K[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:K,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,L,K,C){let O=r.attributes,H=L.attributes,F=0,k=K.getAttributes();for(let z in k)if(k[z].location>=0){let Z=O[z],nt=H[z];if(nt===void 0){if(z==="instanceMatrix"&&P.instanceMatrix)nt=P.instanceMatrix;if(z==="instanceColor"&&P.instanceColor)nt=P.instanceColor}if(Z===void 0)return!0;if(Z.attribute!==nt)return!0;if(nt&&Z.data!==nt.data)return!0;F++}if(r.attributesNum!==F)return!0;if(r.index!==C)return!0;return!1}function _(P,L,K,C){let O={},H=L.attributes,F=0,k=K.getAttributes();for(let z in k)if(k[z].location>=0){let Z=H[z];if(Z===void 0){if(z==="instanceMatrix"&&P.instanceMatrix)Z=P.instanceMatrix;if(z==="instanceColor"&&P.instanceColor)Z=P.instanceColor}let nt={};if(nt.attribute=Z,Z&&Z.data)nt.data=Z.data;O[z]=nt,F++}r.attributes=O,r.attributesNum=F,r.index=C}function b(){let P=r.newAttributes;for(let L=0,K=P.length;L<K;L++)P[L]=0}function m(P){f(P,0)}function f(P,L){let{newAttributes:K,enabledAttributes:C,attributeDivisors:O}=r;if(K[P]=1,C[P]===0)t.enableVertexAttribArray(P),C[P]=1;if(O[P]!==L)t.vertexAttribDivisor(P,L),O[P]=L}function w(){let{newAttributes:P,enabledAttributes:L}=r;for(let K=0,C=L.length;K<C;K++)if(L[K]!==P[K])t.disableVertexAttribArray(K),L[K]=0}function R(P,L,K,C,O,H,F){if(F===!0)t.vertexAttribIPointer(P,L,K,O,H);else t.vertexAttribPointer(P,L,K,C,O,H)}function y(P,L,K,C){b();let O=C.attributes,H=K.getAttributes(),F=L.defaultAttributeValues;for(let k in H){let z=H[k];if(z.location>=0){let X=O[k];if(X===void 0){if(k==="instanceMatrix"&&P.instanceMatrix)X=P.instanceMatrix;if(k==="instanceColor"&&P.instanceColor)X=P.instanceColor}if(X!==void 0){let{normalized:Z,itemSize:nt}=X,rt=e.get(X);if(rt===void 0)continue;let{buffer:yt,type:Ft,bytesPerElement:J}=rt,at=Ft===t.INT||Ft===t.UNSIGNED_INT||X.gpuType===Ao;if(X.isInterleavedBufferAttribute){let ot=X.data,Pt=ot.stride,Nt=X.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<z.locationSize;Rt++)f(z.location+Rt,ot.meshPerAttribute);if(P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=ot.meshPerAttribute*ot.count}else for(let Rt=0;Rt<z.locationSize;Rt++)m(z.location+Rt);t.bindBuffer(t.ARRAY_BUFFER,yt);for(let Rt=0;Rt<z.locationSize;Rt++)R(z.location+Rt,nt/z.locationSize,Ft,Z,Pt*J,(Nt+nt/z.locationSize*Rt)*J,at)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)f(z.location+ot,X.meshPerAttribute);if(P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=X.meshPerAttribute*X.count}else for(let ot=0;ot<z.locationSize;ot++)m(z.location+ot);t.bindBuffer(t.ARRAY_BUFFER,yt);for(let ot=0;ot<z.locationSize;ot++)R(z.location+ot,nt/z.locationSize,Ft,Z,nt*J,nt/z.locationSize*ot*J,at)}}else if(F!==void 0){let Z=F[k];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(z.location,Z);break;case 3:t.vertexAttrib3fv(z.location,Z);break;case 4:t.vertexAttrib4fv(z.location,Z);break;default:t.vertexAttrib1fv(z.location,Z)}}}}w()}function S(){v();for(let P in i){let L=i[P];for(let K in L){let C=L[K];for(let O in C){let H=C[O];for(let F in H)h(H[F].object),delete H[F];delete C[O]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let K in L){let C=L[K];for(let O in C){let H=C[O];for(let F in H)h(H[F].object),delete H[F];delete C[O]}}delete i[P.id]}function E(P){for(let L in i){let K=i[L];for(let C in K){let O=K[C];if(O[P.id]===void 0)continue;let H=O[P.id];for(let F in H)h(H[F].object),delete H[F];delete O[P.id]}}}function g(P){for(let L in i){let K=i[L],C=P.isInstancedMesh===!0?P.id:0,O=K[C];if(O===void 0)continue;for(let H in O){let F=O[H];for(let k in F)h(F[k].object),delete F[k];delete O[H]}if(delete K[C],Object.keys(K).length===0)delete i[L]}}function v(){if(G(),a=!0,r===s)return;r=s,c(r.object)}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:v,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:m,disableUnusedAttributes:w}}function f0(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p0(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){if(E!==Fn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(E){let g=E===Fe&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(E!==Tn&&E!==Zn&&!g&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}if(E==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&u===!1)Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:y,maxSamples:S,samples:A}}function m0(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Dn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let{clippingPlanes:_,clipIntersection:b,clipShadows:m}=d,f=t.get(d);if(!s||_===null||_.length===0||r&&!m)if(r)h(null);else c();else{let w=r?0:i,R=w*4,y=f.clippingState||null;l.value=y,y=h(_,u,R,p);for(let S=0;S!==R;++S)y[S]=n[S];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,p,_){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,_!==!0||m===null){let f=p+b*4,w=u.matrixWorldInverse;if(o.getNormalMatrix(w),m===null||m.length<f)m=new Float32Array(f);for(let R=0,y=p;R!==b;++R,y+=4)a.copy(d[R]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var Is=4,g0=6,_0=20,x0=256,fr=new Wi,gu=new ht,Zl=null,$l=0,Jl=0,Kl=!1,v0=new I,Xi=new I;class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=v0}=s;Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,$l,Jl),this._renderer.xr.enabled=Kl,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Es||t.mapping===Ci)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Fe,format:Fn,colorSpace:hl,depthBuffer:!1},i=_u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=_u(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=y0(s)),this._blurMaterial=S0(s,t,e),this._ggxMaterial=M0(s,t,e)}return i}_compileMaterial(t){let e=new Mt(new he,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,i,s){let o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;if(h.getClearColor(gu),h.toneMapping=bn,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Mt(new Jt,new Xe({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,b=_.material,m=!1,f=t.background;if(f){if(f.isColor)b.color.copy(f),t.background=null,m=!0}else b.color.copy(gu),m=!0;for(let w=0;w<6;w++){let R=w%3;if(R===0)o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[w],s.y,s.z);else if(R===1)o.up.set(0,0,l[w]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[w],s.z);else o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[w]);let y=this._cubeSize;if(Cs(i,R*y,w>2?y:0,y,y),h.setRenderTarget(i),m)h.render(_,o);h.render(t,o)}h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Es||t.mapping===Ci;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=vu();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=xu();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Cs(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,fr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=l*1.25,u=h*d,{_lodMax:p}=this,_=this._sizeLods[n],b=3*_*(n>p-Is?n-p+Is:0),m=4*(this._cubeSize-_);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=p-e,Cs(s,b,m,3*_,2*_),i.setRenderTarget(s),i.render(a,fr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=p-n,Cs(t,b,m,3*_,2*_),i.setRenderTarget(t),i.render(a,fr)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],h=3*c*(i>this._lodMax-Is?i-this._lodMax+Is:0),d=4*(this._cubeSize-c);Cs(e,h,d,3*c,2*c),r.setRenderTarget(e),r.render(o,fr)}}function y0(t){let e=[],n=[],i=t,s=t-Is+1+g0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,_=new Float32Array(p*u*d),b=new Float32Array(p*u*d);for(let f=0;f<d;f++){let w=f%3*2/3-1,R=f>2?0:-1,y=[w,R,0,w+0.6666666666666666,R,0,w+0.6666666666666666,R+1,0,w,R,0,w+0.6666666666666666,R+1,0,w,R+1,0];_.set(y,p*u*f);for(let S=0;S<u;S++){let A=h[S*2]*2-1,E=h[S*2+1]*2-1;if(f===0)Xi.set(1,E,A);else if(f===1)Xi.set(-A,1,-E);else if(f===2)Xi.set(-A,E,1);else if(f===3)Xi.set(-1,E,-A);else if(f===4)Xi.set(-A,-1,E);else Xi.set(A,E,-1);Xi.toArray(b,(f*u+S)*p)}}let m=new he;if(m.setAttribute("position",new be(_,p)),m.setAttribute("outputDirection",new be(b,p)),n.push(new Mt(m,null)),i>Is)i--}return{lodMeshes:n,sizeLods:e}}function _u(t,e,n){let i=new Te(t,e,n);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function M0(t,e,n){return new fe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function S0(t,e,n){return new fe({name:"SphericalGaussianBlur",defines:{SAMPLES:_0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function xu(){return new fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function vu(){return new fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ic extends Te{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ya(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jt(5,5,5),s=new fe({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:un});s.uniforms.tEquirect.value=e;let r=new Mt(i,s),a=e.minFilter;if(e.minFilter===Ii)e.minFilter=We;return new kl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function b0(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){if(u===null||u===void 0)return null;if(p)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===jr||p===ta)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new ic(_.height);return b.fromEquirectangularTexture(t,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,_=p===jr||p===ta,b=p===Es||p===Ci;if(_||b){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f){if(i===null)i=new tc(t);return m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let w=u.image;if(_&&w&&w.height>0||b&&w&&l(w)){if(i===null)i=new tc(t);return m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,p){if(p===jr)u.mapping=Es;else if(p===ta)u.mapping=Ci;return u}function l(u){let p=0,_=6;for(let b=0;b<_;b++)if(u[b]!==void 0)p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=e.get(p);if(_!==void 0)e.delete(p),_.dispose()}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=n.get(p);if(_!==void 0)n.delete(p),_.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function T0(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Ei("WebGLRenderer: "+i+" extension not supported.");return s}}}function E0(t,e,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;if(u.index!==null)e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);if(p)e.remove(p),r.delete(u);if(i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0)delete u._maxInstanceCount;n.memory.geometries--}function o(d,u){if(s[u.id]===!0)return u;return u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++,u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,_=d.attributes.position,b=0;if(_===void 0)return;if(p!==null){let w=p.array;b=p.version;for(let R=0,y=w.length;R<y;R+=3){let S=w[R+0],A=w[R+1],E=w[R+2];u.push(S,A,A,E,E,S)}}else{let w=_.array;b=_.version;for(let R=0,y=w.length/3-1;R<y;R+=3){let S=R+0,A=R+1,E=R+2;u.push(S,A,A,E,E,S)}}let m=new(_.count>=65535?ga:ma)(u,1);m.version=b;let f=r.get(d);if(f)e.remove(f);r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;if(p!==null){if(u.version<p.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function w0(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,p){if(p===0)return;t.drawElementsInstanced(i,u,r,d*a,p),n.update(u,i,p)}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let b=0;for(let m=0;m<p;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function A0(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function R0(t,e,n){let i=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let v=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",v)};if(u!==void 0)u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;if(p===!0)R=1;if(_===!0)R=2;if(b===!0)R=3;let y=o.attributes.position.count*R,S=1;if(y>e.maxTextureSize)S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize;let A=new Float32Array(y*S*4*d),E=new da(A,y,S,d);E.type=Zn,E.needsUpdate=!0;let g=R*4;for(let G=0;G<d;G++){let P=m[G],L=f[G],K=w[G],C=y*S*4*G;for(let O=0;O<P.count;O++){let H=O*g;if(p===!0)s.fromBufferAttribute(P,O),A[C+H+0]=s.x,A[C+H+1]=s.y,A[C+H+2]=s.z,A[C+H+3]=0;if(_===!0)s.fromBufferAttribute(L,O),A[C+H+4]=s.x,A[C+H+5]=s.y,A[C+H+6]=s.z,A[C+H+7]=0;if(b===!0)s.fromBufferAttribute(K,O),A[C+H+8]=s.x,A[C+H+9]=s.y,A[C+H+10]=s.z,A[C+H+11]=K.itemSize===4?s.w:1}}u={count:d,texture:E,size:new ut(y,S)},i.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function C0(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let p=c.skeleton;if(r.get(p)!==h)p.update(),r.set(p,h)}return u}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var I0={[Js]:"LINEAR_TONE_MAPPING",[Ks]:"REINHARD_TONE_MAPPING",[Qs]:"CINEON_TONE_MAPPING",[Ri]:"ACES_FILMIC_TONE_MAPPING",[tr]:"AGX_TONE_MAPPING",[er]:"NEUTRAL_TONE_MAPPING",[js]:"CUSTOM_TONE_MAPPING"};function P0(t,e,n,i,s,r){let a=new Te(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new he;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Mt(c,h),u=new Wi(-1,1,1,-1,0,1),p=null,_=null,b=!1,m,f=null,w=[],R=!1;this.setSize=function(y,S){if(a.setSize(y,S),o!==null)o.setSize(y,S);if(l!==null)l.setSize(y,S);for(let A=0;A<w.length;A++){let E=w[A];if(E.setSize)E.setSize(y,S)}},this.setEffects=function(y){w=y,R=w.length>0&&w[0].isRenderPass===!0;let{width:S,height:A}=a;if(w.length>0&&o===null)o=new Te(S,A,{type:Fe,depthBuffer:!1,stencilBuffer:!1}),l=new Te(S,A,{type:Fe,depthBuffer:!1,stencilBuffer:!1});for(let E=0;E<w.length;E++){let g=w[E];if(g.setSize)g.setSize(S,A)}},this.begin=function(y,S){if(b)return!1;if(y.toneMapping===bn&&w.length===0)return!1;if(f=S,S!==null){let{width:A,height:E}=S;if(a.width!==A||a.height!==E)this.setSize(A,E)}if(R===!1)y.setRenderTarget(a);return m=y.toneMapping,y.toneMapping=bn,!0},this.hasRenderPass=function(){return R},this.end=function(y,S){y.toneMapping=m,b=!0;let A=a,E=o;for(let g=0;g<w.length;g++){let v=w[g];if(v.enabled===!1)continue;if(v.render(y,E,A,S),v.needsSwap!==!1)A=E,E=E===o?l:o}if(p!==y.outputColorSpace||_!==y.toneMapping){if(p=y.outputColorSpace,_=y.toneMapping,h.defines={},Xt.getTransfer(p)===oe)h.defines.SRGB_TRANSFER="";let g=I0[_];if(g)h.defines[g]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(f),y.render(d,u),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),h.dispose()}}var zu=new Be,ec=new Fi(1,1),Hu=new da,Gu=new _l,ku=new ya,yu=[],Mu=[],Su=new Float32Array(16),bu=new Float32Array(9),Tu=new Float32Array(4);function Ps(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=yu[s];if(r===void 0)r=new Float32Array(s),yu[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ne(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function De(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Na(t,e){let n=Mu[e];if(n===void 0)n=new Int32Array(e),Mu[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function L0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function N0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2fv(this.addr,e),De(n,e)}}function D0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ne(n,e))return;t.uniform3fv(this.addr,e),De(n,e)}}function U0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4fv(this.addr,e),De(n,e)}}function F0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),De(n,e)}else{if(Ne(n,i))return;Tu.set(i),t.uniformMatrix2fv(this.addr,!1,Tu),De(n,i)}}function O0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),De(n,e)}else{if(Ne(n,i))return;bu.set(i),t.uniformMatrix3fv(this.addr,!1,bu),De(n,i)}}function B0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),De(n,e)}else{if(Ne(n,i))return;Su.set(i),t.uniformMatrix4fv(this.addr,!1,Su),De(n,i)}}function z0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function H0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2iv(this.addr,e),De(n,e)}}function G0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ne(n,e))return;t.uniform3iv(this.addr,e),De(n,e)}}function k0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4iv(this.addr,e),De(n,e)}}function V0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function W0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2uiv(this.addr,e),De(n,e)}}function X0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ne(n,e))return;t.uniform3uiv(this.addr,e),De(n,e)}}function q0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4uiv(this.addr,e),De(n,e)}}function Y0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)ec.compareFunction=n.isReversedDepthBuffer()?ua:ha,r=ec;else r=zu;n.setTexture2D(e||r,s)}function Z0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Gu,s)}function $0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||ku,s)}function J0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Hu,s)}function K0(t){switch(t){case 5126:return L0;case 35664:return N0;case 35665:return D0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return k0;case 5125:return V0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}function Q0(t,e){t.uniform1fv(this.addr,e)}function j0(t,e){let n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function tg(t,e){let n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function eg(t,e){let n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function ng(t,e){let n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ig(t,e){let n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sg(t,e){let n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rg(t,e){t.uniform1iv(this.addr,e)}function ag(t,e){t.uniform2iv(this.addr,e)}function og(t,e){t.uniform3iv(this.addr,e)}function lg(t,e){t.uniform4iv(this.addr,e)}function cg(t,e){t.uniform1uiv(this.addr,e)}function hg(t,e){t.uniform2uiv(this.addr,e)}function ug(t,e){t.uniform3uiv(this.addr,e)}function dg(t,e){t.uniform4uiv(this.addr,e)}function fg(t,e,n){let i=this.cache,s=e.length,r=Na(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=ec;else a=zu;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function pg(t,e,n){let i=this.cache,s=e.length,r=Na(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Gu,r[a])}function mg(t,e,n){let i=this.cache,s=e.length,r=Na(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||ku,r[a])}function gg(t,e,n){let i=this.cache,s=e.length,r=Na(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Hu,r[a])}function _g(t){switch(t){case 5126:return Q0;case 35664:return j0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}class Vu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K0(e.type)}}class Wu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_g(e.type)}}class Xu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Ql=/(\w+)(\])?(\[|\.)?/g;function Eu(t,e){t.seq.push(e),t.map[e.id]=e}function xg(t,e,n){let i=t.name,s=i.length;Ql.lastIndex=0;while(!0){let r=Ql.exec(i),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Eu(n,c===void 0?new Vu(o,t,e):new Wu(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new Xu(o),Eu(n,d);n=d}}}class gr{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);xg(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function wu(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var vg=37297,yg=0;function Mg(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Au=new Ht;function Sg(t){Xt._getMatrix(Au,Xt.workingColorSpace,t);let e=`mat3( ${Au.elements.map((n)=>n.toFixed(4))} )`;switch(Xt.getTransfer(t)){case ul:return[e,"LinearTransferOETF"];case oe:return[e,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ru(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Mg(t.getShaderSource(e),o)}else return r}function bg(t,e){let n=Sg(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Tg={[Js]:"Linear",[Ks]:"Reinhard",[Qs]:"Cineon",[Ri]:"ACESFilmic",[tr]:"AgX",[er]:"Neutral",[js]:"Custom"};function Eg(t,e){let n=Tg[e];if(n===void 0)return Ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Pa=new I;function wg(){Xt.getLuminanceCoefficients(Pa);let t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Ag(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Rg(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function Cg(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function mr(t){return t!==""}function Cu(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(t){return t.replace(Ig,Lg)}var Pg=new Map;function Lg(t,e){let n=Vt[e];if(n===void 0){let i=Pg.get(e);if(i!==void 0)n=Vt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nc(n)}var Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(t){return t.replace(Ng,Dg)}function Dg(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lu(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var Ug={[wi]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function Fg(t){return Ug[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Og={[Es]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function Bg(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return Og[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var zg={[Ci]:"ENVMAP_MODE_REFRACTION"};function Hg(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return zg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gg={[kh]:"ENVMAP_BLENDING_MULTIPLY",[Vh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function kg(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Gg[t.combine]||"ENVMAP_BLENDING_NONE"}function Vg(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Wg(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=Fg(n),c=Bg(n),h=Hg(n),d=kg(n),u=Vg(n),p=Ag(n),_=Rg(r),b=s.createProgram(),m,f,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(mr).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(mr).join(`
`),f.length>0)f+=`
`}else m=[Lu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),f=[Lu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bn?"#define TONE_MAPPING":"",n.toneMapping!==bn?Vt.tonemapping_pars_fragment:"",n.toneMapping!==bn?Eg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,bg("linearToOutputTexel",n.outputColorSpace),wg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(mr).join(`
`);if(a=nc(a),a=Cu(a,n),a=Iu(a,n),o=nc(o),o=Cu(o,n),o=Iu(o,n),a=Pu(a),o=Pu(o),n.isRawShaderMaterial!==!0)w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let R=w+m+a,y=w+f+o,S=wu(s,s.VERTEX_SHADER,R),A=wu(s,s.FRAGMENT_SHADER,y);if(s.attachShader(b,S),s.attachShader(b,A),n.index0AttributeName!==void 0)s.bindAttribLocation(b,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(b,0,"position");s.linkProgram(b);function E(P){if(t.debug.checkShaderErrors){let L=s.getProgramInfoLog(b)||"",K=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(A)||"",O=L.trim(),H=K.trim(),F=C.trim(),k=!0,z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,b,S,A);else{let X=Ru(s,S,"vertex"),Z=Ru(s,A,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+X+`
`+Z)}else if(O!=="")Ot("WebGLProgram: Program Info Log:",O);else if(H===""||F==="")z=!1;if(z)P.diagnostics={runnable:k,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:F,prefix:f}}}s.deleteShader(S),s.deleteShader(A),g=new gr(s,b),v=Cg(s,b)}let g;this.getUniforms=function(){if(g===void 0)E(this);return g};let v;this.getAttributes=function(){if(v===void 0)E(this);return v};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(G===!1)G=s.getProgramParameter(b,vg);return G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=A,this}var Xg=0;class qu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Yu(t),e.set(t,n);return n}}class Yu{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}}function qg(t){return t===Ni||t===la||t===ca}function Yg(t,e,n,i,s,r){let a=new fa,o=new qu,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function b(g,v,G,P,L,K){let C=P.fog,O=L.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||H,F),z=!!k&&k.mapping===nr?k.image.height:null,X=p[g.type];if(g.precision!==null){if(u=i.getMaxPrecision(g.precision),u!==g.precision)Ot("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead.")}let Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=Z!==void 0?Z.length:0,rt=0;if(O.morphAttributes.position!==void 0)rt=1;if(O.morphAttributes.normal!==void 0)rt=2;if(O.morphAttributes.color!==void 0)rt=3;let yt,Ft,J,at;if(X){let pe=zn[X];yt=pe.vertexShader,Ft=pe.fragmentShader}else{yt=g.vertexShader,Ft=g.fragmentShader;let pe=o.getVertexShaderStage(g),ie=o.getFragmentShaderStage(g);o.update(g,pe,ie),J=pe.id,at=ie.id}let ot=t.getRenderTarget(),Pt=t.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,Me=!!g.map,Wt=!!g.matcap,Kt=!!k,re=!!g.aoMap,Qt=!!g.lightMap,Oe=!!g.bumpMap&&g.wireframe===!1,ge=!!g.normalMap,tn=!!g.displacementMap,Ie=!!g.emissiveMap,Pe=!!g.metalnessMap,D=!!g.roughnessMap,en=g.anisotropy>0,ne=g.clearcoat>0,ve=g.dispersion>0,T=g.retroreflectivity>0,x=g.iridescence>0,N=g.sheen>0,q=g.transmission>0,st=en&&!!g.anisotropyMap,ct=ne&&!!g.clearcoatMap,mt=ne&&!!g.clearcoatNormalMap,j=ne&&!!g.clearcoatRoughnessMap,et=x&&!!g.iridescenceMap,St=x&&!!g.iridescenceThicknessMap,Lt=N&&!!g.sheenColorMap,gt=N&&!!g.sheenRoughnessMap,lt=!!g.specularMap,Dt=!!g.specularColorMap,Ut=!!g.specularIntensityMap,te=q&&!!g.transmissionMap,B=q&&!!g.thicknessMap,dt=!!g.gradientMap,tt=!!g.alphaMap,pt=g.alphaTest>0,bt=!!g.alphaHash,it=!!g.extensions,_t=bn;if(g.toneMapped){if(ot===null||ot.isXRRenderTarget===!0)_t=t.toneMapping}let Gt={shaderID:X,shaderType:g.type,shaderName:g.name,vertexShader:yt,fragmentShader:Ft,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,outputColorSpace:ot===null?t.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Me,matcap:Wt,envMap:Kt,envMapMode:Kt&&k.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:Qt,bumpMap:Oe,normalMap:ge,displacementMap:tn,emissiveMap:Ie,normalMapObjectSpace:ge&&g.normalMapType===jh,normalMapTangentSpace:ge&&g.normalMapType===cl,packedNormalMap:ge&&g.normalMapType===cl&&qg(g.normalMap.format),metalnessMap:Pe,roughnessMap:D,anisotropy:en,anisotropyMap:st,clearcoat:ne,clearcoatMap:ct,clearcoatNormalMap:mt,clearcoatRoughnessMap:j,dispersion:ve,retroreflection:T,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:St,sheen:N,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:lt,specularColorMap:Dt,specularIntensityMap:Ut,transmission:q,transmissionMap:te,thicknessMap:B,gradientMap:dt,opaque:g.transparent===!1&&g.blending===Ai&&g.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:bt,combine:g.combine,mapUv:Me&&_(g.map.channel),aoMapUv:re&&_(g.aoMap.channel),lightMapUv:Qt&&_(g.lightMap.channel),bumpMapUv:Oe&&_(g.bumpMap.channel),normalMapUv:ge&&_(g.normalMap.channel),displacementMapUv:tn&&_(g.displacementMap.channel),emissiveMapUv:Ie&&_(g.emissiveMap.channel),metalnessMapUv:Pe&&_(g.metalnessMap.channel),roughnessMapUv:D&&_(g.roughnessMap.channel),anisotropyMapUv:st&&_(g.anisotropyMap.channel),clearcoatMapUv:ct&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(g.sheenRoughnessMap.channel),specularMapUv:lt&&_(g.specularMap.channel),specularColorMapUv:Dt&&_(g.specularColorMap.channel),specularIntensityMapUv:Ut&&_(g.specularIntensityMap.channel),transmissionMapUv:te&&_(g.transmissionMap.channel),thicknessMapUv:B&&_(g.thicknessMap.channel),alphaMapUv:tt&&_(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||en),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Me||tt),fog:!!C,useFog:g.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&ge===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:rt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Me&&g.map.isVideoTexture===!0&&Xt.getTransfer(g.map.colorSpace)===oe,decodeVideoTextureEmissive:Ie&&g.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(g.emissiveMap.colorSpace)===oe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ke,flipSided:g.side===Ve,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:it&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&g.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function m(g){let v=[];if(g.shaderID)v.push(g.shaderID);else v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let G in g.defines)v.push(G),v.push(g.defines[G]);if(g.isRawShaderMaterial===!1)f(v,g),w(v,g),v.push(t.outputColorSpace);return v.push(g.customProgramCacheKey),v.join()}function f(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function w(g,v){if(a.disableAll(),v.instancing)a.enable(0);if(v.instancingColor)a.enable(1);if(v.instancingMorph)a.enable(2);if(v.matcap)a.enable(3);if(v.envMap)a.enable(4);if(v.normalMapObjectSpace)a.enable(5);if(v.normalMapTangentSpace)a.enable(6);if(v.clearcoat)a.enable(7);if(v.iridescence)a.enable(8);if(v.alphaTest)a.enable(9);if(v.vertexColors)a.enable(10);if(v.vertexAlphas)a.enable(11);if(v.vertexUv1s)a.enable(12);if(v.vertexUv2s)a.enable(13);if(v.vertexUv3s)a.enable(14);if(v.vertexTangents)a.enable(15);if(v.anisotropy)a.enable(16);if(v.alphaHash)a.enable(17);if(v.batching)a.enable(18);if(v.dispersion)a.enable(19);if(v.retroreflection)a.enable(24);if(v.batchingColor)a.enable(20);if(v.gradientMap)a.enable(21);if(v.packedNormalMap)a.enable(22);if(v.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),v.fog)a.enable(0);if(v.useFog)a.enable(1);if(v.flatShading)a.enable(2);if(v.logarithmicDepthBuffer)a.enable(3);if(v.reversedDepthBuffer)a.enable(4);if(v.skinning)a.enable(5);if(v.morphTargets)a.enable(6);if(v.morphNormals)a.enable(7);if(v.morphColors)a.enable(8);if(v.premultipliedAlpha)a.enable(9);if(v.shadowMapEnabled)a.enable(10);if(v.doubleSided)a.enable(11);if(v.flipSided)a.enable(12);if(v.useDepthPacking)a.enable(13);if(v.dithering)a.enable(14);if(v.transmission)a.enable(15);if(v.sheen)a.enable(16);if(v.opaque)a.enable(17);if(v.pointsUvs)a.enable(18);if(v.decodeVideoTexture)a.enable(19);if(v.decodeVideoTextureEmissive)a.enable(20);if(v.alphaToCoverage)a.enable(21);if(v.numLightProbeGrids>0)a.enable(22);if(v.hasPositionAttribute)a.enable(23);g.push(a.mask)}function R(g){let v=p[g.type],G;if(v){let P=zn[v];G=An.clone(P.uniforms)}else G=g.uniforms;return G}function y(g,v){let G=h.get(v);if(G!==void 0)++G.usedTimes;else G=new Wg(t,v,g,s),c.push(G),h.set(v,G);return G}function S(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:E}}function Zg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function $g(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Nu(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Du(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let p=0;if(u.isInstancedMesh)p+=2;if(u.isSkinnedMesh)p+=1;return p}function o(u,p,_,b,m,f){let w=t[e];if(w===void 0)w={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:f},t[e]=w;else w.id=u.id,w.object=u,w.geometry=p,w.material=_,w.materialVariant=a(u),w.groupOrder=b,w.renderOrder=u.renderOrder,w.z=m,w.group=f;return e++,w}function l(u,p,_,b,m,f,w){if(w.reversedDepth===!0)m=-m;let R=o(u,p,_,b,m,f);if(_.transmission>0)i.push(R);else if(_.transparent===!0)s.push(R);else n.push(R)}function c(u,p,_,b,m,f){let w=o(u,p,_,b,m,f);if(_.transmission>0)i.unshift(w);else if(_.transparent===!0)s.unshift(w);else n.unshift(w)}function h(u,p){if(n.length>1)n.sort(u||$g);if(i.length>1)i.sort(p||Nu);if(s.length>1)s.sort(p||Nu)}function d(){for(let u=e,p=t.length;u<p;u++){let _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Jg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Du,t.set(i,[a]);else if(s>=r.length)a=new Du,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Kg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new ht};break;case"SpotLight":n={position:new I,direction:new I,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function Qg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var jg=0;function t_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function e_(t){let e=new Kg,n=Qg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new $t,a=new $t;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,_=0,b=0,m=0,f=0,w=0,R=0,y=0,S=0,A=0,E=0,g=0,v=0,G=0;c.sort(t_);for(let L=0,K=c.length;L<K;L++){let C=c[L],O=C.color,H=C.intensity,F=C.distance,k=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===Ni)k=C.shadow.map.texture;else k=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],H);G++}else if(C.isSunLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,Z=n.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[_]=Z,i.sunShadowMap[_]=k;let nt=X.getViewportCount();for(let rt=0;rt<nt;rt++)i.sunShadowMatrix[b+rt]=X.getMatrix(rt),i.sunShadowCascade[b+rt]=X._cascadeData[rt];b+=nt,_++}i.sun[p]=z,p++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,Z=n.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=C.shadow.matrix,S++}i.directional[m]=z,m++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(O).multiplyScalar(H),z.distance=F,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[w]=z;let X=C.shadow;if(C.map){if(i.spotLightMap[g]=C.map,g++,X.updateMatrices(C),C.castShadow)v++}if(i.spotLightMatrix[w]=X.matrix,C.castShadow){let Z=n.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.spotShadow[w]=Z,i.spotShadowMap[w]=k,E++}w++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(O).multiplyScalar(H),z.halfWidth.set(C.width*0.5,0,0),z.halfHeight.set(0,C.height*0.5,0),i.rectArea[R]=z,R++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let X=C.shadow,Z=n.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=k,i.pointShadowMatrix[f]=C.shadow.matrix,A++}i.point[f]=z,f++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(H),z.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[y]=z,y++}}if(R>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2;else i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;if(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==w||P.rectAreaLength!==R||P.hemiLength!==y||P.numSunShadows!==_||P.numDirectionalShadows!==S||P.numPointShadows!==A||P.numSpotShadows!==E||P.numSpotMaps!==g||P.numLightProbes!==G)i.sun.length=p,i.directional.length=m,i.spot.length=w,i.rectArea.length=R,i.point.length=f,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+g-v,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=G,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=w,P.rectAreaLength=R,P.hemiLength=y,P.numSunShadows=_,P.numDirectionalShadows=S,P.numPointShadows=A,P.numSpotShadows=E,P.numSpotMaps=g,P.numLightProbes=G,i.version=jg++}function l(c,h){let d=0,u=0,p=0,_=0,b=0,m=0,f=h.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let y=c[w];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(y.isSpotLight){let S=i.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),_++}else if(y.isRectAreaLight){let S=i.rectArea[b];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(y.width*0.5,0,0),S.halfHeight.set(0,y.height*0.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Uu(t){let e=new e_(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function n_(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Uu(t),e.set(s,[o]);else if(r>=a.length)o=new Uu(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`,r_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],a_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Fu=new $t,pr=new I,jl=new I;function o_(t,e,n){let i=new lr,s=new ut,r=new ut,a=new xe,o=new Cl,l=new Il,c={},h=n.maxTextureSize,d={[bs]:Ve,[Ve]:bs,[Ke]:Ke},u=new fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new he;_.setAttribute("position",new be(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let b=new Mt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wi;let f=this.type;this.render=function(A,E,g){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===ph)Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wi;let v=t.getRenderTarget(),G=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),L=t.state;if(L.setBlending(un),L.buffers.depth.getReversed()===!0)L.buffers.color.setClear(0,0,0,0);else L.buffers.color.setClear(1,1,1,1);L.buffers.depth.setTest(!0),L.setScissorTest(!1);let K=f!==this.type;if(K)E.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((O)=>O.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,O=A.length;C<O;C++){let H=A[C],F=H.shadow;if(F===void 0){Ot("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let k=F.getFrameExtents();if(s.multiply(k),r.copy(F.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/k.x),s.x=r.x*k.x,F.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/k.y),s.y=r.y*k.y,F.mapSize.y=r.y}let z=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=z,F.map===null||K===!0){if(F.map!==null){if(F.map.depthTexture!==null)F.map.depthTexture.dispose(),F.map.depthTexture=null;F.map.dispose()}if(this.type===Ss){if(H.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Te(s.x,s.y,{format:Ni,type:Fe,minFilter:We,magFilter:We,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Fi(s.x,s.y,Zn),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Pi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}else{if(H.isPointLight)F.map=new ic(s.x),F.map.depthTexture=new vl(s.x,hi);else F.map=new Te(s.x,s.y),F.map.depthTexture=new Fi(s.x,s.y,hi);if(F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Pi,this.type===wi)F.map.depthTexture.compareFunction=z?ua:ha,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We;else F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}F.camera.updateProjectionMatrix()}if(F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y))F.map.setSize(s.x,s.y);let X=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();if(H.isPointLight!==!0)F.updateMatrices(H,g);for(let Z=0;Z<X;Z++){let nt=F.getCamera(Z);if(H.isPointLight){let{camera:rt,matrix:yt}=F,Ft=H.distance||rt.far;if(Ft!==rt.far)rt.far=Ft,rt.updateProjectionMatrix();pr.setFromMatrixPosition(H.matrixWorld),rt.position.copy(pr),jl.copy(rt.position),jl.add(r_[Z]),rt.up.copy(a_[Z]),rt.lookAt(jl),rt.updateMatrixWorld(),yt.makeTranslation(-pr.x,-pr.y,-pr.z),Fu.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Fu,rt.coordinateSystem,rt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,Z),t.clear();else{if(Z===0)t.setRenderTarget(F.map),t.clear();let rt=F.getViewport(Z);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),L.viewport(a)}i=F.getFrustum(Z),y(E,g,nt,H,this.type)}if(F.isPointLightShadow!==!0&&this.type===Ss)w(F,g);F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(v,G,P)};function w(A,E){let g=e.update(b);if(u.defines.VSM_SAMPLES!==A.blurSamples)u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new Te(s.x,s.y,{format:Ni,type:Fe});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,g,u,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,g,p,b,null)}function R(A,E,g,v){let G=null,P=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)G=P;else if(G=g.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=G.uuid,K=E.uuid,C=c[L];if(C===void 0)C={},c[L]=C;let O=C[K];if(O===void 0)O=G.clone(),C[K]=O,E.addEventListener("dispose",S);G=O}if(G.visible=E.visible,G.wireframe=E.wireframe,v===Ss)G.side=E.shadowSide!==null?E.shadowSide:E.side;else G.side=E.shadowSide!==null?E.shadowSide:d[E.side];if(G.alphaMap=E.alphaMap,G.alphaTest=E.alphaToCoverage===!0?0.5:E.alphaTest,G.map=E.map,G.clipShadows=E.clipShadows,G.clippingPlanes=E.clippingPlanes,G.clipIntersection=E.clipIntersection,G.displacementMap=E.displacementMap,G.displacementScale=E.displacementScale,G.displacementBias=E.displacementBias,G.wireframeLinewidth=E.wireframeLinewidth,G.linewidth=E.linewidth,g.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let L=t.properties.get(G);L.light=g}return G}function y(A,E,g,v,G){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&G===Ss)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let K=e.update(A),C=A.material;if(Array.isArray(C)){let O=K.groups;for(let H=0,F=O.length;H<F;H++){let k=O[H],z=C[k.materialIndex];if(z&&z.visible){let X=R(A,z,v,G);A.onBeforeShadow(t,A,E,g,K,X,k),t.renderBufferDirect(g,null,K,X,A,k),A.onAfterShadow(t,A,E,g,K,X,k)}}}else if(C.visible){let O=R(A,C,v,G);A.onBeforeShadow(t,A,E,g,K,O,null),t.renderBufferDirect(g,null,K,O,A,null),A.onAfterShadow(t,A,E,g,K,O,null)}}}let L=A.children;for(let K=0,C=L.length;K<C;K++)y(L[K],E,g,v,G)}function S(A){A.target.removeEventListener("dispose",S);for(let g in c){let v=c[g],G=A.target.uuid;if(G in v)v[G].dispose(),delete v[G]}}}function l_(t,e){function n(){let B=!1,dt=new xe,tt=null,pt=new xe(0,0,0,0);return{setMask:function(bt){if(tt!==bt&&!B)t.colorMask(bt,bt,bt,bt),tt=bt},setLocked:function(bt){B=bt},setClear:function(bt,it,_t,Gt,pe){if(pe===!0)bt*=Gt,it*=Gt,_t*=Gt;if(dt.set(bt,it,_t,Gt),pt.equals(dt)===!1)t.clearColor(bt,it,_t,Gt),pt.copy(dt)},reset:function(){B=!1,tt=null,pt.set(-1,0,0,0)}}}function i(){let B=!1,dt=!1,tt=null,pt=null,bt=null;return{setReversed:function(it){if(dt!==it){let _t=e.get("EXT_clip_control");if(it)_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT);else _t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT);dt=it;let Gt=bt;bt=null,this.setClear(Gt)}},getReversed:function(){return dt},setTest:function(it){if(it)ot(t.DEPTH_TEST);else Pt(t.DEPTH_TEST)},setMask:function(it){if(tt!==it&&!B)t.depthMask(it),tt=it},setFunc:function(it){if(dt)it=cu[it];if(pt!==it){switch(it){case Uh:t.depthFunc(t.NEVER);break;case Fh:t.depthFunc(t.ALWAYS);break;case Oh:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case Bh:t.depthFunc(t.EQUAL);break;case zh:t.depthFunc(t.GEQUAL);break;case Hh:t.depthFunc(t.GREATER);break;case Gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pt=it}},setLocked:function(it){B=it},setClear:function(it){if(bt!==it){if(bt=it,dt)it=1-it;t.clearDepth(it)}},reset:function(){B=!1,tt=null,pt=null,bt=null,dt=!1}}}function s(){let B=!1,dt=null,tt=null,pt=null,bt=null,it=null,_t=null,Gt=null,pe=null;return{setTest:function(ie){if(!B)if(ie)ot(t.STENCIL_TEST);else Pt(t.STENCIL_TEST)},setMask:function(ie){if(dt!==ie&&!B)t.stencilMask(ie),dt=ie},setFunc:function(ie,Pn,Gn){if(tt!==ie||pt!==Pn||bt!==Gn)t.stencilFunc(ie,Pn,Gn),tt=ie,pt=Pn,bt=Gn},setOp:function(ie,Pn,Gn){if(it!==ie||_t!==Pn||Gt!==Gn)t.stencilOp(ie,Pn,Gn),it=ie,_t=Pn,Gt=Gn},setLocked:function(ie){B=ie},setClear:function(ie){if(pe!==ie)t.clearStencil(ie),pe=ie},reset:function(){B=!1,dt=null,tt=null,pt=null,bt=null,it=null,_t=null,Gt=null,pe=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,_=[],b=null,m=!1,f=null,w=null,R=null,y=null,S=null,A=null,E=null,g=new ht(0,0,0),v=0,G=!1,P=null,L=null,K=null,C=null,O=null,H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,k=0,z=t.getParameter(t.VERSION);if(z.indexOf("WebGL")!==-1)k=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=k>=1;else if(z.indexOf("OpenGL ES")!==-1)k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=k>=2;let X=null,Z={},nt=t.getParameter(t.SCISSOR_BOX),rt=t.getParameter(t.VIEWPORT),yt=new xe().fromArray(nt),Ft=new xe().fromArray(rt);function J(B,dt,tt,pt){let bt=new Uint8Array(4),it=t.createTexture();t.bindTexture(B,it),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _t=0;_t<tt;_t++)if(B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY)t.texImage3D(dt,0,t.RGBA,1,1,pt,0,t.RGBA,t.UNSIGNED_BYTE,bt);else t.texImage2D(dt+_t,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,bt);return it}let at={};at[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),at[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),at[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(t.DEPTH_TEST),a.setFunc(wo),Oe(!1),ge(bo),ot(t.CULL_FACE),re(un);function ot(B){if(h[B]!==!0)t.enable(B),h[B]=!0}function Pt(B){if(h[B]!==!1)t.disable(B),h[B]=!1}function Nt(B,dt){if(u[B]!==dt){if(t.bindFramebuffer(B,dt),u[B]=dt,B===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=dt;if(B===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=dt;return!0}return!1}function Rt(B,dt){let tt=_,pt=!1;if(B){if(tt=p.get(dt),tt===void 0)tt=[],p.set(dt,tt);let bt=B.textures;if(tt.length!==bt.length||tt[0]!==t.COLOR_ATTACHMENT0){for(let it=0,_t=bt.length;it<_t;it++)tt[it]=t.COLOR_ATTACHMENT0+it;tt.length=bt.length,pt=!0}}else if(tt[0]!==t.BACK)tt[0]=t.BACK,pt=!0;if(pt)t.drawBuffers(tt)}function Me(B){if(b!==B)return t.useProgram(B),b=B,!0;return!1}let Wt={[Ts]:t.FUNC_ADD,[gh]:t.FUNC_SUBTRACT,[_h]:t.FUNC_REVERSE_SUBTRACT};Wt[xh]=t.MIN,Wt[vh]=t.MAX;let Kt={[yh]:t.ZERO,[Mh]:t.ONE,[Sh]:t.SRC_COLOR,[Th]:t.SRC_ALPHA,[Ih]:t.SRC_ALPHA_SATURATE,[Rh]:t.DST_COLOR,[wh]:t.DST_ALPHA,[bh]:t.ONE_MINUS_SRC_COLOR,[Eh]:t.ONE_MINUS_SRC_ALPHA,[Ch]:t.ONE_MINUS_DST_COLOR,[Ah]:t.ONE_MINUS_DST_ALPHA,[Ph]:t.CONSTANT_COLOR,[Lh]:t.ONE_MINUS_CONSTANT_COLOR,[Nh]:t.CONSTANT_ALPHA,[Dh]:t.ONE_MINUS_CONSTANT_ALPHA};function re(B,dt,tt,pt,bt,it,_t,Gt,pe,ie){if(B===un){if(m===!0)Pt(t.BLEND),m=!1;return}if(m===!1)ot(t.BLEND),m=!0;if(B!==mh){if(B!==f||ie!==G){if(w!==Ts||S!==Ts)t.blendEquation(t.FUNC_ADD),w=Ts,S=Ts;if(ie)switch(B){case Ai:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dn:t.blendFunc(t.ONE,t.ONE);break;case To:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Eo:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ai:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case To:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",B);break}R=null,y=null,A=null,E=null,g.set(0,0,0),v=0,f=B,G=ie}return}if(bt=bt||dt,it=it||tt,_t=_t||pt,dt!==w||bt!==S)t.blendEquationSeparate(Wt[dt],Wt[bt]),w=dt,S=bt;if(tt!==R||pt!==y||it!==A||_t!==E)t.blendFuncSeparate(Kt[tt],Kt[pt],Kt[it],Kt[_t]),R=tt,y=pt,A=it,E=_t;if(Gt.equals(g)===!1||pe!==v)t.blendColor(Gt.r,Gt.g,Gt.b,pe),g.copy(Gt),v=pe;f=B,G=!1}function Qt(B,dt){B.side===Ke?Pt(t.CULL_FACE):ot(t.CULL_FACE);let tt=B.side===Ve;if(dt)tt=!tt;Oe(tt),B.blending===Ai&&B.transparent===!1?re(un):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let pt=B.stencilWrite;if(o.setTest(pt),pt)o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass);Ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(t.SAMPLE_ALPHA_TO_COVERAGE):Pt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(B){if(P!==B){if(B)t.frontFace(t.CW);else t.frontFace(t.CCW);P=B}}function ge(B){if(B!==dh){if(ot(t.CULL_FACE),B!==L)if(B===bo)t.cullFace(t.BACK);else if(B===fh)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Pt(t.CULL_FACE);L=B}function tn(B){if(B!==K){if(F)t.lineWidth(B);K=B}}function Ie(B,dt,tt){if(B){if(ot(t.POLYGON_OFFSET_FILL),C!==dt||O!==tt){if(C=dt,O=tt,a.getReversed())dt=-dt;t.polygonOffset(dt,tt)}}else Pt(t.POLYGON_OFFSET_FILL)}function Pe(B){if(B)ot(t.SCISSOR_TEST);else Pt(t.SCISSOR_TEST)}function D(B){if(B===void 0)B=t.TEXTURE0+H-1;if(X!==B)t.activeTexture(B),X=B}function en(B,dt,tt){if(tt===void 0)if(X===null)tt=t.TEXTURE0+H-1;else tt=X;let pt=Z[tt];if(pt===void 0)pt={type:void 0,texture:void 0},Z[tt]=pt;if(pt.type!==B||pt.texture!==dt){if(X!==tt)t.activeTexture(tt),X=tt;t.bindTexture(B,dt||at[B]),pt.type=B,pt.texture=dt}}function ne(){let B=Z[X];if(B!==void 0&&B.type!==void 0)t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0}function ve(){try{t.compressedTexImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function x(){try{t.texSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function N(){try{t.texSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function st(){try{t.compressedTexSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function ct(){try{t.texStorage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function mt(){try{t.texStorage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function j(){try{t.texImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function et(){try{t.texImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function St(B){if(d[B]!==void 0)return d[B];else return t.getParameter(B)}function Lt(B,dt){if(d[B]!==dt)t.pixelStorei(B,dt),d[B]=dt}function gt(B){if(yt.equals(B)===!1)t.scissor(B.x,B.y,B.z,B.w),yt.copy(B)}function lt(B){if(Ft.equals(B)===!1)t.viewport(B.x,B.y,B.z,B.w),Ft.copy(B)}function Dt(B,dt){let tt=c.get(dt);if(tt===void 0)tt=new WeakMap,c.set(dt,tt);let pt=tt.get(B);if(pt===void 0)pt=t.getUniformBlockIndex(dt,B.name),tt.set(B,pt)}function Ut(B,dt){let pt=c.get(dt).get(B);if(l.get(dt)!==pt)t.uniformBlockBinding(dt,pt,B.__bindingPointIndex),l.set(dt,pt)}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,Z={},u={},p=new WeakMap,_=[],b=null,m=!1,f=null,w=null,R=null,y=null,S=null,A=null,E=null,g=new ht(0,0,0),v=0,G=!1,P=null,L=null,K=null,C=null,O=null,yt.set(0,0,t.canvas.width,t.canvas.height),Ft.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Pt,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Me,setBlending:re,setMaterial:Qt,setFlipSided:Oe,setCullFace:ge,setLineWidth:tn,setPolygonOffset:Ie,setScissorTest:Pe,activeTexture:D,bindTexture:en,unbindTexture:ne,compressedTexImage2D:ve,compressedTexImage3D:T,texImage2D:j,texImage3D:et,pixelStorei:Lt,getParameter:St,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:ct,texStorage3D:mt,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:st,scissor:gt,viewport:lt,reset:te}}function c_(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function b(T,x){return _?new OffscreenCanvas(T,x):Ys("canvas")}function m(T,x,N){let q=1,st=ve(T);if(st.width>N||st.height>N)q=N/Math.max(st.width,st.height);if(q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ct=Math.floor(q*st.width),mt=Math.floor(q*st.height);if(u===void 0)u=b(ct,mt);let j=x?b(ct,mt):u;return j.width=ct,j.height=mt,j.getContext("2d").drawImage(T,0,0,ct,mt),Ot("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ct+"x"+mt+")."),j}else{if("data"in T)Ot("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+").");return T}return T}function f(T){return T.generateMipmaps}function w(T){t.generateMipmap(T)}function R(T){if(T.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function y(T,x,N,q,st,ct=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let mt;if(q){if(mt=e.get("EXT_texture_norm16"),!mt)Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let j=x;if(x===t.RED){if(N===t.FLOAT)j=t.R32F;if(N===t.HALF_FLOAT)j=t.R16F;if(N===t.UNSIGNED_BYTE)j=t.R8;if(N===t.UNSIGNED_SHORT&&mt)j=mt.R16_EXT;if(N===t.SHORT&&mt)j=mt.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(N===t.UNSIGNED_BYTE)j=t.R8UI;if(N===t.UNSIGNED_SHORT)j=t.R16UI;if(N===t.UNSIGNED_INT)j=t.R32UI;if(N===t.BYTE)j=t.R8I;if(N===t.SHORT)j=t.R16I;if(N===t.INT)j=t.R32I}if(x===t.RG){if(N===t.FLOAT)j=t.RG32F;if(N===t.HALF_FLOAT)j=t.RG16F;if(N===t.UNSIGNED_BYTE)j=t.RG8;if(N===t.UNSIGNED_SHORT&&mt)j=mt.RG16_EXT;if(N===t.SHORT&&mt)j=mt.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(N===t.UNSIGNED_BYTE)j=t.RG8UI;if(N===t.UNSIGNED_SHORT)j=t.RG16UI;if(N===t.UNSIGNED_INT)j=t.RG32UI;if(N===t.BYTE)j=t.RG8I;if(N===t.SHORT)j=t.RG16I;if(N===t.INT)j=t.RG32I}if(x===t.RGB_INTEGER){if(N===t.UNSIGNED_BYTE)j=t.RGB8UI;if(N===t.UNSIGNED_SHORT)j=t.RGB16UI;if(N===t.UNSIGNED_INT)j=t.RGB32UI;if(N===t.BYTE)j=t.RGB8I;if(N===t.SHORT)j=t.RGB16I;if(N===t.INT)j=t.RGB32I}if(x===t.RGBA_INTEGER){if(N===t.UNSIGNED_BYTE)j=t.RGBA8UI;if(N===t.UNSIGNED_SHORT)j=t.RGBA16UI;if(N===t.UNSIGNED_INT)j=t.RGBA32UI;if(N===t.BYTE)j=t.RGBA8I;if(N===t.SHORT)j=t.RGBA16I;if(N===t.INT)j=t.RGBA32I}if(x===t.RGB){if(N===t.UNSIGNED_SHORT&&mt)j=mt.RGB16_EXT;if(N===t.SHORT&&mt)j=mt.RGB16_SNORM_EXT;if(N===t.UNSIGNED_INT_5_9_9_9_REV)j=t.RGB9_E5;if(N===t.UNSIGNED_INT_10F_11F_11F_REV)j=t.R11F_G11F_B10F}if(x===t.RGBA){let et=ct?ul:Xt.getTransfer(st);if(N===t.FLOAT)j=t.RGBA32F;if(N===t.HALF_FLOAT)j=t.RGBA16F;if(N===t.UNSIGNED_BYTE)j=et===oe?t.SRGB8_ALPHA8:t.RGBA8;if(N===t.UNSIGNED_SHORT&&mt)j=mt.RGBA16_EXT;if(N===t.SHORT&&mt)j=mt.RGBA16_SNORM_EXT;if(N===t.UNSIGNED_SHORT_4_4_4_4)j=t.RGBA4;if(N===t.UNSIGNED_SHORT_5_5_5_1)j=t.RGB5_A1}if(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)e.get("EXT_color_buffer_float");return j}function S(T,x){let N;if(T){if(x===null||x===hi||x===ws)N=t.DEPTH24_STENCIL8;else if(x===Zn)N=t.DEPTH32F_STENCIL8;else if(x===sr)N=t.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===hi||x===ws)N=t.DEPTH_COMPONENT24;else if(x===Zn)N=t.DEPTH_COMPONENT32F;else if(x===sr)N=t.DEPTH_COMPONENT16;return N}function A(T,x){if(f(T)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==We)return Math.log2(Math.max(x.width,x.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return x.mipmaps.length;else return 1}function E(T){let x=T.target;if(x.removeEventListener("dispose",E),v(x),x.isVideoTexture)h.delete(x);if(x.isHTMLTexture)d.delete(x)}function g(T){let x=T.target;x.removeEventListener("dispose",g),P(x)}function v(T){let x=i.get(T);if(x.__webglInit===void 0)return;let N=T.source,q=p.get(N);if(q){let st=q[x.__cacheKey];if(st.usedTimes--,st.usedTimes===0)G(T);if(Object.keys(q).length===0)p.delete(N)}i.remove(T)}function G(T){let x=i.get(T);t.deleteTexture(x.__webglTexture);let N=T.source,q=p.get(N);delete q[x.__cacheKey],a.memory.textures--}function P(T){let x=i.get(T);if(T.depthTexture)T.depthTexture.dispose(),i.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let st=0;st<x.__webglFramebuffer[q].length;st++)t.deleteFramebuffer(x.__webglFramebuffer[q][st]);else t.deleteFramebuffer(x.__webglFramebuffer[q]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)t.deleteFramebuffer(x.__webglFramebuffer[q]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let q=0;q<x.__webglColorRenderbuffer.length;q++)if(x.__webglColorRenderbuffer[q])t.deleteRenderbuffer(x.__webglColorRenderbuffer[q])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=T.textures;for(let q=0,st=N.length;q<st;q++){let ct=i.get(N[q]);if(ct.__webglTexture)t.deleteTexture(ct.__webglTexture),a.memory.textures--;i.remove(N[q])}i.remove(T)}let L=0;function K(){L=0}function C(){return L}function O(T){L=T}function H(){let T=L;if(T>=s.maxTextures)Ot("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures);return L+=1,T}function F(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function k(T,x){let N=i.get(T);if(T.isVideoTexture)en(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let q=T.image;if(q===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(N,T,x);return}}else if(T.isExternalTexture)N.__webglTexture=T.sourceTexture?T.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function z(T,x){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Pt(N,T,x);return}else if(T.isExternalTexture)N.__webglTexture=T.sourceTexture?T.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function X(T,x){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Pt(N,T,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function Z(T,x){let N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Nt(N,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}let nt={[ea]:t.REPEAT,[na]:t.CLAMP_TO_EDGE,[Xh]:t.MIRRORED_REPEAT},rt={[fn]:t.NEAREST,[qh]:t.NEAREST_MIPMAP_NEAREST,[ir]:t.NEAREST_MIPMAP_LINEAR,[We]:t.LINEAR,[ia]:t.LINEAR_MIPMAP_NEAREST,[Ii]:t.LINEAR_MIPMAP_LINEAR},yt={[tu]:t.NEVER,[ru]:t.ALWAYS,[eu]:t.LESS,[ha]:t.LEQUAL,[nu]:t.EQUAL,[ua]:t.GEQUAL,[iu]:t.GREATER,[su]:t.NOTEQUAL};function Ft(T,x){if(x.type===Zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===ia||x.magFilter===ir||x.magFilter===Ii||x.minFilter===We||x.minFilter===ia||x.minFilter===ir||x.minFilter===Ii))Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(T,t.TEXTURE_WRAP_S,nt[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,nt[x.wrapT]),T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)t.texParameteri(T,t.TEXTURE_WRAP_R,nt[x.wrapR]);if(t.texParameteri(T,t.TEXTURE_MAG_FILTER,rt[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction)t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,yt[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn)return;if(x.minFilter!==ir&&x.minFilter!==Ii)return;if(x.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(T,x){let N=!1;if(T.__webglInit===void 0)T.__webglInit=!0,x.addEventListener("dispose",E);let q=x.source,st=p.get(q);if(st===void 0)st={},p.set(q,st);let ct=F(x);if(ct!==T.__cacheKey){if(st[ct]===void 0)st[ct]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0;st[ct].usedTimes++;let mt=st[T.__cacheKey];if(mt!==void 0){if(st[T.__cacheKey].usedTimes--,mt.usedTimes===0)G(x)}T.__cacheKey=ct,T.__webglTexture=st[ct].texture}return N}function at(T,x,N){return Math.floor(Math.floor(T/N)/x)}function ot(T,x,N,q){let ct=T.updateRanges;if(ct.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,q,x.data);else{ct.sort((Lt,gt)=>Lt.start-gt.start);let mt=0;for(let Lt=1;Lt<ct.length;Lt++){let gt=ct[mt],lt=ct[Lt],Dt=gt.start+gt.count,Ut=at(lt.start,x.width,4),te=at(gt.start,x.width,4);if(lt.start<=Dt+1&&Ut===te&&at(lt.start+lt.count-1,x.width,4)===Ut)gt.count=Math.max(gt.count,lt.start+lt.count-gt.start);else++mt,ct[mt]=lt}ct.length=mt+1;let j=n.getParameter(t.UNPACK_ROW_LENGTH),et=n.getParameter(t.UNPACK_SKIP_PIXELS),St=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Lt=0,gt=ct.length;Lt<gt;Lt++){let lt=ct[Lt],Dt=Math.floor(lt.start/4),Ut=Math.ceil(lt.count/4),te=Dt%x.width,B=Math.floor(Dt/x.width),dt=Ut,tt=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,te,B,dt,1,N,q,x.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,St)}}function Pt(T,x,N){let q=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)q=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)q=t.TEXTURE_3D;let st=J(T,x),ct=x.source;n.bindTexture(q,T.__webglTexture,t.TEXTURE0+N);let mt=i.get(ct);if(ct.version!==mt.__version||st===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=Xt.getPrimaries(Xt.workingColorSpace),pt=x.colorSpace===Di?null:Xt.getPrimaries(x.colorSpace),bt=x.colorSpace===Di||tt===pt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let et=m(x.image,!1,s.maxTextureSize);et=ne(x,et);let St=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),gt=y(x.internalFormat,St,Lt,x.normalized,x.colorSpace,x.isVideoTexture);Ft(q,x);let lt,Dt=x.mipmaps,Ut=x.isVideoTexture!==!0,te=mt.__version===void 0||st===!0,B=ct.dataReady,dt=A(x,et);if(x.isDepthTexture){if(gt=S(x.format===Li,x.type),te)if(Ut)n.texStorage2D(t.TEXTURE_2D,1,gt,et.width,et.height);else n.texImage2D(t.TEXTURE_2D,0,gt,et.width,et.height,0,St,Lt,null)}else if(x.isDataTexture)if(Dt.length>0){if(Ut&&te)n.texStorage2D(t.TEXTURE_2D,dt,gt,Dt[0].width,Dt[0].height);for(let tt=0,pt=Dt.length;tt<pt;tt++)if(lt=Dt[tt],Ut){if(B)n.texSubImage2D(t.TEXTURE_2D,tt,0,0,lt.width,lt.height,St,Lt,lt.data)}else n.texImage2D(t.TEXTURE_2D,tt,gt,lt.width,lt.height,0,St,Lt,lt.data);x.generateMipmaps=!1}else if(Ut){if(te)n.texStorage2D(t.TEXTURE_2D,dt,gt,et.width,et.height);if(B)ot(x,et,St,Lt)}else n.texImage2D(t.TEXTURE_2D,0,gt,et.width,et.height,0,St,Lt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(Ut&&te)n.texStorage3D(t.TEXTURE_2D_ARRAY,dt,gt,Dt[0].width,Dt[0].height,et.depth);for(let tt=0,pt=Dt.length;tt<pt;tt++)if(lt=Dt[tt],x.format!==Fn)if(St!==null)if(Ut){if(B)if(x.layerUpdates.size>0){let bt=Yl(lt.width,lt.height,x.format,x.type);for(let it of x.layerUpdates){let _t=lt.data.subarray(it*bt/lt.data.BYTES_PER_ELEMENT,(it+1)*bt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,tt,0,0,it,lt.width,lt.height,1,St,_t)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,St,lt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,tt,gt,lt.width,lt.height,et.depth,0,lt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ut){if(B)n.texSubImage3D(t.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,St,Lt,lt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,tt,gt,lt.width,lt.height,et.depth,0,St,Lt,lt.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(Ut&&te)n.texStorage2D(t.TEXTURE_2D,dt,gt,Dt[0].width,Dt[0].height);for(let tt=0,pt=Dt.length;tt<pt;tt++)if(lt=Dt[tt],x.format!==Fn)if(St!==null)if(Ut){if(B)n.compressedTexSubImage2D(t.TEXTURE_2D,tt,0,0,lt.width,lt.height,St,lt.data)}else n.compressedTexImage2D(t.TEXTURE_2D,tt,gt,lt.width,lt.height,0,lt.data);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ut){if(B)n.texSubImage2D(t.TEXTURE_2D,tt,0,0,lt.width,lt.height,St,Lt,lt.data)}else n.texImage2D(t.TEXTURE_2D,tt,gt,lt.width,lt.height,0,St,Lt,lt.data)}else if(x.isDataArrayTexture)if(Ut){if(te)n.texStorage3D(t.TEXTURE_2D_ARRAY,dt,gt,et.width,et.height,et.depth);if(B)if(x.layerUpdates.size>0){let tt=Yl(et.width,et.height,x.format,x.type);for(let pt of x.layerUpdates){let bt=et.data.subarray(pt*tt/et.data.BYTES_PER_ELEMENT,(pt+1)*tt/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pt,et.width,et.height,1,St,Lt,bt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,St,Lt,et.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,gt,et.width,et.height,et.depth,0,St,Lt,et.data);else if(x.isData3DTexture)if(Ut){if(te)n.texStorage3D(t.TEXTURE_3D,dt,gt,et.width,et.height,et.depth);if(B)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,St,Lt,et.data)}else n.texImage3D(t.TEXTURE_3D,0,gt,et.width,et.height,et.depth,0,St,Lt,et.data);else if(x.isFramebufferTexture){if(te)if(Ut)n.texStorage2D(t.TEXTURE_2D,dt,gt,et.width,et.height);else{let{width:tt,height:pt}=et;for(let bt=0;bt<dt;bt++)n.texImage2D(t.TEXTURE_2D,bt,gt,tt,pt,0,St,Lt,null),tt>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let tt=t.canvas;if(!tt.hasAttribute("layoutsubtree"))tt.setAttribute("layoutsubtree","true");if(et.parentNode!==tt){tt.appendChild(et),d.add(x),tt.onpaint=(pt)=>{let bt=pt.changedElements;for(let it of d)if(bt.includes(it.image))it.needsUpdate=!0},tt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,et);else{let{RGBA:bt,RGBA:it,UNSIGNED_BYTE:_t}=t;t.texElementImage2D(t.TEXTURE_2D,0,bt,it,_t,et)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ut&&te){let tt=ve(Dt[0]);n.texStorage2D(t.TEXTURE_2D,dt,gt,tt.width,tt.height)}for(let tt=0,pt=Dt.length;tt<pt;tt++)if(lt=Dt[tt],Ut){if(B)n.texSubImage2D(t.TEXTURE_2D,tt,0,0,St,Lt,lt)}else n.texImage2D(t.TEXTURE_2D,tt,gt,St,Lt,lt);x.generateMipmaps=!1}else if(Ut){if(te){let tt=ve(et);n.texStorage2D(t.TEXTURE_2D,dt,gt,tt.width,tt.height)}if(B)n.texSubImage2D(t.TEXTURE_2D,0,0,0,St,Lt,et)}else n.texImage2D(t.TEXTURE_2D,0,gt,St,Lt,et);if(f(x))w(q);if(mt.__version=ct.version,x.onUpdate)x.onUpdate(x)}T.__version=x.version}function Nt(T,x,N){if(x.image.length!==6)return;let q=J(T,x),st=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);let ct=i.get(st);if(st.version!==ct.__version||q===!0){n.activeTexture(t.TEXTURE0+N);let mt=Xt.getPrimaries(Xt.workingColorSpace),j=x.colorSpace===Di?null:Xt.getPrimaries(x.colorSpace),et=x.colorSpace===Di||mt===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,Lt=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++){if(!St&&!Lt)gt[it]=m(x.image[it],!0,s.maxCubemapSize);else gt[it]=Lt?x.image[it].image:x.image[it];gt[it]=ne(x,gt[it])}let lt=gt[0],Dt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),te=y(x.internalFormat,Dt,Ut,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,dt=ct.__version===void 0||q===!0,tt=st.dataReady,pt=A(x,lt);Ft(t.TEXTURE_CUBE_MAP,x);let bt;if(St){if(B&&dt)n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,te,lt.width,lt.height);for(let it=0;it<6;it++){bt=gt[it].mipmaps;for(let _t=0;_t<bt.length;_t++){let Gt=bt[_t];if(x.format!==Fn)if(Dt!==null)if(B){if(tt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,Gt.width,Gt.height,Dt,Gt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,te,Gt.width,Gt.height,0,Gt.data);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(B){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,Gt.width,Gt.height,Dt,Ut,Gt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,te,Gt.width,Gt.height,0,Dt,Ut,Gt.data)}}}else{if(bt=x.mipmaps,B&&dt){if(bt.length>0)pt++;let it=ve(gt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,te,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){if(B){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Dt,Ut,gt[it].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,gt[it].width,gt[it].height,0,Dt,Ut,gt[it].data);for(let _t=0;_t<bt.length;_t++){let pe=bt[_t].image[it].image;if(B){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,pe.width,pe.height,Dt,Ut,pe.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,te,pe.width,pe.height,0,Dt,Ut,pe.data)}}else{if(B){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Ut,gt[it])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,Dt,Ut,gt[it]);for(let _t=0;_t<bt.length;_t++){let Gt=bt[_t];if(B){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Dt,Ut,Gt.image[it])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,te,Dt,Ut,Gt.image[it])}}}if(f(x))w(t.TEXTURE_CUBE_MAP);if(ct.__version=st.version,x.onUpdate)x.onUpdate(x)}T.__version=x.version}function Rt(T,x,N,q,st,ct){let mt=r.convert(N.format,N.colorSpace),j=r.convert(N.type),et=y(N.internalFormat,mt,j,N.normalized,N.colorSpace),St=i.get(x),Lt=i.get(N);if(Lt.__renderTarget=x,!St.__hasExternalTextures){let gt=Math.max(1,x.width>>ct),lt=Math.max(1,x.height>>ct);if(st===t.TEXTURE_3D||st===t.TEXTURE_2D_ARRAY)n.texImage3D(st,ct,et,gt,lt,x.depth,0,mt,j,null);else n.texImage2D(st,ct,et,gt,lt,0,mt,j,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,T),D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,st,Lt.__webglTexture,0,Pe(x));else if(st===t.TEXTURE_2D||st>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,q,st,Lt.__webglTexture,ct);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(T,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer){let q=x.depthTexture,st=q&&q.isDepthTexture?q.type:null,ct=S(x.stencilBuffer,st),mt=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(D(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(x),ct,x.width,x.height);else if(N)t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(x),ct,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,ct,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,mt,t.RENDERBUFFER,T)}else{let q=x.textures;for(let st=0;st<q.length;st++){let ct=q[st],mt=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),et=y(ct.internalFormat,mt,j,ct.normalized,ct.colorSpace);if(D(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(x),et,x.width,x.height);else if(N)t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(x),et,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,et,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Wt(T,x,N){let q=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(x.depthTexture);if(st.__renderTarget=x,!st.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(q){if(st.__webglInit===void 0)st.__webglInit=!0,x.depthTexture.addEventListener("dispose",E);if(st.__webglTexture===void 0){st.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,st.__webglTexture),Ft(t.TEXTURE_CUBE_MAP,x.depthTexture);let St=r.convert(x.depthTexture.format),Lt=r.convert(x.depthTexture.type),gt;if(x.depthTexture.format===Pi)gt=t.DEPTH_COMPONENT24;else if(x.depthTexture.format===Li)gt=t.DEPTH24_STENCIL8;for(let lt=0;lt<6;lt++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,gt,x.width,x.height,0,St,Lt,null)}}else k(x.depthTexture,0);let ct=st.__webglTexture,mt=Pe(x),j=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,et=x.depthTexture.format===Li?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pi)if(D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,et,j,ct,0,mt);else t.framebufferTexture2D(t.FRAMEBUFFER,et,j,ct,0);else if(x.depthTexture.format===Li)if(D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,et,j,ct,0,mt);else t.framebufferTexture2D(t.FRAMEBUFFER,et,j,ct,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(T){let x=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(q){let st=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",st)};q.addEventListener("dispose",st),x.__depthDisposeCallback=st}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Wt(x.__webglFramebuffer[q],T,q);else{let q=T.texture.mipmaps;if(q&&q.length>0)Wt(x.__webglFramebuffer[0],T,0);else Wt(x.__webglFramebuffer,T,0)}else if(N){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=t.createRenderbuffer(),Me(x.__webglDepthbuffer[q],T,!1);else{let st=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,st,t.RENDERBUFFER,ct)}}else{let q=T.texture.mipmaps;if(q&&q.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Me(x.__webglDepthbuffer,T,!1);else{let st=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,st,t.RENDERBUFFER,ct)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(T,x,N){let q=i.get(T);if(x!==void 0)Rt(q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(N!==void 0)Kt(T)}function Qt(T){let x=T.texture,N=i.get(T),q=i.get(x);T.addEventListener("dispose",g);let st=T.textures,ct=T.isWebGLCubeRenderTarget===!0,mt=st.length>1;if(!mt){if(q.__webglTexture===void 0)q.__webglTexture=t.createTexture();q.__version=x.version,a.memory.textures++}if(ct){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let et=0;et<x.mipmaps.length;et++)N.__webglFramebuffer[j][et]=t.createFramebuffer()}else N.__webglFramebuffer[j]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)N.__webglFramebuffer[j]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(mt)for(let j=0,et=st.length;j<et;j++){let St=i.get(st[j]);if(St.__webglTexture===void 0)St.__webglTexture=t.createTexture(),a.memory.textures++}if(T.samples>0&&D(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<st.length;j++){let et=st[j];N.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[j]);let St=r.convert(et.format,et.colorSpace),Lt=r.convert(et.type),gt=y(et.internalFormat,St,Lt,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),lt=Pe(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,lt,gt,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,N.__webglColorRenderbuffer[j])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer)N.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(N.__webglDepthRenderbuffer,T,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ct){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(t.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Rt(N.__webglFramebuffer[j][et],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else Rt(N.__webglFramebuffer[j],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);if(f(x))w(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(mt){for(let j=0,et=st.length;j<et;j++){let St=st[j],Lt=i.get(St),gt=t.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)gt=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(gt,Lt.__webglTexture),Ft(gt,St),Rt(N.__webglFramebuffer,T,St,t.COLOR_ATTACHMENT0+j,gt,0),f(St))w(gt)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)j=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(j,q.__webglTexture),Ft(j,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Rt(N.__webglFramebuffer[et],T,x,t.COLOR_ATTACHMENT0,j,et);else Rt(N.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,j,0);if(f(x))w(j);n.unbindTexture()}if(T.depthBuffer)Kt(T)}function Oe(T){let x=T.textures;for(let N=0,q=x.length;N<q;N++){let st=x[N];if(f(st)){let ct=R(T),mt=i.get(st).__webglTexture;n.bindTexture(ct,mt),w(ct),n.unbindTexture()}}}let ge=[],tn=[];function Ie(T){if(T.samples>0){if(D(T)===!1){let{textures:x,width:N,height:q}=T,st=t.COLOR_BUFFER_BIT,ct=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,mt=i.get(T),j=x.length>1;if(j)for(let St=0;St<x.length;St++)n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let et=T.texture.mipmaps;if(et&&et.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(T.resolveDepthBuffer){if(T.depthBuffer)st|=t.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)st|=t.STENCIL_BUFFER_BIT}if(j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,mt.__webglColorRenderbuffer[St]);let Lt=i.get(x[St]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Lt,0)}if(t.blitFramebuffer(0,0,N,q,0,0,N,q,st,t.NEAREST),l===!0){if(ge.length=0,tn.length=0,ge.push(t.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1)ge.push(ct),tn.push(ct),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tn);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ge)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let St=0;St<x.length;St++){n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.RENDERBUFFER,mt.__webglColorRenderbuffer[St]);let Lt=i.get(x[St]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,mt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.TEXTURE_2D,Lt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Pe(T){return Math.min(s.maxSamples,T.samples)}function D(T){let x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function en(T){let x=a.render.frame;if(h.get(T)!==x)h.set(T,x),T.update()}function ne(T,x){let{colorSpace:N,format:q,type:st}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return x;if(N!==hl&&N!==Di)if(Xt.getTransfer(N)===oe){if(q!==Fn||st!==Tn)Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",N);return x}function ve(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)c.width=T.displayWidth,c.height=T.displayHeight;else c.width=T.width,c.height=T.height;return c}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.getTextureUnits=C,this.setTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function h_(t,e){function n(i,s=Di){let r,a=Xt.getTransfer(s);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Ro)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Co)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yh)return t.BYTE;if(i===Zh)return t.SHORT;if(i===sr)return t.UNSIGNED_SHORT;if(i===Ao)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===Zn)return t.FLOAT;if(i===Fe)return t.HALF_FLOAT;if(i===Kh)return t.ALPHA;if(i===Qh)return t.RGB;if(i===Fn)return t.RGBA;if(i===Pi)return t.DEPTH_COMPONENT;if(i===Li)return t.DEPTH_STENCIL;if(i===As)return t.RED;if(i===Io)return t.RED_INTEGER;if(i===Ni)return t.RG;if(i===Po)return t.RG_INTEGER;if(i===Lo)return t.RGBA_INTEGER;if(i===sa||i===ra||i===aa||i===oa)if(a===oe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===No||i===Do||i===Uo||i===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oo||i===Bo||i===zo||i===Ho||i===Go||i===la||i===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oo||i===Bo)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ho)return r.COMPRESSED_R11_EAC;if(i===Go)return r.COMPRESSED_SIGNED_R11_EAC;if(i===la)return r.COMPRESSED_RG11_EAC;if(i===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===Qo||i===jo||i===tl||i===el||i===nl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===sl||i===rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===il)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ol||i===ca||i===ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===ws)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`;class Zu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ma(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new fe({vertexShader:u_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new pn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $u extends $n{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,_=typeof XRWebGLBinding<"u",b=new Zu,m={},f=e.getContextAttributes(),w=null,R=null,y=[],S=[],A=new ut,E=null,g=null,v=new Je;v.viewport=new xe;let G=new Je;G.viewport=new xe;let P=[v,G],L=new Vl,K=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=y[J];if(at===void 0)at=new ar,y[J]=at;return at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=y[J];if(at===void 0)at=new ar,y[J]=at;return at.getGripSpace()},this.getHand=function(J){let at=y[J];if(at===void 0)at=new ar,y[J]=at;return at.getHandSpace()};function O(J){let at=S.indexOf(J.inputSource);if(at===-1)return;let ot=y[at];if(ot!==void 0)ot.update(J.inputSource,J.frame,l||r),ot.dispatchEvent({type:J.type,data:J.inputSource})}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",F);for(let J=0;J<y.length;J++){let at=S[J];if(at===null)continue;S[J]=null,y[J].disconnect(at)}K=null,C=null,b.reset();for(let J in m)delete m[J];if(t.setRenderTarget(w),u=null,d=null,h=null,i=null,R=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),g!==null){let J=g.camera;J.fov=g.fov,J.zoom=g.zoom,J.updateProjectionMatrix(),g=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){if(s=J,n.isPresenting===!0)Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){if(a=J,n.isPresenting===!0)Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&_)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0)await e.makeXRCompatible();if(E=t.getPixelRatio(),t.getSize(A),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ot={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),R=new Te(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ot=null,Pt=null,Nt=null;if(f.depth)Nt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=f.stencil?Li:Pi,Pt=f.stencil?ws:hi;let Rt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new Te(d.textureWidth,d.textureHeight,{format:Fn,type:Tn,depthTexture:new Fi(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function F(J){for(let at=0;at<J.removed.length;at++){let ot=J.removed[at],Pt=S.indexOf(ot);if(Pt>=0)S[Pt]=null,y[Pt].disconnect(ot)}for(let at=0;at<J.added.length;at++){let ot=J.added[at],Pt=S.indexOf(ot);if(Pt===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=S.length){S.push(ot),Pt=Rt;break}else if(S[Rt]===null){S[Rt]=ot,Pt=Rt;break}if(Pt===-1)break}let Nt=y[Pt];if(Nt)Nt.connect(ot)}}let k=new I,z=new I;function X(J,at,ot){k.setFromMatrixPosition(at.matrixWorld),z.setFromMatrixPosition(ot.matrixWorld);let Pt=k.distanceTo(z),Nt=at.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,Me=Nt[14]/(Nt[10]-1),Wt=Nt[14]/(Nt[10]+1),Kt=(Nt[9]+1)/Nt[5],re=(Nt[9]-1)/Nt[5],Qt=(Nt[8]-1)/Nt[0],Oe=(Rt[8]+1)/Rt[0],ge=Me*Qt,tn=Me*Oe,Ie=Pt/(-Qt+Oe),Pe=Ie*-Qt;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pe),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let D=Me+Ie,en=Wt+Ie,ne=ge-Pe,ve=tn+(Pt-Pe),T=Kt*Wt/en*D,x=re*Wt/en*D;J.projectionMatrix.makePerspective(ne,ve,T,x,D,en),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,at){if(at===null)J.matrixWorld.copy(J.matrix);else J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix);J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let{near:at,far:ot}=J;if(b.texture!==null){if(b.depthNear>0)at=b.depthNear;if(b.depthFar>0)ot=b.depthFar}if(L.near=G.near=v.near=at,L.far=G.far=v.far=ot,K!==L.near||C!==L.far)i.updateRenderState({depthNear:L.near,depthFar:L.far}),K=L.near,C=L.far;L.layers.mask=J.layers.mask|6,v.layers.mask=L.layers.mask&-5,G.layers.mask=L.layers.mask&-3;let Pt=J.parent,Nt=L.cameras;Z(L,Pt);for(let Rt=0;Rt<Nt.length;Rt++)Z(Nt[Rt],Pt);if(Nt.length===2)X(L,v,G);else L.projectionMatrix.copy(v.projectionMatrix);if(g===null&&J.isPerspectiveCamera)g={camera:J,fov:J.fov,zoom:J.zoom};nt(J,L,Pt)};function nt(J,at,ot){if(ot===null)J.matrix.copy(at.matrixWorld);else J.matrix.copy(ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld);if(J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera)J.fov=Qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1}this.getCamera=function(){return L},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(J){if(o=J,d!==null)d.fixedFoveation=J;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=J},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let rt=null;function yt(J,at){if(c=at.getViewerPose(l||r),p=at,c!==null){let ot=c.views;if(u!==null)t.setRenderTargetFramebuffer(R,u.framebuffer),t.setRenderTarget(R);let Pt=!1;if(ot.length!==L.cameras.length)L.cameras.length=0,Pt=!0;for(let Wt=0;Wt<ot.length;Wt++){let Kt=ot[Wt],re=null;if(u!==null)re=u.getViewport(Kt);else{let Oe=h.getViewSubImage(d,Kt);if(re=Oe.viewport,Wt===0)t.setRenderTargetTextures(R,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(R)}let Qt=P[Wt];if(Qt===void 0)Qt=new Je,Qt.layers.enable(Wt),Qt.viewport=new xe,P[Wt]=Qt;if(Qt.matrix.fromArray(Kt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Kt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(re.x,re.y,re.width,re.height),Wt===0)L.matrix.copy(Qt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);if(Pt===!0)L.cameras.push(Qt)}let Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Wt=h.getDepthInformation(ot[0]);if(Wt&&Wt.isValid&&Wt.texture)b.init(Wt,i.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let Wt=0;Wt<ot.length;Wt++){let Kt=ot[Wt].camera;if(Kt){let re=m[Kt];if(!re)re=new Ma,m[Kt]=re;let Qt=h.getCameraImage(Kt);re.sourceTexture=Qt}}}}for(let ot=0;ot<y.length;ot++){let Pt=S[ot],Nt=y[ot];if(Pt!==null&&Nt!==void 0)Nt.update(Pt,at,l||r)}if(rt)rt(J,at);if(at.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:at});p=null}let Ft=new Ou;Ft.setAnimationLoop(yt),this.setAnimationLoop=function(J){rt=J},this.dispose=function(){}}}var f_=new $t,Ju=new Ht;Ju.set(-1,0,0,0,1,0,0,0,1);function p_(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,Rl(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,w,R,y){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),d(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),h(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),u(m,f),f.isMeshPhysicalMaterial)p(m,f,y)}else if(f.isMeshMatcapMaterial)r(m,f),_(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),b(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,w,R);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let w=e.get(f),R=w.envMap,y=w.envMapRotation;if(R){if(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Ju);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,R){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=R*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function d(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function u(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function p(m,f,w){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.retroreflectivity>0)m.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function _(m,f){if(f.matcap)m.matcap.value=f.matcap}function b(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function m_(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let A=S.program;i.uniformBlockBinding(y,A)}function c(y,S){let A=s[y.id];if(A===void 0)m(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",w);let E=S.program;i.updateUBOMapping(y,E);let g=e.render.frame;if(r[y.id]!==g)u(y),r[y.id]=g}function h(y){let S=d();y.__bindingPointIndex=S;let A=t.createBuffer(),E=y.__size,g=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,E,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,A),A}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],A=y.uniforms,E=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let g=0,v=A.length;g<v;g++){let G=A[g];if(Array.isArray(G))for(let P=0,L=G.length;P<L;P++)p(G[P],g,P,E);else p(G,g,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,S,A,E){if(b(y,S,A,E)===!0){let{__offset:g,value:v}=y;if(Array.isArray(v)){let G=0;for(let P=0;P<v.length;P++){let L=v[P],K=f(L);if(_(L,y.__data,G),typeof L!=="number"&&typeof L!=="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L))G+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else _(v,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,y.__data)}}function _(y,S,A){if(typeof y==="number"||typeof y==="boolean")S[0]=y;else if(y.isMatrix3)S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0;else if(ArrayBuffer.isView(y))S.set(new y.constructor(y.buffer,y.byteOffset,S.length));else y.toArray(S,A)}function b(y,S,A,E){let g=y.value,v=S+"_"+A;if(E[v]===void 0){if(typeof g==="number"||typeof g==="boolean")E[v]=g;else if(ArrayBuffer.isView(g))E[v]=g.slice();else E[v]=g.clone();return!0}else{let G=E[v];if(typeof g==="number"||typeof g==="boolean"){if(G!==g)return E[v]=g,!0}else if(ArrayBuffer.isView(g))return!0;else if(G.equals(g)===!1)return G.copy(g),!0}return!1}function m(y){let S=y.uniforms,A=0,E=16;for(let v=0,G=S.length;v<G;v++){let P=Array.isArray(S[v])?S[v]:[S[v]];for(let L=0,K=P.length;L<K;L++){let C=P[L],O=Array.isArray(C.value)?C.value:[C.value];for(let H=0,F=O.length;H<F;H++){let k=O[H],z=f(k),X=A%E,Z=X%z.boundary,nt=X+Z;if(A+=Z,nt!==0&&E-nt<z.storage)A+=E-nt;C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=z.storage}}}let g=A%E;if(g>0)A+=E-g;return y.__size=A,y.__cache={},this}function f(y){let S={boundary:0,storage:0};if(typeof y==="number"||typeof y==="boolean")S.boundary=4,S.storage=4;else if(y.isVector2)S.boundary=8,S.storage=8;else if(y.isVector3||y.isColor)S.boundary=16,S.storage=12;else if(y.isVector4)S.boundary=16,S.storage=16;else if(y.isMatrix3)S.boundary=48,S.storage=48;else if(y.isMatrix4)S.boundary=64,S.storage=64;else if(y.isTexture)Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(y))S.boundary=16,S.storage=y.byteLength;else Ot("WebGLRenderer: Unsupported uniform value type.",y);return S}function w(y){let S=y.target;S.removeEventListener("dispose",w);let A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let y in s)t.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var g_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function __(){if(Bn===null)Bn=new pi(g_,16,16,Ni,Fe),Bn.name="DFG_LUT",Bn.minFilter=We,Bn.magFilter=We,Bn.wrapS=na,Bn.wrapT=na,Bn.generateMipmaps=!1,Bn.needsUpdate=!0;return Bn}class sc{constructor(t={}){let{canvas:e=au(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=u,b=new Set([Lo,Po,Io]),m=new Set([Tn,hi,sr,ws,Ro,Co]),f=new Uint32Array(4),w=new Int32Array(4),R=new I,y=null,S=null,A=[],E=[],g=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,G=!1,P=null,L=null,K=null,C=null;this._outputColorSpace=ui;let O=0,H=0,F=null,k=-1,z=null,X=new xe,Z=new xe,nt=null,rt=new ht(0),yt=0,Ft=e.width,J=e.height,at=1,ot=null,Pt=null,Nt=new xe(0,0,Ft,J),Rt=new xe(0,0,Ft,J),Me=!1,Wt=new lr,Kt=!1,re=!1,Qt=new $t,Oe=new I,ge=new xe,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Pe(){return F===null?at:1}let D=n;function en(M,U){return e.getContext(M,U)}let ne,ve,T,x,N,q,st,ct,mt,j,et,St,Lt,gt,lt,Dt,Ut,te,B,dt,tt,pt,bt;try{let M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${uh}`);if(e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",ie,!1),D===null){if(D=en("webgl2",M),D===null)if(en("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(M){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Bt("WebGLRenderer: "+M.message),M}function it(){if(ne=new T0(D),ne.init(),tt=new h_(D,ne),ve=new p0(D,ne,t,tt),T=new l_(D,ne),ve.reversedDepthBuffer&&d)T.buffers.depth.setReversed(!0);L=D.createFramebuffer(),K=D.createFramebuffer(),C=D.createFramebuffer(),x=new A0(D),N=new Zg,q=new c_(D,ne,T,N,ve,tt,x),st=new b0(v),ct=new Cf(D),pt=new d0(D,ct),mt=new E0(D,ct,x,pt),j=new C0(D,mt,ct,pt,x),te=new R0(D,ve,q),lt=new m0(N),et=new Yg(v,st,ne,ve,pt,lt),St=new p_(v,N),Lt=new Jg,gt=new n_(ne),Ut=new u0(v,st,T,j,p,o),Dt=new o_(v,j,ve),bt=new m_(D,x,ve,T),B=new f0(D,ne,x),dt=new w0(D,ne,x),x.programs=et.programs,v.capabilities=ve,v.extensions=ne,v.properties=N,v.renderLists=Lt,v.shadowMap=Dt,v.state=T,v.info=x}if(_!==Tn)g=new P0(_,e.width,e.height,a,i,s);let _t=new $u(v,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=ne.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=ne.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(M){if(M===void 0)return;at=M,this.setSize(Ft,J,!1)},this.getSize=function(M){return M.set(Ft,J)},this.setSize=function(M,U,Y=!0){if(_t.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ft=M,J=U,e.width=Math.floor(M*at),e.height=Math.floor(U*at),Y===!0)e.style.width=M+"px",e.style.height=U+"px";if(g!==null)g.setSize(e.width,e.height);this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Ft*at,J*at).floor()},this.setDrawingBufferSize=function(M,U,Y){Ft=M,J=U,at=Y,e.width=Math.floor(M*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===Tn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(Nt)},this.setViewport=function(M,U,Y,V){if(M.isVector4)Nt.set(M.x,M.y,M.z,M.w);else Nt.set(M,U,Y,V);T.viewport(X.copy(Nt).multiplyScalar(at).round())},this.getScissor=function(M){return M.copy(Rt)},this.setScissor=function(M,U,Y,V){if(M.isVector4)Rt.set(M.x,M.y,M.z,M.w);else Rt.set(M,U,Y,V);T.scissor(Z.copy(Rt).multiplyScalar(at).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(M){T.setScissorTest(Me=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){Pt=M},this.getClearColor=function(M){return M.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let V=0;if(M){let W=!1;if(F!==null){let vt=F.texture.format;W=b.has(vt)}if(W){let vt=F.texture.type,Et=m.has(vt),xt=Ut.getClearColor(),wt=Ut.getClearAlpha(),Ct=xt.r,kt=xt.g,Yt=xt.b;if(Et)f[0]=Ct,f[1]=kt,f[2]=Yt,f[3]=wt,D.clearBufferuiv(D.COLOR,0,f);else w[0]=Ct,w[1]=kt,w[2]=Yt,w[3]=wt,D.clearBufferiv(D.COLOR,0,w)}else V|=D.COLOR_BUFFER_BIT}if(U)V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Y)V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(V!==0)D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Ut.dispose(),Lt.dispose(),gt.dispose(),N.dispose(),st.dispose(),j.dispose(),pt.dispose(),bt.dispose(),et.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",wc),_t.removeEventListener("sessionend",Ac),yi.stop()};function Gt(M){M.preventDefault(),Zs("WebGLRenderer: Context Lost."),G=!0}function pe(){Zs("WebGLRenderer: Context Restored."),G=!1;let M=x.autoReset,U=Dt.enabled,Y=Dt.autoUpdate,V=Dt.needsUpdate,W=Dt.type;it(),x.autoReset=M,Dt.enabled=U,Dt.autoUpdate=Y,Dt.needsUpdate=V,Dt.type=W}function ie(M){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pn(M){let U=M.target;U.removeEventListener("dispose",Pn),Gn(U)}function Gn(M){Rd(M),N.remove(M)}function Rd(M){let U=N.get(M).programs;if(U!==void 0){if(U.forEach(function(Y){et.releaseProgram(Y)}),M.isShaderMaterial)et.releaseShaderCache(M)}}this.renderBufferDirect=function(M,U,Y,V,W,vt){if(U===null)U=tn;let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=Pd(M,U,Y,V,W);T.setMaterial(V,Et);let wt=Y.index,Ct=1;if(V.wireframe===!0){if(wt=mt.getWireframeAttribute(Y),wt===void 0)return;Ct=2}let kt=Y.drawRange,Yt=Y.attributes.position,At=kt.start*Ct,se=(kt.start+kt.count)*Ct;if(vt!==null)At=Math.max(At,vt.start*Ct),se=Math.min(se,(vt.start+vt.count)*Ct);if(wt!==null)At=Math.max(At,0),se=Math.min(se,wt.count);else if(Yt!==void 0&&Yt!==null)At=Math.max(At,0),se=Math.min(se,Yt.count);let we=se-At;if(we<0||we===1/0)return;pt.setup(W,V,xt,Y,wt);let _e,de=B;if(wt!==null)_e=ct.get(wt),de=dt,de.setIndex(_e);if(W.isMesh)if(V.wireframe===!0)T.setLineWidth(V.wireframeLinewidth*Pe()),de.setMode(D.LINES);else de.setMode(D.TRIANGLES);else if(W.isLine){let He=V.linewidth;if(He===void 0)He=1;if(T.setLineWidth(He*Pe()),W.isLineSegments)de.setMode(D.LINES);else if(W.isLineLoop)de.setMode(D.LINE_LOOP);else de.setMode(D.LINE_STRIP)}else if(W.isPoints)de.setMode(D.POINTS);else if(W.isSprite)de.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(!ne.get("WEBGL_multi_draw")){let{_multiDrawStarts:He,_multiDrawCounts:Tt,_multiDrawCount:Ze}=W,jt=wt?ct.get(wt).bytesPerElement:1,cn=N.get(V).currentProgram.getUniforms();for(let Ln=0;Ln<Ze;Ln++)cn.setValue(D,"_gl_DrawID",Ln),de.render(He[Ln]/jt,Tt[Ln])}else de.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)de.renderInstances(At,we,W.count);else if(Y.isInstancedBufferGeometry){let He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Tt=Math.min(Y.instanceCount,He);de.renderInstances(At,we,Tt)}else de.render(At,we)};function Ec(M,U,Y,V){if(P!==null&&M.isNodeMaterial)P.setObject(V,M);if(Kt===!0)lt.setState(M,Y,!1);if(M.transparent===!0&&M.side===Ke&&M.forceSinglePass===!1)M.side=Ve,M.needsUpdate=!0,wr(M,U,V),M.side=bs,M.needsUpdate=!0,wr(M,U,V),M.side=Ke;else wr(M,U,V)}this.compile=function(M,U,Y=null){if(Y===null)Y=M;if(P!==null)P.renderStart(M,U,Y);if(S=gt.get(Y),S.init(U),E.push(S),Y.traverseVisible(function(W){if(W.isLight&&W.layers.test(U.layers)){if(S.pushLight(W),W.castShadow)S.pushShadow(W)}}),M!==Y)M.traverseVisible(function(W){if(W.isLight&&W.layers.test(U.layers)){if(S.pushLight(W),W.castShadow)S.pushShadow(W)}});if(S.setupLights(),P!==null)P.updateLights(S.state.lightsArray);if(re=this.localClippingEnabled,Kt=lt.init(this.clippingPlanes,re),Kt===!0)lt.setGlobalState(this.clippingPlanes,U);if(P!==null)Dt.render(S.state.shadowsArray,Y,U);let V=new Set;if(M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let vt=W.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let xt=vt[Et];Ec(xt,Y,U,W),V.add(xt)}else Ec(vt,Y,U,W),V.add(vt)}),S=E.pop(),P!==null)P.renderEnd();return V},this.compileAsync=function(M,U,Y=null){let V=this.compile(M,U,Y);return new Promise((W)=>{function vt(){if(V.forEach(function(Et){let wt=N.get(Et).currentProgram;if(wt===void 0||wt.isReady())V.delete(Et)}),V.size===0){W(M);return}setTimeout(vt,10)}if(ne.get("KHR_parallel_shader_compile")!==null)vt();else setTimeout(vt,10)})};let qa=null;function Cd(M){if(qa)qa(M)}function wc(){yi.stop()}function Ac(){yi.start()}let yi=new Ou;if(yi.setAnimationLoop(Cd),typeof self<"u")yi.setContext(self);this.setAnimationLoop=function(M){qa=M,_t.setAnimationLoop(M),M===null?yi.stop():yi.start()},_t.addEventListener("sessionstart",wc),_t.addEventListener("sessionend",Ac),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(P!==null)P.renderStart(M,U);let Y=_t.enabled===!0&&_t.isPresenting===!0,V=g!==null&&(F===null||Y)&&g.begin(v,F);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(U.parent===null&&U.matrixWorldAutoUpdate===!0)U.updateMatrixWorld();if(_t.enabled===!0&&_t.isPresenting===!0&&(g===null||g.isCompositing()===!1)){if(_t.cameraAutoUpdate===!0)_t.updateCamera(U);U=_t.getCamera()}if(M.isScene===!0)M.onBeforeRender(v,M,U,F);if(S=gt.get(M,E.length),S.init(U),S.state.textureUnits=q.getTextureUnits(),E.push(S),Qt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Wt.setFromProjectionMatrix(Qt,pl,U.reversedDepth),re=this.localClippingEnabled,Kt=lt.init(this.clippingPlanes,re),y=Lt.get(M,A.length),y.init(),A.push(y),_t.enabled===!0&&_t.isPresenting===!0){let Et=v.xr.getDepthSensingMesh();if(Et!==null)Ya(Et,U,-1/0,v.sortObjects)}if(Ya(M,U,0,v.sortObjects),y.finish(),P!==null)P.updateLights(S.state.lightsArray);if(v.sortObjects===!0)y.sort(ot,Pt);if(Ie=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Ie)Ut.addToRenderList(y,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Kt===!0)lt.beginShadows();let W=S.state.shadowsArray;if(Dt.render(W,M,U),Kt===!0)lt.endShadows();if((V&&g.hasRenderPass())===!1){let{opaque:Et,transmissive:xt}=y;if(S.setupLights(),U.isArrayCamera){let wt=U.cameras;if(xt.length>0)for(let Ct=0,kt=wt.length;Ct<kt;Ct++){let Yt=wt[Ct];Cc(Et,xt,M,Yt)}if(Ie)Ut.render(M);for(let Ct=0,kt=wt.length;Ct<kt;Ct++){let Yt=wt[Ct];Rc(y,M,Yt,Yt.viewport)}}else{if(xt.length>0)Cc(Et,xt,M,U);if(Ie)Ut.render(M);Rc(y,M,U)}}if(F!==null&&H===0)q.updateMultisampleRenderTarget(F),q.updateRenderTargetMipmap(F);if(V)g.end(v);if(M.isScene===!0)M.onAfterRender(v,M,U);if(pt.resetDefaultState(),k=-1,z=null,E.pop(),E.length>0){if(S=E[E.length-1],q.setTextureUnits(S.state.textureUnits),Kt===!0)lt.setGlobalState(v.clippingPlanes,S.state.camera)}else S=null;if(A.pop(),A.length>0)y=A[A.length-1];else y=null;if(P!==null)P.renderEnd()};function Ya(M,U,Y,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(U)}else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight){if(S.pushLight(M),M.castShadow)S.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Wt)){if(V)ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Qt);let Et=j.update(M),xt=M.material;if(xt.visible)y.push(M,Et,xt,Y,ge.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(Wt)){let Et=j.update(M),xt=M.material;if(V){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();ge.copy(M.boundingSphere.center)}else{if(Et.boundingSphere===null)Et.computeBoundingSphere();ge.copy(Et.boundingSphere.center)}ge.applyMatrix4(M.matrixWorld).applyMatrix4(Qt)}if(Array.isArray(xt)){let wt=Et.groups;for(let Ct=0,kt=wt.length;Ct<kt;Ct++){let Yt=wt[Ct],At=xt[Yt.materialIndex];if(At&&At.visible)y.push(M,Et,At,Y,ge.z,Yt,U)}}else if(xt.visible)y.push(M,Et,xt,Y,ge.z,null,U)}}}let vt=M.children;for(let Et=0,xt=vt.length;Et<xt;Et++)Ya(vt[Et],U,Y,V)}function Rc(M,U,Y,V){let{opaque:W,transmissive:vt,transparent:Et}=M;if(S.setupLightsView(Y),Kt===!0)lt.setGlobalState(v.clippingPlanes,Y);if(V)T.viewport(X.copy(V));if(W.length>0)Er(W,U,Y);if(vt.length>0)Er(vt,U,Y);if(Et.length>0)Er(Et,U,Y);T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Cc(M,U,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let At=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Te(1,1,{generateMipmaps:!0,type:At?Fe:Tn,minFilter:Ii,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let vt=S.state.transmissionRenderTarget[V.id],Et=V.viewport||X;vt.setSize(Et.z*v.transmissionResolutionScale,Et.w*v.transmissionResolutionScale);let xt=v.getRenderTarget(),wt=v.getActiveCubeFace(),Ct=v.getActiveMipmapLevel();if(v.setRenderTarget(vt),v.getClearColor(rt),yt=v.getClearAlpha(),yt<1)v.setClearColor(16777215,0.5);if(v.clear(),Ie)Ut.render(Y);let kt=v.toneMapping;v.toneMapping=bn;let Yt=V.viewport;if(V.viewport!==void 0)V.viewport=void 0;if(S.setupLightsView(V),Kt===!0)lt.setGlobalState(v.clippingPlanes,V);if(Er(M,Y,V),q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let se=0,we=U.length;se<we;se++){let _e=U[se],{object:de,geometry:He,material:Tt,group:Ze}=_e;if(Tt.side===Ke&&de.layers.test(V.layers)){let jt=Tt.side;Tt.side=Ve,Tt.needsUpdate=!0,Ic(de,Y,V,He,Tt,Ze),Tt.side=jt,Tt.needsUpdate=!0,At=!0}}if(At===!0)q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt)}if(v.setRenderTarget(xt,wt,Ct),v.setClearColor(rt,yt),Yt!==void 0)V.viewport=Yt;v.toneMapping=kt}function Er(M,U,Y){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,vt=M.length;W<vt;W++){let Et=M[W],{object:xt,geometry:wt,group:Ct}=Et,kt=Et.material;if(kt.allowOverride===!0&&V!==null)kt=V;if(xt.layers.test(Y.layers))Ic(xt,U,Y,wt,kt,Ct)}}function Ic(M,U,Y,V,W,vt){if(P!==null&&W.isNodeMaterial)P.setObject(M,W);if(M.onBeforeRender(v,U,Y,V,W,vt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(v,U,Y,V,M,vt),W.transparent===!0&&W.side===Ke&&W.forceSinglePass===!1)W.side=Ve,W.needsUpdate=!0,v.renderBufferDirect(Y,U,V,W,M,vt),W.side=bs,W.needsUpdate=!0,v.renderBufferDirect(Y,U,V,W,M,vt),W.side=Ke;else v.renderBufferDirect(Y,U,V,W,M,vt);M.onAfterRender(v,U,Y,V,W,vt)}function wr(M,U,Y){if(U.isScene!==!0)U=tn;let V=N.get(M),W=S.state.lights,vt=S.state.shadowsArray,Et=W.state.version,xt=et.getParameters(M,W.state,vt,U,Y,S.state.lightProbeGridArray),wt=et.getProgramCacheKey(xt),Ct=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let kt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(V.envMap=st.get(M.envMap||V.environment,kt),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ct===void 0)M.addEventListener("dispose",Pn),Ct=new Map,V.programs=Ct;let Yt=Ct.get(wt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===Et)return Lc(M,xt),Yt}else{if(xt.uniforms=et.getUniforms(M),P!==null&&M.isNodeMaterial)P.build(M,Y,xt);M.onBeforeCompile(xt,v),Yt=et.acquireProgram(xt,wt),Ct.set(wt,Yt),V.uniforms=xt.uniforms}let At=V.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)At.clippingPlanes=lt.uniform;if(Lc(M,xt),V.needsLights=Nd(M),V.lightsStateVersion=Et,V.needsLights)At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix;return V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=Yt,V.uniformsList=null,Yt}function Pc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=gr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Lc(M,U){let Y=N.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Id(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;R.setFromMatrixPosition(U.matrixWorld);for(let Y=0,V=M.length;Y<V;Y++){let W=M[Y];if(W.texture!==null&&W.boundingBox.containsPoint(R))return W}return null}function Pd(M,U,Y,V,W){if(U.isScene!==!0)U=tn;q.resetTextureUnits();let vt=U.fog,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,xt=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xt.workingColorSpace,wt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ct=st.get(V.envMap||Et,wt),kt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Yt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!Y.morphAttributes.position,se=!!Y.morphAttributes.normal,we=!!Y.morphAttributes.color,_e=bn;if(V.toneMapped){if(F===null||F.isXRRenderTarget===!0)_e=v.toneMapping}let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,He=de!==void 0?de.length:0,Tt=N.get(V),Ze=S.state.lights;if(Kt===!0){if(re===!0||M!==z){let me=M===z&&V.id===k;lt.setState(V,M,me)}}let jt=!1;if(V.version===Tt.__version){if(Tt.needsLights&&Tt.lightsStateVersion!==Ze.state.version)jt=!0;else if(Tt.outputColorSpace!==xt)jt=!0;else if(W.isBatchedMesh&&Tt.batching===!1)jt=!0;else if(!W.isBatchedMesh&&Tt.batching===!0)jt=!0;else if(W.isBatchedMesh&&Tt.batchingColor===!0&&W._colorsTexture===null)jt=!0;else if(W.isBatchedMesh&&Tt.batchingColor===!1&&W._colorsTexture!==null)jt=!0;else if(W.isInstancedMesh&&Tt.instancing===!1)jt=!0;else if(!W.isInstancedMesh&&Tt.instancing===!0)jt=!0;else if(W.isSkinnedMesh&&Tt.skinning===!1)jt=!0;else if(!W.isSkinnedMesh&&Tt.skinning===!0)jt=!0;else if(W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null)jt=!0;else if(W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null)jt=!0;else if(W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null)jt=!0;else if(W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null)jt=!0;else if(Tt.envMap!==Ct)jt=!0;else if(V.fog===!0&&Tt.fog!==vt)jt=!0;else if(Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==lt.numPlanes||Tt.numIntersection!==lt.numIntersection))jt=!0;else if(Tt.vertexAlphas!==kt)jt=!0;else if(Tt.vertexTangents!==Yt)jt=!0;else if(Tt.morphTargets!==At)jt=!0;else if(Tt.morphNormals!==se)jt=!0;else if(Tt.morphColors!==we)jt=!0;else if(Tt.toneMapping!==_e)jt=!0;else if(Tt.morphTargetsCount!==He)jt=!0;else if(!!Tt.lightProbeGrid!==S.state.lightProbeGridArray.length>0)jt=!0}else jt=!0,Tt.__version=V.version;let cn=Tt.currentProgram;if(jt===!0){if(cn=wr(V,U,W),P&&V.isNodeMaterial)P.onUpdateProgram(V,cn,Tt)}let Ln=!1,ei=!1,ji=!1,le=cn.getUniforms(),Se=Tt.uniforms;if(T.useProgram(cn.program))Ln=!0,ei=!0,ji=!0;if(V.id!==k)k=V.id,ei=!0;if(Tt.needsLights){let me=Id(S.state.lightProbeGridArray,W);if(Tt.lightProbeGrid!==me)Tt.lightProbeGrid=me,ei=!0}if(Ln||z!==M){if(T.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();le.setValue(D,"projectionMatrix",M.projectionMatrix),le.setValue(D,"viewMatrix",M.matrixWorldInverse);let ii=le.map.cameraPosition;if(ii!==void 0)ii.setValue(D,Oe.setFromMatrixPosition(M.matrixWorld));if(ve.logarithmicDepthBuffer)le.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)le.setValue(D,"isOrthographic",M.isOrthographicCamera===!0);if(z!==M)z=M,ei=!0,ji=!0}if(Tt.needsLights){if(Ze.state.sunShadowMap.length>0)le.setValue(D,"sunShadowMap",Ze.state.sunShadowMap,q);if(Ze.state.directionalShadowMap.length>0)le.setValue(D,"directionalShadowMap",Ze.state.directionalShadowMap,q);if(Ze.state.spotShadowMap.length>0)le.setValue(D,"spotShadowMap",Ze.state.spotShadowMap,q);if(Ze.state.pointShadowMap.length>0)le.setValue(D,"pointShadowMap",Ze.state.pointShadowMap,q)}if(W.isSkinnedMesh){le.setOptional(D,W,"bindMatrix"),le.setOptional(D,W,"bindMatrixInverse");let me=W.skeleton;if(me){if(me.boneTexture===null)me.computeBoneTexture();le.setValue(D,"boneTexture",me.boneTexture,q)}}if(W.isBatchedMesh){if(le.setOptional(D,W,"batchingTexture"),le.setValue(D,"batchingTexture",W._matricesTexture,q),le.setOptional(D,W,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",W._indirectTexture,q),le.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null)le.setValue(D,"batchingColorTexture",W._colorsTexture,q)}let ni=Y.morphAttributes;if(ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)te.update(W,Y,cn);if(ei||Tt.receiveShadow!==W.receiveShadow)Tt.receiveShadow=W.receiveShadow,le.setValue(D,"receiveShadow",W.receiveShadow);if((V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null)Se.envMapIntensity.value=U.environmentIntensity;if(Se.dfgLUT!==void 0)Se.dfgLUT.value=__();if(ei){if(le.setValue(D,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights)Ld(Se,ji);if(vt&&V.fog===!0)St.refreshFogUniforms(Se,vt);if(St.refreshMaterialUniforms(Se,V,at,J,S.state.transmissionRenderTarget[M.id]),Tt.needsLights&&Tt.lightProbeGrid){let me=Tt.lightProbeGrid;Se.probesSH.value=me.texture,Se.probesMin.value.copy(me.boundingBox.min),Se.probesMax.value.copy(me.boundingBox.max),Se.probesResolution.value.copy(me.resolution)}gr.upload(D,Pc(Tt),Se,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0)gr.upload(D,Pc(Tt),Se,q),V.uniformsNeedUpdate=!1;if(V.isSpriteMaterial)le.setValue(D,"center",W.center);if(le.setValue(D,"modelViewMatrix",W.modelViewMatrix),le.setValue(D,"normalMatrix",W.normalMatrix),le.setValue(D,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let me=V.uniformsGroups;for(let ii=0,ts=me.length;ii<ts;ii++){let Dc=me[ii];bt.update(Dc,cn),bt.bind(Dc,cn)}}return cn}function Ld(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Nd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,U,Y){let V=N.get(M);if(V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1)V.__useRenderToTexture=!1;N.get(M.texture).__webglTexture=U,N.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=N.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){F=M,O=U,H=Y;let V=null,W=!1,vt=!1;if(M){let xt=N.get(M);if(xt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(D.FRAMEBUFFER,xt.__webglFramebuffer),X.copy(M.viewport),Z.copy(M.scissor),nt=M.scissorTest,T.viewport(X),T.scissor(Z),T.setScissorTest(nt),k=-1;return}else if(xt.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(xt.__hasExternalTextures)q.rebindTextures(M,N.get(M.texture).__webglTexture,N.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let kt=M.depthTexture;if(xt.__boundDepthTexture!==kt){if(kt!==null&&N.has(kt)&&(M.width!==kt.image.width||M.height!==kt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}let wt=M.texture;if(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)vt=!0;let Ct=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(Ct[U]))V=Ct[U][Y];else V=Ct[U];W=!0}else if(M.samples>0&&q.useMultisampledRTT(M)===!1)V=N.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(Ct))V=Ct[Y];else V=Ct;X.copy(M.viewport),Z.copy(M.scissor),nt=M.scissorTest}else X.copy(Nt).multiplyScalar(at).floor(),Z.copy(Rt).multiplyScalar(at).floor(),nt=Me;if(Y!==0)V=L;if(T.bindFramebuffer(D.FRAMEBUFFER,V))T.drawBuffers(M,V);if(T.viewport(X),T.scissor(Z),T.setScissorTest(nt),W){let xt=N.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,Y)}else if(vt){let xt=U;for(let wt=0;wt<M.textures.length;wt++){let Ct=N.get(M.textures[wt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,Y,xt)}}else if(M!==null&&Y!==0){let xt=N.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,Y)}k=-1};function Nc(M){let U=N.get(M);if(U.__readFormat!==M.format||U.__readType!==M.type)U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=ve.textureFormatReadable(M.format),U.__typeReadable=ve.textureTypeReadable(M.type);return U}if(this.readRenderTargetPixels=function(M,U,Y,V,W,vt,Et,xt=0){if(!(M&&M.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0)wt=wt[Et];if(wt){T.bindFramebuffer(D.FRAMEBUFFER,wt);try{let Ct=M.textures[xt],kt=Ct.format,Yt=Ct.type;if(M.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+xt);let At=Nc(Ct);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(U>=0&&U<=M.width-V&&(Y>=0&&Y<=M.height-W))D.readPixels(U,Y,V,W,tt.convert(kt),tt.convert(Yt),vt)}finally{let Ct=F!==null?N.get(F).__webglFramebuffer:null;T.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,V,W,vt,Et,xt=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0)wt=wt[Et];if(wt)if(U>=0&&U<=M.width-V&&(Y>=0&&Y<=M.height-W)){T.bindFramebuffer(D.FRAMEBUFFER,wt);let Ct=M.textures[xt],kt=Ct.format,Yt=Ct.type;if(M.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+xt);let At=Nc(Ct);if(At.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,vt.byteLength,D.STREAM_READ),D.readPixels(U,Y,V,W,tt.convert(kt),tt.convert(Yt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let we=F!==null?N.get(F).__webglFramebuffer:null;T.bindFramebuffer(D.FRAMEBUFFER,we);let _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lu(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,vt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(se),D.deleteSync(_e),vt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let V=Math.pow(2,-Y),W=Math.floor(M.image.width*V),vt=Math.floor(M.image.height*V),Et=U!==null?U.x:0,xt=U!==null?U.y:0;q.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Et,xt,W,vt),T.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,V=null,W=0,vt=0){let Et,xt,wt,Ct,kt,Yt,At,se,we,_e=M.isCompressedTexture?M.mipmaps[vt]:M.image;if(Y!==null)Et=Y.max.x-Y.min.x,xt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Ct=Y.min.x,kt=Y.min.y,Yt=Y.isBox3?Y.min.z:0;else{let Se=Math.pow(2,-W);if(Et=Math.floor(_e.width*Se),xt=Math.floor(_e.height*Se),M.isDataArrayTexture)wt=_e.depth;else if(M.isData3DTexture)wt=Math.floor(_e.depth*Se);else wt=1;Ct=0,kt=0,Yt=0}if(V!==null)At=V.x,se=V.y,we=V.z;else At=0,se=0,we=0;let de=tt.convert(U.format),He=tt.convert(U.type),Tt;if(U.isData3DTexture)q.setTexture3D(U,0),Tt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)q.setTexture2DArray(U,0),Tt=D.TEXTURE_2D_ARRAY;else q.setTexture2D(U,0),Tt=D.TEXTURE_2D;T.activeTexture(D.TEXTURE0),T.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Ze=T.getParameter(D.UNPACK_ROW_LENGTH),jt=T.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=T.getParameter(D.UNPACK_SKIP_PIXELS),Ln=T.getParameter(D.UNPACK_SKIP_ROWS),ei=T.getParameter(D.UNPACK_SKIP_IMAGES);T.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),T.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),T.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),T.pixelStorei(D.UNPACK_SKIP_ROWS,kt),T.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt);let ji=M.isDataArrayTexture||M.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Se=N.get(M),ni=N.get(U),me=N.get(Se.__renderTarget),ii=N.get(ni.__renderTarget);T.bindFramebuffer(D.READ_FRAMEBUFFER,me.__webglFramebuffer),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let ts=0;ts<wt;ts++){if(ji)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(M).__webglTexture,W,Yt+ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(U).__webglTexture,vt,we+ts);D.blitFramebuffer(Ct,kt,Et,xt,At,se,Et,xt,D.DEPTH_BUFFER_BIT,D.NEAREST)}T.bindFramebuffer(D.READ_FRAMEBUFFER,null),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||N.has(M)){let Se=N.get(M),ni=N.get(U);T.bindFramebuffer(D.READ_FRAMEBUFFER,K),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,C);for(let me=0;me<wt;me++){if(ji)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,W,Yt+me);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,W);if(le)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ni.__webglTexture,vt,we+me);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ni.__webglTexture,vt);if(W!==0)D.blitFramebuffer(Ct,kt,Et,xt,At,se,Et,xt,D.COLOR_BUFFER_BIT,D.NEAREST);else if(le)D.copyTexSubImage3D(Tt,vt,At,se,we+me,Ct,kt,Et,xt);else D.copyTexSubImage2D(Tt,vt,At,se,Ct,kt,Et,xt)}T.bindFramebuffer(D.READ_FRAMEBUFFER,null),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(le)if(M.isDataTexture||M.isData3DTexture)D.texSubImage3D(Tt,vt,At,se,we,Et,xt,wt,de,He,_e.data);else if(U.isCompressedArrayTexture)D.compressedTexSubImage3D(Tt,vt,At,se,we,Et,xt,wt,de,_e.data);else D.texSubImage3D(Tt,vt,At,se,we,Et,xt,wt,de,He,_e);else if(M.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,vt,At,se,Et,xt,de,He,_e.data);else if(M.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,vt,At,se,_e.width,_e.height,de,_e.data);else D.texSubImage2D(D.TEXTURE_2D,vt,At,se,Et,xt,de,He,_e);if(T.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),T.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),T.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),T.pixelStorei(D.UNPACK_SKIP_ROWS,Ln),T.pixelStorei(D.UNPACK_SKIP_IMAGES,ei),vt===0&&U.generateMipmaps)D.generateMipmap(Tt);T.unbindTexture()},this.initRenderTarget=function(M){if(N.get(M).__webglFramebuffer===void 0)q.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)q.setTextureCube(M,0);else if(M.isData3DTexture)q.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)q.setTexture2DArray(M,0);else q.setTexture2D(M,0);T.unbindTexture()},this.resetState=function(){O=0,H=0,F=null,T.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}var It=9,Ku=[[-150,1.6,232],[0,1.6,246],[130,1.6,232],[222,2.2,182],[252,4,92],[232,7,12],[172,10,-40],[182,12,-112],[232,14,-172],[192,18,-242],[110,24,-262],[30,30,-232],[-40,34,-202],[-84,35,-186],[-126,28,-168],[-176,23,-138],[-222,17,-80],[-202,12,-12],[-152,7,32],[-102,5,82],[-162,3.5,132],[-240,2,168],[-262,1.6,218]];class rc{constructor(){let t=Ku.map(([a,o,l])=>new I(a,o,l));this.curve=new Bi(t,!0,"centripetal"),this.length=this.curve.getLength();let e=this.N=Math.round(this.length/2);this.ds=this.length/e;let n=this.curve.getSpacedPoints(e);this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e);for(let a=0;a<e;a++)this.px[a]=n[a].x,this.py[a]=n[a].y,this.pz[a]=n[a].z;for(let a=0;a<4;a++){let o=this.py.slice();for(let l=0;l<e;l++){let c=0;for(let h=-4;h<=4;h++)c+=o[(l+h+e)%e];this.py[l]=c/9}}this.cp=Ku.map(([a,,o])=>{let l=0,c=1/0;for(let h=0;h<e;h++){let d=(this.px[h]-a)**2+(this.pz[h]-o)**2;if(d<c)c=d,l=h}return l});let i=this.cp;this.flags=new Uint8Array(e);let s=(a,o,l)=>{for(let c=a;c!==o;c=(c+1)%e)this.flags[c]|=l};this.launch=i[13];for(let a=0;a<=14;a++){let o=(this.launch-14+a+e)%e,l=a/14;this.py[o]+=1.8*l*l}s((this.launch-2+e)%e,(this.launch+1)%e,2),s((this.launch+1)%e,(this.launch+10)%e,1),this.gapEnd=(this.launch+10)%e,s(i[7],i[9],4),s((i[18]+4)%e,(i[19]+2)%e,8),this.boostPads=[(i[2]+6)%e,i[16],(i[21]+4)%e,(i[5]+4)%e],this.pads=this.boostPads.map((a)=>({i:a,lat:(a*7%3-1)*3.5})),this.itemRows=[(i[3]+8)%e,(i[10]+4)%e,(i[15]+6)%e,(i[20]+6)%e],this.fruitLines=[(i[1]+22)%e,(i[6]+6)%e,(i[11]+2)%e,(i[17]+4)%e,(i[22]+4)%e,(i[8]+6)%e],this.startIdx=(i[1]-8+e)%e,this.finishIdx=(this.startIdx+8)%e,this.tx=new Float32Array(e),this.tz=new Float32Array(e);for(let a=0;a<e;a++){let o=(a+1)%e,l=(a-1+e)%e,c=this.px[o]-this.px[l],h=this.pz[o]-this.pz[l],d=Math.hypot(c,h);this.tx[a]=c/d,this.tz[a]=h/d}let r=new Float32Array(e);for(let a=0;a<e;a++){let o=(a+2)%e,l=(a-2+e)%e,c=this.tx[l]*this.tz[o]-this.tz[l]*this.tx[o];r[a]=Math.asin(Math.max(-1,Math.min(1,c)))/(4*this.ds)}this.curv=new Float32Array(e);for(let a=0;a<e;a++){let o=0;for(let l=-5;l<=5;l++)o+=r[(a+l+e)%e];this.curv[a]=o/11}this.buildGrid()}isGap(t){return(this.flags[t]&1)!==0}rightX(t){return-this.tz[t]}rightZ(t){return this.tx[t]}buildGrid(){this.cell=64,this.grid=new Map;for(let t=0;t<this.N;t++){let e=this.key(Math.floor(this.px[t]/this.cell),Math.floor(this.pz[t]/this.cell)),n=this.grid.get(e);if(!n)this.grid.set(e,n=[]);n.push(t)}}key(t,e){return t*73856093^e*19349663}nearestCoarse(t,e){let n=Math.floor(t/this.cell),i=Math.floor(e/this.cell),s=-1,r=1/0;for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let l=this.grid.get(this.key(n+a,i+o));if(!l)continue;for(let c of l){let h=this.px[c]-t,d=this.pz[c]-e,u=h*h+d*d;if(u<r)r=u,s=c}}return s<0?null:{i:s,d:Math.sqrt(r)}}project(t,e,n=-1,i={}){let s=this.N,r=0,a=1/0,o=(R)=>{let y=this.px[R]-t,S=this.pz[R]-e,A=y*y+S*S;if(A<a)a=A,r=R};if(n<0)for(let R=0;R<s;R++)o(R);else for(let R=-40;R<=40;R++)o((n+R+s)%s);let l=r;if((t-this.px[l])*this.tx[l]+(e-this.pz[l])*this.tz[l]<0)l=(l-1+s)%s;let c=(l+1)%s,h=this.px[c]-this.px[l],d=this.pz[c]-this.pz[l],u=h*h+d*d,p=((t-this.px[l])*h+(e-this.pz[l])*d)/u;p=Math.max(0,Math.min(1,p));let _=this.px[l]+h*p,b=this.pz[l]+d*p,m=this.tx[l]+(this.tx[c]-this.tx[l])*p,f=this.tz[l]+(this.tz[c]-this.tz[l])*p,w=Math.hypot(m,f);return i.i=l,i.f=p,i.tx=m/w,i.tz=f/w,i.rx=-i.tz,i.rz=i.tx,i.lat=(t-_)*i.rx+(e-b)*i.rz,i.y=this.py[l]+(this.py[c]-this.py[l])*p,i.slope=(this.py[c]-this.py[l])/Math.sqrt(u),i.s=(l+p)*this.ds,i}pointAt(t,e=0){let n=this.N,i=(Math.floor(t)%n+n)%n,s=(i+1)%n,r=t-Math.floor(t),a=this.px[i]+(this.px[s]-this.px[i])*r,o=this.pz[i]+(this.pz[s]-this.pz[i])*r;return new I(a+this.rightX(i)*e,this.py[i]+(this.py[s]-this.py[i])*r,o+this.rightZ(i)*e)}runs(t){let e=this.N,n=[],i=0;while(i<e&&t(i))i++;if(i===e)return[[0,e+1]];for(let s=0,r=i;s<e;s++,r++){let a=r%e;if(t(a)&&!t((a-1+e)%e)){let o=a;while(t(o%e)&&o-a<e)o++;n.push([a,o])}}return n}sweep(t,e,{vScale:n=0.041666666666666664,uvAcross:i=null,extend:s=1}={}){let r=this.N,a=t.length,o=[],l=[],c=[],h=i;if(!h){h=[0];let u=0;for(let p=1;p<a;p++)u+=Math.hypot(t[p][0]-t[p-1][0],t[p][1]-t[p-1][1]),h.push(u/4)}for(let[u,p]of e){let _=o.length/3,b=p-u+s;for(let m=0;m<b;m++){let f=(u+m)%r,w=this.rightX(f),R=this.rightZ(f);for(let y=0;y<a;y++){let[S,A]=t[y];o.push(this.px[f]+w*S,this.py[f]+A,this.pz[f]+R*S),l.push(h[y],(u+m)*this.ds*n)}}for(let m=0;m<b-1;m++)for(let f=0;f<a-1;f++){let w=_+m*a+f,R=w+1,y=w+a,S=y+1;c.push(w,R,y,R,S,y)}}let d=new he;return d.setAttribute("position",new qt(o,3)),d.setAttribute("uv",new qt(l,2)),d.setIndex(c),d.computeVertexNormals(),d}}function Ye(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,[n,n.getContext("2d")]}function Qn(t=1){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function gn(t,e=!0,n=!0){let i=new gi(t);if(e)i.colorSpace=ui;if(n)i.wrapS=i.wrapT=ea;return i.anisotropy=8,i}function ac(t,e,n,i,s,r){for(let a=0;a<i;a++){t.fillStyle=r[Math.floor(s()*r.length)],t.globalAlpha=0.25+s()*0.5;let o=1+s()*3;t.fillRect(s()*e,s()*n,o,o)}t.globalAlpha=1}function Qu(){let[t,e]=Ye(512,768),n=Qn(4),i=e.createLinearGradient(0,0,512,0);i.addColorStop(0,"#b0794a"),i.addColorStop(0.5,"#c98f58"),i.addColorStop(1,"#b0794a"),e.fillStyle=i,e.fillRect(0,0,512,768),ac(e,512,768,14000,n,["#8a5a32","#dba574","#a46c3f","#e8c08e","#7a4e2b"]);for(let r=0;r<220;r++)e.fillStyle=["#d8c3a0","#9b8a74","#efe0c4"][Math.floor(n()*3)],e.beginPath(),e.ellipse(n()*512,n()*768,2+n()*4,1.5+n()*3,n()*3,0,7),e.fill();e.strokeStyle="rgba(90,55,30,0.18)",e.lineWidth=16;for(let r of[0.3,0.42,0.58,0.7])e.beginPath(),e.moveTo(r*512,0),e.lineTo(r*512+(n()-0.5)*6,768),e.stroke();let s=e.createLinearGradient(0,0,512,0);return s.addColorStop(0,"rgba(70,90,30,0.55)"),s.addColorStop(0.06,"rgba(70,90,30,0)"),s.addColorStop(0.94,"rgba(70,90,30,0)"),s.addColorStop(1,"rgba(70,90,30,0.55)"),e.fillStyle=s,e.fillRect(0,0,512,768),gn(t)}function ju(){let[t,e]=Ye(512,512),n=Qn(8),i=8,s=64;for(let r=0;r<8;r++){let a=120+n()*40;e.fillStyle=`rgb(${a+40},${a},${a-50})`,e.fillRect(0,r*64,512,59);for(let o=0;o<40;o++){e.strokeStyle=`rgba(80,50,25,${0.1+n()*0.2})`,e.lineWidth=1+n()*2;let l=r*64+n()*58;e.beginPath(),e.moveTo(0,l),e.bezierCurveTo(170,l+(n()-0.5)*6,340,l+(n()-0.5)*6,512,l+(n()-0.5)*4),e.stroke()}e.fillStyle="#3c2614",e.fillRect(0,r*64+64-5,512,5),e.fillStyle="#555";for(let o of[30,482])e.beginPath(),e.arc(o,r*64+32-2,4,0,7),e.fill()}return gn(t)}function oc(){let[t,e]=Ye(64,256);for(let n=0;n<4;n++)e.fillStyle=n%2?"#f4f4f4":"#e8322b",e.fillRect(0,n*64,64,64);return gn(t)}function td(){let[t,e]=Ye(256,256),n=Qn(12);return e.fillStyle="#ffffff",e.fillRect(0,0,256,256),ac(e,256,256,6000,n,["#d9d9d9","#bfbfbf","#ffffff","#e6e6e6"]),gn(t)}function ed(){let[t,e]=Ye(256,256),n=Qn(31);e.fillStyle="#9a9a9a",e.fillRect(0,0,256,256);for(let i=0;i<60;i++)e.fillStyle=`rgba(${60+n()*120},${60+n()*110},${60+n()*100},0.35)`,e.beginPath(),e.ellipse(n()*256,n()*256,10+n()*40,6+n()*20,n()*3,0,7),e.fill();return ac(e,256,256,3000,n,["#6d6d6d","#c8c8c8"]),gn(t)}function Da(){let[t,e]=Ye(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(0.3,"rgba(255,255,255,0.4)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),gn(t,!0,!1)}function nd(){let[t,e]=Ye(128,128),n=Qn(9);for(let i=0;i<16;i++){let s=64+(n()-0.5)*36,r=64+(n()-0.5)*36,a=22+n()*26,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.3)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return gn(t,!0,!1)}function Ua(t){let[e,n]=Ye(512,256),i=Qn(t),s=[];for(let a=0;a<9;a++)s.push([90+i()*330,150-Math.sin(a/8*Math.PI)*60*i()-20,40+i()*50]);for(let[a,o,l]of s)n.fillStyle="#c9dcf2",n.beginPath(),n.arc(a,o+10,l,0,7),n.fill();for(let[a,o,l]of s)n.fillStyle="#ffffff",n.beginPath(),n.arc(a,o,l*0.92,0,7),n.fill();n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,256);return r.addColorStop(0,"#000"),r.addColorStop(0.9,"#000"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,512,256),gn(e,!0,!1)}function id(){let[t,e]=Ye(256,256),n=e.createLinearGradient(0,0,256,256);return n.addColorStop(0,"#ffe066"),n.addColorStop(0.5,"#ff9f1c"),n.addColorStop(1,"#ff4f9a"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="#fff8",e.lineWidth=14,e.strokeRect(10,10,236,236),e.font="900 190px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#7a2b00",e.fillText("?",134,142),e.fillStyle="#fff",e.fillText("?",128,134),gn(t,!0,!1)}function sd(){let[t,e]=Ye(256,256);e.fillStyle="#1b2a6b",e.fillRect(0,0,256,256);for(let n=0;n<3;n++){let i=40+n*70,s=e.createLinearGradient(0,i+60,0,i);s.addColorStop(0,"#2fd7ff"),s.addColorStop(1,"#ffffff"),e.fillStyle=s,e.beginPath(),e.moveTo(128,i),e.lineTo(220,i+60),e.lineTo(180,i+60),e.lineTo(128,i+22),e.lineTo(76,i+60),e.lineTo(36,i+60),e.closePath(),e.fill()}return e.strokeStyle="#ffde3b",e.lineWidth=10,e.strokeRect(5,5,246,246),gn(t,!0,!0)}function rd(){let t=new Uint8Array([90,170,255]),e=new pi(t,3,1,As);return e.minFilter=e.magFilter=fn,e.needsUpdate=!0,e}function lc(t,e="#ff4f9a",n="#fff"){let[i,s]=Ye(1024,192);return s.fillStyle=e,s.fillRect(0,0,1024,192),s.fillStyle="#ffde3b",s.fillRect(0,0,1024,16),s.fillRect(0,176,1024,16),s.font='900 108px "Baloo 2", "Fredoka", sans-serif',s.textAlign="center",s.textBaseline="middle",s.lineWidth=14,s.strokeStyle="#5a1030",s.strokeText(t,512,102),s.fillStyle=n,s.fillText(t,512,100),gn(i,!0,!1)}function ad(){let[t,e]=Ye(128,512),n=Qn(77);e.fillStyle="#7fd8ff",e.fillRect(0,0,128,512);for(let i=0;i<260;i++)e.fillStyle=`rgba(255,255,255,${0.2+n()*0.6})`,e.fillRect(n()*128,n()*512,1+n()*4,20+n()*60);return gn(t,!0,!0)}function Fa(t,e){let n=Math.imul(t,374761393)+Math.imul(e,668265263)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function v_(t,e){let n=Math.floor(t),i=Math.floor(e),s=t-n,r=e-i;s=s*s*(3-2*s),r=r*r*(3-2*r);let a=Fa(n,i),o=Fa(n+1,i),l=Fa(n,i+1),c=Fa(n+1,i+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}function qi(t,e,n=4){let i=0,s=0.5,r=0;for(let a=0;a<n;a++)i+=s*v_(t,e),r+=s,t*=2.03,e*=2.03,s*=0.5;return i/r}var ze=(t,e,n)=>{let i=(n-t)/(e-t);return i=i<0?0:i>1?1:i,i*i*(3-2*i)},cc=(t,e,n)=>t+(e-t)*n,Cn={x:0,z:-40};class hc{constructor(t){this.track=t;let e=(t.launch+5)%t.N;this.rav={x:t.px[e],z:t.pz[e],tx:t.tx[e],tz:t.tz[e]};let n=Math.floor((t.cp[18]+t.cp[19])/2);this.lagoon={x:t.px[n],z:t.pz[n]};let i=this.SIZE=1400,s=this.RES=350,r=this.step=i/s,a=this.H=new Float32Array((s+1)*(s+1)),o=t.N;for(let E=0;E<=s;E++)for(let g=0;g<=s;g++){let v=-i/2+g*r,G=-i/2+E*r,P=this.natural(v,G),L=t.nearestCoarse(v,G);if(L){let C=(t.flags[L.i]&8)!==0;for(let O=-2;O<=2&&!C;O++)if(t.isGap((L.i+O+o)%o))C=!0;if(!C){let O=ze(It+3,It+38,L.d);P=cc(t.py[L.i]-0.25,P,O)}}a[E*(s+1)+g]=P}let l=new pn(i,i,s,s);l.rotateX(-Math.PI/2);let c=l.attributes.position;for(let E=0;E<c.count;E++)c.setY(E,a[E]);l.computeVertexNormals();let h=l.attributes.normal,d=new Float32Array(c.count*3),u=new ht,p=new ht("#f2d49b"),_=new ht("#d9b57a"),b=new ht("#5cc14a"),m=new ht("#2f9a3c"),f=new ht("#8d8173"),w=new ht("#4a4038"),R=new ht("#e9d39a");for(let E=0;E<c.count;E++){let g=c.getX(E),v=c.getY(E),G=c.getZ(E),P=h.getY(E),L=qi(g*0.03,G*0.03,2);if(u.copy(b).lerp(m,ze(0.35,0.7,qi(g*0.008+3,G*0.008,3))),u.lerp(p,ze(4.5,2.2,v)),u.lerp(_,ze(0.8,-0.2,v)),v<-0.5)u.copy(R).multiplyScalar(0.9);u.lerp(f,ze(0.82,0.62,P));let K=Math.hypot(g-Cn.x,G-Cn.z);u.lerp(f,ze(150,110,K)*ze(30,60,v)),u.lerp(w,ze(70,30,K)*ze(80,120,v)),u.multiplyScalar(0.92+L*0.16),d[E*3]=u.r,d[E*3+1]=u.g,d[E*3+2]=u.b}l.setAttribute("color",new be(d,3));let y=td();y.repeat.set(i/6,i/6),this.mesh=new Mt(l,new Rn({vertexColors:!0,map:y})),this.mesh.receiveShadow=!0;let S=256,A=new Uint8Array(S*S);for(let E=0;E<S;E++)for(let g=0;g<S;g++){let v=-i/2+(g+0.5)*i/S,G=-i/2+(E+0.5)*i/S;A[E*S+g]=Math.max(0,Math.min(255,(this.height(v,G)+10)*12.75))}this.depthTex=new pi(A,S,S,As),this.depthTex.magFilter=this.depthTex.minFilter=We,this.depthTex.needsUpdate=!0}natural(t,e){let n=e+10,i=n>0?282:360,s=Math.sqrt((t/455)**2+(n/i)**2)+(qi(t*0.006,e*0.006,3)-0.5)*0.16,r=ze(1.04,0.93,s),a=r*(2.6+qi(t*0.01,e*0.01,4)*14*ze(0.9,0.55,s))-(1-r)*12;a+=r*ze(-90,-270,e)*(30+qi(t*0.02,e*0.02,3)*22);let o=Math.hypot(t-Cn.x,e-Cn.z),l=Math.max(0,150-o*1.25);if(o<24)l-=(24-o)*1.6;a+=l*r;let c=this.track.px[this.track.cp[8]],h=this.track.pz[this.track.cp[8]];a+=34*Math.exp(-((t-c)**2+(e-h)**2)/5000);let d=this.rav,u=t-d.x,p=e-d.z,_=Math.abs(u*d.tx+p*d.tz),b=Math.abs(-u*d.tz+p*d.tx);a=cc(a,-2.5,ze(17,8,_)*ze(140,90,b));let m=Math.hypot(t-this.lagoon.x,e-this.lagoon.z);return a=cc(a,-3,ze(80,38,m)),a}height(t,e){let{RES:n,step:i,SIZE:s,H:r}=this,a=(t+s/2)/i,o=(e+s/2)/i;if(a<0||o<0||a>n||o>n)return-12;a=Math.min(n-0.001,a),o=Math.min(n-0.001,o);let l=Math.floor(a),c=Math.floor(o),h=a-l,d=o-c,u=r[c*(n+1)+l],p=r[c*(n+1)+l+1],_=r[(c+1)*(n+1)+l],b=r[(c+1)*(n+1)+l+1];return u+(p-u)*h+(_-u)*d+(u-p-_+b)*h*d}slope(t,e){return Math.hypot(this.height(t+2,e)-this.height(t-2,e),this.height(t,e+2)-this.height(t,e-2))/4}}function jn(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new he,c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(r[p]===void 0)r[p]=[];r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(a[p]===void 0)a[p]=[];a[p].push(d.morphAttributes[p])}if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let p=t[u].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=od(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][u]);let _=od(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function od(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new be(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,p=h.count;u<p;u++)for(let _=0;_<n;_++){let b=h.getComponent(u,_);o.setComponent(u+d,_,b)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}var Ls=new I(-0.45,0.75,0.48).normalize(),ld=new ht("#bfe6ff");function je(t,e){let n=t.attributes.position.count,i=new Float32Array(n*3);for(let s=0;s<n;s++)i[s*3]=e.r,i[s*3+1]=e.g,i[s*3+2]=e.b;return t.setAttribute("color",new be(i,3)),t}var _r=(t)=>{if(t.attributes.uv)t.deleteAttribute("uv");return t.index?t.toNonIndexed():t};function cd(t,e,n,i){let s=Qn(99),r=e.N,a={updaters:[]},o=(C)=>new Kn({gradientMap:i,...C});t.background=ld.clone(),t.fog=new or(ld,380,2300);let l=new Mt(new ye(4000,32,16),new fe({side:Ve,depthWrite:!1,fog:!1,uniforms:{uSun:{value:Ls}},vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
      varying vec3 vD; uniform vec3 uSun;
      void main(){
        vec3 d = normalize(vD); float h = max(d.y, 0.0);
        vec3 col = mix(vec3(0.75, 0.9, 1.0), vec3(0.22, 0.52, 0.96), pow(h, 0.55));
        float s = max(dot(d, uSun), 0.0);
        col += vec3(1.0, 0.9, 0.6) * (pow(s, 600.0) * 4.0 + pow(s, 12.0) * 0.25);
        if (d.y < 0.0) col = vec3(0.75, 0.9, 1.0);
        gl_FragColor = vec4(col, 1.0);
      }`}));l.frustumCulled=!1,l.renderOrder=-10,t.add(l),a.sky=l;let c=new Re,h=[Ua(1),Ua(2),Ua(3)];for(let C=0;C<26;C++){let O=C/26*Math.PI*2+s()*0.2,H=1500+s()*900,F=new Ui(new fi({map:h[C%3],fog:!1,depthWrite:!1,transparent:!0})),k=320+s()*380;F.scale.set(k,k/2,1),F.position.set(Math.cos(O)*H,140+s()*320,Math.sin(O)*H),c.add(F)}t.add(c),a.updaters.push((C)=>{c.rotation.y=C*0.004});let d=new Mt(new pn(9000,9000).rotateX(-Math.PI/2),new fe({fog:!0,uniforms:An.merge([ft.fog,{uDepth:{value:null},uSize:{value:n.SIZE},uTime:{value:0},uSun:{value:Ls}}]),vertexShader:`
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      varying vec3 vW; uniform sampler2D uDepth; uniform float uSize, uTime; uniform vec3 uSun;
      #include <fog_pars_fragment>
      void main(){
        vec2 uv = (vW.xz + uSize * 0.5) / uSize;
        float h = (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) ? -10.0 : texture2D(uDepth, uv).r * 20.0 - 10.0;
        float depth = max(0.0, -h);
        vec3 col = mix(vec3(0.3, 0.92, 0.86), vec3(0.04, 0.62, 0.82), smoothstep(0.0, 3.5, depth));
        col = mix(col, vec3(0.02, 0.3, 0.62), smoothstep(4.0, 10.0, depth));
        float w1 = sin(vW.x * 0.15 + uTime * 1.2) * cos(vW.z * 0.13 - uTime * 0.9);
        float w2 = sin((vW.x + vW.z) * 0.31 + uTime * 1.7);
        vec3 n = normalize(vec3(w1 * 0.16 + w2 * 0.08, 1.0, w2 * 0.12 - w1 * 0.07));
        vec3 V = normalize(cameraPosition - vW);
        float spec = pow(max(dot(n, normalize(V + uSun)), 0.0), 220.0) * 3.0;
        float edge = 1.0 - smoothstep(0.0, 1.0, depth);
        float band = step(0.55, fract(depth * 0.9 - uTime * 0.3)) * (1.0 - smoothstep(0.6, 2.6, depth)) * 0.55;
        col = mix(col, vec3(1.0), clamp(edge * 0.85 + band, 0.0, 1.0));
        col = mix(col, vec3(0.7, 0.88, 1.0), pow(1.0 - max(V.y, 0.0), 4.0) * 0.4);
        col += spec;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}));d.material.uniforms.uDepth.value=n.depthTex,t.add(d),a.updaters.push((C)=>{d.material.uniforms.uTime.value=C});let u=Qu(),p=e.runs((C)=>!(e.flags[C]&9)),_=new Mt(e.sweep([[-It,0],[It,0]],p,{uvAcross:[0,1],vScale:0.041666666666666664}),new Rn({map:u}));_.receiveShadow=!0,t.add(_);let b=e.runs((C)=>Math.abs(e.curv[C])>0.011&&!(e.flags[C]&13)),m=oc(),f=new Mt(jn([e.sweep([[-It-0.9,0.02],[-It+0.7,0.07]],b,{uvAcross:[0,1],vScale:0.16666666666666666}),e.sweep([[It-0.7,0.07],[It+0.9,0.02]],b,{uvAcross:[0,1],vScale:0.16666666666666666})]),new Rn({map:m}));f.receiveShadow=!0,t.add(f);let w=e.runs((C)=>!(e.flags[C]&13)),R=oc(),y=new Mt(jn([e.sweep([[-It-1.4,-0.4],[-It-1.4,0.75],[-It-1.1,0.95],[-It-0.8,0.75],[-It-0.8,-0.4]],w,{uvAcross:[0,0.3,0.5,0.7,1],vScale:0.125}),e.sweep([[It+0.8,-0.4],[It+0.8,0.75],[It+1.1,0.95],[It+1.4,0.75],[It+1.4,-0.4]],w,{uvAcross:[0,0.3,0.5,0.7,1],vScale:0.125})]),o({map:R}));y.castShadow=!0,y.receiveShadow=!0,t.add(y);let S=e.runs((C)=>(e.flags[C]&8)!==0),A=ju(),E=new Mt(e.sweep([[-It,0.05],[It,0.05],[It,-0.6],[-It,-0.6],[-It,0.05]],S,{uvAcross:[0,1,1.05,1.1,1.15],vScale:0.16666666666666666}),new Rn({map:A}));E.castShadow=!0,E.receiveShadow=!0,t.add(E);let g=o({color:"#c99a5b"}),v=new Mt(jn([e.sweep([[-It-0.2,1.05],[-It-0.2,1.2]],S),e.sweep([[It+0.2,1.05],[It+0.2,1.2]],S),e.sweep([[-It-0.2,0.55],[-It-0.2,0.62]],S),e.sweep([[It+0.2,0.55],[It+0.2,0.62]],S)]),new Rn({color:"#c99a5b",side:Ke}));t.add(v);{let C=[],O=[];for(let[z,X]of S)for(let Z=z;Z<=X;Z+=2){let nt=Z%r;for(let rt of[-1,1])if(C.push([e.px[nt]+e.rightX(nt)*rt*(It+0.2),e.py[nt],e.pz[nt]+e.rightZ(nt)*rt*(It+0.2)]),Z%4===0)O.push([e.px[nt]+e.rightX(nt)*rt*(It-1),e.py[nt],e.pz[nt]+e.rightZ(nt)*rt*(It-1)])}let H=new $t,F=new mi(new Le(0.12,0.14,1.5,6).translate(0,0.6,0),g,C.length);C.forEach((z,X)=>F.setMatrixAt(X,H.makeTranslation(z[0],z[1],z[2])));let k=new mi(new Le(0.3,0.35,1,7).translate(0,-0.5,0),o({color:"#7a5230"}),O.length);O.forEach((z,X)=>k.setMatrixAt(X,H.compose(new I(z[0],z[1]-0.5,z[2]),new Qe,new I(1,z[1]+5,1)))),F.castShadow=k.castShadow=!0,t.add(F,k)}let G=e.runs((C)=>(e.flags[C]&4)!==0);{let C=It+1.6,O=[];for(let Z=0;Z<=14;Z++){let nt=Math.PI*(Z/14);O.push([-Math.cos(nt)*C,Math.sin(nt)*8.5-0.2])}let H=ed(),F=new Mt(e.sweep(O,G,{vScale:0.1}),new Rn({map:H,color:"#b59c7a",side:Ke}));F.castShadow=!0,F.receiveShadow=!0,t.add(F);let k=o({color:"#b8a27c"}),z=o({color:"#5c4a36"}),X=new fi({map:Da(),color:new ht(3,1.5,0.4),blending:dn,depthWrite:!1});for(let[Z,nt]of G){for(let rt of[Z%r,nt%r]){let yt=new Re;for(let ot of[-1,1]){let Pt=new Mt(new Jt(2.6,11,2.6),k);Pt.position.set(ot*(It+2.4),5.5,0),yt.add(Pt);let Nt=new Mt(new Jt(3.4,1,3.4),z);Nt.position.set(ot*(It+2.4),11.3,0),yt.add(Nt);let Rt=new Mt(new Jt(0.6,0.6,0.2),o({color:"#ffde3b",emissive:"#ff9f1c",emissiveIntensity:0.6}));for(let Me of[-0.6,0.6]){let Wt=Rt.clone();Wt.position.set(ot*(It+2.4)+Me,8.6,1.35),yt.add(Wt)}}let Ft=new Mt(new Jt(2*It+8,2.4,3),k);Ft.position.y=12.4,yt.add(Ft);let J=new Mt(new pn(14,2),new Xe({map:lc("TEMPLE RUN","#2f9a3c")}));J.position.set(0,12.4,1.55),yt.add(J);let at=J.clone();at.position.z=-1.55,at.rotation.y=Math.PI,yt.add(at),yt.position.set(e.px[rt],e.py[rt],e.pz[rt]),yt.rotation.y=Math.atan2(e.tx[rt],e.tz[rt]),yt.traverse((ot)=>{if(ot.isMesh)ot.castShadow=!0}),t.add(yt)}for(let rt=Z+4;rt<nt-2;rt+=7){let yt=rt%r;for(let Ft of[-1,1]){let J=new Ui(X);J.scale.set(1.5,2,1),J.position.set(e.px[yt]+e.rightX(yt)*Ft*(It-0.2),e.py[yt]+2.6,e.pz[yt]+e.rightZ(yt)*Ft*(It-0.2)),t.add(J)}}}}{let C=(e.startIdx+8)%r,O=new Re,H=o({color:"#d9c06a"});for(let X of[-1,1]){let Z=new Mt(new Le(0.45,0.55,10,10),H);Z.position.set(X*(It+1.2),5,0),O.add(Z);for(let rt=1.5;rt<10;rt+=2){let yt=new Mt(new zi(0.52,0.09,6,14),o({color:"#9a8340"}));yt.rotation.x=Math.PI/2,yt.position.set(X*(It+1.2),rt,0),O.add(yt)}let nt=new Mt(new Jt(1.6,2.2,1.6),o({color:"#8b5a2b"}));nt.position.set(X*(It+1.2),11,0),O.add(nt)}let F=new Mt(new pn(2*It+2,2.6),new Xe({map:lc("TIKI KART RALLY"),side:Ke}));F.position.y=8.6,O.add(F),O.position.set(e.px[C],e.py[C],e.pz[C]),O.rotation.y=Math.atan2(e.tx[C],e.tz[C]),O.traverse((X)=>{if(X.isMesh)X.castShadow=!0}),t.add(O);let k=new gi((()=>{let[X,Z]=Ye(128,32);for(let nt=0;nt<16;nt++)for(let rt=0;rt<4;rt++)Z.fillStyle=(nt+rt)%2?"#111":"#fff",Z.fillRect(nt*8,rt*8,8,8);return X})());k.colorSpace=ui,k.magFilter=fn;let z=new Mt(e.sweep([[-It,0.04],[It,0.04]],[[C,C+1]],{uvAcross:[0,1],vScale:0.5}),new Rn({map:k}));t.add(z),a.finishIdx=C}{let C=sd();C.repeat.set(1,1);let O=new Xe({map:C,color:new ht(1.6,1.6,1.6)});a.pads=[];for(let{i:H,lat:F}of e.pads){let k=new Mt(e.sweep([[F-2.6,0.06],[F+2.6,0.06]],[[H,H+3]],{uvAcross:[0,1],vScale:0.16666666666666666}),O);t.add(k),a.pads.push({i:H,lat:F})}a.updaters.push((H)=>{C.offset.y=-H*1.5})}{let C=n.rav,H=-C.tz,F=C.tx,k=C.x+H*95,z=C.z+F*95,X=Math.max(n.height(k+H*12,z+F*12),20),Z=ad();Z.repeat.set(3,2);let nt=new Mt(new pn(22,X+3),new Xe({map:Z,transparent:!0,opacity:0.92,color:new ht(1.1,1.1,1.1)}));nt.position.set(k,(X+3)/2-1.5,z),nt.rotation.y=Math.atan2(-H,-F),t.add(nt),a.updaters.push((rt)=>{Z.offset.y=rt*1.2}),a.waterfall=new I(k,0.5,z)}let P=(C,O,H)=>{let F=e.nearestCoarse(C,O);return F&&F.d<It+H},L=(C,O,H)=>{let F=[];for(let k=0;k<O&&F.length<C;k++){let z,X;if(s()<0.65){let nt=Math.floor(s()*r),rt=s()<0.5?-1:1,yt=It+4+s()*70;z=e.px[nt]+e.rightX(nt)*rt*yt+(s()-0.5)*10,X=e.pz[nt]+e.rightZ(nt)*rt*yt+(s()-0.5)*10}else z=(s()-0.5)*1000,X=(s()-0.5)*760-20;let Z=n.height(z,X);if(H(z,X,Z))F.push([z,Z,X])}return F},K=(C,O,H,F)=>{let k=new mi(C,O,H.length),z=new $t,X=new Qe,Z=new I(0,1,0);return H.forEach((nt,rt)=>{let yt=F();X.setFromAxisAngle(Z,s()*6.28),k.setMatrixAt(rt,z.compose(new I(nt[0],nt[1]-0.2,nt[2]),X,new I(yt,yt*(0.85+s()*0.3),yt)))}),k.castShadow=!0,k.receiveShadow=!0,t.add(k),k};{let C=new Bi([new I(0,0,0),new I(0.4,3,0),new I(1.3,6.5,0),new I(2.4,9.4,0)]),O=[je(new ur(C,10,0.3,7),new ht("#a8784a"))];for(let k=0;k<8;k++){let z=k/8*Math.PI*2+0.2,X=[];for(let rt=0;rt<=8;rt++){let yt=rt/8,Ft=4.8*yt,J=-2.4*yt*yt+yt*0.8,at=Math.sin(Math.PI*yt)*0.9,ot=Math.cos(z)*Ft,Pt=Math.sin(z)*Ft,Nt=-Math.sin(z)*at,Rt=Math.cos(z)*at;X.push(ot+Nt,J,Pt+Rt,ot-Nt,J,Pt-Rt)}let Z=[];for(let rt=0;rt<8;rt++){let yt=rt*2;Z.push(yt,yt+1,yt+2,yt+1,yt+3,yt+2)}let nt=new he;nt.setAttribute("position",new qt(X,3)),nt.setIndex(Z),nt.computeVertexNormals(),nt.translate(2.4,9.4,0),O.push(je(nt,new ht(k%2?"#3fae3a":"#55c94a")))}for(let k=0;k<3;k++)O.push(je(new ye(0.32,6,5).translate(2.2+(k-1)*0.35,9,k%2*0.3),new ht("#6b4a22")));let H=jn(O.map(_r)),F=L(320,9000,(k,z,X)=>X>0.6&&X<7&&!P(k,z,3)&&n.slope(k,z)<0.5);K(H,o({vertexColors:!0,side:Ke}),F,()=>0.8+s()*0.5)}{let C=[je(new Le(0.35,0.55,6,7).translate(0,3,0),new ht("#7b5532"))],O=["#2f9a3c","#3fb24a","#279032","#4cc257"].map((k)=>new ht(k));for(let k=0;k<4;k++)C.push(je(new Rs(2.6-k*0.25,0).translate((k%2-0.5)*2,6.5+k*1.2,(k>1?1:-1)*1.2),O[k]));let H=jn(C.map(_r)),F=L(700,14000,(k,z,X)=>X>5&&X<85&&!P(k,z,6)&&n.slope(k,z)<0.65&&Math.hypot(k-Cn.x,z-Cn.z)>95);K(H,o({vertexColors:!0}),F,()=>0.8+s()*0.8)}{let C=jn([0,1,2].map((H)=>_r(je(new Rs(1.1-H*0.15,0).translate((H-1)*0.9,0.7,H%2*0.5),new ht(["#4cc257","#3fae3a","#5fd56a"][H])))));K(C,o({vertexColors:!0}),L(900,12000,(H,F,k)=>k>2&&!P(H,F,2.5)&&P(H,F,30)&&n.slope(H,F)<0.8),()=>0.7+s()*0.9);let O=new hr(1.4,0);K(O,o({color:"#9b8f80"}),L(220,6000,(H,F,k)=>k>-1&&!P(H,F,3)),()=>0.6+s()*2.2)}{let C=[je(new Jt(5,3,4).translate(0,1.5,0),new ht("#d9b07a")),je(new En(4.4,3.4,4).rotateY(Math.PI/4).translate(0,4.7,0),new ht("#e7c25a")),je(new Jt(1.2,2,0.1).translate(0,1,2.01),new ht("#5c3b1e"))];for(let[Z,nt]of[[-1.8,0],[1.8,0]])C.push(je(new Le(0.18,0.18,1.2,6).translate(Z*1.3,-0.4+nt,1.8),new ht("#7b5532")));let O=jn(C.map(_r));K(O,o({vertexColors:!0}),L(12,4000,(Z,nt,rt)=>rt>1&&rt<4&&!P(Z,nt,8)&&P(Z,nt,40)),()=>1);let H=[je(new Jt(1.4,3.2,1.2).translate(0,1.6,0),new ht("#9a6234")),je(new Jt(1.6,0.3,1.4).translate(0,2.4,0),new ht("#6b3f1c")),je(new Jt(0.35,0.35,0.1).translate(-0.35,2,0.62),new ht("#ffffff")),je(new Jt(0.35,0.35,0.1).translate(0.35,2,0.62),new ht("#ffffff")),je(new Jt(0.9,0.3,0.1).translate(0,1.1,0.62),new ht("#d8322b"))],F=jn(H.map(_r)),k=[];for(let Z=0;Z<18;Z++){let nt=Math.floor((Z+0.5)/18*r),rt=Z%2?1:-1;if(e.flags[nt]&13)continue;let yt=e.px[nt]+e.rightX(nt)*rt*(It+4),Ft=e.pz[nt]+e.rightZ(nt)*rt*(It+4);k.push([yt,n.height(yt,Ft),Ft])}let z=K(F,o({vertexColors:!0}),k,()=>1.3),X=new $t;k.forEach((Z,nt)=>{let rt=e.nearestCoarse(Z[0],Z[2]);if(!rt)return;let yt=Math.atan2(e.px[rt.i]-Z[0],e.pz[rt.i]-Z[2]);z.setMatrixAt(nt,X.compose(new I(Z[0],Z[1]-0.2,Z[2]),new Qe().setFromAxisAngle(new I(0,1,0),yt),new I(1.3,1.3,1.3)))})}return a.volcanoTop=new I(Cn.x,n.height(Cn.x+26,Cn.z)+4,Cn.z),a}var Oa={balanced:{label:"BALANCED",top:31,accel:20,turn:1,stats:{speed:0.7,accel:0.7,turn:0.7}},speed:{label:"SPEED",top:33,accel:17,turn:0.9,stats:{speed:1,accel:0.5,turn:0.5}},accel:{label:"ACCEL",top:30.5,accel:25,turn:1,stats:{speed:0.6,accel:1,turn:0.7}},turn:{label:"TURNING",top:30.5,accel:20,turn:1.18,stats:{speed:0.6,accel:0.7,turn:1}}},nn=[{id:"mango",name:"MANGO",emoji:"\uD83D\uDC2F",kart:"#ff8a1f",body:"#ffa53a",cls:"balanced",blurb:"Island tiger. Never brakes."},{id:"pip",name:"PIP",emoji:"\uD83D\uDC30",kart:"#ff5fae",body:"#fff0f6",cls:"turn",blurb:"Hops corners like nobody else."},{id:"rex",name:"REX",emoji:"\uD83E\uDD96",kart:"#3fbf3f",body:"#47b84a",cls:"speed",blurb:"Tiny arms. Huge top speed."},{id:"bolt",name:"BOLT",emoji:"\uD83E\uDD16",kart:"#2f7dff",body:"#c9d4e6",cls:"accel",blurb:"Zero to turbo in a blink."},{id:"waddle",name:"WADDLE",emoji:"\uD83D\uDC27",kart:"#8a5cff",body:"#22262e",cls:"turn",blurb:"Slides on everything."},{id:"koa",name:"KOA",emoji:"\uD83D\uDC3B",kart:"#e8322b",body:"#8a5a32",cls:"speed",blurb:"Heavy foot, heavy heart."}];function y_(t,e,n){let i=new Re,s=e("#ffffff"),r=e("#141414"),a=(l=0.12,c=0.44,h=0.2,d=0.13)=>{for(let u of[-1,1]){let p=new Mt(new ye(d,12,10),s);p.position.set(u*h,l,c),i.add(p);let _=new Mt(new ye(d*0.5,8,8),r);_.position.set(u*h,l,c+d*0.75),i.add(_)}};if(t==="bolt"){let l=new Mt(new Jt(0.9,0.75,0.8),n);i.add(l);let c=new Mt(new Jt(0.7,0.22,0.05),new Xe({color:new ht(0.4,2.2,2.6)}));c.position.set(0,0.08,0.41),i.add(c);let h=new Mt(new Le(0.03,0.03,0.5),r);h.position.set(0.25,0.6,0),i.add(h);let d=new Mt(new ye(0.09),new Xe({color:new ht(3,0.3,0.3)}));return d.position.set(0.25,0.86,0),i.add(d),i}let o=new Mt(new ye(0.52,18,14),n);if(o.scale.set(1,0.95,0.95),i.add(o),t==="mango"){for(let h of[-1,1]){let d=new Mt(new ye(0.17,10,8),n);d.position.set(h*0.36,0.42,-0.05),i.add(d)}let l=new Mt(new ye(0.25,12,10),s);l.position.set(0,-0.14,0.38),l.scale.set(1.2,0.8,0.7),i.add(l);let c=new Mt(new ye(0.08),e("#d8322b"));c.position.set(0,-0.06,0.55),i.add(c);for(let h of[-1,1])for(let d=0;d<2;d++){let u=new Mt(new Jt(0.05,0.22,0.05),r);u.position.set(h*(0.46-d*0.06),0.1+d*0.2,0.18),u.rotation.z=h*0.4,i.add(u)}a(0.14,0.4)}else if(t==="pip"){for(let c of[-1,1]){let h=new Mt(new Oi(0.11,0.6,4,8),n);h.position.set(c*0.2,0.75,-0.05),h.rotation.z=-c*0.18,i.add(h);let d=new Mt(new Oi(0.05,0.45,4,6),e("#ff8fc4"));d.position.set(c*0.2,0.75,0.04),d.rotation.z=-c*0.18,i.add(d)}let l=new Mt(new ye(0.07),e("#ff5fae"));l.position.set(0,-0.04,0.5),i.add(l),a(0.14,0.42)}else if(t==="rex"){let l=new Mt(new Jt(0.55,0.36,0.5),n);l.position.set(0,-0.12,0.42),i.add(l);for(let c=0;c<4;c++){let h=new Mt(new En(0.1,0.28,5),e("#ffde3b"));h.position.set(0,0.42-c*0.12,-0.3-c*0.12),h.rotation.x=-0.6-c*0.2,i.add(h)}for(let c of[-1,1]){let h=new Mt(new En(0.04,0.1,4),s);h.position.set(c*0.15,-0.32,0.62),h.rotation.x=Math.PI,i.add(h)}a(0.2,0.36,0.22)}else if(t==="waddle"){let l=new Mt(new ye(0.4,14,12),s);l.position.set(0,-0.02,0.22),l.scale.set(1,1,0.7),i.add(l);let c=new Mt(new En(0.11,0.3,8),e("#ff9f1c"));c.rotation.x=Math.PI/2,c.position.set(0,-0.08,0.58),i.add(c),a(0.14,0.45,0.16,0.11)}else if(t==="koa"){for(let h of[-1,1]){let d=new Mt(new ye(0.17,10,8),n);d.position.set(h*0.38,0.4,-0.05),i.add(d)}let l=new Mt(new ye(0.24,12,10),e("#d9b07a"));l.position.set(0,-0.15,0.4),l.scale.set(1.1,0.8,0.8),i.add(l);let c=new Mt(new ye(0.09),r);c.position.set(0,-0.06,0.6),i.add(c),a(0.14,0.4)}return i}function M_(t,e,n){let i=(A)=>new Kn({color:A,gradientMap:e}),s=new Re,r=new Re;s.add(r);let a=i(t.kart),o=i("#24262c"),l=i("#b9c0cc"),c=i("#1a1a1d"),h=i(t.body),d=(A,E,g,v,G,P=r)=>{let L=new Mt(A,E);return L.position.set(g,v,G),P.add(L),L};d(new Jt(1.5,0.28,2.5),a,0,0.42,0);let u=d(new Jt(1.3,0.3,0.9),a,0,0.48,1.45);u.rotation.x=0.28,d(new Jt(1.9,0.16,0.36),o,0,0.36,1.9);for(let A of[-1,1])d(new Jt(0.36,0.34,1.3),a,A*0.92,0.46,0.05);d(new Jt(1,0.5,0.75),o,0,0.75,-1.05);let p=[];for(let A of[-1,1]){let E=d(new Le(0.1,0.12,0.7,10),l,A*0.32,0.95,-1.42);E.rotation.x=-1,p.push(new I(A*0.32,1.12,-1.72))}d(new Jt(1.7,0.08,0.4),a,0,1.42,-1.38);for(let A of[-1,1])d(new Jt(0.06,0.45,0.25),o,A*0.6,1.2,-1.38);d(new Jt(0.8,0.6,0.2),o,0,0.85,-0.5);let _=d(new Le(0.05,0.05,0.5),o,0,0.95,0.55);_.rotation.x=-0.9;let b=d(new zi(0.22,0.045,8,18),o,0,1.1,0.42);b.rotation.x=-0.7;let m=new Re;m.position.set(0,0.62,-0.2),r.add(m),d(new Le(0.34,0.42,0.75,12),h,0,0.45,0,m);for(let A of[-1,1]){let E=d(new Oi(0.1,0.45,4,8),h,A*0.32,0.55,0.35,m);E.rotation.x=-1.1}let f=y_(t.id,i,h);f.position.set(0,1.25,0.05),m.add(f);let w=[];for(let[A,E,g,v,G]of[[-1,1.15,0.34,0.32,!0],[1,1.15,0.34,0.32,!0],[-1,-0.95,0.44,0.46,!1],[1,-0.95,0.44,0.46,!1]]){let P=new Re;P.position.set(A*0.95,g,E),s.add(P);let L=new Re;P.add(L),L.add(new Mt(new Le(g,g,v,18).rotateZ(Math.PI/2),c));let K=new Mt(new Le(g*0.5,g*0.5,v+0.02,10).rotateZ(Math.PI/2),a);L.add(K);let C=new Mt(new Jt(v+0.04,g*0.9,0.08),l);L.add(C),w.push({pivot:P,spin:L,front:G,rad:g})}let R=new fi({map:n,color:new ht(0.7,1,1.8),blending:dn,depthWrite:!1}),y=p.map((A)=>{let E=new Ui(R.clone());return E.position.copy(A),E.visible=!1,r.add(E),E}),S=new Mt(new ye(2,24,16),new fe({transparent:!0,depthWrite:!1,blending:dn,uniforms:{uT:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; uniform float uT; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.5); gl_FragColor = vec4(vec3(0.3, 0.9, 1.4) * (f * 0.9 + 0.05 + 0.05 * sin(uT * 8.0)), 1.0); }"}));return S.position.y=0.9,S.visible=!1,s.add(S),s.traverse((A)=>{if(A.isMesh&&A!==S)A.castShadow=!0}),{group:s,body:r,wheels:w,flames:y,pipes:p,shield:S,head:f,driver:m}}class Ba{constructor(t,e,n,i=!1){this.ch=t,this.spec=Oa[t.cls],this.name=i?"YOU":t.name,this.isPlayer=i,this.model=M_(t,e,n),this.obj=this.model.group,this.reset()}reset(){this.x=this.y=this.z=0,this.h=0,this.speed=0,this.kx=this.kz=0,this.airborne=!1,this.vy=0,this.airTime=0,this.launchCd=0,this.drifting=!1,this.driftDir=0,this.meter=0,this.boosts=0,this.driftFailed=!1,this.hopPending=!1,this.yawOff=0,this.steerVis=0,this.boostTime=0,this.boostLevel=0,this.spinTime=0,this.spinAngle=0,this.shieldTime=0,this.invuln=0,this.item=null,this.rolling=0,this.fruit=0,this.q={i:0},this.lap=0,this.passedHalf=!0,this.rel=0,this.progress=0,this.finished=!1,this.finishTime=0,this.prevDrift=!1,this.prevBoost=!1,this.prevItem=!1,this.impact=0,this.events=[],this.wheelRot=0,this.squash=0,this.respawnTimer=0,this.lastSafe=0,this.wrongWay=0}place(t,e,n){let i=t.pointAt(e,n),s=(Math.floor(e)%t.N+t.N)%t.N;this.x=i.x,this.y=i.y,this.z=i.z,this.h=Math.atan2(t.tx[s],t.tz[s]),this.speed=0,this.kx=this.kz=0,this.airborne=!1,this.vy=0,this.drifting=!1,this.yawOff=0,t.project(this.x,this.z,-1,this.q);let r=t.length;this.rel=(this.q.s-t.finishIdx*t.ds+r)%r,this.syncObj(0.016,0)}get top(){return this.spec.top*(1+this.fruit*0.006)}boost(t,e){this.boostTime=Math.max(this.boostTime,e),this.boostLevel=Math.max(this.boostTime>0?this.boostLevel:0,t),this.speed=Math.max(this.speed,this.top*(1.1+0.05*t)),this.events.push({type:"boost",level:t})}hit(t){if(this.invuln>0||this.spinTime>0)return!1;if(this.shieldTime>0)return this.shieldTime=0,this.events.push({type:"shieldpop"}),!1;if(this.spinTime=t==="tnt"?1.5:1.15,this.speed*=0.25,this.drifting=!1,this.boostTime=0,t==="tnt"||t==="bomb")this.airborne=!0,this.vy=t==="tnt"?9:6;return this.fruit=Math.max(0,this.fruit-3),this.events.push({type:"hit",kind:t}),!0}update(t,e,n){let i=this.spec,s=n.N;if(this.events.length=0,this.invuln=Math.max(0,this.invuln-t),this.shieldTime=Math.max(0,this.shieldTime-t),this.launchCd=Math.max(0,this.launchCd-t),this.respawnTimer>0){if(this.respawnTimer-=t,this.respawnTimer<=0)this.place(n,this.respawnIdx,0),this.invuln=1.5;return}let r=this.spinTime>0;if(r)this.spinTime-=t,this.spinAngle+=t*13,e={throttle:0,brake:0,steer:0,drift:!1,boost:!1,item:!1};else this.spinAngle=0;let a=e.drift&&!this.prevDrift,o=e.boost&&!this.prevBoost;this.prevDrift=e.drift,this.prevBoost=e.boost;let l=this.top;if(this.boostTime>0)this.boostTime-=t,l*=1.22+0.07*this.boostLevel;else this.boostLevel=0;if(!this.airborne){if(e.throttle>0&&this.speed>-1){if(this.speed<l)this.speed+=(i.accel*e.throttle*(1-Math.pow(Math.max(0,this.speed)/l,2.2))+(this.boostTime>0?45:0))*t}if(e.brake>0)this.speed-=(this.speed>0.5?34:12)*e.brake*t;if(this.speed<-9)this.speed=-9;if(!e.throttle&&!e.brake)this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),5*t);if(this.speed>l)this.speed-=(this.speed-l)*2.2*t}if(a&&!this.airborne&&this.speed>8&&!r)this.airborne=!0,this.vy=3.6,this.hopPending=!0,this.events.push({type:"hop"});if(this.hopPending&&!this.airborne){if(this.hopPending=!1,e.drift&&Math.abs(e.steer)>0.2&&this.speed>8)this.drifting=!0,this.driftDir=Math.sign(e.steer),this.meter=0,this.boosts=0,this.driftFailed=!1}if(this.drifting){if(!e.drift||this.speed<7||r)this.drifting=!1;else if(!this.airborne){if(this.meter+=t*1.2,this.meter>=1)this.meter=0,this.events.push({type:"overheat"});if(o){if(!this.driftFailed&&this.meter>=0.7&&this.boosts<3){this.boosts++;let S=this.meter>0.9;this.boost(this.boosts,0.5+0.22*this.boosts+(S?0.2:0)),this.events.push({type:"turbo",n:this.boosts,perfect:S}),this.meter=0}else if(this.meter<0.7)this.driftFailed=!0,this.events.push({type:"fizzle"})}this.speed-=this.speed*0.05*t}}if(!this.drifting)this.meter=0;let c,h=Math.abs(this.speed);if(this.drifting)c=this.driftDir*i.turn*(1.05+0.8*e.steer*this.driftDir)*Math.min(1,h/10),this.yawOff+=(this.driftDir*0.6-this.yawOff)*Math.min(1,t*7);else{let S=24*i.turn/Math.max(h,4);if(c=e.steer*Math.min(i.turn*2.1*Math.min(1,0.25+h/5),S),this.speed<0)c=-c;if(this.airborne&&!this.hopPending)c*=0.45;this.yawOff+=(0-this.yawOff)*Math.min(1,t*8)}this.h-=c*t,this.steerVis+=(e.steer-this.steerVis)*Math.min(1,t*10),this.w=c;let d=Math.sin(this.h),u=Math.cos(this.h);this.x+=(d*this.speed+this.kx)*t,this.z+=(u*this.speed+this.kz)*t;let p=Math.exp(-5*t);this.kx*=p,this.kz*=p;let _=n.project(this.x,this.z,this.q.i,this.q),b=n.isGap(_.i)||Math.abs(_.lat)>It+2;if(this.airborne){if(this.vy-=27*t,this.y+=this.vy*t,this.airTime+=t,!b&&this.y<=_.y&&this.vy<=0){if(this.y=_.y,this.airborne=!1,this.airTime>0.55&&!r)this.boost(1,0.4+Math.min(0.6,this.airTime*0.4)),this.events.push({type:"hangtime",t:this.airTime});this.squash=Math.min(0.3,this.airTime*0.25+0.05),this.airTime=0}else if(this.y<_.y-18||this.y<-1.5){this.respawnTimer=1.4,this.respawnIdx=n.isGap(_.i)?n.gapEnd+4:_.i,this.speed=0,this.drifting=!1,this.events.push({type:"fall"});return}}else if(b)this.airborne=!0,this.vy=0,this.airTime=0;else{if(this.y=_.y,n.flags[_.i]&2&&this.speed>6&&this.launchCd<=0)this.airborne=!0,this.vy=3+this.speed*0.15,this.airTime=0,this.launchCd=1.5,this.hopPending=!1,this.events.push({type:"launch"});this.lastSafe=_.i,this.padCd=Math.max(0,(this.padCd||0)-t);for(let S of n.pads)if(this.padCd<=0&&(_.i-S.i+s)%s<=3&&Math.abs(_.lat-S.lat)<2.9)this.boost(2,1.1),this.padCd=0.8,this.events.push({type:"pad"})}let m=It-0.95;if(this.impact=0,Math.abs(_.lat)>m&&!n.isGap(_.i)){let S=Math.sign(_.lat),A=_.lat-S*m;this.x-=_.rx*A,this.z-=_.rz*A;let E=_.rx*S,g=_.rz*S,v=(d*this.speed+this.kx)*E+(u*this.speed+this.kz)*g;if(v>0){this.impact=v,this.kx-=E*v*0.6,this.kz-=g*v*0.6,this.speed*=1-Math.min(0.45,v*0.035);let G=Math.atan2(_.tx,_.tz);if(d*_.tx+u*_.tz>-0.3){let L=(G-this.h+Math.PI*3)%(Math.PI*2)-Math.PI;this.h+=L*Math.min(1,v*0.06)}if(v>5)this.drifting=!1;if(v>3)this.events.push({type:"wall",v})}}let f=n.length,w=n.finishIdx*n.ds,R=(_.s-w+f)%f;if(R>f*0.4&&R<f*0.6)this.passedHalf=!0;if(this.rel>f*0.8&&R<f*0.2){if(this.passedHalf)this.lap++,this.passedHalf=!1,this.lapEvent=!0}else if(this.rel<f*0.2&&R>f*0.8)this.lap--,this.passedHalf=!0;this.rel=R,this.progress=(this.lap-1)*f+R;let y=d*_.tx+u*_.tz;this.wrongWay=y<-0.4&&this.speed>4?this.wrongWay+t:0}syncObj(t,e){let n=this.obj,i=this.model;n.position.set(this.x,this.y,this.z),n.rotation.set(0,this.h+this.yawOff+this.spinAngle,0),this.squash=Math.max(0,this.squash-t*1.5),i.body.scale.set(1+this.squash*0.5,1-this.squash,1+this.squash*0.3),i.body.rotation.z=-this.steerVis*0.06*Math.min(1,Math.abs(this.speed)/20)-(this.drifting?this.driftDir*0.08:0),i.body.rotation.x=this.airborne?-Math.max(-0.3,Math.min(0.3,this.vy*0.03)):0,i.body.position.y=Math.abs(Math.sin(e*24))*0.02*Math.min(1,Math.abs(this.speed)/10),i.head.rotation.y=-this.steerVis*0.35,this.wheelRot+=this.speed*t/0.4;for(let r of i.wheels)if(r.spin.rotation.x=this.wheelRot*(0.4/r.rad),r.front)r.pivot.rotation.y=-this.steerVis*0.45;let s=this.boostTime>0;if(i.flames.forEach((r)=>{if(r.visible=s,s){let a=0.45+Math.random()*0.3+this.boostLevel*0.1;r.scale.set(a,a*1.3,1)}}),i.shield.visible=this.shieldTime>0,i.shield.visible)i.shield.material.uniforms.uT.value=e;n.visible=this.respawnTimer<=0&&(this.invuln<=0||Math.floor(e*12)%2===0),n.updateMatrixWorld(!0)}exhaustWorld(t){let e=this.model.pipes[t].clone();return e.applyMatrix4(this.model.body.matrixWorld),e}}class za{constructor(t,e,{skill:n=1,lane:i=0,seed:s=1}={}){this.k=t,this.track=e,this.skill=n,this.baseLane=i,this.phase=s*2.3,this.avoid=0,this.wantDrift=!1,this.itemDelay=1+Math.random()*2,this.boostAt=0.78+Math.random()*0.12}input(t,e,n,i){let s=this.k,r=this.track,a=r.N,o=s.q,l=Math.max(0,s.speed);if(s.spinTime<=0&&s.respawnTimer<=0){if(this.chkT=(this.chkT||0)+t,this.chkT>3){if(s.progress-(this.chkP??-1e9)<15||s.wrongWay>1.2)s.respawnTimer=0.6,s.respawnIdx=(o.i+2)%a,s.wrongWay=0,this.recover=0;this.chkT=0,this.chkP=s.progress}if(this.slow=s.speed<2&&!s.airborne?(this.slow||0)+t:0,this.slow>0.8&&!(this.recover>0))this.recover=0.7,this.slow=0}if(this.recover>0)return this.recover-=t,{throttle:0,brake:1,steer:Math.sin(s.h)*-r.tz[o.i]+Math.cos(s.h)*r.tx[o.i]>0?1:-1,drift:!1,boost:!1,item:!1};let c=Math.max(0.88,Math.min(1.12,1+n*0.0012)),h=this.skill*c,d=24*s.spec.turn*0.95,u=s.top*Math.min(1.06,h),p=0,_=0;for(let H=0;H<90;H+=4){let F=(o.i+Math.round(H/r.ds))%a,k=r.curv[F];if(H<40&&Math.abs(k)>p)p=Math.abs(k),_=Math.sign(k);let z=Math.sqrt(d/(Math.abs(k)+0.0001))*(this.wantDrift?1.15:1);u=Math.min(u,Math.sqrt(z*z+52*H))}let b=0,m=Math.sin(s.h),f=Math.cos(s.h);for(let H of e){if(H===s)continue;let F=H.x-s.x,k=H.z-s.z,z=F*m+k*f,X=-F*f+k*m;if(z>0&&z<10+l*0.3&&Math.abs(X)<2.4)b+=X>0?-3.5:3.5}this.avoid+=(b-this.avoid)*Math.min(1,t*2.5);let w=this.baseLane+Math.sin(i*0.17+this.phase)*2.5,R=_*Math.min(4,p*160),y=Math.max(-It+2,Math.min(It-2,w*0.5+R+this.avoid)),S=r.pointAt(o.i+o.f+(5+l*0.45)/r.ds,y),A=S.x-s.x,E=S.z-s.z,g=Math.atan2(-A*f+E*m,A*m+E*f),v=Math.max(-1,Math.min(1,g*2.4));if(p>0.017&&l>16&&!s.airborne&&!s.drifting&&!this.wantDrift&&Math.random()<0.08*h)this.wantDrift=!0;if(this.wantDrift&&p<0.008)this.wantDrift=!1;let P=this.wantDrift;if(s.drifting){let H=g*2.2;if(v=Math.max(-1,Math.min(1,(H*s.driftDir-1.05*s.spec.turn)/(0.8*s.spec.turn)))*s.driftDir,Math.sign(g)!==s.driftDir&&Math.abs(g)>0.25)P=!1}else if(this.wantDrift)v=Math.sign(v||_)*Math.max(0.6,Math.abs(v));let L=s.drifting&&s.meter>this.boostAt&&Math.random()<0.6+0.35*this.skill;if(L)this.boostAt=0.74+Math.random()*0.16;let K=l<u?1:0.3,C=l>u+3?Math.min(1,(l-u)/8):0,O=!1;if(s.item&&s.rolling<=0){if(this.itemDelay-=t,this.itemDelay<0){let H=s.item,F=e.some((z)=>z!==s&&(z.progress-s.progress>5&&z.progress-s.progress<70)),k=e.some((z)=>z!==s&&(s.progress-z.progress>3&&s.progress-z.progress<35));if(H==="turbo"&&p<0.01)O=!0;else if(H==="shield")O=!0;else if((H==="missile"||H==="bomb")&&F)O=!0;else if(H==="tnt"&&k)O=!0;else if(this.itemDelay<-8)O=!0;if(O)this.itemDelay=1+Math.random()*2.5}}return{throttle:K,brake:C,steer:v,drift:P,boost:L,item:O}}}function hd(t,e){for(let n=0;n<t.length;n++)for(let i=n+1;i<t.length;i++){let s=t[n],r=t[i];if(s.respawnTimer>0||r.respawnTimer>0)continue;let a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o),c=2.1;if(l>=c||l<0.0001||Math.abs(s.y-r.y)>1.6)continue;let h=a/l,d=o/l,u=(c-l)/2;s.x-=h*u,s.z-=d*u,r.x+=h*u,r.z+=d*u;let p=Math.sin(s.h)*s.speed*h+Math.cos(s.h)*s.speed*d,_=Math.sin(r.h)*r.speed*h+Math.cos(r.h)*r.speed*d,b=p-_;if(b>0)s.kx-=h*b*0.7,s.kz-=d*b*0.7,r.kx+=h*b*0.7,r.kz+=d*b*0.7,e?.(s,r,b,(s.x+r.x)/2,(s.y+r.y)/2+0.6,(s.z+r.z)/2)}}var Ha={turbo:"⚡",bomb:"\uD83D\uDCA3",missile:"\uD83D\uDE80",tnt:"\uD83E\uDDE8",shield:"\uD83D\uDEE1️"},ud={turbo:"TURBO",bomb:"BOMB",missile:"HOMING ROCKET",tnt:"TNT CRATE",shield:"BUBBLE SHIELD"};function S_(t,e,n=Math.random){let i=e>1?(t-1)/(e-1):0,s=i<0.2?{shield:30,tnt:30,bomb:30,turbo:10}:i<0.7?{bomb:25,missile:25,turbo:25,tnt:15,shield:10}:{missile:40,turbo:40,bomb:20},r=n()*100;for(let[a,o]of Object.entries(s))if((r-=o)<=0)return a;return"turbo"}function b_(){let[t,e]=Ye(128,128);e.fillStyle="#c0392b",e.fillRect(0,0,128,128),e.strokeStyle="#7a1d12",e.lineWidth=10,e.strokeRect(5,5,118,118),e.font="900 52px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#ffde3b",e.fillText("TNT",64,68);let n=new gi(t);return n.colorSpace=ui,n}class uc{constructor(t,e,n,i){this.scene=t,this.track=e,this.fx=i,this.events=[];let s=(l)=>new Kn({color:l,gradientMap:n}),r=new Jt(1.5,1.5,1.5),a=new Xe({map:id(),color:new ht(1.15,1.15,1.15)});this.boxes=[];for(let l of e.itemRows)for(let c of[-5.4,-1.8,1.8,5.4]){let h=e.pointAt(l,c),d=new Mt(r,a);d.position.set(h.x,h.y+1.3,h.z),d.castShadow=!0,t.add(d),this.boxes.push({x:h.x,y:h.y+1.3,z:h.z,mesh:d,alive:!0,t:0,phase:Math.random()*6})}let o=new ye(0.42,12,10);o.scale(1,1.15,1),this.fruitMesh=new mi(o,s("#ff8a1f"),e.fruitLines.length*5),this.fruits=[],e.fruitLines.forEach((l,c)=>{let h=[0,-3,3][c%3];for(let d=0;d<5;d++){let u=e.pointAt(l+d*3,h);this.fruits.push({x:u.x,y:u.y+1.1,z:u.z,alive:!0,t:0})}}),this.fruitMesh.castShadow=!0,t.add(this.fruitMesh),this.bombGeo=new ye(0.55,14,12),this.bombMat=s("#20232a"),this.rocketGeo=new Re,this.tntGeo=new Jt(1.4,1.4,1.4),this.tntMat=new Kn({map:b_(),gradientMap:n}),this.rocketBody=new Le(0.22,0.22,1.4,10).rotateX(Math.PI/2),this.rocketNose=new En(0.22,0.5,10).rotateX(Math.PI/2).translate(0,0,0.95),this.rocketMat=s("#e8322b"),this.rocketNoseMat=s("#ffffff"),this.projectiles=[],this.crates=[],this.m=new $t,this.q=new Qe,this.s=new I,this.v=new I}roll(t,e,n){t.item=null,t.rolling=0.9,t.pending=S_(e,n)}use(t,e){let n=t.item;if(!n)return;t.item=null;let i=this.track,s=Math.sin(t.h),r=Math.cos(t.h);if(this.events.push({type:"use",item:n,kart:t}),n==="turbo")t.boost(3,1.7);else if(n==="shield")t.shieldTime=9;else if(n==="tnt"){let a=t.x-s*3,o=t.z-r*3,l=i.project(a,o,t.q.i,{}),c=new Mt(this.tntGeo,this.tntMat);c.castShadow=!0,c.position.set(a,l.y+0.7,o),c.rotation.y=t.h,this.scene.add(c),this.crates.push({x:a,y:l.y+0.7,z:o,mesh:c,life:35,owner:t,age:0})}else{let a;if(n==="bomb")a=new Mt(this.bombGeo,this.bombMat);else a=new Re,a.add(new Mt(this.rocketBody,this.rocketMat),new Mt(this.rocketNose,this.rocketNoseMat));a.traverse((c)=>{if(c.isMesh)c.castShadow=!0}),this.scene.add(a);let o=e.indexOf(t),l=n==="missile"?e[o-1]??null:null;this.projectiles.push({type:n,owner:t,target:l,mesh:a,age:0,life:n==="bomb"?3.5:6,s:t.q.i+t.q.f+2.5/i.ds,lat:t.q.lat,x:t.x,y:t.y+0.7,z:t.z,homing:!1,speed:Math.max(t.speed+18,n==="bomb"?46:54)})}}explode(t,e,n,i=!1){let s=this.fx;for(let r=0;r<(i?40:26);r++){let a=Math.random()*6.28,o=4+Math.random()*9;s.fire.emit(t,e+0.5,n,Math.cos(a)*o,Math.random()*8,Math.sin(a)*o,0.45+Math.random()*0.3,1.3,2,0.8,1.4,0.7+Math.random()*0.3,0.15)}for(let r=0;r<14;r++)s.smoke.emit(t,e+1,n,(Math.random()-0.5)*6,2+Math.random()*3,(Math.random()-0.5)*6,1.4,2.5,3,0.6,0.35,0.33,0.33);this.events.push({type:"boom",x:t,y:e,z:n})}update(t,e,n,i){let s=this.track;this.events.length=0;for(let r of this.boxes){if(!r.alive){if(r.t-=t,r.t<=0)r.alive=!0,r.mesh.visible=!0;continue}r.mesh.rotation.set(i*0.8+r.phase,i*1.3+r.phase,0),r.mesh.position.y=r.y+Math.sin(i*2.5+r.phase)*0.18;for(let a of e){if(a.respawnTimer>0)continue;if((a.x-r.x)**2+(a.z-r.z)**2<3.6&&Math.abs(a.y+0.8-r.y)<2.2){r.alive=!1,r.mesh.visible=!1,r.t=2.5;for(let o=0;o<12;o++)this.fx.spark.emit(r.x,r.y,r.z,(Math.random()-0.5)*8,Math.random()*6,(Math.random()-0.5)*8,0.5,0.5,0,1,1.4,1.2,0.4);if(!a.item&&!(a.rolling>0)){let o=n.indexOf(a)+1;this.roll(a,o,e.length),this.events.push({type:"box",kart:a})}break}}}this.fruits.forEach((r,a)=>{if(!r.alive){if(r.t-=t,r.t<=0)r.alive=!0}if(r.alive){for(let l of e)if(l.respawnTimer<=0&&(l.x-r.x)**2+(l.z-r.z)**2<3.2&&Math.abs(l.y+0.8-r.y)<2){r.alive=!1,r.t=7,l.fruit=Math.min(10,l.fruit+1),this.events.push({type:"fruit",kart:l});break}}let o=r.alive?1:0;this.q.setFromEuler(new Sn(0,i*2+a,0.3)),this.m.compose(this.v.set(r.x,r.y+Math.sin(i*3+a)*0.15,r.z),this.q,this.s.set(o,o,o)),this.fruitMesh.setMatrixAt(a,this.m)}),this.fruitMesh.instanceMatrix.needsUpdate=!0;for(let r of e)if(r.rolling>0){if(r.rolling-=t,r.rolling<=0)r.item=r.pending,r.pending=null,this.events.push({type:"got",kart:r})}for(let r=this.projectiles.length-1;r>=0;r--){let a=this.projectiles[r];a.age+=t;let o=a.age>a.life;if(a.type==="missile"&&a.target&&a.target.respawnTimer<=0&&!a.target.finished){let l=a.target.x-a.x,c=a.target.z-a.z,h=Math.hypot(l,c);if(h<35)a.homing=!0;if(a.homing){let d=Math.min(h,a.speed*t);a.x+=l/h*d,a.z+=c/h*d,a.y+=(a.target.y+0.7-a.y)*Math.min(1,t*6),a.mesh.rotation.set(0,Math.atan2(l,c),0)}}if(!a.homing){a.s+=a.speed*t/s.ds;let l=(Math.floor(a.s)%s.N+s.N)%s.N,c=s.pointAt(a.s,Math.max(-7,Math.min(7,a.lat)));a.x=c.x,a.z=c.z,a.y=c.y+(a.type==="bomb"?0.55:0.9),a.mesh.rotation.set(a.type==="bomb"?-a.age*18:0,Math.atan2(s.tx[l],s.tz[l]),0)}if(a.mesh.position.set(a.x,a.y,a.z),a.type==="missile")this.fx.fire.emit(a.x,a.y,a.z,0,0.5,0,0.25,0.6,0.8,0.7,1.3,0.75,0.2);else if(Math.random()<0.5)this.fx.spark.emit(a.x,a.y+0.6,a.z,0,2,0,0.3,0.35,0,1,2.5,1.8,0.6);for(let l of e){if(l===a.owner&&a.age<0.6||l.respawnTimer>0)continue;if((l.x-a.x)**2+(l.z-a.z)**2<5&&Math.abs(l.y+0.7-a.y)<2.2){l.hit(a.type),this.events.push({type:"hit",kart:l,by:a.owner,item:a.type}),o=!0;break}}if(o){if(a.type==="bomb"&&a.age>a.life){for(let l of e)if(l.respawnTimer<=0&&(l.x-a.x)**2+(l.z-a.z)**2<50){if(l.hit("bomb"))this.events.push({type:"hit",kart:l,by:a.owner,item:"bomb"})}}this.explode(a.x,a.y,a.z,a.type==="bomb"),this.scene.remove(a.mesh),this.projectiles.splice(r,1)}}for(let r=this.crates.length-1;r>=0;r--){let a=this.crates[r];a.life-=t,a.age+=t;let o=a.life<=0;for(let l of e){if(l===a.owner&&a.age<1||l.respawnTimer>0)continue;if((l.x-a.x)**2+(l.z-a.z)**2<3.6&&Math.abs(l.y+0.7-a.y)<2){if(l.hit("tnt"))this.events.push({type:"hit",kart:l,by:a.owner,item:"tnt"});o=!0;break}}if(o)this.explode(a.x,a.y,a.z,!0),this.scene.remove(a.mesh),this.crates.splice(r,1)}}clear(){for(let t of this.projectiles)this.scene.remove(t.mesh);for(let t of this.crates)this.scene.remove(t.mesh);this.projectiles=[],this.crates=[];for(let t of this.boxes)t.alive=!0,t.mesh.visible=!0;for(let t of this.fruits)t.alive=!0}}var Ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _n{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var T_=new Wi(-1,1,1,-1,0,1);class dd extends he{constructor(){super();this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}var E_=new dd;class Yi{constructor(t){this._mesh=new Mt(E_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ds extends _n{constructor(t,e="tDiffuse"){super();if(this.textureID=e,this.uniforms=null,this.material=null,t instanceof fe)this.uniforms=t.uniforms,this.material=t;else if(t)this.uniforms=An.clone(t.uniforms),this.material=new fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader});this._fsQuad=new Yi(this.material)}render(t,e,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(e),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ga extends _n{constructor(t,e){super();this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear)t.clear();if(t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear)t.clear();t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class dc extends _n{constructor(){super();this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ds(Ns),this.copyPass.material.blending=un,this.timer=new Ca}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);if(e!==-1)this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){if(this.timer.update(),t===void 0)t=this.timer.getDelta();let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(Ga!==void 0){if(r instanceof Ga)n=!0;else if(r instanceof dc)n=!1}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pc extends _n{constructor(t,e,n=null,i=null,s=null){super();this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ht}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha());if(this.clearAlpha!==null)s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)t.clearDepth();if(t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);if(t.render(this.scene,this.camera),this.clearColor!==null)t.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)t.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;t.autoClear=i}}var fd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zi extends _n{constructor(t,e=1,n,i){super();this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Te(s,r,{type:Fe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Te(s,r,{type:Fe,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Te(s,r,{type:Fe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let a=fd;this.highPassUniforms=An.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new fe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ut(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=An.clone(Ns.uniforms),this.blendMaterial=new fe({uniforms:this.copyUniforms,vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,premultipliedAlpha:!0,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new Xe,this._fsQuad=new Yi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let r=t.autoClear;if(t.autoClear=!1,t.setClearColor(this.clearColor,0),s)t.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=Zi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=Zi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[o];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)t.state.buffers.stencil.setTest(!0);if(this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else t.setRenderTarget(n),this._fsQuad.render(t);t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let r=0;r<t;r++)e.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<t;r+=2){let a=e[r],o=r+1<t?e[r+1]:0,l=a+o;i.push((r*a+(r+1)*o)/l),s.push(l)}return new fe({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ut(0.5,0.5)},direction:{value:new ut(0.5,0.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Zi.BlurDirectionX=new ut(1,0);Zi.BlurDirectionY=new ut(0,1);var xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class mc extends _n{constructor(){super();this.isOutputPass=!0,this.uniforms=An.clone(xr.uniforms),this.material=new dr({name:xr.name,uniforms:this.uniforms,vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this._fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping){if(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===oe)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Js)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Ks)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Qs)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Ri)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===tr)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===er)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===js)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(e),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $i{constructor(t,e,{additive:n=!1,gravity:i=0,drag:s=1}={}){this.max=t,this.gravity=i,this.drag=s,this.cursor=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.a0=new Float32Array(t);let r=this.geo=new he,a=(o,l)=>new be(o,l).setUsage(dl);r.setAttribute("position",a(this.pos,3)),r.setAttribute("aCol",a(this.col,3)),r.setAttribute("aSize",a(this.size,1)),r.setAttribute("aAlpha",a(this.alpha,1)),this.mesh=new va(r,new fe({transparent:!0,depthWrite:!1,blending:n?dn:Ai,uniforms:{uTex:{value:e},uScale:{value:600}},vertexShader:`
        attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uScale / max(-mv.z, 0.5); vA = aAlpha; vC = aCol; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        uniform sampler2D uTex; varying float vA; varying vec3 vC;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); }`})),this.mesh.frustumCulled=!1}emit(t,e,n,i,s,r,a,o,l,c,h=1,d=1,u=1){let p=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos.set([t,e,n],p*3),this.vel.set([i,s,r],p*3),this.col.set([h,d,u],p*3),this.life[p]=this.maxLife[p]=a,this.size[p]=o,this.grow[p]=l,this.a0[p]=c,this.alpha[p]=c}update(t){let e=Math.exp(-this.drag*t);for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;let i=n*3;this.vel[i]*=e,this.vel[i+1]=this.vel[i+1]*e-this.gravity*t,this.vel[i+2]*=e,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.size[n]+=this.grow[n]*t;let s=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=this.a0[n]*s*Math.min(1,(1-s)*8+0.3)}for(let n of["position","aCol","aSize","aAlpha"])this.geo.attributes[n].needsUpdate=!0}}var w_={uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSpeed, uBoost; varying vec2 vUv;
    void main(){
      vec2 c = vUv - 0.5; float r = length(c);
      float blur = (uSpeed * 0.01 + uBoost * 0.03) * smoothstep(0.15, 0.6, r);
      vec3 col = vec3(0.0);
      for (int i = 0; i < 6; i++) col += texture2D(tDiffuse, vUv - c * blur * float(i) / 5.0).rgb;
      col /= 6.0;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, 1.15);                       // a touch more saturation
      col *= mix(1.0, 1.0 - smoothstep(0.35, 0.95, r), 0.35); // soft vignette
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};function pd(t,e,n){let i=t.getDrawingBufferSize(new ut),s=new Te(i.x,i.y,{type:Fe,samples:4}),r=new fc(t,s);r.addPass(new pc(e,n)),r.addPass(new Ds({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(16.0)), 1.0); }`}));let a=new Zi(new ut(i.x,i.y),0.28,0.35,1.25);r.addPass(a);let o=new Ds(w_);return r.addPass(o),r.addPass(new mc),{composer:r,bloom:a,final:o}}class gc{constructor(){this.ctx=null,this.musicOn=!0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=0.8,this.master.connect(t.destination);let e=t.createDynamicsCompressor();e.connect(this.master),this.out=e,this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);let n=this.noise.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=Math.random()*2-1;this.eng=t.createGain(),this.eng.gain.value=0,this.engF=t.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=0.7,this.oscs=[];for(let[o,l,c]of[["triangle",1,0.5],["sine",2,0.25],["sawtooth",0.5,0.06]]){let h=t.createOscillator();h.type=o;let d=t.createGain();d.gain.value=c,h.connect(d),d.connect(this.engF),h.start(),this.oscs.push([h,l])}this.engF.connect(this.eng),this.eng.connect(this.out),this.skid=this.loop("bandpass",1500,3),this.wind=this.loop("lowpass",500,0.6),this.boostN=this.loop("bandpass",2200,1.4),this.music=t.createGain(),this.music.gain.value=0.55;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=5200;let s=t.createDelay(1);s.delayTime.value=0.49;let r=t.createGain();r.gain.value=0.22;let a=t.createGain();a.gain.value=0.18,this.music.connect(i),i.connect(this.master),i.connect(s),s.connect(r),r.connect(s),s.connect(a),a.connect(this.master),this.levels={music:this.analyser(i),engine:this.analyser(this.eng)},this.next=t.currentTime+0.1,this.step=0,setInterval(()=>this.schedule(),50)}analyser(t){let e=this.ctx.createAnalyser();return e.fftSize=2048,t.connect(e),e}rms(t){let e=this.levels?.[t];if(!e)return 0;let n=new Float32Array(e.fftSize);e.getFloatTimeDomainData(n);let i=0;for(let s of n)i+=s*s;return Math.sqrt(i/n.length)}loop(t,e,n){let i=this.ctx,s=i.createBufferSource();s.buffer=this.noise,s.loop=!0;let r=i.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=n;let a=i.createGain();return a.gain.value=0,s.connect(r),r.connect(a),a.connect(this.out),s.start(),{filter:r,gain:a}}update(t,e,n=31){if(!this.ctx)return;let i=this.ctx.currentTime,s=t?Math.abs(t.speed):0,r=Math.min(1.3,s/n),a=48+r*95+(t?.boostTime>0?15:0);for(let[o,l]of this.oscs)o.frequency.setTargetAtTime(a*l,i,0.06);this.engF.frequency.setTargetAtTime(260+r*650+(t?.throttleIn??0)*150,i,0.08),this.eng.gain.setTargetAtTime(e?0.01+(t?.throttleIn??0)*0.01:0,i,0.1),this.skid.gain.gain.setTargetAtTime(e&&t?.drifting&&!t.airborne?0.05:0,i,0.05),this.skid.filter.frequency.setTargetAtTime(1200+(t?.meter??0)*700,i,0.05),this.wind.gain.gain.setTargetAtTime(e?Math.min(0.05,s/900):0,i,0.1),this.boostN.gain.gain.setTargetAtTime(t?.boostTime>0?0.035:0,i,0.05),this.music.gain.setTargetAtTime(this.musicOn?0.55:0,i,0.3)}schedule(){let t=this.ctx,n=[[60,64,67,71],[57,60,64,67],[62,65,69,72],[55,59,62,65],[53,57,60,64],[52,55,59,62],[62,65,69,72],[55,60,62,67]],i=[[76,0,0,79,0,0,76,0,74,0,0,0,72,0,0,0],[72,0,0,76,0,0,79,0,81,0,79,0,76,0,0,0],[77,0,0,76,0,0,74,0,72,0,0,0,69,0,0,0],[71,0,0,74,0,0,77,0,76,0,74,0,0,0,0,0]];while(this.next<t.currentTime+0.25){let s=Math.floor(this.step/16)%n.length,r=this.step%16,a=n[s],o=this.next;if(this.musicOn){if(r===0)for(let c of a)this.keys(c,o,2.4456521739130435,0.045);if(r===8)for(let c of a.slice(1))this.keys(c+12,o,1.141304347826087,0.02);if(r===0||r===6||r===10)this.bass(a[0]-24+(r===10?7:0),o,0.16304347826086957*(r===0?5:3.5),0.22);let l=i[s%4][r];if(l&&s%8>=2)this.marimba(l,o,0.07);if(r%2===1)this.hat(o,0.02,7000);if(r===4||r===12)this.hat(o,0.035,2500);if(r===0||r===8)this.kick(o,0.18)}this.next+=0.16304347826086957,this.step++}}keys(t,e,n,i){let s=this.ctx,r=440*Math.pow(2,(t-69)/12),a=s.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(i,e+0.03),a.gain.exponentialRampToValueAtTime(i*0.4,e+0.6),a.gain.exponentialRampToValueAtTime(0.0001,e+n);for(let[o,l,c]of[[1,-4,1],[1,4,1],[2,0,0.25]]){let h=s.createOscillator(),d=s.createGain();h.type="sine",h.frequency.value=r*o,h.detune.value=l,d.gain.value=c,h.connect(d),d.connect(a),h.start(e),h.stop(e+n+0.05)}a.connect(this.music)}bass(t,e,n,i){let s=this.ctx,r=s.createOscillator(),a=s.createGain();r.type="sine",r.frequency.value=440*Math.pow(2,(t-69)/12),a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(i,e+0.02),a.gain.exponentialRampToValueAtTime(0.0001,e+n),r.connect(a),a.connect(this.music),r.start(e),r.stop(e+n+0.05)}tone(t,e,n,i,s,r){let a=this.ctx,o=a.createOscillator(),l=a.createGain(),c=a.createBiquadFilter();o.type=i,o.frequency.value=440*Math.pow(2,(t-69)/12),c.type="lowpass",c.frequency.value=r,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(s,e+0.01),l.gain.exponentialRampToValueAtTime(0.0001,e+n),o.connect(c),c.connect(l),l.connect(this.music),o.start(e),o.stop(e+n+0.05)}marimba(t,e,n){let i=this.ctx,s=440*Math.pow(2,(t-69)/12);for(let[r,a,o]of[[1,1,0.35],[4,0.25,0.08]]){let l=i.createOscillator(),c=i.createGain();l.type="sine",l.frequency.value=s*r,c.gain.setValueAtTime(n*a,e),c.gain.exponentialRampToValueAtTime(0.0001,e+o),l.connect(c),c.connect(this.music),l.start(e),l.stop(e+o+0.02)}}kick(t,e=0.3){let n=this.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(45,t+0.12),s.gain.setValueAtTime(e,t),s.gain.exponentialRampToValueAtTime(0.001,t+0.2),i.connect(s),s.connect(this.music),i.start(t),i.stop(t+0.25)}hat(t,e,n=8000){let i=this.ctx,s=i.createBufferSource(),r=i.createBiquadFilter(),a=i.createGain();s.buffer=this.noise,r.type="highpass",r.frequency.value=n,a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(0.001,t+0.05),s.connect(r),r.connect(a),a.connect(this.music),s.start(t,Math.random()),s.stop(t+0.06)}sfx(t,e=0){if(!this.ctx)return;let n=this.ctx,i=n.currentTime,s=(a,o,l,c,h)=>{let d=n.createOscillator(),u=n.createGain();d.type=a,d.frequency.setValueAtTime(o,i),d.frequency.exponentialRampToValueAtTime(l,i+c),u.gain.setValueAtTime(h,i),u.gain.exponentialRampToValueAtTime(0.001,i+c),d.connect(u),u.connect(this.out),d.start(i),d.stop(i+c+0.02)},r=(a,o,l,c,h,d=1)=>{let u=n.createBufferSource(),p=n.createBiquadFilter(),_=n.createGain();u.buffer=this.noise,p.type=a,p.Q.value=d,p.frequency.setValueAtTime(o,i),p.frequency.exponentialRampToValueAtTime(l,i+c),_.gain.setValueAtTime(h,i),_.gain.exponentialRampToValueAtTime(0.001,i+c),u.connect(p),p.connect(_),_.connect(this.out),u.start(i,Math.random()),u.stop(i+c+0.02)};switch(t){case"hop":s("sine",300,700,0.12,0.15);break;case"turbo":r("bandpass",600,3500+e*800,0.45,0.25+e*0.05,2),s("sawtooth",200+e*60,600+e*150,0.3,0.06);break;case"perfect":[0,4,7].forEach((a,o)=>setTimeout(()=>this.ctx&&s("triangle",880*Math.pow(2,a/12),880*Math.pow(2,a/12),0.15,0.12),o*60));break;case"fizzle":r("lowpass",1200,200,0.35,0.18);break;case"box":s("square",660,1320,0.12,0.08);break;case"tick":s("square",1200,1200,0.03,0.04);break;case"got":s("triangle",990,1980,0.18,0.12);break;case"fruit":s("sine",1400,2200,0.1,0.1);break;case"fire":r("bandpass",400,2400,0.4,0.3,1.5);break;case"boom":r("lowpass",1600,80,0.7,0.7),s("sine",120,35,0.5,0.5);break;case"hit":s("sawtooth",500,90,0.5,0.15);break;case"wall":r("lowpass",900,150,0.25,Math.min(0.5,0.1+e*0.02));break;case"shield":s("sine",500,1500,0.4,0.12);break;case"beep":s("square",e?1320:660,e?1320:660,e?0.6:0.2,0.15);break;case"land":r("lowpass",500,100,0.2,0.25);break;case"splash":r("bandpass",2000,300,0.8,0.4,0.8);break;case"lap":[0,4,7,12].forEach((a,o)=>setTimeout(()=>this.ctx&&s("triangle",660*Math.pow(2,a/12),660*Math.pow(2,a/12),0.18,0.12),o*90));break}}}var zt=(t)=>document.getElementById(t),Sr=3,A_={easy:0.84,medium:0.94,hard:1.02},ee={char:"mango",diff:"medium",music:!0,quality:"high"};try{Object.assign(ee,JSON.parse(localStorage.getItem("tiki-kart")||"{}"))}catch{}var Ji=()=>localStorage.setItem("tiki-kart",JSON.stringify(ee)),R_=()=>new Promise((t)=>requestAnimationFrame(()=>setTimeout(t,0))),C_=(t,e,n)=>t+(((e-t)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI)*n,_c=(t)=>{if(!isFinite(t))return"--:--.--";let e=Math.floor(t/60),n=t-e*60;return`${e}:${n<10?"0":""}${n.toFixed(2)}`},Mc=(t)=>t===1?"st":t===2?"nd":t===3?"rd":"th",ln=new sc({antialias:!1,powerPreference:"high-performance"}),_d=()=>ee.quality==="high"?Math.min(devicePixelRatio,1.5):0.85;ln.setPixelRatio(_d());ln.setSize(innerWidth,innerHeight);ln.toneMapping=Ri;ln.toneMappingExposure=1.15;ln.shadowMap.enabled=!0;ln.shadowMap.type=wi;document.body.prepend(ln.domElement);var In=new pa,sn=new Je(68,innerWidth/innerHeight,0.2,9000);In.add(new wa(13626111,13214315,1.6));var Hn=new Ra(16773590,2.6);Hn.castShadow=!0;Hn.shadow.mapSize.set(2048,2048);Object.assign(Hn.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:1,far:400});Hn.shadow.bias=-0.0006;Hn.shadow.normalBias=0.6;In.add(Hn,Hn.target);var ue=new gc,Q={state:"loading",karts:[],ais:[],player:null,time:0,raceTime:0,camMode:0,cam:{ang:0,y:0,fov:68},countdown:0,lastCount:4,firstGas:null,finishTimer:-1},Ee,ka,Va,Ki,yr,Mr,xn,vi,xc;async function I_(){let t=zt("loadbar"),e=zt("loadtext"),n=async(s,r)=>{t.style.width=s+"%",e.textContent=r,await R_()};await n(5,"Waxing the surfboards");try{await Promise.race([document.fonts.load('800 60px "Baloo 2"'),new Promise((s)=>setTimeout(s,2500))])}catch{}yr=rd(),Mr=Da(),Ee=new rc,await n(20,"Raising Tiki Island"),ka=new hc(Ee),In.add(ka.mesh),await n(45,"Planting palm trees"),Va=cd(In,Ee,ka,yr),await n(70,"Filling the item boxes");let i=nd();xn={smoke:new $i(700,i,{drag:1.5,gravity:-1.2}),dust:new $i(500,i,{drag:2.2,gravity:0.5}),fire:new $i(400,Mr,{additive:!0,drag:2,gravity:-3}),spark:new $i(300,Mr,{additive:!0,drag:1,gravity:9}),volcano:new $i(160,i,{drag:0.2,gravity:-2})};for(let s of Object.values(xn))In.add(s.mesh);Ki=new uc(In,Ee,yr,xn),xc=[];for(let s=0;s<Ee.N;s+=3)xc.push([Ee.px[s],Ee.pz[s]]);vi=pd(ln,In,sn),N_(),yd(),br(),await n(90,"Warming up engines"),Tc(0.016);try{await ln.compileAsync(In,sn)}catch{}await n(100,"Let's race!"),zt("loading").classList.add("hidden"),Tr(),requestAnimationFrame(wd)}var Xa=new Set;addEventListener("keydown",(t)=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(t.code))t.preventDefault();if(Xa.add(t.code),!t.repeat){if(["KeyE","KeyF","ControlLeft","ControlRight"].includes(t.code))Q.tapItem=!0;if(t.code==="ShiftLeft"||t.code==="ShiftRight")Q.tapBoost=!0;if(t.code==="Space")Q.tapDrift=!0;L_(t.code)}});addEventListener("keyup",(t)=>Xa.delete(t.code));addEventListener("blur",()=>Xa.clear());var Wa=null;function xd(){for(let t of navigator.getGamepads?.()||[])if(t&&t.connected)return t;return null}function vd(){if(Wa)return Wa;let t=(i)=>Xa.has(i),e={throttle:t("KeyW")||t("ArrowUp")?1:0,brake:t("KeyS")||t("ArrowDown")?1:0,steer:(t("KeyD")||t("ArrowRight")?1:0)-(t("KeyA")||t("ArrowLeft")?1:0),drift:t("Space"),boost:t("ShiftLeft")||t("ShiftRight"),item:t("KeyE")||t("ControlLeft")||t("ControlRight")||t("KeyF")},n=xd();if(n){let i=n.axes[0]||0;if(Math.abs(i)>0.15)e.steer=Math.sign(i)*(Math.abs(i)-0.15)/0.85;if(n.buttons[14]?.pressed)e.steer=-1;if(n.buttons[15]?.pressed)e.steer=1;e.throttle=Math.max(e.throttle,n.buttons[0]?.pressed?1:0,n.buttons[7]?.value||0),e.brake=Math.max(e.brake,n.buttons[6]?.value||0),e.drift||=!!n.buttons[5]?.pressed,e.boost||=!!n.buttons[4]?.pressed,e.item||=!!(n.buttons[1]?.pressed||n.buttons[2]?.pressed)}return e.boost||=!!Q.tapBoost,e.drift||=!!Q.tapDrift,e}var vr=[];function P_(){let t=xd(),e=zt("padstatus"),n=t?"Controller connected: "+t.id.replace(/\s*\(.*\)\s*$/,"").slice(0,40):"No controller detected — plug one in and press any button.";if(e.textContent!==n)e.textContent=n,e.classList.toggle("on",!!t);if(!t){vr=[];return}let i=t.buttons.map((l)=>l.pressed),s=(l)=>i[l]&&!vr[l],r=t.axes[0]||0,a=Math.abs(r)>0.6&&!(Math.abs(vr.ax||0)>0.6)?Math.sign(r):0,o=Q.state;if(o==="menu"){if(s(0)||s(9))Qi();let l=s(14)?-1:s(15)?1:a;if(l){let c=nn.findIndex((h)=>h.id===ee.char);ee.char=nn[(c+l+nn.length)%nn.length].id,Ji(),ti(),br()}}else if(o==="results"){if(s(0)||s(9))Qi();else if(s(1))Tr()}else if(o==="paused"){if(s(9)||s(1))Sc()}else if(o==="race"||o==="countdown"){if(s(1)||s(2))Q.tapItem=!0;if(s(4))Q.tapBoost=!0;if(s(5))Q.tapDrift=!0;if(s(9))Sd();if(s(8))bd();if(s(3))Q.camMode=(Q.camMode+1)%2}vr=i,vr.ax=r}function L_(t){let e=Q.state;if(t==="KeyM")ee.music=!ee.music,ue.musicOn=ee.music,Ji(),ti();if(e==="menu"){if(t==="Enter")Qi();if(t==="ArrowLeft"||t==="ArrowRight"){let n=nn.findIndex((i)=>i.id===ee.char);ee.char=nn[(n+(t==="ArrowLeft"?-1:1)+nn.length)%nn.length].id,Ji(),ti(),br()}return}if(e==="results"){if(t==="Enter")Qi();if(t==="Escape")Tr();return}if(e==="paused"){if(t==="Escape")Sc();return}if(t==="Escape")Sd();if(t==="KeyC")Q.camMode=(Q.camMode+1)%2;if(t==="KeyR")bd()}function N_(){zt("chars").innerHTML=nn.map((t)=>{let e=Oa[t.cls].stats;return`<button class="char" data-char="${t.id}" style="--c:${t.kart}"><span class="em">${t.emoji}</span><b>${t.name}</b><small>${Oa[t.cls].label}</small>
      ${Object.entries(e).map(([n,i])=>`<div class="stat"><em>${n.toUpperCase()}</em><i style="--v:${i*100}%"></i></div>`).join("")}</button>`}).join(""),document.querySelectorAll(".char").forEach((t)=>t.onclick=()=>{ee.char=t.dataset.char,Ji(),ti(),br()}),document.querySelectorAll("[data-diff]").forEach((t)=>t.onclick=()=>{ee.diff=t.dataset.diff,Ji(),ti()}),zt("optMusic").onclick=()=>{ue.start(),ee.music=!ee.music,ue.musicOn=ee.music,Ji(),ti()},zt("optQuality").onclick=()=>{ee.quality=ee.quality==="high"?"low":"high",Ji(),yd()},zt("go").onclick=()=>Qi(),document.querySelectorAll("[data-act]").forEach((t)=>t.onclick=()=>{let e=t.dataset.act;if(e==="resume")Sc();if(e==="restart")Qi();if(e==="menu")Tr()}),ti()}function ti(){document.querySelectorAll(".char").forEach((e)=>e.classList.toggle("sel",e.dataset.char===ee.char)),document.querySelectorAll("[data-diff]").forEach((e)=>e.classList.toggle("sel",e.dataset.diff===ee.diff));let t=nn.find((e)=>e.id===ee.char);zt("charname").textContent=`${t.emoji} ${t.name}`,zt("charblurb").textContent=t.blurb,zt("optMusic").textContent="Music: "+(ee.music?"ON":"OFF"),zt("optQuality").textContent="Graphics: "+ee.quality.toUpperCase()}function yd(){ln.setPixelRatio(_d()),ln.shadowMap.enabled=ee.quality==="high",Hn.castShadow=ee.quality==="high",Ad(),ti()}function Md(){for(let t of Q.karts)In.remove(t.obj);Q.karts=[],Q.ais=[],Q.player=null,Q.playerAI=null}function br(){if(Q.state!=="menu"&&Q.state!=="loading")return;Md();let t=nn.find((n)=>n.id===ee.char),e=new Ba(t,yr,Mr,!0);e.place(Ee,Ee.finishIdx-3,0),In.add(e.obj),Q.karts=[e],Q.player=e}function Tr(){Q.state="menu",["pause","results"].forEach((t)=>zt(t).classList.add("hidden")),zt("menu").classList.remove("hidden"),zt("hud").classList.add("hidden"),Ki?.clear(),br(),ti()}function Qi(){ue.start(),ue.musicOn=ee.music,Md(),Ki.clear(),["menu","pause","results"].forEach((r)=>zt(r).classList.add("hidden"));let t=nn.find((r)=>r.id===ee.char),n=[...nn.filter((r)=>r!==t),t],i=Ee.finishIdx,s=A_[ee.diff];n.forEach((r,a)=>{let o=r===t,l=new Ba(r,yr,Mr,o),c=Math.floor(a/2),h=a%2?3.4:-3.4;if(l.place(Ee,i-4-c*5,h),In.add(l.obj),Q.karts.push(l),o)Q.player=l;else Q.ais.push(new za(l,Ee,{skill:s*(0.95+0.1*(a*37%10)/10),lane:h*0.4,seed:a+1}))}),Q.state="countdown",Q.countdown=3.999,Q.lastCount=4,Q.firstGas=null,Q.raceTime=0,Q.finishTimer=-1,Q.lapStart=0,Q.bestLap=null,Q.cam={ang:Q.player.h,y:Q.player.y+2.5,fov:68},zt("hud").classList.remove("hidden"),zt("msg").classList.remove("show"),zt("count").textContent=""}function Sd(){Q.prev=Q.state,Q.state="paused",zt("pause").classList.remove("hidden")}function Sc(){Q.state=Q.prev,zt("pause").classList.add("hidden")}function bd(){let t=Q.player;if(Q.state!=="race"||!t||t.finished||t.respawnTimer>0)return;t.respawnTimer=0.8,t.respawnIdx=t.q.i,Us("RESCUE!",0.8)}var vc=0;function Us(t,e=1.6){let n=zt("msg");n.textContent=t,n.classList.add("show"),vc=e}function xi(t,e="#fff"){let n=zt("pop");n.textContent=t,n.style.color=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}function bc(){return[...Q.karts].sort((t,e)=>{if(t.finished&&e.finished)return t.finishTime-e.finishTime;if(t.finished)return-1;if(e.finished)return 1;return e.progress-t.progress})}function md(t){let e=t===Q.player;for(let n of t.events)if(n.type==="turbo"){for(let i=0;i<2;i++){let s=t.exhaustWorld(i);for(let r=0;r<4;r++)xn.fire.emit(s.x,s.y,s.z,(Math.random()-0.5)*3,1+Math.random()*2,(Math.random()-0.5)*3,0.3,0.5,1,0.7,0.5,0.8,1.6)}if(e){if(ue.sfx("turbo",n.n),xi(n.perfect?`PERFECT TURBO ×${n.n}!`:`TURBO ×${n.n}`,n.perfect?"#ffd23f":"#8fe3ff"),n.perfect)ue.sfx("perfect")}}else if(n.type==="fizzle"&&e)ue.sfx("fizzle"),xi("TOO EARLY!","#ff6b6b");else if(n.type==="hop"&&e)ue.sfx("hop");else if(n.type==="pad"&&e)ue.sfx("turbo",2),xi("BOOST!","#8fe3ff");else if(n.type==="hangtime"){if(e)xi(`HANG TIME ${n.t.toFixed(1)}s!`,"#ffd23f"),ue.sfx("turbo",1)}else if(n.type==="wall"&&e)ue.sfx("wall",n.v);else if(n.type==="fall"){if(e)ue.sfx("splash"),Us("SPLASH!",1.2);for(let i=0;i<30;i++)xn.dust.emit(t.x,Math.max(0,t.y),t.z,(Math.random()-0.5)*8,4+Math.random()*6,(Math.random()-0.5)*8,1,1.4,2,0.8,0.85,0.95,1)}else if(n.type==="hit"){if(e)ue.sfx("hit"),Us(n.kind==="tnt"?"KA-BOOM!":"OUCH!",1)}else if(n.type==="shieldpop"&&e)ue.sfx("shield"),xi("SHIELD SAVED YOU!","#8fe3ff")}function yc(t){if(Q.state!=="race")return;Q.raceTime+=t;let e=Q.player,n=bc(),i=e.finished&&Q.playerAI?Q.playerAI.input(t,Q.karts,0,Q.raceTime):vd();e.throttleIn=i.throttle;let s=i.item&&!Q.itemPrev||Q.tapItem;if(Q.itemPrev=i.item,Q.tapItem=Q.tapBoost=Q.tapDrift=!1,e.update(t,i,Ee),md(e),s&&e.item&&!e.finished)Ki.use(e,n);for(let r of Q.ais){let a=r.k,o=r.input(t,Q.karts,a.finished?-400:e.progress-a.progress,Q.raceTime);if(a.throttleIn=o.throttle,a.update(t,o,Ee),md(a),o.item&&a.item)Ki.use(a,n)}hd(Q.karts,(r,a,o)=>{if((r===e||a===e)&&o>4)ue.sfx("wall",o*0.5)}),Ki.update(t,Q.karts,n,Q.time);for(let r of Ki.events)if(r.type==="box"&&r.kart===e)ue.sfx("box");else if(r.type==="got"&&r.kart===e)ue.sfx("got");else if(r.type==="fruit"&&r.kart===e){if(ue.sfx("fruit"),e.fruit===10)xi("10 FRUIT — TOP SPEED UP!","#ff8a1f")}else if(r.type==="use"&&(r.kart===e||D_(r.kart,e)<60))ue.sfx(r.item==="shield"?"shield":r.item==="turbo"?"turbo":"fire",3);else if(r.type==="boom"&&Math.hypot(r.x-e.x,r.z-e.z)<90)ue.sfx("boom");else if(r.type==="hit"&&r.by===e&&r.kart!==e)xi(`HIT ${r.kart.name}!`,"#ffd23f");U_()}var D_=(t,e)=>Math.hypot(t.x-e.x,t.z-e.z);function U_(){let t=Q.player;for(let e of Q.karts){if(!e.lapEvent)continue;if(e.lapEvent=!1,e.lap>Sr&&!e.finished){if(e.finished=!0,e.finishTime=Q.raceTime,e===t){let n=bc().indexOf(t)+1;Q.playerAI=new za(t,Ee,{skill:0.8}),Q.finishTimer=3.2,Us(n===1?"\uD83C\uDFC6 YOU WIN!":`${n}${Mc(n).toUpperCase()} PLACE!`,3),ue.sfx("lap"),zt("fade").style.opacity=0.5,setTimeout(()=>zt("fade").style.opacity=0,140)}continue}if(e===t&&e.lap>1){let n=Q.raceTime-Q.lapStart;if(Q.lapStart=Q.raceTime,!Q.bestLap||n<Q.bestLap)Q.bestLap=n;Us(e.lap===Sr?"FINAL LAP!":`LAP ${e.lap}`,1.8),ue.sfx("lap")}}}function F_(){Q.state="results",zt("hud").classList.add("hidden");let t=Q.player,e=Sr*Ee.length,n=(a)=>a.finished?a.finishTime:Q.raceTime+Math.max(0,e-a.progress)/Math.max(a.speed,22),i=Q.karts.map((a)=>({k:a,t:n(a)})).sort((a,o)=>a.t-o.t),s=i.findIndex((a)=>a.k===t)+1;zt("restitle").textContent=s===1?"\uD83C\uDFC6 VICTORY!":`${s}${Mc(s).toUpperCase()} PLACE`,zt("resbody").innerHTML=i.map((a,o)=>`<div class="res ${a.k===t?"me":""}" style="--c:${a.k.ch.kart}"><b>${o+1}</b><span class="em">${a.k.ch.emoji}</span><span>${a.k===t?"YOU ("+a.k.ch.name+")":a.k.ch.name}</span><span>${_c(a.t)}</span></div>`).join("")+`<div style="text-align:center;margin-top:10px;font-weight:600">Best lap ${_c(Q.bestLap??NaN)}</div>`,zt("results").classList.remove("hidden");let r=Number(localStorage.getItem("tiki.best."+ee.diff)||0);if(s===1&&(!r||Q.raceTime<r))localStorage.setItem("tiki.best."+ee.diff,Q.raceTime.toFixed(2));localStorage.setItem("tiki.wins",String(Number(localStorage.getItem("tiki.wins")||0)+(s===1?1:0)))}function Td(t,e){if(t.respawnTimer>0)return;let n=Math.sin(t.h),i=Math.cos(t.h),s=t.drifting&&t.meter>=0.7&&!t.driftFailed,r=t.drifting?0.8:t.throttleIn>0?0.12:0.04;for(let a=0;a<2;a++)if(Math.random()<r){let o=t.exhaustWorld(a),l=s?0.08:t.driftFailed?0.5:0.95;xn.smoke.emit(o.x,o.y,o.z,-n*2+(Math.random()-0.5),1.5+Math.random(),-i*2+(Math.random()-0.5),0.6,t.drifting?0.6:0.3,t.drifting?1.6:0.9,s?0.85:t.drifting?0.45:0.22,l,l,l)}if(t.drifting&&!t.airborne){for(let a of[-1,1])if(Math.random()<0.8){let o=t.x-n*1+-i*a*0.95,l=t.z-i*1+n*a*0.95;xn.dust.emit(o,t.y+0.2,l,(Math.random()-0.5)*2-n*3,1+Math.random(),(Math.random()-0.5)*2-i*3,0.8,0.8,2.2,0.5,0.95,0.8,0.6)}}if(t.boostTime>0){for(let a=0;a<2;a++)if(Math.random()<0.5){let o=t.exhaustWorld(a);xn.fire.emit(o.x,o.y,o.z,-n*6,0.5,-i*6,0.15,0.3,0.3,0.6,0.45,0.75,1.5)}}if(t.spinTime>0&&Math.random()<0.5)xn.spark.emit(t.x,t.y+1.6,t.z,(Math.random()-0.5)*3,3,(Math.random()-0.5)*3,0.5,0.5,0,1,2.5,2.3,0.6)}function Tc(t){let e=Q.player;if(!e)return;if(Q.state==="menu"||Q.state==="loading"){let h=Q.time*0.25+1;sn.position.set(e.x+Math.sin(h)*6.2,e.y+2.2,e.z+Math.cos(h)*6.2),sn.lookAt(e.x,e.y+1.1,e.z),sn.fov=50,sn.updateProjectionMatrix();return}let n=Q.cam,i=e.h+(e.drifting?e.yawOff*0.35:0);n.ang=C_(n.ang,i,1-Math.exp(-t*(e.airborne?2:5)));let s=Q.camMode===1,r=(s?8:5.6)+Math.max(0,e.speed)*0.035,a=e.x-Math.sin(n.ang)*r,o=e.z-Math.cos(n.ang)*r;n.y+=(e.y+(s?3.4:2.3)-n.y)*(1-Math.exp(-t*5));let l=Math.max(ka.height(a,o),Ee.project(a,o,e.q.i,{}).y)+1;sn.position.set(a,Math.max(n.y,l),o),sn.lookAt(e.x+Math.sin(e.h)*4,e.y+1.2,e.z+Math.cos(e.h)*4);let c=66+Math.max(0,e.speed)*0.25+(e.boostTime>0?8:0);n.fov+=(c-n.fov)*(1-Math.exp(-t*4)),sn.fov=n.fov,sn.updateProjectionMatrix()}function O_(){let t=zt("minimap").getContext("2d"),i=Q.player;t.clearRect(0,0,400,400);let s=0.62,r=200,a=208;t.lineJoin=t.lineCap="round";for(let[l,c]of[[22,"#0b3b5f99"],[12,"#fff"]])t.lineWidth=l,t.strokeStyle=c,t.beginPath(),xc.forEach(([h,d],u)=>{let p=r+h*s,_=a+d*s;u?t.lineTo(p,_):t.moveTo(p,_)}),t.closePath(),t.stroke();let o=Ee.finishIdx;t.fillStyle="#ffd23f",t.beginPath(),t.arc(r+Ee.px[o]*s,a+Ee.pz[o]*s,8,0,7),t.fill();for(let l of Q.karts){if(l===i)continue;t.fillStyle=l.ch.kart,t.strokeStyle="#fff",t.lineWidth=3,t.beginPath(),t.arc(r+l.x*s,a+l.z*s,9,0,7),t.fill(),t.stroke()}t.save(),t.translate(r+i.x*s,a+i.z*s),t.rotate(-i.h+Math.PI),t.fillStyle=i.ch.kart,t.strokeStyle="#fff",t.lineWidth=4,t.beginPath(),t.moveTo(0,-16),t.lineTo(12,12),t.lineTo(0,6),t.lineTo(-12,12),t.closePath(),t.fill(),t.stroke(),t.restore()}function Ed(){let t=Q.player,e=bc(),n=e.indexOf(t)+1;zt("lap").textContent=`${Math.max(1,Math.min(Sr,t.lap))}/${Sr}`,zt("time").textContent=_c(Q.raceTime),zt("fruitn").textContent=t.fruit,zt("pos").textContent=n,zt("possuf").textContent=Mc(n),zt("kmh").textContent=Math.round(Math.abs(t.speed)*3.6);let i=zt("itembox");if(t.rolling>0){let r=Object.keys(Ha);if(zt("itemicon").textContent=Ha[r[Math.floor(Q.time*14)%r.length]],zt("itemname").textContent="",i.classList.add("roll"),Math.floor(Q.time*14)!==Q.lastTick)Q.lastTick=Math.floor(Q.time*14),ue.sfx("tick")}else i.classList.remove("roll"),zt("itemicon").innerHTML=t.item?Ha[t.item]:'<span style="opacity:.25;font-size:46px">?</span>',zt("itemname").textContent=t.item?ud[t.item]:"";let s=zt("meter");s.classList.toggle("on",t.drifting),s.classList.toggle("hot",t.meter>=0.7&&!t.driftFailed),zt("meterfill").style.width=(t.meter*100).toFixed(1)+"%",zt("turbos").textContent=t.drifting?"\uD83D\uDD25".repeat(t.boosts):"",zt("standings").innerHTML=e.map((r,a)=>`<div class="${r===t?"me":""}" style="--c:${r.ch.kart}">${a+1}. ${r.ch.emoji} ${r===t?"YOU":r.ch.name}<em>${r.finished?"\uD83C\uDFC1":""}</em></div>`).join(""),O_()}var gd=performance.now();function wd(t){requestAnimationFrame(wd);let e=Math.min(0.05,(t-gd)/1000);gd=t,Q.time+=e,P_();let n=Q.player,i=Q.state==="race"||Q.state==="countdown";if(Q.state==="countdown"){Q.countdown-=e;let s=vd();if(n.throttleIn=s.throttle,s.throttle&&Q.firstGas===null)Q.firstGas=Q.countdown;let r=Math.ceil(Q.countdown);if(r!==Q.lastCount){Q.lastCount=r;let a=zt("count");if(a.textContent=r>0?String(r):"GO!",a.classList.remove("pop"),a.offsetWidth,a.classList.add("pop"),ue.sfx("beep",r<=0?1:0),r<=0){if(Q.state="race",Q.firstGas!==null&&Q.firstGas<0.5)n.boost(2,1),xi("ROCKET START!","#ffd23f"),ue.sfx("turbo",2);for(let o of Q.ais)if(Math.random()<0.5*o.skill)o.k.boost(1,0.7)}}}if(Q.state==="race"&&!Q.freeze){let s=Math.max(1,Math.ceil(e/0.008333333333333333));for(let r=0;r<s;r++)yc(e/s);if(n.wrongWay>1.2&&!n.finished)Us("WRONG WAY!",0.3);if(Q.finishTimer>0&&(Q.finishTimer-=e)<=0)F_()}if(Q.state!=="paused"&&!Q.freeze){for(let s of Q.karts)if(s.syncObj(e,Q.time),Q.state==="race")Td(s,e);if(Math.random()<0.5){let s=Va.volcanoTop;xn.volcano.emit(s.x+(Math.random()-0.5)*14,s.y,s.z+(Math.random()-0.5)*14,1.5+Math.random(),4+Math.random()*3,Math.random()-0.5,9,20,16,0.5,0.75,0.72,0.72)}for(let s of Object.values(xn))s.update(e);if(Q.state==="menu"||i)Tc(e);Va.updaters.forEach((s)=>s(Q.time))}if(i)Ed();if(vc>0&&(vc-=e)<=0)zt("msg").classList.remove("show");if(ue.update(n,i,n?.top),n)Hn.position.set(n.x+Ls.x*150,n.y+Ls.y*150,n.z+Ls.z*150),Hn.target.position.set(n.x,n.y,n.z);Va.sky.position.copy(sn.position),vi.final.uniforms.uSpeed.value=i&&n?Math.max(0,(n.speed-20)/20):0,vi.final.uniforms.uBoost.value+=((n?.boostTime>0&&i?1:0)-vi.final.uniforms.uBoost.value)*Math.min(1,e*6),vi.composer.render(e)}function Ad(){if(ln.setSize(innerWidth,innerHeight),sn.aspect=innerWidth/innerHeight,sn.updateProjectionMatrix(),vi)vi.composer.setPixelRatio(ln.getPixelRatio()),vi.composer.setSize(innerWidth,innerHeight)}addEventListener("resize",Ad);window.__game={G:Q,settings:ee,startRace:Qi,enterMenu:Tr,camera:sn,audio:ue,get track(){return Ee},advance(t,e={}){if(Q.state==="countdown")Q.state="race",zt("count").textContent="";Wa={throttle:0,brake:0,steer:0,drift:!1,boost:!1,item:!1,...e};for(let n=0;n<t;n+=0.016666666666666666){yc(0.008333333333333333),yc(0.008333333333333333);for(let i of Q.karts)i.syncObj(0.016666666666666666,Q.time),Td(i,0.016666666666666666);for(let i of Object.values(xn))i.update(0.016666666666666666);Tc(0.016666666666666666),Q.time+=0.016666666666666666}Wa=null,Ed()}};I_().catch((t)=>{console.error(t),zt("loadtext").textContent="Error: "+t.message});
