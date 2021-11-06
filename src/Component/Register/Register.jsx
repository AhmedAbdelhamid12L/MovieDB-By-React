import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';

export default function Register(props) {
  let [errorSubmit,setErrorSubmit] = useState('');
  let [errorValidate,setErrorValidate] = useState([]);
  let [loading,setLoading] = useState(false);
  let [user,setUser] = useState({
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''
  })
  function getUser(e)
  {
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
    // console.log(user);
  }
  function validateForm()
  {
    let schema =Joi.object(
      {
        first_name:Joi.string().alphanum().min(3).max(10).required(),
        last_name:Joi.string().alphanum().min(3).max(10).required(),
        age:Joi.number().min(16).max(60).required(),
        email:Joi.string().required().email({tlds:{allow:['com','net']}}),
        password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$'))
      }
    )
    return schema.validate(user,{abortEarly:false});
  }
  async function submitForm(e)
  {
    e.preventDefault();
    let validationResult = validateForm();
    // console.log(validationResult);
    if(validationResult.error)
    {
      setErrorValidate(validationResult.error.details);
    }else
    {
      setLoading(true);
      let {data} = await axios.post('https://routeegypt.herokuapp.com/signup',user);
      // console.log(data);
      if(data.message=='success')
      {
        props.history.push('/login');
        setLoading(false);
      }else
      {
        setErrorSubmit(data.message);
        setLoading(false);
      };
    }
  }
  return (
    <div>
      <h1>Registeration form</h1>
      <form onSubmit={submitForm}>
        <div className='my-2'>
          <label htmlFor="first_name" className='my-1'>First Name</label>
          <input onChange={getUser} type="text" name='first_name' className='form-control' />
        </div>
        <div className='my-2'>
          <label htmlFor="first_name" className='my-1'>Last Name</label>
          <input onChange={getUser} type="text" name='last_name' className='form-control' />
        </div>
        <div className='my-2'>
          <label htmlFor="first_name" className='my-1'>Age</label>
          <input onChange={getUser} type="number" name='age' className='form-control' />
        </div>
        <div className='my-2'>
          <label htmlFor="first_name" className='my-1'>Email</label>
          <input onChange={getUser} type="email" name='email' className='form-control' />
        </div>
        <div className='my-2'>
          <label htmlFor="first_name" className='my-1'>Password</label>
          <input onChange={getUser} type="password" name='password' className='form-control' />
        </div>
        {errorSubmit?'':errorValidate.map((error,index)=><div key={index} className="alert alert-danger my-4 py-1">{error.message}</div>)}
        {errorSubmit?<div className='alert alert-danger my-4 py-1'>{errorSubmit}</div>:''}
        {loading?<button className='btn btn-info my-2'><i className='fas fa-spinner fa-spin'></i></button>:<button type='submit' className='btn btn-info my-2'>Register</button>}
      </form>
    </div>
  )
}
