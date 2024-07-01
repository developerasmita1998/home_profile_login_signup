import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const  Profile=()=> {
const navigate = useNavigate()
const [firstName,setFirstName]= useState('')
const [lastName,setLastName] = useState('')
const [emailAddress,setEmailAddress] = useState('')
const [mobileNumber,setMobileNumber] = useState('')
const [dob,setDob] = useState('')
const [gender,setGender] = useState('')
const [nationality,setNationality] = useState('')
const [monthlyIncome,setMonthlyIncome] = useState('')
const [error,setError] = useState('')



const validate = async () =>{
     setError('')
     if(!firstName){
      setError('please enter firstName')
      return false;
     }
     if(!lastName){
      setError('please enter lastName')
      return false;
     }
     if(!emailAddress){
      setError('please enter emailAddress')
      return false;
     }
     if(!mobileNumber){
      setError('please enter mobileNumber')
      return false;
     }
     if(!dob){
      setError('please enter dob')
      return false;
     }
     if(!gender){
      setError('please select gender')
      return false;
     }
     if(!nationality){
      setError('please enter nationality')
      return false;
     }
     if(!monthlyIncome){
      setError('please enter monthlyIncome')
      return false;
     }
    return true; 
    }

   return (
   <div className='container'>
   <div className='inner_container_profile'>

    <div className='edit_personal_information_div'> 
   <label className='edit_personal_information'>Edit Personal Information</label>
   </div>

    <div className='first_name_last_name'>
         
   <div className='label_input_first_name'>

    <div className='first_name_label'>
     <label>First Name:</label>
    </div>


    <div>
    <input type='text'
    value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}
    className='first_name_input'
    />
    </div>
    </div> 
   

    <div className='label_input'>
    <div className='last_name_label'>

    <label>Last Name:</label>

    </div>

    <div className='last_name_input_div'>

    <input type='text'
    value={lastName}
    onChange={(e)=>setLastName(e.target.value)}
    className='last_name_input'
     />

    </div>

   </div>

   </div>

   <div className='label_profile_div'>
    <label className='label_profile'>Email Address:</label>
   </div>
   <div>
    <input type='email'
    value={emailAddress}
    onChange={(e)=>setEmailAddress(e.target.value)}
    className='input_profile'
    />
   </div>

   <div className='label_profile_div'>
    <label className='label_profile'>Mobile Number:</label>
   </div>

   <div>
    <input type='number'
    value={mobileNumber}
    onChange={(e)=>setMobileNumber(e.target.value)}
    className='input_profile'
    />
   </div>


   <div>
   <div className='label_profile_div'>
   <label className='label_profile'>Gender</label>
    </div>

    <div>
    <select value={gender} 
    onChange={(e)=>setGender(e.target.value)} className='input_profile_select'
>
      <option>Male</option>
      <option>Female</option>
    </select>
   </div>
   </div>


   <div className='label_profile_div'>
    <label className='label_profile'>Date Of Birth:</label>
   </div>

   <div>
    <input type='date'
    value={dob}
    onChange={(e)=>setDob(e.target.value)}placeholder='mm/dd/yyyy'
    className='input_profile_dob'

    />
   </div>



   <div className='label_profile_div'>
    <label className='label_profile'>Nationality:</label>
   </div>
   <div>
    <input type='text'
    value={nationality}
    onChange={(e)=>setNationality(e.target.value)}
    className='input_profile'

    />
   </div>
   <div className='label_profile_div'>
    <label className='label_profile'>Monthly Income:</label>
   </div>
   
   <div>
    <input type='text'
    value={monthlyIncome}
    onChange={(e)=>setMonthlyIncome(e.target.value)}
    className='input_profile'
    />
   </div>
   <div>
    <button  className='button_profile'onClick ={validate}>Submit</button>
  </div>
  {error&& <label>{error}</label>}
  <label className='profile_navigate'onClick={()=>navigate('/')}>profile</label>
  </div>
  </div>
  )
}
export default Profile;