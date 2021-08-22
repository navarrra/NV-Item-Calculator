//variables
let customNum = document.getElementById('bandnum');
let hexToggle = true;
let bands = [];
let finalVal;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//show and hide LTE and NR preset buttons
function selectNetwork(e){
  const clearBands = bands.length = 0;
    document.getElementById("ltebandbtns").style.display = "none";
    document.getElementById("nrbandbtns").style.display = "none";

   if(e === "lte"){
      
      document.getElementById("ltebandbtns").style.display = "block";
      clearBands
   }else if(e === "nr"){

      document.getElementById("nrbandbtns").style.display = "block";
      clearBands
   }
   
}

//hex toggle button true/false
function toggleBtn(){

  if(hexToggle===true){

    hexToggle=false;

  }else{

    hexToggle=true;

  }
  console.log(hexToggle)
}

//band conversion function

function band(bnd, id){

  const tagId = document.getElementById(id);
  const tempVal = bnd-1;
  let singleConvert = Math.pow(2,tempVal);

  if(customNum.value > 0 ){
    finalVal = singleConvert;
    

  }else{
      //add or remove band to array
      if(tagId.value==="true"){

        let positionOfRemoveBand = bands.indexOf(singleConvert);

        bands.splice(positionOfRemoveBand,1);
        
        tagId.value = "false";
          
      }else{

        tagId.value = "true";

        bands.push(singleConvert);
          
      }
      
      if(bands.length > 0){

        finalVal = bands.reduce(reducer);
        displayResult();

      }else{
        
        displayResult();

      }

  }
  displayResult();
 
}


//display result in hex or decimal
function displayResult(){

let result = document.getElementById("result");


  if(hexToggle===true ){

    result.innerHTML = `<h1 class="text-center">0X${finalVal.toString(16).toUpperCase()}</h1>`;

  }else if(hexToggle===false){
 
    result.innerHTML = `<h1 class="text-center">${finalVal}</h1>`;

  }else{

    result.innerHTML = '<h1 class="text-center">Click bands</h1>';

  }

  
}
