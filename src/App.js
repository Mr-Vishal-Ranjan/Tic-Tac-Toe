import { useState } from 'react';
import './App.css';

let count=1;

function Square() {
  const[value,setValue]=useState();

  function handle(){
    if(value==="X" || value==="O") return;

    if(count%2===0){
      setValue("X");
    }else{
      setValue("O");
    }
    count++;
  }
  return(
    <div>
      <button className='square' onClick={handle}>
        {value}
      </button>
    </div>
  );
}


export default function App(){
    return(
      <>
        <div className='urow'><Square/><Square/><Square/></div>
          
        <div className='mrow'><Square/><Square/><Square/></div>
        
        <div className='lrow'><Square/><Square/><Square/></div>
      </>
    );
};
