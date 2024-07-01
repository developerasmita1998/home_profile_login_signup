import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const  Login=()=> {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [checkbox,setCheckbox]  = useState(false)
    const [data,setData] = useState([])
    const [error,setError] = useState('')
 
    const navigate  = useNavigate()
    const validate =async() =>{
        setError('')
       if(!userName){
        setError('Please enter userName ')
        return false;
       }
       if(!password){
        setError('Please enter password ')
        return false;
       }
       if(!checkbox){
        setError('Please checkout ')
        return false;
       }

       try{
        
        let url ="https://dummyjson.com/auth/login"

        const data = {
            'username':userName,
            'password':password
        }
        let options ={
            method: "POST",
            headers:{
                "Content-Type":"application/Json",
            },

             body:JSON.stringify(data)

        };
        const response = await fetch(url,options);
        if(!response.ok){
           setError('Network response was not ok');
        }
        const temp = await response.json();
        if (response?.status && response.status < 205){
        setData(temp);
        } else {
            console.log(temp.toString());


        }
       }
       catch{
        setError(error.message)
       }
      
     }



    return (
    <div className='container'>
              <div className='outer_container'>
              <div className='inner_container'>
              <h2 className='heading_signin'>Sign In</h2>   
       <div>

      <div>  <label className='label'>Email address</label></div>
        <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} 
        placeholder='Enter useName' className='input'/>
        </div>

        <div>
           <div> <label className='label'>Password</label></div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter password' className='input'/>
        </div>

        <div>
            <input type="checkbox" checked={checkbox} 
            onChange={(e)=>setCheckbox(e.target.checked)}/>
            <label className='label'>Remember me</label>
        </div>

    <button onClick={validate} className='button'>Submit</button>

      <div>{data.username}</div>
      <div>{data.email}</div>

            {error&& <label>{error}</label>}

        <div> <span className='click_me'> Click ME<span className='what'>?
            <span onClick={()=>navigate('/')} className='signup'> Signup</span></span></span></div>

</div>

    </div>

    </div>
  )
}

export default Login;