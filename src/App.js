import React from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';
import { useEffect, useState } from 'react';

const API="http://localhost:8002/bills"

export default function App() {
  const [theBills, setTheBills] = useState([]);

  useEffect(()=>{
    fetch(API)
    .then(response=>response.json())
    .then(json=>setTheBills(json));
  }, []);

  return (
    <div>
      <BillsCast />
      <BillCollection theBills={theBills} setTheBills={setTheBills}/>
    </div>
  );
}
