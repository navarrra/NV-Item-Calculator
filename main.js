//variables
let customNum = document.getElementById('bandnum').value;
let hexToggle = true;
let bands = [];
let finalVal;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//show and hide LTE and NR preset buttons
function selectNetwork(e){

    document.getElementById("ltebandbtns").style.display = "none";
    document.getElementById("nrbandbtns").style.display = "none";

   if(e === "lte"){
   
      document.getElementById("ltebandbtns").style.display = "block";

   }else if(e === "nr"){

      document.getElementById("nrbandbtns").style.display = "block";

   }else{
       
   }
   
}

//hex toggle button true/false
function toggleBtn(){
  if(hexToggle===true){

    hexToggle=false;

  }else{

    hexToggle=true;

  }
  
}


function band(bnd){
  
  const tempVal = bnd-1;
  let singleConvert = Math.pow(2,tempVal);
  
  bands.push(singleConvert);

  finalVal = bands.reduce(reducer);

  displayResult();
}


//display result in hex or decimal
function displayResult(){

  if(hexToggle===true){

    document.getElementById("result").innerHTML = `<h1 class="text-center">0X${finalVal.toString(16).toUpperCase()}</h1>`;


  }else{

    document.getElementById("result").innerHTML = `<h1 class="text-center">${finalVal}</h1>`;

  }


}
