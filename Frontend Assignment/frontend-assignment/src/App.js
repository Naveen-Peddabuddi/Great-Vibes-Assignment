import {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  
  const { register,reset,handleSubmit,formState,formState:{errors,isSubmitSuccessful}} = useForm()
  
  
  const onSubmit = (data)=> {
    alert("Your registration has been successfully recorded")
    console.log(data)
  }
  useEffect(()=> {
    if(formState.isSubmitSuccessful){
      reset()
    }
  },[formState,reset])
  return (
    <div className="App">
      <h1 className='heading'>
        Great Vibes
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
          <label>
            Name
          </label>
          <input placeholder='Name' type="text" {...register("Name",{required: true})}/>
          {errors.Name && <p> Name field is required*</p>}
        </div>
        <div className='form-input'>
          <label>
            Email
          </label>
          <input placeholder='Email' type="email" {...register("Email",{required:true})}/>
          {errors.Email &&<p>Email field is required*</p> }
          
        </div>
        <div className='form-input'>
          <label>
            Mobile
          </label>
          <input placeholder='Mobile' type="number" {...register("Mobile")}
          />
        </div>
        <div className='form-input'> 
          <label>
            Country
          </label>
          <input placeholder='Country' type="text" {...register("Country")}
          />
        </div>
        <div className='form-input'>
          <label>
            City
          </label>
          <input placeholder='City' type="text" {...register("City")}
          />
        </div>
        <div className='form-input'>
          <label>
            State
          </label>
          <input placeholder='State' type="text" {...register("State")}
          />
        </div>
        <div className='form-input'>
          <label>
            Message
          </label>
          <textarea placeholder='Enter Your Message' type="text" {...register("Message")}
          />
        </div>
        <div className='form-input'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
