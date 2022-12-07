import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useCallback } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import View from '../Pages/View';
import "./Button.css";

const Button_ = () => {
    const getDatafromLS = () => {
        const data = localStorage.getItem('users');
        if (data) {
          return JSON.parse(data);
        }
        else {
          return []
        }
      }
    const [open, setIsOpen] = useState(false)
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setusers] = useState(getDatafromLS()); 
    const closeIcon = <AiOutlineClose onClick={() => { setIsOpen(!open) }} />
    const handlerSubmit = useCallback((e) => {
        e.preventDefault()
        setIsOpen(!open)
    }, [])
    const handleAddUserSubmit = (e) => {
    e.preventDefault();
    let user = {
      name,
      lastName,
      email,
      password
    }
    setusers([user ,  ...users ]);
    setName('');
    setLastName('');
    setPassword('');
    setEmail('');
  }
const deleteUser = (name) => {
const filteredUser = users.filter((element, index) => {
      return element.name !== name
    })
    setusers(filteredUser)
  }
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className='form_0'>
      <Button className='button' onClick={handleClick}>Add New</Button>
      {isOpen && <div>      
     <form onSubmit={handleAddUserSubmit} className="formMembersImputs">
    <div className="container content mt-4">
    <h5> 📝 Add New User</h5>
     <div className="row border p-4">
    <div className="col-md-6">
     <div className="mb-3">
   <label htmlFor="exampleInputName" className="form-label">
  User Name
 </label>

<input
 type='text' 
placeholder='Name'
 value={name} onChange={(e) => (setName(e.target.value))}
                className="form-control"
   id="exampleInputName" 
    aria-describedby="emailHelp" />
   </div>
    <div className="mb-3">
  <label htmlFor="exampleInputLastName" className="form-label">
        lastName
  </label>
  <input
  type="lastName"
placeholder='lastName'
value={lastName}
 onChange ={e => setLastName(e.target.value)}
className="form-control"
 id="exampleInputLastName"
 />
</div>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">
Email Address
  </label>
 <input
 type="email"
placeholder='Email'
value={email}
onChange ={e => setEmail(e.target.value)}
className="form-control"
 id="exampleInputEmail1"
  aria-describedby="emailHelp"
 />
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">
Password
 </label>
<input
 type="password"
 placeholder='password'
 value={password}
 onChange ={e => setPassword(e.target.value)}
 className="form-control"
 id="exampleInputPassword1"
 />
 </div >
<button onChange={handlerSubmit} type="submit" className="form__submit-btn">Submit</button>       
  <View users={users} deleteUser={deleteUser}/>
 </div>
  <div className='col-6'>            
  </div>          
</div>       
 </div>
</form>  
 </div>}
</div>
  );
};
const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button_;