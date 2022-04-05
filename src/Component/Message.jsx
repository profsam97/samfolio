import { Button, Grid, TextField } from '@mui/material'
import React, { useState, useReducer, useEffect } from 'react'


const initialState = {
    email: '',
    name: '',
    subject: '',
    message: '',
}
 const useReducerAction = (state, action) => {
     switch(action.type){
         case 'name' : 
            return {
                name : action.value,
                email: state.email,
                subject: state.subject,
                message: state.message 
            }
            case 'email' : 
               return {
                name : state.name,
                email: action.value,
                subject: state.subject,
                message: state.message 
            }
               case 'subject' : 
               return {
                name : state.name,
                email: state.email,
                subject: action.value,
                message: state.message 
            }
               case 'message' : 
               return {
                name : state.name,
                email: state.email,
                subject: state.subject,
                message: action.value 
            }
            default:
                return initialState;
     }
 }
const MessageItems = () => {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [subject, setSubject] = useState(false);
    const [message, setMessage] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const  [messageState, dispatch] = useReducer(useReducerAction, initialState);
    const nameHandler = event => {
        dispatch({
            type: 'name',
            value: event.target.value
        })
    }
       const emailHandler = event => {
        dispatch({
            type: 'email',
            value: event.target.value
        })
    }
       const subjectHandler = event => {
        dispatch({
            type: 'subject',
            value: event.target.value
        })
    }
       const messageHandler = event => {
        dispatch({
            type: 'message',
            value: event.target.value
        })
    }
    const submitHandler = event =>{
        
        event.preventDefault();
        if(messageState.name === ''){
            setName(true)
        }else{
           setName(false)
        }
           if(messageState.email === ''){
            setEmail(true)
        }else{
             setEmail(false)
        }
           if(messageState.subject === ''){
            setSubject(true)
        }
        else{
             setSubject(false)
        }
           if(messageState.message === ''){
            setMessage(true)
        }
         else{
             setMessage(false)
        }
        if((messageState.name !== '' && messageState.email !== ''
        && messageState.message !== '' && messageState.subject !== '')){
            console.log('sdsd')
            setIsValid(true);
        }
    
       
    }
        useEffect(() => {
 if(isValid){
        dispatch({
            type: 'name',
            value: ''
        })
         dispatch({
            type: 'email',
            value: ''
        })
         dispatch({
            type: 'subject',
            value: ''
        })
         dispatch({
            type: 'message',
            value: ''
        })
    }
        },[isValid])
  return (
      <form noValidate onSubmit={submitHandler}>
    <Grid container direction='column' spacing={2}>
           <Grid item xs={2}>        
             <TextField color='info'  required error={name} value={messageState.name} onChange={nameHandler}  fullWidth label='Your Name'/>
            </Grid>
              <Grid item xs={2}>        
             <TextField color='info'  required error={email}  value={messageState.email} onChange={emailHandler}   fullWidth label='Your Email'/>
            </Grid>
              <Grid item xs={2}>        
             <TextField required error={subject} value={messageState.subject} color='info' onChange={subjectHandler}  fullWidth label='Subject'/>
            </Grid>
            <Grid item xs={2}>        
             <TextField onChange={messageHandler} value={messageState.message} required error={message} multiline rows={4} color='info'  fullWidth label='Message'/>
            </Grid>
            <Grid item xs={2}>        
             <Button  type='submit' variant='contained' color='info'>Send Message</Button>
            </Grid>
          </Grid>
          </form>
  )
}

export default MessageItems