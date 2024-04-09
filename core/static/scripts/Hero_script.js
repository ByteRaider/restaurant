(function() {
  
  
    var ctx= new AudioContext();
  function createSound(size,fr, delay, type, vol) {
   for(let i=0; i < size; i++) {
   let osc= ctx.createOscillator(),
          gain= ctx.createGain();
          
      setTimeout(function() {
        osc.frequency.value= fr*i;
        gain.gain.value= vol;
        osc.type= type;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(function() {
            console.log(osc.frequency.value);
            let gVal= gain.gain.value,
                smooth;
            function reduceGain() {
              gVal-=0.02;
               if(gVal > 0) {
                smooth= requestAnimationFrame(reduceGain);
               } else {
                  osc.stop();
                  cancelAnimationFrame(smooth);
               }
                 
              
              gain.gain.value= gVal/7;
            }
            reduceGain();
            
          
      }, delay);
          cir.classList.toggle("pop");
       
      }, i*delay); 
      
   }
    
  }
    
    function getRandomColor() {
    var colors= ["#456", "#890", "#634", "#299", "tomato", "#fb3"],
    idx= Math.floor(colors.length*Math.random());
    
  return (colors[idx]);
    }
  
    function animateIt(el, dur, delay) {
      var animateEl= el.animate([
            {
              opacity: 0,
             transform: "translate(-50%, -50%) scale(0)" 
            },
            
            {
              opacity: 1,
              transform: "translate(-50%, -50%) scale(1)"
            },
            {
              opacity: 0,
              transform: "translate(-50%, -50%) scale(1.1)"
            }
            
          ], 
                                           {
          duration: dur,
          easing: "ease-out",
          fill: "forwards",
          delay: delay || 0
          });
      
      return animateEl;
    }
    
    
    
    function createBubble() {
      var ns= "http://www.w3.org/2000/svg",
          bubble= document.createElement("div"),
          bubbleDummy= document.createElement("div"),
          svg= document.createElementNS(ns, "svg");
    
      // Set attributes for the SVG as per your provided SVG code
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("class", "icon");
      svg.setAttribute("version", "1.1");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("fill", "#000000");
      svg.innerHTML = `
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
        <path d="M32 703.328a160 160 0 0 0 160 160h640a160 160 0 0 0 160-160H32z" fill="#E29460" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #8b4719;"></path>
<path d="M832 831.328H192a160 160 0 0 1-156.768-128H32a160 160 0 0 0 160 160h640a160 160 0 0 0 160-160h-3.232a160 160 0 0 1-156.768 128z" fill=""></path>
<path d="M960 479.328H64a64 64 0 0 0 0 128h896a64 64 0 0 0 0-128z" fill="#EF4D4D" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #9a0e0e;"></path>
<path d="M960 575.328H64a63.904 63.904 0 0 1-61.76-48c-1.312 5.184-2.24 10.464-2.24 16a64 64 0 0 0 64 64h896a64 64 0 0 0 64-64c0-5.568-0.928-10.848-2.24-16a63.872 63.872 0 0 1-61.76 48z" fill=""></path>
<path d="M512 159.328c-256 0-480 96-480 224h960c0-128-224-224-480-224z" fill="#E29460" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #8b4719;"></path>
<path d="M32 639.328h960v32H32z" fill="#469FCC" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #2a7297;"></path>
<path d="M752 271.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill=""></path>
<path d="M624 239.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill=""></path>
<path d="M464 303.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill=""></path>
<path d="M496 239.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill=""></path>
<path d="M304 239.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill=""></path>
<path d="M405.024 637.056l-126.4 126.4a31.968 31.968 0 0 1-45.248 0l-126.4-126.4h-24.224l152.896 152.896a31.968 31.968 0 0 0 45.248 0l152.896-152.896h-28.768z" fill=""></path>
<path d="M233.376 763.456a31.968 31.968 0 0 0 45.248 0l126.4-126.4H106.976l126.4 126.4zM570.496 637.056l92.128 92.128a31.968 31.968 0 0 0 45.248 0L800 637.056h-229.504z" fill="#EDD87E" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #5c4d0d;"></path>
<path d="M800 637.056l-92.128 92.128a31.968 31.968 0 0 1-45.248 0l-92.128-92.128h-24.224l118.624 118.624a31.968 31.968 0 0 0 45.248 0l118.624-118.624H800z" fill=""></path>
<path d="M864 351.328c-96 0-160 64-160 64s-38.4-64-96-64-96 64-96 64-64-64-160-64-160 64-160 64-38.4-64-96-64-96 64-96 64v32s64 64 160 64 160-64 160-64 38.4 64 96 64 96-64 96-64 64 64 160 64 160-64 160-64 38.4 64 96 64 96-64 96-64v-32s-64-64-160-64z" fill="#60B748" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #5e923a;"></path>
<path d="M928 511.328c-57.6 0-96-64-96-64s-64 64-160 64-160-64-160-64-38.4 64-96 64-96-64-96-64-64 64-160 64-160-64-160-64v32s64 64 160 64 160-64 160-64 38.4 64 96 64 96-64 96-64 64 64 160 64 160-64 160-64 38.4 64 96 64 96-64 96-64v-32s-38.4 64-96 64z" fill=""></path>
        </g>
      `;
    
      bubble.classList.add("bubble");
      bubble.style.color= getRandomColor();
      bubbleDummy.classList.add("bubble-dummy");
      svg.classList.add("icon");
      bubble.appendChild(bubbleDummy);
      bubble.appendChild(svg);
      
      document.body.appendChild(bubble);
      return {
        setPosition: function(x,y) {
            bubble.style.left= x +"px";
          
          bubble.style.top= y + "px";
        },
        _animate: function() {
          var animateBubble= animateIt(bubbleDummy, 1200),
              animateHeart= animateIt(svg, 2000);  
          
          console.log(animateBubble)
          
          return {
            bubbleDur: 1200,
            heartDur: 2000
          }
        },
        remove: function(el) {
          bubble.remove();
        }
      }
    }
    
    
    document.body.addEventListener("click", handleDown, false);
    document.body.addEventListener("touchstart", handleDown, false);
    
    function handleDown(e) {
        var _x= e.pageX,
        _y= e.pageY; 
      
      var bubble= createBubble();
      
      bubble.setPosition(_x, _y);
     var animation= bubble._animate(),
         totalDelay= animation.bubbleDur+ animation.heartDur;
      if(e.type) {
      createSound(20,5000,1,"sawtooth",1);
      }
      setTimeout(()=> {
        bubble.remove();
        console.log("removed");
      }, totalDelay);
      
      console.log(animation);
    }
    
    var w= document.body.clientWidth,
        h= document.body.clientHeight;
    
    function bubbleUp() {
      var de= {
        pageX: Math.random()*w,
        pageY: Math.random()*h
      }
      
      handleDown(de);
      
      bblUp= setTimeout(bubbleUp, 200);
        
    }
   bubbleUp();
    
    window.addEventListener("resize", function() {
      w= document.body.clientWidth,
        h= document.body.clientHeight;
    }, false);
  })();