import React,{useCallback,useState} from 'react'
import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/countBtn';
import Age from './components/age';
import AgeBtn from './components/ageBtn';

const App = () => {

    const [count, setCount]=useState(0);
    const [age, setAge]=useState(10);

    const increamentCount=useCallback(()=>{
        setCount(prevCount=>prevCount+1);
    },[]);

    const increamentAge=useCallback(()=>{
        setAge(prevAge=>prevAge+1);
    },[]);

  return (
    <div>
        <Title />
        <Count count={count} />
        <CountBtn handleCount={increamentCount}/>
        <Age age={age}/>
        <AgeBtn handleAge={increamentAge}/>
    </div>
  )
}

export default App;