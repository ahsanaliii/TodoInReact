import React from 'react'
import './UserList.css'
import Card from '../UI/Card'


export default function UserList(props) {
  return (
    <div  className='users'>
    <Card>
      <ul>
        {props.users.map(user=> <li key={user.id}>{user.name} ({user.age} years old.) </li>)}
      </ul>
    </Card>
    </div>
  )
}
