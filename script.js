var arr =[
  {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story:"https://images.unsplash.com/photo-1706883376007-95963191784e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {dp:"https://images.unsplash.com/photo-1708312609221-4d67cb8a6c20?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story:"https://images.unsplash.com/photo-1707682795068-5e745b41f3b6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{dp:"https://images.unsplash.com/photo-1707697781368-d4f7a152510e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{dp:"https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
];
var storiya =document.querySelector(".storiya");
var clutter =""
arr.forEach(function(elem, idx){
  clutter += `<div class="story">
  <img id="${idx}"src="${elem.dp}" alt="">       
  </div>`

  
})
storiya.innerHTML= clutter
storiya.addEventListener("click",function(dets){
   document.querySelector(".full").style.display= "block"
   document.querySelector(".full").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
    document.querySelector(".full").style.display= "none"
   },3000)
})