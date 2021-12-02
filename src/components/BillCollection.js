import React from 'react';
import BillCard from './BillCard'
import BillSpecs from"./BillSpecs";

export default function BillCollection({ theBills, setTheBills }) {

    function handleViewClick (e) {
      <BillSpecs bill={e.target}/>
    }

  return (
    <div className="ui four column grid">
      <div className="row">
        { theBills.map (bill=> <BillCard key={bill.id} bill={bill} setTheBills={setTheBills} handleViewClick={handleViewClick}/>)}
      </div>
    </div>
  );
}
