import React,{useContext} from 'react';
import { MyContext } from '../context';

const Usersitem = () => {

    const context=useContext(MyContext);
    console.log(context);
  return (
    <>
        user item
    </>
  );
}

export default Usersitem;