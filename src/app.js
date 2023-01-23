import React,{useState,useEffect} from 'react';
import Post from './post';
import Users from './components/users';
import { MyProvider } from './context';

const App=(props)=> {


    const users=[
        {id:1, name:'Francis'},
        {id:2, name:'Steve'},
        {id:3, name:'Mark'},
    ]
    return (
        <MyProvider>
            <Users/>
        </MyProvider>
    );

    // const [state,setState]=useState({
    //     count:props.initialCount,
    //     user:"Francis"
    // });

    // let [posts, setPosts]=useState([
    //     {
    //         name:"Super awesome hooks",
    //         body:"Everything you need for your hook"
    //     }
    // ]);

    // const hey='hello';
    // const alertSomething=()=>alert("Something");

    //console.log(state);
    // useEffect(()=>{
    //     console.log(state);
    // },[state]);

    // useEffect(()=>{
    //     console.log(posts);
    // },[posts]);

    // useEffect(()=>{
    //     console.log('Mounted')
    // },[])


    // const restOne=()=>{
    //     setState(prevState=>{
    //         return {...prevState,count:prevState.count-1};
    //     });
    // }

    // const reset=()=>{
    //     setCount(props.initialCount);
    // }

//     const addOnePost=()=>{
//         let newPost={
//             name:"Sugar is bad",
//             body:"coffe is good"
//         }

//         setPosts([
//             ...posts,newPost
//         ]);
//     }

//     const removePosts=()=>{
//         setPosts([]);
//     };
//   return (
//     <>
//         <h1>{state.user}</h1>
//         <h3>Count: {state.count}</h3>
//         <button onClick={()=>{setState({...state,count:state.count+1})}}>Add one +1</button>
//         <button onClick={restOne}>Rest One -1</button>
//         <button onClick={()=>setState({
//             ...state,count:props.initialCount
//         })}>Reset</button>

//         <hr/>

//         {/* posts가 null이라면 map 을 할 아이템이 없으므로 자동으로
//         unmount가 실행된다. */}
//         {posts.map((item,i)=>(
//             <Post item={item} key={i}/>          
//         ))}
        
//         <button onClick={addOnePost}>Add Post</button>
//         <button onClick={removePosts}>Remove Posts</button>

//     </>
//   );
// }
}

export default App;