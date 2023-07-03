import React, {useRef, useState} from 'react'
import Card from '../UI/Card';
import './AddUser.css'
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';



export default function AddUser(props) {

  const enterusername = useRef();
  const enteruserage = useRef();

  // const [enteredusername , setenteredusername] = useState('')
  // const [enteredage , setenteredage] = useState('')
  const [error , seterror] = useState()
    const addUserHandler = (event) =>{
        event.preventDefault();
        const setenterusername = enterusername.current.value;
        const setenteruserage = enteruserage.current.value;

        if( setenterusername.trim().length === 0 || setenteruserage.trim().length === 0){
          seterror({title : "invald Input !" , message : "please enter a valid name and age (non-empty values)"})
          return;
        }

        if(+setenteruserage < 1){
          seterror({title : "invald age !" , message : "please enter a valid age  (> 0)"})
          return;
        }
        // console.log(enteredusername , enteredage)
        props.onAddUser(setenterusername , setenteruserage);
        enterusername.current.value = '';
        enteruserage.current.value = '';
        // setenteredusername('');
        // setenteredage('');
    }

    // const usernamechangehandler = (event) => {
    //   setenteredusername(event.target.value);
    // }

    // const useragechangehandler = (event) => {
    //   setenteredage(event.target.value);
    // }
    const  errorHandler = ()=>{
      seterror(null)
    }
  return (
    <div className='input'>
    {error && <ErrorModel title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
    <Card>
      <form className='input' onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id='username'  ref={enterusername} />
        <label htmlFor="age">Age (Years)</label>
        <input  type="number" id='age'  ref={enteruserage} />
        <Button type='submit' >Add User</Button>
      </form>
      {/* <UserList users = {users} /> */}
    </Card>
    </div>
  )
}
