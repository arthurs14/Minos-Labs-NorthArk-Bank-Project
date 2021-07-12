import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export default function ExpensePrint(){
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      {/* Expense page goes here <ComponentToPrint ref={componentRef} /> */}
      <button className='Rev-sidebar-print' onClick={handlePrint}><b>Print</b></button>
    </div>
  );
};