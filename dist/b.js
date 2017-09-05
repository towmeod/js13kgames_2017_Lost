!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){i(2),i(4),i(1);const n=i(3);AFRAME.registerGeometry("mapgeo",{schema:{},init:function(e){this.mapContext=n.go(64,8);var t=new THREE.Geometry;let i=this.mapContext.getImageData(0,0,64,64);for(let e=0;e<64;e++)for(let n=0;n<64;n++)if(0!=i.data[4*(e+64*n)]){var a=new THREE.PlaneGeometry(1,1);a.rotateX(-Math.PI/2),a.translate(e-32,0,n-32),t.merge(a)}this.geometry=t}}),AFRAME.registerComponent("map",{init:function(){this.mapContext=n.go(32,4);let e=document.createElement("a-entity"),t=this.mapContext.getImageData(0,0,32,32);for(let i=0;i<32;i++)for(let n=0;n<32;n++)if(0!=t.data[4*(i+32*n)]){let t=document.createElement("a-entity");t.classList.add("floor"),t.setAttribute("mytexture","src: #my-texture;index:0;lookup:"+rnd(6)),t.addEventListener("click",function(){t.setAttribute("mytexture","src: #my-texture;index:4")}),t.setAttribute("position",`${i-16} 0 ${n-16}`),t.setAttribute("mixin","voxel"),e.appendChild(t)}this.el.appendChild(e)}})},function(e,t){AFRAME.registerComponent("billboard-texture",{schema:{index:{type:"int"},lookup:{type:"int",default:0}},init:function(){const e=this.data;var t=document.getElementById("fragment").textContent,i=document.getElementById("vertex-billboard").textContent;this.material=new THREE.ShaderMaterial({uniforms:{time:{value:0},index:{value:this.data.index},DiffuseTexture:{value:window.t},color:{value:new THREE.Color(e.color)},spriteDimensions:{value:{x:16,y:1}},repeat:{value:{x:1,y:1}},Lookup:{value:window.pal},lookupIndex:{value:e.lookup},fogStart:{value:10},fogEnd:{value:15},alphatest:{value:.95},fogColor:{value:new THREE.Color(0,0,0)}},vertexShader:i,fragmentShader:t}),this.material.blending=THREE.MultiplyBlending,this.applyToMesh(),this.el.addEventListener("model-loaded",()=>this.applyToMesh())},update:function(){this.material.uniforms.index.value=this.data.index},applyToMesh:function(){const e=this.el.getObject3D("mesh");e&&(this.material.uniforms.repeat.value.x=+this.el.getAttribute("width")||1,this.material.uniforms.repeat.value.y=+this.el.getAttribute("height")||1,e.material=this.material)}})},function(e,t){window.rnd=(e=>~~(Math.random()*e)),window.t=new THREE.ImageUtils.loadTexture("./lost.png"),window.t.minFilter=window.t.magFilter=1003,window.pal=new THREE.ImageUtils.loadTexture("./palettes.png"),window.pal.minFilter=window.pal.magFilter=1003},function(e,t){var i={go:(e,t)=>{var i=[[[0,0,2,0,0],[2,1,1,1,0],[0,1,1,1,0],[0,1,0,1,2],[0,0,0,2,0]],[[0,0,2,0,0],[0,1,1,1,0],[0,1,0,1,0],[2,1,0,1,2],[0,1,1,1,0],[0,1,1,1,0],[0,0,2,0,0]],[[0,0,2,0,0],[0,1,1,1,1],[0,1,1,1,0],[2,1,1,1,2],[0,1,1,1,0],[1,1,1,1,0],[1,0,2,0,0]],[[0,1,1,1,0],[2,1,1,1,0],[0,1,0,1,0],[0,1,0,1,2],[0,1,1,1,0]],[[0,0,0,0],[2,1,1,2],[0,0,0,0]],[[0,2,0],[0,1,0],[0,1,0],[0,2,0]],[[0,0,0,0,0,0,0,0],[2,1,1,1,1,1,1,2],[0,0,0,0,0,0,0,0]],[[0,2,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,2,0]],[[0,0,0,0,2,0],[0,0,0,1,1,0],[2,1,1,1,1,0],[0,1,1,0,1,1],[0,1,0,0,1,1],[0,0,1,1,1,2],[0,1,1,0,1,0],[0,0,0,0,2,0]],[[0,0,0,2,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[2,1,1,1,1,2],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,0,0,2,0,0]],[[0,0,0,0,2,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0,0],[2,1,1,1,1,0,1,1,2,0,0],[0,0,0,1,1,0,0,0,1,0,0],[0,0,1,1,0,0,0,1,1,1,0],[0,0,1,1,0,0,0,1,1,1,0],[0,0,1,1,0,0,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,1,1,1,1,0],[0,1,1,1,0,0,0,1,1,1,0],[0,0,1,1,0,0,0,0,1,0,0],[0,0,2,0,0,0,0,0,2,0,0]],[[0,0,0,0,0,0,2,0,0,0,0],[0,0,0,1,1,0,1,0,0,0,0],[0,0,1,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,0],[2,1,1,1,1,1,1,1,1,1,2],[0,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,2],[0,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,0,0,1,1,1,1,0],[1,1,1,1,0,0,1,1,1,0,0],[0,0,2,0,0,0,0,1,1,0,0]]];let n=i.length;for(let e=0;e<n;e++){let t=i[e].slice();for(let e=0;e<t.length;e++)t[e]=t[e].slice().reverse();i.push(t);let n=i[e].slice();n=n.reverse(),i.push(n);let a=t.slice();a=a.reverse(),i.push(a)}for(let e=0;e<i.length;e++){i[e].size={w:i[e][0].length,h:i[e].length},i[e].exits=[];for(let t=0;t<i[e].size.h;t++)for(let n=0;n<i[e].size.w;n++)2===i[e][t][n]&&i[e].exits.push({x:n,y:t})}var a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle="rgba(0, 0, 0, 0)",o.fillRect(0,0,e,e);let l=!0;var r=(e,t)=>{let n,a,r,s=[],u=!1,d=25;do{n=i[rnd(i.length)];for(var h=0;h<n.exits.length;h++){a=e.x-n.exits[h].x,r=e.y-n.exits[h].y;if(u=o.getImageData(a,r,n.size.w,n.size.h).data.every(e=>0===e))break}d--}while(d>0&&!u)return u||(n=[[1]],n.exits=[{}],a=e.x,r=e.y,h=0),o.fillStyle="#4A4",l||o.fillRect(a+n.exits[h].x||0,r+n.exits[h].y||0,1,1),o.fillStyle=l?"#A44":"#888",1===t&&(o.fillStyle="#F0F"),2===t&&(o.fillStyle="#0FF"),l=!1,n.forEach((e,t)=>{e.forEach((e,i)=>{1===e&&o.fillRect(a+i,r+t,1,1),2===e&&s.push({x:a+i,y:r+t})})}),s};let s=t,u=[{x:e/2,y:e/2}];for(let e=0;e<s;e++){let t,i=[];u.forEach((n,a)=>{e==s-1&&a==u.length-~~(u.length/3)&&(t=1),e==s-1&&a==~~(u.length/3)&&(t=2);let o=r(n,t);i=i.concat(o),t=0}),u=i}return o}};e.exports=i},function(e,t){AFRAME.registerComponent("mytexture",{schema:{color:{type:"color"},index:{type:"int"},lookup:{type:"int",default:0}},init:function(){const e=this.data;var t=document.getElementById("fragment").textContent,i=document.getElementById("vertex").textContent;this.material=new THREE.ShaderMaterial({uniforms:{time:{value:0},index:{value:this.data.index},DiffuseTexture:{value:window.t},Lookup:{value:window.pal},color:{value:new THREE.Color(e.color)},spriteDimensions:{value:{x:16,y:1}},repeat:{value:{x:1,y:1}},fogStart:{value:5},fogEnd:{value:15},lookupIndex:{value:e.lookup},fogColor:{value:new THREE.Color(0,0,0)},tint:{value:new THREE.Color(255,255,255)},tintAmount:{value:0}},vertexShader:i,fragmentShader:t}),this.applyToMesh(),this.el.addEventListener("model-loaded",()=>this.applyToMesh())},update:function(){this.material.uniforms.index.value=this.data.index,this.material.uniforms.lookupIndex.value=this.data.lookup},applyToMesh:function(){const e=this.el.getObject3D("mesh");e&&(this.material.uniforms.repeat.value.x=+this.el.getAttribute("width")||1,this.material.uniforms.repeat.value.y=+this.el.getAttribute("height")||1,e.material=this.material)}})}]);