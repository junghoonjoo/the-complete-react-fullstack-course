import React from 'react'

const CountBtn = ({handleCount}) => {
    console.log('3-countBtn');
  
    return (
    <>
        <button onClick={handleCount}>
            Increament the count
        </button>
    </>
  );
}

export default React.memo(CountBtn);