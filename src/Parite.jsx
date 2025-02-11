/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
export default function Parite() {
    const [number,setNumber]=useState("");
    const [parite,setParite]=useState("");
    const verifParite=()=>{
        if(number%2==0){
            setParite(`${number} est pair`);
        }
        else{
            setParite(`${number} est impair`);
        }
    }

  return (
    <div>
        <h2>Test de parité</h2>
       Entier <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
       <br></br>
         <button onClick={verifParite}>Verifier</button><br></br>
         {parite}
    
    <br></br>
    <br></br>
    
    </div>
  )
}
