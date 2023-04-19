import React from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';
import { useState } from 'react';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = { name, email, password };
    const validationErrors = signUpFormValidation(inputs);
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully!');

    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setConsent(checked);
    } else {
      switch (id) {
        case 'name':
          setName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name
        <input type="text" name="name" id='name' value={name} onChange={handleChange}></input>
      </label><br />
      {errors.name && <span className="error">{errors.name}</span>}
      <br />

      <label htmlFor="email">Email
        <input type="email" name="email" id='email' value={email} onChange={handleChange}></input>
      </label><br />
      {errors.email && <span className="error">{errors.email}</span>}
      <br />

      <label htmlFor="password">password
        <input type="password" name="password" id='password' value={password} onChange={handleChange}></input>
      </label><br />
      {errors.password && <span className="error">{errors.password}</span>}
      <br />
      <label htmlFor="consent">Consent
        <input type="checkbox" name="consent" id='consent' value={consent} onChange={handleChange}></input>
      </label><br />
      {errors.consent && <span className="error">{errors.consent}</span>}

      <br />
      <button id='button' type='submit'>Signup</button>
    </form>
  )
}


export default App;
