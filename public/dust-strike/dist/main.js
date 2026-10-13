var Zh="186";var Jh=0,$o=1,Kh=2;var Wi=1,jh=2,Ps=3,Ls=0,Ye=1,Nn=2,Dn=0,Xi=1,ei=2,Zo=3,Jo=4,Qh=5;var Ns=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,lu=204,cu=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,xu=214,yu=0,vu=1,Su=2,Ko=3,Mu=4,bu=5,Tu=6,Eu=7,wu=0,Au=1,Cu=2,Mn=0,jo=1,Qo=2,tl=3,gr=4,el=5,nl=6,il=7;var Ds=301,qi=302,Ra=303,Ia=304,_r=306,Pa=1000,La=1001,Ru=1002,Mi=1003,Iu=1004;var xr=1005;var rn=1006,Na=1007;var Yi=1008;var bn=1009,Pu=1010,Lu=1011,yr=1012,sl=1013,bi=1014,ni=1015,Un=1016,rl=1017,al=1018,Us=1020,Nu=35902,Du=35899,Uu=1021,Fu=1022,Fn=1023,$i=1026,Zi=1027,Ou=1028,ol=1029,Ji=1030,ll=1031;var cl=1033,Da=33776,Ua=33777,Fa=33778,Oa=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,_l=37488,xl=37489,Ba=37490,yl=37491,vl=37808,Sl=37809,Ml=37810,bl=37811,Tl=37812,El=37813,wl=37814,Al=37815,Cl=37816,Rl=37817,Il=37818,Pl=37819,Ll=37820,Nl=37821,Dl=36492,Ul=36494,Fl=36495,Ol=36283,Bl=36284,za=36285,zl=36286;var kl=0,Bu=1,Ki="",Fs="srgb",Hl="srgb-linear",Gl="linear",fe="srgb";var zu=512,ku=513,Hu=514,ka=515,Gu=516,Vu=517,Ha=518,Wu=519;var vr=35048;var Vl="300 es",Wl=2000;function Uf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ff(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function fr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xu(){let t=fr("canvas");return t.style.display="block",t}var xh={},Is=null;function pr(...t){let e="THREE."+t.shift();if(Is)Is("log",e,...t);else console.log(e,...t)}function qu(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ot(...t){t=qu(t);let e="THREE."+t.shift();if(Is)Is("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=qu(t);let e="THREE."+t.shift();if(Is)Is("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Vi(...t){let e=t.join(" ");if(e in xh)return;xh[e]=!0,Ot(...t)}function Yu(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var $u={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class ii{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mo=Math.PI/180,Ea=180/Math.PI;function Si(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[t&255]+We[t>>8&255]+We[t>>16&255]+We[t>>24&255]+"-"+We[e&255]+We[e>>8&255]+"-"+We[e>>16&15|64]+We[e>>24&255]+"-"+We[n&63|128]+We[n>>8&255]+"-"+We[n>>16&255]+We[n>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function Of(t,e){return(t%e+e)%e}function bo(t,e,n){return(1-n)*t+n*e}function Ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function ue(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class Ht{static{Ht.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class si{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],c=n[i+1],l=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],f=s[r+2],g=s[r+3];if(h!==g||o!==d||c!==u||l!==f){let T=o*d+c*u+l*f+h*g;if(T<0)d=-d,u=-u,f=-f,g=-g,T=-T;let m=1-a;if(T<0.9995){let p=Math.acos(T),C=Math.sin(p);m=Math.sin(m*p)/C,a=Math.sin(a*p)/C,o=o*m+d*a,c=c*m+u*a,l=l*m+f*a,h=h*m+g*a}else{o=o*m+d*a,c=c*m+u*a,l=l*m+f*a,h=h*m+g*a;let p=1/Math.sqrt(o*o+c*c+l*l+h*h);o*=p,c*=p,l*=p,h*=p}}t[e]=o,t[e+1]=c,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],c=n[i+2],l=n[i+3],h=s[r],d=s[r+1],u=s[r+2],f=s[r+3];return t[e]=a*f+l*h+o*u-c*d,t[e+1]=o*f+l*d+c*h-a*u,t[e+2]=c*f+l*u+a*d-o*h,t[e+3]=l*f-a*h-o*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,a=Math.cos,o=Math.sin,c=a(n/2),l=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=d*l*h+c*u*f,this._y=c*u*h-d*l*f,this._z=c*l*f+d*u*h,this._w=c*l*h-d*u*f;break;case"YXZ":this._x=d*l*h+c*u*f,this._y=c*u*h-d*l*f,this._z=c*l*f-d*u*h,this._w=c*l*h+d*u*f;break;case"ZXY":this._x=d*l*h-c*u*f,this._y=c*u*h+d*l*f,this._z=c*l*f+d*u*h,this._w=c*l*h-d*u*f;break;case"ZYX":this._x=d*l*h-c*u*f,this._y=c*u*h+d*l*f,this._z=c*l*f-d*u*h,this._w=c*l*h+d*u*f;break;case"YZX":this._x=d*l*h+c*u*f,this._y=c*u*h+d*l*f,this._z=c*l*f-d*u*h,this._w=c*l*h-d*u*f;break;case"XZY":this._x=d*l*h-c*u*f,this._y=c*u*h-d*l*f,this._z=c*l*f+d*u*h,this._w=c*l*h+d*u*f;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(l-o)*u,this._y=(s-c)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(l-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+c)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-c)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+l)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+c)/u,this._y=(o+l)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=e._x,o=e._y,c=e._z,l=e._w;return this._x=n*l+r*a+i*c-s*o,this._y=i*l+r*o+s*a-n*c,this._z=s*l+r*c+n*o-i*a,this._w=r*l-n*a-i*o-s*c,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,e=Math.sin(e*c)/l,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{static{B.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,o=t.w,c=2*(r*i-a*n),l=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*c+r*h-a*l,this.y=n+o*l+a*c-s*h,this.z=i+o*h+s*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,r=e.x,a=e.y,o=e.z;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var To=new B,yh=new si;class zt{static{zt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,c){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,c)}set(t,e,n,i,s,r,a,o,c){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=s,l[5]=o,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],c=n[1],l=n[4],h=n[7],d=n[2],u=n[5],f=n[8],g=i[0],T=i[3],m=i[6],p=i[1],C=i[4],A=i[7],v=i[2],M=i[5],E=i[8];return s[0]=r*g+a*p+o*v,s[3]=r*T+a*C+o*M,s[6]=r*m+a*A+o*E,s[1]=c*g+l*p+h*v,s[4]=c*T+l*C+h*M,s[7]=c*m+l*A+h*E,s[2]=d*g+u*p+f*v,s[5]=d*T+u*C+f*M,s[8]=d*m+u*A+f*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],c=t[7],l=t[8];return e*r*l-e*a*c-n*s*l+n*a*o+i*s*c-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],c=t[7],l=t[8],h=l*r-a*c,d=a*o-l*s,u=c*s-r*o,f=e*h+n*d+i*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return t[0]=h*g,t[1]=(i*c-l*n)*g,t[2]=(a*n-i*r)*g,t[3]=d*g,t[4]=(l*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=u*g,t[7]=(n*o-c*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),c=Math.sin(s);return this.set(n*o,n*c,-n*(o*r+c*a)+r+t,-i*c,i*o,-i*(-c*r+o*a)+a+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Eo=new zt,vh=new zt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Sh=new zt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Bf(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:vh,fromXYZ:Sh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:vh,fromXYZ:Sh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var $t=Bf();function Qn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Rs(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var us;class Xl{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(us===void 0)us=fr("canvas");us.width=t.width,us.height=t.height;let i=us.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Qn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Qn(e[n]/255)*255);else e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var zf=0;class Sr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(wo(i[r].image));else s.push(wo(i[r]))}else s=wo(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function wo(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Xl.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ot("Texture: Unable to serialize Texture."),{}}var kf=0,Ao=new B;class ze extends ii{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,c=ze.DEFAULT_ANISOTROPY,l=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Si(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ao).x}get height(){return this.source.getSize(Ao).y}get depth(){return this.source.getSize(Ao).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=300;ze.DEFAULT_ANISOTROPY=1;class ve{static{ve.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,c=o[0],l=o[4],h=o[8],d=o[1],u=o[5],f=o[9],g=o[2],T=o[6],m=o[10];if(Math.abs(l-d)<0.01&&Math.abs(h-g)<0.01&&Math.abs(f-T)<0.01){if(Math.abs(l+d)<0.1&&Math.abs(h+g)<0.1&&Math.abs(f+T)<0.1&&Math.abs(c+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,A=(u+1)/2,v=(m+1)/2,M=(l+d)/4,E=(h+g)/4,w=(f+T)/4;if(C>A&&C>v)if(C<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(C),i=M/n,s=E/n;else if(A>v)if(A<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(A),n=M/i,s=w/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=E/s,i=w/s;return this.set(n,i,s,e),this}let p=Math.sqrt((T-f)*(T-f)+(h-g)*(h-g)+(d-l)*(d-l));if(Math.abs(p)<0.001)p=1;return this.x=(T-f)/p,this.y=(h-g)/p,this.z=(d-l)/p,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends ii{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new ze(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Sr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends ql{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Ga extends ze{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yl extends ze{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class re{static{re.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,c,l,h,d,u,f,g,T){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,c,l,h,d,u,f,g,T)}set(t,e,n,i,s,r,a,o,c,l,h,d,u,f,g,T){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=c,m[6]=l,m[10]=h,m[14]=d,m[3]=u,m[7]=f,m[11]=g,m[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ds.setFromMatrixColumn(t,0).length(),s=1/ds.setFromMatrixColumn(t,1).length(),r=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),c=Math.sin(i),l=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*l,u=r*h,f=a*l,g=a*h;e[0]=o*l,e[4]=-o*h,e[8]=c,e[1]=u+f*c,e[5]=d-g*c,e[9]=-a*o,e[2]=g-d*c,e[6]=f+u*c,e[10]=r*o}else if(t.order==="YXZ"){let d=o*l,u=o*h,f=c*l,g=c*h;e[0]=d+g*a,e[4]=f*a-u,e[8]=r*c,e[1]=r*h,e[5]=r*l,e[9]=-a,e[2]=u*a-f,e[6]=g+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*l,u=o*h,f=c*l,g=c*h;e[0]=d-g*a,e[4]=-r*h,e[8]=f+u*a,e[1]=u+f*a,e[5]=r*l,e[9]=g-d*a,e[2]=-r*c,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*l,u=r*h,f=a*l,g=a*h;e[0]=o*l,e[4]=f*c-u,e[8]=d*c+g,e[1]=o*h,e[5]=g*c+d,e[9]=u*c-f,e[2]=-c,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*c,f=a*o,g=a*c;e[0]=o*l,e[4]=g-d*h,e[8]=f*h+u,e[1]=h,e[5]=r*l,e[9]=-a*l,e[2]=-c*l,e[6]=u*h+f,e[10]=d-g*h}else if(t.order==="XZY"){let d=r*o,u=r*c,f=a*o,g=a*c;e[0]=o*l,e[4]=-h,e[8]=c*l,e[1]=d*h+g,e[5]=r*l,e[9]=u*h-f,e[2]=f*h-u,e[6]=a*l,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Gf)}lookAt(t,e,n){let i=this.elements;if(ln.subVectors(t,e),ln.lengthSq()===0)ln.z=1;if(ln.normalize(),gi.crossVectors(n,ln),gi.lengthSq()===0){if(Math.abs(n.z)===1)ln.x+=0.0001;else ln.z+=0.0001;ln.normalize(),gi.crossVectors(n,ln)}return gi.normalize(),jr.crossVectors(ln,gi),i[0]=gi.x,i[4]=jr.x,i[8]=ln.x,i[1]=gi.y,i[5]=jr.y,i[9]=ln.y,i[2]=gi.z,i[6]=jr.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],c=n[12],l=n[1],h=n[5],d=n[9],u=n[13],f=n[2],g=n[6],T=n[10],m=n[14],p=n[3],C=n[7],A=n[11],v=n[15],M=i[0],E=i[4],w=i[8],_=i[12],S=i[1],z=i[5],I=i[9],O=i[13],J=i[2],L=i[6],G=i[10],R=i[14],P=i[3],et=i[7],V=i[11],q=i[15];return s[0]=r*M+a*S+o*J+c*P,s[4]=r*E+a*z+o*L+c*et,s[8]=r*w+a*I+o*G+c*V,s[12]=r*_+a*O+o*R+c*q,s[1]=l*M+h*S+d*J+u*P,s[5]=l*E+h*z+d*L+u*et,s[9]=l*w+h*I+d*G+u*V,s[13]=l*_+h*O+d*R+u*q,s[2]=f*M+g*S+T*J+m*P,s[6]=f*E+g*z+T*L+m*et,s[10]=f*w+g*I+T*G+m*V,s[14]=f*_+g*O+T*R+m*q,s[3]=p*M+C*S+A*J+v*P,s[7]=p*E+C*z+A*L+v*et,s[11]=p*w+C*I+A*G+v*V,s[15]=p*_+C*O+A*R+v*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],c=t[13],l=t[2],h=t[6],d=t[10],u=t[14],f=t[3],g=t[7],T=t[11],m=t[15],p=o*u-c*d,C=a*u-c*h,A=a*d-o*h,v=r*u-c*l,M=r*d-o*l,E=r*h-a*l;return e*(g*p-T*C+m*A)-n*(f*p-T*v+m*M)+i*(f*C-g*v+m*E)-s*(f*A-g*M+T*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],c=t[6],l=t[10];return e*(r*l-a*c)-n*(s*l-a*o)+i*(s*c-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],c=t[7],l=t[8],h=t[9],d=t[10],u=t[11],f=t[12],g=t[13],T=t[14],m=t[15],p=e*a-n*r,C=e*o-i*r,A=e*c-s*r,v=n*o-i*a,M=n*c-s*a,E=i*c-s*o,w=l*g-h*f,_=l*T-d*f,S=l*m-u*f,z=h*T-d*g,I=h*m-u*g,O=d*m-u*T,J=p*O-C*I+A*z+v*S-M*_+E*w;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/J;return t[0]=(a*O-o*I+c*z)*L,t[1]=(i*I-n*O-s*z)*L,t[2]=(g*E-T*M+m*v)*L,t[3]=(d*M-h*E-u*v)*L,t[4]=(o*S-r*O-c*_)*L,t[5]=(e*O-i*S+s*_)*L,t[6]=(T*A-f*E-m*C)*L,t[7]=(l*E-d*A+u*C)*L,t[8]=(r*I-a*S+c*w)*L,t[9]=(n*S-e*I-s*w)*L,t[10]=(f*M-g*A+m*p)*L,t[11]=(h*A-l*M-u*p)*L,t[12]=(a*_-r*z-o*w)*L,t[13]=(e*z-n*_+i*w)*L,t[14]=(g*C-f*v-T*p)*L,t[15]=(l*v-h*C+d*p)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,o=t.z,c=s*r,l=s*a;return this.set(c*r+n,c*a-i*o,c*o+i*a,0,c*a+i*o,l*a+n,l*o-i*r,0,c*o-i*a,l*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,o=e._w,c=s+s,l=r+r,h=a+a,d=s*c,u=s*l,f=s*h,g=r*l,T=r*h,m=a*h,p=o*c,C=o*l,A=o*h,v=n.x,M=n.y,E=n.z;return i[0]=(1-(g+m))*v,i[1]=(u+A)*v,i[2]=(f-C)*v,i[3]=0,i[4]=(u-A)*M,i[5]=(1-(d+m))*M,i[6]=(T+p)*M,i[7]=0,i[8]=(f+C)*E,i[9]=(T-p)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ds.set(i[0],i[1],i[2]).length(),a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();if(s<0)r=-r;yn.copy(this);let c=1/r,l=1/a,h=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=l,yn.elements[5]*=l,yn.elements[6]*=l,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(o)f=s/(r-s),g=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let c=this.elements,l=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),f,g;if(o)f=1/(r-s),g=r/(r-s);else if(a===2000)f=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ds=new B,yn=new re,Hf=new B(0,0,0),Gf=new B(1,1,1),gi=new B,jr=new B,ln=new B,Mh=new re,bh=new si;class ti{constructor(t=0,e=0,n=0,i=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],c=i[5],l=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-l,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,c),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Zt(l,-1,1)),Math.abs(l)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,c);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,c);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,c);break;case"YZX":if(this._z=Math.asin(Zt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,c),this._y=Math.atan2(a,s);else this._x=Math.atan2(-l,u),this._y=0;break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Vf=0,Th=new B,fs=new si,$n=new re,Qr=new B,ir=new B,Wf=new B,Xf=new si,Eh=new B(1,0,0),wh=new B(0,1,0),Ah=new B(0,0,1),Ch={type:"added"},qf={type:"removed"},ps={type:"childadded",child:null},Co={type:"childremoved",child:null};class Me extends ii{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();let t=new B,e=new ti,n=new si,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new zt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Qr.copy(t);else Qr.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)$n.lookAt(ir,Qr,this.up);else $n.lookAt(Qr,ir,this.up);if(this.quaternion.setFromRotationMatrix($n),i)$n.extractRotation(i.matrixWorld),fs.setFromRotationMatrix($n),this.quaternion.premultiply(fs.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ch),ps.child=t,this.dispatchEvent(ps),ps.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),Co.child=t,this.dispatchEvent(Co),Co.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld);return t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ch),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){let h=o[c];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),c=r(t.textures),l=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),f=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(c.length>0)n.textures=c;if(l.length>0)n.images=l;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let c in a){let l=a[c];delete l.metadata,o.push(l)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Me.DEFAULT_UP=new B(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ye extends Me{constructor(){super();this.isGroup=!0,this.type="Group"}}var Yf={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let g of t.hand.values()){let T=e.getJointPose(g,n),m=this._getHandJoint(c,g);if(T!==null)m.matrix.fromArray(T.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=T.radius;m.visible=T!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=l.position.distanceTo(h.position),u=0.02,f=0.005;if(c.inputState.pinching&&d>u+f)c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!c.inputState.pinching&&d<=u-f)c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Yf)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(c!==null)c.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Ro(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Of(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ro(r,s,t+0.3333333333333333),this.g=Ro(r,s,t),this.b=Ro(r,s,t-0.3333333333333333)}return $t.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ot("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Zu[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ot("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return $t.workingToColorSpace(Xe.copy(this),t),Math.round(Zt(Xe.r*255,0,255))*65536+Math.round(Zt(Xe.g*255,0,255))*256+Math.round(Zt(Xe.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Xe.copy(this),e);let{r:n,g:i,b:s}=Xe,r=Math.max(n,i,s),a=Math.min(n,i,s),o,c,l=(a+r)/2;if(a===r)o=0,c=0;else{let h=r-a;switch(c=l<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=c,t.l=l,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t="srgb"){$t.workingToColorSpace(Xe.copy(this),t);let{r:e,g:n,b:i}=Xe;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(ta);let n=bo(_i.h,ta.h,e),i=bo(_i.s,ta.s,e),s=bo(_i.l,ta.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Xe=new Vt;Vt.NAMES=Zu;class br{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new br(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tr extends Me{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var vn=new B,Zn=new B,Io=new B,Jn=new B,ms=new B,gs=new B,Rh=new B,Po=new B,Lo=new B,No=new B,Do=new ve,Uo=new ve,Fo=new ve;class hn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vn.subVectors(i,e),Zn.subVectors(n,e),Io.subVectors(t,e);let r=vn.dot(vn),a=vn.dot(Zn),o=vn.dot(Io),c=Zn.dot(Zn),l=Zn.dot(Io),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(c*o-a*l)*d,f=(r*l-a*o)*d;return s.set(1-u-f,f,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Jn)===null)return!1;return Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Jn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Jn.x),o.addScaledVector(r,Jn.y),o.addScaledVector(a,Jn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Do.setScalar(0),Uo.setScalar(0),Fo.setScalar(0),Do.fromBufferAttribute(t,e),Uo.fromBufferAttribute(t,n),Fo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Do,s.x),r.addScaledVector(Uo,s.y),r.addScaledVector(Fo,s.z),r}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Zn.subVectors(t,e),vn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),vn.cross(Zn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;ms.subVectors(i,n),gs.subVectors(s,n),Po.subVectors(t,n);let o=ms.dot(Po),c=gs.dot(Po);if(o<=0&&c<=0)return e.copy(n);Lo.subVectors(t,i);let l=ms.dot(Lo),h=gs.dot(Lo);if(l>=0&&h<=l)return e.copy(i);let d=o*h-l*c;if(d<=0&&o>=0&&l<=0)return r=o/(o-l),e.copy(n).addScaledVector(ms,r);No.subVectors(t,s);let u=ms.dot(No),f=gs.dot(No);if(f>=0&&u<=f)return e.copy(s);let g=u*c-o*f;if(g<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(gs,a);let T=l*f-u*h;if(T<=0&&h-l>=0&&u-f>=0)return Rh.subVectors(s,i),a=(h-l)/(h-l+(u-f)),e.copy(i).addScaledVector(Rh,a);let m=1/(T+g+d);return r=g*m,a=d*m,e.copy(n).addScaledVector(ms,r).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ri{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,Sn);else Sn.fromBufferAttribute(s,r);Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();ea.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();ea.copy(n.boundingBox)}ea.applyMatrix4(t.matrixWorld),this.union(ea)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),na.subVectors(this.max,sr),_s.subVectors(t.a,sr),xs.subVectors(t.b,sr),ys.subVectors(t.c,sr),xi.subVectors(xs,_s),yi.subVectors(ys,xs),zi.subVectors(_s,ys);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-zi.z,zi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,zi.z,0,-zi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-zi.y,zi.x,0];if(!Oo(e,_s,xs,ys,na))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Oo(e,_s,xs,ys,na))return!1;return ia.crossVectors(xi,yi),e=[ia.x,ia.y,ia.z],Oo(e,_s,xs,ys,na)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Sn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Kn=[new B,new B,new B,new B,new B,new B,new B,new B],Sn=new B,ea=new ri,_s=new B,xs=new B,ys=new B,xi=new B,yi=new B,zi=new B,sr=new B,na=new B,ia=new B,ki=new B;function Oo(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ki.fromArray(t,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=e.dot(ki),l=n.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ce=new B,sa=new Ht,$f=0;class ke extends ii{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Ln(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ue(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Ln(e,this.array);return e}setX(t,e){if(this.normalized)e=ue(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Ln(e,this.array);return e}setY(t,e){if(this.normalized)e=ue(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Ln(e,this.array);return e}setZ(t,e){if(this.normalized)e=ue(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Ln(e,this.array);return e}setW(t,e){if(this.normalized)e=ue(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=ue(e,this.array),n=ue(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Wa extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xa extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Zf=new ri,rr=new B,Bo=new B;class ai{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Zf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(Bo)),this.expandByPoint(rr.copy(t.center).sub(Bo));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Jf=0,mn=new re,zo=new Me,vs=new B,cn=new ri,ar=new ri,Ue=new B;class Re extends ii{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Uf(t))?Xa:Wa)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ri;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(cn.setFromBufferAttribute(s),this.morphTargetsRelative)Ue.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ue);else this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ai;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(ar.setFromBufferAttribute(a),this.morphTargetsRelative)Ue.addVectors(cn.min,ar.min),cn.expandByPoint(Ue),Ue.addVectors(cn.max,ar.max),cn.expandByPoint(Ue);else cn.expandByPoint(ar.min),cn.expandByPoint(ar.max)}cn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++){if(Ue.fromBufferAttribute(a,c),o)vs.fromBufferAttribute(t,c),Ue.add(vs);i=Math.max(i,n.distanceToSquared(Ue))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let w=0;w<n.count;w++)a[w]=new B,o[w]=new B;let c=new B,l=new B,h=new B,d=new Ht,u=new Ht,f=new Ht,g=new B,T=new B;function m(w,_,S){c.fromBufferAttribute(n,w),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,w),u.fromBufferAttribute(s,_),f.fromBufferAttribute(s,S),l.sub(c),h.sub(c),u.sub(d),f.sub(d);let z=1/(u.x*f.y-f.x*u.y);if(!isFinite(z))return;g.copy(l).multiplyScalar(f.y).addScaledVector(h,-u.y).multiplyScalar(z),T.copy(h).multiplyScalar(u.x).addScaledVector(l,-f.x).multiplyScalar(z),a[w].add(g),a[_].add(g),a[S].add(g),o[w].add(T),o[_].add(T),o[S].add(T)}let p=this.groups;if(p.length===0)p=[{start:0,count:t.count}];for(let w=0,_=p.length;w<_;++w){let S=p[w],z=S.start,I=S.count;for(let O=z,J=z+I;O<J;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let C=new B,A=new B,v=new B,M=new B;function E(w){v.fromBufferAttribute(i,w),M.copy(v);let _=a[w];C.copy(_),C.sub(v.multiplyScalar(v.dot(_))).normalize(),A.crossVectors(M,_);let z=A.dot(o[w])<0?-1:1;r.setXYZW(w,C.x,C.y,C.z,z)}for(let w=0,_=p.length;w<_;++w){let S=p[w],z=S.start,I=S.count;for(let O=z,J=z+I;O<J;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new B,s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,h=new B;if(t)for(let d=0,u=t.count;d<u;d+=3){let f=t.getX(d+0),g=t.getX(d+1),T=t.getX(d+2);i.fromBufferAttribute(e,f),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,T),l.subVectors(r,s),h.subVectors(i,s),l.cross(h),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,T),a.add(l),o.add(l),c.add(l),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),l.subVectors(r,s),h.subVectors(i,s),l.cross(h),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,o){let{array:c,itemSize:l,normalized:h}=a,d=new c.constructor(o.length*l),u=0,f=0;for(let g=0,T=o.length;g<T;g++){if(a.isInterleavedBufferAttribute)u=o[g]*a.data.stride+a.offset;else u=o[g]*l;for(let m=0;m<l;m++)d[f++]=c[u++]}return new ke(d,l,h)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Re,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],c=t(o,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let o=[],c=s[a];for(let l=0,h=c.length;l<h;l++){let d=c[l],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let c in o)if(o[c]!==void 0)t[c]=o[c];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let c=n[o];t.data.attributes[o]=c.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],l=[];for(let h=0,d=c.length;h<d;h++){let u=c[h];l.push(u.toJSON(t.data))}if(l.length>0)i[o]=l,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let s=t.morphAttributes;for(let c in s){let l=[],h=s[c];for(let d=0,u=h.length;d<u;d++)l.push(h[d].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,l=r.length;c<l;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $l{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Si();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Si();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}var je=new B;class mr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=Ln(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ue(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=ue(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=ue(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=ue(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=ue(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=Ln(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=Ln(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=Ln(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=Ln(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=ue(e,this.array),n=ue(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var ko=new B,Kf=new B,jf=new zt;class Pn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ko.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ko),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jf.getNormalMatrix(t),i=this.coplanarPoint(ko).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Qf=0;class On extends ii{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Vt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new Pn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Ht().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class oi extends On{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Ss,or=new B,Ms=new B,bs=new B,Ts=new Ht,lr=new Ht,Ju=new re,ra=new B,cr=new B,aa=new B,Ih=new Ht,Ho=new Ht,Ph=new Ht;class Ti extends Me{constructor(t=new oi){super();if(this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Re;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new $l(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new mr(n,3,0,!1)),Ss.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new Ht(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Ms.setFromMatrixScale(this.matrixWorld),Ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Ms.multiplyScalar(-bs.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;oa(ra.set(-0.5,-0.5,0),bs,r,Ms,i,s),oa(cr.set(0.5,-0.5,0),bs,r,Ms,i,s),oa(aa.set(0.5,0.5,0),bs,r,Ms,i,s),Ih.set(0,0),Ho.set(1,0),Ph.set(1,1);let a=t.ray.intersectTriangle(ra,cr,aa,!1,or);if(a===null){if(oa(cr.set(-0.5,0.5,0),bs,r,Ms,i,s),Ho.set(0,1),a=t.ray.intersectTriangle(ra,aa,cr,!1,or),a===null)return}let o=t.ray.origin.distanceTo(or);if(o<t.near||o>t.far)return;e.push({distance:o,point:or.clone(),uv:hn.getInterpolation(or,ra,cr,aa,Ih,Ho,Ph,new Ht),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function oa(t,e,n,i,s,r){if(Ts.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)lr.x=r*Ts.x-s*Ts.y,lr.y=s*Ts.x+r*Ts.y;else lr.copy(Ts);t.copy(e),t.x+=lr.x,t.y+=lr.y,t.applyMatrix4(Ju)}var jn=new B,Go=new B,la=new B,ca=new B;class Er{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(0.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(Go);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(la),a=ca.dot(this.direction),o=-ca.dot(la),c=ca.lengthSq(),l=Math.abs(1-r*r),h,d,u,f;if(l>0)if(h=r*o-a,d=r*a-o,f=s*l,h>=0)if(d>=-f)if(d<=f){let g=1/l;h*=g,d*=g,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+c}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+c;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+c;else if(d<=-f)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+c;else if(d<=f)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+c;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+c;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+c;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Go).addScaledVector(la,d);return u}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),i=jn.dot(jn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(c>=0)n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c;else n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c;if(l>=0)s=(t.min.y-d.y)*l,r=(t.max.y-d.y)*l;else s=(t.max.y-d.y)*l,r=(t.min.y-d.y)*l;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,o=a.x,c=a.y,l=a.z,h=t.x-r.x,d=t.y-r.y,u=t.z-r.z,f=e.x-r.x,g=e.y-r.y,T=e.z-r.z,m=n.x-r.x,p=n.y-r.y,C=n.z-r.z,A=Math.abs(o),v=Math.abs(c),M=Math.abs(l),E,w,_,S,z,I,O,J,L,G,R,P;if(A>=v&&A>=M)if(_=o,I=h,L=f,P=m,o>=0)E=c,w=l,S=d,z=u,O=g,J=T,G=p,R=C;else E=l,w=c,S=u,z=d,O=T,J=g,G=C,R=p;else if(v>=M)if(_=c,I=d,L=g,P=p,c>=0)E=l,w=o,S=u,z=h,O=T,J=f,G=C,R=m;else E=o,w=l,S=h,z=u,O=f,J=T,G=m,R=C;else if(_=l,I=u,L=T,P=C,l>=0)E=o,w=c,S=h,z=d,O=f,J=g,G=m,R=p;else E=c,w=o,S=d,z=h,O=g,J=f,G=p,R=m;if(_===0)return null;let et=E/_,V=w/_,q=1/_,j=S-et*I,_t=z-V*I,At=O-et*L,ee=J-V*L,Nt=G-et*P,Y=R-V*P,st=Nt*ee-Y*At,rt=j*Y-_t*Nt,bt=At*_t-ee*j;if(i){if(st<0||rt<0||bt<0)return null}else if((st<0||rt<0||bt<0)&&(st>0||rt>0||bt>0))return null;let It=st+rt+bt;if(It===0)return null;let ct=q*(st*I+rt*L+bt*P);if(It>0?ct<0:ct>0)return null;return this.at(ct/It,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bn extends On{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Lh=new re,Hi=new Er,ha=new ai,Nh=new B,ua=new B,da=new B,fa=new B,Vo=new B,pa=new B,Dh=new B,ma=new B;class ge extends Me{constructor(t=new Re,e=new Bn){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let o=0,c=s.length;o<c;o++){let l=a[o],h=s[o];if(l===0)continue;if(Vo.fromBufferAttribute(h,t),r)pa.addScaledVector(Vo,l);else pa.addScaledVector(Vo.sub(e),l)}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(ha.copy(n.boundingSphere),ha.applyMatrix4(s),Hi.copy(t.ray).recast(t.near),ha.containsPoint(Hi.origin)===!1){if(Hi.intersectSphere(ha,Nh)===null)return;if(Hi.origin.distanceToSquared(Nh)>(t.far-t.near)**2)return}if(Lh.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(Lh),n.boundingBox!==null){if(Hi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Hi)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){let T=d[f],m=r[T.materialIndex],p=Math.max(T.start,u.start),C=Math.min(a.count,Math.min(T.start+T.count,u.start+u.count));for(let A=p,v=C;A<v;A+=3){let M=a.getX(A),E=a.getX(A+1),w=a.getX(A+2);if(i=ga(this,m,t,n,c,l,h,M,E,w),i)i.faceIndex=Math.floor(A/3),i.face.materialIndex=T.materialIndex,e.push(i)}}else{let f=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let T=f,m=g;T<m;T+=3){let p=a.getX(T),C=a.getX(T+1),A=a.getX(T+2);if(i=ga(this,r,t,n,c,l,h,p,C,A),i)i.faceIndex=Math.floor(T/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){let T=d[f],m=r[T.materialIndex],p=Math.max(T.start,u.start),C=Math.min(o.count,Math.min(T.start+T.count,u.start+u.count));for(let A=p,v=C;A<v;A+=3){let M=A,E=A+1,w=A+2;if(i=ga(this,m,t,n,c,l,h,M,E,w),i)i.faceIndex=Math.floor(A/3),i.face.materialIndex=T.materialIndex,e.push(i)}}else{let f=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let T=f,m=g;T<m;T+=3){let p=T,C=T+1,A=T+2;if(i=ga(this,r,t,n,c,l,h,p,C,A),i)i.faceIndex=Math.floor(T/3),e.push(i)}}}}function tp(t,e,n,i,s,r,a,o){let c;if(e.side===1)c=i.intersectTriangle(a,r,s,!0,o);else c=i.intersectTriangle(s,r,a,e.side===0,o);if(c===null)return null;ma.copy(o),ma.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(ma);if(l<n.near||l>n.far)return null;return{distance:l,point:ma.clone(),object:t}}function ga(t,e,n,i,s,r,a,o,c,l){t.getVertexPosition(o,ua),t.getVertexPosition(c,da),t.getVertexPosition(l,fa);let h=tp(t,e,n,i,ua,da,fa,Dh);if(h){let d=new B;if(hn.getBarycoord(Dh,ua,da,fa,d),s)h.uv=hn.getInterpolatedAttribute(s,o,c,l,d,new Ht);if(r)h.uv1=hn.getInterpolatedAttribute(r,o,c,l,d,new Ht);if(a){if(h.normal=hn.getInterpolatedAttribute(a,o,c,l,d,new B),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:c,c:l,normal:new B,materialIndex:0};hn.getNormal(ua,da,fa,u.normal),h.face=u,h.barycoord=d}return h}class qa extends ze{constructor(t=null,e=1,n=1,i,s,r,a,o,c=1003,l=1003,h,d){super(null,r,a,o,c,l,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa extends ke{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Es=new re,Uh=new re,_a=[],Fh=new ri,ep=new re,hr=new ge,ur=new ai;class Ya extends ge{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ep)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new ri;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Fh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new ai;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),ur.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ur)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Es),Uh.multiplyMatrices(n,Es),hr.matrixWorld=Uh,hr.raycast(t,_a);for(let r=0,a=_a.length;r<a;r++){let o=_a[r];o.instanceId=s,o.object=this,e.push(o)}_a.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new qa(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Gi=new ai,np=new Ht(0.5,0.5),xa=new B;class wr{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,s=new Pn,r=new Pn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],T=s[10],m=s[11],p=s[12],C=s[13],A=s[14],v=s[15];if(i[0].setComponents(c-r,u-l,m-f,v-p).normalize(),i[1].setComponents(c+r,u+l,m+f,v+p).normalize(),i[2].setComponents(c+a,u+h,m+g,v+C).normalize(),i[3].setComponents(c-a,u-h,m-g,v-C).normalize(),n)i[4].setComponents(o,d,T,A).normalize(),i[5].setComponents(c-o,u-d,m-T,v-A).normalize();else if(i[4].setComponents(c-o,u-d,m-T,v-A).normalize(),e===2000)i[5].setComponents(c+o,u+d,m+T,v+A).normalize();else if(e===2001)i[5].setComponents(o,d,T,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=np.distanceTo(t.center);return Gi.radius=0.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(xa.x=i.normal.x>0?t.max.x:t.min.x,xa.y=i.normal.y>0?t.max.y:t.min.y,xa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ar extends On{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Aa=new B,Ca=new B,Oh=new re,dr=new Er,ya=new ai,Wo=new B,Bh=new B;class Zl extends Me{constructor(t=new Re,e=new Ar){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Aa.fromBufferAttribute(e,i-1),Ca.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Aa.distanceTo(Ca);t.setAttribute("lineDistance",new be(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,t.ray.intersectsSphere(ya)===!1)return;Oh.copy(i).invert(),dr.copy(t.ray).applyMatrix4(Oh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=u,T=f-1;g<T;g+=c){let m=l.getX(g),p=l.getX(g+1),C=va(this,t,dr,o,m,p,g);if(C)e.push(C)}if(this.isLineLoop){let g=l.getX(f-1),T=l.getX(u),m=va(this,t,dr,o,g,T,f-1);if(m)e.push(m)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,T=f-1;g<T;g+=c){let m=va(this,t,dr,o,g,g+1,g);if(m)e.push(m)}if(this.isLineLoop){let g=va(this,t,dr,o,f-1,u,f-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function va(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(Aa.fromBufferAttribute(o,s),Ca.fromBufferAttribute(o,r),n.distanceSqToSegment(Aa,Ca,Wo,Bh)>i)return;Wo.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(Wo);if(l<e.near||l>e.far)return;return{distance:l,point:Bh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var zh=new B,kh=new B;class $a extends Zl{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)zh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zh.distanceTo(kh);t.setAttribute("lineDistance",new be(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jl extends On{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Hh=new re,Yo=new Er,Sa=new ai,Ma=new B;class Za extends Me{constructor(t=new Re,e=new Jl){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=s,t.ray.intersectsSphere(Sa)===!1)return;Hh.copy(i).invert(),Yo.copy(t.ray).applyMatrix4(Hh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let f=d,g=u;f<g;f++){let T=c.getX(f);Ma.fromBufferAttribute(h,T),Gh(Ma,T,o,i,t,e,this)}}else{let d=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let f=d,g=u;f<g;f++)Ma.fromBufferAttribute(h,f),Gh(Ma,f,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gh(t,e,n,i,s,r,a){let o=Yo.distanceSqToPoint(t);if(o<n){let c=new B;Yo.closestPointToPoint(t,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ja extends ze{constructor(t=[],e=301,n,i,s,r,a,o,c,l){super(t,e,n,i,s,r,a,o,c,l);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Os extends ze{constructor(t,e,n,i,s,r,a,o,c){super(t,e,n,i,s,r,a,o,c);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji extends ze{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,c,l=1026,h=1){if(l!==1026&&l!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,l,n,c);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Kl extends ji{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,c=1026){let l={width:t,height:t,depth:1},h=[l,l,l,l,l,l];super(t,t,e,n,i,s,r,a,o,c);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ka extends ze{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ei extends Re{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],c=[],l=[],h=[],d=0,u=0;f("z","y","x",-1,-1,n,e,t,r,s,0),f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,1,t,n,e,i,r,2),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,n,i,s,4),f("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(h,2));function f(g,T,m,p,C,A,v,M,E,w,_){let S=A/E,z=v/w,I=A/2,O=v/2,J=M/2,L=E+1,G=w+1,R=0,P=0,et=new B;for(let V=0;V<G;V++){let q=V*z-O;for(let j=0;j<L;j++){let _t=j*S-I;et[g]=_t*p,et[T]=q*C,et[m]=J,c.push(et.x,et.y,et.z),et[g]=0,et[T]=0,et[m]=M>0?1:-1,l.push(et.x,et.y,et.z),h.push(j/E),h.push(1-V/w),R+=1}}for(let V=0;V<w;V++)for(let q=0;q<E;q++){let j=d+q+L*V,_t=d+q+L*(V+1),At=d+(q+1)+L*(V+1),ee=d+(q+1)+L*V;o.push(j,_t,ee),o.push(_t,At,ee),P+=6}a.addGroup(u,P,_),u+=P,d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wi extends Re{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let c=this;i=Math.floor(i),s=Math.floor(s);let l=[],h=[],d=[],u=[],f=0,g=[],T=n/2,m=0;if(p(),r===!1){if(t>0)C(!0);if(e>0)C(!1)}this.setIndex(l),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(u,2));function p(){let A=new B,v=new B,M=0,E=(e-t)/n;for(let w=0;w<=s;w++){let _=[],S=w/s,z=S*(e-t)+t;for(let I=0;I<=i;I++){let O=I/i,J=O*o+a,L=Math.sin(J),G=Math.cos(J);v.x=z*L,v.y=-S*n+T,v.z=z*G,h.push(v.x,v.y,v.z),A.set(L,E,G).normalize(),d.push(A.x,A.y,A.z),u.push(O,1-S),_.push(f++)}g.push(_)}for(let w=0;w<i;w++)for(let _=0;_<s;_++){let S=g[_][w],z=g[_+1][w],I=g[_+1][w+1],O=g[_][w+1];if(t>0||_!==0)l.push(S,z,O),M+=3;if(e>0||_!==s-1)l.push(z,I,O),M+=3}c.addGroup(m,M,0),m+=M}function C(A){let v=f,M=new Ht,E=new B,w=0,_=A===!0?t:e,S=A===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,T*S,0),d.push(0,S,0),u.push(0.5,0.5),f++;let z=f;for(let I=0;I<=i;I++){let J=I/i*o+a,L=Math.cos(J),G=Math.sin(J);E.x=_*G,E.y=T*S,E.z=_*L,h.push(E.x,E.y,E.z),d.push(0,S,0),M.x=L*0.5+0.5,M.y=G*0.5*S+0.5,u.push(M.x,M.y),f++}for(let I=0;I<i;I++){let O=v+I,J=z+I;if(A===!0)l.push(J,J+1,O);else l.push(J+1,J,O);w+=3}c.addGroup(m,w,A===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends Re{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),c=a+1,l=o+1,h=t/a,d=e/o,u=[],f=[],g=[],T=[];for(let m=0;m<l;m++){let p=m*d-r;for(let C=0;C<c;C++){let A=C*h-s;f.push(A,-p,0),g.push(0,0,1),T.push(C/a),T.push(1-m/o)}}for(let m=0;m<o;m++)for(let p=0;p<a;p++){let C=p+c*m,A=p+c*(m+1),v=p+1+c*(m+1),M=p+1+c*m;u.push(C,A,M),u.push(A,v,M)}this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(T,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}class zn extends Re{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),c=0,l=[],h=new B,d=new B,u=[],f=[],g=[],T=[];for(let m=0;m<=n;m++){let p=[],C=m/n,A=r+C*a,v=t*Math.cos(A),M=Math.sqrt(t*t-v*v),E=0;if(m===0&&r===0)E=0.5/e;else if(m===n&&o===Math.PI)E=-0.5/e;for(let w=0;w<=e;w++){let _=w/e,S=i+_*s;h.x=-M*Math.cos(S),h.y=v,h.z=M*Math.sin(S),f.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),T.push(_+E,1-C),p.push(c++)}l.push(p)}for(let m=0;m<n;m++)for(let p=0;p<e;p++){let C=l[m][p+1],A=l[m][p],v=l[m+1][p],M=l[m+1][p+1];if(m!==0||r>0)u.push(C,A,M);if(m!==n-1||o<Math.PI)u.push(A,v,M)}this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(T,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Qi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Vh(s))if(s.isRenderTargetTexture)Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Vh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function $e(t){let e={};for(let n=0;n<t.length;n++){let i=Qi(t[n]);for(let s in i)e[s]=i[s]}return e}function Vh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function ip(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jl(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return $t.workingColorSpace}var Ku={clone:Qi,merge:$e},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends On{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Ql extends an{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ci extends On{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tc extends On{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ec extends On{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ws(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Xo(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class ts{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class nc extends ts{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let c=(n-e)*0.5,l=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(o-n),this._offsetPrev=s*l,this._offsetNext=r*l}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,l=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-e)/(i-e),g=f*f,T=g*f,m=-d*T+2*d*g-d*f,p=(1+d)*T+(-1.5-2*d)*g+(-0.5+d)*f+1,C=(-1-u)*T+(1.5+u)*g+0.5*f,A=u*T-u*g;for(let v=0;v!==a;++v)s[v]=m*r[l+v]+p*r[c+v]+C*r[o+v]+A*r[h+v];return s}}class ic extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,l=(n-e)/(i-e),h=1-l;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[o+d]*l;return s}}class sc extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class rc extends ts{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,l=this.inTangents,h=this.outTangents;if(!l||!h){let f=(n-e)/(i-e),g=1-f;for(let T=0;T!==a;++T)s[T]=r[c+T]*g+r[o+T]*f;return s}let d=a*2,u=t-1;for(let f=0;f!==a;++f){let g=r[c+f],T=r[o+f],m=u*d+f*2,p=h[m],C=h[m+1],A=t*d+f*2,v=l[A],M=l[A+1],E=op(n,e,p,v,i);s[f]=ju(E,g,C,M,T)}return s}}function ju(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function ap(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function op(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=ju(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let c=ap(r,e,n,i,s);if(Math.abs(c)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/c))}return r}class gn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Xo(t.settings))n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rc(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Xo(this.settings))Wh(this.settings.inTangents,t),Wh(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Ff(i))for(let a=0,o=i.length;a!==o;++a){let c=i[a];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,c=t[a],l=t[a+1];if(c!==l&&(a!==1||c!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let f=0;f!==n;++f){let g=e[h+f];if(g!==e[d+f]||g!==e[u+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,c=0;c!==n;++c)e[o+c]=e[a+c];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Xo(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Wh(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=2301;class es extends gn{constructor(t,e,n){super(t,e,n)}}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=2300;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class ac extends gn{constructor(t,e,n,i){super(t,e,n,i)}}ac.prototype.ValueTypeName="color";class oc extends gn{constructor(t,e,n,i){super(t,e,n,i)}}oc.prototype.ValueTypeName="number";class lc extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),c=t*a;for(let l=c+a;c!==l;c+=4)si.slerpFlat(s,0,r,c-a,r,c,o);return s}}class ja extends gn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}}ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends gn{constructor(t,e,n){super(t,e,n)}}ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=2300;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class cc extends gn{constructor(t,e,n,i){super(t,e,n,i)}}cc.prototype.ValueTypeName="vector";class hc{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(l){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(l,r,a)}s=!0},this.itemEnd=function(l){if(r++,i.onProgress!==void 0)i.onProgress(l,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(l){if(i.onError!==void 0)i.onError(l)},this.resolveURL=function(l){if(l=l.normalize("NFC"),o)return o(l);return l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);if(h!==-1)c.splice(h,2);return this},this.getHandler=function(l){for(let h=0,d=c.length;h<d;h+=2){let u=c[h],f=c[h+1];if(u.global)u.lastIndex=0;if(u.test(l))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Qu=new hc;class uc{constructor(t){if(this.manager=t!==void 0?t:Qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}uc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Qa extends Me{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Cr extends Qa{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var qo=new re,Xh=new B,qh=new B;class dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qo,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,c=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+c,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+c,0,0,0.5,0.5,0,0,0,1);e.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ba=new B,Ta=new si,In=new B;class to extends Me{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ta,In),In.x===1&&In.y===1&&In.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ba,Ta,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,Ta,In),In.x===1&&In.y===1&&In.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ba,Ta,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var vi=new B,Yh=new Ht,$h=new Ht;class qe extends to{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mo*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Mo*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,$h),e.subVectors($h,Yh)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mo*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:c}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/c,i*=r.width/o,n*=r.height/c}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Rr extends to{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class td extends dc{constructor(){super(new Rr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Ir extends Qa{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new td}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var As=-90,Cs=1;class fc extends Me{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(As,Cs,t,e);i.layers=this.layers,this.add(i);let s=new qe(As,Cs,t,e);s.layers=this.layers,this.add(s);let r=new qe(As,Cs,t,e);r.layers=this.layers,this.add(r);let a=new qe(As,Cs,t,e);a.layers=this.layers,this.add(a);let o=new qe(As,Cs,t,e);o.layers=this.layers,this.add(o);let c=new qe(As,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let c of e)this.remove(c);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,c,l]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let T=!1;if(t.isWebGLRenderer===!0)T=t.state.buffers.depth.getReversed();else T=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),T&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),T&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),T&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),T&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),T&&t.autoClear===!1)t.clearDepth();if(t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),T&&t.autoClear===!1)t.clearDepth();t.render(e,l),t.setRenderTarget(h,d,u),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class pc extends qe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var mc="\\[\\]\\.:\\/",lp=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",cp="[^"+mc.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",gc),up=/(WCOD+)?/.source.replace("WCOD",cp),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),pp=new RegExp("^"+hp+up+dp+fp+"$"),mp=["material","materials","bones","map"];class ed{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new oe(t,e,n);else return new oe.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){let e=pp.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(mp.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(!t)t=oe.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[i];if(r===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=ed;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);class _c{static{_c.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function xc(t,e,n,i){let s=gp(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function gp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Ot("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function bd(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function _p(t){let e=new WeakMap;function n(o,c){let{array:l,usage:h}=o,d=l.byteLength,u=t.createBuffer();t.bindBuffer(c,u),t.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=t.HALF_FLOAT;else f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let{array:h,updateRanges:d}=c;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],T=d[f];if(T.start<=g.start+g.count+1)g.count=Math.max(g.count,T.start+T.count-g.start);else++u,d[u]=T}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let T=d[f];t.bufferSubData(l,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let c=e.get(o);if(c)t.deleteBuffer(c.buffer),e.delete(o)}function a(o,c){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`uniform sampler2D dfgLUT;
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
}`,_m=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,k0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,W0=`#define TOON
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
}`,X0=`#define TOON
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
}`,q0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:xp,alphahash_pars_fragment:yp,alphamap_fragment:vp,alphamap_pars_fragment:Sp,alphatest_fragment:Mp,alphatest_pars_fragment:bp,aomap_fragment:Tp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Ap,begin_vertex:Cp,beginnormal_vertex:Rp,bsdfs:Ip,iridescence_fragment:Pp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Hp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:$p,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:am,lights_lambert_fragment:om,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:xm,lights_fragment_end:ym,lightprobes_pars_fragment:vm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Tm,map_fragment:Em,map_pars_fragment:wm,map_particle_fragment:Am,map_particle_pars_fragment:Cm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Fm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:zm,normal_vertex:km,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:$m,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:Km,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:e0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:_0,background_vert:x0,background_frag:y0,backgroundCube_vert:v0,backgroundCube_frag:S0,cube_vert:M0,cube_frag:b0,depth_vert:T0,depth_frag:E0,distance_vert:w0,distance_frag:A0,equirect_vert:C0,equirect_frag:R0,linedashed_vert:I0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:N0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:k0,meshphong_frag:H0,meshphysical_vert:G0,meshphysical_frag:V0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:$0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:K0},ft={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ht(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Hn={basic:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:$e([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:$e([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:$e([ft.points,ft.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:$e([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:$e([ft.common,ft.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:$e([ft.sprite,ft.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:$e([ft.common,ft.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:$e([ft.lights,ft.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Hn.physical={uniforms:$e([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var eo={r:0,b:0,g:0},j0=new re,Td=new zt;Td.set(-1,0,0,0,1,0,0,0,1);function Q0(t,e,n,i,s,r){let a=new Vt(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(C){let A=C.isScene===!0?C.background:null;if(A&&A.isTexture){let v=C.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(C){let A=!1,v=f(C);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),A=!0;let M=t.xr.getEnvironmentBlendMode();if(M==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(M==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||A)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function T(C,A){let v=f(A);if(v&&(v.isCubeTexture||v.mapping===_r)){if(l===void 0)l=new ge(new Ei(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Qi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l);if(l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)l.material.uniforms.backgroundRotation.value.premultiply(Td);if(l.material.toneMapped=$t.getTransfer(v.colorSpace)!==fe,h!==v||d!==v.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=v,d=v.version,u=t.toneMapping;l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)}else if(v&&v.isTexture){if(c===void 0)c=new ge(new li(2,2),new an({name:"BackgroundMaterial",uniforms:Qi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c);if(c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0)v.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(v.matrix),h!==v||d!==v.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=v,d=v.version,u=t.toneMapping;c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)}}function m(C,A){C.getRGB(eo,jl(t)),n.buffers.color.setClear(eo.r,eo.g,eo.b,A,r)}function p(){if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0;if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0}return{getClearColor:function(){return a},setClearColor:function(C,A=1){a.set(C),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,m(a,o)},render:g,addToRenderList:T,dispose:p}}function tg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(I,O,J,L,G){let R=!1,P=d(I,L,J,O);if(r!==P)r=P,l(r.object);if(R=f(I,L,J,G),R)g(I,L,J,G);if(G!==null)e.update(G,t.ELEMENT_ARRAY_BUFFER);if(R||a){if(a=!1,v(I,O,J,L),G!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer)}}function c(){return t.createVertexArray()}function l(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function d(I,O,J,L){let G=L.wireframe===!0,R=i[O.id];if(R===void 0)R={},i[O.id]=R;let P=I.isInstancedMesh===!0?I.id:0,et=R[P];if(et===void 0)et={},R[P]=et;let V=et[J.id];if(V===void 0)V={},et[J.id]=V;let q=V[G];if(q===void 0)q=u(c()),V[G]=q;return q}function u(I){let O=[],J=[],L=[];for(let G=0;G<n;G++)O[G]=0,J[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,O,J,L){let G=r.attributes,R=O.attributes,P=0,et=J.getAttributes();for(let V in et)if(et[V].location>=0){let j=G[V],_t=R[V];if(_t===void 0){if(V==="instanceMatrix"&&I.instanceMatrix)_t=I.instanceMatrix;if(V==="instanceColor"&&I.instanceColor)_t=I.instanceColor}if(j===void 0)return!0;if(j.attribute!==_t)return!0;if(_t&&j.data!==_t.data)return!0;P++}if(r.attributesNum!==P)return!0;if(r.index!==L)return!0;return!1}function g(I,O,J,L){let G={},R=O.attributes,P=0,et=J.getAttributes();for(let V in et)if(et[V].location>=0){let j=R[V];if(j===void 0){if(V==="instanceMatrix"&&I.instanceMatrix)j=I.instanceMatrix;if(V==="instanceColor"&&I.instanceColor)j=I.instanceColor}let _t={};if(_t.attribute=j,j&&j.data)_t.data=j.data;G[V]=_t,P++}r.attributes=G,r.attributesNum=P,r.index=L}function T(){let I=r.newAttributes;for(let O=0,J=I.length;O<J;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){let{newAttributes:J,enabledAttributes:L,attributeDivisors:G}=r;if(J[I]=1,L[I]===0)t.enableVertexAttribArray(I),L[I]=1;if(G[I]!==O)t.vertexAttribDivisor(I,O),G[I]=O}function C(){let{newAttributes:I,enabledAttributes:O}=r;for(let J=0,L=O.length;J<L;J++)if(O[J]!==I[J])t.disableVertexAttribArray(J),O[J]=0}function A(I,O,J,L,G,R,P){if(P===!0)t.vertexAttribIPointer(I,O,J,G,R);else t.vertexAttribPointer(I,O,J,L,G,R)}function v(I,O,J,L){T();let G=L.attributes,R=J.getAttributes(),P=O.defaultAttributeValues;for(let et in R){let V=R[et];if(V.location>=0){let q=G[et];if(q===void 0){if(et==="instanceMatrix"&&I.instanceMatrix)q=I.instanceMatrix;if(et==="instanceColor"&&I.instanceColor)q=I.instanceColor}if(q!==void 0){let{normalized:j,itemSize:_t}=q,At=e.get(q);if(At===void 0)continue;let{buffer:ee,type:Nt,bytesPerElement:Y}=At,st=Nt===t.INT||Nt===t.UNSIGNED_INT||q.gpuType===sl;if(q.isInterleavedBufferAttribute){let rt=q.data,bt=rt.stride,It=q.offset;if(rt.isInstancedInterleavedBuffer){for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct,rt.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=rt.meshPerAttribute*rt.count}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let ct=0;ct<V.locationSize;ct++)A(V.location+ct,_t/V.locationSize,Nt,j,bt*Y,(It+_t/V.locationSize*ct)*Y,st)}else{if(q.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,q.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=q.meshPerAttribute*q.count}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let rt=0;rt<V.locationSize;rt++)A(V.location+rt,_t/V.locationSize,Nt,j,_t*Y,_t/V.locationSize*rt*Y,st)}}else if(P!==void 0){let j=P[et];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(V.location,j);break;case 3:t.vertexAttrib3fv(V.location,j);break;case 4:t.vertexAttrib4fv(V.location,j);break;default:t.vertexAttrib1fv(V.location,j)}}}}C()}function M(){S();for(let I in i){let O=i[I];for(let J in O){let L=O[J];for(let G in L){let R=L[G];for(let P in R)h(R[P].object),delete R[P];delete L[G]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let O=i[I.id];for(let J in O){let L=O[J];for(let G in L){let R=L[G];for(let P in R)h(R[P].object),delete R[P];delete L[G]}}delete i[I.id]}function w(I){for(let O in i){let J=i[O];for(let L in J){let G=J[L];if(G[I.id]===void 0)continue;let R=G[I.id];for(let P in R)h(R[P].object),delete R[P];delete G[I.id]}}}function _(I){for(let O in i){let J=i[O],L=I.isInstancedMesh===!0?I.id:0,G=J[L];if(G===void 0)continue;for(let R in G){let P=G[R];for(let et in P)h(P[et].object),delete P[et];delete G[R]}if(delete J[L],Object.keys(J).length===0)delete i[O]}}function S(){if(z(),a=!0,r===s)return;r=s,l(r.object)}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:m,disableUnusedAttributes:C}}function eg(t,e,n){let i;function s(c){i=c}function r(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,h){if(h===0)return;t.drawArraysInstanced(i,c,l,h),n.update(l,i,h)}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ng(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){if(w!==Fn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(w){let _=w===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(w!==bn&&w!==ni&&!_&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);if(h!==l)Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h;let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&u===!1)Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:T,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:v,maxSamples:M,samples:E}}function ig(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Pn,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let{clippingPlanes:g,clipIntersection:T,clipShadows:m}=d,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)if(r)h(null);else l();else{let C=r?0:i,A=C*4,v=p.clippingState||null;c.value=v,v=h(g,u,A,f);for(let M=0;M!==A;++M)v[M]=n[M];p.clippingState=v,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function l(){if(c.value!==n)c.value=n,c.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let T=d!==null?d.length:0,m=null;if(T!==0){if(m=c.value,g!==!0||m===null){let p=f+T*4,C=u.matrixWorldInverse;if(o.getNormalMatrix(C),m===null||m.length<p)m=new Float32Array(p);for(let A=0,v=f;A!==T;++A,v+=4)a.copy(d[A]).applyMatrix4(C,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,m}}var zs=4,sg=6,rg=20,ag=256,Pr=new Rr,nd=new Vt,yc=null,vc=0,Sc=0,Mc=!1,og=new B,is=new B;class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=og}=s;yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,vc,Sc),this._renderer.xr.enabled=Mc,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Ds||t.mapping===qi)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Un,format:Fn,colorSpace:Hl,depthBuffer:!1},i=id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=id(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lg(s)),this._blurMaterial=hg(s,t,e),this._ggxMaterial=cg(s,t,e)}return i}_compileMaterial(t){let e=new ge(new Re,t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,i,s){let o=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;if(h.getClearColor(nd),h.toneMapping=Mn,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new ge(new Ei,new Bn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,T=g.material,m=!1,p=t.background;if(p){if(p.isColor)T.color.copy(p),t.background=null,m=!0}else T.color.copy(nd),m=!0;for(let C=0;C<6;C++){let A=C%3;if(A===0)o.up.set(0,c[C],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+l[C],s.y,s.z);else if(A===1)o.up.set(0,0,c[C]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+l[C],s.z);else o.up.set(0,c[C],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+l[C]);let v=this._cubeSize;if(Bs(i,A*v,C>2?v:0,v,v),h.setRenderTarget(i),m)h.render(g,o);h.render(t,o)}h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ds||t.mapping===qi;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=rd();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=sd();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Bs(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,Pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,c=n/(this._lodMeshes.length-1),l=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-l*l),d=c*1.25,u=h*d,{_lodMax:f}=this,g=this._sizeLods[n],T=3*g*(n>f-zs?n-f+zs:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=f-e,Bs(s,T,m,3*g,2*g),i.setRenderTarget(s),i.render(a,Pr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=f-n,Bs(t,T,m,3*g,2*g),i.setRenderTarget(t),i.render(a,Pr)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[i],h=3*l*(i>this._lodMax-zs?i-this._lodMax+zs:0),d=4*(this._cubeSize-l);Bs(e,h,d,3*l,2*l),r.setRenderTarget(e),r.render(o,Pr)}}function lg(t){let e=[],n=[],i=t,s=t-zs+1+sg;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),T=new Float32Array(f*u*d);for(let p=0;p<d;p++){let C=p%3*2/3-1,A=p>2?0:-1,v=[C,A,0,C+0.6666666666666666,A,0,C+0.6666666666666666,A+1,0,C,A,0,C+0.6666666666666666,A+1,0,C,A+1,0];g.set(v,f*u*p);for(let M=0;M<u;M++){let E=h[M*2]*2-1,w=h[M*2+1]*2-1;if(p===0)is.set(1,w,E);else if(p===1)is.set(-E,1,-w);else if(p===2)is.set(-E,w,1);else if(p===3)is.set(-1,w,-E);else if(p===4)is.set(-E,-1,w);else is.set(E,w,-1);is.toArray(T,(p*u+M)*f)}}let m=new Re;if(m.setAttribute("position",new ke(g,f)),m.setAttribute("outputDirection",new ke(T,f)),n.push(new ge(m,null)),i>zs)i--}return{lodMeshes:n,sizeLods:e}}function id(t,e,n){let i=new un(t,e,n);return i.texture.mapping=_r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function cg(t,e,n){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function hg(t,e,n){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function sd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function rd(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cc extends un{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ja(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ei(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Dn});s.uniforms.tEquirect.value=e;let r=new ge(i,s),a=e.minFilter;if(e.minFilter===Yi)e.minFilter=rn;return new fc(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function ug(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){if(u===null||u===void 0)return null;if(f)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ra||f===Ia)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let T=new Cc(g.height);return T.fromEquirectangularTexture(t,u),e.set(u,T),u.addEventListener("dispose",l),o(T.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ra||f===Ia,T=f===Ds||f===qi;if(g||T){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p){if(i===null)i=new Ec(t);return m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let C=u.image;if(g&&C&&C.height>0||T&&C&&c(C)){if(i===null)i=new Ec(t);return m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,f){if(f===Ra)u.mapping=Ds;else if(f===Ia)u.mapping=qi;return u}function c(u){let f=0,g=6;for(let T=0;T<g;T++)if(u[T]!==void 0)f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);if(g!==void 0)e.delete(f),g.dispose()}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);if(g!==void 0)n.delete(f),g.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function dg(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Vi("WebGLRenderer: "+i+" extension not supported.");return s}}}function fg(t,e,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;if(u.index!==null)e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);if(f)e.remove(f),r.delete(u);if(i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0)delete u._maxInstanceCount;n.memory.geometries--}function o(d,u){if(s[u.id]===!0)return u;return u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++,u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],t.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,T=0;if(g===void 0)return;if(f!==null){let C=f.array;T=f.version;for(let A=0,v=C.length;A<v;A+=3){let M=C[A+0],E=C[A+1],w=C[A+2];u.push(M,E,E,w,w,M)}}else{let C=g.array;T=g.version;for(let A=0,v=C.length/3-1;A<v;A+=3){let M=A+0,E=A+1,w=A+2;u.push(M,E,E,w,w,M)}}let m=new(g.count>=65535?Xa:Wa)(u,1);m.version=T;let p=r.get(d);if(p)e.remove(p);r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;if(f!==null){if(u.version<f.version)l(d)}}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function pg(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function l(d,u,f){if(f===0)return;t.drawElementsInstanced(i,u,r,d*a,f),n.update(u,i,f)}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let T=0;for(let m=0;m<f;m++)T+=u[m];n.update(T,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function mg(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function gg(t,e,n){let i=new WeakMap,s=new ve;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};if(u!==void 0)u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],A=0;if(f===!0)A=1;if(g===!0)A=2;if(T===!0)A=3;let v=o.attributes.position.count*A,M=1;if(v>e.maxTextureSize)M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let E=new Float32Array(v*M*4*d),w=new Ga(E,v,M,d);w.type=ni,w.needsUpdate=!0;let _=A*4;for(let z=0;z<d;z++){let I=m[z],O=p[z],J=C[z],L=v*M*4*z;for(let G=0;G<I.count;G++){let R=G*_;if(f===!0)s.fromBufferAttribute(I,G),E[L+R+0]=s.x,E[L+R+1]=s.y,E[L+R+2]=s.z,E[L+R+3]=0;if(g===!0)s.fromBufferAttribute(O,G),E[L+R+4]=s.x,E[L+R+5]=s.y,E[L+R+6]=s.z,E[L+R+7]=0;if(T===!0)s.fromBufferAttribute(J,G),E[L+R+8]=s.x,E[L+R+9]=s.y,E[L+R+10]=s.z,E[L+R+11]=J.itemSize===4?s.w:1}}u={count:d,texture:w,size:new Ht(v,M)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let T=0;T<l.length;T++)f+=l[T];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function _g(t,e,n,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(l.isInstancedMesh){if(l.hasEventListener("dispose",c)===!1)l.addEventListener("dispose",c);if(r.get(l)!==h){if(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,t.ARRAY_BUFFER);r.set(l,h)}}if(l.isSkinnedMesh){let f=l.skeleton;if(r.get(f)!==h)f.update(),r.set(f,h)}return u}function o(){r=new WeakMap}function c(l){let h=l.target;if(h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var xg={[jo]:"LINEAR_TONE_MAPPING",[Qo]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[gr]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[il]:"NEUTRAL_TONE_MAPPING",[el]:"CUSTOM_TONE_MAPPING"};function yg(t,e,n,i,s,r){let a=new un(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Re;l.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new be([0,2,0,0,2,0],2));let h=new Ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ge(l,h),u=new Rr(-1,1,1,-1,0,1),f=null,g=null,T=!1,m,p=null,C=[],A=!1;this.setSize=function(v,M){if(a.setSize(v,M),o!==null)o.setSize(v,M);if(c!==null)c.setSize(v,M);for(let E=0;E<C.length;E++){let w=C[E];if(w.setSize)w.setSize(v,M)}},this.setEffects=function(v){C=v,A=C.length>0&&C[0].isRenderPass===!0;let{width:M,height:E}=a;if(C.length>0&&o===null)o=new un(M,E,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new un(M,E,{type:Un,depthBuffer:!1,stencilBuffer:!1});for(let w=0;w<C.length;w++){let _=C[w];if(_.setSize)_.setSize(M,E)}},this.begin=function(v,M){if(T)return!1;if(v.toneMapping===Mn&&C.length===0)return!1;if(p=M,M!==null){let{width:E,height:w}=M;if(a.width!==E||a.height!==w)this.setSize(E,w)}if(A===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=Mn,!0},this.hasRenderPass=function(){return A},this.end=function(v,M){v.toneMapping=m,T=!0;let E=a,w=o;for(let _=0;_<C.length;_++){let S=C[_];if(S.enabled===!1)continue;if(S.render(v,w,E,M),S.needsSwap!==!1)E=w,w=w===o?c:o}if(f!==v.outputColorSpace||g!==v.toneMapping){if(f=v.outputColorSpace,g=v.toneMapping,h.defines={},$t.getTransfer(f)===fe)h.defines.SRGB_TRANSFER="";let _=xg[g];if(_)h.defines[_]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(d,u),p=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(c!==null)c.dispose();l.dispose(),h.dispose()}}var Ed=new ze,wc=new ji(1,1),wd=new Ga,Ad=new Yl,Cd=new Ja,ad=[],od=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function ks(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=ad[s];if(r===void 0)r=new Float32Array(s),ad[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Le(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ne(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function so(t,e){let n=od[e];if(n===void 0)n=new Int32Array(e),od[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Sg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Le(n,e))return;t.uniform2fv(this.addr,e),Ne(n,e)}}function Mg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Le(n,e))return;t.uniform3fv(this.addr,e),Ne(n,e)}}function bg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Le(n,e))return;t.uniform4fv(this.addr,e),Ne(n,e)}}function Tg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ne(n,e)}else{if(Le(n,i))return;hd.set(i),t.uniformMatrix2fv(this.addr,!1,hd),Ne(n,i)}}function Eg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ne(n,e)}else{if(Le(n,i))return;cd.set(i),t.uniformMatrix3fv(this.addr,!1,cd),Ne(n,i)}}function wg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ne(n,e)}else{if(Le(n,i))return;ld.set(i),t.uniformMatrix4fv(this.addr,!1,ld),Ne(n,i)}}function Ag(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Cg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Le(n,e))return;t.uniform2iv(this.addr,e),Ne(n,e)}}function Rg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Le(n,e))return;t.uniform3iv(this.addr,e),Ne(n,e)}}function Ig(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Le(n,e))return;t.uniform4iv(this.addr,e),Ne(n,e)}}function Pg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Lg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Le(n,e))return;t.uniform2uiv(this.addr,e),Ne(n,e)}}function Ng(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Le(n,e))return;t.uniform3uiv(this.addr,e),Ne(n,e)}}function Dg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Le(n,e))return;t.uniform4uiv(this.addr,e),Ne(n,e)}}function Ug(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)wc.compareFunction=n.isReversedDepthBuffer()?Ha:ka,r=wc;else r=Ed;n.setTexture2D(e||r,s)}function Fg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ad,s)}function Og(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Cd,s)}function Bg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||wd,s)}function zg(t){switch(t){case 5126:return vg;case 35664:return Sg;case 35665:return Mg;case 35666:return bg;case 35674:return Tg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Ig;case 5125:return Pg;case 36294:return Lg;case 36295:return Ng;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(t,e){t.uniform1fv(this.addr,e)}function Hg(t,e){let n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Gg(t,e){let n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Vg(t,e){let n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function Wg(t,e){let n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Xg(t,e){let n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qg(t,e){let n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Yg(t,e){t.uniform1iv(this.addr,e)}function $g(t,e){t.uniform2iv(this.addr,e)}function Zg(t,e){t.uniform3iv(this.addr,e)}function Jg(t,e){t.uniform4iv(this.addr,e)}function Kg(t,e){t.uniform1uiv(this.addr,e)}function jg(t,e){t.uniform2uiv(this.addr,e)}function Qg(t,e){t.uniform3uiv(this.addr,e)}function t_(t,e){t.uniform4uiv(this.addr,e)}function e_(t,e,n){let i=this.cache,s=e.length,r=so(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),Ne(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=wc;else a=Ed;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function n_(t,e,n){let i=this.cache,s=e.length,r=so(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),Ne(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Ad,r[a])}function i_(t,e,n){let i=this.cache,s=e.length,r=so(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),Ne(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Cd,r[a])}function s_(t,e,n){let i=this.cache,s=e.length,r=so(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),Ne(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||wd,r[a])}function r_(t){switch(t){case 5126:return kg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}class Rd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class Id{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}}class Pd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var bc=/(\w+)(\])?(\[|\.)?/g;function ud(t,e){t.seq.push(e),t.map[e.id]=e}function a_(t,e,n){let i=t.name,s=i.length;bc.lastIndex=0;while(!0){let r=bc.exec(i),a=bc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c)o=o|0;if(l===void 0||l==="["&&a+2===s){ud(n,l===void 0?new Rd(o,t,e):new Id(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new Pd(o),ud(n,d);n=d}}}class Dr{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);a_(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function dd(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var o_=37297,l_=0;function c_(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var fd=new zt;function h_(t){$t._getMatrix(fd,$t.workingColorSpace,t);let e=`mat3( ${fd.elements.map((n)=>n.toFixed(4))} )`;switch($t.getTransfer(t)){case Gl:return[e,"LinearTransferOETF"];case fe:return[e,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function pd(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+c_(t.getShaderSource(e),o)}else return r}function u_(t,e){let n=h_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var d_={[jo]:"Linear",[Qo]:"Reinhard",[tl]:"Cineon",[gr]:"ACESFilmic",[nl]:"AgX",[il]:"Neutral",[el]:"Custom"};function f_(t,e){let n=d_[e];if(n===void 0)return Ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var no=new B;function p_(){$t.getLuminanceCoefficients(no);let t=no.x.toFixed(4),e=no.y.toFixed(4),n=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function m_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function g_(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function __(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Nr(t){return t!==""}function md(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(t){return t.replace(x_,v_)}var y_=new Map;function v_(t,e){let n=Wt[e];if(n===void 0){let i=y_.get(e);if(i!==void 0)n=Wt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ac(n)}var S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(t){return t.replace(S_,M_)}function M_(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var b_={[Wi]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function T_(t){return b_[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E_={[Ds]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE_UV"};function w_(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return E_[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var A_={[qi]:"ENVMAP_MODE_REFRACTION"};function C_(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return A_[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[wu]:"ENVMAP_BLENDING_MULTIPLY",[Au]:"ENVMAP_BLENDING_MIX",[Cu]:"ENVMAP_BLENDING_ADD"};function I_(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return R_[t.combine]||"ENVMAP_BLENDING_NONE"}function P_(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function L_(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,c=T_(n),l=w_(n),h=C_(n),d=I_(n),u=P_(n),f=m_(n),g=g_(r),T=s.createProgram(),m,p,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Nr).join(`
`),m.length>0)m+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Nr).join(`
`),p.length>0)p+=`
`}else m=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mn?"#define TONE_MAPPING":"",n.toneMapping!==Mn?Wt.tonemapping_pars_fragment:"",n.toneMapping!==Mn?f_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,u_("linearToOutputTexel",n.outputColorSpace),p_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nr).join(`
`);if(a=Ac(a),a=md(a,n),a=gd(a,n),o=Ac(o),o=md(o,n),o=gd(o,n),a=_d(a),o=_d(o),n.isRawShaderMaterial!==!0)C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let A=C+m+a,v=C+p+o,M=dd(s,s.VERTEX_SHADER,A),E=dd(s,s.FRAGMENT_SHADER,v);if(s.attachShader(T,M),s.attachShader(T,E),n.index0AttributeName!==void 0)s.bindAttribLocation(T,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(T,0,"position");s.linkProgram(T);function w(I){if(t.debug.checkShaderErrors){let O=s.getProgramInfoLog(T)||"",J=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(E)||"",G=O.trim(),R=J.trim(),P=L.trim(),et=!0,V=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(et=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,T,M,E);else{let q=pd(s,M,"vertex"),j=pd(s,E,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+q+`
`+j)}else if(G!=="")Ot("WebGLProgram: Program Info Log:",G);else if(R===""||P==="")V=!1;if(V)I.diagnostics={runnable:et,programLog:G,vertexShader:{log:R,prefix:m},fragmentShader:{log:P,prefix:p}}}s.deleteShader(M),s.deleteShader(E),_=new Dr(s,T),S=__(s,T)}let _;this.getUniforms=function(){if(_===void 0)w(this);return _};let S;this.getAttributes=function(){if(S===void 0)w(this);return S};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=s.getProgramParameter(T,o_);return z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=M,this.fragmentShader=E,this}var N_=0;class Ld{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Nd(t),e.set(t,n);return n}}class Nd{constructor(t){this.id=N_++,this.code=t,this.usedTimes=0}}function D_(t){return t===Ji||t===Ba||t===za}function U_(t,e,n,i,s,r){let a=new Va,o=new Ld,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){if(c.add(_),_===0)return"uv";return`uv${_}`}function T(_,S,z,I,O,J){let L=I.fog,G=O.geometry,R=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=e.get(_.envMap||R,P),V=!!et&&et.mapping===_r?et.image.height:null,q=f[_.type];if(_.precision!==null){if(u=i.getMaxPrecision(_.precision),u!==_.precision)Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead.")}let j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_t=j!==void 0?j.length:0,At=0;if(G.morphAttributes.position!==void 0)At=1;if(G.morphAttributes.normal!==void 0)At=2;if(G.morphAttributes.color!==void 0)At=3;let ee,Nt,Y,st;if(q){let pe=Hn[q];ee=pe.vertexShader,Nt=pe.fragmentShader}else{ee=_.vertexShader,Nt=_.fragmentShader;let pe=o.getVertexShaderStage(_),ie=o.getFragmentShaderStage(_);o.update(_,pe,ie),Y=pe.id,st=ie.id}let rt=t.getRenderTarget(),bt=t.state.buffers.depth.getReversed(),It=O.isInstancedMesh===!0,ct=O.isBatchedMesh===!0,Qt=!!_.map,Lt=!!_.matcap,Ut=!!et,Tt=!!_.aoMap,Xt=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,nn=!!_.displacementMap,Ie=!!_.emissiveMap,Pe=!!_.metalnessMap,D=!!_.roughnessMap,sn=_.anisotropy>0,ne=_.clearcoat>0,Se=_.dispersion>0,b=_.retroreflectivity>0,x=_.iridescence>0,N=_.sheen>0,W=_.transmission>0,it=sn&&!!_.anisotropyMap,ot=ne&&!!_.clearcoatMap,ut=ne&&!!_.clearcoatNormalMap,Z=ne&&!!_.clearcoatRoughnessMap,Q=x&&!!_.iridescenceMap,xt=x&&!!_.iridescenceThicknessMap,Rt=N&&!!_.sheenColorMap,dt=N&&!!_.sheenRoughnessMap,at=!!_.specularMap,Pt=!!_.specularColorMap,Ft=!!_.specularIntensityMap,te=W&&!!_.transmissionMap,F=W&&!!_.thicknessMap,lt=!!_.gradientMap,K=!!_.alphaMap,ht=_.alphaTest>0,yt=!!_.alphaHash,nt=!!_.extensions,pt=Mn;if(_.toneMapped){if(rt===null||rt.isXRRenderTarget===!0)pt=t.toneMapping}let kt={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:Nt,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:st,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ct,batchingColor:ct&&O._colorsTexture!==null,instancing:It,instancingColor:It&&O.instanceColor!==null,instancingMorph:It&&O.morphTexture!==null,outputColorSpace:rt===null?t.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Qt,matcap:Lt,envMap:Ut,envMapMode:Ut&&et.mapping,envMapCubeUVHeight:V,aoMap:Tt,lightMap:Xt,bumpMap:Be,normalMap:_e,displacementMap:nn,emissiveMap:Ie,normalMapObjectSpace:_e&&_.normalMapType===Bu,normalMapTangentSpace:_e&&_.normalMapType===kl,packedNormalMap:_e&&_.normalMapType===kl&&D_(_.normalMap.format),metalnessMap:Pe,roughnessMap:D,anisotropy:sn,anisotropyMap:it,clearcoat:ne,clearcoatMap:ot,clearcoatNormalMap:ut,clearcoatRoughnessMap:Z,dispersion:Se,retroreflection:b,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:xt,sheen:N,sheenColorMap:Rt,sheenRoughnessMap:dt,specularMap:at,specularColorMap:Pt,specularIntensityMap:Ft,transmission:W,transmissionMap:te,thicknessMap:F,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:yt,combine:_.combine,mapUv:Qt&&g(_.map.channel),aoMapUv:Tt&&g(_.aoMap.channel),lightMapUv:Xt&&g(_.lightMap.channel),bumpMapUv:Be&&g(_.bumpMap.channel),normalMapUv:_e&&g(_.normalMap.channel),displacementMapUv:nn&&g(_.displacementMap.channel),emissiveMapUv:Ie&&g(_.emissiveMap.channel),metalnessMapUv:Pe&&g(_.metalnessMap.channel),roughnessMapUv:D&&g(_.roughnessMap.channel),anisotropyMapUv:it&&g(_.anisotropyMap.channel),clearcoatMapUv:ot&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(_.sheenRoughnessMap.channel),specularMapUv:at&&g(_.specularMap.channel),specularColorMapUv:Pt&&g(_.specularColorMap.channel),specularIntensityMapUv:Ft&&g(_.specularIntensityMap.channel),transmissionMapUv:te&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:K&&g(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_e||sn),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Qt||K),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,decodeVideoTexture:Qt&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Ie&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nn,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:nt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&_.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function m(_){let S=[];if(_.shaderID)S.push(_.shaderID);else S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let z in _.defines)S.push(z),S.push(_.defines[z]);if(_.isRawShaderMaterial===!1)p(S,_),C(S,_),S.push(t.outputColorSpace);return S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function C(_,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(_.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);_.push(a.mask)}function A(_){let S=f[_.type],z;if(S){let I=Hn[S];z=Ku.clone(I.uniforms)}else z=_.uniforms;return z}function v(_,S){let z=h.get(S);if(z!==void 0)++z.usedTimes;else z=new L_(t,S,_,s),l.push(z),h.set(S,z);return z}function M(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:T,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:w}}function F_(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,c){t.get(a)[o]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function O_(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function yd(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function vd(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let f=0;if(u.isInstancedMesh)f+=2;if(u.isSkinnedMesh)f+=1;return f}function o(u,f,g,T,m,p){let C=t[e];if(C===void 0)C={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:T,renderOrder:u.renderOrder,z:m,group:p},t[e]=C;else C.id=u.id,C.object=u,C.geometry=f,C.material=g,C.materialVariant=a(u),C.groupOrder=T,C.renderOrder=u.renderOrder,C.z=m,C.group=p;return e++,C}function c(u,f,g,T,m,p,C){if(C.reversedDepth===!0)m=-m;let A=o(u,f,g,T,m,p);if(g.transmission>0)i.push(A);else if(g.transparent===!0)s.push(A);else n.push(A)}function l(u,f,g,T,m,p){let C=o(u,f,g,T,m,p);if(g.transmission>0)i.unshift(C);else if(g.transparent===!0)s.unshift(C);else n.unshift(C)}function h(u,f){if(n.length>1)n.sort(u||O_);if(i.length>1)i.sort(f||yd);if(s.length>1)s.sort(f||yd)}function d(){for(let u=e,f=t.length;u<f;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function B_(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new vd,t.set(i,[a]);else if(s>=r.length)a=new vd,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function z_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new Vt};break;case"SpotLight":n={position:new B,direction:new B,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function k_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var H_=0;function G_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function V_(t){let e=new z_,n=k_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let s=new B,r=new re,a=new re;function o(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,T=0,m=0,p=0,C=0,A=0,v=0,M=0,E=0,w=0,_=0,S=0,z=0;l.sort(G_);for(let O=0,J=l.length;O<J;O++){let L=l[O],G=L.color,R=L.intensity,P=L.distance,et=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===Ji)et=L.shadow.map.texture;else et=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)h+=G.r*R,d+=G.g*R,u+=G.b*R;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],R);z++}else if(L.isSunLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,j=n.get(L);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=et;let _t=q.getViewportCount();for(let At=0;At<_t;At++)i.sunShadowMatrix[T+At]=q.getMatrix(At),i.sunShadowCascade[T+At]=q._cascadeData[At];T+=_t,g++}i.sun[f]=V,f++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,j=n.get(L);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=L.shadow.matrix,M++}i.directional[m]=V,m++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(G).multiplyScalar(R),V.distance=P,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[C]=V;let q=L.shadow;if(L.map){if(i.spotLightMap[_]=L.map,_++,q.updateMatrices(L),L.castShadow)S++}if(i.spotLightMatrix[C]=q.matrix,L.castShadow){let j=n.get(L);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.spotShadow[C]=j,i.spotShadowMap[C]=et,w++}C++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(G).multiplyScalar(R),V.halfWidth.set(L.width*0.5,0,0),V.halfHeight.set(0,L.height*0.5,0),i.rectArea[A]=V,A++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let q=L.shadow,j=n.get(L);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=L.shadow.matrix,E++}i.point[p]=V,p++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(R),V.groundColor.copy(L.groundColor).multiplyScalar(R),i.hemi[v]=V,v++}}if(A>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2;else i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;if(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==C||I.rectAreaLength!==A||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==w||I.numSpotMaps!==_||I.numLightProbes!==z)i.sun.length=f,i.directional.length=m,i.spot.length=C,i.rectArea.length=A,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+_-S,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=z,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=C,I.rectAreaLength=A,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=w,I.numSpotMaps=_,I.numLightProbes=z,i.version=H_++}function c(l,h){let d=0,u=0,f=0,g=0,T=0,m=0,p=h.matrixWorldInverse;for(let C=0,A=l.length;C<A;C++){let v=l[C];if(v.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(v.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=i.rectArea[T];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*0.5,0,0),M.halfHeight.set(0,v.height*0.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),T++}else if(v.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Sd(t){let e=new V_(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function W_(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Sd(t),e.set(s,[o]);else if(r>=a.length)o=new Sd(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`,Y_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],$_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Md=new re,Lr=new B,Tc=new B;function Z_(t,e,n){let i=new wr,s=new Ht,r=new Ht,a=new ve,o=new tc,c=new ec,l={},h=n.maxTextureSize,d={[Ls]:Ye,[Ye]:Ls,[Nn]:Nn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new ke(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let T=new ge(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let p=this.type;this.render=function(E,w,_){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(E.length===0)return;if(this.type===jh)Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi;let S=t.getRenderTarget(),z=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),O=t.state;if(O.setBlending(Dn),O.buffers.depth.getReversed()===!0)O.buffers.color.setClear(0,0,0,0);else O.buffers.color.setClear(1,1,1,1);O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=p!==this.type;if(J)w.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((G)=>G.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,G=E.length;L<G;L++){let R=E[L],P=R.shadow;if(P===void 0){Ot("WebGLShadowMap:",R,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);let et=P.getFrameExtents();if(s.multiply(et),r.copy(P.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/et.x),s.x=r.x*et.x,P.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/et.y),s.y=r.y*et.y,P.mapSize.y=r.y}let V=t.state.buffers.depth.getReversed();if(P.camera._reversedDepth=V,P.map===null||J===!0){if(P.map!==null){if(P.map.depthTexture!==null)P.map.depthTexture.dispose(),P.map.depthTexture=null;P.map.dispose()}if(this.type===Ps){if(R.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new un(s.x,s.y,{format:Ji,type:Un,minFilter:rn,magFilter:rn,generateMipmaps:!1}),P.map.texture.name=R.name+".shadowMap",P.map.depthTexture=new ji(s.x,s.y,ni),P.map.depthTexture.name=R.name+".shadowMapDepth",P.map.depthTexture.format=$i,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Mi,P.map.depthTexture.magFilter=Mi}else{if(R.isPointLight)P.map=new Cc(s.x),P.map.depthTexture=new Kl(s.x,bi);else P.map=new un(s.x,s.y),P.map.depthTexture=new ji(s.x,s.y,bi);if(P.map.depthTexture.name=R.name+".shadowMap",P.map.depthTexture.format=$i,this.type===Wi)P.map.depthTexture.compareFunction=V?Ha:ka,P.map.depthTexture.minFilter=rn,P.map.depthTexture.magFilter=rn;else P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Mi,P.map.depthTexture.magFilter=Mi}P.camera.updateProjectionMatrix()}if(P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==s.x||P.map.height!==s.y))P.map.setSize(s.x,s.y);let q=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();if(R.isPointLight!==!0)P.updateMatrices(R,_);for(let j=0;j<q;j++){let _t=P.getCamera(j);if(R.isPointLight){let{camera:At,matrix:ee}=P,Nt=R.distance||At.far;if(Nt!==At.far)At.far=Nt,At.updateProjectionMatrix();Lr.setFromMatrixPosition(R.matrixWorld),At.position.copy(Lr),Tc.copy(At.position),Tc.add(Y_[j]),At.up.copy($_[j]),At.lookAt(Tc),At.updateMatrixWorld(),ee.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Md.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Md,At.coordinateSystem,At.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)t.setRenderTarget(P.map,j),t.clear();else{if(j===0)t.setRenderTarget(P.map),t.clear();let At=P.getViewport(j);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),O.viewport(a)}i=P.getFrustum(j),v(w,_,_t,R,this.type)}if(P.isPointLightShadow!==!0&&this.type===Ps)C(P,_);P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,z,I)};function C(E,w){let _=e.update(T);if(u.defines.VSM_SAMPLES!==E.blurSamples)u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0;if(E.mapPass===null)E.mapPass=new un(s.x,s.y,{format:Ji,type:Un});else if(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)E.mapPass.setSize(E.map.width,E.map.height);u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,_,u,T,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,_,f,T,null)}function A(E,w,_,S){let z=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)z=I;else if(z=_.isPointLight===!0?c:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=z.uuid,J=w.uuid,L=l[O];if(L===void 0)L={},l[O]=L;let G=L[J];if(G===void 0)G=z.clone(),L[J]=G,w.addEventListener("dispose",M);z=G}if(z.visible=w.visible,z.wireframe=w.wireframe,S===Ps)z.side=w.shadowSide!==null?w.shadowSide:w.side;else z.side=w.shadowSide!==null?w.shadowSide:d[w.side];if(z.alphaMap=w.alphaMap,z.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,_.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let O=t.properties.get(z);O.light=_}return z}function v(E,w,_,S,z){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)){if((E.castShadow||E.receiveShadow&&z===Ps)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let J=e.update(E),L=E.material;if(Array.isArray(L)){let G=J.groups;for(let R=0,P=G.length;R<P;R++){let et=G[R],V=L[et.materialIndex];if(V&&V.visible){let q=A(E,V,S,z);E.onBeforeShadow(t,E,w,_,J,q,et),t.renderBufferDirect(_,null,J,q,E,et),E.onAfterShadow(t,E,w,_,J,q,et)}}}else if(L.visible){let G=A(E,L,S,z);E.onBeforeShadow(t,E,w,_,J,G,null),t.renderBufferDirect(_,null,J,G,E,null),E.onAfterShadow(t,E,w,_,J,G,null)}}}let O=E.children;for(let J=0,L=O.length;J<L;J++)v(O[J],w,_,S,z)}function M(E){E.target.removeEventListener("dispose",M);for(let _ in l){let S=l[_],z=E.target.uuid;if(z in S)S[z].dispose(),delete S[z]}}}function J_(t,e){function n(){let F=!1,lt=new ve,K=null,ht=new ve(0,0,0,0);return{setMask:function(yt){if(K!==yt&&!F)t.colorMask(yt,yt,yt,yt),K=yt},setLocked:function(yt){F=yt},setClear:function(yt,nt,pt,kt,pe){if(pe===!0)yt*=kt,nt*=kt,pt*=kt;if(lt.set(yt,nt,pt,kt),ht.equals(lt)===!1)t.clearColor(yt,nt,pt,kt),ht.copy(lt)},reset:function(){F=!1,K=null,ht.set(-1,0,0,0)}}}function i(){let F=!1,lt=!1,K=null,ht=null,yt=null;return{setReversed:function(nt){if(lt!==nt){let pt=e.get("EXT_clip_control");if(nt)pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT);else pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);lt=nt;let kt=yt;yt=null,this.setClear(kt)}},getReversed:function(){return lt},setTest:function(nt){if(nt)rt(t.DEPTH_TEST);else bt(t.DEPTH_TEST)},setMask:function(nt){if(K!==nt&&!F)t.depthMask(nt),K=nt},setFunc:function(nt){if(lt)nt=$u[nt];if(ht!==nt){switch(nt){case yu:t.depthFunc(t.NEVER);break;case vu:t.depthFunc(t.ALWAYS);break;case Su:t.depthFunc(t.LESS);break;case Ko:t.depthFunc(t.LEQUAL);break;case Mu:t.depthFunc(t.EQUAL);break;case bu:t.depthFunc(t.GEQUAL);break;case Tu:t.depthFunc(t.GREATER);break;case Eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ht=nt}},setLocked:function(nt){F=nt},setClear:function(nt){if(yt!==nt){if(yt=nt,lt)nt=1-nt;t.clearDepth(nt)}},reset:function(){F=!1,K=null,ht=null,yt=null,lt=!1}}}function s(){let F=!1,lt=null,K=null,ht=null,yt=null,nt=null,pt=null,kt=null,pe=null;return{setTest:function(ie){if(!F)if(ie)rt(t.STENCIL_TEST);else bt(t.STENCIL_TEST)},setMask:function(ie){if(lt!==ie&&!F)t.stencilMask(ie),lt=ie},setFunc:function(ie,Cn,Yn){if(K!==ie||ht!==Cn||yt!==Yn)t.stencilFunc(ie,Cn,Yn),K=ie,ht=Cn,yt=Yn},setOp:function(ie,Cn,Yn){if(nt!==ie||pt!==Cn||kt!==Yn)t.stencilOp(ie,Cn,Yn),nt=ie,pt=Cn,kt=Yn},setLocked:function(ie){F=ie},setClear:function(ie){if(pe!==ie)t.clearStencil(ie),pe=ie},reset:function(){F=!1,lt=null,K=null,ht=null,yt=null,nt=null,pt=null,kt=null,pe=null}}}let r=new n,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],T=null,m=!1,p=null,C=null,A=null,v=null,M=null,E=null,w=null,_=new Vt(0,0,0),S=0,z=!1,I=null,O=null,J=null,L=null,G=null,R=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,et=0,V=t.getParameter(t.VERSION);if(V.indexOf("WebGL")!==-1)et=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=et>=1;else if(V.indexOf("OpenGL ES")!==-1)et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=et>=2;let q=null,j={},_t=t.getParameter(t.SCISSOR_BOX),At=t.getParameter(t.VIEWPORT),ee=new ve().fromArray(_t),Nt=new ve().fromArray(At);function Y(F,lt,K,ht){let yt=new Uint8Array(4),nt=t.createTexture();t.bindTexture(F,nt),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<K;pt++)if(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)t.texImage3D(lt,0,t.RGBA,1,1,ht,0,t.RGBA,t.UNSIGNED_BYTE,yt);else t.texImage2D(lt+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,yt);return nt}let st={};st[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),st[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),st[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(t.DEPTH_TEST),a.setFunc(Ko),Be(!1),_e($o),rt(t.CULL_FACE),Tt(Dn);function rt(F){if(h[F]!==!0)t.enable(F),h[F]=!0}function bt(F){if(h[F]!==!1)t.disable(F),h[F]=!1}function It(F,lt){if(u[F]!==lt){if(t.bindFramebuffer(F,lt),u[F]=lt,F===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=lt;if(F===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=lt;return!0}return!1}function ct(F,lt){let K=g,ht=!1;if(F){if(K=f.get(lt),K===void 0)K=[],f.set(lt,K);let yt=F.textures;if(K.length!==yt.length||K[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,pt=yt.length;nt<pt;nt++)K[nt]=t.COLOR_ATTACHMENT0+nt;K.length=yt.length,ht=!0}}else if(K[0]!==t.BACK)K[0]=t.BACK,ht=!0;if(ht)t.drawBuffers(K)}function Qt(F){if(T!==F)return t.useProgram(F),T=F,!0;return!1}let Lt={[Ns]:t.FUNC_ADD,[tu]:t.FUNC_SUBTRACT,[eu]:t.FUNC_REVERSE_SUBTRACT};Lt[nu]=t.MIN,Lt[iu]=t.MAX;let Ut={[su]:t.ZERO,[ru]:t.ONE,[au]:t.SRC_COLOR,[lu]:t.SRC_ALPHA,[pu]:t.SRC_ALPHA_SATURATE,[du]:t.DST_COLOR,[hu]:t.DST_ALPHA,[ou]:t.ONE_MINUS_SRC_COLOR,[cu]:t.ONE_MINUS_SRC_ALPHA,[fu]:t.ONE_MINUS_DST_COLOR,[uu]:t.ONE_MINUS_DST_ALPHA,[mu]:t.CONSTANT_COLOR,[gu]:t.ONE_MINUS_CONSTANT_COLOR,[_u]:t.CONSTANT_ALPHA,[xu]:t.ONE_MINUS_CONSTANT_ALPHA};function Tt(F,lt,K,ht,yt,nt,pt,kt,pe,ie){if(F===Dn){if(m===!0)bt(t.BLEND),m=!1;return}if(m===!1)rt(t.BLEND),m=!0;if(F!==Qh){if(F!==p||ie!==z){if(C!==Ns||M!==Ns)t.blendEquation(t.FUNC_ADD),C=Ns,M=Ns;if(ie)switch(F){case Xi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ei:t.blendFunc(t.ONE,t.ONE);break;case Zo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jo:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",F);break}else switch(F){case Xi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ei:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Zo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",F);break}A=null,v=null,E=null,w=null,_.set(0,0,0),S=0,p=F,z=ie}return}if(yt=yt||lt,nt=nt||K,pt=pt||ht,lt!==C||yt!==M)t.blendEquationSeparate(Lt[lt],Lt[yt]),C=lt,M=yt;if(K!==A||ht!==v||nt!==E||pt!==w)t.blendFuncSeparate(Ut[K],Ut[ht],Ut[nt],Ut[pt]),A=K,v=ht,E=nt,w=pt;if(kt.equals(_)===!1||pe!==S)t.blendColor(kt.r,kt.g,kt.b,pe),_.copy(kt),S=pe;p=F,z=!1}function Xt(F,lt){F.side===Nn?bt(t.CULL_FACE):rt(t.CULL_FACE);let K=F.side===Ye;if(lt)K=!K;Be(K),F.blending===Xi&&F.transparent===!1?Tt(Dn):Tt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ht=F.stencilWrite;if(o.setTest(ht),ht)o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass);Ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?rt(t.SAMPLE_ALPHA_TO_COVERAGE):bt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(F){if(I!==F){if(F)t.frontFace(t.CW);else t.frontFace(t.CCW);I=F}}function _e(F){if(F!==Jh){if(rt(t.CULL_FACE),F!==O)if(F===$o)t.cullFace(t.BACK);else if(F===Kh)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else bt(t.CULL_FACE);O=F}function nn(F){if(F!==J){if(P)t.lineWidth(F);J=F}}function Ie(F,lt,K){if(F){if(rt(t.POLYGON_OFFSET_FILL),L!==lt||G!==K){if(L=lt,G=K,a.getReversed())lt=-lt;t.polygonOffset(lt,K)}}else bt(t.POLYGON_OFFSET_FILL)}function Pe(F){if(F)rt(t.SCISSOR_TEST);else bt(t.SCISSOR_TEST)}function D(F){if(F===void 0)F=t.TEXTURE0+R-1;if(q!==F)t.activeTexture(F),q=F}function sn(F,lt,K){if(K===void 0)if(q===null)K=t.TEXTURE0+R-1;else K=q;let ht=j[K];if(ht===void 0)ht={type:void 0,texture:void 0},j[K]=ht;if(ht.type!==F||ht.texture!==lt){if(q!==K)t.activeTexture(K),q=K;t.bindTexture(F,lt||st[F]),ht.type=F,ht.texture=lt}}function ne(){let F=j[q];if(F!==void 0&&F.type!==void 0)t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0}function Se(){try{t.compressedTexImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function x(){try{t.texSubImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function N(){try{t.texSubImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function it(){try{t.compressedTexSubImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function ot(){try{t.texStorage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function ut(){try{t.texStorage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function Z(){try{t.texImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function Q(){try{t.texImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function xt(F){if(d[F]!==void 0)return d[F];else return t.getParameter(F)}function Rt(F,lt){if(d[F]!==lt)t.pixelStorei(F,lt),d[F]=lt}function dt(F){if(ee.equals(F)===!1)t.scissor(F.x,F.y,F.z,F.w),ee.copy(F)}function at(F){if(Nt.equals(F)===!1)t.viewport(F.x,F.y,F.z,F.w),Nt.copy(F)}function Pt(F,lt){let K=l.get(lt);if(K===void 0)K=new WeakMap,l.set(lt,K);let ht=K.get(F);if(ht===void 0)ht=t.getUniformBlockIndex(lt,F.name),K.set(F,ht)}function Ft(F,lt){let ht=l.get(lt).get(F);if(c.get(lt)!==ht)t.uniformBlockBinding(lt,ht,F.__bindingPointIndex),c.set(lt,ht)}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,j={},u={},f=new WeakMap,g=[],T=null,m=!1,p=null,C=null,A=null,v=null,M=null,E=null,w=null,_=new Vt(0,0,0),S=0,z=!1,I=null,O=null,J=null,L=null,G=null,ee.set(0,0,t.canvas.width,t.canvas.height),Nt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:It,drawBuffers:ct,useProgram:Qt,setBlending:Tt,setMaterial:Xt,setFlipSided:Be,setCullFace:_e,setLineWidth:nn,setPolygonOffset:Ie,setScissorTest:Pe,activeTexture:D,bindTexture:sn,unbindTexture:ne,compressedTexImage2D:Se,compressedTexImage3D:b,texImage2D:Z,texImage3D:Q,pixelStorei:Rt,getParameter:xt,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:ot,texStorage3D:ut,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:W,compressedTexSubImage3D:it,scissor:dt,viewport:at,reset:te}}function K_(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function T(b,x){return g?new OffscreenCanvas(b,x):fr("canvas")}function m(b,x,N){let W=1,it=Se(b);if(it.width>N||it.height>N)W=N/Math.max(it.width,it.height);if(W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ot=Math.floor(W*it.width),ut=Math.floor(W*it.height);if(u===void 0)u=T(ot,ut);let Z=x?T(ot,ut):u;return Z.width=ot,Z.height=ut,Z.getContext("2d").drawImage(b,0,0,ot,ut),Ot("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ot+"x"+ut+")."),Z}else{if("data"in b)Ot("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+").");return b}return b}function p(b){return b.generateMipmaps}function C(b){t.generateMipmap(b)}function A(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function v(b,x,N,W,it,ot=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ut;if(W){if(ut=e.get("EXT_texture_norm16"),!ut)Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Z=x;if(x===t.RED){if(N===t.FLOAT)Z=t.R32F;if(N===t.HALF_FLOAT)Z=t.R16F;if(N===t.UNSIGNED_BYTE)Z=t.R8;if(N===t.UNSIGNED_SHORT&&ut)Z=ut.R16_EXT;if(N===t.SHORT&&ut)Z=ut.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(N===t.UNSIGNED_BYTE)Z=t.R8UI;if(N===t.UNSIGNED_SHORT)Z=t.R16UI;if(N===t.UNSIGNED_INT)Z=t.R32UI;if(N===t.BYTE)Z=t.R8I;if(N===t.SHORT)Z=t.R16I;if(N===t.INT)Z=t.R32I}if(x===t.RG){if(N===t.FLOAT)Z=t.RG32F;if(N===t.HALF_FLOAT)Z=t.RG16F;if(N===t.UNSIGNED_BYTE)Z=t.RG8;if(N===t.UNSIGNED_SHORT&&ut)Z=ut.RG16_EXT;if(N===t.SHORT&&ut)Z=ut.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(N===t.UNSIGNED_BYTE)Z=t.RG8UI;if(N===t.UNSIGNED_SHORT)Z=t.RG16UI;if(N===t.UNSIGNED_INT)Z=t.RG32UI;if(N===t.BYTE)Z=t.RG8I;if(N===t.SHORT)Z=t.RG16I;if(N===t.INT)Z=t.RG32I}if(x===t.RGB_INTEGER){if(N===t.UNSIGNED_BYTE)Z=t.RGB8UI;if(N===t.UNSIGNED_SHORT)Z=t.RGB16UI;if(N===t.UNSIGNED_INT)Z=t.RGB32UI;if(N===t.BYTE)Z=t.RGB8I;if(N===t.SHORT)Z=t.RGB16I;if(N===t.INT)Z=t.RGB32I}if(x===t.RGBA_INTEGER){if(N===t.UNSIGNED_BYTE)Z=t.RGBA8UI;if(N===t.UNSIGNED_SHORT)Z=t.RGBA16UI;if(N===t.UNSIGNED_INT)Z=t.RGBA32UI;if(N===t.BYTE)Z=t.RGBA8I;if(N===t.SHORT)Z=t.RGBA16I;if(N===t.INT)Z=t.RGBA32I}if(x===t.RGB){if(N===t.UNSIGNED_SHORT&&ut)Z=ut.RGB16_EXT;if(N===t.SHORT&&ut)Z=ut.RGB16_SNORM_EXT;if(N===t.UNSIGNED_INT_5_9_9_9_REV)Z=t.RGB9_E5;if(N===t.UNSIGNED_INT_10F_11F_11F_REV)Z=t.R11F_G11F_B10F}if(x===t.RGBA){let Q=ot?Gl:$t.getTransfer(it);if(N===t.FLOAT)Z=t.RGBA32F;if(N===t.HALF_FLOAT)Z=t.RGBA16F;if(N===t.UNSIGNED_BYTE)Z=Q===fe?t.SRGB8_ALPHA8:t.RGBA8;if(N===t.UNSIGNED_SHORT&&ut)Z=ut.RGBA16_EXT;if(N===t.SHORT&&ut)Z=ut.RGBA16_SNORM_EXT;if(N===t.UNSIGNED_SHORT_4_4_4_4)Z=t.RGBA4;if(N===t.UNSIGNED_SHORT_5_5_5_1)Z=t.RGB5_A1}if(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)e.get("EXT_color_buffer_float");return Z}function M(b,x){let N;if(b){if(x===null||x===bi||x===Us)N=t.DEPTH24_STENCIL8;else if(x===ni)N=t.DEPTH32F_STENCIL8;else if(x===yr)N=t.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===bi||x===Us)N=t.DEPTH_COMPONENT24;else if(x===ni)N=t.DEPTH_COMPONENT32F;else if(x===yr)N=t.DEPTH_COMPONENT16;return N}function E(b,x){if(p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Mi&&b.minFilter!==rn)return Math.log2(Math.max(x.width,x.height))+1;else if(b.mipmaps!==void 0&&b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return x.mipmaps.length;else return 1}function w(b){let x=b.target;if(x.removeEventListener("dispose",w),S(x),x.isVideoTexture)h.delete(x);if(x.isHTMLTexture)d.delete(x)}function _(b){let x=b.target;x.removeEventListener("dispose",_),I(x)}function S(b){let x=i.get(b);if(x.__webglInit===void 0)return;let N=b.source,W=f.get(N);if(W){let it=W[x.__cacheKey];if(it.usedTimes--,it.usedTimes===0)z(b);if(Object.keys(W).length===0)f.delete(N)}i.remove(b)}function z(b){let x=i.get(b);t.deleteTexture(x.__webglTexture);let N=b.source,W=f.get(N);delete W[x.__cacheKey],a.memory.textures--}function I(b){let x=i.get(b);if(b.depthTexture)b.depthTexture.dispose(),i.remove(b.depthTexture);if(b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let it=0;it<x.__webglFramebuffer[W].length;it++)t.deleteFramebuffer(x.__webglFramebuffer[W][it]);else t.deleteFramebuffer(x.__webglFramebuffer[W]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)t.deleteFramebuffer(x.__webglFramebuffer[W]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let W=0;W<x.__webglColorRenderbuffer.length;W++)if(x.__webglColorRenderbuffer[W])t.deleteRenderbuffer(x.__webglColorRenderbuffer[W])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=b.textures;for(let W=0,it=N.length;W<it;W++){let ot=i.get(N[W]);if(ot.__webglTexture)t.deleteTexture(ot.__webglTexture),a.memory.textures--;i.remove(N[W])}i.remove(b)}let O=0;function J(){O=0}function L(){return O}function G(b){O=b}function R(){let b=O;if(b>=s.maxTextures)Ot("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return O+=1,b}function P(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function et(b,x){let N=i.get(b);if(b.isVideoTexture)sn(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let W=b.image;if(W===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(N,b,x);return}}else if(b.isExternalTexture)N.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function V(b,x){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){bt(N,b,x);return}else if(b.isExternalTexture)N.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function q(b,x){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){bt(N,b,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function j(b,x){let N=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&N.__version!==b.version){It(N,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}let _t={[Pa]:t.REPEAT,[La]:t.CLAMP_TO_EDGE,[Ru]:t.MIRRORED_REPEAT},At={[Mi]:t.NEAREST,[Iu]:t.NEAREST_MIPMAP_NEAREST,[xr]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Na]:t.LINEAR_MIPMAP_NEAREST,[Yi]:t.LINEAR_MIPMAP_LINEAR},ee={[zu]:t.NEVER,[Wu]:t.ALWAYS,[ku]:t.LESS,[ka]:t.LEQUAL,[Hu]:t.EQUAL,[Ha]:t.GEQUAL,[Gu]:t.GREATER,[Vu]:t.NOTEQUAL};function Nt(b,x){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===Na||x.magFilter===xr||x.magFilter===Yi||x.minFilter===rn||x.minFilter===Na||x.minFilter===xr||x.minFilter===Yi))Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,_t[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,_t[x.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,_t[x.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,At[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,At[x.minFilter]),x.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ee[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mi)return;if(x.minFilter!==xr&&x.minFilter!==Yi)return;if(x.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Y(b,x){let N=!1;if(b.__webglInit===void 0)b.__webglInit=!0,x.addEventListener("dispose",w);let W=x.source,it=f.get(W);if(it===void 0)it={},f.set(W,it);let ot=P(x);if(ot!==b.__cacheKey){if(it[ot]===void 0)it[ot]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0;it[ot].usedTimes++;let ut=it[b.__cacheKey];if(ut!==void 0){if(it[b.__cacheKey].usedTimes--,ut.usedTimes===0)z(x)}b.__cacheKey=ot,b.__webglTexture=it[ot].texture}return N}function st(b,x,N){return Math.floor(Math.floor(b/N)/x)}function rt(b,x,N,W){let ot=b.updateRanges;if(ot.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,W,x.data);else{ot.sort((Rt,dt)=>Rt.start-dt.start);let ut=0;for(let Rt=1;Rt<ot.length;Rt++){let dt=ot[ut],at=ot[Rt],Pt=dt.start+dt.count,Ft=st(at.start,x.width,4),te=st(dt.start,x.width,4);if(at.start<=Pt+1&&Ft===te&&st(at.start+at.count-1,x.width,4)===Ft)dt.count=Math.max(dt.count,at.start+at.count-dt.start);else++ut,ot[ut]=at}ot.length=ut+1;let Z=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),xt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,dt=ot.length;Rt<dt;Rt++){let at=ot[Rt],Pt=Math.floor(at.start/4),Ft=Math.ceil(at.count/4),te=Pt%x.width,F=Math.floor(Pt/x.width),lt=Ft,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,te,F,lt,1,N,W,x.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,xt)}}function bt(b,x,N){let W=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)W=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)W=t.TEXTURE_3D;let it=Y(b,x),ot=x.source;n.bindTexture(W,b.__webglTexture,t.TEXTURE0+N);let ut=i.get(ot);if(ot.version!==ut.__version||it===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let K=$t.getPrimaries($t.workingColorSpace),ht=x.colorSpace===Ki?null:$t.getPrimaries(x.colorSpace),yt=x.colorSpace===Ki||K===ht?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=ne(x,Q);let xt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),dt=v(x.internalFormat,xt,Rt,x.normalized,x.colorSpace,x.isVideoTexture);Nt(W,x);let at,Pt=x.mipmaps,Ft=x.isVideoTexture!==!0,te=ut.__version===void 0||it===!0,F=ot.dataReady,lt=E(x,Q);if(x.isDepthTexture){if(dt=M(x.format===Zi,x.type),te)if(Ft)n.texStorage2D(t.TEXTURE_2D,1,dt,Q.width,Q.height);else n.texImage2D(t.TEXTURE_2D,0,dt,Q.width,Q.height,0,xt,Rt,null)}else if(x.isDataTexture)if(Pt.length>0){if(Ft&&te)n.texStorage2D(t.TEXTURE_2D,lt,dt,Pt[0].width,Pt[0].height);for(let K=0,ht=Pt.length;K<ht;K++)if(at=Pt[K],Ft){if(F)n.texSubImage2D(t.TEXTURE_2D,K,0,0,at.width,at.height,xt,Rt,at.data)}else n.texImage2D(t.TEXTURE_2D,K,dt,at.width,at.height,0,xt,Rt,at.data);x.generateMipmaps=!1}else if(Ft){if(te)n.texStorage2D(t.TEXTURE_2D,lt,dt,Q.width,Q.height);if(F)rt(x,Q,xt,Rt)}else n.texImage2D(t.TEXTURE_2D,0,dt,Q.width,Q.height,0,xt,Rt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(Ft&&te)n.texStorage3D(t.TEXTURE_2D_ARRAY,lt,dt,Pt[0].width,Pt[0].height,Q.depth);for(let K=0,ht=Pt.length;K<ht;K++)if(at=Pt[K],x.format!==Fn)if(xt!==null)if(Ft){if(F)if(x.layerUpdates.size>0){let yt=xc(at.width,at.height,x.format,x.type);for(let nt of x.layerUpdates){let pt=at.data.subarray(nt*yt/at.data.BYTES_PER_ELEMENT,(nt+1)*yt/at.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,nt,at.width,at.height,1,xt,pt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,Q.depth,xt,at.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,dt,at.width,at.height,Q.depth,0,at.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ft){if(F)n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,Q.depth,xt,Rt,at.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,K,dt,at.width,at.height,Q.depth,0,xt,Rt,at.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(Ft&&te)n.texStorage2D(t.TEXTURE_2D,lt,dt,Pt[0].width,Pt[0].height);for(let K=0,ht=Pt.length;K<ht;K++)if(at=Pt[K],x.format!==Fn)if(xt!==null)if(Ft){if(F)n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,at.width,at.height,xt,at.data)}else n.compressedTexImage2D(t.TEXTURE_2D,K,dt,at.width,at.height,0,at.data);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ft){if(F)n.texSubImage2D(t.TEXTURE_2D,K,0,0,at.width,at.height,xt,Rt,at.data)}else n.texImage2D(t.TEXTURE_2D,K,dt,at.width,at.height,0,xt,Rt,at.data)}else if(x.isDataArrayTexture)if(Ft){if(te)n.texStorage3D(t.TEXTURE_2D_ARRAY,lt,dt,Q.width,Q.height,Q.depth);if(F)if(x.layerUpdates.size>0){let K=xc(Q.width,Q.height,x.format,x.type);for(let ht of x.layerUpdates){let yt=Q.data.subarray(ht*K/Q.data.BYTES_PER_ELEMENT,(ht+1)*K/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ht,Q.width,Q.height,1,xt,Rt,yt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xt,Rt,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,xt,Rt,Q.data);else if(x.isData3DTexture)if(Ft){if(te)n.texStorage3D(t.TEXTURE_3D,lt,dt,Q.width,Q.height,Q.depth);if(F)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xt,Rt,Q.data)}else n.texImage3D(t.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,xt,Rt,Q.data);else if(x.isFramebufferTexture){if(te)if(Ft)n.texStorage2D(t.TEXTURE_2D,lt,dt,Q.width,Q.height);else{let{width:K,height:ht}=Q;for(let yt=0;yt<lt;yt++)n.texImage2D(t.TEXTURE_2D,yt,dt,K,ht,0,xt,Rt,null),K>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let K=t.canvas;if(!K.hasAttribute("layoutsubtree"))K.setAttribute("layoutsubtree","true");if(Q.parentNode!==K){K.appendChild(Q),d.add(x),K.onpaint=(ht)=>{let yt=ht.changedElements;for(let nt of d)if(yt.includes(nt.image))nt.needsUpdate=!0},K.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let{RGBA:yt,RGBA:nt,UNSIGNED_BYTE:pt}=t;t.texElementImage2D(t.TEXTURE_2D,0,yt,nt,pt,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Ft&&te){let K=Se(Pt[0]);n.texStorage2D(t.TEXTURE_2D,lt,dt,K.width,K.height)}for(let K=0,ht=Pt.length;K<ht;K++)if(at=Pt[K],Ft){if(F)n.texSubImage2D(t.TEXTURE_2D,K,0,0,xt,Rt,at)}else n.texImage2D(t.TEXTURE_2D,K,dt,xt,Rt,at);x.generateMipmaps=!1}else if(Ft){if(te){let K=Se(Q);n.texStorage2D(t.TEXTURE_2D,lt,dt,K.width,K.height)}if(F)n.texSubImage2D(t.TEXTURE_2D,0,0,0,xt,Rt,Q)}else n.texImage2D(t.TEXTURE_2D,0,dt,xt,Rt,Q);if(p(x))C(W);if(ut.__version=ot.version,x.onUpdate)x.onUpdate(x)}b.__version=x.version}function It(b,x,N){if(x.image.length!==6)return;let W=Y(b,x),it=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+N);let ot=i.get(it);if(it.version!==ot.__version||W===!0){n.activeTexture(t.TEXTURE0+N);let ut=$t.getPrimaries($t.workingColorSpace),Z=x.colorSpace===Ki?null:$t.getPrimaries(x.colorSpace),Q=x.colorSpace===Ki||ut===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let nt=0;nt<6;nt++){if(!xt&&!Rt)dt[nt]=m(x.image[nt],!0,s.maxCubemapSize);else dt[nt]=Rt?x.image[nt].image:x.image[nt];dt[nt]=ne(x,dt[nt])}let at=dt[0],Pt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),te=v(x.internalFormat,Pt,Ft,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,lt=ot.__version===void 0||W===!0,K=it.dataReady,ht=E(x,at);Nt(t.TEXTURE_CUBE_MAP,x);let yt;if(xt){if(F&&lt)n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,te,at.width,at.height);for(let nt=0;nt<6;nt++){yt=dt[nt].mipmaps;for(let pt=0;pt<yt.length;pt++){let kt=yt[pt];if(x.format!==Fn)if(Pt!==null)if(F){if(K)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,0,0,kt.width,kt.height,Pt,kt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,te,kt.width,kt.height,0,kt.data);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(F){if(K)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,0,0,kt.width,kt.height,Pt,Ft,kt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,te,kt.width,kt.height,0,Pt,Ft,kt.data)}}}else{if(yt=x.mipmaps,F&&lt){if(yt.length>0)ht++;let nt=Se(dt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,te,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Rt){if(F){if(K)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt[nt].width,dt[nt].height,Pt,Ft,dt[nt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,dt[nt].width,dt[nt].height,0,Pt,Ft,dt[nt].data);for(let pt=0;pt<yt.length;pt++){let pe=yt[pt].image[nt].image;if(F){if(K)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,0,0,pe.width,pe.height,Pt,Ft,pe.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,te,pe.width,pe.height,0,Pt,Ft,pe.data)}}else{if(F){if(K)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt,Ft,dt[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,Pt,Ft,dt[nt]);for(let pt=0;pt<yt.length;pt++){let kt=yt[pt];if(F){if(K)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,0,0,Pt,Ft,kt.image[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,te,Pt,Ft,kt.image[nt])}}}if(p(x))C(t.TEXTURE_CUBE_MAP);if(ot.__version=it.version,x.onUpdate)x.onUpdate(x)}b.__version=x.version}function ct(b,x,N,W,it,ot){let ut=r.convert(N.format,N.colorSpace),Z=r.convert(N.type),Q=v(N.internalFormat,ut,Z,N.normalized,N.colorSpace),xt=i.get(x),Rt=i.get(N);if(Rt.__renderTarget=x,!xt.__hasExternalTextures){let dt=Math.max(1,x.width>>ot),at=Math.max(1,x.height>>ot);if(it===t.TEXTURE_3D||it===t.TEXTURE_2D_ARRAY)n.texImage3D(it,ot,Q,dt,at,x.depth,0,ut,Z,null);else n.texImage2D(it,ot,Q,dt,at,0,ut,Z,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,it,Rt.__webglTexture,0,Pe(x));else if(it===t.TEXTURE_2D||it>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,W,it,Rt.__webglTexture,ot);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qt(b,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){let W=x.depthTexture,it=W&&W.isDepthTexture?W.type:null,ot=M(x.stencilBuffer,it),ut=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(D(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(x),ot,x.width,x.height);else if(N)t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(x),ot,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,ot,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ut,t.RENDERBUFFER,b)}else{let W=x.textures;for(let it=0;it<W.length;it++){let ot=W[it],ut=r.convert(ot.format,ot.colorSpace),Z=r.convert(ot.type),Q=v(ot.internalFormat,ut,Z,ot.normalized,ot.colorSpace);if(D(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(x),Q,x.width,x.height);else if(N)t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(x),Q,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(b,x,N){let W=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(x.depthTexture);if(it.__renderTarget=x,!it.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(W){if(it.__webglInit===void 0)it.__webglInit=!0,x.depthTexture.addEventListener("dispose",w);if(it.__webglTexture===void 0){it.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,it.__webglTexture),Nt(t.TEXTURE_CUBE_MAP,x.depthTexture);let xt=r.convert(x.depthTexture.format),Rt=r.convert(x.depthTexture.type),dt;if(x.depthTexture.format===$i)dt=t.DEPTH_COMPONENT24;else if(x.depthTexture.format===Zi)dt=t.DEPTH24_STENCIL8;for(let at=0;at<6;at++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,dt,x.width,x.height,0,xt,Rt,null)}}else et(x.depthTexture,0);let ot=it.__webglTexture,ut=Pe(x),Z=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Q=x.depthTexture.format===Zi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===$i)if(D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Z,ot,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,Q,Z,ot,0);else if(x.depthTexture.format===Zi)if(D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Z,ot,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,Q,Z,ot,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(b){let x=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(W){let it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",it)};W.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=W}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let W=0;W<6;W++)Lt(x.__webglFramebuffer[W],b,W);else{let W=b.texture.mipmaps;if(W&&W.length>0)Lt(x.__webglFramebuffer[0],b,0);else Lt(x.__webglFramebuffer,b,0)}else if(N){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=t.createRenderbuffer(),Qt(x.__webglDepthbuffer[W],b,!1);else{let it=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}else{let W=b.texture.mipmaps;if(W&&W.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Qt(x.__webglDepthbuffer,b,!1);else{let it=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Tt(b,x,N){let W=i.get(b);if(x!==void 0)ct(W.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(N!==void 0)Ut(b)}function Xt(b){let x=b.texture,N=i.get(b),W=i.get(x);b.addEventListener("dispose",_);let it=b.textures,ot=b.isWebGLCubeRenderTarget===!0,ut=it.length>1;if(!ut){if(W.__webglTexture===void 0)W.__webglTexture=t.createTexture();W.__version=x.version,a.memory.textures++}if(ot){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let Q=0;Q<x.mipmaps.length;Q++)N.__webglFramebuffer[Z][Q]=t.createFramebuffer()}else N.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)N.__webglFramebuffer[Z]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ut)for(let Z=0,Q=it.length;Z<Q;Z++){let xt=i.get(it[Z]);if(xt.__webglTexture===void 0)xt.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&D(b)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<it.length;Z++){let Q=it[Z];N.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);let xt=r.convert(Q.format,Q.colorSpace),Rt=r.convert(Q.type),dt=v(Q.internalFormat,xt,Rt,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),at=Pe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,at,dt,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)N.__webglDepthRenderbuffer=t.createRenderbuffer(),Qt(N.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ot){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Nt(t.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ct(N.__webglFramebuffer[Z][Q],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else ct(N.__webglFramebuffer[Z],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);if(p(x))C(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ut){for(let Z=0,Q=it.length;Z<Q;Z++){let xt=it[Z],Rt=i.get(xt),dt=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)dt=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(dt,Rt.__webglTexture),Nt(dt,xt),ct(N.__webglFramebuffer,b,xt,t.COLOR_ATTACHMENT0+Z,dt,0),p(xt))C(dt)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)Z=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Z,W.__webglTexture),Nt(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ct(N.__webglFramebuffer[Q],b,x,t.COLOR_ATTACHMENT0,Z,Q);else ct(N.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,Z,0);if(p(x))C(Z);n.unbindTexture()}if(b.depthBuffer)Ut(b)}function Be(b){let x=b.textures;for(let N=0,W=x.length;N<W;N++){let it=x[N];if(p(it)){let ot=A(b),ut=i.get(it).__webglTexture;n.bindTexture(ot,ut),C(ot),n.unbindTexture()}}}let _e=[],nn=[];function Ie(b){if(b.samples>0){if(D(b)===!1){let{textures:x,width:N,height:W}=b,it=t.COLOR_BUFFER_BIT,ot=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ut=i.get(b),Z=x.length>1;if(Z)for(let xt=0;xt<x.length;xt++)n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=b.texture.mipmaps;if(Q&&Q.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(b.resolveDepthBuffer){if(b.depthBuffer)it|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)it|=t.STENCIL_BUFFER_BIT}if(Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ut.__webglColorRenderbuffer[xt]);let Rt=i.get(x[xt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Rt,0)}if(t.blitFramebuffer(0,0,N,W,0,0,N,W,it,t.NEAREST),c===!0){if(_e.length=0,nn.length=0,_e.push(t.COLOR_ATTACHMENT0+xt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)_e.push(ot),nn.push(ot),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,nn);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let xt=0;xt<x.length;xt++){n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.RENDERBUFFER,ut.__webglColorRenderbuffer[xt]);let Rt=i.get(x[xt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xt,t.TEXTURE_2D,Rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Pe(b){return Math.min(s.maxSamples,b.samples)}function D(b){let x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function sn(b){let x=a.render.frame;if(h.get(b)!==x)h.set(b,x),b.update()}function ne(b,x){let{colorSpace:N,format:W,type:it}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return x;if(N!==Hl&&N!==Ki)if($t.getTransfer(N)===fe){if(W!==Fn||it!==bn)Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",N);return x}function Se(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)l.width=b.displayWidth,l.height=b.displayHeight;else l.width=b.width,l.height=b.height;return l}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=et,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Tt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function j_(t,e){function n(i,s=Ki){let r,a=$t.getTransfer(s);if(i===bn)return t.UNSIGNED_BYTE;if(i===rl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===al)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nu)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Du)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pu)return t.BYTE;if(i===Lu)return t.SHORT;if(i===yr)return t.UNSIGNED_SHORT;if(i===sl)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Un)return t.HALF_FLOAT;if(i===Uu)return t.ALPHA;if(i===Fu)return t.RGB;if(i===Fn)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===Zi)return t.DEPTH_STENCIL;if(i===Ou)return t.RED;if(i===ol)return t.RED_INTEGER;if(i===Ji)return t.RG;if(i===ll)return t.RG_INTEGER;if(i===cl)return t.RGBA_INTEGER;if(i===Da||i===Ua||i===Fa||i===Oa)if(a===fe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===ul||i===dl||i===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl||i===_l||i===xl||i===Ba||i===yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_l)return r.COMPRESSED_R11_EAC;if(i===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ba)return r.COMPRESSED_RG11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vl||i===Sl||i===Ml||i===bl||i===Tl||i===El||i===wl||i===Al||i===Cl||i===Rl||i===Il||i===Pl||i===Ll||i===Nl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Ul||i===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Dl)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===Bl||i===za||i===zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Us)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`;class Dd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ka(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:Q_,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new li(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ud extends ii{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,c=null,l=null,h=null,d=null,u=null,f=null,g=typeof XRWebGLBinding<"u",T=new Dd,m={},p=e.getContextAttributes(),C=null,A=null,v=[],M=[],E=new Ht,w=null,_=null,S=new qe;S.viewport=new ve;let z=new qe;z.viewport=new ve;let I=[S,z],O=new pc,J=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=v[Y];if(st===void 0)st=new Mr,v[Y]=st;return st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=v[Y];if(st===void 0)st=new Mr,v[Y]=st;return st.getGripSpace()},this.getHand=function(Y){let st=v[Y];if(st===void 0)st=new Mr,v[Y]=st;return st.getHandSpace()};function G(Y){let st=M.indexOf(Y.inputSource);if(st===-1)return;let rt=v[st];if(rt!==void 0)rt.update(Y.inputSource,Y.frame,c||r),rt.dispatchEvent({type:Y.type,data:Y.inputSource})}function R(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<v.length;Y++){let st=M[Y];if(st===null)continue;M[Y]=null,v[Y].disconnect(st)}J=null,L=null,T.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(C),u=null,d=null,h=null,i=null,A=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),_!==null){let Y=_.camera;Y.fov=_.fov,Y.zoom=_.zoom,Y.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){if(s=Y,n.isPresenting===!0)Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){if(a=Y,n.isPresenting===!0)Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",R),i.addEventListener("inputsourceschange",P),p.xrCompatible!==!0)await e.makeXRCompatible();if(w=t.getPixelRatio(),t.getSize(E),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let rt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new un(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let rt=null,bt=null,It=null;if(p.depth)It=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=p.stencil?Zi:$i,bt=p.stencil?Us:bi;let ct={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new un(d.textureWidth,d.textureHeight,{format:Fn,type:bn,depthTexture:new ji(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),c=null,r=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function P(Y){for(let st=0;st<Y.removed.length;st++){let rt=Y.removed[st],bt=M.indexOf(rt);if(bt>=0)M[bt]=null,v[bt].disconnect(rt)}for(let st=0;st<Y.added.length;st++){let rt=Y.added[st],bt=M.indexOf(rt);if(bt===-1){for(let ct=0;ct<v.length;ct++)if(ct>=M.length){M.push(rt),bt=ct;break}else if(M[ct]===null){M[ct]=rt,bt=ct;break}if(bt===-1)break}let It=v[bt];if(It)It.connect(rt)}}let et=new B,V=new B;function q(Y,st,rt){et.setFromMatrixPosition(st.matrixWorld),V.setFromMatrixPosition(rt.matrixWorld);let bt=et.distanceTo(V),It=st.projectionMatrix.elements,ct=rt.projectionMatrix.elements,Qt=It[14]/(It[10]-1),Lt=It[14]/(It[10]+1),Ut=(It[9]+1)/It[5],Tt=(It[9]-1)/It[5],Xt=(It[8]-1)/It[0],Be=(ct[8]+1)/ct[0],_e=Qt*Xt,nn=Qt*Be,Ie=bt/(-Xt+Be),Pe=Ie*-Xt;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let D=Qt+Ie,sn=Lt+Ie,ne=_e-Pe,Se=nn+(bt-Pe),b=Ut*Lt/sn*D,x=Tt*Lt/sn*D;Y.projectionMatrix.makePerspective(ne,Se,b,x,D,sn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,st){if(st===null)Y.matrixWorld.copy(Y.matrix);else Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix);Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let{near:st,far:rt}=Y;if(T.texture!==null){if(T.depthNear>0)st=T.depthNear;if(T.depthFar>0)rt=T.depthFar}if(O.near=z.near=S.near=st,O.far=z.far=S.far=rt,J!==O.near||L!==O.far)i.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,L=O.far;O.layers.mask=Y.layers.mask|6,S.layers.mask=O.layers.mask&-5,z.layers.mask=O.layers.mask&-3;let bt=Y.parent,It=O.cameras;j(O,bt);for(let ct=0;ct<It.length;ct++)j(It[ct],bt);if(It.length===2)q(O,S,z);else O.projectionMatrix.copy(S.projectionMatrix);if(_===null&&Y.isPerspectiveCamera)_={camera:Y,fov:Y.fov,zoom:Y.zoom};_t(Y,O,bt)};function _t(Y,st,rt){if(rt===null)Y.matrix.copy(st.matrixWorld);else Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld);if(Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera)Y.fov=Ea*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(Y){if(o=Y,d!==null)d.fixedFoveation=Y;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=Y},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(O)},this.getCameraTexture=function(Y){return m[Y]};let At=null;function ee(Y,st){if(l=st.getViewerPose(c||r),f=st,l!==null){let rt=l.views;if(u!==null)t.setRenderTargetFramebuffer(A,u.framebuffer),t.setRenderTarget(A);let bt=!1;if(rt.length!==O.cameras.length)O.cameras.length=0,bt=!0;for(let Lt=0;Lt<rt.length;Lt++){let Ut=rt[Lt],Tt=null;if(u!==null)Tt=u.getViewport(Ut);else{let Be=h.getViewSubImage(d,Ut);if(Tt=Be.viewport,Lt===0)t.setRenderTargetTextures(A,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(A)}let Xt=I[Lt];if(Xt===void 0)Xt=new qe,Xt.layers.enable(Lt),Xt.viewport=new ve,I[Lt]=Xt;if(Xt.matrix.fromArray(Ut.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ut.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Lt===0)O.matrix.copy(Xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(bt===!0)O.cameras.push(Xt)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let Lt=h.getDepthInformation(rt[0]);if(Lt&&Lt.isValid&&Lt.texture)T.init(Lt,i.renderState)}if(It&&It.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let Lt=0;Lt<rt.length;Lt++){let Ut=rt[Lt].camera;if(Ut){let Tt=m[Ut];if(!Tt)Tt=new Ka,m[Ut]=Tt;let Xt=h.getCameraImage(Ut);Tt.sourceTexture=Xt}}}}for(let rt=0;rt<v.length;rt++){let bt=M[rt],It=v[rt];if(bt!==null&&It!==void 0)It.update(bt,st,c||r)}if(At)At(Y,st);if(st.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:st});f=null}let Nt=new bd;Nt.setAnimationLoop(ee),this.setAnimationLoop=function(Y){At=Y},this.dispose=function(){}}}var ex=new re,Fd=new zt;Fd.set(-1,0,0,0,1,0,0,0,1);function nx(t,e){function n(m,p){if(m.matrixAutoUpdate===!0)m.updateMatrix();p.value.copy(m.matrix)}function i(m,p){if(p.color.getRGB(m.fogColor.value,jl(t)),p.isFog)m.fogNear.value=p.near,m.fogFar.value=p.far;else if(p.isFogExp2)m.fogDensity.value=p.density}function s(m,p,C,A,v){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(m,p);else if(p.isMeshLambertMaterial){if(r(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(m,p),d(m,p);else if(p.isMeshPhongMaterial){if(r(m,p),h(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(m,p),u(m,p),p.isMeshPhysicalMaterial)f(m,p,v)}else if(p.isMeshMatcapMaterial)r(m,p),g(m,p);else if(p.isMeshDepthMaterial)r(m,p);else if(p.isMeshDistanceMaterial)r(m,p),T(m,p);else if(p.isMeshNormalMaterial)r(m,p);else if(p.isLineBasicMaterial){if(a(m,p),p.isLineDashedMaterial)o(m,p)}else if(p.isPointsMaterial)c(m,p,C,A);else if(p.isSpriteMaterial)l(m,p);else if(p.isShadowMaterial)m.color.value.copy(p.color),m.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(m,p){if(m.opacity.value=p.opacity,p.color)m.diffuse.value.copy(p.color);if(p.emissive)m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.bumpMap){if(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye)m.bumpScale.value*=-1}if(p.normalMap){if(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye)m.normalScale.value.negate()}if(p.displacementMap)m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias;if(p.emissiveMap)m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform);if(p.specularMap)m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest;let C=e.get(p),A=C.envMap,v=C.envMapRotation;if(A){if(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Fd);m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio}if(p.lightMap)m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform);if(p.aoMap)m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform)}function a(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map)m.map.value=p.map,n(p.map,m.mapTransform)}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,C,A){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=A*0.5,p.map)m.map.value=p.map,n(p.map,m.uvTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function l(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,0.0001)}function d(m,p){if(p.gradientMap)m.gradientMap.value=p.gradientMap}function u(m,p){if(m.metalness.value=p.metalness,p.metalnessMap)m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=p.roughness,p.roughnessMap)m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform);if(p.envMap)m.envMapIntensity.value=p.envMapIntensity}function f(m,p,C){if(m.ior.value=p.ior,p.sheen>0){if(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform);if(p.sheenRoughnessMap)m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform);if(p.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye)m.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)m.dispersion.value=p.dispersion;if(p.retroreflectivity>0)m.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform);if(p.iridescenceThicknessMap)m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(p.transmission>0){if(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap)m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=p.thickness,p.thicknessMap)m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap)m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform);if(p.specularIntensityMap)m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,p){if(p.matcap)m.matcap.value=p.matcap}function T(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ix(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let E=M.program;i.uniformBlockBinding(v,E)}function l(v,M){let E=s[v.id];if(E===void 0)m(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",C);let w=M.program;i.updateUBOMapping(v,w);let _=e.render.frame;if(r[v.id]!==_)u(v),r[v.id]=_}function h(v){let M=d();v.__bindingPointIndex=M;let E=t.createBuffer(),w=v.__size,_=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],E=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let _=0,S=E.length;_<S;_++){let z=E[_];if(Array.isArray(z))for(let I=0,O=z.length;I<O;I++)f(z[I],_,I,w);else f(z,_,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(v,M,E,w){if(T(v,M,E,w)===!0){let{__offset:_,value:S}=v;if(Array.isArray(S)){let z=0;for(let I=0;I<S.length;I++){let O=S[I],J=p(O);if(g(O,v.__data,z),typeof O!=="number"&&typeof O!=="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O))z+=J.storage/Float32Array.BYTES_PER_ELEMENT}}else g(S,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,v.__data)}}function g(v,M,E){if(typeof v==="number"||typeof v==="boolean")M[0]=v;else if(v.isMatrix3)M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0;else if(ArrayBuffer.isView(v))M.set(new v.constructor(v.buffer,v.byteOffset,M.length));else v.toArray(M,E)}function T(v,M,E,w){let _=v.value,S=M+"_"+E;if(w[S]===void 0){if(typeof _==="number"||typeof _==="boolean")w[S]=_;else if(ArrayBuffer.isView(_))w[S]=_.slice();else w[S]=_.clone();return!0}else{let z=w[S];if(typeof _==="number"||typeof _==="boolean"){if(z!==_)return w[S]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(z.equals(_)===!1)return z.copy(_),!0}return!1}function m(v){let M=v.uniforms,E=0,w=16;for(let S=0,z=M.length;S<z;S++){let I=Array.isArray(M[S])?M[S]:[M[S]];for(let O=0,J=I.length;O<J;O++){let L=I[O],G=Array.isArray(L.value)?L.value:[L.value];for(let R=0,P=G.length;R<P;R++){let et=G[R],V=p(et),q=E%w,j=q%V.boundary,_t=q+j;if(E+=j,_t!==0&&w-_t<V.storage)E+=w-_t;L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=V.storage}}}let _=E%w;if(_>0)E+=w-_;return v.__size=E,v.__cache={},this}function p(v){let M={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")M.boundary=4,M.storage=4;else if(v.isVector2)M.boundary=8,M.storage=8;else if(v.isVector3||v.isColor)M.boundary=16,M.storage=12;else if(v.isVector4)M.boundary=16,M.storage=16;else if(v.isMatrix3)M.boundary=48,M.storage=48;else if(v.isMatrix4)M.boundary=64,M.storage=64;else if(v.isTexture)Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))M.boundary=16,M.storage=v.byteLength;else Ot("WebGLRenderer: Unsupported uniform value type.",v);return M}function C(v){let M=v.target;M.removeEventListener("dispose",C);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function rx(){if(kn===null)kn=new qa(sx,16,16,Ji,Un),kn.name="DFG_LUT",kn.minFilter=rn,kn.magFilter=rn,kn.wrapS=La,kn.wrapT=La,kn.generateMipmaps=!1,kn.needsUpdate=!0;return kn}class Rc{constructor(t={}){let{canvas:e=Xu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=bn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let g=u,T=new Set([cl,ll,ol]),m=new Set([bn,bi,yr,Us,rl,al]),p=new Uint32Array(4),C=new Int32Array(4),A=new B,v=null,M=null,E=[],w=[],_=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,z=!1,I=null,O=null,J=null,L=null;this._outputColorSpace=Fs;let G=0,R=0,P=null,et=-1,V=null,q=new ve,j=new ve,_t=null,At=new Vt(0),ee=0,Nt=e.width,Y=e.height,st=1,rt=null,bt=null,It=new ve(0,0,Nt,Y),ct=new ve(0,0,Nt,Y),Qt=!1,Lt=new wr,Ut=!1,Tt=!1,Xt=new re,Be=new B,_e=new ve,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Pe(){return P===null?st:1}let D=n;function sn(y,U){return e.getContext(y,U)}let ne,Se,b,x,N,W,it,ot,ut,Z,Q,xt,Rt,dt,at,Pt,Ft,te,F,lt,K,ht,yt;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Zh}`);if(e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",ie,!1),D===null){if(D=sn("webgl2",y),D===null)if(sn("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(y){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Bt("WebGLRenderer: "+y.message),y}function nt(){if(ne=new dg(D),ne.init(),K=new j_(D,ne),Se=new ng(D,ne,t,K),b=new J_(D,ne),Se.reversedDepthBuffer&&d)b.buffers.depth.setReversed(!0);O=D.createFramebuffer(),J=D.createFramebuffer(),L=D.createFramebuffer(),x=new mg(D),N=new F_,W=new K_(D,ne,b,N,Se,K,x),it=new ug(S),ot=new _p(D),ht=new tg(D,ot),ut=new fg(D,ot,x,ht),Z=new _g(D,ut,ot,ht,x),te=new gg(D,Se,W),at=new ig(N),Q=new U_(S,it,ne,Se,ht,at),xt=new nx(S,N),Rt=new B_,dt=new W_(ne),Ft=new Q0(S,it,b,Z,f,o),Pt=new Z_(S,Z,Se),yt=new ix(D,x,Se,b),F=new eg(D,ne,x),lt=new pg(D,ne,x),x.programs=Q.programs,S.capabilities=Se,S.extensions=ne,S.properties=N,S.renderLists=Rt,S.shadowMap=Pt,S.state=b,S.info=x}if(g!==bn)_=new yg(g,e.width,e.height,a,i,s);let pt=new Ud(S,D);this.xr=pt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ne.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=ne.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(y){if(y===void 0)return;st=y,this.setSize(Nt,Y,!1)},this.getSize=function(y){return y.set(Nt,Y)},this.setSize=function(y,U,X=!0){if(pt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Nt=y,Y=U,e.width=Math.floor(y*st),e.height=Math.floor(U*st),X===!0)e.style.width=y+"px",e.style.height=U+"px";if(_!==null)_.setSize(e.width,e.height);this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Nt*st,Y*st).floor()},this.setDrawingBufferSize=function(y,U,X){Nt=y,Y=U,st=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(g===bn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(q)},this.getViewport=function(y){return y.copy(It)},this.setViewport=function(y,U,X,k){if(y.isVector4)It.set(y.x,y.y,y.z,y.w);else It.set(y,U,X,k);b.viewport(q.copy(It).multiplyScalar(st).round())},this.getScissor=function(y){return y.copy(ct)},this.setScissor=function(y,U,X,k){if(y.isVector4)ct.set(y.x,y.y,y.z,y.w);else ct.set(y,U,X,k);b.scissor(j.copy(ct).multiplyScalar(st).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(y){b.setScissorTest(Qt=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){bt=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let k=0;if(y){let H=!1;if(P!==null){let gt=P.texture.format;H=T.has(gt)}if(H){let gt=P.texture.type,Mt=m.has(gt),mt=Ft.getClearColor(),Et=Ft.getClearAlpha(),Ct=mt.r,Gt=mt.g,qt=mt.b;if(Mt)p[0]=Ct,p[1]=Gt,p[2]=qt,p[3]=Et,D.clearBufferuiv(D.COLOR,0,p);else C[0]=Ct,C[1]=Gt,C[2]=qt,C[3]=Et,D.clearBufferiv(D.COLOR,0,C)}else k|=D.COLOR_BUFFER_BIT}if(U)k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(X)k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(k!==0)D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Ft.dispose(),Rt.dispose(),dt.dispose(),N.dispose(),it.dispose(),Z.dispose(),ht.dispose(),yt.dispose(),Q.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ch),pt.removeEventListener("sessionend",hh),Bi.stop()};function kt(y){y.preventDefault(),pr("WebGLRenderer: Context Lost."),z=!0}function pe(){pr("WebGLRenderer: Context Restored."),z=!1;let y=x.autoReset,U=Pt.enabled,X=Pt.autoUpdate,k=Pt.needsUpdate,H=Pt.type;nt(),x.autoReset=y,Pt.enabled=U,Pt.autoUpdate=X,Pt.needsUpdate=k,Pt.type=H}function ie(y){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Cn(y){let U=y.target;U.removeEventListener("dispose",Cn),Yn(U)}function Yn(y){Rf(y),N.remove(y)}function Rf(y){let U=N.get(y).programs;if(U!==void 0){if(U.forEach(function(X){Q.releaseProgram(X)}),y.isShaderMaterial)Q.releaseShaderCache(y)}}this.renderBufferDirect=function(y,U,X,k,H,gt){if(U===null)U=nn;let Mt=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Lf(y,U,X,k,H);b.setMaterial(k,Mt);let Et=X.index,Ct=1;if(k.wireframe===!0){if(Et=ut.getWireframeAttribute(X),Et===void 0)return;Ct=2}let Gt=X.drawRange,qt=X.attributes.position,wt=Gt.start*Ct,se=(Gt.start+Gt.count)*Ct;if(gt!==null)wt=Math.max(wt,gt.start*Ct),se=Math.min(se,(gt.start+gt.count)*Ct);if(Et!==null)wt=Math.max(wt,0),se=Math.min(se,Et.count);else if(qt!==void 0&&qt!==null)wt=Math.max(wt,0),se=Math.min(se,qt.count);let Ae=se-wt;if(Ae<0||Ae===1/0)return;ht.setup(H,k,mt,X,Et);let xe,de=F;if(Et!==null)xe=ot.get(Et),de=lt,de.setIndex(xe);if(H.isMesh)if(k.wireframe===!0)b.setLineWidth(k.wireframeLinewidth*Pe()),de.setMode(D.LINES);else de.setMode(D.TRIANGLES);else if(H.isLine){let Ve=k.linewidth;if(Ve===void 0)Ve=1;if(b.setLineWidth(Ve*Pe()),H.isLineSegments)de.setMode(D.LINES);else if(H.isLineLoop)de.setMode(D.LINE_LOOP);else de.setMode(D.LINE_STRIP)}else if(H.isPoints)de.setMode(D.POINTS);else if(H.isSprite)de.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(!ne.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ve,_multiDrawCounts:vt,_multiDrawCount:Ke}=H,Kt=Et?ot.get(Et).bytesPerElement:1,pn=N.get(k).currentProgram.getUniforms();for(let Rn=0;Rn<Ke;Rn++)pn.setValue(D,"_gl_DrawID",Rn),de.render(Ve[Rn]/Kt,vt[Rn])}else de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)de.renderInstances(wt,Ae,H.count);else if(X.isInstancedBufferGeometry){let Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,Ve);de.renderInstances(wt,Ae,vt)}else de.render(wt,Ae)};function lh(y,U,X,k){if(I!==null&&y.isNodeMaterial)I.setObject(k,y);if(Ut===!0)at.setState(y,X,!1);if(y.transparent===!0&&y.side===Nn&&y.forceSinglePass===!1)y.side=Ye,y.needsUpdate=!0,Kr(y,U,k),y.side=Ls,y.needsUpdate=!0,Kr(y,U,k),y.side=Nn;else Kr(y,U,k)}this.compile=function(y,U,X=null){if(X===null)X=y;if(I!==null)I.renderStart(y,U,X);if(M=dt.get(X),M.init(U),w.push(M),X.traverseVisible(function(H){if(H.isLight&&H.layers.test(U.layers)){if(M.pushLight(H),H.castShadow)M.pushShadow(H)}}),y!==X)y.traverseVisible(function(H){if(H.isLight&&H.layers.test(U.layers)){if(M.pushLight(H),H.castShadow)M.pushShadow(H)}});if(M.setupLights(),I!==null)I.updateLights(M.state.lightsArray);if(Tt=this.localClippingEnabled,Ut=at.init(this.clippingPlanes,Tt),Ut===!0)at.setGlobalState(this.clippingPlanes,U);if(I!==null)Pt.render(M.state.shadowsArray,X,U);let k=new Set;if(y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let gt=H.material;if(gt)if(Array.isArray(gt))for(let Mt=0;Mt<gt.length;Mt++){let mt=gt[Mt];lh(mt,X,U,H),k.add(mt)}else lh(gt,X,U,H),k.add(gt)}),M=w.pop(),I!==null)I.renderEnd();return k},this.compileAsync=function(y,U,X=null){let k=this.compile(y,U,X);return new Promise((H)=>{function gt(){if(k.forEach(function(Mt){let Et=N.get(Mt).currentProgram;if(Et===void 0||Et.isReady())k.delete(Mt)}),k.size===0){H(y);return}setTimeout(gt,10)}if(ne.get("KHR_parallel_shader_compile")!==null)gt();else setTimeout(gt,10)})};let vo=null;function If(y){if(vo)vo(y)}function ch(){Bi.stop()}function hh(){Bi.start()}let Bi=new bd;if(Bi.setAnimationLoop(If),typeof self<"u")Bi.setContext(self);this.setAnimationLoop=function(y){vo=y,pt.setAnimationLoop(y),y===null?Bi.stop():Bi.start()},pt.addEventListener("sessionstart",ch),pt.addEventListener("sessionend",hh),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(I!==null)I.renderStart(y,U);let X=pt.enabled===!0&&pt.isPresenting===!0,k=_!==null&&(P===null||X)&&_.begin(S,P);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(U.parent===null&&U.matrixWorldAutoUpdate===!0)U.updateMatrixWorld();if(pt.enabled===!0&&pt.isPresenting===!0&&(_===null||_.isCompositing()===!1)){if(pt.cameraAutoUpdate===!0)pt.updateCamera(U);U=pt.getCamera()}if(y.isScene===!0)y.onBeforeRender(S,y,U,P);if(M=dt.get(y,w.length),M.init(U),M.state.textureUnits=W.getTextureUnits(),w.push(M),Xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Lt.setFromProjectionMatrix(Xt,Wl,U.reversedDepth),Tt=this.localClippingEnabled,Ut=at.init(this.clippingPlanes,Tt),v=Rt.get(y,E.length),v.init(),E.push(v),pt.enabled===!0&&pt.isPresenting===!0){let Mt=S.xr.getDepthSensingMesh();if(Mt!==null)So(Mt,U,-1/0,S.sortObjects)}if(So(y,U,0,S.sortObjects),v.finish(),I!==null)I.updateLights(M.state.lightsArray);if(S.sortObjects===!0)v.sort(rt,bt);if(Ie=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ie)Ft.addToRenderList(v,y);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Ut===!0)at.beginShadows();let H=M.state.shadowsArray;if(Pt.render(H,y,U),Ut===!0)at.endShadows();if((k&&_.hasRenderPass())===!1){let{opaque:Mt,transmissive:mt}=v;if(M.setupLights(),U.isArrayCamera){let Et=U.cameras;if(mt.length>0)for(let Ct=0,Gt=Et.length;Ct<Gt;Ct++){let qt=Et[Ct];dh(Mt,mt,y,qt)}if(Ie)Ft.render(y);for(let Ct=0,Gt=Et.length;Ct<Gt;Ct++){let qt=Et[Ct];uh(v,y,qt,qt.viewport)}}else{if(mt.length>0)dh(Mt,mt,y,U);if(Ie)Ft.render(y);uh(v,y,U)}}if(P!==null&&R===0)W.updateMultisampleRenderTarget(P),W.updateRenderTargetMipmap(P);if(k)_.end(S);if(y.isScene===!0)y.onAfterRender(S,y,U);if(ht.resetDefaultState(),et=-1,V=null,w.pop(),w.length>0){if(M=w[w.length-1],W.setTextureUnits(M.state.textureUnits),Ut===!0)at.setGlobalState(S.clippingPlanes,M.state.camera)}else M=null;if(E.pop(),E.length>0)v=E[E.length-1];else v=null;if(I!==null)I.renderEnd()};function So(y,U,X,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(U)}else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight){if(M.pushLight(y),y.castShadow)M.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Lt)){if(k)_e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Xt);let Mt=Z.update(y),mt=y.material;if(mt.visible)v.push(y,Mt,mt,X,_e.z,null,U)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(Lt)){let Mt=Z.update(y),mt=y.material;if(k){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();_e.copy(y.boundingSphere.center)}else{if(Mt.boundingSphere===null)Mt.computeBoundingSphere();_e.copy(Mt.boundingSphere.center)}_e.applyMatrix4(y.matrixWorld).applyMatrix4(Xt)}if(Array.isArray(mt)){let Et=Mt.groups;for(let Ct=0,Gt=Et.length;Ct<Gt;Ct++){let qt=Et[Ct],wt=mt[qt.materialIndex];if(wt&&wt.visible)v.push(y,Mt,wt,X,_e.z,qt,U)}}else if(mt.visible)v.push(y,Mt,mt,X,_e.z,null,U)}}}let gt=y.children;for(let Mt=0,mt=gt.length;Mt<mt;Mt++)So(gt[Mt],U,X,k)}function uh(y,U,X,k){let{opaque:H,transmissive:gt,transparent:Mt}=y;if(M.setupLightsView(X),Ut===!0)at.setGlobalState(S.clippingPlanes,X);if(k)b.viewport(q.copy(k));if(H.length>0)Jr(H,U,X);if(gt.length>0)Jr(gt,U,X);if(Mt.length>0)Jr(Mt,U,X);b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function dh(y,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[k.id]===void 0){let wt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[k.id]=new un(1,1,{generateMipmaps:!0,type:wt?Un:bn,minFilter:Yi,samples:Math.max(4,Se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let gt=M.state.transmissionRenderTarget[k.id],Mt=k.viewport||q;gt.setSize(Mt.z*S.transmissionResolutionScale,Mt.w*S.transmissionResolutionScale);let mt=S.getRenderTarget(),Et=S.getActiveCubeFace(),Ct=S.getActiveMipmapLevel();if(S.setRenderTarget(gt),S.getClearColor(At),ee=S.getClearAlpha(),ee<1)S.setClearColor(16777215,0.5);if(S.clear(),Ie)Ft.render(X);let Gt=S.toneMapping;S.toneMapping=Mn;let qt=k.viewport;if(k.viewport!==void 0)k.viewport=void 0;if(M.setupLightsView(k),Ut===!0)at.setGlobalState(S.clippingPlanes,k);if(Jr(y,X,k),W.updateMultisampleRenderTarget(gt),W.updateRenderTargetMipmap(gt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let se=0,Ae=U.length;se<Ae;se++){let xe=U[se],{object:de,geometry:Ve,material:vt,group:Ke}=xe;if(vt.side===Nn&&de.layers.test(k.layers)){let Kt=vt.side;vt.side=Ye,vt.needsUpdate=!0,fh(de,X,k,Ve,vt,Ke),vt.side=Kt,vt.needsUpdate=!0,wt=!0}}if(wt===!0)W.updateMultisampleRenderTarget(gt),W.updateRenderTargetMipmap(gt)}if(S.setRenderTarget(mt,Et,Ct),S.setClearColor(At,ee),qt!==void 0)k.viewport=qt;S.toneMapping=Gt}function Jr(y,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let H=0,gt=y.length;H<gt;H++){let Mt=y[H],{object:mt,geometry:Et,group:Ct}=Mt,Gt=Mt.material;if(Gt.allowOverride===!0&&k!==null)Gt=k;if(mt.layers.test(X.layers))fh(mt,U,X,Et,Gt,Ct)}}function fh(y,U,X,k,H,gt){if(I!==null&&H.isNodeMaterial)I.setObject(y,H);if(y.onBeforeRender(S,U,X,k,H,gt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(S,U,X,k,y,gt),H.transparent===!0&&H.side===Nn&&H.forceSinglePass===!1)H.side=Ye,H.needsUpdate=!0,S.renderBufferDirect(X,U,k,H,y,gt),H.side=Ls,H.needsUpdate=!0,S.renderBufferDirect(X,U,k,H,y,gt),H.side=Nn;else S.renderBufferDirect(X,U,k,H,y,gt);y.onAfterRender(S,U,X,k,H,gt)}function Kr(y,U,X){if(U.isScene!==!0)U=nn;let k=N.get(y),H=M.state.lights,gt=M.state.shadowsArray,Mt=H.state.version,mt=Q.getParameters(y,H.state,gt,U,X,M.state.lightProbeGridArray),Et=Q.getProgramCacheKey(mt),Ct=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Gt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(k.envMap=it.get(y.envMap||k.environment,Gt),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ct===void 0)y.addEventListener("dispose",Cn),Ct=new Map,k.programs=Ct;let qt=Ct.get(Et);if(qt!==void 0){if(k.currentProgram===qt&&k.lightsStateVersion===Mt)return mh(y,mt),qt}else{if(mt.uniforms=Q.getUniforms(y),I!==null&&y.isNodeMaterial)I.build(y,X,mt);y.onBeforeCompile(mt,S),qt=Q.acquireProgram(mt,Et),Ct.set(Et,qt),k.uniforms=mt.uniforms}let wt=k.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)wt.clippingPlanes=at.uniform;if(mh(y,mt),k.needsLights=Df(y),k.lightsStateVersion=Mt,k.needsLights)wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.sunLights.value=H.state.sun,wt.sunLightShadows.value=H.state.sunShadow,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.sunShadowMatrix.value=H.state.sunShadowMatrix,wt.sunShadowCascade.value=H.state.sunShadowCascade,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix;return k.lightProbeGrid=M.state.lightProbeGridArray.length>0,k.currentProgram=qt,k.uniformsList=null,qt}function ph(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Dr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function mh(y,U){let X=N.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Pf(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;A.setFromMatrixPosition(U.matrixWorld);for(let X=0,k=y.length;X<k;X++){let H=y[X];if(H.texture!==null&&H.boundingBox.containsPoint(A))return H}return null}function Lf(y,U,X,k,H){if(U.isScene!==!0)U=nn;W.resetTextureUnits();let gt=U.fog,Mt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,mt=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$t.workingColorSpace,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ct=it.get(k.envMap||Mt,Et),Gt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!X.morphAttributes.position,se=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color,xe=Mn;if(k.toneMapped){if(P===null||P.isXRRenderTarget===!0)xe=S.toneMapping}let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ve=de!==void 0?de.length:0,vt=N.get(k),Ke=M.state.lights;if(Ut===!0){if(Tt===!0||y!==V){let me=y===V&&k.id===et;at.setState(k,y,me)}}let Kt=!1;if(k.version===vt.__version){if(vt.needsLights&&vt.lightsStateVersion!==Ke.state.version)Kt=!0;else if(vt.outputColorSpace!==mt)Kt=!0;else if(H.isBatchedMesh&&vt.batching===!1)Kt=!0;else if(!H.isBatchedMesh&&vt.batching===!0)Kt=!0;else if(H.isBatchedMesh&&vt.batchingColor===!0&&H._colorsTexture===null)Kt=!0;else if(H.isBatchedMesh&&vt.batchingColor===!1&&H._colorsTexture!==null)Kt=!0;else if(H.isInstancedMesh&&vt.instancing===!1)Kt=!0;else if(!H.isInstancedMesh&&vt.instancing===!0)Kt=!0;else if(H.isSkinnedMesh&&vt.skinning===!1)Kt=!0;else if(!H.isSkinnedMesh&&vt.skinning===!0)Kt=!0;else if(H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null)Kt=!0;else if(H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null)Kt=!0;else if(H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null)Kt=!0;else if(H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null)Kt=!0;else if(vt.envMap!==Ct)Kt=!0;else if(k.fog===!0&&vt.fog!==gt)Kt=!0;else if(vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==at.numPlanes||vt.numIntersection!==at.numIntersection))Kt=!0;else if(vt.vertexAlphas!==Gt)Kt=!0;else if(vt.vertexTangents!==qt)Kt=!0;else if(vt.morphTargets!==wt)Kt=!0;else if(vt.morphNormals!==se)Kt=!0;else if(vt.morphColors!==Ae)Kt=!0;else if(vt.toneMapping!==xe)Kt=!0;else if(vt.morphTargetsCount!==Ve)Kt=!0;else if(!!vt.lightProbeGrid!==M.state.lightProbeGridArray.length>0)Kt=!0}else Kt=!0,vt.__version=k.version;let pn=vt.currentProgram;if(Kt===!0){if(pn=Kr(k,U,H),I&&k.isNodeMaterial)I.onUpdateProgram(k,pn,vt)}let Rn=!1,fi=!1,cs=!1,he=pn.getUniforms(),we=vt.uniforms;if(b.useProgram(pn.program))Rn=!0,fi=!0,cs=!0;if(k.id!==et)et=k.id,fi=!0;if(vt.needsLights){let me=Pf(M.state.lightProbeGridArray,H);if(vt.lightProbeGrid!==me)vt.lightProbeGrid=me,fi=!0}if(Rn||V!==y){if(b.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();he.setValue(D,"projectionMatrix",y.projectionMatrix),he.setValue(D,"viewMatrix",y.matrixWorldInverse);let mi=he.map.cameraPosition;if(mi!==void 0)mi.setValue(D,Be.setFromMatrixPosition(y.matrixWorld));if(Se.logarithmicDepthBuffer)he.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)he.setValue(D,"isOrthographic",y.isOrthographicCamera===!0);if(V!==y)V=y,fi=!0,cs=!0}if(vt.needsLights){if(Ke.state.sunShadowMap.length>0)he.setValue(D,"sunShadowMap",Ke.state.sunShadowMap,W);if(Ke.state.directionalShadowMap.length>0)he.setValue(D,"directionalShadowMap",Ke.state.directionalShadowMap,W);if(Ke.state.spotShadowMap.length>0)he.setValue(D,"spotShadowMap",Ke.state.spotShadowMap,W);if(Ke.state.pointShadowMap.length>0)he.setValue(D,"pointShadowMap",Ke.state.pointShadowMap,W)}if(H.isSkinnedMesh){he.setOptional(D,H,"bindMatrix"),he.setOptional(D,H,"bindMatrixInverse");let me=H.skeleton;if(me){if(me.boneTexture===null)me.computeBoneTexture();he.setValue(D,"boneTexture",me.boneTexture,W)}}if(H.isBatchedMesh){if(he.setOptional(D,H,"batchingTexture"),he.setValue(D,"batchingTexture",H._matricesTexture,W),he.setOptional(D,H,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",H._indirectTexture,W),he.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null)he.setValue(D,"batchingColorTexture",H._colorsTexture,W)}let pi=X.morphAttributes;if(pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)te.update(H,X,pn);if(fi||vt.receiveShadow!==H.receiveShadow)vt.receiveShadow=H.receiveShadow,he.setValue(D,"receiveShadow",H.receiveShadow);if((k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null)we.envMapIntensity.value=U.environmentIntensity;if(we.dfgLUT!==void 0)we.dfgLUT.value=rx();if(fi){if(he.setValue(D,"toneMappingExposure",S.toneMappingExposure),vt.needsLights)Nf(we,cs);if(gt&&k.fog===!0)xt.refreshFogUniforms(we,gt);if(xt.refreshMaterialUniforms(we,k,st,Y,M.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){let me=vt.lightProbeGrid;we.probesSH.value=me.texture,we.probesMin.value.copy(me.boundingBox.min),we.probesMax.value.copy(me.boundingBox.max),we.probesResolution.value.copy(me.resolution)}Dr.upload(D,ph(vt),we,W)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0)Dr.upload(D,ph(vt),we,W),k.uniformsNeedUpdate=!1;if(k.isSpriteMaterial)he.setValue(D,"center",H.center);if(he.setValue(D,"modelViewMatrix",H.modelViewMatrix),he.setValue(D,"normalMatrix",H.normalMatrix),he.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let me=k.uniformsGroups;for(let mi=0,hs=me.length;mi<hs;mi++){let _h=me[mi];yt.update(_h,pn),yt.bind(_h,pn)}}return pn}function Nf(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Df(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,U,X){let k=N.get(y);if(k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1)k.__useRenderToTexture=!1;N.get(y.texture).__webglTexture=U,N.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let X=N.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){P=y,G=U,R=X;let k=null,H=!1,gt=!1;if(y){let mt=N.get(y);if(mt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(D.FRAMEBUFFER,mt.__webglFramebuffer),q.copy(y.viewport),j.copy(y.scissor),_t=y.scissorTest,b.viewport(q),b.scissor(j),b.setScissorTest(_t),et=-1;return}else if(mt.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(mt.__hasExternalTextures)W.rebindTextures(y,N.get(y.texture).__webglTexture,N.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Gt=y.depthTexture;if(mt.__boundDepthTexture!==Gt){if(Gt!==null&&N.has(Gt)&&(y.width!==Gt.image.width||y.height!==Gt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}let Et=y.texture;if(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)gt=!0;let Ct=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Ct[U]))k=Ct[U][X];else k=Ct[U];H=!0}else if(y.samples>0&&W.useMultisampledRTT(y)===!1)k=N.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Ct))k=Ct[X];else k=Ct;q.copy(y.viewport),j.copy(y.scissor),_t=y.scissorTest}else q.copy(It).multiplyScalar(st).floor(),j.copy(ct).multiplyScalar(st).floor(),_t=Qt;if(X!==0)k=O;if(b.bindFramebuffer(D.FRAMEBUFFER,k))b.drawBuffers(y,k);if(b.viewport(q),b.scissor(j),b.setScissorTest(_t),H){let mt=N.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,X)}else if(gt){let mt=U;for(let Et=0;Et<y.textures.length;Et++){let Ct=N.get(y.textures[Et]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Et,Ct.__webglTexture,X,mt)}}else if(y!==null&&X!==0){let mt=N.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,X)}et=-1};function gh(y){let U=N.get(y);if(U.__readFormat!==y.format||U.__readType!==y.type)U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=Se.textureFormatReadable(y.format),U.__typeReadable=Se.textureTypeReadable(y.type);return U}if(this.readRenderTargetPixels=function(y,U,X,k,H,gt,Mt,mt=0){if(!(y&&y.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0)Et=Et[Mt];if(Et){b.bindFramebuffer(D.FRAMEBUFFER,Et);try{let Ct=y.textures[mt],Gt=Ct.format,qt=Ct.type;if(y.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+mt);let wt=gh(Ct);if(wt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(U>=0&&U<=y.width-k&&(X>=0&&X<=y.height-H))D.readPixels(U,X,k,H,K.convert(Gt),K.convert(qt),gt)}finally{let Ct=P!==null?N.get(P).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,k,H,gt,Mt,mt=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0)Et=Et[Mt];if(Et)if(U>=0&&U<=y.width-k&&(X>=0&&X<=y.height-H)){b.bindFramebuffer(D.FRAMEBUFFER,Et);let Ct=y.textures[mt],Gt=Ct.format,qt=Ct.type;if(y.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+mt);let wt=gh(Ct);if(wt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,gt.byteLength,D.STREAM_READ),D.readPixels(U,X,k,H,K.convert(Gt),K.convert(qt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ae=P!==null?N.get(P).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,Ae);let xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Yu(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,gt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(se),D.deleteSync(xe),gt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){let k=Math.pow(2,-X),H=Math.floor(y.image.width*k),gt=Math.floor(y.image.height*k),Mt=U!==null?U.x:0,mt=U!==null?U.y:0;W.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Mt,mt,H,gt),b.unbindTexture()},this.copyTextureToTexture=function(y,U,X=null,k=null,H=0,gt=0){let Mt,mt,Et,Ct,Gt,qt,wt,se,Ae,xe=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(X!==null)Mt=X.max.x-X.min.x,mt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Gt=X.min.y,qt=X.isBox3?X.min.z:0;else{let we=Math.pow(2,-H);if(Mt=Math.floor(xe.width*we),mt=Math.floor(xe.height*we),y.isDataArrayTexture)Et=xe.depth;else if(y.isData3DTexture)Et=Math.floor(xe.depth*we);else Et=1;Ct=0,Gt=0,qt=0}if(k!==null)wt=k.x,se=k.y,Ae=k.z;else wt=0,se=0,Ae=0;let de=K.convert(U.format),Ve=K.convert(U.type),vt;if(U.isData3DTexture)W.setTexture3D(U,0),vt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)W.setTexture2DArray(U,0),vt=D.TEXTURE_2D_ARRAY;else W.setTexture2D(U,0),vt=D.TEXTURE_2D;b.activeTexture(D.TEXTURE0),b.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Ke=b.getParameter(D.UNPACK_ROW_LENGTH),Kt=b.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(D.UNPACK_SKIP_PIXELS),Rn=b.getParameter(D.UNPACK_SKIP_ROWS),fi=b.getParameter(D.UNPACK_SKIP_IMAGES);b.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),b.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),b.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),b.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);let cs=y.isDataArrayTexture||y.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let we=N.get(y),pi=N.get(U),me=N.get(we.__renderTarget),mi=N.get(pi.__renderTarget);b.bindFramebuffer(D.READ_FRAMEBUFFER,me.__webglFramebuffer),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let hs=0;hs<Et;hs++){if(cs)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(y).__webglTexture,H,qt+hs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(U).__webglTexture,gt,Ae+hs);D.blitFramebuffer(Ct,Gt,Mt,mt,wt,se,Mt,mt,D.DEPTH_BUFFER_BIT,D.NEAREST)}b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||N.has(y)){let we=N.get(y),pi=N.get(U);b.bindFramebuffer(D.READ_FRAMEBUFFER,J),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,L);for(let me=0;me<Et;me++){if(cs)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,H,qt+me);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,H);if(he)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pi.__webglTexture,gt,Ae+me);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pi.__webglTexture,gt);if(H!==0)D.blitFramebuffer(Ct,Gt,Mt,mt,wt,se,Mt,mt,D.COLOR_BUFFER_BIT,D.NEAREST);else if(he)D.copyTexSubImage3D(vt,gt,wt,se,Ae+me,Ct,Gt,Mt,mt);else D.copyTexSubImage2D(vt,gt,wt,se,Ct,Gt,Mt,mt)}b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(he)if(y.isDataTexture||y.isData3DTexture)D.texSubImage3D(vt,gt,wt,se,Ae,Mt,mt,Et,de,Ve,xe.data);else if(U.isCompressedArrayTexture)D.compressedTexSubImage3D(vt,gt,wt,se,Ae,Mt,mt,Et,de,xe.data);else D.texSubImage3D(vt,gt,wt,se,Ae,Mt,mt,Et,de,Ve,xe);else if(y.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,gt,wt,se,Mt,mt,de,Ve,xe.data);else if(y.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,gt,wt,se,xe.width,xe.height,de,xe.data);else D.texSubImage2D(D.TEXTURE_2D,gt,wt,se,Mt,mt,de,Ve,xe);if(b.pixelStorei(D.UNPACK_ROW_LENGTH,Ke),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),b.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(D.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(D.UNPACK_SKIP_IMAGES,fi),gt===0&&U.generateMipmaps)D.generateMipmap(vt);b.unbindTexture()},this.initRenderTarget=function(y){if(N.get(y).__webglFramebuffer===void 0)W.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)W.setTextureCube(y,0);else if(y.isData3DTexture)W.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)W.setTexture2DArray(y,0);else W.setTexture2D(y,0);b.unbindTexture()},this.resetState=function(){G=0,R=0,P=null,b.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}var Ze=4,Or=["####################################","#BBBBBBBBB####CCCCCCCC...AAAAAAAAAA#","#BBBBBBBBB####CCC##CCC...AAAAAAAAAA#","#BBBBBBBBB....CCC##CCC###AAAAAAAAAA#","#BBBBBBBBB....CCCCCCCC###AAAAAAAAAA#","#BBBBBBBBB#####CCCCCC####AAAAAAAAAA#","#BBBBBBBBB####...#########AAAAAAAAA#","#BBBBBBBBB####...#########AAAAAAAAA#","#BBBBBBBBB####......######AAAAAAAAA#","#..##############...######..####...#","#..##############...........####...#","#...#############...........####...#","###.#############...############.###","###.#############...############.###","#...#############...############...#","#...................############...#","#...###########.....##############.#","#...#############...##############.#","#.###############...############...#","#.###############...############...#","#...#############...#####..........#","#...#############...#####..........#","#.............#.....#####...########","##########TTTTTTTTTTTTTTTTTTTT######","##########TTTTTTTTTTTTTTTTTTTT######","##########TTTTTTTTTTTTTTTTTTTT######","##########TTTTTTTTTTTTTTTTTTTT######","##########TTTTTTTTTTTTTTTTTTTT######","##########TTTTTTTTTTTTTTTTTTTT######","####################################"],He=Or[0].length,dn=Or.length;for(let t of Or)if(t.length!==He)throw Error("bad map row: "+t);var Gs=Or.map((t)=>t.split("")),Wn=He*4,Xn=dn*4,hi=(t,e)=>t<0||e<0||t>=He||e>=dn||Gs[e][t]==="#",Bd=(t,e)=>{let n=Gs[Math.floor(e/4)];return n?n[Math.floor(t/4)]??"#":"#"};var Tn=[],ce=(t,e,n,i,s="crate")=>Tn.push({x0:t-n/2,x1:t+n/2,z0:e-n/2,z1:e+n/2,y0:0,y1:i,kind:s}),Vs=(t,e,n,i,s=3.2)=>Tn.push({x0:t,x1:e,z0:n,z1:i,y0:0,y1:s,kind:"door"});ce(22,18,2,2);ce(23.5,18.5,1,1);ce(10,10,1.4,1);ce(34,30,2,1,"crate2");ce(8,30,1.4,1);ce(34,8,1,1);ce(29,23,1,1);ce(118,16,2,2);ce(119.5,16.5,1,1);ce(132,28,2,1,"crate2");ce(108,10,1.4,1);ce(136,8,2,1);ce(104,30,1,1);ce(126,32,1.4,1);ce(138,56,2,1,"crate2");ce(130,44,1.4,1);ce(112,84,1.4,1);ce(72,62,2,1);ce(78,40,1.4,1);ce(96,46.5,1,1);ce(6,46,1.4,1);ce(6,66,1,1);ce(60,100,2,1);ce(96,104,2,2);ce(97.5,102.5,1,1);ce(80,111,1.4,1);ce(62,10,1.4,1);ce(84,16,1.4,1);for(let[t,e]of[[5.2,5.2],[6.3,5.6],[138.6,34.6],[42.6,93.6],[68.8,86],[57.2,9.6],[139,81],[100.6,4.8]])ce(t,e,0.75,1.1,"barrel");var oo=[];for(let t=16;t<=21;t++)for(let e=1;e<=3;e++)oo.push([e,t]);for(let t=1;t<=9;t++)oo.push([t,22]);for(let t=4;t<=13;t++)oo.push([t,15]);for(let[t,e]of oo)if(Or[e][t]!=="#")Tn.push({x0:t*4,x1:t*4+4,z0:e*4,z1:e*4+4,y0:4.4,y1:4.9,kind:"roof"});Tn.push({x0:47.5,x1:48.5,z0:12,z1:20,y0:3.5,y1:6.2,kind:"lintel"});Tn.push({x0:56,x1:68,z0:25.5,z1:26.5,y0:3.5,y1:6.2,kind:"lintel"});Tn.push({x0:100,x1:112,z0:89.5,z1:90.5,y0:3.5,y1:6.2,kind:"lintel"});Vs(56,59.5,25.85,26.15);Vs(64.5,68,25.85,26.15);Vs(100,103.5,89.85,90.15);Vs(108.5,112,89.85,90.15);Vs(47.85,48.15,12,14);Vs(47.85,48.15,18,20);var Br={A:{x:120,z:20,name:"A"},B:{x:20,z:20,name:"B"}},Ai=(t,e)=>{let n=Bd(t,e);return n==="A"||n==="B"?n:null},zd={T:[[64,106],[70,102],[76,106],[84,102],[90,108],[58,112],[66,112],[74,98],[88,96],[104,110]],CT:[[60,6],[64,14],[60,18],[80,6],[84,12],[66,6],[82,18],[72,19],[64,22],[86,6]]},kd=(t,e,n)=>Bd(e,n)===(t==="T"?"T":"C"),ro=[];function Hs(t,e,n,i,s){ro.length=0;let r=Math.floor((t-n)/4),a=Math.floor((t+n)/4),o=Math.floor((e-n)/4),c=Math.floor((e+n)/4);for(let l=o;l<=c;l++)for(let h=r;h<=a;h++)if(hi(h,l))ro.push({x0:h*4,x1:h*4+4,z0:l*4,z1:l*4+4});for(let l of Tn)if(t+n>l.x0&&t-n<l.x1&&e+n>l.z0&&e-n<l.z1&&s>l.y0+0.001&&i<l.y1-0.001)ro.push(l);return ro}function zr(t,e,n,i){let s=0;for(let r of Tn)if(t+n>r.x0&&t-n<r.x1&&e+n>r.z0&&e-n<r.z1&&r.y1<=i+0.06&&r.y1>s)s=r.y1;return s}function Hd(t,e,n,i,s){let r=!1,a=!1,o=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(n))/0.3));for(let c=0;c<o;c++){if(e){t.x+=e/o;let l=Hs(t.x,t.z,i,t.y+0.02,t.y+s);if(l.length)if(r=!0,e>0){let h=1/0;for(let d of l)h=Math.min(h,d.x0);t.x=h-i-0.0001}else{let h=-1/0;for(let d of l)h=Math.max(h,d.x1);t.x=h+i+0.0001}}if(n){t.z+=n/o;let l=Hs(t.x,t.z,i,t.y+0.02,t.y+s);if(l.length)if(a=!0,n>0){let h=1/0;for(let d of l)h=Math.min(h,d.z0);t.z=h-i-0.0001}else{let h=-1/0;for(let d of l)h=Math.max(h,d.z1);t.z=h+i+0.0001}}}return{hitX:r,hitZ:a}}function lo(t,e,n){return Hs(t,e,n,0.05,1.7).length===0}function Ws(t,e,n,i,s,r,a=300){let o=a,c=0,l=0,h=0,d=null;if(s<-0.000001&&e>0){let E=-e/s;if(E<o)o=E,c=0,l=1,h=0,d="floor"}let u=Math.floor(t/4),f=Math.floor(n/4);if(hi(u,f))return{t:0,nx:0,ny:0,nz:0,kind:"wall"};let g=i>0?1:-1,T=r>0?1:-1,m=Math.abs(i),p=Math.abs(r),C=m>0.000000001?((u+(i>0?1:0))*4-t)/i:1/0,A=p>0.000000001?((f+(r>0?1:0))*4-n)/r:1/0,v=m>0.000000001?4/m:1/0,M=p>0.000000001?4/p:1/0;for(let E=0;E<200;E++){let w,_;if(C<A)w=C,u+=g,C+=v,_=0;else w=A,f+=T,A+=M,_=1;if(w>=o)break;if(hi(u,f)){if(o=w,d="wall",l=0,_===0)c=-g,h=0;else c=0,h=-T;break}}for(let E of Tn){let w=0,_=o,S=-1,z=[t,e,n],I=[i,s,r],O=[E.x0,E.y0,E.z0],J=[E.x1,E.y1,E.z1],L=!0;for(let G=0;G<3;G++){if(Math.abs(I[G])<0.000000001){if(z[G]<O[G]||z[G]>J[G]){L=!1;break}continue}let R=(O[G]-z[G])/I[G],P=(J[G]-z[G])/I[G];if(R>P){let et=R;R=P,P=et}if(R>w)w=R,S=G;if(P<_)_=P;if(w>_){L=!1;break}}if(L&&S>=0&&w<o)o=w,d=E.kind,c=S===0?-Math.sign(i):0,l=S===1?-Math.sign(s):0,h=S===2?-Math.sign(r):0}return d?{t:o,nx:c,ny:l,nz:h,kind:d}:null}function rs(t,e,n,i,s,r){let a=i-t,o=s-e,c=r-n,l=Math.hypot(a,o,c);if(l<0.000001)return!0;let h=Ws(t,e,n,a/l,o/l,c/l,l);return!h||h.t>=l-0.01}var Gn=2,le=Wn/Gn,Vn=Xn/Gn,ss=new Uint8Array(le*Vn);for(let t=0;t<Vn;t++)for(let e=0;e<le;e++){let n=(e+0.5)*Gn,i=(t+0.5)*Gn;ss[t*le+e]=lo(n,i,0.75)?1:0}var Pc=[];for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)if(e||t)Pc.push([e,t]);var Gd=new Uint8Array(le*Vn);for(let t=0;t<Vn;t++)for(let e=0;e<le;e++){if(!ss[t*le+e])continue;let n=0;Pc.forEach(([i,s],r)=>{let a=e+i,o=t+s;if(a<0||o<0||a>=le||o>=Vn||!ss[o*le+a])return;if(i&&s&&(!ss[t*le+a]||!ss[o*le+e]))return;if(!lo((e+0.5+i/2)*Gn,(t+0.5+s/2)*Gn,0.5))return;n|=1<<r}),Gd[t*le+e]=n}var Od=(t,e)=>{let n=Math.max(0,Math.min(le-1,Math.floor(t/Gn))),i=Math.max(0,Math.min(Vn-1,Math.floor(e/Gn)));if(ss[i*le+n])return i*le+n;let s=-1,r=1/0;for(let a=-3;a<=3;a++)for(let o=-3;o<=3;o++){let c=n+o,l=i+a;if(c<0||l<0||c>=le||l>=Vn||!ss[l*le+c])continue;let h=o*o+a*a;if(h<r)r=h,s=l*le+c}return s},Fr=new Float32Array(le*Vn),Ic=new Int32Array(le*Vn),ao=new Uint8Array(le*Vn);function Vd(t,e,n,i){let s=Od(t,e),r=Od(n,i);if(s<0||r<0)return[[n,i]];Fr.fill(1/0),ao.fill(0),Ic.fill(-1);let a=r%le,o=r/le|0,c=(A)=>{let v=Math.abs(A%le-a),M=Math.abs((A/le|0)-o);return Math.max(v,M)+0.414*Math.min(v,M)},l=[],h=(A,v)=>{l.push([A,v]);let M=l.length-1;while(M>0){let E=M-1>>1;if(l[E][0]<=l[M][0])break;[l[E],l[M]]=[l[M],l[E]],M=E}},d=()=>{let A=l[0],v=l.pop();if(l.length){l[0]=v;let M=0;for(;;){let E=2*M+1,w=E+1,_=M;if(E<l.length&&l[E][0]<l[_][0])_=E;if(w<l.length&&l[w][0]<l[_][0])_=w;if(_===M)break;[l[_],l[M]]=[l[M],l[_]],M=_}}return A};Fr[s]=0,h(c(s),s);let u=!1;while(l.length){let[,A]=d();if(ao[A])continue;if(ao[A]=1,A===r){u=!0;break}let v=A%le,M=A/le|0,E=Gd[A];for(let w=0;w<8;w++){if(!(E&1<<w))continue;let[_,S]=Pc[w],z=(M+S)*le+v+_;if(ao[z])continue;let I=Fr[A]+(_&&S?1.414:1);if(I<Fr[z])Fr[z]=I,Ic[z]=A,h(I+c(z),z)}}if(!u)return[[n,i]];let f=[];for(let A=r;A!==-1;A=Ic[A])f.push(A);f.reverse();let g=f.map((A)=>[(A%le+0.5)*Gn,((A/le|0)+0.5)*Gn]);g[g.length-1]=[n,i];let T=[],m=0,p=t,C=e;while(m<g.length){let A=m;for(let v=Math.min(g.length-1,m+16);v>m;v--)if(ax(p,C,g[v][0],g[v][1])){A=v;break}T.push(g[A]),p=g[A][0],C=g[A][1],m=A+1}return T}function ax(t,e,n,i,s=0.55){let r=Math.hypot(n-t,i-e),a=Math.ceil(r/0.5);for(let o=1;o<=a;o++){let c=o/a;if(!lo(t+(n-t)*c,e+(i-e)*c,s))return!1}return!0}function co(t,e,n,i=Math.random){for(let s=0;s<30;s++){let r=i()*Math.PI*2,a=i()*n,o=t+Math.cos(r)*a,c=e+Math.sin(r)*a;if(lo(o,c,0.8)&&rs(t,1,e,o,1,c))return[o,c]}return[t,e]}var jt={knife:{name:"Knife",slot:"knife",price:0,dmg:34,dmg2:65,rate:0.42,rate2:1,range:1.9,speed:1,kill:1500,icon:"\uD83D\uDD2A"},glock:{name:"Glock-18",slot:"secondary",team:"T",price:200,dmg:28,pen:0.47,rate:0.15,mag:20,reserve:120,reload:2.2,spread:0.006,moveSpread:0.035,spraySpread:0.004,kick:0.012,falloff:0.85,speed:1,kill:300,auto:!1},usp:{name:"USP-S",slot:"secondary",team:"CT",price:200,dmg:35,pen:0.5,rate:0.17,mag:12,reserve:24,reload:2.2,spread:0.004,moveSpread:0.03,spraySpread:0.004,kick:0.016,falloff:0.88,speed:1,kill:300,auto:!1},deagle:{name:"Desert Eagle",slot:"secondary",price:700,dmg:63,pen:0.93,rate:0.26,mag:7,reserve:35,reload:2.2,spread:0.004,moveSpread:0.07,spraySpread:0.012,kick:0.05,falloff:0.81,speed:0.96,kill:300,auto:!1},mp5:{name:"MP5-SD",slot:"primary",price:1500,dmg:27,pen:0.62,rate:0.075,mag:30,reserve:120,reload:2.6,spread:0.008,moveSpread:0.025,spraySpread:0.0025,kick:0.009,falloff:0.85,speed:0.94,kill:600,auto:!0},ak47:{name:"AK-47",slot:"primary",team:"T",price:2700,dmg:36,pen:0.775,rate:0.1,mag:30,reserve:90,reload:2.5,spread:0.0035,moveSpread:0.09,spraySpread:0.0035,kick:0.018,falloff:0.98,speed:0.86,kill:300,auto:!0},m4a1:{name:"M4A1",slot:"primary",team:"CT",price:3100,dmg:33,pen:0.7,rate:0.09,mag:30,reserve:90,reload:3.1,spread:0.003,moveSpread:0.08,spraySpread:0.003,kick:0.015,falloff:0.97,speed:0.9,kill:300,auto:!0},awp:{name:"AWP",slot:"primary",price:4750,dmg:115,pen:0.975,rate:1.45,mag:10,reserve:30,reload:3.6,spread:0.0008,moveSpread:0.15,spraySpread:0,kick:0.06,falloff:0.99,speed:0.78,kill:100,auto:!1,scope:!0,unscoped:0.09},he:{name:"HE Grenade",slot:"nade",price:300,nade:"he",max:1,speed:1,kill:300},flash:{name:"Flashbang",slot:"nade",price:200,nade:"flash",max:2,speed:1},smoke:{name:"Smoke Grenade",slot:"nade",price:300,nade:"smoke",max:1,speed:1},c4:{name:"C4 Explosive",slot:"c4",speed:1}},Wd=[{cat:"Pistols",items:["glock","usp","deagle"]},{cat:"SMG",items:["mp5"]},{cat:"Rifles",items:["ak47","m4a1","awp"]},{cat:"Grenades",items:["he","flash","smoke"]},{cat:"Gear",items:["vest","vesthelm","kit"]}],Xs={vest:{name:"Kevlar Vest",price:650},vesthelm:{name:"Kevlar + Helmet",price:1000},kit:{name:"Defuse Kit",price:400,team:"CT"}},Lc=[0,0,0.1,0.15,0.25,0.3,0.1,-0.4,-0.9,-1.2,-1,-0.5,0.4,1,1.3,1.1,0.5,-0.3,-1,-1.3,-1,-0.4,0.4,1,1.2,0.8,0.2,-0.5,-1,-1],Xd=(t)=>t<9?1:0.28;var Nc={easy:{react:0.8,aimErr:0.075,turn:5,snap:6,spray:0.2,head:0.12,burst:3,stop:0.45},normal:{react:0.45,aimErr:0.035,turn:9,snap:10,spray:0.55,head:0.3,burst:4,stop:0.8},hard:{react:0.26,aimErr:0.017,turn:14,snap:16,spray:0.85,head:0.5,burst:6,stop:0.95}},ox={A_long:[[106,94],[106,86],[120,84],[134,76],[134,44],[132,36]],A_short:[[74,94],[74,70],[74,46],[90,44],[106,44],[107,37]],B_tun:[[50,94],[46,90],[20,90],[8,86],[8,44],[8,38]],B_mid:[[74,94],[74,66],[50,62],[10,62],[8,44],[8,38]]},lx={A:[[[124,6],[96,12]],[[112,30],[96,12]],[[136,20],[94,12]],[[130,30],[108,38]],[[116,8],[106,38]]],B:[[[30,8],[48,16]],[[34,26],[48,16]],[[12,20],[48,16]],[[6,6],[48,16]],[[24,32],[44,14]]]},cx={A:[[120,22],[126,14],[114,26]],B:[[20,22],[16,12],[26,26]]},hx={A:[[[124,26],[134,40]],[[112,14],[107,38]],[[136,14],[134,40]]],B:[[[26,30],[8,38]],[[8,12],[8,40]],[[34,12],[10,38]]],mid:[[[66,30],[76,52]]]},qd=["A","B","mid","A","B","A","B","mid","A"],as=(t)=>{while(t>Math.PI)t-=Math.PI*2;while(t<-Math.PI)t+=Math.PI*2;return t},Ci=(t,e,n)=>t<e?e:t>n?n:t,Ri=(t,e)=>t+Math.random()*(e-t),ho=()=>(Math.random()+Math.random()+Math.random()-1.5)*1.15,uo=(t,e)=>Math.atan2(-t,-e);class Dc{constructor(t,e,n){this.a=t,this.g=e;let i=()=>Ri(0.85,1.15);if(this.s={...n,react:n.react*i(),aimErr:n.aimErr*i(),turn:n.turn*i()},t.team==="CT")this.s.react*=0.7,this.s.aimErr*=0.72;this.inp={fwd:0,side:0,jump:!1,crouch:!1,walk:!1,fire:!1,alt:!1,reload:!1,use:!1,slot:null,drop:!1,yaw:0,pitch:0}}roundStart(){let t=this.a,e=this.g;if(Object.assign(this,{path:null,pathGoal:null,pi:0,target:null,reactT:0,trackT:0,lastSeen:null,noise:null,errY:0,errP:0,errTY:0,errTP:0,errT:0,burstN:0,pauseT:0,strafe:Math.random()<0.5?-1:1,strafeT:0,stopToShoot:!0,crouchShoot:!1,aimHead:!1,bought:!1,buyT:Ri(0.4,3),stuckT:0,stuckN:0,lastX:t.x,lastZ:t.z,via:0,mode:"route",holdT:0,sweep:Ri(0,6),nadeStage:0,scopeT:0,lookT:0,prevFire:!1,postSpot:null,jumpCd:0}),t.team==="T"){if(!e.tPlan||e.tPlan.round!==e.round){let r=Math.random()<0.5?"A":"B";e.tPlan={round:e.round,site:r,n:0}}let n=e.tPlan,i=n.n++,s=n.site==="A"?["A_long","A_short","A_long","A_short","A_long"]:["B_tun","B_tun","B_mid","B_tun","B_tun"];this.site=n.site,this.route=ox[s[i%s.length]],this.hold=lx[n.site][i%5],this.plantSpot=cx[n.site][Math.floor(Math.random()*3)],this.waitT=Ri(0,3)+(s[i%s.length].includes("short")||s[i%s.length].includes("mid")?3:0)}else{let n=e.agents.filter((s)=>s.team==="CT"&&s.isBot&&s.id<t.id).length;this.role=qd[n%qd.length];let i=hx[this.role];this.hold=i[Math.floor(n/3)%i.length],this.waitT=0}}hear(t){let e=this.a;if(!e.alive)return;let n,i;if(t.type==="shot"||t.type==="step"){if(n=this.g.agents[t.a],!n||n.team===e.team)return;i=t.type==="shot"?55:20}else if(t.type==="he")n=t,i=35;else return;if(Math.hypot(n.x-e.x,n.z-e.z)<i)this.noise={x:n.x,y:(n.y??0)+1.4,z:n.z,t:this.g.time}}think(t){let e=this.a,n=this.g,i=this.inp,s=this.s;if(Object.assign(i,{fwd:0,side:0,jump:!1,crouch:!1,walk:!1,fire:!1,alt:!1,reload:!1,use:!1,slot:null,drop:!1}),i.yaw=e.yaw,i.pitch=e.pitch,n.phase==="freeze"){if(!this.bought&&(this.buyT-=t)<=0)this.bought=!0,this.buy();return this.lookAt(e.x-Math.sin(e.yaw)*10,e.eyeY,e.z-Math.cos(e.yaw)*10,t),i}if(n.phase==="end"||n.phase==="over")return i;this.jumpCd-=t,this.perceive(t);let r=jt[e.weaponId()];if(this.nadeStage&&(!e.inv.nades.length||this.target))this.nadeStage=0;if(!(e.plantT>0||e.defuseT>0||this.nadeStage>0||e.nadeHeld)&&e.cur!==e.bestSlot()&&e.cur!=="c4")i.slot=e.bestSlot();let o=e.gun();if(o&&o.mag===0&&o.reserve===0){let l=e.cur==="primary"?e.inv.secondary?.mag||e.inv.secondary?.reserve?"secondary":"knife":"knife";if(i.slot=l,e.cur==="primary")e.inv.primary=null}let c=null;if(this.target&&this.reactT<=0)c=this.fight(t,r);else{if(!this.target&&o&&o.mag<jt[o.id].mag*0.4&&o.reserve>0&&e.reloadT<=0&&(!this.lastSeen||n.time-this.lastSeen.t>1.2))i.reload=!0;let l=this.goal(t);if(l)c=this.moveTo(l[0],l[1]);if(this.idleLook(t,c),this.target)this.aim(this.target,t),c=null}if(c){let l=c[0],h=c[1];for(let f of n.agents){if(f===e||!f.alive||f.team!==e.team)continue;let g=e.x-f.x,T=e.z-f.z,m=Math.hypot(g,T);if(m<1.3&&m>0.01)l+=g/m*(1.3-m)*1.5,h+=T/m*(1.3-m)*1.5}let d=Math.sin(i.yaw),u=Math.cos(i.yaw);i.fwd=Ci(-d*l-u*h,-1,1),i.side=Ci(u*l-d*h,-1,1),this.unstick(t)}else this.stuckT=0,this.lastX=e.x,this.lastZ=e.z;return this.prevFire=i.fire,i}perceive(t){let e=this.a,n=this.g,i=n.vis[e.id],s=null,r=1/0;if(e.flash<0.9)for(let a of n.agents){if(!a.alive||a.team===e.team)continue;let o=i[a.id];if(!(o>=3||o===1&&(a===this.target||a.id===e.lastAttacker&&n.time-e.lastHurt<2.5)))continue;let l=Math.hypot(a.x-e.x,a.z-e.z);if(a===this.target)l*=0.6;if(l<r)r=l,s=a}if(s!==this.target){if(s){let a=this.s.react*Ri(0.8,1.3);if(this.target)a*=0.45;if(s.id===e.lastAttacker&&n.time-e.lastHurt<1.5)a*=0.7;if(i[s.id]===1)a+=0.15;if(a*=e.moveSpeed<1?0.7:1.25,Math.abs(as(uo(s.x-e.x,s.z-e.z)-e.yaw))<0.3)a*=0.8;this.reactT=a,this.trackT=0,this.burstN=0,this.pauseT=0,this.aimHead=Math.random()<this.s.head,this.stopToShoot=Math.random()<this.s.stop,this.crouchShoot=Math.random()<0.25,this.errTY=ho()*this.s.aimErr*2.2,this.errTP=ho()*this.s.aimErr*1.5,this.errY=this.errTY,this.errP=this.errTP}this.target=s}if(s){this.reactT-=t,this.trackT+=t,this.lastSeen={x:s.x,y:s.y+1.3,z:s.z,t:n.time};let a=Ai(s.x,s.z)||ux(s.x,s.z);n.intel[e.team]={x:s.x,z:s.z,t:n.time,site:a},n.seen[e.team][s.id]={site:a,t:n.time}}}aim(t,e){let n=this.a,i=this.s,s=t.y+t.height*(this.aimHead?0.9:0.64),r=t.x-n.x,a=t.z-n.z,o=Math.hypot(r,a);if(this.errT-=e,this.errT<=0){this.errT=Ri(0.25,0.5);let u=1+Math.min(1.5,Math.hypot(t.vx,t.vz)/4);this.errTY=ho()*i.aimErr*u,this.errTP=ho()*i.aimErr*0.7*u}let c=1-Math.exp(-e*4);this.errY+=(this.errTY-this.errY)*c,this.errP+=(this.errTP-this.errP)*c;let l=Math.max(0.35,1-this.trackT*0.7)*(n.moveSpeed<0.5?0.75:1.15),h=uo(r,a)+this.errY*l-n.punchY*i.spray,d=Math.atan2(s-n.eyeY,o)+this.errP*l-n.punchP*i.spray;return this.turnTo(h,d,e),{dy:as(h-this.inp.yaw),dp:d-this.inp.pitch,d:o}}turnTo(t,e,n){let i=this.inp,s=this.s,r=as(t-i.yaw),a=e-i.pitch,o=Math.min(1,s.snap*n),c=s.turn*n;i.yaw=as(i.yaw+Ci(r*o,-c,c)),i.pitch=Ci(i.pitch+Ci(a*o,-c,c),-1.4,1.4)}lookAt(t,e,n,i,s=1){let r=this.a,a=t-r.x,o=n-r.z,c=uo(a,o),l=Math.atan2(e-r.eyeY,Math.hypot(a,o)),h=this.inp,d=Math.min(1,5*s*i),u=this.s.turn*0.6*i;h.yaw=as(h.yaw+Ci(as(c-h.yaw)*d,-u,u)),h.pitch=Ci(h.pitch+Ci((l-h.pitch)*d,-u,u),-1.4,1.4)}fight(t,e){let n=this.a,i=this.g,s=this.inp,r=this.s,a=this.target,{dy:o,dp:c,d:l}=this.aim(a,t),h=null;if(e.slot==="knife"||!n.gun()){if(!n.inv.primary&&!n.inv.secondary){if(h=this.moveTo(a.x,a.z),l<2)s.fire=!0;return h}}let d=n.gun();if(d&&d.mag===0){if(n.cur==="primary"&&n.inv.secondary&&n.inv.secondary.mag>0&&l<25)s.slot="secondary";else s.reload=!0;return h=this.strafeMove(t),h}if(e.scope){if(n.scope===0&&!n.rescope&&l>6&&n.reloadT<=0){if(!this.prevAlt)s.alt=!0;this.scopeT=0}if(this.prevAlt=s.alt,n.scope)this.scopeT+=t}let u=Math.atan2(0.26,l)+0.006,f=Math.abs(o)<u&&Math.abs(c)<u*1.3,g=n.moveSpeed<n.maxSpeed()*0.36||!this.stopToShoot,T=f&&g&&(!e.scope||n.scope||l<=6)&&(!e.scope||this.scopeT>0.18||l<=6);if(e.auto){let m=l<10?14:l<25?r.burst+2:r.burst;if(this.pauseT>0)this.pauseT-=t,T=!1;else if(n.shots>=m)this.pauseT=Ri(0.22,0.45)*(l>25?1.3:1),T=!1;if(n.fireHeld&&this.pauseT<=0&&Math.abs(o)<u*2.5&&n.shots<m)T=!0;s.fire=T}else s.fire=T&&!n.fireHeld;if(this.stopToShoot&&(T||n.shots>0||f))h=null,s.crouch=this.crouchShoot&&l>15&&e.auto;else h=this.strafeMove(t);if(!f&&Math.abs(o)>0.6)h=this.strafeMove(t);return h}strafeMove(t){let e=this.a;if(this.strafeT-=t,this.strafeT<=0)this.strafeT=Ri(0.35,0.9),this.strafe=-this.strafe;let n=Math.cos(this.inp.yaw),i=-Math.sin(this.inp.yaw);return[n*this.strafe,i*this.strafe]}goal(t){let e=this.a,n=this.g,i=n.bomb,s=this.inp;if(this.waitT>0&&n.roundT>100){if(this.waitT-=t,this.waitT>0)return null}if(this.nadeStage||this.tryNade())return null;if(e.team==="T"){if(i.state==="dropped"){if(n.alive("T").filter((d)=>d.isBot).sort((d,u)=>Math.hypot(d.x-i.x,d.z-i.z)-Math.hypot(u.x-i.x,u.z-i.z))[0]===e)return[i.x,i.z]}if(i.state==="planted"){if(!this.postSpot)this.postSpot=co(i.x,i.z,9);if(Math.hypot(e.x-this.postSpot[0],e.z-this.postSpot[1])<1)return this.mode="hold",null;return this.postSpot}if(e.inv.c4){let l=Ai(e.x,e.z);if(l&&(l===this.site||n.roundT<30)){let h=l===this.site?this.plantSpot:[e.x,e.z];if(Math.hypot(e.x-h[0],e.z-h[1])<1.2||n.roundT<25){if(!this.target)s.use=!0;return null}return h}if(n.roundT<45&&this.via<this.route.length)this.waitT=0}if(this.via<this.route.length){let l=this.route[this.via];if(Math.hypot(e.x-l[0],e.z-l[1])<3)this.via++;return l}if(e.inv.c4)return this.plantSpot;let c=this.hold[0];if(Math.hypot(e.x-c[0],e.z-c[1])<1.2)return this.mode="hold",null;return c}if(i.state==="planted"){let c=Math.hypot(e.x-i.x,e.z-i.z);if(n.alive("CT").filter((h)=>h.isBot).sort((h,d)=>Math.hypot(h.x-i.x,h.z-i.z)-Math.hypot(d.x-i.x,d.z-i.z))[0]===e||c<12){if(c<1.2){if(!this.target&&(!this.lastSeen||n.time-this.lastSeen.t>1.2||i.timer<(e.kit?6:11)))s.use=!0;return null}return[i.x,i.z]}if(!this.postSpot)this.postSpot=co(i.x,i.z,10);if(Math.hypot(e.x-this.postSpot[0],e.z-this.postSpot[1])<1)return null;return this.postSpot}let r=n.intel.CT;if(!this.rotate){let c={A:0,B:0};for(let l in n.seen.CT){let h=n.seen.CT[l];if(h.site&&n.time-h.t<6&&n.agents[l].alive)c[h.site]++}for(let l of["A","B"]){if(this.role===l||!c[l])continue;let h=n.agents.find((d)=>d.alive&&d.isBot&&d.team==="CT"&&n.brains.get(d.id).role===this.role)===e;if(this.role==="mid"||c[l]>=2&&h)this.rotate={site:l,p:co(Br[l].x,Br[l].z,9)}}}if(this.rotate){if(Math.hypot(e.x-this.rotate.p[0],e.z-this.rotate.p[1])<1.2)return null;return this.rotate.p}if(n.alive("CT").length===1&&n.roundT<50&&r)return[r.x,r.z];let o=this.hold[0];if(Math.hypot(e.x-o[0],e.z-o[1])<1.2)return this.mode="hold",null;return o}tryNade(){let t=this.a,e=this.g;if(!t.inv.nades.includes("he")||!this.lastSeen||this.target)return!1;let n=e.time-this.lastSeen.t,i=Math.hypot(this.lastSeen.x-t.x,this.lastSeen.z-t.z);if(n<0.8||n>4||i<8||i>20)return!1;while(t.inv.nades[0]!=="he")t.inv.nades.push(t.inv.nades.shift());return this.nadeStage=1,this.nadeAt={...this.lastSeen,d:i},!0}moveTo(t,e){let n=this.a;if(!this.path||!this.pathGoal||Math.hypot(this.pathGoal[0]-t,this.pathGoal[1]-e)>1.5)this.path=Vd(n.x,n.z,t,e),this.pathGoal=[t,e],this.pi=0;while(this.pi<this.path.length){let i=this.path[this.pi],s=Math.hypot(i[0]-n.x,i[1]-n.z);if(s<(this.pi===this.path.length-1?0.6:1.1)){this.pi++;continue}return[(i[0]-n.x)/s,(i[1]-n.z)/s]}return null}unstick(t){let e=this.a;if(this.stuckT+=t,this.stuckT>0.7){if(Math.hypot(e.x-this.lastX,e.z-this.lastZ)<0.5){if(this.stuckN++,this.jumpCd<=0)this.inp.jump=!0,this.jumpCd=0.8;if(this.strafe=-this.strafe,this.stuckN>=2)this.path=null,this.stuckN=0}else this.stuckN=0;this.stuckT=0,this.lastX=e.x,this.lastZ=e.z}}idleLook(t,e){let n=this.a,i=this.g;if(this.nadeStage)return this.nadeLook(t);if(this.noise&&i.time-this.noise.t<2.5)return this.lookAt(this.noise.x,this.noise.y,this.noise.z,t,1.4);if(this.lastSeen&&i.time-this.lastSeen.t<3)return this.lookAt(this.lastSeen.x,this.lastSeen.y,this.lastSeen.z,t,1.4);if(!e&&(this.mode==="hold"||this.hold)){let s=i.bomb,r=this.hold?this.hold[1]:null;if(s.state==="planted"&&n.team==="T")r=this.hold[1];if(s.state==="planted"&&n.team==="CT")r=[s.x,s.z];if(r){this.sweep+=t*0.6;let a=Math.sin(this.sweep)*3;return this.lookAt(r[0]+a,1.5,r[1]+a,t,0.7)}}if(e){let s=this.path&&this.path[Math.min(this.pi+1,this.path.length-1)],r=s?s[0]:n.x+e[0]*5,a=s?s[1]:n.z+e[1]*5,o=r-n.x,c=a-n.z,l=Math.hypot(o,c);if(l>0.5)this.lookAt(n.x+o/l*8+e[0]*4,n.eyeY,n.z+c/l*8+e[1]*4,t,0.8)}}nadeLook(t){let e=this.a,n=this.nadeAt,i=this.inp;if(e.cur!=="nade"){i.slot="nade";return}let s=n.x-e.x,r=n.z-e.z,a=uo(s,r),o=0.5*Math.asin(Math.min(0.99,n.d/18))-0.12;if(this.turnTo(a,o,t),e.switchT>0)return;if(this.nadeStage===1&&Math.abs(as(a-i.yaw))<0.05)i.fire=!0,this.nadeStage=2;else if(this.nadeStage===2)i.fire=!1,this.nadeStage=0,this.lastSeen=null}buy(){let t=this.a,e=this.g,n=()=>t.money,i=t.team==="T",s=i?"ak47":"m4a1",r=i?2700:3100;if(!t.inv.primary){if(n()>=5750&&Math.random()<0.18)e.buy(t,"awp");else if(n()>=r+650)e.buy(t,s);else if(n()>=2150&&e.round>1&&Math.random()<0.5)e.buy(t,"mp5");else if(n()>=700&&e.round>1&&Math.random()<0.35&&t.inv.secondary?.id!=="deagle")e.buy(t,"deagle")}if(t.armor<100||!t.helmet){if(n()>=1000&&(t.inv.primary||e.round===1))e.buy(t,"vesthelm");else if(n()>=650)e.buy(t,"vest")}if(!i&&!t.kit&&n()>=400&&t.inv.primary)e.buy(t,"kit");if(n()>=300&&t.inv.primary&&Math.random()<0.6)e.buy(t,"he")}}function ux(t,e){for(let n of["A","B"])if(Math.hypot(Br[n].x-t,Br[n].z-e)<30)return n;return null}var kr=0.4,Uc=1.8,dx=1.25,Yd=1.64,fx=1.12,px=20,mx=7,Jd=6.4,gx=6,Ys=115,$d=40,Fc=3.2,_x=5,Hr=20,Zd=16000,xx={head:4,chest:1,stomach:1.25,legs:0.75},yx=["Viktor","Hassan","Dmitri","Rafael","Omar","Yuri","Karim","Ivan","Tariq"],vx=["Mitch","Brad","Kurt","Wade","Ryan","Cole","Hank","Duke","Grant"],qs=(t,e,n)=>t<e?e:t>n?n:t,Kd=()=>({fwd:0,side:0,jump:!1,crouch:!1,walk:!1,fire:!1,alt:!1,reload:!1,use:!1,slot:null,drop:!1,yaw:0,pitch:0});function Ii(t,e){let n=Math.cos(e);return[-Math.sin(t)*n,Math.sin(e),-Math.cos(t)*n]}class jd{constructor(t,e,n,i){Object.assign(this,{id:t,name:e,team:n,isBot:i,x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,pitch:0,onGround:!0,duck:0,hp:100,armor:0,helmet:!1,kit:!1,alive:!0,money:800,kills:0,deaths:0,hs:0}),this.inv={primary:null,secondary:null,nades:[],c4:!1},this.cur="secondary",this.last="knife",this.nextFire=0,this.reloadT=0,this.switchT=0,this.shots=0,this.lastShot=-9,this.punchP=0,this.punchY=0,this.fireHeld=!1,this.altHeld=!1,this.useHeld=!1,this.jumpHeld=!1,this.scope=0,this.rescope=0,this.plantT=0,this.defuseT=0,this.flash=0,this.flashMax=0,this.stepAcc=0,this.lastHurt=-9,this.lastAttacker=-1,this.spotted={T:-9,CT:-9},this.deathT=0,this.moveSpeed=0,this.nadeHeld=!1,this.input=Kd(),this.roundDmg=0}get eyeY(){return this.y+Yd-(Yd-fx)*this.duck}get height(){return Uc-(Uc-dx)*this.duck}weaponId(){switch(this.cur){case"primary":return this.inv.primary?.id??"knife";case"secondary":return this.inv.secondary?.id??"knife";case"nade":return this.inv.nades[0]??"knife";case"c4":return this.inv.c4?"c4":"knife";default:return"knife"}}gun(){return this.cur==="primary"?this.inv.primary:this.cur==="secondary"?this.inv.secondary:null}has(t){return t==="knife"||t==="primary"&&!!this.inv.primary||t==="secondary"&&!!this.inv.secondary||t==="nade"&&this.inv.nades.length>0||t==="c4"&&this.inv.c4}bestSlot(){return this.inv.primary?"primary":this.inv.secondary?"secondary":"knife"}maxSpeed(){let t=jt[this.weaponId()];return Jd*(t.speed??1)*(this.scope?0.82:1)}}class Oc{constructor(t={}){this.opts={playerTeam:"CT",difficulty:"normal",winRounds:8,teamSize:5,botsOnly:!1,...t},this.agents=[],this.events=[],this.time=0,this.round=0,this.score={T:0,CT:0},this.lossStreak={T:0,CT:0},this.grenades=[],this.smokes=[],this.drops=[],this.bomb=null,this.phase="idle",this.phaseT=0,this.roundT=Ys,this.winner=null,this.visT=0,this.history=[],this.intel={T:null,CT:null},this.tPlan=null;let e=0,n={T:[...yx].sort(()=>Math.random()-0.5),CT:[...vx].sort(()=>Math.random()-0.5)};for(let s of["T","CT"])for(let r=0;r<this.opts.teamSize;r++){let a=!this.opts.botsOnly&&s===this.opts.playerTeam&&r===0,o=new jd(e++,a?"You":n[s][r],s,!a);if(this.agents.push(o),a)this.player=o}let i=Nc[this.opts.difficulty]||Nc.normal;this.brains=new Map;for(let s of this.agents)if(s.isBot)this.brains.set(s.id,new Dc(s,this,i));this.vis=this.agents.map(()=>new Uint8Array(this.agents.length))}emit(t){if(this.events.push(t),t.type==="shot"||t.type==="step"||t.type==="he"||t.type==="planted")for(let e of this.brains.values())e.hear(t)}alive(t){return this.agents.filter((e)=>e.alive&&(!t||e.team===t))}agent(t){return this.agents[t]}get buyOpen(){return this.phase==="freeze"||this.phase==="live"&&Ys-this.roundT<Hr}canBuy(t){return t.alive&&this.buyOpen&&kd(t.team,t.x,t.z)}start(){this.newRound(!0)}newRound(t=!1){this.round++,this.phase="freeze",this.phaseT=gx,this.roundT=Ys,this.winner=null,this.grenades.length=0,this.smokes.length=0,this.drops.length=0,this.seen={T:{},CT:{}},this.intel={T:null,CT:null};for(let i of["T","CT"]){let s=[...zd[i]].sort(()=>Math.random()-0.5);this.agents.filter((r)=>r.team===i).forEach((r,a)=>{if(t||!r.alive){r.inv={primary:null,secondary:null,nades:[],c4:!1};let l=i==="T"?"glock":"usp",h=jt[l];r.inv.secondary={id:l,mag:h.mag,reserve:h.reserve},r.armor=0,r.helmet=!1,r.kit=!1}if(t)r.money=800,r.kills=0,r.deaths=0,r.hs=0;r.inv.c4=!1;let[o,c]=s[a%s.length];Object.assign(r,{x:o,y:0,z:c,vx:0,vy:0,vz:0,hp:100,alive:!0,onGround:!0,duck:0,pitch:0}),r.yaw=i==="T"?0:Math.PI,r.cur=r.bestSlot(),r.last="knife",Object.assign(r,{nextFire:0,reloadT:0,switchT:0,shots:0,punchP:0,punchY:0,scope:0,rescope:0,plantT:0,defuseT:0,flash:0,flashMax:0,lastHurt:-9,lastAttacker:-1,roundDmg:0}),r.spotted={T:-9,CT:-9}})}let e=this.alive("T"),n=e[Math.floor(Math.random()*e.length)];n.inv.c4=!0,this.bomb={state:"carried",carrier:n.id,x:n.x,y:0,z:n.z,timer:0,site:null,beepT:0,planter:-1},this.emit({type:"roundStart",round:this.round});for(let i of this.brains.values())i.roundStart()}endRound(t,e){if(this.phase==="end"||this.phase==="over")return;let n=t==="T"?"CT":"T";this.phase="end",this.phaseT=_x,this.winner=t,this.score[t]++;let i=e==="bomb"||e==="defuse"?3500:3250,s=1400+500*Math.min(this.lossStreak[n],4);for(let r of this.agents){if(r.team===t)r.money+=i;else r.money+=s+(r.team==="T"&&this.bomb.state==="defused"?800:0);r.money=Math.min(Zd,r.money)}this.lossStreak[t]=0,this.lossStreak[n]++,this.history.push({winner:t,reason:e}),this.emit({type:"roundEnd",winner:t,reason:e})}update(t,e){if(this.time+=t,this.phase==="idle"||this.phase==="over")return;if(this.phase==="freeze"){if(this.phaseT-=t,this.phaseT<=0)this.phase="live",this.emit({type:"go"})}else if(this.phase==="end"){if(this.phaseT-=t,this.phaseT<=0){if(this.score.T>=this.opts.winRounds||this.score.CT>=this.opts.winRounds){this.phase="over",this.emit({type:"matchOver",winner:this.score.T>this.score.CT?"T":"CT"});return}this.newRound();return}}else if(this.phase==="live")this.roundT-=t;if(this.visT-=t,this.visT<=0)this.visT=0.1,this.updateVisibility();for(let s of this.agents){if(!s.alive)continue;let r;if(s.isBot)r=this.brains.get(s.id).think(t);else r=e||Kd();s.input=r,this.applyInput(s,r,t)}this.updateGrenades(t),this.updateBomb(t),this.updateDrops();let n=this.alive("T").length,i=this.alive("CT").length;if(this.phase==="live"){if(i===0)this.endRound("T","elim");else if(n===0)this.endRound("CT","elim");else if(this.roundT<=0)this.endRound("CT","time")}else if(this.phase==="planted"){if(i===0)this.endRound("T","elim")}}applyInput(t,e,n){t.yaw=e.yaw,t.pitch=qs(e.pitch,-1.5,1.5);let i=this.phase==="freeze"||t.plantT>0||t.defuseT>0,s=e.crouch?1:0;if(s<t.duck&&Hs(t.x,t.z,kr,t.y+0.02,t.y+Uc).length);else t.duck+=qs(s-t.duck,-n*7,n*7);let r=i?0:e.fwd,a=i?0:e.side,o=Math.hypot(r,a);if(o>1)r/=o,a/=o;let c=Math.sin(t.yaw),l=Math.cos(t.yaw),h=-c*r+l*a,d=-l*r-c*a,u=Math.hypot(h,d),f=t.maxSpeed();if(t.duck>0.5)f*=0.34;else if(e.walk)f*=0.52;if(t.onGround){if(u>0.01){let S=h*f,z=d*f,I=S-t.vx,O=z-t.vz,J=Math.hypot(I,O),L=52*n;if(J>L)I*=L/J,O*=L/J;t.vx+=I,t.vz+=O}else{let S=Math.hypot(t.vx,t.vz),z=Math.max(0,S-42*n);if(S>0)t.vx*=z/S,t.vz*=z/S}if(e.jump&&!t.jumpHeld&&!i&&t.duck<0.6)t.vy=mx,t.onGround=!1,this.emit({type:"jump",a:t.id})}else if(u>0.01){t.vx+=h*9*n,t.vz+=d*9*n;let S=Math.hypot(t.vx,t.vz);if(S>f*1.05)t.vx*=f*1.05/S,t.vz*=f*1.05/S}t.jumpHeld=e.jump,t.vy-=px*n;let{x:g,z:T}=t,m=Hd(t,t.vx*n,t.vz*n,kr,t.height);if(m.hitX)t.vx=0;if(m.hitZ)t.vz=0;let p=t.y+t.vy*n,C=zr(t.x,t.z,kr,t.y);if(t.vy>0&&Hs(t.x,t.z,kr,p+0.02,p+t.height).length)t.vy=0;else if(p<=C){if(!t.onGround&&t.vy<-4)this.emit({type:"land",a:t.id});t.y=C,t.vy=0,t.onGround=!0}else t.y=p,t.onGround=!1;if(t.moveSpeed=Math.hypot(t.x-g,t.z-T)/n,t.onGround&&t.moveSpeed>Jd*0.6){if(t.stepAcc+=t.moveSpeed*n,t.stepAcc>2.3)t.stepAcc=0,this.emit({type:"step",a:t.id})}if(t.flash=Math.max(0,t.flash-n),t.switchT>0)t.switchT-=n;if(t.reloadT>0){if(t.reloadT-=n,t.reloadT<=0){let S=t.gun();if(S){let z=jt[S.id],I=Math.min(z.mag-S.mag,S.reserve);S.mag+=I,S.reserve-=I}}}if(t.rescope&&this.time>=t.nextFire)t.scope=t.rescope,t.rescope=0;let A=t.weaponId(),v=jt[A];if(v.rate&&this.time-t.lastShot>v.rate*1.25){t.shots=Math.max(0,t.shots-n/0.07);let S=Math.exp(-n*7);t.punchP*=S,t.punchY*=S}if(e.slot&&e.slot!==t.cur)this.switchTo(t,e.slot);else if(e.slot==="nade"&&t.cur==="nade"&&t.inv.nades.length>1&&!t.nadeHeld)t.inv.nades.push(t.inv.nades.shift()),t.switchT=0.4,this.emit({type:"switch",a:t.id});if(e.drop)this.dropCurrent(t);if(e.reload)this.startReload(t);let M=this.phase!=="freeze"&&t.switchT<=0&&!(t.plantT>0)&&!(t.defuseT>0);if(v.slot==="knife"){if(M&&this.time>=t.nextFire){if(e.fire)this.knife(t,!1);else if(e.alt)this.knife(t,!0)}}else if(v.slot==="nade"){if(M&&(e.fire||e.alt))t.nadeHeld=!0,t.nadeUnder=e.alt&&!e.fire;else if(t.nadeHeld&&!e.fire&&!e.alt)t.nadeHeld=!1,this.throwNade(t,t.nadeUnder)}else if(v.slot==="c4");else{let S=t.gun();if(v.scope&&e.alt&&!t.altHeld&&t.reloadT<=0&&t.switchT<=0)t.scope=(t.scope+1)%3,t.rescope=0,this.emit({type:"zoom",a:t.id});if(M&&e.fire&&!(t.fireHeld&&!v.auto)&&this.time>=t.nextFire&&t.reloadT<=0){if(S.mag>0)this.shoot(t,v,S);else if(t.nextFire=this.time+0.3,this.emit({type:"dry",a:t.id}),S.reserve>0)this.startReload(t)}}t.fireHeld=e.fire,t.altHeld=e.alt;let E=t.inv.c4&&(t.cur==="c4"&&e.fire||e.use);if(E&&this.phase==="live"&&t.onGround&&Ai(t.x,t.z)){if(t.plantT===0){if(t.cur!=="c4")this.switchTo(t,"c4",0);this.emit({type:"plantStart",a:t.id})}if(t.vx=t.vz=0,t.plantT+=n,t.plantT>=Fc)this.plant(t)}else t.plantT=0;let w=this.bomb,_=w.state==="planted"&&t.team==="CT"&&Math.hypot(t.x-w.x,t.z-w.z)<1.6&&Math.abs(t.y-w.y)<1.4;if(_&&e.use&&t.onGround){if(t.defuseT===0)this.emit({type:"defuseStart",a:t.id,kit:t.kit});if(t.vx=t.vz=0,t.defuseT+=n,t.defuseT>=(t.kit?5:10))w.state="defused",t.money+=300,this.emit({type:"defused",a:t.id}),this.endRound("CT","defuse")}else t.defuseT=0;if(e.use&&!t.useHeld&&!_&&!E)this.pickupNear(t,!0);t.useHeld=e.use}switchTo(t,e,n){if(!t.has(e)||e===t.cur)return;t.last=t.cur,t.cur=e;let i=jt[t.weaponId()];t.switchT=n??(e==="knife"?0.35:e==="primary"&&i===jt.awp?0.9:0.55),t.reloadT=0,t.scope=0,t.rescope=0,t.shots=0,t.nadeHeld=!1,this.emit({type:"switch",a:t.id})}startReload(t){let e=t.gun();if(!e)return;let n=jt[e.id];if(e.mag>=n.mag||e.reserve<=0||t.reloadT>0||t.switchT>0)return;t.reloadT=n.reload,t.scope=0,t.rescope=0,this.emit({type:"reload",a:t.id})}shoot(t,e,n){n.mag--,t.nextFire=this.time+e.rate,t.lastShot=this.time;let i=this.inaccuracy(t,e),s=t.yaw+t.punchY,r=t.pitch+t.punchP,[a,o,c]=Ii(s,r),l=Math.cos(s),h=-Math.sin(s),d=Math.sin(s)*Math.sin(r),u=Math.cos(r),f=Math.cos(s)*Math.sin(r),g=Math.random()*Math.PI*2,T=i*Math.sqrt(Math.random()),m=Math.cos(g)*T,p=Math.sin(g)*T,C=a+l*m+d*p,A=o+u*p,v=c+h*m+f*p,M=Math.hypot(C,A,v);C/=M,A/=M,v/=M;let E=Math.floor(t.shots);if(t.punchP+=e.kick*Xd(E)*(0.9+Math.random()*0.2),t.punchY+=e.kick*0.55*Lc[Math.min(E,Lc.length-1)]*(0.85+Math.random()*0.3),t.shots++,e.scope&&t.scope)t.rescope=t.scope,t.scope=0;let w=this.trace(t,t.x,t.eyeY,t.z,C,A,v,260,e,n.id);this.emit({type:"shot",a:t.id,w:n.id,ox:t.x,oy:t.eyeY,oz:t.z,hx:w.x,hy:w.y,hz:w.z,hit:w.victim})}inaccuracy(t,e=jt[t.weaponId()]){if(!e.spread)return 0.01;let n=t.maxSpeed(),i=qs((t.moveSpeed-n*0.34)/(n*0.5),0,1);return e.spread*(t.duck>0.5?0.7:1)+i*e.moveSpread+(t.onGround?0:0.14)+Math.min(t.shots,12)*e.spraySpread+(e.scope&&!t.scope?e.unscoped:0)}trace(t,e,n,i,s,r,a,o,c,l){let h=Ws(e,n,i,s,r,a,o),d=h?h.t:o,u=null,f=null;for(let p of this.agents){if(!p.alive||p===t||p.team===t.team)continue;let C=this.hitAgent(p,e,n,i,s,r,a,d);if(C)d=C.t,u=p,f=C.zone}let g=e+s*d,T=n+r*d,m=i+a*d;if(u){let p=c.dmg*Math.pow(c.falloff,d/12.7);this.damage(u,t,p,f,l,c.pen,s,a)}else if(h)this.emit({type:"impact",x:g,y:T,z:m,nx:h.nx,ny:h.ny,nz:h.nz,kind:h.kind});return{x:g,y:T,z:m,victim:u?u.id:-1}}hitAgent(t,e,n,i,s,r,a,o){let c=t.height,l=t.y+c*0.91,d=null,u=e-t.x,f=n-l,g=i-t.z,T=u*s+f*r+g*a,m=u*u+f*f+g*g-0.028900000000000006,p=T*T-m;if(p>=0){let M=-T-Math.sqrt(p);if(M>0&&M<o)d={t:M,zone:"head"}}let C=t.y+c*0.82,A=0.3,v=s*s+a*a;if(v>0.000000001){let M=2*(u*s+g*a),E=u*u+g*g-A*A,w=M*M-4*v*E;if(w>=0){let _=Math.sqrt(w);for(let S of[(-M-_)/(2*v),(-M+_)/(2*v)]){if(S<=0||S>=(d?d.t:o))continue;let z=n+r*S;if(z>=t.y&&z<=C){let I=(z-t.y)/c;d={t:S,zone:I<0.45?"legs":I<0.62?"stomach":"chest"};break}}}}return d}damage(t,e,n,i,s,r=0.6,a=0,o=0){if(!t.alive)return;let c=n*(xx[i]??1),l=c,h=t.armor>0&&i!=="legs"&&(i!=="head"||t.helmet);if(h)l=c*r,t.armor=Math.max(0,Math.round(t.armor-(c-l)*0.5));if(l=Math.max(1,Math.round(l)),t.hp-=l,t.lastHurt=this.time,t.lastAttacker=e?e.id:-1,e&&e.team!==t.team)e.roundDmg+=Math.min(l,t.hp+l);if(this.emit({type:"hurt",v:t.id,a:e?e.id:-1,dmg:l,zone:i,dx:a,dz:o,w:s,armored:h}),t.hp<=0)this.kill(t,e,s,i==="head")}kill(t,e,n,i){t.alive=!1,t.hp=0,t.deaths++,t.deathT=this.time,t.plantT=0,t.defuseT=0,t.scope=0;let s=t.inv.primary||t.inv.secondary;if(s)this.drops.push({...s,x:t.x+(Math.random()-0.5),y:zr(t.x,t.z,0.2,t.y+0.1),z:t.z+(Math.random()-0.5),t:this.time,yaw:Math.random()*6.28});if(s===t.inv.primary)t.inv.primary=null;else t.inv.secondary=null;if(t.inv.c4)t.inv.c4=!1,Object.assign(this.bomb,{state:"dropped",carrier:-1,x:t.x,y:zr(t.x,t.z,0.2,t.y+0.1),z:t.z}),this.emit({type:"bombDropped"});if(e&&e!==t&&e.team!==t.team){if(e.kills++,i)e.hs++;e.money=Math.min(Zd,e.money+(jt[n]?.kill??300))}this.emit({type:"kill",k:e?e.id:-1,v:t.id,w:n,head:i})}knife(t,e){let n=jt.knife;t.nextFire=this.time+(e?n.rate2:n.rate),this.emit({type:"knife",a:t.id,heavy:e});let[i,,s]=Ii(t.yaw,0),r=null,a=n.range;for(let o of this.agents){if(!o.alive||o.team===t.team)continue;let c=o.x-t.x,l=o.z-t.z,h=Math.hypot(c,l);if(h>a+kr||Math.abs(o.y-t.y)>1.2)continue;if((c*i+l*s)/(h||1)<0.65)continue;if(!rs(t.x,t.eyeY-0.3,t.z,o.x,o.y+1.1,o.z))continue;r=o,a=h}if(r){let[o,,c]=Ii(r.yaw,0),l=r.x-t.x,h=r.z-t.z,d=Math.hypot(l,h)||1,u=(o*l+c*h)/d>0.5;this.damage(r,t,e?u?180:n.dmg2:u?90:n.dmg,"chest","knife",0.85,i,s)}}throwNade(t,e){let n=t.inv.nades.shift();if(!n)return;let[i,s,r]=Ii(t.yaw,qs(t.pitch+0.12,-1.4,1.4)),a=e?8:17;if(this.grenades.push({kind:n,owner:t.id,x:t.x+i*0.4,y:t.eyeY-0.1,z:t.z+r*0.4,vx:i*a+t.vx*0.6,vy:s*a+Math.max(0,t.vy)*0.6,vz:r*a+t.vz*0.6,t:0,rest:!1,spin:0}),t.nextFire=this.time+0.6,this.emit({type:"throw",a:t.id,kind:n}),t.inv.nades.length===0)this.switchTo(t,t.has(t.last)&&t.last!=="nade"?t.last:t.bestSlot(),0.4);else t.switchT=0.5,this.emit({type:"switch",a:t.id})}updateGrenades(t){for(let e=this.grenades.length-1;e>=0;e--){let n=this.grenades[e];if(n.t+=t,!n.rest){n.vy-=16*t;let s=t;for(let r=0;r<3&&s>0;r++){let a=Math.hypot(n.vx,n.vy,n.vz);if(a<0.0001)break;let o=n.vx/a,c=n.vy/a,l=n.vz/a,h=a*s,d=Ws(n.x,n.y,n.z,o,c,l,h+0.08);if(d&&d.t<=h+0.08){let u=Math.max(0,d.t-0.08);n.x+=o*u,n.y+=c*u,n.z+=l*u,s-=u/a;let f=n.vx*d.nx+n.vy*d.ny+n.vz*d.nz;if(n.vx-=2*f*d.nx,n.vy-=2*f*d.ny,n.vz-=2*f*d.nz,n.vx*=0.5,n.vy*=0.45,n.vz*=0.5,a>3)this.emit({type:"bounce",x:n.x,y:n.y,z:n.z});if(d.ny>0.7&&Math.hypot(n.vx,n.vy,n.vz)<1.2){n.rest=!0,n.vx=n.vy=n.vz=0;break}}else n.x+=o*h,n.y+=c*h,n.z+=l*h,s=0}if(n.y<0.05){if(n.y=0.05,n.vy<0)n.vy=-n.vy*0.4;if(n.vx*=0.7,n.vz*=0.7,Math.abs(n.vy)<1)n.rest=!0,n.vx=n.vy=n.vz=0}}let i=n.kind==="smoke"?n.rest?Math.min(n.t,1.2)+0.6:99:1.6;if(n.kind==="smoke"?n.rest&&n.t>1.2||n.t>4:n.t>=i)this.grenades.splice(e,1),this.detonate(n)}for(let e=this.smokes.length-1;e>=0;e--){let n=this.smokes[e];if(n.t+=t,n.t>n.life)this.smokes.splice(e,1)}}detonate(t){let e=this.agents[t.owner];if(t.kind==="he"){this.emit({type:"he",x:t.x,y:t.y,z:t.z});for(let n of this.agents){if(!n.alive)continue;let i=Math.hypot(n.x-t.x,n.y+1-t.y,n.z-t.z);if(i>11||!rs(t.x,t.y+0.2,t.z,n.x,n.y+1,n.z))continue;if(n.team===e.team&&n!==e)continue;let s=98*Math.pow(1-i/11,1.3);if(s>=1)this.damage(n,e,s,"chest","he",0.55,n.x-t.x,n.z-t.z)}}else if(t.kind==="flash"){this.emit({type:"flash",x:t.x,y:t.y,z:t.z});for(let n of this.agents){if(!n.alive)continue;let i=t.x-n.x,s=t.y-n.eyeY,r=t.z-n.z,a=Math.hypot(i,s,r);if(a>32||!rs(n.x,n.eyeY,n.z,t.x,t.y,t.z)||this.smokeBlocks(n.x,n.eyeY,n.z,t.x,t.y,t.z))continue;let[o,c,l]=Ii(n.yaw,n.pitch),h=(i*o+s*c+r*l)/(a||1),d=qs(1.15-a/32,0.25,1),u=(h>0.6?4.2:h>0.1?2.4:h>-0.4?1:0.35)*d;if(u>n.flash)n.flash=u,n.flashMax=u}}else this.smokes.push({x:t.x,y:Math.max(0,t.y-0.1),z:t.z,t:0,life:18}),this.emit({type:"smoke",x:t.x,y:t.y,z:t.z})}smokeRadius(t){if(t.t>t.life-1.5)return 4.6*Math.max(0,(t.life-t.t)/1.5);return 4.6*Math.min(1,t.t/1.1)}smokeBlocks(t,e,n,i,s,r){for(let a of this.smokes){let o=this.smokeRadius(a)*0.92;if(o<1)continue;let c=a.x,l=a.y+1.4,h=a.z,d=i-t,u=s-e,f=r-n,g=d*d+u*u+f*f,T=qs(((c-t)*d+(l-e)*u+(h-n)*f)/(g||1),0,1),m=t+d*T-c,p=(e+u*T-l)*1.4,C=n+f*T-h;if(m*m+p*p+C*C<o*o)return!0}return!1}plant(t){let e=this.bomb;t.inv.c4=!1,t.plantT=0,t.money+=300,Object.assign(e,{state:"planted",carrier:-1,x:t.x,y:t.y,z:t.z,timer:$d,site:Ai(t.x,t.z),beepT:0,planter:t.id}),this.phase="planted",this.switchTo(t,t.bestSlot(),0.3),this.emit({type:"planted",a:t.id,site:e.site})}updateBomb(t){let e=this.bomb;if(e.state==="carried"){let n=this.agents[e.carrier];e.x=n.x,e.y=n.y,e.z=n.z}else if(e.state==="dropped"){for(let n of this.agents)if(n.alive&&n.team==="T"&&Math.hypot(n.x-e.x,n.z-e.z)<1.1&&Math.abs(n.y-e.y)<1.5){n.inv.c4=!0,e.state="carried",e.carrier=n.id,this.emit({type:"bombPickup",a:n.id});break}}else if(e.state==="planted"&&this.phase==="planted"){if(e.timer-=t,e.beepT-=t,e.beepT<=0){let n=e.timer/$d;e.beepT=e.timer<2?0.12:e.timer<5?0.25:0.25+n*0.95,this.emit({type:"beep",x:e.x,y:e.y,z:e.z,urgent:e.timer<5})}if(e.timer<=0){e.state="exploded",this.emit({type:"explode",x:e.x,y:e.y,z:e.z});for(let n of this.agents){if(!n.alive)continue;let i=Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),s=i<10?500:500*Math.exp(-((i-10)**2)/162);if(s>1)this.damage(n,this.agents[e.planter],s,"chest","c4",n.armor>0?0.7:1)}this.endRound("T","bomb")}}}updateDrops(){for(let t of this.agents)if(t.alive)this.pickupNear(t,!1)}pickupNear(t,e){for(let n=0;n<this.drops.length;n++){let i=this.drops[n];if(Math.hypot(t.x-i.x,t.z-i.z)>(e?1.8:1)||Math.abs(t.y-i.y)>1.5||this.time-i.t<0.6)continue;let s=jt[i.id],r=s.slot;if(t.inv[r]&&!e)continue;if(t.inv[r]&&t.isBot&&jt[t.inv[r].id].price>=s.price)continue;if(this.drops.splice(n,1),t.inv[r])this.dropItem(t,r);if(t.inv[r]={id:i.id,mag:i.mag,reserve:i.reserve},this.emit({type:"pickup",a:t.id,w:i.id}),e||r==="primary"&&t.cur!=="primary")this.switchTo(t,r,0.5);return!0}return!1}dropItem(t,e){let n=t.inv[e];if(!n)return;let[i,,s]=Ii(t.yaw,0);this.drops.push({...n,x:t.x+i*1.3,y:zr(t.x,t.z,0.2,t.y+0.1),z:t.z+s*1.3,t:this.time,yaw:t.yaw+1.2}),t.inv[e]=null}dropCurrent(t){if(t.cur==="c4"&&t.inv.c4){t.inv.c4=!1;let[n,,i]=Ii(t.yaw,0);Object.assign(this.bomb,{state:"dropped",carrier:-1,x:t.x+n*1.4,y:t.y,z:t.z+i*1.4}),this.emit({type:"bombDropped"}),this.switchTo(t,t.bestSlot(),0.3);return}if(t.cur!=="primary"&&t.cur!=="secondary")return;let e=t.cur;this.dropItem(t,e),t.cur="knife",this.switchTo(t,t.bestSlot())}buy(t,e){if(!this.canBuy(t))return"Not in buy zone / buy time over";let n=jt[e],i=Xs[e],s=(n||i)?.team;if(s&&s!==t.team)return"Not available for your team";let r=(n||i).price;if(e==="vesthelm"&&t.armor>=100&&!t.helmet)r=350;if(t.money<r)return"Not enough money";if(n&&n.nade){if(t.inv.nades.filter((o)=>o===e).length>=n.max)return"Can't carry any more";if(t.inv.nades.length>=4)return"Can't carry any more grenades";t.inv.nades.push(e)}else if(n){let a=n.slot;if(t.inv[a]?.id===e)return"Already have one";if(t.inv[a])this.dropItem(t,a);t.inv[a]={id:e,mag:n.mag,reserve:n.reserve},t.cur="knife",this.switchTo(t,a,0.4)}else if(e==="vest"){if(t.armor>=100)return"Already have kevlar";t.armor=100}else if(e==="vesthelm"){if(t.armor>=100&&t.helmet)return"Already have kevlar + helmet";t.armor=100,t.helmet=!0}else if(e==="kit"){if(t.kit)return"Already have a kit";t.kit=!0}return t.money-=r,this.emit({type:"buy",a:t.id,item:e}),null}updateVisibility(){let t=this.agents;for(let e of t){let n=this.vis[e.id];if(n.fill(0),!e.alive)continue;let[i,,s]=Ii(e.yaw,0),r=e.eyeY;for(let a of t){if(!a.alive||a.team===e.team)continue;let o=a.x-e.x,c=a.z-e.z,l=Math.hypot(o,c);if(l>110)continue;let h=a.y+a.height*0.9,d=a.y+a.height*0.6,u=rs(e.x,r,e.z,a.x,h,a.z)&&!this.smokeBlocks(e.x,r,e.z,a.x,h,a.z)?2:rs(e.x,r,e.z,a.x,d,a.z)&&!this.smokeBlocks(e.x,r,e.z,a.x,d,a.z)?1:0;if(!u)continue;let f=(o*i+c*s)/(l||1)>0.42;if(n[a.id]=f?2+u:1,f&&e.flash<1)a.spotted[e.team]=this.time}}}}function qn(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Qe(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,[n,n.getContext("2d")]}function tn(t,{repeat:e=!0,srgb:n=!0,aniso:i=8}={}){let s=new Os(t);if(e)s.wrapS=s.wrapT=Pa;if(n)s.colorSpace=Fs;return s.anisotropy=i,s}function Li(t,e,n,i,s,r=0.08,a=2){for(let o=0;o<s;o++){let c=i()<0.5?0:255;t.fillStyle=`rgba(${c},${c},${c},${r*i()})`,t.fillRect(i()*e,i()*n,a*(0.5+i()),a*(0.5+i()))}}function Pi(t,e,n,i,s,r,a){for(let o=0;o<s;o++){let c=i()*e,l=i()*n,h=a*(0.4+i()),d=t.createRadialGradient(c,l,0,c,l,h);d.addColorStop(0,r),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.fillRect(c-h,l-h,h*2,h*2);for(let[u,f]of[[e,0],[-e,0],[0,n],[0,-n]])t.save(),t.translate(u,f),t.fillRect(c-h,l-h,h*2,h*2),t.restore()}}function Bc(t=1,e="#cfae78"){let[i,s]=Qe(512,512),r=qn(t);s.fillStyle=e,s.fillRect(0,0,512,512),Pi(s,512,512,r,14,"rgba(160,120,70,0.14)",90),Pi(s,512,512,r,10,"rgba(255,240,210,0.12)",80);let a=64;for(let o=0;o<8;o++){let c=-r()*80;while(c<512){let l=70+r()*70,h=0.9+r()*0.2;if(s.fillStyle=`rgba(${h>1?255:90},${h>1?235:60},${h>1?200:30},${Math.abs(h-1)*0.9})`,s.fillRect(c+2,o*a+2,l-4,a-4),s.fillStyle="rgba(95,70,40,0.55)",s.fillRect(c,o*a,3,a),c+l>512)s.fillRect(c+l-512,o*a,3,a);if(r()<0.25)s.fillStyle="rgba(90,60,30,0.25)",s.beginPath(),s.arc(c+r()*l,o*a+r()*a,3+r()*6,0,7),s.fill();c+=l}s.fillStyle="rgba(95,70,40,0.6)",s.fillRect(0,o*a,512,3),s.fillStyle="rgba(255,240,215,0.25)",s.fillRect(0,o*a+3,512,2)}return Li(s,512,512,r,9000,0.12,2),tn(i)}function zc(t=2,e="#d9c29a"){let[i,s]=Qe(512,512),r=qn(t);s.fillStyle=e,s.fillRect(0,0,512,512),Pi(s,512,512,r,14,"rgba(170,130,80,0.12)",110),Pi(s,512,512,r,10,"rgba(255,248,230,0.15)",90);for(let o=0;o<3;o++){let c=r()*512,l=r()*512,h=50+r()*90,d=30+r()*50;s.fillStyle="rgba(170,120,80,0.55)",s.fillRect(c,l,h,d),s.strokeStyle="rgba(110,75,45,0.5)",s.lineWidth=2;for(let u=l;u<l+d;u+=12)s.beginPath(),s.moveTo(c,u),s.lineTo(c+h,u),s.stroke()}s.strokeStyle="rgba(90,65,40,0.45)",s.lineWidth=1.5;for(let o=0;o<8;o++){let c=r()*512,l=r()*512;s.beginPath(),s.moveTo(c,l);for(let h=0;h<6;h++)c+=(r()-0.5)*40,l+=r()*25,s.lineTo(c,l);s.stroke()}let a=s.createLinearGradient(0,409.6,0,512);return a.addColorStop(0,"rgba(110,80,45,0)"),a.addColorStop(1,"rgba(110,80,45,0.25)"),s.fillStyle=a,s.fillRect(0,409.6,512,102.4),Li(s,512,512,r,6000,0.06,2),tn(i)}function Qd(t=3){let[n,i]=Qe(512,512),s=qn(t);i.fillStyle="#c9a66e",i.fillRect(0,0,512,512),Pi(i,512,512,s,40,"rgba(150,110,60,0.25)",70),Pi(i,512,512,s,30,"rgba(240,215,170,0.3)",60);for(let r=0;r<260;r++){let a=s()*512,o=s()*512,c=1+s()*3.5;i.fillStyle=`rgba(${90+s()*60},${70+s()*40},${40+s()*30},${0.4+s()*0.4})`,i.beginPath(),i.ellipse(a,o,c,c*(0.6+s()*0.4),s()*3,0,7),i.fill()}return Li(i,512,512,s,16000,0.12,2),tn(n)}function tf(t=4){let[n,i]=Qe(512,512),s=qn(t);i.fillStyle="#bba07a",i.fillRect(0,0,512,512);let r=4,a=512/r;for(let o=0;o<r;o++)for(let c=0;c<r;c++){let l=0.85+s()*0.3;if(i.fillStyle=`rgb(${190*l|0},${165*l|0},${125*l|0})`,i.fillRect(c*a+3,o*a+3,a-6,a-6),s()<0.3)i.strokeStyle="rgba(80,60,40,0.4)",i.lineWidth=1.5,i.beginPath(),i.moveTo(c*a+s()*a,o*a),i.lineTo(c*a+s()*a,o*a+a),i.stroke()}return Pi(i,512,512,s,25,"rgba(120,90,55,0.2)",80),Li(i,512,512,s,12000,0.12,2),tn(n)}function ef(t=5){let[n,i]=Qe(256,256),s=qn(t);return i.fillStyle="#e3cfa6",i.fillRect(0,0,256,256),Pi(i,256,256,s,20,"rgba(160,125,80,0.25)",40),Li(i,256,256,s,5000,0.12,2),tn(n)}function kc(t="wood"){let[n,i]=Qe(256,256),s=qn(t==="wood"?7:8),r=t==="wood"?[176,128,72]:[86,98,62],a=(c,l=1)=>`rgba(${r[0]*c|0},${r[1]*c|0},${r[2]*c|0},${l})`;i.fillStyle=a(1),i.fillRect(0,0,256,256);for(let c=0;c<6;c++){i.fillStyle=a(0.85+s()*0.3),i.fillRect(0,c*256/6+1,256,40.666666666666664),i.fillStyle=a(0.55),i.fillRect(0,c*256/6,256,2);for(let l=0;l<14;l++)i.fillStyle=a(0.7,0.25),i.fillRect(s()*256,c*256/6+s()*256/6,20+s()*50,1)}let o=26;i.fillStyle=a(0.75),i.fillRect(0,0,256,o),i.fillRect(0,256-o,256,o),i.fillRect(0,0,o,256),i.fillRect(256-o,0,o,256),i.save(),i.translate(128,128),i.rotate(Math.PI/4),i.fillRect(-179.2,-o/2,358.4,o),i.restore(),i.strokeStyle=a(0.45),i.lineWidth=3,i.strokeRect(1.5,1.5,253,253),i.strokeRect(o,o,256-2*o,256-2*o),i.fillStyle="rgba(40,35,30,0.8)";for(let[c,l]of[[13,13],[243,13],[13,243],[243,243],[128,13],[128,243]])i.beginPath(),i.arc(c,l,2.5,0,7),i.fill();if(t!=="wood")i.fillStyle="rgba(230,220,180,0.7)",i.font="bold 30px monospace",i.textAlign="center",i.fillText("AMMO",128,138);return Li(i,256,256,s,4000,0.15,2),tn(n)}function nf(){let[e,n]=Qe(256,256),i=qn(11);n.fillStyle="#3f6f8c",n.fillRect(0,0,256,256);for(let s=0;s<8;s++)n.fillStyle=`rgba(${40+i()*30},${90+i()*30},${115+i()*30},1)`,n.fillRect(s*256/8+1,0,30,256),n.fillStyle="rgba(20,30,40,0.6)",n.fillRect(s*256/8,0,2,256);for(let s=0;s<40;s++)n.fillStyle="rgba(150,110,70,0.8)",n.fillRect(i()*256,i()*256,4+i()*20,2+i()*8);return n.fillStyle="rgba(60,50,40,0.9)",n.fillRect(0,51.2,256,10),n.fillRect(0,192,256,10),Li(n,256,256,i,4000,0.15,2),tn(e)}function sf(){let[t,e]=Qe(256,128),n=qn(13);e.fillStyle="#2f5d8a",e.fillRect(0,0,256,128);for(let i of[18,64,108])e.fillStyle="rgba(20,35,55,0.8)",e.fillRect(0,i-3,256,6);for(let i=0;i<60;i++)e.fillStyle=`rgba(120,70,30,${0.3+n()*0.4})`,e.fillRect(n()*256,n()*128,3+n()*14,2+n()*10);return Li(e,256,128,n,3000,0.15,2),tn(t)}function Hc(t,e="rgba(200,40,30,0.85)"){let[i,s]=Qe(256,256),r=qn(t.charCodeAt(0));s.font="bold 200px Impact, Arial Black, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(t,128,138);for(let a=0;a<10;a++)s.fillRect(68+r()*120,188+r()*20,3,10+r()*30);s.globalCompositeOperation="destination-out";for(let a=0;a<1500;a++)s.fillStyle=`rgba(0,0,0,${r()*0.6})`,s.fillRect(r()*256,r()*256,2,2);return tn(i,{repeat:!1})}function Gc(t,e){let[n,i]=Qe(256,128);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,256,128),i.fillStyle="rgba(30,30,30,0.85)",i.font="bold 72px Impact, Arial Black, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t+" "+e,128,68),tn(n,{repeat:!1})}function rf(){let[t,e]=Qe(64,64),n=e.createRadialGradient(32,32,0,32,32,30);return n.addColorStop(0,"rgba(10,8,6,1)"),n.addColorStop(0.25,"rgba(25,20,15,0.95)"),n.addColorStop(0.45,"rgba(60,45,30,0.5)"),n.addColorStop(1,"rgba(60,45,30,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),tn(t,{repeat:!1})}function af(){let[t,e]=Qe(128,128),n=qn(9);for(let i=0;i<18;i++){let s=64+(n()-0.5)*40,r=64+(n()-0.5)*40,a=20+n()*26,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.32)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return tn(t,{repeat:!1,srgb:!1})}function of(){let[t,e]=Qe(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(0.35,"rgba(255,255,255,0.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),tn(t,{repeat:!1,srgb:!1})}function lf(){let[t,e]=Qe(128,128);e.translate(64,64);for(let i=0;i<2;i++){e.rotate(Math.PI/4),e.fillStyle="rgba(255,200,120,0.85)",e.beginPath();for(let s=0;s<8;s++){let r=s/8*Math.PI*2,a=s%2?18:60;e.lineTo(Math.cos(r)*a,Math.sin(r)*a)}e.fill()}let n=e.createRadialGradient(0,0,0,0,0,30);return n.addColorStop(0,"rgba(255,250,220,1)"),n.addColorStop(1,"rgba(255,180,90,0)"),e.fillStyle=n,e.fillRect(-64,-64,128,128),tn(t,{repeat:!1})}function cf(){let[t,e]=Qe(16,512),n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"#3f7fc4"),n.addColorStop(0.42,"#8fbbe0"),n.addColorStop(0.5,"#e8dcc0"),n.addColorStop(0.56,"#d8bf93"),n.addColorStop(1,"#a88a5c"),e.fillStyle=n,e.fillRect(0,0,16,512),tn(t,{repeat:!1})}class en{constructor(t=4){this.p=[],this.n=[],this.uv=[],this.i=[],this.tile=t}quad(t,e,n,i,s,r){let a=this.p.length/3;for(let o of[t,e,n,i])this.p.push(...o);for(let o=0;o<4;o++)this.n.push(...s);for(let o of r)this.uv.push(...o);this.i.push(a,a+1,a+2,a,a+2,a+3)}box(t,e,n,i,s,r,a={},o=this.tile){let c={px:!0,nx:!0,py:!0,ny:!1,pz:!0,nz:!0,...a},l=1/o;if(c.px)this.quad([e,n,r],[e,n,s],[e,i,s],[e,i,r],[1,0,0],[[-r*l,n*l],[-s*l,n*l],[-s*l,i*l],[-r*l,i*l]]);if(c.nx)this.quad([t,n,s],[t,n,r],[t,i,r],[t,i,s],[-1,0,0],[[s*l,n*l],[r*l,n*l],[r*l,i*l],[s*l,i*l]]);if(c.pz)this.quad([t,n,r],[e,n,r],[e,i,r],[t,i,r],[0,0,1],[[t*l,n*l],[e*l,n*l],[e*l,i*l],[t*l,i*l]]);if(c.nz)this.quad([e,n,s],[t,n,s],[t,i,s],[e,i,s],[0,0,-1],[[-e*l,n*l],[-t*l,n*l],[-t*l,i*l],[-e*l,i*l]]);if(c.py)this.quad([t,i,r],[e,i,r],[e,i,s],[t,i,s],[0,1,0],[[t*l,-r*l],[e*l,-r*l],[e*l,-s*l],[t*l,-s*l]]);if(c.ny)this.quad([t,n,s],[e,n,s],[e,n,r],[t,n,r],[0,-1,0],[[t*l,s*l],[e*l,s*l],[e*l,r*l],[t*l,r*l]])}floorQuad(t,e,n,i,s=0){let r=1/this.tile;this.quad([t,s,i],[e,s,i],[e,s,n],[t,s,n],[0,1,0],[[t*r,-i*r],[e*r,-i*r],[e*r,-n*r],[t*r,-n*r]])}build(){let t=new Re;return t.setAttribute("position",new be(this.p,3)),t.setAttribute("normal",new be(this.n,3)),t.setAttribute("uv",new be(this.uv,2)),t.setIndex(this.i),t.computeBoundingSphere(),t}}var $s=(t,e)=>{let n=t*374761393+e*668265263|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Sx=(t,e)=>{let n=$s(Math.floor((t+1)/3),Math.floor((e+2)/3));return[6.5,7.5,8.5,10][Math.floor(n*4)]+($s(t,e)<0.15?1:0)};function uf(t,e=8){let n={},i=(R,P={})=>new ci({map:R,roughness:0.92,metalness:0,...P}),s={sand:Bc(1),sand2:Bc(21,"#c7a26d"),plaster:zc(2),plaster2:zc(22,"#e2cfa8"),floor:Qd(3),paving:tf(4),trim:ef(5),crate:kc("wood"),crate2:kc("ammo"),door:nf(),barrel:sf()};for(let R of Object.values(s))R.anisotropy=e;n.walls=[i(s.sand),i(s.plaster),i(s.sand2),i(s.plaster2)],n.trim=i(s.trim),n.base=i(s.sand,{color:10125922}),n.floor=i(s.floor,{roughness:1}),n.paving=i(s.paving,{roughness:0.95}),n.window=new ci({color:1906450,roughness:1}),n.wood=i(s.crate,{color:10122832}),n.shutter=i(s.door);let r=new ye,a=(R,P,et=!0,V=!0)=>{let q=new ge(R,P);return q.castShadow=et,q.receiveShadow=V,r.add(q),q},o=new en(4);o.floorQuad(-60,Wn+60,-60,Xn+60,0),a(o.build(),n.floor,!1,!0);let c=new en(4);for(let R=0;R<dn;R++)for(let P=0;P<He;P++){let et=Gs[R][P];if(et==="A"||et==="B"||et==="C"||R>=10&&R<=11&&P>=17&&P<=27)c.floorQuad(P*Ze,P*Ze+Ze,R*Ze,R*Ze+Ze,0.012)}a(c.build(),n.paving,!1,!0);let l=new Uint8Array(He*dn).fill(9);for(let R=0;R<dn;R++)for(let P=0;P<He;P++){if(!hi(P,R))continue;let et=9;for(let V=-2;V<=2;V++)for(let q=-2;q<=2;q++){let j=P+q,_t=R+V;if(j>=0&&_t>=0&&j<He&&_t<dn&&!hi(j,_t))et=Math.min(et,Math.max(Math.abs(V),Math.abs(q)))}l[R*He+P]=et}let h=n.walls.map(()=>new en(4)),d=new en(2),u=new en(4),f=new en(2),g=new en(2),T=new en(1),m=(R,P)=>R<0||P<0||R>=He||P>=dn?0:hi(R,P)&&l[P*He+R]<=2?Sx(R,P):0,p=(R,P)=>R>=0&&P>=0&&R<He&&P<dn&&!hi(R,P);for(let R=0;R<dn;R++)for(let P=0;P<He;P++){if(!hi(P,R)||l[R*He+P]>2)continue;let et=m(P,R),V=P*Ze,q=V+Ze,j=R*Ze,_t=j+Ze,At=Math.floor($s(Math.floor((P+1)/3)+7,Math.floor((R+2)/3)+3)*4),ee=(bt,It)=>bt>=0&&It>=0&&bt<He&&It<dn&&m(bt,It)<et;h[At].box(V,q,0,et,j,_t,{px:ee(P+1,R),nx:ee(P-1,R),pz:ee(P,R+1),nz:ee(P,R-1)});let Nt={px:p(P+1,R),nx:p(P-1,R),pz:p(P,R+1),nz:p(P,R-1)};if(!(Nt.px||Nt.nx||Nt.pz||Nt.nz))continue;let Y=0.18;d.box(V-(Nt.nx?Y:0),q+(Nt.px?Y:0),et-0.05,et+0.3,j-(Nt.nz?Y:0),_t+(Nt.pz?Y:0),{ny:!0});let st=0.07,rt=0.45;if(Nt.px)u.box(q,q+st,0,rt,j,_t,{nx:!1});if(Nt.nx)u.box(V-st,V,0,rt,j,_t,{px:!1});if(Nt.pz)u.box(V,q,0,rt,_t,_t+st,{nz:!1});if(Nt.nz)u.box(V,q,0,rt,j-st,j,{pz:!1});if(et>=7.5)for(let[bt,It]of Object.entries(Nt)){if(!It||$s(P*3+bt.length,R*7+bt.charCodeAt(1))>0.32)continue;let ct=3.6+$s(P,R*3)*0.6,Qt=ct+1.5,Lt=(V+q)/2,Ut=(j+_t)/2,Tt=0.55,Xt=0.04;if(bt==="px")f.box(q,q+Xt,ct,Qt,Ut-Tt,Ut+Tt),g.box(q,q+0.08,ct,Qt,Ut-Tt-0.6,Ut-Tt),g.box(q,q+0.08,ct,Qt,Ut+Tt,Ut+Tt+0.6),T.box(q,q+0.14,ct-0.12,ct,Ut-Tt-0.1,Ut+Tt+0.1);if(bt==="nx")f.box(V-Xt,V,ct,Qt,Ut-Tt,Ut+Tt),g.box(V-0.08,V,ct,Qt,Ut-Tt-0.6,Ut-Tt),g.box(V-0.08,V,ct,Qt,Ut+Tt,Ut+Tt+0.6),T.box(V-0.14,V,ct-0.12,ct,Ut-Tt-0.1,Ut+Tt+0.1);if(bt==="pz")f.box(Lt-Tt,Lt+Tt,ct,Qt,_t,_t+Xt),g.box(Lt-Tt-0.6,Lt-Tt,ct,Qt,_t,_t+0.08),g.box(Lt+Tt,Lt+Tt+0.6,ct,Qt,_t,_t+0.08),T.box(Lt-Tt-0.1,Lt+Tt+0.1,ct-0.12,ct,_t,_t+0.14);if(bt==="nz")f.box(Lt-Tt,Lt+Tt,ct,Qt,j-Xt,j),g.box(Lt-Tt-0.6,Lt-Tt,ct,Qt,j-0.08,j),g.box(Lt+Tt,Lt+Tt+0.6,ct,Qt,j-0.08,j),T.box(Lt-Tt-0.1,Lt+Tt+0.1,ct-0.12,ct,j-0.14,j)}}h.forEach((R,P)=>a(R.build(),n.walls[P])),a(d.build(),n.trim),a(u.build(),n.base,!1),a(f.build(),n.window,!1),a(g.build(),n.shutter,!1),a(T.build(),n.wood,!1);let C=new en(1),A=new en(1),v=new en(3.2),M=new en(4),E=new en(4),w=new en(1),_=new wi(0.36,0.36,1.1,14),S=i(s.barrel,{roughness:0.6,metalness:0.3});for(let R of Tn)if(R.kind==="crate")C.box(R.x0,R.x1,R.y0,R.y1,R.z0,R.z1);else if(R.kind==="crate2")A.box(R.x0,R.x1,R.y0,R.y1,R.z0,R.z1);else if(R.kind==="door")v.box(R.x0,R.x1,R.y0,R.y1,R.z0,R.z1);else if(R.kind==="lintel")E.box(R.x0,R.x1,R.y0,R.y1,R.z0,R.z1,{ny:!0}),w.box(R.x0-0.05,R.x1+0.05,R.y0-0.25,R.y0,R.z0-0.05,R.z1+0.05,{ny:!0});else if(R.kind==="roof"){M.box(R.x0-0.1,R.x1+0.1,R.y0,R.y1,R.z0-0.1,R.z1+0.1,{ny:!0});for(let P=0.5;P<4;P+=1.2)w.box(R.x0,R.x1,R.y0-0.18,R.y0,R.z0+P,R.z0+P+0.18,{ny:!0})}else if(R.kind==="barrel"){let P=new ge(_,S);P.position.set((R.x0+R.x1)/2,0.55,(R.z0+R.z1)/2),P.rotation.y=$s(R.x0|0,R.z0|0)*6,P.castShadow=P.receiveShadow=!0,r.add(P)}a(C.build(),i(s.crate)),a(A.build(),i(s.crate2)),a(v.build(),i(s.door)),a(M.build(),n.walls[1]),a(E.build(),n.walls[0]),a(w.build(),n.wood);let z=(R,P,et,V,q,j,_t=0)=>{let At=new ge(new li(q,q),new ci({map:R,transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return At.position.set(P,et,V),At.rotation.set(_t,j,0,"YXZ"),At.receiveShadow=!0,r.add(At),At},I=Hc("A"),O=Hc("B");z(I,124,0.03,24,7,0,-Math.PI/2),z(O,15,0.03,26,7,0,-Math.PI/2),z(I,128.02,2.6,38,2.6,Math.PI/2),z(I,111.98,2.6,38,2.6,-Math.PI/2),z(O,11.98,2.6,38,2.6,-Math.PI/2),z(O,44,2.6,12.02,2.6,0),z(Gc("A","→"),90,2.3,40.02,2.6,0),z(Gc("B","→"),50,2.3,63.98,2.6,Math.PI);let J=new ge(new zn(900,24,16),new Bn({map:cf(),side:Ye,fog:!1,depthWrite:!1}));J.position.set(Wn/2,0,Xn/2),J.renderOrder=-1,r.add(J);let L=n.walls[3],G=new ci({color:13218698,roughness:0.8});for(let[R,P,et,V]of[[-26,40,26,3],[176,24,30,2.6],[70,-34,22,4],[118,152,28,3],[22,146,18,5],[180,96,20,4.5],[-30,104,24,3.5]]){let q=new ge(new wi(V*0.8,V,et,12),L);q.position.set(R,et/2,P),r.add(q);let j=new ge(new zn(V*1.05,14,8,0,Math.PI*2,0,Math.PI/2),G);j.position.set(R,et,P),r.add(j)}return t.add(r),{group:r,mats:n}}var Vc=new Map;function Xc(t,e=0.7,n=0.1){let i=t+":"+e+":"+n;if(!Vc.has(i))Vc.set(i,new ci({color:t,roughness:Math.max(0.35,e),metalness:Math.min(0.25,n*0.3)}));return Vc.get(i)}var Wc=new Map;function Dt(t,e,n,i,s=0,r=0,a=0,o,c){let l=`${t},${e},${n}`;if(!Wc.has(l))Wc.set(l,new Ei(t,e,n));let h=new ge(Wc.get(l),Xc(i,o,c));return h.position.set(s,r,a),h}function _n(t,e,n,i=0,s=0,r=0,a,o){let c=new ge(new wi(t,t,e,10),Xc(n,a,o));return c.rotation.x=Math.PI/2,c.position.set(i,s,r),c}var Gr=5790818,En=3882562,df=9065776,ff=6714186;function Zs(t){let e=new ye,n=new B(0,0.03,-0.6),i=(...s)=>s.forEach((r)=>e.add(r));switch(t){case"ak47":i(Dt(0.055,0.085,0.4,Gr,0,0.03,-0.12,0.5,0.6),Dt(0.05,0.1,0.26,df,0,0,0.2,0.6),Dt(0.065,0.065,0.22,df,0,0.02,-0.42,0.6),_n(0.012,0.32,Gr,0,0.045,-0.66,0.4,0.7),_n(0.009,0.25,Gr,0,0.075,-0.5,0.4,0.7),Dt(0.012,0.04,0.012,Gr,0,0.09,-0.78),Dt(0.035,0.1,0.05,En,0,-0.06,0.03));{let s=Dt(0.042,0.19,0.07,3025446,0,-0.1,-0.17,0.5,0.4);s.rotation.x=0.35,e.add(s)}n.set(0,0.045,-0.83);break;case"m4a1":i(Dt(0.05,0.085,0.38,En,0,0.03,-0.12,0.5,0.5),Dt(0.045,0.085,0.22,En,0,0,0.2),Dt(0.02,0.035,0.2,En,0,0.09,-0.1),_n(0.028,0.24,2829615,0,0.035,-0.42),_n(0.022,0.2,1579290,0,0.035,-0.64,0.5,0.5),Dt(0.035,0.1,0.05,En,0,-0.06,0.03),Dt(0.038,0.16,0.06,2829099,0,-0.1,-0.15)),n.set(0,0.035,-0.75);break;case"awp":i(Dt(0.07,0.1,0.55,ff,0,0.02,-0.05,0.8),Dt(0.065,0.15,0.3,ff,0,-0.01,0.32,0.8),_n(0.016,0.55,Gr,0,0.04,-0.6,0.4,0.7),_n(0.032,0.34,1118481,0,0.12,-0.08,0.3,0.6),_n(0.04,0.05,1118481,0,0.12,-0.27,0.3,0.6),Dt(0.035,0.1,0.05,En,0,-0.07,0.06),Dt(0.045,0.07,0.1,En,0,-0.06,-0.1)),n.set(0,0.04,-0.88);break;case"mp5":i(Dt(0.05,0.08,0.32,En,0,0.03,-0.08),_n(0.026,0.26,1381911,0,0.035,-0.37),Dt(0.035,0.09,0.05,En,0,-0.05,0.04),Dt(0.02,0.06,0.2,En,0,0.03,0.18));{let s=Dt(0.032,0.16,0.05,2829099,0,-0.09,-0.1);s.rotation.x=0.25,e.add(s)}n.set(0,0.035,-0.5);break;case"glock":i(Dt(0.032,0.042,0.18,3816512,0,0.04,-0.06,0.4,0.5),Dt(0.03,0.11,0.05,2894892,0,-0.02,0)),n.set(0,0.045,-0.16);break;case"usp":i(Dt(0.032,0.044,0.19,3948356,0,0.04,-0.06,0.4,0.5),Dt(0.03,0.11,0.05,2894892,0,-0.02,0),_n(0.016,0.15,2500394,0,0.04,-0.23,0.5,0.4)),n.set(0,0.04,-0.31);break;case"deagle":i(Dt(0.038,0.055,0.25,9277590,0,0.045,-0.08,0.25,0.9),Dt(0.034,0.12,0.055,2763306,0,-0.02,0)),n.set(0,0.05,-0.21);break;case"knife":{i(Dt(0.024,0.032,0.11,1447446,0,0,0.02));let s=Dt(0.006,0.034,0.17,13159632,0,0.004,-0.12,0.2,0.9);e.add(s),i(Dt(0.05,0.012,0.012,4473924,0,0,-0.035)),n.set(0,0,-0.2);break}case"he":i(new ge(new zn(0.038,12,10),Xc(4872750,0.6)),Dt(0.012,0.05,0.02,10066329,0,0.04,0.01));break;case"flash":{let s=_n(0.026,0.1,10133670,0,0,0,0.4,0.6);s.rotation.x=0,e.add(s,Dt(0.012,0.05,0.02,7829367,0,0.06,0.01));break}case"smoke":{let s=_n(0.028,0.11,7305834,0,0,0,0.5,0.4);s.rotation.x=0;let r=_n(0.03,0.02,3968330,0,0.02,0);r.rotation.x=0,e.add(s,r,Dt(0.012,0.05,0.02,7829367,0,0.065,0.01));break}case"c4":i(Dt(0.16,0.06,0.1,11770730,0,0,0,0.8),Dt(0.07,0.02,0.045,1118481,0.02,0.04,0),Dt(0.05,0.008,0.03,3364147,0.02,0.052,0));break;default:i(Dt(0.03,0.1,0.2,En))}return e.userData.muzzle=n,e.traverse((s)=>{if(s.isMesh)s.castShadow=!0}),e}var pf={T:{shirt:12885100,pants:10125400,vest:8283724,head:6180932,skin:13671540,accent:11551791,boots:4865070,helmet:0},CT:{shirt:7377088,pants:5926550,vest:5662858,head:6057608,skin:14725258,accent:3355443,boots:3158064,helmet:7636378}};class qc{constructor(t){let e=pf[t];this.team=t,this.root=new ye,this.pivot=new ye,this.root.add(this.pivot);let n=this.legs=[];for(let a of[-1,1]){let o=new ye;o.position.set(a*0.11,0.9,0),o.add(Dt(0.17,0.5,0.19,e.pants,0,-0.25,0));let c=new ye;c.position.set(0,-0.5,0),o.add(c),c.add(Dt(0.15,0.36,0.17,e.pants,0,-0.18,0),Dt(0.16,0.08,0.26,e.boots,0,-0.38,-0.04)),o.userData.knee=c,this.pivot.add(o),n.push(o)}let i=this.upper=new ye;if(i.position.y=0.9,this.pivot.add(i),i.add(Dt(0.46,0.6,0.27,e.shirt,0,0.3,0),Dt(0.5,0.42,0.32,e.vest,0,0.33,0)),t==="T")i.add(Dt(0.5,0.06,0.33,e.accent,0,0.1,0));else i.add(Dt(0.12,0.1,0.05,15262408,0.12,0.45,-0.17));let s=this.neck=new ye;if(s.position.y=0.62,i.add(s),s.add(Dt(0.24,0.26,0.26,e.head,0,0.14,0)),t==="T")s.add(Dt(0.2,0.06,0.02,e.skin,0,0.17,-0.13),Dt(0.16,0.035,0.025,1118481,0,0.18,-0.14));else s.add(Dt(0.2,0.14,0.02,e.skin,0,0.1,-0.13),Dt(0.22,0.05,0.03,855309,0,0.18,-0.14),Dt(0.29,0.1,0.31,e.helmet,0,0.27,0.01,0.6));let r=(a,o,c)=>{let l=new ye;return l.position.set(a*0.29,0.52,0),l.add(Dt(0.13,0.13,0.42,e.shirt,0,0,-0.18)),l.add(Dt(0.11,0.11,0.08,1907997,0,0,-0.42)),l.rotation.set(o,c,0),i.add(l),l};this.armR=r(1,-0.35,0.25),this.armL=r(-1,-0.25,-0.5),this.gunMount=new ye,this.gunMount.position.set(0.1,0.42,-0.42),i.add(this.gunMount),this.gunId=null,this.gun=null,this.root.traverse((a)=>{if(a.isMesh)a.castShadow=!0,a.receiveShadow=!1}),this.walk=0,this.dead=!1,this.deathT=0,this.fallDir=1}setGun(t){if(t===this.gunId)return;if(this.gun)this.gunMount.remove(this.gun);this.gunId=t,this.gun=Zs(t),this.gunMount.add(this.gun);let e=t==="glock"||t==="usp"||t==="deagle"||t==="knife"||t==="he"||t==="flash"||t==="smoke"||t==="c4";this.gunMount.position.set(e?0.05:0.1,e?0.4:0.42,e?-0.5:-0.42),this.armL.rotation.set(e?-0.5:-0.25,e?-0.15:-0.5,0),this.armR.rotation.set(e?-0.5:-0.35,e?0.15:0.25,0)}update(t,e){if(this.root.position.set(t.x,t.y,t.z),this.root.rotation.y=t.yaw,!t.alive){if(!this.dead)this.dead=!0,this.deathT=0,this.fallDir=Math.random()<0.5?1:-1;this.deathT=Math.min(1,this.deathT+e*2.6);let a=1-(1-this.deathT)**3;this.pivot.rotation.set(a*Math.PI/2*0.98,0,a*0.25*this.fallDir),this.pivot.position.y=a*0.1,this.legs.forEach((o)=>{o.rotation.x*=0.9,o.userData.knee.rotation.x*=0.9});return}if(this.dead)this.dead=!1,this.pivot.rotation.set(0,0,0),this.pivot.position.y=0;this.setGun(t.weaponId());let n=Math.min(1.2,t.moveSpeed/6.4);this.walk+=e*(4+n*6)*(n>0.05?1:0);let i=Math.sin(this.walk)*0.7*n,s=t.duck;this.legs.forEach((a,o)=>{let c=o?-1:1;a.rotation.x=c*i*(1-s*0.6)-s*0.9,a.userData.knee.rotation.x=s*1.6+Math.max(0,-c*Math.cos(this.walk))*0.6*n});let r=s*0.42;this.legs.forEach((a)=>{a.position.y=0.9-r}),this.upper.position.y=0.9-r,this.upper.rotation.x=t.pitch*0.45+s*0.1,this.neck.rotation.x=t.pitch*0.4,this.upper.rotation.y=Math.sin(this.walk)*0.06*n}}function mf(t,e){let n=pf[t],i=new ye,s=(c)=>{let l=new ye;return l.add(Dt(0.06,0.06,c,n.vest,0,0,c/2+0.04)),l.add(Dt(0.055,0.06,0.08,2763306,0,0,0)),l},r=e==="glock"||e==="usp"||e==="deagle",a=s(0.32);if(a.position.set(0.01,-0.06,0.04),a.rotation.set(1.05,0.15,0),i.add(a),e==="knife"||e==="he"||e==="flash"||e==="smoke")return i;let o=s(0.34);if(r)o.position.set(-0.035,-0.07,0.01),o.rotation.set(1,-0.35,0);else if(e==="c4")o.position.set(-0.08,-0.03,0),o.rotation.set(1,-0.4,0);else o.position.set(-0.02,-0.03,e==="awp"?-0.3:-0.34),o.rotation.set(0.95,-0.5,0);return i.add(o),i}class os{constructor(t,e,{additive:n=!1,gravity:i=0,drag:s=1}={}){this.max=t,this.gravity=i,this.drag=s,this.cursor=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.a0=new Float32Array(t);let r=this.geo=new Re,a=(o,c)=>new ke(o,c).setUsage(vr);r.setAttribute("position",a(this.pos,3)),r.setAttribute("aCol",a(this.col,3)),r.setAttribute("aSize",a(this.size,1)),r.setAttribute("aAlpha",a(this.alpha,1)),this.mat=new an({transparent:!0,depthWrite:!1,blending:n?ei:Xi,uniforms:{uTex:{value:e},uScale:{value:600}},vertexShader:`
        attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uScale / max(-mv.z, 0.3); vA = aAlpha; vC = aCol; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        uniform sampler2D uTex; varying float vA; varying vec3 vC;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); }`}),this.mesh=new Za(r,this.mat),this.mesh.frustumCulled=!1}emit(t,e,n,i,s,r,a,o,c,l,h=1,d=1,u=1){let f=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[f*3]=t,this.pos[f*3+1]=e,this.pos[f*3+2]=n,this.vel[f*3]=i,this.vel[f*3+1]=s,this.vel[f*3+2]=r,this.col[f*3]=h,this.col[f*3+1]=d,this.col[f*3+2]=u,this.life[f]=this.maxLife[f]=a,this.size[f]=o,this.grow[f]=c,this.a0[f]=l,this.alpha[f]=l}update(t){let e=Math.exp(-this.drag*t);for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;let i=n*3;if(this.vel[i]*=e,this.vel[i+1]=this.vel[i+1]*e-this.gravity*t,this.vel[i+2]*=e,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.pos[i+1]<0.02)this.pos[i+1]=0.02,this.vel[i+1]*=-0.3;this.size[n]+=this.grow[n]*t;let s=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=this.a0[n]*s*Math.min(1,(1-s)*10+0.4)}for(let n of["position","aCol","aSize","aAlpha"])this.geo.attributes[n].needsUpdate=!0}}class Yc{constructor(t,e=48){this.max=e,this.i=0,this.pos=new Float32Array(e*6),this.col=new Float32Array(e*6),this.life=new Float32Array(e);let n=this.geo=new Re;n.setAttribute("position",new ke(this.pos,3).setUsage(vr)),n.setAttribute("color",new ke(this.col,3).setUsage(vr)),this.mesh=new $a(n,new Ar({vertexColors:!0,transparent:!0,blending:ei,depthWrite:!1})),this.mesh.frustumCulled=!1,t.add(this.mesh)}add(t,e,n,i,s,r){let a=this.i;this.i=(this.i+1)%this.max,this.life[a]=0.09,this.seg=this.seg||[],this.seg[a]=[t,e,n,i,s,r]}update(t){for(let e=0;e<this.max;e++){let n=e*6;if(this.life[e]<=0){this.col.fill(0,n,n+6);continue}this.life[e]-=t;let i=this.seg[e],s=1-Math.max(0,this.life[e])/0.09,r=Math.hypot(i[3]-i[0],i[4]-i[1],i[5]-i[2])||1,a=Math.min(r,4)/r,o=Math.min(1,s*1.3),c=Math.min(1,o+a);for(let h=0;h<3;h++)this.pos[n+h]=i[h]+(i[3+h]-i[h])*o,this.pos[n+3+h]=i[h]+(i[3+h]-i[h])*c;let l=Math.max(0,this.life[e]/0.09)*0.55;this.col[n]=1*l,this.col[n+1]=0.85*l,this.col[n+2]=0.5*l,this.col[n+3]=1*l,this.col[n+4]=0.9*l,this.col[n+5]=0.6*l}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}class $c{constructor(t,e,n=140){this.list=[],this.i=0,this.max=n;let i=new li(0.13,0.13),s=new Bn({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,opacity:0.9});this.mesh=new Ya(i,s,n),this.mesh.count=0,this.mesh.frustumCulled=!1,t.add(this.mesh),this.o=new Me}add(t,e,n,i,s,r,a=1){let o=this.o;o.position.set(t+i*0.01,e+s*0.01,n+r*0.01),o.lookAt(t+i,e+s,n+r),o.rotateZ(Math.random()*6.28),o.scale.setScalar(a*(0.8+Math.random()*0.4)),o.updateMatrix(),this.mesh.setMatrixAt(this.i,o.matrix),this.i=(this.i+1)%this.max,this.mesh.count=Math.min(this.max,this.mesh.count+1),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.mesh.count=0,this.i=0}}class Zc{constructor(t,e){this.scene=t,this.clouds=new Map,this.mat=new oi({map:e,color:11052188,transparent:!0,depthWrite:!1,opacity:0.9})}sync(t,e){for(let n of t.smokes){let i=this.clouds.get(n);if(!i){i={group:new ye,puffs:[]};for(let a=0;a<46;a++){let o=new Ti(this.mat.clone()),c=Math.random()*Math.PI*2,l=Math.sqrt(Math.random()),h=Math.random();o.userData={ox:Math.cos(c)*l,oz:Math.sin(c)*l,oy:h,rot:(Math.random()-0.5)*0.3,s:0.8+Math.random()*0.6},o.material.rotation=Math.random()*6,o.material.color.setScalar(0.55+Math.random()*0.2),i.group.add(o),i.puffs.push(o)}i.group.position.set(n.x,n.y,n.z),this.scene.add(i.group),this.clouds.set(n,i)}let s=t.smokeRadius(n),r=n.t>n.life-1.5?Math.max(0,(n.life-n.t)/1.5):1;for(let a of i.puffs){let o=a.userData;a.position.set(o.ox*s*0.8,0.6+o.oy*s*0.75,o.oz*s*0.8),a.scale.setScalar(s*0.95*o.s+0.3),a.material.rotation+=o.rot*e,a.material.opacity=0.85*r}}for(let[n,i]of this.clouds)if(!t.smokes.includes(n))this.scene.remove(i.group),i.puffs.forEach((s)=>s.material.dispose()),this.clouds.delete(n)}clear(){for(let[,t]of this.clouds)this.scene.remove(t.group);this.clouds.clear()}}var gf={ak47:{lp:2600,body:95,decay:0.26,gain:1,crack:0.5},m4a1:{lp:1500,body:120,decay:0.12,gain:0.55,crack:0.15},awp:{lp:2200,body:60,decay:0.7,gain:1.35,crack:0.8},mp5:{lp:1300,body:140,decay:0.08,gain:0.45,crack:0.1},glock:{lp:3200,body:160,decay:0.14,gain:0.7,crack:0.4},usp:{lp:1200,body:150,decay:0.08,gain:0.45,crack:0.1},deagle:{lp:2400,body:80,decay:0.38,gain:1.15,crack:0.7}};class Jc{constructor(){this.ctx=null,this.volume=0.8,this.voice=!0,this.lx=0,this.ly=0,this.lz=0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.volume;let e=t.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);let n=this.noise.getChannelData(0);for(let c=0;c<n.length;c++)n[c]=Math.random()*2-1;let i=t.createBufferSource();i.buffer=this.noise,i.loop=!0;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=380;let r=t.createGain();r.gain.value=0.025;let a=t.createOscillator();a.frequency.value=0.07;let o=t.createGain();o.gain.value=0.015,a.connect(o),o.connect(r.gain),a.start(),i.connect(s),s.connect(r),r.connect(this.master),i.start()}setVolume(t){if(this.volume=t,this.master)this.master.gain.value=t}listener(t,e,n,i){if(this.lx=t,this.ly=e,this.lz=n,!this.ctx)return;let s=this.ctx.listener,r=-Math.sin(i),a=-Math.cos(i);if(s.positionX)s.positionX.value=t,s.positionY.value=e,s.positionZ.value=n,s.forwardX.value=r,s.forwardY.value=0,s.forwardZ.value=a,s.upX.value=0,s.upY.value=1,s.upZ.value=0;else s.setPosition(t,e,n),s.setOrientation(r,0,a,0,1,0)}out(t,e=3,n=1.1){let i=this.ctx;if(!t)return this.master;let s=i.createPanner();if(s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=e,s.rolloffFactor=n,s.maxDistance=300,s.positionX)s.positionX.value=t[0],s.positionY.value=t[1],s.positionZ.value=t[2];else s.setPosition(...t);let r=Math.hypot(t[0]-this.lx,t[2]-this.lz),a=i.createBiquadFilter();return a.type="lowpass",a.frequency.value=Math.max(700,16000-r*160),a.connect(s),s.connect(this.master),a}burst(t,{t:e=0,dur:n=0.2,type:i="lowpass",f:s=2000,q:r=0.7,gain:a=0.5,attack:o=0.002,sweep:c=0}){let l=this.ctx,h=l.currentTime+e,d=l.createBufferSource();d.buffer=this.noise;let u=l.createBiquadFilter();if(u.type=i,u.frequency.value=s,u.Q.value=r,c)u.frequency.exponentialRampToValueAtTime(Math.max(40,s*c),h+n);let f=l.createGain();f.gain.setValueAtTime(0.0001,h),f.gain.exponentialRampToValueAtTime(a,h+o),f.gain.exponentialRampToValueAtTime(0.0001,h+n),d.connect(u),u.connect(f),f.connect(t),d.start(h,Math.random()*1.5),d.stop(h+n+0.05)}tone(t,{t:e=0,f:n=440,f2:i=0,dur:s=0.2,type:r="sine",gain:a=0.3,attack:o=0.003}){let c=this.ctx,l=c.currentTime+e,h=c.createOscillator();if(h.type=r,h.frequency.setValueAtTime(n,l),i)h.frequency.exponentialRampToValueAtTime(i,l+s);let d=c.createGain();d.gain.setValueAtTime(0.0001,l),d.gain.exponentialRampToValueAtTime(a,l+o),d.gain.exponentialRampToValueAtTime(0.0001,l+s),h.connect(d),d.connect(t),h.start(l),h.stop(l+s+0.05)}gun(t,e){if(!this.ctx)return;let n=gf[t]||gf.glock,i=this.out(e,6,0.9),s=e?1:0.75;if(this.burst(i,{dur:n.decay,f:n.lp,gain:n.gain*s,q:0.5}),this.burst(i,{dur:0.04,type:"highpass",f:3000,gain:n.crack*0.5*s}),this.tone(i,{f:n.body*2,f2:n.body*0.5,dur:n.decay*0.8,type:"triangle",gain:n.gain*0.6*s}),t==="awp")this.burst(i,{t:0.05,dur:0.9,f:500,gain:0.25*s,attack:0.05})}step(t,e){if(!this.ctx)return;let n=e?this.master:this.out(t,2.5,1.4);this.burst(n,{dur:0.07,type:"bandpass",f:500+Math.random()*500,q:1.2,gain:e?0.08:0.35}),this.burst(n,{t:0.02,dur:0.05,type:"highpass",f:2500,gain:e?0.03:0.12})}land(t,e){if(!this.ctx)return;let n=e?this.master:this.out(t,2.5,1.4);this.burst(n,{dur:0.12,f:400,gain:e?0.2:0.4})}reload(t,e,n){if(!this.ctx)return;let i=e?this.master:this.out(n,2,1.5),s=e?0.25:0.2;this.burst(i,{t:0.15,dur:0.05,type:"bandpass",f:1800,q:3,gain:s}),this.burst(i,{t:t*0.55,dur:0.06,type:"bandpass",f:1400,q:3,gain:s*1.2}),this.burst(i,{t:t*0.85,dur:0.05,type:"bandpass",f:2600,q:4,gain:s}),this.burst(i,{t:t*0.9,dur:0.05,type:"bandpass",f:1900,q:4,gain:s})}click(t=0.15,e=2500){if(!this.ctx)return;this.burst(this.master,{dur:0.03,type:"bandpass",f:e,q:5,gain:t})}dry(){this.click(0.2,3500)}switchW(){if(!this.ctx)return;this.burst(this.master,{dur:0.12,type:"bandpass",f:900,q:0.8,gain:0.08}),this.click(0.12,2200)}hit(t){if(!this.ctx)return;if(t)this.tone(this.master,{f:2500,dur:0.18,gain:0.08}),this.tone(this.master,{f:3700,dur:0.12,gain:0.05});else this.burst(this.master,{dur:0.05,type:"bandpass",f:900,q:2,gain:0.18})}hurt(){if(!this.ctx)return;this.burst(this.master,{dur:0.15,f:300,gain:0.5}),this.tone(this.master,{f:140,f2:80,dur:0.2,gain:0.25})}knife(t){if(!this.ctx)return;this.burst(this.out(t,2,1.5),{dur:0.18,type:"bandpass",f:1200,q:1.5,gain:0.25,sweep:3,attack:0.04})}throwN(t){if(!this.ctx)return;this.burst(this.out(t,2,1.5),{dur:0.25,type:"bandpass",f:600,q:1,gain:0.2,sweep:2,attack:0.05})}bounce(t){if(!this.ctx)return;this.burst(this.out(t,2,1.4),{dur:0.05,type:"bandpass",f:2200,q:3,gain:0.3})}explosion(t,e){if(!this.ctx)return;let n=this.out(t,e?30:12,0.6);this.burst(n,{dur:e?2.6:1.4,f:e?700:900,gain:e?1.6:1.1,sweep:0.2}),this.tone(n,{f:70,f2:28,dur:e?1.6:0.9,type:"sine",gain:e?1.2:0.8}),this.burst(n,{dur:0.08,type:"highpass",f:2000,gain:0.5})}flashPop(t){if(!this.ctx)return;let e=this.out(t,8,0.8);this.burst(e,{dur:0.25,type:"highpass",f:1500,gain:0.7}),this.tone(e,{f:300,f2:100,dur:0.2,gain:0.3})}ring(t){if(!this.ctx)return;this.tone(this.master,{f:3400,dur:Math.min(4,t),gain:0.035,attack:0.05})}smokePop(t){if(!this.ctx)return;this.burst(this.out(t,5,1),{dur:2.2,type:"highpass",f:2500,gain:0.25,attack:0.05})}beep(t){if(!this.ctx)return;this.tone(this.out(t,6,0.6),{f:2900,dur:0.09,type:"square",gain:0.12})}plantBeeps(t){if(!this.ctx)return;let e=this.out(t,4,1);for(let n=0;n<7;n++)this.tone(e,{t:n*0.42,f:1700+n%3*300,dur:0.07,type:"square",gain:0.1})}defuse(t){if(!this.ctx)return;let e=this.out(t,3,1.2);for(let n=0;n<6;n++)this.burst(e,{t:n*0.3,dur:0.06,type:"bandpass",f:1500+Math.random()*1500,q:3,gain:0.2})}buy(){this.click(0.2,1800)}zoom(){this.click(0.15,4000)}pickup(){this.click(0.25,1500)}roundEnd(t){if(!this.ctx)return;(t?[523,659,784,1047]:[440,415,370,330]).forEach((n,i)=>this.tone(this.master,{t:i*0.13,f:n,dur:0.5,type:"triangle",gain:0.12}))}say(t){if(!this.voice||!window.speechSynthesis)return;try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.rate=1.08,e.pitch=0.75,e.volume=Math.min(1,this.volume*0.9),speechSynthesis.speak(e)}catch{}}}var St=(t)=>document.getElementById(t),Yt={team:"CT",diff:"normal",rounds:8,sens:1,voice:!0,quality:"high",invert:!1,volume:0.8};try{Object.assign(Yt,JSON.parse(localStorage.getItem("dust-strike")||"{}"))}catch{}var Vr=()=>localStorage.setItem("dust-strike",JSON.stringify(Yt)),Mx=()=>new Promise((t)=>requestAnimationFrame(()=>setTimeout(t,0))),ls=(t,e,n)=>t<e?e:t>n?n:t,Kc=(t)=>(t=Math.max(0,Math.ceil(t)),`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`),bx={T:"Terrorists",CT:"Counter-Terrorists"},Xr=0.008333333333333333,yf=["primary","secondary","knife","nade","c4"],Te=new Rc({antialias:Yt.quality==="high",powerPreference:"high-performance"}),vf=()=>Yt.quality==="high"?Math.min(devicePixelRatio,1.5):0.8;Te.setPixelRatio(vf());Te.setSize(innerWidth,innerHeight);Te.toneMapping=gr;Te.toneMappingExposure=1.05;Te.shadowMap.enabled=!0;Te.shadowMap.type=Wi;Te.autoClear=!1;document.body.prepend(Te.domElement);var Ee=new Tr;Ee.fog=new br(14469540,80,300);var ae=new qe(74,innerWidth/innerHeight,0.05,2000);ae.rotation.order="YXZ";Ee.add(new Cr(13952767,11569752,1.25));var Tx=new B(0.45,1,0.28).normalize(),fn=new Ir(16770237,2.7);fn.castShadow=!0;fn.position.set(Wn/2,0,Xn/2).addScaledVector(Tx,150);fn.target.position.set(Wn/2,0,Xn/2);Object.assign(fn.shadow.camera,{left:-105,right:105,top:105,bottom:-105,near:10,far:320});fn.shadow.bias=-0.0004;fn.shadow.normalBias=0.05;Ee.add(fn,fn.target);var Sf=()=>{let t=Yt.quality==="high"?4096:2048;if(fn.shadow.map&&fn.shadow.mapSize.x!==t)fn.shadow.map.dispose(),fn.shadow.map=null;fn.shadow.mapSize.set(t,t)};Sf();var nr=new Tr,jc=new qe(58,innerWidth/innerHeight,0.01,10);nr.add(new Cr(13952767,10123861,2.1));var Mf=new Ir(16770237,2.6);Mf.position.set(0.6,1,0.3);nr.add(Mf);var Ui=new ye;nr.add(Ui);var Jt=new Jc,tt={state:"loading",game:null,yaw:0,pitch:0,freeze:!1,spec:0,deathAt:0,killer:null,msgs:[],shake:0,menuT:0},Ex,xn,mo,Ks,sh,Yr=new Map,js=new Map,Qs=new Map,wn,fo,go=[],tr=0,th=performance.now(),Ge=new Set,An={reload:!1,slot:null,drop:!1},De={l:!1,r:!1,dx:0,dy:0},$r=!1,Je=!1,di=()=>document.pointerLockElement===Te.domElement;function Zr(){try{let t=Te.domElement.requestPointerLock({unadjustedMovement:!0});if(t&&t.catch)t.catch(()=>Te.domElement.requestPointerLock())}catch{Te.domElement.requestPointerLock()}}addEventListener("keydown",(t)=>{if(t.code==="Tab")t.preventDefault();if(tt.state==="menu"&&t.code==="Enter"){qr();return}if(tt.state!=="playing")return;if($r&&(t.ctrlKey||t.metaKey))t.preventDefault();if(t.repeat){Ge.add(t.code);return}Ge.add(t.code);let e=tt.game?.player;if(t.code==="KeyR")An.reload=!0;if(t.code==="KeyG")An.drop=!0;if(/^Digit[1-5]$/.test(t.code))An.slot=yf[+t.code.slice(5)-1];if(t.code==="KeyQ"&&e)An.slot=e.last;if(t.code==="KeyB")xo();if(t.code==="Escape"&&Je)xo(!1);if(t.code==="Space"&&e&&!e.alive)Ef(1)});addEventListener("keyup",(t)=>Ge.delete(t.code));addEventListener("blur",()=>{Ge.clear(),De.l=De.r=!1});Te.domElement.addEventListener("mousedown",(t)=>{if(tt.state!=="playing")return;if(!di()){if(!Je)Zr();return}if(t.button===0)De.l=!0;if(t.button===2)De.r=!0;let e=tt.game?.player;if(e&&!e.alive&&t.button===0)Ef(1)});addEventListener("mouseup",(t)=>{if(t.button===0)De.l=!1;if(t.button===2)De.r=!1});addEventListener("contextmenu",(t)=>t.preventDefault());addEventListener("mousemove",(t)=>{if(!di()||tt.state!=="playing")return;let e=tt.game.player,n=e.scope===2?0.2:e.scope===1?0.45:1,i=0.0021*Yt.sens*n;tt.yaw-=t.movementX*i,tt.pitch=ls(tt.pitch-t.movementY*i*(Yt.invert?-1:1),-1.5,1.5),De.dx+=t.movementX,De.dy+=t.movementY});addEventListener("wheel",(t)=>{if(tt.state!=="playing"||!di())return;let e=tt.game.player,n=yf.filter((s)=>e.has(s)),i=n.indexOf(e.cur);An.slot=n[(i+(t.deltaY>0?1:-1)+n.length)%n.length]},{passive:!0});document.addEventListener("pointerlockchange",()=>{if(tt.state==="playing"&&!di()&&!Je)Cx();St("clickToPlay").classList.toggle("hidden",!(tt.state==="playing"&&!di()&&!Je))});document.addEventListener("pointerlockerror",()=>{if(tt.state==="playing"&&!Je)St("clickToPlay").classList.remove("hidden")});St("clickToPlay").addEventListener("click",()=>Zr());function bf(){let t=tt.game.player,e=Ge.has("KeyC")||$r&&(Ge.has("ControlLeft")||Ge.has("ControlRight")),n={fwd:(Ge.has("KeyW")?1:0)-(Ge.has("KeyS")?1:0),side:(Ge.has("KeyD")?1:0)-(Ge.has("KeyA")?1:0),jump:Ge.has("Space"),crouch:e,walk:Ge.has("ShiftLeft")||Ge.has("ShiftRight"),fire:De.l&&!Je&&di(),alt:De.r&&!Je&&di(),reload:An.reload,use:Ge.has("KeyE"),slot:An.slot,drop:An.drop,yaw:tt.yaw,pitch:tt.pitch};if(!t.alive)n.fwd=n.side=0,n.fire=n.alt=!1;return n}var wx=()=>{An.reload=!1,An.slot=null,An.drop=!1};async function Ax(){let t=St("loadbar"),e=St("loadtext"),n=async(a,o)=>{t.style.width=a+"%",e.textContent=o,await Mx()};await n(5,"Sweeping the sand off the bombsites");try{await Promise.race([document.fonts.load("600 40px Teko"),new Promise((a)=>setTimeout(a,2500))])}catch{}await n(20,"Building Dust"),Ex=uf(Ee,Te.capabilities.getMaxAnisotropy()),await n(55,"Stacking crates");let i=af(),s=of();xn={dust:new os(500,i,{drag:2.5,gravity:1.5}),blood:new os(300,i,{drag:3,gravity:6}),fire:new os(200,s,{additive:!0,drag:2.5,gravity:-2}),smoke:new os(300,i,{drag:1.2,gravity:-0.6}),debris:new os(300,s,{drag:0.6,gravity:14})};for(let a of Object.values(xn))Ee.add(a.mesh);mo=new Yc(Ee),Ks=new $c(Ee,rf()),sh=new Zc(Ee,i),wn=Zs("c4"),wn.scale.setScalar(1.6),wn.visible=!1,fo=new ge(new zn(0.018,8,6),new Bn({color:3342336})),fo.position.set(-0.05,0.045,0.02),wn.add(fo),Ee.add(wn);let r=lf();for(let a=0;a<6;a++){let o=new Ti(new oi({map:r,blending:ei,transparent:!0,depthWrite:!1,opacity:0.8}));o.visible=!1,o.userData.t=0,Ee.add(o),go.push(o)}ui=new Ti(new oi({map:r,blending:ei,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0.75})),ui.visible=!1,nr.add(ui),await n(80,"Briefing the bots"),rh(),await n(92,"Warming up shaders"),wf(0);try{Te.render(Ee,ae),await Te.compileAsync(Ee,ae)}catch{}St("loading").classList.add("hidden"),_o()}function rh(){let t=(r,a,o,c=(l)=>l)=>{St(r).querySelectorAll(".pill").forEach((h)=>{h.classList.toggle("sel",String(Yt[o])===h.dataset.v),h.onclick=()=>{Yt[o]=c(h.dataset.v),Vr(),t(r,Yt[o],o,c)}})};t("diffs",Yt.diff,"diff"),t("rounds",Yt.rounds,"rounds",Number),document.querySelectorAll(".team").forEach((r)=>{r.classList.toggle("sel",r.dataset.team===Yt.team),r.onclick=()=>{Yt.team=r.dataset.team,Vr(),rh()},r.ondblclick=()=>qr()});let e=(r,a)=>{let o=St(r);o.value=Yt.sens,St(a).textContent=(+Yt.sens).toFixed(2),o.oninput=()=>{Yt.sens=+o.value,Vr(),St("sensv").textContent=St("sensv2").textContent=Yt.sens.toFixed(2),St("sens").value=St("sens2").value=Yt.sens}};e("sens","sensv"),e("sens2","sensv2"),St("vol").value=Yt.volume,St("vol").oninput=()=>{Yt.volume=+St("vol").value,Jt.setVolume(Yt.volume),Vr()};let n=(r,a,o,c)=>{let l=St(r);l.textContent=a(),l.onclick=()=>{c(),Vr(),l.textContent=a()}};n("optVoice",()=>`Radio voice: ${Yt.voice?"ON":"OFF"}`,()=>{},()=>{Yt.voice=!Yt.voice}),n("optInvert",()=>`Invert Y: ${Yt.invert?"ON":"OFF"}`,()=>{},()=>{Yt.invert=!Yt.invert}),n("optQuality",()=>`Graphics: ${Yt.quality.toUpperCase()}`,()=>{},()=>{Yt.quality=Yt.quality==="high"?"low":"high",Te.setPixelRatio(vf()),Sf()}),St("go").onclick=()=>qr(),St("resume").onclick=()=>Rx(),St("quit").onclick=()=>{St("pause").classList.add("hidden"),_o()},St("again").onclick=()=>qr(),St("toMenu").onclick=()=>_o();let i=+localStorage.getItem("dust.wins")||0,s=+localStorage.getItem("dust.matches")||0;St("best").textContent=s?`\uD83C\uDFC6 Matches won: ${i} / ${s}`:""}function _o(){if(tt.state="menu",Je=!1,document.pointerLockElement)document.exitPointerLock();if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});for(let t of["hud","pause","over","clickToPlay"])St(t).classList.add("hidden");St("menu").classList.remove("hidden"),rh(),Tf()}function Tf(){for(let t of Yr.values())Ee.remove(t.root);Yr.clear();for(let t of js.values())Ee.remove(t);js.clear();for(let t of Qs.values())Ee.remove(t);if(Qs.clear(),sh?.clear(),Ks?.clear(),wn)wn.visible=!1;tt.game=null}async function qr(t={}){Jt.start(),Jt.setVolume(Yt.volume),Jt.voice=Yt.voice,Tf();let e=tt.game=new Oc({playerTeam:Yt.team,difficulty:Yt.diff,winRounds:Yt.rounds,...t});for(let n of e.agents){let i=new qc(n.team);i.tag=Ix(n.name,n.team),i.tag.visible=!1,i.root.add(i.tag),Ee.add(i.root),Yr.set(n.id,i)}e.start(),tt.yaw=e.player?e.player.yaw:0,tt.pitch=0,tt.state="playing",tt.msgs=[],tt.killer=null,tr=0;for(let n of["menu","pause","over"])St(n).classList.add("hidden");if(St("hud").classList.remove("hidden"),St("killfeed").innerHTML="",St("banner").style.display="none",eh=null,!t.noLock){try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen({navigationUI:"hide"});if(navigator.keyboard?.lock)await navigator.keyboard.lock(),$r=!0}catch{$r=!1}Zr(),setTimeout(()=>{if(tt.state==="playing"&&!di()&&!Je)St("clickToPlay").classList.remove("hidden")},400)}yo()}document.addEventListener("fullscreenchange",()=>{if(!document.fullscreenElement)$r=!1});function Cx(){if(tt.state!=="playing")return;tt.state="paused",De.l=De.r=!1,Ge.clear(),St("pause").classList.remove("hidden")}function Rx(){St("pause").classList.add("hidden"),tt.state="playing",th=performance.now(),tr=0,Zr()}function Ix(t,e){let n=document.createElement("canvas");n.width=256,n.height=48;let i=n.getContext("2d");i.font="600 34px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=5,i.strokeStyle="rgba(0,0,0,0.7)",i.strokeText(t,128,26),i.fillStyle=e==="T"?"#f0b54a":"#8cc0ee",i.fillText(t,128,26);let s=new Os(n);s.colorSpace=Fs;let r=new Ti(new oi({map:s,transparent:!0,depthWrite:!1,fog:!1}));return r.scale.set(1.3,0.24,1),r.position.y=2.15,r}function xo(t){let e=tt.game?.player;if(!e)return;let n=t??!Je;if(n&&!tt.game.canBuy(e)){Fi(e.alive?tt.game.buyOpen?"You must be in your spawn to buy":"Buy time is over":"");return}if(Je=n,St("buymenu").classList.toggle("hidden",!n),n)De.l=De.r=!1,ah(),document.exitPointerLock();else Zr(),setTimeout(()=>{if(tt.state==="playing"&&!di()&&!Je)St("clickToPlay").classList.remove("hidden")},150)}function ah(){let t=tt.game,e=t.player,n=St("buymenu"),i=(r)=>e.inv.primary?.id===r||e.inv.secondary?.id===r||Xs[r]&&(r==="vest"&&e.armor>=100||r==="vesthelm"&&e.armor>=100&&e.helmet||r==="kit"&&e.kit),s=Math.max(0,t.phase==="freeze"?Hr+t.phaseT:Hr-(Ys-t.roundT));n.innerHTML=`<h2>BUY MENU <span>$${e.money}</span></h2><div class="bcats">${Wd.map((r)=>`
    <div class="bcat"><h4>${r.cat}</h4>${r.items.filter((a)=>{let o=(jt[a]||Xs[a]).team;return!o||o===e.team}).map((a)=>{let o=jt[a]||Xs[a],c=o.price;if(a==="vesthelm"&&e.armor>=100&&!e.helmet)c=350;return`<button class="bitem${(e.money<c?" no":"")+(i(a)?" own":"")}" data-id="${a}">${o.name}<small>$${c}${i(a)?" · owned":""}</small></button>`}).join("")}</div>`).join("")}</div>
    <div class="bfoot">Click to buy · B / Esc to close · ${Math.ceil(s)}s of buy time left</div>`,n.querySelectorAll(".bitem").forEach((r)=>r.addEventListener("click",()=>{let a=t.buy(e,r.dataset.id);if(a)Fi(a);else St("money").classList.remove("flash"),St("money").offsetWidth;ah(),yo()}))}function Fi(t){let e=St("toast");e.textContent=t,clearTimeout(Fi.h),Fi.h=setTimeout(()=>{e.textContent=""},1800)}function _f(t,e=2.5){tt.msgs.push({html:t,t:e})}var Ni=(t)=>[t.x,t.eyeY,t.z],Fe=(t)=>tt.game.player&&t===tt.game.player.id;function Px(t){let e=Yr.get(t.id);if(e?.gun)return e.root.updateMatrixWorld(!0),e.gun.localToWorld(e.gun.userData.muzzle.clone());return new B(t.x,t.eyeY-0.2,t.z)}function yo(){let t=tt.game;if(!t)return;let e=t.player;for(let n of t.events)switch(n.type){case"shot":{let i=t.agents[n.a],s=Fe(n.a);if(Jt.gun(n.w,s?null:Ni(i)),s){if(po=1,nh=0.045,Math.random()<0.5){let r=ae.localToWorld(new B(0.18,-0.15,-0.6));mo.add(r.x,r.y,r.z,n.hx,n.hy,n.hz)}}else{let r=Px(i);mo.add(r.x,r.y,r.z,n.hx,n.hy,n.hz);let a=go.find((o)=>!o.visible)||go[0];a.position.copy(r),a.visible=!0,a.userData.t=0.05,a.scale.setScalar(0.35+Math.random()*0.2),a.material.rotation=Math.random()*6}break}case"impact":{Ks.add(n.x,n.y,n.z,n.nx,n.ny,n.nz);let i=n.kind==="crate"||n.kind==="door"||n.kind==="crate2";for(let s=0;s<4;s++)xn.dust.emit(n.x+n.nx*0.05,n.y+n.ny*0.05,n.z+n.nz*0.05,n.nx*2+(Math.random()-0.5)*1.5,n.ny*2+Math.random()*1.5,n.nz*2+(Math.random()-0.5)*1.5,0.5+Math.random()*0.4,0.12,0.6,0.6,i?0.55:0.85,i?0.4:0.72,i?0.25:0.52);break}case"hurt":{let i=t.agents[n.v];for(let s=0;s<5;s++)xn.blood.emit(i.x,i.y+(n.zone==="head"?i.height*0.9:n.zone==="legs"?0.5:1.15),i.z,n.dx*2+(Math.random()-0.5)*1.5,Math.random()*1.5,n.dz*2+(Math.random()-0.5)*1.5,0.35,0.12,0.5,0.85,0.55,0.05,0.04);if(Fe(n.a)&&n.w!=="c4"){let s=St("hitmark");s.className="",s.offsetWidth,s.className="on"+(n.zone==="head"?" head":""),Jt.hit(n.zone==="head"&&n.armored)}if(Fe(n.v)){Jt.hurt(),tt.hurtT=0.5;let s=t.agents[n.a];if(s&&s!==e){let r=Math.atan2(-(s.x-e.x),-(s.z-e.z))-tt.yaw,a=document.createElement("div");a.style.transform=`rotate(${-r}rad)`,St("dmgdir").appendChild(a),setTimeout(()=>a.remove(),1100)}tt.shake=Math.max(tt.shake,0.3)}break}case"kill":{let i=t.agents[n.k],s=t.agents[n.v],r=document.createElement("div");if(e&&(Fe(n.k)||Fe(n.v)))r.className="me";let a=jt[n.w]?.name||(n.w==="c4"?"C4":n.w);r.innerHTML=i&&i!==s?`<span class="${i.team}">${i.name}</span><span class="w">${a}${n.head?" ⌖":""}</span><span class="${s.team}">${s.name}</span>`:`<span class="w">☠</span><span class="${s.team}">${s.name}</span>`;let o=St("killfeed");o.prepend(r);while(o.children.length>6)o.lastChild.remove();if(setTimeout(()=>r.remove(),7000),Fe(n.v))tt.deathAt=performance.now(),tt.killer=i&&i!==s?{name:i.name,team:i.team,w:a,head:n.head,hp:i.hp,id:i.id}:null,De.l=!1,tt.spec=0;if(Fe(n.k)&&s.team!==e.team)_f(`<small>+$${jt[n.w]?.kill??300}</small>`,1.2);break}case"step":if(!Fe(n.a))Jt.step(Ni(t.agents[n.a]));else Jt.step(null,!0);break;case"land":Jt.land(Ni(t.agents[n.a]),Fe(n.a));break;case"reload":{let i=t.agents[n.a];Jt.reload(jt[i.weaponId()].reload,Fe(n.a),Ni(i));break}case"dry":if(Fe(n.a))Jt.dry();break;case"switch":if(Fe(n.a))Jt.switchW();break;case"zoom":if(Fe(n.a))Jt.zoom();break;case"knife":if(Jt.knife(Ni(t.agents[n.a])),Fe(n.a))er=1;break;case"throw":if(Jt.throwN(Ni(t.agents[n.a])),Fe(n.a)){if(er=1,n.kind==="he")Jt.say("Fire in the hole!")}break;case"bounce":Jt.bounce([n.x,n.y,n.z]);break;case"he":{Jt.explosion([n.x,n.y,n.z],!1);for(let i=0;i<26;i++){let s=Math.random()*6.28,r=Math.random()*7;xn.fire.emit(n.x,n.y+0.3,n.z,Math.cos(s)*r,Math.random()*6,Math.sin(s)*r,0.35,0.9,2,0.35,1,0.6,0.25)}for(let i=0;i<18;i++){let s=Math.random()*6.28,r=Math.random()*3;xn.smoke.emit(n.x,n.y+0.5,n.z,Math.cos(s)*r,1+Math.random()*2,Math.sin(s)*r,2.5,1.5,1.6,0.55,0.35,0.32,0.3)}for(let i=0;i<20;i++){let s=Math.random()*6.28,r=4+Math.random()*8;xn.debris.emit(n.x,n.y+0.3,n.z,Math.cos(s)*r,3+Math.random()*6,Math.sin(s)*r,0.9,0.06,0,0.6,0.9,0.7,0.4)}if(Ks.add(n.x,0.01,n.z,0,1,0,14),e)tt.shake=Math.max(tt.shake,ls(1.2-Math.hypot(e.x-n.x,e.z-n.z)/20,0,1));break}case"flash":{Jt.flashPop([n.x,n.y,n.z]);for(let i=0;i<6;i++)xn.fire.emit(n.x,n.y,n.z,(Math.random()-0.5)*3,Math.random()*2,(Math.random()-0.5)*3,0.25,1.4,4,0.5,1,1,1);if(e&&e.flash>0.5&&e.alive)Jt.ring(e.flash);break}case"smoke":Jt.smokePop([n.x,n.y,n.z]);break;case"plantStart":Jt.plantBeeps(Ni(t.agents[n.a]));break;case"planted":{Jt.say("Bomb has been planted."),_f(`\uD83D\uDCA3 The bomb has been planted at <b>${n.site}</b><small>${e?.team==="CT"?"Find it and hold E to defuse":"Defend the bomb!"}</small>`,3.5);break}case"beep":Jt.beep([n.x,n.y+0.2,n.z]),tt.ledT=0.12;break;case"defuseStart":Jt.defuse(Ni(t.agents[n.a]));break;case"defused":Jt.say("Bomb has been defused.");break;case"explode":{Jt.explosion([n.x,n.y,n.z],!0);for(let i=0;i<60;i++){let s=Math.random()*6.28,r=Math.random()*16;xn.fire.emit(n.x,n.y+0.5,n.z,Math.cos(s)*r,Math.random()*14,Math.sin(s)*r,0.7,3,5,0.4,1,0.55,0.2)}for(let i=0;i<50;i++){let s=Math.random()*6.28,r=Math.random()*6;xn.smoke.emit(n.x,n.y+1,n.z,Math.cos(s)*r,2+Math.random()*5,Math.sin(s)*r,5,4,3,0.6,0.3,0.27,0.25)}if(Ks.add(n.x,0.01,n.z,0,1,0,40),e)tt.shake=Math.max(tt.shake,ls(1.6-Math.hypot(e.x-n.x,e.z-n.z)/40,0.2,1.5));tt.boomT=0.6;break}case"bombDropped":if(e?.team==="T")Fi("The bomb has been dropped!");break;case"bombPickup":if(Fe(n.a))Fi("You picked up the bomb");break;case"buy":if(Fe(n.a)){Jt.buy();let i=St("money");i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash")}break;case"pickup":if(Fe(n.a))Jt.pickup(),Fi(`Picked up ${jt[n.w].name}`);break;case"roundStart":{if(Ks.clear(),tt.killer=null,tt.spec=0,St("banner").style.display="none",e)tt.yaw=e.yaw,tt.pitch=0;if(e?.inv.c4)Fi("You have the bomb — plant it at A or B");break}case"go":Jt.say(e?.team==="CT"?"Go, go, go!":"Let's move out!");break;case"roundEnd":{let i=St("banner"),s={elim:n.winner==="T"?"All Counter-Terrorists eliminated":"All Terrorists eliminated",bomb:"The bomb exploded",defuse:"The bomb has been defused",time:"Time ran out — target saved"}[n.reason];if(i.className=n.winner,i.innerHTML=`${bx[n.winner]} Win<small>${s}</small>`,i.style.display="block",Jt.roundEnd(!e||e.team===n.winner),Jt.say(n.winner==="T"?"Terrorists win.":"Counter-terrorists win."),Je)xo(!1);break}case"matchOver":setTimeout(()=>Lx(n.winner),600);break}t.events.length=0}function Lx(t){let e=tt.game;if(!e)return;if(tt.state="over",Je=!1,document.pointerLockElement)document.exitPointerLock();let n=e.player,i=!n||t===n.team;if(localStorage.setItem("dust.matches",(+localStorage.getItem("dust.matches")||0)+1),i)localStorage.setItem("dust.wins",(+localStorage.getItem("dust.wins")||0)+1);let s=[...e.agents].sort((r,a)=>a.kills-r.kills||r.deaths-a.deaths)[0];St("overTitle").textContent=i?"VICTORY":"DEFEAT",St("overTitle").style.color=i?"#7fd47f":"#e0533d",St("overScore").innerHTML=`<span style="color:var(--t)">${e.score.T}</span> : <span style="color:var(--ct)">${e.score.CT}</span>`,St("overStats").innerHTML=(n?`You: <b>${n.kills}</b> kills · <b>${n.deaths}</b> deaths · <b>${n.kills?Math.round(n.hs/n.kills*100):0}%</b> headshots<br>`:"")+`MVP: <b>${s.name}</b> (${s.kills} kills)`,St("hud").classList.add("hidden"),St("over").classList.remove("hidden")}function Ef(t){let e=tt.game,n=e.agents.filter((s)=>s.alive&&s.team===e.player.team),i=n.length?n:e.agents.filter((s)=>s.alive);if(!i.length)return;tt.spec=((tt.spec+t)%i.length+i.length)%i.length}var eh=null,Di=null,po=0,ui=null,nh=0,er=0,Qc=0,Js={x:0,y:0},Nx={rifle:[0.19,-0.22,-0.47],pistol:[0.16,-0.19,-0.44],knife:[0.17,-0.19,-0.36],nade:[0.17,-0.17,-0.34],c4:[0.05,-0.24,-0.38]},Dx=(t)=>t==="knife"?"knife":t==="c4"?"c4":jt[t].nade?"nade":jt[t].slot==="secondary"?"pistol":"rifle";function Ux(t,e){let n=t.weaponId(),i=t.team+n;if(eh!==i)Ui.clear(),nr.add(ui),Di=Zs(n),Di.add(mf(t.team,n)),Di.traverse((g)=>{g.castShadow=!1}),Di.scale.setScalar(0.85),Ui.add(Di),eh=i;let s=Dx(n),r=Nx[s],a=jt[n],o=Math.min(1,t.moveSpeed/6.4)*(t.onGround?1:0.2);Qc+=e*(5+o*6),Js.x+=(ls(-De.dx*0.0006,-0.05,0.05)-Js.x)*Math.min(1,e*10),Js.y+=(ls(De.dy*0.0006,-0.05,0.05)-Js.y)*Math.min(1,e*10),De.dx=0,De.dy=0,po*=Math.exp(-e*16),er=Math.max(0,er-e*3);let c=r[0]+Math.sin(Qc)*0.012*o+Js.x,l=r[1]-Math.abs(Math.cos(Qc))*0.012*o-Js.y,h=r[2]+po*(s==="rifle"?0.05:0.035),d=po*(s==="pistol"?0.22:0.07),u=0,f=0;if(t.switchT>0){let g=ls(t.switchT/0.55,0,1);l-=0.25*g,d-=0.7*g}if(t.reloadT>0&&a.reload){let g=1-t.reloadT/a.reload,T=Math.sin(g*Math.PI);l-=0.1*T,d+=0.45*T,f+=0.35*T}if(s==="knife"){let g=Math.sin(er*Math.PI);u+=g*0.9,d-=g*0.4,c-=g*0.08,h-=g*0.08}if(s==="nade"){if(t.nadeHeld)h+=0.08,l+=0.04,d+=0.3;let g=Math.sin(er*Math.PI);d-=g*1.2,h-=g*0.15}if(t.plantT>0)l-=0.08,d+=0.6;if(Ui.position.set(c,l,h),Ui.rotation.set(d,u,f),Ui.visible=t.alive&&!t.scope&&t.defuseT<=0,nh>0&&s!=="knife"&&Di)nh-=e,Ui.updateMatrixWorld(!0),ui.position.copy(Di.localToWorld(Di.userData.muzzle.clone())),ui.scale.setScalar(0.09+Math.random()*0.05),ui.material.rotation=Math.random()*6,ui.visible=Ui.visible&&!(n==="usp"||n==="m4a1"||n==="mp5");else ui.visible=!1}var ih=null,Oe=220/Wn;function Fx(){let t=document.createElement("canvas");t.width=220,t.height=Math.ceil(Xn*Oe);let e=t.getContext("2d");for(let n=0;n<dn;n++)for(let i=0;i<He;i++){let s=Gs[n][i];e.fillStyle=s==="#"?"rgba(0,0,0,0)":s==="A"||s==="B"?"rgba(200,120,90,0.55)":s==="T"?"rgba(220,170,90,0.4)":s==="C"?"rgba(110,160,220,0.4)":"rgba(210,190,150,0.42)",e.fillRect(i*Ze*Oe,n*Ze*Oe,Ze*Oe+0.5,Ze*Oe+0.5)}e.font="600 20px Teko, sans-serif",e.fillStyle="rgba(255,230,200,0.9)",e.textAlign="center",e.fillText("A",124*Oe,26*Oe),e.fillText("B",18*Oe,26*Oe),ih=t}function Ox(t,e){if(!ih)Fx();let n=tt.game,i=St("radar"),s=i.getContext("2d");s.clearRect(0,0,i.width,i.height),s.drawImage(ih,0,0);let r=t?t.team:"CT";for(let o of n.smokes)s.fillStyle="rgba(200,200,200,0.5)",s.beginPath(),s.arc(o.x*Oe,o.z*Oe,n.smokeRadius(o)*Oe,0,7),s.fill();let a=n.bomb;if(a&&(r==="T"||a.state==="planted"||a.state==="dropped"&&n.time-(a.seen||-9)<2)){if(a.state!=="carried"||r==="T")s.fillStyle=a.state==="planted"?Math.floor(n.time*4)%2?"#ff4030":"#ffd040":"#ff9a30",s.fillRect(a.x*Oe-3,a.z*Oe-3,6,6)}for(let o of n.agents){if(o===e)continue;let c=o.team===r;if(!c&&!(o.alive&&n.time-o.spotted[r]<1))continue;if(s.fillStyle=!o.alive?"rgba(255,255,255,0.25)":c?r==="T"?"#f0b54a":"#8cc0ee":"#ff4a3a",!o.alive&&!c)continue;s.beginPath(),s.arc(o.x*Oe,o.z*Oe,o.alive?3:2.2,0,7),s.fill()}if(e)s.save(),s.translate(e.x*Oe,e.z*Oe),s.rotate(-(e===t?tt.yaw:e.yaw)),s.fillStyle="#fff",s.beginPath(),s.moveTo(0,-6),s.lineTo(4,4),s.lineTo(0,2),s.lineTo(-4,4),s.closePath(),s.fill(),s.restore()}var Oi={},on=(t,e)=>{if(Oi[t]!==e)Oi[t]=e,St(t).textContent=e},Wr=(t,e)=>{if(Oi[t]!==e)Oi[t]=e,St(t).innerHTML=e};function Bx(t){let e=tt.game,n=e.player,i=oh(),s=n&&n.alive?n:i||n,r=St("timer");if(e.phase==="freeze")on("timer",Kc(e.phaseT)),r.className="";else if(e.phase==="planted")on("timer","\uD83D\uDCA3"),r.className="bomb";else if(e.phase==="live")on("timer",Kc(e.roundT)),r.className=e.roundT<10?"bomb":"";else on("timer",e.phase==="end"?Kc(0):"");on("scT",String(e.score.T)),on("scCT",String(e.score.CT));let a=(A)=>e.agents.filter((v)=>v.team===A).map((v)=>`<i class="${v.alive?"":"dead"}"></i>`).join("");if(Wr("aliveT",a("T")),Wr("aliveCT",a("CT")),!s)return;on("hpv",String(Math.max(0,s.hp))),on("arv",String(s.armor)+(s.helmet?"H":"")),St("hpv").classList.toggle("low",s.hp>0&&s.hp<=25),on("kit",s.kit?"✂ KIT":""),on("money","$"+(n?n.money:0));let o=s.weaponId(),c=jt[o],l=s.gun();if(on("wname",c.name.toUpperCase()),l)on("mag",String(l.mag)),on("res","/ "+l.reserve),St("ammo").classList.toggle("empty",l.mag===0),St("ammo").style.display="";else St("ammo").style.display="none";let h=[];if(s.inv.primary)h.push(["primary","1 "+jt[s.inv.primary.id].name]);if(s.inv.secondary)h.push(["secondary","2 "+jt[s.inv.secondary.id].name]);if(h.push(["knife","3 Knife"]),s.inv.nades.length)h.push(["nade","4 "+s.inv.nades.map((A)=>jt[A].name.split(" ")[0]).join(" · ")]);if(s.inv.c4)h.push(["c4","5 C4"]);Wr("slots",h.map(([A,v])=>`<div class="${A===s.cur?"cur":""}">${v}</div>`).join("")),St("bombIcon").classList.toggle("hidden",!s.inv.c4);let d=St("cross"),u=n&&n.alive&&!n.scope&&!jt[n.weaponId()].scope;if(d.style.display=u?"":"none",u){let A=e.inaccuracy(n),M=3+ls(Math.tan(A)/Math.tan(ae.fov*Math.PI/360)*innerHeight*0.5,0,120);d.children[0].style.top=`${-M-9}px`,d.children[1].style.top=`${M}px`,d.children[2].style.left=`${-M-9}px`,d.children[3].style.left=`${M}px`}St("scope").style.display=n&&n.alive&&n.scope?"block":"none";let f=s.flash>0?Math.min(1,s.flash/Math.max(0.01,s.flashMax*0.55)):0;St("flash").style.opacity=String(Math.max(f,tt.boomT>0?tt.boomT*0.6:0)),tt.hurtT=Math.max(0,(tt.hurtT||0)-t),St("hurt").style.opacity=String(Math.min(1,tt.hurtT*2.2)),tt.boomT=Math.max(0,(tt.boomT||0)-t);let g=St("progress");if(n&&n.plantT>0)g.style.display="block",g.querySelector("span").textContent="PLANTING THE BOMB…",g.querySelector("i").style.width=n.plantT/Fc*100+"%";else if(n&&n.defuseT>0)g.style.display="block",g.querySelector("span").textContent=n.kit?"DEFUSING (KIT)…":"DEFUSING…",g.querySelector("i").style.width=n.defuseT/(n.kit?5:10)*100+"%";else g.style.display="none";let T="";if(n&&n.alive){let A=e.bomb;if(n.team==="CT"&&A.state==="planted"&&Math.hypot(n.x-A.x,n.z-A.z)<1.6&&n.defuseT<=0)T=`Hold E to defuse${n.kit?"":" (no kit: 10 s)"}`;else if(n.inv.c4&&Ai(n.x,n.z)&&e.phase==="live"&&n.plantT<=0)T="Hold E to plant the bomb";else if(e.canBuy(n)&&!Je)T=e.phase==="freeze"?"Press B to buy":`Press B to buy · ${Math.ceil(Hr-(Ys-e.roundT))}s`;else{let v=e.drops.find((M)=>Math.hypot(n.x-M.x,n.z-M.z)<1.8);if(v)T=`Press E to pick up ${jt[v.id].name}`}}on("hint",T);let m="";if(n&&!n.alive&&e.phase!=="over"){if((performance.now()-tt.deathAt)/1000<2.5&&tt.killer)m=`Killed by <b style="color:var(--${tt.killer.team.toLowerCase()})">${tt.killer.name}</b> · ${tt.killer.w}${tt.killer.head?" · headshot":""}<small>${tt.killer.hp>0?`they have ${tt.killer.hp} HP left`:""}</small>`;else if(i&&i!==n)m=`Spectating <b style="color:var(--${i.team.toLowerCase()})">${i.name}</b><small>Click / Space to switch</small>`}Wr("spec",m);let p="";if(e.phase==="freeze"&&n)p=`<small>Round ${e.round} · buy time</small>${Math.ceil(e.phaseT)}`;if(tt.msgs=tt.msgs.filter((A)=>(A.t-=t)>0),tt.msgs.length)p=tt.msgs[tt.msgs.length-1].html;if(Wr("center",p),Je){if(!e.canBuy(n))xo(!1);else if(Math.floor(e.time*2)!==Oi.buyTick)Oi.buyTick=Math.floor(e.time*2),ah()}let C=Ge.has("Tab")||e.phase==="end"&&!1;if(St("scores").classList.toggle("hidden",!C),C&&Math.floor(e.time*4)!==Oi.scTick){Oi.scTick=Math.floor(e.time*4);let A=(v)=>e.agents.filter((M)=>M.team===v).sort((M,E)=>E.kills-M.kills).map((M)=>`<tr class="${v}${M.alive?"":" dead"}${M===n?" me":""}"><td>${M.name}${M.inv.c4&&(!n||n.team==="T")?" \uD83D\uDCA3":""}</td><td>${M.kills}</td><td>${M.deaths}</td><td>${M.kills?Math.round(M.hs/M.kills*100):0}%</td><td>${!n||M.team===n.team?"$"+M.money:""}</td><td>${M.alive?"":"DEAD"}</td></tr>`).join("");St("scores").innerHTML=`<h2>SCOREBOARD <span style="font-size:22px;color:#fffa">Round ${e.round} · first to ${e.opts.winRounds}</span></h2><table><tr><th>Player</th><th>K</th><th>D</th><th>HS</th><th>Money</th><th></th></tr>
      <tr class="hdr"><td colspan="6" style="color:var(--ct)">Counter-Terrorists · ${e.score.CT}</td></tr>${A("CT")}
      <tr class="hdr"><td colspan="6" style="color:var(--t)">Terrorists · ${e.score.T}</td></tr>${A("T")}</table>`}Ox(n,s)}function oh(){let t=tt.game,e=t.player;if(e&&e.alive)return e;if(e&&(performance.now()-tt.deathAt)/1000<2.5)return null;let n=t.agents.filter((s)=>s.alive&&(!e||s.team===e.team)),i=n.length?n:t.agents.filter((s)=>s.alive);return i.length?i[tt.spec%i.length]:null}function zx(t){let e=tt.game,n=e.player,i=oh();for(let r of e.agents){let a=Yr.get(r.id);a.update(r,t);let o=r===n&&n.alive;if(a.root.visible=!o,a.gun)a.gun.visible=r.alive;a.tag.visible=!!n&&r.alive&&r.team===n.team&&r!==n&&r!==i}for(let r of e.drops)if(!js.has(r)){let a=Zs(r.id);a.position.set(r.x,r.y+0.05,r.z),a.rotation.set(0,r.yaw,Math.PI/2),Ee.add(a),js.set(r,a)}for(let[r,a]of js)if(!e.drops.includes(r))Ee.remove(a),js.delete(r);for(let r of e.grenades){let a=Qs.get(r);if(!a)a=Zs(r.kind),a.scale.setScalar(1.3),Ee.add(a),Qs.set(r,a);if(a.position.set(r.x,r.y,r.z),!r.rest)a.rotation.x+=t*12,a.rotation.z+=t*7}for(let[r,a]of Qs)if(!e.grenades.includes(r))Ee.remove(a),Qs.delete(r);let s=e.bomb;if(wn.visible=!!s&&(s.state==="dropped"||s.state==="planted"),wn.visible){if(wn.position.set(s.x,s.y+0.06,s.z),wn.rotation.y=0.6,tt.ledT=Math.max(0,(tt.ledT||0)-t),fo.material.color.setHex(s.state==="planted"&&tt.ledT>0?16719888:3342336),n&&n.team==="T"||s.state==="planted")s.seen=e.time;if(n&&s.state==="dropped"&&Math.hypot(n.x-s.x,n.z-s.z)<40)s.seen=e.time}sh.sync(e,t);for(let r of Object.values(xn))r.update(t);mo.update(t);for(let r of go)if(r.visible&&(r.userData.t-=t)<=0)r.visible=!1}var xf=new B;function kx(t){let e=tt.game,n=e.player;tt.shake=Math.max(0,tt.shake-t*1.8);let i=tt.shake*tt.shake*0.04,s=()=>(Math.random()-0.5)*i,r=74;if(n&&n.alive){if(ae.position.set(n.x,n.eyeY,n.z),ae.rotation.set(tt.pitch+n.punchP+s(),tt.yaw+n.punchY+s(),0),n.scope===1)r=40;else if(n.scope===2)r=15}else{let a=oh();if(!a&&n){let o=tt.killer?e.agents[tt.killer.id]:null;if(ae.position.set(n.x,n.y+2.2,n.z),o)ae.lookAt(o.x,o.eyeY,o.z);else ae.rotation.set(-0.6,n.yaw,0)}else if(a){let[o,c,l]=[-Math.sin(a.yaw)*Math.cos(a.pitch),Math.sin(a.pitch),-Math.cos(a.yaw)*Math.cos(a.pitch)],h=2.6,d=Ws(a.x,a.eyeY+0.3,a.z,-o,-c,-l,h);if(d)h=Math.max(0.3,d.t-0.25);xf.set(a.x-o*h,a.eyeY+0.3-c*h,a.z-l*h),ae.position.lerp(xf,1-Math.exp(-t*14)),ae.rotation.set(a.pitch,a.yaw,0)}}if(Math.abs(ae.fov-r)>0.01)ae.fov=r,ae.updateProjectionMatrix();Jt.listener(ae.position.x,ae.position.y,ae.position.z,ae.rotation.y)}function wf(t){let e=t*0.04;if(ae.position.set(Wn/2+Math.cos(e)*30,34,Xn/2+Math.sin(e)*24),ae.lookAt(Wn/2+Math.cos(e+1.2)*40,2,Xn/2+Math.sin(e+1.2)*30),ae.fov!==60)ae.fov=60,ae.updateProjectionMatrix()}function Af(t){let e=Math.min(0.05,(t-th)/1000);if(th=t,tt.state==="playing"&&tt.game&&!tt.freeze){tr+=e;let n=0;while(tr>=Xr&&n<10)tt.game.update(Xr,bf()),wx(),tr-=Xr,n++;if(n===10)tr=0;yo()}Cf(e),requestAnimationFrame(Af)}function Cf(t){if(Te.clear(),tt.game&&(tt.state==="playing"||tt.state==="paused"||tt.state==="over")){if(zx(tt.state==="playing"?t:0),kx(t),tt.state!=="over")Bx(t);Te.render(Ee,ae);let e=tt.game.player;if(e&&e.alive)Ux(e,t),jc.aspect=ae.aspect,jc.updateProjectionMatrix(),Te.clearDepth(),Te.render(nr,jc)}else{tt.menuT+=t,wf(tt.menuT);for(let e of Object.values(xn||{}))e.update(t);Te.render(Ee,ae)}}function Hx(){Te.setSize(innerWidth,innerHeight),ae.aspect=innerWidth/innerHeight,ae.updateProjectionMatrix()}addEventListener("resize",Hx);window.__game={G:tt,settings:Yt,camera:ae,startMatch:qr,enterMenu:_o,get game(){return tt.game},advance(t,e={}){let n=tt.game;for(let i=0;i<t;i+=Xr){if(n.update(Xr,{...bf(),...e,yaw:e.yaw??tt.yaw,pitch:e.pitch??tt.pitch}),e.yaw!==void 0)tt.yaw=e.yaw;if(e.pitch!==void 0)tt.pitch=e.pitch}yo(),Cf(0.016)}};Ax();requestAnimationFrame(Af);
