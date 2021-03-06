 'use strict';

const bishInput = document.querySelector('#bish');
const boshInput = document.querySelector('#bosh');
const limitInput = document.querySelector('#limit');
const buttonInput = document.querySelector('#btn');
const listDiv = document.querySelector('#list-group');
const body = document.querySelector('#body');

const err = document.querySelector('#error');
const list = document.querySelector('#list');
const clr = document.querySelector('#clear');


buttonInput.addEventListener('click', ()=>{
  CalculateBishBosh(parseInt(bishInput.value), parseInt(boshInput.value),parseInt(limitInput.value)); 
});

clr.addEventListener('click', Clear);


//Calculate Bish Bosh
function CalculateBishBosh(x,y,z){

  console.log(typeof x);
  console.log(typeof y);
  console.log(typeof z);

   
  const error = document.querySelector('#error');
    if(x<0 || y <0 || z <0 )
    {
      const errorText = document.createTextNode("Negative Numbers are not accepted");
        error.appendChild(errorText) ;

    }else if(isNaN(x) || isNaN(x) || isNaN(x) ){
      
      const errorText = document.createTextNode("Fields must be filled out");
      error.appendChild(errorText) ;


    } else 
    {
    
      for(let i = 1; i <=z; i++)
      {
        if(i % x === 0 && i%y === 0){
          const li = document.createElement("li")
          const text = document.createTextNode("Bish-Bosh")
          li.appendChild(text)
          list.appendChild(li)
          
        }else if(i % x === 0){
          const li = document.createElement("li");
          const text = document.createTextNode("Bish");
          li.appendChild(text);
          list.appendChild(li);
          
        }else if(i % y === 0){
          const li = document.createElement("li");
          const text = document.createTextNode("Bosh");
          li.appendChild(text);
          li.innerText = "Bosh";
          list.appendChild(li);
          }
        else {
          const li = document.createElement("li");
          li.innerText = `${i}`;
          list.appendChild(li);
        }
      }
      
    }
}


function Clear(){
  document.querySelector('#bish').value="";
  
  document.querySelector('#bosh').value="";
  
  document.querySelector('#limit').value="";
  
  document.querySelector('#error').innerHTML="";

  document.querySelector('#list').innerHTML = "";


}

 