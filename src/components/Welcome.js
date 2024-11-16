import React, {useState} from 'react';
export default function Welcome(){
    const [name,setName] = useState("Heba");
    return (
      <div className='text-center'>
        <h1 className='font-bold'>Welcome {name}!</h1>
        <button onClick={()=>setName('Basma')} className='p-4 text-white bg-blue-800 rounded hover:bg-white hover:text-blue-800'>Change Name</button>
      </div>
    );
  }