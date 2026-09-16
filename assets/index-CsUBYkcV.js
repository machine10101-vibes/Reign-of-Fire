(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="170",uh=0,ko=1,dh=2,dc=1,fc=2,Pn=3,Yn=0,Ve=1,He=2,yn=0,fi=1,Xi=2,Ho=3,Vo=4,fh=5,hi=100,ph=101,mh=102,gh=103,_h=104,vh=200,xh=201,Mh=202,yh=203,ma=204,ga=205,Sh=206,wh=207,bh=208,Eh=209,Th=210,Ah=211,Rh=212,Ch=213,Ph=214,_a=0,va=1,xa=2,qi=3,Ma=4,ya=5,Sa=6,wa=7,pc=0,Lh=1,Ih=2,Xn=0,mc=1,gc=2,_c=3,oo=4,Dh=5,vc=6,xc=7,Mc=300,Yi=301,$i=302,Mr=303,ba=304,Tr=306,yr=1e3,Wn=1001,Ea=1002,Ge=1003,Uh=1004,Us=1005,vn=1006,Dr=1007,di=1008,Un=1009,yc=1010,Sc=1011,bs=1012,lo=1013,pi=1014,xn=1015,pn=1016,co=1017,ho=1018,Ki=1020,wc=35902,bc=1021,Ec=1022,fn=1023,Tc=1024,Ac=1025,Gi=1026,Zi=1027,uo=1028,fo=1029,Rc=1030,po=1031,mo=1033,ur=33776,dr=33777,fr=33778,pr=33779,Ta=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,La=37492,Ia=37496,Da=37808,Ua=37809,Na=37810,Fa=37811,Oa=37812,za=37813,Ba=37814,ka=37815,Ha=37816,Va=37817,Ga=37818,Wa=37819,Xa=37820,qa=37821,mr=36492,Ya=36494,$a=36495,Cc=36283,Ka=36284,Za=36285,ja=36286,Nh=3200,Fh=3201,Pc=0,Oh=1,Ln="",ke="srgb",ts="srgb-linear",Ar="linear",ce="srgb",yi=7680,Go=519,zh=512,Bh=513,kh=514,Lc=515,Hh=516,Vh=517,Gh=518,Wh=519,Wo=35044,Xo="300 es",In=2e3,Sr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const vs=Math.PI/180,Es=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function go(s,t){return(s%t+t)%t}function Xh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qh(s,t,e){return s!==t?(e-s)/(t-s):0}function xs(s,t,e){return(1-e)*s+e*t}function Yh(s,t,e,n){return xs(s,t,1-Math.exp(-e*n))}function $h(s,t=1){return t-Math.abs(go(s,t*2)-t)}function Kh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Jh(s,t){return s+Math.random()*(t-s)}function Qh(s){return s*(.5-Math.random())}function tu(s){s!==void 0&&(qo=s);let t=qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eu(s){return s*vs}function nu(s){return s*Es}function iu(s){return(s&s-1)===0&&s!==0}function su(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ru(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function au(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lt={DEG2RAD:vs,RAD2DEG:Es,generateUUID:_i,clamp:Ae,euclideanModulo:go,mapLinear:Xh,inverseLerp:qh,lerp:xs,damp:Yh,pingpong:$h,smoothstep:Kh,smootherstep:Zh,randInt:jh,randFloat:Jh,randFloatSpread:Qh,seededRandom:tu,degToRad:eu,radToDeg:nu,isPowerOfTwo:iu,ceilPowerOfTwo:su,floorPowerOfTwo:ru,setQuaternionFromProperEuler:au,normalize:Fe,denormalize:zi};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,r,a,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],v=i[7],P=i[2],A=i[5],R=i[8];return r[0]=a*_+o*M+l*P,r[3]=a*m+o*x+l*A,r[6]=a*p+o*v+l*R,r[1]=c*_+h*M+u*P,r[4]=c*m+h*x+u*A,r[7]=c*p+h*v+u*R,r[2]=d*_+f*M+g*P,r[5]=d*m+f*x+g*A,r[8]=d*p+f*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Gt;function Ic(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ou(){const s=Ts("canvas");return s.style.display="block",s}const Yo={};function gs(s){s in Yo||(Yo[s]=!0,console.warn(s))}function lu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $o=[.64,.33,.3,.6,.15,.06],Ko=[.2126,.7152,.0722],Zo=[.3127,.329],jo=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[ts]:{primaries:$o,whitePoint:Zo,transfer:Ar,toXYZ:jo,fromXYZ:Jo,luminanceCoefficients:Ko,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:$o,whitePoint:Zo,transfer:ce,toXYZ:jo,fromXYZ:Jo,luminanceCoefficients:Ko,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let Si;class uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Ts("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let du=0;class Dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Nr(i[a].image)):r.push(Nr(i[a]))}else r=Nr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;class Ce extends es{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Wn,i=Wn,r=vn,a=di,o=fn,l=Un,c=Ce.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=_i(),this.name="",this.source=new Dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Mc;Ce.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,P=(p+1)/2,A=(h+d)/4,R=(u+_)/4,I=(g+m)/4;return x>v&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=R/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=I/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=I/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Je extends pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,p*M);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const v=o*M;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new T,Qo=new $n;class vi{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Fs.subVectors(this.max,os),wi.subVectors(t.a,os),bi.subVectors(t.b,os),Ei.subVectors(t.c,os),On.subVectors(bi,wi),zn.subVectors(Ei,bi),jn.subVectors(wi,Ei);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-jn.z,jn.y,On.z,0,-On.x,zn.z,0,-zn.x,jn.z,0,-jn.x,-On.y,On.x,0,-zn.y,zn.x,0,-jn.y,jn.x,0];return!Or(e,wi,bi,Ei,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,wi,bi,Ei,Fs))?!1:(Os.crossVectors(On,zn),e=[Os.x,Os.y,Os.z],Or(e,wi,bi,Ei,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new T,new T,new T,new T,new T,new T,new T,new T],cn=new T,Ns=new vi,wi=new T,bi=new T,Ei=new T,On=new T,zn=new T,jn=new T,os=new T,Fs=new T,Os=new T,Jn=new T;function Or(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Jn.fromArray(s,r);const o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gu=new vi,ls=new T,zr=new T;class xi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(zr)),this.expandByPoint(ls.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new T,Br=new T,zs=new T,Bn=new T,kr=new T,Bs=new T,Hr=new T;class _o{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Br.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=Bn.dot(this.direction),l=-Bn.dot(zs),c=Bn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Br).addScaledVector(zs,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){kr.subVectors(e,t),Bs.subVectors(n,t),Hr.crossVectors(kr,Bs);let a=this.direction.dot(Hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const l=o*this.direction.dot(Bs.crossVectors(Bn,Bs));if(l<0)return null;const c=o*this.direction.dot(kr.cross(Bn));if(c<0||l+c>a)return null;const h=-o*Bn.dot(Hr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_u,t,vu)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),kn.crossVectors(n,Ke),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),kn.crossVectors(n,Ke)),kn.normalize(),ks.crossVectors(Ke,kn),i[0]=kn.x,i[4]=ks.x,i[8]=Ke.x,i[1]=kn.y,i[5]=ks.y,i[9]=Ke.y,i[2]=kn.z,i[6]=ks.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],P=n[15],A=i[0],R=i[4],I=i[8],b=i[12],S=i[1],L=i[5],z=i[9],F=i[13],V=i[2],X=i[6],G=i[10],K=i[14],H=i[3],ot=i[7],gt=i[11],St=i[15];return r[0]=a*A+o*S+l*V+c*H,r[4]=a*R+o*L+l*X+c*ot,r[8]=a*I+o*z+l*G+c*gt,r[12]=a*b+o*F+l*K+c*St,r[1]=h*A+u*S+d*V+f*H,r[5]=h*R+u*L+d*X+f*ot,r[9]=h*I+u*z+d*G+f*gt,r[13]=h*b+u*F+d*K+f*St,r[2]=g*A+_*S+m*V+p*H,r[6]=g*R+_*L+m*X+p*ot,r[10]=g*I+_*z+m*G+p*gt,r[14]=g*b+_*F+m*K+p*St,r[3]=M*A+x*S+v*V+P*H,r[7]=M*R+x*L+v*X+P*ot,r[11]=M*I+x*z+v*G+P*gt,r[15]=M*b+x*F+v*K+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=e*M+n*x+i*v+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=M*R,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,t[4]=x*R,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*R,t[8]=v*R,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=P*R,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=l*c,x=l*h,v=l*u,P=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+v)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(m-M)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ti.set(i[0],i[1],i[2]).length();const a=Ti.set(i[4],i[5],i[6]).length(),o=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],hn.copy(this);const c=1/r,h=1/a,u=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=In){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===In)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=In){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===In)g=(a+r)*u,_=-2*u;else if(o===Sr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new T,hn=new se,_u=new T(0,0,0),vu=new T(1,1,1),kn=new T,ks=new T,Ke=new T,tl=new se,el=new $n;class Qe{constructor(t=0,e=0,n=0,i=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return el.setFromEuler(this),this.setFromQuaternion(el,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xu=0;const nl=new T,Ai=new $n,An=new se,Hs=new T,cs=new T,Mu=new T,yu=new $n,il=new T(1,0,0),sl=new T(0,1,0),rl=new T(0,0,1),al={type:"added"},Su={type:"removed"},Ri={type:"childadded",child:null},Vr={type:"childremoved",child:null};class we extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new T,e=new Qe,n=new $n,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Gt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(il,t)}rotateY(t){return this.rotateOnAxis(sl,t)}rotateZ(t){return this.rotateOnAxis(rl,t)}translateOnAxis(t,e){return nl.copy(t).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(il,t)}translateY(t){return this.translateOnAxis(sl,t)}translateZ(t){return this.translateOnAxis(rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(cs,Hs,this.up):An.lookAt(Hs,cs,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(An),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(al),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(al),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new T(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new T,Rn=new T,Gr=new T,Cn=new T,Ci=new T,Pi=new T,ol=new T,Wr=new T,Xr=new T,qr=new T,Yr=new he,$r=new he,Kr=new he;class dn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){un.subVectors(i,e),Rn.subVectors(n,e),Gr.subVectors(t,e);const a=un.dot(un),o=un.dot(Rn),l=un.dot(Gr),c=Rn.dot(Rn),h=Rn.dot(Gr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yr.setScalar(0),$r.setScalar(0),Kr.setScalar(0),Yr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yr,r.x),a.addScaledVector($r,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Rn.subVectors(t,e),un.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ci.subVectors(i,n),Pi.subVectors(r,n),Wr.subVectors(t,n);const l=Ci.dot(Wr),c=Pi.dot(Wr);if(l<=0&&c<=0)return e.copy(n);Xr.subVectors(t,i);const h=Ci.dot(Xr),u=Pi.dot(Xr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);qr.subVectors(t,r);const f=Ci.dot(qr),g=Pi.dot(qr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ol.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ol,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Zr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=go(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zr(a,r,t+1/3),this.g=Zr(a,r,t),this.b=Zr(a,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ee.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ae(Ie.r*255,0,255))*65536+Math.round(Ae(Ie.g*255,0,255))*256+Math.round(Ae(Ie.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ke){ee.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Vs);const n=xs(Hn.h,Vs.h,e),i=xs(Hn.s,Vs.s,e),r=xs(Hn.l,Vs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Pt;Pt.NAMES=Nc;let wu=0;class ns extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=_i(),this.name="",this.blending=fi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class an extends ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new T,Gs=new Q;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}}class Fc extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oc extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bu=0;const en=new se,jr=new we,Li=new T,Ze=new vi,hs=new vi,Te=new T;class xe extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Oc:Fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ze.min,hs.min),Ze.expandByPoint(Te),Te.addVectors(Ze.max,hs.max),Ze.expandByPoint(Te)):(Ze.expandByPoint(hs.min),Ze.expandByPoint(hs.max))}Ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),Te.add(Li)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new T,l[I]=new T;const c=new T,h=new T,u=new T,d=new Q,f=new Q,g=new Q,_=new T,m=new T;function p(I,b,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[I].add(_),o[b].add(_),o[S].add(_),l[I].add(m),l[b].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,b=M.length;I<b;++I){const S=M[I],L=S.start,z=S.count;for(let F=L,V=L+z;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new T,v=new T,P=new T,A=new T;function R(I){P.fromBufferAttribute(i,I),A.copy(P);const b=o[I];x.copy(b),x.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(A,b);const L=v.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,L)}for(let I=0,b=M.length;I<b;++I){const S=M[I],L=S.start,z=S.count;for(let F=L,V=L+z;F<V;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new se,Qn=new _o,Ws=new xi,cl=new T,Xs=new T,qs=new T,Ys=new T,Jr=new T,$s=new T,hl=new T,Ks=new T;class ht extends we{constructor(t=new xe,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Jr.fromBufferAttribute(u,t),a?$s.addScaledVector(Jr,h):$s.addScaledVector(Jr.sub(e),h))}e.add($s)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Ws.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ws,cl)===null||Qn.origin.distanceToSquared(cl)>(t.far-t.near)**2))&&(ll.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(ll),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,P=x;v<P;v+=3){const A=o.getX(v),R=o.getX(v+1),I=o.getX(v+2);i=Zs(this,p,t,n,c,h,u,A,R,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Zs(this,a,t,n,c,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,P=x;v<P;v+=3){const A=v,R=v+1,I=v+2;i=Zs(this,p,t,n,c,h,u,A,R,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;i=Zs(this,a,t,n,c,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Eu(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Yn,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:s}}function Zs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Xs),s.getVertexPosition(l,qs),s.getVertexPosition(c,Ys);const h=Eu(s,t,e,n,Xs,qs,Ys,hl);if(h){const u=new T;dn.getBarycoord(hl,Xs,qs,Ys,u),i&&(h.uv=dn.getInterpolatedAttribute(i,o,l,c,u,new Q)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};dn.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class Be extends xe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(_,m,p,M,x,v,P,A,R,I,b){const S=v/R,L=P/I,z=v/2,F=P/2,V=A/2,X=R+1,G=I+1;let K=0,H=0;const ot=new T;for(let gt=0;gt<G;gt++){const St=gt*L-F;for(let kt=0;kt<X;kt++){const re=kt*S-z;ot[_]=re*M,ot[m]=St*x,ot[p]=V,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(kt/R),u.push(1-gt/I),K+=1}}for(let gt=0;gt<I;gt++)for(let St=0;St<R;St++){const kt=d+St+X*gt,re=d+St+X*(gt+1),$=d+(St+1)+X*(gt+1),it=d+(St+1)+X*gt;l.push(kt,re,it),l.push(re,$,it),H+=6}o.addGroup(f,H,b),f+=H,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=ji(s[e]);for(const i in n)t[i]=n[i]}return t}function Tu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const mi={clone:ji,merge:Oe};var Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new T,ul=new Q,dl=new Q;class qe extends Bc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,ul,dl),e.subVectors(dl,ul)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Di=1;class Cu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qe(Ii,Di,t,e);i.layers=this.layers,this.add(i);const r=new qe(Ii,Di,t,e);r.layers=this.layers,this.add(r);const a=new qe(Ii,Di,t,e);a.layers=this.layers,this.add(a);const o=new qe(Ii,Di,t,e);o.layers=this.layers,this.add(o);const l=new qe(Ii,Di,t,e);l.layers=this.layers,this.add(l);const c=new qe(Ii,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kc extends Ce{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pu extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new kc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Be(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:yn});r.uniforms.tEquirect.value=e;const a=new ht(i,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=vn),new Cu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Qr=new T,Lu=new T,Iu=new Gt;class li{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qr.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Iu.getNormalMatrix(t),i=this.coplanarPoint(Qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new xi,js=new T;class xo{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+M).normalize(),n[3].setComponents(l-a,d-h,m-g,v-M).normalize(),n[4].setComponents(l-o,d-u,m-_,v-x).normalize(),e===In)n[5].setComponents(l+o,d+u,m+_,v+x).normalize();else if(e===Sr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Du(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class is extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,v=M+c*(p+1),P=M+1+c*(p+1),A=M+1+c*p;f.push(x,v,A),f.push(v,P,A)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,id=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,Hf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vf=`#define DISTANCE
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
}`,Gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Jf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,tp=`#define NORMAL
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
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,np=`#define PHONG
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
}`,ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,sp=`#define STANDARD
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
}`,rp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ap=`#define TOON
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
}`,op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lp=`uniform float size;
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dp=`uniform float rotation;
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
}`,fp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Uu,alphahash_pars_fragment:Nu,alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:zu,alphatest_pars_fragment:Bu,aomap_fragment:ku,aomap_pars_fragment:Hu,batching_pars_vertex:Vu,batching_vertex:Gu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:Yu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:rd,displacementmap_pars_vertex:ad,displacementmap_vertex:od,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:dd,envmap_common_pars_fragment:fd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Td,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:vd,fog_fragment:xd,fog_pars_fragment:Md,gradientmap_pars_fragment:yd,lightmap_pars_fragment:Sd,lights_lambert_fragment:wd,lights_lambert_pars_fragment:bd,lights_pars_begin:Ed,lights_toon_fragment:Ad,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Bd,map_fragment:kd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:$d,morphtarget_pars_vertex:Kd,morphtarget_vertex:Zd,normal_fragment_begin:jd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:tf,normal_vertex:ef,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:rf,clearcoat_pars_fragment:af,iridescence_pars_fragment:of,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:hf,project_vertex:uf,dithering_fragment:df,dithering_pars_fragment:ff,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:_f,shadowmap_vertex:vf,shadowmask_pars_fragment:xf,skinbase_vertex:Mf,skinning_pars_vertex:yf,skinning_vertex:Sf,skinnormal_vertex:wf,specularmap_fragment:bf,specularmap_pars_fragment:Ef,tonemapping_fragment:Tf,tonemapping_pars_fragment:Af,transmission_fragment:Rf,transmission_pars_fragment:Cf,uv_pars_fragment:Pf,uv_pars_vertex:Lf,uv_vertex:If,worldpos_vertex:Df,background_vert:Uf,background_frag:Nf,backgroundCube_vert:Ff,backgroundCube_frag:Of,cube_vert:zf,cube_frag:Bf,depth_vert:kf,depth_frag:Hf,distanceRGBA_vert:Vf,distanceRGBA_frag:Gf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:Yf,meshbasic_vert:$f,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:jf,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:tp,meshnormal_frag:ep,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:sp,meshphysical_frag:rp,meshtoon_vert:ap,meshtoon_frag:op,points_vert:lp,points_frag:cp,shadow_vert:hp,shadow_frag:up,sprite_vert:dp,sprite_frag:fp},ct={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},_n={basic:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Pt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Oe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Oe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Pt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Oe([ct.points,ct.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Oe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Oe([ct.common,ct.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Oe([ct.sprite,ct.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Oe([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Oe([ct.lights,ct.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};_n.physical={uniforms:Oe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Js={r:0,b:0,g:0},ei=new Qe,pp=new se;function mp(s,t,e,n,i,r,a){const o=new Pt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Tr)?(h===void 0&&(h=new ht(new Be(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:ji(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ei.copy(x.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(ei)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ht(new is(2,2),new Re({name:"BackgroundMaterial",uniforms:ji(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Js,zc(s)),n.buffers.color.setClear(Js.r,Js.g,Js.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m}}function gp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,L,z,F,V){let X=!1;const G=u(F,z,L);r!==G&&(r=G,c(r.object)),X=f(S,F,z,V),X&&g(S,F,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(S,L,z,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,L,z){const F=z.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let X=V[L.id];X===void 0&&(X={},V[L.id]=X);let G=X[F];return G===void 0&&(G=d(l()),X[F]=G),G}function d(S){const L=[],z=[],F=[];for(let V=0;V<e;V++)L[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,L,z,F){const V=r.attributes,X=L.attributes;let G=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){const gt=V[H];let St=X[H];if(St===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),gt===void 0||gt.attribute!==St||St&&gt.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(S,L,z,F){const V={},X=L.attributes;let G=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){let gt=X[H];gt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor));const St={};St.attribute=gt,gt&&gt.data&&(St.data=gt.data),V[H]=St,G++}r.attributes=V,r.attributesNum=G,r.index=F}function _(){const S=r.newAttributes;for(let L=0,z=S.length;L<z;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const z=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;z[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),V[S]!==L&&(s.vertexAttribDivisor(S,L),V[S]=L)}function M(){const S=r.newAttributes,L=r.enabledAttributes;for(let z=0,F=L.length;z<F;z++)L[z]!==S[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function x(S,L,z,F,V,X,G){G===!0?s.vertexAttribIPointer(S,L,z,V,X):s.vertexAttribPointer(S,L,z,F,V,X)}function v(S,L,z,F){_();const V=F.attributes,X=z.getAttributes(),G=L.defaultAttributeValues;for(const K in X){const H=X[K];if(H.location>=0){let ot=V[K];if(ot===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const gt=ot.normalized,St=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const re=kt.buffer,$=kt.type,it=kt.bytesPerElement,wt=$===s.INT||$===s.UNSIGNED_INT||ot.gpuType===lo;if(ot.isInterleavedBufferAttribute){const rt=ot.data,Lt=rt.stride,zt=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<H.locationSize;Ft++)p(H.location+Ft,rt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)m(H.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,re);for(let Ft=0;Ft<H.locationSize;Ft++)x(H.location+Ft,St/H.locationSize,$,gt,Lt*it,(zt+St/H.locationSize*Ft)*it,wt)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,re);for(let rt=0;rt<H.locationSize;rt++)x(H.location+rt,St/H.locationSize,$,gt,St*it,St/H.locationSize*rt*it,wt)}}else if(G!==void 0){const gt=G[K];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(H.location,gt);break;case 3:s.vertexAttrib3fv(H.location,gt);break;case 4:s.vertexAttrib4fv(H.location,gt);break;default:s.vertexAttrib1fv(H.location,gt)}}}}M()}function P(){I();for(const S in n){const L=n[S];for(const z in L){const F=L[z];for(const V in F)h(F[V].object),delete F[V];delete L[z]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const z in L){const F=L[z];for(const V in F)h(F[V].object),delete F[V];delete L[z]}delete n[S.id]}function R(S){for(const L in n){const z=n[L];if(z[S.id]===void 0)continue;const F=z[S.id];for(const V in F)h(F[V].object),delete F[V];delete z[S.id]}}function I(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function _p(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Un&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!I)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function xp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new li,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=h(g,d,x,f);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Mp(s){let t=new WeakMap;function e(a,o){return o===Mr?a.mapping=Yi:o===ba&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mr||o===ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Mo extends Bc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,fl=[.125,.215,.35,.446,.526,.582],ui=20,ta=new Mo,pl=new Pt;let ea=null,na=0,ia=0,sa=!1;const ci=(1+Math.sqrt(5))/2,Ui=1/ci,ml=[new T(-ci,Ui,0),new T(ci,Ui,0),new T(-Ui,0,ci),new T(Ui,0,ci),new T(0,ci,-Ui),new T(0,ci,Ui),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:pn,format:fn,colorSpace:ts,depthBuffer:!1},i=gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=Sp(r,t,e)}return i}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,i){const o=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pl),h.toneMapping=Xn,h.autoClear=!1;const f=new an({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new ht(new Be,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(pl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Qs(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Yi||t.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ml[(i-r-1)%ml.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let M=0;for(let R=0;R<ui;++R){const I=R/_,b=Math.exp(-I*I/2);p.push(b),R===0?M+=b:R<m&&(M+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],P=3*v*(i>x-Bi?i-x+Bi:0),A=4*(this._cubeSize-v);Qs(e,P,A,3*v,2*v),l.setRenderTarget(e),l.render(u,ta)}}function yp(s){const t=[],e=[],n=[];let i=s;const r=s-Bi+1+fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Bi?l=fl[a-s+Bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,I=A>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(b,_*g*A),x.set(d,m*g*A);const S=[A,A,A,A,A,A];v.set(S,p*g*A)}const P=new xe;P.setAttribute("position",new Ye(M,_)),P.setAttribute("uv",new Ye(x,m)),P.setAttribute("faceIndex",new Ye(v,p)),t.push(P),i>Bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gl(s,t,e){const n=new Je(s,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sp(s,t,e){const n=new Float32Array(ui),i=new T(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function _l(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function vl(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mr||l===ba,h=l===Yi||l===$i;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ja(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ja(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function bp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ep(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,v=M.length;x<v;x+=3){const P=M[x+0],A=M[x+1],R=M[x+2];d.push(P,A,A,R,R,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const P=x+0,A=x+1,R=x+2;d.push(P,A,A,R,R,P)}}else return;const m=new(Ic(d)?Oc:Fc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ap(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rp(s,t,e){const n=new WeakMap,i=new he;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=o.attributes.position.count*v,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const R=new Float32Array(P*A*4*u),I=new Uc(R,P,A,u);I.type=xn,I.needsUpdate=!0;const b=v*4;for(let L=0;L<u;L++){const z=p[L],F=M[L],V=x[L],X=P*A*4*L;for(let G=0;G<z.count;G++){const K=G*b;g===!0&&(i.fromBufferAttribute(z,G),R[X+K+0]=i.x,R[X+K+1]=i.y,R[X+K+2]=i.z,R[X+K+3]=0),_===!0&&(i.fromBufferAttribute(F,G),R[X+K+4]=i.x,R[X+K+5]=i.y,R[X+K+6]=i.z,R[X+K+7]=0),m===!0&&(i.fromBufferAttribute(V,G),R[X+K+8]=i.x,R[X+K+9]=i.y,R[X+K+10]=i.z,R[X+K+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Q(P,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Cp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Vc extends Ce{constructor(t,e,n,i,r,a,o,l,c,h=Gi){if(h!==Gi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=pi),n===void 0&&h===Zi&&(n=Ki),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Ce,xl=new Vc(1,1),Wc=new Uc,Xc=new mu,qc=new kc,Ml=[],yl=[],Sl=new Float32Array(16),wl=new Float32Array(9),bl=new Float32Array(4);function ss(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ml[i];if(r===void 0&&(r=new Float32Array(i),Ml[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Rr(s,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function Up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;bl.set(n),s.uniformMatrix2fv(this.addr,!1,bl),Ee(e,n)}}function Np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;wl.set(n),s.uniformMatrix3fv(this.addr,!1,wl),Ee(e,n)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Sl.set(n),s.uniformMatrix4fv(this.addr,!1,Sl),Ee(e,n)}}function Op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function Hp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function Xp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xl.compareFunction=Lc,r=xl):r=Gc,e.setTexture2D(t||r,i)}function qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xc,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qc,i)}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wc,i)}function Kp(s){switch(s){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return zp;case 35668:case 35672:return Bp;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Vp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return $p}}function Zp(s,t){s.uniform1fv(this.addr,t)}function jp(s,t){const e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function Jp(s,t){const e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function Qp(s,t){const e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function t0(s,t){const e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function e0(s,t){const e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function n0(s,t){const e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function i0(s,t){s.uniform1iv(this.addr,t)}function s0(s,t){s.uniform2iv(this.addr,t)}function r0(s,t){s.uniform3iv(this.addr,t)}function a0(s,t){s.uniform4iv(this.addr,t)}function o0(s,t){s.uniform1uiv(this.addr,t)}function l0(s,t){s.uniform2uiv(this.addr,t)}function c0(s,t){s.uniform3uiv(this.addr,t)}function h0(s,t){s.uniform4uiv(this.addr,t)}function u0(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Gc,r[a])}function d0(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xc,r[a])}function f0(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||qc,r[a])}function p0(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Wc,r[a])}function m0(s){switch(s){case 5126:return Zp;case 35664:return jp;case 35665:return Jp;case 35666:return Qp;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kp(e.type)}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function El(s,t){s.seq.push(t),s.map[t.id]=t}function x0(s,t,e){const n=s.name,i=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),a=ra.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){El(e,c===void 0?new g0(o,s,t):new _0(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new v0(o),El(e,u)),e=u}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);x0(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Tl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const M0=37297;let y0=0;function S0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Al=new Gt;function w0(s){ee._getMatrix(Al,ee.workingColorSpace,s);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Ar:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+S0(s.getShaderSource(t),a)}else return i}function b0(s,t){const e=w0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function E0(s,t){let e;switch(t){case mc:e="Linear";break;case gc:e="Reinhard";break;case _c:e="Cineon";break;case oo:e="ACESFilmic";break;case vc:e="AgX";break;case xc:e="Neutral";break;case Dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new T;function T0(){ee.getLuminanceCoefficients(tr);const s=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function R0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function _s(s){return s!==""}function Cl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(s){return s.replace(P0,I0)}const L0=new Map;function I0(s,t){let e=qt[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(s){return s.replace(D0,U0)}function U0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Il(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yi:case $i:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Lh:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function B0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function k0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=N0(e),c=F0(e),h=O0(e),u=z0(e),d=B0(e),f=A0(e),g=R0(r),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=Qa(a),a=Cl(a,e),a=Pl(a,e),o=Qa(o),o=Cl(o,e),o=Pl(o,e),a=Ll(a),o=Ll(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,v=M+p+o,P=Tl(i,i.VERTEX_SHADER,x),A=Tl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(P).trim(),V=i.getShaderInfoLog(A).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,A);else{const K=Rl(i,P,"vertex"),H=Rl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(G=!1);G&&(L.diagnostics={runnable:X,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(P),i.deleteShader(A),I=new gr(i,_),b=C0(i,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,M0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let H0=0;class V0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G0(t),e.set(t,n)),n}}class G0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function W0(s,t,e,n,i,r,a){const o=new vo,l=new V0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,z,F){const V=z.fog,X=F.geometry,G=b.isMeshStandardMaterial?z.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),H=K&&K.mapping===Tr?K.image.height:null,ot=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=gt!==void 0?gt.length:0;let kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let re,$,it,wt;if(ot){const le=_n[ot];re=le.vertexShader,$=le.fragmentShader}else re=b.vertexShader,$=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),wt=l.getFragmentShaderID(b);const rt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),zt=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,ne=!!b.map,j=!!b.matcap,nt=!!K,C=!!b.aoMap,Rt=!!b.lightMap,tt=!!b.bumpMap,xt=!!b.normalMap,at=!!b.displacementMap,It=!!b.emissiveMap,_t=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,O=b.clearcoat>0,q=b.dispersion>0,J=b.iridescence>0,Y=b.sheen>0,bt=b.transmission>0,ut=y&&!!b.anisotropyMap,vt=O&&!!b.clearcoatMap,Zt=O&&!!b.clearcoatNormalMap,et=O&&!!b.clearcoatRoughnessMap,Mt=J&&!!b.iridescenceMap,Dt=J&&!!b.iridescenceThicknessMap,Ot=Y&&!!b.sheenColorMap,yt=Y&&!!b.sheenRoughnessMap,te=!!b.specularMap,Wt=!!b.specularColorMap,ue=!!b.specularIntensityMap,D=bt&&!!b.transmissionMap,dt=bt&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,mt=b.alphaTest>0,ft=!!b.alphaHash,Ht=!!b.extensions;let Me=Xn;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Pe={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:re,fragmentShader:$,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:zt,instancingColor:zt&&F.instanceColor!==null,instancingMorph:zt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ts,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:j,envMap:nt,envMapMode:nt&&K.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Rt,bumpMap:tt,normalMap:xt,displacementMap:d&&at,emissiveMap:It,normalMapObjectSpace:xt&&b.normalMapType===Oh,normalMapTangentSpace:xt&&b.normalMapType===Pc,metalnessMap:_t,roughnessMap:E,anisotropy:y,anisotropyMap:ut,clearcoat:O,clearcoatMap:vt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:et,dispersion:q,iridescence:J,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:Y,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:te,specularColorMap:Wt,specularIntensityMap:ue,transmission:bt,transmissionMap:D,thicknessMap:dt,gradientMap:W,opaque:b.transparent===!1&&b.blending===fi&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:mt,alphaHash:ft,combine:b.combine,mapUv:ne&&_(b.map.channel),aoMapUv:C&&_(b.aoMap.channel),lightMapUv:Rt&&_(b.lightMap.channel),bumpMapUv:tt&&_(b.bumpMap.channel),normalMapUv:xt&&_(b.normalMap.channel),displacementMapUv:at&&_(b.displacementMap.channel),emissiveMapUv:It&&_(b.emissiveMap.channel),metalnessMapUv:_t&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:ut&&_(b.anisotropyMap.channel),clearcoatMapUv:vt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(b.sheenRoughnessMap.channel),specularMapUv:te&&_(b.specularMap.channel),specularColorMapUv:Wt&&_(b.specularColorMap.channel),specularIntensityMapUv:ue&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:dt&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ne||Z),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:It&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===He,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=g[b.type];let L;if(S){const z=_n[S];L=mi.clone(z.uniforms)}else L=b.uniforms;return L}function P(b,S){let L;for(let z=0,F=h.length;z<F;z++){const V=h[z];if(V.cacheKey===S){L=V,++L.usedTimes;break}}return L===void 0&&(L=new k0(s,S,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:I}}function X0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function q0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Dl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ul(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||q0),n.length>1&&n.sort(d||Dl),i.length>1&&i.sort(d||Dl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Y0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ul,s.set(n,[a])):i>=r.length?(a=new Ul,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function $0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Pt};break;case"SpotLight":e={position:new T,direction:new T,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function K0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Z0=0;function j0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function J0(s){const t=new $0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,P=0,A=0,R=0;c.sort(j0);for(let b=0,S=c.length;b<S;b++){const L=c[b],z=L.color,F=L.intensity,V=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],F);R++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,H=e.get(L);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=G,f++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(z).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const K=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,K.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,v++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(z).multiplyScalar(F),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const K=L.shadow,H=e.get(L);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(F),G.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=R,n.version=Z0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Nl(s){const t=new J0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Nl(s),t.set(i,[o])):r>=a.length?(o=new Nl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class tm extends ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sm(s,t,e){let n=new xo;const i=new Q,r=new Q,a=new he,o=new tm({depthPacking:Fh}),l=new em,c={},h=e.maxTextureSize,u={[Yn]:Ve,[Ve]:Yn,[He]:He},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:nm,fragmentShader:im}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let p=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(yn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==Pn&&this.type===Pn,V=p===Pn&&this.type!==Pn;for(let X=0,G=A.length;X<G;X++){const K=A[X],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ot=H.getFrameExtents();if(i.multiply(ot),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||F===!0||V===!0){const St=this.type!==Pn?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new Je(i.x,i.y,St),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const gt=H.getViewportCount();for(let St=0;St<gt;St++){const kt=H.getViewport(St);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),z.viewport(a),H.updateMatrices(K,St),n=H.getFrustum(),v(R,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Pn&&M(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,L)};function M(A,R){const I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Je(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,I,f,_,null)}function x(A,R,I,b){let S=null;const L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=S.uuid,F=R.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let X=V[F];X===void 0&&(X=S.clone(),V[F]=X,R.addEventListener("dispose",P)),S=X}if(S.visible=R.visible,S.wireframe=R.wireframe,b===Pn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=s.properties.get(S);z.light=I}return S}function v(A,R,I,b,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const X=F.groups;for(let G=0,K=X.length;G<K;G++){const H=X[G],ot=V[H.materialIndex];if(ot&&ot.visible){const gt=x(A,ot,b,S);A.onBeforeShadow(s,A,R,I,F,gt,H),s.renderBufferDirect(I,null,F,gt,A,H),A.onAfterShadow(s,A,R,I,F,gt,H)}}}else if(V.visible){const X=x(A,V,b,S);A.onBeforeShadow(s,A,R,I,F,X,null),s.renderBufferDirect(I,null,F,X,A,null),A.onAfterShadow(s,A,R,I,F,X,null)}}const z=A.children;for(let F=0,V=z.length;F<V;F++)v(z[F],R,I,b,S)}function P(A){A.target.removeEventListener("dispose",P);for(const I in c){const b=c[I],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const rm={[_a]:va,[xa]:Sa,[Ma]:wa,[qi]:ya,[va]:_a,[Sa]:xa,[wa]:Ma,[ya]:qi};function am(s,t){function e(){let D=!1;const dt=new he;let W=null;const Z=new he(0,0,0,0);return{setMask:function(mt){W!==mt&&!D&&(s.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){D=mt},setClear:function(mt,ft,Ht,Me,Pe){Pe===!0&&(mt*=Me,ft*=Me,Ht*=Me),dt.set(mt,ft,Ht,Me),Z.equals(dt)===!1&&(s.clearColor(mt,ft,Ht,Me),Z.copy(dt))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,W=null,Z=null,mt=null;return{setReversed:function(ft){if(dt!==ft){const Ht=t.get("EXT_clip_control");dt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const Me=mt;mt=null,this.setClear(Me)}dt=ft},getReversed:function(){return dt},setTest:function(ft){ft?rt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(ft){W!==ft&&!D&&(s.depthMask(ft),W=ft)},setFunc:function(ft){if(dt&&(ft=rm[ft]),Z!==ft){switch(ft){case _a:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case xa:s.depthFunc(s.LESS);break;case qi:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case ya:s.depthFunc(s.GEQUAL);break;case Sa:s.depthFunc(s.GREATER);break;case wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ft}},setLocked:function(ft){D=ft},setClear:function(ft){mt!==ft&&(dt&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){D=!1,W=null,Z=null,mt=null,dt=!1}}}function i(){let D=!1,dt=null,W=null,Z=null,mt=null,ft=null,Ht=null,Me=null,Pe=null;return{setTest:function(le){D||(le?rt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(le){dt!==le&&!D&&(s.stencilMask(le),dt=le)},setFunc:function(le,on,wn){(W!==le||Z!==on||mt!==wn)&&(s.stencilFunc(le,on,wn),W=le,Z=on,mt=wn)},setOp:function(le,on,wn){(ft!==le||Ht!==on||Me!==wn)&&(s.stencilOp(le,on,wn),ft=le,Ht=on,Me=wn)},setLocked:function(le){D=le},setClear:function(le){Pe!==le&&(s.clearStencil(le),Pe=le)},reset:function(){D=!1,dt=null,W=null,Z=null,mt=null,ft=null,Ht=null,Me=null,Pe=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,P=null,A=null,R=new Pt(0,0,0),I=0,b=!1,S=null,L=null,z=null,F=null,V=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=K>=2);let ot=null,gt={};const St=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),re=new he().fromArray(St),$=new he().fromArray(kt);function it(D,dt,W,Z){const mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(D,ft),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<W;Ht++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(dt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}const wt={};wt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(qi),tt(!1),xt(ko),rt(s.CULL_FACE),C(yn);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Lt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function zt(D,dt){return u[D]!==dt?(s.bindFramebuffer(D,dt),u[D]=dt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ft(D,dt){let W=f,Z=!1;if(D){W=d.get(dt),W===void 0&&(W=[],d.set(dt,W));const mt=D.textures;if(W.length!==mt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ht=mt.length;ft<Ht;ft++)W[ft]=s.COLOR_ATTACHMENT0+ft;W.length=mt.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function ne(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const j={[hi]:s.FUNC_ADD,[ph]:s.FUNC_SUBTRACT,[mh]:s.FUNC_REVERSE_SUBTRACT};j[gh]=s.MIN,j[_h]=s.MAX;const nt={[vh]:s.ZERO,[xh]:s.ONE,[Mh]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[Th]:s.SRC_ALPHA_SATURATE,[bh]:s.DST_COLOR,[Sh]:s.DST_ALPHA,[yh]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[Eh]:s.ONE_MINUS_DST_COLOR,[wh]:s.ONE_MINUS_DST_ALPHA,[Ah]:s.CONSTANT_COLOR,[Rh]:s.ONE_MINUS_CONSTANT_COLOR,[Ch]:s.CONSTANT_ALPHA,[Ph]:s.ONE_MINUS_CONSTANT_ALPHA};function C(D,dt,W,Z,mt,ft,Ht,Me,Pe,le){if(D===yn){_===!0&&(Lt(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),D!==fh){if(D!==m||le!==b){if((p!==hi||v!==hi)&&(s.blendEquation(s.FUNC_ADD),p=hi,v=hi),le)switch(D){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xi:s.blendFunc(s.ONE,s.ONE);break;case Ho:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ho:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,x=null,P=null,A=null,R.set(0,0,0),I=0,m=D,b=le}return}mt=mt||dt,ft=ft||W,Ht=Ht||Z,(dt!==p||mt!==v)&&(s.blendEquationSeparate(j[dt],j[mt]),p=dt,v=mt),(W!==M||Z!==x||ft!==P||Ht!==A)&&(s.blendFuncSeparate(nt[W],nt[Z],nt[ft],nt[Ht]),M=W,x=Z,P=ft,A=Ht),(Me.equals(R)===!1||Pe!==I)&&(s.blendColor(Me.r,Me.g,Me.b,Pe),R.copy(Me),I=Pe),m=D,b=!1}function Rt(D,dt){D.side===He?Lt(s.CULL_FACE):rt(s.CULL_FACE);let W=D.side===Ve;dt&&(W=!W),tt(W),D.blending===fi&&D.transparent===!1?C(yn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function xt(D){D!==uh?(rt(s.CULL_FACE),D!==L&&(D===ko?s.cullFace(s.BACK):D===dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),L=D}function at(D){D!==z&&(G&&s.lineWidth(D),z=D)}function It(D,dt,W){D?(rt(s.POLYGON_OFFSET_FILL),(F!==dt||V!==W)&&(s.polygonOffset(dt,W),F=dt,V=W)):Lt(s.POLYGON_OFFSET_FILL)}function _t(D){D?rt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+X-1),ot!==D&&(s.activeTexture(D),ot=D)}function y(D,dt,W){W===void 0&&(ot===null?W=s.TEXTURE0+X-1:W=ot);let Z=gt[W];Z===void 0&&(Z={type:void 0,texture:void 0},gt[W]=Z),(Z.type!==D||Z.texture!==dt)&&(ot!==W&&(s.activeTexture(W),ot=W),s.bindTexture(D,dt||wt[D]),Z.type=D,Z.texture=dt)}function O(){const D=gt[ot];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){re.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function yt(D){$.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function te(D,dt){let W=c.get(dt);W===void 0&&(W=new WeakMap,c.set(dt,W));let Z=W.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(dt,D.name),W.set(D,Z))}function Wt(D,dt){const Z=c.get(dt).get(D);l.get(dt)!==Z&&(s.uniformBlockBinding(dt,Z,D.__bindingPointIndex),l.set(dt,Z))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,gt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,P=null,A=null,R=new Pt(0,0,0),I=0,b=!1,S=null,L=null,z=null,F=null,V=null,re.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Lt,bindFramebuffer:zt,drawBuffers:Ft,useProgram:ne,setBlending:C,setMaterial:Rt,setFlipSided:tt,setCullFace:xt,setLineWidth:at,setPolygonOffset:It,setScissorTest:_t,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:te,uniformBlockBinding:Wt,texStorage2D:Zt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ot,viewport:yt,reset:ue}}function Fl(s,t,e,n){const i=om(n);switch(e){case bc:return s*t;case Tc:return s*t;case Ac:return s*t*2;case uo:return s*t/i.components*i.byteLength;case fo:return s*t/i.components*i.byteLength;case Rc:return s*t*2/i.components*i.byteLength;case po:return s*t*2/i.components*i.byteLength;case Ec:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case mo:return s*t*4/i.components*i.byteLength;case ur:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(s,16)*Math.max(t,8)/4;case Ta:case Ra:return Math.max(s,8)*Math.max(t,8)/2;case Pa:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mr:case Ya:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Cc:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Za:case ja:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function om(s){switch(s){case Un:case yc:return{byteLength:1,components:1};case bs:case Sc:case pn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case pi:case lo:case xn:return{byteLength:4,components:1};case wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function lm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Ts("canvas")}function _(E,y,O){let q=1;const J=_t(E);if((J.width>O||J.height>O)&&(q=O/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(q*J.width),bt=Math.floor(q*J.height);u===void 0&&(u=g(Y,bt));const ut=y?g(Y,bt):u;return ut.width=Y,ut.height=bt,ut.getContext("2d").drawImage(E,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+bt+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(E,y,O,q,J=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),y===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),y===s.RGBA){const bt=J?Ar:ee.getTransfer(q);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=bt===ce?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(E,y){let O;return E?y===null||y===pi||y===Ki?O=s.DEPTH24_STENCIL8:y===xn?O=s.DEPTH32F_STENCIL8:y===bs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===pi||y===Ki?O=s.DEPTH_COMPONENT24:y===xn?O=s.DEPTH_COMPONENT32F:y===bs&&(O=s.DEPTH_COMPONENT16),O}function P(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ge&&E.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){const y=E.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function R(E){const y=E.target;y.removeEventListener("dispose",R),S(y)}function I(E){const y=n.get(E);if(y.__webglInit===void 0)return;const O=E.source,q=d.get(O);if(q){const J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(q).length===0&&d.delete(O)}n.remove(E)}function b(E){const y=n.get(E);s.deleteTexture(y.__webglTexture);const O=E.source,q=d.get(O);delete q[y.__cacheKey],a.memory.textures--}function S(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[q][J]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let q=0,J=O.length;q<J;q++){const Y=n.get(O[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(E)}let L=0;function z(){L=0}function F(){const E=L;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),L+=1,E}function V(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){const O=n.get(E);if(E.isVideoTexture&&at(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,E,y);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function G(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){$(O,E,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function K(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){$(O,E,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function H(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){it(O,E,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const ot={[yr]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Ea]:s.MIRRORED_REPEAT},gt={[Ge]:s.NEAREST,[Uh]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[Dr]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},St={[zh]:s.NEVER,[Wh]:s.ALWAYS,[Bh]:s.LESS,[Lc]:s.LEQUAL,[kh]:s.EQUAL,[Gh]:s.GEQUAL,[Hh]:s.GREATER,[Vh]:s.NOTEQUAL};function kt(E,y){if(y.type===xn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===Dr||y.magFilter===Us||y.magFilter===di||y.minFilter===vn||y.minFilter===Dr||y.minFilter===Us||y.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ot[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ot[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ot[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,gt[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,St[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==Us&&y.minFilter!==di||y.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function re(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const q=y.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Y=V(y);if(Y!==E.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[Y].usedTimes++;const bt=J[E.__cacheKey];bt!==void 0&&(J[E.__cacheKey].usedTimes--,bt.usedTimes===0&&b(y)),E.__cacheKey=Y,E.__webglTexture=J[Y].texture}return O}function $(E,y,O){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);const J=re(E,y),Y=y.source;e.bindTexture(q,E.__webglTexture,s.TEXTURE0+O);const bt=n.get(Y);if(Y.version!==bt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const ut=ee.getPrimaries(ee.workingColorSpace),vt=y.colorSpace===Ln?null:ee.getPrimaries(y.colorSpace),Zt=y.colorSpace===Ln||ut===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let et=_(y.image,!1,i.maxTextureSize);et=It(y,et);const Mt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type);let Ot=x(y.internalFormat,Mt,Dt,y.colorSpace,y.isVideoTexture);kt(q,y);let yt;const te=y.mipmaps,Wt=y.isVideoTexture!==!0,ue=bt.__version===void 0||J===!0,D=Y.dataReady,dt=P(y,et);if(y.isDepthTexture)Ot=v(y.format===Zi,y.type),ue&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ot,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Ot,et.width,et.height,0,Mt,Dt,null));else if(y.isDataTexture)if(te.length>0){Wt&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,te[0].width,te[0].height);for(let W=0,Z=te.length;W<Z;W++)yt=te[W],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,Dt,yt.data):e.texImage2D(s.TEXTURE_2D,W,Ot,yt.width,yt.height,0,Mt,Dt,yt.data);y.generateMipmaps=!1}else Wt?(ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,et.width,et.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,Mt,Dt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,et.width,et.height,0,Mt,Dt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,te[0].width,te[0].height,et.depth);for(let W=0,Z=te.length;W<Z;W++)if(yt=te[W],y.format!==fn)if(Mt!==null)if(Wt){if(D)if(y.layerUpdates.size>0){const mt=Fl(yt.width,yt.height,y.format,y.type);for(const ft of y.layerUpdates){const Ht=yt.data.subarray(ft*mt/yt.data.BYTES_PER_ELEMENT,(ft+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ft,yt.width,yt.height,1,Mt,Ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,et.depth,Mt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ot,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,et.depth,Mt,Dt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ot,yt.width,yt.height,et.depth,0,Mt,Dt,yt.data)}else{Wt&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,te[0].width,te[0].height);for(let W=0,Z=te.length;W<Z;W++)yt=te[W],y.format!==fn?Mt!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,Dt,yt.data):e.texImage2D(s.TEXTURE_2D,W,Ot,yt.width,yt.height,0,Mt,Dt,yt.data)}else if(y.isDataArrayTexture)if(Wt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,et.width,et.height,et.depth),D)if(y.layerUpdates.size>0){const W=Fl(et.width,et.height,y.format,y.type);for(const Z of y.layerUpdates){const mt=et.data.subarray(Z*W/et.data.BYTES_PER_ELEMENT,(Z+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,Mt,Dt,mt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,et.width,et.height,et.depth,0,Mt,Dt,et.data);else if(y.isData3DTexture)Wt?(ue&&e.texStorage3D(s.TEXTURE_3D,dt,Ot,et.width,et.height,et.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,et.width,et.height,et.depth,0,Mt,Dt,et.data);else if(y.isFramebufferTexture){if(ue)if(Wt)e.texStorage2D(s.TEXTURE_2D,dt,Ot,et.width,et.height);else{let W=et.width,Z=et.height;for(let mt=0;mt<dt;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ot,W,Z,0,Mt,Dt,null),W>>=1,Z>>=1}}else if(te.length>0){if(Wt&&ue){const W=_t(te[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ot,W.width,W.height)}for(let W=0,Z=te.length;W<Z;W++)yt=te[W],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Mt,Dt,yt):e.texImage2D(s.TEXTURE_2D,W,Ot,Mt,Dt,yt);y.generateMipmaps=!1}else if(Wt){if(ue){const W=_t(et);e.texStorage2D(s.TEXTURE_2D,dt,Ot,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Mt,Dt,et);m(y)&&p(q),bt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function it(E,y,O){if(y.image.length!==6)return;const q=re(E,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const Y=n.get(J);if(J.version!==Y.__version||q===!0){e.activeTexture(s.TEXTURE0+O);const bt=ee.getPrimaries(ee.workingColorSpace),ut=y.colorSpace===Ln?null:ee.getPrimaries(y.colorSpace),vt=y.colorSpace===Ln||bt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let Z=0;Z<6;Z++)!Zt&&!et?Mt[Z]=_(y.image[Z],!0,i.maxCubemapSize):Mt[Z]=et?y.image[Z].image:y.image[Z],Mt[Z]=It(y,Mt[Z]);const Dt=Mt[0],Ot=r.convert(y.format,y.colorSpace),yt=r.convert(y.type),te=x(y.internalFormat,Ot,yt,y.colorSpace),Wt=y.isVideoTexture!==!0,ue=Y.__version===void 0||q===!0,D=J.dataReady;let dt=P(y,Dt);kt(s.TEXTURE_CUBE_MAP,y);let W;if(Zt){Wt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,te,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){W=Mt[Z].mipmaps;for(let mt=0;mt<W.length;mt++){const ft=W[mt];y.format!==fn?Ot!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,ft.width,ft.height,Ot,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,te,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,ft.width,ft.height,Ot,yt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,te,ft.width,ft.height,0,Ot,yt,ft.data)}}}else{if(W=y.mipmaps,Wt&&ue){W.length>0&&dt++;const Z=_t(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,te,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt[Z].width,Mt[Z].height,Ot,yt,Mt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,te,Mt[Z].width,Mt[Z].height,0,Ot,yt,Mt[Z].data);for(let mt=0;mt<W.length;mt++){const Ht=W[mt].image[Z].image;Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Ht.width,Ht.height,Ot,yt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,te,Ht.width,Ht.height,0,Ot,yt,Ht.data)}}else{Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ot,yt,Mt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,te,Ot,yt,Mt[Z]);for(let mt=0;mt<W.length;mt++){const ft=W[mt];Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Ot,yt,ft.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,te,Ot,yt,ft.image[Z])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function wt(E,y,O,q,J,Y){const bt=r.convert(O.format,O.colorSpace),ut=r.convert(O.type),vt=x(O.internalFormat,bt,ut,O.colorSpace),Zt=n.get(y),et=n.get(O);if(et.__renderTarget=y,!Zt.__hasExternalTextures){const Mt=Math.max(1,y.width>>Y),Dt=Math.max(1,y.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,vt,Mt,Dt,y.depth,0,bt,ut,null):e.texImage2D(J,Y,vt,Mt,Dt,0,bt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,et.__webglTexture,0,tt(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,et.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(E,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer){const q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=v(y.stencilBuffer,J),bt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=tt(y);xt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Y,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Y,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Y,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,E)}else{const q=y.textures;for(let J=0;J<q.length;J++){const Y=q[J],bt=r.convert(Y.format,Y.colorSpace),ut=r.convert(Y.type),vt=x(Y.internalFormat,bt,ut,Y.colorSpace),Zt=tt(y);O&&xt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,vt,y.width,y.height):xt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,vt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,vt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const J=q.__webglTexture,Y=tt(y);if(y.depthTexture.format===Gi)xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===Zi)xt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function zt(E){const y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),rt(y.__webglDepthbuffer[q],E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),rt(y.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(E,y,O){const q=n.get(E);y!==void 0&&wt(q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&zt(E)}function ne(E){const y=E.texture,O=n.get(E),q=n.get(y);E.addEventListener("dispose",R);const J=E.textures,Y=E.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let vt=0;vt<y.mipmaps.length;vt++)O.__webglFramebuffer[ut][vt]=s.createFramebuffer()}else O.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)O.__webglFramebuffer[ut]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ut=0,vt=J.length;ut<vt;ut++){const Zt=n.get(J[ut]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&xt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const vt=J[ut];O.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const Zt=r.convert(vt.format,vt.colorSpace),et=r.convert(vt.type),Mt=x(vt.internalFormat,Zt,et,vt.colorSpace,E.isXRRenderTarget===!0),Dt=tt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,Mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),kt(s.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)wt(O.__webglFramebuffer[ut][vt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else wt(O.__webglFramebuffer[ut],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,vt=J.length;ut<vt;ut++){const Zt=J[ut],et=n.get(Zt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),kt(s.TEXTURE_2D,Zt),wt(O.__webglFramebuffer,E,Zt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,q.__webglTexture),kt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)wt(O.__webglFramebuffer[vt],E,y,s.COLOR_ATTACHMENT0,ut,vt);else wt(O.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}E.depthBuffer&&zt(E)}function j(E){const y=E.textures;for(let O=0,q=y.length;O<q;O++){const J=y[O];if(m(J)){const Y=M(E),bt=n.get(J).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}const nt=[],C=[];function Rt(E){if(E.samples>0){if(xt(E)===!1){const y=E.textures,O=E.width,q=E.height;let J=s.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(E),ut=y.length>1;if(ut)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const Zt=n.get(y[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,O,q,0,0,O,q,J,s.NEAREST),l===!0&&(nt.length=0,C.length=0,nt.push(s.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(nt.push(Y),C.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const Zt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function tt(E){return Math.min(i.maxSamples,E.samples)}function xt(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function at(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function It(E,y){const O=E.colorSpace,q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ts&&O!==Ln&&(ee.getTransfer(O)===ce?(q!==fn||J!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function _t(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ft,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=xt}function cm(s,t){function e(n,i=Ln){let r;const a=ee.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return s.BYTE;if(n===Sc)return s.SHORT;if(n===bs)return s.UNSIGNED_SHORT;if(n===lo)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===pn)return s.HALF_FLOAT;if(n===bc)return s.ALPHA;if(n===Ec)return s.RGB;if(n===fn)return s.RGBA;if(n===Tc)return s.LUMINANCE;if(n===Ac)return s.LUMINANCE_ALPHA;if(n===Gi)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===uo)return s.RED;if(n===fo)return s.RED_INTEGER;if(n===Rc)return s.RG;if(n===po)return s.RG_INTEGER;if(n===mo)return s.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===La)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===Ya||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Ka||n===Za||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class hm extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
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

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Re({vertexShader:dm,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mm extends es{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new pm,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],P=new Q;let A=null;const R=new qe;R.viewport=new he;const I=new qe;I.viewport=new he;const b=[R,I],S=new hm;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=x[$];return it===void 0&&(it=new aa,x[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=x[$];return it===void 0&&(it=new aa,x[$]=it),it.getGripSpace()},this.getHand=function($){let it=x[$];return it===void 0&&(it=new aa,x[$]=it),it.getHandSpace()};function F($){const it=v.indexOf($.inputSource);if(it===-1)return;const wt=x[it];wt!==void 0&&(wt.update($.inputSource,$.frame,c||a),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let $=0;$<x.length;$++){const it=v[$];it!==null&&(v[$]=null,x[$].disconnect(it))}L=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Je(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,wt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Zi:Gi,wt=m.stencil?Ki:pi);const Lt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Je(d.textureWidth,d.textureHeight,{format:fn,type:Un,depthTexture:new Vc(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let it=0;it<$.removed.length;it++){const wt=$.removed[it],rt=v.indexOf(wt);rt>=0&&(v[rt]=null,x[rt].disconnect(wt))}for(let it=0;it<$.added.length;it++){const wt=$.added[it];let rt=v.indexOf(wt);if(rt===-1){for(let zt=0;zt<x.length;zt++)if(zt>=v.length){v.push(wt),rt=zt;break}else if(v[zt]===null){v[zt]=wt,rt=zt;break}if(rt===-1)break}const Lt=x[rt];Lt&&Lt.connect(wt)}}const G=new T,K=new T;function H($,it,wt){G.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(wt.matrixWorld);const rt=G.distanceTo(K),Lt=it.projectionMatrix.elements,zt=wt.projectionMatrix.elements,Ft=Lt[14]/(Lt[10]-1),ne=Lt[14]/(Lt[10]+1),j=(Lt[9]+1)/Lt[5],nt=(Lt[9]-1)/Lt[5],C=(Lt[8]-1)/Lt[0],Rt=(zt[8]+1)/zt[0],tt=Ft*C,xt=Ft*Rt,at=rt/(-C+Rt),It=at*-C;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const _t=Ft+at,E=ne+at,y=tt-It,O=xt+(rt-It),q=j*ne/E*_t,J=nt*ne/E*_t;$.projectionMatrix.makePerspective(y,O,q,J,_t,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ot($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let it=$.near,wt=$.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),S.near=I.near=R.near=it,S.far=I.far=R.far=wt,(L!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,z=S.far),R.layers.mask=$.layers.mask|2,I.layers.mask=$.layers.mask|4,S.layers.mask=R.layers.mask|I.layers.mask;const rt=$.parent,Lt=S.cameras;ot(S,rt);for(let zt=0;zt<Lt.length;zt++)ot(Lt[zt],rt);Lt.length===2?H(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),gt($,S,rt)};function gt($,it,wt){wt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Es*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let St=null;function kt($,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let rt=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let zt=0;zt<wt.length;zt++){const Ft=wt[zt];let ne=null;if(f!==null)ne=f.getViewport(Ft);else{const nt=u.getViewSubImage(d,Ft);ne=nt.viewport,zt===0&&(t.setRenderTargetTextures(M,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(M))}let j=b[zt];j===void 0&&(j=new qe,j.layers.enable(zt),j.viewport=new he,b[zt]=j),j.matrix.fromArray(Ft.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ft.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),zt===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(j)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const zt=u.getDepthInformation(wt[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,i.renderState)}}for(let wt=0;wt<x.length;wt++){const rt=v[wt],Lt=x[wt];rt!==null&&Lt!==void 0&&Lt.update(rt,it,c||a)}St&&St($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const re=new Hc;re.setAnimationLoop(kt),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}}const ni=new Qe,gm=new se;function _m(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,ni.copy(v),ni.x*=-1,ni.y*=-1,ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(gm.makeRotationFromEuler(ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(M,P);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const x=u();M.__bindingPointIndex=x;const v=s.createBuffer(),P=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],v=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,R=v.length;A<R;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,S=I.length;b<S;b++){const L=I[b];if(f(L,A,b,P)===!0){const z=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let X=0;X<F.length;X++){const G=F[X],K=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+V,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,v,P){const A=M.value,R=x+"_"+v;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const I=P[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return P[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(M){const x=M.uniforms;let v=0;const P=16;for(let R=0,I=x.length;R<I;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,L=b.length;S<L;S++){const z=b[S],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,X=F.length;V<X;V++){const G=F[V],K=_(G),H=v%P,ot=H%K.boundary,gt=H+ot;v+=ot,gt!==0&&P-gt<K.storage&&(v+=P-gt),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=K.storage}}}const A=v%P;return A>0&&(v+=P-A),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class xm{constructor(t={}){const{canvas:e=ou(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Xn,this.toneMappingExposure=1;const v=this;let P=!1,A=0,R=0,I=null,b=-1,S=null;const L=new he,z=new he;let F=null;const V=new Pt(0);let X=0,G=e.width,K=e.height,H=1,ot=null,gt=null;const St=new he(0,0,G,K),kt=new he(0,0,G,K);let re=!1;const $=new xo;let it=!1,wt=!1;const rt=new se,Lt=new se,zt=new T,Ft=new he,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function nt(){return I===null?H:1}let C=n;function Rt(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const U="webgl2";if(C=Rt(U,w),C===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,xt,at,It,_t,E,y,O,q,J,Y,bt,ut,vt,Zt,et,Mt,Dt,Ot,yt,te,Wt,ue,D;function dt(){tt=new bp(C),tt.init(),Wt=new cm(C,tt),xt=new vp(C,tt,t,Wt),at=new am(C,tt),xt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),It=new Ap(C),_t=new X0,E=new lm(C,tt,at,_t,xt,Wt,It),y=new Mp(v),O=new wp(v),q=new Du(C),ue=new gp(C,q),J=new Ep(C,q,It,ue),Y=new Cp(C,J,q,It),Ot=new Rp(C,xt,E),et=new xp(_t),bt=new W0(v,y,O,tt,xt,ue,et),ut=new _m(v,_t),vt=new Y0,Zt=new Q0(tt),Dt=new mp(v,y,O,at,Y,f,l),Mt=new sm(v,Y,xt),D=new vm(C,It,xt,at),yt=new _p(C,tt,It),te=new Tp(C,tt,It),It.programs=bt.programs,v.capabilities=xt,v.extensions=tt,v.properties=_t,v.renderLists=vt,v.shadowMap=Mt,v.state=at,v.info=It}dt();const W=new mm(v,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(G,K,!1))},this.getSize=function(w){return w.set(G,K)},this.setSize=function(w,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,K=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),B===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*H,K*H).floor()},this.setDrawingBufferSize=function(w,U,B){G=w,K=U,H=B,e.width=Math.floor(w*B),e.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(St)},this.setViewport=function(w,U,B,k){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,U,B,k),at.viewport(L.copy(St).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,U,B,k){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,U,B,k),at.scissor(z.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){at.setScissorTest(re=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,U=!0,B=!0){let k=0;if(w){let N=!1;if(I!==null){const st=I.texture.format;N=st===mo||st===po||st===fo}if(N){const st=I.texture.type,pt=st===Un||st===pi||st===bs||st===Ki||st===co||st===ho,Et=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Bt=Et.r,Vt=Et.g,At=Et.b;pt?(g[0]=Bt,g[1]=Vt,g[2]=At,g[3]=Tt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Bt,_[1]=Vt,_[2]=At,_[3]=Tt,C.clearBufferiv(C.COLOR,0,_))}else k|=C.COLOR_BUFFER_BIT}U&&(k|=C.DEPTH_BUFFER_BIT),B&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),Zt.dispose(),_t.dispose(),y.dispose(),O.dispose(),Y.dispose(),ue.dispose(),D.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Io),W.removeEventListener("sessionend",Do),Zn.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=It.autoReset,U=Mt.enabled,B=Mt.autoUpdate,k=Mt.needsUpdate,N=Mt.type;dt(),It.autoReset=w,Mt.enabled=U,Mt.autoUpdate=B,Mt.needsUpdate=k,Mt.type=N}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ht(w){const U=w.target;U.removeEventListener("dispose",Ht),Me(U)}function Me(w){Pe(w),_t.remove(w)}function Pe(w){const U=_t.get(w).programs;U!==void 0&&(U.forEach(function(B){bt.releaseProgram(B)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,k,N,st){U===null&&(U=ne);const pt=N.isMesh&&N.matrixWorld.determinant()<0,Et=lh(w,U,B,k,N);at.setMaterial(k,pt);let Tt=B.index,Bt=1;if(k.wireframe===!0){if(Tt=J.getWireframeAttribute(B),Tt===void 0)return;Bt=2}const Vt=B.drawRange,At=B.attributes.position;let ie=Vt.start*Bt,de=(Vt.start+Vt.count)*Bt;st!==null&&(ie=Math.max(ie,st.start*Bt),de=Math.min(de,(st.start+st.count)*Bt)),Tt!==null?(ie=Math.max(ie,0),de=Math.min(de,Tt.count)):At!=null&&(ie=Math.max(ie,0),de=Math.min(de,At.count));const me=de-ie;if(me<0||me===1/0)return;ue.setup(N,k,Et,B,Tt);let We,ae=yt;if(Tt!==null&&(We=q.get(Tt),ae=te,ae.setIndex(We)),N.isMesh)k.wireframe===!0?(at.setLineWidth(k.wireframeLinewidth*nt()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(N.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),at.setLineWidth(Ct*nt()),N.isLineSegments?ae.setMode(C.LINES):N.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else N.isPoints?ae.setMode(C.POINTS):N.isSprite&&ae.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,bn=N._multiDrawCounts,oe=N._multiDrawCount,ln=Tt?q.get(Tt).bytesPerElement:1,Mi=_t.get(k).currentProgram.getUniforms();for(let $e=0;$e<oe;$e++)Mi.setValue(C,"_gl_DrawID",$e),ae.render(Ct[$e]/ln,bn[$e])}else if(N.isInstancedMesh)ae.renderInstances(ie,me,N.count);else if(B.isInstancedBufferGeometry){const Ct=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,bn=Math.min(B.instanceCount,Ct);ae.renderInstances(ie,me,bn)}else ae.render(ie,me)};function le(w,U,B){w.transparent===!0&&w.side===He&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,Ds(w,U,B),w.side=Yn,w.needsUpdate=!0,Ds(w,U,B),w.side=He):Ds(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),p=Zt.get(B),p.init(U),x.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const Et=st[pt];le(Et,B,N),k.add(Et)}else le(st,B,N),k.add(st)}),x.pop(),p=null,k},this.compileAsync=function(w,U,B=null){const k=this.compile(w,U,B);return new Promise(N=>{function st(){if(k.forEach(function(pt){_t.get(pt).currentProgram.isReady()&&k.delete(pt)}),k.size===0){N(w);return}setTimeout(st,10)}tt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let on=null;function wn(w){on&&on(w)}function Io(){Zn.stop()}function Do(){Zn.start()}const Zn=new Hc;Zn.setAnimationLoop(wn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(w){on=w,W.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},W.addEventListener("sessionstart",Io),W.addEventListener("sessionend",Do),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,I),p=Zt.get(w,x.length),p.init(U),x.push(p),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Lt),wt=this.localClippingEnabled,it=et.init(this.clippingPlanes,wt),m=vt.get(w,M.length),m.init(),M.push(m),W.enabled===!0&&W.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&Ir(st,U,-1/0,v.sortObjects)}Ir(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ot,gt),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Dt.addToRenderList(m,w),this.info.render.frame++,it===!0&&et.beginShadows();const B=p.state.shadowsArray;Mt.render(B,w,U),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let pt=0,Et=st.length;pt<Et;pt++){const Tt=st[pt];No(k,N,w,Tt)}j&&Dt.render(w);for(let pt=0,Et=st.length;pt<Et;pt++){const Tt=st[pt];Uo(m,w,Tt,Tt.viewport)}}else N.length>0&&No(k,N,w,U),j&&Dt.render(w),Uo(m,w,U);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,U),ue.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],it===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ir(w,U,B,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){k&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);const pt=Y.update(w),Et=w.material;Et.visible&&m.push(w,pt,Et,B,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const pt=Y.update(w),Et=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ft.copy(pt.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(Et)){const Tt=pt.groups;for(let Bt=0,Vt=Tt.length;Bt<Vt;Bt++){const At=Tt[Bt],ie=Et[At.materialIndex];ie&&ie.visible&&m.push(w,pt,ie,B,Ft.z,At)}}else Et.visible&&m.push(w,pt,Et,B,Ft.z,null)}}const st=w.children;for(let pt=0,Et=st.length;pt<Et;pt++)Ir(st[pt],U,B,k)}function Uo(w,U,B,k){const N=w.opaque,st=w.transmissive,pt=w.transparent;p.setupLightsView(B),it===!0&&et.setGlobalState(v.clippingPlanes,B),k&&at.viewport(L.copy(k)),N.length>0&&Is(N,U,B),st.length>0&&Is(st,U,B),pt.length>0&&Is(pt,U,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function No(w,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Je(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?pn:Un,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const st=p.state.transmissionRenderTarget[k.id],pt=k.viewport||L;st.setSize(pt.z,pt.w);const Et=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(V),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),j&&Dt.render(B);const Tt=v.toneMapping;v.toneMapping=Xn;const Bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),it===!0&&et.setGlobalState(v.clippingPlanes,k),Is(w,B,k),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let At=0,ie=U.length;At<ie;At++){const de=U[At],me=de.object,We=de.geometry,ae=de.material,Ct=de.group;if(ae.side===He&&me.layers.test(k.layers)){const bn=ae.side;ae.side=Ve,ae.needsUpdate=!0,Fo(me,B,k,We,ae,Ct),ae.side=bn,ae.needsUpdate=!0,Vt=!0}}Vt===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}v.setRenderTarget(Et),v.setClearColor(V,X),Bt!==void 0&&(k.viewport=Bt),v.toneMapping=Tt}function Is(w,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=w.length;N<st;N++){const pt=w[N],Et=pt.object,Tt=pt.geometry,Bt=k===null?pt.material:k,Vt=pt.group;Et.layers.test(B.layers)&&Fo(Et,U,B,Tt,Bt,Vt)}}function Fo(w,U,B,k,N,st){w.onBeforeRender(v,U,B,k,N,st),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,B,k,w,st),N.transparent===!0&&N.side===He&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,w,st),N.side=Yn,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,w,st),N.side=He):v.renderBufferDirect(B,U,k,N,w,st),w.onAfterRender(v,U,B,k,N,st)}function Ds(w,U,B){U.isScene!==!0&&(U=ne);const k=_t.get(w),N=p.state.lights,st=p.state.shadowsArray,pt=N.state.version,Et=bt.getParameters(w,N.state,st,U,B),Tt=bt.getProgramCacheKey(Et);let Bt=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",Ht),Bt=new Map,k.programs=Bt);let Vt=Bt.get(Tt);if(Vt!==void 0){if(k.currentProgram===Vt&&k.lightsStateVersion===pt)return zo(w,Et),Vt}else Et.uniforms=bt.getUniforms(w),w.onBeforeCompile(Et,v),Vt=bt.acquireProgram(Et,Tt),Bt.set(Tt,Vt),k.uniforms=Et.uniforms;const At=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=et.uniform),zo(w,Et),k.needsLights=hh(w),k.lightsStateVersion=pt,k.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Vt,k.uniformsList=null,Vt}function Oo(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=gr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function zo(w,U){const B=_t.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function lh(w,U,B,k,N){U.isScene!==!0&&(U=ne),E.resetTextureUnits();const st=U.fog,pt=k.isMeshStandardMaterial?U.environment:null,Et=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ts,Tt=(k.isMeshStandardMaterial?O:y).get(k.envMap||pt),Bt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Vt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!B.morphAttributes.position,ie=!!B.morphAttributes.normal,de=!!B.morphAttributes.color;let me=Xn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(me=v.toneMapping);const We=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=We!==void 0?We.length:0,Ct=_t.get(k),bn=p.state.lights;if(it===!0&&(wt===!0||w!==S)){const tn=w===S&&k.id===b;et.setState(k,w,tn)}let oe=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==bn.state.version||Ct.outputColorSpace!==Et||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Tt||k.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==et.numPlanes||Ct.numIntersection!==et.numIntersection)||Ct.vertexAlphas!==Bt||Ct.vertexTangents!==Vt||Ct.morphTargets!==At||Ct.morphNormals!==ie||Ct.morphColors!==de||Ct.toneMapping!==me||Ct.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Ct.__version=k.version);let ln=Ct.currentProgram;oe===!0&&(ln=Ds(k,U,N));let Mi=!1,$e=!1,rs=!1;const ge=ln.getUniforms(),mn=Ct.uniforms;if(at.useProgram(ln.program)&&(Mi=!0,$e=!0,rs=!0),k.id!==b&&(b=k.id,$e=!0),Mi||S!==w){at.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),cu(rt),hu(rt),ge.setValue(C,"projectionMatrix",rt)):ge.setValue(C,"projectionMatrix",w.projectionMatrix),ge.setValue(C,"viewMatrix",w.matrixWorldInverse);const Nn=ge.map.cameraPosition;Nn!==void 0&&Nn.setValue(C,zt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,$e=!0,rs=!0)}if(N.isSkinnedMesh){ge.setOptional(C,N,"bindMatrix"),ge.setOptional(C,N,"bindMatrixInverse");const tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ge.setValue(C,"boneTexture",tn.boneTexture,E))}N.isBatchedMesh&&(ge.setOptional(C,N,"batchingTexture"),ge.setValue(C,"batchingTexture",N._matricesTexture,E),ge.setOptional(C,N,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",N._indirectTexture,E),ge.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",N._colorsTexture,E));const as=B.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&Ot.update(N,B,ln),($e||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ge.setValue(C,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(mn.envMap.value=Tt,mn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),$e&&(ge.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&ch(mn,rs),st&&k.fog===!0&&ut.refreshFogUniforms(mn,st),ut.refreshMaterialUniforms(mn,k,H,K,p.state.transmissionRenderTarget[w.id]),gr.upload(C,Oo(Ct),mn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(gr.upload(C,Oo(Ct),mn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(C,"center",N.center),ge.setValue(C,"modelViewMatrix",N.modelViewMatrix),ge.setValue(C,"normalMatrix",N.normalMatrix),ge.setValue(C,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const tn=k.uniformsGroups;for(let Nn=0,Fn=tn.length;Nn<Fn;Nn++){const Bo=tn[Nn];D.update(Bo,ln),D.bind(Bo,ln)}}return ln}function ch(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function hh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,U,B){_t.get(w.texture).__webglTexture=U,_t.get(w.depthTexture).__webglTexture=B;const k=_t.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const B=_t.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,B=0){I=w,A=U,R=B;let k=!0,N=null,st=!1,pt=!1;if(w){const Tt=_t.get(w);if(Tt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Tt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Tt.__hasExternalTextures)E.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const At=w.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&_t.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);const Vt=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][B]:N=Vt[U],st=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[B]:N=Vt,L.copy(w.viewport),z.copy(w.scissor),F=w.scissorTest}else L.copy(St).multiplyScalar(H).floor(),z.copy(kt).multiplyScalar(H).floor(),F=re;if(at.bindFramebuffer(C.FRAMEBUFFER,N)&&k&&at.drawBuffers(w,N),at.viewport(L),at.scissor(z),at.setScissorTest(F),st){const Tt=_t.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,B)}else if(pt){const Tt=_t.get(w.texture),Bt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,B||0,Bt)}b=-1},this.readRenderTargetPixels=function(w,U,B,k,N,st,pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(Et=Et[pt]),Et){at.bindFramebuffer(C.FRAMEBUFFER,Et);try{const Tt=w.texture,Bt=Tt.format,Vt=Tt.type;if(!xt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&B>=0&&B<=w.height-N&&C.readPixels(U,B,k,N,Wt.convert(Bt),Wt.convert(Vt),st)}finally{const Tt=I!==null?_t.get(I).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,U,B,k,N,st,pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(Et=Et[pt]),Et){const Tt=w.texture,Bt=Tt.format,Vt=Tt.type;if(!xt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&B>=0&&B<=w.height-N){at.bindFramebuffer(C.FRAMEBUFFER,Et);const At=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(U,B,k,N,Wt.convert(Bt),Wt.convert(Vt),0);const ie=I!==null?_t.get(I).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,ie);const de=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await lu(C,de,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st),C.deleteBuffer(At),C.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,B=0){w.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(w.image.width*k),st=Math.floor(w.image.height*k),pt=U!==null?U.x:0,Et=U!==null?U.y:0;E.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,pt,Et,N,st),at.unbindTexture()},this.copyTextureToTexture=function(w,U,B=null,k=null,N=0){w.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let st,pt,Et,Tt,Bt,Vt,At,ie,de;const me=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(st=B.max.x-B.min.x,pt=B.max.y-B.min.y,Et=B.isBox3?B.max.z-B.min.z:1,Tt=B.min.x,Bt=B.min.y,Vt=B.isBox3?B.min.z:0):(st=me.width,pt=me.height,Et=me.depth||1,Tt=0,Bt=0,Vt=0),k!==null?(At=k.x,ie=k.y,de=k.z):(At=0,ie=0,de=0);const We=Wt.convert(U.format),ae=Wt.convert(U.type);let Ct;U.isData3DTexture?(E.setTexture3D(U,0),Ct=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Ct=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const bn=C.getParameter(C.UNPACK_ROW_LENGTH),oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ln=C.getParameter(C.UNPACK_SKIP_PIXELS),Mi=C.getParameter(C.UNPACK_SKIP_ROWS),$e=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Vt);const rs=w.isDataArrayTexture||w.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const mn=_t.get(w),as=_t.get(U),tn=_t.get(mn.__renderTarget),Nn=_t.get(as.__renderTarget);at.bindFramebuffer(C.READ_FRAMEBUFFER,tn.__webglFramebuffer),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<Et;Fn++)rs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,N,Vt+Fn),w.isDepthTexture?(ge&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,de+Fn),C.blitFramebuffer(Tt,Bt,st,pt,At,ie,st,pt,C.DEPTH_BUFFER_BIT,C.NEAREST)):ge?C.copyTexSubImage3D(Ct,N,At,ie,de+Fn,Tt,Bt,st,pt):C.copyTexSubImage2D(Ct,N,At,ie,de+Fn,Tt,Bt,st,pt);at.bindFramebuffer(C.READ_FRAMEBUFFER,null),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Ct,N,At,ie,de,st,pt,Et,We,ae,me.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Ct,N,At,ie,de,st,pt,Et,We,me.data):C.texSubImage3D(Ct,N,At,ie,de,st,pt,Et,We,ae,me):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,At,ie,st,pt,We,ae,me.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,At,ie,me.width,me.height,We,me.data):C.texSubImage2D(C.TEXTURE_2D,N,At,ie,st,pt,We,ae,me);C.pixelStorei(C.UNPACK_ROW_LENGTH,bn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,Mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&C.generateMipmap(Ct),at.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B=null,k=null,N=0){return w.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,B,k,N)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,at.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class So{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new So(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yc extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mm extends Ce{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,h=Ge,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends Ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ni=new se,zl=new se,er=[],Bl=new vi,ym=new se,us=new ht,ds=new xi;class Sm extends ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ym)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Bl.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Bl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),ds.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),zl.multiplyMatrices(n,Ni),us.matrixWorld=zl,us.raycast(t,er);for(let a=0,o=er.length;a<o;a++){const l=er[a];l.instanceId=r,l.object=this,e.push(l)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mm(new Float32Array(i*this.count),i,this.count,uo,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $c extends ns{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kl=new se,to=new _o,nr=new xi,ir=new T;class wm extends we{constructor(t=new xe,e=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;kl.copy(i).invert(),to.copy(t.ray).applyMatrix4(kl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ir.fromBufferAttribute(u,m),Hl(ir,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)ir.fromBufferAttribute(u,g),Hl(ir,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hl(s,t,e,n,i,r,a){const o=to.distanceSqToPoint(s);if(o<e){const l=new T;to.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class bm extends Ce{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Q:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],r=[],a=[],o=new T,l=new se;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ae(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ae(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wo extends Sn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Em extends wo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bo(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const sr=new T,oa=new bo,la=new bo,ca=new bo;class Cr extends Sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(sr.subVectors(i[0],i[1]).add(i[0]),c=sr);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(sr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),la.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),la.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oa.calc(l),la.calc(l),ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Tm(s,t){const e=1-s;return e*e*t}function Am(s,t){return 2*(1-s)*s*t}function Rm(s,t){return s*s*t}function Ms(s,t,e,n){return Tm(s,t)+Am(s,e)+Rm(s,n)}function Cm(s,t){const e=1-s;return e*e*e*t}function Pm(s,t){const e=1-s;return 3*e*e*s*t}function Lm(s,t){return 3*(1-s)*s*s*t}function Im(s,t){return s*s*s*t}function ys(s,t,e,n,i){return Cm(s,t)+Pm(s,e)+Lm(s,n)+Im(s,i)}class Kc extends Sn{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(t,i.x,r.x,a.x,o.x),ys(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dm extends Sn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(t,i.x,r.x,a.x,o.x),ys(t,i.y,r.y,a.y,o.y),ys(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zc extends Sn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Um extends Sn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jc extends Sn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ms(t,i.x,r.x,a.x),Ms(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nm extends Sn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ms(t,i.x,r.x,a.x),Ms(t,i.y,r.y,a.y),Ms(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jc extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Vl(o,l.x,c.x,h.x,u.x),Vl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Q().fromArray(i))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:Em,CatmullRomCurve3:Cr,CubicBezierCurve:Kc,CubicBezierCurve3:Dm,EllipseCurve:wo,LineCurve:Zc,LineCurve3:Um,QuadraticBezierCurve:jc,QuadraticBezierCurve3:Nm,SplineCurve:Jc});class Fm extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new eo[i.type]().fromJSON(i))}return this}}class wr extends Fm{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zc(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new jc(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Kc(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Jc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new wo(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pr extends xe{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ae(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new T,d=new Q,f=new T,g=new T,_=new T;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*i,v=Math.sin(x),P=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*P,a.push(u.x,u.y,u.z),d.x=M/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=l[3*A+0]*v,I=l[3*A+1],b=l[3*A+0]*P;c.push(R,I,b)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,P=v,A=v+t.length,R=v+t.length+1,I=v+1;r.push(P,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.points,t.segments,t.phiStart,t.phiLength)}}class br extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Nt extends xe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function M(){const v=new T,P=new T;let A=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const b=[],S=I/r,L=S*(e-t)+t;for(let z=0;z<=i;z++){const F=z/i,V=F*l+o,X=Math.sin(V),G=Math.cos(V);P.x=L*X,P.y=-S*n+m,P.z=L*G,u.push(P.x,P.y,P.z),v.set(X,R,G).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-S),b.push(g++)}_.push(b)}for(let I=0;I<i;I++)for(let b=0;b<r;b++){const S=_[b][I],L=_[b+1][I],z=_[b+1][I+1],F=_[b][I+1];(t>0||b!==0)&&(h.push(S,L,F),A+=3),(e>0||b!==r-1)&&(h.push(L,z,F),A+=3)}c.addGroup(p,A,0),p+=A}function x(v){const P=g,A=new Q,R=new T;let I=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=i;z++){const V=z/i*l+o,X=Math.cos(V),G=Math.sin(V);R.x=b*G,R.y=m*S,R.z=b*X,u.push(R.x,R.y,R.z),d.push(0,S,0),A.x=X*.5+.5,A.y=G*.5*S+.5,f.push(A.x,A.y),g++}for(let z=0;z<i;z++){const F=P+z,V=L+z;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ue extends Nt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ue(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new T,v=new T,P=new T;for(let A=0;A<e.length;A+=3)f(e[A+0],x),f(e[A+1],v),f(e[A+2],P),l(x,v,P,M)}function l(M,x,v,P){const A=P+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const b=M.clone().lerp(v,I/A),S=x.clone().lerp(v,I/A),L=A-I;for(let z=0;z<=L;z++)z===0&&I===A?R[I][z]=b:R[I][z]=b.clone().lerp(S,z/L)}for(let I=0;I<A;I++)for(let b=0;b<2*(A-I)-1;b++){const S=Math.floor(b/2);b%2===0?(d(R[I][S+1]),d(R[I+1][S]),d(R[I][S])):(d(R[I][S+1]),d(R[I+1][S+1]),d(R[I+1][S]))}}function c(M){const x=new T;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new T;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;a.push(v,1-P)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],v=a[M+2],P=a[M+4],A=Math.max(x,v,P),R=Math.min(x,v,P);A>.9&&R<.1&&(x<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new T,x=new T,v=new T,P=new T,A=new Q,R=new Q,I=new Q;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),I.set(a[S+4],a[S+5]),P.copy(M).add(x).add(v).divideScalar(3);const L=m(P);_(A,S+0,M,L),_(R,S+2,x,L),_(I,S+4,v,L)}}function _(M,x,v,P){P<0&&M.x===1&&(a[x]=M.x-1),v.x===0&&v.z===0&&(a[x]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.details)}}class Qc extends wr{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new wr().fromJSON(i))}return this}}const Om={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=th(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Vm(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return As(r,a,e,o,l,f,0),a}};function th(s,t,e,n,i){let r,a;if(i===Qm(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Gl(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Gl(r,s[r],s[r+1],a);return a&&Lr(a,a.next)&&(Cs(a),a=a.next),a}function gi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Lr(e,e.next)||ve(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function As(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Ym(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Bm(s,n,i,r):zm(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Cs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=km(gi(s),t,e),As(s,t,e,n,i,r,2)):a===2&&Hm(s,t,e,n,i,r):As(gi(s),t,e,n,i,r,1);break}}}function zm(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ki(i,o,r,l,a,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bm(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ve(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=no(f,g,t,e,n),M=no(_,m,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ki(o,h,l,u,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&ki(o,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ki(o,h,l,u,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&ki(o,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function km(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Lr(i,r)&&eh(i,n,n.next,r)&&Rs(i,r)&&Rs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cs(n),Cs(n.next),n=s=r),n=n.next}while(n!==s);return gi(n)}function Hm(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zm(a,o)){let l=nh(a,o);a=gi(a,a.next),l=gi(l,l.next),As(a,t,e,n,i,r,0),As(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Vm(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=th(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Km(c));for(i.sort(Gm),r=0;r<i.length;r++)e=Wm(i[r],e);return e}function Gm(s,t){return s.x-t.x}function Wm(s,t){const e=Xm(s,t);if(!e)return t;const n=nh(e,s);return gi(n,n.next),gi(e,e.next)}function Xm(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&ki(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Rs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&qm(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function qm(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function Ym(s,t,e,n){let i=s;do i.z===0&&(i.z=no(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$m(i)}function $m(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function no(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Km(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ki(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Zm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!jm(s,t)&&(Rs(s,t)&&Rs(t,s)&&Jm(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||Lr(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Lr(s,t){return s.x===t.x&&s.y===t.y}function eh(s,t,e,n){const i=ar(ve(s,t,e)),r=ar(ve(s,t,n)),a=ar(ve(e,n,s)),o=ar(ve(e,n,t));return!!(i!==r&&a!==o||i===0&&rr(s,e,t)||r===0&&rr(s,n,t)||a===0&&rr(e,s,n)||o===0&&rr(e,t,n))}function rr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ar(s){return s>0?1:s<0?-1:0}function jm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&eh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Rs(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function Jm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function nh(s,t){const e=new io(s.i,s.x,s.y),n=new io(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gl(s,t,e,n){const i=new io(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function io(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qm(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Ss{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ss.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Wl(t),Xl(n,t);let a=t.length;e.forEach(Wl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Xl(n,e[l]);const o=Om.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Wl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Xl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class To extends xe{constructor(t=new Qc([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:tg;let x,v=!1,P,A,R,I;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,P=p.computeFrenetFrames(h,!1),A=new T,R=new T,I=new T),d||(m=0,f=0,g=0,_=0);const b=o.extractPoints(c);let S=b.shape;const L=b.holes;if(!Ss.isClockWise(S)){S=S.reverse();for(let j=0,nt=L.length;j<nt;j++){const C=L[j];Ss.isClockWise(C)&&(L[j]=C.reverse())}}const F=Ss.triangulateShape(S,L),V=S;for(let j=0,nt=L.length;j<nt;j++){const C=L[j];S=S.concat(C)}function X(j,nt,C){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(nt,C)}const G=S.length,K=F.length;function H(j,nt,C){let Rt,tt,xt;const at=j.x-nt.x,It=j.y-nt.y,_t=C.x-j.x,E=C.y-j.y,y=at*at+It*It,O=at*E-It*_t;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(y),J=Math.sqrt(_t*_t+E*E),Y=nt.x-It/q,bt=nt.y+at/q,ut=C.x-E/J,vt=C.y+_t/J,Zt=((ut-Y)*E-(vt-bt)*_t)/(at*E-It*_t);Rt=Y+at*Zt-j.x,tt=bt+It*Zt-j.y;const et=Rt*Rt+tt*tt;if(et<=2)return new Q(Rt,tt);xt=Math.sqrt(et/2)}else{let q=!1;at>Number.EPSILON?_t>Number.EPSILON&&(q=!0):at<-Number.EPSILON?_t<-Number.EPSILON&&(q=!0):Math.sign(It)===Math.sign(E)&&(q=!0),q?(Rt=-It,tt=at,xt=Math.sqrt(y)):(Rt=at,tt=It,xt=Math.sqrt(y/2))}return new Q(Rt/xt,tt/xt)}const ot=[];for(let j=0,nt=V.length,C=nt-1,Rt=j+1;j<nt;j++,C++,Rt++)C===nt&&(C=0),Rt===nt&&(Rt=0),ot[j]=H(V[j],V[C],V[Rt]);const gt=[];let St,kt=ot.concat();for(let j=0,nt=L.length;j<nt;j++){const C=L[j];St=[];for(let Rt=0,tt=C.length,xt=tt-1,at=Rt+1;Rt<tt;Rt++,xt++,at++)xt===tt&&(xt=0),at===tt&&(at=0),St[Rt]=H(C[Rt],C[xt],C[at]);gt.push(St),kt=kt.concat(St)}for(let j=0;j<m;j++){const nt=j/m,C=f*Math.cos(nt*Math.PI/2),Rt=g*Math.sin(nt*Math.PI/2)+_;for(let tt=0,xt=V.length;tt<xt;tt++){const at=X(V[tt],ot[tt],Rt);rt(at.x,at.y,-C)}for(let tt=0,xt=L.length;tt<xt;tt++){const at=L[tt];St=gt[tt];for(let It=0,_t=at.length;It<_t;It++){const E=X(at[It],St[It],Rt);rt(E.x,E.y,-C)}}}const re=g+_;for(let j=0;j<G;j++){const nt=d?X(S[j],kt[j],re):S[j];v?(R.copy(P.normals[0]).multiplyScalar(nt.x),A.copy(P.binormals[0]).multiplyScalar(nt.y),I.copy(x[0]).add(R).add(A),rt(I.x,I.y,I.z)):rt(nt.x,nt.y,0)}for(let j=1;j<=h;j++)for(let nt=0;nt<G;nt++){const C=d?X(S[nt],kt[nt],re):S[nt];v?(R.copy(P.normals[j]).multiplyScalar(C.x),A.copy(P.binormals[j]).multiplyScalar(C.y),I.copy(x[j]).add(R).add(A),rt(I.x,I.y,I.z)):rt(C.x,C.y,u/h*j)}for(let j=m-1;j>=0;j--){const nt=j/m,C=f*Math.cos(nt*Math.PI/2),Rt=g*Math.sin(nt*Math.PI/2)+_;for(let tt=0,xt=V.length;tt<xt;tt++){const at=X(V[tt],ot[tt],Rt);rt(at.x,at.y,u+C)}for(let tt=0,xt=L.length;tt<xt;tt++){const at=L[tt];St=gt[tt];for(let It=0,_t=at.length;It<_t;It++){const E=X(at[It],St[It],Rt);v?rt(E.x,E.y+x[h-1].y,x[h-1].x+C):rt(E.x,E.y,u+C)}}}$(),it();function $(){const j=i.length/3;if(d){let nt=0,C=G*nt;for(let Rt=0;Rt<K;Rt++){const tt=F[Rt];Lt(tt[2]+C,tt[1]+C,tt[0]+C)}nt=h+m*2,C=G*nt;for(let Rt=0;Rt<K;Rt++){const tt=F[Rt];Lt(tt[0]+C,tt[1]+C,tt[2]+C)}}else{for(let nt=0;nt<K;nt++){const C=F[nt];Lt(C[2],C[1],C[0])}for(let nt=0;nt<K;nt++){const C=F[nt];Lt(C[0]+G*h,C[1]+G*h,C[2]+G*h)}}n.addGroup(j,i.length/3-j,0)}function it(){const j=i.length/3;let nt=0;wt(V,nt),nt+=V.length;for(let C=0,Rt=L.length;C<Rt;C++){const tt=L[C];wt(tt,nt),nt+=tt.length}n.addGroup(j,i.length/3-j,1)}function wt(j,nt){let C=j.length;for(;--C>=0;){const Rt=C;let tt=C-1;tt<0&&(tt=j.length-1);for(let xt=0,at=h+m*2;xt<at;xt++){const It=G*xt,_t=G*(xt+1),E=nt+Rt+It,y=nt+tt+It,O=nt+tt+_t,q=nt+Rt+_t;zt(E,y,O,q)}}}function rt(j,nt,C){l.push(j),l.push(nt),l.push(C)}function Lt(j,nt,C){Ft(j),Ft(nt),Ft(C);const Rt=i.length/3,tt=M.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);ne(tt[0]),ne(tt[1]),ne(tt[2])}function zt(j,nt,C,Rt){Ft(j),Ft(nt),Ft(Rt),Ft(nt),Ft(C),Ft(Rt);const tt=i.length/3,xt=M.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);ne(xt[0]),ne(xt[1]),ne(xt[3]),ne(xt[1]),ne(xt[2]),ne(xt[3])}function Ft(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function ne(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return eg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new eo[i.type]().fromJSON(i)),new To(n,t.options)}}const tg={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(d,1-g),new Q(_,1-p)]:[new Q(o,1-l),new Q(h,1-u),new Q(f,1-g),new Q(m,1-p)]}};function eg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ps extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ps(t.radius,t.detail)}}class Ao extends xe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new T,g=new Q;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,v=M+n+1,P=M+n+2,A=M+1;o.push(x,v,A),o.push(v,P,A)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $t extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],P=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&f.push(x,v,A),(p!==n-1||l<Math.PI)&&f.push(v,P,A)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _e extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ng extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Mn extends ns{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ql={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ig{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const sg=new ig;class Ro{constructor(t){this.manager=t!==void 0?t:sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";class rg extends Ro{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ql.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ts("img");function l(){h(),ql.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ag extends Ro{constructor(t){super(t)}load(t,e,n,i){const r=new Ce,a=new rg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Co extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ih extends Co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ha=new se,Yl=new T,$l=new T;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kl=new se,fs=new T,ua=new T;class og extends sh{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(fs),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-fs.x,-fs.y,-fs.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl)}}class qn extends Co{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new og}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lg extends sh{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Er extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zl(){return performance.now()}const jl=new se;class cg{constructor(t,e,n=0,i=1/0){this.ray=new _o(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,n=[]){return so(t,this,n,e),n.sort(Jl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)so(t[i],this,n,e);return n.sort(Jl),n}}function Jl(s,t){return s.distance-t.distance}function so(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)so(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);const Kt={worldSize:280,terrainSegments:256,player:{eye:1.72,speed:7.4,sprint:12.2,crouch:3.6,accel:9,gravity:22,jump:8.5,mouse:.0018,radius:.5},weapon:{muzzle:92,gravity:9.2,damage:85},viewmodel:{fov:52,near:.01,far:8,scale:.82,sway:.055,swayMax:.085},hunt:{flights:[{label:"Scavengers on the slope",species:["emberkin","emberkin"]},{label:"Forge-hot harrier",species:["cinderwyrm"]},{label:"The ridge's landlord",species:["ashwrought"]},{label:"They hunt in threes",species:["rustwing","rustwing","rustwing"]},{label:"Fumarole brood",species:["sulfurmaw","emberkin"]},{label:"Something is stalking you",species:["pale_stalker"]},{label:"Walking siege",species:["basalt_tyrant","cinderwyrm"]}],flightGap:6,corpseLinger:9,downed:4.6,mortarRadius:9,cloudLife:7,cloudRadius:7},quality:{targetFps:60,particleAsh:900,particleEmber:220,renderScale:{low:.55,medium:.78,high:1,cinematic:1}}},_r=["albedo","normal","roughness","metallic","ao","emissive"],hg=new Set(["albedo","emissive"]),ug=["dragon_scales","dragon_wing","terrain_rock","weapon_metal","weapon_wood","leather_glove","lava","obsidian","bone","burnt_bark"];function dg(s,t){return`./assets/textures/pbr/${s}_${t}.webp`}function Ql(s,t){return s.wrapS=s.wrapT=yr,s.anisotropy=8,s.colorSpace=t?ke:Ln,s.needsUpdate=!0,s}class fg{constructor(){this.loader=new ag,this.packs=new Map,this._pending=new Map,this._progress=null,this._loaded=0,this._total=0}onProgress(t){this._progress=t}_load(t){return new Promise((e,n)=>{this.loader.load(t,e,void 0,n)})}has(t){return this.packs.has(t)}pack(t,e={}){const n=this.packs.get(t);if(!n)throw new Error(`texture pack not loaded: ${t}`);if(!e.clone)return n;const i={};for(const r of _r){const a=n[r].clone();a.needsUpdate=!0,i[r]=a}return i}async ensure(t){if(this.packs.has(t))return this.packs.get(t);if(this._pending.has(t))return this._pending.get(t);this._total+=_r.length;const e=Promise.all(_r.map(async n=>{const i=Ql(await this._load(dg(t,n)),hg.has(n));return this._loaded++,this._progress?.(this._loaded,this._total),[n,i]})).then(n=>{const i=Object.fromEntries(n);return this.packs.set(t,i),this._pending.delete(t),i});return this._pending.set(t,e),e}prefetch(t){for(const e of t)this.ensure(e).catch(()=>{})}async loadCore(){return await Promise.all(ug.map(t=>this.ensure(t))),this.sky=Ql(await this._load("./assets/textures/pbr/sky_ash_storm.webp"),!0),this.sky.wrapS=this.sky.wrapT=Wn,this}}async function pg(s){const t=new fg;return s&&t.onProgress(s),t.loadCore()}function ze(s,t,e=t){for(const n of _r)s[n]?.repeat.set(t,e);return s}function ye(s,t={}){return new Mn({map:s.albedo,normalMap:s.normal,roughnessMap:s.roughness,metalnessMap:s.metallic,aoMap:s.ao,emissiveMap:s.emissive,emissive:t.emissive??new Pt(0),emissiveIntensity:t.emissiveIntensity??1,metalness:t.metalness??.2,roughness:t.roughness??.6,envMapIntensity:t.envMapIntensity??.55,...t})}const jt={DIVE_FIRE:"dive_fire",STRAFE_RUN:"strafe_run",HOVER_BARRAGE:"hover_barrage",LAVA_MORTAR:"lava_mortar",AMBUSH_LUNGE:"ambush_lunge",VENOM_SPRAY:"venom_spray",TAIL_SWEEP:"tail_sweep"},vr={ashwrought:{id:"ashwrought",name:"Ashwrought",epithet:"Obsidian Tyrant",tier:2,bounty:400,codex:"The ridge's landlord. Holds a circling patrol until you enter its cone, then commits to long dive-fire runs and refuses to break off until badly wounded.",build:{scale:8.2,neck:1,tailSegments:5,horns:2,hornLength:.7,spikes:!0,wingSpan:1,bodyGirth:1,headSize:1,snout:"wedge",hornStyle:"swept",crest:"crown",wingStyle:"sail",tailStyle:"barbed",hide:"plates",mane:!0},look:{pack:"dragon_scales",scaleRepeat:[3.5,2.2],emissive:[1.15,.18,.03],emissiveBase:.45,eye:16722432,glow:16730642,glowIntensity:18,metalness:.22,roughness:.42,wingTint:16777215},stats:{hp:1100,flySpeed:22,diveSpeed:38,turnRate:3.4,patrolRadius:22,patrolHeight:36,spotRange:140,attackRange:42,damage:18,armor:.12},mind:{aggression:.72,patience:1.15,courage:.8,erratic:.15,territorial:.9,fleeAt:.12,attacks:[jt.DIVE_FIRE,jt.DIVE_FIRE,jt.TAIL_SWEEP],voice:{roar:90,breath:60}},lines:{idle:"Ashwrought holds the ash ceiling.",spot:"Spotted. Ashwrought banks toward the ridge.",attack:"Dive-fire incoming. Break the cone.",pain:"The tyrant recoils — molten plates split.",flee:"Ashwrought climbs out of range.",dead:"Ashwrought falls. The ridge goes quiet."}},cinderwyrm:{id:"cinderwyrm",name:"Cinderwyrm",epithet:"Forge-Hot Harrier",tier:2,bounty:350,codex:"Runs at forge temperature and never stops moving. Fast, reckless strafing passes with almost no wind-up — the hardest silhouette to lead, but thin-skinned.",build:{scale:5.6,neck:1.15,tailSegments:6,horns:4,hornLength:.45,spikes:!0,wingSpan:1.25,bodyGirth:.72,headSize:.85,snout:"short",hornStyle:"fan",crest:"keel",wingStyle:"racer",tailStyle:"whip",hide:"pits",vents:!0},look:{pack:"scales_cinder",scaleRepeat:[2.4,1.7],emissive:[1.4,.35,.05],emissiveBase:.4,eye:16765040,glow:16745504,glowIntensity:17,metalness:.14,roughness:.36,wingTint:16756874},stats:{hp:620,flySpeed:38,diveSpeed:54,turnRate:5.6,patrolRadius:40,patrolHeight:30,spotRange:170,attackRange:52,damage:12,armor:0},mind:{aggression:.95,patience:.35,courage:.95,erratic:.7,territorial:.3,fleeAt:0,attacks:[jt.STRAFE_RUN,jt.STRAFE_RUN,jt.DIVE_FIRE],voice:{roar:150,breath:110}},lines:{idle:"A Cinderwyrm burns a fast circuit overhead.",spot:"It saw you first. Cinderwyrm is already turning in.",attack:"Strafing run — it will not slow down.",pain:"Cinderwyrm shrieks and rolls off the line.",flee:"It refuses to disengage.",dead:"The Cinderwyrm goes dark mid-air."}},basalt_tyrant:{id:"basalt_tyrant",name:"Basalt Tyrant",epithet:"Walking Siege",tier:3,bounty:900,codex:"Armored in cooled columnar rock. Too heavy for dive attacks, so it hovers at distance and lobs lava mortars, then lands to shake the ridge apart. Bolts glance off everything but the skull.",build:{scale:12.5,neck:.78,tailSegments:4,horns:6,hornLength:.85,spikes:!0,wingSpan:.82,bodyGirth:1.5,headSize:1.25,snout:"ram",hornStyle:"ram",crest:"none",wingStyle:"stone",tailStyle:"club",hide:"columnar"},look:{pack:"scales_basalt",scaleRepeat:[2.6,1.8],emissive:[.9,.14,.02],emissiveBase:.45,eye:16738832,glow:16726536,glowIntensity:14,metalness:.06,roughness:.85,wingTint:10132122},stats:{hp:2600,flySpeed:12,diveSpeed:18,turnRate:1.5,patrolRadius:16,patrolHeight:30,spotRange:120,attackRange:70,damage:26,armor:.55},mind:{aggression:.55,patience:2.4,courage:1,erratic:.05,territorial:1,fleeAt:0,attacks:[jt.LAVA_MORTAR,jt.LAVA_MORTAR,jt.HOVER_BARRAGE,jt.TAIL_SWEEP],voice:{roar:52,breath:40}},lines:{idle:"Something very heavy is circling low.",spot:"The Basalt Tyrant has your range.",attack:"Mortar arc — move, do not backpedal.",pain:"Plates crack. Most of that bolt went nowhere.",flee:"It does not retreat.",dead:"The Tyrant drops like a collapsing cliff."}},emberkin:{id:"emberkin",name:"Emberkin",epithet:"Carrion Scavenger",tier:1,bounty:120,codex:"Half-grown and cowardly. Circles wide, snatches at you only when your weapon is empty, and bolts for the ash column the moment it is hurt. Hunts in loose pairs.",build:{scale:3.4,neck:1.3,tailSegments:6,horns:2,hornLength:.3,spikes:!1,wingSpan:1.15,bodyGirth:.6,headSize:.8,snout:"short",hornStyle:"nub",crest:"none",wingStyle:"tattered",tailStyle:"whip",hide:"ribs"},look:{pack:"scales_ember",scaleRepeat:[2.8,2],emissive:[.5,.16,.03],emissiveBase:.3,eye:16760896,glow:13660192,glowIntensity:6,metalness:.6,roughness:.48,wingTint:13081194},stats:{hp:240,flySpeed:30,diveSpeed:36,turnRate:6,patrolRadius:34,patrolHeight:22,spotRange:110,attackRange:26,damage:7,armor:0},mind:{aggression:.28,patience:.6,courage:.2,erratic:.55,territorial:.1,fleeAt:.55,opportunist:!0,attacks:[jt.AMBUSH_LUNGE,jt.STRAFE_RUN],voice:{roar:220,breath:170}},lines:{idle:"Emberkin keep their distance, watching.",spot:"An Emberkin is sizing you up.",attack:"It darts in while you are dry.",pain:"The scavenger screams and breaks away.",flee:"Emberkin flees for the ash column.",dead:"The scavenger tumbles into the rocks."}},rustwing:{id:"rustwing",name:"Rustwing",epithet:"Pack Hunter",tier:2,bounty:420,codex:"Cold-blooded and never alone. A lone Rustwing keeps its distance and looks almost tame; every packmate that commits to the hunt makes the rest of them braver, and three of them will run you off the ridge. Kill one and the survivors lose their nerve.",build:{scale:4.6,neck:1.2,tailSegments:6,horns:3,hornLength:.4,spikes:!0,wingSpan:1.35,bodyGirth:.65,headSize:.85,snout:"hook",hornStyle:"spike",crest:"frill",wingStyle:"sail",tailStyle:"barbed",hide:"plates"},look:{pack:"scales_kin",scaleRepeat:[2.6,1.8],emissive:[.62,.2,.07],emissiveBase:.35,eye:16767392,glow:9067066,glowIntensity:4,metalness:.5,roughness:.62,wingTint:10134701},stats:{hp:380,flySpeed:34,diveSpeed:46,turnRate:5.2,patrolRadius:44,patrolHeight:24,spotRange:160,attackRange:30,damage:11,armor:.05},mind:{aggression:.35,patience:.8,courage:.45,erratic:.4,territorial:.2,fleeAt:.3,packMinded:.2,attacks:[jt.STRAFE_RUN,jt.AMBUSH_LUNGE,jt.TAIL_SWEEP],voice:{roar:170,breath:140}},lines:{idle:"Rustwings circle wide, waiting for each other.",spot:"One Rustwing peels off. The others are watching it.",attack:"The pack commits together — do not let them surround you.",pain:"It screeches, and the whole pack answers.",flee:"Without its pack the Rustwing loses its nerve.",dead:"A Rustwing drops. The rest hesitate."}},pale_stalker:{id:"pale_stalker",name:"Pale Stalker",epithet:"Silent Ambusher",tier:3,bounty:750,codex:"Ash-blind hunter that stops flapping to fall silent. It will shadow you for a long time without attacking, then close the distance in one lunge from behind cover.",build:{scale:7,neck:1.25,tailSegments:7,horns:4,hornLength:.95,spikes:!0,wingSpan:1.1,bodyGirth:.8,headSize:.95,snout:"disc",hornStyle:"antler",crest:"none",wingStyle:"silent",tailStyle:"fin",hide:"smooth"},look:{pack:"scales_pale",scaleRepeat:[1.3,.9],emissive:[.18,.22,.3],emissiveBase:.22,eye:10477823,glow:6982320,glowIntensity:5,metalness:.05,roughness:.72,wingTint:14209734},stats:{hp:900,flySpeed:26,diveSpeed:62,turnRate:4.4,patrolRadius:52,patrolHeight:42,spotRange:190,attackRange:34,damage:30,armor:.18},mind:{aggression:.62,patience:3.2,courage:.7,erratic:.2,territorial:.4,fleeAt:.2,stalker:!0,attacks:[jt.AMBUSH_LUNGE,jt.AMBUSH_LUNGE,jt.DIVE_FIRE],voice:{roar:70,breath:300}},lines:{idle:"Something pale is keeping pace with you in the ash.",spot:"It knows you saw it. It stops flapping.",attack:"Lunge — it came in silent.",pain:"The Stalker hisses and fades back into the ash.",flee:"It withdraws to stalk again.",dead:"The Pale Stalker folds up and drops."}},sulfurmaw:{id:"sulfurmaw",name:"Sulfurmaw",epithet:"Fumarole Brood",tier:2,bounty:480,codex:"Nests in sulfur vents. Instead of fire it sprays a caustic aerosol that hangs in the air and keeps burning after the pass, so its favorite tactic is to fence you into your own cover.",build:{scale:6.4,neck:1.4,tailSegments:5,horns:2,hornLength:.55,spikes:!1,wingSpan:.95,bodyGirth:.95,headSize:1.1,snout:"sack",hornStyle:"swept",crest:"frill",wingStyle:"stone",tailStyle:"fin",hide:"pits",jowls:!0,vents:!0},look:{pack:"scales_sulfur",scaleRepeat:[2.4,1.7],emissive:[.5,.95,.1],emissiveBase:.5,eye:14221120,glow:11197728,glowIntensity:12,metalness:.1,roughness:.38,wingTint:11911290},stats:{hp:1e3,flySpeed:20,diveSpeed:30,turnRate:2.8,patrolRadius:26,patrolHeight:26,spotRange:130,attackRange:40,damage:14,armor:.1},mind:{aggression:.6,patience:1.6,courage:.75,erratic:.25,territorial:.7,fleeAt:.15,breath:"venom",attacks:[jt.VENOM_SPRAY,jt.VENOM_SPRAY,jt.HOVER_BARRAGE],voice:{roar:110,breath:220}},lines:{idle:"A Sulfurmaw drifts over the vents.",spot:"Sulfurmaw turns. Watch the wind.",attack:"Caustic spray — the cloud lingers, keep moving.",pain:"It gags and spits bile off-target.",flee:"Sulfurmaw pulls back over the vents.",dead:"The Sulfurmaw drops, venting steam."}}},mg=["emberkin","cinderwyrm","ashwrought","rustwing","sulfurmaw","pale_stalker","basalt_tyrant"],gg=["scales_cinder","scales_basalt","scales_ember","scales_pale","scales_sulfur","scales_kin"];function or(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=tc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=tc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function tc(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ye(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function Hi(s,t){let e=Math.sin(s*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Po(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=Hi(e,n),c=Hi(e+1,n),h=Hi(e,n+1),u=Hi(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function Ji(s,t,e=5){let n=0,i=.5,r=1;for(let a=0;a<e;a++)n+=i*Po(s*r,t*r),r*=2.03,i*=.5;return n}function _g(s,t,e){const n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function vg(s,t,e){const n=Math.floor(s),i=Math.floor(t),r=Math.floor(e),a=s-n,o=t-i,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=(x,v,P)=>_g(n+x,i+v,r+P),f=d(0,0,0)+(d(1,0,0)-d(0,0,0))*c,g=d(0,1,0)+(d(1,1,0)-d(0,1,0))*c,_=d(0,0,1)+(d(1,0,1)-d(0,0,1))*c,m=d(0,1,1)+(d(1,1,1)-d(0,1,1))*c,p=f+(g-f)*h,M=_+(m-_)*h;return p+(M-p)*u}function xg(s,t,e,n=4){let i=0,r=.5,a=1;for(let o=0;o<n;o++)i+=r*vg(s*a,t*a,e*a),a*=2.03,r*=.5;return i}function Mg(s,t){return 1-Math.abs(Ji(s*.55,t*.55,4)*2-1)}function ec(s,t,e=5,n=2.07,i=.5){let r=0,a=.5,o=1,l=1;for(let c=0;c<e;c++){const h=(1-Math.abs(Po(s*o,t*o)*2-1))**2;r+=a*h*l,l=Math.min(1,h*2.2),o*=n,a*=i}return r}const Xe=new Q(2,46);function nn(s,{pos:t=[0,0,0],rot:e=[0,0,0],scale:n=[1,1,1]}={}){const i=s.clone();return i.applyMatrix4(new se().compose(new T(...t),new $n().setFromEuler(new Qe(...e)),new T(...n))),i}function yg(s,t,e){const n=s.attributes.position;for(let i=0;i<n.count;i++){const r=n.getX(i),a=n.getY(i),o=n.getZ(i),l=1-t*Ji(r*1.7+e,o*1.7-e,3);n.setXYZ(i,r*l,a*(1-t*Ji(o*1.4-e,a*1.4+e,2)),o*l)}return s.computeVertexNormals(),s}function nc(s,t){const e=Ji(s*.0125,t*.0125,3),n=ec(s*.0115+3.1,t*.0115-5.2,6),i=ec(s*.055-7.4,t*.055+2.8,3)*4.6,r=Math.exp(-((Math.hypot(s,t+18)-42)**2)/380)*3.2;return e*10+n*28+i-r-3.2}function Sg(s,t){return Mg(s*.17,t*.163)**2*2.7+Ji(s*.46,t*.46,2)*1.15}function da(s,t,e,n=11){const i=[];for(let o=0;o<n;o++){const l=1-(2*o+1)/n,c=Math.sqrt(Math.max(0,1-l*l)),h=o*2.399963+Hi(e+o,7.3)*1.4;i.push({x:Math.cos(h)*c,y:l,z:Math.sin(h)*c,d:.6+Hi(e*1.7,o+3)*.52})}const r=new Ps(1,s),a=r.attributes.position;for(let o=0;o<a.count;o++){const l=a.getX(o),c=a.getY(o),h=a.getZ(o);let u=1.32;for(const g of i){const _=l*g.x+c*g.y+h*g.z;_>.16&&(u=Math.min(u,g.d/_))}const d=xg(l*t*4-e,c*t*4+9,h*t*4+e,2),f=u*(.94+d*.16);a.setXYZ(o,l*f,c*f,h*f)}return r.computeVertexNormals(),r.computeBoundingSphere(),r}function wg(s,t){const e=Math.cos(s),n=Math.sin(s);let i=0,r=0,a=1,o=1.7;for(let l=0;l<4;l++)i+=a*Po(e*o+t,n*o+t),r+=a,a*=.52,o*=2.13;return Math.pow(i/r,1.7)}class bg{constructor(t,e,n){this.scene=t,this.renderer=n,this.size=Kt.worldSize,this.segments=Kt.terrainSegments,this.heights=new Float32Array((this.segments+1)*(this.segments+1)),this.group=new Jt,this.props=[],this.lavaMats=[],this.blockers=[],t.add(this.group),this._buildSky(e),this._buildTerrain(e),this._buildLighting(),this._buildVolcano(e),this._buildHorizon(e),this._buildRocks(e),this._buildSpires(e),this._buildDeadTrees(e),this._buildBonePiles(e),this._buildRuins(e),this._buildLavaPools(e),this._buildCamp(e),this._buildAshColumns()}heightAt(t,e){const n=this.size,i=this.segments,r=lt.clamp((t+n/2)/n,0,1),a=lt.clamp((e+n/2)/n,0,1),o=r*i,l=a*i,c=Math.floor(o),h=Math.floor(l),u=Math.min(i,c+1),d=Math.min(i,h+1),f=o-c,g=l-h,_=this.heights[h*(i+1)+c],m=this.heights[h*(i+1)+u],p=this.heights[d*(i+1)+c],M=this.heights[d*(i+1)+u];return lt.lerp(_*(1-f)+m*f,p*(1-f)+M*f,g)}slopeAt(t,e){const i=this.heightAt(t+2.5,e)-this.heightAt(t-2.5,e),r=this.heightAt(t,e+2.5)-this.heightAt(t,e-2.5);return Math.hypot(i,r)/(2*2.5)}_scatter(t,{minR:e=20,maxR:n=130,slopeMax:i=1.2,band:r=[-1/0,1/0],clear:a=18,spacing:o=0}={}){const l=[];let c=0;for(;l.length<t&&c<t*40;){c++;const h=Math.random()*Math.PI*2,u=e+Math.random()*(n-e),d=Math.cos(h)*u,f=Math.sin(h)*u-8;if(Math.hypot(d-Xe.x,f-Xe.y)<a)continue;const g=this.heightAt(d,f);g<r[0]||g>r[1]||this.slopeAt(d,f)>i||o&&l.some(_=>Math.hypot(_.x-d,_.z-f)<o)||l.push({x:d,y:g,z:f})}return l}_block(t,e,n){this.blockers.push({x:t,z:e,r:n})}resolveCollision(t,e=.45){let n=!1;for(let i=0;i<6;i++){let r=0,a=0,o=0,l=0,c=1,h=0;for(const d of this.blockers){const f=t.x-d.x,g=t.z-d.z,_=d.r+e;if(Math.abs(f)>_||Math.abs(g)>_)continue;const m=Math.hypot(f,g);if(m>=_)continue;o++;const p=_-m,M=m<1e-4?1:f/m,x=m<1e-4?0:g/m;r+=M*p,a+=x*p,p>l&&(l=p,c=M*p,h=x*p)}if(!o)break;n=!0,Math.hypot(r,a)<l*.6&&(r=c,a=h);const u=Math.hypot(r,a)||1;t.x+=r+r/u*.01,t.z+=a+a/u*.01}return n}_instance(t,e,n,i){const r=new Sm(t,e,n.length);r.castShadow=!0,r.receiveShadow=!0;const a=new we;return n.forEach((o,l)=>{const c=i(a,o,l);c>0&&this._block(a.position.x,a.position.z,c),a.updateMatrix(),r.setMatrixAt(l,a.matrix)}),r.instanceMatrix.needsUpdate=!0,this.group.add(r),this.props.push(r),r}_buildSky(t){const e=new $t(440,40,24),n=new an({map:t.sky,side:Ve,fog:!1,depthWrite:!1});if(this.sky=new ht(e,n),this.group.add(this.sky),this.renderer){const i=new Ja(this.renderer);i.compileEquirectangularShader();const r=t.sky.clone();r.mapping=Mr,r.needsUpdate=!0,this.envMap=i.fromEquirectangular(r).texture,this.scene.environment=this.envMap,i.dispose(),r.dispose()}}_buildTerrain(t){const e=this.segments,n=new is(this.size,this.size,e,e);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3),a=n.attributes.uv,o=nc(Xe.x,Xe.y);for(let h=0;h<i.count;h++){const u=i.getX(h),d=i.getZ(h),f=lt.smoothstep(Math.hypot(u-Xe.x,d-Xe.y),11,32),g=lt.lerp(o,nc(u,d),f)+Sg(u,d);i.setY(h,g);const _=Math.round((u+this.size/2)/this.size*e),m=Math.round((d+this.size/2)/this.size*e);this.heights[m*(e+1)+_]=g,a.setXY(h,u*.045,d*.045);const p=lt.smoothstep(8.5,3.5,g),M=lt.smoothstep(18,29,g);r[h*3]=1-M*.1,r[h*3+1]=1-p*.55-M*.04,r[h*3+2]=1-p*.7-M*.02}n.setAttribute("color",new Ye(r,3)),n.computeVertexNormals();const l=ze(t.pack("terrain_rock",{clone:!0}),4,4),c=ye(l,{vertexColors:!0,metalness:.04,roughness:.8,emissive:new Pt(1,.18,.03),emissiveIntensity:.55,normalScale:new Q(1.5,1.5),envMapIntensity:.35});c.onBeforeCompile=h=>{h.uniforms.uTime={value:0},this._terrainShader=h,h.vertexShader=`varying float vWorldY;
${h.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
         vWorldY = position.y;`),h.fragmentShader=`uniform float uTime;
varying float vWorldY;
${h.fragmentShader}`.replace("#include <map_fragment>",`#include <map_fragment>
           vec4 detailTex = texture2D(map, vMapUv * 8.0);
           diffuseColor.rgb *= mix(vec3(1.0), detailTex.rgb * 1.85, 0.42);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
           roughnessFactor *= mix(1.0, texture2D(roughnessMap, vRoughnessMapUv * 8.0).g * 1.7, 0.35);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
           float crack = texture2D(emissiveMap, vEmissiveMapUv * 4.0).r;
           float lava = 1.0 - smoothstep(4.0, 11.0, vWorldY);
           float pulse = 0.65 + 0.35 * sin(uTime * 1.7 + vWorldY * 0.4);
           totalEmissiveRadiance += vec3(1.0, 0.22, 0.04) * crack * lava * pulse * 2.2;`)},this.terrain=new ht(n,c),this.terrain.receiveShadow=!0,this.terrain.castShadow=!0,this.group.add(this.terrain)}_buildVolcano(t){const e=ze(t.pack("terrain_rock",{clone:!0}),10,10),n=ye(e,{metalness:.02,roughness:.92,emissive:new Pt(.55,.08,.01),emissiveIntensity:.25,envMapIntensity:.25}),i=new Ue(140,118,28,4,!0);this.volcano=new ht(i,n),this.volcano.position.set(-120,10,-250),this.group.add(this.volcano);const r=new ht(new br(26,24),new an({color:16733458,fog:!1}));r.rotation.x=-Math.PI/2,r.position.set(-120,68,-250),this.group.add(r),this.calderaGlow=r;const a=new ht(new Nt(24,60,200,14,1,!0),new an({color:3813417,transparent:!0,opacity:.3,side:He,depthWrite:!1,fog:!1}));a.position.set(-120,165,-250),this.group.add(a),this.plume=a}_rockMaterial(t,e){return ye(ze(t.pack("terrain_rock",{clone:!0}),e,e),{roughness:.9,metalness:.03,emissive:new Pt(.4,.05,.01),emissiveIntensity:.2,envMapIntensity:.3})}_buildRocks(t){const e=this._rockMaterial(t,4.4);this.boulders=[11,57,103].map(a=>{const o=da(5,1.55,a),l=this._scatter(27,{minR:20,maxR:134,slopeMax:2.2,clear:20,spacing:9});return this._instance(o,e,l,(c,h)=>{c.position.set(h.x,h.y+.2,h.z),c.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5);const u=2+Math.random()*2.2;return c.scale.set(u*(.8+Math.random()*.4),u*(.7+Math.random()*.5),u*(.8+Math.random()*.4)),o.boundingSphere.radius*Math.max(c.scale.x,c.scale.z)-.45})});const n=da(3,2.1,41),i=this._rockMaterial(t,2),r=this._scatter(190,{minR:14,maxR:134,slopeMax:2.6,clear:12});this.rocks=this._instance(n,i,r,(a,o)=>{a.position.set(o.x,o.y+.2,o.z),a.rotation.set(Math.random()*.6,Math.random()*Math.PI,Math.random()*.6);const l=.6+Math.random()*1.5;return a.scale.set(l*(.7+Math.random()*.6),l*(.65+Math.random()*.6),l*(.7+Math.random()*.6)),a.scale.y>.9?n.boundingSphere.radius*Math.max(a.scale.x,a.scale.z)-.45:0}),this._buildScree(i)}_buildScree(t){const e=da(0,3.1,29,6),n=e.attributes.position;for(let r=0;r<n.count;r++)n.setY(r,n.getY(r)*.7);e.computeVertexNormals();const i=this._scatter(900,{minR:4,maxR:124,slopeMax:3.2,clear:7});this.scree=this._instance(e,t,i,(r,a)=>{r.position.set(a.x,a.y+.05,a.z),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const o=.2+Math.random()**2*.85;r.scale.set(o*(.8+Math.random()*.5),o*(.5+Math.random()*.5),o*(.8+Math.random()*.5))}),this.scree.castShadow=!1}_buildSpires(t){const e=ze(t.pack("obsidian",{clone:!0}),1.4,2.6),n=ye(e,{roughness:.24,metalness:.4,emissive:new Pt(.8,.12,.02),emissiveIntensity:.5,envMapIntensity:1.1}),i=(o,l,c,h)=>new Nt(l,o,c,h),r=or([nn(i(1,.34,5.4,5),{pos:[0,2.7,0],rot:[.06,.4,.08]}),nn(i(.62,.2,3.6,4),{pos:[1.05,1.8,.35],rot:[.1,.9,.26]}),nn(i(.5,.17,2.4,5),{pos:[-.82,1.2,-.55],rot:[-.14,.3,-.3]}),nn(i(.42,.3,1.3,4),{pos:[.3,.62,-1],rot:[.2,1.7,.14]})]),a=this._scatter(26,{minR:26,maxR:128,slopeMax:1.6,clear:22,spacing:14});this.spires=this._instance(r,n,a,(o,l)=>{o.position.set(l.x,l.y-.4,l.z),o.rotation.set((Math.random()-.5)*.22,Math.random()*Math.PI,(Math.random()-.5)*.22);const c=.7+Math.random()*1.3;return o.scale.set(c,c*(.8+Math.random()*1),c),c*1.5})}_buildHorizon(t){const e=ze(t.pack("terrain_rock",{clone:!0}),26,2),n=ye(e,{roughness:.95,metalness:0,emissive:new Pt(.5,.07,.01),emissiveIntensity:.08,envMapIntensity:.15,side:He});this.horizon=new Jt;for(const[i,r,a,o]of[[300,14,70,3.7],[382,24,104,21.3],[464,32,148,48.9]])this.horizon.add(this._ridgeCurtain(i,r,a,o,n));this.group.add(this.horizon)}_ridgeCurtain(t,e,n,i,r){const l=[],c=[],h=[];for(let f=0;f<=256;f++){const g=f/256*Math.PI*2,_=Math.cos(g),m=Math.sin(g),p=e+n*wg(g,i);if(l.push(_*t,-46,m*t,_*t,p,m*t),c.push(f/256,0,f/256,(p- -46)/90),f<256){const M=f*2;h.push(M,M+1,M+2,M+1,M+3,M+2)}}const u=new xe;u.setAttribute("position",new Yt(l,3)),u.setAttribute("uv",new Yt(c,2)),u.setIndex(h),u.computeVertexNormals();const d=new ht(u,r);return d.frustumCulled=!1,d}_buildDeadTrees(t){const e=ze(t.pack("burnt_bark",{clone:!0}),1,3),n=ye(e,{roughness:.95,metalness:0,emissive:new Pt(.35,.04,0),emissiveIntensity:.14,envMapIntensity:.2}),i=[nn(new Nt(.22,.52,7.5,7),{pos:[0,3.7,0]})];for(let o=0;o<5;o++){const l=o/5*Math.PI*2+.4,c=2.2+Math.random()*1.6,h=3.4+o*.7;i.push(nn(new Nt(.05,.14,c,5),{pos:[Math.cos(l)*c*.36,h,Math.sin(l)*c*.36],rot:[Math.sin(l)*1,0,-Math.cos(l)*1]}))}const r=or(i),a=this._scatter(56,{minR:24,maxR:126,slopeMax:.85,band:[6,24],clear:14,spacing:7});this.trees=this._instance(r,n,a,(o,l)=>{o.position.set(l.x,l.y-.3,l.z),o.rotation.set((Math.random()-.5)*.3,Math.random()*Math.PI,(Math.random()-.5)*.3);const c=.7+Math.random()*.9;return o.scale.set(c,c*(.8+Math.random()*.7),c),c*.55})}_buildBonePiles(t){const e=ze(t.pack("bone",{clone:!0}),1.6,1.6),n=ye(e,{color:new Pt(.62,.58,.54),roughness:.86,metalness:0,envMapIntensity:.16}),i=[nn(yg(new $t(.75,14,10),.16,5.3),{pos:[1.6,.5,.2],scale:[1.5,.72,.8]}),nn(new Ue(.34,1.1,8),{pos:[2.7,.5,.2],rot:[0,0,-Math.PI/2]})];for(let o=0;o<6;o++)for(const l of[-1,1])i.push(nn(new _e(.85,.07,5,10,Math.PI*.8),{pos:[-o*.62,.45,.1*l],rot:[Math.PI/2,.25*l,.1],scale:[1,.7+o*.04,1]}));for(let o=0;o<7;o++)i.push(nn(new Nt(.14,.16,.55,6),{pos:[-o*.6+.4,.95,0],rot:[0,0,Math.PI/2]}));const r=or(i),a=this._scatter(16,{minR:26,maxR:118,slopeMax:.6,clear:20,spacing:26});this.bones=this._instance(r,n,a,(o,l)=>{o.position.set(l.x,l.y,l.z),o.rotation.set(0,Math.random()*Math.PI*2,0);const c=.95+Math.random()*.95;o.scale.setScalar(c);const h=o.rotation.y;this._block(l.x+Math.cos(h)*1.6*c,l.z-Math.sin(h)*1.6*c,1.05*c)})}_buildRuins(t){const e=ze(t.pack("terrain_rock",{clone:!0}),1.2,2.4),n=ye(e,{roughness:.84,metalness:.02,envMapIntensity:.3}),i=[];for(let o=0;o<7;o++){const l=2.2+Math.random()*6;i.push(nn(new Nt(.62,.68,l,6),{pos:[o*1.5-4.5,l/2,Math.sin(o*1.7)*.9],rot:[0,o*.4,(Math.random()-.5)*.12]}))}i.push(nn(new Nt(.6,.6,6,6),{pos:[2.4,.7,3.2],rot:[Math.PI/2.1,.4,0]}));const r=or(i),a=this._scatter(9,{minR:34,maxR:120,slopeMax:.55,clear:24,spacing:34});this.ruins=this._instance(r,n,a,(o,l)=>{o.position.set(l.x,l.y-.4,l.z),o.rotation.set(0,Math.random()*Math.PI*2,0);const c=1.1+Math.random()*.8;o.scale.setScalar(c);const h=o.rotation.y;for(let u=0;u<7;u++){const d=(u*1.5-4.5)*c;this._block(l.x+Math.cos(h)*d,l.z-Math.sin(h)*d,.7*c)}})}_buildLavaPools(t){const e=ze(t.pack("lava",{clone:!0}),2.4,2.4),n=this._scatter(14,{minR:22,maxR:122,slopeMax:.34,band:[1,7.5],clear:22,spacing:20});this.lavaLights=[],n.forEach((i,r)=>{const a=ye(e,{roughness:.42,metalness:0,emissive:new Pt(1.5,.4,.05),emissiveIntensity:2.6,envMapIntensity:.1});this.lavaMats.push(a);const o=4+Math.random()*7,l=new br(o,18),c=l.attributes.position;for(let u=0;u<c.count;u++)if(Math.hypot(c.getX(u),c.getY(u))>.1){const f=.78+Ji(c.getX(u)*.6+r,c.getY(u)*.6,3)*.55;c.setXY(u,c.getX(u)*f,c.getY(u)*f)}l.computeVertexNormals();const h=new ht(l,a);if(h.rotation.x=-Math.PI/2,h.position.set(i.x,i.y+.22,i.z),this.group.add(h),this.props.push(h),r<3){const u=new qn(16730640,30,o*6,1.8);u.position.set(i.x,i.y+2.2,i.z),this.group.add(u),this.lavaLights.push(u)}})}_buildCamp(t){const e=ye(ze(t.pack("weapon_wood",{clone:!0}),1,2),{roughness:.86,metalness:0,envMapIntensity:.25}),n=ye(ze(t.pack("leather_glove",{clone:!0}),2,2),{roughness:.78,metalness:0,side:He,envMapIntensity:.25}),i=new Jt,r=this.heightAt(Xe.x,Xe.y);i.position.set(Xe.x,r,Xe.y),this.group.add(i);for(let u=0;u<7;u++){const d=u/7*Math.PI*2,f=new ht(new Nt(.06,.09,2.6,6),e);f.position.set(Math.cos(d)*6.5,1.1,Math.sin(d)*6.5),f.rotation.z=Math.cos(d)*.16,f.rotation.x=Math.sin(d)*.16,f.castShadow=!0,i.add(f);const g=new ht(new $t(.26,8,6),n);g.position.set(Math.cos(d)*6.5,2.5,Math.sin(d)*6.5),g.scale.set(1.3,.9,.9),i.add(g)}const a=new ht(new Ue(2.4,2.6,4,1,!0),n);a.position.set(-3.4,1.3,-2.2),a.rotation.y=.6,a.castShadow=!0,i.add(a),this._block(Xe.x-3.4,Xe.y-2.2,1.3);const o=new Jt;o.position.set(1.6,0,1.4);for(let u=0;u<5;u++){const d=u/5*Math.PI*2,f=new ht(new Nt(.11,.13,1.5,6),e);f.position.set(Math.cos(d)*.35,.5,Math.sin(d)*.35),f.rotation.set(Math.sin(d)*.9,0,-Math.cos(d)*.9),o.add(f)}const l=new ht(new $t(.55,12,8),new an({color:16742946}));l.position.y=.22,l.scale.y=.4,o.add(l),this.campFire=new qn(16747059,22,26,1.9),this.campFire.position.set(0,1.1,0),this.campFire.castShadow=!1,o.add(this.campFire),i.add(o);const c=new Jt;c.position.set(3.4,0,.4);const h=new ht(new Be(.12,1.8,1.6),e);h.position.set(0,1,0),c.add(h);for(let u=0;u<3;u++){const d=new ht(new Be(.08,1.15,.14),n);d.position.set(.16,1.05,-.45+u*.45),d.rotation.z=-.18,c.add(d)}i.add(c),this.campGroup=i,this.campCenter=new T(Xe.x+1.6,r,Xe.y+1.4),this.campRadius=8.5}atCamp(t){return Math.hypot(t.x-this.campCenter.x,t.z-this.campCenter.z)<this.campRadius}_buildLighting(){this.scene.fog=new So(1774864,.0062),this.scene.background=new Pt(1183244),this.hemi=new ih(9071189,2363402,.7),this.group.add(this.hemi),this.sun=new Er(16754017,2.5),this.sun.position.set(-78,40,34),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1536,1536),this.sun.shadow.camera.near=4,this.sun.shadow.camera.far=300,this.sun.shadow.camera.left=-110,this.sun.shadow.camera.right=110,this.sun.shadow.camera.top=110,this.sun.shadow.camera.bottom=-110,this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.028,this.group.add(this.sun),this.rim=new Er(4872824,.42),this.rim.position.set(48,24,-86),this.group.add(this.rim),this.ember=new qn(16738842,16,54,2),this.ember.position.set(-12,8,10),this.group.add(this.ember)}_buildAshColumns(){const t=new Nt(6,16,56,12,1,!0),e=new an({color:2761759,transparent:!0,opacity:.12,side:He,depthWrite:!1,fog:!0});this.ashColumns=[];for(let n=0;n<7;n++){const i=new ht(t,e),r=n/7*Math.PI*2;i.position.set(Math.cos(r)*78,36,Math.sin(r)*72-20),i.rotation.z=(Math.random()-.5)*.2,this.group.add(i),this.ashColumns.push(i)}}update(t){this._terrainShader&&(this._terrainShader.uniforms.uTime.value=t);const e=2.3+Math.sin(t*1.6)*.5;for(let n=0;n<this.lavaMats.length;n++)this.lavaMats[n].emissiveIntensity=e+Math.sin(t*2.1+n)*.35;for(let n=0;n<this.lavaLights.length;n++)this.lavaLights[n].intensity=26+Math.sin(t*1.8+n*1.3)*9;this.campFire&&(this.campFire.intensity=19+Math.sin(t*9.3)*4+Math.sin(t*3.1)*3),this.calderaGlow&&this.calderaGlow.material.color.setRGB(1,.3+Math.sin(t*.9)*.08,.06),this.plume&&(this.plume.rotation.y=t*.012),this.sky.rotation.y=t*.003}setQuality(t){const e={cinematic:2048,high:1536,medium:768,low:512};this.sun.shadow.mapSize.set(e[t]??1024,e[t]??1024),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.sun.castShadow=t!=="low";const n=t==="low"?0:t==="medium"?1:2;for(const i of[...this.boulders,this.rocks,this.spires,this.trees])i&&(i.visible=!0,i.castShadow=n>=1);this.bones&&(this.bones.visible=n>=1),this.ruins&&(this.ruins.visible=n>=1),this.scree&&(this.scree.visible=n>=1);for(const i of this.ashColumns??[])i.visible=n>=1;this.lavaLights?.forEach((i,r)=>{i.visible=t==="cinematic"||n>=2&&r===0}),this.campFire&&(this.campFire.visible=n>=1),this.ember&&(this.ember.visible=n>=1)}}class Eg{constructor(t,e){this.camera=t,this.world=e,this.yaw=.18,this.pitch=-.12,this.position=new T(4,8,18),this.velocity=new T,this.keys=new Set,this.locked=!1,this.dragging=!1,this.shake=new T,this.bob=0,this.foot=0,this.stepPhase=0,this.health=100,this.onFire=0,this.grounded=!0,this.sprint=!1,this.crouch=!1,this.turnRate={x:0,y:0},this._lastYaw=this.yaw,this._lastPitch=this.pitch,this._euler=new Qe(0,0,0,"YXZ"),this._wish=new T,this._forward=new T,this._right=new T,this.didStep=!1}bind(t){window.addEventListener("keydown",e=>{this.keys.add(e.code),e.code==="KeyR"&&(this._reload=!0),e.code==="KeyB"&&(this._shop=!0),e.code==="Escape"&&(this._shopClose=!0)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("mousedown",e=>{e.button===0&&(this.fireHeld=!0),this.dragging=!0,document.pointerLockElement!==t&&t.requestPointerLock?.().catch(()=>{})}),window.addEventListener("mouseup",()=>{this.fireHeld=!1,this.dragging=!1}),window.addEventListener("mousemove",e=>{if(!(this.locked||this.dragging))return;const i=e.movementX||0,r=e.movementY||0;this.yaw-=i*Kt.player.mouse,this.pitch-=r*Kt.player.mouse,this.pitch=lt.clamp(this.pitch,-1.25,1.25)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t})}consumeReload(){const t=this._reload;return this._reload=!1,t}consumeShop(){const t=this._shop;return this._shop=!1,t}consumeShopClose(){const t=this._shopClose;return this._shopClose=!1,t}applyDamage(t){this.health=Math.max(0,this.health-t),this.shake.x+=(Math.random()-.5)*.08,this.shake.y+=.05}addShake(t){this.shake.x+=(Math.random()-.5)*t,this.shake.y+=(Math.random()-.4)*t}update(t){const e=Math.max(t,.004166666666666667);this.turnRate.x=lt.clamp((this.yaw-this._lastYaw)/e,-14,14),this.turnRate.y=lt.clamp((this.pitch-this._lastPitch)/e,-14,14),this._lastYaw=this.yaw,this._lastPitch=this.pitch,this.sprint=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.crouch=this.keys.has("KeyC")||this.keys.has("ControlLeft");const n=this.crouch?Kt.player.crouch:this.sprint?Kt.player.sprint:Kt.player.speed;this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._wish.set(0,0,0),this.keys.has("KeyW")&&this._wish.add(this._forward),this.keys.has("KeyS")&&this._wish.sub(this._forward),this.keys.has("KeyD")&&this._wish.add(this._right),this.keys.has("KeyA")&&this._wish.sub(this._right);const i=this._wish.lengthSq()>0;i&&this._wish.normalize();const r=Kt.player.accel;this.velocity.x=lt.damp(this.velocity.x,this._wish.x*n,r,t),this.velocity.z=lt.damp(this.velocity.z,this._wish.z*n,r,t);const a=this.world.heightAt(this.position.x,this.position.z),o=Kt.player.eye*(this.crouch?.68:1),l=a+o;this.position.y<=l+.08?(!this.grounded&&this.velocity.y<-4&&this.addShake(.08),this.grounded=!0,this.position.y=l,this.velocity.y=0,this.keys.has("Space")&&(this.velocity.y=Kt.player.jump)):(this.grounded=!1,this.velocity.y-=Kt.player.gravity*t),this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.position.y+=this.velocity.y*t;const c=Kt.worldSize*.46;this.position.x=lt.clamp(this.position.x,-c,c),this.position.z=lt.clamp(this.position.z,-c,c),this.world.resolveCollision(this.position,Kt.player.radius),this.didStep=!1;const h=Math.hypot(this.velocity.x,this.velocity.z);return this.grounded&&h>1.2?(this.stepPhase+=t*(this.sprint?6.2:4.1),this.bob=Math.sin(this.stepPhase)*.035*(this.sprint?1.4:1),Math.sin(this.stepPhase)<-.92&&this.foot>=0&&(this.didStep=!0,this.foot=-1,this.addShake(this.sprint?.028:.016)),Math.sin(this.stepPhase)>0&&(this.foot=1)):this.bob=lt.damp(this.bob,0,8,t),this.shake.multiplyScalar(Math.exp(-t*9)),this.onFire=Math.max(0,this.onFire-t),this._euler.set(this.pitch+this.shake.y,this.yaw+this.shake.x,this.shake.x*.4),this.camera.quaternion.setFromEuler(this._euler),this.camera.position.copy(this.position),this.camera.position.y+=this.bob,i}}const ic={ashpiercer:{id:"ashpiercer",name:"Ashpiercer",epithet:"Siege ballista",kind:"ballista",ammo:"Bolts",cost:0,starter:!0,blurb:"The ridge's first answer to a dragon. A hybrid siege prod that hits like a thrown anvil and reloads like one.",pose:{pos:[.14,-.16,-.78],rot:[-.2,-.02,.06]},upgrades:[{cost:0,label:"Worn",damage:85,bolts:8,muzzle:92,gravity:9.2,reload:2.15,recoil:.034,cooldown:.62,mass:4.6,pellets:1,spread:0},{cost:400,label:"Tempered",damage:105,bolts:9,muzzle:100,gravity:8.6,reload:1.95,recoil:.03,cooldown:.56,mass:4.8,pellets:1,spread:0},{cost:850,label:"Siege-proof",damage:130,bolts:10,muzzle:108,gravity:8,reload:1.75,recoil:.028,cooldown:.5,mass:5.1,pellets:1,spread:0}]},emberhail:{id:"emberhail",name:"Emberhail",epithet:"Dragon-shot lock",kind:"scatter",ammo:"Shot",cost:200,blurb:"A flared lock that throws a fist of iron into whatever is close enough to smell. Useless past forty metres; ruinous inside twenty.",pose:{pos:[.16,-.15,-.7],rot:[-.16,-.03,.05]},upgrades:[{cost:0,label:"Field",damage:24,bolts:5,muzzle:64,gravity:14,reload:2.4,recoil:.05,cooldown:.88,mass:3.8,pellets:7,spread:.075},{cost:360,label:"Packed",damage:30,bolts:6,muzzle:70,gravity:13,reload:2.15,recoil:.046,cooldown:.78,mass:4,pellets:8,spread:.068},{cost:720,label:"Furnace",damage:36,bolts:7,muzzle:76,gravity:12,reload:1.9,recoil:.042,cooldown:.7,mass:4.2,pellets:9,spread:.06}]},widowcoil:{id:"widowcoil",name:"Widow's Coil",epithet:"Repeating arbalest",kind:"repeater",ammo:"Quarrels",cost:520,blurb:"A boxed prod that feeds itself. Lighter bolts, a faster string, and a magazine that turns a fly-over into a conversation.",pose:{pos:[.15,-.15,-.72],rot:[-.18,-.02,.05]},upgrades:[{cost:0,label:"Wound",damage:48,bolts:12,muzzle:86,gravity:9.6,reload:1.7,recoil:.022,cooldown:.28,mass:3.2,pellets:1,spread:.008},{cost:480,label:"Cycled",damage:58,bolts:14,muzzle:92,gravity:9,reload:1.5,recoil:.02,cooldown:.24,mass:3.3,pellets:1,spread:.006},{cost:960,label:"Widow-made",damage:70,bolts:16,muzzle:98,gravity:8.4,reload:1.32,recoil:.018,cooldown:.2,mass:3.4,pellets:1,spread:.005}]},hellharpoon:{id:"hellharpoon",name:"Hellharpoon",epithet:"Fire lance",kind:"lance",ammo:"Harpoons",cost:880,blurb:"One spear, thrown on a column of furnace gas. Slow to seat, heavy in the hands, and the only thing on the ridge a Basalt Tyrant respects.",pose:{pos:[.13,-.17,-.86],rot:[-.14,-.02,.04]},upgrades:[{cost:0,label:"Forged",damage:145,bolts:4,muzzle:78,gravity:10.5,reload:2.8,recoil:.055,cooldown:1.05,mass:6.2,pellets:1,spread:0},{cost:700,label:"Vented",damage:175,bolts:5,muzzle:86,gravity:9.8,reload:2.5,recoil:.05,cooldown:.92,mass:6.4,pellets:1,spread:0},{cost:1400,label:"Tyrant-iron",damage:210,bolts:6,muzzle:94,gravity:9.2,reload:2.25,recoil:.046,cooldown:.82,mass:6.6,pellets:1,spread:0}]}},Tg=["ashpiercer","emberhail","widowcoil","hellharpoon"];function ws(s){return ic[s]??ic.ashpiercer}function ah(s,t=0){const e=s.upgrades,n=Math.max(0,Math.min(t|0,e.length-1));return e[n]}function sc(s,t=0){return s.upgrades[t+1]??null}function Ag(s){return s.upgrades.length-1}const Rg=new T(0,0,-1),fa=new T;function sn(s,{steps:t=22,radial:e=10,radius:n,flatten:i=1,caps:r=!0}){const a=new Cr(s.map(d=>new T(...d))),o=a.computeFrenetFrames(t,!1),l=[],c=[],h=[];for(let d=0;d<=t;d++){const f=d/t,g=a.getPointAt(f),_=n(f),m=o.normals[d],p=o.binormals[d];for(let M=0;M<=e;M++){const x=M/e*Math.PI*2,v=Math.cos(x)*_*i,P=Math.sin(x)*_;l.push(g.x+m.x*v+p.x*P,g.y+m.y*v+p.y*P,g.z+m.z*v+p.z*P),c.push(M/e,f*3)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=d*(e+1)+f,_=g+e+1;h.push(g,g+1,_,_,g+1,_+1)}if(r)for(const d of[0,1]){const f=a.getPointAt(d),g=l.length/3;l.push(f.x,f.y,f.z),c.push(.5,d*3);const _=d===0?0:t*(e+1);for(let m=0;m<e;m++)d===0?h.push(g,_+m+1,_+m):h.push(g,_+m,_+m+1)}const u=new xe;return u.setAttribute("position",new Yt(l,3)),u.setAttribute("uv",new Yt(c,2)),u.setIndex(h),u.computeVertexNormals(),u}function Gn(s,t,e=.005){const n=new Qc;n.moveTo(s[0][0],s[0][1]);for(let a=1;a<s.length;a++)n.lineTo(s[a][0],s[a][1]);n.closePath();const i=new To(n,{depth:Math.max(t-e*2,.001),bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:4});i.rotateY(-Math.PI/2),i.computeBoundingBox();const r=i.boundingBox;return i.translate(-(r.min.x+r.max.x)/2,0,0),i}function lr(s,t=20){const e=s.map(([i,r])=>new Q(Math.max(i,1e-4),r)),n=new Pr(e,t);return n.rotateX(-Math.PI/2),n}function Cg(s,t,e,n=3){const i=Math.min(e,s/2,t/2),r=[],a=[[s/2-i,t/2-i,0],[-s/2+i,t/2-i,Math.PI/2],[-s/2+i,-t/2+i,Math.PI],[s/2-i,-t/2+i,-Math.PI/2]];for(const[o,l,c]of a)for(let h=0;h<=n;h++){const u=c+h/n*(Math.PI/2);r.push([o+Math.cos(u)*i,l+Math.sin(u)*i])}return r}function Qt(s,t,e,n=.006){return Gn(Cg(s,t,n),e,Math.min(.004,e/3))}const rn=.048,ii=-.6,ps=-.165,Pg=-.552,Lg=-.74,De=[.335,rn-.004,-.552],cr=.084,je=[0,-.05,.068],si=[0,-.108,.135],ri=[0,-.088,-.235],ms=.34,Ig=.34;class Dg{constructor(t,e,n="ashpiercer",i=0){this.viewmodel=t,this.textures=e,this.spec=ws(n),this.tier=i,this.group=new Jt,this.cooldown=0,this.reloadT=0,this.recoil=0,this.kick=0,this.dry=0,this.draw=1,this.crankSpin=0,this._sway=new Q,this._swayTarget=new Q,this._clock=0,this._applyStats(),this._pos=new T,this._muzzle=new T,this._materials(e),this._build(),this._mount(),t.root.add(this.group)}_applyStats(){const t=ah(this.spec,this.tier);this.bolts=t.bolts,this.max=t.bolts,this.damage=t.damage,this.muzzle=t.muzzle,this.gravity=t.gravity,this.reloadTime=t.reload,this.recoilKick=t.recoil,this.cooldownTime=t.cooldown,this.mass=t.mass,this.pellets=t.pellets,this.spread=t.spread;const e=this.spec.pose;this._restPos=new T(...e.pos),this._restRot=new Qe(...e.rot)}get shot(){return{kind:this.spec.kind,damage:this.damage,muzzle:this.muzzle,gravity:this.gravity,pellets:this.pellets,spread:this.spread}}rebuild(t,e=0){this.viewmodel.root.remove(this.group),this.dispose(),this.spec=ws(t),this.tier=e,this.cooldown=0,this.reloadT=0,this.recoil=0,this.kick=0,this.dry=0,this.draw=1,this.crankSpin=0,this.group=new Jt,this._applyStats(),this._materials(this.textures),this._build(),this._mount(),this.viewmodel.root.add(this.group)}_mount(){this.group.position.copy(this._restPos),this.group.rotation.copy(this._restRot),this.group.scale.setScalar(Kt.viewmodel.scale),this.group.traverse(t=>{t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!1})}get reloading(){return this.reloadT>0}get reloadProgress(){return this.reloadT>0?1-this.reloadT/this.reloadTime:1}get empty(){return this.bolts<=0}_materials(t){const e=(n,i,r)=>ze(t.pack(n,{clone:!0}),i,r);this.mats={iron:ye(e("weapon_metal",3,1.4),{color:7236198,metalness:.78,roughness:.45,envMapIntensity:1.1}),steel:ye(e("weapon_metal",1.6,1.6),{color:11578536,metalness:.84,roughness:.3,envMapIntensity:1.35}),wood:ye(e("weapon_wood",1,3.4),{color:6968128,metalness:.02,roughness:.78,envMapIntensity:.38}),leather:ye(e("leather_glove",2.4,2.4),{color:6048314,metalness:0,roughness:.8,envMapIntensity:.28}),glove:ye(e("leather_glove",1.6,1.6),{color:9072736,metalness:0,roughness:.74,envMapIntensity:.36}),gloveDark:ye(e("leather_glove",2.2,2.2),{color:5127216,metalness:0,roughness:.84,envMapIntensity:.24}),cloth:ye(e("leather_glove",2.8,1.2),{color:4011052,metalness:0,roughness:.9,envMapIntensity:.2}),brass:new Mn({color:10122292,metalness:.9,roughness:.34,envMapIntensity:1.2}),cord:new Mn({color:11773324,metalness:0,roughness:.64}),blued:new Mn({color:2828067,metalness:.72,roughness:.38,envMapIntensity:.9})}}_grip([t,e,n],i,r,a){const o=this.mats,l=new Jt;return l.position.set(t,e,n),l.rotation.x=a,this.group.add(l),this._add(new Nt(i*1.06,i*.92,r,12),o.wood,null,null,l),this._add(new Nt(i*1.1,i*1.1,r*.66,12),o.leather,[0,-r*.05,0],null,l),this._add(new $t(i*1.25,10,7),o.leather,[0,-r/2,0],null,l),this._add(new Nt(i*1.35,i*1.15,.014,12),o.iron,[0,r/2-.004,0],null,l),this._add(new _e(i*1.14,.004,5,10),o.leather,[0,-r*.08,0],[Math.PI/2,0,0],l),l}_add(t,e,n,i,r=this.group){const a=new ht(t,e);return n&&a.position.set(...n),i&&a.rotation.set(...i),r.add(a),a}_build(){const t=this.spec.kind;t==="scatter"?this._buildEmberhail():t==="repeater"?this._buildWidowcoil():t==="lance"?this._buildHellharpoon():this._buildAshpiercer()}_buildAshpiercer(){this._buildStock(),this._buildBarrel(),this._buildLimbs(),this._buildString(),this._buildLock(),this._buildSights(),this._buildWindlass(),this._buildBolt(),this._buildArms()}_buildStock(){const t=this.mats,e=[[-.34,.038],[-.02,.044],[.06,.062],[.14,.058],[.22,.028],[.255,-.018],[.235,-.068],[.16,-.072],[.08,-.032],[.02,-.042],[-.02,-.046],[-.34,-.04]];this._add(Gn(e,.048),t.wood),this._add(Gn([[-.2,.046],[-.04,.05],[-.04,-.05],[-.2,-.046]],.054),t.iron),this._add(Gn([[-.66,.04],[-.54,.048],[-.54,-.04],[-.66,-.032]],.062),t.iron);for(const i of[-1,1])this._add(Qt(.018,.07,.004,.006),t.blued,[i*.026,-.012,.228]),this._add(Qt(.1,.048,.005,.012),t.wood,[i*.026,.032,.15]),this._add(new _e(.011,.003,5,10),t.iron,[i*.026,-.052,.185],[0,Math.PI/2,0]);this._add(Gn([[-.62,.012],[-.34,.028],[-.34,-.042],[-.6,-.03]],.044),t.wood),this._add(new Nt(.034,.037,.155,14),t.leather,[0,0,-.455],[Math.PI/2,0,0]);for(const i of[-.39,-.455,-.52])this._add(new _e(.037,.0055,6,12),t.cord,[0,0,i],[Math.PI/2,0,0]);this._add(sn([[-.038,-.018,-.555],[-.048,-.058,-.542],[0,-.078,-.532],[.048,-.058,-.542],[.038,-.018,-.555]],{steps:16,radial:7,radius:()=>.0068}),t.steel),this.grip=this._grip(si,.023,.125,ms),this.foregrip=this._grip(ri,.0205,.105,-.12);const n=new $t(.0045,6,5);for(const i of[-.3,-.22,-.14,-.06])for(const r of[-1,1])this._add(n,t.brass,[r*.028,.02,i]),this._add(n,t.brass,[r*.028,-.022,i])}_buildBarrel(){const t=this.mats;this._add(lr([[0,.3],[.034,.3],[.034,.322],[.027,.33],[.027,.52],[.024,.55],[.024,.695],[.029,.7],[.029,.726],[.022,.74],[.013,.74],[0,.733]]),t.iron);for(const e of[-1,1])this._add(Qt(.42,.014,.009,.003),t.blued,[e*.015,rn,-.48]);this._add(Qt(.44,.008,.03,.003),t.blued,[0,rn-.008,-.47]);for(let e=0;e<4;e++)for(const n of[-1,1])this._add(Qt(.034,.012,.006,.005),t.blued,[n*.028,.002,-.4-e*.06])}_buildLimbs(){const t=this.mats;this._add(Qt(.09,.058,.12,.01),t.iron,[0,rn-.01,ii]),this._add(Qt(.098,.064,.03,.008),t.leather,[0,rn-.01,ii]),this.limbs=[];for(const e of[-1,1]){const n=[[e*.04,De[1]+.005,ii],[e*.13,De[1]+.007,ii-.028],[e*.23,De[1]+.003,ii-.048],[e*.3,De[1]-.001,ii-.03],[e*De[0],De[1],De[2]]];this.limbs.push(this._add(sn(n,{steps:24,radial:10,radius:i=>.024*(1-i*.12)+.014,flatten:.52}),t.wood)),this._add(new _e(.014,.005,6,12),t.blued,[e*(De[0]-.008),De[1],De[2]+.006],[0,e*.6,Math.PI/2]),this._add(new _e(.028,.007,6,12),t.leather,[e*.08,De[1]+.004,ii-.014],[0,Math.PI/2,0])}}_buildString(){const t=new Nt(.0028,.0028,1,5,1,!0);t.rotateX(Math.PI/2),t.translate(0,0,-.5),this.stringSides=[];for(const e of[-1,1]){const n=new Jt;n.position.set(e*De[0],De[1],De[2]),this.group.add(n);const i=new ht(t,this.mats.cord);n.add(i),this.stringSides.push({pivot:n,mesh:i})}this.serving=this._add(new Nt(.005,.005,.05,6),this.mats.leather,[0,De[1],ps],[0,0,Math.PI/2])}_buildLock(){const t=this.mats;this._add(new _e(.032,.0055,6,16,Math.PI*1.15),t.blued,[0,je[1]-.002,je[2]+.004],[0,Math.PI/2,-.45]),this.trigger=this._add(Qt(.012,.038,.01,.005),t.steel,je,[0,0,.22]),this._add(Qt(.07,.03,.05,.008),t.iron,[0,rn-.016,ps]),this._add(Qt(.02,.022,.038,.005),t.steel,[0,rn+.004,ps-.008]),this._add(new Nt(.008,.008,.012,8),t.brass,[.018,rn-.01,ps],[0,0,Math.PI/2])}_buildSights(){const t=this.mats;this._add(Qt(.03,.014,.03,.005),t.blued,[0,.056,-.03]),this._add(Qt(.016,.04,.014,.004),t.blued,[0,cr-.024,-.03]),this.rearSight=this._add(new _e(.016,.0035,6,14),t.blued,[0,cr,-.03]),this._add(Qt(.01,.026,.008,.003),t.blued,[0,cr-.019,-.66]),this._add(new $t(.0055,8,6),t.brass,[0,cr-.002,-.66])}_buildWindlass(){const t=this.mats;this.crank=new Jt,this.crank.position.set(.044,-.012,.09),this.group.add(this.crank),this._add(new Nt(.03,.03,.008,14),t.iron,null,[0,0,Math.PI/2],this.crank),this._add(Qt(.048,.012,.008,.004),t.iron,[0,.018,.006],[0,0,Math.PI/2],this.crank),this._add(new Nt(.007,.007,.03,8),t.leather,[0,.036,.018],[0,0,Math.PI/2],this.crank);for(let e=0;e<6;e++){const n=e/6*Math.PI;this._add(Qt(.05,.006,.005,.002),t.steel,null,[n,Math.PI/2,0],this.crank)}this._add(Qt(.018,.006,.005,.002),t.steel,[.002,.032,-.006],null,this.crank),this._add(new Nt(.0035,.0035,.24,5),t.cord,[.04,-.012,-.04],[Math.PI/2,0,0])}_buildBolt(){const t=this.mats;this.bolt=new Jt,this.bolt.position.set(0,rn,0),this.group.add(this.bolt),this._add(new Nt(.0085,.0095,.5,8),t.wood,[0,0,-.44],[Math.PI/2,0,0],this.bolt);const e=lr([[0,0],[.019,.045],[.014,.055],[0,.062]],4);this._add(e,t.steel,[0,0,-.688],null,this.bolt),this._add(e,t.steel,[0,0,-.688],[0,0,Math.PI/4],this.bolt);for(let n=0;n<3;n++){const i=n/3*Math.PI*2;this._add(new is(.05,.022),t.leather,[Math.cos(i)*.012,Math.sin(i)*.012,-.225],[0,Math.PI/2,i],this.bolt)}for(let n=0;n<2;n++)this._add(new Nt(.0075,.0075,.19,6),t.wood,[-.041,-.008+n*.017,.055+n*.012],[Math.PI/2,0,.05]);for(const n of[-.015,.115])this._add(Qt(.012,.05,.012,.005),t.leather,[-.041,0,n])}_buildArms(){this.hands=new Jt,this.group.add(this.hands);const t=this._hand(.023,1,!0);t.position.set(si[0],si[1]+.01,si[2]-.004),t.rotation.set(-Math.PI/2+ms,0,0),this.triggerFinger=this._triggerFinger(t,1);const e=this._hand(.0205,-1);e.position.set(ri[0],ri[1]+.008,ri[2]+.002),e.rotation.set(-Math.PI/2-.12,0,0),this.rightArm=this._arm(t,1,[.45,-.85,.3]),this.leftArm=this._arm(e,-1,[-.5,-.8,.35]),this.hands.add(this.rightArm,this.leftArm)}_triggerFinger(t,e){t.updateMatrix();const n=new T(...je).applyMatrix4(new se().copy(t.matrix).invert()),i=new T(...t.userData.knuckle),r=n.clone().addScaledVector(i.clone().sub(n).normalize(),.013),a=(u,d)=>i.clone().lerp(r,u).add(new T(-e*d*.35,d,0)),o=a(.38,.013),l=a(.72,.008),c=new ht(sn([i.toArray(),o.toArray(),l.toArray(),r.toArray()],{steps:14,radial:8,radius:u=>this._digitRadius(.0086,u)}),this.mats.glove);t.add(c);for(const[u,d]of[[o,.0074],[l,.0066]]){const f=new ht(new $t(d,7,5),this.mats.glove);f.position.copy(u),t.add(f)}const h=new ht(new $t(.0062,8,6),this.mats.gloveDark);return h.position.copy(r),h.scale.set(.85,1.2,.9),t.add(h),t.userData.digits=5,t.userData.joints=(t.userData.joints??0)+2,c}_arm(t,e,n){const i=this.mats,r=new Jt;t.updateMatrix();const a=new T(...t.userData.wrist).applyMatrix4(t.matrix),o=a.clone().addScaledVector(new T(...n).normalize(),Ig),l=(_,m)=>o.clone().lerp(a,_).add(new T(e*m,-m*.45,0)),c=[o,l(.35,.018),l(.7,.012),a].map(_=>_.toArray()),h=_=>.034+Math.sin(_*Math.PI*.92)*.016-_*.006;r.add(new ht(sn(c,{steps:18,radial:12,radius:h,flatten:.68}),i.glove));const u=new Cr(c.map(_=>new T(..._))),d=new T(0,0,1),f=new T(0,1,0);r.add(new ht(sn([0,.12,.24,.34].map(_=>u.getPointAt(_).toArray()),{steps:10,radial:12,radius:_=>h(_*.34)*1.14,flatten:.7}),i.cloth));const g=new ht(new _e(h(.34)*1.2,.007,6,14),i.cloth);g.position.copy(u.getPointAt(.34)),g.quaternion.setFromUnitVectors(d,u.getTangentAt(.34)),r.add(g),r.add(new ht(sn([.48,.66,.84,.99].map(_=>u.getPointAt(_).toArray()),{steps:12,radial:12,radius:_=>h(.48+_*.51)*1.1,flatten:.66}),i.leather));for(const _ of[.58,.74,.9]){const m=u.getPointAt(_),p=u.getTangentAt(_),M=new T().crossVectors(p,f);M.lengthSq()<1e-6&&M.set(e,0,0),M.normalize();const x=new T().crossVectors(M,p).normalize(),v=new ht(Qt(.03,.005,.022,.003),i.iron);v.position.copy(m).addScaledVector(x,h(_)*.82),v.quaternion.setFromUnitVectors(d,p),r.add(v)}for(const _ of[.56,.82]){const m=new ht(new _e(h(_)*1.2,.0042,6,14),i.leather);m.position.copy(u.getPointAt(_)),m.quaternion.setFromUnitVectors(d,u.getTangentAt(_)),r.add(m);const p=new ht(Qt(.012,.007,.006,.002),i.brass),M=u.getPointAt(_),x=u.getTangentAt(_),v=new T().crossVectors(x,f);v.lengthSq()<1e-6&&v.set(e,0,0),v.normalize(),p.position.copy(M).addScaledVector(v,h(_)*1.05*e),p.quaternion.setFromUnitVectors(d,x),r.add(p)}return r.add(t),r.userData.elbow=o.toArray(),r}_hand(t,e,n=!1){const i=this.mats,r=new Jt,o=t+.0105+.004,l=e*(t+.028),c=1.92,h=(F,V,X=o)=>[Math.sin(F)*X*e,Math.cos(F)*X,V],u=.03,d=new ht(new $t(.034,12,10),i.glove);d.scale.set(1.1,.78,1.5),d.position.set(l,.004,u-.03),r.add(d),r.add(new ht(sn([[l*.88,-.008,u-.092],[l,-.002,u-.055],[l*1.06,.006,u-.016],[l*.98,.012,u+.01]],{steps:12,radial:10,radius:F=>.017+F*.01,flatten:.55}),i.glove));const f=new ht(new $t(.019,10,8),i.glove);f.position.set(l*.78,.03,u-.002),f.scale.set(1.35,1.7,1.3),r.add(f);const g=new ht(new $t(.014,8,6),i.glove);g.position.set(l*.75,-.022,u-.074),g.scale.set(1.3,1,1.45),r.add(g);const _=new ht(new $t(.017,10,8),i.gloveDark);_.position.set(l*.42,.004,u-.034),_.scale.set(.7,1.5,1.75),r.add(_);const m=new ht(new Nt(.02,.023,.036,8),i.glove);m.rotation.x=Math.PI/2,m.position.set(l*.85,-.008,u-.082),r.add(m);const p=[e*o*.72,-.012,u-.092],M=new ht(new $t(.02,10,8),i.glove);M.scale.set(.88,.94,1),M.position.set(...p),r.add(M),r.userData.wrist=p;const x=[{z:u,curl:2.05,r:.0104,phi:0},{z:u-.022,curl:2.2,r:.0108,phi:.03},{z:u-.044,curl:2.32,r:.01,phi:.07},{z:u-.064,curl:2.42,r:.009,phi:.11}],v=o+.018;r.add(new ht(sn(x.map(F=>h(c+F.phi-.05,F.z,v)),{steps:10,radial:7,radius:()=>.009,flatten:.7}),i.glove));let P=0;x.forEach((F,V)=>{const X=new ht(new $t(F.r*1.05,8,6),i.glove);X.position.set(...h(c+F.phi-.06,F.z,v)),r.add(X);const G=new ht(Qt(.016,.005,.012,.002),i.iron);if(G.position.set(...h(c+F.phi-.06,F.z,v+.007)),r.add(G),P+=1,!(V===0&&n)&&(P+=this._digit(r,{z:F.z,startPhi:c+F.phi,curl:F.curl,radius:F.r,bones:3,side:e,arcR:o}),V<x.length-1)){const K=h(c+F.phi-.02,F.z,v),H=h(c+x[V+1].phi-.02,x[V+1].z,v),ot=[(K[0]+H[0])/2,(K[1]+H[1])/2*.88,(K[2]+H[2])/2];r.add(new ht(sn([K,ot,H],{steps:6,radial:6,radius:()=>.005,flatten:.4}),i.glove))}});const A=[l*.7,.032,u+.016],R=[l*.18,o*1.22,u+.022],I=[-e*t*.2,o*1.12,u+.006],b=[-e*t*.75,o*.7,u-.014];r.add(new ht(sn([A,R,I,b],{steps:12,radial:8,radius:F=>this._digitRadius(.011,F)}),i.glove));const S=new ht(new $t(.0082,7,5),i.glove);S.position.set(...R),r.add(S);const L=new ht(new $t(.0074,7,5),i.glove);L.position.set(...I),r.add(L);const z=new ht(new $t(.0066,8,6),i.gloveDark);return z.position.set(...b),z.scale.set(.85,1.2,.9),r.add(z),P+=2,r.userData.knuckle=h(c,u),r.userData.digits=n?4:5,r.userData.joints=P,r}_digitRadius(t,e){const n=t*(1-e*.22),i=Math.exp(-((e-.33)**2)/.014),r=Math.exp(-((e-.66)**2)/.012);return n*(1+.14*i+.1*r)}_digit(t,{z:e,startPhi:n,curl:i,radius:r,bones:a,side:o,arcR:l}){const c=f=>{const g=l+.018*(1-f)*(1-f),_=n-i*f;return[Math.sin(_)*g*o,Math.cos(_)*g,e-.0025*f*a]},h=[];let u=0;for(let f=0;f<=a;f++){const g=f/a,_=c(g);if(h.push(_),f>0&&f<a){const m=new ht(new $t(r*.78,7,5),this.mats.glove);m.position.set(..._),t.add(m),u+=1}}t.add(new ht(sn(h,{steps:14,radial:8,radius:f=>this._digitRadius(r,f)}),this.mats.glove));const d=new ht(new $t(r*.78,8,6),this.mats.gloveDark);return d.position.set(...h[h.length-1]),d.scale.set(.8,1.22,.9),t.add(d),u}_buildEmberhail(){const t=this.mats;this._add(Gn([[-.22,.026],[-.02,.04],[.08,.052],[.16,.024],[.185,-.012],[.16,-.06],[.08,-.052],[0,-.028],[-.22,-.026]],.046),t.wood),this._add(lr([[0,.16],[.036,.16],[.038,.26],[.044,.32],[.056,.38],[.072,.425],[.088,.452],[.042,.46],[0,.454]]),t.iron),this._add(new Nt(.04,.044,.16,12),t.leather,[0,0,-.28],[Math.PI/2,0,0]);for(const e of[-.22,-.3,-.38])this._add(new _e(.044,.0055,6,14),t.brass,[0,0,e],[Math.PI/2,0,0]);this._add(Qt(.072,.034,.016,.005),t.iron,[.03,.006,.042]),this._add(Qt(.03,.042,.01,.004),t.steel,[.036,.03,.058],[0,0,.45]),this._add(new $t(.01,8,6),t.brass,[.038,.004,.018]),this._add(new Nt(.005,.005,.28,6),t.wood,[0,-.04,-.2],[Math.PI/2,0,0]),this._add(new Nt(.007,.007,.016,6),t.brass,[0,-.04,-.06],[Math.PI/2,0,0]);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;this._add(new Nt(.004,.004,.018,5),t.blued,[Math.cos(n)*.058,Math.sin(n)*.058,-.44],[Math.PI/2,0,0])}this.trigger=this._add(Qt(.012,.034,.01,.004),t.steel,je,[0,0,.2]),this._add(new _e(.03,.005,6,14,Math.PI*1.1),t.blued,[0,je[1],je[2]],[0,Math.PI/2,-.4]),this.rearSight=this._add(new _e(.012,.003,6,12),t.blued,[0,.068,-.06]),this._add(Qt(.012,.03,.008,.003),t.blued,[0,.05,-.06]),this._add(new $t(.005,8,6),t.brass,[0,.062,-.42]),this.bolt=new Jt,this.bolt.position.set(0,.012,-.2),this.group.add(this.bolt),this._add(new Nt(.016,.014,.05,8),t.brass,[0,0,0],[Math.PI/2,0,0],this.bolt),this.muzzleLocal=[0,0,-.46],this.grip=this._grip(si,.023,.12,ms),this.foregrip=this._grip(ri,.02,.1,-.1),this._buildArms()}_buildWidowcoil(){const t=this.mats,e=.3,n=.046,i=-.44,r=-.48;this.stringY=n,this.stringRestZ=i,this.stringLatchZ=-.12,this._add(Gn([[-.26,.03],[0,.04],[.1,.062],[.18,.026],[.2,-.014],[.175,-.058],[.1,-.052],[.02,-.03],[-.26,-.026]],.042),t.wood),this._add(Qt(.1,.062,.08,.01),t.iron,[0,.038,r]),this._add(Qt(.108,.07,.028,.008),t.leather,[0,.038,r]),this._add(Qt(.1,.078,.052,.006),t.blued,[0,.078,-.18]),this._add(Qt(.086,.012,.048,.003),t.iron,[0,.122,-.18]),this._add(Qt(.016,.02,.012,.003),t.steel,[.03,.1,-.12]);for(let o=0;o<5;o++)this._add(new Nt(.0055,.006,.17,5),t.wood,[.016,.086-o*.011,-.18],[Math.PI/2,0,0]);this.limbs=[];for(const o of[-1,1]){const l=[[o*.04,n+.005,r],[o*.12,n+.007,r-.024],[o*.2,n+.003,r-.04],[o*.26,n-.001,r-.022],[o*e,n,i]];this.limbs.push(this._add(sn(l,{steps:20,radial:9,radius:c=>.02*(1-c*.14)+.008,flatten:.5}),t.wood)),this._add(new _e(.012,.004,6,10),t.blued,[o*(e-.006),n,i+.004],[0,o*.55,Math.PI/2])}const a=new Nt(.0024,.0024,1,5,1,!0);a.rotateX(Math.PI/2),a.translate(0,0,-.5),this.stringSides=[];for(const o of[-1,1]){const l=new Jt;l.position.set(o*e,n,i),this.group.add(l);const c=new ht(a,t.cord);l.add(c),this.stringSides.push({pivot:l,mesh:c})}this.serving=this._add(new Nt(.004,.004,.04,6),t.leather,[0,n,this.stringLatchZ],[0,0,Math.PI/2]),this.trigger=this._add(Qt(.01,.032,.008,.004),t.steel,je,[0,0,.18]),this._add(new _e(.028,.0045,6,14,Math.PI*1.1),t.blued,[0,je[1],je[2]],[0,Math.PI/2,-.4]),this.rearSight=this._add(new _e(.012,.003,6,12),t.blued,[0,.12,-.08]),this.crank=new Jt,this.crank.position.set(.042,-.004,.02),this.group.add(this.crank),this._add(new Nt(.024,.024,.01,12),t.iron,null,[0,0,Math.PI/2],this.crank),this._add(Qt(.042,.01,.008,.003),t.iron,[0,.02,.004],[0,0,Math.PI/2],this.crank),this._add(new Nt(.007,.007,.024,8),t.leather,[0,.038,.014],[0,0,Math.PI/2],this.crank),this.bolt=new Jt,this.bolt.position.set(0,n,0),this.group.add(this.bolt),this._add(new Nt(.006,.007,.32,6),t.wood,[0,0,-.28],[Math.PI/2,0,0],this.bolt),this._add(new Ue(.01,.04,5),t.steel,[0,0,-.46],[Math.PI/2,0,0],this.bolt),this.muzzleLocal=[0,n,-.52],this.grip=this._grip(si,.022,.118,ms),this.foregrip=this._grip(ri,.019,.095,-.1),this._buildArms()}_buildHellharpoon(){const t=this.mats;this._add(Gn([[-.4,.026],[-.08,.038],[.1,.058],[.2,.022],[.22,-.016],[.19,-.058],[.1,-.054],[.02,-.03],[-.4,-.024]],.048),t.wood),this._add(lr([[0,.2],[.036,.2],[.038,.42],[.042,.62],[.05,.74],[.056,.8],[.034,.82],[0,.814]]),t.iron),this._add(new Nt(.044,.048,.22,12),t.leather,[0,0,-.42],[Math.PI/2,0,0]);for(const n of[-.34,-.42,-.5])this._add(new _e(.048,.006,6,12),t.cord,[0,0,n],[Math.PI/2,0,0]);this._add(new _e(.052,.01,6,14),t.brass,[0,0,-.8],[Math.PI/2,0,0]);for(let n=0;n<5;n++)this._add(Qt(.032,.012,.01,.003),t.blued,[.04,0,-.28-n*.08]),this._add(Qt(.032,.012,.01,.003),t.blued,[-.04,0,-.28-n*.08]);const e=new ht(new _e(.036,.007,6,12),new Mn({color:16738842,emissive:16730640,emissiveIntensity:1.4,metalness:.2,roughness:.4}));e.rotation.x=Math.PI/2,e.position.set(0,0,-.81),this.group.add(e),this.trigger=this._add(Qt(.012,.036,.01,.004),t.steel,je,[0,0,.2]),this._add(new _e(.03,.005,6,14,Math.PI*1.1),t.blued,[0,je[1],je[2]],[0,Math.PI/2,-.4]),this.rearSight=this._add(new _e(.014,.003,6,12),t.blued,[0,.086,-.04]),this.bolt=new Jt,this.bolt.position.set(0,.062,0),this.group.add(this.bolt),this._add(new Nt(.014,.012,.78,7),t.steel,[0,0,-.52],[Math.PI/2,0,0],this.bolt),this._add(new Ue(.026,.12,5),t.steel,[0,0,-.94],[Math.PI/2,0,0],this.bolt);for(const n of[-1,1])this._add(Qt(.05,.004,.022,.002),t.steel,[n*.02,0,-.88],[0,0,n*.35],this.bolt);this._add(new Nt(.018,.016,.03,8),t.leather,[0,0,-.16],[Math.PI/2,0,0],this.bolt),this.muzzleLocal=[0,0,-.82],this.grip=this._grip(si,.024,.13,ms),this.foregrip=this._grip(ri,.021,.11,-.08),this._buildArms()}muzzleWorld(t){const e=this.muzzleLocal??[0,rn,Lg];return this._muzzle.set(e[0],e[1],e[2]),this.group.localToWorld(this._muzzle),this.viewmodel.toWorld(this._muzzle,t)}tryFire(){return this.reloading||this.cooldown>0?!1:this.bolts<=0?(this.dry<=0&&(this.dry=.24),!1):(this.bolts-=1,this.cooldown=this.cooldownTime,this.recoil=this.recoilKick*(4.6/this.mass),this.kick=1,this.draw=0,this.bolt.visible=!1,this.viewmodel.flash(),!0)}tryReload(){return this.reloading||this.bolts===this.max?!1:(this.reloadT=this.reloadTime,!0)}_reloadPose(t){const e=1-this.reloadT/this.reloadTime,n=lt.smoothstep(e,0,.18)-lt.smoothstep(e,.82,1),i=this.spec.kind==="ballista"||this.spec.kind==="repeater",r=lt.smoothstep(e,.2,.68);this.draw=i?r:lt.smoothstep(e,.35,.82),i&&r>0&&r<1&&(this.crankSpin+=t*15);const a=lt.smoothstep(e,.7,.86);this.bolt.visible=a>.02,this.bolt.position.set(0,rn+(1-a)*.1,(1-a)*.16),this._pos.copy(this._restPos),this._pos.y-=n*.055,this._pos.z+=n*.03,this.group.position.copy(this._pos),this.group.rotation.set(this._restRot.x+n*.3,this._restRot.y-n*.22,this._restRot.z+n*.2+Math.sin(e*Math.PI*9)*n*.022)}update(t,e={}){const{moving:n=!1,sprinting:i=!1,crouching:r=!1,turnRate:a,aimingHot:o=!1}=e;if(this.cooldown=Math.max(0,this.cooldown-t),this.dry=Math.max(0,this.dry-t),this.viewmodel.update(t),this.reloadT>0){this.reloadT-=t,this._reloadPose(t),this.reloadT<=0&&(this.reloadT=0,this.bolts=this.max,this.draw=1,this.bolt.visible=!0,this.bolt.position.set(0,rn,0)),this._poseString(),this.crank&&(this.crank.rotation.x=this.crankSpin);return}this.draw=Math.min(1,this.draw+t*3.4),this.bolt.visible=!this.empty&&this.draw>.75,this.kick=lt.damp(this.kick,0,7.5,t),this.recoil=lt.damp(this.recoil,0,9,t);const{sway:l,swayMax:c}=Kt.viewmodel,h=x=>lt.clamp(x,-c,c);a?this._swayTarget.set(h(a.x*l*.25),h(-a.y*l*.25)):this._swayTarget.set(0,0);const u=6.5*(4.6/this.mass);this._sway.x=lt.damp(this._sway.x,this._swayTarget.x,u,t),this._sway.y=lt.damp(this._sway.y,this._swayTarget.y,u,t),this._clock+=t;const d=this._clock,f=i?9.2:5.4,g=n?i?.026:.013:.0024,_=Math.sin(d*f*2)*g,m=Math.sin(d*f)*g*1.5,p=Math.sin(d*1.15)*.0022;this._pos.copy(this._restPos),this._pos.x+=m+this._sway.x,this._pos.y+=_+p+this._sway.y-this.kick*.028,this._pos.z+=this.kick*.05;const M=i&&n;M&&(this._pos.y-=.042,this._pos.z+=.03),r&&(this._pos.y+=.014),o&&!M&&(this._pos.x-=.03,this._pos.y+=.012),this.group.position.copy(this._pos),this.group.rotation.set(this._restRot.x+this.recoil*2.2+_*.6-(M?.075:0),this._restRot.y-this._sway.x*2.4+(M?.5:0),this._restRot.z+this.kick*.05+this._sway.y*1.6-this.dry*.12),this._poseString(),this.crank&&(this.crank.rotation.x=this.crankSpin)}_poseString(){if(!this.stringSides?.length)return;const t=lt.lerp(this.stringRestZ??Pg,this.stringLatchZ??ps,this.draw),e=this.stringY??De[1];this.serving&&(this.serving.position.z=t);for(const{pivot:n,mesh:i}of this.stringSides){fa.set(-n.position.x,e-n.position.y,t-n.position.z);const r=fa.length();n.quaternion.setFromUnitVectors(Rg,fa.divideScalar(r)),i.scale.z=r}for(const n of this.limbs??[])n.scale.z=1-this.draw*.03}dispose(){this.group.traverse(t=>t.geometry?.dispose());for(const t of Object.values(this.mats))t.dispose()}}class Ug{constructor(t,e,n){this.worldCamera=t,this.scene=new Yc,this.scene.environment=n??null;const{fov:i,near:r,far:a}=Kt.viewmodel;this.camera=new qe(i,e,r,a),this.scene.add(this.camera),this.root=new Jt,this.camera.add(this.root),this.key=new Er(16754017,3.4),this.key.position.set(-.6,.8,.4),this.rim=new Er(8229821,1.1),this.rim.position.set(.85,.32,-.6),this.bounce=new ih(9071189,2758416,1.1),this.handFill=new qn(13938832,.95,.9,2),this.handFill.position.set(.14,-.08,-.38),this.muzzle=new qn(16756838,0,3.4,2),this.muzzle.position.set(0,0,-.8);for(const o of[this.key,this.rim,this.bounce,this.handFill,this.muzzle])this.camera.add(o);this._q=new $n,this._sun=new T,this.flashT=0}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setEnvironment(t){this.scene.environment=t??null}syncLighting(t,e,n){this._q.copy(n).invert(),t.getWorldPosition(this._sun),this._sun.lengthSq()>1e-6&&this.key.position.copy(this._sun).normalize().applyQuaternion(this._q),this.key.color.copy(t.color),this.key.intensity=t.intensity*1.15,this.bounce.color.copy(e.color),this.bounce.groundColor.copy(e.groundColor),this.bounce.intensity=e.intensity*1.6}toWorld(t,e){return this.worldCamera.updateMatrixWorld(),e.copy(t).applyMatrix4(this.worldCamera.matrixWorld)}flash(){this.flashT=1}update(t){this.flashT<=0||(this.flashT=Math.max(0,this.flashT-t*9),this.muzzle.intensity=14*this.flashT**2)}}const Ng=[[-1.95,.04],[-1.72,.18],[-1.42,.38],[-1.08,.58],[-.62,.78],[-.18,.92],[.22,.98],[.58,.88],[.88,.68],[1.12,.48],[1.32,.28],[1.46,.14]],rc=new $n;function Ut(s,t){const e=new ht(s,t);return e.castShadow=!0,e.receiveShadow=!0,e}function Vi(s,t){const e=new Pr(s.map(([n,i])=>new Q(i,n)),t);return e.rotateZ(-Math.PI/2),e.computeVertexNormals(),e}function gn(s,{steps:t=16,radial:e=8,radius:n,flatten:i=1,caps:r=!0}){const a=new Cr(s.map(d=>new T(...d))),o=a.computeFrenetFrames(t,!1),l=[],c=[],h=[];for(let d=0;d<=t;d++){const f=d/t,g=a.getPointAt(f),_=n(f),m=o.normals[d],p=o.binormals[d];for(let M=0;M<=e;M++){const x=M/e*Math.PI*2,v=Math.cos(x)*_*i,P=Math.sin(x)*_;l.push(g.x+m.x*v+p.x*P,g.y+m.y*v+p.y*P,g.z+m.z*v+p.z*P),c.push(M/e,f*2)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=d*(e+1)+f,_=g+e+1;h.push(g,g+1,_,_,g+1,_+1)}if(r)for(const d of[0,1]){const f=a.getPointAt(d),g=l.length/3;l.push(f.x,f.y,f.z),c.push(.5,d);const _=d===0?0:t*(e+1);for(let m=0;m<e;m++)d===0?h.push(g,_+m+1,_+m):h.push(g,_+m,_+m+1)}const u=new xe;return u.setAttribute("position",new Yt(l,3)),u.setAttribute("uv",new Yt(c,2)),u.setIndex(h),u.computeVertexNormals(),u}function hr(s,{slack:t=.34,cols:e=28,rows:n=8,tatter:i=0,point:r=0,scallop:a=1}={}){const o=s,l=4.4+r*.55,c=new wr;c.moveTo(0,0),c.quadraticCurveTo(1.55*o,.62+r*.12,3.05*o,.4+r*.08),c.quadraticCurveTo(3.95*o,.24,l*o,-.2-r*.18);const h=new wr;h.moveTo(0,0),h.quadraticCurveTo(.22*o,-.55,.55*o,-1.08*(1-i*.15)),h.quadraticCurveTo(1.1*o,-.92,1.6*o,-1.38*(1-i*.25)),h.quadraticCurveTo(2.15*o,-.86-i*.2,2.75*o,-1.28*(1-i*.1)),h.quadraticCurveTo(3.55*o,-.84,l*o,-.2-r*.18);const u=[],d=[],f=[];for(let _=0;_<=e;_++){const m=_/e,p=c.getPoint(m),M=h.getPoint(m),x=p.y-M.y;for(let v=0;v<=n;v++){const P=v/n,A=lt.lerp(p.x,M.x,P),R=lt.lerp(p.y,M.y,P),I=Math.sin(P*Math.PI),b=Math.sin(Math.min(1,m*1.25)*Math.PI)**.55,S=Math.sin(m*Math.PI*4)*Math.sin(P*Math.PI)*.08*a,L=i>0&&P>.72?Math.sin(m*17)*Math.sin(m*9)*i*.22:0;if(u.push(A,R-L*x,-(t*x*I*b+S*x)),d.push(m,P),_<e&&v<n){const z=_*(n+1)+v,F=z+n+1;f.push(z,F,z+1,F,F+1,z+1)}}}const g=new xe;return g.setAttribute("position",new Yt(u,3)),g.setAttribute("uv",new Yt(d,2)),g.setIndex(f),g.applyMatrix4(new se().makeBasis(new T(0,0,1),new T(1,0,0),new T(0,1,0))),g.computeVertexNormals(),g}function Fg(s,t="wedge"){const e={wedge:[[-.22,.1],[-.08,.3],[.08,.4],[.28,.42],[.48,.34],[.68,.24],[.92,.16],[1.14,.1],[1.28,.04],[1.34,0]],hook:[[-.2,.1],[-.06,.28],[.14,.38],[.38,.34],[.62,.22],[.86,.13],[1.08,.08],[1.24,.045],[1.36,0]],sack:[[-.24,.14],[-.06,.38],[.16,.5],[.4,.48],[.62,.36],[.82,.24],[.98,.16],[1.12,.08],[1.22,0]],disc:[[-.28,.16],[-.1,.4],[.08,.5],[.3,.46],[.52,.3],[.78,.18],[1.02,.1],[1.2,.05],[1.3,0]],short:[[-.18,.12],[-.04,.32],[.14,.4],[.34,.36],[.54,.24],[.74,.14],[.9,.07],[1.02,0]],ram:[[-.26,.16],[-.08,.4],[.14,.5],[.38,.48],[.58,.38],[.76,.26],[.92,.16],[1.06,.08],[1.16,0]]};return Vi(e[t]??e.wedge,s)}function Og(s){return Vi([[0,.08],[.16,.13],[.4,.12],[.68,.08],[.9,.045],[1.02,0]],s)}class zg{constructor(t,e){this.spec=t,this.species=t.id,this.name=t.name,this.maxHp=t.stats.hp,this.hp=this.maxHp,this.armor=t.stats.armor??0,this.alive=!0,this.root=new Jt,this.root.scale.setScalar(t.build.scale),this.bones={},this.hitboxes=[],this.anim=Math.random()*10,this.pain=0,this.jaw=0,this.flapRate=lt.lerp(2.2,5.4,1-t.build.scale/14),this._build(e)}_mat(t){const e=this.spec.look,n=lt.clamp(this.spec.build.scale/6,.85,2.2),i=ze(t.pack(e.pack,{clone:!0}),e.scaleRepeat[0]*n,e.scaleRepeat[1]*n),r=ye(i,{metalness:e.metalness,roughness:e.roughness,emissive:new Pt(...e.emissive),emissiveIntensity:e.emissiveBase,normalScale:new Q(2.2,2.2),envMapIntensity:.65}),a=this.spec.build.hide??"plates",o=a==="columnar"?7:a==="smooth"?22:a==="pits"?9:14,l=a==="columnar"?.014:a==="smooth"?.003:a==="ribs"?.01:.007;r.onBeforeCompile=_=>{_.vertexShader=`varying vec3 vHide;
${_.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
           vHide = position;
           // Plate relief on the hide itself. A lathe is perfectly smooth, and
           // a normal map alone cannot break a silhouette that clean; a few
           // millimetres of overlapping scale is what stops the torso reading
           // as a glazed vase from below.
           float plate = sin(position.x * ${o.toFixed(1)} + position.z * 3.0) * sin(position.y * 11.0 + position.z * 7.0);
           transformed += objectNormal * plate * ${l.toFixed(3)};`),_.fragmentShader=`varying vec3 vHide;
${_.fragmentShader}`.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float band = 0.5 + 0.5 * sin(vHide.x * 1.9 - 0.6);
         float belly = smoothstep(0.7, -0.5, vHide.y);
         float heat = clamp(band * 0.7 + belly * 0.5, 0.0, 1.0);
         totalEmissiveRadiance *= heat * heat;`)};const c=ze(t.pack("dragon_wing",{clone:!0}),.55,.55),h=ye(c,{color:new Pt(e.wingTint),metalness:.04,roughness:lt.clamp(e.roughness+.15,0,1),emissive:new Pt(...e.emissive).multiplyScalar(.55),emissiveIntensity:e.emissiveBase*.3,side:He,transparent:!0,opacity:(this.spec.build.wingStyle??"sail")==="tattered"?.8:(this.spec.build.wingStyle??"sail")==="stone"?.98:.94});h.onBeforeCompile=_=>{_.fragmentShader=_.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
           // Finger veins. The sail used to be one tint from root to tip, so
           // the largest surface on the beast had nothing the eye could use
           // to judge its size against.
           float v0 = smoothstep(0.035, 0.0, abs(vUv.x - 0.22));
           float v1 = smoothstep(0.03, 0.0, abs(vUv.x - 0.48));
           float v2 = smoothstep(0.028, 0.0, abs(vUv.x - 0.72));
           float vein = max(v0, max(v1, v2)) * (1.0 - vUv.y);
           diffuseColor.rgb *= 1.0 - vein * 0.42;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
           #if NUM_DIR_LIGHTS > 0
             // Membrane translucency. A wing spread against a burning sky is lit
             // through as well as on, and without it the largest surface on the
             // beast goes to a flat dark board every time the sun is behind it —
             // which, with a low raking key light and a quarry that circles
             // overhead, is most of the time.
             vec3 sunDir = normalize(directionalLights[0].direction);
             float behind = clamp(-dot(geometryNormal, sunDir), 0.0, 1.0);
             float thinness = mix(0.35, 1.0, abs(dot(geometryNormal, geometryViewDir)));
             reflectedLight.indirectDiffuse +=
               directionalLights[0].color * diffuseColor.rgb * behind * thinness * 2.1;
           #endif`)};const u=new Mn({color:1314829,metalness:.3,roughness:.35}),d=ze(t.pack("bone",{clone:!0}),1.6,1.2),f=ye(d,{color:a==="columnar"?6969930:a==="smooth"?14207152:12891290,metalness:.08,roughness:.55,envMapIntensity:.4}),g=new Mn({color:new Pt(e.glow),emissive:new Pt(e.glow),emissiveIntensity:1.6,metalness:.05,roughness:.7});return this.materials={body:r,wing:h,claw:u,horn:f,maw:g},this.materials}_addHit(t,e,n){e.userData.hit={name:t,multiplier:n,dragon:this},this.hitboxes.push(e)}_build(t){const{build:e}=this.spec,{body:n,wing:i,claw:r}=this._mat(t),a=e.bodyGirth,o=e.scale>9?22:e.scale>5?18:14,l=new Jt,c=Ut(Vi(Ng,o),n);c.scale.set(1,a,a*.88),l.add(c),this.root.add(l),this.bones.chest=l,this._addHit("body",c,1),this._buildKeel(l,n,e,a),this._buildNeck(l,n,r,e,o),this._buildTail(l,n,e,a),this._buildWings(l,n,i,r,e),this._buildLegs(l,n,r,a),this.hitboxes.sort((h,u)=>u.userData.hit.multiplier-h.userData.hit.multiplier),this.root.rotation.y=-Math.PI/2,this.glow=new qn(this.spec.look.glow,this.spec.look.glowIntensity,52,1.5),this.glow.position.set(.6,0,0),this.root.add(this.glow)}_buildKeel(t,e,n,i){const r=n.hide??"plates",a=r==="smooth"?4:r==="ribs"?5:7;if(r!=="smooth")for(let o=0;o<a;o++){const l=o/Math.max(1,a-1),c=Ut(new Be(.38,.07,(.72-l*.22)*i),e);c.position.set(.85-l*2.15,-.7*i,0),c.rotation.z=.18,t.add(c)}if(r==="plates"||r==="columnar")for(let o=0;o<8;o++){const l=o/7,c=Ut(new Be(.26,.055,.2*i),e);c.position.set(.95-l*2.55,(.82-l*.18)*i,0),c.rotation.z=-.35,t.add(c)}if(r==="ribs")for(let o=0;o<6;o++){const l=o/5;for(const c of[-1,1]){const h=Ut(gn([[.7-l*1.8,-.15*i,.08*c],[.55-l*1.8,-.55*i,.38*c],[.4-l*1.8,-.72*i,.12*c]],{steps:8,radial:5,radius:()=>.035,flatten:.55}),e);t.add(h)}}if(r==="pits")for(let o=0;o<10;o++){const l=Ut(new $t(.08+o%3*.02,7,5),e);l.scale.set(1.2,.35,1.1),l.position.set(.7-o%5*.45,(o%2===0?.15:-.25)*i,(o%2*2-1)*.42*i),t.add(l)}if(r==="columnar")for(let o=0;o<8;o++){const l=o/7;for(const c of[-1,1]){const h=Ut(new Nt(.12,.14,.42,6),e);h.position.set(.55-l*1.9,.12*i,(.55+o%2*.12)*c*i),h.rotation.z=.55*c,h.rotation.x=.2*c,t.add(h)}}if(n.spikes){const o=r==="columnar"?5:7;for(let l=0;l<o;l++){const c=l/Math.max(1,o-1),h=.2+Math.sin(c*Math.PI)*(r==="columnar"?.22:.34),u=Ut(gn([[0,0,0],[.02,h*.45,0],[-.04,h,0]],{steps:6,radial:5,radius:d=>.055*(1-d)+.008}),e);u.position.set(.9-c*2.5,(.88-c*.15)*i,0),t.add(u)}}if(n.crest==="crown"||n.mane)for(let o=0;o<5;o++){const l=o/4,c=Ut(new Be(.22,.08,.34*i),e);c.position.set(.55-l*.7,(.7+l*.08)*i,0),c.rotation.z=-.4,t.add(c)}if(n.vents)for(const o of[-1,1])for(let l=0;l<3;l++){const c=Ut(new _e(.05,.014,5,8),this.materials.maw);c.position.set(.55-l*.22,-.15*i,.48*o*i),c.rotation.y=Math.PI/2,t.add(c)}if(i>1.25)for(const[o,l,c,h,u,d]of[[.35,.15,.62,.7,.45,.22],[.35,.15,-.62,.7,.45,.22],[-.15,.35,0,.9,.22,.7],[-.85,.2,.5,.55,.35,.18],[-.85,.2,-.5,.55,.35,.18]]){const f=Ut(new Be(h,u,d),e);f.position.set(o,l*i,c*i),t.add(f)}}_buildNeck(t,e,n,i,r){const a=i.neck>1.2?3:2,o=1.15*i.neck/(a/2);let l=t;this.bones.neck=[];for(let c=0;c<a;c++){const h=new Jt;h.position.set(c===0?1.12:o*.86,c===0?.2:.05,0);const u=.42-c*.08,d=.54-c*.08,f=Ut(Vi([[0,d],[o*.35,(d+u)*.52],[o*.85,u]],Math.max(10,r-4)),e);if(h.add(f),i.crest==="frill")for(const g of[-1,1]){const _=Ut(new Be(o*.45,.04,.16),e);_.position.set(o*.4,.02,(u+.08)*g),_.rotation.y=.45*g,h.add(_)}l.add(h),this.bones.neck.push(h),this._addHit("neck",f,1.6),l=h}this._buildHead(l,e,n,i,o,r)}_buildHead(t,e,n,i,r,a){const o=new Jt;o.position.set(r*.88,.03,0),o.scale.setScalar(i.headSize);const l=i.snout??"wedge",c=Ut(Fg(a,l),e);c.scale.set(1,l==="disc"?.72:.92,l==="sack"||l==="disc"?.95:.78),o.add(c);const h=Ut(new Be(l==="ram"?.36:.28,.1,l==="disc"?.72:.58),e);if(h.position.set(.32,l==="ram"?.28:.22,0),h.rotation.z=-.18,o.add(h),l==="hook"){const f=Ut(gn([[.9,-.02,0],[1.12,-.1,0],[1.28,-.22,0],[1.18,-.08,0]],{steps:8,radial:6,radius:g=>.055*(1-g*.55),flatten:.55}),this.materials.horn);o.add(f)}const u=Ut(Vi([[.2,.08],[.55,.12],[.95,.04]],8),this.materials.maw);u.scale.set(1,.35,.45),u.position.set(.22,-.04,0),o.add(u);for(const f of[-1,1]){const g=Ut(gn([[.18,.16,.16*f],[.42,.26,.2*f],[.62,.2,.16*f]],{steps:8,radial:6,radius:()=>.045}),e);o.add(g)}this.jawBone=new Jt,this.jawBone.position.set(.16,-.12,0);const d=Ut(Og(Math.max(10,a-4)),e);d.scale.set(1,.55,.7),d.position.y=-.02,this.jawBone.add(d);for(let f=0;f<5;f++)for(const g of[-1,1]){const _=Ut(new Ue(.024,.12+(f<2?.04:0),5),n);_.position.set(.28+f*.16,.04,.08*g),_.rotation.z=Math.PI,this.jawBone.add(_)}o.add(this.jawBone);for(let f=0;f<4;f++)for(const g of[-1,1]){const _=Ut(new Ue(.022,.1,4),n);_.position.set(.4+f*.16,-.06,.09*g),o.add(_)}this.bones.head=o,t.add(o),this._addHit("head",c,3),this._buildHorns(o,n,i),this._buildFace(o,e,i),this.mouth=new we,this.mouth.position.set(1.18,-.06,0),o.add(this.mouth)}_buildHorns(t,e,n){const i=n.hornStyle??"swept",r=this.materials.horn,a=Math.max(1,Math.round(n.horns/2)),o=(l,c,h)=>i==="ram"?[[0,0,0],[.15*l,.45*l,.1*c],[.55*l,.7*l,.22*c],[.95*l,.15*l,.18*c],[.7*l,-.35*l,.08*c]]:i==="antler"?[[0,0,0],[.08*l,.5*l,.08*c],[.22*l,1.05*l,.2*c],[.55*l,1.25*l,.08*c],[.85*l,1.05*l,-.06*c]]:i==="fan"?[[0,0,0],[.2*l,.35*l,.04*c],[.55*l,.7*l,.08*c],[.95*l,.55*l,.02*c]]:i==="nub"?[[0,0,0],[.08*l,.35*l,.04*c],[.18*l,.55*l,.02*c]]:[[0,0,0],[.12*l,.4*l,.06*c],[.28*l,.85*l,.14*c],[.55*l,1.05*l,.1*c],[.95*l,.95*l,.04*c]];for(let l=0;l<a;l++){const c=l/Math.max(1,a),h=n.hornLength*(1-c*.32);for(const u of[-1,1]){const d=Ut(gn(o(h,u),{steps:12,radial:6,radius:f=>(.075-l*.012)*(1-f*.72)+.008,flatten:i==="fan"?.45:.85}),r);if(d.position.set(-.02-c*.24,.32-c*.06,(.16+c*.1)*u),t.add(d),i==="antler"){const f=Ut(gn([[0,0,0],[.12*h,.28*h,.1*u],[.32*h,.22*h,.18*u]],{steps:8,radial:5,radius:g=>.035*(1-g*.6)+.006}),r);f.position.set(.06,.55*h,.12*u),d.add(f)}}}if(i==="spike"){const l=Ut(gn([[0,0,0],[.18,.16,0],[.38,.08,0]],{steps:8,radial:6,radius:c=>.045*(1-c*.7)+.008}),r);l.position.set(.72,.12,0),t.add(l)}if(n.crest==="frill"||n.crest==="crown"||n.hornLength>.6){const l=n.crest==="crown"?7:5;for(let c=0;c<l;c++){const h=-.75+c/(l-1)*1.5,u=Ut(new Be(.05,n.crest==="crown"?.28:.22,.035),this.materials.body);u.position.set(-.18,.28,Math.sin(h)*.2),u.rotation.set(h*.35,0,.55),t.add(u)}}}_buildFace(t,e,n){this.eyes=[];const i=n.snout??"wedge",r=i==="short"&&!n.spikes?1.35:i==="disc"?1.15:1,a=i==="disc"?.3:.22;for(const o of[-1,1]){const l=Ut(new $t(.09*r,10,8),e);l.scale.set(.85,.7,i==="disc"?.7:.45),l.position.set(.38,.12,a*o),t.add(l);const c=new ht(new $t(.068*r,10,8),new an({color:this.spec.look.eye}));c.position.set(.42,.12,(a+.02)*o),t.add(c),this.eyes.push(c);const h=new ht(new $t(.028*r,8,6),new an({color:459779}));h.position.set(.475,.12,(a+.03)*o),t.add(h);const u=Ut(new $t(i==="sack"?.045:.03,6,5),e);if(u.scale.set(1.2,.6,.7),u.position.set(i==="short"?.92:1.08,.02,.07*o),t.add(u),i==="disc"){const d=Ut(new $t(.22,10,8),e);d.scale.set(.35,.85,1.15),d.position.set(.22,.08,.28*o),t.add(d)}if(n.jowls||i==="sack"){const d=Ut(new $t(.16,10,8),e);d.scale.set(1.15,.85,.9),d.position.set(.28,-.16,.2*o),t.add(d);const f=Ut(new $t(.07,8,6),this.materials.maw);f.position.set(.32,-.16,.22*o),t.add(f)}if(i==="disc"){const d=Ut(gn([[.7,-.02,.06*o],[.95,-.08,.18*o],[1.15,-.04,.28*o]],{steps:8,radial:4,radius:f=>.012*(1-f*.5)}),this.materials.horn);t.add(d)}}if(n.jowls||!n.spikes&&n.headSize>1.02){const o=new ht(hr(.22,{slack:.5,cols:8,rows:4}),this.materials.wing);o.scale.set(.55,.7,.55),o.rotation.z=-1.15,o.position.set(.35,-.18,0),this.jawBone.add(o)}}_buildTail(t,e,n,i){const r=n.tailSegments;let a=t,o=-1.78;this.bones.tail=[];for(let c=0;c<r;c++){const h=c/r,u=new Jt;u.position.set(o,-.05*c,0);const d=(.48-h*.36)*i,f=Ut(Vi([[0,d],[.5,d*.85],[.95,d*.68]],10),e);if(f.rotation.y=Math.PI,u.add(f),n.spikes&&(n.tailStyle??"barbed")!=="club"){const g=Ut(gn([[0,0,0],[.02,.16,0],[-.02,.32,0]],{steps:5,radial:5,radius:_=>.05*(1-_)+.006}),e);g.position.set(-.3,d+.06,0),u.add(g)}if((n.tailStyle??"barbed")==="barbed")for(const g of[-1,1]){const _=Ut(new Ue(.04,.18,5),this.materials.claw);_.position.set(-.35,0,d*.7*g),_.rotation.x=Math.PI/2*g,u.add(_)}a.add(u),this.bones.tail.push(u),this._addHit("tail",f,.7),a=u,o=-.92}const l=n.tailStyle??"barbed";if(l==="club"){const c=Ut(new $t(.28*i,10,8),this.materials.horn);c.scale.set(1.4,.85,.9),c.position.set(-.55,0,0),a.add(c);for(const h of[-1,1]){const u=Ut(new Ue(.06,.2,5),this.materials.claw);u.position.set(-.55,.12,.18*h*i),a.add(u)}}else if(l==="fin"){const c=new ht(hr(.28,{slack:.2,cols:8,rows:4}),this.materials.wing);c.scale.set(.7,1.1,1),c.rotation.x=Math.PI/2,c.position.set(-.55,.08,0),a.add(c)}else{const c=Ut(gn([[0,0,0],[-.28,.04,.12],[-.7,.02,0],[-.28,.04,-.12],[0,0,0]],{steps:10,radial:6,radius:h=>.08*Math.sin(h*Math.PI)+.012,flatten:.45}),this.materials.claw);c.position.set(-.85,0,0),a.add(c)}}_buildWings(t,e,n,i,r){const a=r.wingSpan;this.bones.wings=[],this.bones.elbows=[],this.bones.wrists=[];for(const o of[-1,1]){const l=new Jt;l.position.set(.22,.5*r.bodyGirth,.52*o),t.add(l);const c=Ut(new $t(.26,12,10),e);c.scale.set(1.15,.82,.95),l.add(c);const h=2.35*a,u=Ut(new Nt(.075,.155,h,8),e);u.rotation.x=Math.PI/2,u.position.set(-.08,.04,h*.5*o),l.add(u);const d=new Jt;d.position.set(-.1,.02,h*o),l.add(d),d.add(Ut(new $t(.13,10,8),e));const f=2.05*a,g=Ut(new Nt(.045,.085,f,7),e);g.rotation.x=Math.PI/2,g.position.set(-.18,-.06,f*.5*o),d.add(g);const _=new Jt;_.position.set(-.32,-.14,f*o),d.add(_),_.add(Ut(new $t(.08,8,6),e));const m=r.wingStyle??"sail",p={sail:{slack:.34,tatter:0,point:0,scallop:1},tattered:{slack:.3,tatter:.85,point:.1,scallop:1.35},stone:{slack:.16,tatter:0,point:0,scallop:.4},silent:{slack:.48,tatter:0,point:.15,scallop:.7},racer:{slack:.22,tatter:0,point:.7,scallop:.85}}[m]??{slack:.34,tatter:0,point:0,scallop:1},M=new ht(hr(a,{...p,cols:28,rows:8}),n);M.castShadow=!0,M.scale.z=o,M.position.set(-.2,-.08,.08*o),d.add(M),this._addHit("wing",M,.55);const x=new ht(hr(a*.42,{slack:p.slack*.65,cols:12,rows:5,tatter:p.tatter*.5,point:p.point}),n);x.castShadow=!0,x.scale.z=o,x.position.set(-.05,-.02,.04*o),l.add(x);for(const[P,A,R]of[[1.95,-.15,.05],[1.25,-.85,.042],[.7,-.95,.034]]){const I=Math.hypot(P*a,A),b=Ut(new Nt(R*.55,R,I,6),e);b.position.set(A*.45,-.04,P*a*.5*o),b.rotation.x=Math.PI/2,b.rotation.y=Math.atan2(A,P*a)*-o,_.add(b)}const v=Ut(new Ue(m==="stone"?.08:.055,m==="racer"?.48:.38,5),i);if(v.position.set(.06,.02,2.05*a*o),v.rotation.z=-Math.PI/2.5,_.add(v),m==="sail"||m==="tattered"){const P=Ut(new Ue(.04,.22,5),i);P.position.set(.12,-.04,.15*o),P.rotation.z=Math.PI/2,_.add(P)}l.userData.side=o,d.userData.side=o,_.userData.side=o,this.bones.wings.push(l),this.bones.elbows.push(d),this.bones.wrists.push(_)}}_buildLegs(t,e,n,i){this.bones.legs=[],this.bones.knees=[];const r=lt.clamp(i,.55,1.55);for(const[a,o,l]of[[.72,.42,1*r],[.72,-.42,1*r],[-1.25,.46,1.25*r],[-1.25,-.46,1.25*r]]){const c=new Jt;c.position.set(a,-.42*i,o*i);const h=Ut(new Nt(.14*l,.21*l,.62*l,8),e);h.position.y=-.28*l,c.add(h);const u=new Jt;u.position.set(0,-.58*l,.02*l*Math.sign(o)),c.add(u);const d=Ut(new Nt(.09*l,.13*l,.55*l,8),e);d.position.set(0,-.26*l,-.08*l*Math.sign(o)),u.add(d);const f=Ut(new Be(.24*l,.09*l,.32*l),e);f.position.set(0,-.54*l,-.16*l*Math.sign(o)),u.add(f);for(let g=-1;g<=1;g++){const _=Ut(new Ue(.045*l,.24*l,5),n);_.position.set(.08*l*g,-.56*l,-.34*l*Math.sign(o)),_.rotation.x=Math.PI/2*Math.sign(o)*-1,u.add(_)}t.add(c),this.bones.legs.push(c),this.bones.knees.push(u)}}mouthWorld(t=new T){return this.mouth.getWorldPosition(t),t}headForward(t=new T){return this.bones.head.getWorldQuaternion(rc),t.set(1,0,0).applyQuaternion(rc).normalize()}takeDamage(t,e="body"){if(!this.alive)return 0;const n=e==="head"?this.armor*.25:this.armor,i=Math.max(1,t*(1-n));return this.hp=Math.max(0,this.hp-i),this.pain=.55,this.hp<=0&&(this.alive=!1),i}get hpFraction(){return this.hp/this.maxHp}update(t,e){this.anim+=t;const n=this.spec.look,i=e.flap??1,r=this.flapRate*(e.flapRate??1),a=this.anim*r,o=Math.cos(a)>0,l=Math.sin(a),c=lt.clamp(1-i,0,1),h=lt.lerp(o?.82:.1,.08,c)*Math.max(.15,i),u=e.roll??0,d=e.roar??0;this.bones.wings.forEach((x,v)=>{const P=x.userData.side,A=Math.max(0,u*P),R=lt.lerp(l*.52*i-.04,.14,c);x.rotation.x=(R-u*.35)*P,x.rotation.y=l*.06*i*P,x.rotation.z=lt.damp(x.rotation.z,d*-.08,6,t);const I=this.bones.elbows[v],b=this.bones.wrists[v];I.rotation.y=(-h*.7-A*.45)*P,I.rotation.x=(h*.28+A*.15)*P,b.rotation.y=-h*.35*P,b.rotation.x=l*.12*i*P});const f=e.lookAt??0,g=e.lookPitch??0;this.bones.neck.forEach((x,v)=>{const P=(v+1)/this.bones.neck.length,A=Math.sin(this.anim*1.4+v*.4)*.05;x.rotation.z=A+(e.neck??0)*P*.35+g*P*.16+d*.12,x.rotation.y=lt.damp(x.rotation.y,f*.16*P,4,t)}),this.bones.head.rotation.z=lt.damp(this.bones.head.rotation.z,g*.5+d*.18,5,t),this.bones.head.rotation.y=lt.damp(this.bones.head.rotation.y,f*.42,5,t);const _=e.lash??1;this.bones.tail.forEach((x,v)=>{const P=(v+1)/this.bones.tail.length;x.rotation.y=Math.sin(this.anim*2.1+v*.7)*.16*_-u*.35*P,x.rotation.z=Math.cos(this.anim*1.6+v)*.05+(e.dead?.15*P:0)}),this.bones.legs.forEach((x,v)=>{const P=this.bones.knees[v];if(e.grounded){const A=Math.sin(this.anim*2.4+v*1.6)*.35;x.rotation.x=lt.damp(x.rotation.x,A,6,t),P.rotation.x=lt.damp(P.rotation.x,Math.max(0,-A)*.6,6,t)}else{const A=.72+Math.sin(this.anim*1.1+v)*.04;x.rotation.x=lt.damp(x.rotation.x,A,3.2,t),P.rotation.x=lt.damp(P.rotation.x,.85,3.2,t)}});const m=1+Math.max(0,-l)*.025*i+(e.charge??0)*.03;this.bones.chest.scale.set(m,1+(e.charge??0)*.02,m),this.pain=Math.max(0,this.pain-t),this.jaw=lt.damp(this.jaw,d>.05?.85:e.jaw??.05,8,t),this.jawBone.rotation.z=this.jaw;const p=Math.sin(this.anim*2.2)*.22+1,M=e.charge??0;this.materials.body.emissiveIntensity=n.emissiveBase*p+this.pain*2+M*3,this.materials.wing.emissiveIntensity=n.emissiveBase*.3*p+M,this.glow&&(this.glow.intensity=n.glowIntensity*p*(1+M*1.5)),e.dead?(this.root.rotation.x=lt.damp(this.root.rotation.x,1.05,2.2,t),this.root.rotation.z=lt.damp(this.root.rotation.z,.7,1.6,t),this.bones.wings.forEach((x,v)=>{const P=x.userData.side;x.rotation.x=lt.damp(x.rotation.x,.95*P,2.4,t),this.bones.elbows[v].rotation.y=lt.damp(this.bones.elbows[v].rotation.y,-1.1*P,2.4,t)}),this.bones.neck.forEach(x=>{x.rotation.z=lt.damp(x.rotation.z,-.35,2,t)})):(this.root.rotation.x=lt.damp(this.root.rotation.x,e.pitch??0,4,t),this.root.rotation.z=lt.damp(this.root.rotation.z,e.roll??0,3,t))}dispose(){this.root.traverse(t=>{t.geometry&&t.geometry.dispose()});for(const t of Object.values(this.materials))t.dispose()}}const Xt={PATROL:"patrol",STALK:"stalk",ALERT:"alert",ATTACK:"attack",RECOVER:"recover",PAIN:"pain",FLEE:"flee",DEAD:"dead"},ac={[jt.DIVE_FIRE]:{band:[18,260],closer:!0,tell:"Dive-fire. Break out of the cone."},[jt.STRAFE_RUN]:{band:[14,260],closer:!0,tell:"Strafing run — it will not slow down."},[jt.HOVER_BARRAGE]:{band:[22,95],tell:"It is holding station to burn you down."},[jt.LAVA_MORTAR]:{band:[28,140],tell:"Mortar arc — move sideways, do not backpedal."},[jt.AMBUSH_LUNGE]:{band:[6,120],closer:!0,tell:"Lunge incoming — it came in silent."},[jt.VENOM_SPRAY]:{band:[8,62],tell:"Caustic spray. The cloud lingers, keep moving."},[jt.TAIL_SWEEP]:{band:[0,36],tell:"Tail sweep at ground level — get airborne or get clear."}},fe=new T,pe=new T,Fi=new T,oc=new T;function Ne(s){return(Math.random()-.5)*s}class Bg{constructor(t,e,n){this.dragon=t,this.spec=t.spec,this.mind=t.spec.mind,this.stats=t.spec.stats,this.world=e,this.home=n.clone(),this.clearance=t.spec.build.scale*.5+2,this.state=Xt.PATROL,this.t=0,this.phaseT=0,this.angle=Math.random()*Math.PI*2,this.target=t.root.position.clone(),this.heading=new T(0,0,1),this.speed=this.stats.flySpeed,this.attackStyle=null,this.phase="windup",this.breathKind=t.spec.mind.breath??"fire",this.breath={active:!1,kind:this.breathKind,spread:1,aim:new T(0,0,1)},this.requests=[],this.melee=0,this.charge=0,this.flap=1,this.roll=0,this.pitch=.06,this.engaged=!1,this.hint=t.spec.lines.idle,this.stateLabel="patrol",this._hitCount=0,this._flinch=1,this.fallSpeed=4,this.roar=0}get position(){return this.dragon.root.position}get aggressionNow(){const t=1-this.dragon.hpFraction,e=this.mind.courage;return lt.clamp(this.mind.aggression+this._packNerve()+t*(e-.5)*.8,0,1)}_packNerve(){if(!this.mind.packMinded)return 0;const t=(this._alliesEngaged??0)*.5+(this._alliesAttacking??0);return Math.min(t,3)*this.mind.packMinded}update(t,e){switch(this.t+=t,this.phaseT+=t,this._playerPos=e?.playerPos??null,this._alliesAttacking=Math.max(0,(e?.alliesAttacking??0)-(this.state===Xt.ATTACK?1:0)),this._alliesEngaged=Math.max(0,(e?.alliesEngaged??0)-(this.engaged?1:0)),this.melee=0,this.breath.active=!1,this.charge=Math.max(0,this.charge-t*2),!this.dragon.alive&&this.state!==Xt.DEAD&&this._enter(Xt.DEAD),this.state){case Xt.PATROL:this._patrol(t,e);break;case Xt.STALK:this._stalk(t,e);break;case Xt.ALERT:this._alert(t,e);break;case Xt.ATTACK:this._attack(t,e);break;case Xt.RECOVER:this._recover(t,e);break;case Xt.PAIN:this._pain(t,e);break;case Xt.FLEE:this._flee(t,e);break;case Xt.DEAD:this._dead(t);break}this._move(t),this._pose(t,e),this._aimBreath(t,e)}_aimBreath(t,e){if(!e?.playerPos||this.state===Xt.DEAD){this.dragon.headForward(this.breath.aim);return}if(fe.subVectors(e.playerPos,this.dragon.mouthWorld(oc)),fe.lengthSq()<1e-6)return;const n=this.stats.turnRate*(this.breath.active?1.05:1.6);this.breath.aim.lerp(fe.normalize(),1-Math.exp(-t*n)).normalize()}breathTarget(t=new T){return t.copy(this.dragon.mouthWorld(oc)).addScaledVector(this.breath.aim,this.stats.attackRange)}_enter(t){this.state=t,this.phaseT=0,this.stateLabel=t,t!==Xt.ATTACK&&(this._pressed=!1),t===Xt.ATTACK&&(this.roar=1,this.announceRoar=!0)}_move(t){const e=this.position;if(this.state===Xt.DEAD){e.y-=this.fallSpeed*t,this.fallSpeed=Math.min(52,this.fallSpeed+34*t);const r=this.world.heightAt(e.x,e.z)+this.dragon.spec.build.scale*.22;e.y<=r&&(e.y=r,this.grounded=!0);return}fe.subVectors(this.target,e);const n=fe.length();if(n>.001){const r=Math.min(n,this.speed*t);fe.divideScalar(n),e.addScaledVector(fe,r),this.heading.lerp(fe,1-Math.exp(-t*this.stats.turnRate)),this.heading.lengthSq()>1e-4&&this.heading.normalize()}const i=this.world.heightAt(e.x,e.z)+this.clearance;if(e.y<i&&(e.y=lt.damp(e.y,i,8,t)),this.grounded=e.y<=i+.5,this._playerPos){const r=this.clearance*.85+2;fe.subVectors(e,this._playerPos);const a=fe.length();a>.001&&a<r&&e.copy(this._playerPos).addScaledVector(fe.divideScalar(a),r)}}_pose(t,e){const n=Math.atan2(this.heading.x,this.heading.z)-Math.PI/2,i=this.dragon.root.rotation.y,r=((n-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.dragon.root.rotation.y=i+r*(1-Math.exp(-t*this.stats.turnRate));let a=0,o=0;if(e?.playerPos&&this.state!==Xt.DEAD){fe.subVectors(e.playerPos,this.position);const c=Math.max(fe.length(),.001);o=lt.clamp(fe.y/c,-.85,.7),fe.divideScalar(c),Fi.copy(this.heading).cross(fe),a=lt.clamp(Fi.y*2,-1,1)}this.roar=Math.max(0,this.roar-t*1.6);const l=this.breath.active||this.state===Xt.ATTACK?1.15:.65;this.dragon.update(t,{jaw:this.breath.active?.6:this.state===Xt.ATTACK?.25:.05,pitch:this.pitch,roll:this.roll,flap:this.flap,flapRate:this.state===Xt.ATTACK?1.35:1,lash:this.attackStyle===jt.TAIL_SWEEP&&this.phase==="commit"?3.4:this.state===Xt.PAIN?2.4:1,neck:this.breath.active?-.12:0,lookAt:a*l,lookPitch:o*l,roar:this.roar,grounded:this.grounded,charge:this.charge,dead:this.state===Xt.DEAD})}_patrol(t,e){this.flap=1,this.roll=Math.sin(this.t*.5)*.12,this.pitch=.05,this.speed=this.stats.flySpeed*.75,this.angle+=t*(.3+this.mind.erratic*.5);const n=pe.copy(this.home).lerp(e.playerPos,(1-this.mind.territorial)*.55),i=this.stats.patrolRadius;this.target.set(n.x+Math.cos(this.angle)*i+Ne(this.mind.erratic*14),this.home.y+Math.sin(this.t*.6)*4+Ne(this.mind.erratic*5),n.z+Math.sin(this.angle)*i*.7+Ne(this.mind.erratic*14)),this._shouldEngage(e)&&(this.engaged=!0,this.mind.stalker?(this._enter(Xt.STALK),this.hint=this.spec.lines.spot):(this._enter(Xt.ALERT),this.hint=this.spec.lines.spot))}_stalk(t,e){this.flap=.12,this.pitch=.02,this.speed=this.stats.flySpeed*.85;const n=pe.subVectors(e.playerPos,this.position).setY(0).normalize(),i=this.stats.attackRange*1.9;this.target.copy(e.playerPos).addScaledVector(n,-i).setY(this.world.heightAt(e.playerPos.x,e.playerPos.z)+10+Math.sin(this.t*.7)*3),this.roll=lt.damp(this.roll,0,3,t);const r=this.phaseT>this.mind.patience*1.6,a=e.playerVulnerable||this.phaseT>this.mind.patience*3;r&&a&&(this._chooseAttack(e),this._enter(Xt.ATTACK))}_alert(t,e){this.flap=1.15,this.speed=this.stats.flySpeed,this.roll=lt.damp(this.roll,0,3,t),this.target.copy(e.playerPos).add(pe.set(Ne(24),26+this.stats.patrolHeight*.25,Ne(24)));const n=lt.lerp(1.6,.35,this.aggressionNow)*this.mind.patience;this.phaseT>n&&(this._chooseAttack(e),this._enter(Xt.ATTACK))}_attack(t,e){switch(this.attackStyle){case jt.DIVE_FIRE:this._diveFire(t,e);break;case jt.STRAFE_RUN:this._strafeRun(t,e);break;case jt.HOVER_BARRAGE:this._hoverBarrage(t,e);break;case jt.LAVA_MORTAR:this._lavaMortar(t,e);break;case jt.AMBUSH_LUNGE:this._ambushLunge(t,e);break;case jt.VENOM_SPRAY:this._venomSpray(t,e);break;case jt.TAIL_SWEEP:this._tailSweep(t,e);break;default:this._endAttack()}}_recover(t,e){this.flap=1,this.pitch=-.14,this.speed=this.stats.flySpeed,this.roll=lt.damp(this.roll,0,2.5,t);const n=pe.subVectors(this.position,e.playerPos).setY(0).normalize();this.target.copy(e.playerPos).addScaledVector(n,this.stats.attackRange*1.8).setY(this.home.y+Ne(6));const i=lt.lerp(4.2,.9,this.aggressionNow)*this.mind.patience;this.phaseT>i&&(this._shouldFlee()?(this._enter(Xt.FLEE),this.hint=this.spec.lines.flee):this.mind.stalker?this._enter(Xt.STALK):this._shouldEngage(e)?(this._chooseAttack(e),this._enter(Xt.ATTACK)):(this._enter(Xt.PATROL),this.hint=this.spec.lines.idle))}_pain(t,e){this.flap=1.5,this.speed=this.stats.flySpeed*1.2,this.roll=lt.damp(this.roll,.5*this._flinch,5,t);const n=pe.subVectors(this.position,e.playerPos).normalize();this.target.copy(this.position).addScaledVector(n,18).add(fe.set(0,8,0));const i=lt.lerp(1.1,.18,this.mind.courage);this.phaseT>i&&(this._shouldFlee()?(this._enter(Xt.FLEE),this.hint=this.spec.lines.flee):this.aggressionNow>.7?(this._chooseAttack(e),this._enter(Xt.ATTACK)):this._enter(Xt.RECOVER))}_flee(t,e){this.flap=1.6,this.pitch=-.4,this.speed=this.stats.flySpeed*1.5;const n=pe.subVectors(this.position,e.playerPos).setY(0).normalize();this.target.copy(this.position).addScaledVector(n,60).setY(this.home.y+34),this.position.distanceTo(e.playerPos)>this.stats.spotRange*.9&&this.phaseT>6&&(this._enter(Xt.PATROL),this.hint=this.spec.lines.idle)}_dead(t){this.flap=0,this.hint=this.spec.lines.dead,this.stateLabel="dead"}_diveFire(t,e){const i=pe.subVectors(e.playerPos,this.position).length();this.phase==="windup"?(this.flap=1.3,this.pitch=-.3,this.speed=this.stats.flySpeed*1.1,this.target.copy(e.playerPos).add(fe.set(Ne(10),34,Ne(10))),(this.phaseT>1.1||this.position.y>e.playerPos.y+28)&&this._phase("commit")):this.phase==="commit"?(this.flap=.35,this.pitch=-.5,this.charge=Math.min(1,this.charge+t*2.5),this.speed=this.stats.diveSpeed,this.target.copy(e.playerPos).add(fe.set(0,this.clearance*.7,0)),(i<this.stats.attackRange*.85||this.phaseT>3.2)&&this._phase("release")):(this.flap=.7,this.pitch=.12,this.speed=this.stats.flySpeed*.9,this.breath.active=i<this.stats.attackRange,this.breath.kind="fire",this.target.copy(e.playerPos).add(fe.set(Ne(6),16,Ne(6))),this.phaseT>1.2+this.mind.patience*.4&&this._endAttack())}_strafeRun(t,e){if(this.phase==="windup")this.flap=1.5,this.speed=this.stats.flySpeed*1.2,pe.subVectors(this.position,e.playerPos).setY(0).normalize(),Fi.set(-pe.z,0,pe.x).multiplyScalar(this.stats.attackRange*1.6),this.target.copy(e.playerPos).addScaledVector(pe,this.stats.attackRange*1.4).add(Fi),this.target.y=e.playerPos.y+16+Ne(6),this.roll=lt.damp(this.roll,.85,4,t),(this.phaseT>.9||this.position.distanceTo(this.target)<8)&&(this._phase("commit"),this._runVector=pe.subVectors(e.playerPos,this.position).setY(0).normalize().clone(),this._runFrom=this.position.clone());else if(this.phase==="commit"){this.flap=.5,this.pitch=-.12,this.speed=this.stats.flySpeed*2,this.roll=lt.damp(this.roll,-.4,5,t),this.target.copy(this._runFrom).addScaledVector(this._runVector,this.stats.attackRange*4).setY(e.playerPos.y+8);const n=this.position.distanceTo(e.playerPos);this.breath.active=n<this.stats.attackRange*.8,this.breath.kind="fire",this.breath.spread=1.4,(this.phaseT>2.6||this.position.distanceTo(this.target)<10)&&this._phase("release")}else this.flap=1.4,this.pitch=-.34,this.speed=this.stats.flySpeed*1.4,this.roll=lt.damp(this.roll,.6,4,t),this.target.copy(this.position).addScaledVector(this._runVector,40).add(fe.set(0,22,0)),this.phaseT>.8&&this._endAttack()}_hoverBarrage(t,e){this.flap=1.25,this.pitch=.1,this.speed=this.stats.flySpeed*.6,pe.subVectors(this.position,e.playerPos).setY(0).normalize(),this.target.copy(e.playerPos).addScaledVector(pe,this.stats.attackRange*.7).setY(e.playerPos.y+18+Math.sin(this.t*1.4)*3);const n=this.phaseT%1.5;this.breath.active=n<.75,this.breath.kind=this.breathKind,this.breath.spread=.8,this.charge=n>.55&&n<.75?1:this.charge,this.phaseT>4.5&&this._endAttack()}_lavaMortar(t,e){this.flap=1.1,this.pitch=.08,this.speed=this.stats.flySpeed*.5,pe.subVectors(this.position,e.playerPos).setY(0).normalize(),this.target.copy(e.playerPos).addScaledVector(pe,this.stats.attackRange*.9).setY(e.playerPos.y+26+Math.sin(this.t)*2),this.charge=Math.min(1,this.charge+t*1.4),this._shots=this._shots??0;const n=.9;if(this.phaseT>1.2+this._shots*n&&this._shots<3){this._shots++,this.charge=0;const i=fe.copy(e.playerVelocity??fe.set(0,0,0)).multiplyScalar(.9);this.requests.push({type:"mortar",origin:this.dragon.mouthWorld(new T),target:e.playerPos.clone().add(i).add(new T(Ne(5),0,Ne(5))),damage:this.stats.damage})}this._shots>=3&&this.phaseT>1.2+3*n+.6&&(this._shots=0,this._endAttack())}_ambushLunge(t,e){const n=this.position.distanceTo(e.playerPos);this.phase==="windup"?(this.flap=.1,this.pitch=.04,this.speed=this.stats.flySpeed*.9,pe.subVectors(this.position,e.playerPos).setY(0).normalize(),this.target.copy(e.playerPos).addScaledVector(pe,this.stats.attackRange*1.4).setY(this.world.heightAt(this.position.x,this.position.z)+this.clearance+4),(n<this.stats.attackRange*1.7||this.phaseT>2.4)&&this._phase("commit")):this.phase==="commit"?(this.flap=1.9,this.pitch=-.05,this.speed=this.stats.diveSpeed,this.charge=Math.min(1,this.charge+t*4),this.target.copy(e.playerPos).add(fe.set(0,this.clearance*.35,0)),n<this.clearance+6?(this.melee=this.stats.damage,this.hint=`${this.spec.name} slams past you.`,this._phase("release")):this.phaseT>2.2&&this._phase("release")):(this.flap=1.6,this.pitch=-.42,this.speed=this.stats.flySpeed*1.5,this.breath.active=this.phaseT<.35&&n<this.stats.attackRange,pe.subVectors(this.position,e.playerPos).normalize(),this.target.copy(this.position).addScaledVector(pe,34).add(fe.set(0,20,0)),this.phaseT>1&&this._endAttack())}_venomSpray(t,e){this.flap=1.15,this.pitch=.06,this.speed=this.stats.flySpeed*.75,pe.subVectors(this.position,e.playerPos).setY(0).normalize(),Fi.set(-pe.z,0,pe.x).multiplyScalar(Math.sin(this.phaseT*1.3)*this.stats.attackRange*.8),this.target.copy(e.playerPos).addScaledVector(pe,this.stats.attackRange*.6).add(Fi).setY(e.playerPos.y+14),this.roll=lt.damp(this.roll,Math.cos(this.phaseT*1.3)*.4,4,t);const n=this.phaseT>.7&&this.phaseT<3.4;this.breath.active=n,this.breath.kind="venom",this.breath.spread=1.8,this.charge=n?.6:Math.min(1,this.charge+t),this._cloudT=(this._cloudT??0)+t,n&&this._cloudT>.45&&(this._cloudT=0,this.requests.push({type:"cloud",origin:this.dragon.mouthWorld(new T),toward:e.playerPos.clone(),damage:this.stats.damage*.5})),this.phaseT>4&&this._endAttack()}_tailSweep(t,e){const n=this.position.distanceTo(e.playerPos);this.phase==="windup"?(this.flap=1.4,this.pitch=.1,this.speed=this.stats.flySpeed*1.2,this.target.copy(e.playerPos).setY(this.world.heightAt(e.playerPos.x,e.playerPos.z)+this.clearance),this.charge=Math.min(1,this.charge+t*2),(n<this.clearance+12||this.phaseT>2.8)&&this._phase("commit")):this.phase==="commit"?(this.flap=.3,this.speed=this.stats.flySpeed*1.6,this.roll=lt.damp(this.roll,.7,6,t),pe.subVectors(e.playerPos,this.position).setY(0).normalize(),this.target.copy(e.playerPos).addScaledVector(pe,26),n<this.clearance+10?(this.melee=this.stats.damage*1.4,this.requests.push({type:"shockwave",origin:this.position.clone()}),this.hint=`${this.spec.name} sweeps its tail through the rock.`,this._phase("release")):this.phaseT>1.6&&this._phase("release")):(this.flap=1.5,this.pitch=-.3,this.speed=this.stats.flySpeed*1.3,this.roll=lt.damp(this.roll,0,4,t),this.target.copy(this.position).add(fe.set(Ne(18),24,Ne(18))),this.phaseT>.9&&this._endAttack())}_phase(t){this.phase=t,this.phaseT=0}_endAttack(){const t=this.attackStyle;if(this.attackStyle=null,this.phase="windup",this._shouldFlee()){this._enter(Xt.FLEE),this.hint=this.spec.lines.flee;return}if((this._playerPos?this.position.distanceTo(this._playerPos):1/0)<34&&!this._pressed&&Math.random()<this.aggressionNow-.2){this._pressed=!0,this.attackStyle=t,this._chooseAttack({playerPos:this._playerPos}),this._enter(Xt.ATTACK);return}this._enter(Xt.RECOVER)}_shouldFlee(){return this.mind.fleeAt?this.dragon.hpFraction<this.mind.fleeAt:!1}_shouldEngage(t){const e=this.position.distanceTo(t.playerPos),n=this.stats.spotRange*(.6+this.aggressionNow*.6);return e>n||this._shouldFlee()?!1:this.mind.opportunist&&!(t.playerVulnerable||t.alliesAttacking>0)?e<this.stats.attackRange*1.2:!(this.mind.territorial>.8&&this.position.distanceTo(this.home)>this.stats.patrolRadius*4)}_chooseAttack(t){const e=this.position.distanceTo(t.playerPos),n=this.mind.attacks,i=new Map;for(const c of n)i.set(c,(i.get(c)??0)+1);const r=[];let a=null,o=-1/0;for(const[c,h]of i){const u=ac[c];if(!u)continue;const[d,f]=u.band;if(e<d||e>f&&!u.closer)continue;r.push(c);const g=Math.max(1,(f-d)/2),m=Math.max(0,1-Math.abs(e-(d+f)/2)/g)+h*.35+(u.closer?this.aggressionNow*.3:0)-(c===this.attackStyle?.45:0);m>o&&(o=m,a=c)}const l=r.length?r:n;return(!a||Math.random()<this.mind.erratic)&&(a=l[Math.floor(Math.random()*l.length)]),this.attackStyle=a,this.phase="windup",this._shots=0,this.hint=ac[a]?.tell??this.spec.lines.attack,a}notifyHit(t){if(!this.dragon.alive)return;if(this._hitCount++,this.engaged=!0,this._flinch=Math.random()<.5?-1:1,this._shouldFlee()){this._enter(Xt.FLEE),this.hint=this.spec.lines.flee;return}const e=this.mind.courage*.7+(this.state===Xt.ATTACK?.2:0);if(Math.random()<e&&t!=="head"){this.hint=this.spec.lines.pain;return}this._enter(Xt.PAIN),this.hint=this.spec.lines.pain}drainRequests(){if(!this.requests.length)return null;const t=this.requests;return this.requests=[],t}}const kg=new T;class Hg{constructor(t,e,n,i){this.scene=t,this.world=e,this.textures=n,this.audio=i,this.entries=[],this.flightIndex=-1,this.kills=[],this.bounty=0,this.pendingRequests=[],this.log=[],this.logDirty=!1,this.flightLabel="",this.breathing=!1,this.breathSources=[],this._loading=!1,this._clearT=0}get flights(){return Kt.hunt.flights}get totalFlights(){return this.flights.length}get alive(){return this.entries.filter(t=>t.dragon.alive)}get hitboxes(){if(this._boxes)return this._boxes;const t=[];for(const e of this.entries)e.dragon.alive&&t.push(...e.dragon.hitboxes);return this._boxes=t,t}_invalidate(){this._boxes=null}focus(t){let e=null,n=-1/0;for(const i of this.entries){if(!i.dragon.alive)continue;const r=i.dragon.root.position.distanceTo(t),o=(i.ai.state==="attack"?400:i.ai.engaged?120:0)-r;o>n&&(n=o,e=i)}return e}async begin(t=0){this.flightIndex=Math.max(0,Math.min(t,this.flights.length-1))-1,await this.nextFlight()}async restartFlight(){for(const t of this.entries)this.scene.remove(t.dragon.root),t.dragon.dispose();this.entries.length=0,this._clearT=0,this._invalidate(),this.flightIndex--,await this.nextFlight()}async nextFlight(){if(this._loading)return;this.flightIndex++;const t=this.flights[Math.min(this.flightIndex,this.flights.length-1)],e=this.flightIndex>=this.flights.length,n=e?this._endlessRoster():t.species;this.flightLabel=e?`The ridge answers · wave ${this.flightIndex-this.flights.length+2}`:t.label,this._loading=!0,await Promise.all([...new Set(n)].map(i=>this.textures.ensure(vr[i].look.pack)));for(let i=0;i<n.length;i++)this._spawn(n[i],i,n.length);this._loading=!1,this.pushLog(e?this.flightLabel:`Flight ${this.flightIndex+1}: ${t.label}`,"flight")}_endlessRoster(){const t=Object.keys(vr),e=2+Math.min(3,this.flightIndex-this.flights.length);return Array.from({length:e},()=>t[Math.floor(Math.random()*t.length)])}_spawn(t,e,n){const i=vr[t],r=new zg(i,this.textures),a=e/Math.max(1,n)*Math.PI*2+Math.random()*.9,o=70+Math.random()*45,l=Math.cos(a)*o,c=Math.sin(a)*o-10,h=this.world.heightAt(l,c),u=new T(l,h+i.stats.patrolHeight,c);r.root.position.copy(u),this.scene.add(r.root);const d=new Bg(r,this.world,u);this.entries.push({dragon:r,ai:d,spec:i,scored:!1}),r.glow&&this.quality==="low"&&(r.glow.visible=!1),this._invalidate()}setQuality(t){this.quality=t;for(const e of this.entries)e.dragon.glow&&(e.dragon.glow.visible=t!=="low")}pushLog(t,e="info"){this.log.unshift({text:t,kind:e}),this.log.length>5&&this.log.pop(),this.logDirty=!0}spend(t,e){return t<=0?!0:this.bounty<t?!1:(this.bounty-=t,e&&this.pushLog(e,"shop"),!0)}update(t,e,n){const i=n.bolts===0||n.reloading;let r=0,a=0;for(const c of this.entries)c.dragon.alive&&(c.ai.state==="attack"&&r++,c.ai.engaged&&c.ai.state!=="flee"&&a++);const o={playerPos:e.position,playerVelocity:e.velocity,playerVulnerable:i,alliesAttacking:r,alliesEngaged:a};this.breathing=!1,this.breathSources=[];let l=0;for(const c of this.entries){c.ai.update(t,o),c.ai.announceRoar&&(c.ai.announceRoar=!1,this.pushLog(`${c.spec.name} roars and commits.`,"attack")),c.ai.breath.active&&(this.breathing=!0,this.breathSources.push(c)),c.ai.melee>0&&(l+=c.ai.melee);const h=c.ai.drainRequests();if(h)for(const u of h)this.pendingRequests.push(u);!c.dragon.alive&&!c.scored&&(c.scored=!0,this.bounty+=c.spec.bounty,this.kills.push(c.spec.id),this.pushLog(`${c.spec.name} down · +${c.spec.bounty}g`,"kill"),this.audio.death(),this._invalidate())}return l>0&&(e.applyDamage(l),e.addShake(.18)),this._cull(t),this._progress(t),o}_cull(t){for(let e=this.entries.length-1;e>=0;e--){const n=this.entries[e];n.dragon.alive||(n.corpseT=(n.corpseT??0)+t,n.corpseT>Kt.hunt.corpseLinger&&(this.scene.remove(n.dragon.root),n.dragon.dispose(),this.entries.splice(e,1),this._invalidate()))}}_progress(t){if(!this._loading){if(this.alive.length>0){this._clearT=0;return}this._clearT+=t,this._clearT>Kt.hunt.flightGap&&(this._clearT=0,this.nextFlight())}}drainRequests(){if(!this.pendingRequests.length)return[];const t=this.pendingRequests;return this.pendingRequests=[],t}nearestDistance(t){let e=1/0;for(const n of this.entries)n.dragon.alive&&(e=Math.min(e,kg.copy(n.dragon.root.position).distanceTo(t)));return e}}const ro=-9999;function Vg(){const t=document.createElement("canvas");t.width=t.height=96;const e=t.getContext("2d"),n=e.createRadialGradient(96/2,96/2,0,96/2,96/2,96/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,96,96),e.globalCompositeOperation="destination-out";for(let r=0;r<16;r++){const a=r/16*Math.PI*2+Math.random(),o=96*(.1+Math.random()*.28),l=96/2+Math.cos(a)*96*.22,c=96/2+Math.sin(a)*96*.22,h=e.createRadialGradient(l,c,0,l,c,o);h.addColorStop(0,"rgba(0,0,0,0.3)"),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.beginPath(),e.arc(l,c,o,0,Math.PI*2),e.fill()}const i=new bm(t);return i.colorSpace=ke,i}function ai(s,t,e,n,i,r){const a=new xe,o=new Float32Array(s*3),l=new Float32Array(s);for(let u=0;u<s;u++)o[u*3+1]=ro;a.setAttribute("position",new Ye(o,3)),a.boundingSphere=new xi(new T,1e6);const c=new $c({color:e,size:t,map:i,transparent:!0,opacity:n,depthWrite:!1,blending:r,fog:!0}),h=new wm(a,c);return h.frustumCulled=!1,{points:h,pos:o,life:l,vel:new Float32Array(s*3),count:s}}class Gg{constructor(t){this.scene=t,this.sprite=Vg();const e=Xi,n=fi;this.ash=ai(Kt.quality.particleAsh,.3,6970192,.4,this.sprite,n),this.ember=ai(Kt.quality.particleEmber,.16,16738840,.9,this.sprite,e),this.fire=ai(420,.55,16730632,.4,this.sprite,e),this.venom=ai(320,.7,10477600,.3,this.sprite,e),this.spark=ai(260,.2,16755248,1,this.sprite,e),this.blood=ai(220,.2,5899270,.95,this.sprite,n),this.chips=ai(180,.14,1709330,1,this.sprite,n),this.systems=[this.ash,this.ember,this.fire,this.venom,this.spark,this.blood,this.chips];for(const i of this.systems)t.add(i.points);this._seedAmbient(),this.tmp=new T,this.focus=new T,this.spread=150}_seedAmbient(){for(let t=0;t<this.ash.count;t++)this.ash.pos[t*3]=(Math.random()-.5)*this.spread,this.ash.pos[t*3+1]=Math.random()*90,this.ash.pos[t*3+2]=(Math.random()-.5)*this.spread,this.ash.vel[t*3]=(Math.random()-.5)*1.4,this.ash.vel[t*3+1]=-1.4-Math.random(),this.ash.vel[t*3+2]=(Math.random()-.5)*1.4,this.ash.life[t]=Math.random();for(let t=0;t<this.ember.count;t++)this.ember.pos[t*3]=(Math.random()-.5)*this.spread,this.ember.pos[t*3+1]=Math.random()*18,this.ember.pos[t*3+2]=(Math.random()-.5)*this.spread,this.ember.vel[t*3+1]=1.5+Math.random()*2.5,this.ember.life[t]=Math.random()}burst(t,e,n,i,r,a){let o=0;for(let l=0;l<t.count&&o<i;l++)t.life[l]>.05||(t.pos[l*3]=e.x,t.pos[l*3+1]=e.y,t.pos[l*3+2]=e.z,t.vel[l*3]=n.x*r+(Math.random()-.5)*a,t.vel[l*3+1]=n.y*r+(Math.random()-.5)*a,t.vel[l*3+2]=n.z*r+(Math.random()-.5)*a,t.life[l]=1,o++)}_emit(t,e,n,i,r,a,o){t.carry=(t.carry??0)+i*r;const l=Math.floor(t.carry);l<=0||(t.carry-=l,this.burst(t,e,n,l,a,o))}breathe(t,e,n,i="fire",r=1){this.tmp.copy(e).sub(t).normalize(),i==="venom"?this._emit(this.venom,t,this.tmp,150,n,11,7*r):this._emit(this.fire,t,this.tmp,260,n,18,6*r)}muzzleFlash(t,e){this.burst(this.spark,t,e,26,16,7),this.burst(this.fire,t,e,8,9,3.5),this.burst(this.chips,t,e,9,6,4)}bloodHit(t,e){this.burst(this.blood,t,e,22,6,5),this.burst(this.chips,t,e,14,5,4),this.burst(this.spark,t,e,16,9,6)}update(t,e){e&&this.focus.copy(e),this._step(this.ash,t,0,90,!0),this._step(this.ember,t,.4,26,!0),this._step(this.fire,t,2.6,0,!1,1.1),this._step(this.venom,t,-.4,0,!1,.38),this._step(this.spark,t,-14,0,!1,1.4),this._step(this.blood,t,-12,0,!1,1.6),this._step(this.chips,t,-10,0,!1,1.2)}_step(t,e,n,i,r,a=.85){const o=t.pos,l=t.vel;for(let c=0;c<t.count;c++){const h=c*3;if(!r&&t.life[c]<=0){o[h+1]!==ro&&(o[h]=0,o[h+1]=ro,o[h+2]=0);continue}l[h+1]+=n*e,o[h]+=l[h]*e,o[h+1]+=l[h+1]*e,o[h+2]+=l[h+2]*e,t.life[c]-=e*(r?.02:a),r&&(o[h+1]<0||t.life[c]<=0)&&(o[h]=this.focus.x+(Math.random()-.5)*this.spread,o[h+1]=i*(.35+Math.random()*.65),o[h+2]=this.focus.z+(Math.random()-.5)*this.spread,t.life[c]=1)}t.points.geometry.attributes.position.needsUpdate=!0}setQuality(t){const e=(i,r)=>{i.points.geometry.setDrawRange(0,Math.floor(i.count*r))},n={cinematic:1,high:.8,medium:.5,low:.28}[t]??.8;e(this.ash,n),e(this.ember,n),this.ember.points.visible=t!=="low",this.ash.points.material.size=t==="low"?.45:.3}}const oi=new T,lc=new T,cc=new T;class Wg{constructor(t,e,n,i,r){this.scene=t,this.world=e,this.hunt=n,this.particles=i,this.audio=r,this.bolts=[],this.mortars=[],this.clouds=[],this.waves=[],this.flashes=[],this._muzzle=new T,this._dir=new T,this._hit=new T,this.lastHit=0,this.lastHitPart="",this.didHitDragon=!1,this.boltGeo=new Nt(.025,.025,.55,6),this.boltGeo.rotateX(Math.PI/2),this.boltMat=new Mn({color:9079440,metalness:.9,roughness:.28,emissive:new Pt(2232576)}),this.tipGeo=new Ue(.04,.12,6),this.tipGeo.rotateX(-Math.PI/2),this.shotGeo=new $t(.04,6,5),this.shotMat=new Mn({color:6969928,metalness:.55,roughness:.45,emissive:new Pt(3348480)}),this.harpoonGeo=new Nt(.035,.028,1.15,7),this.harpoonGeo.rotateX(Math.PI/2),this.harpoonTip=new Ue(.07,.22,6),this.harpoonTip.rotateX(-Math.PI/2),this.mortarGeo=new Ps(.9,1),this.mortarMat=new Mn({color:2756616,emissive:new Pt(1.6,.4,.06),emissiveIntensity:2.4,roughness:.6}),this.cloudGeo=new Ps(1,2),this.waveGeo=new Ao(.8,1,48),this.waveGeo.rotateX(-Math.PI/2)}fire(t,e,n={}){const i=Math.max(1,n.pellets??1),r=n.spread??0,a=n.damage??Kt.weapon.damage,o=n.muzzle??Kt.weapon.muzzle,l=n.gravity??Kt.weapon.gravity,c=n.kind??"ballista";for(let h=0;h<i;h++){const u=e.clone().normalize();r>0&&(u.x+=(Math.random()-.5)*2*r,u.y+=(Math.random()-.5)*2*r,u.normalize());const d=this._projectile(c);d.position.copy(t),d.lookAt(t.clone().add(u)),this.scene.add(d),this.bolts.push({mesh:d,vel:u.multiplyScalar(o),life:c==="lance"?4.2:3.2,damage:a,gravity:l})}}_projectile(t){const e=new Jt;if(t==="scatter")e.add(new ht(this.shotGeo,this.shotMat));else if(t==="lance"){e.add(new ht(this.harpoonGeo,this.boltMat));const n=new ht(this.harpoonTip,this.boltMat);n.position.z=-.68,e.add(n)}else{e.add(new ht(this.boltGeo,this.boltMat));const n=new ht(this.tipGeo,this.boltMat);n.position.z=-.32,e.add(n)}return e}handleRequests(t){for(const e of t)e.type==="mortar"?this._launchMortar(e):e.type==="cloud"?this._spawnCloud(e):e.type==="shockwave"&&this._spawnWave(e)}_launchMortar({origin:t,target:e,damage:n}){const i=new ht(this.mortarGeo,this.mortarMat);i.position.copy(t);const r=new qn(16734736,26,34,2);i.add(r),this.scene.add(i);const a=lt.clamp(t.distanceTo(e)/34,1.1,2.8),o=26,l=oi.subVectors(e,t).divideScalar(a).clone();l.y+=.5*o*a,this.mortars.push({mesh:i,vel:l,gravity:o,damage:n,life:a+3}),this.audio.mortar()}_spawnCloud({origin:t,toward:e,damage:n}){const i=new an({color:10473504,transparent:!0,opacity:.2,depthWrite:!1,blending:Xi}),r=new ht(this.cloudGeo,i),a=oi.subVectors(e,t).normalize().multiplyScalar(6);r.position.copy(t).addScaledVector(a,.6),r.scale.setScalar(2),this.scene.add(r),this.clouds.push({mesh:r,mat:i,damage:n,life:Kt.hunt.cloudLife,max:Kt.hunt.cloudLife,drift:a.clone().multiplyScalar(.35)})}_spawnWave({origin:t}){const e=new an({color:16756832,transparent:!0,opacity:.55,side:He,depthWrite:!1,blending:Xi}),n=new ht(this.waveGeo,e);n.position.set(t.x,this.world.heightAt(t.x,t.z)+.6,t.z),this.scene.add(n),this.waves.push({mesh:n,mat:e,life:1.1,max:1.1,hit:!1}),this.particles.burst(this.particles.chips,n.position,new T(0,1,0),40,14,10)}update(t,e){this.lastHit=Math.max(0,this.lastHit-t),this._updateBolts(t),this._updateMortars(t,e),this._updateClouds(t,e),this._updateWaves(t,e),this._updateFlashes(t),this._breathDamage(t,e)}_updateBolts(t){const e=this.hunt.hitboxes;for(let n=this.bolts.length-1;n>=0;n--){const i=this.bolts[n];i.vel.y-=(i.gravity??Kt.weapon.gravity)*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.lookAt(oi.copy(i.mesh.position).add(i.vel)),i.life-=t;const r=i.mesh.position;let a=!1;for(const o of e){if(!this._sphereHit(r,o,.8))continue;const l=o.userData.hit,c=l.dragon,h=c.takeDamage((i.damage??Kt.weapon.damage)*l.multiplier,l.name);o.getWorldPosition(this._hit),lc.copy(this._hit).sub(r).normalize().multiplyScalar(-1),this.particles.bloodHit(r.clone(),lc),this.audio.impact(l.name==="head"),this.lastHit=.18,this.lastHitPart=l.name,this.didHitDragon=!0,this.lastHitDragon=c,this.lastHitDealt=h,a=!0;break}!a&&r.y<=this.world.heightAt(r.x,r.z)+.2&&(this.particles.burst(this.particles.chips,r,new T(0,1,0),10,4,3),a=!0),!a&&i.life<=0&&(a=!0),a&&(this.scene.remove(i.mesh),this.bolts.splice(n,1))}}_updateMortars(t,e){for(let n=this.mortars.length-1;n>=0;n--){const i=this.mortars[n];i.vel.y-=i.gravity*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.rotation.x+=t*4,i.mesh.rotation.y+=t*3,i.life-=t;const r=i.mesh.position;this.particles.burst(this.particles.spark,r,oi.set(0,.4,0),2,3,3);const a=this.world.heightAt(r.x,r.z);(r.y<=a+.6||i.life<=0)&&(this._explode(r,i.damage,e),this.scene.remove(i.mesh),this.mortars.splice(n,1))}}_explode(t,e,n){this.particles.burst(this.particles.fire,t,oi.set(0,1,0),26,13,11),this.particles.burst(this.particles.spark,t,oi.set(0,1,0),90,22,18),this.particles.burst(this.particles.chips,t,oi.set(0,1,0),70,16,13),this._flash(t),this.audio.explode();const i=t.distanceTo(n.position),r=Kt.hunt.mortarRadius;if(i<r){const a=1-i/r;n.applyDamage(e*a),n.onFire=.8,n.addShake(.2*a)}else i<r*3&&n.addShake(.06)}_flash(t){const e=new qn(16756816,260,60,2);e.position.copy(t),this.scene.add(e),this.flashes.push({light:e,life:.35,max:.35})}_updateFlashes(t){for(let e=this.flashes.length-1;e>=0;e--){const n=this.flashes[e];n.life-=t,n.light.intensity=260*Math.max(0,n.life/n.max)**2,n.life<=0&&(this.scene.remove(n.light),this.flashes.splice(e,1))}}_updateClouds(t,e){for(let n=this.clouds.length-1;n>=0;n--){const i=this.clouds[n];i.life-=t;const r=1-i.life/i.max;i.mesh.position.addScaledVector(i.drift,t),i.mesh.position.y+=t*.6,i.mesh.scale.setScalar(2+r*Kt.hunt.cloudRadius),i.mat.opacity=.24*(1-r)**.7,e.position.distanceTo(i.mesh.position)<i.mesh.scale.x&&(e.applyDamage(i.damage*t),e.onFire=.4),i.life<=0&&(this.scene.remove(i.mesh),i.mat.dispose(),this.clouds.splice(n,1))}}_updateWaves(t,e){for(let n=this.waves.length-1;n>=0;n--){const i=this.waves[n];i.life-=t;const r=1-i.life/i.max,a=4+r*26;i.mesh.scale.setScalar(a),i.mat.opacity=.55*(1-r);const o=Math.hypot(e.position.x-i.mesh.position.x,e.position.z-i.mesh.position.z);!i.hit&&Math.abs(o-a)<3&&e.grounded&&(i.hit=!0,e.applyDamage(14),e.addShake(.24)),i.life<=0&&(this.scene.remove(i.mesh),i.mat.dispose(),this.waves.splice(n,1))}}_sphereHit(t,e,n=0){e.updateWorldMatrix(!0,!1),e.geometry.boundingSphere||e.geometry.computeBoundingSphere();const i=e.geometry.boundingSphere.clone();return i.applyMatrix4(e.matrixWorld),i.radius+=n,i.containsPoint(t)}_breathDamage(t,e){for(const n of this.hunt.breathSources??[]){const i=n.dragon,r=n.spec.stats,a=i.mouthWorld(this._muzzle),o=this._dir.copy(e.position).sub(a),l=o.length();if(l>r.attackRange)continue;o.normalize(),cc.copy(n.ai.breath.aim);const c=Math.min(.97,.82/(n.ai.breath.spread||1));(cc.dot(o)>c||l<r.attackRange*.22)&&(e.applyDamage(r.damage*t),e.onFire=.6,e.addShake(.04))}}}const Lo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Kn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xg=new Mo(-1,1,1,-1,0,1);class qg extends xe{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const Yg=new qg;class Ls{constructor(t){this._mesh=new ht(Yg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Xg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class oh extends Kn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mi.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ls(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hc extends Kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class $g extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Kg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oh(Lo),this.copyPass.material.blending=yn,this.clock=new rh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hc!==void 0&&(a instanceof hc?n=!0:a instanceof $g&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zg extends Kn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const jg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qi extends Kn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,a,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Je(r,a,{type:pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Je(r,a,{type:pn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=jg;this.highPassUniforms=mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Lo;this.copyUniforms=mi.clone(h.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new an,this.fsQuad=new Ls(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Qi.BlurDirectionX=new Q(1,0);Qi.BlurDirectionY=new Q(0,1);const Jg={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class Qg extends Kn{constructor(t=.96){super(),this.shader=Jg,this.uniforms=mi.clone(this.shader.uniforms),this.uniforms.damp.value=t,this.textureComp=new Je(window.innerWidth,window.innerHeight,{magFilter:Ge,type:pn}),this.textureOld=new Je(window.innerWidth,window.innerHeight,{magFilter:Ge,type:pn}),this.compFsMaterial=new Re({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Ls(this.compFsMaterial);const e=Lo;this.copyFsMaterial=new Re({uniforms:mi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new Ls(this.copyFsMaterial)}render(t,e,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,t.setRenderTarget(this.textureComp),this.compFsQuad.render(t),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this.copyFsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.copyFsQuad.render(t));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(t,e){this.textureComp.setSize(t,e),this.textureOld.setSize(t,e)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}const t_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class e_ extends Kn{constructor(){super();const t=t_;this.uniforms=mi.clone(t.uniforms),this.material=new ng({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class n_ extends Kn{constructor(t){super(),this.viewmodel=t,this.needsSwap=!1}render(t,e,n){const i=t.autoClear;t.autoClear=!1,t.setRenderTarget(this.renderToScreen?null:n),t.clearDepth(),t.render(this.viewmodel.scene,this.viewmodel.camera),t.autoClear=i}}const i_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uShake:{value:0},uHeat:{value:0},uBlur:{value:0},uDamage:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uShake;
    uniform float uHeat;
    uniform float uBlur;
    uniform float uDamage;
    varying vec2 vUv;

    float grain(vec2 p) {
      return fract(sin(dot(p + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    }

    // Warm ash grade: lift the shadows toward brown, pull highlights to amber.
    vec3 grade(vec3 c) {
      float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 shadows = vec3(0.055, 0.034, 0.026);
      vec3 lift = mix(shadows, vec3(0.0), smoothstep(0.0, 0.4, luma));
      vec3 gain = mix(vec3(1.0), vec3(1.06, 0.985, 0.93), smoothstep(0.35, 1.0, luma));
      c = (c + lift) * gain;
      // Hold a little saturation back so emissive lava stays the brightest thing.
      return mix(vec3(luma), c, 0.92);
    }

    void main() {
      vec2 centred = vUv - 0.5;
      vec2 uv = vUv;
      uv += (grain(uv * 40.0) - 0.5) * uShake * 0.012;
      uv.x += sin(uv.y * 40.0 + uTime * 6.0) * uHeat * 0.004;

      // Lateral chromatic aberration that grows toward the frame edge.
      float disperse = (0.0011 + 0.0016 * (uBlur + uHeat)) * (0.35 + length(centred));
      vec4 c = texture2D(tDiffuse, uv);
      float r = texture2D(tDiffuse, uv + centred * disperse).r;
      float b = texture2D(tDiffuse, uv - centred * disperse).b;
      vec3 color = grade(vec3(r, c.g, b));

      float vig = smoothstep(1.35, 0.40, length(centred));
      color *= mix(mix(1.0, vig, 0.55), vig, uDamage);

      // Grain sits mostly in the shadows, the way film stock behaves.
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      float g = grain(uv * vec2(1920.0, 1080.0));
      color += (g - 0.5) * mix(0.028, 0.008, smoothstep(0.0, 0.6, luma));

      color = mix(color, color * vec3(1.1, 0.72, 0.48), uHeat * 0.35);
      color = mix(color, vec3(luma * 0.9, luma * 0.42, luma * 0.38), uDamage * 0.5);
      gl_FragColor = vec4(color, 1.0);
    }
  `};class s_{constructor(t,e,n,i){this.renderer=t,this.composer=new Kg(t),this.composer.addPass(new Zg(e,n)),i&&this.composer.addPass(new n_(i)),this.bloom=new Qi(new Q(innerWidth,innerHeight),.32,.55,.48),this.composer.addPass(this.bloom),this.after=new Qg(.12),this.composer.addPass(this.after),this.after.enabled=!1,this.composer.addPass(new e_),this.composite=new oh(i_),this.composer.addPass(this.composite),this.enabled=!0}resize(t,e){this.composer.setSize(t,e)}setPixelRatio(t){this.composer.setPixelRatio(t)}render(t,{heat:e=0,shake:n=0,blur:i=.35,damage:r=0}){this.composite.uniforms.uTime.value+=t,this.composite.uniforms.uHeat.value=e,this.composite.uniforms.uShake.value=n,this.composite.uniforms.uBlur.value=i,this.composite.uniforms.uDamage.value=r,this.after.uniforms.damp.value=lt.lerp(.08,.22,i),this.composer.render()}setQuality(t){this.bloom.enabled=t==="cinematic"||t==="high",this.after.enabled=t==="cinematic",this.bloom.strength=t==="cinematic"?.36:.22,this.after.enabled=t==="cinematic"}}const r_=[[.85,"Berserk"],[.7,"Relentless"],[.5,"Committed"],[.35,"Cautious"],[0,"Skittish"]];function a_(s){for(const[t,e]of r_)if(s>=t)return e;return"Skittish"}class o_{constructor(){this.hp=document.getElementById("hp-fill"),this.bolts=document.getElementById("bolts"),this.weaponName=document.getElementById("weapon-name"),this.reload=document.getElementById("reload"),this.reloadFill=document.getElementById("reload-fill"),this.beast=document.getElementById("beast-fill"),this.beastPanel=document.getElementById("beast"),this.beastName=document.getElementById("beast-name"),this.beastEpithet=document.getElementById("beast-epithet"),this.beastState=document.getElementById("beast-state"),this.beastWave=document.getElementById("beast-wave"),this.beastAggr=document.getElementById("beast-aggr"),this.beastAggrLabel=document.getElementById("beast-aggr-label"),this.threats=document.getElementById("threats"),this.killLog=document.getElementById("kill-log"),this.bounty=document.getElementById("bounty"),this.fps=document.getElementById("fps"),this.quality=document.getElementById("quality"),this.hint=document.getElementById("hint"),this.cross=document.getElementById("crosshair"),this.hit=document.getElementById("hitmarker"),this.heat=document.getElementById("heat"),this.hud=document.getElementById("hud"),this.title=document.getElementById("title-screen"),this.downed=document.getElementById("downed"),this.downedLine=document.getElementById("downed-line"),this._species=null,this._threatKey=""}showGame(){this.title.classList.add("hidden"),this.hud.classList.remove("hidden")}showDowned(t){this.downed&&(this.downed.classList.toggle("hidden",!t),t&&(this.downedLine.textContent=`Killed by a ${t}`))}setLoading(t){const e=document.getElementById("loading-fill");e&&(e.style.width=`${Math.round(t*100)}%`)}ready(){const t=document.getElementById("hunt-btn");t&&(t.disabled=!1,t.textContent="Begin the hunt",document.getElementById("loading")?.classList.add("hidden"))}renderCodex(t,e){const n=document.getElementById("codex");n&&(n.innerHTML=e.map(i=>{const r=t[i],a=Math.round(r.mind.aggression*100);return`<div class="codex-row">
          <span class="codex-name">${r.name}</span>
          <span class="codex-epithet">${r.epithet}</span>
          <span class="codex-aggr" title="Aggression ${a}%">
            <i style="width:${a}%"></i>
          </span>
          <span class="codex-tier">T${r.tier}</span>
        </div>`}).join(""))}_renderLog(t){this.killLog.innerHTML=t.map(e=>`<li class="${e.kind}">${e.text}</li>`).join("")}_renderThreats(t,e){const n=t.map(i=>`${i.spec.id}${i.ai.stateLabel}`).join("|");n!==this._threatKey&&(this._threatKey=n,this.threats.innerHTML=t.map(i=>{const r=Math.round(i.dragon.root.position.distanceTo(e)),a=Math.round(i.dragon.hpFraction*100);return`<div class="threat ${i.ai.state}">
          <span class="threat-name">${i.spec.name}</span>
          <span class="threat-state">${i.ai.stateLabel}</span>
          <span class="threat-dist">${r}m</span>
          <span class="threat-hp">${a}%</span>
        </div>`}).join(""))}update(t){const{health:e,bolts:n,maxBolts:i,focus:r,alive:a,playerPos:o,flightLabel:l,flightIndex:c,totalFlights:h,bounty:u,log:d,logDirty:f,fps:g,quality:_,hint:m,hot:p,hit:M,hitPart:x,hitWeight:v,heat:P,reloading:A,reloadProgress:R,weaponName:I,ammoLabel:b}=t;if(this.hp.style.width=`${Math.max(0,e)}%`,this.weaponName&&I&&(this.weaponName.textContent=I),this.bolts.textContent=b?`${n} / ${i} ${b}`:`${n} / ${i}`,this.bolts.classList.toggle("empty",n===0&&!A),this.reload.classList.toggle("active",!!A),A&&(this.reloadFill.style.width=`${Math.round(R*100)}%`),this.fps.textContent=`${Math.round(g)} FPS`,this.quality.textContent=_,this.bounty.textContent=`${u} gold`,m&&(this.hint.textContent=m),this.cross.classList.toggle("hot",!!p),this.cross.classList.toggle("crit",x==="head"),this.heat.style.opacity=P?"1":"0",this.hit.style.opacity=M?"1":"0",M&&(this.hit.style.transform=`translate(-50%, -50%) scale(${(.8+v*.7).toFixed(2)})`),f&&this._renderLog(d),this._renderThreats(a,o),r){this.beastPanel.style.opacity="1",this._species!==r.spec.id&&(this._species=r.spec.id,this.beastName.textContent=r.spec.name,this.beastEpithet.textContent=r.spec.epithet,this.beastPanel.dataset.tier=r.spec.tier),this.beast.style.width=`${r.dragon.hpFraction*100}%`,this.beastState.textContent=r.ai.stateLabel;const S=r.ai.aggressionNow;this.beastAggr.style.width=`${S*100}%`,this.beastAggrLabel.textContent=a_(S),this.beastWave.textContent=`${l} · ${Math.min(c+1,h)}/${h}`}else this.beastPanel.style.opacity="0.35",this.beastState.textContent="clear",this.beastWave.textContent=l}}class l_{constructor(){this.ctx=null,this.master=null,this.wind=null}resume(){if(this.ctx){this.ctx.resume();return}const t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.master=t.createGain(),this.master.gain.value=.22,this.master.connect(t.destination),this._wind()}_osc(t,e,n,i=.2,r=0){if(!this.ctx)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=t,o.frequency.setValueAtTime(e,a),r&&o.frequency.exponentialRampToValueAtTime(Math.max(40,e+r),a+n),l.gain.setValueAtTime(i,a),l.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+n+.05)}_noise(t,e,n=800){if(!this.ctx)return;const i=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),r=i.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=n;const l=this.ctx.createGain();l.gain.value=e,l.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t),a.connect(o),o.connect(l),l.connect(this.master),a.start()}_wind(){const t=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),e=t.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=Math.random()*2-1;const n=this.ctx.createBufferSource();n.buffer=t,n.loop=!0;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=400;const r=this.ctx.createGain();r.gain.value=.18,n.connect(i),i.connect(r),r.connect(this.master),n.start(),this.wind=r}fire(){this._noise(.18,.35,600),this._osc("sawtooth",140,.22,.12,-80)}step(t){this._noise(.08,t?.16:.1,180),this._osc("sine",t?70:55,.09,.08,-20)}roar(t=90,e=0){const n=Math.max(.15,1-e/180);this._osc("sawtooth",t,.9,.18*n,-t*.4),this._osc("square",t*1.5,.5,.05*n,-t*.3),this._noise(.55,.2*n,Math.max(160,t*3.2))}impact(t=!1){this._noise(.12,t?.4:.28,t?1400:900),this._osc("square",t?420:220,.12,.09,-140)}breath(t=500){this._noise(.6,.2,t),this._osc("sawtooth",60,.5,.1,40)}mortar(){this._osc("sine",320,.45,.1,-240),this._noise(.3,.12,260)}explode(){this._noise(.7,.4,140),this._osc("sine",70,.7,.24,-45)}death(){this._osc("sawtooth",50,1.6,.18,-30)}}const Oi=["low","medium","high","cinematic"],uc={low:0,medium:38,high:48,cinematic:Kt.quality.targetFps-4},c_=6,h_=2.5,u_=1.5,d_=.75;class f_{constructor(){this.fps=60,this.tier="high",this.listeners=[],this._since=0,this._age=0,this._last=0}onChange(t){this.listeners.push(t)}frame(){const t=performance.now(),e=this._last;if(this._last=t,!e)return;const n=(t-e)/1e3;if(n<=0||(this.fps+=(1/n-this.fps)*(1-Math.exp(-n/d_)),this._age+=n,this._since+=n,this.pinned||this._age<u_||this._since<h_))return;const i=Oi.indexOf(this.tier);let r=this.tier;if(this.fps<uc[this.tier]&&i>0?r=Oi[i-1]:i<Oi.length-1&&this.fps>uc[Oi[i+1]]+c_&&(r=Oi[i+1]),r!==this.tier){this.tier=r,this._since=0;for(const a of this.listeners)a(this.tier)}}pin(t){if(Oi.includes(t)){this.tier=t,this.pinned=!0;for(const e of this.listeners)e(t)}}}const pa=11;class p_{constructor(t,e){this.player=t,this.weapon=e,this.t=0;const n=new URLSearchParams(location.search);this.enabled=n.get("autoplay")==="1",this.sweep=n.get("sweep")!=="0",this.anchor=t.position.clone()}update(t,e){if(this.enabled){if(this.t+=t,this.player.health<40&&(this.player.health=Math.min(100,this.player.health+24*t)),this._weave(),this.sweep&&this.t<pa){this._surveyRidge(t);return}e&&this._track(t,e),this.player.fireHeld=this.t>pa+1.5&&Math.floor(this.t*1.15)%2===0,this.weapon.bolts===0&&(this.player._reload=!0)}}_weave(){const t=this.player;t.keys.delete("KeyW"),t.keys.delete("KeyS"),t.keys.delete("KeyA"),t.keys.delete("KeyD"),t.keys.add(Math.sin(this.t*.45)>0?"KeyA":"KeyD"),t.position.distanceTo(this.anchor)>14&&t.keys.add("KeyW")}_surveyRidge(t){const e=this.player,n=Math.PI*1.1*(this.t/pa);e.yaw=lt.damp(e.yaw,-.9+n,3,t),e.pitch=lt.damp(e.pitch,-.06+Math.sin(this.t*.5)*.12,3,t),e.fireHeld=!1}_track(t,e){const n=this.player,i=e.clone().sub(n.position),r=this.weapon.muzzle??Kt.weapon.muzzle,a=this.weapon.gravity??Kt.weapon.gravity,o=i.length()/r;i.y+=.5*a*o*o;const l=Math.atan2(-i.x,-i.z),c=Math.max(1,Math.hypot(i.x,i.z)),h=lt.clamp(Math.atan2(i.y,c),-.2,.95),u=((l-n.yaw+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;n.yaw+=u*(1-Math.exp(-t*4.2)),n.pitch=lt.damp(n.pitch,h,4.2,t)}}class m_{constructor(){this.open=!1,this.owned={ashpiercer:0},this.equipped="ashpiercer",this._root=null,this._onChange=null}bind(t){this._onChange=t,this._root=document.getElementById("shop"),this._root&&this._root.addEventListener("click",e=>{const n=e.target.closest("[data-shop]");if(!n)return;e.preventDefault(),e.stopPropagation();const i=n.getAttribute("data-id"),r=n.getAttribute("data-shop");r==="close"?this.close():r==="buy"?this.buy(i):r==="upgrade"?this.upgrade(i):r==="equip"&&this.equip(i)})}toggle(t){return this.open?this.close():t&&this.openShop(),this.open}openShop(){this.open=!0,document.body.classList.add("shop-open"),document.exitPointerLock?.(),this.render()}close(){this.open&&(this.open=!1,document.body.classList.remove("shop-open"),this._root?.classList.add("hidden"))}isOwned(t){return Object.hasOwn(this.owned,t)}tierOf(t){return this.owned[t]??-1}buy(t,e=this.hunt){const n=ws(t);return this.isOwned(t)?{ok:!1,reason:"owned"}:!e||e.bounty<n.cost?{ok:!1,reason:"gold"}:e.spend(n.cost,`Bought ${n.name} · −${n.cost}g`)?(this.owned[t]=0,this.equip(t),this.render(),{ok:!0}):{ok:!1,reason:"gold"}}upgrade(t,e=this.hunt){if(!this.isOwned(t))return{ok:!1,reason:"unowned"};const n=ws(t),i=this.owned[t],r=sc(n,i);return r?!e||e.bounty<r.cost?{ok:!1,reason:"gold"}:e.spend(r.cost,`${n.name} ${r.label} · −${r.cost}g`)?(this.owned[t]=i+1,this.equipped===t&&this._emit(),this.render(),{ok:!0}):{ok:!1,reason:"gold"}:{ok:!1,reason:"max"}}equip(t){return this.isOwned(t)?this.equipped===t?{ok:!0}:(this.equipped=t,this._emit(),this.render(),{ok:!0}):{ok:!1,reason:"unowned"}}_emit(){this._onChange?.(this.equipped,this.owned[this.equipped]??0)}attachHunt(t){this.hunt=t}render(){if(!this._root)return;const e=this.hunt?.bounty??0;this._root.classList.toggle("hidden",!this.open);const n=this._root.querySelector("#shop-list"),i=this._root.querySelector("#shop-gold");i&&(i.textContent=`${e} gold`),n&&(n.innerHTML=Tg.map(r=>this._card(ws(r),e)).join(""))}_card(t,e){const n=this.isOwned(t.id),i=this.tierOf(t.id),r=n?ah(t,i):t.upgrades[0],a=n?sc(t,i):null,o=this.equipped===t.id,l=n&&i>=Ag(t);let c="";if(n){const u=[];if(o?u.push('<span class="shop-equipped">In hand</span>'):u.push(`<button data-shop="equip" data-id="${t.id}">Equip</button>`),a){const d=e>=a.cost;u.push(`<button data-shop="upgrade" data-id="${t.id}" ${d?"":"disabled"}>Upgrade ${a.label} · ${a.cost}g</button>`)}else l&&u.push('<span class="shop-max">Fully fitted</span>');c=u.join("")}else{const u=e>=t.cost;c=`<button data-shop="buy" data-id="${t.id}" ${u?"":"disabled"}>Buy ${t.cost}g</button>`}const h=n?t.upgrades[i].label:"Unbought";return`<article class="shop-card ${o?"is-equipped":""} ${n?"is-owned":""}">
      <header>
        <h3>${t.name}</h3>
        <p class="shop-epithet">${t.epithet}</p>
        <p class="shop-tier">${h}</p>
      </header>
      <p class="shop-blurb">${t.blurb}</p>
      <ul class="shop-stats">
        <li>${r.damage} dmg${r.pellets>1?` × ${r.pellets}`:""}</li>
        <li>${r.bolts} ${t.ammo.toLowerCase()}</li>
        <li>${Math.round(r.muzzle)} m/s</li>
        <li>${r.reload.toFixed(1)}s wind</li>
      </ul>
      <div class="shop-actions">${c}</div>
    </article>`}}class g_{constructor(t){this.canvas=t,this.hud=new o_,this.audio=new l_,this.perf=new f_,this.clock=new rh,this._muzzle=new T,this._dir=new T,this._look=new T,this.raycaster=new cg,this.started=!1}async init(){this.hud.renderCodex(vr,mg);const t=await pg((n,i)=>this.hud.setLoading(n/i));this.textures=t,this.renderer=new xm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=ke,this.renderer.toneMapping=oo,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fc,this.scene=new Yc,this.camera=new qe(75,innerWidth/innerHeight,.05,900),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.world=new bg(this.scene,t,this.renderer),this.player=new Eg(this.camera,this.world),this.player.position.set(2,this.world.heightAt(2,46)+Kt.player.eye,46),this.player.yaw=.04,this.player.pitch=-.18,this.player.bind(this.canvas),this.viewmodel=new Ug(this.camera,innerWidth/innerHeight,this.world.envMap),this.weapon=new Dg(this.viewmodel,t),this.shop=new m_,this.particles=new Gg(this.scene),this.hunt=new Hg(this.scene,this.world,t,this.audio),this.combat=new Wg(this.scene,this.world,this.hunt,this.particles,this.audio),this.fx=new s_(this.renderer,this.scene,this.camera,this.viewmodel),this.demo=new p_(this.player,this.weapon),this.shop.attachHunt(this.hunt),this.shop.bind((n,i)=>this.weapon.rebuild(n,i)),this._applyQuality(this.perf.tier),this.perf.onChange(n=>this._applyQuality(n));const e=Number(new URLSearchParams(location.search).get("flight"));await this.hunt.begin(Number.isFinite(e)?e-1:0),this.textures.prefetch(gg),window.addEventListener("resize",()=>this.resize()),this.hud.ready(),this.demo.enabled&&this.start()}start(){this.started||(this.started=!0,this.audio.resume(),this.hud.showGame(),this.clock.start(),this.renderer.setAnimationLoop(()=>this.tick()))}resize(){const t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewmodel.resize(t/e),this.renderer.setSize(t,e),this.fx.resize(t,e)}_applyQuality(t){this.world.setQuality(t),this.particles.setQuality(t),this.fx.setQuality(t),this.hunt.setQuality(t);const e=Math.min(devicePixelRatio,1.75)*Kt.quality.renderScale[t];this.renderer.setPixelRatio(e),this.fx.setPixelRatio(e)}tick(){const t=Math.min(this.clock.getDelta(),.05);this.perf.frame();const e=this.hunt.focus(this.player.position);this.demo.update(t,e?.dragon.root.position??null),this.downedFor>0?this._goingDown(t):this.player.health<=0&&this._goDown();const n=this.world.atCamp(this.player.position),i=this.shop.open;this.player.consumeShop()&&this.shop.toggle(n),this.player.consumeShopClose()&&this.shop.close(),this.shop.open&&!n&&this.shop.close(),i&&!this.shop.open&&this.canvas.requestPointerLock?.().catch(()=>{}),this.player.busy=this.shop.open,this.shop.open&&(this.player.fireHeld=!1,this.player.keys.clear());const r=this.player.update(t);this.player.didStep&&this.audio.step(this.player.sprint),this.hunt.update(t,this.player,this.weapon),this.combat.handleRequests(this.hunt.drainRequests()),this.world.update(this.clock.elapsedTime),this.particles.update(t,this.player.position);for(const h of this.hunt.breathSources)this.particles.breathe(h.dragon.mouthWorld(this._muzzle),h.ai.breathTarget(this._look),t,h.ai.breath.kind,h.ai.breath.spread),Math.random()<.06&&this.audio.breath(h.spec.mind.voice.breath);if(this.combat.update(t,this.player),this._voices(),this.combat.didHitDragon){this.combat.didHitDragon=!1;const h=this.combat.lastHitDragon,u=this.hunt.entries.find(d=>d.dragon===h);u?.ai.notifyHit(this.combat.lastHitPart),u&&this.audio.roar(u.spec.mind.voice.roar,h.root.position.distanceTo(this.player.position))}const a=this._aimingDragon();this.viewmodel.syncLighting(this.world.sun,this.world.hemi,this.camera.quaternion),this.weapon.update(t,{moving:r,sprinting:this.player.sprint,crouching:this.player.crouch,turnRate:this.player.turnRate,aimingHot:a}),!this.shop.open&&this.player.consumeReload()&&this.weapon.tryReload(),!this.shop.open&&this.player.fireHeld&&this.weapon.tryFire()&&(this.camera.getWorldDirection(this._dir),this.weapon.muzzleWorld(this._muzzle),this.combat.fire(this._muzzle,this._dir,this.weapon.shot),this.player.addShake(.045),this.audio.fire(),this.particles.muzzleFlash(this._muzzle,this._dir));const o=this.hunt.focus(this.player.position),l=this.world.atCamp(this.player.position)&&this.player.onFire<=0;l&&this.player.health<100&&(this.player.health=Math.min(100,this.player.health+9*t));const c=Math.hypot(this.player.velocity.x,this.player.velocity.z);this.fx.render(t,{heat:this.player.onFire>0||this.hunt.breathing?1:0,shake:this.player.shake.length()*8,blur:lt.clamp(c/14+Math.abs(this.player.shake.x)*6,.15,1),damage:lt.clamp(1-this.player.health/45,0,1)}),this.hud.update({health:this.player.health,bolts:this.weapon.bolts,maxBolts:this.weapon.max,focus:o,alive:this.hunt.alive,playerPos:this.player.position,flightLabel:this.hunt.flightLabel,flightIndex:this.hunt.flightIndex,totalFlights:this.hunt.totalFlights,bounty:this.hunt.bounty,log:this.hunt.log,logDirty:this.hunt.logDirty,fps:this.perf.fps,quality:this.perf.tier,hint:this.shop.open?"The camp armoury. Gold from the ridge buys iron.":l?this.player.health<100?"Binding wounds at the camp fire. B — armoury.":"Camp fire. B opens the armoury.":o?.ai.hint??"The ridge has gone quiet.",weaponName:this.weapon.spec.name,ammoLabel:this.weapon.spec.ammo,hot:a,hit:this.combat.lastHit>0,hitPart:this.combat.lastHitPart,hitWeight:lt.clamp((this.combat.lastHitDealt??0)/Math.max(1,this.weapon.damage),0,1),heat:this.player.onFire>0,reloading:this.weapon.reloading,reloadProgress:this.weapon.reloadProgress}),this.hunt.logDirty=!1}_goDown(){const e=(this.hunt.alive.find(n=>n.ai.state==="attack")??this.hunt.focus(this.player.position))?.spec.name??"dragon";this.downedFor=Kt.hunt.downed,this.hud.showDowned(e),this.hunt.pushLog(`Killed by a ${e}`,"death"),this.audio.death()}_goingDown(t){if(this.downedFor-=t,this.player.keys.clear(),this.player.fireHeld=!1,this.player.pitch=lt.damp(this.player.pitch,-.62,2.2,t),this.downedFor>0)return;this.downedFor=0,this.hud.showDowned(null),this.player.health=100,this.player.onFire=0,this.player.pitch=-.1,this.player.velocity.set(0,0,0);const e=this.world.campCenter;this.player.position.set(e.x,this.world.heightAt(e.x,e.z)+Kt.player.eye,e.z),this.demo.anchor.copy(this.player.position),this.weapon.bolts=this.weapon.max,this.hunt.restartFlight()}_voices(){for(const t of this.hunt.entries){const e=t.ai.attackStyle;e?t.lastRoar!==e&&(t.lastRoar=e,this.audio.roar(t.spec.mind.voice.roar,t.dragon.root.position.distanceTo(this.player.position))):t.lastRoar=null}}_aimingDragon(){return this.camera.getWorldDirection(this._look),this.raycaster.set(this.camera.position,this._look),this.raycaster.intersectObjects(this.hunt.hitboxes,!1).length>0}}const __=document.getElementById("gl"),xr=new g_(__);window.game=xr;xr.init().then(()=>{document.getElementById("hunt-btn").addEventListener("click",()=>xr.start()),window.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&xr.start()})});
//# sourceMappingURL=index-CsUBYkcV.js.map
