import React,{useState} from 'react';

const App=(props)=> {

    const [count,setCount]=useState(props.initialCount);

    console.log(count);

    const restOne=()=>{
        setCount(prevCount=>{
            return prevCount-1;
        });
    }

    const reset=()=>{
        setCount(props.initialCount);
    }

  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Add one +1</button>
        <button onClick={restOne}>Minus one -1</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;