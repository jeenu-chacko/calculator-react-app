import React, { useState } from 'react';
import './App.css';
import './index.css';

let flag=false;
function App() {
  

  const [result, setResult] = useState("")

  

  const handleArOperation = (e)=>
  {
    flag=true;
    e.preventDefault();
    setResult(result.concat(e.target.value))
    console.log(result)
  }

  const handleCOperation = (e)=>
  {
    flag=false;
    e.preventDefault();
    setResult("")
    console.log(result)
  }


  const handleOperation = (e)=>{
    console.log(result)
    e.preventDefault();

    if(e.target.value==="clear")
    {
      setResult("");
    }

    else if(e.target.value==="cut")
    {
      if(result==="Error")
      {
        setResult("");
      }
      else
      {
        setResult(result.slice(0,-1));
      }
      
    }
    else if(e.target.value==="result")
    {
      try
      {
       setResult(eval(result).toString() );
      }
      catch(err)
      {
        setResult("Error")
      }
        
    }

    else{

      if(result==="Error")
      {
        setResult("");
        
      }
      else
      {
        if(!flag){  
          setResult(Number(result.concat(e.target.value)).toString())
        
        }
        else
        {  
          setResult(result.concat(e.target.value))  
        }
      
      }
    }
  }

  
  return(
    <div class="flex justify-center items-center  w-full bg-gray-100 h-screen p-2 md:bg-gray-200">
        
    <form action="" class="p-6 w-screen  md:h-3/4 md:w-1/4 bg-gray-800 md:p-4 space-y-3">
      <input type="text" value={result} onChange={(e) => setResult(e.target.value) } class="focus:outline-none rounded p-2 w-full text-right bg-gray-50"/>
     
        <div class="grid grid-cols-4 gap-4 space-y-2">
          <button  onClick={handleCOperation}  value="clear" class="focus:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded col-span-2">Clear</button>
          <button  onClick={handleOperation} value="cut" class="focus:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded">C</button>
          <button  onClick={handleArOperation} value="/" class="focus:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded">&divide;</button>
          <button  onClick={handleOperation} value="7" class=" focus:outline-none  bg-white hover:bg-gray-100 text-black focus:scale-50 font-bold py-2 px-4 rounded border">7</button>
          <button  onClick={handleOperation} value="8" class=" focus:outline-none hover:bg-gray-100 bg-white text-black focus:scale-50 font-bold py-2 px-4 rounded border">8</button>
          <button  onClick={handleOperation} value="9" class=" focus:outline-none bg-white hover:bg-gray-100 text-black focus:scale-50 font-bold py-2 px-4 rounded border">9</button>
          <button  onClick={handleArOperation} value="*" class="focus:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded">&times;</button>
          <button onClick={handleOperation} value="4" class=" focus:outline-none bg-white hover:bg-gray-100 text-black focus:scale-50 font-bold py-2 px-4 rounded border">4</button>
          <button onClick={handleOperation} value="5" class=" focus:outline-none bg-white hover:bg-gray-100 text-black focus:scale-50 font-bold py-2 px-4 rounded border">5</button>
          <button onClick={handleOperation} value="6" class=" focus:outline-none bg-white hover:bg-gray-100 text-black focus:scale-50 font-bold py-2 px-4 rounded border">6</button>
          <button onClick={handleArOperation} value="-" class="bg-blue-500 focus:outline-none hover:bg-blue-400 text-white font-bold py-3 px-4 rounded">-</button>
          <button onClick={handleOperation} value="1" class=" focus:outline-none hover:bg-gray-100 bg-white text-black focus:scale-50 font-bold py-2 px-4 rounded border">1</button>
          <button onClick={handleOperation} value="2" class=" focus:outline-none hover:bg-gray-100 bg-white text-black focus:scale-50 font-bold py-2 px-4 rounded border">2</button>
          <button onClick={handleOperation} value="3" class=" focus:outline-none hover:bg-gray-100 bg-white text-black focus:scale-50 font-bold py-2 px-4 rounded border">3</button>
          <button onClick={handleArOperation} value="+" class="bg-blue-500 focus:outline-none hover:bg-blue-400 text-white font-bold py-3 px-4 rounded">+</button>
          <button onClick={handleOperation} value="0" class=" focus:outline-none hover:bg-gray-100 bg-white text-black focus:scale-50 font-bold py-2 px-4 rounded border">0</button>
          <button onClick={handleArOperation} value="." class=" focus:outline-none hover:bg-gray-100 bg-white text-black focus:scale-50 font-bold py-2 px-4 rounded border">.</button>
          <button onClick={handleOperation} value="result" class="focus:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded col-span-2">=</button>

        </div>
          

    </form> 

      </div>
      
    
  )
}

export default App;
