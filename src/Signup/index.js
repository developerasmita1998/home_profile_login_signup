import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const  Signup=()=> {
   const navigate = useNavigate()
   const [fullName,setFullName] = useState('')
   const [emailAddress,setEmailAddress] = useState('')
   const [phoneNumber,setPhoneNumber] = useState('')
    const [selectJobType,setSelectJobType] = useState('')
    const [createPassword,setCreatePassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')
    const [error,setError] = useState('')

    const validate =()=>{
       setError('') 
       if(!fullName) {
        setError('please enter first name')
        return false;
       }
       if(!emailAddress) {
        setError('please enter emailAddress')
        return false;
       }

       if(!phoneNumber) {
        setError('please enter phoneNumber')
        return false;
       }
       if(!selectJobType) {
        setError('please enter selectJobType')
        return false;
       }
       if(!createPassword) {
        setError('please enter createPassword')
        return false;
       }
       if(!repeatPassword) {
        setError('please enter repeatPassword')
        return false;
       }
       else{
        alert('All good')
       }
      }

  return (
    <div className='container'>
      <div className='inner_container_signup'>

      <div className='header_create_account_div'>
        <label className='header_create_account'>Create Account</label>
      </div>

      <div className='get_started_header_div'>
        <label className='get_started_header'>Get started with your free account</label>
      </div>

      <div className='login_via_twitter_div'>
          <button className='login_via_twitter'>
            <FontAwesomeIcon icon={faTwitter}  className='twitter_facebook'/>
            Login via Twitter
          </button>
        </div>

      <div className='login_via_facebook_div'>
      <button className='login_via_facebook'>
      <FontAwesomeIcon icon={faFacebookF}className='twitter_facebook'/>
        Login via facebook</button>
      </div>


      <div className='wrap_or_div'>
        <div className='left_or'></div>
     <label className='label_or'>OR</label>
     <div className='right_or'></div>
      </div>



      <div className='input_group'>
          <div className='input_icon_div'>
          <FontAwesomeIcon icon={faUser} className='input_icon'
          />
          </div>
          <input
            type='text'
            placeholder='Full name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='input_2'
          />
          </div>



         <div className='input_group'>
         <div className='input_icon_div'>
        <FontAwesomeIcon icon={faEnvelope}className='input_icon'  
      />
      </div>
        <input
        type='email'
        placeholder='Email address'
        value={emailAddress}
        onChange={(e)=>setEmailAddress(e.target.value)}
        className='input_2'

        />
      </div>

      <div className='input_group_1'>
       <div className='input_icon_div_1'>
      <FontAwesomeIcon icon={faPhone} className='input_icon'/>
      </div>
      <div>
      <input
        type='number'
        placeholder='+91'
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
         className='input_4'
        />
        </div>


        <div>
        <input
        type='number'
        placeholder='Phone number'
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        className='input_3'

        />
        </div>
      </div>


      <div className='input_group'>
      <div className='input_icon_div'>
      <FontAwesomeIcon icon={faKeyboard} className='input_icon'/>
      </div>
      <select value={selectJobType} 
      onChange={(e)=>setSelectJobType(e.target.value)} className='select_an_option'>
        <option value="option0">Select job type</option>
        <option value="option1">Software Developer</option>
        </select>
      </div>



        <div className='input_group'>
        <div className='input_icon_div'>
      <FontAwesomeIcon icon={faLock}className='input_icon'/>
      </div>
        <input
        type='password'
        placeholder='Create password'
        value={createPassword}
        onChange={(e)=>setCreatePassword(e.target.value)}
        className='input_2'
/>
      </div>

      <div className='input_group'>
      <div className='input_icon_div'> 
      <FontAwesomeIcon icon={faLock}className='input_icon' />
      </div>
        <input
        type='password'
        placeholder='Repeat password'
        value={repeatPassword}
        onChange={(e)=>setRepeatPassword(e.target.value)}
        className='input_2'

        />
      </div>

      <div className='button_signup_div'>
        <button onClick={validate} className='button_signup'>Create Account</button>
      </div>


      
      {error&&<label>{error}</label>}

      <span className='footer_signup'>Have an account
        <span className='footer_signup1'>?</span><span 
        className='footer_signup2'onClick={()=>navigate('/')}>Log in</span></span>

      </div>
      </div>
 
  )
}

export default Signup;