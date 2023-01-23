import React, { useEffect } from 'react'

const Post=({item})=> {


    useEffect(()=>{
        console.log('Post created');

        // ummount가 실행될때 동작하는 정리함수가 들어간다.    
        return ()=>{
            console.log('component exit');
        };
    },[]);

  return (
    <div >
        <div>Name:{item.name}</div>            
        <div>Body:{item.body}</div>            
        <hr/>
    </div>    
  );
}

export default Post;