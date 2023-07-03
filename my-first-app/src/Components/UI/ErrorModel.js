import React from 'react'
import './ErrorModel.css'
import Button from './Button'
import Card from './Card'
export default function ErrorModel(props) {
  return (
    <div className='backdrop' onClick={props.onConfirm}>
    <div className='modal'>
    <Card>
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
        <p>{props.message}</p>
      </div>
      <footer className='actions'>
        <Button onClick={props.onConfirm} >Okay</Button>
      </footer>
    </Card>
    </div>
    </div>
  )
}
