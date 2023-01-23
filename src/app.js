import React,{useState,useEffect} from 'react';

const App=(props)=> {

    const [state,setState]=useState({
        count:props.initialCount,
        user:"Francis"
    });

    let [posts, setPosts]=useState([
        {
            name:"Super awesome hooks",
            body:"Everything you need for your hook"
        }
    ]);

    const hey='hello';
    const alertSomething=()=>alert("Something");

    //console.log(state);
    // useEffect(()=>{
    //     console.log(state);
    // },[state]);

    // useEffect(()=>{
    //     console.log(posts);
    // },[posts]);

    useEffect(()=>{
        console.log('Mounted')
    },[])


    const restOne=()=>{
        setState(prevState=>{
            return {...prevState,count:prevState.count-1};
        });
    }

    // const reset=()=>{
    //     setCount(props.initialCount);
    // }

    const addOnePost=()=>{
        let newPost={
            name:"Sugar is bad",
            body:"coffe is good"
        }

        setPosts([
            ...posts,newPost
        ]);
    }
  return (
    <>
        <h1>{state.user}</h1>
        <h3>Count: {state.count}</h3>
        <button onClick={()=>{setState({...state,count:state.count+1})}}>Add one +1</button>
        <button onClick={restOne}>Rest One -1</button>
        <button onClick={()=>setState({
            ...state,count:props.initialCount
        })}>Reset</button>

        <hr/>

        {posts.map((item,i)=>(
            <div key={i}>
                <div>Name:{item.name}</div>            
                <div>Body:{item.body}</div>            
                <hr/>
            </div>            
        ))}
        <button onClick={addOnePost}>Add Post</button>

    </>
  );
}

export default App;