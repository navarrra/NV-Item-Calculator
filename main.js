
let customNum = document.getElementById('bandnum').value



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

function band(num){
  
  let y = (num-1);
  let result = Math.pow(2,y).toString(16);

  document.getElementById("result").innerHTML = `<h1>0X${result}</h1>`;
  
}




