import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const initialState = {
    id: null,
    userFirstname: 'Coder',
    userLastname:  'Byte',
    userPhone : '8885559999'
  }
  const [userState, setUserState] = useState(initialState);
  const handleUserChange = event =>{
    setUserState({
      ...userState,
      [event.target.name]: event.target.value
    });
}
    const handleSubmit = event =>{
      event.preventDefault();
      if(userState.userFirstname !== '' || userState.userLastname !=='' || userState.userPhone !==''){
        addEntryToPhoneBook(userState);
        setUserState(initialState)
      }
    }
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={userState.userFirstname} onChange={handleUserChange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={userState.userLastname}
        onChange={handleUserChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={userState.userPhone}
        onChange={handleUserChange}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}
function InformationTable(props) {
  const sortedContacts = props.users.sort((a,b) => a.userLastname.localeCompare(b.userLastname));
  const display = sortedContacts.length > 0 ? (
    sortedContacts.map((user, i) => (
      <tr key={i}>
      <td style={style.tableCell}>{user.userFirstname}</td>
      <td style={style.tableCell}>{user.userLastname}</td>
      <td style ={style.tableCell}>{user.userPhone}</td>
      </tr>
    ))
  ) : (
    <tr>
    <td colSpan={3}>&nbsp;</td>
    </tr>
  )
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>{display}</tbody>
    </table>
  );
}

 export default function Application(props) {
  const [users, setUsers] = useState([]);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers((curUser => [...curUser, user]));
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addUser} />
      <InformationTable users={users} />
    </section>
  )
 }
