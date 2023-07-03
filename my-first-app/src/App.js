import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

// const users = [
//   {id : "ab", name : "ahsan" , age : 21},
//   {id : "bc", name : "ahmad" , age : 23},
//   {id : "cd", name : "rizwan" , age : 25},
  
// ]

function App() {
  const [userlist , setuserlist] = useState([])
  const addUserHandler = (uName , Uage) => {
    setuserlist((prevvalues)=>{
      return [...prevvalues , {name : uName , age : Uage , id : Math.random().toString()}]
    })
  }
  return (
    <div>
      {/* <h2>Ahsan ali</h2> */}
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users = {userlist}  />
    </div>
  );
}

export default App;
