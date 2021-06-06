let customNum = document.getElementById('bandnum').value
let hexToggle = true;



function selectNetwork(e){
    document.getElementById("ltebandbtns").style.display = "none";
    document.getElementById("nrbandbtns").style.display = "none";
   if(e === "lte"){
    console.log("test")
        document.getElementById("ltebandbtns").style.display = "block";
   }else if(e === "nr"){
    document.getElementById("nrbandbtns").style.display = "block";
   }else{
       
   }
   
}

function toggleBtn(){
  if(hexToggle===true){
    hexToggle=false;
  }else{
    hexToggle=true;
  }
  
}

function band(num){
  
  let y = (num-1);
  let result = Math.pow(2,y)

  
  if(hexToggle===true){
    document.getElementById("result").innerHTML = `<h1 class="text-center">0X${result.toString(16)}</h1>`;
    result.toString(16);
  }else{
    document.getElementById("result").innerHTML = `<h1 class="text-center">${result}</h1>`;
  }
  
}




