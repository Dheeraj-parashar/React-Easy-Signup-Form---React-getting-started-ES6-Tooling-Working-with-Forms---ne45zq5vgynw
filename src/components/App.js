import React from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';


const App = () => {
  
  return (
    <form>
    <label for="name">Name
      <input type="text" name="name" id='name' value=""></input>
    </label><br/><br/>
   
    <label for="email">Email
      <input type="email" name="email" id='email' value=""></input>
    </label><br/><br/>
    <label for="password">password
      <input type="password" name="password" id='password' value=""></input>
    </label><br/><br/>
    <label for="consent">Consent
      <input type="checkbox" name="consent" id='consent' value=""></input>
    </label><br/><br/>
    <button id='button' type='submit'>Signup</button>
    </form>
  )
}


export default App;
