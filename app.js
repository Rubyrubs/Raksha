
(function(){
let  selectedcolor= "#fff";
init();
makecolorpalette();



function init(){
    let dots=document.querySelector('#dots');
    for (let i = 0; i < dots.children.length; i++) {
        const dot = dots.children[i];
        dot.addEventListener('click',changecolor);
        
    }
}

 function changecolor(e){
     if (e.target.style.backgroundColor= selectedcolor) {
                    
      e.target.style.backgroundColor= "none";
      
      } else {
        
        e.target.style.backgroundColor= selectedcolor;
      } 
     
   }




function makecolorpalette(){
      let palette=document.querySelector('#palette');
      let colors=['red','orange','gold','limegreen','blue'];
    for (let i = 0; i< palette.children.length; i++) {
      const colorbox = palette.children[i];
      colorbox.style.backgroundColor= colors[i% colors.length];
      colorbox.addEventListener('click',function(e){
          selectedcolor=e.target.style.backgroundColor;
      });

       
    }
}

})();

