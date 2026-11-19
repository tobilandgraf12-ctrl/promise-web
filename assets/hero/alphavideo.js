/* Video con transparencia: el MP4 trae arriba el color y abajo la máscara; WebGL los combina. Anda en iPhone y Android. */
function pmAlphaVideo(box){
  var cv=box.querySelector('canvas'), src=box.getAttribute('data-src'), poster=box.querySelector('img');
  var gl=cv.getContext('webgl',{premultipliedAlpha:true,alpha:true,antialias:false});
  if(!gl){return;}
  var v=document.createElement('video');
  v.crossOrigin='anonymous';v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.preload='auto';
  v.setAttribute('muted','');v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');
  v.style.cssText='position:absolute;width:1px;height:1px;opacity:0;pointer-events:none';
  v.src=src;box.appendChild(v);
  var vs='attribute vec2 p;varying vec2 uv;void main(){uv=vec2((p.x+1.)*.5,(1.-p.y)*.5);gl_Position=vec4(p,0.,1.);}';
  var fs='precision mediump float;varying vec2 uv;uniform sampler2D t;void main(){vec3 c=texture2D(t,vec2(uv.x,uv.y*.5)).rgb;float a=texture2D(t,vec2(uv.x,.5+uv.y*.5)).r;gl_FragColor=vec4(c,a);}';
  function sh(type,s){var o=gl.createShader(type);gl.shaderSource(o,s);gl.compileShader(o);return o;}
  var pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);gl.useProgram(pr);
  var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var loc=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  var tx=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tx);
  [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(k){gl.texParameteri(gl.TEXTURE_2D,k,gl.CLAMP_TO_EDGE);});
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  var on=false;
  function draw(){
    if(v.readyState>=2){
      if(!on){on=true;box.classList.add('pm-av-on');}
      gl.viewport(0,0,cv.width,cv.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,v);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    }
    if(v.requestVideoFrameCallback)v.requestVideoFrameCallback(draw);else requestAnimationFrame(draw);
  }
  var p=v.play();if(p&&p.catch)p.catch(function(){});
  if(v.requestVideoFrameCallback)v.requestVideoFrameCallback(draw);else requestAnimationFrame(draw);
  document.addEventListener('visibilitychange',function(){if(!document.hidden)v.play().catch(function(){});});
}
document.querySelectorAll('[data-alpha-video]').forEach(pmAlphaVideo);
